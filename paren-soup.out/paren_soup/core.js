// Compiled by ClojureScript 1.9.671 {}
goog.provide('paren_soup.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.functions');
goog.require('cljsjs.rangy_core');
goog.require('cljsjs.rangy_textrange');
goog.require('mistakes_were_made.core');
goog.require('html_soup.core');
goog.require('cross_parinfer.core');
goog.require('paren_soup.console');
goog.require('paren_soup.instarepl');
goog.require('paren_soup.dom');
/**
 * Shows a popup with an error message.
 */
paren_soup.core.show_error_message_BANG_ = (function paren_soup$core$show_error_message_BANG_(parent_elem,event){
var elem = event.target;
var x = event.clientX;
var y = event.clientY;
var popup = document.createElement("div");
popup.textContent = elem.dataset.message;

popup.style.top = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('');

popup.style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('');

popup.className = "error-text";

return parent_elem.appendChild(popup);
});
/**
 * Hides all error popups.
 */
paren_soup.core.hide_error_messages_BANG_ = (function paren_soup$core$hide_error_messages_BANG_(parent_elem){
var seq__12623 = cljs.core.seq.call(null,cljs.core.array_seq.call(null,parent_elem.querySelectorAll(".error-text")));
var chunk__12624 = null;
var count__12625 = (0);
var i__12626 = (0);
while(true){
if((i__12626 < count__12625)){
var elem = cljs.core._nth.call(null,chunk__12624,i__12626);
parent_elem.removeChild(elem);

var G__12627 = seq__12623;
var G__12628 = chunk__12624;
var G__12629 = count__12625;
var G__12630 = (i__12626 + (1));
seq__12623 = G__12627;
chunk__12624 = G__12628;
count__12625 = G__12629;
i__12626 = G__12630;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12623);
if(temp__4657__auto__){
var seq__12623__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12623__$1)){
var c__8105__auto__ = cljs.core.chunk_first.call(null,seq__12623__$1);
var G__12631 = cljs.core.chunk_rest.call(null,seq__12623__$1);
var G__12632 = c__8105__auto__;
var G__12633 = cljs.core.count.call(null,c__8105__auto__);
var G__12634 = (0);
seq__12623 = G__12631;
chunk__12624 = G__12632;
count__12625 = G__12633;
i__12626 = G__12634;
continue;
} else {
var elem = cljs.core.first.call(null,seq__12623__$1);
parent_elem.removeChild(elem);

var G__12635 = cljs.core.next.call(null,seq__12623__$1);
var G__12636 = null;
var G__12637 = (0);
var G__12638 = (0);
seq__12623 = G__12635;
chunk__12624 = G__12636;
count__12625 = G__12637;
i__12626 = G__12638;
continue;
}
} else {
return null;
}
}
break;
}
});
paren_soup.core.rainbow_count = (5);
/**
 * Returns a map of elements and class names.
 */
