(ns adzerk.boot-reload.init616 (:require [adzerk.boot-reload.client :as client] paren-soup.core))
(client/connect "ws://localhost:52671" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (paren-soup.core/init-all))})