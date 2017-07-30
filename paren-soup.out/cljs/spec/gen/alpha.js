// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13454 = arguments.length;
var i__8411__auto___13455 = (0);
while(true){
if((i__8411__auto___13455 < len__8410__auto___13454)){
args__8417__auto__.push((arguments[i__8411__auto___13455]));

var G__13456 = (i__8411__auto___13455 + (1));
i__8411__auto___13455 = G__13456;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq13453){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13453));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13458 = arguments.length;
var i__8411__auto___13459 = (0);
while(true){
if((i__8411__auto___13459 < len__8410__auto___13458)){
args__8417__auto__.push((arguments[i__8411__auto___13459]));

var G__13460 = (i__8411__auto___13459 + (1));
i__8411__auto___13459 = G__13460;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq13457){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13457));
});

var g_QMARK__13461 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_13462 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__13461){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__13461))
,null));
var mkg_13463 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__13461,g_13462){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__13461,g_13462))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__13461,g_13462,mkg_13463){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__13461).call(null,x);
});})(g_QMARK__13461,g_13462,mkg_13463))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__13461,g_13462,mkg_13463){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_13463).call(null,gfn);
});})(g_QMARK__13461,g_13462,mkg_13463))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__13461,g_13462,mkg_13463){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_13462).call(null,generator);
});})(g_QMARK__13461,g_13462,mkg_13463))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__8504__auto___13483 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__8504__auto___13483){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13484 = arguments.length;
var i__8411__auto___13485 = (0);
while(true){
if((i__8411__auto___13485 < len__8410__auto___13484)){
args__8417__auto__.push((arguments[i__8411__auto___13485]));

var G__13486 = (i__8411__auto___13485 + (1));
i__8411__auto___13485 = G__13486;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8504__auto___13483))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8504__auto___13483){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8504__auto___13483),args);
});})(g__8504__auto___13483))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__8504__auto___13483){
return (function (seq13464){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13464));
});})(g__8504__auto___13483))
;


var g__8504__auto___13487 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__8504__auto___13487){
return (function cljs$spec$gen$alpha$list(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13488 = arguments.length;
var i__8411__auto___13489 = (0);
while(true){
if((i__8411__auto___13489 < len__8410__auto___13488)){
args__8417__auto__.push((arguments[i__8411__auto___13489]));

var G__13490 = (i__8411__auto___13489 + (1));
i__8411__auto___13489 = G__13490;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8504__auto___13487))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8504__auto___13487){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8504__auto___13487),args);
});})(g__8504__auto___13487))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__8504__auto___13487){
return (function (seq13465){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13465));
});})(g__8504__auto___13487))
;


var g__8504__auto___13491 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__8504__auto___13491){
return (function cljs$spec$gen$alpha$map(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13492 = arguments.length;
var i__8411__auto___13493 = (0);
while(true){
if((i__8411__auto___13493 < len__8410__auto___13492)){
args__8417__auto__.push((arguments[i__8411__auto___13493]));

var G__13494 = (i__8411__auto___13493 + (1));
i__8411__auto___13493 = G__13494;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8504__auto___13491))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8504__auto___13491){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8504__auto___13491),args);
});})(g__8504__auto___13491))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__8504__auto___13491){
return (function (seq13466){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13466));
});})(g__8504__auto___13491))
;


var g__8504__auto___13495 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__8504__auto___13495){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13496 = arguments.length;
var i__8411__auto___13497 = (0);
while(true){
if((i__8411__auto___13497 < len__8410__auto___13496)){
args__8417__auto__.push((arguments[i__8411__auto___13497]));

var G__13498 = (i__8411__auto___13497 + (1));
i__8411__auto___13497 = G__13498;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8504__auto___13495))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8504__auto___13495){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8504__auto___13495),args);
});})(g__8504__auto___13495))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__8504__auto___13495){
return (function (seq13467){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13467));
});})(g__8504__auto___13495))
;


