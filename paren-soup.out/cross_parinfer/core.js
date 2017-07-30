// Compiled by ClojureScript 1.9.671 {}
goog.provide('cross_parinfer.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tag_soup.core');
goog.require('cljsjs.parinfer');
/**
 * Runs paren mode on the given text.
 */
cross_parinfer.core.paren_mode = (function cross_parinfer$core$paren_mode(text,x,line){
var res = parinfer.parenMode(text,({"cursorLine": line, "cursorX": x}));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(res["cursorX"]),new cljs.core.Keyword(null,"text","text",-1790561697),(res["text"])], null);
});
/**
 * Runs indent mode on the given text.
 */
cross_parinfer.core.indent_mode = (function cross_parinfer$core$indent_mode(var_args){
var G__12587 = arguments.length;
switch (G__12587) {
case 3:
return cross_parinfer.core.indent_mode.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cross_parinfer.core.indent_mode.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cross_parinfer.core.indent_mode.cljs$core$IFn$_invoke$arity$3 = (function (text,x,line){
return cross_parinfer.core.indent_mode.call(null,text,x,line,false);
});

cross_parinfer.core.indent_mode.cljs$core$IFn$_invoke$arity$4 = (function (text,x,line,preview_cursor_scope_QMARK_){
var res = parinfer.indentMode(text,({"cursorLine": line, "cursorX": x, "previewCursorScope": preview_cursor_scope_QMARK_}));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(res["cursorX"]),new cljs.core.Keyword(null,"text","text",-1790561697),(res["text"])], null);
});

cross_parinfer.core.indent_mode.cljs$lang$maxFixedArity = 4;

/**
 * Runs the specified mode, which can be :paren, :indent, or :both.
 */
cross_parinfer.core.mode = (function cross_parinfer$core$mode(mode_type,text,x,line){
var G__12589 = mode_type;
var G__12589__$1 = (((G__12589 instanceof cljs.core.Keyword))?G__12589.fqn:null);
switch (G__12589__$1) {
case "paren":
return cross_parinfer.core.paren_mode.call(null,text,x,line);

break;
case "indent":
return cross_parinfer.core.indent_mode.call(null,text,x,line);

break;
case "both":
return cross_parinfer.core.indent_mode.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cross_parinfer.core.paren_mode.call(null,text,x,line)),x,line);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12589__$1)].join('')));

}
});
/**
 * Splits the string into lines.
 */
cross_parinfer.core.split_lines = (function cross_parinfer$core$split_lines(s){
return cljs.core.vec.call(null,s.split("\n",(-1)));
});
/**
 * Converts a position to a row and column number.
 */
cross_parinfer.core.position__GT_row_col = (function cross_parinfer$core$position__GT_row_col(text,position){
var text__$1 = cljs.core.subs.call(null,text,(0),position);
var last_newline = text__$1.lastIndexOf("\n");
var row = cljs.core.count.call(null,cljs.core.re_seq.call(null,/\n/,text__$1));
var col = (((last_newline >= (0)))?((position - last_newline) - (1)):position);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null);
});
/**
 * Converts a row and column number to a position.
 */
cross_parinfer.core.row_col__GT_position = (function cross_parinfer$core$row_col__GT_position(text,row,col){
var all_lines = cljs.core.vec.call(null,cross_parinfer.core.split_lines.call(null,text));
var lines = cljs.core.vec.call(null,cljs.core.take.call(null,row,all_lines));
var last_line = cljs.core.get.call(null,all_lines,row);
var lines__$1 = (cljs.core.truth_((function (){var and__7273__auto__ = last_line;
if(cljs.core.truth_(and__7273__auto__)){
return (cljs.core.count.call(null,last_line) >= col);
} else {
return and__7273__auto__;
}
})())?cljs.core.conj.call(null,lines,cljs.core.subs.call(null,last_line,(0),col)):lines);
var text__$1 = clojure.string.join.call(null,"\n",lines__$1);
return cljs.core.count.call(null,text__$1);
});
/**
 * Adds parinfer to the state.
 */
