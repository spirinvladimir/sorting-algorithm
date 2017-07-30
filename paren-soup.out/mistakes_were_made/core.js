// Compiled by ClojureScript 1.9.671 {}
goog.provide('mistakes_were_made.core');
goog.require('cljs.core');
goog.require('clojure.string');
mistakes_were_made.core.create_edit_history = (function mistakes_were_made$core$create_edit_history(){
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),(-1),new cljs.core.Keyword(null,"states","states",1389013542),cljs.core.PersistentVector.EMPTY], null));
});
/**
 * Updates the edit history atom.
 */
mistakes_were_made.core.update_edit_history_BANG_ = (function mistakes_were_made$core$update_edit_history_BANG_(edit_history,state){
var map__12554 = cljs.core.deref.call(null,edit_history);
var map__12554__$1 = ((((!((map__12554 == null)))?((((map__12554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12554.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12554):map__12554);
var current_state = cljs.core.get.call(null,map__12554__$1,new cljs.core.Keyword(null,"current-state","current-state",1048284452));
var states = cljs.core.get.call(null,map__12554__$1,new cljs.core.Keyword(null,"states","states",1389013542));
var limit = cljs.core.get.call(null,map__12554__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
var old_state = cljs.core.get.call(null,states,current_state);
var old_cursor_position = (function (){var or__7285__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"original-cursor-position","original-cursor-position",2100785541).cljs$core$IFn$_invoke$arity$1(old_state));
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return (0);
}
})();
var new_cursor_position = cljs.core.first.call(null,new cljs.core.Keyword(null,"cursor-position","cursor-position",926799334).cljs$core$IFn$_invoke$arity$1(state));
var new_cursor_change = (new_cursor_position - old_cursor_position);
var state__$1 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"original-cursor-position","original-cursor-position",2100785541),new cljs.core.Keyword(null,"cursor-position","cursor-position",926799334).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(state__$1))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,edit_history,((function (map__12554,map__12554__$1,current_state,states,limit,old_state,old_cursor_position,new_cursor_position,new_cursor_change,state__$1){
return (function (edit_history_map){
var new_current_state = ((((current_state <= (1))) || (cljs.core.not_EQ_.call(null,new_cursor_change,(1))))?(current_state + (1)):current_state);
var new_states = cljs.core.subvec.call(null,states,(0),new_current_state);
var new_states__$1 = cljs.core.conj.call(null,new_states,state__$1);
if(cljs.core.truth_((function (){var and__7273__auto__ = limit;
if(cljs.core.truth_(and__7273__auto__)){
return (cljs.core.count.call(null,new_states__$1) > limit);
} else {
return and__7273__auto__;
}
})())){
return cljs.core.assoc.call(null,edit_history_map,new cljs.core.Keyword(null,"current-state","current-state",1048284452),(new_current_state - (1)),new cljs.core.Keyword(null,"states","states",1389013542),cljs.core.subvec.call(null,new_states__$1,(1)));
} else {
return cljs.core.assoc.call(null,edit_history_map,new cljs.core.Keyword(null,"current-state","current-state",1048284452),new_current_state,new cljs.core.Keyword(null,"states","states",1389013542),new_states__$1);
}
});})(map__12554,map__12554__$1,current_state,states,limit,old_state,old_cursor_position,new_cursor_position,new_cursor_change,state__$1))
);
}
});
/**
 * Updates only the cursor position.
 */