var g__8504__auto___13499 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__8504__auto___13499){
return (function cljs$spec$gen$alpha$set(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13500 = arguments.length;
var i__8411__auto___13501 = (0);
while(true){
if((i__8411__auto___13501 < len__8410__auto___13500)){
args__8417__auto__.push((arguments[i__8411__auto___13501]));

var G__13502 = (i__8411__auto___13501 + (1));
i__8411__auto___13501 = G__13502;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8504__auto___13499))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8504__auto___13499){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8504__auto___13499),args);
});})(g__8504__auto___13499))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__8504__auto___13499){
return (function (seq13468){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13468));
});})(g__8504__auto___13499))
;


var g__8504__auto___13503 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__8504__auto___13503){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13504 = arguments.length;
var i__8411__auto___13505 = (0);
while(true){
if((i__8411__auto___13505 < len__8410__auto___13504)){
args__8417__auto__.push((arguments[i__8411__auto___13505]));

var G__13506 = (i__8411__auto___13505 + (1));
i__8411__auto___13505 = G__13506;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8504__auto___13503))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8504__auto___13503){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8504__auto___13503),args);
});})(g__8504__auto___13503))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__8504__auto___13503){
return (function (seq13469){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13469));
});})(g__8504__auto___13503))
;


var g__8504__auto___13507 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__8504__auto___13507){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13508 = arguments.length;
var i__8411__auto___13509 = (0);
while(true){
if((i__8411__auto___13509 < len__8410__auto___13508)){
args__8417__auto__.push((arguments[i__8411__auto___13509]));

var G__13510 = (i__8411__auto___13509 + (1));
i__8411__auto___13509 = G__13510;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8504__auto___13507))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8504__auto___13507){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8504__auto___13507),args);
});})(g__8504__auto___13507))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__8504__auto___13507){
return (function (seq13470){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13470));
});})(g__8504__auto___13507))
;


var g__8504__auto___13511 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__8504__auto___13511){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13512 = arguments.length;
var i__8411__auto___13513 = (0);
while(true){
if((i__8411__auto___13513 < len__8410__auto___13512)){
args__8417__auto__.push((arguments[i__8411__auto___13513]));

var G__13514 = (i__8411__auto___13513 + (1));
i__8411__auto___13513 = G__13514;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8504__auto___13511))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8504__auto___13511){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8504__auto___13511),args);
});})(g__8504__auto___13511))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__8504__auto___13511){
return (function (seq13471){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13471));
});})(g__8504__auto___13511))
;


var g__8504__auto___13515 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__8504__auto___13515){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13516 = arguments.length;
var i__8411__auto___13517 = (0);
while(true){
if((i__8411__auto___13517 < len__8410__auto___13516)){
args__8417__auto__.push((arguments[i__8411__auto___13517]));

var G__13518 = (i__8411__auto___13517 + (1));
i__8411__auto___13517 = G__13518;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8504__auto___13515))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8504__auto___13515){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8504__auto___13515),args);
});})(g__8504__auto___13515))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__8504__auto___13515){
return (function (seq13472){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13472));
});})(g__8504__auto___13515))
;


var g__8504__auto___13519 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__8504__auto___13519){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13520 = arguments.length;
var i__8411__auto___13521 = (0);
while(true){
if((i__8411__auto___13521 < len__8410__auto___13520)){
args__8417__auto__.push((arguments[i__8411__auto___13521]));

var G__13522 = (i__8411__auto___13521 + (1));
i__8411__auto___13521 = G__13522;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8504__auto___13519))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8504__auto___13519){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8504__auto___13519),args);
});})(g__8504__auto___13519))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__8504__auto___13519){
return (function (seq13473){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13473));
});})(g__8504__auto___13519))
;


var g__8504__auto___13523 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__8504__auto___13523){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13524 = arguments.length;
var i__8411__auto___13525 = (0);
while(true){
if((i__8411__auto___13525 < len__8410__auto___13524)){
args__8417__auto__.push((arguments[i__8411__auto___13525]));

var G__13526 = (i__8411__auto___13525 + (1));
i__8411__auto___13525 = G__13526;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8504__auto___13523))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8504__auto___13523){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8504__auto___13523),args);
});})(g__8504__auto___13523))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__8504__auto___13523){
return (function (seq13474){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13474));
});})(g__8504__auto___13523))
;


