// Compiled by ClojureScript 1.9.671 {}
goog.provide('html_soup.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tag_soup.core');
goog.require('goog.string');
/**
 * Splits the string into lines.
 */
html_soup.core.split_lines = (function html_soup$core$split_lines(s){
return cljs.core.vec.call(null,s.split("\n",(-1)));
});
/**
 * Escapes an HTML string
 */
html_soup.core.escape_html_str = (function html_soup$core$escape_html_str(s){
return clojure.string.escape.call(null,s,new cljs.core.PersistentArrayMap(null, 5, ["<","&lt;",">","&gt;","&","&amp;","\"","&quot;","'","&apos;"], null));
});
/**
 * Escapes an HTML character
 */
html_soup.core.escape_html_char = (function html_soup$core$escape_html_char(s){
var G__9243 = s;
switch (G__9243) {
case "<":
return "&lt;";

break;
case ">":
return "&gt;";

break;
case "&":
return "&amp;";

break;
case "\"":
return "&quot;";

break;
case "'":
return "&apos;";

break;
default:
return s;

}
});
/**
 * Returns an HTML string for the given tag description.
 */
html_soup.core.tag__GT_html = (function html_soup$core$tag__GT_html(tag){
if(cljs.core.truth_(new cljs.core.Keyword(null,"delimiter?","delimiter?",-579861557).cljs$core$IFn$_invoke$arity$1(tag))){
return "<span class='delimiter'>";
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"error?","error?",-460689159).cljs$core$IFn$_invoke$arity$1(tag))){
return goog.string.format("<span class='error' data-message='%s'></span>",(function (){var G__9245 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(tag);
if((G__9245 == null)){
return null;
} else {
return html_soup.core.escape_html_str.call(null,G__9245);
}
})());
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"begin?","begin?",1954435380).cljs$core$IFn$_invoke$arity$1(tag))){
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(tag);
if((value instanceof cljs.core.Symbol)){
return "<span class='symbol'>";
} else {
if(cljs.core.list_QMARK_.call(null,value)){
return "<span class='collection list'>";
} else {
if(cljs.core.vector_QMARK_.call(null,value)){
return "<span class='collection vector'>";
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return "<span class='collection map'>";
} else {
if(cljs.core.set_QMARK_.call(null,value)){
return "<span class='collection set'>";
} else {
if(typeof value === 'number'){
return "<span class='number'>";
} else {
if(typeof value === 'string'){
return "<span class='string'>";
} else {
if((value instanceof cljs.core.Keyword)){
return "<span class='keyword'>";
} else {
if((value == null)){
return "<span class='nil'>";
} else {
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null),value)){
return "<span class='boolean'>";
} else {
return "<span>";

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
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"end?","end?",-1423391609).cljs$core$IFn$_invoke$arity$1(tag))){
return "</span>";
} else {
return null;
}
}
}
}
});
/**
 * Returns a Hiccup-compatible data structure for the given tag description.
 */
html_soup.core.tag__GT_hiccup = (function html_soup$core$tag__GT_hiccup(tag){
if(cljs.core.truth_(new cljs.core.Keyword(null,"delimiter?","delimiter?",-579861557).cljs$core$IFn$_invoke$arity$1(tag))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"delimiter"], null)], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"error?","error?",-460689159).cljs$core$IFn$_invoke$arity$1(tag))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"error",new cljs.core.Keyword(null,"data-message","data-message",1338403219),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(tag)], null)], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"begin?","begin?",1954435380).cljs$core$IFn$_invoke$arity$1(tag))){
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(tag);
if((value instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"symbol"], null)], null);
} else {
if(cljs.core.list_QMARK_.call(null,value)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"collection list"], null)], null);
} else {
if(cljs.core.vector_QMARK_.call(null,value)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"collection vector"], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"collection map"], null)], null);
} else {
if(cljs.core.set_QMARK_.call(null,value)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"collection set"], null)], null);
} else {
if(typeof value === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"number"], null)], null);
} else {
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"string"], null)], null);
} else {
if((value instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"keyword"], null)], null);
} else {
if((value == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"nil"], null)], null);
} else {
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null),value)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"boolean"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);

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
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"end?","end?",-1423391609).cljs$core$IFn$_invoke$arity$1(tag))){
return null;
} else {
return null;
}
}
}
}
});
html_soup.core.tags_for_line__GT_html = cljs.core.comp.call(null,cljs.core.partition_by.call(null,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core.map.call(null,(function (p1__9246_SHARP_){
return clojure.string.join.call(null,cljs.core.map.call(null,html_soup.core.tag__GT_html,p1__9246_SHARP_));
})));
html_soup.core.tags_for_line__GT_hiccup = cljs.core.comp.call(null,cljs.core.partition_by.call(null,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core.map.call(null,(function (p1__9247_SHARP_){
return cljs.core.map.call(null,html_soup.core.tag__GT_hiccup,p1__9247_SHARP_);
})));
/**
 * Splits a line into segments where tags are supposed to appear.
 */
html_soup.core.line__GT_segments = (function html_soup$core$line__GT_segments(line,tags_for_line,escape_QMARK_){
var columns = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"column","column",2078222095),tags_for_line));
var escape_html_char = (cljs.core.truth_(escape_QMARK_)?html_soup.core.escape_html_char:cljs.core.identity);
var i = (0);
var segments = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var current_segment = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var temp__4655__auto__ = (function (){var G__9248 = line;
var G__9248__$1 = (((G__9248 == null))?null:cljs.core.get.call(null,G__9248,i));
if((G__9248__$1 == null)){
return null;
} else {
return escape_html_char.call(null,G__9248__$1);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
if(cljs.core.contains_QMARK_.call(null,columns,(i + (1)))){
var G__9249 = (i + (1));
var G__9250 = cljs.core.conj_BANG_.call(null,segments,cljs.core.persistent_BANG_.call(null,current_segment));
var G__9251 = cljs.core.transient$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
i = G__9249;
segments = G__9250;
current_segment = G__9251;
continue;
} else {
var G__9252 = (i + (1));
var G__9253 = segments;
var G__9254 = cljs.core.conj_BANG_.call(null,current_segment,c);
i = G__9252;
segments = G__9253;
current_segment = G__9254;
continue;
}
} else {
return cljs.core.map.call(null,clojure.string.join,cljs.core.persistent_BANG_.call(null,cljs.core.conj_BANG_.call(null,segments,cljs.core.persistent_BANG_.call(null,current_segment))));
}
break;
}
});
/**
 * Returns the given line with html added.
 */