mistakes_were_made.core.update_cursor_position_BANG_ = (function mistakes_were_made$core$update_cursor_position_BANG_(edit_history,cursor_position){
var map__12556 = cljs.core.deref.call(null,edit_history);
var map__12556__$1 = ((((!((map__12556 == null)))?((((map__12556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12556.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12556):map__12556);
var current_state = cljs.core.get.call(null,map__12556__$1,new cljs.core.Keyword(null,"current-state","current-state",1048284452));
if((current_state >= (0))){
return cljs.core.swap_BANG_.call(null,edit_history,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),current_state,new cljs.core.Keyword(null,"cursor-position","cursor-position",926799334)], null),cursor_position);
} else {
return null;
}
});
/**
 * Returns the current state from edit-history, or nil if there is none.
 */
mistakes_were_made.core.get_current_state = (function mistakes_were_made$core$get_current_state(edit_history){
var map__12558 = cljs.core.deref.call(null,edit_history);
var map__12558__$1 = ((((!((map__12558 == null)))?((((map__12558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12558):map__12558);
var current_state = cljs.core.get.call(null,map__12558__$1,new cljs.core.Keyword(null,"current-state","current-state",1048284452));
var states = cljs.core.get.call(null,map__12558__$1,new cljs.core.Keyword(null,"states","states",1389013542));
return cljs.core.get.call(null,states,current_state);
});
/**
 * Returns the previous state from edit-history, or nil if there is none.
 */
mistakes_were_made.core.get_previous_state = (function mistakes_were_made$core$get_previous_state(edit_history){
var map__12560 = cljs.core.deref.call(null,edit_history);
var map__12560__$1 = ((((!((map__12560 == null)))?((((map__12560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12560):map__12560);
var current_state = cljs.core.get.call(null,map__12560__$1,new cljs.core.Keyword(null,"current-state","current-state",1048284452));
var states = cljs.core.get.call(null,map__12560__$1,new cljs.core.Keyword(null,"states","states",1389013542));
return cljs.core.get.call(null,states,(current_state - (1)));
});
/**
 * Returns the next state from edit-history, or nil if there is none.
 */
mistakes_were_made.core.get_next_state = (function mistakes_were_made$core$get_next_state(edit_history){
var map__12562 = cljs.core.deref.call(null,edit_history);
var map__12562__$1 = ((((!((map__12562 == null)))?((((map__12562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12562):map__12562);
var current_state = cljs.core.get.call(null,map__12562__$1,new cljs.core.Keyword(null,"current-state","current-state",1048284452));
var states = cljs.core.get.call(null,map__12562__$1,new cljs.core.Keyword(null,"states","states",1389013542));
return cljs.core.get.call(null,states,(current_state + (1)));
});
/**
 * Changes the current state and returns the previous state from edit-history, or nil if there is none.
 */
mistakes_were_made.core.undo_BANG_ = (function mistakes_were_made$core$undo_BANG_(edit_history){
var temp__4657__auto__ = mistakes_were_made.core.get_previous_state.call(null,edit_history);
if(cljs.core.truth_(temp__4657__auto__)){
var state = temp__4657__auto__;
cljs.core.swap_BANG_.call(null,edit_history,cljs.core.update,new cljs.core.Keyword(null,"current-state","current-state",1048284452),cljs.core.dec);

return state;
} else {
return null;
}
});
/**
 * Changes the current state and returns the next state from edit-history, or nil if there is none.
 */
mistakes_were_made.core.redo_BANG_ = (function mistakes_were_made$core$redo_BANG_(edit_history){
var temp__4657__auto__ = mistakes_were_made.core.get_next_state.call(null,edit_history);
if(cljs.core.truth_(temp__4657__auto__)){
var state = temp__4657__auto__;
cljs.core.swap_BANG_.call(null,edit_history,cljs.core.update,new cljs.core.Keyword(null,"current-state","current-state",1048284452),cljs.core.inc);

return state;
} else {
return null;
}
});
/**
 * Returns true if we can undo.
 */
mistakes_were_made.core.can_undo_QMARK_ = (function mistakes_were_made$core$can_undo_QMARK_(edit_history){
return !((mistakes_were_made.core.get_previous_state.call(null,edit_history) == null));
});
/**
 * Returns true if we can redo.
 */
mistakes_were_made.core.can_redo_QMARK_ = (function mistakes_were_made$core$can_redo_QMARK_(edit_history){
return !((mistakes_were_made.core.get_next_state.call(null,edit_history) == null));
});

//# sourceMappingURL=core.js.map