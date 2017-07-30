// Compiled by ClojureScript 1.9.671 {}
goog.provide('paren_soup.dom');
goog.require('cljs.core');
goog.require('goog.object');
/**
 * Returns the objects related to selection for the given element. If full-selection? is true,
 * it will use rangy instead of the native selection API in order to get the beginning and ending
 * of the selection (it is, however, much slower).
 */
paren_soup.dom.get_selection = (function paren_soup$dom$get_selection(element,full_selection_QMARK_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),element,new cljs.core.Keyword(null,"cursor-position","cursor-position",926799334),(cljs.core.truth_(full_selection_QMARK_)?(function (){var selection = rangy.getSelection();
var ranges = selection.saveCharacterRanges(element);
var temp__4655__auto__ = (function (){var G__9269 = ranges;
var G__9269__$1 = (((G__9269 == null))?null:(G__9269[(0)]));
if((G__9269__$1 == null)){
return null;
} else {
return goog.object.get(G__9269__$1,"characterRange");
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var char_range = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.object.get(char_range,"start"),goog.object.get(char_range,"end")], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}
})():((cljs.core._EQ_.call(null,(0),window.getSelection().rangeCount))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):(function (){var selection = window.getSelection();
var range = selection.getRangeAt((0));
var pre_caret_range = (function (){var G__9270 = range.cloneRange();
G__9270.selectNodeContents(element);

G__9270.setEnd(range.endContainer,range.endOffset);

return G__9270;
})();
var pos = pre_caret_range.toString().length;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,pos], null);
})()
))], null);
});
/**
 * Returns the cursor position.
 */
paren_soup.dom.get_cursor_position = (function paren_soup$dom$get_cursor_position(element,full_selection_QMARK_){
return new cljs.core.Keyword(null,"cursor-position","cursor-position",926799334).cljs$core$IFn$_invoke$arity$1(paren_soup.dom.get_selection.call(null,element,full_selection_QMARK_));
});
/**
 * Moves the cursor to the specified position.
 */
paren_soup.dom.set_cursor_position_BANG_ = (function paren_soup$dom$set_cursor_position_BANG_(element,position){
var vec__9271 = position;
var start_pos = cljs.core.nth.call(null,vec__9271,(0),null);
var end_pos = cljs.core.nth.call(null,vec__9271,(1),null);
var selection = rangy.getSelection();
var char_range = ({"start": start_pos, "end": end_pos});
var range = ({"characterRange": char_range, "backward": false, "characterOptions": null});
var ranges = [range];
return selection.restoreCharacterRanges(element,ranges);
});
/**
 * Returns the nearest parent with the given class name.
 */