html_soup.core.line__GT_html = (function html_soup$core$line__GT_html(line,tags_for_line){
var html_per_column = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,html_soup.core.tags_for_line__GT_html,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"column","column",2078222095),tags_for_line));
var segments = html_soup.core.line__GT_segments.call(null,line,tags_for_line,true);
return clojure.string.join.call(null,cljs.core.interleave.call(null,segments,cljs.core.concat.call(null,html_per_column,cljs.core.repeat.call(null,""))));
});
/**
 * Returns the given line with Hiccup-compatible data structures added.
 */
html_soup.core.line__GT_hiccup = (function html_soup$core$line__GT_hiccup(line,tags_for_line){
var hiccup_per_column = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,html_soup.core.tags_for_line__GT_hiccup,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"column","column",2078222095),tags_for_line));
var segments = cljs.core.map.call(null,cljs.core.list,html_soup.core.line__GT_segments.call(null,line,tags_for_line,false));
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.interleave.call(null,segments,cljs.core.concat.call(null,hiccup_per_column,cljs.core.repeat.call(null,null))));
});
/**
 * Returns the lines parsed with the given function.
 */
html_soup.core.parse_lines = (function html_soup$core$parse_lines(parse_fn,lines,tags){
var i = (0);
var results = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var temp__4655__auto__ = cljs.core.get.call(null,lines,i);
if(cljs.core.truth_(temp__4655__auto__)){
var line = temp__4655__auto__;
var G__9255 = (i + (1));
var G__9256 = cljs.core.conj_BANG_.call(null,results,parse_fn.call(null,line,cljs.core.get.call(null,tags,(i + (1)))));
i = G__9255;
results = G__9256;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,results);
}
break;
}
});
/**
 * Returns the code in the given string with html added.
 */
html_soup.core.code__GT_html = (function html_soup$core$code__GT_html(code){
var lines = html_soup.core.split_lines.call(null,code);
var tags = tag_soup.core.code__GT_tags.call(null,code);
var lines__$1 = html_soup.core.parse_lines.call(null,html_soup.core.line__GT_html,lines,tags);
return clojure.string.join.call(null,"\n",lines__$1);
});
/**
 * Takes a flat list of Hiccup-compatible data and adds structure to it.
 */
html_soup.core.structurize_hiccup = (function html_soup$core$structurize_hiccup(var_args){
var G__9258 = arguments.length;
switch (G__9258) {
case 1:
return html_soup.core.structurize_hiccup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return html_soup.core.structurize_hiccup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

html_soup.core.structurize_hiccup.cljs$core$IFn$_invoke$arity$1 = (function (flat_hiccup){
return cljs.core.second.call(null,html_soup.core.structurize_hiccup.call(null,flat_hiccup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null)));
});

html_soup.core.structurize_hiccup.cljs$core$IFn$_invoke$arity$2 = (function (flat_hiccup,structured_hiccup){
var flat_hiccup__$1 = flat_hiccup;
var structured_hiccup__$1 = structured_hiccup;
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,flat_hiccup__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var token = temp__4655__auto__;
if(typeof token === 'string'){
var G__9263 = cljs.core.rest.call(null,flat_hiccup__$1);
var G__9264 = cljs.core.conj.call(null,structured_hiccup__$1,token);
flat_hiccup__$1 = G__9263;
structured_hiccup__$1 = G__9264;
continue;
} else {
if(cljs.core.vector_QMARK_.call(null,token)){
var vec__9259 = html_soup.core.structurize_hiccup.call(null,cljs.core.rest.call(null,flat_hiccup__$1),token);
var flat = cljs.core.nth.call(null,vec__9259,(0),null);
var structured = cljs.core.nth.call(null,vec__9259,(1),null);
var G__9265 = flat;
var G__9266 = cljs.core.conj.call(null,structured_hiccup__$1,structured);
flat_hiccup__$1 = G__9265;
structured_hiccup__$1 = G__9266;
continue;
} else {
return null;
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,flat_hiccup__$1),structured_hiccup__$1], null);
}
break;
}
});

html_soup.core.structurize_hiccup.cljs$lang$maxFixedArity = 2;

/**
 * Returns the code in the given string with Hiccup-compatible data structures added.
 */
html_soup.core.code__GT_hiccup = (function html_soup$core$code__GT_hiccup(code){
var lines = html_soup.core.split_lines.call(null,code);
var tags = tag_soup.core.code__GT_tags.call(null,code);
var hiccup = html_soup.core.parse_lines.call(null,html_soup.core.line__GT_hiccup,lines,tags);
var hiccup__$1 = cljs.core.apply.call(null,cljs.core.concat,cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n"], null),hiccup));
return html_soup.core.structurize_hiccup.call(null,hiccup__$1);
});

//# sourceMappingURL=core.js.map