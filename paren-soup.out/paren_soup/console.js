// Compiled by ClojureScript 1.9.671 {}
goog.provide('paren_soup.console');
goog.require('cljs.core');
paren_soup.console.create_console_history = (function paren_soup$console$create_console_history(){
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-line","current-line",1958067520),(0),new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"start","start",-355208981),(0)], null));
});
paren_soup.console.get_console_start = (function paren_soup$console$get_console_start(console_history){
return new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,console_history));
});
paren_soup.console.update_console_start_BANG_ = (function paren_soup$console$update_console_start_BANG_(console_history,start){
return cljs.core.swap_BANG_.call(null,console_history,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),start);
});
/**
 * Updates the console history atom.
 */
paren_soup.console.update_console_history_BANG_ = (function paren_soup$console$update_console_history_BANG_(console_history,line){
var map__9288 = cljs.core.deref.call(null,console_history);
var map__9288__$1 = ((((!((map__9288 == null)))?((((map__9288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9288.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9288):map__9288);
var current_line = cljs.core.get.call(null,map__9288__$1,new cljs.core.Keyword(null,"current-line","current-line",1958067520));
var lines = cljs.core.get.call(null,map__9288__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
return cljs.core.swap_BANG_.call(null,console_history,((function (map__9288,map__9288__$1,current_line,lines){
return (function (console_history_map){
var lines__$1 = (((cljs.core.seq.call(null,line)) && (cljs.core.not_EQ_.call(null,line,cljs.core.last.call(null,lines))))?cljs.core.conj.call(null,lines,line):lines);
return cljs.core.assoc.call(null,console_history_map,new cljs.core.Keyword(null,"current-line","current-line",1958067520),cljs.core.count.call(null,lines__$1),new cljs.core.Keyword(null,"lines","lines",-700165781),lines__$1);
});})(map__9288,map__9288__$1,current_line,lines))
);
});
/**
 * Returns the previous line from console-history, or nil if there is none.
 */
paren_soup.console.get_previous_line = (function paren_soup$console$get_previous_line(console_history){
var map__9290 = cljs.core.deref.call(null,console_history);
var map__9290__$1 = ((((!((map__9290 == null)))?((((map__9290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9290):map__9290);
var current_line = cljs.core.get.call(null,map__9290__$1,new cljs.core.Keyword(null,"current-line","current-line",1958067520));
var lines = cljs.core.get.call(null,map__9290__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
return cljs.core.get.call(null,lines,(current_line - (1)));
});
/**
 * Returns the next line from console-history, or nil if there is none.
 */
paren_soup.console.get_next_line = (function paren_soup$console$get_next_line(console_history){
var map__9292 = cljs.core.deref.call(null,console_history);
var map__9292__$1 = ((((!((map__9292 == null)))?((((map__9292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9292):map__9292);
var current_line = cljs.core.get.call(null,map__9292__$1,new cljs.core.Keyword(null,"current-line","current-line",1958067520));
var lines = cljs.core.get.call(null,map__9292__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
return cljs.core.get.call(null,lines,(current_line + (1)));
});
/**
 * Changes the current line and returns the previous line from console-history, or nil if there is none.
 */
paren_soup.console.up_BANG_ = (function paren_soup$console$up_BANG_(console_history){
var line = paren_soup.console.get_previous_line.call(null,console_history);
if(cljs.core.truth_(line)){
cljs.core.swap_BANG_.call(null,console_history,cljs.core.update,new cljs.core.Keyword(null,"current-line","current-line",1958067520),cljs.core.dec);
} else {
cljs.core.swap_BANG_.call(null,console_history,cljs.core.assoc,new cljs.core.Keyword(null,"current-line","current-line",1958067520),(-1));
}

return line;
});
/**
 * Changes the current line and returns the next line from console-history, or nil if there is none.
 */
paren_soup.console.down_BANG_ = (function paren_soup$console$down_BANG_(console_history){
var line = paren_soup.console.get_next_line.call(null,console_history);
if(cljs.core.truth_(line)){
cljs.core.swap_BANG_.call(null,console_history,cljs.core.update,new cljs.core.Keyword(null,"current-line","current-line",1958067520),cljs.core.inc);
} else {
cljs.core.swap_BANG_.call(null,console_history,cljs.core.assoc,new cljs.core.Keyword(null,"current-line","current-line",1958067520),cljs.core.count.call(null,new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,console_history))));
}

return line;
});

//# sourceMappingURL=console.js.map