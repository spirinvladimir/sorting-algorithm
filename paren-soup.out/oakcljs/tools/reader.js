// Compiled by ClojureScript 1.9.671 {}
goog.provide('oakcljs.tools.reader');
goog.require('cljs.core');
goog.require('oakcljs.tools.reader.reader_types');
goog.require('oakcljs.tools.reader.impl.utils');
goog.require('oakcljs.tools.reader.impl.commons');
goog.require('clojure.string');
goog.require('goog.array');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');






oakcljs.tools.reader.macro_terminating_QMARK_ = (function oakcljs$tools$reader$macro_terminating_QMARK_(ch){
var G__9050 = ch;
switch (G__9050) {
case "\"":
case ";":
case "@":
case "^":
case "`":
case "~":
case "(":
case ")":
case "[":
case "]":
case "{":
case "}":
case "\\":
return true;

break;
default:
return false;

}
});
oakcljs.tools.reader.sb = (new goog.string.StringBuffer());
/**
 * Read in a single logical token from the reader
 */
oakcljs.tools.reader.read_token = (function oakcljs$tools$reader$read_token(rdr,initch){
if((initch == null)){
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading");
} else {
oakcljs.tools.reader.sb.clear();

var ch = initch;
while(true){
if((oakcljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)) || (oakcljs.tools.reader.macro_terminating_QMARK_.call(null,ch)) || ((ch == null))){
if((ch == null)){
} else {
oakcljs.tools.reader.reader_types.unread.call(null,rdr,ch);
}

return oakcljs.tools.reader.sb.toString();
} else {
oakcljs.tools.reader.sb.append(ch);

var G__9052 = oakcljs.tools.reader.reader_types.read_char.call(null,rdr);
ch = G__9052;
continue;
}
break;
}
}
});
oakcljs.tools.reader.read_dispatch = (function oakcljs$tools$reader$read_dispatch(rdr,_,opts,pending_forms){
var temp__4655__auto__ = oakcljs.tools.reader.reader_types.read_char.call(null,rdr);
if(cljs.core.truth_(temp__4655__auto__)){
var ch = temp__4655__auto__;
var temp__4655__auto____$1 = oakcljs.tools.reader.dispatch_macros.call(null,ch);
if(cljs.core.truth_(temp__4655__auto____$1)){
var dm = temp__4655__auto____$1;
return dm.call(null,rdr,ch,opts,pending_forms);
} else {
return oakcljs.tools.reader.read_tagged.call(null,(function (){var G__9053 = rdr;
oakcljs.tools.reader.reader_types.unread.call(null,G__9053,ch);

return G__9053;
})(),ch,opts,pending_forms);
}
} else {
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading character");
}
});
oakcljs.tools.reader.read_unmatched_delimiter = (function oakcljs$tools$reader$read_unmatched_delimiter(rdr,ch,opts,pending_forms){
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"Unmatched delimiter ",ch);
});
oakcljs.tools.reader.read_regex = (function oakcljs$tools$reader$read_regex(rdr,ch,opts,pending_forms){
var sb = (new goog.string.StringBuffer());
var ch__$1 = oakcljs.tools.reader.reader_types.read_char.call(null,rdr);
while(true){
if(("\"" === ch__$1)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if((ch__$1 == null)){
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading regex");
} else {
sb.append(ch__$1);

if(("\\" === ch__$1)){
var ch_9054__$2 = oakcljs.tools.reader.reader_types.read_char.call(null,rdr);
if((ch_9054__$2 == null)){
oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading regex");
} else {
}

sb.append(ch_9054__$2);
} else {
}

var G__9055 = oakcljs.tools.reader.reader_types.read_char.call(null,rdr);
ch__$1 = G__9055;
continue;
}
}
break;
}
});
oakcljs.tools.reader.char_code = (function oakcljs$tools$reader$char_code(ch,base){
var code = parseInt(ch,base);
if(cljs.core.truth_(isNaN(code))){
return (-1);
} else {
return code;
}
});
oakcljs.tools.reader.read_unicode_char = (function oakcljs$tools$reader$read_unicode_char(var_args){
var G__9057 = arguments.length;
switch (G__9057) {
case 4:
return oakcljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return oakcljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

oakcljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$4 = (function (token,offset,length,base){
var l = (offset + length);
if((cljs.core.count.call(null,token) === l)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid unicode character: \\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170)], null));
}

var i = offset;
var uc = (0);
while(true){
if((i === l)){
return String.fromCharCode(uc);
} else {
var d = oakcljs.tools.reader.char_code.call(null,cljs.core.nth.call(null,token,i),base);
if((d === (-1))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid digit: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,token,i))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170)], null));
} else {
var G__9059 = (i + (1));
var G__9060 = (d + (uc * base));
i = G__9059;
uc = G__9060;
continue;
}
}
break;
}
});

oakcljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$5 = (function (rdr,initch,base,length,exact_QMARK_){
var i = (1);
var uc = oakcljs.tools.reader.char_code.call(null,initch,base);
while(true){
if((uc === (-1))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid digit: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(initch)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170)], null));
} else {
if(!((i === length))){
var ch = oakcljs.tools.reader.reader_types.peek_char.call(null,rdr);
if(cljs.core.truth_((function (){var or__7285__auto__ = oakcljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch);
if(or__7285__auto__){
return or__7285__auto__;
} else {
var or__7285__auto____$1 = oakcljs.tools.reader.macros.call(null,ch);
if(cljs.core.truth_(or__7285__auto____$1)){
return or__7285__auto____$1;
} else {
return (ch == null);
}
}
})())){
if(cljs.core.truth_(exact_QMARK_)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid character length: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", should be: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(length)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170)], null));
} else {
return String.fromCharCode(uc);
}
} else {
var d = oakcljs.tools.reader.char_code.call(null,ch,base);
oakcljs.tools.reader.reader_types.read_char.call(null,rdr);

if((d === (-1))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid digit: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170)], null));
} else {
var G__9061 = (i + (1));
var G__9062 = (d + (uc * base));
i = G__9061;
uc = G__9062;
continue;
}
}
} else {
return String.fromCharCode(uc);
}
}
break;
}
});

oakcljs.tools.reader.read_unicode_char.cljs$lang$maxFixedArity = 5;

oakcljs.tools.reader.upper_limit = "\uD7FF".charCodeAt((0));
oakcljs.tools.reader.lower_limit = "\uE000".charCodeAt((0));
oakcljs.tools.reader.valid_octal_QMARK_ = (function oakcljs$tools$reader$valid_octal_QMARK_(token,base){
return (parseInt(token,base) <= (255));
});
/**
 * Read in a character literal
 */
oakcljs.tools.reader.read_char_STAR_ = (function oakcljs$tools$reader$read_char_STAR_(rdr,backslash,opts,pending_forms){
var ch = oakcljs.tools.reader.reader_types.read_char.call(null,rdr);
if(!((ch == null))){
var token = (((oakcljs.tools.reader.macro_terminating_QMARK_.call(null,ch)) || (oakcljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch)].join(''):oakcljs.tools.reader.read_token.call(null,rdr,ch));
var token_len = token.length;
if(((1) === token_len)){
return token.charAt((0));
} else {
if(cljs.core._EQ_.call(null,token,"newline")){
return "\n";
} else {
if(cljs.core._EQ_.call(null,token,"space")){
return " ";
} else {
if(cljs.core._EQ_.call(null,token,"tab")){
return "\t";
} else {
if(cljs.core._EQ_.call(null,token,"backspace")){
return "\b";
} else {
if(cljs.core._EQ_.call(null,token,"formfeed")){
return "\f";
} else {
if(cljs.core._EQ_.call(null,token,"return")){
return "\r";
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"u"))){
var c = oakcljs.tools.reader.read_unicode_char.call(null,token,(1),(4),(16));
var ic = c.charCodeAt((0));
if(((ic > oakcljs.tools.reader.upper_limit)) && ((ic < oakcljs.tools.reader.lower_limit))){
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid character constant: \\u",c);
} else {
return c;
}
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"o"))){
var len = (token_len - (1));
if((len > (3))){
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid octal escape sequence length: ",len);
} else {
var offset = (1);
var base = (8);
var uc = oakcljs.tools.reader.read_unicode_char.call(null,token,offset,len,base);
if(cljs.core.not.call(null,oakcljs.tools.reader.valid_octal_QMARK_.call(null,cljs.core.subs.call(null,token,offset),base))){
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"Octal escape sequence must be in range [0, 377]");
} else {
return uc;
}
}
} else {
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"Unsupported character: \\",token);

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
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading character");
}
});
oakcljs.tools.reader.starting_line_col_info = (function oakcljs$tools$reader$starting_line_col_info(rdr){
if(cljs.core.truth_(oakcljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oakcljs.tools.reader.reader_types.get_line_number.call(null,rdr),((oakcljs.tools.reader.reader_types.get_column_number.call(null,rdr) - (1)) | (0))], null);
} else {
return null;
}
});
oakcljs.tools.reader.ending_line_col_info = (function oakcljs$tools$reader$ending_line_col_info(rdr){
if(cljs.core.truth_(oakcljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oakcljs.tools.reader.reader_types.get_line_number.call(null,rdr),oakcljs.tools.reader.reader_types.get_column_number.call(null,rdr)], null);
} else {
return null;
}
});
if(typeof oakcljs.tools.reader.READ_EOF !== 'undefined'){
} else {
oakcljs.tools.reader.READ_EOF = (new Object());
}
if(typeof oakcljs.tools.reader.READ_FINISHED !== 'undefined'){
} else {
oakcljs.tools.reader.READ_FINISHED = (new Object());
}
oakcljs.tools.reader._STAR_read_delim_STAR_ = false;
oakcljs.tools.reader.read_delimited_internal = (function oakcljs$tools$reader$read_delimited_internal(delim,rdr,opts,pending_forms){
var vec__9063 = oakcljs.tools.reader.starting_line_col_info.call(null,rdr);
var start_line = cljs.core.nth.call(null,vec__9063,(0),null);
var start_column = cljs.core.nth.call(null,vec__9063,(1),null);
var delim__$1 = oakcljs.tools.reader.impl.utils.char$.call(null,delim);
var a = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var form = oakcljs.tools.reader.read_STAR_.call(null,rdr,false,oakcljs.tools.reader.READ_EOF,delim__$1,opts,pending_forms);
if((form === oakcljs.tools.reader.READ_FINISHED)){
return cljs.core.persistent_BANG_.call(null,a);
} else {
if((form === oakcljs.tools.reader.READ_EOF)){
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading",(cljs.core.truth_(start_line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(", starting at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" and column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_column)].join(''):null));
} else {
var G__9066 = cljs.core.conj_BANG_.call(null,a,form);
a = G__9066;
continue;
}
}
break;
}
});
/**
 * Reads and returns a collection ended with delim
 */
