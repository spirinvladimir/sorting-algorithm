// Compiled by ClojureScript 1.9.671 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__13174_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__13174_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__4657__auto__)){
var changed__$1 = temp__4657__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__13175 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__13176 = null;
var count__13177 = (0);
var i__13178 = (0);
while(true){
if((i__13178 < count__13177)){
var s = cljs.core._nth.call(null,chunk__13176,i__13178);
var temp__4657__auto___13179 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___13179)){
var sheet_13180 = temp__4657__auto___13179;
var temp__4657__auto___13181__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_13180.href,changed);
if(cljs.core.truth_(temp__4657__auto___13181__$1)){
var href_uri_13182 = temp__4657__auto___13181__$1;
sheet_13180.ownerNode.href = href_uri_13182.makeUnique().toString();
} else {
}
} else {
}

var G__13183 = seq__13175;
var G__13184 = chunk__13176;
var G__13185 = count__13177;
var G__13186 = (i__13178 + (1));
seq__13175 = G__13183;
chunk__13176 = G__13184;
count__13177 = G__13185;
i__13178 = G__13186;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13175);
if(temp__4657__auto__){
var seq__13175__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13175__$1)){
var c__8105__auto__ = cljs.core.chunk_first.call(null,seq__13175__$1);
var G__13187 = cljs.core.chunk_rest.call(null,seq__13175__$1);
var G__13188 = c__8105__auto__;
var G__13189 = cljs.core.count.call(null,c__8105__auto__);
var G__13190 = (0);
seq__13175 = G__13187;
chunk__13176 = G__13188;
count__13177 = G__13189;
i__13178 = G__13190;
continue;
} else {
var s = cljs.core.first.call(null,seq__13175__$1);
var temp__4657__auto___13191__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___13191__$1)){
var sheet_13192 = temp__4657__auto___13191__$1;
var temp__4657__auto___13193__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_13192.href,changed);
if(cljs.core.truth_(temp__4657__auto___13193__$2)){
var href_uri_13194 = temp__4657__auto___13193__$2;
sheet_13192.ownerNode.href = href_uri_13194.makeUnique().toString();
} else {
}
} else {
}

var G__13195 = cljs.core.next.call(null,seq__13175__$1);
var G__13196 = null;
var G__13197 = (0);
var G__13198 = (0);
seq__13175 = G__13195;
chunk__13176 = G__13196;
count__13177 = G__13197;
i__13178 = G__13198;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__13199 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__13200 = null;
var count__13201 = (0);
var i__13202 = (0);
while(true){
if((i__13202 < count__13201)){
var s = cljs.core._nth.call(null,chunk__13200,i__13202);
var temp__4657__auto___13203 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___13203)){
var image_13204 = temp__4657__auto___13203;
var temp__4657__auto___13205__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_13204.src,changed);
if(cljs.core.truth_(temp__4657__auto___13205__$1)){
var href_uri_13206 = temp__4657__auto___13205__$1;
image_13204.src = href_uri_13206.makeUnique().toString();
} else {
}
} else {
}

var G__13207 = seq__13199;
var G__13208 = chunk__13200;
var G__13209 = count__13201;
var G__13210 = (i__13202 + (1));
seq__13199 = G__13207;
chunk__13200 = G__13208;
count__13201 = G__13209;
i__13202 = G__13210;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13199);
if(temp__4657__auto__){
var seq__13199__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13199__$1)){
var c__8105__auto__ = cljs.core.chunk_first.call(null,seq__13199__$1);
var G__13211 = cljs.core.chunk_rest.call(null,seq__13199__$1);
var G__13212 = c__8105__auto__;
var G__13213 = cljs.core.count.call(null,c__8105__auto__);
var G__13214 = (0);
seq__13199 = G__13211;
chunk__13200 = G__13212;
count__13201 = G__13213;
i__13202 = G__13214;
continue;
} else {
var s = cljs.core.first.call(null,seq__13199__$1);
var temp__4657__auto___13215__$1 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___13215__$1)){
var image_13216 = temp__4657__auto___13215__$1;
var temp__4657__auto___13217__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_13216.src,changed);
if(cljs.core.truth_(temp__4657__auto___13217__$2)){
var href_uri_13218 = temp__4657__auto___13217__$2;
image_13216.src = href_uri_13218.makeUnique().toString();
} else {
}
} else {
}