paren_soup.core.rainbow_delimiters = (function paren_soup$core$rainbow_delimiters(var_args){
var G__12640 = arguments.length;
switch (G__12640) {
case 2:
return paren_soup.core.rainbow_delimiters.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paren_soup.core.rainbow_delimiters.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

paren_soup.core.rainbow_delimiters.cljs$core$IFn$_invoke$arity$2 = (function (parent,level){
return cljs.core.persistent_BANG_.call(null,paren_soup.core.rainbow_delimiters.call(null,parent,level,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY)));
});

paren_soup.core.rainbow_delimiters.cljs$core$IFn$_invoke$arity$3 = (function (parent,level,m){
return cljs.core.reduce.call(null,(function (m__$1,elem){
var classes = elem.classList;
if(cljs.core.truth_(classes.contains("delimiter"))){
return cljs.core.assoc_BANG_.call(null,m__$1,elem,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("rainbow-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod.call(null,level,(5)))].join(''));
} else {
if(cljs.core.truth_(classes.contains("collection"))){
return paren_soup.core.rainbow_delimiters.call(null,elem,(level + (1)),m__$1);
} else {
return m__$1;

}
}
}),m,cljs.core.array_seq.call(null,parent.children));
});

paren_soup.core.rainbow_delimiters.cljs$lang$maxFixedArity = 3;

/**
 * Adds line numbers to the numbers.
 */
paren_soup.core.line_numbers = (function paren_soup$core$line_numbers(line_count){
return clojure.string.join.call(null,(function (){var iter__8074__auto__ = (function paren_soup$core$line_numbers_$_iter__12642(s__12643){
return (new cljs.core.LazySeq(null,(function (){
var s__12643__$1 = s__12643;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12643__$1);
if(temp__4657__auto__){
var s__12643__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12643__$2)){
var c__8072__auto__ = cljs.core.chunk_first.call(null,s__12643__$2);
var size__8073__auto__ = cljs.core.count.call(null,c__8072__auto__);
var b__12645 = cljs.core.chunk_buffer.call(null,size__8073__auto__);
if((function (){var i__12644 = (0);
while(true){
if((i__12644 < size__8073__auto__)){
var i = cljs.core._nth.call(null,c__8072__auto__,i__12644);
cljs.core.chunk_append.call(null,b__12645,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((i + (1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''));

var G__12646 = (i__12644 + (1));
i__12644 = G__12646;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12645),paren_soup$core$line_numbers_$_iter__12642.call(null,cljs.core.chunk_rest.call(null,s__12643__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12645),null);
}
} else {
var i = cljs.core.first.call(null,s__12643__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((i + (1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''),paren_soup$core$line_numbers_$_iter__12642.call(null,cljs.core.rest.call(null,s__12643__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8074__auto__.call(null,cljs.core.range.call(null,line_count));
})());
});
/**
 * Refreshes the line numbers.
 */
paren_soup.core.refresh_numbers_BANG_ = (function paren_soup$core$refresh_numbers_BANG_(numbers,line_count){
return numbers.innerHTML = paren_soup.core.line_numbers.call(null,line_count);
});
/**
 * Refreshes the InstaREPL.
 */
paren_soup.core.refresh_instarepl_BANG_ = (function paren_soup$core$refresh_instarepl_BANG_(instarepl,content,compiler_fn){
var elems = paren_soup.instarepl.get_collections.call(null,content);
var locations = paren_soup.instarepl.elems__GT_locations.call(null,elems,instarepl.offsetTop);
var forms = cljs.core.map.call(null,((function (elems,locations){
return (function (p1__12647_SHARP_){
return clojure.string.replace.call(null,p1__12647_SHARP_,"\u00A0"," ");
});})(elems,locations))
,cljs.core.map.call(null,paren_soup.instarepl.collection__GT_content,elems));
return compiler_fn.call(null,forms,((function (elems,locations,forms){
return (function (results){
if(cljs.core.truth_(instarepl.parentElement)){
return instarepl.innerHTML = paren_soup.instarepl.results__GT_html.call(null,results,locations);
} else {
return null;
}
});})(elems,locations,forms))
);
});
/**
 * Does additional work on the content after it is rendered.
 */
paren_soup.core.post_refresh_content_BANG_ = (function paren_soup$core$post_refresh_content_BANG_(content,events_chan,state){
var temp__4655__auto___12664 = new cljs.core.Keyword(null,"cropped-state","cropped-state",-1312672062).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__4655__auto___12664)){
var crop_12665 = temp__4655__auto___12664;
paren_soup.dom.set_cursor_position_BANG_.call(null,new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(crop_12665),new cljs.core.Keyword(null,"cursor-position","cursor-position",926799334).cljs$core$IFn$_invoke$arity$1(crop_12665));
} else {
paren_soup.dom.set_cursor_position_BANG_.call(null,content,new cljs.core.Keyword(null,"cursor-position","cursor-position",926799334).cljs$core$IFn$_invoke$arity$1(state));
}

paren_soup.core.hide_error_messages_BANG_.call(null,content.parentElement);

var seq__12650_12666 = cljs.core.seq.call(null,cljs.core.array_seq.call(null,content.querySelectorAll(".error")));
var chunk__12651_12667 = null;
var count__12652_12668 = (0);
var i__12653_12669 = (0);
while(true){
if((i__12653_12669 < count__12652_12668)){
var elem_12670 = cljs.core._nth.call(null,chunk__12651_12667,i__12653_12669);
var show_error_icon_BANG__12671 = ((function (seq__12650_12666,chunk__12651_12667,count__12652_12668,i__12653_12669,elem_12670){
return (function (elem__$1){
return elem__$1.style.display = "inline-block";
});})(seq__12650_12666,chunk__12651_12667,count__12652_12668,i__12653_12669,elem_12670))
;
var show_error_icon_BANG__12672__$1 = goog.functions.debounce(show_error_icon_BANG__12671,(1000));
show_error_icon_BANG__12672__$1.call(null,elem_12670);

goog.events.listen(elem_12670,"mouseenter",((function (seq__12650_12666,chunk__12651_12667,count__12652_12668,i__12653_12669,elem_12670){
return (function (p1__12648_SHARP_){
return cljs.core.async.put_BANG_.call(null,events_chan,p1__12648_SHARP_);
});})(seq__12650_12666,chunk__12651_12667,count__12652_12668,i__12653_12669,elem_12670))
);

goog.events.listen(elem_12670,"mouseleave",((function (seq__12650_12666,chunk__12651_12667,count__12652_12668,i__12653_12669,elem_12670){
return (function (p1__12649_SHARP_){
return cljs.core.async.put_BANG_.call(null,events_chan,p1__12649_SHARP_);
});})(seq__12650_12666,chunk__12651_12667,count__12652_12668,i__12653_12669,elem_12670))
);

var G__12673 = seq__12650_12666;
var G__12674 = chunk__12651_12667;
var G__12675 = count__12652_12668;
var G__12676 = (i__12653_12669 + (1));
seq__12650_12666 = G__12673;
chunk__12651_12667 = G__12674;
count__12652_12668 = G__12675;
i__12653_12669 = G__12676;
continue;
} else {
var temp__4657__auto___12677 = cljs.core.seq.call(null,seq__12650_12666);
if(temp__4657__auto___12677){
var seq__12650_12678__$1 = temp__4657__auto___12677;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12650_12678__$1)){
var c__8105__auto___12679 = cljs.core.chunk_first.call(null,seq__12650_12678__$1);
var G__12680 = cljs.core.chunk_rest.call(null,seq__12650_12678__$1);
var G__12681 = c__8105__auto___12679;
var G__12682 = cljs.core.count.call(null,c__8105__auto___12679);
var G__12683 = (0);
seq__12650_12666 = G__12680;
chunk__12651_12667 = G__12681;
count__12652_12668 = G__12682;
i__12653_12669 = G__12683;
continue;
} else {
var elem_12684 = cljs.core.first.call(null,seq__12650_12678__$1);
var show_error_icon_BANG__12685 = ((function (seq__12650_12666,chunk__12651_12667,count__12652_12668,i__12653_12669,elem_12684,seq__12650_12678__$1,temp__4657__auto___12677){
return (function (elem__$1){
return elem__$1.style.display = "inline-block";
});})(seq__12650_12666,chunk__12651_12667,count__12652_12668,i__12653_12669,elem_12684,seq__12650_12678__$1,temp__4657__auto___12677))
;
var show_error_icon_BANG__12686__$1 = goog.functions.debounce(show_error_icon_BANG__12685,(1000));
show_error_icon_BANG__12686__$1.call(null,elem_12684);

goog.events.listen(elem_12684,"mouseenter",((function (seq__12650_12666,chunk__12651_12667,count__12652_12668,i__12653_12669,elem_12684,seq__12650_12678__$1,temp__4657__auto___12677){
return (function (p1__12648_SHARP_){
return cljs.core.async.put_BANG_.call(null,events_chan,p1__12648_SHARP_);
});})(seq__12650_12666,chunk__12651_12667,count__12652_12668,i__12653_12669,elem_12684,seq__12650_12678__$1,temp__4657__auto___12677))
);

goog.events.listen(elem_12684,"mouseleave",((function (seq__12650_12666,chunk__12651_12667,count__12652_12668,i__12653_12669,elem_12684,seq__12650_12678__$1,temp__4657__auto___12677){
return (function (p1__12649_SHARP_){
return cljs.core.async.put_BANG_.call(null,events_chan,p1__12649_SHARP_);
});})(seq__12650_12666,chunk__12651_12667,count__12652_12668,i__12653_12669,elem_12684,seq__12650_12678__$1,temp__4657__auto___12677))
);

var G__12687 = cljs.core.next.call(null,seq__12650_12678__$1);
var G__12688 = null;
var G__12689 = (0);
var G__12690 = (0);
seq__12650_12666 = G__12687;
chunk__12651_12667 = G__12688;
count__12652_12668 = G__12689;
i__12653_12669 = G__12690;
continue;
}
} else {
}
}
break;
}

var seq__12654 = cljs.core.seq.call(null,paren_soup.core.rainbow_delimiters.call(null,content,(-1)));
var chunk__12655 = null;
var count__12656 = (0);
var i__12657 = (0);
while(true){
if((i__12657 < count__12656)){
var vec__12658 = cljs.core._nth.call(null,chunk__12655,i__12657);
var elem = cljs.core.nth.call(null,vec__12658,(0),null);
var class_name = cljs.core.nth.call(null,vec__12658,(1),null);
elem.classList.add(class_name);

var G__12691 = seq__12654;
var G__12692 = chunk__12655;
var G__12693 = count__12656;
var G__12694 = (i__12657 + (1));
seq__12654 = G__12691;
chunk__12655 = G__12692;
count__12656 = G__12693;
i__12657 = G__12694;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12654);
if(temp__4657__auto__){
var seq__12654__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12654__$1)){
var c__8105__auto__ = cljs.core.chunk_first.call(null,seq__12654__$1);
var G__12695 = cljs.core.chunk_rest.call(null,seq__12654__$1);
var G__12696 = c__8105__auto__;
var G__12697 = cljs.core.count.call(null,c__8105__auto__);
var G__12698 = (0);
seq__12654 = G__12695;
chunk__12655 = G__12696;
count__12656 = G__12697;
i__12657 = G__12698;
continue;
} else {
var vec__12661 = cljs.core.first.call(null,seq__12654__$1);
var elem = cljs.core.nth.call(null,vec__12661,(0),null);
var class_name = cljs.core.nth.call(null,vec__12661,(1),null);
elem.classList.add(class_name);

var G__12699 = cljs.core.next.call(null,seq__12654__$1);
var G__12700 = null;
var G__12701 = (0);
var G__12702 = (0);
seq__12654 = G__12699;
chunk__12655 = G__12700;
count__12656 = G__12701;
i__12657 = G__12702;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Replaces a single node in the content, and siblings if necessary.
 */
paren_soup.core.refresh_content_element_BANG_ = (function paren_soup$core$refresh_content_element_BANG_(cropped_state){
var map__12704 = cropped_state;
var map__12704__$1 = ((((!((map__12704 == null)))?((((map__12704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12704):map__12704);
var element = cljs.core.get.call(null,map__12704__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var text = cljs.core.get.call(null,map__12704__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var parent = element.parentElement;
var last_elem = parent.lastChild;
var last_error = (function (){var current_elem = last_elem;
while(true){
if(cljs.core.truth_(paren_soup.dom.error_node_QMARK_.call(null,current_elem))){
return current_elem;
} else {
if(((current_elem == null)) || (cljs.core._EQ_.call(null,element,current_elem))){
return null;
} else {
var G__12718 = current_elem.previousSibling;
current_elem = G__12718;
continue;

}
}
break;
}
})();
var last_elem_to_refresh = (cljs.core.truth_(last_error)?(function (){var current_elem = last_error;
while(true){
var temp__4655__auto__ = current_elem.nextSibling;
if(cljs.core.truth_(temp__4655__auto__)){
var sibling = temp__4655__auto__;
if(cljs.core.truth_(paren_soup.dom.coll_node_QMARK_.call(null,sibling))){
return current_elem;
} else {
var G__12719 = sibling;
current_elem = G__12719;
continue;
}
} else {
return current_elem;
}
break;
}
})():null);
var old_elems = (function (){var elems = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [element], null);
var current_elem = element;
while(true){
if(cljs.core._EQ_.call(null,last_elem_to_refresh,current_elem)){
return elems;
} else {
if(cljs.core.truth_((function (){var or__7285__auto__ = !((last_elem_to_refresh == null));
if(or__7285__auto__){
return or__7285__auto__;
} else {
return paren_soup.dom.text_node_QMARK_.call(null,current_elem);
}
})())){
var temp__4655__auto__ = current_elem.nextSibling;
if(cljs.core.truth_(temp__4655__auto__)){
var sibling = temp__4655__auto__;
var G__12720 = cljs.core.conj.call(null,elems,sibling);
var G__12721 = sibling;
elems = G__12720;
current_elem = G__12721;
continue;
} else {
return elems;
}
} else {
return elems;

}
}
break;
}
})();
var _ = element.textContent = text;
var text__$1 = clojure.string.join.call(null,cljs.core.map.call(null,((function (map__12704,map__12704__$1,element,text,parent,last_elem,last_error,last_elem_to_refresh,old_elems,_){
return (function (p1__12703_SHARP_){
return p1__12703_SHARP_.textContent;
});})(map__12704,map__12704__$1,element,text,parent,last_elem,last_error,last_elem_to_refresh,old_elems,_))
,old_elems));
var temp_elem = document.createElement("span");
var ___$1 = temp_elem.innerHTML = html_soup.core.code__GT_html.call(null,text__$1);
var new_elems = cljs.core.doall.call(null,(function (){var iter__8074__auto__ = ((function (map__12704,map__12704__$1,element,text,parent,last_elem,last_error,last_elem_to_refresh,old_elems,_,text__$1,temp_elem,___$1){
return (function paren_soup$core$refresh_content_element_BANG__$_iter__12706(s__12707){
return (new cljs.core.LazySeq(null,((function (map__12704,map__12704__$1,element,text,parent,last_elem,last_error,last_elem_to_refresh,old_elems,_,text__$1,temp_elem,___$1){
return (function (){
var s__12707__$1 = s__12707;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12707__$1);
if(temp__4657__auto__){
var s__12707__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12707__$2)){
var c__8072__auto__ = cljs.core.chunk_first.call(null,s__12707__$2);
var size__8073__auto__ = cljs.core.count.call(null,c__8072__auto__);
var b__12709 = cljs.core.chunk_buffer.call(null,size__8073__auto__);
if((function (){var i__12708 = (0);
while(true){
if((i__12708 < size__8073__auto__)){
var i = cljs.core._nth.call(null,c__8072__auto__,i__12708);
cljs.core.chunk_append.call(null,b__12709,temp_elem.childNodes.item(i));

var G__12722 = (i__12708 + (1));
i__12708 = G__12722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12709),paren_soup$core$refresh_content_element_BANG__$_iter__12706.call(null,cljs.core.chunk_rest.call(null,s__12707__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12709),null);
}
} else {
var i = cljs.core.first.call(null,s__12707__$2);
return cljs.core.cons.call(null,temp_elem.childNodes.item(i),paren_soup$core$refresh_content_element_BANG__$_iter__12706.call(null,cljs.core.rest.call(null,s__12707__$2)));
}
} else {
return null;
}
break;
}
});})(map__12704,map__12704__$1,element,text,parent,last_elem,last_error,last_elem_to_refresh,old_elems,_,text__$1,temp_elem,___$1))
,null,null));
});})(map__12704,map__12704__$1,element,text,parent,last_elem,last_error,last_elem_to_refresh,old_elems,_,text__$1,temp_elem,___$1))
;
return iter__8074__auto__.call(null,cljs.core.range.call(null,temp_elem.childNodes.length));
})());
var seq__12710_12723 = cljs.core.seq.call(null,new_elems);
var chunk__12711_12724 = null;
var count__12712_12725 = (0);
var i__12713_12726 = (0);
while(true){
if((i__12713_12726 < count__12712_12725)){
var new_elem_12727 = cljs.core._nth.call(null,chunk__12711_12724,i__12713_12726);
parent.insertBefore(new_elem_12727,element);

var G__12728 = seq__12710_12723;
var G__12729 = chunk__12711_12724;
var G__12730 = count__12712_12725;
var G__12731 = (i__12713_12726 + (1));
seq__12710_12723 = G__12728;
chunk__12711_12724 = G__12729;
count__12712_12725 = G__12730;
i__12713_12726 = G__12731;
continue;
} else {
var temp__4657__auto___12732 = cljs.core.seq.call(null,seq__12710_12723);
if(temp__4657__auto___12732){
var seq__12710_12733__$1 = temp__4657__auto___12732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12710_12733__$1)){
var c__8105__auto___12734 = cljs.core.chunk_first.call(null,seq__12710_12733__$1);
var G__12735 = cljs.core.chunk_rest.call(null,seq__12710_12733__$1);
var G__12736 = c__8105__auto___12734;
var G__12737 = cljs.core.count.call(null,c__8105__auto___12734);
var G__12738 = (0);
seq__12710_12723 = G__12735;
chunk__12711_12724 = G__12736;
count__12712_12725 = G__12737;
i__12713_12726 = G__12738;
continue;
} else {
var new_elem_12739 = cljs.core.first.call(null,seq__12710_12733__$1);
parent.insertBefore(new_elem_12739,element);

var G__12740 = cljs.core.next.call(null,seq__12710_12733__$1);
var G__12741 = null;
var G__12742 = (0);
var G__12743 = (0);
seq__12710_12723 = G__12740;
chunk__12711_12724 = G__12741;
count__12712_12725 = G__12742;
i__12713_12726 = G__12743;
continue;
}
} else {
}
}
break;
}

var seq__12714_12744 = cljs.core.seq.call(null,old_elems);
var chunk__12715_12745 = null;
var count__12716_12746 = (0);
var i__12717_12747 = (0);
while(true){
if((i__12717_12747 < count__12716_12746)){
var old_elem_12748 = cljs.core._nth.call(null,chunk__12715_12745,i__12717_12747);
parent.removeChild(old_elem_12748);

var G__12749 = seq__12714_12744;
var G__12750 = chunk__12715_12745;
var G__12751 = count__12716_12746;
var G__12752 = (i__12717_12747 + (1));
seq__12714_12744 = G__12749;
chunk__12715_12745 = G__12750;
count__12716_12746 = G__12751;
i__12717_12747 = G__12752;
continue;
} else {
var temp__4657__auto___12753 = cljs.core.seq.call(null,seq__12714_12744);
if(temp__4657__auto___12753){
var seq__12714_12754__$1 = temp__4657__auto___12753;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12714_12754__$1)){
var c__8105__auto___12755 = cljs.core.chunk_first.call(null,seq__12714_12754__$1);
var G__12756 = cljs.core.chunk_rest.call(null,seq__12714_12754__$1);
var G__12757 = c__8105__auto___12755;
var G__12758 = cljs.core.count.call(null,c__8105__auto___12755);
var G__12759 = (0);
seq__12714_12744 = G__12756;
chunk__12715_12745 = G__12757;
count__12716_12746 = G__12758;
i__12717_12747 = G__12759;
continue;
} else {
var old_elem_12760 = cljs.core.first.call(null,seq__12714_12754__$1);
parent.removeChild(old_elem_12760);

var G__12761 = cljs.core.next.call(null,seq__12714_12754__$1);
var G__12762 = null;
var G__12763 = (0);
var G__12764 = (0);
seq__12714_12744 = G__12761;
chunk__12715_12745 = G__12762;
count__12716_12746 = G__12763;
i__12717_12747 = G__12764;
continue;
}
} else {
}
}
break;
}

return cljs.core.assoc.call(null,cropped_state,new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first.call(null,new_elems));
});
/**
 * Refreshes the content.
 */
paren_soup.core.refresh_content_BANG_ = (function paren_soup$core$refresh_content_BANG_(content,state){
var temp__4655__auto__ = new cljs.core.Keyword(null,"cropped-state","cropped-state",-1312672062).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__4655__auto__)){
var crop = temp__4655__auto__;
var crop__$1 = paren_soup.core.refresh_content_element_BANG_.call(null,crop);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(state),content.textContent)){
return paren_soup.core.refresh_content_BANG_.call(null,content,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"cropped-state","cropped-state",-1312672062)));
} else {
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"cropped-state","cropped-state",-1312672062),crop__$1);
}
} else {
content.innerHTML = html_soup.core.code__GT_html.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(state));

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"cropped-state","cropped-state",-1312672062));
}
});
paren_soup.core.refresh_console_content_BANG_ = (function paren_soup$core$refresh_console_content_BANG_(content,state,console_start_num,clj_QMARK_){
content.innerHTML = (cljs.core.truth_(clj_QMARK_)?(function (){var pre_text = cljs.core.subs.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(state),(0),console_start_num);
var post_text = cljs.core.subs.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(state),console_start_num);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(html_soup.core.escape_html_str.call(null,pre_text)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html_soup.core.code__GT_html.call(null,post_text))].join('');
})():html_soup.core.escape_html_str.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(state)));

return state;
});
paren_soup.core.add_parinfer_after_console_start = (function paren_soup$core$add_parinfer_after_console_start(console_start_num,state){
var pre_text = cljs.core.subs.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(state),(0),console_start_num);
var post_text = cljs.core.subs.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(state),console_start_num);
var cleared_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,pre_text,/[^\r^\n]/," ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(post_text)].join('');
var temp_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"text","text",-1790561697),cleared_text);
var temp_state__$1 = cross_parinfer.core.add_parinfer.call(null,new cljs.core.Keyword(null,"both","both",-393648840),temp_state);
var new_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre_text),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(temp_state__$1),console_start_num))].join('');
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"text","text",-1790561697),new_text);
});
paren_soup.core.add_parinfer = (function paren_soup$core$add_parinfer(enable_QMARK_,console_start_num,state){
if(cljs.core.truth_(enable_QMARK_)){
var cropped_state = new cljs.core.Keyword(null,"cropped-state","cropped-state",-1312672062).cljs$core$IFn$_invoke$arity$1(state);
var indent_type = new cljs.core.Keyword(null,"indent-type","indent-type",601897259).cljs$core$IFn$_invoke$arity$1(state);
var state__$1 = (((console_start_num > (0)))?paren_soup.core.add_parinfer_after_console_start.call(null,console_start_num,state):(cljs.core.truth_(indent_type)?cross_parinfer.core.add_indent.call(null,state):cross_parinfer.core.add_parinfer.call(null,new cljs.core.Keyword(null,"paren","paren",-294107600),state)
));
if(cljs.core.truth_((function (){var and__7273__auto__ = cropped_state;
if(cljs.core.truth_(and__7273__auto__)){
return indent_type;
} else {
return and__7273__auto__;
}
})())){
return cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"cropped-state","cropped-state",-1312672062),cljs.core.merge.call(null,cropped_state,cross_parinfer.core.add_indent.call(null,cljs.core.assoc.call(null,cropped_state,new cljs.core.Keyword(null,"indent-type","indent-type",601897259),indent_type))));
} else {
return state__$1;
}
} else {
return state;
}
});
paren_soup.core.add_newline = (function paren_soup$core$add_newline(p__12765){
var map__12766 = p__12765;
var map__12766__$1 = ((((!((map__12766 == null)))?((((map__12766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12766):map__12766);
var state = map__12766__$1;
var text = cljs.core.get.call(null,map__12766__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
if(!(cljs.core._EQ_.call(null,"\n",cljs.core.last.call(null,text)))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join(''));
} else {
return state;
}
});
/**
 * Returns the editor's state. If full-selection? is true, it will try to save
 * the entire selection rather than just the cursor position.
 */
paren_soup.core.init_state = (function paren_soup$core$init_state(content,crop_QMARK_,full_selection_QMARK_){
var selection = rangy.getSelection();
var anchor = selection.anchorNode;
var focus = selection.focusNode;
var parent = (cljs.core.truth_((function (){var and__7273__auto__ = anchor;
if(cljs.core.truth_(and__7273__auto__)){
return focus;
} else {
return and__7273__auto__;
}
})())?paren_soup.dom.common_ancestor.call(null,anchor,focus):null);
var state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor-position","cursor-position",926799334),new cljs.core.Keyword(null,"cursor-position","cursor-position",926799334).cljs$core$IFn$_invoke$arity$1(paren_soup.dom.get_selection.call(null,content,full_selection_QMARK_)),new cljs.core.Keyword(null,"text","text",-1790561697),content.textContent], null);
var temp__4655__auto__ = (function (){var G__12768 = parent;
if((G__12768 == null)){
return null;
} else {
return paren_soup.dom.get_selection.call(null,G__12768,false);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var cropped_selection = temp__4655__auto__;
if(cljs.core.truth_(crop_QMARK_)){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"cropped-state","cropped-state",-1312672062),cljs.core.assoc.call(null,cropped_selection,new cljs.core.Keyword(null,"text","text",-1790561697),parent.textContent));
} else {
return state;
}
} else {
return state;
}
});
paren_soup.core.update_edit_history_BANG_ = (function paren_soup$core$update_edit_history_BANG_(edit_history,state){
try{mistakes_were_made.core.update_edit_history_BANG_.call(null,edit_history,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"cropped-state","cropped-state",-1312672062)));

return state;
}catch (e12769){if((e12769 instanceof Error)){
var _ = e12769;
return mistakes_were_made.core.get_current_state.call(null,edit_history);
} else {
throw e12769;

}
}});
paren_soup.core.update_highlight_BANG_ = (function paren_soup$core$update_highlight_BANG_(content,last_elem){
var temp__4657__auto___12770 = cljs.core.deref.call(null,last_elem);
if(cljs.core.truth_(temp__4657__auto___12770)){
var elem_12771 = temp__4657__auto___12770;
elem_12771.style.backgroundColor = null;

cljs.core.reset_BANG_.call(null,last_elem,null);
} else {
}

var temp__4657__auto__ = paren_soup.dom.get_focused_form.call(null);
if(cljs.core.truth_(temp__4657__auto__)){
var elem = temp__4657__auto__;
var temp__4657__auto____$1 = window.getComputedStyle(elem.firstChild).getPropertyValue("color");
if(cljs.core.truth_(temp__4657__auto____$1)){
var color = temp__4657__auto____$1;
var new_color = clojure.string.replace.call(null,clojure.string.replace.call(null,color,/rgb\(/,""),/\)/,"");
elem.style.backgroundColor = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("rgba("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", 0.1)")].join('');

return cljs.core.reset_BANG_.call(null,last_elem,elem);
} else {
return null;
}
} else {
return null;
}
});
paren_soup.core.key_code = (function paren_soup$core$key_code(event){
var code = event.keyCode;
if((code > (0))){
return code;
} else {
return event.which;
}
});
/**
 * Returns true if the supplied key event involves the key(s) described by key-name.
 */
paren_soup.core.key_name_QMARK_ = (function paren_soup$core$key_name_QMARK_(event,key_name){
var code = paren_soup.core.key_code.call(null,event);
var G__12772 = key_name;
var G__12772__$1 = (((G__12772 instanceof cljs.core.Keyword))?G__12772.fqn:null);
switch (G__12772__$1) {
case "undo-or-redo":
var and__7273__auto__ = (function (){var or__7285__auto__ = event.metaKey;
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return event.ctrlKey;
}
})();
if(cljs.core.truth_(and__7273__auto__)){
return cljs.core._EQ_.call(null,code,(90));
} else {
return and__7273__auto__;
}

break;
case "tab":
return cljs.core._EQ_.call(null,code,(9));

break;
case "enter":
return cljs.core._EQ_.call(null,code,(13));

break;
case "arrows":
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(39),null,(40),null,(38),null,(37),null], null), null),code);