var g__8504__auto___13527 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__8504__auto___13527){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13528 = arguments.length;
var i__8411__auto___13529 = (0);
while(true){
if((i__8411__auto___13529 < len__8410__auto___13528)){
args__8417__auto__.push((arguments[i__8411__auto___13529]));

var G__13530 = (i__8411__auto___13529 + (1));
i__8411__auto___13529 = G__13530;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8504__auto___13527))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8504__auto___13527){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8504__auto___13527),args);
});})(g__8504__auto___13527))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__8504__auto___13527){
return (function (seq13475){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13475));
});})(g__8504__auto___13527))
;


var g__8504__auto___13531 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__8504__auto___13531){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13532 = arguments.length;
var i__8411__auto___13533 = (0);
while(true){
if((i__8411__auto___13533 < len__8410__auto___13532)){
args__8417__auto__.push((arguments[i__8411__auto___13533]));

var G__13534 = (i__8411__auto___13533 + (1));
i__8411__auto___13533 = G__13534;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8504__auto___13531))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8504__auto___13531){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8504__auto___13531),args);
});})(g__8504__auto___13531))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__8504__auto___13531){
return (function (seq13476){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13476));
});})(g__8504__auto___13531))
;


var g__8504__auto___13535 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__8504__auto___13535){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13536 = arguments.length;
var i__8411__auto___13537 = (0);
while(true){
if((i__8411__auto___13537 < len__8410__auto___13536)){
args__8417__auto__.push((arguments[i__8411__auto___13537]));

var G__13538 = (i__8411__auto___13537 + (1));
i__8411__auto___13537 = G__13538;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8504__auto___13535))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8504__auto___13535){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8504__auto___13535),args);
});})(g__8504__auto___13535))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__8504__auto___13535){
return (function (seq13477){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13477));
});})(g__8504__auto___13535))
;


var g__8504__auto___13539 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__8504__auto___13539){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13540 = arguments.length;
var i__8411__auto___13541 = (0);
while(true){
if((i__8411__auto___13541 < len__8410__auto___13540)){
args__8417__auto__.push((arguments[i__8411__auto___13541]));

var G__13542 = (i__8411__auto___13541 + (1));
i__8411__auto___13541 = G__13542;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8504__auto___13539))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8504__auto___13539){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8504__auto___13539),args);
});})(g__8504__auto___13539))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__8504__auto___13539){
return (function (seq13478){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13478));
});})(g__8504__auto___13539))
;


var g__8504__auto___13543 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__8504__auto___13543){
return (function cljs$spec$gen$alpha$return(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13544 = arguments.length;
var i__8411__auto___13545 = (0);
while(true){
if((i__8411__auto___13545 < len__8410__auto___13544)){
args__8417__auto__.push((arguments[i__8411__auto___13545]));

var G__13546 = (i__8411__auto___13545 + (1));
i__8411__auto___13545 = G__13546;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8504__auto___13543))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8504__auto___13543){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8504__auto___13543),args);
});})(g__8504__auto___13543))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__8504__auto___13543){
return (function (seq13479){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13479));
});})(g__8504__auto___13543))
;


var g__8504__auto___13547 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__8504__auto___13547){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13548 = arguments.length;
var i__8411__auto___13549 = (0);
while(true){
if((i__8411__auto___13549 < len__8410__auto___13548)){
args__8417__auto__.push((arguments[i__8411__auto___13549]));

var G__13550 = (i__8411__auto___13549 + (1));
i__8411__auto___13549 = G__13550;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8504__auto___13547))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8504__auto___13547){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8504__auto___13547),args);
});})(g__8504__auto___13547))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__8504__auto___13547){
return (function (seq13480){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13480));
});})(g__8504__auto___13547))
;