oakcljs.tools.reader.read_delimited = (function oakcljs$tools$reader$read_delimited(delim,rdr,opts,pending_forms){
var _STAR_read_delim_STAR_9067 = oakcljs.tools.reader._STAR_read_delim_STAR_;
oakcljs.tools.reader._STAR_read_delim_STAR_ = true;

try{return oakcljs.tools.reader.read_delimited_internal.call(null,delim,rdr,opts,pending_forms);
}finally {oakcljs.tools.reader._STAR_read_delim_STAR_ = _STAR_read_delim_STAR_9067;
}});
oakcljs.tools.reader._STAR_wrap_value_and_add_metadata_QMARK__STAR_ = false;
oakcljs.tools.reader.wrap_value_and_add_metadata = (function oakcljs$tools$reader$wrap_value_and_add_metadata(var_args){
var args__8417__auto__ = [];
var len__8410__auto___9077 = arguments.length;
var i__8411__auto___9078 = (0);
while(true){
if((i__8411__auto___9078 < len__8410__auto___9077)){
args__8417__auto__.push((arguments[i__8411__auto___9078]));

var G__9079 = (i__8411__auto___9078 + (1));
i__8411__auto___9078 = G__9079;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((2) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((2)),(0),null)):null);
return oakcljs.tools.reader.wrap_value_and_add_metadata.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8418__auto__);
});

