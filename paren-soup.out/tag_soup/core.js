// Compiled by ClojureScript 1.9.671 {}
goog.provide('tag_soup.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('oakcljs.tools.reader');
goog.require('oakcljs.tools.reader.reader_types');
/**
 * Returns either a form or an exception object, or nil if EOF is reached.
 */
tag_soup.core.read_safe = (function tag_soup$core$read_safe(reader){
try{var _STAR_wrap_value_and_add_metadata_QMARK__STAR_9215 = oakcljs.tools.reader._STAR_wrap_value_and_add_metadata_QMARK__STAR_;
oakcljs.tools.reader._STAR_wrap_value_and_add_metadata_QMARK__STAR_ = true;

try{return oakcljs.tools.reader.read.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"preserve","preserve",1276846509),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),reader);
}finally {oakcljs.tools.reader._STAR_wrap_value_and_add_metadata_QMARK__STAR_ = _STAR_wrap_value_and_add_metadata_QMARK__STAR_9215;
}}catch (e9214){if((e9214 instanceof Error)){
var e = e9214;
return e;
} else {
throw e9214;

}
}});
tag_soup.core.special_indent = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, [new cljs.core.Symbol(null,"and","and",668631710,null),null,new cljs.core.Symbol(null,">=",">=",1016916022,null),null,new cljs.core.Symbol(null,">",">",1085014381,null),null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,new cljs.core.Symbol(null,"->>","->>",-1874332161,null),null,new cljs.core.Symbol(null,"<=","<=",1244895369,null),null,new cljs.core.Symbol(null,"=","=",-1501502141,null),null,new cljs.core.Symbol(null,"cond->>","cond->>",348844960,null),null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,new cljs.core.Symbol(null,"==","==",-234118149,null),null,new cljs.core.Symbol(null,"*","*",345799209,null),null,new cljs.core.Symbol(null,"some->>","some->>",-1499987794,null),null,new cljs.core.Symbol(null,"some->","some->",-1011172200,null),null,new cljs.core.Symbol(null,"not=","not=",1466536204,null),null,new cljs.core.Symbol(null,"cond->","cond->",561741875,null),null,new cljs.core.Symbol(null,"<","<",993667236,null),null,new cljs.core.Symbol(null,"-","-",-471816912,null),null,new cljs.core.Symbol(null,"->","->",-2139605430,null),null,new cljs.core.Symbol(null,"as->","as->",1430690540,null),null,new cljs.core.Symbol(null,"or","or",1876275696,null),null], null), null);
tag_soup.core.unwrap_value = (function tag_soup$core$unwrap_value(value){
if(cljs.core.truth_(new cljs.core.Keyword(null,"wrapped?","wrapped?",-1103535285).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,value)))){
return cljs.core.first.call(null,value);
} else {
return value;
}
});
/**
 * Returns how much the indent should be adjusted for the given token.
 */
tag_soup.core.adjust_indent = (function tag_soup$core$adjust_indent(token){
if(cljs.core.list_QMARK_.call(null,token)){
var first_val = tag_soup.core.unwrap_value.call(null,cljs.core.first.call(null,token));
if(cljs.core.vector_QMARK_.call(null,first_val)){
return (0);
} else {
if((first_val instanceof cljs.core.Keyword)){
return (cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_val)].join('')) + (1));
} else {
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, [new cljs.core.Symbol(null,"and","and",668631710,null),null,new cljs.core.Symbol(null,">=",">=",1016916022,null),null,new cljs.core.Symbol(null,">",">",1085014381,null),null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,new cljs.core.Symbol(null,"->>","->>",-1874332161,null),null,new cljs.core.Symbol(null,"<=","<=",1244895369,null),null,new cljs.core.Symbol(null,"=","=",-1501502141,null),null,new cljs.core.Symbol(null,"cond->>","cond->>",348844960,null),null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,new cljs.core.Symbol(null,"==","==",-234118149,null),null,new cljs.core.Symbol(null,"*","*",345799209,null),null,new cljs.core.Symbol(null,"some->>","some->>",-1499987794,null),null,new cljs.core.Symbol(null,"some->","some->",-1011172200,null),null,new cljs.core.Symbol(null,"not=","not=",1466536204,null),null,new cljs.core.Symbol(null,"cond->","cond->",561741875,null),null,new cljs.core.Symbol(null,"<","<",993667236,null),null,new cljs.core.Symbol(null,"-","-",-471816912,null),null,new cljs.core.Symbol(null,"->","->",-2139605430,null),null,new cljs.core.Symbol(null,"as->","as->",1430690540,null),null,new cljs.core.Symbol(null,"or","or",1876275696,null),null], null), null),first_val)){
return (cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_val)].join('')) + (1));
} else {
return (1);

}
}
}
} else {
return (0);
}
});
/**
 * Returns a transient map containing the tags, organized by line number.
 */
