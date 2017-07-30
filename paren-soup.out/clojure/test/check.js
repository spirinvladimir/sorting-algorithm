// Compiled by ClojureScript 1.9.671 {}
goog.provide('clojure.test.check');
goog.require('cljs.core');
goog.require('clojure.test.check.generators');
goog.require('clojure.test.check.clojure_test');
goog.require('clojure.test.check.random');
goog.require('clojure.test.check.rose_tree');
goog.require('clojure.test.check.impl');

clojure.test.check.make_rng = (function clojure$test$check$make_rng(seed){
if(cljs.core.truth_(seed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,clojure.test.check.random.make_random.call(null,seed)], null);
} else {
var non_nil_seed = clojure.test.check.impl.get_current_time_millis.call(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [non_nil_seed,clojure.test.check.random.make_random.call(null,non_nil_seed)], null);
}
});
clojure.test.check.complete = (function clojure$test$check$complete(property,num_trials,seed){
clojure.test.check.clojure_test.report_trial.call(null,property,num_trials,num_trials);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),true,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),num_trials,new cljs.core.Keyword(null,"seed","seed",68613327),seed], null);
});
/**
 * True if the value is not falsy or an exception
 */
clojure.test.check.not_falsey_or_exception_QMARK_ = (function clojure$test$check$not_falsey_or_exception_QMARK_(value){
var and__7273__auto__ = value;
if(cljs.core.truth_(and__7273__auto__)){
return cljs.core.not.call(null,clojure.test.check.impl.exception_like_QMARK_.call(null,value));
} else {
return and__7273__auto__;
}
});
/**
 * Tests `property` `num-tests` times.
 *   Takes optional keys `:seed` and `:max-size`. The seed parameter
 *   can be used to re-run previous tests, as the seed used is returned
 *   after a test is run. The max-size can be used to control the 'size'
 *   of generated values. The size will start at 0, and grow up to
 *   max-size, as the number of tests increases. Generators will use
 *   the size parameter to bound their growth. This prevents, for example,
 *   generating a five-thousand element vector on the very first test.
 * 
 *   Examples:
 * 
 *    (def p (for-all [a gen/pos-int] (> (* a a) a)))
 *    (quick-check 100 p)
 *   
 */
clojure.test.check.quick_check = (function clojure$test$check$quick_check(var_args){
var args__8417__auto__ = [];
var len__8410__auto___16004 = arguments.length;
var i__8411__auto___16005 = (0);
while(true){
if((i__8411__auto___16005 < len__8410__auto___16004)){
args__8417__auto__.push((arguments[i__8411__auto___16005]));

var G__16006 = (i__8411__auto___16005 + (1));
i__8411__auto___16005 = G__16006;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((2) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((2)),(0),null)):null);
return clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8418__auto__);
});

clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (num_tests,property,p__15992){
var map__15993 = p__15992;
var map__15993__$1 = ((((!((map__15993 == null)))?((((map__15993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15993):map__15993);
var seed = cljs.core.get.call(null,map__15993__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var max_size = cljs.core.get.call(null,map__15993__$1,new cljs.core.Keyword(null,"max-size","max-size",-874966132),(200));
var vec__15995 = clojure.test.check.make_rng.call(null,seed);
var created_seed = cljs.core.nth.call(null,vec__15995,(0),null);
var rng = cljs.core.nth.call(null,vec__15995,(1),null);
var size_seq = clojure.test.check.generators.make_size_range_seq.call(null,max_size);
var so_far = (0);
var size_seq__$1 = size_seq;
var rstate = rng;
while(true){
if((so_far === num_tests)){
return clojure.test.check.complete.call(null,property,num_tests,created_seed);
} else {
var vec__15998 = size_seq__$1;
var seq__15999 = cljs.core.seq.call(null,vec__15998);
var first__16000 = cljs.core.first.call(null,seq__15999);
var seq__15999__$1 = cljs.core.next.call(null,seq__15999);
var size = first__16000;
var rest_size_seq = seq__15999__$1;
var vec__16001 = clojure.test.check.random.split.call(null,rstate);
var r1 = cljs.core.nth.call(null,vec__16001,(0),null);
var r2 = cljs.core.nth.call(null,vec__16001,(1),null);
var result_map_rose = clojure.test.check.generators.call_gen.call(null,property,r1,size);
var result_map = clojure.test.check.rose_tree.root.call(null,result_map_rose);
var result = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result_map);
var args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(result_map);
if(cljs.core.truth_(clojure.test.check.not_falsey_or_exception_QMARK_.call(null,result))){
clojure.test.check.clojure_test.report_trial.call(null,property,so_far,num_tests);

var G__16007 = (so_far + (1));
var G__16008 = rest_size_seq;
var G__16009 = r2;
so_far = G__16007;
size_seq__$1 = G__16008;
rstate = G__16009;
continue;
} else {
return clojure.test.check.failure.call(null,property,result_map_rose,so_far,size,created_seed);
}
}
break;
}
});

clojure.test.check.quick_check.cljs$lang$maxFixedArity = (2);

clojure.test.check.quick_check.cljs$lang$applyTo = (function (seq15989){
var G__15990 = cljs.core.first.call(null,seq15989);
var seq15989__$1 = cljs.core.next.call(null,seq15989);
var G__15991 = cljs.core.first.call(null,seq15989__$1);
var seq15989__$2 = cljs.core.next.call(null,seq15989__$1);
return clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic(G__15990,G__15991,seq15989__$2);
});

clojure.test.check.smallest_shrink = (function clojure$test$check$smallest_shrink(total_nodes_visited,depth,smallest){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"total-nodes-visited","total-nodes-visited",-620132443),total_nodes_visited,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(smallest),new cljs.core.Keyword(null,"smallest","smallest",-152623883),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(smallest)], null);
});
/**
 * Shrinking a value produces a sequence of smaller values of the same type.
 *   Each of these values can then be shrunk. Think of this as a tree. We do a
 *   modified depth-first search of the tree:
 * 
 *   Do a non-exhaustive search for a deeper (than the root) failing example.
 *   Additional rules added to depth-first search:
 *   * If a node passes the property, you may continue searching at this depth,
 *   but not backtrack
 *   * If a node fails the property, search its children
 *   The value returned is the left-most failing example at the depth where a
 *   passing example was found.
 */
clojure.test.check.shrink_loop = (function clojure$test$check$shrink_loop(rose_tree){
var shrinks_this_depth = clojure.test.check.rose_tree.children.call(null,rose_tree);
var nodes = shrinks_this_depth;
var current_smallest = clojure.test.check.rose_tree.root.call(null,rose_tree);
var total_nodes_visited = (0);
var depth = (0);
while(true){
if(cljs.core.empty_QMARK_.call(null,nodes)){
return clojure.test.check.smallest_shrink.call(null,total_nodes_visited,depth,current_smallest);
} else {
var vec__16010 = nodes;
var seq__16011 = cljs.core.seq.call(null,vec__16010);
var first__16012 = cljs.core.first.call(null,seq__16011);
var seq__16011__$1 = cljs.core.next.call(null,seq__16011);
var head = first__16012;
var tail = seq__16011__$1;
var result = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(clojure.test.check.rose_tree.root.call(null,head));
if(cljs.core.truth_(clojure.test.check.not_falsey_or_exception_QMARK_.call(null,result))){
var G__16013 = tail;
var G__16014 = current_smallest;
var G__16015 = (total_nodes_visited + (1));
var G__16016 = depth;
nodes = G__16013;
current_smallest = G__16014;
total_nodes_visited = G__16015;
depth = G__16016;
continue;
} else {
var temp__4655__auto__ = cljs.core.seq.call(null,clojure.test.check.rose_tree.children.call(null,head));
if(temp__4655__auto__){
var children = temp__4655__auto__;
var G__16017 = children;
var G__16018 = clojure.test.check.rose_tree.root.call(null,head);
var G__16019 = (total_nodes_visited + (1));
var G__16020 = (depth + (1));
nodes = G__16017;
current_smallest = G__16018;
total_nodes_visited = G__16019;
depth = G__16020;
continue;
} else {
var G__16021 = tail;
var G__16022 = clojure.test.check.rose_tree.root.call(null,head);
var G__16023 = (total_nodes_visited + (1));
var G__16024 = depth;
nodes = G__16021;
current_smallest = G__16022;
total_nodes_visited = G__16023;
depth = G__16024;
continue;
}
}
}
break;
}
});
clojure.test.check.failure = (function clojure$test$check$failure(property,failing_rose_tree,trial_number,size,seed){
var root = clojure.test.check.rose_tree.root.call(null,failing_rose_tree);
var result = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(root);
var failing_args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(root);
clojure.test.check.clojure_test.report_failure.call(null,property,result,trial_number,failing_args);

return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"seed","seed",68613327),seed,new cljs.core.Keyword(null,"failing-size","failing-size",-429562538),size,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(trial_number + (1)),new cljs.core.Keyword(null,"fail","fail",1706214930),cljs.core.vec.call(null,failing_args),new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412),clojure.test.check.shrink_loop.call(null,failing_rose_tree)], null);
});

//# sourceMappingURL=check.js.map