// Compiled by ClojureScript 1.9.671 {}
goog.provide('oakcljs.tools.reader.impl.commons');
goog.require('cljs.core');
goog.require('oakcljs.tools.reader.reader_types');
goog.require('oakcljs.tools.reader.impl.utils');
/**
 * Checks whether the reader is at the start of a number literal
 */
oakcljs.tools.reader.impl.commons.number_literal_QMARK_ = (function oakcljs$tools$reader$impl$commons$number_literal_QMARK_(reader,initch){
return (oakcljs.tools.reader.impl.utils.numeric_QMARK_.call(null,initch)) || (((("+" === initch)) || (("-" === initch))) && (oakcljs.tools.reader.impl.utils.numeric_QMARK_.call(null,oakcljs.tools.reader.reader_types.peek_char.call(null,reader))));
});
/**
 * Read until first character that doesn't match pred, returning
 * char.
 */
oakcljs.tools.reader.impl.commons.read_past = (function oakcljs$tools$reader$impl$commons$read_past(pred,rdr){
var ch = oakcljs.tools.reader.reader_types.read_char.call(null,rdr);
while(true){
if(pred.call(null,ch)){
var G__9021 = oakcljs.tools.reader.reader_types.read_char.call(null,rdr);
ch = G__9021;
continue;
} else {
return ch;
}
break;
}
});
/**
 * Advances the reader to the end of a line. Returns the reader
 */