oakcljs.tools.reader.wrap_value_and_add_metadata.cljs$core$IFn$_invoke$arity$variadic = (function (f,rdr,args){
if(oakcljs.tools.reader._STAR_wrap_value_and_add_metadata_QMARK__STAR_){
var vec__9071 = oakcljs.tools.reader.starting_line_col_info.call(null,rdr);
var start_line = cljs.core.nth.call(null,vec__9071,(0),null);
var start_column = cljs.core.nth.call(null,vec__9071,(1),null);
var val = cljs.core.apply.call(null,f,rdr,args);
var vec__9074 = oakcljs.tools.reader.ending_line_col_info.call(null,rdr);
var end_line = cljs.core.nth.call(null,vec__9074,(0),null);
var end_column = cljs.core.nth.call(null,vec__9074,(1),null);
if(cljs.core.truth_(cljs.core.meta.call(null,val))){
return val;
} else {
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val], null),cljs.core.merge.call(null,(function (){var temp__4657__auto__ = oakcljs.tools.reader.reader_types.get_file_name.call(null,rdr);
if(cljs.core.truth_(temp__4657__auto__)){
var file = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line","line",212345235),start_line,new cljs.core.Keyword(null,"column","column",2078222095),start_column,new cljs.core.Keyword(null,"end-line","end-line",1837326455),end_line,new cljs.core.Keyword(null,"end-column","end-column",1425389514),end_column,new cljs.core.Keyword(null,"wrapped?","wrapped?",-1103535285),true], null)));
}
} else {
return cljs.core.apply.call(null,f,rdr,args);
}
});

oakcljs.tools.reader.wrap_value_and_add_metadata.cljs$lang$maxFixedArity = (2);

oakcljs.tools.reader.wrap_value_and_add_metadata.cljs$lang$applyTo = (function (seq9068){
var G__9069 = cljs.core.first.call(null,seq9068);
var seq9068__$1 = cljs.core.next.call(null,seq9068);
var G__9070 = cljs.core.first.call(null,seq9068__$1);
var seq9068__$2 = cljs.core.next.call(null,seq9068__$1);
return oakcljs.tools.reader.wrap_value_and_add_metadata.cljs$core$IFn$_invoke$arity$variadic(G__9069,G__9070,seq9068__$2);
});

/**
 * Read in a list, including its location if the reader is an indexing reader
 */
oakcljs.tools.reader.read_list = (function oakcljs$tools$reader$read_list(rdr,_,opts,pending_forms){
var vec__9080 = oakcljs.tools.reader.starting_line_col_info.call(null,rdr);
var start_line = cljs.core.nth.call(null,vec__9080,(0),null);
var start_column = cljs.core.nth.call(null,vec__9080,(1),null);
var the_list = oakcljs.tools.reader.read_delimited.call(null,")",rdr,opts,pending_forms);
var vec__9083 = oakcljs.tools.reader.ending_line_col_info.call(null,rdr);
var end_line = cljs.core.nth.call(null,vec__9083,(0),null);
var end_column = cljs.core.nth.call(null,vec__9083,(1),null);
return cljs.core.with_meta.call(null,((cljs.core.empty_QMARK_.call(null,the_list))?cljs.core.List.EMPTY:cljs.core.apply.call(null,cljs.core.list,the_list)),(cljs.core.truth_(start_line)?cljs.core.merge.call(null,(function (){var temp__4657__auto__ = oakcljs.tools.reader.reader_types.get_file_name.call(null,rdr);
if(cljs.core.truth_(temp__4657__auto__)){
var file = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",212345235),start_line,new cljs.core.Keyword(null,"column","column",2078222095),start_column,new cljs.core.Keyword(null,"end-line","end-line",1837326455),end_line,new cljs.core.Keyword(null,"end-column","end-column",1425389514),end_column], null)):null));
});
/**
 * Read in a vector, including its location if the reader is an indexing reader
 */
oakcljs.tools.reader.read_vector = (function oakcljs$tools$reader$read_vector(rdr,_,opts,pending_forms){
var vec__9086 = oakcljs.tools.reader.starting_line_col_info.call(null,rdr);
var start_line = cljs.core.nth.call(null,vec__9086,(0),null);
var start_column = cljs.core.nth.call(null,vec__9086,(1),null);
var the_vector = oakcljs.tools.reader.read_delimited.call(null,"]",rdr,opts,pending_forms);
var vec__9089 = oakcljs.tools.reader.ending_line_col_info.call(null,rdr);
var end_line = cljs.core.nth.call(null,vec__9089,(0),null);
var end_column = cljs.core.nth.call(null,vec__9089,(1),null);
return cljs.core.with_meta.call(null,the_vector,(cljs.core.truth_(start_line)?cljs.core.merge.call(null,(function (){var temp__4657__auto__ = oakcljs.tools.reader.reader_types.get_file_name.call(null,rdr);
if(cljs.core.truth_(temp__4657__auto__)){
var file = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",212345235),start_line,new cljs.core.Keyword(null,"column","column",2078222095),start_column,new cljs.core.Keyword(null,"end-line","end-line",1837326455),end_line,new cljs.core.Keyword(null,"end-column","end-column",1425389514),end_column], null)):null));
});
oakcljs.tools.reader.duplicate_keys_error = (function oakcljs$tools$reader$duplicate_keys_error(msg,coll){
var duplicates = (function oakcljs$tools$reader$duplicate_keys_error_$_duplicates(seq){
var iter__8074__auto__ = (function oakcljs$tools$reader$duplicate_keys_error_$_duplicates_$_iter__9102(s__9103){
return (new cljs.core.LazySeq(null,(function (){
var s__9103__$1 = s__9103;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__9103__$1);
if(temp__4657__auto__){
var s__9103__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9103__$2)){
var c__8072__auto__ = cljs.core.chunk_first.call(null,s__9103__$2);
var size__8073__auto__ = cljs.core.count.call(null,c__8072__auto__);
var b__9105 = cljs.core.chunk_buffer.call(null,size__8073__auto__);
if((function (){var i__9104 = (0);
while(true){
if((i__9104 < size__8073__auto__)){
var vec__9106 = cljs.core._nth.call(null,c__8072__auto__,i__9104);
var id = cljs.core.nth.call(null,vec__9106,(0),null);
var freq = cljs.core.nth.call(null,vec__9106,(1),null);
if((freq > (1))){
cljs.core.chunk_append.call(null,b__9105,id);

var G__9112 = (i__9104 + (1));
i__9104 = G__9112;
continue;
} else {
var G__9113 = (i__9104 + (1));
i__9104 = G__9113;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9105),oakcljs$tools$reader$duplicate_keys_error_$_duplicates_$_iter__9102.call(null,cljs.core.chunk_rest.call(null,s__9103__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9105),null);
}
} else {
var vec__9109 = cljs.core.first.call(null,s__9103__$2);
var id = cljs.core.nth.call(null,vec__9109,(0),null);
var freq = cljs.core.nth.call(null,vec__9109,(1),null);
if((freq > (1))){
return cljs.core.cons.call(null,id,oakcljs$tools$reader$duplicate_keys_error_$_duplicates_$_iter__9102.call(null,cljs.core.rest.call(null,s__9103__$2)));
} else {
var G__9114 = cljs.core.rest.call(null,s__9103__$2);
s__9103__$1 = G__9114;
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
return iter__8074__auto__.call(null,cljs.core.frequencies.call(null,seq));
});
var dups = duplicates.call(null,coll);
return cljs.core.apply.call(null,cljs.core.str,msg,(((cljs.core.count.call(null,dups) > (1)))?"s":null),": ",cljs.core.interpose.call(null,", ",dups));
});
/**
 * Read in a map, including its location if the reader is an indexing reader
 */
oakcljs.tools.reader.read_map = (function oakcljs$tools$reader$read_map(rdr,_,opts,pending_forms){
var vec__9115 = oakcljs.tools.reader.starting_line_col_info.call(null,rdr);
var start_line = cljs.core.nth.call(null,vec__9115,(0),null);
var start_column = cljs.core.nth.call(null,vec__9115,(1),null);
var the_map = oakcljs.tools.reader.read_delimited.call(null,"}",rdr,opts,pending_forms);
var map_count = cljs.core.count.call(null,the_map);
var ks = cljs.core.take_nth.call(null,(2),the_map);
var key_set = cljs.core.set.call(null,ks);
var vec__9118 = oakcljs.tools.reader.ending_line_col_info.call(null,rdr);
var end_line = cljs.core.nth.call(null,vec__9118,(0),null);
var end_column = cljs.core.nth.call(null,vec__9118,(1),null);
if(cljs.core.odd_QMARK_.call(null,map_count)){
oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else {
}

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,key_set),cljs.core.count.call(null,ks))){
} else {
oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,oakcljs.tools.reader.duplicate_keys_error.call(null,"Map literal contains duplicate key",ks));
}

return cljs.core.with_meta.call(null,(((map_count <= ((2) * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))?cljs.core.PersistentArrayMap.fromArray(cljs.core.to_array.call(null,the_map),true,true):cljs.core.PersistentHashMap.fromArray(cljs.core.to_array.call(null,the_map),true)),(cljs.core.truth_(start_line)?cljs.core.merge.call(null,(function (){var temp__4657__auto__ = oakcljs.tools.reader.reader_types.get_file_name.call(null,rdr);
if(cljs.core.truth_(temp__4657__auto__)){
var file = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",212345235),start_line,new cljs.core.Keyword(null,"column","column",2078222095),start_column,new cljs.core.Keyword(null,"end-line","end-line",1837326455),end_line,new cljs.core.Keyword(null,"end-column","end-column",1425389514),end_column], null)):null));
});
oakcljs.tools.reader.read_number = (function oakcljs$tools$reader$read_number(rdr,initch){
var sb = (function (){var G__9121 = (new goog.string.StringBuffer());
G__9121.append(initch);

return G__9121;
})();
var ch = oakcljs.tools.reader.reader_types.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_((function (){var or__7285__auto__ = oakcljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch);
if(or__7285__auto__){
return or__7285__auto__;
} else {
var or__7285__auto____$1 = oakcljs.tools.reader.macros.call(null,ch);
if(cljs.core.truth_(or__7285__auto____$1)){
return or__7285__auto____$1;
} else {
return (ch == null);
}
}
})())){
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
oakcljs.tools.reader.reader_types.unread.call(null,rdr,ch);

var or__7285__auto__ = oakcljs.tools.reader.impl.commons.match_number.call(null,s);
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid number format [",s,"]");
}
} else {
var G__9123 = (function (){var G__9122 = sb;
G__9122.append(ch);

return G__9122;
})();
var G__9124 = oakcljs.tools.reader.reader_types.read_char.call(null,rdr);
sb = G__9123;
ch = G__9124;
continue;
}
break;
}
});
oakcljs.tools.reader.escape_char = (function oakcljs$tools$reader$escape_char(sb,rdr){
var ch = oakcljs.tools.reader.reader_types.read_char.call(null,rdr);
var G__9125 = ch;
switch (G__9125) {
case "t":
return "\t";

break;
case "r":
return "\r";

break;
case "n":
return "\n";

break;
case "\\":
return "\\";

break;
case "\"":
return "\"";

break;
case "b":
return "\b";

break;
case "f":
return "\f";

break;
case "u":
var ch__$1 = oakcljs.tools.reader.reader_types.read_char.call(null,rdr);
if(((-1) === parseInt((ch__$1 | (0)),(16)))){
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid unicode escape: \\u",ch__$1);
} else {
return oakcljs.tools.reader.read_unicode_char.call(null,rdr,ch__$1,(16),(4),true);
}

break;
default:
if(oakcljs.tools.reader.impl.utils.numeric_QMARK_.call(null,ch)){
var ch__$1 = oakcljs.tools.reader.read_unicode_char.call(null,rdr,ch,(8),(3),false);
if(((ch__$1 | (0)) > (223))){
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"Octal escape sequence must be in range [0, 377]");
} else {
return ch__$1;
}
} else {
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"Unsupported escape character: \\",ch);
}

}
});
oakcljs.tools.reader.read_string_STAR_ = (function oakcljs$tools$reader$read_string_STAR_(reader,_,opts,pending_forms){
var sb = (new goog.string.StringBuffer());
var ch = oakcljs.tools.reader.reader_types.read_char.call(null,reader);
while(true){
if((ch == null)){
return oakcljs.tools.reader.reader_types.reader_error.call(null,reader,"EOF while reading string");
} else {
var G__9127 = ch;
switch (G__9127) {
case "\\":
var G__9131 = (function (){var G__9128 = sb;
G__9128.append(oakcljs.tools.reader.escape_char.call(null,sb,reader));

return G__9128;
})();
var G__9132 = oakcljs.tools.reader.reader_types.read_char.call(null,reader);
sb = G__9131;
ch = G__9132;
continue;

break;
case "\"":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');

break;
default:
var G__9133 = (function (){var G__9129 = sb;
G__9129.append(ch);

return G__9129;
})();
var G__9134 = oakcljs.tools.reader.reader_types.read_char.call(null,reader);
sb = G__9133;
ch = G__9134;
continue;

}
}
break;
}
});
oakcljs.tools.reader.loc_info = (function oakcljs$tools$reader$loc_info(rdr,line,column){
if((line == null)){
return null;
} else {
var file = oakcljs.tools.reader.reader_types.get_file_name.call(null,rdr);
var filem = (((file == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),file], null));
var vec__9135 = oakcljs.tools.reader.ending_line_col_info.call(null,rdr);
var end_line = cljs.core.nth.call(null,vec__9135,(0),null);
var end_column = cljs.core.nth.call(null,vec__9135,(1),null);
var lcm = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"end-line","end-line",1837326455),end_line,new cljs.core.Keyword(null,"end-column","end-column",1425389514),end_column], null);
return cljs.core.merge.call(null,filem,lcm);
}
});
oakcljs.tools.reader.read_symbol = (function oakcljs$tools$reader$read_symbol(rdr,initch){
var vec__9138 = oakcljs.tools.reader.starting_line_col_info.call(null,rdr);
var line = cljs.core.nth.call(null,vec__9138,(0),null);
var column = cljs.core.nth.call(null,vec__9138,(1),null);
var token = oakcljs.tools.reader.read_token.call(null,rdr,initch);
if((token == null)){
return null;
} else {
var G__9141 = token;
switch (G__9141) {
case "nil":
return null;

break;
case "true":
return true;

break;
case "false":
return false;

break;
case "/":
return new cljs.core.Symbol(null,"/","/",-1371932971,null);

break;
case "NaN":
return Number.NaN;

break;
case "-Infinity":
return Number.NEGATIVE_INFINITY;

break;
case "Infinity":
case "+Infinity":
return Number.POSITIVE_INFINITY;

break;
default:
var p = oakcljs.tools.reader.impl.commons.parse_symbol.call(null,token);
if(!((p == null))){
var sym = cljs.core.symbol.call(null,cljs.core._nth.call(null,p,(0)),cljs.core._nth.call(null,p,(1)));
return cljs.core._with_meta.call(null,sym,oakcljs.tools.reader.loc_info.call(null,rdr,line,column));
} else {
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid token: ",token);
}

}
}
});
/**
 * Map from ns alias to ns, if non-nil, it will be used to resolve read-time
 * ns aliases.
 * 
 * Defaults to nil
 */
oakcljs.tools.reader._STAR_alias_map_STAR_ = null;
oakcljs.tools.reader.resolve_ns = (function oakcljs$tools$reader$resolve_ns(sym){
var or__7285__auto__ = cljs.core.get.call(null,oakcljs.tools.reader._STAR_alias_map_STAR_,sym);
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
var temp__4657__auto__ = cljs.core.find_ns.call(null,sym);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return cljs.core.symbol.call(null,cljs.core.ns_name.call(null,ns));
} else {
return null;
}
}
});
oakcljs.tools.reader.read_keyword = (function oakcljs$tools$reader$read_keyword(reader,initch,opts,pending_forms){
var ch = oakcljs.tools.reader.reader_types.read_char.call(null,reader);
if(!(oakcljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch))){
var token = oakcljs.tools.reader.read_token.call(null,reader,ch);
var s = oakcljs.tools.reader.impl.commons.parse_symbol.call(null,token);
if(!((s == null))){
var ns = cljs.core._nth.call(null,s,(0));
var name = cljs.core._nth.call(null,s,(1));
if((":" === token.charAt((0)))){
if(!((ns == null))){
var temp__4655__auto__ = oakcljs.tools.reader.resolve_ns.call(null,cljs.core.symbol.call(null,cljs.core.subs.call(null,ns,(1))));
if(cljs.core.truth_(temp__4655__auto__)){
var ns__$1 = temp__4655__auto__;
return cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1)].join(''),name);
} else {
return oakcljs.tools.reader.reader_types.reader_error.call(null,reader,"Invalid token: :",token);
}
} else {
var temp__4655__auto__ = cljs.core._STAR_ns_STAR_;
if(cljs.core.truth_(temp__4655__auto__)){
var ns__$1 = temp__4655__auto__;
return cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1)].join(''),cljs.core.subs.call(null,name,(1)));
} else {
return oakcljs.tools.reader.reader_types.reader_error.call(null,reader,"Invalid token: :",token);
}
}
} else {
return cljs.core.keyword.call(null,ns,name);
}
} else {
return oakcljs.tools.reader.reader_types.reader_error.call(null,reader,"Invalid token: :",token);
}
} else {
return oakcljs.tools.reader.reader_types.reader_error.call(null,reader,"Invalid token: :");
}
});
/**
 * Returns a function which wraps a reader in a call to sym
 */
oakcljs.tools.reader.wrapping_reader = (function oakcljs$tools$reader$wrapping_reader(sym){
return (function (rdr,_,opts,pending_forms){
var x__8128__auto__ = sym;
return cljs.core._conj.call(null,(function (){var x__8128__auto____$1 = oakcljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8128__auto____$1);
})(),x__8128__auto__);
});
});
/**
 * Read metadata and return the following object with the metadata applied
 */
oakcljs.tools.reader.read_meta = (function oakcljs$tools$reader$read_meta(rdr,_,opts,pending_forms){
if((oakcljs.tools.reader.reader_types.source_logging_reader_QMARK_.call(null,rdr)) && (!(oakcljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,oakcljs.tools.reader.reader_types.peek_char.call(null,rdr))))){
return oakcljs.tools.reader.reader_types.log_source_STAR_.call(null,rdr,(function (){
var vec__9143 = oakcljs.tools.reader.starting_line_col_info.call(null,rdr);
var line = cljs.core.nth.call(null,vec__9143,(0),null);
var column = cljs.core.nth.call(null,vec__9143,(1),null);
var m = oakcljs.tools.reader.impl.utils.desugar_meta.call(null,(function (){var _STAR_wrap_value_and_add_metadata_QMARK__STAR_9146 = oakcljs.tools.reader._STAR_wrap_value_and_add_metadata_QMARK__STAR_;
oakcljs.tools.reader._STAR_wrap_value_and_add_metadata_QMARK__STAR_ = false;

try{return oakcljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms);
}finally {oakcljs.tools.reader._STAR_wrap_value_and_add_metadata_QMARK__STAR_ = _STAR_wrap_value_and_add_metadata_QMARK__STAR_9146;
}})());
if(cljs.core.map_QMARK_.call(null,m)){
} else {
oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"Metadata must be Symbol, Keyword, String or Map");
}

var o = oakcljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms);
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IMeta$)))?true:false):false)){
var m__$1 = (cljs.core.truth_((function (){var and__7273__auto__ = line;
if(cljs.core.truth_(and__7273__auto__)){
return cljs.core.seq_QMARK_.call(null,o);
} else {
return and__7273__auto__;
}
})())?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column):m);
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IWithMeta$)))?true:false):false)){
return cljs.core.with_meta.call(null,o,cljs.core.merge.call(null,cljs.core.meta.call(null,o),m__$1));
} else {
return cljs.core.reset_meta_BANG_.call(null,o,m__$1);
}
} else {
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"Metadata can only be applied to IMetas");
}
}));
} else {
var vec__9149 = oakcljs.tools.reader.starting_line_col_info.call(null,rdr);
var line = cljs.core.nth.call(null,vec__9149,(0),null);
var column = cljs.core.nth.call(null,vec__9149,(1),null);
var m = oakcljs.tools.reader.impl.utils.desugar_meta.call(null,(function (){var _STAR_wrap_value_and_add_metadata_QMARK__STAR_9152 = oakcljs.tools.reader._STAR_wrap_value_and_add_metadata_QMARK__STAR_;
oakcljs.tools.reader._STAR_wrap_value_and_add_metadata_QMARK__STAR_ = false;

try{return oakcljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms);
}finally {oakcljs.tools.reader._STAR_wrap_value_and_add_metadata_QMARK__STAR_ = _STAR_wrap_value_and_add_metadata_QMARK__STAR_9152;
}})());
if(cljs.core.map_QMARK_.call(null,m)){
} else {
oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"Metadata must be Symbol, Keyword, String or Map");
}