break;
case "up-arrow":
return cljs.core._EQ_.call(null,code,(38));

break;
case "down-arrow":
return cljs.core._EQ_.call(null,code,(40));

break;
case "general":
return cljs.core.not.call(null,(function (){var or__7285__auto__ = cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(0),null,(91),null,(93),null,(17),null,(16),null,(18),null], null), null),code);
if(or__7285__auto__){
return or__7285__auto__;
} else {
var or__7285__auto____$1 = event.ctrlKey;
if(cljs.core.truth_(or__7285__auto____$1)){
return or__7285__auto____$1;
} else {
return event.metaKey;
}
}
})());

break;
default:
return false;

}
});

/**
 * @interface
 */
paren_soup.core.Editor = function(){};

paren_soup.core.undo_BANG_ = (function paren_soup$core$undo_BANG_(this$){
if((!((this$ == null))) && (!((this$.paren_soup$core$Editor$undo_BANG_$arity$1 == null)))){
return this$.paren_soup$core$Editor$undo_BANG_$arity$1(this$);
} else {
var x__7954__auto__ = (((this$ == null))?null:this$);
var m__7955__auto__ = (paren_soup.core.undo_BANG_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,this$);
} else {
var m__7955__auto____$1 = (paren_soup.core.undo_BANG_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Editor.undo!",this$);
}
}
}
});

paren_soup.core.redo_BANG_ = (function paren_soup$core$redo_BANG_(this$){
if((!((this$ == null))) && (!((this$.paren_soup$core$Editor$redo_BANG_$arity$1 == null)))){
return this$.paren_soup$core$Editor$redo_BANG_$arity$1(this$);
} else {
var x__7954__auto__ = (((this$ == null))?null:this$);
var m__7955__auto__ = (paren_soup.core.redo_BANG_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,this$);
} else {
var m__7955__auto____$1 = (paren_soup.core.redo_BANG_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Editor.redo!",this$);
}
}
}
});

paren_soup.core.can_undo_QMARK_ = (function paren_soup$core$can_undo_QMARK_(this$){
if((!((this$ == null))) && (!((this$.paren_soup$core$Editor$can_undo_QMARK_$arity$1 == null)))){
return this$.paren_soup$core$Editor$can_undo_QMARK_$arity$1(this$);
} else {
var x__7954__auto__ = (((this$ == null))?null:this$);
var m__7955__auto__ = (paren_soup.core.can_undo_QMARK_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,this$);
} else {
var m__7955__auto____$1 = (paren_soup.core.can_undo_QMARK_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Editor.can-undo?",this$);
}
}
}
});

paren_soup.core.can_redo_QMARK_ = (function paren_soup$core$can_redo_QMARK_(this$){
if((!((this$ == null))) && (!((this$.paren_soup$core$Editor$can_redo_QMARK_$arity$1 == null)))){
return this$.paren_soup$core$Editor$can_redo_QMARK_$arity$1(this$);
} else {
var x__7954__auto__ = (((this$ == null))?null:this$);
var m__7955__auto__ = (paren_soup.core.can_redo_QMARK_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,this$);
} else {
var m__7955__auto____$1 = (paren_soup.core.can_redo_QMARK_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Editor.can-redo?",this$);
}
}
}
});

paren_soup.core.update_cursor_position_BANG_ = (function paren_soup$core$update_cursor_position_BANG_(this$,position){
if((!((this$ == null))) && (!((this$.paren_soup$core$Editor$update_cursor_position_BANG_$arity$2 == null)))){
return this$.paren_soup$core$Editor$update_cursor_position_BANG_$arity$2(this$,position);
} else {
var x__7954__auto__ = (((this$ == null))?null:this$);
var m__7955__auto__ = (paren_soup.core.update_cursor_position_BANG_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,this$,position);
} else {
var m__7955__auto____$1 = (paren_soup.core.update_cursor_position_BANG_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,this$,position);
} else {
throw cljs.core.missing_protocol.call(null,"Editor.update-cursor-position!",this$);
}
}
}
});

