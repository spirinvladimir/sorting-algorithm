(ns adzerk.boot-reload.client
  (:require
   [adzerk.boot-reload.websocket :as ws]
   [adzerk.boot-reload.reload    :as rl]
   [adzerk.boot-reload.display   :as d]
   [adzerk.boot-reload.connection :refer [send-message! ws-conn alive?]]
   [clojure.browser.net          :as net]
   [clojure.browser.event        :as event]
   [cljs.reader                  :as reader]
   [goog.net.jsloader            :as jsloader])
  (:import
   goog.Uri))

;; Thanks, lein-figwheel & lively!
(defn patch-goog-base! []
  (set! (.-provide js/goog) (.-exportPath_ js/goog))
  (set! (.-CLOSURE_IMPORT_SCRIPT (.-global js/goog)) (fn [file]
                                                       (when (.inHtmlDocument_ js/goog)
                                                         (jsloader/load file)))))

(defn resolve-url [url ws-host]
  (let [passed-uri (Uri. url)
        protocol   (.getScheme passed-uri)
        host       (or ws-host
                       (.-hostname (.-location js/window))
                       (do (js/console.warn "Both :ws-host and window.location.hostname are empty."
                                            "This might happen if you are accessing the files directly instead of over http."
                                            "You should probably set :ws-host manually.")
                           nil))
        port       (.getPort passed-uri)]
    (str protocol "://" host ":" port)))

(defmulti handle (fn [msg opts] (:type msg)))

(defmethod handle :reload
  [{:keys [files]} opts]
  (rl/reload files opts))

(defmethod handle :visual
  [state opts]
  (when (rl/has-dom?)
    (d/display state opts)))

(defn connect [url & [opts]]
  (when-not (alive?)
    (let [conn (ws/websocket-connection)]
      (patch-goog-base!)
      (reset! ws-conn conn)

      (event/listen conn :opened
        (fn [evt]
          (send-message! {:type :set-protocol
                          :protocol (.. js/window -location -protocol)})
          (.info js/console "Reload websocket connected.")))

      (event/listen conn :message
        (fn [evt]
          (let [msg (reader/read-string (.-message evt))]
            (handle msg opts))))

      (event/listen conn :closed
        (fn [evt]
          (reset! ws-conn nil)
          (.info js/console "Reload websocket connection closed.")))

      (event/listen conn :error
        (fn [evt]
          (.error js/console "Reload websocket error:" evt)))

      (net/connect conn (resolve-url url (:ws-host opts))))))