var o = oakcljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms);
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IMeta$)))?true:false):false)){
var m__$1 = (cljs.core.truth_((function (){var and__7273__auto__ = line;
if(cljs.core.truth_(and__7273__auto__)){
return cljs.core.seq_QMARK_.call(null,o);
} else {
return and__7273__auto__;
}
})())?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column):m);
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IWithMeta$)))?true:false):false)){
return cljs.core.with_meta.call(null,o,cljs.core.merge.call(null,cljs.core.meta.call(null,o),m__$1));
} else {
return cljs.core.reset_meta_BANG_.call(null,o,m__$1);
}
} else {
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"Metadata can only be applied to IMetas");
}
}
});
oakcljs.tools.reader.read_set = (function oakcljs$tools$reader$read_set(rdr,_,opts,pending_forms){
var vec__9155 = oakcljs.tools.reader.starting_line_col_info.call(null,rdr);
var start_line = cljs.core.nth.call(null,vec__9155,(0),null);
var start_column = cljs.core.nth.call(null,vec__9155,(1),null);
var start_column__$1 = (cljs.core.truth_(start_column)?((start_column - (1)) | (0)):null);
var coll = oakcljs.tools.reader.read_delimited.call(null,"}",rdr,opts,pending_forms);
var the_set = cljs.core.set.call(null,coll);
var vec__9158 = oakcljs.tools.reader.ending_line_col_info.call(null,rdr);
var end_line = cljs.core.nth.call(null,vec__9158,(0),null);
var end_column = cljs.core.nth.call(null,vec__9158,(1),null);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,the_set))){
} else {
oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,oakcljs.tools.reader.duplicate_keys_error.call(null,"Set literal contains duplicate key",coll));
}

return cljs.core.with_meta.call(null,the_set,(cljs.core.truth_(start_line)?cljs.core.merge.call(null,(function (){var temp__4657__auto__ = oakcljs.tools.reader.reader_types.get_file_name.call(null,rdr);
if(cljs.core.truth_(temp__4657__auto__)){
var file = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",212345235),start_line,new cljs.core.Keyword(null,"column","column",2078222095),start_column__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455),end_line,new cljs.core.Keyword(null,"end-column","end-column",1425389514),end_column], null)):null));
});
/**
 * Read and discard the first object from rdr
 */
oakcljs.tools.reader.read_discard = (function oakcljs$tools$reader$read_discard(rdr,_,opts,pending_forms){
var G__9161 = rdr;
oakcljs.tools.reader.read_STAR_.call(null,G__9161,true,null,opts,pending_forms);

return G__9161;
});
oakcljs.tools.reader.RESERVED_FEATURES = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"none","none",1333468478),null], null), null);
oakcljs.tools.reader.has_feature_QMARK_ = (function oakcljs$tools$reader$has_feature_QMARK_(rdr,feature,opts){
if((feature instanceof cljs.core.Keyword)){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),feature)) || (cljs.core.contains_QMARK_.call(null,cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"features","features",-1146962336)),feature));
} else {
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Feature should be a keyword: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)].join(''));
}
});
oakcljs.tools.reader.check_eof_error = (function oakcljs$tools$reader$check_eof_error(form,rdr,first_line){
if((form === oakcljs.tools.reader.READ_EOF)){
if((first_line < (0))){
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading");
} else {
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading, starting at line ",first_line);
}
} else {
return null;
}
});
oakcljs.tools.reader.check_reserved_features = (function oakcljs$tools$reader$check_reserved_features(rdr,form){
if(cljs.core.truth_(cljs.core.get.call(null,oakcljs.tools.reader.RESERVED_FEATURES,form))){
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Feature name "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(form),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is reserved")].join(''));
} else {
return null;
}
});
oakcljs.tools.reader.check_invalid_read_cond = (function oakcljs$tools$reader$check_invalid_read_cond(form,rdr,first_line){
if((form === oakcljs.tools.reader.READ_FINISHED)){
if((first_line < (0))){
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"read-cond requires an even number of forms");
} else {
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("read-cond starting on line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" requires an even number of forms")].join(''));
}
} else {
return null;
}
});
/**
 * Read next form and suppress. Return nil or READ_FINISHED.
 */
oakcljs.tools.reader.read_suppress = (function oakcljs$tools$reader$read_suppress(first_line,rdr,opts,pending_forms){
var _STAR_suppress_read_STAR_9162 = oakcljs.tools.reader._STAR_suppress_read_STAR_;
oakcljs.tools.reader._STAR_suppress_read_STAR_ = true;

try{var form = oakcljs.tools.reader.read_STAR_.call(null,rdr,false,oakcljs.tools.reader.READ_EOF,")",opts,pending_forms);
oakcljs.tools.reader.check_eof_error.call(null,form,rdr,first_line);

if((form === oakcljs.tools.reader.READ_FINISHED)){
return oakcljs.tools.reader.READ_FINISHED;
} else {
return null;
}
}finally {oakcljs.tools.reader._STAR_suppress_read_STAR_ = _STAR_suppress_read_STAR_9162;
}});
if(typeof oakcljs.tools.reader.NO_MATCH !== 'undefined'){
} else {
oakcljs.tools.reader.NO_MATCH = (new Object());
}
/**
 * Read next feature. If matched, read next form and return.
 * Otherwise, read and skip next form, returning READ_FINISHED or nil.
 */