tag_soup.core.tag_map = (function tag_soup$core$tag_map(token,results_map,parent_indent){
if((token instanceof Error)){
var map__9216 = token.data;
var map__9216__$1 = ((((!((map__9216 == null)))?((((map__9216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9216):map__9216);
var line = cljs.core.get.call(null,map__9216__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__9216__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return cljs.core.assoc_BANG_.call(null,results_map,line,cljs.core.conj.call(null,cljs.core.get.call(null,results_map,line,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error?","error?",-460689159),true,new cljs.core.Keyword(null,"message","message",-406056002),token.message,new cljs.core.Keyword(null,"column","column",2078222095),column], null)));
} else {
if((cljs.core.coll_QMARK_.call(null,token)) && ((cljs.core.meta.call(null,token) == null))){
return cljs.core.reduce.call(null,(function (results_map__$1,token__$1){
return tag_soup.core.tag_map.call(null,token__$1,results_map__$1,parent_indent);
}),results_map,token);
} else {
var map__9218 = cljs.core.meta.call(null,token);
var map__9218__$1 = ((((!((map__9218 == null)))?((((map__9218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9218.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9218):map__9218);
var line = cljs.core.get.call(null,map__9218__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__9218__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_line = cljs.core.get.call(null,map__9218__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var end_column = cljs.core.get.call(null,map__9218__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
if(cljs.core.not.call(null,(function (){var and__7273__auto__ = line;
if(cljs.core.truth_(and__7273__auto__)){
var and__7273__auto____$1 = column;
if(cljs.core.truth_(and__7273__auto____$1)){
var and__7273__auto____$2 = end_line;
if(cljs.core.truth_(and__7273__auto____$2)){
return end_column;
} else {
return and__7273__auto____$2;
}
} else {
return and__7273__auto____$1;
}
} else {
return and__7273__auto__;
}
})())){
return results_map;
} else {
var value = tag_soup.core.unwrap_value.call(null,token);
var indent = (function (){var x__7621__auto__ = parent_indent;
var y__7622__auto__ = (column - (1));
return ((x__7621__auto__ > y__7622__auto__) ? x__7621__auto__ : y__7622__auto__);
})();
var top_level_QMARK_ = cljs.core._EQ_.call(null,parent_indent,(0));
if(cljs.core.coll_QMARK_.call(null,value)){
var delimiter_size = ((cljs.core.set_QMARK_.call(null,value))?(2):(1));
var new_end_column = (column + delimiter_size);
var adjustment = tag_soup.core.adjust_indent.call(null,value);
var next_line_indent = (((column - (1)) + delimiter_size) + adjustment);
var $ = results_map;
var $__$1 = cljs.core.assoc_BANG_.call(null,$,line,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.get.call(null,$,line,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"begin?","begin?",1954435380),true,new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"indent","indent",-148200125),indent,new cljs.core.Keyword(null,"top-level?","top-level?",993634489),top_level_QMARK_,new cljs.core.Keyword(null,"skip-indent?","skip-indent?",-1869048328),true], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delimiter?","delimiter?",-579861557),true,new cljs.core.Keyword(null,"column","column",2078222095),column], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end?","end?",-1423391609),true,new cljs.core.Keyword(null,"column","column",2078222095),new_end_column,new cljs.core.Keyword(null,"next-line-indent","next-line-indent",50285883),next_line_indent,new cljs.core.Keyword(null,"indent","indent",-148200125),next_line_indent], null)));
var $__$2 = cljs.core.reduce.call(null,((function ($,$__$1,delimiter_size,new_end_column,adjustment,next_line_indent,value,indent,top_level_QMARK_,map__9218,map__9218__$1,line,column,end_line,end_column){
return (function (results_map__$1,token__$1){
return tag_soup.core.tag_map.call(null,token__$1,results_map__$1,next_line_indent);
});})($,$__$1,delimiter_size,new_end_column,adjustment,next_line_indent,value,indent,top_level_QMARK_,map__9218,map__9218__$1,line,column,end_line,end_column))
,$__$1,value);
return cljs.core.assoc_BANG_.call(null,$__$2,end_line,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.get.call(null,$__$2,end_line,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delimiter?","delimiter?",-579861557),true,new cljs.core.Keyword(null,"column","column",2078222095),(end_column - (1))], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"end?","end?",-1423391609),true,new cljs.core.Keyword(null,"column","column",2078222095),end_column,new cljs.core.Keyword(null,"next-line-indent","next-line-indent",50285883),parent_indent], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"end?","end?",-1423391609),true,new cljs.core.Keyword(null,"column","column",2078222095),end_column], null)));
} else {
var $ = results_map;
var $__$1 = cljs.core.assoc_BANG_.call(null,$,line,cljs.core.conj.call(null,cljs.core.get.call(null,$,line,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"begin?","begin?",1954435380),true,new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"indent","indent",-148200125),indent,new cljs.core.Keyword(null,"top-level?","top-level?",993634489),top_level_QMARK_], null)));
return cljs.core.assoc_BANG_.call(null,$__$1,end_line,cljs.core.conj.call(null,cljs.core.get.call(null,$__$1,end_line,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"end?","end?",-1423391609),true,new cljs.core.Keyword(null,"column","column",2078222095),end_column], null)));
}
}

}
}
});
/**
 * Returns the tags for the given string containing code.
 */
tag_soup.core.code__GT_tags = (function tag_soup$core$code__GT_tags(text){
var reader = oakcljs.tools.reader.reader_types.indexing_push_back_reader.call(null,text);
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__4655__auto__ = tag_soup.core.read_safe.call(null,reader);
if(cljs.core.truth_(temp__4655__auto__)){
var token = temp__4655__auto__;
var G__9220 = tag_soup.core.tag_map.call(null,token,m,(0));
m = G__9220;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,m);
}
break;
}
});
/**
 * Returns the tags before the given line.
 */
tag_soup.core.get_tags_before_line = (function tag_soup$core$get_tags_before_line(tags,line){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__9222_SHARP_){
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"column","column",2078222095),p1__9222_SHARP_);
}),cljs.core.map.call(null,cljs.core.second,cljs.core.sort_by.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p1__9221_SHARP_){
return (cljs.core.first.call(null,p1__9221_SHARP_) < line);
}),tags)))));
});
/**
 * Returns the number of spaces the given line should be indented.
 */