var g__8504__auto___13551 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__8504__auto___13551){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13552 = arguments.length;
var i__8411__auto___13553 = (0);
while(true){
if((i__8411__auto___13553 < len__8410__auto___13552)){
args__8417__auto__.push((arguments[i__8411__auto___13553]));

var G__13554 = (i__8411__auto___13553 + (1));
i__8411__auto___13553 = G__13554;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8504__auto___13551))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8504__auto___13551){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8504__auto___13551),args);
});})(g__8504__auto___13551))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__8504__auto___13551){
return (function (seq13481){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13481));
});})(g__8504__auto___13551))
;


var g__8504__auto___13555 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__8504__auto___13555){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13556 = arguments.length;
var i__8411__auto___13557 = (0);
while(true){
if((i__8411__auto___13557 < len__8410__auto___13556)){
args__8417__auto__.push((arguments[i__8411__auto___13557]));

var G__13558 = (i__8411__auto___13557 + (1));
i__8411__auto___13557 = G__13558;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8504__auto___13555))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8504__auto___13555){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8504__auto___13555),args);
});})(g__8504__auto___13555))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__8504__auto___13555){
return (function (seq13482){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13482));
});})(g__8504__auto___13555))
;

var g__8517__auto___13580 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__8517__auto___13580){
return (function cljs$spec$gen$alpha$any(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13581 = arguments.length;
var i__8411__auto___13582 = (0);
while(true){
if((i__8411__auto___13582 < len__8410__auto___13581)){
args__8417__auto__.push((arguments[i__8411__auto___13582]));

var G__13583 = (i__8411__auto___13582 + (1));
i__8411__auto___13582 = G__13583;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8517__auto___13580))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8517__auto___13580){
return (function (args){
return cljs.core.deref.call(null,g__8517__auto___13580);
});})(g__8517__auto___13580))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__8517__auto___13580){
return (function (seq13559){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13559));
});})(g__8517__auto___13580))
;


var g__8517__auto___13584 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__8517__auto___13584){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13585 = arguments.length;
var i__8411__auto___13586 = (0);
while(true){
if((i__8411__auto___13586 < len__8410__auto___13585)){
args__8417__auto__.push((arguments[i__8411__auto___13586]));

var G__13587 = (i__8411__auto___13586 + (1));
i__8411__auto___13586 = G__13587;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8517__auto___13584))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8517__auto___13584){
return (function (args){
return cljs.core.deref.call(null,g__8517__auto___13584);
});})(g__8517__auto___13584))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__8517__auto___13584){
return (function (seq13560){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13560));
});})(g__8517__auto___13584))
;


var g__8517__auto___13588 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__8517__auto___13588){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13589 = arguments.length;
var i__8411__auto___13590 = (0);
while(true){
if((i__8411__auto___13590 < len__8410__auto___13589)){
args__8417__auto__.push((arguments[i__8411__auto___13590]));

var G__13591 = (i__8411__auto___13590 + (1));
i__8411__auto___13590 = G__13591;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8517__auto___13588))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8517__auto___13588){
return (function (args){
return cljs.core.deref.call(null,g__8517__auto___13588);
});})(g__8517__auto___13588))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__8517__auto___13588){
return (function (seq13561){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13561));
});})(g__8517__auto___13588))
;


var g__8517__auto___13592 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__8517__auto___13592){
return (function cljs$spec$gen$alpha$char(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13593 = arguments.length;
var i__8411__auto___13594 = (0);
while(true){
if((i__8411__auto___13594 < len__8410__auto___13593)){
args__8417__auto__.push((arguments[i__8411__auto___13594]));

var G__13595 = (i__8411__auto___13594 + (1));
i__8411__auto___13594 = G__13595;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8517__auto___13592))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8517__auto___13592){
return (function (args){
return cljs.core.deref.call(null,g__8517__auto___13592);
});})(g__8517__auto___13592))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__8517__auto___13592){
return (function (seq13562){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13562));
});})(g__8517__auto___13592))
;