oakcljs.tools.reader.match_feature = (function oakcljs$tools$reader$match_feature(first_line,rdr,opts,pending_forms){
var feature = oakcljs.tools.reader.read_STAR_.call(null,rdr,false,oakcljs.tools.reader.READ_EOF,")",opts,pending_forms);
oakcljs.tools.reader.check_eof_error.call(null,feature,rdr,first_line);

if(cljs.core._EQ_.call(null,feature,oakcljs.tools.reader.READ_FINISHED)){
return oakcljs.tools.reader.READ_FINISHED;
} else {
oakcljs.tools.reader.check_reserved_features.call(null,rdr,feature);

if(cljs.core.truth_(oakcljs.tools.reader.has_feature_QMARK_.call(null,rdr,feature,opts))){
var G__9163 = oakcljs.tools.reader.read_STAR_.call(null,rdr,false,oakcljs.tools.reader.READ_EOF,")",opts,pending_forms);
oakcljs.tools.reader.check_eof_error.call(null,G__9163,rdr,first_line);

oakcljs.tools.reader.check_invalid_read_cond.call(null,G__9163,rdr,first_line);

return G__9163;
} else {
var or__7285__auto__ = oakcljs.tools.reader.read_suppress.call(null,first_line,rdr,opts,pending_forms);
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return oakcljs.tools.reader.NO_MATCH;
}
}
}
});
oakcljs.tools.reader.read_cond_delimited = (function oakcljs$tools$reader$read_cond_delimited(rdr,splicing,opts,pending_forms){
var first_line = (cljs.core.truth_(oakcljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr))?oakcljs.tools.reader.reader_types.get_line_number.call(null,rdr):(-1));
var result = (function (){var matched = oakcljs.tools.reader.NO_MATCH;
var finished = null;
while(true){
if((matched === oakcljs.tools.reader.NO_MATCH)){
var match = oakcljs.tools.reader.match_feature.call(null,first_line,rdr,opts,pending_forms);
if((match === oakcljs.tools.reader.READ_FINISHED)){
return oakcljs.tools.reader.READ_FINISHED;
} else {
var G__9165 = match;
var G__9166 = null;
matched = G__9165;
finished = G__9166;
continue;
}
} else {
if(!((finished === oakcljs.tools.reader.READ_FINISHED))){
var G__9167 = matched;
var G__9168 = oakcljs.tools.reader.read_suppress.call(null,first_line,rdr,opts,pending_forms);
matched = G__9167;
finished = G__9168;
continue;
} else {
return matched;

}
}
break;
}
})();
if((result === oakcljs.tools.reader.READ_FINISHED)){
return rdr;
} else {
if(cljs.core.truth_(splicing)){
if(((!((result == null)))?((((result.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === result.cljs$core$ISequential$)))?true:false):false)){
goog.array.insertArrayAt(pending_forms,cljs.core.to_array.call(null,result),(0));

return rdr;
} else {
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"Spliced form list in read-cond-splicing must implement java.util.List.");
}
} else {
return result;
}
}
});
oakcljs.tools.reader.read_cond = (function oakcljs$tools$reader$read_cond(rdr,_,opts,pending_forms){
if(cljs.core.not.call(null,(function (){var and__7273__auto__ = opts;
if(cljs.core.truth_(and__7273__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"preserve","preserve",1276846509),null,new cljs.core.Keyword(null,"allow","allow",-1857325745),null], null), null).call(null,new cljs.core.Keyword(null,"read-cond","read-cond",1056899244).cljs$core$IFn$_invoke$arity$1(opts));
} else {
return and__7273__auto__;
}
})())){
throw cljs.core.ex_info.call(null,"Conditional read not allowed",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"runtime-exception","runtime-exception",-1495664514)], null));
} else {
}

var temp__4655__auto__ = oakcljs.tools.reader.reader_types.read_char.call(null,rdr);
if(cljs.core.truth_(temp__4655__auto__)){
var ch = temp__4655__auto__;
var splicing = cljs.core._EQ_.call(null,ch,"@");
var ch__$1 = ((splicing)?oakcljs.tools.reader.reader_types.read_char.call(null,rdr):ch);
if(splicing){
if(oakcljs.tools.reader._STAR_read_delim_STAR_){
} else {
oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"cond-splice not in list");
}
} else {
}

var temp__4655__auto____$1 = ((oakcljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch__$1))?oakcljs.tools.reader.impl.commons.read_past.call(null,oakcljs.tools.reader.impl.utils.whitespace_QMARK_,rdr):ch__$1);
if(cljs.core.truth_(temp__4655__auto____$1)){
var ch__$2 = temp__4655__auto____$1;
if(cljs.core.not_EQ_.call(null,ch__$2,"(")){
throw cljs.core.ex_info.call(null,"read-cond body must be a list",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"runtime-exception","runtime-exception",-1495664514)], null));
} else {
var _STAR_suppress_read_STAR_9169 = oakcljs.tools.reader._STAR_suppress_read_STAR_;
oakcljs.tools.reader._STAR_suppress_read_STAR_ = (function (){var or__7285__auto__ = oakcljs.tools.reader._STAR_suppress_read_STAR_;
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"preserve","preserve",1276846509),new cljs.core.Keyword(null,"read-cond","read-cond",1056899244).cljs$core$IFn$_invoke$arity$1(opts));
}
})();

try{if(cljs.core.truth_(oakcljs.tools.reader._STAR_suppress_read_STAR_)){
return oakcljs.tools.reader.impl.utils.reader_conditional.call(null,oakcljs.tools.reader.read_list.call(null,rdr,ch__$2,opts,pending_forms),splicing);
} else {
return oakcljs.tools.reader.read_cond_delimited.call(null,rdr,splicing,opts,pending_forms);
}
}finally {oakcljs.tools.reader._STAR_suppress_read_STAR_ = _STAR_suppress_read_STAR_9169;
}}
} else {
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading character");
}
} else {
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading character");
}
});
oakcljs.tools.reader.arg_env = null;
/**
 * Get a symbol for an anonymous ?argument?
 */
oakcljs.tools.reader.garg = (function oakcljs$tools$reader$garg(n){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((-1) === n))?"rest":[cljs.core.str.cljs$core$IFn$_invoke$arity$1("p"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(oakcljs.tools.reader.impl.utils.next_id.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("#")].join(''));
});
oakcljs.tools.reader.read_fn = (function oakcljs$tools$reader$read_fn(rdr,_,opts,pending_forms){
if(cljs.core.truth_(oakcljs.tools.reader.arg_env)){
throw cljs.core.ex_info.call(null,"Nested #()s are not allowed",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-state","illegal-state",-1519851182)], null));
} else {
}

var arg_env9170 = oakcljs.tools.reader.arg_env;
oakcljs.tools.reader.arg_env = cljs.core.sorted_map.call(null);

try{var form = oakcljs.tools.reader.read_STAR_.call(null,(function (){var G__9171 = rdr;
oakcljs.tools.reader.reader_types.unread.call(null,G__9171,"(");

return G__9171;
})(),true,null,opts,pending_forms);
var rargs = cljs.core.rseq.call(null,oakcljs.tools.reader.arg_env);
var args = ((rargs)?(function (){var higharg = cljs.core.key.call(null,cljs.core.first.call(null,rargs));
var args = (function (){var i = (1);
var args = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if((i > higharg)){
return cljs.core.persistent_BANG_.call(null,args);
} else {
var G__9172 = (i + (1));
var G__9173 = cljs.core.conj_BANG_.call(null,args,(function (){var or__7285__auto__ = cljs.core.get.call(null,oakcljs.tools.reader.arg_env,i);
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return oakcljs.tools.reader.garg.call(null,i);
}
})());
i = G__9172;
args = G__9173;
continue;
}
break;
}
})();
var args__$1 = (cljs.core.truth_(oakcljs.tools.reader.arg_env.call(null,(-1)))?cljs.core.conj.call(null,args,new cljs.core.Symbol(null,"&","&",-2144855648,null),oakcljs.tools.reader.arg_env.call(null,(-1))):args);
return args__$1;
})():cljs.core.PersistentVector.EMPTY);
return cljs.core._conj.call(null,(function (){var x__8128__auto__ = args;
return cljs.core._conj.call(null,(function (){var x__8128__auto____$1 = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8128__auto____$1);
})(),x__8128__auto__);
})(),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null));
}finally {oakcljs.tools.reader.arg_env = arg_env9170;
}});
/**
 * Registers an argument to the arg-env
 */