cross_parinfer.core.add_parinfer = (function cross_parinfer$core$add_parinfer(mode_type,state){
var map__12591 = state;
var map__12591__$1 = ((((!((map__12591 == null)))?((((map__12591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12591):map__12591);
var cursor_position = cljs.core.get.call(null,map__12591__$1,new cljs.core.Keyword(null,"cursor-position","cursor-position",926799334));
var text = cljs.core.get.call(null,map__12591__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var vec__12592 = cursor_position;
var start_pos = cljs.core.nth.call(null,vec__12592,(0),null);
var end_pos = cljs.core.nth.call(null,vec__12592,(1),null);
var vec__12595 = cross_parinfer.core.position__GT_row_col.call(null,text,start_pos);
var row = cljs.core.nth.call(null,vec__12595,(0),null);
var col = cljs.core.nth.call(null,vec__12595,(1),null);
var result = cross_parinfer.core.mode.call(null,mode_type,text,col,row);
if(cljs.core.not_EQ_.call(null,start_pos,end_pos)){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(result));
} else {
var pos = cross_parinfer.core.row_col__GT_position.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(result),row,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(result));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"cursor-position","cursor-position",926799334),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,pos], null));
}
});
cross_parinfer.core.indent_count = (function cross_parinfer$core$indent_count(line){
return cljs.core.count.call(null,cljs.core.take_while.call(null,(function (p1__12599_SHARP_){
return cljs.core._EQ_.call(null,p1__12599_SHARP_," ");
}),cljs.core.seq.call(null,line)));
});
cross_parinfer.core.update_indent = (function cross_parinfer$core$update_indent(diff,lines,line_num){
return cljs.core.update.call(null,lines,line_num,(function (line){
var vec__12601 = cljs.core.split_with.call(null,(function (p1__12600_SHARP_){
return cljs.core._EQ_.call(null,p1__12600_SHARP_," ");
}),cljs.core.seq.call(null,line));
var spaces = cljs.core.nth.call(null,vec__12601,(0),null);
var code = cljs.core.nth.call(null,vec__12601,(1),null);
var spaces__$1 = (((diff > (0)))?cljs.core.concat.call(null,spaces,cljs.core.repeat.call(null,diff," ")):cljs.core.drop.call(null,((-1) * diff),spaces));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,spaces__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,code))].join('');
}));
});
/**
 * Adds indent to the state.
 */