var G__13219 = cljs.core.next.call(null,seq__13199__$1);
var G__13220 = null;
var G__13221 = (0);
var G__13222 = (0);
seq__13199 = G__13219;
chunk__13200 = G__13220;
count__13201 = G__13221;
i__13202 = G__13222;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__13225){
var map__13226 = p__13225;
var map__13226__$1 = ((((!((map__13226 == null)))?((((map__13226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13226):map__13226);
var on_jsload = cljs.core.get.call(null,map__13226__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__13226,map__13226__$1,on_jsload){
return (function (p1__13223_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__13223_SHARP_,".js");
});})(map__13226,map__13226__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__13226,map__13226__$1,on_jsload){
return (function (p1__13224_SHARP_){
return goog.Uri.parse(p1__13224_SHARP_).makeUnique();
});})(js_files,map__13226,map__13226__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__13226,map__13226__$1,on_jsload){
return (function() { 
var G__13228__delegate = function (_){
return on_jsload.call(null);
};
var G__13228 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__13229__i = 0, G__13229__a = new Array(arguments.length -  0);
while (G__13229__i < G__13229__a.length) {G__13229__a[G__13229__i] = arguments[G__13229__i + 0]; ++G__13229__i;}
  _ = new cljs.core.IndexedSeq(G__13229__a,0,null);
} 
return G__13228__delegate.call(this,_);};
G__13228.cljs$lang$maxFixedArity = 0;
G__13228.cljs$lang$applyTo = (function (arglist__13230){
var _ = cljs.core.seq(arglist__13230);
return G__13228__delegate(_);
});
G__13228.cljs$core$IFn$_invoke$arity$variadic = G__13228__delegate;
return G__13228;
})()
;})(js_files,map__13226,map__13226__$1,on_jsload))
,((function (js_files,map__13226,map__13226__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__13226,map__13226__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__13231_13235 = cljs.core.seq.call(null,things_to_log);
var chunk__13232_13236 = null;
var count__13233_13237 = (0);
var i__13234_13238 = (0);
while(true){
if((i__13234_13238 < count__13233_13237)){
var t_13239 = cljs.core._nth.call(null,chunk__13232_13236,i__13234_13238);
console.log(t_13239);

var G__13240 = seq__13231_13235;
var G__13241 = chunk__13232_13236;
var G__13242 = count__13233_13237;
var G__13243 = (i__13234_13238 + (1));
seq__13231_13235 = G__13240;
chunk__13232_13236 = G__13241;
count__13233_13237 = G__13242;
i__13234_13238 = G__13243;
continue;
} else {
var temp__4657__auto___13244 = cljs.core.seq.call(null,seq__13231_13235);
if(temp__4657__auto___13244){
var seq__13231_13245__$1 = temp__4657__auto___13244;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13231_13245__$1)){
var c__8105__auto___13246 = cljs.core.chunk_first.call(null,seq__13231_13245__$1);
var G__13247 = cljs.core.chunk_rest.call(null,seq__13231_13245__$1);
var G__13248 = c__8105__auto___13246;
var G__13249 = cljs.core.count.call(null,c__8105__auto___13246);
var G__13250 = (0);
seq__13231_13235 = G__13247;
chunk__13232_13236 = G__13248;
count__13233_13237 = G__13249;
i__13234_13238 = G__13250;
continue;
} else {
var t_13251 = cljs.core.first.call(null,seq__13231_13245__$1);
console.log(t_13251);

var G__13252 = cljs.core.next.call(null,seq__13231_13245__$1);
var G__13253 = null;
var G__13254 = (0);
var G__13255 = (0);
seq__13231_13235 = G__13252;
chunk__13232_13236 = G__13253;
count__13233_13237 = G__13254;
i__13234_13238 = G__13255;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__13256_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13256_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__13257 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__13257);

adzerk.boot_reload.reload.reload_css.call(null,G__13257);

adzerk.boot_reload.reload.reload_img.call(null,G__13257);

return G__13257;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map