paren_soup.core.reset_edit_history_BANG_ = (function paren_soup$core$reset_edit_history_BANG_(this$,start){
if((!((this$ == null))) && (!((this$.paren_soup$core$Editor$reset_edit_history_BANG_$arity$2 == null)))){
return this$.paren_soup$core$Editor$reset_edit_history_BANG_$arity$2(this$,start);
} else {
var x__7954__auto__ = (((this$ == null))?null:this$);
var m__7955__auto__ = (paren_soup.core.reset_edit_history_BANG_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,this$,start);
} else {
var m__7955__auto____$1 = (paren_soup.core.reset_edit_history_BANG_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,this$,start);
} else {
throw cljs.core.missing_protocol.call(null,"Editor.reset-edit-history!",this$);
}
}
}
});

paren_soup.core.append_text_BANG_ = (function paren_soup$core$append_text_BANG_(this$,text){
if((!((this$ == null))) && (!((this$.paren_soup$core$Editor$append_text_BANG_$arity$2 == null)))){
return this$.paren_soup$core$Editor$append_text_BANG_$arity$2(this$,text);
} else {
var x__7954__auto__ = (((this$ == null))?null:this$);
var m__7955__auto__ = (paren_soup.core.append_text_BANG_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,this$,text);
} else {
var m__7955__auto____$1 = (paren_soup.core.append_text_BANG_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,this$,text);
} else {
throw cljs.core.missing_protocol.call(null,"Editor.append-text!",this$);
}
}
}
});

paren_soup.core.enter_BANG_ = (function paren_soup$core$enter_BANG_(this$){
if((!((this$ == null))) && (!((this$.paren_soup$core$Editor$enter_BANG_$arity$1 == null)))){
return this$.paren_soup$core$Editor$enter_BANG_$arity$1(this$);
} else {
var x__7954__auto__ = (((this$ == null))?null:this$);
var m__7955__auto__ = (paren_soup.core.enter_BANG_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,this$);
} else {
var m__7955__auto____$1 = (paren_soup.core.enter_BANG_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Editor.enter!",this$);
}
}
}
});

paren_soup.core.up_BANG_ = (function paren_soup$core$up_BANG_(this$){
if((!((this$ == null))) && (!((this$.paren_soup$core$Editor$up_BANG_$arity$1 == null)))){
return this$.paren_soup$core$Editor$up_BANG_$arity$1(this$);
} else {
var x__7954__auto__ = (((this$ == null))?null:this$);
var m__7955__auto__ = (paren_soup.core.up_BANG_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,this$);
} else {
var m__7955__auto____$1 = (paren_soup.core.up_BANG_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Editor.up!",this$);
}
}
}
});

paren_soup.core.down_BANG_ = (function paren_soup$core$down_BANG_(this$){
if((!((this$ == null))) && (!((this$.paren_soup$core$Editor$down_BANG_$arity$1 == null)))){
return this$.paren_soup$core$Editor$down_BANG_$arity$1(this$);
} else {
var x__7954__auto__ = (((this$ == null))?null:this$);
var m__7955__auto__ = (paren_soup.core.down_BANG_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,this$);
} else {
var m__7955__auto____$1 = (paren_soup.core.down_BANG_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Editor.down!",this$);
}
}
}
});

paren_soup.core.tab_BANG_ = (function paren_soup$core$tab_BANG_(this$){
if((!((this$ == null))) && (!((this$.paren_soup$core$Editor$tab_BANG_$arity$1 == null)))){
return this$.paren_soup$core$Editor$tab_BANG_$arity$1(this$);
} else {
var x__7954__auto__ = (((this$ == null))?null:this$);
var m__7955__auto__ = (paren_soup.core.tab_BANG_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,this$);
} else {
var m__7955__auto____$1 = (paren_soup.core.tab_BANG_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Editor.tab!",this$);
}
}
}
});

paren_soup.core.refresh_BANG_ = (function paren_soup$core$refresh_BANG_(this$,state){
if((!((this$ == null))) && (!((this$.paren_soup$core$Editor$refresh_BANG_$arity$2 == null)))){
return this$.paren_soup$core$Editor$refresh_BANG_$arity$2(this$,state);
} else {
var x__7954__auto__ = (((this$ == null))?null:this$);
var m__7955__auto__ = (paren_soup.core.refresh_BANG_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,this$,state);
} else {
var m__7955__auto____$1 = (paren_soup.core.refresh_BANG_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"Editor.refresh!",this$);
}
}
}
});

paren_soup.core.edit_and_refresh_BANG_ = (function paren_soup$core$edit_and_refresh_BANG_(this$,state){
if((!((this$ == null))) && (!((this$.paren_soup$core$Editor$edit_and_refresh_BANG_$arity$2 == null)))){
return this$.paren_soup$core$Editor$edit_and_refresh_BANG_$arity$2(this$,state);
} else {
var x__7954__auto__ = (((this$ == null))?null:this$);
var m__7955__auto__ = (paren_soup.core.edit_and_refresh_BANG_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,this$,state);
} else {
var m__7955__auto____$1 = (paren_soup.core.edit_and_refresh_BANG_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"Editor.edit-and-refresh!",this$);
}
}
}
});

paren_soup.core.initialize_BANG_ = (function paren_soup$core$initialize_BANG_(this$){
if((!((this$ == null))) && (!((this$.paren_soup$core$Editor$initialize_BANG_$arity$1 == null)))){
return this$.paren_soup$core$Editor$initialize_BANG_$arity$1(this$);
} else {
var x__7954__auto__ = (((this$ == null))?null:this$);
var m__7955__auto__ = (paren_soup.core.initialize_BANG_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,this$);
} else {
var m__7955__auto____$1 = (paren_soup.core.initialize_BANG_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Editor.initialize!",this$);
}
}
}
});

paren_soup.core.refresh_after_key_event_BANG_ = (function paren_soup$core$refresh_after_key_event_BANG_(this$,event){
if((!((this$ == null))) && (!((this$.paren_soup$core$Editor$refresh_after_key_event_BANG_$arity$2 == null)))){
return this$.paren_soup$core$Editor$refresh_after_key_event_BANG_$arity$2(this$,event);
} else {
var x__7954__auto__ = (((this$ == null))?null:this$);
var m__7955__auto__ = (paren_soup.core.refresh_after_key_event_BANG_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,this$,event);
} else {
var m__7955__auto____$1 = (paren_soup.core.refresh_after_key_event_BANG_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"Editor.refresh-after-key-event!",this$);
}
}
}
});

paren_soup.core.refresh_after_cut_paste_BANG_ = (function paren_soup$core$refresh_after_cut_paste_BANG_(this$){
if((!((this$ == null))) && (!((this$.paren_soup$core$Editor$refresh_after_cut_paste_BANG_$arity$1 == null)))){
return this$.paren_soup$core$Editor$refresh_after_cut_paste_BANG_$arity$1(this$);
} else {
var x__7954__auto__ = (((this$ == null))?null:this$);
var m__7955__auto__ = (paren_soup.core.refresh_after_cut_paste_BANG_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,this$);
} else {
var m__7955__auto____$1 = (paren_soup.core.refresh_after_cut_paste_BANG_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Editor.refresh-after-cut-paste!",this$);
}
}
}
});

paren_soup.core.eval_BANG_ = (function paren_soup$core$eval_BANG_(this$,form,callback){
if((!((this$ == null))) && (!((this$.paren_soup$core$Editor$eval_BANG_$arity$3 == null)))){
return this$.paren_soup$core$Editor$eval_BANG_$arity$3(this$,form,callback);
} else {
var x__7954__auto__ = (((this$ == null))?null:this$);
var m__7955__auto__ = (paren_soup.core.eval_BANG_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,this$,form,callback);
} else {
var m__7955__auto____$1 = (paren_soup.core.eval_BANG_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,this$,form,callback);
} else {
throw cljs.core.missing_protocol.call(null,"Editor.eval!",this$);
}
}
}
});