paren_soup.dom.get_parent = (function paren_soup$dom$get_parent(node,class_name){
var node__$1 = node;
while(true){
var temp__4657__auto__ = node__$1.parentElement;
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
if(cljs.core.truth_(parent.classList.contains(class_name))){
return parent;
} else {
var G__9274 = parent;
node__$1 = G__9274;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Returns all the parents with the given class name.
 */
paren_soup.dom.get_parents = (function paren_soup$dom$get_parents(node,class_name){
var node__$1 = node;
var elems = cljs.core.List.EMPTY;
while(true){
var temp__4655__auto__ = paren_soup.dom.get_parent.call(null,node__$1,class_name);
if(cljs.core.truth_(temp__4655__auto__)){
var parent = temp__4655__auto__;
var G__9275 = parent;
var G__9276 = cljs.core.conj.call(null,elems,parent);
node__$1 = G__9275;
elems = G__9276;
continue;
} else {
return elems;
}
break;
}
});
paren_soup.dom.text_node_QMARK_ = (function paren_soup$dom$text_node_QMARK_(node){
return cljs.core._EQ_.call(null,(3),node.nodeType);
});
paren_soup.dom.error_node_QMARK_ = (function paren_soup$dom$error_node_QMARK_(node){
var G__9277 = node;
var G__9277__$1 = (((G__9277 == null))?null:G__9277.classList);
if((G__9277__$1 == null)){
return null;
} else {
return G__9277__$1.contains("error");
}
});
paren_soup.dom.coll_node_QMARK_ = (function paren_soup$dom$coll_node_QMARK_(node){
var G__9278 = node;
var G__9278__$1 = (((G__9278 == null))?null:G__9278.classList);
if((G__9278__$1 == null)){
return null;
} else {
return G__9278__$1.contains("collection");
}
});
paren_soup.dom.top_level_QMARK_ = (function paren_soup$dom$top_level_QMARK_(node){
var G__9279 = node;
var G__9279__$1 = (((G__9279 == null))?null:G__9279.parentElement);
var G__9279__$2 = (((G__9279__$1 == null))?null:G__9279__$1.classList);
if((G__9279__$2 == null)){
return null;
} else {
return G__9279__$2.contains("content");
}
});
/**
 * Returns the common ancestor of the given nodes.
 */
paren_soup.dom.common_ancestor = (function paren_soup$dom$common_ancestor(first_node,second_node){
var first_parent = cljs.core.first.call(null,paren_soup.dom.get_parents.call(null,first_node,"collection"));
var second_parent = cljs.core.first.call(null,paren_soup.dom.get_parents.call(null,second_node,"collection"));
if(cljs.core.truth_((function (){var and__7273__auto__ = first_parent;
if(cljs.core.truth_(and__7273__auto__)){
var and__7273__auto____$1 = second_parent;
if(cljs.core.truth_(and__7273__auto____$1)){
return cljs.core._EQ_.call(null,first_parent,second_parent);
} else {
return and__7273__auto____$1;
}
} else {
return and__7273__auto__;
}
})())){
return first_parent;
} else {
if(cljs.core.truth_((function (){var and__7273__auto__ = cljs.core._EQ_.call(null,first_node,second_node);
if(and__7273__auto__){
var and__7273__auto____$1 = paren_soup.dom.text_node_QMARK_.call(null,first_node);
if(cljs.core.truth_(and__7273__auto____$1)){
return paren_soup.dom.top_level_QMARK_.call(null,first_node);
} else {
return and__7273__auto____$1;
}
} else {
return and__7273__auto__;
}
})())){
return first_node;
} else {
return null;
}
}
});
paren_soup.dom.get_focused_elem = (function paren_soup$dom$get_focused_elem(class_name){
var G__9280 = rangy;
var G__9280__$1 = (((G__9280 == null))?null:G__9280.getSelection());
var G__9280__$2 = (((G__9280__$1 == null))?null:G__9280__$1.anchorNode);
if((G__9280__$2 == null)){
return null;
} else {
return paren_soup.dom.get_parent.call(null,G__9280__$2,class_name);
}
});
paren_soup.dom.get_focused_form = (function paren_soup$dom$get_focused_form(){
return paren_soup.dom.get_focused_elem.call(null,"collection");
});
paren_soup.dom.get_nearest_ns = (function paren_soup$dom$get_nearest_ns(node){
var node__$1 = node;
while(true){
if(cljs.core.truth_((function (){var G__9281 = node__$1;
var G__9281__$1 = (((G__9281 == null))?null:G__9281.childNodes);
var G__9281__$2 = (((G__9281__$1 == null))?null:G__9281__$1.item((1)));
var G__9281__$3 = (((G__9281__$2 == null))?null:G__9281__$2.textContent);
if((G__9281__$3 == null)){
return null;
} else {
return cljs.core._EQ_.call(null,G__9281__$3,"ns");
}
})())){
var G__9282 = node__$1;
var G__9282__$1 = (((G__9282 == null))?null:G__9282.childNodes);
var G__9282__$2 = (((G__9282__$1 == null))?null:G__9282__$1.item((3)));
var G__9282__$3 = (((G__9282__$2 == null))?null:G__9282__$2.textContent);
if((G__9282__$3 == null)){
return null;
} else {
return cljs.core.symbol.call(null,G__9282__$3);
}
} else {
var temp__4657__auto__ = node__$1.previousSibling;
if(cljs.core.truth_(temp__4657__auto__)){
var sibling = temp__4657__auto__;
var G__9283 = sibling;
node__$1 = G__9283;
continue;
} else {
return null;
}
}
break;
}
});
paren_soup.dom.get_focused_top_level = (function paren_soup$dom$get_focused_top_level(){
var temp__4657__auto__ = (function (){var G__9284 = rangy;
var G__9284__$1 = (((G__9284 == null))?null:G__9284.getSelection());
if((G__9284__$1 == null)){
return null;
} else {
return G__9284__$1.anchorNode;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var node__$1 = node;
while(true){
if(cljs.core.truth_(paren_soup.dom.top_level_QMARK_.call(null,node__$1))){
return node__$1;
} else {
var temp__4657__auto____$1 = node__$1.parentElement;
if(cljs.core.truth_(temp__4657__auto____$1)){
var parent = temp__4657__auto____$1;
var G__9285 = parent;
node__$1 = G__9285;
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
paren_soup.dom.get_completion_context = (function paren_soup$dom$get_completion_context(symbol_length,cursor_offset){
var temp__4657__auto__ = paren_soup.dom.get_focused_top_level.call(null);
if(cljs.core.truth_(temp__4657__auto__)){
var top_level_elem = temp__4657__auto__;
var pos = cljs.core.first.call(null,paren_soup.dom.get_cursor_position.call(null,top_level_elem,false));
var prefix_start = (pos - cursor_offset);
var text = top_level_elem.textContent;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),paren_soup.dom.get_nearest_ns.call(null,top_level_elem),new cljs.core.Keyword(null,"context-before","context-before",502665673),cljs.core.subs.call(null,text,(0),prefix_start),new cljs.core.Keyword(null,"context-after","context-after",889714075),cljs.core.subs.call(null,text,(prefix_start + symbol_length)),new cljs.core.Keyword(null,"start-position","start-position",-576733324),prefix_start], null);
} else {
return null;
}
});
paren_soup.dom.get_completion_info = (function paren_soup$dom$get_completion_info(){
var temp__4657__auto__ = paren_soup.dom.get_focused_elem.call(null,"symbol");
if(cljs.core.truth_(temp__4657__auto__)){
var prefix_elem = temp__4657__auto__;
var pos = cljs.core.first.call(null,paren_soup.dom.get_cursor_position.call(null,prefix_elem,false));
var text = prefix_elem.textContent;
var prefix = cljs.core.subs.call(null,text,(0),pos);
return cljs.core.assoc.call(null,paren_soup.dom.get_completion_context.call(null,cljs.core.count.call(null,text),cljs.core.count.call(null,prefix)),new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"prefix","prefix",-265908465),prefix);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map