oakcljs.tools.reader.register_arg = (function oakcljs$tools$reader$register_arg(n){
if(cljs.core.truth_(oakcljs.tools.reader.arg_env)){
var temp__4655__auto__ = oakcljs.tools.reader.arg_env.call(null,n);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return ret;
} else {
var g = oakcljs.tools.reader.garg.call(null,n);
oakcljs.tools.reader.arg_env = cljs.core.assoc.call(null,oakcljs.tools.reader.arg_env,n,g);

return g;
}
} else {
throw cljs.core.ex_info.call(null,"Arg literal not in #()",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-state","illegal-state",-1519851182)], null));
}
});
oakcljs.tools.reader.read_arg = (function oakcljs$tools$reader$read_arg(rdr,pct,opts,pending_forms){
if((oakcljs.tools.reader.arg_env == null)){
return oakcljs.tools.reader.read_symbol.call(null,rdr,pct);
} else {
var ch = oakcljs.tools.reader.reader_types.peek_char.call(null,rdr);
if((oakcljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)) || (oakcljs.tools.reader.macro_terminating_QMARK_.call(null,ch)) || ((ch == null))){
return oakcljs.tools.reader.register_arg.call(null,(1));
} else {
if(cljs.core._EQ_.call(null,ch,"&")){
oakcljs.tools.reader.reader_types.read_char.call(null,rdr);

return oakcljs.tools.reader.register_arg.call(null,(-1));
} else {
var n = (function (){var _STAR_wrap_value_and_add_metadata_QMARK__STAR_9174 = oakcljs.tools.reader._STAR_wrap_value_and_add_metadata_QMARK__STAR_;
oakcljs.tools.reader._STAR_wrap_value_and_add_metadata_QMARK__STAR_ = false;

try{return oakcljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms);
}finally {oakcljs.tools.reader._STAR_wrap_value_and_add_metadata_QMARK__STAR_ = _STAR_wrap_value_and_add_metadata_QMARK__STAR_9174;
}})();
if(!(cljs.core.integer_QMARK_.call(null,n))){
throw cljs.core.ex_info.call(null,"Arg literal must be %, %& or %integer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-state","illegal-state",-1519851182)], null));
} else {
return oakcljs.tools.reader.register_arg.call(null,n);
}

}
}
}
});
oakcljs.tools.reader.gensym_env = null;
oakcljs.tools.reader.read_unquote = (function oakcljs$tools$reader$read_unquote(rdr,comma,opts,pending_forms){
var temp__4655__auto__ = oakcljs.tools.reader.reader_types.peek_char.call(null,rdr);
if(cljs.core.truth_(temp__4655__auto__)){
var ch = temp__4655__auto__;
if(cljs.core._EQ_.call(null,"@",ch)){
return oakcljs.tools.reader.wrapping_reader.call(null,new cljs.core.Symbol("clojure.core","unquote-splicing","clojure.core/unquote-splicing",-552003150,null)).call(null,(function (){var G__9175 = rdr;
oakcljs.tools.reader.reader_types.read_char.call(null,G__9175);

return G__9175;
})(),"@",opts,pending_forms);
} else {
return oakcljs.tools.reader.wrapping_reader.call(null,new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null)).call(null,rdr,"~",opts,pending_forms);
}
} else {
return null;
}
});
oakcljs.tools.reader.unquote_splicing_QMARK_ = (function oakcljs$tools$reader$unquote_splicing_QMARK_(form){
return (cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol("clojure.core","unquote-splicing","clojure.core/unquote-splicing",-552003150,null)));
});
oakcljs.tools.reader.unquote_QMARK_ = (function oakcljs$tools$reader$unquote_QMARK_(form){
return (cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null)));
});
/**
 * Expand a list by resolving its syntax quotes and unquotes
 */
oakcljs.tools.reader.expand_list = (function oakcljs$tools$reader$expand_list(s){
var s__$1 = cljs.core.seq.call(null,s);
var r = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(s__$1){
var item = cljs.core.first.call(null,s__$1);
var ret = cljs.core.conj_BANG_.call(null,r,(cljs.core.truth_(oakcljs.tools.reader.unquote_QMARK_.call(null,item))?cljs.core._conj.call(null,(function (){var x__8128__auto__ = cljs.core.second.call(null,item);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8128__auto__);
})(),new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null)):(cljs.core.truth_(oakcljs.tools.reader.unquote_splicing_QMARK_.call(null,item))?cljs.core.second.call(null,item):cljs.core._conj.call(null,(function (){var x__8128__auto__ = oakcljs.tools.reader.syntax_quote_STAR_.call(null,item);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8128__auto__);
})(),new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null))
)));
var G__9176 = cljs.core.next.call(null,s__$1);
var G__9177 = ret;
s__$1 = G__9176;
r = G__9177;
continue;
} else {
return cljs.core.seq.call(null,cljs.core.persistent_BANG_.call(null,r));
}
break;
}
});
/**
 * Flatten a map into a seq of alternate keys and values
 */
oakcljs.tools.reader.flatten_map = (function oakcljs$tools$reader$flatten_map(form){
var s = cljs.core.seq.call(null,form);
var key_vals = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(s){
var e = cljs.core.first.call(null,s);
var G__9178 = cljs.core.next.call(null,s);
var G__9179 = cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,key_vals,cljs.core.key.call(null,e)),cljs.core.val.call(null,e));
s = G__9178;
key_vals = G__9179;
continue;
} else {
return cljs.core.seq.call(null,cljs.core.persistent_BANG_.call(null,key_vals));
}
break;
}
});
oakcljs.tools.reader.register_gensym = (function oakcljs$tools$reader$register_gensym(sym){
if(cljs.core.not.call(null,oakcljs.tools.reader.gensym_env)){
throw cljs.core.ex_info.call(null,"Gensym literal not in syntax-quote",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-state","illegal-state",-1519851182)], null));
} else {
}

var or__7285__auto__ = cljs.core.get.call(null,oakcljs.tools.reader.gensym_env,sym);
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
var gs = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,cljs.core.name.call(null,sym),(0),(cljs.core.count.call(null,cljs.core.name.call(null,sym)) - (1)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(oakcljs.tools.reader.impl.utils.next_id.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__auto__")].join(''));
oakcljs.tools.reader.gensym_env = cljs.core.assoc.call(null,oakcljs.tools.reader.gensym_env,sym,gs);

return gs;
}
});
oakcljs.tools.reader.add_meta = (function oakcljs$tools$reader$add_meta(form,ret){
if((function (){var and__7273__auto__ = ((!((form == null)))?((((form.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === form.cljs$core$IWithMeta$)))?true:false):false);
if(and__7273__auto__){
return cljs.core.seq.call(null,cljs.core.dissoc.call(null,cljs.core.meta.call(null,form),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"source","source",-433931539)));
} else {
return and__7273__auto__;
}
})()){
return cljs.core._conj.call(null,(function (){var x__8128__auto__ = ret;
return cljs.core._conj.call(null,(function (){var x__8128__auto____$1 = oakcljs.tools.reader.syntax_quote_STAR_.call(null,cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8128__auto____$1);
})(),x__8128__auto__);
})(),new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null));
} else {
return ret;
}
});
oakcljs.tools.reader.syntax_quote_coll = (function oakcljs$tools$reader$syntax_quote_coll(type,coll){
var res = cljs.core._conj.call(null,(function (){var x__8128__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),oakcljs.tools.reader.expand_list.call(null,coll));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8128__auto__);
})(),new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null));
if(cljs.core.truth_(type)){
return cljs.core._conj.call(null,(function (){var x__8128__auto__ = type;
return cljs.core._conj.call(null,(function (){var x__8128__auto____$1 = res;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8128__auto____$1);
})(),x__8128__auto__);
})(),new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null));
} else {
return res;
}
});
/**
 * Decide which map type to use, array-map if less than 16 elements
 */
oakcljs.tools.reader.map_func = (function oakcljs$tools$reader$map_func(coll){
if((cljs.core.count.call(null,coll) >= (16))){
return new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null);
} else {
return new cljs.core.Symbol("cljs.core","array-map","cljs.core/array-map",-1519210683,null);
}
});
oakcljs.tools.reader.bool_QMARK_ = (function oakcljs$tools$reader$bool_QMARK_(x){
return ((x instanceof Boolean)) || (x === true) || (x === false);
});
/**
 * Resolve a symbol s into its fully qualified namespace version
 */