paren_soup.core.create_editor = (function paren_soup$core$create_editor(paren_soup__$1,content,events_chan,p__12775){
var map__12776 = p__12775;
var map__12776__$1 = ((((!((map__12776 == null)))?((((map__12776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12776.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12776):map__12776);
var history_limit = cljs.core.get.call(null,map__12776__$1,new cljs.core.Keyword(null,"history-limit","history-limit",-1938739786),(100));
var append_limit = cljs.core.get.call(null,map__12776__$1,new cljs.core.Keyword(null,"append-limit","append-limit",-147399448),(5000));
var compiler_fn = cljs.core.get.call(null,map__12776__$1,new cljs.core.Keyword(null,"compiler-fn","compiler-fn",1375742601));
var console_callback = cljs.core.get.call(null,map__12776__$1,new cljs.core.Keyword(null,"console-callback","console-callback",-1469472247));
var disable_clj_QMARK_ = cljs.core.get.call(null,map__12776__$1,new cljs.core.Keyword(null,"disable-clj?","disable-clj?",1178868710));
var clj_QMARK_ = cljs.core.not.call(null,disable_clj_QMARK_);
var editor_QMARK_ = cljs.core.not.call(null,console_callback);
var compiler_fn__$1 = (function (){var or__7285__auto__ = compiler_fn;
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return paren_soup.instarepl.create_compiler_fn.call(null);
}
})();
var edit_history = (function (){var G__12778 = mistakes_were_made.core.create_edit_history.call(null);
cljs.core.swap_BANG_.call(null,G__12778,cljs.core.assoc,new cljs.core.Keyword(null,"limit","limit",-1355822363),history_limit);

return G__12778;
})();
var refresh_instarepl_with_delay_BANG_ = goog.functions.debounce(paren_soup.core.refresh_instarepl_BANG_,(300));
var console_history = paren_soup.console.create_console_history.call(null);
var last_highlight_elem = cljs.core.atom.call(null,null);
var allow_tab_QMARK_ = cljs.core.atom.call(null,false);
if(editor_QMARK_){
} else {
cljs.core.set_validator_BANG_.call(null,edit_history,((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (p__12779){
var map__12780 = p__12779;
var map__12780__$1 = ((((!((map__12780 == null)))?((((map__12780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12780):map__12780);
var current_state = cljs.core.get.call(null,map__12780__$1,new cljs.core.Keyword(null,"current-state","current-state",1048284452));
var states = cljs.core.get.call(null,map__12780__$1,new cljs.core.Keyword(null,"states","states",1389013542));
var temp__4655__auto__ = cljs.core.get.call(null,states,current_state);
if(cljs.core.truth_(temp__4655__auto__)){
var state = temp__4655__auto__;
return (cljs.core.first.call(null,new cljs.core.Keyword(null,"cursor-position","cursor-position",926799334).cljs$core$IFn$_invoke$arity$1(state)) >= paren_soup.console.get_console_start.call(null,console_history));
} else {
return true;
}
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
);
}

if(typeof paren_soup.core.t_paren_soup$core12782 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {paren_soup.core.Editor}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
paren_soup.core.t_paren_soup$core12782 = (function (clj_QMARK_,refresh_instarepl_with_delay_BANG_,console_history,edit_history,paren_soup,disable_clj_QMARK_,content,append_limit,console_callback,compiler_fn,editor_QMARK_,allow_tab_QMARK_,map__12776,p__12775,last_highlight_elem,history_limit,events_chan,meta12783){
this.clj_QMARK_ = clj_QMARK_;
this.refresh_instarepl_with_delay_BANG_ = refresh_instarepl_with_delay_BANG_;
this.console_history = console_history;
this.edit_history = edit_history;
this.paren_soup = paren_soup;
this.disable_clj_QMARK_ = disable_clj_QMARK_;
this.content = content;
this.append_limit = append_limit;
this.console_callback = console_callback;
this.compiler_fn = compiler_fn;
this.editor_QMARK_ = editor_QMARK_;
this.allow_tab_QMARK_ = allow_tab_QMARK_;
this.map__12776 = map__12776;
this.p__12775 = p__12775;
this.last_highlight_elem = last_highlight_elem;
this.history_limit = history_limit;
this.events_chan = events_chan;
this.meta12783 = meta12783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
paren_soup.core.t_paren_soup$core12782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (_12784,meta12783__$1){
var self__ = this;
var _12784__$1 = this;
return (new paren_soup.core.t_paren_soup$core12782(self__.clj_QMARK_,self__.refresh_instarepl_with_delay_BANG_,self__.console_history,self__.edit_history,self__.paren_soup,self__.disable_clj_QMARK_,self__.content,self__.append_limit,self__.console_callback,self__.compiler_fn,self__.editor_QMARK_,self__.allow_tab_QMARK_,self__.map__12776,self__.p__12775,self__.last_highlight_elem,self__.history_limit,self__.events_chan,meta12783__$1));
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
;

paren_soup.core.t_paren_soup$core12782.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (_12784){
var self__ = this;
var _12784__$1 = this;
return self__.meta12783;
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
;

paren_soup.core.t_paren_soup$core12782.prototype.paren_soup$core$Editor$ = cljs.core.PROTOCOL_SENTINEL;

paren_soup.core.t_paren_soup$core12782.prototype.paren_soup$core$Editor$can_redo_QMARK_$arity$1 = ((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return mistakes_were_made.core.can_redo_QMARK_.call(null,self__.edit_history);
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
;

paren_soup.core.t_paren_soup$core12782.prototype.paren_soup$core$Editor$up_BANG_$arity$1 = ((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.editor_QMARK_)){
return null;
} else {
var text = self__.content.textContent;
var pre_text = cljs.core.subs.call(null,text,(0),paren_soup.console.get_console_start.call(null,self__.console_history));
var line = (function (){var or__7285__auto__ = paren_soup.console.up_BANG_.call(null,self__.console_history);
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return "";
}
})();
var state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor-position","cursor-position",926799334),paren_soup.dom.get_cursor_position.call(null,self__.content,false),new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre_text),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('')], null);
return paren_soup.core.refresh_BANG_.call(null,this$__$1,paren_soup.core.update_edit_history_BANG_.call(null,self__.edit_history,state));
}
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
;

paren_soup.core.t_paren_soup$core12782.prototype.paren_soup$core$Editor$refresh_BANG_$arity$2 = ((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (this$,state){
var self__ = this;
var this$__$1 = this;
paren_soup.core.post_refresh_content_BANG_.call(null,self__.content,self__.events_chan,(cljs.core.truth_(self__.editor_QMARK_)?paren_soup.core.refresh_content_BANG_.call(null,self__.content,state):paren_soup.core.refresh_console_content_BANG_.call(null,self__.content,state,paren_soup.console.get_console_start.call(null,self__.console_history),self__.clj_QMARK_)));

if(cljs.core.truth_(self__.editor_QMARK_)){
var G__12785_12790 = self__.paren_soup.querySelector(".numbers");
if((G__12785_12790 == null)){
} else {
paren_soup.core.refresh_numbers_BANG_.call(null,G__12785_12790,cljs.core.count.call(null,cljs.core.re_seq.call(null,/\n/,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(state))));
}

if(cljs.core.truth_(self__.clj_QMARK_)){
var temp__4657__auto___12791 = self__.paren_soup.querySelector(".instarepl");
if(cljs.core.truth_(temp__4657__auto___12791)){
var elem_12792 = temp__4657__auto___12791;
if(cljs.core._EQ_.call(null,elem_12792.style.display,"none")){
} else {
self__.refresh_instarepl_with_delay_BANG_.call(null,elem_12792,self__.content,self__.compiler_fn);
}
} else {
}
} else {
}
} else {
}

return paren_soup.core.update_highlight_BANG_.call(null,self__.content,self__.last_highlight_elem);
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
;

paren_soup.core.t_paren_soup$core12782.prototype.paren_soup$core$Editor$undo_BANG_$arity$1 = ((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var G__12786 = self__.edit_history;
var G__12786__$1 = (((G__12786 == null))?null:mistakes_were_made.core.undo_BANG_.call(null,G__12786));
if((G__12786__$1 == null)){
return null;
} else {
return paren_soup.core.refresh_BANG_.call(null,this$__$1,G__12786__$1);
}
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
;

paren_soup.core.t_paren_soup$core12782.prototype.paren_soup$core$Editor$redo_BANG_$arity$1 = ((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var G__12787 = self__.edit_history;
var G__12787__$1 = (((G__12787 == null))?null:mistakes_were_made.core.redo_BANG_.call(null,G__12787));
if((G__12787__$1 == null)){
return null;
} else {
return paren_soup.core.refresh_BANG_.call(null,this$__$1,G__12787__$1);
}
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
;

paren_soup.core.t_paren_soup$core12782.prototype.paren_soup$core$Editor$tab_BANG_$arity$1 = ((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.editor_QMARK_)){
return cljs.core.reset_BANG_.call(null,self__.allow_tab_QMARK_,true);
} else {
return null;
}
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
;

paren_soup.core.t_paren_soup$core12782.prototype.paren_soup$core$Editor$enter_BANG_$arity$1 = ((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.editor_QMARK_)){
return document.execCommand("insertHTML",false,"\n");
} else {
var text = clojure.string.trimr.call(null,self__.content.textContent);
var post_text = cljs.core.subs.call(null,text,paren_soup.console.get_console_start.call(null,self__.console_history));
paren_soup.core.reset_edit_history_BANG_.call(null,this$__$1,cljs.core.count.call(null,text));

paren_soup.console.update_console_history_BANG_.call(null,self__.console_history,post_text);

return self__.console_callback.call(null,post_text);
}
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
;

paren_soup.core.t_paren_soup$core12782.prototype.paren_soup$core$Editor$append_text_BANG_$arity$2 = ((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (this$,text){
var self__ = this;
var this$__$1 = this;
var node = document.createTextNode(text);
var _ = self__.content.appendChild(node);
var all_text = self__.content.textContent;
var char_count = (function (){var x__7621__auto__ = (0);
var y__7622__auto__ = (cljs.core.count.call(null,all_text) - self__.append_limit);
return ((x__7621__auto__ > y__7622__auto__) ? x__7621__auto__ : y__7622__auto__);
})();
var new_all_text = cljs.core.subs.call(null,all_text,char_count);
var char_count__$1 = (cljs.core.truth_(new_all_text.endsWith("\n"))?(cljs.core.count.call(null,new_all_text) - (1)):cljs.core.count.call(null,new_all_text));
if(cljs.core.not_EQ_.call(null,all_text,new_all_text)){
self__.content.textContent = new_all_text;
} else {
}

return paren_soup.core.reset_edit_history_BANG_.call(null,this$__$1,char_count__$1);
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
;

paren_soup.core.t_paren_soup$core12782.prototype.paren_soup$core$Editor$can_undo_QMARK_$arity$1 = ((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return mistakes_were_made.core.can_undo_QMARK_.call(null,self__.edit_history);
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
;

paren_soup.core.t_paren_soup$core12782.prototype.paren_soup$core$Editor$edit_and_refresh_BANG_$arity$2 = ((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (this$,state){
var self__ = this;
var this$__$1 = this;
return paren_soup.core.refresh_BANG_.call(null,this$__$1,paren_soup.core.update_edit_history_BANG_.call(null,self__.edit_history,paren_soup.core.add_parinfer.call(null,self__.clj_QMARK_,paren_soup.console.get_console_start.call(null,self__.console_history),paren_soup.core.add_newline.call(null,state))));
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
;

paren_soup.core.t_paren_soup$core12782.prototype.paren_soup$core$Editor$update_cursor_position_BANG_$arity$2 = ((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (this$,position){
var self__ = this;
var this$__$1 = this;
try{mistakes_were_made.core.update_cursor_position_BANG_.call(null,self__.edit_history,position);
}catch (e12788){if((e12788 instanceof Error)){
var __12793 = e12788;
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,position))){
var start_12794 = paren_soup.console.get_console_start.call(null,self__.console_history);
paren_soup.dom.set_cursor_position_BANG_.call(null,self__.content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_12794,start_12794], null));

mistakes_were_made.core.update_cursor_position_BANG_.call(null,self__.edit_history,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_12794,start_12794], null));
} else {
}
} else {
throw e12788;

}
}
return paren_soup.core.update_highlight_BANG_.call(null,self__.content,self__.last_highlight_elem);
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
;

paren_soup.core.t_paren_soup$core12782.prototype.paren_soup$core$Editor$eval_BANG_$arity$3 = ((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (this$,form,callback){
var self__ = this;
var this$__$1 = this;
return self__.compiler_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [form], null),((function (this$__$1,clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (p1__12774_SHARP_){
return callback.call(null,cljs.core.first.call(null,p1__12774_SHARP_));
});})(this$__$1,clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
);
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
;

paren_soup.core.t_paren_soup$core12782.prototype.paren_soup$core$Editor$refresh_after_cut_paste_BANG_$arity$1 = ((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return paren_soup.core.edit_and_refresh_BANG_.call(null,this$__$1,cljs.core.assoc.call(null,paren_soup.core.init_state.call(null,self__.content,self__.editor_QMARK_,false),new cljs.core.Keyword(null,"indent-type","indent-type",601897259),new cljs.core.Keyword(null,"normal","normal",-1519123858)));
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
;

paren_soup.core.t_paren_soup$core12782.prototype.paren_soup$core$Editor$refresh_after_key_event_BANG_$arity$2 = ((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (this$,event){
var self__ = this;
var this$__$1 = this;
var tab_QMARK_ = paren_soup.core.key_name_QMARK_.call(null,event,new cljs.core.Keyword(null,"tab","tab",-559583621));
var state = paren_soup.core.init_state.call(null,self__.content,self__.editor_QMARK_,tab_QMARK_);
if(cljs.core.truth_((function (){var and__7273__auto__ = tab_QMARK_;
if(cljs.core.truth_(and__7273__auto__)){
return cljs.core.not.call(null,cljs.core.deref.call(null,self__.allow_tab_QMARK_));
} else {
return and__7273__auto__;
}
})())){
} else {
paren_soup.core.edit_and_refresh_BANG_.call(null,this$__$1,(function (){var G__12789 = paren_soup.core.key_code.call(null,event);
switch (G__12789) {
case (13):
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"indent-type","indent-type",601897259),new cljs.core.Keyword(null,"return","return",-1891502105));

break;
case (9):
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"indent-type","indent-type",601897259),(cljs.core.truth_(event.shiftKey)?new cljs.core.Keyword(null,"back","back",-417520012):new cljs.core.Keyword(null,"forward","forward",-557345303)));

break;
default:
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"indent-type","indent-type",601897259),new cljs.core.Keyword(null,"normal","normal",-1519123858));

}
})());
}

if(cljs.core.truth_(tab_QMARK_)){
return cljs.core.reset_BANG_.call(null,self__.allow_tab_QMARK_,false);
} else {
return null;
}
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
;

paren_soup.core.t_paren_soup$core12782.prototype.paren_soup$core$Editor$initialize_BANG_$arity$1 = ((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.editor_QMARK_)){
return paren_soup.core.edit_and_refresh_BANG_.call(null,this$__$1,paren_soup.core.init_state.call(null,self__.content,false,false));
} else {
return null;
}
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
;

paren_soup.core.t_paren_soup$core12782.prototype.paren_soup$core$Editor$down_BANG_$arity$1 = ((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.editor_QMARK_)){
return null;
} else {
var text = self__.content.textContent;
var pre_text = cljs.core.subs.call(null,text,(0),paren_soup.console.get_console_start.call(null,self__.console_history));
var line = (function (){var or__7285__auto__ = paren_soup.console.down_BANG_.call(null,self__.console_history);
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return "";
}
})();
var state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor-position","cursor-position",926799334),paren_soup.dom.get_cursor_position.call(null,self__.content,false),new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre_text),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('')], null);
return paren_soup.core.refresh_BANG_.call(null,this$__$1,paren_soup.core.update_edit_history_BANG_.call(null,self__.edit_history,state));
}
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
;

paren_soup.core.t_paren_soup$core12782.prototype.paren_soup$core$Editor$reset_edit_history_BANG_$arity$2 = ((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (this$,start){
var self__ = this;
var this$__$1 = this;
paren_soup.console.update_console_start_BANG_.call(null,self__.console_history,start);

paren_soup.dom.set_cursor_position_BANG_.call(null,self__.content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,start], null));

var new_edit_history = mistakes_were_made.core.create_edit_history.call(null);
var state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor-position","cursor-position",926799334),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,start], null),new cljs.core.Keyword(null,"text","text",-1790561697),self__.content.textContent], null);
paren_soup.core.update_edit_history_BANG_.call(null,new_edit_history,state);

return cljs.core.reset_BANG_.call(null,self__.edit_history,cljs.core.deref.call(null,new_edit_history));
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
;

paren_soup.core.t_paren_soup$core12782.getBasis = ((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clj?","clj?",-541593408,null),new cljs.core.Symbol(null,"refresh-instarepl-with-delay!","refresh-instarepl-with-delay!",1885541409,null),new cljs.core.Symbol(null,"console-history","console-history",-654761247,null),new cljs.core.Symbol(null,"edit-history","edit-history",1303616998,null),new cljs.core.Symbol(null,"paren-soup","paren-soup",-1135706068,null),new cljs.core.Symbol(null,"disable-clj?","disable-clj?",-1475567059,null),new cljs.core.Symbol(null,"content","content",1656364751,null),new cljs.core.Symbol(null,"append-limit","append-limit",1493132079,null),new cljs.core.Symbol(null,"console-callback","console-callback",171059280,null),new cljs.core.Symbol(null,"compiler-fn","compiler-fn",-1278693168,null),new cljs.core.Symbol(null,"editor?","editor?",-1091707056,null),new cljs.core.Symbol(null,"allow-tab?","allow-tab?",-2140805806,null),new cljs.core.Symbol(null,"map__12776","map__12776",595892246,null),new cljs.core.Symbol(null,"p__12775","p__12775",659215452,null),new cljs.core.Symbol(null,"last-highlight-elem","last-highlight-elem",-1907663971,null),new cljs.core.Symbol(null,"history-limit","history-limit",-298208259,null),new cljs.core.Symbol(null,"events-chan","events-chan",856382847,null),new cljs.core.Symbol(null,"meta12783","meta12783",357584557,null)], null);
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
;

paren_soup.core.t_paren_soup$core12782.cljs$lang$type = true;

paren_soup.core.t_paren_soup$core12782.cljs$lang$ctorStr = "paren-soup.core/t_paren_soup$core12782";

paren_soup.core.t_paren_soup$core12782.cljs$lang$ctorPrWriter = ((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"paren-soup.core/t_paren_soup$core12782");
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
;

paren_soup.core.__GT_t_paren_soup$core12782 = ((function (clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_){
return (function paren_soup$core$create_editor_$___GT_t_paren_soup$core12782(clj_QMARK___$1,refresh_instarepl_with_delay_BANG___$1,console_history__$1,edit_history__$1,paren_soup__$2,disable_clj_QMARK___$1,content__$1,append_limit__$1,console_callback__$1,compiler_fn__$2,editor_QMARK___$1,allow_tab_QMARK___$1,map__12776__$2,p__12775__$1,last_highlight_elem__$1,history_limit__$1,events_chan__$1,meta12783){
return (new paren_soup.core.t_paren_soup$core12782(clj_QMARK___$1,refresh_instarepl_with_delay_BANG___$1,console_history__$1,edit_history__$1,paren_soup__$2,disable_clj_QMARK___$1,content__$1,append_limit__$1,console_callback__$1,compiler_fn__$2,editor_QMARK___$1,allow_tab_QMARK___$1,map__12776__$2,p__12775__$1,last_highlight_elem__$1,history_limit__$1,events_chan__$1,meta12783));
});})(clj_QMARK_,editor_QMARK_,compiler_fn__$1,edit_history,refresh_instarepl_with_delay_BANG_,console_history,last_highlight_elem,allow_tab_QMARK_,map__12776,map__12776__$1,history_limit,append_limit,compiler_fn,console_callback,disable_clj_QMARK_))
;

}

return (new paren_soup.core.t_paren_soup$core12782(clj_QMARK_,refresh_instarepl_with_delay_BANG_,console_history,edit_history,paren_soup__$1,disable_clj_QMARK_,content,append_limit,console_callback,compiler_fn__$1,editor_QMARK_,allow_tab_QMARK_,map__12776__$1,p__12775,last_highlight_elem,history_limit,events_chan,cljs.core.PersistentArrayMap.EMPTY));
});
paren_soup.core.prevent_default_QMARK_ = (function paren_soup$core$prevent_default_QMARK_(event,opts){
var or__7285__auto__ = paren_soup.core.key_name_QMARK_.call(null,event,new cljs.core.Keyword(null,"undo-or-redo","undo-or-redo",-1044267541));
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
var or__7285__auto____$1 = paren_soup.core.key_name_QMARK_.call(null,event,new cljs.core.Keyword(null,"tab","tab",-559583621));
if(cljs.core.truth_(or__7285__auto____$1)){
return or__7285__auto____$1;
} else {
var or__7285__auto____$2 = paren_soup.core.key_name_QMARK_.call(null,event,new cljs.core.Keyword(null,"enter","enter",1792452624));
if(cljs.core.truth_(or__7285__auto____$2)){
return or__7285__auto____$2;
} else {
var and__7273__auto__ = new cljs.core.Keyword(null,"console-callback","console-callback",-1469472247).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__7273__auto__)){
var or__7285__auto____$3 = paren_soup.core.key_name_QMARK_.call(null,event,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
if(cljs.core.truth_(or__7285__auto____$3)){
return or__7285__auto____$3;
} else {
return paren_soup.core.key_name_QMARK_.call(null,event,new cljs.core.Keyword(null,"down-arrow","down-arrow",1121135670));
}
} else {
return and__7273__auto__;
}
}
}
}
});
paren_soup.core.add_event_listeners_BANG_ = (function paren_soup$core$add_event_listeners_BANG_(content,events_chan,opts){
var G__12800 = content;
goog.events.removeAll(G__12800);

goog.events.listen(G__12800,"keydown",((function (G__12800){
return (function (e){
if(cljs.core.truth_(paren_soup.core.prevent_default_QMARK_.call(null,e,opts))){
e.preventDefault();
} else {
}

return cljs.core.async.put_BANG_.call(null,events_chan,e);
});})(G__12800))
);

goog.events.listen(G__12800,"keyup",((function (G__12800){
return (function (p1__12796_SHARP_){
return cljs.core.async.put_BANG_.call(null,events_chan,p1__12796_SHARP_);
});})(G__12800))
);

goog.events.listen(G__12800,"cut",((function (G__12800){
return (function (p1__12797_SHARP_){
return cljs.core.async.put_BANG_.call(null,events_chan,p1__12797_SHARP_);
});})(G__12800))
);

goog.events.listen(G__12800,"paste",((function (G__12800){
return (function (p1__12798_SHARP_){
return cljs.core.async.put_BANG_.call(null,events_chan,p1__12798_SHARP_);
});})(G__12800))
);

goog.events.listen(G__12800,"mouseup",((function (G__12800){
return (function (p1__12799_SHARP_){
return cljs.core.async.put_BANG_.call(null,events_chan,p1__12799_SHARP_);
});})(G__12800))
);

return G__12800;
});
paren_soup.core.init = (function paren_soup$core$init(paren_soup__$1,opts){
rangy.init();

var opts__$1 = cljs.core.js__GT_clj.call(null,opts,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var content = paren_soup__$1.querySelector(".content");
var events_chan = cljs.core.async.chan.call(null);
var editor = paren_soup.core.create_editor.call(null,paren_soup__$1,content,events_chan,opts__$1);
paren_soup__$1.spellcheck = false;

if(cljs.core.truth_(content)){
} else {
throw (new Error("Can't find a div with class 'content'"));
}

paren_soup.core.initialize_BANG_.call(null,editor);

paren_soup.core.add_event_listeners_BANG_.call(null,content,events_chan,opts__$1);

var c__10645__auto___13012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10645__auto___13012,opts__$1,content,events_chan,editor){
return (function (){
var f__10646__auto__ = (function (){var switch__10557__auto__ = ((function (c__10645__auto___13012,opts__$1,content,events_chan,editor){
return (function (state_12921){
var state_val_12922 = (state_12921[(1)]);
if((state_val_12922 === (7))){
var inst_12806 = (state_12921[(2)]);
var inst_12808 = (opts__$1 == null);
var state_12921__$1 = (function (){var statearr_12923 = state_12921;
(statearr_12923[(7)] = inst_12806);

return statearr_12923;
})();
if(cljs.core.truth_(inst_12808)){
var statearr_12924_13013 = state_12921__$1;
(statearr_12924_13013[(1)] = (8));

} else {
var statearr_12925_13014 = state_12921__$1;
(statearr_12925_13014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (20))){
var inst_12823 = (state_12921[(8)]);
var state_12921__$1 = state_12921;
var statearr_12926_13015 = state_12921__$1;
(statearr_12926_13015[(2)] = inst_12823);

(statearr_12926_13015[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (58))){
var inst_12911 = (state_12921[(2)]);
var state_12921__$1 = state_12921;
var statearr_12927_13016 = state_12921__$1;
(statearr_12927_13016[(2)] = inst_12911);

(statearr_12927_13016[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (27))){
var inst_12837 = (state_12921[(2)]);
var state_12921__$1 = state_12921;
var statearr_12928_13017 = state_12921__$1;
(statearr_12928_13017[(2)] = inst_12837);

(statearr_12928_13017[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (1))){
var state_12921__$1 = state_12921;
var statearr_12929_13018 = state_12921__$1;
(statearr_12929_13018[(2)] = null);

(statearr_12929_13018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (24))){
var inst_12864 = (state_12921[(2)]);
var state_12921__$1 = state_12921;
var statearr_12930_13019 = state_12921__$1;
(statearr_12930_13019[(2)] = inst_12864);

(statearr_12930_13019[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (55))){
var inst_12904 = (state_12921[(9)]);
var inst_12904__$1 = (state_12921[(2)]);
var inst_12905 = (inst_12904__$1 == null);
var state_12921__$1 = (function (){var statearr_12931 = state_12921;
(statearr_12931[(9)] = inst_12904__$1);

return statearr_12931;
})();
if(cljs.core.truth_(inst_12905)){
var statearr_12932_13020 = state_12921__$1;
(statearr_12932_13020[(1)] = (56));

} else {
var statearr_12933_13021 = state_12921__$1;
(statearr_12933_13021[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (39))){
var inst_12856 = (state_12921[(2)]);
var state_12921__$1 = state_12921;
var statearr_12934_13022 = state_12921__$1;
(statearr_12934_13022[(2)] = inst_12856);

(statearr_12934_13022[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (46))){
var inst_12876 = (state_12921[(2)]);
var state_12921__$1 = state_12921;
var statearr_12935_13023 = state_12921__$1;
(statearr_12935_13023[(2)] = inst_12876);

(statearr_12935_13023[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (4))){
var state_12921__$1 = state_12921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12921__$1,(7),events_chan);
} else {
if((state_val_12922 === (54))){
var inst_12902 = new cljs.core.Keyword(null,"change-callback","change-callback",-882677662).cljs$core$IFn$_invoke$arity$1(opts__$1);
var state_12921__$1 = state_12921;
var statearr_12936_13024 = state_12921__$1;
(statearr_12936_13024[(2)] = inst_12902);

(statearr_12936_13024[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (15))){
var inst_12806 = (state_12921[(7)]);
var inst_12895 = inst_12806.type;
var state_12921__$1 = state_12921;
var G__12937_13025 = inst_12895;
switch (G__12937_13025) {
case "keydown":
var statearr_12938_13027 = state_12921__$1;
(statearr_12938_13027[(1)] = (18));


break;
case "keyup":
var statearr_12939_13028 = state_12921__$1;
(statearr_12939_13028[(1)] = (40));


break;
case "cut":
var statearr_12940_13029 = state_12921__$1;
(statearr_12940_13029[(1)] = (47));


break;
case "paste":
var statearr_12941_13030 = state_12921__$1;
(statearr_12941_13030[(1)] = (48));


break;
case "mouseup":
var statearr_12942_13031 = state_12921__$1;
(statearr_12942_13031[(1)] = (49));


break;
case "mouseenter":
var statearr_12943_13032 = state_12921__$1;
(statearr_12943_13032[(1)] = (50));


break;
case "mouseleave":
var statearr_12944_13033 = state_12921__$1;
(statearr_12944_13033[(1)] = (51));


break;
default:
var statearr_12945_13034 = state_12921__$1;
(statearr_12945_13034[(1)] = (52));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (48))){
var inst_12882 = paren_soup.core.refresh_after_cut_paste_BANG_.call(null,editor);
var state_12921__$1 = state_12921;
var statearr_12946_13035 = state_12921__$1;
(statearr_12946_13035[(2)] = inst_12882);

(statearr_12946_13035[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (50))){
var inst_12806 = (state_12921[(7)]);
var inst_12890 = paren_soup.core.show_error_message_BANG_.call(null,paren_soup__$1,inst_12806);
var state_12921__$1 = state_12921;
var statearr_12947_13036 = state_12921__$1;
(statearr_12947_13036[(2)] = inst_12890);

(statearr_12947_13036[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (21))){
var inst_12829 = (state_12921[(2)]);
var state_12921__$1 = state_12921;
if(cljs.core.truth_(inst_12829)){
var statearr_12948_13037 = state_12921__$1;
(statearr_12948_13037[(1)] = (22));

} else {
var statearr_12949_13038 = state_12921__$1;
(statearr_12949_13038[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (31))){
var inst_12845 = paren_soup.core.up_BANG_.call(null,editor);
var state_12921__$1 = state_12921;
var statearr_12950_13039 = state_12921__$1;
(statearr_12950_13039[(2)] = inst_12845);

(statearr_12950_13039[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (32))){
var inst_12806 = (state_12921[(7)]);
var inst_12847 = paren_soup.core.key_name_QMARK_.call(null,inst_12806,new cljs.core.Keyword(null,"down-arrow","down-arrow",1121135670));
var state_12921__$1 = state_12921;
if(cljs.core.truth_(inst_12847)){
var statearr_12951_13040 = state_12921__$1;
(statearr_12951_13040[(1)] = (34));

} else {
var statearr_12952_13041 = state_12921__$1;
(statearr_12952_13041[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (40))){
var inst_12806 = (state_12921[(7)]);
var inst_12866 = paren_soup.core.key_name_QMARK_.call(null,inst_12806,new cljs.core.Keyword(null,"arrows","arrows",-1209622014));
var state_12921__$1 = state_12921;
if(cljs.core.truth_(inst_12866)){
var statearr_12953_13042 = state_12921__$1;
(statearr_12953_13042[(1)] = (41));

} else {
var statearr_12954_13043 = state_12921__$1;
(statearr_12954_13043[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (56))){
var state_12921__$1 = state_12921;
var statearr_12955_13044 = state_12921__$1;
(statearr_12955_13044[(2)] = null);

(statearr_12955_13044[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (33))){
var inst_12860 = (state_12921[(2)]);
var state_12921__$1 = state_12921;
var statearr_12956_13045 = state_12921__$1;
(statearr_12956_13045[(2)] = inst_12860);

(statearr_12956_13045[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (13))){
var inst_12820 = (state_12921[(2)]);
var state_12921__$1 = state_12921;
if(cljs.core.truth_(inst_12820)){
var statearr_12957_13046 = state_12921__$1;
(statearr_12957_13046[(1)] = (14));

} else {
var statearr_12958_13047 = state_12921__$1;
(statearr_12958_13047[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (22))){
var inst_12806 = (state_12921[(7)]);
var inst_12831 = inst_12806.shiftKey;
var state_12921__$1 = state_12921;
if(cljs.core.truth_(inst_12831)){
var statearr_12959_13048 = state_12921__$1;
(statearr_12959_13048[(1)] = (25));

} else {
var statearr_12960_13049 = state_12921__$1;
(statearr_12960_13049[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (36))){
var inst_12858 = (state_12921[(2)]);
var state_12921__$1 = state_12921;
var statearr_12961_13050 = state_12921__$1;
(statearr_12961_13050[(2)] = inst_12858);

(statearr_12961_13050[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (41))){
var inst_12868 = paren_soup.dom.get_cursor_position.call(null,content,false);
var inst_12869 = paren_soup.core.update_cursor_position_BANG_.call(null,editor,inst_12868);
var state_12921__$1 = state_12921;
var statearr_12962_13051 = state_12921__$1;
(statearr_12962_13051[(2)] = inst_12869);

(statearr_12962_13051[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (43))){
var inst_12878 = (state_12921[(2)]);
var state_12921__$1 = state_12921;
var statearr_12963_13052 = state_12921__$1;
(statearr_12963_13052[(2)] = inst_12878);

(statearr_12963_13052[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (29))){
var inst_12806 = (state_12921[(7)]);
var inst_12843 = paren_soup.core.key_name_QMARK_.call(null,inst_12806,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
var state_12921__$1 = state_12921;
if(cljs.core.truth_(inst_12843)){
var statearr_12964_13053 = state_12921__$1;
(statearr_12964_13053[(1)] = (31));

} else {
var statearr_12965_13054 = state_12921__$1;
(statearr_12965_13054[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (44))){
var inst_12806 = (state_12921[(7)]);
var inst_12873 = paren_soup.core.refresh_after_key_event_BANG_.call(null,editor,inst_12806);
var state_12921__$1 = state_12921;
var statearr_12966_13055 = state_12921__$1;
(statearr_12966_13055[(2)] = inst_12873);

(statearr_12966_13055[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (6))){
var inst_12917 = (state_12921[(2)]);
var state_12921__$1 = state_12921;
var statearr_12967_13056 = state_12921__$1;
(statearr_12967_13056[(2)] = inst_12917);

(statearr_12967_13056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (28))){
var inst_12841 = paren_soup.core.enter_BANG_.call(null,editor);
var state_12921__$1 = state_12921;
var statearr_12968_13057 = state_12921__$1;
(statearr_12968_13057[(2)] = inst_12841);

(statearr_12968_13057[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (51))){
var inst_12892 = paren_soup.core.hide_error_messages_BANG_.call(null,paren_soup__$1);
var state_12921__$1 = state_12921;
var statearr_12969_13058 = state_12921__$1;
(statearr_12969_13058[(2)] = inst_12892);

(statearr_12969_13058[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (25))){
var inst_12833 = paren_soup.core.redo_BANG_.call(null,editor);
var state_12921__$1 = state_12921;
var statearr_12970_13059 = state_12921__$1;
(statearr_12970_13059[(2)] = inst_12833);

(statearr_12970_13059[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (34))){
var inst_12849 = paren_soup.core.down_BANG_.call(null,editor);
var state_12921__$1 = state_12921;
var statearr_12971_13060 = state_12921__$1;
(statearr_12971_13060[(2)] = inst_12849);

(statearr_12971_13060[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (17))){
var inst_12897 = (state_12921[(2)]);
var inst_12899 = (opts__$1 == null);
var state_12921__$1 = (function (){var statearr_12972 = state_12921;
(statearr_12972[(10)] = inst_12897);

return statearr_12972;
})();
if(cljs.core.truth_(inst_12899)){
var statearr_12973_13061 = state_12921__$1;
(statearr_12973_13061[(1)] = (53));

} else {
var statearr_12974_13062 = state_12921__$1;
(statearr_12974_13062[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (3))){
var inst_12919 = (state_12921[(2)]);
var state_12921__$1 = state_12921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12921__$1,inst_12919);
} else {
if((state_val_12922 === (12))){
var inst_12813 = (state_12921[(11)]);
var inst_12806 = (state_12921[(7)]);
var inst_12817 = (function (){var event = inst_12806;
var G__12807 = inst_12813;
return ((function (event,G__12807,inst_12813,inst_12806,state_val_12922,c__10645__auto___13012,opts__$1,content,events_chan,editor){
return (function (p1__12801_SHARP_){
return p1__12801_SHARP_.call(null,event);
});
;})(event,G__12807,inst_12813,inst_12806,state_val_12922,c__10645__auto___13012,opts__$1,content,events_chan,editor))
})();
var inst_12818 = inst_12817.call(null,inst_12813);
var state_12921__$1 = state_12921;
var statearr_12975_13063 = state_12921__$1;
(statearr_12975_13063[(2)] = inst_12818);

(statearr_12975_13063[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (2))){
var state_12921__$1 = state_12921;
var statearr_12976_13064 = state_12921__$1;
(statearr_12976_13064[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (23))){
var inst_12806 = (state_12921[(7)]);
var inst_12839 = paren_soup.core.key_name_QMARK_.call(null,inst_12806,new cljs.core.Keyword(null,"enter","enter",1792452624));
var state_12921__$1 = state_12921;
if(cljs.core.truth_(inst_12839)){
var statearr_12978_13065 = state_12921__$1;
(statearr_12978_13065[(1)] = (28));

} else {
var statearr_12979_13066 = state_12921__$1;
(statearr_12979_13066[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (47))){
var inst_12880 = paren_soup.core.refresh_after_cut_paste_BANG_.call(null,editor);
var state_12921__$1 = state_12921;
var statearr_12980_13067 = state_12921__$1;
(statearr_12980_13067[(2)] = inst_12880);

(statearr_12980_13067[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (35))){
var inst_12806 = (state_12921[(7)]);
var inst_12851 = paren_soup.core.key_name_QMARK_.call(null,inst_12806,new cljs.core.Keyword(null,"tab","tab",-559583621));
var state_12921__$1 = state_12921;
if(cljs.core.truth_(inst_12851)){
var statearr_12981_13068 = state_12921__$1;
(statearr_12981_13068[(1)] = (37));

} else {
var statearr_12982_13069 = state_12921__$1;
(statearr_12982_13069[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (19))){
var inst_12825 = new cljs.core.Keyword(null,"disable-undo-redo?","disable-undo-redo?",-2102787705).cljs$core$IFn$_invoke$arity$1(opts__$1);
var inst_12826 = cljs.core.not.call(null,inst_12825);
var state_12921__$1 = state_12921;
var statearr_12983_13070 = state_12921__$1;
(statearr_12983_13070[(2)] = inst_12826);

(statearr_12983_13070[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (57))){
var inst_12806 = (state_12921[(7)]);
var inst_12904 = (state_12921[(9)]);
var inst_12908 = (function (){var event = inst_12806;
var G__12898 = inst_12904;
return ((function (event,G__12898,inst_12806,inst_12904,state_val_12922,c__10645__auto___13012,opts__$1,content,events_chan,editor){
return (function (p1__12802_SHARP_){
return p1__12802_SHARP_.call(null,event);
});
;})(event,G__12898,inst_12806,inst_12904,state_val_12922,c__10645__auto___13012,opts__$1,content,events_chan,editor))
})();
var inst_12909 = inst_12908.call(null,inst_12904);
var state_12921__$1 = state_12921;
var statearr_12984_13071 = state_12921__$1;
(statearr_12984_13071[(2)] = inst_12909);

(statearr_12984_13071[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (11))){
var state_12921__$1 = state_12921;
var statearr_12985_13072 = state_12921__$1;
(statearr_12985_13072[(2)] = null);

(statearr_12985_13072[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (9))){
var inst_12811 = new cljs.core.Keyword(null,"before-change-callback","before-change-callback",1711751590).cljs$core$IFn$_invoke$arity$1(opts__$1);
var state_12921__$1 = state_12921;
var statearr_12986_13073 = state_12921__$1;
(statearr_12986_13073[(2)] = inst_12811);

(statearr_12986_13073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (5))){
var state_12921__$1 = state_12921;
var statearr_12987_13074 = state_12921__$1;
(statearr_12987_13074[(2)] = null);

(statearr_12987_13074[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (14))){
var state_12921__$1 = state_12921;
var statearr_12988_13075 = state_12921__$1;
(statearr_12988_13075[(2)] = null);

(statearr_12988_13075[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (45))){
var state_12921__$1 = state_12921;
var statearr_12989_13076 = state_12921__$1;
(statearr_12989_13076[(2)] = null);

(statearr_12989_13076[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (53))){
var state_12921__$1 = state_12921;
var statearr_12990_13077 = state_12921__$1;
(statearr_12990_13077[(2)] = null);

(statearr_12990_13077[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (26))){
var inst_12835 = paren_soup.core.undo_BANG_.call(null,editor);
var state_12921__$1 = state_12921;
var statearr_12991_13078 = state_12921__$1;
(statearr_12991_13078[(2)] = inst_12835);

(statearr_12991_13078[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (16))){
var inst_12913 = (state_12921[(2)]);
var state_12921__$1 = (function (){var statearr_12992 = state_12921;
(statearr_12992[(12)] = inst_12913);

return statearr_12992;
})();
var statearr_12993_13079 = state_12921__$1;
(statearr_12993_13079[(2)] = null);

(statearr_12993_13079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (38))){
var state_12921__$1 = state_12921;
var statearr_12994_13080 = state_12921__$1;
(statearr_12994_13080[(2)] = null);

(statearr_12994_13080[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (30))){
var inst_12862 = (state_12921[(2)]);
var state_12921__$1 = state_12921;
var statearr_12995_13081 = state_12921__$1;
(statearr_12995_13081[(2)] = inst_12862);

(statearr_12995_13081[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (10))){
var inst_12813 = (state_12921[(11)]);
var inst_12813__$1 = (state_12921[(2)]);
var inst_12814 = (inst_12813__$1 == null);
var state_12921__$1 = (function (){var statearr_12996 = state_12921;
(statearr_12996[(11)] = inst_12813__$1);

return statearr_12996;
})();
if(cljs.core.truth_(inst_12814)){
var statearr_12997_13082 = state_12921__$1;
(statearr_12997_13082[(1)] = (11));

} else {
var statearr_12998_13083 = state_12921__$1;
(statearr_12998_13083[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (18))){
var inst_12823 = (state_12921[(8)]);
var inst_12806 = (state_12921[(7)]);
var inst_12823__$1 = paren_soup.core.key_name_QMARK_.call(null,inst_12806,new cljs.core.Keyword(null,"undo-or-redo","undo-or-redo",-1044267541));
var state_12921__$1 = (function (){var statearr_12999 = state_12921;
(statearr_12999[(8)] = inst_12823__$1);

return statearr_12999;
})();
if(cljs.core.truth_(inst_12823__$1)){
var statearr_13000_13084 = state_12921__$1;
(statearr_13000_13084[(1)] = (19));

} else {
var statearr_13001_13085 = state_12921__$1;
(statearr_13001_13085[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (52))){
var state_12921__$1 = state_12921;
var statearr_13002_13086 = state_12921__$1;
(statearr_13002_13086[(2)] = null);

(statearr_13002_13086[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (42))){
var inst_12806 = (state_12921[(7)]);
var inst_12871 = paren_soup.core.key_name_QMARK_.call(null,inst_12806,new cljs.core.Keyword(null,"general","general",380803686));
var state_12921__$1 = state_12921;
if(cljs.core.truth_(inst_12871)){
var statearr_13003_13087 = state_12921__$1;
(statearr_13003_13087[(1)] = (44));

} else {
var statearr_13004_13088 = state_12921__$1;
(statearr_13004_13088[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (37))){
var inst_12853 = paren_soup.core.tab_BANG_.call(null,editor);
var state_12921__$1 = state_12921;
var statearr_13005_13089 = state_12921__$1;
(statearr_13005_13089[(2)] = inst_12853);

(statearr_13005_13089[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (8))){
var state_12921__$1 = state_12921;
var statearr_13006_13090 = state_12921__$1;
(statearr_13006_13090[(2)] = null);

(statearr_13006_13090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12922 === (49))){
var inst_12884 = new cljs.core.Keyword(null,"console-callback","console-callback",-1469472247).cljs$core$IFn$_invoke$arity$1(opts__$1);
var inst_12885 = (inst_12884 == null);
var inst_12886 = cljs.core.not.call(null,inst_12885);
var inst_12887 = paren_soup.dom.get_cursor_position.call(null,content,inst_12886);
var inst_12888 = paren_soup.core.update_cursor_position_BANG_.call(null,editor,inst_12887);
var state_12921__$1 = state_12921;
var statearr_13007_13091 = state_12921__$1;
(statearr_13007_13091[(2)] = inst_12888);

(statearr_13007_13091[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10645__auto___13012,opts__$1,content,events_chan,editor))
;
return ((function (switch__10557__auto__,c__10645__auto___13012,opts__$1,content,events_chan,editor){
return (function() {
var paren_soup$core$init_$_state_machine__10558__auto__ = null;
var paren_soup$core$init_$_state_machine__10558__auto____0 = (function (){
var statearr_13008 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13008[(0)] = paren_soup$core$init_$_state_machine__10558__auto__);

(statearr_13008[(1)] = (1));

return statearr_13008;
});
var paren_soup$core$init_$_state_machine__10558__auto____1 = (function (state_12921){
while(true){
var ret_value__10559__auto__ = (function (){try{while(true){
var result__10560__auto__ = switch__10557__auto__.call(null,state_12921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10560__auto__;
}
break;
}
}catch (e13009){if((e13009 instanceof Object)){
var ex__10561__auto__ = e13009;
var statearr_13010_13092 = state_12921;
(statearr_13010_13092[(5)] = ex__10561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13093 = state_12921;
state_12921 = G__13093;
continue;
} else {
return ret_value__10559__auto__;
}
break;
}
});
paren_soup$core$init_$_state_machine__10558__auto__ = function(state_12921){
switch(arguments.length){
case 0:
return paren_soup$core$init_$_state_machine__10558__auto____0.call(this);
case 1:
return paren_soup$core$init_$_state_machine__10558__auto____1.call(this,state_12921);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
paren_soup$core$init_$_state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$0 = paren_soup$core$init_$_state_machine__10558__auto____0;
paren_soup$core$init_$_state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$1 = paren_soup$core$init_$_state_machine__10558__auto____1;
return paren_soup$core$init_$_state_machine__10558__auto__;
})()
;})(switch__10557__auto__,c__10645__auto___13012,opts__$1,content,events_chan,editor))
})();
var state__10647__auto__ = (function (){var statearr_13011 = f__10646__auto__.call(null);
(statearr_13011[(6)] = c__10645__auto___13012);

return statearr_13011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10647__auto__);
});})(c__10645__auto___13012,opts__$1,content,events_chan,editor))
);


return editor;
});
goog.exportSymbol('paren_soup.core.init', paren_soup.core.init);
paren_soup.core.init_all = (function paren_soup$core$init_all(){
var seq__13094 = cljs.core.seq.call(null,cljs.core.array_seq.call(null,document.querySelectorAll(".paren-soup")));
var chunk__13095 = null;
var count__13096 = (0);
var i__13097 = (0);
while(true){
if((i__13097 < count__13096)){
var paren_soup__$1 = cljs.core._nth.call(null,chunk__13095,i__13097);
paren_soup.core.init.call(null,paren_soup__$1,({}));

var G__13098 = seq__13094;
var G__13099 = chunk__13095;
var G__13100 = count__13096;
var G__13101 = (i__13097 + (1));
seq__13094 = G__13098;
chunk__13095 = G__13099;
count__13096 = G__13100;
i__13097 = G__13101;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13094);
if(temp__4657__auto__){
var seq__13094__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13094__$1)){
var c__8105__auto__ = cljs.core.chunk_first.call(null,seq__13094__$1);
var G__13102 = cljs.core.chunk_rest.call(null,seq__13094__$1);
var G__13103 = c__8105__auto__;
var G__13104 = cljs.core.count.call(null,c__8105__auto__);
var G__13105 = (0);
seq__13094 = G__13102;
chunk__13095 = G__13103;
count__13096 = G__13104;
i__13097 = G__13105;
continue;
} else {
var paren_soup__$1 = cljs.core.first.call(null,seq__13094__$1);
paren_soup.core.init.call(null,paren_soup__$1,({}));

var G__13106 = cljs.core.next.call(null,seq__13094__$1);
var G__13107 = null;
var G__13108 = (0);
var G__13109 = (0);
seq__13094 = G__13106;
chunk__13095 = G__13107;
count__13096 = G__13108;
i__13097 = G__13109;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('paren_soup.core.init_all', paren_soup.core.init_all);
paren_soup.core.undo = (function paren_soup$core$undo(editor){
return paren_soup.core.undo_BANG_.call(null,editor);
});
goog.exportSymbol('paren_soup.core.undo', paren_soup.core.undo);
paren_soup.core.redo = (function paren_soup$core$redo(editor){
return paren_soup.core.redo_BANG_.call(null,editor);
});
goog.exportSymbol('paren_soup.core.redo', paren_soup.core.redo);
paren_soup.core.can_undo = (function paren_soup$core$can_undo(editor){
return paren_soup.core.can_undo_QMARK_.call(null,editor);
});
goog.exportSymbol('paren_soup.core.can_undo', paren_soup.core.can_undo);
paren_soup.core.can_redo = (function paren_soup$core$can_redo(editor){
return paren_soup.core.can_redo_QMARK_.call(null,editor);
});
goog.exportSymbol('paren_soup.core.can_redo', paren_soup.core.can_redo);
paren_soup.core.append_text = (function paren_soup$core$append_text(editor,text){
return paren_soup.core.append_text_BANG_.call(null,editor,text);
});
goog.exportSymbol('paren_soup.core.append_text', paren_soup.core.append_text);
paren_soup.core.eval = (function paren_soup$core$eval(editor,form,callback){
return paren_soup.core.eval_BANG_.call(null,editor,form,callback);
});
goog.exportSymbol('paren_soup.core.eval', paren_soup.core.eval);
paren_soup.core.debounce_function = (function paren_soup$core$debounce_function(f,millis){
return goog.functions.debounce(f,millis);
});
goog.exportSymbol('paren_soup.core.debounce_function', paren_soup.core.debounce_function);
paren_soup.core.focused_text = (function paren_soup$core$focused_text(){
var G__13110 = paren_soup.dom.get_focused_form.call(null);
if((G__13110 == null)){
return null;
} else {
return G__13110.textContent;
}
});
goog.exportSymbol('paren_soup.core.focused_text', paren_soup.core.focused_text);
paren_soup.core.selected_text = (function paren_soup$core$selected_text(){
var s = window.getSelection().toString();
if(cljs.core.empty_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
goog.exportSymbol('paren_soup.core.selected_text', paren_soup.core.selected_text);

//# sourceMappingURL=core.js.map