cross_parinfer.core.add_indent = (function cross_parinfer$core$add_indent(state){
var map__12605 = state;
var map__12605__$1 = ((((!((map__12605 == null)))?((((map__12605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12605):map__12605);
var text = cljs.core.get.call(null,map__12605__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var cursor_position = cljs.core.get.call(null,map__12605__$1,new cljs.core.Keyword(null,"cursor-position","cursor-position",926799334));
var indent_type = cljs.core.get.call(null,map__12605__$1,new cljs.core.Keyword(null,"indent-type","indent-type",601897259));
var vec__12606 = cursor_position;
var start_pos = cljs.core.nth.call(null,vec__12606,(0),null);
var end_pos = cljs.core.nth.call(null,vec__12606,(1),null);
var vec__12609 = cross_parinfer.core.position__GT_row_col.call(null,text,start_pos);
var start_line = cljs.core.nth.call(null,vec__12609,(0),null);
var start_x = cljs.core.nth.call(null,vec__12609,(1),null);
var vec__12612 = cross_parinfer.core.position__GT_row_col.call(null,text,end_pos);
var end_line = cljs.core.nth.call(null,vec__12612,(0),null);
var _ = cljs.core.nth.call(null,vec__12612,(1),null);
var lines = cross_parinfer.core.split_lines.call(null,text);
var tags = tag_soup.core.code__GT_tags.call(null,text);
var new_indent_level = (function (){var G__12616 = indent_type;
var G__12616__$1 = (((G__12616 instanceof cljs.core.Keyword))?G__12616.fqn:null);
switch (G__12616__$1) {
case "return":
return tag_soup.core.indent_for_line.call(null,tags,(start_line + (1)));

break;
case "back":
return tag_soup.core.back_indent_for_line.call(null,tags,(start_line + (1)),cross_parinfer.core.indent_count.call(null,cljs.core.get.call(null,lines,start_line)));

break;
case "forward":
return tag_soup.core.forward_indent_for_line.call(null,tags,(start_line + (1)),cross_parinfer.core.indent_count.call(null,cljs.core.get.call(null,lines,start_line)));

break;
case "normal":
return start_x;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12616__$1)].join('')));

}
})();
var lines__$1 = ((cljs.core._EQ_.call(null,indent_type,new cljs.core.Keyword(null,"normal","normal",-1519123858)))?(function (){var lines__$1 = lines;
var tags__$1 = tags;
var line_num = (start_line + (1));
while(true){
var temp__4655__auto__ = cljs.core.get.call(null,lines__$1,line_num);
if(cljs.core.truth_(temp__4655__auto__)){
var line = temp__4655__auto__;
var indent = tag_soup.core.indent_for_line.call(null,tags__$1,(line_num + (1)));
var current_indent = cross_parinfer.core.indent_count.call(null,line);
if(((indent > (0))) && ((indent > start_x)) && (cljs.core.not_EQ_.call(null,indent,current_indent))){
var lines__$2 = cross_parinfer.core.update_indent.call(null,(indent - current_indent),lines__$1,line_num);
var text__$1 = clojure.string.join.call(null,"\n",lines__$2);
var tags__$2 = tag_soup.core.code__GT_tags.call(null,text__$1);
var G__12618 = lines__$2;
var G__12619 = tags__$2;
var G__12620 = (line_num + (1));
lines__$1 = G__12618;
tags__$1 = G__12619;
line_num = G__12620;
continue;
} else {
return lines__$1;
}
} else {
return lines__$1;
}
break;
}
})():(function (){var old_indent_level = cross_parinfer.core.indent_count.call(null,cljs.core.get.call(null,lines,start_line));
var diff = (new_indent_level - old_indent_level);
var diff__$1 = (((diff < (0)))?((-1) * cljs.core.count.call(null,cljs.core.take.call(null,((-1) * diff),cljs.core.first.call(null,cljs.core.split_with.call(null,((function (old_indent_level,diff,map__12605,map__12605__$1,text,cursor_position,indent_type,vec__12606,start_pos,end_pos,vec__12609,start_line,start_x,vec__12612,end_line,_,lines,tags,new_indent_level){
return (function (p1__12604_SHARP_){
return cljs.core._EQ_.call(null,p1__12604_SHARP_," ");
});})(old_indent_level,diff,map__12605,map__12605__$1,text,cursor_position,indent_type,vec__12606,start_pos,end_pos,vec__12609,start_line,start_x,vec__12612,end_line,_,lines,tags,new_indent_level))
,cljs.core.seq.call(null,cljs.core.get.call(null,lines,start_line))))))):diff);
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cross_parinfer.core.update_indent,diff__$1),lines,cljs.core.range.call(null,start_line,(end_line + (1))));
})());
var text__$1 = clojure.string.join.call(null,"\n",lines__$1);
var text__$2 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cross_parinfer.core.indent_mode.call(null,text__$1,new_indent_level,start_line,true));
var lines__$2 = cross_parinfer.core.split_lines.call(null,text__$2);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor-position","cursor-position",926799334),((cljs.core._EQ_.call(null,start_pos,end_pos))?(function (){var pos = cross_parinfer.core.row_col__GT_position.call(null,text__$2,start_line,new_indent_level);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,pos], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cross_parinfer.core.row_col__GT_position.call(null,text__$2,start_line,(0)),cross_parinfer.core.row_col__GT_position.call(null,text__$2,end_line,cljs.core.count.call(null,cljs.core.get.call(null,lines__$2,end_line)))], null)),new cljs.core.Keyword(null,"text","text",-1790561697),text__$2], null);
});

//# sourceMappingURL=core.js.map