oakcljs.tools.reader.resolve_symbol = (function oakcljs$tools$reader$resolve_symbol(s){
return s;
});
oakcljs.tools.reader.syntax_quote_STAR_ = (function oakcljs$tools$reader$syntax_quote_STAR_(form){
return oakcljs.tools.reader.add_meta.call(null,form,((cljs.core.special_symbol_QMARK_.call(null,form))?cljs.core._conj.call(null,(function (){var x__8128__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8128__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):(((form instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__8128__auto__ = (cljs.core.truth_((function (){var and__7273__auto__ = cljs.core.not.call(null,cljs.core.namespace.call(null,form));
if(and__7273__auto__){
return goog.string.endsWith(cljs.core.name.call(null,form),"#");
} else {
return and__7273__auto__;
}
})())?oakcljs.tools.reader.register_gensym.call(null,form):oakcljs.tools.reader.resolve_symbol.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8128__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):(cljs.core.truth_(oakcljs.tools.reader.unquote_QMARK_.call(null,form))?cljs.core.second.call(null,form):(cljs.core.truth_(oakcljs.tools.reader.unquote_splicing_QMARK_.call(null,form))?(function(){throw cljs.core.ex_info.call(null,"unquote-splice not in list",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-state","illegal-state",-1519851182)], null))})():((cljs.core.coll_QMARK_.call(null,form))?((((!((form == null)))?((((form.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === form.cljs$core$IRecord$)))?true:false):false))?form:((cljs.core.map_QMARK_.call(null,form))?oakcljs.tools.reader.syntax_quote_coll.call(null,oakcljs.tools.reader.map_func.call(null,form),oakcljs.tools.reader.flatten_map.call(null,form)):((cljs.core.vector_QMARK_.call(null,form))?cljs.core._conj.call(null,(function (){var x__8128__auto__ = oakcljs.tools.reader.syntax_quote_coll.call(null,null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8128__auto__);
})(),new cljs.core.Symbol("cljs.core","vec","cljs.core/vec",307622519,null)):((cljs.core.set_QMARK_.call(null,form))?oakcljs.tools.reader.syntax_quote_coll.call(null,new cljs.core.Symbol("cljs.core","hash-set","cljs.core/hash-set",1130426749,null),form):(((cljs.core.seq_QMARK_.call(null,form)) || (cljs.core.list_QMARK_.call(null,form)))?(function (){var seq = cljs.core.seq.call(null,form);
if(seq){
return oakcljs.tools.reader.syntax_quote_coll.call(null,null,seq);
} else {
return cljs.core.list(new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null));
}
})():(function(){throw cljs.core.ex_info.call(null,"Unknown Collection type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unsupported-operation","unsupported-operation",1890540953)], null))})()
))))):(cljs.core.truth_((function (){var or__7285__auto__ = (form instanceof cljs.core.Keyword);
if(or__7285__auto__){
return or__7285__auto__;
} else {
var or__7285__auto____$1 = typeof form === 'number';
if(or__7285__auto____$1){
return or__7285__auto____$1;
} else {
var or__7285__auto____$2 = typeof form === 'string';
if(or__7285__auto____$2){
return or__7285__auto____$2;
} else {
var or__7285__auto____$3 = (form == null);
if(or__7285__auto____$3){
return or__7285__auto____$3;
} else {
var or__7285__auto____$4 = oakcljs.tools.reader.bool_QMARK_.call(null,form);
if(cljs.core.truth_(or__7285__auto____$4)){
return or__7285__auto____$4;
} else {
return (form instanceof RegExp);
}
}
}
}
}
})())?form:cljs.core._conj.call(null,(function (){var x__8128__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8128__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))
)))))));
});
oakcljs.tools.reader.read_syntax_quote = (function oakcljs$tools$reader$read_syntax_quote(rdr,backquote,opts,pending_forms){
var gensym_env9183 = oakcljs.tools.reader.gensym_env;
oakcljs.tools.reader.gensym_env = cljs.core.PersistentArrayMap.EMPTY;

try{return oakcljs.tools.reader.syntax_quote_STAR_.call(null,oakcljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
}finally {oakcljs.tools.reader.gensym_env = gensym_env9183;
}});
oakcljs.tools.reader.read_namespaced_map = (function oakcljs$tools$reader$read_namespaced_map(rdr,_,opts,pending_forms){
var token = oakcljs.tools.reader.read_token.call(null,rdr,oakcljs.tools.reader.reader_types.read_char.call(null,rdr));
var temp__4655__auto__ = ((cljs.core._EQ_.call(null,token,":"))?cljs.core.ns_name.call(null,cljs.core._STAR_ns_STAR_):((cljs.core._EQ_.call(null,":",cljs.core.first.call(null,token)))?(function (){var G__9184 = token;
var G__9184__$1 = (((G__9184 == null))?null:cljs.core.subs.call(null,G__9184,(1)));
var G__9184__$2 = (((G__9184__$1 == null))?null:oakcljs.tools.reader.impl.commons.parse_symbol.call(null,G__9184__$1));
var G__9184__$3 = (((G__9184__$2 == null))?null:oakcljs.tools.reader.impl.utils.second_SINGLEQUOTE_.call(null,G__9184__$2));
var G__9184__$4 = (((G__9184__$3 == null))?null:cljs.core.symbol.call(null,G__9184__$3));
if((G__9184__$4 == null)){
return null;
} else {
return oakcljs.tools.reader.resolve_ns.call(null,G__9184__$4);
}
})():(function (){var G__9185 = token;
var G__9185__$1 = (((G__9185 == null))?null:oakcljs.tools.reader.impl.commons.parse_symbol.call(null,G__9185));
if((G__9185__$1 == null)){
return null;
} else {
return oakcljs.tools.reader.impl.utils.second_SINGLEQUOTE_.call(null,G__9185__$1);
}
})()
));
if(cljs.core.truth_(temp__4655__auto__)){
var ns = temp__4655__auto__;
var ch = oakcljs.tools.reader.impl.commons.read_past.call(null,oakcljs.tools.reader.impl.utils.whitespace_QMARK_,rdr);
if((ch === "{")){
var items = oakcljs.tools.reader.read_delimited.call(null,"}",rdr,opts,pending_forms);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,items))){
oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else {
}

var keys = oakcljs.tools.reader.impl.utils.namespace_keys.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),cljs.core.take_nth.call(null,(2),items));
var vals = cljs.core.take_nth.call(null,(2),cljs.core.rest.call(null,items));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.set.call(null,keys)),cljs.core.count.call(null,keys))){
} else {
oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,oakcljs.tools.reader.duplicate_keys_error.call(null,"Map literal contains duplicate key",keys));
}

return cljs.core.zipmap.call(null,keys,vals);
} else {
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"Namespaced map must specify a map");
}
} else {
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid token used as namespace in namespaced map: ",token);
}
});
oakcljs.tools.reader.macros = (function oakcljs$tools$reader$macros(ch){
var G__9186 = ch;
switch (G__9186) {
case "\"":
return ((function (G__9186){
return (function() { 
var G__9188__delegate = function (reader,args){
return cljs.core.apply.call(null,oakcljs.tools.reader.wrap_value_and_add_metadata,oakcljs.tools.reader.read_string_STAR_,reader,args);
};
var G__9188 = function (reader,var_args){
var args = null;
if (arguments.length > 1) {
var G__9189__i = 0, G__9189__a = new Array(arguments.length -  1);
while (G__9189__i < G__9189__a.length) {G__9189__a[G__9189__i] = arguments[G__9189__i + 1]; ++G__9189__i;}
  args = new cljs.core.IndexedSeq(G__9189__a,0,null);
} 
return G__9188__delegate.call(this,reader,args);};
G__9188.cljs$lang$maxFixedArity = 1;
G__9188.cljs$lang$applyTo = (function (arglist__9190){
var reader = cljs.core.first(arglist__9190);
var args = cljs.core.rest(arglist__9190);
return G__9188__delegate(reader,args);
});
G__9188.cljs$core$IFn$_invoke$arity$variadic = G__9188__delegate;
return G__9188;
})()
;
;})(G__9186))

break;
case ":":
return ((function (G__9186){
return (function() { 
var G__9191__delegate = function (reader,args){
return cljs.core.apply.call(null,oakcljs.tools.reader.wrap_value_and_add_metadata,oakcljs.tools.reader.read_keyword,reader,args);
};
var G__9191 = function (reader,var_args){
var args = null;
if (arguments.length > 1) {
var G__9192__i = 0, G__9192__a = new Array(arguments.length -  1);
while (G__9192__i < G__9192__a.length) {G__9192__a[G__9192__i] = arguments[G__9192__i + 1]; ++G__9192__i;}
  args = new cljs.core.IndexedSeq(G__9192__a,0,null);
} 
return G__9191__delegate.call(this,reader,args);};
G__9191.cljs$lang$maxFixedArity = 1;
G__9191.cljs$lang$applyTo = (function (arglist__9193){
var reader = cljs.core.first(arglist__9193);
var args = cljs.core.rest(arglist__9193);
return G__9191__delegate(reader,args);
});
G__9191.cljs$core$IFn$_invoke$arity$variadic = G__9191__delegate;
return G__9191;
})()
;
;})(G__9186))

break;
case ";":
return oakcljs.tools.reader.impl.commons.read_comment;

break;
case "'":
return oakcljs.tools.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null));

break;
case "@":
return oakcljs.tools.reader.wrapping_reader.call(null,new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null));

break;
case "^":
return oakcljs.tools.reader.read_meta;

break;
case "`":
return oakcljs.tools.reader.read_syntax_quote;

break;
case "~":
return oakcljs.tools.reader.read_unquote;

break;
case "(":
return oakcljs.tools.reader.read_list;

break;
case ")":
return oakcljs.tools.reader.read_unmatched_delimiter;

break;
case "[":
return oakcljs.tools.reader.read_vector;

break;
case "]":
return oakcljs.tools.reader.read_unmatched_delimiter;

break;
case "{":
return oakcljs.tools.reader.read_map;

break;
case "}":
return oakcljs.tools.reader.read_unmatched_delimiter;

break;
case "\\":
return ((function (G__9186){
return (function() { 
var G__9194__delegate = function (reader,args){
return cljs.core.apply.call(null,oakcljs.tools.reader.wrap_value_and_add_metadata,oakcljs.tools.reader.read_char_STAR_,reader,args);
};
var G__9194 = function (reader,var_args){
var args = null;
if (arguments.length > 1) {
var G__9195__i = 0, G__9195__a = new Array(arguments.length -  1);
while (G__9195__i < G__9195__a.length) {G__9195__a[G__9195__i] = arguments[G__9195__i + 1]; ++G__9195__i;}
  args = new cljs.core.IndexedSeq(G__9195__a,0,null);
} 
return G__9194__delegate.call(this,reader,args);};
G__9194.cljs$lang$maxFixedArity = 1;
G__9194.cljs$lang$applyTo = (function (arglist__9196){
var reader = cljs.core.first(arglist__9196);
var args = cljs.core.rest(arglist__9196);
return G__9194__delegate(reader,args);
});
G__9194.cljs$core$IFn$_invoke$arity$variadic = G__9194__delegate;
return G__9194;
})()
;
;})(G__9186))

break;
case "%":
return oakcljs.tools.reader.read_arg;

break;
case "#":
return oakcljs.tools.reader.read_dispatch;

break;
default:
return null;

}
});
oakcljs.tools.reader.dispatch_macros = (function oakcljs$tools$reader$dispatch_macros(ch){
var G__9197 = ch;
switch (G__9197) {
case "^":
return oakcljs.tools.reader.read_meta;

break;
case "'":
return oakcljs.tools.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"var","var",870848730,null));

break;
case "(":
return oakcljs.tools.reader.read_fn;

break;
case "{":
return oakcljs.tools.reader.read_set;

break;
case "<":
return oakcljs.tools.reader.impl.commons.throwing_reader.call(null,"Unreadable form");

break;
case "=":
return oakcljs.tools.reader.impl.commons.throwing_reader.call(null,"read-eval not supported");

break;
case "\"":
return oakcljs.tools.reader.read_regex;

break;
case "!":
return oakcljs.tools.reader.impl.commons.read_comment;

break;
case "_":
return oakcljs.tools.reader.read_discard;

break;
case "?":
return oakcljs.tools.reader.read_cond;

break;
case ":":
return oakcljs.tools.reader.read_namespaced_map;

break;
default:
return null;

}
});
oakcljs.tools.reader.read_tagged = (function oakcljs$tools$reader$read_tagged(rdr,initch,opts,pending_forms){
var tag = oakcljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms);
if(!((tag instanceof cljs.core.Symbol))){
oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"Reader tag must be a symbol");
} else {
}

