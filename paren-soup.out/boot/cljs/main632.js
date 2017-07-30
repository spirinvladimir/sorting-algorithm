// Compiled by ClojureScript 1.9.671 {}
goog.provide('boot.cljs.main632');
goog.require('cljs.core');
goog.require('adzerk.boot_reload.init616');
goog.require('cljs.spec.test.alpha');
goog.require('paren_soup.core_spec');
var opts16190_16196 = null;
cljs.core.reduce.call(null,((function (opts16190_16196){
return (function (ret__16084__auto__,p__16191){
var vec__16192 = p__16191;
var ___16085__auto__ = cljs.core.nth.call(null,vec__16192,(0),null);
var f__16086__auto__ = cljs.core.nth.call(null,vec__16192,(1),null);
var sym__16087__auto__ = f__16086__auto__.call(null);
var G__16195 = ret__16084__auto__;
if(cljs.core.truth_(sym__16087__auto__)){
return cljs.core.conj.call(null,G__16195,sym__16087__auto__);
} else {
return G__16195;
}
});})(opts16190_16196))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by.call(null,cljs.core.first,cljs.core.filter.call(null,((function (opts16190_16196){
return (function (p1__16083__16088__auto__){
return cljs.spec.test.alpha.instrumentable_syms.call(null,opts16190_16196).call(null,cljs.core.first.call(null,p1__16083__16088__auto__));
});})(opts16190_16196))
,cljs.core.zipmap.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Symbol("paren-soup.instarepl","elems->locations","paren-soup.instarepl/elems->locations",1311763808,null),new cljs.core.Symbol("paren-soup.core","update-edit-history!","paren-soup.core/update-edit-history!",-1763071615,null),new cljs.core.Symbol("mistakes-were-made.core","undo!","mistakes-were-made.core/undo!",1887179201,null),new cljs.core.Symbol("html-soup.core","structurize-hiccup","html-soup.core/structurize-hiccup",108000705,null),new cljs.core.Symbol("paren-soup.dom","get-nearest-ns","paren-soup.dom/get-nearest-ns",-1137240351,null),new cljs.core.Symbol("paren-soup.core","refresh-console-content!","paren-soup.core/refresh-console-content!",-403296447,null),new cljs.core.Symbol("tag-soup.core","code->tags","tag-soup.core/code->tags",-176544799,null),new cljs.core.Symbol("cross-parinfer.core","indent-mode","cross-parinfer.core/indent-mode",-397726,null),new cljs.core.Symbol("paren-soup.core","add-newline","paren-soup.core/add-newline",293901186,null),new cljs.core.Symbol("html-soup.core","tag->html","html-soup.core/tag->html",-1088451069,null),new cljs.core.Symbol("paren-soup.instarepl","results->html","paren-soup.instarepl/results->html",-1202538749,null),new cljs.core.Symbol("html-soup.core","escape-html-str","html-soup.core/escape-html-str",1605585731,null),new cljs.core.Symbol("mistakes-were-made.core","redo!","mistakes-were-made.core/redo!",2070860932,null),new cljs.core.Symbol("paren-soup.dom","get-focused-elem","paren-soup.dom/get-focused-elem",787196068,null),new cljs.core.Symbol("paren-soup.instarepl","get-collections","paren-soup.instarepl/get-collections",-748052156,null),new cljs.core.Symbol("paren-soup.dom","coll-node?","paren-soup.dom/coll-node?",181056100,null),new cljs.core.Symbol("paren-soup.console","up!","paren-soup.console/up!",1551321286,null),new cljs.core.Symbol("paren-soup.instarepl","create-compiler-fn","paren-soup.instarepl/create-compiler-fn",-859233946,null),new cljs.core.Symbol("paren-soup.core","init-state","paren-soup.core/init-state",-462504602,null),new cljs.core.Symbol("mistakes-were-made.core","get-previous-state","mistakes-were-made.core/get-previous-state",683005574,null),new cljs.core.Symbol("cross-parinfer.core","mode","cross-parinfer.core/mode",-1687850873,null),new cljs.core.Symbol("html-soup.core","line->hiccup","html-soup.core/line->hiccup",-698658617,null),new cljs.core.Symbol("paren-soup.core","add-parinfer-after-console-start","paren-soup.core/add-parinfer-after-console-start",-683564825,null),new cljs.core.Symbol("paren-soup.dom","set-cursor-position!","paren-soup.dom/set-cursor-position!",991772999,null),new cljs.core.Symbol("tag-soup.core","forward-indent-for-line","tag-soup.core/forward-indent-for-line",-218362329,null),new cljs.core.Symbol("paren-soup.dom","get-completion-info","paren-soup.dom/get-completion-info",-1562086489,null),new cljs.core.Symbol("paren-soup.dom","error-node?","paren-soup.dom/error-node?",-1045068760,null),new cljs.core.Symbol("paren-soup.core","refresh-numbers!","paren-soup.core/refresh-numbers!",1773110728,null),new cljs.core.Symbol("html-soup.core","tag->hiccup","html-soup.core/tag->hiccup",2135645800,null),new cljs.core.Symbol("paren-soup.core","init-all","paren-soup.core/init-all",-614036470,null),new cljs.core.Symbol("html-soup.core","parse-lines","html-soup.core/parse-lines",-1030482710,null),new cljs.core.Symbol("paren-soup.dom","common-ancestor","paren-soup.dom/common-ancestor",-1231020694,null),new cljs.core.Symbol("cross-parinfer.core","add-parinfer","cross-parinfer.core/add-parinfer",2072882890,null),new cljs.core.Symbol("html-soup.core","escape-html-char","html-soup.core/escape-html-char",277593866,null),new cljs.core.Symbol("paren-soup.core","add-parinfer","paren-soup.core/add-parinfer",165482346,null),new cljs.core.Symbol("mistakes-were-made.core","get-next-state","mistakes-were-made.core/get-next-state",-972244436,null),new cljs.core.Symbol("html-soup.core","code->html","html-soup.core/code->html",981911116,null),new cljs.core.Symbol("tag-soup.core","indent-for-line","tag-soup.core/indent-for-line",-2080553204,null),new cljs.core.Symbol("tag-soup.core","adjust-indent","tag-soup.core/adjust-indent",1002033261,null),new cljs.core.Symbol("paren-soup.dom","get-completion-context","paren-soup.dom/get-completion-context",1500353837,null),new cljs.core.Symbol("paren-soup.console","get-console-start","paren-soup.console/get-console-start",1377116717,null),new cljs.core.Symbol("paren-soup.console","update-console-start!","paren-soup.console/update-console-start!",-1053112723,null),new cljs.core.Symbol("paren-soup.dom","top-level?","paren-soup.dom/top-level?",1216457070,null),new cljs.core.Symbol("mistakes-were-made.core","can-redo?","mistakes-were-made.core/can-redo?",767188398,null),new cljs.core.Symbol("paren-soup.core","refresh-instarepl!","paren-soup.core/refresh-instarepl!",-2013374002,null),new cljs.core.Symbol("cross-parinfer.core","update-indent","cross-parinfer.core/update-indent",-1612843218,null),new cljs.core.Symbol("paren-soup.core","hide-error-messages!","paren-soup.core/hide-error-messages!",1705110960,null),new cljs.core.Symbol("paren-soup.core","init","paren-soup.core/init",367142576,null),new cljs.core.Symbol("html-soup.core","line->html","html-soup.core/line->html",-520780751,null),new cljs.core.Symbol("paren-soup.core","key-name?","paren-soup.core/key-name?",-300012303,null),new cljs.core.Symbol("paren-soup.core","show-error-message!","paren-soup.core/show-error-message!",341593393,null),new cljs.core.Symbol("paren-soup.dom","get-selection","paren-soup.dom/get-selection",269759217,null),new cljs.core.Symbol("paren-soup.console","get-next-line","paren-soup.console/get-next-line",1484568401,null),new cljs.core.Symbol("paren-soup.core","add-event-listeners!","paren-soup.core/add-event-listeners!",680626065,null),new cljs.core.Symbol("mistakes-were-made.core","can-undo?","mistakes-were-made.core/can-undo?",774742929,null),new cljs.core.Symbol("cross-parinfer.core","paren-mode","cross-parinfer.core/paren-mode",345019313,null),new cljs.core.Symbol("cross-parinfer.core","split-lines","cross-parinfer.core/split-lines",1036720626,null),new cljs.core.Symbol("mistakes-were-made.core","update-edit-history!","mistakes-were-made.core/update-edit-history!",1753519698,null),new cljs.core.Symbol("paren-soup.console","create-console-history","paren-soup.console/create-console-history",395033586,null),new cljs.core.Symbol("paren-soup.dom","get-parents","paren-soup.dom/get-parents",-887388109,null),new cljs.core.Symbol("html-soup.core","split-lines","html-soup.core/split-lines",-1136177613,null),new cljs.core.Symbol("tag-soup.core","get-tags-before-line","tag-soup.core/get-tags-before-line",-1391345869,null),new cljs.core.Symbol("cross-parinfer.core","add-indent","cross-parinfer.core/add-indent",-1878418477,null),new cljs.core.Symbol("tag-soup.core","read-safe","tag-soup.core/read-safe",-54831082,null),new cljs.core.Symbol("tag-soup.core","unwrap-value","tag-soup.core/unwrap-value",-316132874,null),new cljs.core.Symbol("paren-soup.instarepl","collection->content","paren-soup.instarepl/collection->content",-601202026,null),new cljs.core.Symbol("html-soup.core","line->segments","html-soup.core/line->segments",-1934960169,null),new cljs.core.Symbol("paren-soup.core","rainbow-delimiters","paren-soup.core/rainbow-delimiters",-412809545,null),new cljs.core.Symbol("paren-soup.core","refresh-content-element!","paren-soup.core/refresh-content-element!",625177656,null),new cljs.core.Symbol("cross-parinfer.core","position->row-col","cross-parinfer.core/position->row-col",1658028568,null),new cljs.core.Symbol("cross-parinfer.core","indent-count","cross-parinfer.core/indent-count",1810397752,null),new cljs.core.Symbol("mistakes-were-made.core","get-current-state","mistakes-were-made.core/get-current-state",-493362184,null),new cljs.core.Symbol("html-soup.core","code->hiccup","html-soup.core/code->hiccup",1954022777,null),new cljs.core.Symbol("tag-soup.core","back-indent-for-line","tag-soup.core/back-indent-for-line",112267097,null),new cljs.core.Symbol("paren-soup.core","create-editor","paren-soup.core/create-editor",142430650,null),new cljs.core.Symbol("paren-soup.dom","get-cursor-position","paren-soup.dom/get-cursor-position",699663994,null),new cljs.core.Symbol("paren-soup.core","prevent-default?","paren-soup.core/prevent-default?",1616087674,null),new cljs.core.Symbol("cross-parinfer.core","row-col->position","cross-parinfer.core/row-col->position",-791082118,null),new cljs.core.Symbol("paren-soup.core","line-numbers","paren-soup.core/line-numbers",-1027291877,null),new cljs.core.Symbol("paren-soup.dom","text-node?","paren-soup.dom/text-node?",-1695894821,null),new cljs.core.Symbol("paren-soup.dom","get-focused-top-level","paren-soup.dom/get-focused-top-level",-1273714693,null),new cljs.core.Symbol("mistakes-were-made.core","create-edit-history","mistakes-were-made.core/create-edit-history",-1455321956,null),new cljs.core.Symbol("paren-soup.console","get-previous-line","paren-soup.console/get-previous-line",889454460,null),new cljs.core.Symbol("paren-soup.core","refresh-content!","paren-soup.core/refresh-content!",-351979524,null),new cljs.core.Symbol("tag-soup.core","tag-map","tag-soup.core/tag-map",-949798691,null),new cljs.core.Symbol("paren-soup.dom","get-parent","paren-soup.dom/get-parent",-984038819,null),new cljs.core.Symbol("paren-soup.core","post-refresh-content!","paren-soup.core/post-refresh-content!",854477565,null),new cljs.core.Symbol("paren-soup.dom","get-focused-form","paren-soup.dom/get-focused-form",-1212860994,null),new cljs.core.Symbol("mistakes-were-made.core","update-cursor-position!","mistakes-were-made.core/update-cursor-position!",-890530338,null),new cljs.core.Symbol("paren-soup.console","update-console-history!","paren-soup.console/update-console-history!",-1740192193,null),new cljs.core.Symbol("paren-soup.console","down!","paren-soup.console/down!",-1340094817,null),new cljs.core.Symbol("paren-soup.core","update-highlight!","paren-soup.core/update-highlight!",325886879,null)], true),cljs.core.PersistentVector.fromArray([((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.instarepl.elems__GT_locations,new cljs.core.Var(function(){return paren_soup.instarepl.elems__GT_locations;},new cljs.core.Symbol("paren-soup.instarepl","elems->locations","paren-soup.instarepl/elems->locations",1311763808,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.instarepl","paren-soup.instarepl",-2048305967,null),new cljs.core.Symbol(null,"elems->locations","elems->locations",-2125043142,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/instarepl.cljs",23,1,8,8,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elems","elems",1093040705,null),new cljs.core.Symbol(null,"top-offset","top-offset",-1418619524,null)], null)),"Returns the location of each elem.",(cljs.core.truth_(paren_soup.instarepl.elems__GT_locations)?paren_soup.instarepl.elems__GT_locations.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.instarepl.elems__GT_locations = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.instarepl","elems->locations","paren-soup.instarepl/elems->locations",1311763808,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.core.update_edit_history_BANG_,new cljs.core.Var(function(){return paren_soup.core.update_edit_history_BANG_;},new cljs.core.Symbol("paren-soup.core","update-edit-history!","paren-soup.core/update-edit-history!",-1763071615,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.core","paren-soup.core",1608578978,null),new cljs.core.Symbol(null,"update-edit-history!","update-edit-history!",-218208810,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/core.cljs",27,1,225,225,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edit-history","edit-history",1303616998,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),null,(cljs.core.truth_(paren_soup.core.update_edit_history_BANG_)?paren_soup.core.update_edit_history_BANG_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.core.update_edit_history_BANG_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.core","update-edit-history!","paren-soup.core/update-edit-history!",-1763071615,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,mistakes_were_made.core.undo_BANG_,new cljs.core.Var(function(){return mistakes_were_made.core.undo_BANG_;},new cljs.core.Symbol("mistakes-were-made.core","undo!","mistakes-were-made.core/undo!",1887179201,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mistakes-were-made.core","mistakes-were-made.core",1671803951,null),new cljs.core.Symbol(null,"undo!","undo!",-274504379,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/mistakes_were_made/core.cljc",12,1,57,57,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edit-history","edit-history",1303616998,null)], null)),"Changes the current state and returns the previous state from edit-history, or nil if there is none.",(cljs.core.truth_(mistakes_were_made.core.undo_BANG_)?mistakes_were_made.core.undo_BANG_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
mistakes_were_made.core.undo_BANG_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("mistakes-were-made.core","undo!","mistakes-were-made.core/undo!",1887179201,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,html_soup.core.structurize_hiccup,new cljs.core.Var(function(){return html_soup.core.structurize_hiccup;},new cljs.core.Symbol("html-soup.core","structurize-hiccup","html-soup.core/structurize-hiccup",108000705,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"html-soup.core","html-soup.core",-1112400347,null),new cljs.core.Symbol(null,"structurize-hiccup","structurize-hiccup",-2004898979,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/html_soup/core.cljc",25,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flat-hiccup","flat-hiccup",-1008064649,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flat-hiccup","flat-hiccup",-1008064649,null),new cljs.core.Symbol(null,"structured-hiccup","structured-hiccup",1308575075,null)], null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flat-hiccup","flat-hiccup",-1008064649,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flat-hiccup","flat-hiccup",-1008064649,null),new cljs.core.Symbol(null,"structured-hiccup","structured-hiccup",1308575075,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,138,138,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flat-hiccup","flat-hiccup",-1008064649,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flat-hiccup","flat-hiccup",-1008064649,null),new cljs.core.Symbol(null,"structured-hiccup","structured-hiccup",1308575075,null)], null)),"Takes a flat list of Hiccup-compatible data and adds structure to it.",(cljs.core.truth_(html_soup.core.structurize_hiccup)?html_soup.core.structurize_hiccup.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
html_soup.core.structurize_hiccup = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("html-soup.core","structurize-hiccup","html-soup.core/structurize-hiccup",108000705,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.dom.get_nearest_ns,new cljs.core.Var(function(){return paren_soup.dom.get_nearest_ns;},new cljs.core.Symbol("paren-soup.dom","get-nearest-ns","paren-soup.dom/get-nearest-ns",-1137240351,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.dom","paren-soup.dom",1782176936,null),new cljs.core.Symbol(null,"get-nearest-ns","get-nearest-ns",-408229741,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/dom.cljs",21,1,100,100,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null)),null,(cljs.core.truth_(paren_soup.dom.get_nearest_ns)?paren_soup.dom.get_nearest_ns.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.dom.get_nearest_ns = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.dom","get-nearest-ns","paren-soup.dom/get-nearest-ns",-1137240351,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.core.refresh_console_content_BANG_,new cljs.core.Var(function(){return paren_soup.core.refresh_console_content_BANG_;},new cljs.core.Symbol("paren-soup.core","refresh-console-content!","paren-soup.core/refresh-console-content!",-403296447,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.core","paren-soup.core",1608578978,null),new cljs.core.Symbol(null,"refresh-console-content!","refresh-console-content!",-1144392810,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/core.cljs",31,1,167,167,cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content","content",1656364751,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"console-start-num","console-start-num",837326571,null),new cljs.core.Symbol(null,"clj?","clj?",-541593408,null)], null)),null,(cljs.core.truth_(paren_soup.core.refresh_console_content_BANG_)?paren_soup.core.refresh_console_content_BANG_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.core.refresh_console_content_BANG_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.core","refresh-console-content!","paren-soup.core/refresh-console-content!",-403296447,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,tag_soup.core.code__GT_tags,new cljs.core.Var(function(){return tag_soup.core.code__GT_tags;},new cljs.core.Symbol("tag-soup.core","code->tags","tag-soup.core/code->tags",-176544799,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tag-soup.core","tag-soup.core",-552159523,null),new cljs.core.Symbol(null,"code->tags","code->tags",1618459810,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/tag_soup/core.cljc",17,1,110,110,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null)], null)),"Returns the tags for the given string containing code.",(cljs.core.truth_(tag_soup.core.code__GT_tags)?tag_soup.core.code__GT_tags.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
tag_soup.core.code__GT_tags = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("tag-soup.core","code->tags","tag-soup.core/code->tags",-176544799,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,cross_parinfer.core.indent_mode,new cljs.core.Var(function(){return cross_parinfer.core.indent_mode;},new cljs.core.Symbol("cross-parinfer.core","indent-mode","cross-parinfer.core/indent-mode",-397726,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cross-parinfer.core","cross-parinfer.core",-1520890119,null),new cljs.core.Symbol(null,"indent-mode","indent-mode",-916621227,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/cross_parinfer/core.cljc",18,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),4,new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"line","line",1852876762,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"line","line",1852876762,null),new cljs.core.Symbol(null,"preview-cursor-scope?","preview-cursor-scope?",-423832097,null)], null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"line","line",1852876762,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"line","line",1852876762,null),new cljs.core.Symbol(null,"preview-cursor-scope?","preview-cursor-scope?",-423832097,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,21,21,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"line","line",1852876762,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"line","line",1852876762,null),new cljs.core.Symbol(null,"preview-cursor-scope?","preview-cursor-scope?",-423832097,null)], null)),"Runs indent mode on the given text.",(cljs.core.truth_(cross_parinfer.core.indent_mode)?cross_parinfer.core.indent_mode.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
cross_parinfer.core.indent_mode = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("cross-parinfer.core","indent-mode","cross-parinfer.core/indent-mode",-397726,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.core.add_newline,new cljs.core.Var(function(){return paren_soup.core.add_newline;},new cljs.core.Symbol("paren-soup.core","add-newline","paren-soup.core/add-newline",293901186,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.core","paren-soup.core",1608578978,null),new cljs.core.Symbol(null,"add-newline","add-newline",1307094997,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/core.cljs",18,1,202,202,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null)),null,(cljs.core.truth_(paren_soup.core.add_newline)?paren_soup.core.add_newline.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.core.add_newline = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.core","add-newline","paren-soup.core/add-newline",293901186,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,html_soup.core.tag__GT_html,new cljs.core.Var(function(){return html_soup.core.tag__GT_html;},new cljs.core.Symbol("html-soup.core","tag->html","html-soup.core/tag->html",-1088451069,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"html-soup.core","html-soup.core",-1112400347,null),new cljs.core.Symbol(null,"tag->html","tag->html",219145399,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/html_soup/core.cljc",16,1,32,32,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null)], null)),"Returns an HTML string for the given tag description.",(cljs.core.truth_(html_soup.core.tag__GT_html)?html_soup.core.tag__GT_html.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
html_soup.core.tag__GT_html = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("html-soup.core","tag->html","html-soup.core/tag->html",-1088451069,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.instarepl.results__GT_html,new cljs.core.Var(function(){return paren_soup.instarepl.results__GT_html;},new cljs.core.Symbol("paren-soup.instarepl","results->html","paren-soup.instarepl/results->html",-1202538749,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.instarepl","paren-soup.instarepl",-2048305967,null),new cljs.core.Symbol(null,"results->html","results->html",-519361463,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/instarepl.cljs",20,1,19,19,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"results","results",506361414,null),new cljs.core.Symbol(null,"locations","locations",1205054967,null)], null)),"Returns HTML for the given eval results.",(cljs.core.truth_(paren_soup.instarepl.results__GT_html)?paren_soup.instarepl.results__GT_html.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.instarepl.results__GT_html = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.instarepl","results->html","paren-soup.instarepl/results->html",-1202538749,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,html_soup.core.escape_html_str,new cljs.core.Var(function(){return html_soup.core.escape_html_str;},new cljs.core.Symbol("html-soup.core","escape-html-str","html-soup.core/escape-html-str",1605585731,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"html-soup.core","html-soup.core",-1112400347,null),new cljs.core.Symbol(null,"escape-html-str","escape-html-str",-912072489,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/html_soup/core.cljc",22,1,11,11,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null)),"Escapes an HTML string",(cljs.core.truth_(html_soup.core.escape_html_str)?html_soup.core.escape_html_str.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
html_soup.core.escape_html_str = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("html-soup.core","escape-html-str","html-soup.core/escape-html-str",1605585731,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,mistakes_were_made.core.redo_BANG_,new cljs.core.Var(function(){return mistakes_were_made.core.redo_BANG_;},new cljs.core.Symbol("mistakes-were-made.core","redo!","mistakes-were-made.core/redo!",2070860932,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mistakes-were-made.core","mistakes-were-made.core",1671803951,null),new cljs.core.Symbol(null,"redo!","redo!",-515252216,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/mistakes_were_made/core.cljc",12,1,64,64,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edit-history","edit-history",1303616998,null)], null)),"Changes the current state and returns the next state from edit-history, or nil if there is none.",(cljs.core.truth_(mistakes_were_made.core.redo_BANG_)?mistakes_were_made.core.redo_BANG_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
mistakes_were_made.core.redo_BANG_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("mistakes-were-made.core","redo!","mistakes-were-made.core/redo!",2070860932,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.dom.get_focused_elem,new cljs.core.Var(function(){return paren_soup.dom.get_focused_elem;},new cljs.core.Symbol("paren-soup.dom","get-focused-elem","paren-soup.dom/get-focused-elem",787196068,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.dom","paren-soup.dom",1782176936,null),new cljs.core.Symbol(null,"get-focused-elem","get-focused-elem",1651431158,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/dom.cljs",23,1,95,95,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class-name","class-name",-1709293185,null)], null)),null,(cljs.core.truth_(paren_soup.dom.get_focused_elem)?paren_soup.dom.get_focused_elem.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.dom.get_focused_elem = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.dom","get-focused-elem","paren-soup.dom/get-focused-elem",787196068,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.instarepl.get_collections,new cljs.core.Var(function(){return paren_soup.instarepl.get_collections;},new cljs.core.Symbol("paren-soup.instarepl","get-collections","paren-soup.instarepl/get-collections",-748052156,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.instarepl","paren-soup.instarepl",-2048305967,null),new cljs.core.Symbol(null,"get-collections","get-collections",-1439683054,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/instarepl.cljs",22,1,39,39,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null)),"Returns collections from the given DOM node.",(cljs.core.truth_(paren_soup.instarepl.get_collections)?paren_soup.instarepl.get_collections.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.instarepl.get_collections = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.instarepl","get-collections","paren-soup.instarepl/get-collections",-748052156,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.dom.coll_node_QMARK_,new cljs.core.Var(function(){return paren_soup.dom.coll_node_QMARK_;},new cljs.core.Symbol("paren-soup.dom","coll-node?","paren-soup.dom/coll-node?",181056100,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.dom","paren-soup.dom",1782176936,null),new cljs.core.Symbol(null,"coll-node?","coll-node?",-565300174,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/dom.cljs",17,1,72,72,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null)),null,(cljs.core.truth_(paren_soup.dom.coll_node_QMARK_)?paren_soup.dom.coll_node_QMARK_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.dom.coll_node_QMARK_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.dom","coll-node?","paren-soup.dom/coll-node?",181056100,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.console.up_BANG_,new cljs.core.Var(function(){return paren_soup.console.up_BANG_;},new cljs.core.Symbol("paren-soup.console","up!","paren-soup.console/up!",1551321286,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.console","paren-soup.console",-1029081011,null),new cljs.core.Symbol(null,"up!","up!",-1329268605,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/console.cljs",10,1,39,39,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"console-history","console-history",-654761247,null)], null)),"Changes the current line and returns the previous line from console-history, or nil if there is none.",(cljs.core.truth_(paren_soup.console.up_BANG_)?paren_soup.console.up_BANG_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.console.up_BANG_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.console","up!","paren-soup.console/up!",1551321286,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.instarepl.create_compiler_fn,new cljs.core.Var(function(){return paren_soup.instarepl.create_compiler_fn;},new cljs.core.Symbol("paren-soup.instarepl","create-compiler-fn","paren-soup.instarepl/create-compiler-fn",-859233946,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.instarepl","paren-soup.instarepl",-2048305967,null),new cljs.core.Symbol(null,"create-compiler-fn","create-compiler-fn",93367856,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/instarepl.cljs",25,1,57,57,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(paren_soup.instarepl.create_compiler_fn)?paren_soup.instarepl.create_compiler_fn.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.instarepl.create_compiler_fn = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.instarepl","create-compiler-fn","paren-soup.instarepl/create-compiler-fn",-859233946,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.core.init_state,new cljs.core.Var(function(){return paren_soup.core.init_state;},new cljs.core.Symbol("paren-soup.core","init-state","paren-soup.core/init-state",-462504602,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.core","paren-soup.core",1608578978,null),new cljs.core.Symbol(null,"init-state","init-state",-1203572557,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/core.cljs",17,1,207,207,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content","content",1656364751,null),new cljs.core.Symbol(null,"crop?","crop?",-1793787227,null),new cljs.core.Symbol(null,"full-selection?","full-selection?",-1422729703,null)], null)),"Returns the editor's state. If full-selection? is true, it will try to save\nthe entire selection rather than just the cursor position.",(cljs.core.truth_(paren_soup.core.init_state)?paren_soup.core.init_state.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.core.init_state = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.core","init-state","paren-soup.core/init-state",-462504602,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,mistakes_were_made.core.get_previous_state,new cljs.core.Var(function(){return mistakes_were_made.core.get_previous_state;},new cljs.core.Symbol("mistakes-were-made.core","get-previous-state","mistakes-were-made.core/get-previous-state",683005574,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mistakes-were-made.core","mistakes-were-made.core",1671803951,null),new cljs.core.Symbol(null,"get-previous-state","get-previous-state",-1764981990,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/mistakes_were_made/core.cljc",25,1,45,45,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edit-history","edit-history",1303616998,null)], null)),"Returns the previous state from edit-history, or nil if there is none.",(cljs.core.truth_(mistakes_were_made.core.get_previous_state)?mistakes_were_made.core.get_previous_state.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
mistakes_were_made.core.get_previous_state = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("mistakes-were-made.core","get-previous-state","mistakes-were-made.core/get-previous-state",683005574,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,cross_parinfer.core.mode,new cljs.core.Var(function(){return cross_parinfer.core.mode;},new cljs.core.Symbol("cross-parinfer.core","mode","cross-parinfer.core/mode",-1687850873,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cross-parinfer.core","cross-parinfer.core",-1520890119,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/cross_parinfer/core.cljc",11,1,40,40,cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mode-type","mode-type",1945335386,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"line","line",1852876762,null)], null)),"Runs the specified mode, which can be :paren, :indent, or :both.",(cljs.core.truth_(cross_parinfer.core.mode)?cross_parinfer.core.mode.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
cross_parinfer.core.mode = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("cross-parinfer.core","mode","cross-parinfer.core/mode",-1687850873,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,html_soup.core.line__GT_hiccup,new cljs.core.Var(function(){return html_soup.core.line__GT_hiccup;},new cljs.core.Symbol("html-soup.core","line->hiccup","html-soup.core/line->hiccup",-698658617,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"html-soup.core","html-soup.core",-1112400347,null),new cljs.core.Symbol(null,"line->hiccup","line->hiccup",1503967027,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/html_soup/core.cljc",19,1,114,114,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"line","line",1852876762,null),new cljs.core.Symbol(null,"tags-for-line","tags-for-line",-135333818,null)], null)),"Returns the given line with Hiccup-compatible data structures added.",(cljs.core.truth_(html_soup.core.line__GT_hiccup)?html_soup.core.line__GT_hiccup.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
html_soup.core.line__GT_hiccup = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("html-soup.core","line->hiccup","html-soup.core/line->hiccup",-698658617,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.core.add_parinfer_after_console_start,new cljs.core.Var(function(){return paren_soup.core.add_parinfer_after_console_start;},new cljs.core.Symbol("paren-soup.core","add-parinfer-after-console-start","paren-soup.core/add-parinfer-after-console-start",-683564825,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.core","paren-soup.core",1608578978,null),new cljs.core.Symbol(null,"add-parinfer-after-console-start","add-parinfer-after-console-start",1933472916,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/core.cljs",39,1,176,176,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"console-start-num","console-start-num",837326571,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),null,(cljs.core.truth_(paren_soup.core.add_parinfer_after_console_start)?paren_soup.core.add_parinfer_after_console_start.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.core.add_parinfer_after_console_start = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.core","add-parinfer-after-console-start","paren-soup.core/add-parinfer-after-console-start",-683564825,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.dom.set_cursor_position_BANG_,new cljs.core.Var(function(){return paren_soup.dom.set_cursor_position_BANG_;},new cljs.core.Symbol("paren-soup.dom","set-cursor-position!","paren-soup.dom/set-cursor-position!",991772999,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.dom","paren-soup.dom",1782176936,null),new cljs.core.Symbol(null,"set-cursor-position!","set-cursor-position!",-140902507,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/dom.cljs",27,1,34,34,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"position","position",-371200385,null)], null)),"Moves the cursor to the specified position.",(cljs.core.truth_(paren_soup.dom.set_cursor_position_BANG_)?paren_soup.dom.set_cursor_position_BANG_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.dom.set_cursor_position_BANG_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.dom","set-cursor-position!","paren-soup.dom/set-cursor-position!",991772999,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,tag_soup.core.forward_indent_for_line,new cljs.core.Var(function(){return tag_soup.core.forward_indent_for_line;},new cljs.core.Symbol("tag-soup.core","forward-indent-for-line","tag-soup.core/forward-indent-for-line",-218362329,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tag-soup.core","tag-soup.core",-552159523,null),new cljs.core.Symbol(null,"forward-indent-for-line","forward-indent-for-line",-1712616200,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/tag_soup/core.cljc",30,1,153,153,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tags","tags",-883016792,null),new cljs.core.Symbol(null,"line","line",1852876762,null),new cljs.core.Symbol(null,"current-indent","current-indent",471702158,null)], null)),"Returns the number of spaces the given line should be indented forward.",(cljs.core.truth_(tag_soup.core.forward_indent_for_line)?tag_soup.core.forward_indent_for_line.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
tag_soup.core.forward_indent_for_line = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("tag-soup.core","forward-indent-for-line","tag-soup.core/forward-indent-for-line",-218362329,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.dom.get_completion_info,new cljs.core.Var(function(){return paren_soup.dom.get_completion_info;},new cljs.core.Symbol("paren-soup.dom","get-completion-info","paren-soup.dom/get-completion-info",-1562086489,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.dom","paren-soup.dom",1782176936,null),new cljs.core.Symbol(null,"get-completion-info","get-completion-info",-159647339,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/dom.cljs",26,1,125,125,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(paren_soup.dom.get_completion_info)?paren_soup.dom.get_completion_info.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.dom.get_completion_info = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.dom","get-completion-info","paren-soup.dom/get-completion-info",-1562086489,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.dom.error_node_QMARK_,new cljs.core.Var(function(){return paren_soup.dom.error_node_QMARK_;},new cljs.core.Symbol("paren-soup.dom","error-node?","paren-soup.dom/error-node?",-1045068760,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.dom","paren-soup.dom",1782176936,null),new cljs.core.Symbol(null,"error-node?","error-node?",1043336826,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/dom.cljs",18,1,68,68,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null)),null,(cljs.core.truth_(paren_soup.dom.error_node_QMARK_)?paren_soup.dom.error_node_QMARK_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.dom.error_node_QMARK_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.dom","error-node?","paren-soup.dom/error-node?",-1045068760,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.core.refresh_numbers_BANG_,new cljs.core.Var(function(){return paren_soup.core.refresh_numbers_BANG_;},new cljs.core.Symbol("paren-soup.core","refresh-numbers!","paren-soup.core/refresh-numbers!",1773110728,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.core","paren-soup.core",1608578978,null),new cljs.core.Symbol(null,"refresh-numbers!","refresh-numbers!",226744821,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/core.cljs",23,1,61,61,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"numbers","numbers",-1618125905,null),new cljs.core.Symbol(null,"line-count","line-count",-1782722588,null)], null)),"Refreshes the line numbers.",(cljs.core.truth_(paren_soup.core.refresh_numbers_BANG_)?paren_soup.core.refresh_numbers_BANG_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.core.refresh_numbers_BANG_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.core","refresh-numbers!","paren-soup.core/refresh-numbers!",1773110728,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,html_soup.core.tag__GT_hiccup,new cljs.core.Var(function(){return html_soup.core.tag__GT_hiccup;},new cljs.core.Symbol("html-soup.core","tag->hiccup","html-soup.core/tag->hiccup",2135645800,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"html-soup.core","html-soup.core",-1112400347,null),new cljs.core.Symbol(null,"tag->hiccup","tag->hiccup",-1923423292,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/html_soup/core.cljc",18,1,55,55,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null)], null)),"Returns a Hiccup-compatible data structure for the given tag description.",(cljs.core.truth_(html_soup.core.tag__GT_hiccup)?html_soup.core.tag__GT_hiccup.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
html_soup.core.tag__GT_hiccup = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("html-soup.core","tag->hiccup","html-soup.core/tag->hiccup",2135645800,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.core.init_all,new cljs.core.Var(function(){return paren_soup.core.init_all;},new cljs.core.Symbol("paren-soup.core","init-all","paren-soup.core/init-all",-614036470,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"export","export",214356590),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.core","paren-soup.core",1608578978,null),new cljs.core.Symbol(null,"init-all","init-all",2123036761,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/core.cljs",24,true,1,501,501,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(paren_soup.core.init_all)?paren_soup.core.init_all.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.core.init_all = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.core","init-all","paren-soup.core/init-all",-614036470,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,html_soup.core.parse_lines,new cljs.core.Var(function(){return html_soup.core.parse_lines;},new cljs.core.Symbol("html-soup.core","parse-lines","html-soup.core/parse-lines",-1030482710,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"html-soup.core","html-soup.core",-1112400347,null),new cljs.core.Symbol(null,"parse-lines","parse-lines",-1333506466,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/html_soup/core.cljc",18,1,121,121,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"lines","lines",940365746,null),new cljs.core.Symbol(null,"tags","tags",-883016792,null)], null)),"Returns the lines parsed with the given function.",(cljs.core.truth_(html_soup.core.parse_lines)?html_soup.core.parse_lines.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
html_soup.core.parse_lines = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("html-soup.core","parse-lines","html-soup.core/parse-lines",-1030482710,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.dom.common_ancestor,new cljs.core.Var(function(){return paren_soup.dom.common_ancestor;},new cljs.core.Symbol("paren-soup.dom","common-ancestor","paren-soup.dom/common-ancestor",-1231020694,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.dom","paren-soup.dom",1782176936,null),new cljs.core.Symbol(null,"common-ancestor","common-ancestor",-1976789156,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/dom.cljs",22,1,80,80,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"first-node","first-node",-1845294407,null),new cljs.core.Symbol(null,"second-node","second-node",2055762281,null)], null)),"Returns the common ancestor of the given nodes.",(cljs.core.truth_(paren_soup.dom.common_ancestor)?paren_soup.dom.common_ancestor.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.dom.common_ancestor = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.dom","common-ancestor","paren-soup.dom/common-ancestor",-1231020694,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,cross_parinfer.core.add_parinfer,new cljs.core.Var(function(){return cross_parinfer.core.add_parinfer;},new cljs.core.Symbol("cross-parinfer.core","add-parinfer","cross-parinfer.core/add-parinfer",2072882890,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cross-parinfer.core","cross-parinfer.core",-1520890119,null),new cljs.core.Symbol(null,"add-parinfer","add-parinfer",1831419065,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/cross_parinfer/core.cljc",19,1,79,79,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mode-type","mode-type",1945335386,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Adds parinfer to the state.",(cljs.core.truth_(cross_parinfer.core.add_parinfer)?cross_parinfer.core.add_parinfer.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
cross_parinfer.core.add_parinfer = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("cross-parinfer.core","add-parinfer","cross-parinfer.core/add-parinfer",2072882890,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,html_soup.core.escape_html_char,new cljs.core.Var(function(){return html_soup.core.escape_html_char;},new cljs.core.Symbol("html-soup.core","escape-html-char","html-soup.core/escape-html-char",277593866,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"html-soup.core","html-soup.core",-1112400347,null),new cljs.core.Symbol(null,"escape-html-char","escape-html-char",-1564842626,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/html_soup/core.cljc",23,1,21,21,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null)),"Escapes an HTML character",(cljs.core.truth_(html_soup.core.escape_html_char)?html_soup.core.escape_html_char.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
html_soup.core.escape_html_char = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("html-soup.core","escape-html-char","html-soup.core/escape-html-char",277593866,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.core.add_parinfer,new cljs.core.Var(function(){return paren_soup.core.add_parinfer;},new cljs.core.Symbol("paren-soup.core","add-parinfer","paren-soup.core/add-parinfer",165482346,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.core","paren-soup.core",1608578978,null),new cljs.core.Symbol(null,"add-parinfer","add-parinfer",1831419065,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/core.cljs",19,1,185,185,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"enable?","enable?",1233291833,null),new cljs.core.Symbol(null,"console-start-num","console-start-num",837326571,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),null,(cljs.core.truth_(paren_soup.core.add_parinfer)?paren_soup.core.add_parinfer.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.core.add_parinfer = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.core","add-parinfer","paren-soup.core/add-parinfer",165482346,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,mistakes_were_made.core.get_next_state,new cljs.core.Var(function(){return mistakes_were_made.core.get_next_state;},new cljs.core.Symbol("mistakes-were-made.core","get-next-state","mistakes-were-made.core/get-next-state",-972244436,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mistakes-were-made.core","mistakes-were-made.core",1671803951,null),new cljs.core.Symbol(null,"get-next-state","get-next-state",1344620944,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/mistakes_were_made/core.cljc",21,1,51,51,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edit-history","edit-history",1303616998,null)], null)),"Returns the next state from edit-history, or nil if there is none.",(cljs.core.truth_(mistakes_were_made.core.get_next_state)?mistakes_were_made.core.get_next_state.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
mistakes_were_made.core.get_next_state = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("mistakes-were-made.core","get-next-state","mistakes-were-made.core/get-next-state",-972244436,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,html_soup.core.code__GT_html,new cljs.core.Var(function(){return html_soup.core.code__GT_html;},new cljs.core.Symbol("html-soup.core","code->html","html-soup.core/code->html",981911116,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"html-soup.core","html-soup.core",-1112400347,null),new cljs.core.Symbol(null,"code->html","code->html",-1460198960,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/html_soup/core.cljc",17,1,130,130,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"code","code",-1068142627,null)], null)),"Returns the code in the given string with html added.",(cljs.core.truth_(html_soup.core.code__GT_html)?html_soup.core.code__GT_html.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
html_soup.core.code__GT_html = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("html-soup.core","code->html","html-soup.core/code->html",981911116,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,tag_soup.core.indent_for_line,new cljs.core.Var(function(){return tag_soup.core.indent_for_line;},new cljs.core.Symbol("tag-soup.core","indent-for-line","tag-soup.core/indent-for-line",-2080553204,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tag-soup.core","tag-soup.core",-552159523,null),new cljs.core.Symbol(null,"indent-for-line","indent-for-line",2129910211,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/tag_soup/core.cljc",22,1,129,129,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tags","tags",-883016792,null),new cljs.core.Symbol(null,"line","line",1852876762,null)], null)),"Returns the number of spaces the given line should be indented.",(cljs.core.truth_(tag_soup.core.indent_for_line)?tag_soup.core.indent_for_line.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
tag_soup.core.indent_for_line = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("tag-soup.core","indent-for-line","tag-soup.core/indent-for-line",-2080553204,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,tag_soup.core.adjust_indent,new cljs.core.Var(function(){return tag_soup.core.adjust_indent;},new cljs.core.Symbol("tag-soup.core","adjust-indent","tag-soup.core/adjust-indent",1002033261,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tag-soup.core","tag-soup.core",-552159523,null),new cljs.core.Symbol(null,"adjust-indent","adjust-indent",-1529917138,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/tag_soup/core.cljc",20,1,33,33,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"token","token",429068312,null)], null)),"Returns how much the indent should be adjusted for the given token.",(cljs.core.truth_(tag_soup.core.adjust_indent)?tag_soup.core.adjust_indent.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
tag_soup.core.adjust_indent = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("tag-soup.core","adjust-indent","tag-soup.core/adjust-indent",1002033261,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.dom.get_completion_context,new cljs.core.Var(function(){return paren_soup.dom.get_completion_context;},new cljs.core.Symbol("paren-soup.dom","get-completion-context","paren-soup.dom/get-completion-context",1500353837,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.dom","paren-soup.dom",1782176936,null),new cljs.core.Symbol(null,"get-completion-context","get-completion-context",1860246395,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/dom.cljs",29,1,115,115,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol-length","symbol-length",488595744,null),new cljs.core.Symbol(null,"cursor-offset","cursor-offset",1864886480,null)], null)),null,(cljs.core.truth_(paren_soup.dom.get_completion_context)?paren_soup.dom.get_completion_context.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.dom.get_completion_context = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.dom","get-completion-context","paren-soup.dom/get-completion-context",1500353837,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.console.get_console_start,new cljs.core.Var(function(){return paren_soup.console.get_console_start;},new cljs.core.Symbol("paren-soup.console","get-console-start","paren-soup.console/get-console-start",1377116717,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.console","paren-soup.console",-1029081011,null),new cljs.core.Symbol(null,"get-console-start","get-console-start",-1094339992,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/console.cljs",24,1,8,8,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"console-history","console-history",-654761247,null)], null)),null,(cljs.core.truth_(paren_soup.console.get_console_start)?paren_soup.console.get_console_start.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.console.get_console_start = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.console","get-console-start","paren-soup.console/get-console-start",1377116717,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.console.update_console_start_BANG_,new cljs.core.Var(function(){return paren_soup.console.update_console_start_BANG_;},new cljs.core.Symbol("paren-soup.console","update-console-start!","paren-soup.console/update-console-start!",-1053112723,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.console","paren-soup.console",-1029081011,null),new cljs.core.Symbol(null,"update-console-start!","update-console-start!",-313887064,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/console.cljs",28,1,11,11,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"console-history","console-history",-654761247,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null)),null,(cljs.core.truth_(paren_soup.console.update_console_start_BANG_)?paren_soup.console.update_console_start_BANG_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.console.update_console_start_BANG_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.console","update-console-start!","paren-soup.console/update-console-start!",-1053112723,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.dom.top_level_QMARK_,new cljs.core.Var(function(){return paren_soup.dom.top_level_QMARK_;},new cljs.core.Symbol("paren-soup.dom","top-level?","paren-soup.dom/top-level?",1216457070,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.dom","paren-soup.dom",1782176936,null),new cljs.core.Symbol(null,"top-level?","top-level?",-1660801280,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/dom.cljs",17,1,76,76,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null)),null,(cljs.core.truth_(paren_soup.dom.top_level_QMARK_)?paren_soup.dom.top_level_QMARK_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.dom.top_level_QMARK_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.dom","top-level?","paren-soup.dom/top-level?",1216457070,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,mistakes_were_made.core.can_redo_QMARK_,new cljs.core.Var(function(){return mistakes_were_made.core.can_redo_QMARK_;},new cljs.core.Symbol("mistakes-were-made.core","can-redo?","mistakes-were-made.core/can-redo?",767188398,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mistakes-were-made.core","mistakes-were-made.core",1671803951,null),new cljs.core.Symbol(null,"can-redo?","can-redo?",-1152184798,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/mistakes_were_made/core.cljc",16,1,76,76,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edit-history","edit-history",1303616998,null)], null)),"Returns true if we can redo.",(cljs.core.truth_(mistakes_were_made.core.can_redo_QMARK_)?mistakes_were_made.core.can_redo_QMARK_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
mistakes_were_made.core.can_redo_QMARK_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("mistakes-were-made.core","can-redo?","mistakes-were-made.core/can-redo?",767188398,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.core.refresh_instarepl_BANG_,new cljs.core.Var(function(){return paren_soup.core.refresh_instarepl_BANG_;},new cljs.core.Symbol("paren-soup.core","refresh-instarepl!","paren-soup.core/refresh-instarepl!",-2013374002,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.core","paren-soup.core",1608578978,null),new cljs.core.Symbol(null,"refresh-instarepl!","refresh-instarepl!",596481521,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/core.cljs",25,1,66,66,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"instarepl","instarepl",-343375814,null),new cljs.core.Symbol(null,"content","content",1656364751,null),new cljs.core.Symbol(null,"compiler-fn","compiler-fn",-1278693168,null)], null)),"Refreshes the InstaREPL.",(cljs.core.truth_(paren_soup.core.refresh_instarepl_BANG_)?paren_soup.core.refresh_instarepl_BANG_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.core.refresh_instarepl_BANG_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.core","refresh-instarepl!","paren-soup.core/refresh-instarepl!",-2013374002,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,cross_parinfer.core.update_indent,new cljs.core.Var(function(){return cross_parinfer.core.update_indent;},new cljs.core.Symbol("cross-parinfer.core","update-indent","cross-parinfer.core/update-indent",-1612843218,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cross-parinfer.core","cross-parinfer.core",-1520890119,null),new cljs.core.Symbol(null,"update-indent","update-indent",-2122750607,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/cross_parinfer/core.cljc",20,1,94,94,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"lines","lines",940365746,null),new cljs.core.Symbol(null,"line-num","line-num",1341565263,null)], null)),null,(cljs.core.truth_(cross_parinfer.core.update_indent)?cross_parinfer.core.update_indent.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
cross_parinfer.core.update_indent = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("cross-parinfer.core","update-indent","cross-parinfer.core/update-indent",-1612843218,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.core.hide_error_messages_BANG_,new cljs.core.Var(function(){return paren_soup.core.hide_error_messages_BANG_;},new cljs.core.Symbol("paren-soup.core","hide-error-messages!","paren-soup.core/hide-error-messages!",1705110960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.core","paren-soup.core",1608578978,null),new cljs.core.Symbol(null,"hide-error-messages!","hide-error-messages!",-1983000067,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/core.cljs",27,1,29,29,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent-elem","parent-elem",628061777,null)], null)),"Hides all error popups.",(cljs.core.truth_(paren_soup.core.hide_error_messages_BANG_)?paren_soup.core.hide_error_messages_BANG_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.core.hide_error_messages_BANG_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.core","hide-error-messages!","paren-soup.core/hide-error-messages!",1705110960,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.core.init,new cljs.core.Var(function(){return paren_soup.core.init;},new cljs.core.Symbol("paren-soup.core","init","paren-soup.core/init",367142576,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"export","export",214356590),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.core","paren-soup.core",1608578978,null),new cljs.core.Symbol(null,"init","init",-234949907,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/core.cljs",20,true,1,448,448,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"paren-soup","paren-soup",-1135706068,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(paren_soup.core.init)?paren_soup.core.init.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.core.init = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.core","init","paren-soup.core/init",367142576,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,html_soup.core.line__GT_html,new cljs.core.Var(function(){return html_soup.core.line__GT_html;},new cljs.core.Symbol("html-soup.core","line->html","html-soup.core/line->html",-520780751,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"html-soup.core","html-soup.core",-1112400347,null),new cljs.core.Symbol(null,"line->html","line->html",1457663653,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/html_soup/core.cljc",17,1,107,107,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"line","line",1852876762,null),new cljs.core.Symbol(null,"tags-for-line","tags-for-line",-135333818,null)], null)),"Returns the given line with html added.",(cljs.core.truth_(html_soup.core.line__GT_html)?html_soup.core.line__GT_html.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
html_soup.core.line__GT_html = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("html-soup.core","line->html","html-soup.core/line->html",-520780751,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.core.key_name_QMARK_,new cljs.core.Var(function(){return paren_soup.core.key_name_QMARK_;},new cljs.core.Symbol("paren-soup.core","key-name?","paren-soup.core/key-name?",-300012303,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.core","paren-soup.core",1608578978,null),new cljs.core.Symbol(null,"key-name?","key-name?",1242198150,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/core.cljs",16,1,245,245,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null),new cljs.core.Symbol(null,"key-name","key-name",511745451,null)], null)),"Returns true if the supplied key event involves the key(s) described by key-name.",(cljs.core.truth_(paren_soup.core.key_name_QMARK_)?paren_soup.core.key_name_QMARK_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.core.key_name_QMARK_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.core","key-name?","paren-soup.core/key-name?",-300012303,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.core.show_error_message_BANG_,new cljs.core.Var(function(){return paren_soup.core.show_error_message_BANG_;},new cljs.core.Symbol("paren-soup.core","show-error-message!","paren-soup.core/show-error-message!",341593393,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.core","paren-soup.core",1608578978,null),new cljs.core.Symbol(null,"show-error-message!","show-error-message!",-1203732222,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/core.cljs",26,1,16,16,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent-elem","parent-elem",628061777,null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)),"Shows a popup with an error message.",(cljs.core.truth_(paren_soup.core.show_error_message_BANG_)?paren_soup.core.show_error_message_BANG_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.core.show_error_message_BANG_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.core","show-error-message!","paren-soup.core/show-error-message!",341593393,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.dom.get_selection,new cljs.core.Var(function(){return paren_soup.dom.get_selection;},new cljs.core.Symbol("paren-soup.dom","get-selection","paren-soup.dom/get-selection",269759217,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.dom","paren-soup.dom",1782176936,null),new cljs.core.Symbol(null,"get-selection","get-selection",1687271619,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/dom.cljs",20,1,4,4,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"full-selection?","full-selection?",-1422729703,null)], null)),"Returns the objects related to selection for the given element. If full-selection? is true,\nit will use rangy instead of the native selection API in order to get the beginning and ending\nof the selection (it is, however, much slower).",(cljs.core.truth_(paren_soup.dom.get_selection)?paren_soup.dom.get_selection.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.dom.get_selection = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.dom","get-selection","paren-soup.dom/get-selection",269759217,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.console.get_next_line,new cljs.core.Var(function(){return paren_soup.console.get_next_line;},new cljs.core.Symbol("paren-soup.console","get-next-line","paren-soup.console/get-next-line",1484568401,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.console","paren-soup.console",-1029081011,null),new cljs.core.Symbol(null,"get-next-line","get-next-line",2083334038,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/console.cljs",20,1,33,33,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"console-history","console-history",-654761247,null)], null)),"Returns the next line from console-history, or nil if there is none.",(cljs.core.truth_(paren_soup.console.get_next_line)?paren_soup.console.get_next_line.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.console.get_next_line = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.console","get-next-line","paren-soup.console/get-next-line",1484568401,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.core.add_event_listeners_BANG_,new cljs.core.Var(function(){return paren_soup.core.add_event_listeners_BANG_;},new cljs.core.Symbol("paren-soup.core","add-event-listeners!","paren-soup.core/add-event-listeners!",680626065,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.core","paren-soup.core",1608578978,null),new cljs.core.Symbol(null,"add-event-listeners!","add-event-listeners!",-863611940,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/core.cljs",27,1,436,436,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content","content",1656364751,null),new cljs.core.Symbol(null,"events-chan","events-chan",856382847,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(paren_soup.core.add_event_listeners_BANG_)?paren_soup.core.add_event_listeners_BANG_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.core.add_event_listeners_BANG_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.core","add-event-listeners!","paren-soup.core/add-event-listeners!",680626065,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,mistakes_were_made.core.can_undo_QMARK_,new cljs.core.Var(function(){return mistakes_were_made.core.can_undo_QMARK_;},new cljs.core.Symbol("mistakes-were-made.core","can-undo?","mistakes-were-made.core/can-undo?",774742929,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mistakes-were-made.core","mistakes-were-made.core",1671803951,null),new cljs.core.Symbol(null,"can-undo?","can-undo?",-1479346195,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/mistakes_were_made/core.cljc",16,1,71,71,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edit-history","edit-history",1303616998,null)], null)),"Returns true if we can undo.",(cljs.core.truth_(mistakes_were_made.core.can_undo_QMARK_)?mistakes_were_made.core.can_undo_QMARK_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
mistakes_were_made.core.can_undo_QMARK_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("mistakes-were-made.core","can-undo?","mistakes-were-made.core/can-undo?",774742929,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,cross_parinfer.core.paren_mode,new cljs.core.Var(function(){return cross_parinfer.core.paren_mode;},new cljs.core.Symbol("cross-parinfer.core","paren-mode","cross-parinfer.core/paren-mode",345019313,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cross-parinfer.core","cross-parinfer.core",-1520890119,null),new cljs.core.Symbol(null,"paren-mode","paren-mode",-428393118,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/cross_parinfer/core.cljc",17,1,7,7,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"line","line",1852876762,null)], null)),"Runs paren mode on the given text.",(cljs.core.truth_(cross_parinfer.core.paren_mode)?cross_parinfer.core.paren_mode.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
cross_parinfer.core.paren_mode = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("cross-parinfer.core","paren-mode","cross-parinfer.core/paren-mode",345019313,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,cross_parinfer.core.split_lines,new cljs.core.Var(function(){return cross_parinfer.core.split_lines;},new cljs.core.Symbol("cross-parinfer.core","split-lines","cross-parinfer.core/split-lines",1036720626,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cross-parinfer.core","cross-parinfer.core",-1520890119,null),new cljs.core.Symbol(null,"split-lines","split-lines",777513935,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/cross_parinfer/core.cljc",18,1,51,51,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null)),"Splits the string into lines.",(cljs.core.truth_(cross_parinfer.core.split_lines)?cross_parinfer.core.split_lines.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
cross_parinfer.core.split_lines = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("cross-parinfer.core","split-lines","cross-parinfer.core/split-lines",1036720626,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,mistakes_were_made.core.update_edit_history_BANG_,new cljs.core.Var(function(){return mistakes_were_made.core.update_edit_history_BANG_;},new cljs.core.Symbol("mistakes-were-made.core","update-edit-history!","mistakes-were-made.core/update-edit-history!",1753519698,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mistakes-were-made.core","mistakes-were-made.core",1671803951,null),new cljs.core.Symbol(null,"update-edit-history!","update-edit-history!",-218208810,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/mistakes_were_made/core.cljc",27,1,7,7,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edit-history","edit-history",1303616998,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Updates the edit history atom.",(cljs.core.truth_(mistakes_were_made.core.update_edit_history_BANG_)?mistakes_were_made.core.update_edit_history_BANG_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
mistakes_were_made.core.update_edit_history_BANG_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("mistakes-were-made.core","update-edit-history!","mistakes-were-made.core/update-edit-history!",1753519698,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.console.create_console_history,new cljs.core.Var(function(){return paren_soup.console.create_console_history;},new cljs.core.Symbol("paren-soup.console","create-console-history","paren-soup.console/create-console-history",395033586,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.console","paren-soup.console",-1029081011,null),new cljs.core.Symbol(null,"create-console-history","create-console-history",1885023167,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/console.cljs",29,1,3,3,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(paren_soup.console.create_console_history)?paren_soup.console.create_console_history.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.console.create_console_history = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.console","create-console-history","paren-soup.console/create-console-history",395033586,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.dom.get_parents,new cljs.core.Var(function(){return paren_soup.dom.get_parents;},new cljs.core.Symbol("paren-soup.dom","get-parents","paren-soup.dom/get-parents",-887388109,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.dom","paren-soup.dom",1782176936,null),new cljs.core.Symbol(null,"get-parents","get-parents",-1869151715,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/dom.cljs",18,1,55,55,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol(null,"class-name","class-name",-1709293185,null)], null)),"Returns all the parents with the given class name.",(cljs.core.truth_(paren_soup.dom.get_parents)?paren_soup.dom.get_parents.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.dom.get_parents = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.dom","get-parents","paren-soup.dom/get-parents",-887388109,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,html_soup.core.split_lines,new cljs.core.Var(function(){return html_soup.core.split_lines;},new cljs.core.Symbol("html-soup.core","split-lines","html-soup.core/split-lines",-1136177613,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"html-soup.core","html-soup.core",-1112400347,null),new cljs.core.Symbol(null,"split-lines","split-lines",777513935,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/html_soup/core.cljc",18,1,6,6,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null)),"Splits the string into lines.",(cljs.core.truth_(html_soup.core.split_lines)?html_soup.core.split_lines.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
html_soup.core.split_lines = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("html-soup.core","split-lines","html-soup.core/split-lines",-1136177613,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,tag_soup.core.get_tags_before_line,new cljs.core.Var(function(){return tag_soup.core.get_tags_before_line;},new cljs.core.Symbol("tag-soup.core","get-tags-before-line","tag-soup.core/get-tags-before-line",-1391345869,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tag-soup.core","tag-soup.core",-552159523,null),new cljs.core.Symbol(null,"get-tags-before-line","get-tags-before-line",-669237516,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/tag_soup/core.cljc",27,1,119,119,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tags","tags",-883016792,null),new cljs.core.Symbol(null,"line","line",1852876762,null)], null)),"Returns the tags before the given line.",(cljs.core.truth_(tag_soup.core.get_tags_before_line)?tag_soup.core.get_tags_before_line.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
tag_soup.core.get_tags_before_line = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("tag-soup.core","get-tags-before-line","tag-soup.core/get-tags-before-line",-1391345869,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,cross_parinfer.core.add_indent,new cljs.core.Var(function(){return cross_parinfer.core.add_indent;},new cljs.core.Symbol("cross-parinfer.core","add-indent","cross-parinfer.core/add-indent",-1878418477,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cross-parinfer.core","cross-parinfer.core",-1520890119,null),new cljs.core.Symbol(null,"add-indent","add-indent",-496306940,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/cross_parinfer/core.cljc",17,1,105,105,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Adds indent to the state.",(cljs.core.truth_(cross_parinfer.core.add_indent)?cross_parinfer.core.add_indent.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
cross_parinfer.core.add_indent = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("cross-parinfer.core","add-indent","cross-parinfer.core/add-indent",-1878418477,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,tag_soup.core.read_safe,new cljs.core.Var(function(){return tag_soup.core.read_safe;},new cljs.core.Symbol("tag-soup.core","read-safe","tag-soup.core/read-safe",-54831082,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tag-soup.core","tag-soup.core",-552159523,null),new cljs.core.Symbol(null,"read-safe","read-safe",163962579,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/tag_soup/core.cljc",16,1,10,10,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reader","reader",1810192380,null)], null)),"Returns either a form or an exception object, or nil if EOF is reached.",(cljs.core.truth_(tag_soup.core.read_safe)?tag_soup.core.read_safe.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
tag_soup.core.read_safe = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("tag-soup.core","read-safe","tag-soup.core/read-safe",-54831082,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,tag_soup.core.unwrap_value,new cljs.core.Var(function(){return tag_soup.core.unwrap_value;},new cljs.core.Symbol("tag-soup.core","unwrap-value","tag-soup.core/unwrap-value",-316132874,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tag-soup.core","tag-soup.core",-552159523,null),new cljs.core.Symbol(null,"unwrap-value","unwrap-value",371048243,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/tag_soup/core.cljc",19,1,28,28,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),null,(cljs.core.truth_(tag_soup.core.unwrap_value)?tag_soup.core.unwrap_value.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
tag_soup.core.unwrap_value = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("tag-soup.core","unwrap-value","tag-soup.core/unwrap-value",-316132874,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.instarepl.collection__GT_content,new cljs.core.Var(function(){return paren_soup.instarepl.collection__GT_content;},new cljs.core.Symbol("paren-soup.instarepl","collection->content","paren-soup.instarepl/collection->content",-601202026,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.instarepl","paren-soup.instarepl",-2048305967,null),new cljs.core.Symbol(null,"collection->content","collection->content",-2090669748,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/instarepl.cljs",26,1,48,48,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null)], null)),null,(cljs.core.truth_(paren_soup.instarepl.collection__GT_content)?paren_soup.instarepl.collection__GT_content.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.instarepl.collection__GT_content = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.instarepl","collection->content","paren-soup.instarepl/collection->content",-601202026,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,html_soup.core.line__GT_segments,new cljs.core.Var(function(){return html_soup.core.line__GT_segments;},new cljs.core.Symbol("html-soup.core","line->segments","html-soup.core/line->segments",-1934960169,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"html-soup.core","html-soup.core",-1112400347,null),new cljs.core.Symbol(null,"line->segments","line->segments",1924759363,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/html_soup/core.cljc",21,1,86,86,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"line","line",1852876762,null),new cljs.core.Symbol(null,"tags-for-line","tags-for-line",-135333818,null),new cljs.core.Symbol(null,"escape?","escape?",1064936228,null)], null)),"Splits a line into segments where tags are supposed to appear.",(cljs.core.truth_(html_soup.core.line__GT_segments)?html_soup.core.line__GT_segments.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
html_soup.core.line__GT_segments = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("html-soup.core","line->segments","html-soup.core/line->segments",-1934960169,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.core.rainbow_delimiters,new cljs.core.Var(function(){return paren_soup.core.rainbow_delimiters;},new cljs.core.Symbol("paren-soup.core","rainbow-delimiters","paren-soup.core/rainbow-delimiters",-412809545,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.core","paren-soup.core",1608578978,null),new cljs.core.Symbol(null,"rainbow-delimiters","rainbow-delimiters",-1689161086,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/core.cljs",25,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),3,new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"level","level",-1363938217,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"level","level",-1363938217,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"level","level",-1363938217,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"level","level",-1363938217,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"level","level",-1363938217,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"level","level",-1363938217,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),"Returns a map of elements and class names.",(cljs.core.truth_(paren_soup.core.rainbow_delimiters)?paren_soup.core.rainbow_delimiters.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.core.rainbow_delimiters = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.core","rainbow-delimiters","paren-soup.core/rainbow-delimiters",-412809545,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.core.refresh_content_element_BANG_,new cljs.core.Var(function(){return paren_soup.core.refresh_content_element_BANG_;},new cljs.core.Symbol("paren-soup.core","refresh-content-element!","paren-soup.core/refresh-content-element!",625177656,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.core","paren-soup.core",1608578978,null),new cljs.core.Symbol(null,"refresh-content-element!","refresh-content-element!",-914906933,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/core.cljs",31,1,100,100,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cropped-state","cropped-state",327859465,null)], null)),"Replaces a single node in the content, and siblings if necessary.",(cljs.core.truth_(paren_soup.core.refresh_content_element_BANG_)?paren_soup.core.refresh_content_element_BANG_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.core.refresh_content_element_BANG_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.core","refresh-content-element!","paren-soup.core/refresh-content-element!",625177656,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,cross_parinfer.core.position__GT_row_col,new cljs.core.Var(function(){return cross_parinfer.core.position__GT_row_col;},new cljs.core.Symbol("cross-parinfer.core","position->row-col","cross-parinfer.core/position->row-col",1658028568,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cross-parinfer.core","cross-parinfer.core",-1520890119,null),new cljs.core.Symbol(null,"position->row-col","position->row-col",1901007947,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/cross_parinfer/core.cljc",24,1,56,56,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"position","position",-371200385,null)], null)),"Converts a position to a row and column number.",(cljs.core.truth_(cross_parinfer.core.position__GT_row_col)?cross_parinfer.core.position__GT_row_col.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
cross_parinfer.core.position__GT_row_col = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("cross-parinfer.core","position->row-col","cross-parinfer.core/position->row-col",1658028568,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,cross_parinfer.core.indent_count,new cljs.core.Var(function(){return cross_parinfer.core.indent_count;},new cljs.core.Symbol("cross-parinfer.core","indent-count","cross-parinfer.core/indent-count",1810397752,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cross-parinfer.core","cross-parinfer.core",-1520890119,null),new cljs.core.Symbol(null,"indent-count","indent-count",2121565189,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/cross_parinfer/core.cljc",19,1,91,91,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"line","line",1852876762,null)], null)),null,(cljs.core.truth_(cross_parinfer.core.indent_count)?cross_parinfer.core.indent_count.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
cross_parinfer.core.indent_count = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("cross-parinfer.core","indent-count","cross-parinfer.core/indent-count",1810397752,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,mistakes_were_made.core.get_current_state,new cljs.core.Var(function(){return mistakes_were_made.core.get_current_state;},new cljs.core.Symbol("mistakes-were-made.core","get-current-state","mistakes-were-made.core/get-current-state",-493362184,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mistakes-were-made.core","mistakes-were-made.core",1671803951,null),new cljs.core.Symbol(null,"get-current-state","get-current-state",1957773124,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/mistakes_were_made/core.cljc",24,1,39,39,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edit-history","edit-history",1303616998,null)], null)),"Returns the current state from edit-history, or nil if there is none.",(cljs.core.truth_(mistakes_were_made.core.get_current_state)?mistakes_were_made.core.get_current_state.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
mistakes_were_made.core.get_current_state = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("mistakes-were-made.core","get-current-state","mistakes-were-made.core/get-current-state",-493362184,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,html_soup.core.code__GT_hiccup,new cljs.core.Var(function(){return html_soup.core.code__GT_hiccup;},new cljs.core.Symbol("html-soup.core","code->hiccup","html-soup.core/code->hiccup",1954022777,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"html-soup.core","html-soup.core",-1112400347,null),new cljs.core.Symbol(null,"code->hiccup","code->hiccup",93056773,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/html_soup/core.cljc",19,1,154,154,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"code","code",-1068142627,null)], null)),"Returns the code in the given string with Hiccup-compatible data structures added.",(cljs.core.truth_(html_soup.core.code__GT_hiccup)?html_soup.core.code__GT_hiccup.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
html_soup.core.code__GT_hiccup = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("html-soup.core","code->hiccup","html-soup.core/code->hiccup",1954022777,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,tag_soup.core.back_indent_for_line,new cljs.core.Var(function(){return tag_soup.core.back_indent_for_line;},new cljs.core.Symbol("tag-soup.core","back-indent-for-line","tag-soup.core/back-indent-for-line",112267097,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tag-soup.core","tag-soup.core",-552159523,null),new cljs.core.Symbol(null,"back-indent-for-line","back-indent-for-line",-1313108966,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/tag_soup/core.cljc",27,1,137,137,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tags","tags",-883016792,null),new cljs.core.Symbol(null,"line","line",1852876762,null),new cljs.core.Symbol(null,"current-indent","current-indent",471702158,null)], null)),"Returns the number of spaces the given line should be indented back.",(cljs.core.truth_(tag_soup.core.back_indent_for_line)?tag_soup.core.back_indent_for_line.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
tag_soup.core.back_indent_for_line = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("tag-soup.core","back-indent-for-line","tag-soup.core/back-indent-for-line",112267097,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.core.create_editor,new cljs.core.Var(function(){return paren_soup.core.create_editor;},new cljs.core.Symbol("paren-soup.core","create-editor","paren-soup.core/create-editor",142430650,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.core","paren-soup.core",1608578978,null),new cljs.core.Symbol(null,"create-editor","create-editor",-276208153,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/core.cljs",20,1,293,293,cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"paren-soup","paren-soup",-1135706068,null),new cljs.core.Symbol(null,"content","content",1656364751,null),new cljs.core.Symbol(null,"events-chan","events-chan",856382847,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"history-limit","history-limit",-298208259,null),new cljs.core.Symbol(null,"append-limit","append-limit",1493132079,null),new cljs.core.Symbol(null,"compiler-fn","compiler-fn",-1278693168,null),new cljs.core.Symbol(null,"console-callback","console-callback",171059280,null),new cljs.core.Symbol(null,"disable-clj?","disable-clj?",-1475567059,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"history-limit","history-limit",-298208259,null),(100),new cljs.core.Symbol(null,"append-limit","append-limit",1493132079,null),(5000)], null)], null)], null)),null,(cljs.core.truth_(paren_soup.core.create_editor)?paren_soup.core.create_editor.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.core.create_editor = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.core","create-editor","paren-soup.core/create-editor",142430650,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.dom.get_cursor_position,new cljs.core.Var(function(){return paren_soup.dom.get_cursor_position;},new cljs.core.Symbol("paren-soup.dom","get-cursor-position","paren-soup.dom/get-cursor-position",699663994,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.dom","paren-soup.dom",1782176936,null),new cljs.core.Symbol(null,"get-cursor-position","get-cursor-position",-500131800,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/dom.cljs",26,1,29,29,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"full-selection?","full-selection?",-1422729703,null)], null)),"Returns the cursor position.",(cljs.core.truth_(paren_soup.dom.get_cursor_position)?paren_soup.dom.get_cursor_position.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.dom.get_cursor_position = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.dom","get-cursor-position","paren-soup.dom/get-cursor-position",699663994,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.core.prevent_default_QMARK_,new cljs.core.Var(function(){return paren_soup.core.prevent_default_QMARK_;},new cljs.core.Symbol("paren-soup.core","prevent-default?","paren-soup.core/prevent-default?",1616087674,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.core","paren-soup.core",1608578978,null),new cljs.core.Symbol(null,"prevent-default?","prevent-default?",474963639,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/core.cljs",23,1,428,428,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(paren_soup.core.prevent_default_QMARK_)?paren_soup.core.prevent_default_QMARK_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.core.prevent_default_QMARK_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.core","prevent-default?","paren-soup.core/prevent-default?",1616087674,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,cross_parinfer.core.row_col__GT_position,new cljs.core.Var(function(){return cross_parinfer.core.row_col__GT_position;},new cljs.core.Symbol("cross-parinfer.core","row-col->position","cross-parinfer.core/row-col->position",-791082118,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cross-parinfer.core","cross-parinfer.core",-1520890119,null),new cljs.core.Symbol(null,"row-col->position","row-col->position",-1036224087,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/cross_parinfer/core.cljc",24,1,67,67,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.Symbol(null,"col","col",-318831557,null)], null)),"Converts a row and column number to a position.",(cljs.core.truth_(cross_parinfer.core.row_col__GT_position)?cross_parinfer.core.row_col__GT_position.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
cross_parinfer.core.row_col__GT_position = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("cross-parinfer.core","row-col->position","cross-parinfer.core/row-col->position",-791082118,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.core.line_numbers,new cljs.core.Var(function(){return paren_soup.core.line_numbers;},new cljs.core.Symbol("paren-soup.core","line-numbers","paren-soup.core/line-numbers",-1027291877,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.core","paren-soup.core",1608578978,null),new cljs.core.Symbol(null,"line-numbers","line-numbers",1860710764,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/core.cljs",19,1,55,55,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"line-count","line-count",-1782722588,null)], null)),"Adds line numbers to the numbers.",(cljs.core.truth_(paren_soup.core.line_numbers)?paren_soup.core.line_numbers.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.core.line_numbers = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.core","line-numbers","paren-soup.core/line-numbers",-1027291877,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.dom.text_node_QMARK_,new cljs.core.Var(function(){return paren_soup.dom.text_node_QMARK_;},new cljs.core.Symbol("paren-soup.dom","text-node?","paren-soup.dom/text-node?",-1695894821,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.dom","paren-soup.dom",1782176936,null),new cljs.core.Symbol(null,"text-node?","text-node?",-311019383,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/dom.cljs",17,1,64,64,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null)),null,(cljs.core.truth_(paren_soup.dom.text_node_QMARK_)?paren_soup.dom.text_node_QMARK_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.dom.text_node_QMARK_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.dom","text-node?","paren-soup.dom/text-node?",-1695894821,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.dom.get_focused_top_level,new cljs.core.Var(function(){return paren_soup.dom.get_focused_top_level;},new cljs.core.Symbol("paren-soup.dom","get-focused-top-level","paren-soup.dom/get-focused-top-level",-1273714693,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.dom","paren-soup.dom",1782176936,null),new cljs.core.Symbol(null,"get-focused-top-level","get-focused-top-level",-2137972307,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/dom.cljs",28,1,107,107,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(paren_soup.dom.get_focused_top_level)?paren_soup.dom.get_focused_top_level.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.dom.get_focused_top_level = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.dom","get-focused-top-level","paren-soup.dom/get-focused-top-level",-1273714693,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,mistakes_were_made.core.create_edit_history,new cljs.core.Var(function(){return mistakes_were_made.core.create_edit_history;},new cljs.core.Symbol("mistakes-were-made.core","create-edit-history","mistakes-were-made.core/create-edit-history",-1455321956,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mistakes-were-made.core","mistakes-were-made.core",1671803951,null),new cljs.core.Symbol(null,"create-edit-history","create-edit-history",325627928,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/mistakes_were_made/core.cljc",26,1,4,4,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(mistakes_were_made.core.create_edit_history)?mistakes_were_made.core.create_edit_history.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
mistakes_were_made.core.create_edit_history = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("mistakes-were-made.core","create-edit-history","mistakes-were-made.core/create-edit-history",-1455321956,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.console.get_previous_line,new cljs.core.Var(function(){return paren_soup.console.get_previous_line;},new cljs.core.Symbol("paren-soup.console","get-previous-line","paren-soup.console/get-previous-line",889454460,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.console","paren-soup.console",-1029081011,null),new cljs.core.Symbol(null,"get-previous-line","get-previous-line",1499221817,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/console.cljs",24,1,27,27,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"console-history","console-history",-654761247,null)], null)),"Returns the previous line from console-history, or nil if there is none.",(cljs.core.truth_(paren_soup.console.get_previous_line)?paren_soup.console.get_previous_line.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.console.get_previous_line = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.console","get-previous-line","paren-soup.console/get-previous-line",889454460,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.core.refresh_content_BANG_,new cljs.core.Var(function(){return paren_soup.core.refresh_content_BANG_;},new cljs.core.Symbol("paren-soup.core","refresh-content!","paren-soup.core/refresh-content!",-351979524,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.core","paren-soup.core",1608578978,null),new cljs.core.Symbol(null,"refresh-content!","refresh-content!",1461315631,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/core.cljs",23,1,154,154,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content","content",1656364751,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Refreshes the content.",(cljs.core.truth_(paren_soup.core.refresh_content_BANG_)?paren_soup.core.refresh_content_BANG_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.core.refresh_content_BANG_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.core","refresh-content!","paren-soup.core/refresh-content!",-351979524,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,tag_soup.core.tag_map,new cljs.core.Var(function(){return tag_soup.core.tag_map;},new cljs.core.Symbol("tag-soup.core","tag-map","tag-soup.core/tag-map",-949798691,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tag-soup.core","tag-soup.core",-552159523,null),new cljs.core.Symbol(null,"tag-map","tag-map",1786165144,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/tag_soup/core.cljc",14,1,53,53,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"token","token",429068312,null),new cljs.core.Symbol(null,"results-map","results-map",805629848,null),new cljs.core.Symbol(null,"parent-indent","parent-indent",1748203322,null)], null)),"Returns a transient map containing the tags, organized by line number.",(cljs.core.truth_(tag_soup.core.tag_map)?tag_soup.core.tag_map.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
tag_soup.core.tag_map = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("tag-soup.core","tag-map","tag-soup.core/tag-map",-949798691,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.dom.get_parent,new cljs.core.Var(function(){return paren_soup.dom.get_parent;},new cljs.core.Symbol("paren-soup.dom","get-parent","paren-soup.dom/get-parent",-984038819,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.dom","paren-soup.dom",1782176936,null),new cljs.core.Symbol(null,"get-parent","get-parent",282544271,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/dom.cljs",17,1,46,46,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol(null,"class-name","class-name",-1709293185,null)], null)),"Returns the nearest parent with the given class name.",(cljs.core.truth_(paren_soup.dom.get_parent)?paren_soup.dom.get_parent.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.dom.get_parent = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.dom","get-parent","paren-soup.dom/get-parent",-984038819,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.core.post_refresh_content_BANG_,new cljs.core.Var(function(){return paren_soup.core.post_refresh_content_BANG_;},new cljs.core.Symbol("paren-soup.core","post-refresh-content!","paren-soup.core/post-refresh-content!",854477565,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.core","paren-soup.core",1608578978,null),new cljs.core.Symbol(null,"post-refresh-content!","post-refresh-content!",-1765640568,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/core.cljs",28,1,80,80,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content","content",1656364751,null),new cljs.core.Symbol(null,"events-chan","events-chan",856382847,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Does additional work on the content after it is rendered.",(cljs.core.truth_(paren_soup.core.post_refresh_content_BANG_)?paren_soup.core.post_refresh_content_BANG_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.core.post_refresh_content_BANG_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.core","post-refresh-content!","paren-soup.core/post-refresh-content!",854477565,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.dom.get_focused_form,new cljs.core.Var(function(){return paren_soup.dom.get_focused_form;},new cljs.core.Symbol("paren-soup.dom","get-focused-form","paren-soup.dom/get-focused-form",-1212860994,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.dom","paren-soup.dom",1782176936,null),new cljs.core.Symbol(null,"get-focused-form","get-focused-form",1664201612,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/dom.cljs",22,1,98,98,cljs.core.List.EMPTY,null,(cljs.core.truth_(paren_soup.dom.get_focused_form)?paren_soup.dom.get_focused_form.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.dom.get_focused_form = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.dom","get-focused-form","paren-soup.dom/get-focused-form",-1212860994,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,mistakes_were_made.core.update_cursor_position_BANG_,new cljs.core.Var(function(){return mistakes_were_made.core.update_cursor_position_BANG_;},new cljs.core.Symbol("mistakes-were-made.core","update-cursor-position!","mistakes-were-made.core/update-cursor-position!",-890530338,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mistakes-were-made.core","mistakes-were-made.core",1671803951,null),new cljs.core.Symbol(null,"update-cursor-position!","update-cursor-position!",1557195090,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/-msrsqg/public/paren-soup.out/mistakes_were_made/core.cljc",30,1,32,32,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edit-history","edit-history",1303616998,null),new cljs.core.Symbol(null,"cursor-position","cursor-position",-1727636435,null)], null)),"Updates only the cursor position.",(cljs.core.truth_(mistakes_were_made.core.update_cursor_position_BANG_)?mistakes_were_made.core.update_cursor_position_BANG_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
mistakes_were_made.core.update_cursor_position_BANG_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("mistakes-were-made.core","update-cursor-position!","mistakes-were-made.core/update-cursor-position!",-890530338,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.console.update_console_history_BANG_,new cljs.core.Var(function(){return paren_soup.console.update_console_history_BANG_;},new cljs.core.Symbol("paren-soup.console","update-console-history!","paren-soup.console/update-console-history!",-1740192193,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.console","paren-soup.console",-1029081011,null),new cljs.core.Symbol(null,"update-console-history!","update-console-history!",-1271442960,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/console.cljs",30,1,14,14,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"console-history","console-history",-654761247,null),new cljs.core.Symbol(null,"line","line",1852876762,null)], null)),"Updates the console history atom.",(cljs.core.truth_(paren_soup.console.update_console_history_BANG_)?paren_soup.console.update_console_history_BANG_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.console.update_console_history_BANG_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.console","update-console-history!","paren-soup.console/update-console-history!",-1740192193,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.console.down_BANG_,new cljs.core.Var(function(){return paren_soup.console.down_BANG_;},new cljs.core.Symbol("paren-soup.console","down!","paren-soup.console/down!",-1340094817,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.console","paren-soup.console",-1029081011,null),new cljs.core.Symbol(null,"down!","down!",-1781565734,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/console.cljs",12,1,48,48,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"console-history","console-history",-654761247,null)], null)),"Changes the current line and returns the next line from console-history, or nil if there is none.",(cljs.core.truth_(paren_soup.console.down_BANG_)?paren_soup.console.down_BANG_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.console.down_BANG_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.console","down!","paren-soup.console/down!",-1340094817,null);
});})(opts16190_16196))
,((function (opts16190_16196){
return (function (){
var checked__16056__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,paren_soup.core.update_highlight_BANG_,new cljs.core.Var(function(){return paren_soup.core.update_highlight_BANG_;},new cljs.core.Symbol("paren-soup.core","update-highlight!","paren-soup.core/update-highlight!",325886879,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"paren-soup.core","paren-soup.core",1608578978,null),new cljs.core.Symbol(null,"update-highlight!","update-highlight!",1869639628,null),"/Users/a/.boot/cache/tmp/Users/a/p/paren-soup/2lw/r3nb31/paren_soup/core.cljs",24,1,231,231,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content","content",1656364751,null),new cljs.core.Symbol(null,"last-elem","last-elem",-784801878,null)], null)),null,(cljs.core.truth_(paren_soup.core.update_highlight_BANG_)?paren_soup.core.update_highlight_BANG_.cljs$lang$test:null)])),opts16190_16196);
if(cljs.core.truth_(checked__16056__auto__)){
paren_soup.core.update_highlight_BANG_ = checked__16056__auto__;
} else {
}

return new cljs.core.Symbol("paren-soup.core","update-highlight!","paren-soup.core/update-highlight!",325886879,null);
});})(opts16190_16196))
], true)))));

//# sourceMappingURL=main632.js.map