oakcljs.tools.reader.impl.commons.skip_line = (function oakcljs$tools$reader$impl$commons$skip_line(reader){
while(true){
if(oakcljs.tools.reader.impl.utils.newline_QMARK_.call(null,oakcljs.tools.reader.reader_types.read_char.call(null,reader))){
} else {
continue;
}
break;
}

return reader;
});
oakcljs.tools.reader.impl.commons.int_pattern = /^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?$/;
oakcljs.tools.reader.impl.commons.ratio_pattern = /([-+]?[0-9]+)\/([0-9]+)/;
oakcljs.tools.reader.impl.commons.float_pattern = /([-+]?[0-9]+(\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?/;
oakcljs.tools.reader.impl.commons.match_int = (function oakcljs$tools$reader$impl$commons$match_int(s){
var m = cljs.core.vec.call(null,cljs.core.re_find.call(null,oakcljs.tools.reader.impl.commons.int_pattern,s));
if(!((m.call(null,(2)) == null))){
return (0);
} else {
var negate_QMARK_ = ("-" === m.call(null,(1)));
var a = ((!((m.call(null,(3)) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m.call(null,(3)),(10)], null):((!((m.call(null,(4)) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m.call(null,(4)),(16)], null):((!((m.call(null,(5)) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m.call(null,(5)),(8)], null):((!((m.call(null,(7)) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m.call(null,(7)),parseInt(m.call(null,(6)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)
))));
var n = a.call(null,(0));
if((n == null)){
return null;
} else {
var bn = parseInt(n,a.call(null,(1)));
var bn__$1 = ((negate_QMARK_)?((-1) * bn):bn);
if(cljs.core.truth_(isNaN(bn__$1))){
return null;
} else {
return bn__$1;
}
}
}
});
oakcljs.tools.reader.impl.commons.match_ratio = (function oakcljs$tools$reader$impl$commons$match_ratio(s){
var m = cljs.core.vec.call(null,cljs.core.re_find.call(null,oakcljs.tools.reader.impl.commons.ratio_pattern,s));
var numerator = m.call(null,(1));
var denominator = m.call(null,(2));
var numerator__$1 = (cljs.core.truth_(cljs.core.re_find.call(null,/^\+/,numerator))?cljs.core.subs.call(null,numerator,(1)):numerator);
return (parseInt(numerator__$1) / parseInt(denominator));
});
oakcljs.tools.reader.impl.commons.match_float = (function oakcljs$tools$reader$impl$commons$match_float(s){
var m = cljs.core.vec.call(null,cljs.core.re_find.call(null,oakcljs.tools.reader.impl.commons.float_pattern,s));
if(!((m.call(null,(4)) == null))){
return parseFloat(m.call(null,(1)));
} else {
return parseFloat(s);
}
});
oakcljs.tools.reader.impl.commons.matches_QMARK_ = (function oakcljs$tools$reader$impl$commons$matches_QMARK_(pattern,s){
var vec__9022 = cljs.core.re_find.call(null,pattern,s);
var match = cljs.core.nth.call(null,vec__9022,(0),null);
return (match === s);
});
oakcljs.tools.reader.impl.commons.match_number = (function oakcljs$tools$reader$impl$commons$match_number(s){
if(oakcljs.tools.reader.impl.commons.matches_QMARK_.call(null,oakcljs.tools.reader.impl.commons.int_pattern,s)){
return oakcljs.tools.reader.impl.commons.match_int.call(null,s);
} else {
if(oakcljs.tools.reader.impl.commons.matches_QMARK_.call(null,oakcljs.tools.reader.impl.commons.float_pattern,s)){
return oakcljs.tools.reader.impl.commons.match_float.call(null,s);
} else {
if(oakcljs.tools.reader.impl.commons.matches_QMARK_.call(null,oakcljs.tools.reader.impl.commons.ratio_pattern,s)){
return oakcljs.tools.reader.impl.commons.match_ratio.call(null,s);
} else {
return null;
}
}
}
});
/**
 * Parses a string into a vector of the namespace and symbol
 */
oakcljs.tools.reader.impl.commons.parse_symbol = (function oakcljs$tools$reader$impl$commons$parse_symbol(token){
if((("" === token)) || (/:$/.test(token) === true) || (/^::/.test(token) === true)){
return null;
} else {
var ns_idx = token.indexOf("/");
var ns = (((ns_idx > (0)))?cljs.core.subs.call(null,token,(0),ns_idx):null);
if(!((ns == null))){
var ns_idx__$1 = (ns_idx + (1));
if((ns_idx__$1 === cljs.core.count.call(null,token))){
return null;
} else {
var sym = cljs.core.subs.call(null,token,ns_idx__$1);
if((!(oakcljs.tools.reader.impl.utils.numeric_QMARK_.call(null,cljs.core.nth.call(null,sym,(0))))) && (!(("" === sym))) && (/:$/.test(ns) === false) && (((sym === "/")) || (((-1) === sym.indexOf("/"))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,sym], null);
} else {
return null;
}
}
} else {
if(((token === "/")) || (((-1) === token.indexOf("/")))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,token], null);
} else {
return null;
}
}
}
});
oakcljs.tools.reader.impl.commons.read_comment = (function oakcljs$tools$reader$impl$commons$read_comment(var_args){
var args__8417__auto__ = [];
var len__8410__auto___9027 = arguments.length;
var i__8411__auto___9028 = (0);
while(true){
if((i__8411__auto___9028 < len__8410__auto___9027)){
args__8417__auto__.push((arguments[i__8411__auto___9028]));

var G__9029 = (i__8411__auto___9028 + (1));
i__8411__auto___9028 = G__9029;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((1) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((1)),(0),null)):null);
return oakcljs.tools.reader.impl.commons.read_comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8418__auto__);
});

oakcljs.tools.reader.impl.commons.read_comment.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,_){
return oakcljs.tools.reader.impl.commons.skip_line.call(null,rdr);
});

oakcljs.tools.reader.impl.commons.read_comment.cljs$lang$maxFixedArity = (1);

oakcljs.tools.reader.impl.commons.read_comment.cljs$lang$applyTo = (function (seq9025){
var G__9026 = cljs.core.first.call(null,seq9025);
var seq9025__$1 = cljs.core.next.call(null,seq9025);
return oakcljs.tools.reader.impl.commons.read_comment.cljs$core$IFn$_invoke$arity$variadic(G__9026,seq9025__$1);
});

oakcljs.tools.reader.impl.commons.throwing_reader = (function oakcljs$tools$reader$impl$commons$throwing_reader(msg){
return (function() { 
var G__9030__delegate = function (rdr,_){
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,msg);
};
var G__9030 = function (rdr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9031__i = 0, G__9031__a = new Array(arguments.length -  1);
while (G__9031__i < G__9031__a.length) {G__9031__a[G__9031__i] = arguments[G__9031__i + 1]; ++G__9031__i;}
  _ = new cljs.core.IndexedSeq(G__9031__a,0,null);
} 
return G__9030__delegate.call(this,rdr,_);};
G__9030.cljs$lang$maxFixedArity = 1;
G__9030.cljs$lang$applyTo = (function (arglist__9032){
var rdr = cljs.core.first(arglist__9032);
var _ = cljs.core.rest(arglist__9032);
return G__9030__delegate(rdr,_);
});
G__9030.cljs$core$IFn$_invoke$arity$variadic = G__9030__delegate;
return G__9030;
})()
;
});

//# sourceMappingURL=commons.js.map