var g__8517__auto___13596 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__8517__auto___13596){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13597 = arguments.length;
var i__8411__auto___13598 = (0);
while(true){
if((i__8411__auto___13598 < len__8410__auto___13597)){
args__8417__auto__.push((arguments[i__8411__auto___13598]));

var G__13599 = (i__8411__auto___13598 + (1));
i__8411__auto___13598 = G__13599;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8517__auto___13596))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8517__auto___13596){
return (function (args){
return cljs.core.deref.call(null,g__8517__auto___13596);
});})(g__8517__auto___13596))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__8517__auto___13596){
return (function (seq13563){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13563));
});})(g__8517__auto___13596))
;


var g__8517__auto___13600 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__8517__auto___13600){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13601 = arguments.length;
var i__8411__auto___13602 = (0);
while(true){
if((i__8411__auto___13602 < len__8410__auto___13601)){
args__8417__auto__.push((arguments[i__8411__auto___13602]));

var G__13603 = (i__8411__auto___13602 + (1));
i__8411__auto___13602 = G__13603;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8517__auto___13600))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8517__auto___13600){
return (function (args){
return cljs.core.deref.call(null,g__8517__auto___13600);
});})(g__8517__auto___13600))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__8517__auto___13600){
return (function (seq13564){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13564));
});})(g__8517__auto___13600))
;


var g__8517__auto___13604 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__8517__auto___13604){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13605 = arguments.length;
var i__8411__auto___13606 = (0);
while(true){
if((i__8411__auto___13606 < len__8410__auto___13605)){
args__8417__auto__.push((arguments[i__8411__auto___13606]));

var G__13607 = (i__8411__auto___13606 + (1));
i__8411__auto___13606 = G__13607;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8517__auto___13604))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8517__auto___13604){
return (function (args){
return cljs.core.deref.call(null,g__8517__auto___13604);
});})(g__8517__auto___13604))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__8517__auto___13604){
return (function (seq13565){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13565));
});})(g__8517__auto___13604))
;


var g__8517__auto___13608 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__8517__auto___13608){
return (function cljs$spec$gen$alpha$double(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13609 = arguments.length;
var i__8411__auto___13610 = (0);
while(true){
if((i__8411__auto___13610 < len__8410__auto___13609)){
args__8417__auto__.push((arguments[i__8411__auto___13610]));

var G__13611 = (i__8411__auto___13610 + (1));
i__8411__auto___13610 = G__13611;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8517__auto___13608))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8517__auto___13608){
return (function (args){
return cljs.core.deref.call(null,g__8517__auto___13608);
});})(g__8517__auto___13608))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__8517__auto___13608){
return (function (seq13566){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13566));
});})(g__8517__auto___13608))
;


var g__8517__auto___13612 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__8517__auto___13612){
return (function cljs$spec$gen$alpha$int(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13613 = arguments.length;
var i__8411__auto___13614 = (0);
while(true){
if((i__8411__auto___13614 < len__8410__auto___13613)){
args__8417__auto__.push((arguments[i__8411__auto___13614]));

var G__13615 = (i__8411__auto___13614 + (1));
i__8411__auto___13614 = G__13615;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8517__auto___13612))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8517__auto___13612){
return (function (args){
return cljs.core.deref.call(null,g__8517__auto___13612);
});})(g__8517__auto___13612))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__8517__auto___13612){
return (function (seq13567){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13567));
});})(g__8517__auto___13612))
;


var g__8517__auto___13616 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__8517__auto___13616){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13617 = arguments.length;
var i__8411__auto___13618 = (0);
while(true){
if((i__8411__auto___13618 < len__8410__auto___13617)){
args__8417__auto__.push((arguments[i__8411__auto___13618]));

var G__13619 = (i__8411__auto___13618 + (1));
i__8411__auto___13618 = G__13619;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8517__auto___13616))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8517__auto___13616){
return (function (args){
return cljs.core.deref.call(null,g__8517__auto___13616);
});})(g__8517__auto___13616))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__8517__auto___13616){
return (function (seq13568){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13568));
});})(g__8517__auto___13616))
;