tag_soup.core.indent_for_line = (function tag_soup$core$indent_for_line(tags,line){
var or__7285__auto__ = cljs.core.some.call(null,new cljs.core.Keyword(null,"next-line-indent","next-line-indent",50285883),cljs.core.reverse.call(null,tag_soup.core.get_tags_before_line.call(null,tags,line)));
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return (0);
}
});
/**
 * Returns the number of spaces the given line should be indented back.
 */
tag_soup.core.back_indent_for_line = (function tag_soup$core$back_indent_for_line(tags,line,current_indent){
var tags_before = tag_soup.core.get_tags_before_line.call(null,tags,line);
var tags__$1 = cljs.core.reverse.call(null,tags_before);
var max_tab_stop = current_indent;
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,tags__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var tag = temp__4655__auto__;
var temp__4655__auto____$1 = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(tag);
if(cljs.core.truth_(temp__4655__auto____$1)){
var indent = temp__4655__auto____$1;
if((indent < max_tab_stop)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"skip-indent?","skip-indent?",-1869048328).cljs$core$IFn$_invoke$arity$1(tag))){
var G__9223 = cljs.core.rest.call(null,tags__$1);
var G__9224 = (indent + (1));
tags__$1 = G__9223;
max_tab_stop = G__9224;
continue;
} else {
return indent;
}
} else {
var G__9225 = cljs.core.rest.call(null,tags__$1);
var G__9226 = max_tab_stop;
tags__$1 = G__9225;
max_tab_stop = G__9226;
continue;
}
} else {
var G__9227 = cljs.core.rest.call(null,tags__$1);
var G__9228 = max_tab_stop;
tags__$1 = G__9227;
max_tab_stop = G__9228;
continue;
}
} else {
return (current_indent - (2));
}
break;
}
});
/**
 * Returns the number of spaces the given line should be indented forward.
 */
tag_soup.core.forward_indent_for_line = (function tag_soup$core$forward_indent_for_line(tags,line,current_indent){
var tags_before = tag_soup.core.get_tags_before_line.call(null,tags,line);
var tags__$1 = cljs.core.reverse.call(null,tags_before);
var max_tab_stop = (-1);
var tab_stop = (-1);
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,tags__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var tag = temp__4655__auto__;
var temp__4655__auto____$1 = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(tag);
if(cljs.core.truth_(temp__4655__auto____$1)){
var indent = temp__4655__auto____$1;
if((indent <= current_indent)){
var G__9229 = cljs.core.PersistentVector.EMPTY;
var G__9230 = max_tab_stop;
var G__9231 = tab_stop;
tags__$1 = G__9229;
max_tab_stop = G__9230;
tab_stop = G__9231;
continue;
} else {
if(((max_tab_stop < (0))) || (((current_indent < indent)) && ((indent < max_tab_stop)))){
var G__9232 = cljs.core.rest.call(null,tags__$1);
var G__9233 = (indent + (1));
var G__9234 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-indent?","skip-indent?",-1869048328).cljs$core$IFn$_invoke$arity$1(tag))?tab_stop:indent);
tags__$1 = G__9232;
max_tab_stop = G__9233;
tab_stop = G__9234;
continue;
} else {
var G__9235 = cljs.core.rest.call(null,tags__$1);
var G__9236 = max_tab_stop;
var G__9237 = tab_stop;
tags__$1 = G__9235;
max_tab_stop = G__9236;
tab_stop = G__9237;
continue;

}
}
} else {
var G__9238 = cljs.core.rest.call(null,tags__$1);
var G__9239 = max_tab_stop;
var G__9240 = tab_stop;
tags__$1 = G__9238;
max_tab_stop = G__9239;
tab_stop = G__9240;
continue;
}
} else {
if((tab_stop <= current_indent)){
return (current_indent + (2));
} else {
return tab_stop;
}
}
break;
}
});

//# sourceMappingURL=core.js.map