if(cljs.core.truth_(oakcljs.tools.reader._STAR_suppress_read_STAR_)){
return cljs.core.tagged_literal.call(null,tag,oakcljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
} else {
var temp__4655__auto__ = (function (){var or__7285__auto__ = oakcljs.tools.reader._STAR_data_readers_STAR_.call(null,tag);
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return oakcljs.tools.reader.default_data_readers.call(null,tag);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,oakcljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
} else {
var temp__4655__auto____$1 = oakcljs.tools.reader._STAR_default_data_reader_fn_STAR_;
if(cljs.core.truth_(temp__4655__auto____$1)){
var f = temp__4655__auto____$1;
return f.call(null,tag,oakcljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
} else {
return oakcljs.tools.reader.reader_types.reader_error.call(null,rdr,"No reader function for tag ",tag);
}
}
}
});
/**
 * Map from reader tag symbols to data reader Vars.
 *   Reader tags without namespace qualifiers are reserved for Clojure.
 *   This light version of tools.reader has no implementation for default
 *   reader tags such as #inst and #uuid.
 */
oakcljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
/**
 * When no data reader is found for a tag and *default-data-reader-fn*
 *   is non-nil, it will be called with two arguments, the tag and the value.
 *   If *default-data-reader-fn* is nil (the default value), an exception
 *   will be thrown for the unknown tag.
 */
oakcljs.tools.reader._STAR_default_data_reader_fn_STAR_ = (function oakcljs$tools$reader$_STAR_default_data_reader_fn_STAR_(tag,value){
return null;
});
oakcljs.tools.reader._STAR_suppress_read_STAR_ = false;
/**
 * Default map of data reader functions provided by Clojure.
 *   May be overridden by binding *data-readers*
 */
oakcljs.tools.reader.default_data_readers = cljs.core.PersistentArrayMap.EMPTY;
oakcljs.tools.reader.read_STAR__internal = (function oakcljs$tools$reader$read_STAR__internal(reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms){
while(true){
if((oakcljs.tools.reader.reader_types.source_logging_reader_QMARK_.call(null,reader)) && (!(oakcljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,oakcljs.tools.reader.reader_types.peek_char.call(null,reader))))){
return oakcljs.tools.reader.reader_types.log_source_STAR_.call(null,reader,(function (){
while(true){
if(!(goog.array.isEmpty(pending_forms))){
var form = (pending_forms[(0)]);
goog.array.removeAt(pending_forms,(0));

return form;
} else {
var ch = oakcljs.tools.reader.reader_types.read_char.call(null,reader);
if(oakcljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)){
continue;
} else {
if((ch == null)){
if(eof_error_QMARK_){
return oakcljs.tools.reader.reader_types.reader_error.call(null,reader,"EOF");
} else {
return sentinel;
}
} else {
if((ch === return_on)){
return oakcljs.tools.reader.READ_FINISHED;
} else {
if(oakcljs.tools.reader.impl.commons.number_literal_QMARK_.call(null,reader,ch)){
return oakcljs.tools.reader.wrap_value_and_add_metadata.call(null,oakcljs.tools.reader.read_number,reader,ch);
} else {
var f = oakcljs.tools.reader.macros.call(null,ch);
if(!((f == null))){
var res = f.call(null,reader,ch,opts,pending_forms);
if((res === reader)){
continue;
} else {
return res;
}
} else {
return oakcljs.tools.reader.wrap_value_and_add_metadata.call(null,oakcljs.tools.reader.read_symbol,reader,ch);
}

}
}
}
}
}
break;
}
}));
} else {
if(!(goog.array.isEmpty(pending_forms))){
var form = (pending_forms[(0)]);
goog.array.removeAt(pending_forms,(0));

return form;
} else {
var ch = oakcljs.tools.reader.reader_types.read_char.call(null,reader);
if(oakcljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)){
continue;
} else {
if((ch == null)){
if(eof_error_QMARK_){
return oakcljs.tools.reader.reader_types.reader_error.call(null,reader,"EOF");
} else {
return sentinel;
}
} else {
if((ch === return_on)){
return oakcljs.tools.reader.READ_FINISHED;
} else {
if(oakcljs.tools.reader.impl.commons.number_literal_QMARK_.call(null,reader,ch)){
return oakcljs.tools.reader.wrap_value_and_add_metadata.call(null,oakcljs.tools.reader.read_number,reader,ch);
} else {
var f = oakcljs.tools.reader.macros.call(null,ch);
if(!((f == null))){
var res = f.call(null,reader,ch,opts,pending_forms);
if((res === reader)){
continue;
} else {
return res;
}
} else {
return oakcljs.tools.reader.wrap_value_and_add_metadata.call(null,oakcljs.tools.reader.read_symbol,reader,ch);
}

}
}
}
}
}
}
break;
}
});
oakcljs.tools.reader.read_STAR_ = (function oakcljs$tools$reader$read_STAR_(var_args){
var G__9200 = arguments.length;
switch (G__9200) {
case 5:
return oakcljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return oakcljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

oakcljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 = (function (reader,eof_error_QMARK_,sentinel,opts,pending_forms){
return oakcljs.tools.reader.read_STAR_.call(null,reader,eof_error_QMARK_,sentinel,null,opts,pending_forms);
});

oakcljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6 = (function (reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms){
try{return oakcljs.tools.reader.read_STAR__internal.call(null,reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms);
}catch (e9201){if((e9201 instanceof Error)){
var e = e9201;
if(oakcljs.tools.reader.impl.utils.ex_info_QMARK_.call(null,e)){
var d = cljs.core.ex_data.call(null,e);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(d))){
throw e;
} else {
throw cljs.core.ex_info.call(null,e.message,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098)], null),d,(cljs.core.truth_(oakcljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),oakcljs.tools.reader.reader_types.get_line_number.call(null,reader),new cljs.core.Keyword(null,"column","column",2078222095),oakcljs.tools.reader.reader_types.get_column_number.call(null,reader),new cljs.core.Keyword(null,"file","file",-1269645878),oakcljs.tools.reader.reader_types.get_file_name.call(null,reader)], null):null)),e);
}
} else {
throw cljs.core.ex_info.call(null,e.message,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098)], null),(cljs.core.truth_(oakcljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),oakcljs.tools.reader.reader_types.get_line_number.call(null,reader),new cljs.core.Keyword(null,"column","column",2078222095),oakcljs.tools.reader.reader_types.get_column_number.call(null,reader),new cljs.core.Keyword(null,"file","file",-1269645878),oakcljs.tools.reader.reader_types.get_file_name.call(null,reader)], null):null)),e);
}
} else {
throw e9201;

}
}});

oakcljs.tools.reader.read_STAR_.cljs$lang$maxFixedArity = 6;

/**
 * Reads the first object from an IPushbackReader or a java.io.PushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true.
 * Otherwise returns sentinel. If no stream is providen, *in* will be used.
 * 
 * Opts is a persistent map with valid keys:
 *  :read-cond - :allow to process reader conditionals, or
 *               :preserve to keep all branches
 *  :features - persistent set of feature keywords for reader conditionals
 *  :eof - on eof, return value unless :eofthrow, then throw.
 *         if not specified, will throw
 * 
 * To read data structures only, use oakclojure.tools.reader.edn/read
 * 
 * Note that the function signature of oakclojure.tools.reader/read and
 * oakclojure.tools.reader.edn/read is not the same for eof-handling
 */
oakcljs.tools.reader.read = (function oakcljs$tools$reader$read(var_args){
var G__9204 = arguments.length;
switch (G__9204) {
case 1:
return oakcljs.tools.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return oakcljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return oakcljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

oakcljs.tools.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return oakcljs.tools.reader.read.call(null,reader,true,null);
});

oakcljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__9205,reader){
var map__9206 = p__9205;
var map__9206__$1 = ((((!((map__9206 == null)))?((((map__9206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9206):map__9206);
var opts = map__9206__$1;
var eof = cljs.core.get.call(null,map__9206__$1,new cljs.core.Keyword(null,"eof","eof",-489063237),new cljs.core.Keyword(null,"eofthrow","eofthrow",-334166531));
return oakcljs.tools.reader.read_STAR_.call(null,reader,cljs.core._EQ_.call(null,eof,new cljs.core.Keyword(null,"eofthrow","eofthrow",-334166531)),eof,null,opts,cljs.core.to_array.call(null,cljs.core.PersistentVector.EMPTY));
});

oakcljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3 = (function (reader,eof_error_QMARK_,sentinel){
return oakcljs.tools.reader.read_STAR_.call(null,reader,eof_error_QMARK_,sentinel,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.to_array.call(null,cljs.core.PersistentVector.EMPTY));
});

oakcljs.tools.reader.read.cljs$lang$maxFixedArity = 3;

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * To read data structures only, use oakclojure.tools.reader.edn/read-string
 * 
 * Note that the function signature of oakclojure.tools.reader/read-string and
 * oakclojure.tools.reader.edn/read-string is not the same for eof-handling
 */
oakcljs.tools.reader.read_string = (function oakcljs$tools$reader$read_string(var_args){
var G__9210 = arguments.length;
switch (G__9210) {
case 1:
return oakcljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return oakcljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

oakcljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return oakcljs.tools.reader.read_string.call(null,cljs.core.PersistentArrayMap.EMPTY,s);
});

oakcljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(cljs.core.truth_((function (){var and__7273__auto__ = s;
if(cljs.core.truth_(and__7273__auto__)){
return !((s === ""));
} else {
return and__7273__auto__;
}
})())){
return oakcljs.tools.reader.read.call(null,opts,oakcljs.tools.reader.reader_types.string_push_back_reader.call(null,s));
} else {
return null;
}
});

oakcljs.tools.reader.read_string.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=reader.js.map