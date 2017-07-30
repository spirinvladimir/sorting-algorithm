// Compiled by ClojureScript 1.9.671 {}
goog.provide('paren_soup.instarepl');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('html_soup.core');
goog.require('clojure.string');
goog.require('paren_soup.dom');
/**
 * Returns the location of each elem.
 */
paren_soup.instarepl.elems__GT_locations = (function paren_soup$instarepl$elems__GT_locations(elems,top_offset){
var i = (0);
var locations = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var temp__4655__auto__ = cljs.core.get.call(null,elems,i);
if(cljs.core.truth_(temp__4655__auto__)){
var elem = temp__4655__auto__;
var top = (elem.offsetTop - top_offset);
var height = elem.offsetHeight;
var G__12566 = (i + (1));
var G__12567 = cljs.core.conj_BANG_.call(null,locations,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),top,new cljs.core.Keyword(null,"height","height",1025178622),height], null));
i = G__12566;
locations = G__12567;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,locations);
}
break;
}
});
/**
 * Returns HTML for the given eval results.
 */
paren_soup.instarepl.results__GT_html = (function paren_soup$instarepl$results__GT_html(results,locations){
var i = (0);
var evals = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var res = cljs.core.get.call(null,results,i);
var map__12568 = cljs.core.get.call(null,locations,i);
var map__12568__$1 = ((((!((map__12568 == null)))?((((map__12568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12568.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12568):map__12568);
var top = cljs.core.get.call(null,map__12568__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var height = cljs.core.get.call(null,map__12568__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_((function (){var and__7273__auto__ = res;
if(cljs.core.truth_(and__7273__auto__)){
var and__7273__auto____$1 = top;
if(cljs.core.truth_(and__7273__auto____$1)){
return height;
} else {
return and__7273__auto____$1;
}
} else {
return and__7273__auto__;
}
})())){
var G__12571 = (i + (1));
var G__12572 = cljs.core.conj_BANG_.call(null,evals,goog.string.format("<div class='%s' style='top: %spx; height: %spx; min-height: %spx'>%s</div>",((cljs.core.array_QMARK_.call(null,res))?"result error":"result"),top,height,height,(function (){var G__12570 = ((cljs.core.array_QMARK_.call(null,res))?cljs.core.first.call(null,res):res);
if((G__12570 == null)){
return null;
} else {
return html_soup.core.escape_html_str.call(null,G__12570);
}
})()));
i = G__12571;
evals = G__12572;
continue;
} else {
return clojure.string.join.call(null,cljs.core.persistent_BANG_.call(null,evals));
}
break;
}
});
/**
 * Returns collections from the given DOM node.
 */
paren_soup.instarepl.get_collections = (function paren_soup$instarepl$get_collections(element){
return cljs.core.vec.call(null,(function (){var iter__8074__auto__ = (function paren_soup$instarepl$get_collections_$_iter__12573(s__12574){
return (new cljs.core.LazySeq(null,(function (){
var s__12574__$1 = s__12574;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12574__$1);
if(temp__4657__auto__){
var s__12574__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12574__$2)){
var c__8072__auto__ = cljs.core.chunk_first.call(null,s__12574__$2);
var size__8073__auto__ = cljs.core.count.call(null,c__8072__auto__);
var b__12576 = cljs.core.chunk_buffer.call(null,size__8073__auto__);
if((function (){var i__12575 = (0);
while(true){
if((i__12575 < size__8073__auto__)){
var elem = cljs.core._nth.call(null,c__8072__auto__,i__12575);
var classes = elem.classList;
if(cljs.core.truth_((function (){var or__7285__auto__ = classes.contains("collection");
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return classes.contains("symbol");
}
})())){
cljs.core.chunk_append.call(null,b__12576,elem);

var G__12577 = (i__12575 + (1));
i__12575 = G__12577;
continue;
} else {
var G__12578 = (i__12575 + (1));
i__12575 = G__12578;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12576),paren_soup$instarepl$get_collections_$_iter__12573.call(null,cljs.core.chunk_rest.call(null,s__12574__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12576),null);
}
} else {
var elem = cljs.core.first.call(null,s__12574__$2);
var classes = elem.classList;
if(cljs.core.truth_((function (){var or__7285__auto__ = classes.contains("collection");
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return classes.contains("symbol");
}
})())){
return cljs.core.cons.call(null,elem,paren_soup$instarepl$get_collections_$_iter__12573.call(null,cljs.core.rest.call(null,s__12574__$2)));
} else {
var G__12579 = cljs.core.rest.call(null,s__12574__$2);
s__12574__$1 = G__12579;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8074__auto__.call(null,cljs.core.array_seq.call(null,element.children));
})());
});
paren_soup.instarepl.collection__GT_content = (function paren_soup$instarepl$collection__GT_content(elem){
var e = elem;
var content = elem.textContent;
while(true){
var temp__4655__auto__ = e.previousSibling;
if(cljs.core.truth_(temp__4655__auto__)){
var prev = temp__4655__auto__;
if(cljs.core.truth_(paren_soup.dom.text_node_QMARK_.call(null,prev))){
var G__12580 = prev;
var G__12581 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prev.textContent),cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join('');
e = G__12580;
content = G__12581;
continue;
} else {
return content;
}
} else {
return content;
}
break;
}
});
paren_soup.instarepl.create_compiler_fn = (function paren_soup$instarepl$create_compiler_fn(){
try{var eval_worker = (new Worker("paren-soup-compiler.js"));
return ((function (eval_worker){
return (function (coll,receive_fn){
eval_worker.onmessage = ((function (eval_worker){
return (function (p1__12582_SHARP_){
return receive_fn.call(null,cljs.core.vec.call(null,p1__12582_SHARP_.data));
});})(eval_worker))
;

return eval_worker.postMessage(cljs.core.into_array.call(null,coll));
});
;})(eval_worker))
}catch (e12583){if((e12583 instanceof Error)){
var _ = e12583;
return ((function (_){
return (function (___$1,___$2){
throw Error;
});
;})(_))
} else {
throw e12583;

}
}});

//# sourceMappingURL=instarepl.js.map