var g__8517__auto___13620 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__8517__auto___13620){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13621 = arguments.length;
var i__8411__auto___13622 = (0);
while(true){
if((i__8411__auto___13622 < len__8410__auto___13621)){
args__8417__auto__.push((arguments[i__8411__auto___13622]));

var G__13623 = (i__8411__auto___13622 + (1));
i__8411__auto___13622 = G__13623;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8517__auto___13620))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8517__auto___13620){
return (function (args){
return cljs.core.deref.call(null,g__8517__auto___13620);
});})(g__8517__auto___13620))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__8517__auto___13620){
return (function (seq13569){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13569));
});})(g__8517__auto___13620))
;


var g__8517__auto___13624 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__8517__auto___13624){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13625 = arguments.length;
var i__8411__auto___13626 = (0);
while(true){
if((i__8411__auto___13626 < len__8410__auto___13625)){
args__8417__auto__.push((arguments[i__8411__auto___13626]));

var G__13627 = (i__8411__auto___13626 + (1));
i__8411__auto___13626 = G__13627;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8517__auto___13624))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8517__auto___13624){
return (function (args){
return cljs.core.deref.call(null,g__8517__auto___13624);
});})(g__8517__auto___13624))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__8517__auto___13624){
return (function (seq13570){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13570));
});})(g__8517__auto___13624))
;


var g__8517__auto___13628 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__8517__auto___13628){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13629 = arguments.length;
var i__8411__auto___13630 = (0);
while(true){
if((i__8411__auto___13630 < len__8410__auto___13629)){
args__8417__auto__.push((arguments[i__8411__auto___13630]));

var G__13631 = (i__8411__auto___13630 + (1));
i__8411__auto___13630 = G__13631;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8517__auto___13628))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8517__auto___13628){
return (function (args){
return cljs.core.deref.call(null,g__8517__auto___13628);
});})(g__8517__auto___13628))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__8517__auto___13628){
return (function (seq13571){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13571));
});})(g__8517__auto___13628))
;


var g__8517__auto___13632 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__8517__auto___13632){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13633 = arguments.length;
var i__8411__auto___13634 = (0);
while(true){
if((i__8411__auto___13634 < len__8410__auto___13633)){
args__8417__auto__.push((arguments[i__8411__auto___13634]));

var G__13635 = (i__8411__auto___13634 + (1));
i__8411__auto___13634 = G__13635;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8517__auto___13632))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8517__auto___13632){
return (function (args){
return cljs.core.deref.call(null,g__8517__auto___13632);
});})(g__8517__auto___13632))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__8517__auto___13632){
return (function (seq13572){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13572));
});})(g__8517__auto___13632))
;


var g__8517__auto___13636 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__8517__auto___13636){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13637 = arguments.length;
var i__8411__auto___13638 = (0);
while(true){
if((i__8411__auto___13638 < len__8410__auto___13637)){
args__8417__auto__.push((arguments[i__8411__auto___13638]));

var G__13639 = (i__8411__auto___13638 + (1));
i__8411__auto___13638 = G__13639;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8517__auto___13636))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8517__auto___13636){
return (function (args){
return cljs.core.deref.call(null,g__8517__auto___13636);
});})(g__8517__auto___13636))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__8517__auto___13636){
return (function (seq13573){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13573));
});})(g__8517__auto___13636))
;


var g__8517__auto___13640 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__8517__auto___13640){
return (function cljs$spec$gen$alpha$string(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13641 = arguments.length;
var i__8411__auto___13642 = (0);
while(true){
if((i__8411__auto___13642 < len__8410__auto___13641)){
args__8417__auto__.push((arguments[i__8411__auto___13642]));

var G__13643 = (i__8411__auto___13642 + (1));
i__8411__auto___13642 = G__13643;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8517__auto___13640))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8517__auto___13640){
return (function (args){
return cljs.core.deref.call(null,g__8517__auto___13640);
});})(g__8517__auto___13640))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__8517__auto___13640){
return (function (seq13574){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13574));
});})(g__8517__auto___13640))
;


var g__8517__auto___13644 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__8517__auto___13644){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13645 = arguments.length;
var i__8411__auto___13646 = (0);
while(true){
if((i__8411__auto___13646 < len__8410__auto___13645)){
args__8417__auto__.push((arguments[i__8411__auto___13646]));

var G__13647 = (i__8411__auto___13646 + (1));
i__8411__auto___13646 = G__13647;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8517__auto___13644))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8517__auto___13644){
return (function (args){
return cljs.core.deref.call(null,g__8517__auto___13644);
});})(g__8517__auto___13644))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__8517__auto___13644){
return (function (seq13575){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13575));
});})(g__8517__auto___13644))
;


var g__8517__auto___13648 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__8517__auto___13648){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13649 = arguments.length;
var i__8411__auto___13650 = (0);
while(true){
if((i__8411__auto___13650 < len__8410__auto___13649)){
args__8417__auto__.push((arguments[i__8411__auto___13650]));

var G__13651 = (i__8411__auto___13650 + (1));
i__8411__auto___13650 = G__13651;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8517__auto___13648))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8517__auto___13648){
return (function (args){
return cljs.core.deref.call(null,g__8517__auto___13648);
});})(g__8517__auto___13648))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__8517__auto___13648){
return (function (seq13576){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13576));
});})(g__8517__auto___13648))
;


var g__8517__auto___13652 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__8517__auto___13652){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13653 = arguments.length;
var i__8411__auto___13654 = (0);
while(true){
if((i__8411__auto___13654 < len__8410__auto___13653)){
args__8417__auto__.push((arguments[i__8411__auto___13654]));

var G__13655 = (i__8411__auto___13654 + (1));
i__8411__auto___13654 = G__13655;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8517__auto___13652))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8517__auto___13652){
return (function (args){
return cljs.core.deref.call(null,g__8517__auto___13652);
});})(g__8517__auto___13652))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__8517__auto___13652){
return (function (seq13577){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13577));
});})(g__8517__auto___13652))
;


var g__8517__auto___13656 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__8517__auto___13656){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13657 = arguments.length;
var i__8411__auto___13658 = (0);
while(true){
if((i__8411__auto___13658 < len__8410__auto___13657)){
args__8417__auto__.push((arguments[i__8411__auto___13658]));

var G__13659 = (i__8411__auto___13658 + (1));
i__8411__auto___13658 = G__13659;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8517__auto___13656))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8517__auto___13656){
return (function (args){
return cljs.core.deref.call(null,g__8517__auto___13656);
});})(g__8517__auto___13656))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__8517__auto___13656){
return (function (seq13578){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13578));
});})(g__8517__auto___13656))
;


var g__8517__auto___13660 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__8517__auto___13660){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13661 = arguments.length;
var i__8411__auto___13662 = (0);
while(true){
if((i__8411__auto___13662 < len__8410__auto___13661)){
args__8417__auto__.push((arguments[i__8411__auto___13662]));

var G__13663 = (i__8411__auto___13662 + (1));
i__8411__auto___13662 = G__13663;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});})(g__8517__auto___13660))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8517__auto___13660){
return (function (args){
return cljs.core.deref.call(null,g__8517__auto___13660);
});})(g__8517__auto___13660))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__8517__auto___13660){
return (function (seq13579){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13579));
});})(g__8517__auto___13660))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__8417__auto__ = [];
var len__8410__auto___13666 = arguments.length;
var i__8411__auto___13667 = (0);
while(true){
if((i__8411__auto___13667 < len__8410__auto___13666)){
args__8417__auto__.push((arguments[i__8411__auto___13667]));

var G__13668 = (i__8411__auto___13667 + (1));
i__8411__auto___13667 = G__13668;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((0) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8418__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__13664_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__13664_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq13665){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13665));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__13669_SHARP_){
return (new Date(p1__13669_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map