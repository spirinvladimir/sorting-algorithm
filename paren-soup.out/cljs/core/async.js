// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10691 = arguments.length;
switch (G__10691) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async10692 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10692 = (function (f,blockable,meta10693){
this.f = f;
this.blockable = blockable;
this.meta10693 = meta10693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10694,meta10693__$1){
var self__ = this;
var _10694__$1 = this;
return (new cljs.core.async.t_cljs$core$async10692(self__.f,self__.blockable,meta10693__$1));
});

cljs.core.async.t_cljs$core$async10692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10694){
var self__ = this;
var _10694__$1 = this;
return self__.meta10693;
});

cljs.core.async.t_cljs$core$async10692.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10692.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async10692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async10692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10693","meta10693",370595919,null)], null);
});

cljs.core.async.t_cljs$core$async10692.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10692";

cljs.core.async.t_cljs$core$async10692.cljs$lang$ctorPrWriter = (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async10692");
});

cljs.core.async.__GT_t_cljs$core$async10692 = (function cljs$core$async$__GT_t_cljs$core$async10692(f__$1,blockable__$1,meta10693){
return (new cljs.core.async.t_cljs$core$async10692(f__$1,blockable__$1,meta10693));
});

}

return (new cljs.core.async.t_cljs$core$async10692(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__10698 = arguments.length;
switch (G__10698) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__10701 = arguments.length;
switch (G__10701) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__10704 = arguments.length;
switch (G__10704) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_10706 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10706);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_10706,ret){
return (function (){
return fn1.call(null,val_10706);
});})(val_10706,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__10708 = arguments.length;
switch (G__10708) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8209__auto___10710 = n;
var x_10711 = (0);
while(true){
if((x_10711 < n__8209__auto___10710)){
(a[x_10711] = (0));

var G__10712 = (x_10711 + (1));
x_10711 = G__10712;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__10713 = (i + (1));
i = G__10713;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async10714 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10714 = (function (flag,meta10715){
this.flag = flag;
this.meta10715 = meta10715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10716,meta10715__$1){
var self__ = this;
var _10716__$1 = this;
return (new cljs.core.async.t_cljs$core$async10714(self__.flag,meta10715__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async10714.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10716){
var self__ = this;
var _10716__$1 = this;
return self__.meta10715;
});})(flag))
;

cljs.core.async.t_cljs$core$async10714.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10714.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async10714.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10714.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10714.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10715","meta10715",-594021759,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async10714.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10714";

cljs.core.async.t_cljs$core$async10714.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async10714");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async10714 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10714(flag__$1,meta10715){
return (new cljs.core.async.t_cljs$core$async10714(flag__$1,meta10715));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async10714(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async10717 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10717 = (function (flag,cb,meta10718){
this.flag = flag;
this.cb = cb;
this.meta10718 = meta10718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10719,meta10718__$1){
var self__ = this;
var _10719__$1 = this;
return (new cljs.core.async.t_cljs$core$async10717(self__.flag,self__.cb,meta10718__$1));
});

cljs.core.async.t_cljs$core$async10717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10719){
var self__ = this;
var _10719__$1 = this;
return self__.meta10718;
});

cljs.core.async.t_cljs$core$async10717.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10717.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async10717.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10717.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async10717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10718","meta10718",-1614195912,null)], null);
});

cljs.core.async.t_cljs$core$async10717.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10717";

cljs.core.async.t_cljs$core$async10717.cljs$lang$ctorPrWriter = (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async10717");
});

cljs.core.async.__GT_t_cljs$core$async10717 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10717(flag__$1,cb__$1,meta10718){
return (new cljs.core.async.t_cljs$core$async10717(flag__$1,cb__$1,meta10718));
});

}

return (new cljs.core.async.t_cljs$core$async10717(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10720_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10720_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10721_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10721_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7285__auto__ = wport;
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return port;
}
})()], null));
} else {
var G__10722 = (i + (1));
i = G__10722;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7285__auto__ = ret;
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__7273__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__7273__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__7273__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__8417__auto__ = [];
var len__8410__auto___10728 = arguments.length;
var i__8411__auto___10729 = (0);
while(true){
if((i__8411__auto___10729 < len__8410__auto___10728)){
args__8417__auto__.push((arguments[i__8411__auto___10729]));

var G__10730 = (i__8411__auto___10729 + (1));
i__8411__auto___10729 = G__10730;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((1) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8418__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10725){
var map__10726 = p__10725;
var map__10726__$1 = ((((!((map__10726 == null)))?((((map__10726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10726):map__10726);
var opts = map__10726__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10723){
var G__10724 = cljs.core.first.call(null,seq10723);
var seq10723__$1 = cljs.core.next.call(null,seq10723);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10724,seq10723__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__10732 = arguments.length;
switch (G__10732) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10645__auto___10778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10645__auto___10778){
return (function (){
var f__10646__auto__ = (function (){var switch__10557__auto__ = ((function (c__10645__auto___10778){
return (function (state_10756){
var state_val_10757 = (state_10756[(1)]);
if((state_val_10757 === (7))){
var inst_10752 = (state_10756[(2)]);
var state_10756__$1 = state_10756;
var statearr_10758_10779 = state_10756__$1;
(statearr_10758_10779[(2)] = inst_10752);

(statearr_10758_10779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10757 === (1))){
var state_10756__$1 = state_10756;
var statearr_10759_10780 = state_10756__$1;
(statearr_10759_10780[(2)] = null);

(statearr_10759_10780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10757 === (4))){
var inst_10735 = (state_10756[(7)]);
var inst_10735__$1 = (state_10756[(2)]);
var inst_10736 = (inst_10735__$1 == null);
var state_10756__$1 = (function (){var statearr_10760 = state_10756;
(statearr_10760[(7)] = inst_10735__$1);

return statearr_10760;
})();
if(cljs.core.truth_(inst_10736)){
var statearr_10761_10781 = state_10756__$1;
(statearr_10761_10781[(1)] = (5));

} else {
var statearr_10762_10782 = state_10756__$1;
(statearr_10762_10782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10757 === (13))){
var state_10756__$1 = state_10756;
var statearr_10763_10783 = state_10756__$1;
(statearr_10763_10783[(2)] = null);

(statearr_10763_10783[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10757 === (6))){
var inst_10735 = (state_10756[(7)]);
var state_10756__$1 = state_10756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10756__$1,(11),to,inst_10735);
} else {
if((state_val_10757 === (3))){
var inst_10754 = (state_10756[(2)]);
var state_10756__$1 = state_10756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10756__$1,inst_10754);
} else {
if((state_val_10757 === (12))){
var state_10756__$1 = state_10756;
var statearr_10764_10784 = state_10756__$1;
(statearr_10764_10784[(2)] = null);

(statearr_10764_10784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10757 === (2))){
var state_10756__$1 = state_10756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10756__$1,(4),from);
} else {
if((state_val_10757 === (11))){
var inst_10745 = (state_10756[(2)]);
var state_10756__$1 = state_10756;
if(cljs.core.truth_(inst_10745)){
var statearr_10765_10785 = state_10756__$1;
(statearr_10765_10785[(1)] = (12));

} else {
var statearr_10766_10786 = state_10756__$1;
(statearr_10766_10786[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10757 === (9))){
var state_10756__$1 = state_10756;
var statearr_10767_10787 = state_10756__$1;
(statearr_10767_10787[(2)] = null);

(statearr_10767_10787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10757 === (5))){
var state_10756__$1 = state_10756;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10768_10788 = state_10756__$1;
(statearr_10768_10788[(1)] = (8));

} else {
var statearr_10769_10789 = state_10756__$1;
(statearr_10769_10789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10757 === (14))){
var inst_10750 = (state_10756[(2)]);
var state_10756__$1 = state_10756;
var statearr_10770_10790 = state_10756__$1;
(statearr_10770_10790[(2)] = inst_10750);

(statearr_10770_10790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10757 === (10))){
var inst_10742 = (state_10756[(2)]);
var state_10756__$1 = state_10756;
var statearr_10771_10791 = state_10756__$1;
(statearr_10771_10791[(2)] = inst_10742);

(statearr_10771_10791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10757 === (8))){
var inst_10739 = cljs.core.async.close_BANG_.call(null,to);
var state_10756__$1 = state_10756;
var statearr_10772_10792 = state_10756__$1;
(statearr_10772_10792[(2)] = inst_10739);

(statearr_10772_10792[(1)] = (10));


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
});})(c__10645__auto___10778))
;
return ((function (switch__10557__auto__,c__10645__auto___10778){
return (function() {
var cljs$core$async$state_machine__10558__auto__ = null;
var cljs$core$async$state_machine__10558__auto____0 = (function (){
var statearr_10773 = [null,null,null,null,null,null,null,null];
(statearr_10773[(0)] = cljs$core$async$state_machine__10558__auto__);

(statearr_10773[(1)] = (1));

return statearr_10773;
});
var cljs$core$async$state_machine__10558__auto____1 = (function (state_10756){
while(true){
var ret_value__10559__auto__ = (function (){try{while(true){
var result__10560__auto__ = switch__10557__auto__.call(null,state_10756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10560__auto__;
}
break;
}
}catch (e10774){if((e10774 instanceof Object)){
var ex__10561__auto__ = e10774;
var statearr_10775_10793 = state_10756;
(statearr_10775_10793[(5)] = ex__10561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10794 = state_10756;
state_10756 = G__10794;
continue;
} else {
return ret_value__10559__auto__;
}
break;
}
});
cljs$core$async$state_machine__10558__auto__ = function(state_10756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10558__auto____1.call(this,state_10756);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10558__auto____0;
cljs$core$async$state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10558__auto____1;
return cljs$core$async$state_machine__10558__auto__;
})()
;})(switch__10557__auto__,c__10645__auto___10778))
})();
var state__10647__auto__ = (function (){var statearr_10776 = f__10646__auto__.call(null);
(statearr_10776[(6)] = c__10645__auto___10778);

return statearr_10776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10647__auto__);
});})(c__10645__auto___10778))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__10795){
var vec__10796 = p__10795;
var v = cljs.core.nth.call(null,vec__10796,(0),null);
var p = cljs.core.nth.call(null,vec__10796,(1),null);
var job = vec__10796;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10645__auto___10967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10645__auto___10967,res,vec__10796,v,p,job,jobs,results){
return (function (){
var f__10646__auto__ = (function (){var switch__10557__auto__ = ((function (c__10645__auto___10967,res,vec__10796,v,p,job,jobs,results){
return (function (state_10803){
var state_val_10804 = (state_10803[(1)]);
if((state_val_10804 === (1))){
var state_10803__$1 = state_10803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10803__$1,(2),res,v);
} else {
if((state_val_10804 === (2))){
var inst_10800 = (state_10803[(2)]);
var inst_10801 = cljs.core.async.close_BANG_.call(null,res);
var state_10803__$1 = (function (){var statearr_10805 = state_10803;
(statearr_10805[(7)] = inst_10800);

return statearr_10805;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10803__$1,inst_10801);
} else {
return null;
}
}
});})(c__10645__auto___10967,res,vec__10796,v,p,job,jobs,results))
;
return ((function (switch__10557__auto__,c__10645__auto___10967,res,vec__10796,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____0 = (function (){
var statearr_10806 = [null,null,null,null,null,null,null,null];
(statearr_10806[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__);

(statearr_10806[(1)] = (1));

return statearr_10806;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____1 = (function (state_10803){
while(true){
var ret_value__10559__auto__ = (function (){try{while(true){
var result__10560__auto__ = switch__10557__auto__.call(null,state_10803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10560__auto__;
}
break;
}
}catch (e10807){if((e10807 instanceof Object)){
var ex__10561__auto__ = e10807;
var statearr_10808_10968 = state_10803;
(statearr_10808_10968[(5)] = ex__10561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10969 = state_10803;
state_10803 = G__10969;
continue;
} else {
return ret_value__10559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__ = function(state_10803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____1.call(this,state_10803);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__;
})()
;})(switch__10557__auto__,c__10645__auto___10967,res,vec__10796,v,p,job,jobs,results))
})();
var state__10647__auto__ = (function (){var statearr_10809 = f__10646__auto__.call(null);
(statearr_10809[(6)] = c__10645__auto___10967);

return statearr_10809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10647__auto__);
});})(c__10645__auto___10967,res,vec__10796,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10810){
var vec__10811 = p__10810;
var v = cljs.core.nth.call(null,vec__10811,(0),null);
var p = cljs.core.nth.call(null,vec__10811,(1),null);
var job = vec__10811;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__8209__auto___10970 = n;
var __10971 = (0);
while(true){
if((__10971 < n__8209__auto___10970)){
var G__10814_10972 = type;
var G__10814_10973__$1 = (((G__10814_10972 instanceof cljs.core.Keyword))?G__10814_10972.fqn:null);
switch (G__10814_10973__$1) {
case "compute":
var c__10645__auto___10975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10971,c__10645__auto___10975,G__10814_10972,G__10814_10973__$1,n__8209__auto___10970,jobs,results,process,async){
return (function (){
var f__10646__auto__ = (function (){var switch__10557__auto__ = ((function (__10971,c__10645__auto___10975,G__10814_10972,G__10814_10973__$1,n__8209__auto___10970,jobs,results,process,async){
return (function (state_10827){
var state_val_10828 = (state_10827[(1)]);
if((state_val_10828 === (1))){
var state_10827__$1 = state_10827;
var statearr_10829_10976 = state_10827__$1;
(statearr_10829_10976[(2)] = null);

(statearr_10829_10976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10828 === (2))){
var state_10827__$1 = state_10827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10827__$1,(4),jobs);
} else {
if((state_val_10828 === (3))){
var inst_10825 = (state_10827[(2)]);
var state_10827__$1 = state_10827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10827__$1,inst_10825);
} else {
if((state_val_10828 === (4))){
var inst_10817 = (state_10827[(2)]);
var inst_10818 = process.call(null,inst_10817);
var state_10827__$1 = state_10827;
if(cljs.core.truth_(inst_10818)){
var statearr_10830_10977 = state_10827__$1;
(statearr_10830_10977[(1)] = (5));

} else {
var statearr_10831_10978 = state_10827__$1;
(statearr_10831_10978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10828 === (5))){
var state_10827__$1 = state_10827;
var statearr_10832_10979 = state_10827__$1;
(statearr_10832_10979[(2)] = null);

(statearr_10832_10979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10828 === (6))){
var state_10827__$1 = state_10827;
var statearr_10833_10980 = state_10827__$1;
(statearr_10833_10980[(2)] = null);

(statearr_10833_10980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10828 === (7))){
var inst_10823 = (state_10827[(2)]);
var state_10827__$1 = state_10827;
var statearr_10834_10981 = state_10827__$1;
(statearr_10834_10981[(2)] = inst_10823);

(statearr_10834_10981[(1)] = (3));


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
});})(__10971,c__10645__auto___10975,G__10814_10972,G__10814_10973__$1,n__8209__auto___10970,jobs,results,process,async))
;
return ((function (__10971,switch__10557__auto__,c__10645__auto___10975,G__10814_10972,G__10814_10973__$1,n__8209__auto___10970,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____0 = (function (){
var statearr_10835 = [null,null,null,null,null,null,null];
(statearr_10835[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__);

(statearr_10835[(1)] = (1));

return statearr_10835;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____1 = (function (state_10827){
while(true){
var ret_value__10559__auto__ = (function (){try{while(true){
var result__10560__auto__ = switch__10557__auto__.call(null,state_10827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10560__auto__;
}
break;
}
}catch (e10836){if((e10836 instanceof Object)){
var ex__10561__auto__ = e10836;
var statearr_10837_10982 = state_10827;
(statearr_10837_10982[(5)] = ex__10561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10983 = state_10827;
state_10827 = G__10983;
continue;
} else {
return ret_value__10559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__ = function(state_10827){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____1.call(this,state_10827);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__;
})()
;})(__10971,switch__10557__auto__,c__10645__auto___10975,G__10814_10972,G__10814_10973__$1,n__8209__auto___10970,jobs,results,process,async))
})();
var state__10647__auto__ = (function (){var statearr_10838 = f__10646__auto__.call(null);
(statearr_10838[(6)] = c__10645__auto___10975);

return statearr_10838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10647__auto__);
});})(__10971,c__10645__auto___10975,G__10814_10972,G__10814_10973__$1,n__8209__auto___10970,jobs,results,process,async))
);


break;
case "async":
var c__10645__auto___10984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10971,c__10645__auto___10984,G__10814_10972,G__10814_10973__$1,n__8209__auto___10970,jobs,results,process,async){
return (function (){
var f__10646__auto__ = (function (){var switch__10557__auto__ = ((function (__10971,c__10645__auto___10984,G__10814_10972,G__10814_10973__$1,n__8209__auto___10970,jobs,results,process,async){
return (function (state_10851){
var state_val_10852 = (state_10851[(1)]);
if((state_val_10852 === (1))){
var state_10851__$1 = state_10851;
var statearr_10853_10985 = state_10851__$1;
(statearr_10853_10985[(2)] = null);

(statearr_10853_10985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10852 === (2))){
var state_10851__$1 = state_10851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10851__$1,(4),jobs);
} else {
if((state_val_10852 === (3))){
var inst_10849 = (state_10851[(2)]);
var state_10851__$1 = state_10851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10851__$1,inst_10849);
} else {
if((state_val_10852 === (4))){
var inst_10841 = (state_10851[(2)]);
var inst_10842 = async.call(null,inst_10841);
var state_10851__$1 = state_10851;
if(cljs.core.truth_(inst_10842)){
var statearr_10854_10986 = state_10851__$1;
(statearr_10854_10986[(1)] = (5));

} else {
var statearr_10855_10987 = state_10851__$1;
(statearr_10855_10987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10852 === (5))){
var state_10851__$1 = state_10851;
var statearr_10856_10988 = state_10851__$1;
(statearr_10856_10988[(2)] = null);

(statearr_10856_10988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10852 === (6))){
var state_10851__$1 = state_10851;
var statearr_10857_10989 = state_10851__$1;
(statearr_10857_10989[(2)] = null);

(statearr_10857_10989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10852 === (7))){
var inst_10847 = (state_10851[(2)]);
var state_10851__$1 = state_10851;
var statearr_10858_10990 = state_10851__$1;
(statearr_10858_10990[(2)] = inst_10847);

(statearr_10858_10990[(1)] = (3));


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
});})(__10971,c__10645__auto___10984,G__10814_10972,G__10814_10973__$1,n__8209__auto___10970,jobs,results,process,async))
;
return ((function (__10971,switch__10557__auto__,c__10645__auto___10984,G__10814_10972,G__10814_10973__$1,n__8209__auto___10970,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____0 = (function (){
var statearr_10859 = [null,null,null,null,null,null,null];
(statearr_10859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__);

(statearr_10859[(1)] = (1));

return statearr_10859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____1 = (function (state_10851){
while(true){
var ret_value__10559__auto__ = (function (){try{while(true){
var result__10560__auto__ = switch__10557__auto__.call(null,state_10851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10560__auto__;
}
break;
}
}catch (e10860){if((e10860 instanceof Object)){
var ex__10561__auto__ = e10860;
var statearr_10861_10991 = state_10851;
(statearr_10861_10991[(5)] = ex__10561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10992 = state_10851;
state_10851 = G__10992;
continue;
} else {
return ret_value__10559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__ = function(state_10851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____1.call(this,state_10851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__;
})()
;})(__10971,switch__10557__auto__,c__10645__auto___10984,G__10814_10972,G__10814_10973__$1,n__8209__auto___10970,jobs,results,process,async))
})();
var state__10647__auto__ = (function (){var statearr_10862 = f__10646__auto__.call(null);
(statearr_10862[(6)] = c__10645__auto___10984);

return statearr_10862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10647__auto__);
});})(__10971,c__10645__auto___10984,G__10814_10972,G__10814_10973__$1,n__8209__auto___10970,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10814_10973__$1)].join('')));

}

var G__10993 = (__10971 + (1));
__10971 = G__10993;
continue;
} else {
}
break;
}

var c__10645__auto___10994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10645__auto___10994,jobs,results,process,async){
return (function (){
var f__10646__auto__ = (function (){var switch__10557__auto__ = ((function (c__10645__auto___10994,jobs,results,process,async){
return (function (state_10884){
var state_val_10885 = (state_10884[(1)]);
if((state_val_10885 === (1))){
var state_10884__$1 = state_10884;
var statearr_10886_10995 = state_10884__$1;
(statearr_10886_10995[(2)] = null);

(statearr_10886_10995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10885 === (2))){
var state_10884__$1 = state_10884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10884__$1,(4),from);
} else {
if((state_val_10885 === (3))){
var inst_10882 = (state_10884[(2)]);
var state_10884__$1 = state_10884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10884__$1,inst_10882);
} else {
if((state_val_10885 === (4))){
var inst_10865 = (state_10884[(7)]);
var inst_10865__$1 = (state_10884[(2)]);
var inst_10866 = (inst_10865__$1 == null);
var state_10884__$1 = (function (){var statearr_10887 = state_10884;
(statearr_10887[(7)] = inst_10865__$1);

return statearr_10887;
})();
if(cljs.core.truth_(inst_10866)){
var statearr_10888_10996 = state_10884__$1;
(statearr_10888_10996[(1)] = (5));

} else {
var statearr_10889_10997 = state_10884__$1;
(statearr_10889_10997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10885 === (5))){
var inst_10868 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10884__$1 = state_10884;
var statearr_10890_10998 = state_10884__$1;
(statearr_10890_10998[(2)] = inst_10868);

(statearr_10890_10998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10885 === (6))){
var inst_10865 = (state_10884[(7)]);
var inst_10870 = (state_10884[(8)]);
var inst_10870__$1 = cljs.core.async.chan.call(null,(1));
var inst_10871 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10872 = [inst_10865,inst_10870__$1];
var inst_10873 = (new cljs.core.PersistentVector(null,2,(5),inst_10871,inst_10872,null));
var state_10884__$1 = (function (){var statearr_10891 = state_10884;
(statearr_10891[(8)] = inst_10870__$1);

return statearr_10891;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10884__$1,(8),jobs,inst_10873);
} else {
if((state_val_10885 === (7))){
var inst_10880 = (state_10884[(2)]);
var state_10884__$1 = state_10884;
var statearr_10892_10999 = state_10884__$1;
(statearr_10892_10999[(2)] = inst_10880);

(statearr_10892_10999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10885 === (8))){
var inst_10870 = (state_10884[(8)]);
var inst_10875 = (state_10884[(2)]);
var state_10884__$1 = (function (){var statearr_10893 = state_10884;
(statearr_10893[(9)] = inst_10875);

return statearr_10893;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10884__$1,(9),results,inst_10870);
} else {
if((state_val_10885 === (9))){
var inst_10877 = (state_10884[(2)]);
var state_10884__$1 = (function (){var statearr_10894 = state_10884;
(statearr_10894[(10)] = inst_10877);

return statearr_10894;
})();
var statearr_10895_11000 = state_10884__$1;
(statearr_10895_11000[(2)] = null);

(statearr_10895_11000[(1)] = (2));


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
});})(c__10645__auto___10994,jobs,results,process,async))
;
return ((function (switch__10557__auto__,c__10645__auto___10994,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____0 = (function (){
var statearr_10896 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10896[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__);

(statearr_10896[(1)] = (1));

return statearr_10896;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____1 = (function (state_10884){
while(true){
var ret_value__10559__auto__ = (function (){try{while(true){
var result__10560__auto__ = switch__10557__auto__.call(null,state_10884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10560__auto__;
}
break;
}
}catch (e10897){if((e10897 instanceof Object)){
var ex__10561__auto__ = e10897;
var statearr_10898_11001 = state_10884;
(statearr_10898_11001[(5)] = ex__10561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11002 = state_10884;
state_10884 = G__11002;
continue;
} else {
return ret_value__10559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__ = function(state_10884){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____1.call(this,state_10884);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__;
})()
;})(switch__10557__auto__,c__10645__auto___10994,jobs,results,process,async))
})();
var state__10647__auto__ = (function (){var statearr_10899 = f__10646__auto__.call(null);
(statearr_10899[(6)] = c__10645__auto___10994);

return statearr_10899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10647__auto__);
});})(c__10645__auto___10994,jobs,results,process,async))
);


var c__10645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10645__auto__,jobs,results,process,async){
return (function (){
var f__10646__auto__ = (function (){var switch__10557__auto__ = ((function (c__10645__auto__,jobs,results,process,async){
return (function (state_10937){
var state_val_10938 = (state_10937[(1)]);
if((state_val_10938 === (7))){
var inst_10933 = (state_10937[(2)]);
var state_10937__$1 = state_10937;
var statearr_10939_11003 = state_10937__$1;
(statearr_10939_11003[(2)] = inst_10933);

(statearr_10939_11003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (20))){
var state_10937__$1 = state_10937;
var statearr_10940_11004 = state_10937__$1;
(statearr_10940_11004[(2)] = null);

(statearr_10940_11004[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (1))){
var state_10937__$1 = state_10937;
var statearr_10941_11005 = state_10937__$1;
(statearr_10941_11005[(2)] = null);

(statearr_10941_11005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (4))){
var inst_10902 = (state_10937[(7)]);
var inst_10902__$1 = (state_10937[(2)]);
var inst_10903 = (inst_10902__$1 == null);
var state_10937__$1 = (function (){var statearr_10942 = state_10937;
(statearr_10942[(7)] = inst_10902__$1);

return statearr_10942;
})();
if(cljs.core.truth_(inst_10903)){
var statearr_10943_11006 = state_10937__$1;
(statearr_10943_11006[(1)] = (5));

} else {
var statearr_10944_11007 = state_10937__$1;
(statearr_10944_11007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (15))){
var inst_10915 = (state_10937[(8)]);
var state_10937__$1 = state_10937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10937__$1,(18),to,inst_10915);
} else {
if((state_val_10938 === (21))){
var inst_10928 = (state_10937[(2)]);
var state_10937__$1 = state_10937;
var statearr_10945_11008 = state_10937__$1;
(statearr_10945_11008[(2)] = inst_10928);

(statearr_10945_11008[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (13))){
var inst_10930 = (state_10937[(2)]);
var state_10937__$1 = (function (){var statearr_10946 = state_10937;
(statearr_10946[(9)] = inst_10930);

return statearr_10946;
})();
var statearr_10947_11009 = state_10937__$1;
(statearr_10947_11009[(2)] = null);

(statearr_10947_11009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (6))){
var inst_10902 = (state_10937[(7)]);
var state_10937__$1 = state_10937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10937__$1,(11),inst_10902);
} else {
if((state_val_10938 === (17))){
var inst_10923 = (state_10937[(2)]);
var state_10937__$1 = state_10937;
if(cljs.core.truth_(inst_10923)){
var statearr_10948_11010 = state_10937__$1;
(statearr_10948_11010[(1)] = (19));

} else {
var statearr_10949_11011 = state_10937__$1;
(statearr_10949_11011[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (3))){
var inst_10935 = (state_10937[(2)]);
var state_10937__$1 = state_10937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10937__$1,inst_10935);
} else {
if((state_val_10938 === (12))){
var inst_10912 = (state_10937[(10)]);
var state_10937__$1 = state_10937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10937__$1,(14),inst_10912);
} else {
if((state_val_10938 === (2))){
var state_10937__$1 = state_10937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10937__$1,(4),results);
} else {
if((state_val_10938 === (19))){
var state_10937__$1 = state_10937;
var statearr_10950_11012 = state_10937__$1;
(statearr_10950_11012[(2)] = null);

(statearr_10950_11012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (11))){
var inst_10912 = (state_10937[(2)]);
var state_10937__$1 = (function (){var statearr_10951 = state_10937;
(statearr_10951[(10)] = inst_10912);

return statearr_10951;
})();
var statearr_10952_11013 = state_10937__$1;
(statearr_10952_11013[(2)] = null);

(statearr_10952_11013[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (9))){
var state_10937__$1 = state_10937;
var statearr_10953_11014 = state_10937__$1;
(statearr_10953_11014[(2)] = null);

(statearr_10953_11014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (5))){
var state_10937__$1 = state_10937;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10954_11015 = state_10937__$1;
(statearr_10954_11015[(1)] = (8));

} else {
var statearr_10955_11016 = state_10937__$1;
(statearr_10955_11016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (14))){
var inst_10917 = (state_10937[(11)]);
var inst_10915 = (state_10937[(8)]);
var inst_10915__$1 = (state_10937[(2)]);
var inst_10916 = (inst_10915__$1 == null);
var inst_10917__$1 = cljs.core.not.call(null,inst_10916);
var state_10937__$1 = (function (){var statearr_10956 = state_10937;
(statearr_10956[(11)] = inst_10917__$1);

(statearr_10956[(8)] = inst_10915__$1);

return statearr_10956;
})();
if(inst_10917__$1){
var statearr_10957_11017 = state_10937__$1;
(statearr_10957_11017[(1)] = (15));

} else {
var statearr_10958_11018 = state_10937__$1;
(statearr_10958_11018[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (16))){
var inst_10917 = (state_10937[(11)]);
var state_10937__$1 = state_10937;
var statearr_10959_11019 = state_10937__$1;
(statearr_10959_11019[(2)] = inst_10917);

(statearr_10959_11019[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (10))){
var inst_10909 = (state_10937[(2)]);
var state_10937__$1 = state_10937;
var statearr_10960_11020 = state_10937__$1;
(statearr_10960_11020[(2)] = inst_10909);

(statearr_10960_11020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (18))){
var inst_10920 = (state_10937[(2)]);
var state_10937__$1 = state_10937;
var statearr_10961_11021 = state_10937__$1;
(statearr_10961_11021[(2)] = inst_10920);

(statearr_10961_11021[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10938 === (8))){
var inst_10906 = cljs.core.async.close_BANG_.call(null,to);
var state_10937__$1 = state_10937;
var statearr_10962_11022 = state_10937__$1;
(statearr_10962_11022[(2)] = inst_10906);

(statearr_10962_11022[(1)] = (10));


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
});})(c__10645__auto__,jobs,results,process,async))
;
return ((function (switch__10557__auto__,c__10645__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____0 = (function (){
var statearr_10963 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__);

(statearr_10963[(1)] = (1));

return statearr_10963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____1 = (function (state_10937){
while(true){
var ret_value__10559__auto__ = (function (){try{while(true){
var result__10560__auto__ = switch__10557__auto__.call(null,state_10937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10560__auto__;
}
break;
}
}catch (e10964){if((e10964 instanceof Object)){
var ex__10561__auto__ = e10964;
var statearr_10965_11023 = state_10937;
(statearr_10965_11023[(5)] = ex__10561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11024 = state_10937;
state_10937 = G__11024;
continue;
} else {
return ret_value__10559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__ = function(state_10937){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____1.call(this,state_10937);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10558__auto__;
})()
;})(switch__10557__auto__,c__10645__auto__,jobs,results,process,async))
})();
var state__10647__auto__ = (function (){var statearr_10966 = f__10646__auto__.call(null);
(statearr_10966[(6)] = c__10645__auto__);

return statearr_10966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10647__auto__);
});})(c__10645__auto__,jobs,results,process,async))
);

return c__10645__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__11026 = arguments.length;
switch (G__11026) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__11029 = arguments.length;
switch (G__11029) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__11032 = arguments.length;
switch (G__11032) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10645__auto___11081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10645__auto___11081,tc,fc){
return (function (){
var f__10646__auto__ = (function (){var switch__10557__auto__ = ((function (c__10645__auto___11081,tc,fc){
return (function (state_11058){
var state_val_11059 = (state_11058[(1)]);
if((state_val_11059 === (7))){
var inst_11054 = (state_11058[(2)]);
var state_11058__$1 = state_11058;
var statearr_11060_11082 = state_11058__$1;
(statearr_11060_11082[(2)] = inst_11054);

(statearr_11060_11082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11059 === (1))){
var state_11058__$1 = state_11058;
var statearr_11061_11083 = state_11058__$1;
(statearr_11061_11083[(2)] = null);

(statearr_11061_11083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11059 === (4))){
var inst_11035 = (state_11058[(7)]);
var inst_11035__$1 = (state_11058[(2)]);
var inst_11036 = (inst_11035__$1 == null);
var state_11058__$1 = (function (){var statearr_11062 = state_11058;
(statearr_11062[(7)] = inst_11035__$1);

return statearr_11062;
})();
if(cljs.core.truth_(inst_11036)){
var statearr_11063_11084 = state_11058__$1;
(statearr_11063_11084[(1)] = (5));

} else {
var statearr_11064_11085 = state_11058__$1;
(statearr_11064_11085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11059 === (13))){
var state_11058__$1 = state_11058;
var statearr_11065_11086 = state_11058__$1;
(statearr_11065_11086[(2)] = null);

(statearr_11065_11086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11059 === (6))){
var inst_11035 = (state_11058[(7)]);
var inst_11041 = p.call(null,inst_11035);
var state_11058__$1 = state_11058;
if(cljs.core.truth_(inst_11041)){
var statearr_11066_11087 = state_11058__$1;
(statearr_11066_11087[(1)] = (9));

} else {
var statearr_11067_11088 = state_11058__$1;
(statearr_11067_11088[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11059 === (3))){
var inst_11056 = (state_11058[(2)]);
var state_11058__$1 = state_11058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11058__$1,inst_11056);
} else {
if((state_val_11059 === (12))){
var state_11058__$1 = state_11058;
var statearr_11068_11089 = state_11058__$1;
(statearr_11068_11089[(2)] = null);

(statearr_11068_11089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11059 === (2))){
var state_11058__$1 = state_11058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11058__$1,(4),ch);
} else {
if((state_val_11059 === (11))){
var inst_11035 = (state_11058[(7)]);
var inst_11045 = (state_11058[(2)]);
var state_11058__$1 = state_11058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11058__$1,(8),inst_11045,inst_11035);
} else {
if((state_val_11059 === (9))){
var state_11058__$1 = state_11058;
var statearr_11069_11090 = state_11058__$1;
(statearr_11069_11090[(2)] = tc);

(statearr_11069_11090[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11059 === (5))){
var inst_11038 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11039 = cljs.core.async.close_BANG_.call(null,fc);
var state_11058__$1 = (function (){var statearr_11070 = state_11058;
(statearr_11070[(8)] = inst_11038);

return statearr_11070;
})();
var statearr_11071_11091 = state_11058__$1;
(statearr_11071_11091[(2)] = inst_11039);

(statearr_11071_11091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11059 === (14))){
var inst_11052 = (state_11058[(2)]);
var state_11058__$1 = state_11058;
var statearr_11072_11092 = state_11058__$1;
(statearr_11072_11092[(2)] = inst_11052);

(statearr_11072_11092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11059 === (10))){
var state_11058__$1 = state_11058;
var statearr_11073_11093 = state_11058__$1;
(statearr_11073_11093[(2)] = fc);

(statearr_11073_11093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11059 === (8))){
var inst_11047 = (state_11058[(2)]);
var state_11058__$1 = state_11058;
if(cljs.core.truth_(inst_11047)){
var statearr_11074_11094 = state_11058__$1;
(statearr_11074_11094[(1)] = (12));

} else {
var statearr_11075_11095 = state_11058__$1;
(statearr_11075_11095[(1)] = (13));

}

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
});})(c__10645__auto___11081,tc,fc))
;
return ((function (switch__10557__auto__,c__10645__auto___11081,tc,fc){
return (function() {
var cljs$core$async$state_machine__10558__auto__ = null;
var cljs$core$async$state_machine__10558__auto____0 = (function (){
var statearr_11076 = [null,null,null,null,null,null,null,null,null];
(statearr_11076[(0)] = cljs$core$async$state_machine__10558__auto__);

(statearr_11076[(1)] = (1));

return statearr_11076;
});
var cljs$core$async$state_machine__10558__auto____1 = (function (state_11058){
while(true){
var ret_value__10559__auto__ = (function (){try{while(true){
var result__10560__auto__ = switch__10557__auto__.call(null,state_11058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10560__auto__;
}
break;
}
}catch (e11077){if((e11077 instanceof Object)){
var ex__10561__auto__ = e11077;
var statearr_11078_11096 = state_11058;
(statearr_11078_11096[(5)] = ex__10561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11097 = state_11058;
state_11058 = G__11097;
continue;
} else {
return ret_value__10559__auto__;
}
break;
}
});
cljs$core$async$state_machine__10558__auto__ = function(state_11058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10558__auto____1.call(this,state_11058);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10558__auto____0;
cljs$core$async$state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10558__auto____1;
return cljs$core$async$state_machine__10558__auto__;
})()
;})(switch__10557__auto__,c__10645__auto___11081,tc,fc))
})();
var state__10647__auto__ = (function (){var statearr_11079 = f__10646__auto__.call(null);
(statearr_11079[(6)] = c__10645__auto___11081);

return statearr_11079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10647__auto__);
});})(c__10645__auto___11081,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__10645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10645__auto__){
return (function (){
var f__10646__auto__ = (function (){var switch__10557__auto__ = ((function (c__10645__auto__){
return (function (state_11118){
var state_val_11119 = (state_11118[(1)]);
if((state_val_11119 === (7))){
var inst_11114 = (state_11118[(2)]);
var state_11118__$1 = state_11118;
var statearr_11120_11138 = state_11118__$1;
(statearr_11120_11138[(2)] = inst_11114);

(statearr_11120_11138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (1))){
var inst_11098 = init;
var state_11118__$1 = (function (){var statearr_11121 = state_11118;
(statearr_11121[(7)] = inst_11098);

return statearr_11121;
})();
var statearr_11122_11139 = state_11118__$1;
(statearr_11122_11139[(2)] = null);

(statearr_11122_11139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (4))){
var inst_11101 = (state_11118[(8)]);
var inst_11101__$1 = (state_11118[(2)]);
var inst_11102 = (inst_11101__$1 == null);
var state_11118__$1 = (function (){var statearr_11123 = state_11118;
(statearr_11123[(8)] = inst_11101__$1);

return statearr_11123;
})();
if(cljs.core.truth_(inst_11102)){
var statearr_11124_11140 = state_11118__$1;
(statearr_11124_11140[(1)] = (5));

} else {
var statearr_11125_11141 = state_11118__$1;
(statearr_11125_11141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (6))){
var inst_11101 = (state_11118[(8)]);
var inst_11105 = (state_11118[(9)]);
var inst_11098 = (state_11118[(7)]);
var inst_11105__$1 = f.call(null,inst_11098,inst_11101);
var inst_11106 = cljs.core.reduced_QMARK_.call(null,inst_11105__$1);
var state_11118__$1 = (function (){var statearr_11126 = state_11118;
(statearr_11126[(9)] = inst_11105__$1);

return statearr_11126;
})();
if(inst_11106){
var statearr_11127_11142 = state_11118__$1;
(statearr_11127_11142[(1)] = (8));

} else {
var statearr_11128_11143 = state_11118__$1;
(statearr_11128_11143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (3))){
var inst_11116 = (state_11118[(2)]);
var state_11118__$1 = state_11118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11118__$1,inst_11116);
} else {
if((state_val_11119 === (2))){
var state_11118__$1 = state_11118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11118__$1,(4),ch);
} else {
if((state_val_11119 === (9))){
var inst_11105 = (state_11118[(9)]);
var inst_11098 = inst_11105;
var state_11118__$1 = (function (){var statearr_11129 = state_11118;
(statearr_11129[(7)] = inst_11098);

return statearr_11129;
})();
var statearr_11130_11144 = state_11118__$1;
(statearr_11130_11144[(2)] = null);

(statearr_11130_11144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (5))){
var inst_11098 = (state_11118[(7)]);
var state_11118__$1 = state_11118;
var statearr_11131_11145 = state_11118__$1;
(statearr_11131_11145[(2)] = inst_11098);

(statearr_11131_11145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (10))){
var inst_11112 = (state_11118[(2)]);
var state_11118__$1 = state_11118;
var statearr_11132_11146 = state_11118__$1;
(statearr_11132_11146[(2)] = inst_11112);

(statearr_11132_11146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11119 === (8))){
var inst_11105 = (state_11118[(9)]);
var inst_11108 = cljs.core.deref.call(null,inst_11105);
var state_11118__$1 = state_11118;
var statearr_11133_11147 = state_11118__$1;
(statearr_11133_11147[(2)] = inst_11108);

(statearr_11133_11147[(1)] = (10));


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
});})(c__10645__auto__))
;
return ((function (switch__10557__auto__,c__10645__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10558__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10558__auto____0 = (function (){
var statearr_11134 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11134[(0)] = cljs$core$async$reduce_$_state_machine__10558__auto__);

(statearr_11134[(1)] = (1));

return statearr_11134;
});
var cljs$core$async$reduce_$_state_machine__10558__auto____1 = (function (state_11118){
while(true){
var ret_value__10559__auto__ = (function (){try{while(true){
var result__10560__auto__ = switch__10557__auto__.call(null,state_11118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10560__auto__;
}
break;
}
}catch (e11135){if((e11135 instanceof Object)){
var ex__10561__auto__ = e11135;
var statearr_11136_11148 = state_11118;
(statearr_11136_11148[(5)] = ex__10561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11149 = state_11118;
state_11118 = G__11149;
continue;
} else {
return ret_value__10559__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10558__auto__ = function(state_11118){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10558__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10558__auto____1.call(this,state_11118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10558__auto____0;
cljs$core$async$reduce_$_state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10558__auto____1;
return cljs$core$async$reduce_$_state_machine__10558__auto__;
})()
;})(switch__10557__auto__,c__10645__auto__))
})();
var state__10647__auto__ = (function (){var statearr_11137 = f__10646__auto__.call(null);
(statearr_11137[(6)] = c__10645__auto__);

return statearr_11137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10647__auto__);
});})(c__10645__auto__))
);

return c__10645__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__10645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10645__auto__,f__$1){
return (function (){
var f__10646__auto__ = (function (){var switch__10557__auto__ = ((function (c__10645__auto__,f__$1){
return (function (state_11155){
var state_val_11156 = (state_11155[(1)]);
if((state_val_11156 === (1))){
var inst_11150 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_11155__$1 = state_11155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11155__$1,(2),inst_11150);
} else {
if((state_val_11156 === (2))){
var inst_11152 = (state_11155[(2)]);
var inst_11153 = f__$1.call(null,inst_11152);
var state_11155__$1 = state_11155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11155__$1,inst_11153);
} else {
return null;
}
}
});})(c__10645__auto__,f__$1))
;
return ((function (switch__10557__auto__,c__10645__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__10558__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10558__auto____0 = (function (){
var statearr_11157 = [null,null,null,null,null,null,null];
(statearr_11157[(0)] = cljs$core$async$transduce_$_state_machine__10558__auto__);

(statearr_11157[(1)] = (1));

return statearr_11157;
});
var cljs$core$async$transduce_$_state_machine__10558__auto____1 = (function (state_11155){
while(true){
var ret_value__10559__auto__ = (function (){try{while(true){
var result__10560__auto__ = switch__10557__auto__.call(null,state_11155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10560__auto__;
}
break;
}
}catch (e11158){if((e11158 instanceof Object)){
var ex__10561__auto__ = e11158;
var statearr_11159_11161 = state_11155;
(statearr_11159_11161[(5)] = ex__10561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11162 = state_11155;
state_11155 = G__11162;
continue;
} else {
return ret_value__10559__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10558__auto__ = function(state_11155){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10558__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10558__auto____1.call(this,state_11155);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10558__auto____0;
cljs$core$async$transduce_$_state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10558__auto____1;
return cljs$core$async$transduce_$_state_machine__10558__auto__;
})()
;})(switch__10557__auto__,c__10645__auto__,f__$1))
})();
var state__10647__auto__ = (function (){var statearr_11160 = f__10646__auto__.call(null);
(statearr_11160[(6)] = c__10645__auto__);

return statearr_11160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10647__auto__);
});})(c__10645__auto__,f__$1))
);

return c__10645__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__11164 = arguments.length;
switch (G__11164) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10645__auto__){
return (function (){
var f__10646__auto__ = (function (){var switch__10557__auto__ = ((function (c__10645__auto__){
return (function (state_11189){
var state_val_11190 = (state_11189[(1)]);
if((state_val_11190 === (7))){
var inst_11171 = (state_11189[(2)]);
var state_11189__$1 = state_11189;
var statearr_11191_11212 = state_11189__$1;
(statearr_11191_11212[(2)] = inst_11171);

(statearr_11191_11212[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11190 === (1))){
var inst_11165 = cljs.core.seq.call(null,coll);
var inst_11166 = inst_11165;
var state_11189__$1 = (function (){var statearr_11192 = state_11189;
(statearr_11192[(7)] = inst_11166);

return statearr_11192;
})();
var statearr_11193_11213 = state_11189__$1;
(statearr_11193_11213[(2)] = null);

(statearr_11193_11213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11190 === (4))){
var inst_11166 = (state_11189[(7)]);
var inst_11169 = cljs.core.first.call(null,inst_11166);
var state_11189__$1 = state_11189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11189__$1,(7),ch,inst_11169);
} else {
if((state_val_11190 === (13))){
var inst_11183 = (state_11189[(2)]);
var state_11189__$1 = state_11189;
var statearr_11194_11214 = state_11189__$1;
(statearr_11194_11214[(2)] = inst_11183);

(statearr_11194_11214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11190 === (6))){
var inst_11174 = (state_11189[(2)]);
var state_11189__$1 = state_11189;
if(cljs.core.truth_(inst_11174)){
var statearr_11195_11215 = state_11189__$1;
(statearr_11195_11215[(1)] = (8));

} else {
var statearr_11196_11216 = state_11189__$1;
(statearr_11196_11216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11190 === (3))){
var inst_11187 = (state_11189[(2)]);
var state_11189__$1 = state_11189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11189__$1,inst_11187);
} else {
if((state_val_11190 === (12))){
var state_11189__$1 = state_11189;
var statearr_11197_11217 = state_11189__$1;
(statearr_11197_11217[(2)] = null);

(statearr_11197_11217[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11190 === (2))){
var inst_11166 = (state_11189[(7)]);
var state_11189__$1 = state_11189;
if(cljs.core.truth_(inst_11166)){
var statearr_11198_11218 = state_11189__$1;
(statearr_11198_11218[(1)] = (4));

} else {
var statearr_11199_11219 = state_11189__$1;
(statearr_11199_11219[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11190 === (11))){
var inst_11180 = cljs.core.async.close_BANG_.call(null,ch);
var state_11189__$1 = state_11189;
var statearr_11200_11220 = state_11189__$1;
(statearr_11200_11220[(2)] = inst_11180);

(statearr_11200_11220[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11190 === (9))){
var state_11189__$1 = state_11189;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11201_11221 = state_11189__$1;
(statearr_11201_11221[(1)] = (11));

} else {
var statearr_11202_11222 = state_11189__$1;
(statearr_11202_11222[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11190 === (5))){
var inst_11166 = (state_11189[(7)]);
var state_11189__$1 = state_11189;
var statearr_11203_11223 = state_11189__$1;
(statearr_11203_11223[(2)] = inst_11166);

(statearr_11203_11223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11190 === (10))){
var inst_11185 = (state_11189[(2)]);
var state_11189__$1 = state_11189;
var statearr_11204_11224 = state_11189__$1;
(statearr_11204_11224[(2)] = inst_11185);

(statearr_11204_11224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11190 === (8))){
var inst_11166 = (state_11189[(7)]);
var inst_11176 = cljs.core.next.call(null,inst_11166);
var inst_11166__$1 = inst_11176;
var state_11189__$1 = (function (){var statearr_11205 = state_11189;
(statearr_11205[(7)] = inst_11166__$1);

return statearr_11205;
})();
var statearr_11206_11225 = state_11189__$1;
(statearr_11206_11225[(2)] = null);

(statearr_11206_11225[(1)] = (2));


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
});})(c__10645__auto__))
;
return ((function (switch__10557__auto__,c__10645__auto__){
return (function() {
var cljs$core$async$state_machine__10558__auto__ = null;
var cljs$core$async$state_machine__10558__auto____0 = (function (){
var statearr_11207 = [null,null,null,null,null,null,null,null];
(statearr_11207[(0)] = cljs$core$async$state_machine__10558__auto__);

(statearr_11207[(1)] = (1));

return statearr_11207;
});
var cljs$core$async$state_machine__10558__auto____1 = (function (state_11189){
while(true){
var ret_value__10559__auto__ = (function (){try{while(true){
var result__10560__auto__ = switch__10557__auto__.call(null,state_11189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10560__auto__;
}
break;
}
}catch (e11208){if((e11208 instanceof Object)){
var ex__10561__auto__ = e11208;
var statearr_11209_11226 = state_11189;
(statearr_11209_11226[(5)] = ex__10561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11227 = state_11189;
state_11189 = G__11227;
continue;
} else {
return ret_value__10559__auto__;
}
break;
}
});
cljs$core$async$state_machine__10558__auto__ = function(state_11189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10558__auto____1.call(this,state_11189);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10558__auto____0;
cljs$core$async$state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10558__auto____1;
return cljs$core$async$state_machine__10558__auto__;
})()
;})(switch__10557__auto__,c__10645__auto__))
})();
var state__10647__auto__ = (function (){var statearr_11210 = f__10646__auto__.call(null);
(statearr_11210[(6)] = c__10645__auto__);

return statearr_11210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10647__auto__);
});})(c__10645__auto__))
);

return c__10645__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7954__auto__ = (((_ == null))?null:_);
var m__7955__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,_);
} else {
var m__7955__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7954__auto__ = (((m == null))?null:m);
var m__7955__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7955__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7954__auto__ = (((m == null))?null:m);
var m__7955__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,m,ch);
} else {
var m__7955__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7954__auto__ = (((m == null))?null:m);
var m__7955__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,m);
} else {
var m__7955__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11228 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11228 = (function (ch,cs,meta11229){
this.ch = ch;
this.cs = cs;
this.meta11229 = meta11229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11230,meta11229__$1){
var self__ = this;
var _11230__$1 = this;
return (new cljs.core.async.t_cljs$core$async11228(self__.ch,self__.cs,meta11229__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async11228.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11230){
var self__ = this;
var _11230__$1 = this;
return self__.meta11229;
});})(cs))
;

cljs.core.async.t_cljs$core$async11228.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11228.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async11228.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11228.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11228.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11228.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11228.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11229","meta11229",824010649,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async11228.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11228";

cljs.core.async.t_cljs$core$async11228.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async11228");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async11228 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async11228(ch__$1,cs__$1,meta11229){
return (new cljs.core.async.t_cljs$core$async11228(ch__$1,cs__$1,meta11229));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async11228(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__10645__auto___11450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10645__auto___11450,cs,m,dchan,dctr,done){
return (function (){
var f__10646__auto__ = (function (){var switch__10557__auto__ = ((function (c__10645__auto___11450,cs,m,dchan,dctr,done){
return (function (state_11365){
var state_val_11366 = (state_11365[(1)]);
if((state_val_11366 === (7))){
var inst_11361 = (state_11365[(2)]);
var state_11365__$1 = state_11365;
var statearr_11367_11451 = state_11365__$1;
(statearr_11367_11451[(2)] = inst_11361);

(statearr_11367_11451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (20))){
var inst_11264 = (state_11365[(7)]);
var inst_11276 = cljs.core.first.call(null,inst_11264);
var inst_11277 = cljs.core.nth.call(null,inst_11276,(0),null);
var inst_11278 = cljs.core.nth.call(null,inst_11276,(1),null);
var state_11365__$1 = (function (){var statearr_11368 = state_11365;
(statearr_11368[(8)] = inst_11277);

return statearr_11368;
})();
if(cljs.core.truth_(inst_11278)){
var statearr_11369_11452 = state_11365__$1;
(statearr_11369_11452[(1)] = (22));

} else {
var statearr_11370_11453 = state_11365__$1;
(statearr_11370_11453[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (27))){
var inst_11233 = (state_11365[(9)]);
var inst_11306 = (state_11365[(10)]);
var inst_11308 = (state_11365[(11)]);
var inst_11313 = (state_11365[(12)]);
var inst_11313__$1 = cljs.core._nth.call(null,inst_11306,inst_11308);
var inst_11314 = cljs.core.async.put_BANG_.call(null,inst_11313__$1,inst_11233,done);
var state_11365__$1 = (function (){var statearr_11371 = state_11365;
(statearr_11371[(12)] = inst_11313__$1);

return statearr_11371;
})();
if(cljs.core.truth_(inst_11314)){
var statearr_11372_11454 = state_11365__$1;
(statearr_11372_11454[(1)] = (30));

} else {
var statearr_11373_11455 = state_11365__$1;
(statearr_11373_11455[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (1))){
var state_11365__$1 = state_11365;
var statearr_11374_11456 = state_11365__$1;
(statearr_11374_11456[(2)] = null);

(statearr_11374_11456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (24))){
var inst_11264 = (state_11365[(7)]);
var inst_11283 = (state_11365[(2)]);
var inst_11284 = cljs.core.next.call(null,inst_11264);
var inst_11242 = inst_11284;
var inst_11243 = null;
var inst_11244 = (0);
var inst_11245 = (0);
var state_11365__$1 = (function (){var statearr_11375 = state_11365;
(statearr_11375[(13)] = inst_11243);

(statearr_11375[(14)] = inst_11245);

(statearr_11375[(15)] = inst_11244);

(statearr_11375[(16)] = inst_11283);

(statearr_11375[(17)] = inst_11242);

return statearr_11375;
})();
var statearr_11376_11457 = state_11365__$1;
(statearr_11376_11457[(2)] = null);

(statearr_11376_11457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (39))){
var state_11365__$1 = state_11365;
var statearr_11380_11458 = state_11365__$1;
(statearr_11380_11458[(2)] = null);

(statearr_11380_11458[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (4))){
var inst_11233 = (state_11365[(9)]);
var inst_11233__$1 = (state_11365[(2)]);
var inst_11234 = (inst_11233__$1 == null);
var state_11365__$1 = (function (){var statearr_11381 = state_11365;
(statearr_11381[(9)] = inst_11233__$1);

return statearr_11381;
})();
if(cljs.core.truth_(inst_11234)){
var statearr_11382_11459 = state_11365__$1;
(statearr_11382_11459[(1)] = (5));

} else {
var statearr_11383_11460 = state_11365__$1;
(statearr_11383_11460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (15))){
var inst_11243 = (state_11365[(13)]);
var inst_11245 = (state_11365[(14)]);
var inst_11244 = (state_11365[(15)]);
var inst_11242 = (state_11365[(17)]);
var inst_11260 = (state_11365[(2)]);
var inst_11261 = (inst_11245 + (1));
var tmp11377 = inst_11243;
var tmp11378 = inst_11244;
var tmp11379 = inst_11242;
var inst_11242__$1 = tmp11379;
var inst_11243__$1 = tmp11377;
var inst_11244__$1 = tmp11378;
var inst_11245__$1 = inst_11261;
var state_11365__$1 = (function (){var statearr_11384 = state_11365;
(statearr_11384[(13)] = inst_11243__$1);

(statearr_11384[(14)] = inst_11245__$1);

(statearr_11384[(15)] = inst_11244__$1);

(statearr_11384[(17)] = inst_11242__$1);

(statearr_11384[(18)] = inst_11260);

return statearr_11384;
})();
var statearr_11385_11461 = state_11365__$1;
(statearr_11385_11461[(2)] = null);

(statearr_11385_11461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (21))){
var inst_11287 = (state_11365[(2)]);
var state_11365__$1 = state_11365;
var statearr_11389_11462 = state_11365__$1;
(statearr_11389_11462[(2)] = inst_11287);

(statearr_11389_11462[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (31))){
var inst_11313 = (state_11365[(12)]);
var inst_11317 = done.call(null,null);
var inst_11318 = cljs.core.async.untap_STAR_.call(null,m,inst_11313);
var state_11365__$1 = (function (){var statearr_11390 = state_11365;
(statearr_11390[(19)] = inst_11317);

return statearr_11390;
})();
var statearr_11391_11463 = state_11365__$1;
(statearr_11391_11463[(2)] = inst_11318);

(statearr_11391_11463[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (32))){
var inst_11307 = (state_11365[(20)]);
var inst_11305 = (state_11365[(21)]);
var inst_11306 = (state_11365[(10)]);
var inst_11308 = (state_11365[(11)]);
var inst_11320 = (state_11365[(2)]);
var inst_11321 = (inst_11308 + (1));
var tmp11386 = inst_11307;
var tmp11387 = inst_11305;
var tmp11388 = inst_11306;
var inst_11305__$1 = tmp11387;
var inst_11306__$1 = tmp11388;
var inst_11307__$1 = tmp11386;
var inst_11308__$1 = inst_11321;
var state_11365__$1 = (function (){var statearr_11392 = state_11365;
(statearr_11392[(20)] = inst_11307__$1);

(statearr_11392[(21)] = inst_11305__$1);

(statearr_11392[(22)] = inst_11320);

(statearr_11392[(10)] = inst_11306__$1);

(statearr_11392[(11)] = inst_11308__$1);

return statearr_11392;
})();
var statearr_11393_11464 = state_11365__$1;
(statearr_11393_11464[(2)] = null);

(statearr_11393_11464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (40))){
var inst_11333 = (state_11365[(23)]);
var inst_11337 = done.call(null,null);
var inst_11338 = cljs.core.async.untap_STAR_.call(null,m,inst_11333);
var state_11365__$1 = (function (){var statearr_11394 = state_11365;
(statearr_11394[(24)] = inst_11337);

return statearr_11394;
})();
var statearr_11395_11465 = state_11365__$1;
(statearr_11395_11465[(2)] = inst_11338);

(statearr_11395_11465[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (33))){
var inst_11324 = (state_11365[(25)]);
var inst_11326 = cljs.core.chunked_seq_QMARK_.call(null,inst_11324);
var state_11365__$1 = state_11365;
if(inst_11326){
var statearr_11396_11466 = state_11365__$1;
(statearr_11396_11466[(1)] = (36));

} else {
var statearr_11397_11467 = state_11365__$1;
(statearr_11397_11467[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (13))){
var inst_11254 = (state_11365[(26)]);
var inst_11257 = cljs.core.async.close_BANG_.call(null,inst_11254);
var state_11365__$1 = state_11365;
var statearr_11398_11468 = state_11365__$1;
(statearr_11398_11468[(2)] = inst_11257);

(statearr_11398_11468[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (22))){
var inst_11277 = (state_11365[(8)]);
var inst_11280 = cljs.core.async.close_BANG_.call(null,inst_11277);
var state_11365__$1 = state_11365;
var statearr_11399_11469 = state_11365__$1;
(statearr_11399_11469[(2)] = inst_11280);

(statearr_11399_11469[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (36))){
var inst_11324 = (state_11365[(25)]);
var inst_11328 = cljs.core.chunk_first.call(null,inst_11324);
var inst_11329 = cljs.core.chunk_rest.call(null,inst_11324);
var inst_11330 = cljs.core.count.call(null,inst_11328);
var inst_11305 = inst_11329;
var inst_11306 = inst_11328;
var inst_11307 = inst_11330;
var inst_11308 = (0);
var state_11365__$1 = (function (){var statearr_11400 = state_11365;
(statearr_11400[(20)] = inst_11307);

(statearr_11400[(21)] = inst_11305);

(statearr_11400[(10)] = inst_11306);

(statearr_11400[(11)] = inst_11308);

return statearr_11400;
})();
var statearr_11401_11470 = state_11365__$1;
(statearr_11401_11470[(2)] = null);

(statearr_11401_11470[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (41))){
var inst_11324 = (state_11365[(25)]);
var inst_11340 = (state_11365[(2)]);
var inst_11341 = cljs.core.next.call(null,inst_11324);
var inst_11305 = inst_11341;
var inst_11306 = null;
var inst_11307 = (0);
var inst_11308 = (0);
var state_11365__$1 = (function (){var statearr_11402 = state_11365;
(statearr_11402[(20)] = inst_11307);

(statearr_11402[(21)] = inst_11305);

(statearr_11402[(27)] = inst_11340);

(statearr_11402[(10)] = inst_11306);

(statearr_11402[(11)] = inst_11308);

return statearr_11402;
})();
var statearr_11403_11471 = state_11365__$1;
(statearr_11403_11471[(2)] = null);

(statearr_11403_11471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (43))){
var state_11365__$1 = state_11365;
var statearr_11404_11472 = state_11365__$1;
(statearr_11404_11472[(2)] = null);

(statearr_11404_11472[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (29))){
var inst_11349 = (state_11365[(2)]);
var state_11365__$1 = state_11365;
var statearr_11405_11473 = state_11365__$1;
(statearr_11405_11473[(2)] = inst_11349);

(statearr_11405_11473[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (44))){
var inst_11358 = (state_11365[(2)]);
var state_11365__$1 = (function (){var statearr_11406 = state_11365;
(statearr_11406[(28)] = inst_11358);

return statearr_11406;
})();
var statearr_11407_11474 = state_11365__$1;
(statearr_11407_11474[(2)] = null);

(statearr_11407_11474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (6))){
var inst_11297 = (state_11365[(29)]);
var inst_11296 = cljs.core.deref.call(null,cs);
var inst_11297__$1 = cljs.core.keys.call(null,inst_11296);
var inst_11298 = cljs.core.count.call(null,inst_11297__$1);
var inst_11299 = cljs.core.reset_BANG_.call(null,dctr,inst_11298);
var inst_11304 = cljs.core.seq.call(null,inst_11297__$1);
var inst_11305 = inst_11304;
var inst_11306 = null;
var inst_11307 = (0);
var inst_11308 = (0);
var state_11365__$1 = (function (){var statearr_11408 = state_11365;
(statearr_11408[(20)] = inst_11307);

(statearr_11408[(21)] = inst_11305);

(statearr_11408[(29)] = inst_11297__$1);

(statearr_11408[(30)] = inst_11299);

(statearr_11408[(10)] = inst_11306);

(statearr_11408[(11)] = inst_11308);

return statearr_11408;
})();
var statearr_11409_11475 = state_11365__$1;
(statearr_11409_11475[(2)] = null);

(statearr_11409_11475[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (28))){
var inst_11305 = (state_11365[(21)]);
var inst_11324 = (state_11365[(25)]);
var inst_11324__$1 = cljs.core.seq.call(null,inst_11305);
var state_11365__$1 = (function (){var statearr_11410 = state_11365;
(statearr_11410[(25)] = inst_11324__$1);

return statearr_11410;
})();
if(inst_11324__$1){
var statearr_11411_11476 = state_11365__$1;
(statearr_11411_11476[(1)] = (33));

} else {
var statearr_11412_11477 = state_11365__$1;
(statearr_11412_11477[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (25))){
var inst_11307 = (state_11365[(20)]);
var inst_11308 = (state_11365[(11)]);
var inst_11310 = (inst_11308 < inst_11307);
var inst_11311 = inst_11310;
var state_11365__$1 = state_11365;
if(cljs.core.truth_(inst_11311)){
var statearr_11413_11478 = state_11365__$1;
(statearr_11413_11478[(1)] = (27));

} else {
var statearr_11414_11479 = state_11365__$1;
(statearr_11414_11479[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (34))){
var state_11365__$1 = state_11365;
var statearr_11415_11480 = state_11365__$1;
(statearr_11415_11480[(2)] = null);

(statearr_11415_11480[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (17))){
var state_11365__$1 = state_11365;
var statearr_11416_11481 = state_11365__$1;
(statearr_11416_11481[(2)] = null);

(statearr_11416_11481[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (3))){
var inst_11363 = (state_11365[(2)]);
var state_11365__$1 = state_11365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11365__$1,inst_11363);
} else {
if((state_val_11366 === (12))){
var inst_11292 = (state_11365[(2)]);
var state_11365__$1 = state_11365;
var statearr_11417_11482 = state_11365__$1;
(statearr_11417_11482[(2)] = inst_11292);

(statearr_11417_11482[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (2))){
var state_11365__$1 = state_11365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11365__$1,(4),ch);
} else {
if((state_val_11366 === (23))){
var state_11365__$1 = state_11365;
var statearr_11418_11483 = state_11365__$1;
(statearr_11418_11483[(2)] = null);

(statearr_11418_11483[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (35))){
var inst_11347 = (state_11365[(2)]);
var state_11365__$1 = state_11365;
var statearr_11419_11484 = state_11365__$1;
(statearr_11419_11484[(2)] = inst_11347);

(statearr_11419_11484[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (19))){
var inst_11264 = (state_11365[(7)]);
var inst_11268 = cljs.core.chunk_first.call(null,inst_11264);
var inst_11269 = cljs.core.chunk_rest.call(null,inst_11264);
var inst_11270 = cljs.core.count.call(null,inst_11268);
var inst_11242 = inst_11269;
var inst_11243 = inst_11268;
var inst_11244 = inst_11270;
var inst_11245 = (0);
var state_11365__$1 = (function (){var statearr_11420 = state_11365;
(statearr_11420[(13)] = inst_11243);

(statearr_11420[(14)] = inst_11245);

(statearr_11420[(15)] = inst_11244);

(statearr_11420[(17)] = inst_11242);

return statearr_11420;
})();
var statearr_11421_11485 = state_11365__$1;
(statearr_11421_11485[(2)] = null);

(statearr_11421_11485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (11))){
var inst_11264 = (state_11365[(7)]);
var inst_11242 = (state_11365[(17)]);
var inst_11264__$1 = cljs.core.seq.call(null,inst_11242);
var state_11365__$1 = (function (){var statearr_11422 = state_11365;
(statearr_11422[(7)] = inst_11264__$1);

return statearr_11422;
})();
if(inst_11264__$1){
var statearr_11423_11486 = state_11365__$1;
(statearr_11423_11486[(1)] = (16));

} else {
var statearr_11424_11487 = state_11365__$1;
(statearr_11424_11487[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (9))){
var inst_11294 = (state_11365[(2)]);
var state_11365__$1 = state_11365;
var statearr_11425_11488 = state_11365__$1;
(statearr_11425_11488[(2)] = inst_11294);

(statearr_11425_11488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (5))){
var inst_11240 = cljs.core.deref.call(null,cs);
var inst_11241 = cljs.core.seq.call(null,inst_11240);
var inst_11242 = inst_11241;
var inst_11243 = null;
var inst_11244 = (0);
var inst_11245 = (0);
var state_11365__$1 = (function (){var statearr_11426 = state_11365;
(statearr_11426[(13)] = inst_11243);

(statearr_11426[(14)] = inst_11245);

(statearr_11426[(15)] = inst_11244);

(statearr_11426[(17)] = inst_11242);

return statearr_11426;
})();
var statearr_11427_11489 = state_11365__$1;
(statearr_11427_11489[(2)] = null);

(statearr_11427_11489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (14))){
var state_11365__$1 = state_11365;
var statearr_11428_11490 = state_11365__$1;
(statearr_11428_11490[(2)] = null);

(statearr_11428_11490[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (45))){
var inst_11355 = (state_11365[(2)]);
var state_11365__$1 = state_11365;
var statearr_11429_11491 = state_11365__$1;
(statearr_11429_11491[(2)] = inst_11355);

(statearr_11429_11491[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (26))){
var inst_11297 = (state_11365[(29)]);
var inst_11351 = (state_11365[(2)]);
var inst_11352 = cljs.core.seq.call(null,inst_11297);
var state_11365__$1 = (function (){var statearr_11430 = state_11365;
(statearr_11430[(31)] = inst_11351);

return statearr_11430;
})();
if(inst_11352){
var statearr_11431_11492 = state_11365__$1;
(statearr_11431_11492[(1)] = (42));

} else {
var statearr_11432_11493 = state_11365__$1;
(statearr_11432_11493[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (16))){
var inst_11264 = (state_11365[(7)]);
var inst_11266 = cljs.core.chunked_seq_QMARK_.call(null,inst_11264);
var state_11365__$1 = state_11365;
if(inst_11266){
var statearr_11433_11494 = state_11365__$1;
(statearr_11433_11494[(1)] = (19));

} else {
var statearr_11434_11495 = state_11365__$1;
(statearr_11434_11495[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (38))){
var inst_11344 = (state_11365[(2)]);
var state_11365__$1 = state_11365;
var statearr_11435_11496 = state_11365__$1;
(statearr_11435_11496[(2)] = inst_11344);

(statearr_11435_11496[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (30))){
var state_11365__$1 = state_11365;
var statearr_11436_11497 = state_11365__$1;
(statearr_11436_11497[(2)] = null);

(statearr_11436_11497[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (10))){
var inst_11243 = (state_11365[(13)]);
var inst_11245 = (state_11365[(14)]);
var inst_11253 = cljs.core._nth.call(null,inst_11243,inst_11245);
var inst_11254 = cljs.core.nth.call(null,inst_11253,(0),null);
var inst_11255 = cljs.core.nth.call(null,inst_11253,(1),null);
var state_11365__$1 = (function (){var statearr_11437 = state_11365;
(statearr_11437[(26)] = inst_11254);

return statearr_11437;
})();
if(cljs.core.truth_(inst_11255)){
var statearr_11438_11498 = state_11365__$1;
(statearr_11438_11498[(1)] = (13));

} else {
var statearr_11439_11499 = state_11365__$1;
(statearr_11439_11499[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (18))){
var inst_11290 = (state_11365[(2)]);
var state_11365__$1 = state_11365;
var statearr_11440_11500 = state_11365__$1;
(statearr_11440_11500[(2)] = inst_11290);

(statearr_11440_11500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (42))){
var state_11365__$1 = state_11365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11365__$1,(45),dchan);
} else {
if((state_val_11366 === (37))){
var inst_11333 = (state_11365[(23)]);
var inst_11233 = (state_11365[(9)]);
var inst_11324 = (state_11365[(25)]);
var inst_11333__$1 = cljs.core.first.call(null,inst_11324);
var inst_11334 = cljs.core.async.put_BANG_.call(null,inst_11333__$1,inst_11233,done);
var state_11365__$1 = (function (){var statearr_11441 = state_11365;
(statearr_11441[(23)] = inst_11333__$1);

return statearr_11441;
})();
if(cljs.core.truth_(inst_11334)){
var statearr_11442_11501 = state_11365__$1;
(statearr_11442_11501[(1)] = (39));

} else {
var statearr_11443_11502 = state_11365__$1;
(statearr_11443_11502[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11366 === (8))){
var inst_11245 = (state_11365[(14)]);
var inst_11244 = (state_11365[(15)]);
var inst_11247 = (inst_11245 < inst_11244);
var inst_11248 = inst_11247;
var state_11365__$1 = state_11365;
if(cljs.core.truth_(inst_11248)){
var statearr_11444_11503 = state_11365__$1;
(statearr_11444_11503[(1)] = (10));

} else {
var statearr_11445_11504 = state_11365__$1;
(statearr_11445_11504[(1)] = (11));

}

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
});})(c__10645__auto___11450,cs,m,dchan,dctr,done))
;
return ((function (switch__10557__auto__,c__10645__auto___11450,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10558__auto__ = null;
var cljs$core$async$mult_$_state_machine__10558__auto____0 = (function (){
var statearr_11446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11446[(0)] = cljs$core$async$mult_$_state_machine__10558__auto__);

(statearr_11446[(1)] = (1));

return statearr_11446;
});
var cljs$core$async$mult_$_state_machine__10558__auto____1 = (function (state_11365){
while(true){
var ret_value__10559__auto__ = (function (){try{while(true){
var result__10560__auto__ = switch__10557__auto__.call(null,state_11365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10560__auto__;
}
break;
}
}catch (e11447){if((e11447 instanceof Object)){
var ex__10561__auto__ = e11447;
var statearr_11448_11505 = state_11365;
(statearr_11448_11505[(5)] = ex__10561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11506 = state_11365;
state_11365 = G__11506;
continue;
} else {
return ret_value__10559__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10558__auto__ = function(state_11365){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10558__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10558__auto____1.call(this,state_11365);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10558__auto____0;
cljs$core$async$mult_$_state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10558__auto____1;
return cljs$core$async$mult_$_state_machine__10558__auto__;
})()
;})(switch__10557__auto__,c__10645__auto___11450,cs,m,dchan,dctr,done))
})();
var state__10647__auto__ = (function (){var statearr_11449 = f__10646__auto__.call(null);
(statearr_11449[(6)] = c__10645__auto___11450);

return statearr_11449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10647__auto__);
});})(c__10645__auto___11450,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__11508 = arguments.length;
switch (G__11508) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7954__auto__ = (((m == null))?null:m);
var m__7955__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,m,ch);
} else {
var m__7955__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7954__auto__ = (((m == null))?null:m);
var m__7955__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,m,ch);
} else {
var m__7955__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7954__auto__ = (((m == null))?null:m);
var m__7955__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,m);
} else {
var m__7955__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7954__auto__ = (((m == null))?null:m);
var m__7955__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,m,state_map);
} else {
var m__7955__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7954__auto__ = (((m == null))?null:m);
var m__7955__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,m,mode);
} else {
var m__7955__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8417__auto__ = [];
var len__8410__auto___11520 = arguments.length;
var i__8411__auto___11521 = (0);
while(true){
if((i__8411__auto___11521 < len__8410__auto___11520)){
args__8417__auto__.push((arguments[i__8411__auto___11521]));

var G__11522 = (i__8411__auto___11521 + (1));
i__8411__auto___11521 = G__11522;
continue;
} else {
}
break;
}

var argseq__8418__auto__ = ((((3) < args__8417__auto__.length))?(new cljs.core.IndexedSeq(args__8417__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8418__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11514){
var map__11515 = p__11514;
var map__11515__$1 = ((((!((map__11515 == null)))?((((map__11515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11515):map__11515);
var opts = map__11515__$1;
var statearr_11517_11523 = state;
(statearr_11517_11523[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__11515,map__11515__$1,opts){
return (function (val){
var statearr_11518_11524 = state;
(statearr_11518_11524[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__11515,map__11515__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_11519_11525 = state;
(statearr_11519_11525[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11510){
var G__11511 = cljs.core.first.call(null,seq11510);
var seq11510__$1 = cljs.core.next.call(null,seq11510);
var G__11512 = cljs.core.first.call(null,seq11510__$1);
var seq11510__$2 = cljs.core.next.call(null,seq11510__$1);
var G__11513 = cljs.core.first.call(null,seq11510__$2);
var seq11510__$3 = cljs.core.next.call(null,seq11510__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11511,G__11512,G__11513,seq11510__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11526 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11526 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta11527){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta11527 = meta11527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11528,meta11527__$1){
var self__ = this;
var _11528__$1 = this;
return (new cljs.core.async.t_cljs$core$async11526(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta11527__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11526.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11528){
var self__ = this;
var _11528__$1 = this;
return self__.meta11527;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11526.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11526.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11526.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11526.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11526.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11526.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11526.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11526.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11526.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta11527","meta11527",-315535505,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11526.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11526";

cljs.core.async.t_cljs$core$async11526.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async11526");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async11526 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11526(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11527){
return (new cljs.core.async.t_cljs$core$async11526(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11527));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11526(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10645__auto___11690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10645__auto___11690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10646__auto__ = (function (){var switch__10557__auto__ = ((function (c__10645__auto___11690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11630){
var state_val_11631 = (state_11630[(1)]);
if((state_val_11631 === (7))){
var inst_11545 = (state_11630[(2)]);
var state_11630__$1 = state_11630;
var statearr_11632_11691 = state_11630__$1;
(statearr_11632_11691[(2)] = inst_11545);

(statearr_11632_11691[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (20))){
var inst_11557 = (state_11630[(7)]);
var state_11630__$1 = state_11630;
var statearr_11633_11692 = state_11630__$1;
(statearr_11633_11692[(2)] = inst_11557);

(statearr_11633_11692[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (27))){
var state_11630__$1 = state_11630;
var statearr_11634_11693 = state_11630__$1;
(statearr_11634_11693[(2)] = null);

(statearr_11634_11693[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (1))){
var inst_11532 = (state_11630[(8)]);
var inst_11532__$1 = calc_state.call(null);
var inst_11534 = (inst_11532__$1 == null);
var inst_11535 = cljs.core.not.call(null,inst_11534);
var state_11630__$1 = (function (){var statearr_11635 = state_11630;
(statearr_11635[(8)] = inst_11532__$1);

return statearr_11635;
})();
if(inst_11535){
var statearr_11636_11694 = state_11630__$1;
(statearr_11636_11694[(1)] = (2));

} else {
var statearr_11637_11695 = state_11630__$1;
(statearr_11637_11695[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (24))){
var inst_11590 = (state_11630[(9)]);
var inst_11604 = (state_11630[(10)]);
var inst_11581 = (state_11630[(11)]);
var inst_11604__$1 = inst_11581.call(null,inst_11590);
var state_11630__$1 = (function (){var statearr_11638 = state_11630;
(statearr_11638[(10)] = inst_11604__$1);

return statearr_11638;
})();
if(cljs.core.truth_(inst_11604__$1)){
var statearr_11639_11696 = state_11630__$1;
(statearr_11639_11696[(1)] = (29));

} else {
var statearr_11640_11697 = state_11630__$1;
(statearr_11640_11697[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (4))){
var inst_11548 = (state_11630[(2)]);
var state_11630__$1 = state_11630;
if(cljs.core.truth_(inst_11548)){
var statearr_11641_11698 = state_11630__$1;
(statearr_11641_11698[(1)] = (8));

} else {
var statearr_11642_11699 = state_11630__$1;
(statearr_11642_11699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (15))){
var inst_11575 = (state_11630[(2)]);
var state_11630__$1 = state_11630;
if(cljs.core.truth_(inst_11575)){
var statearr_11643_11700 = state_11630__$1;
(statearr_11643_11700[(1)] = (19));

} else {
var statearr_11644_11701 = state_11630__$1;
(statearr_11644_11701[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (21))){
var inst_11580 = (state_11630[(12)]);
var inst_11580__$1 = (state_11630[(2)]);
var inst_11581 = cljs.core.get.call(null,inst_11580__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11582 = cljs.core.get.call(null,inst_11580__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11583 = cljs.core.get.call(null,inst_11580__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11630__$1 = (function (){var statearr_11645 = state_11630;
(statearr_11645[(12)] = inst_11580__$1);

(statearr_11645[(11)] = inst_11581);

(statearr_11645[(13)] = inst_11582);

return statearr_11645;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11630__$1,(22),inst_11583);
} else {
if((state_val_11631 === (31))){
var inst_11612 = (state_11630[(2)]);
var state_11630__$1 = state_11630;
if(cljs.core.truth_(inst_11612)){
var statearr_11646_11702 = state_11630__$1;
(statearr_11646_11702[(1)] = (32));

} else {
var statearr_11647_11703 = state_11630__$1;
(statearr_11647_11703[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (32))){
var inst_11589 = (state_11630[(14)]);
var state_11630__$1 = state_11630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11630__$1,(35),out,inst_11589);
} else {
if((state_val_11631 === (33))){
var inst_11580 = (state_11630[(12)]);
var inst_11557 = inst_11580;
var state_11630__$1 = (function (){var statearr_11648 = state_11630;
(statearr_11648[(7)] = inst_11557);

return statearr_11648;
})();
var statearr_11649_11704 = state_11630__$1;
(statearr_11649_11704[(2)] = null);

(statearr_11649_11704[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (13))){
var inst_11557 = (state_11630[(7)]);
var inst_11564 = inst_11557.cljs$lang$protocol_mask$partition0$;
var inst_11565 = (inst_11564 & (64));
var inst_11566 = inst_11557.cljs$core$ISeq$;
var inst_11567 = (cljs.core.PROTOCOL_SENTINEL === inst_11566);
var inst_11568 = (inst_11565) || (inst_11567);
var state_11630__$1 = state_11630;
if(cljs.core.truth_(inst_11568)){
var statearr_11650_11705 = state_11630__$1;
(statearr_11650_11705[(1)] = (16));

} else {
var statearr_11651_11706 = state_11630__$1;
(statearr_11651_11706[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (22))){
var inst_11590 = (state_11630[(9)]);
var inst_11589 = (state_11630[(14)]);
var inst_11588 = (state_11630[(2)]);
var inst_11589__$1 = cljs.core.nth.call(null,inst_11588,(0),null);
var inst_11590__$1 = cljs.core.nth.call(null,inst_11588,(1),null);
var inst_11591 = (inst_11589__$1 == null);
var inst_11592 = cljs.core._EQ_.call(null,inst_11590__$1,change);
var inst_11593 = (inst_11591) || (inst_11592);
var state_11630__$1 = (function (){var statearr_11652 = state_11630;
(statearr_11652[(9)] = inst_11590__$1);

(statearr_11652[(14)] = inst_11589__$1);

return statearr_11652;
})();
if(cljs.core.truth_(inst_11593)){
var statearr_11653_11707 = state_11630__$1;
(statearr_11653_11707[(1)] = (23));

} else {
var statearr_11654_11708 = state_11630__$1;
(statearr_11654_11708[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (36))){
var inst_11580 = (state_11630[(12)]);
var inst_11557 = inst_11580;
var state_11630__$1 = (function (){var statearr_11655 = state_11630;
(statearr_11655[(7)] = inst_11557);

return statearr_11655;
})();
var statearr_11656_11709 = state_11630__$1;
(statearr_11656_11709[(2)] = null);

(statearr_11656_11709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (29))){
var inst_11604 = (state_11630[(10)]);
var state_11630__$1 = state_11630;
var statearr_11657_11710 = state_11630__$1;
(statearr_11657_11710[(2)] = inst_11604);

(statearr_11657_11710[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (6))){
var state_11630__$1 = state_11630;
var statearr_11658_11711 = state_11630__$1;
(statearr_11658_11711[(2)] = false);

(statearr_11658_11711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (28))){
var inst_11600 = (state_11630[(2)]);
var inst_11601 = calc_state.call(null);
var inst_11557 = inst_11601;
var state_11630__$1 = (function (){var statearr_11659 = state_11630;
(statearr_11659[(7)] = inst_11557);

(statearr_11659[(15)] = inst_11600);

return statearr_11659;
})();
var statearr_11660_11712 = state_11630__$1;
(statearr_11660_11712[(2)] = null);

(statearr_11660_11712[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (25))){
var inst_11626 = (state_11630[(2)]);
var state_11630__$1 = state_11630;
var statearr_11661_11713 = state_11630__$1;
(statearr_11661_11713[(2)] = inst_11626);

(statearr_11661_11713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (34))){
var inst_11624 = (state_11630[(2)]);
var state_11630__$1 = state_11630;
var statearr_11662_11714 = state_11630__$1;
(statearr_11662_11714[(2)] = inst_11624);

(statearr_11662_11714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (17))){
var state_11630__$1 = state_11630;
var statearr_11663_11715 = state_11630__$1;
(statearr_11663_11715[(2)] = false);

(statearr_11663_11715[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (3))){
var state_11630__$1 = state_11630;
var statearr_11664_11716 = state_11630__$1;
(statearr_11664_11716[(2)] = false);

(statearr_11664_11716[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (12))){
var inst_11628 = (state_11630[(2)]);
var state_11630__$1 = state_11630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11630__$1,inst_11628);
} else {
if((state_val_11631 === (2))){
var inst_11532 = (state_11630[(8)]);
var inst_11537 = inst_11532.cljs$lang$protocol_mask$partition0$;
var inst_11538 = (inst_11537 & (64));
var inst_11539 = inst_11532.cljs$core$ISeq$;
var inst_11540 = (cljs.core.PROTOCOL_SENTINEL === inst_11539);
var inst_11541 = (inst_11538) || (inst_11540);
var state_11630__$1 = state_11630;
if(cljs.core.truth_(inst_11541)){
var statearr_11665_11717 = state_11630__$1;
(statearr_11665_11717[(1)] = (5));

} else {
var statearr_11666_11718 = state_11630__$1;
(statearr_11666_11718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (23))){
var inst_11589 = (state_11630[(14)]);
var inst_11595 = (inst_11589 == null);
var state_11630__$1 = state_11630;
if(cljs.core.truth_(inst_11595)){
var statearr_11667_11719 = state_11630__$1;
(statearr_11667_11719[(1)] = (26));

} else {
var statearr_11668_11720 = state_11630__$1;
(statearr_11668_11720[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (35))){
var inst_11615 = (state_11630[(2)]);
var state_11630__$1 = state_11630;
if(cljs.core.truth_(inst_11615)){
var statearr_11669_11721 = state_11630__$1;
(statearr_11669_11721[(1)] = (36));

} else {
var statearr_11670_11722 = state_11630__$1;
(statearr_11670_11722[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (19))){
var inst_11557 = (state_11630[(7)]);
var inst_11577 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11557);
var state_11630__$1 = state_11630;
var statearr_11671_11723 = state_11630__$1;
(statearr_11671_11723[(2)] = inst_11577);

(statearr_11671_11723[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (11))){
var inst_11557 = (state_11630[(7)]);
var inst_11561 = (inst_11557 == null);
var inst_11562 = cljs.core.not.call(null,inst_11561);
var state_11630__$1 = state_11630;
if(inst_11562){
var statearr_11672_11724 = state_11630__$1;
(statearr_11672_11724[(1)] = (13));

} else {
var statearr_11673_11725 = state_11630__$1;
(statearr_11673_11725[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (9))){
var inst_11532 = (state_11630[(8)]);
var state_11630__$1 = state_11630;
var statearr_11674_11726 = state_11630__$1;
(statearr_11674_11726[(2)] = inst_11532);

(statearr_11674_11726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (5))){
var state_11630__$1 = state_11630;
var statearr_11675_11727 = state_11630__$1;
(statearr_11675_11727[(2)] = true);

(statearr_11675_11727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (14))){
var state_11630__$1 = state_11630;
var statearr_11676_11728 = state_11630__$1;
(statearr_11676_11728[(2)] = false);

(statearr_11676_11728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (26))){
var inst_11590 = (state_11630[(9)]);
var inst_11597 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11590);
var state_11630__$1 = state_11630;
var statearr_11677_11729 = state_11630__$1;
(statearr_11677_11729[(2)] = inst_11597);

(statearr_11677_11729[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (16))){
var state_11630__$1 = state_11630;
var statearr_11678_11730 = state_11630__$1;
(statearr_11678_11730[(2)] = true);

(statearr_11678_11730[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (38))){
var inst_11620 = (state_11630[(2)]);
var state_11630__$1 = state_11630;
var statearr_11679_11731 = state_11630__$1;
(statearr_11679_11731[(2)] = inst_11620);

(statearr_11679_11731[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (30))){
var inst_11590 = (state_11630[(9)]);
var inst_11581 = (state_11630[(11)]);
var inst_11582 = (state_11630[(13)]);
var inst_11607 = cljs.core.empty_QMARK_.call(null,inst_11581);
var inst_11608 = inst_11582.call(null,inst_11590);
var inst_11609 = cljs.core.not.call(null,inst_11608);
var inst_11610 = (inst_11607) && (inst_11609);
var state_11630__$1 = state_11630;
var statearr_11680_11732 = state_11630__$1;
(statearr_11680_11732[(2)] = inst_11610);

(statearr_11680_11732[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (10))){
var inst_11532 = (state_11630[(8)]);
var inst_11553 = (state_11630[(2)]);
var inst_11554 = cljs.core.get.call(null,inst_11553,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11555 = cljs.core.get.call(null,inst_11553,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11556 = cljs.core.get.call(null,inst_11553,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11557 = inst_11532;
var state_11630__$1 = (function (){var statearr_11681 = state_11630;
(statearr_11681[(16)] = inst_11556);

(statearr_11681[(7)] = inst_11557);

(statearr_11681[(17)] = inst_11554);

(statearr_11681[(18)] = inst_11555);

return statearr_11681;
})();
var statearr_11682_11733 = state_11630__$1;
(statearr_11682_11733[(2)] = null);

(statearr_11682_11733[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (18))){
var inst_11572 = (state_11630[(2)]);
var state_11630__$1 = state_11630;
var statearr_11683_11734 = state_11630__$1;
(statearr_11683_11734[(2)] = inst_11572);

(statearr_11683_11734[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (37))){
var state_11630__$1 = state_11630;
var statearr_11684_11735 = state_11630__$1;
(statearr_11684_11735[(2)] = null);

(statearr_11684_11735[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (8))){
var inst_11532 = (state_11630[(8)]);
var inst_11550 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11532);
var state_11630__$1 = state_11630;
var statearr_11685_11736 = state_11630__$1;
(statearr_11685_11736[(2)] = inst_11550);

(statearr_11685_11736[(1)] = (10));


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
});})(c__10645__auto___11690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10557__auto__,c__10645__auto___11690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10558__auto__ = null;
var cljs$core$async$mix_$_state_machine__10558__auto____0 = (function (){
var statearr_11686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11686[(0)] = cljs$core$async$mix_$_state_machine__10558__auto__);

(statearr_11686[(1)] = (1));

return statearr_11686;
});
var cljs$core$async$mix_$_state_machine__10558__auto____1 = (function (state_11630){
while(true){
var ret_value__10559__auto__ = (function (){try{while(true){
var result__10560__auto__ = switch__10557__auto__.call(null,state_11630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10560__auto__;
}
break;
}
}catch (e11687){if((e11687 instanceof Object)){
var ex__10561__auto__ = e11687;
var statearr_11688_11737 = state_11630;
(statearr_11688_11737[(5)] = ex__10561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11738 = state_11630;
state_11630 = G__11738;
continue;
} else {
return ret_value__10559__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10558__auto__ = function(state_11630){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10558__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10558__auto____1.call(this,state_11630);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10558__auto____0;
cljs$core$async$mix_$_state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10558__auto____1;
return cljs$core$async$mix_$_state_machine__10558__auto__;
})()
;})(switch__10557__auto__,c__10645__auto___11690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10647__auto__ = (function (){var statearr_11689 = f__10646__auto__.call(null);
(statearr_11689[(6)] = c__10645__auto___11690);

return statearr_11689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10647__auto__);
});})(c__10645__auto___11690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7954__auto__ = (((p == null))?null:p);
var m__7955__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7955__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7954__auto__ = (((p == null))?null:p);
var m__7955__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,p,v,ch);
} else {
var m__7955__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11740 = arguments.length;
switch (G__11740) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7954__auto__ = (((p == null))?null:p);
var m__7955__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,p);
} else {
var m__7955__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7954__auto__ = (((p == null))?null:p);
var m__7955__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7954__auto__)]);
if(!((m__7955__auto__ == null))){
return m__7955__auto__.call(null,p,v);
} else {
var m__7955__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7955__auto____$1 == null))){
return m__7955__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__11744 = arguments.length;
switch (G__11744) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__7285__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__7285__auto__)){
return or__7285__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7285__auto__,mults){
return (function (p1__11742_SHARP_){
if(cljs.core.truth_(p1__11742_SHARP_.call(null,topic))){
return p1__11742_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11742_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7285__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async11745 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11745 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11746){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11746 = meta11746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11747,meta11746__$1){
var self__ = this;
var _11747__$1 = this;
return (new cljs.core.async.t_cljs$core$async11745(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11746__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11745.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11747){
var self__ = this;
var _11747__$1 = this;
return self__.meta11746;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11745.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11745.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11745.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11745.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11745.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11745.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11745.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11745.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11746","meta11746",495297079,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11745.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11745";

cljs.core.async.t_cljs$core$async11745.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async11745");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async11745 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11745(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11746){
return (new cljs.core.async.t_cljs$core$async11745(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11746));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11745(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10645__auto___11865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10645__auto___11865,mults,ensure_mult,p){
return (function (){
var f__10646__auto__ = (function (){var switch__10557__auto__ = ((function (c__10645__auto___11865,mults,ensure_mult,p){
return (function (state_11819){
var state_val_11820 = (state_11819[(1)]);
if((state_val_11820 === (7))){
var inst_11815 = (state_11819[(2)]);
var state_11819__$1 = state_11819;
var statearr_11821_11866 = state_11819__$1;
(statearr_11821_11866[(2)] = inst_11815);

(statearr_11821_11866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (20))){
var state_11819__$1 = state_11819;
var statearr_11822_11867 = state_11819__$1;
(statearr_11822_11867[(2)] = null);

(statearr_11822_11867[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (1))){
var state_11819__$1 = state_11819;
var statearr_11823_11868 = state_11819__$1;
(statearr_11823_11868[(2)] = null);

(statearr_11823_11868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (24))){
var inst_11798 = (state_11819[(7)]);
var inst_11807 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11798);
var state_11819__$1 = state_11819;
var statearr_11824_11869 = state_11819__$1;
(statearr_11824_11869[(2)] = inst_11807);

(statearr_11824_11869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (4))){
var inst_11750 = (state_11819[(8)]);
var inst_11750__$1 = (state_11819[(2)]);
var inst_11751 = (inst_11750__$1 == null);
var state_11819__$1 = (function (){var statearr_11825 = state_11819;
(statearr_11825[(8)] = inst_11750__$1);

return statearr_11825;
})();
if(cljs.core.truth_(inst_11751)){
var statearr_11826_11870 = state_11819__$1;
(statearr_11826_11870[(1)] = (5));

} else {
var statearr_11827_11871 = state_11819__$1;
(statearr_11827_11871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (15))){
var inst_11792 = (state_11819[(2)]);
var state_11819__$1 = state_11819;
var statearr_11828_11872 = state_11819__$1;
(statearr_11828_11872[(2)] = inst_11792);

(statearr_11828_11872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (21))){
var inst_11812 = (state_11819[(2)]);
var state_11819__$1 = (function (){var statearr_11829 = state_11819;
(statearr_11829[(9)] = inst_11812);

return statearr_11829;
})();
var statearr_11830_11873 = state_11819__$1;
(statearr_11830_11873[(2)] = null);

(statearr_11830_11873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (13))){
var inst_11774 = (state_11819[(10)]);
var inst_11776 = cljs.core.chunked_seq_QMARK_.call(null,inst_11774);
var state_11819__$1 = state_11819;
if(inst_11776){
var statearr_11831_11874 = state_11819__$1;
(statearr_11831_11874[(1)] = (16));

} else {
var statearr_11832_11875 = state_11819__$1;
(statearr_11832_11875[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (22))){
var inst_11804 = (state_11819[(2)]);
var state_11819__$1 = state_11819;
if(cljs.core.truth_(inst_11804)){
var statearr_11833_11876 = state_11819__$1;
(statearr_11833_11876[(1)] = (23));

} else {
var statearr_11834_11877 = state_11819__$1;
(statearr_11834_11877[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (6))){
var inst_11750 = (state_11819[(8)]);
var inst_11800 = (state_11819[(11)]);
var inst_11798 = (state_11819[(7)]);
var inst_11798__$1 = topic_fn.call(null,inst_11750);
var inst_11799 = cljs.core.deref.call(null,mults);
var inst_11800__$1 = cljs.core.get.call(null,inst_11799,inst_11798__$1);
var state_11819__$1 = (function (){var statearr_11835 = state_11819;
(statearr_11835[(11)] = inst_11800__$1);

(statearr_11835[(7)] = inst_11798__$1);

return statearr_11835;
})();
if(cljs.core.truth_(inst_11800__$1)){
var statearr_11836_11878 = state_11819__$1;
(statearr_11836_11878[(1)] = (19));

} else {
var statearr_11837_11879 = state_11819__$1;
(statearr_11837_11879[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (25))){
var inst_11809 = (state_11819[(2)]);
var state_11819__$1 = state_11819;
var statearr_11838_11880 = state_11819__$1;
(statearr_11838_11880[(2)] = inst_11809);

(statearr_11838_11880[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (17))){
var inst_11774 = (state_11819[(10)]);
var inst_11783 = cljs.core.first.call(null,inst_11774);
var inst_11784 = cljs.core.async.muxch_STAR_.call(null,inst_11783);
var inst_11785 = cljs.core.async.close_BANG_.call(null,inst_11784);
var inst_11786 = cljs.core.next.call(null,inst_11774);
var inst_11760 = inst_11786;
var inst_11761 = null;
var inst_11762 = (0);
var inst_11763 = (0);
var state_11819__$1 = (function (){var statearr_11839 = state_11819;
(statearr_11839[(12)] = inst_11762);

(statearr_11839[(13)] = inst_11785);

(statearr_11839[(14)] = inst_11760);

(statearr_11839[(15)] = inst_11761);

(statearr_11839[(16)] = inst_11763);

return statearr_11839;
})();
var statearr_11840_11881 = state_11819__$1;
(statearr_11840_11881[(2)] = null);

(statearr_11840_11881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (3))){
var inst_11817 = (state_11819[(2)]);
var state_11819__$1 = state_11819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11819__$1,inst_11817);
} else {
if((state_val_11820 === (12))){
var inst_11794 = (state_11819[(2)]);
var state_11819__$1 = state_11819;
var statearr_11841_11882 = state_11819__$1;
(statearr_11841_11882[(2)] = inst_11794);

(statearr_11841_11882[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (2))){
var state_11819__$1 = state_11819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11819__$1,(4),ch);
} else {
if((state_val_11820 === (23))){
var state_11819__$1 = state_11819;
var statearr_11842_11883 = state_11819__$1;
(statearr_11842_11883[(2)] = null);

(statearr_11842_11883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (19))){
var inst_11750 = (state_11819[(8)]);
var inst_11800 = (state_11819[(11)]);
var inst_11802 = cljs.core.async.muxch_STAR_.call(null,inst_11800);
var state_11819__$1 = state_11819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11819__$1,(22),inst_11802,inst_11750);
} else {
if((state_val_11820 === (11))){
var inst_11760 = (state_11819[(14)]);
var inst_11774 = (state_11819[(10)]);
var inst_11774__$1 = cljs.core.seq.call(null,inst_11760);
var state_11819__$1 = (function (){var statearr_11843 = state_11819;
(statearr_11843[(10)] = inst_11774__$1);

return statearr_11843;
})();
if(inst_11774__$1){
var statearr_11844_11884 = state_11819__$1;
(statearr_11844_11884[(1)] = (13));

} else {
var statearr_11845_11885 = state_11819__$1;
(statearr_11845_11885[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (9))){
var inst_11796 = (state_11819[(2)]);
var state_11819__$1 = state_11819;
var statearr_11846_11886 = state_11819__$1;
(statearr_11846_11886[(2)] = inst_11796);

(statearr_11846_11886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (5))){
var inst_11757 = cljs.core.deref.call(null,mults);
var inst_11758 = cljs.core.vals.call(null,inst_11757);
var inst_11759 = cljs.core.seq.call(null,inst_11758);
var inst_11760 = inst_11759;
var inst_11761 = null;
var inst_11762 = (0);
var inst_11763 = (0);
var state_11819__$1 = (function (){var statearr_11847 = state_11819;
(statearr_11847[(12)] = inst_11762);

(statearr_11847[(14)] = inst_11760);

(statearr_11847[(15)] = inst_11761);

(statearr_11847[(16)] = inst_11763);

return statearr_11847;
})();
var statearr_11848_11887 = state_11819__$1;
(statearr_11848_11887[(2)] = null);

(statearr_11848_11887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (14))){
var state_11819__$1 = state_11819;
var statearr_11852_11888 = state_11819__$1;
(statearr_11852_11888[(2)] = null);

(statearr_11852_11888[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (16))){
var inst_11774 = (state_11819[(10)]);
var inst_11778 = cljs.core.chunk_first.call(null,inst_11774);
var inst_11779 = cljs.core.chunk_rest.call(null,inst_11774);
var inst_11780 = cljs.core.count.call(null,inst_11778);
var inst_11760 = inst_11779;
var inst_11761 = inst_11778;
var inst_11762 = inst_11780;
var inst_11763 = (0);
var state_11819__$1 = (function (){var statearr_11853 = state_11819;
(statearr_11853[(12)] = inst_11762);

(statearr_11853[(14)] = inst_11760);

(statearr_11853[(15)] = inst_11761);

(statearr_11853[(16)] = inst_11763);

return statearr_11853;
})();
var statearr_11854_11889 = state_11819__$1;
(statearr_11854_11889[(2)] = null);

(statearr_11854_11889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (10))){
var inst_11762 = (state_11819[(12)]);
var inst_11760 = (state_11819[(14)]);
var inst_11761 = (state_11819[(15)]);
var inst_11763 = (state_11819[(16)]);
var inst_11768 = cljs.core._nth.call(null,inst_11761,inst_11763);
var inst_11769 = cljs.core.async.muxch_STAR_.call(null,inst_11768);
var inst_11770 = cljs.core.async.close_BANG_.call(null,inst_11769);
var inst_11771 = (inst_11763 + (1));
var tmp11849 = inst_11762;
var tmp11850 = inst_11760;
var tmp11851 = inst_11761;
var inst_11760__$1 = tmp11850;
var inst_11761__$1 = tmp11851;
var inst_11762__$1 = tmp11849;
var inst_11763__$1 = inst_11771;
var state_11819__$1 = (function (){var statearr_11855 = state_11819;
(statearr_11855[(12)] = inst_11762__$1);

(statearr_11855[(17)] = inst_11770);

(statearr_11855[(14)] = inst_11760__$1);

(statearr_11855[(15)] = inst_11761__$1);

(statearr_11855[(16)] = inst_11763__$1);

return statearr_11855;
})();
var statearr_11856_11890 = state_11819__$1;
(statearr_11856_11890[(2)] = null);

(statearr_11856_11890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (18))){
var inst_11789 = (state_11819[(2)]);
var state_11819__$1 = state_11819;
var statearr_11857_11891 = state_11819__$1;
(statearr_11857_11891[(2)] = inst_11789);

(statearr_11857_11891[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (8))){
var inst_11762 = (state_11819[(12)]);
var inst_11763 = (state_11819[(16)]);
var inst_11765 = (inst_11763 < inst_11762);
var inst_11766 = inst_11765;
var state_11819__$1 = state_11819;
if(cljs.core.truth_(inst_11766)){
var statearr_11858_11892 = state_11819__$1;
(statearr_11858_11892[(1)] = (10));

} else {
var statearr_11859_11893 = state_11819__$1;
(statearr_11859_11893[(1)] = (11));

}

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
});})(c__10645__auto___11865,mults,ensure_mult,p))
;
return ((function (switch__10557__auto__,c__10645__auto___11865,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10558__auto__ = null;
var cljs$core$async$state_machine__10558__auto____0 = (function (){
var statearr_11860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11860[(0)] = cljs$core$async$state_machine__10558__auto__);

(statearr_11860[(1)] = (1));

return statearr_11860;
});
var cljs$core$async$state_machine__10558__auto____1 = (function (state_11819){
while(true){
var ret_value__10559__auto__ = (function (){try{while(true){
var result__10560__auto__ = switch__10557__auto__.call(null,state_11819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10560__auto__;
}
break;
}
}catch (e11861){if((e11861 instanceof Object)){
var ex__10561__auto__ = e11861;
var statearr_11862_11894 = state_11819;
(statearr_11862_11894[(5)] = ex__10561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11895 = state_11819;
state_11819 = G__11895;
continue;
} else {
return ret_value__10559__auto__;
}
break;
}
});
cljs$core$async$state_machine__10558__auto__ = function(state_11819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10558__auto____1.call(this,state_11819);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10558__auto____0;
cljs$core$async$state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10558__auto____1;
return cljs$core$async$state_machine__10558__auto__;
})()
;})(switch__10557__auto__,c__10645__auto___11865,mults,ensure_mult,p))
})();
var state__10647__auto__ = (function (){var statearr_11863 = f__10646__auto__.call(null);
(statearr_11863[(6)] = c__10645__auto___11865);

return statearr_11863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10647__auto__);
});})(c__10645__auto___11865,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__11897 = arguments.length;
switch (G__11897) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__11900 = arguments.length;
switch (G__11900) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__11903 = arguments.length;
switch (G__11903) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__10645__auto___11970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10645__auto___11970,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10646__auto__ = (function (){var switch__10557__auto__ = ((function (c__10645__auto___11970,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11942){
var state_val_11943 = (state_11942[(1)]);
if((state_val_11943 === (7))){
var state_11942__$1 = state_11942;
var statearr_11944_11971 = state_11942__$1;
(statearr_11944_11971[(2)] = null);

(statearr_11944_11971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11943 === (1))){
var state_11942__$1 = state_11942;
var statearr_11945_11972 = state_11942__$1;
(statearr_11945_11972[(2)] = null);

(statearr_11945_11972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11943 === (4))){
var inst_11906 = (state_11942[(7)]);
var inst_11908 = (inst_11906 < cnt);
var state_11942__$1 = state_11942;
if(cljs.core.truth_(inst_11908)){
var statearr_11946_11973 = state_11942__$1;
(statearr_11946_11973[(1)] = (6));

} else {
var statearr_11947_11974 = state_11942__$1;
(statearr_11947_11974[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11943 === (15))){
var inst_11938 = (state_11942[(2)]);
var state_11942__$1 = state_11942;
var statearr_11948_11975 = state_11942__$1;
(statearr_11948_11975[(2)] = inst_11938);

(statearr_11948_11975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11943 === (13))){
var inst_11931 = cljs.core.async.close_BANG_.call(null,out);
var state_11942__$1 = state_11942;
var statearr_11949_11976 = state_11942__$1;
(statearr_11949_11976[(2)] = inst_11931);

(statearr_11949_11976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11943 === (6))){
var state_11942__$1 = state_11942;
var statearr_11950_11977 = state_11942__$1;
(statearr_11950_11977[(2)] = null);

(statearr_11950_11977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11943 === (3))){
var inst_11940 = (state_11942[(2)]);
var state_11942__$1 = state_11942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11942__$1,inst_11940);
} else {
if((state_val_11943 === (12))){
var inst_11928 = (state_11942[(8)]);
var inst_11928__$1 = (state_11942[(2)]);
var inst_11929 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11928__$1);
var state_11942__$1 = (function (){var statearr_11951 = state_11942;
(statearr_11951[(8)] = inst_11928__$1);

return statearr_11951;
})();
if(cljs.core.truth_(inst_11929)){
var statearr_11952_11978 = state_11942__$1;
(statearr_11952_11978[(1)] = (13));

} else {
var statearr_11953_11979 = state_11942__$1;
(statearr_11953_11979[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11943 === (2))){
var inst_11905 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11906 = (0);
var state_11942__$1 = (function (){var statearr_11954 = state_11942;
(statearr_11954[(7)] = inst_11906);

(statearr_11954[(9)] = inst_11905);

return statearr_11954;
})();
var statearr_11955_11980 = state_11942__$1;
(statearr_11955_11980[(2)] = null);

(statearr_11955_11980[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11943 === (11))){
var inst_11906 = (state_11942[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11942,(10),Object,null,(9));
var inst_11915 = chs__$1.call(null,inst_11906);
var inst_11916 = done.call(null,inst_11906);
var inst_11917 = cljs.core.async.take_BANG_.call(null,inst_11915,inst_11916);
var state_11942__$1 = state_11942;
var statearr_11956_11981 = state_11942__$1;
(statearr_11956_11981[(2)] = inst_11917);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11942__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11943 === (9))){
var inst_11906 = (state_11942[(7)]);
var inst_11919 = (state_11942[(2)]);
var inst_11920 = (inst_11906 + (1));
var inst_11906__$1 = inst_11920;
var state_11942__$1 = (function (){var statearr_11957 = state_11942;
(statearr_11957[(10)] = inst_11919);

(statearr_11957[(7)] = inst_11906__$1);

return statearr_11957;
})();
var statearr_11958_11982 = state_11942__$1;
(statearr_11958_11982[(2)] = null);

(statearr_11958_11982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11943 === (5))){
var inst_11926 = (state_11942[(2)]);
var state_11942__$1 = (function (){var statearr_11959 = state_11942;
(statearr_11959[(11)] = inst_11926);

return statearr_11959;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11942__$1,(12),dchan);
} else {
if((state_val_11943 === (14))){
var inst_11928 = (state_11942[(8)]);
var inst_11933 = cljs.core.apply.call(null,f,inst_11928);
var state_11942__$1 = state_11942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11942__$1,(16),out,inst_11933);
} else {
if((state_val_11943 === (16))){
var inst_11935 = (state_11942[(2)]);
var state_11942__$1 = (function (){var statearr_11960 = state_11942;
(statearr_11960[(12)] = inst_11935);

return statearr_11960;
})();
var statearr_11961_11983 = state_11942__$1;
(statearr_11961_11983[(2)] = null);

(statearr_11961_11983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11943 === (10))){
var inst_11910 = (state_11942[(2)]);
var inst_11911 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11942__$1 = (function (){var statearr_11962 = state_11942;
(statearr_11962[(13)] = inst_11910);

return statearr_11962;
})();
var statearr_11963_11984 = state_11942__$1;
(statearr_11963_11984[(2)] = inst_11911);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11942__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11943 === (8))){
var inst_11924 = (state_11942[(2)]);
var state_11942__$1 = state_11942;
var statearr_11964_11985 = state_11942__$1;
(statearr_11964_11985[(2)] = inst_11924);

(statearr_11964_11985[(1)] = (5));


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
});})(c__10645__auto___11970,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10557__auto__,c__10645__auto___11970,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10558__auto__ = null;
var cljs$core$async$state_machine__10558__auto____0 = (function (){
var statearr_11965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11965[(0)] = cljs$core$async$state_machine__10558__auto__);

(statearr_11965[(1)] = (1));

return statearr_11965;
});
var cljs$core$async$state_machine__10558__auto____1 = (function (state_11942){
while(true){
var ret_value__10559__auto__ = (function (){try{while(true){
var result__10560__auto__ = switch__10557__auto__.call(null,state_11942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10560__auto__;
}
break;
}
}catch (e11966){if((e11966 instanceof Object)){
var ex__10561__auto__ = e11966;
var statearr_11967_11986 = state_11942;
(statearr_11967_11986[(5)] = ex__10561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11987 = state_11942;
state_11942 = G__11987;
continue;
} else {
return ret_value__10559__auto__;
}
break;
}
});
cljs$core$async$state_machine__10558__auto__ = function(state_11942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10558__auto____1.call(this,state_11942);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10558__auto____0;
cljs$core$async$state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10558__auto____1;
return cljs$core$async$state_machine__10558__auto__;
})()
;})(switch__10557__auto__,c__10645__auto___11970,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10647__auto__ = (function (){var statearr_11968 = f__10646__auto__.call(null);
(statearr_11968[(6)] = c__10645__auto___11970);

return statearr_11968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10647__auto__);
});})(c__10645__auto___11970,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__11990 = arguments.length;
switch (G__11990) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10645__auto___12044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10645__auto___12044,out){
return (function (){
var f__10646__auto__ = (function (){var switch__10557__auto__ = ((function (c__10645__auto___12044,out){
return (function (state_12022){
var state_val_12023 = (state_12022[(1)]);
if((state_val_12023 === (7))){
var inst_12001 = (state_12022[(7)]);
var inst_12002 = (state_12022[(8)]);
var inst_12001__$1 = (state_12022[(2)]);
var inst_12002__$1 = cljs.core.nth.call(null,inst_12001__$1,(0),null);
var inst_12003 = cljs.core.nth.call(null,inst_12001__$1,(1),null);
var inst_12004 = (inst_12002__$1 == null);
var state_12022__$1 = (function (){var statearr_12024 = state_12022;
(statearr_12024[(7)] = inst_12001__$1);

(statearr_12024[(8)] = inst_12002__$1);

(statearr_12024[(9)] = inst_12003);

return statearr_12024;
})();
if(cljs.core.truth_(inst_12004)){
var statearr_12025_12045 = state_12022__$1;
(statearr_12025_12045[(1)] = (8));

} else {
var statearr_12026_12046 = state_12022__$1;
(statearr_12026_12046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12023 === (1))){
var inst_11991 = cljs.core.vec.call(null,chs);
var inst_11992 = inst_11991;
var state_12022__$1 = (function (){var statearr_12027 = state_12022;
(statearr_12027[(10)] = inst_11992);

return statearr_12027;
})();
var statearr_12028_12047 = state_12022__$1;
(statearr_12028_12047[(2)] = null);

(statearr_12028_12047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12023 === (4))){
var inst_11992 = (state_12022[(10)]);
var state_12022__$1 = state_12022;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12022__$1,(7),inst_11992);
} else {
if((state_val_12023 === (6))){
var inst_12018 = (state_12022[(2)]);
var state_12022__$1 = state_12022;
var statearr_12029_12048 = state_12022__$1;
(statearr_12029_12048[(2)] = inst_12018);

(statearr_12029_12048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12023 === (3))){
var inst_12020 = (state_12022[(2)]);
var state_12022__$1 = state_12022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12022__$1,inst_12020);
} else {
if((state_val_12023 === (2))){
var inst_11992 = (state_12022[(10)]);
var inst_11994 = cljs.core.count.call(null,inst_11992);
var inst_11995 = (inst_11994 > (0));
var state_12022__$1 = state_12022;
if(cljs.core.truth_(inst_11995)){
var statearr_12031_12049 = state_12022__$1;
(statearr_12031_12049[(1)] = (4));

} else {
var statearr_12032_12050 = state_12022__$1;
(statearr_12032_12050[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12023 === (11))){
var inst_11992 = (state_12022[(10)]);
var inst_12011 = (state_12022[(2)]);
var tmp12030 = inst_11992;
var inst_11992__$1 = tmp12030;
var state_12022__$1 = (function (){var statearr_12033 = state_12022;
(statearr_12033[(11)] = inst_12011);

(statearr_12033[(10)] = inst_11992__$1);

return statearr_12033;
})();
var statearr_12034_12051 = state_12022__$1;
(statearr_12034_12051[(2)] = null);

(statearr_12034_12051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12023 === (9))){
var inst_12002 = (state_12022[(8)]);
var state_12022__$1 = state_12022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12022__$1,(11),out,inst_12002);
} else {
if((state_val_12023 === (5))){
var inst_12016 = cljs.core.async.close_BANG_.call(null,out);
var state_12022__$1 = state_12022;
var statearr_12035_12052 = state_12022__$1;
(statearr_12035_12052[(2)] = inst_12016);

(statearr_12035_12052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12023 === (10))){
var inst_12014 = (state_12022[(2)]);
var state_12022__$1 = state_12022;
var statearr_12036_12053 = state_12022__$1;
(statearr_12036_12053[(2)] = inst_12014);

(statearr_12036_12053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12023 === (8))){
var inst_11992 = (state_12022[(10)]);
var inst_12001 = (state_12022[(7)]);
var inst_12002 = (state_12022[(8)]);
var inst_12003 = (state_12022[(9)]);
var inst_12006 = (function (){var cs = inst_11992;
var vec__11997 = inst_12001;
var v = inst_12002;
var c = inst_12003;
return ((function (cs,vec__11997,v,c,inst_11992,inst_12001,inst_12002,inst_12003,state_val_12023,c__10645__auto___12044,out){
return (function (p1__11988_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11988_SHARP_);
});
;})(cs,vec__11997,v,c,inst_11992,inst_12001,inst_12002,inst_12003,state_val_12023,c__10645__auto___12044,out))
})();
var inst_12007 = cljs.core.filterv.call(null,inst_12006,inst_11992);
var inst_11992__$1 = inst_12007;
var state_12022__$1 = (function (){var statearr_12037 = state_12022;
(statearr_12037[(10)] = inst_11992__$1);

return statearr_12037;
})();
var statearr_12038_12054 = state_12022__$1;
(statearr_12038_12054[(2)] = null);

(statearr_12038_12054[(1)] = (2));


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
});})(c__10645__auto___12044,out))
;
return ((function (switch__10557__auto__,c__10645__auto___12044,out){
return (function() {
var cljs$core$async$state_machine__10558__auto__ = null;
var cljs$core$async$state_machine__10558__auto____0 = (function (){
var statearr_12039 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12039[(0)] = cljs$core$async$state_machine__10558__auto__);

(statearr_12039[(1)] = (1));

return statearr_12039;
});
var cljs$core$async$state_machine__10558__auto____1 = (function (state_12022){
while(true){
var ret_value__10559__auto__ = (function (){try{while(true){
var result__10560__auto__ = switch__10557__auto__.call(null,state_12022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10560__auto__;
}
break;
}
}catch (e12040){if((e12040 instanceof Object)){
var ex__10561__auto__ = e12040;
var statearr_12041_12055 = state_12022;
(statearr_12041_12055[(5)] = ex__10561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12056 = state_12022;
state_12022 = G__12056;
continue;
} else {
return ret_value__10559__auto__;
}
break;
}
});
cljs$core$async$state_machine__10558__auto__ = function(state_12022){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10558__auto____1.call(this,state_12022);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10558__auto____0;
cljs$core$async$state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10558__auto____1;
return cljs$core$async$state_machine__10558__auto__;
})()
;})(switch__10557__auto__,c__10645__auto___12044,out))
})();
var state__10647__auto__ = (function (){var statearr_12042 = f__10646__auto__.call(null);
(statearr_12042[(6)] = c__10645__auto___12044);

return statearr_12042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10647__auto__);
});})(c__10645__auto___12044,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__12058 = arguments.length;
switch (G__12058) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10645__auto___12103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10645__auto___12103,out){
return (function (){
var f__10646__auto__ = (function (){var switch__10557__auto__ = ((function (c__10645__auto___12103,out){
return (function (state_12082){
var state_val_12083 = (state_12082[(1)]);
if((state_val_12083 === (7))){
var inst_12064 = (state_12082[(7)]);
var inst_12064__$1 = (state_12082[(2)]);
var inst_12065 = (inst_12064__$1 == null);
var inst_12066 = cljs.core.not.call(null,inst_12065);
var state_12082__$1 = (function (){var statearr_12084 = state_12082;
(statearr_12084[(7)] = inst_12064__$1);

return statearr_12084;
})();
if(inst_12066){
var statearr_12085_12104 = state_12082__$1;
(statearr_12085_12104[(1)] = (8));

} else {
var statearr_12086_12105 = state_12082__$1;
(statearr_12086_12105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (1))){
var inst_12059 = (0);
var state_12082__$1 = (function (){var statearr_12087 = state_12082;
(statearr_12087[(8)] = inst_12059);

return statearr_12087;
})();
var statearr_12088_12106 = state_12082__$1;
(statearr_12088_12106[(2)] = null);

(statearr_12088_12106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (4))){
var state_12082__$1 = state_12082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12082__$1,(7),ch);
} else {
if((state_val_12083 === (6))){
var inst_12077 = (state_12082[(2)]);
var state_12082__$1 = state_12082;
var statearr_12089_12107 = state_12082__$1;
(statearr_12089_12107[(2)] = inst_12077);

(statearr_12089_12107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (3))){
var inst_12079 = (state_12082[(2)]);
var inst_12080 = cljs.core.async.close_BANG_.call(null,out);
var state_12082__$1 = (function (){var statearr_12090 = state_12082;
(statearr_12090[(9)] = inst_12079);

return statearr_12090;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12082__$1,inst_12080);
} else {
if((state_val_12083 === (2))){
var inst_12059 = (state_12082[(8)]);
var inst_12061 = (inst_12059 < n);
var state_12082__$1 = state_12082;
if(cljs.core.truth_(inst_12061)){
var statearr_12091_12108 = state_12082__$1;
(statearr_12091_12108[(1)] = (4));

} else {
var statearr_12092_12109 = state_12082__$1;
(statearr_12092_12109[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (11))){
var inst_12059 = (state_12082[(8)]);
var inst_12069 = (state_12082[(2)]);
var inst_12070 = (inst_12059 + (1));
var inst_12059__$1 = inst_12070;
var state_12082__$1 = (function (){var statearr_12093 = state_12082;
(statearr_12093[(8)] = inst_12059__$1);

(statearr_12093[(10)] = inst_12069);

return statearr_12093;
})();
var statearr_12094_12110 = state_12082__$1;
(statearr_12094_12110[(2)] = null);

(statearr_12094_12110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (9))){
var state_12082__$1 = state_12082;
var statearr_12095_12111 = state_12082__$1;
(statearr_12095_12111[(2)] = null);

(statearr_12095_12111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (5))){
var state_12082__$1 = state_12082;
var statearr_12096_12112 = state_12082__$1;
(statearr_12096_12112[(2)] = null);

(statearr_12096_12112[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (10))){
var inst_12074 = (state_12082[(2)]);
var state_12082__$1 = state_12082;
var statearr_12097_12113 = state_12082__$1;
(statearr_12097_12113[(2)] = inst_12074);

(statearr_12097_12113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (8))){
var inst_12064 = (state_12082[(7)]);
var state_12082__$1 = state_12082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12082__$1,(11),out,inst_12064);
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
});})(c__10645__auto___12103,out))
;
return ((function (switch__10557__auto__,c__10645__auto___12103,out){
return (function() {
var cljs$core$async$state_machine__10558__auto__ = null;
var cljs$core$async$state_machine__10558__auto____0 = (function (){
var statearr_12098 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12098[(0)] = cljs$core$async$state_machine__10558__auto__);

(statearr_12098[(1)] = (1));

return statearr_12098;
});
var cljs$core$async$state_machine__10558__auto____1 = (function (state_12082){
while(true){
var ret_value__10559__auto__ = (function (){try{while(true){
var result__10560__auto__ = switch__10557__auto__.call(null,state_12082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10560__auto__;
}
break;
}
}catch (e12099){if((e12099 instanceof Object)){
var ex__10561__auto__ = e12099;
var statearr_12100_12114 = state_12082;
(statearr_12100_12114[(5)] = ex__10561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12115 = state_12082;
state_12082 = G__12115;
continue;
} else {
return ret_value__10559__auto__;
}
break;
}
});
cljs$core$async$state_machine__10558__auto__ = function(state_12082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10558__auto____1.call(this,state_12082);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10558__auto____0;
cljs$core$async$state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10558__auto____1;
return cljs$core$async$state_machine__10558__auto__;
})()
;})(switch__10557__auto__,c__10645__auto___12103,out))
})();
var state__10647__auto__ = (function (){var statearr_12101 = f__10646__auto__.call(null);
(statearr_12101[(6)] = c__10645__auto___12103);

return statearr_12101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10647__auto__);
});})(c__10645__auto___12103,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12117 = (function (f,ch,meta12118){
this.f = f;
this.ch = ch;
this.meta12118 = meta12118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12119,meta12118__$1){
var self__ = this;
var _12119__$1 = this;
return (new cljs.core.async.t_cljs$core$async12117(self__.f,self__.ch,meta12118__$1));
});

cljs.core.async.t_cljs$core$async12117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12119){
var self__ = this;
var _12119__$1 = this;
return self__.meta12118;
});

cljs.core.async.t_cljs$core$async12117.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12117.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12117.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12117.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12117.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async12120 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12120 = (function (f,ch,meta12118,_,fn1,meta12121){
this.f = f;
this.ch = ch;
this.meta12118 = meta12118;
this._ = _;
this.fn1 = fn1;
this.meta12121 = meta12121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12122,meta12121__$1){
var self__ = this;
var _12122__$1 = this;
return (new cljs.core.async.t_cljs$core$async12120(self__.f,self__.ch,self__.meta12118,self__._,self__.fn1,meta12121__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async12120.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12122){
var self__ = this;
var _12122__$1 = this;
return self__.meta12121;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12120.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12120.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12120.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12120.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__12116_SHARP_){
return f1.call(null,(((p1__12116_SHARP_ == null))?null:self__.f.call(null,p1__12116_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async12120.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12118","meta12118",1702177398,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12117","cljs.core.async/t_cljs$core$async12117",1341039880,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12121","meta12121",-821422867,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12120.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12120";

cljs.core.async.t_cljs$core$async12120.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async12120");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async12120 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12120(f__$1,ch__$1,meta12118__$1,___$2,fn1__$1,meta12121){
return (new cljs.core.async.t_cljs$core$async12120(f__$1,ch__$1,meta12118__$1,___$2,fn1__$1,meta12121));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async12120(self__.f,self__.ch,self__.meta12118,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7273__auto__ = ret;
if(cljs.core.truth_(and__7273__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__7273__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async12117.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12117.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async12117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12118","meta12118",1702177398,null)], null);
});

cljs.core.async.t_cljs$core$async12117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12117";

cljs.core.async.t_cljs$core$async12117.cljs$lang$ctorPrWriter = (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async12117");
});

cljs.core.async.__GT_t_cljs$core$async12117 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12117(f__$1,ch__$1,meta12118){
return (new cljs.core.async.t_cljs$core$async12117(f__$1,ch__$1,meta12118));
});

}

return (new cljs.core.async.t_cljs$core$async12117(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12123 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12123 = (function (f,ch,meta12124){
this.f = f;
this.ch = ch;
this.meta12124 = meta12124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12125,meta12124__$1){
var self__ = this;
var _12125__$1 = this;
return (new cljs.core.async.t_cljs$core$async12123(self__.f,self__.ch,meta12124__$1));
});

cljs.core.async.t_cljs$core$async12123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12125){
var self__ = this;
var _12125__$1 = this;
return self__.meta12124;
});

cljs.core.async.t_cljs$core$async12123.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12123.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12123.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12123.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12123.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12123.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async12123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12124","meta12124",336616419,null)], null);
});

cljs.core.async.t_cljs$core$async12123.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12123";

cljs.core.async.t_cljs$core$async12123.cljs$lang$ctorPrWriter = (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async12123");
});

cljs.core.async.__GT_t_cljs$core$async12123 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12123(f__$1,ch__$1,meta12124){
return (new cljs.core.async.t_cljs$core$async12123(f__$1,ch__$1,meta12124));
});

}

return (new cljs.core.async.t_cljs$core$async12123(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async12126 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12126 = (function (p,ch,meta12127){
this.p = p;
this.ch = ch;
this.meta12127 = meta12127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12128,meta12127__$1){
var self__ = this;
var _12128__$1 = this;
return (new cljs.core.async.t_cljs$core$async12126(self__.p,self__.ch,meta12127__$1));
});

cljs.core.async.t_cljs$core$async12126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12128){
var self__ = this;
var _12128__$1 = this;
return self__.meta12127;
});

cljs.core.async.t_cljs$core$async12126.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12126.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12126.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12126.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12126.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12126.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12126.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async12126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12127","meta12127",363485531,null)], null);
});

cljs.core.async.t_cljs$core$async12126.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12126.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12126";

cljs.core.async.t_cljs$core$async12126.cljs$lang$ctorPrWriter = (function (this__7896__auto__,writer__7897__auto__,opt__7898__auto__){
return cljs.core._write.call(null,writer__7897__auto__,"cljs.core.async/t_cljs$core$async12126");
});

cljs.core.async.__GT_t_cljs$core$async12126 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12126(p__$1,ch__$1,meta12127){
return (new cljs.core.async.t_cljs$core$async12126(p__$1,ch__$1,meta12127));
});

}

return (new cljs.core.async.t_cljs$core$async12126(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__12130 = arguments.length;
switch (G__12130) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10645__auto___12170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10645__auto___12170,out){
return (function (){
var f__10646__auto__ = (function (){var switch__10557__auto__ = ((function (c__10645__auto___12170,out){
return (function (state_12151){
var state_val_12152 = (state_12151[(1)]);
if((state_val_12152 === (7))){
var inst_12147 = (state_12151[(2)]);
var state_12151__$1 = state_12151;
var statearr_12153_12171 = state_12151__$1;
(statearr_12153_12171[(2)] = inst_12147);

(statearr_12153_12171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (1))){
var state_12151__$1 = state_12151;
var statearr_12154_12172 = state_12151__$1;
(statearr_12154_12172[(2)] = null);

(statearr_12154_12172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (4))){
var inst_12133 = (state_12151[(7)]);
var inst_12133__$1 = (state_12151[(2)]);
var inst_12134 = (inst_12133__$1 == null);
var state_12151__$1 = (function (){var statearr_12155 = state_12151;
(statearr_12155[(7)] = inst_12133__$1);

return statearr_12155;
})();
if(cljs.core.truth_(inst_12134)){
var statearr_12156_12173 = state_12151__$1;
(statearr_12156_12173[(1)] = (5));

} else {
var statearr_12157_12174 = state_12151__$1;
(statearr_12157_12174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (6))){
var inst_12133 = (state_12151[(7)]);
var inst_12138 = p.call(null,inst_12133);
var state_12151__$1 = state_12151;
if(cljs.core.truth_(inst_12138)){
var statearr_12158_12175 = state_12151__$1;
(statearr_12158_12175[(1)] = (8));

} else {
var statearr_12159_12176 = state_12151__$1;
(statearr_12159_12176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (3))){
var inst_12149 = (state_12151[(2)]);
var state_12151__$1 = state_12151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12151__$1,inst_12149);
} else {
if((state_val_12152 === (2))){
var state_12151__$1 = state_12151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12151__$1,(4),ch);
} else {
if((state_val_12152 === (11))){
var inst_12141 = (state_12151[(2)]);
var state_12151__$1 = state_12151;
var statearr_12160_12177 = state_12151__$1;
(statearr_12160_12177[(2)] = inst_12141);

(statearr_12160_12177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (9))){
var state_12151__$1 = state_12151;
var statearr_12161_12178 = state_12151__$1;
(statearr_12161_12178[(2)] = null);

(statearr_12161_12178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (5))){
var inst_12136 = cljs.core.async.close_BANG_.call(null,out);
var state_12151__$1 = state_12151;
var statearr_12162_12179 = state_12151__$1;
(statearr_12162_12179[(2)] = inst_12136);

(statearr_12162_12179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (10))){
var inst_12144 = (state_12151[(2)]);
var state_12151__$1 = (function (){var statearr_12163 = state_12151;
(statearr_12163[(8)] = inst_12144);

return statearr_12163;
})();
var statearr_12164_12180 = state_12151__$1;
(statearr_12164_12180[(2)] = null);

(statearr_12164_12180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (8))){
var inst_12133 = (state_12151[(7)]);
var state_12151__$1 = state_12151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12151__$1,(11),out,inst_12133);
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
});})(c__10645__auto___12170,out))
;
return ((function (switch__10557__auto__,c__10645__auto___12170,out){
return (function() {
var cljs$core$async$state_machine__10558__auto__ = null;
var cljs$core$async$state_machine__10558__auto____0 = (function (){
var statearr_12165 = [null,null,null,null,null,null,null,null,null];
(statearr_12165[(0)] = cljs$core$async$state_machine__10558__auto__);

(statearr_12165[(1)] = (1));

return statearr_12165;
});
var cljs$core$async$state_machine__10558__auto____1 = (function (state_12151){
while(true){
var ret_value__10559__auto__ = (function (){try{while(true){
var result__10560__auto__ = switch__10557__auto__.call(null,state_12151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10560__auto__;
}
break;
}
}catch (e12166){if((e12166 instanceof Object)){
var ex__10561__auto__ = e12166;
var statearr_12167_12181 = state_12151;
(statearr_12167_12181[(5)] = ex__10561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12182 = state_12151;
state_12151 = G__12182;
continue;
} else {
return ret_value__10559__auto__;
}
break;
}
});
cljs$core$async$state_machine__10558__auto__ = function(state_12151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10558__auto____1.call(this,state_12151);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10558__auto____0;
cljs$core$async$state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10558__auto____1;
return cljs$core$async$state_machine__10558__auto__;
})()
;})(switch__10557__auto__,c__10645__auto___12170,out))
})();
var state__10647__auto__ = (function (){var statearr_12168 = f__10646__auto__.call(null);
(statearr_12168[(6)] = c__10645__auto___12170);

return statearr_12168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10647__auto__);
});})(c__10645__auto___12170,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12184 = arguments.length;
switch (G__12184) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10645__auto__){
return (function (){
var f__10646__auto__ = (function (){var switch__10557__auto__ = ((function (c__10645__auto__){
return (function (state_12247){
var state_val_12248 = (state_12247[(1)]);
if((state_val_12248 === (7))){
var inst_12243 = (state_12247[(2)]);
var state_12247__$1 = state_12247;
var statearr_12249_12287 = state_12247__$1;
(statearr_12249_12287[(2)] = inst_12243);

(statearr_12249_12287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12248 === (20))){
var inst_12213 = (state_12247[(7)]);
var inst_12224 = (state_12247[(2)]);
var inst_12225 = cljs.core.next.call(null,inst_12213);
var inst_12199 = inst_12225;
var inst_12200 = null;
var inst_12201 = (0);
var inst_12202 = (0);
var state_12247__$1 = (function (){var statearr_12250 = state_12247;
(statearr_12250[(8)] = inst_12199);

(statearr_12250[(9)] = inst_12201);

(statearr_12250[(10)] = inst_12202);

(statearr_12250[(11)] = inst_12200);

(statearr_12250[(12)] = inst_12224);

return statearr_12250;
})();
var statearr_12251_12288 = state_12247__$1;
(statearr_12251_12288[(2)] = null);

(statearr_12251_12288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12248 === (1))){
var state_12247__$1 = state_12247;
var statearr_12252_12289 = state_12247__$1;
(statearr_12252_12289[(2)] = null);

(statearr_12252_12289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12248 === (4))){
var inst_12188 = (state_12247[(13)]);
var inst_12188__$1 = (state_12247[(2)]);
var inst_12189 = (inst_12188__$1 == null);
var state_12247__$1 = (function (){var statearr_12253 = state_12247;
(statearr_12253[(13)] = inst_12188__$1);

return statearr_12253;
})();
if(cljs.core.truth_(inst_12189)){
var statearr_12254_12290 = state_12247__$1;
(statearr_12254_12290[(1)] = (5));

} else {
var statearr_12255_12291 = state_12247__$1;
(statearr_12255_12291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12248 === (15))){
var state_12247__$1 = state_12247;
var statearr_12259_12292 = state_12247__$1;
(statearr_12259_12292[(2)] = null);

(statearr_12259_12292[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12248 === (21))){
var state_12247__$1 = state_12247;
var statearr_12260_12293 = state_12247__$1;
(statearr_12260_12293[(2)] = null);

(statearr_12260_12293[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12248 === (13))){
var inst_12199 = (state_12247[(8)]);
var inst_12201 = (state_12247[(9)]);
var inst_12202 = (state_12247[(10)]);
var inst_12200 = (state_12247[(11)]);
var inst_12209 = (state_12247[(2)]);
var inst_12210 = (inst_12202 + (1));
var tmp12256 = inst_12199;
var tmp12257 = inst_12201;
var tmp12258 = inst_12200;
var inst_12199__$1 = tmp12256;
var inst_12200__$1 = tmp12258;
var inst_12201__$1 = tmp12257;
var inst_12202__$1 = inst_12210;
var state_12247__$1 = (function (){var statearr_12261 = state_12247;
(statearr_12261[(14)] = inst_12209);

(statearr_12261[(8)] = inst_12199__$1);

(statearr_12261[(9)] = inst_12201__$1);

(statearr_12261[(10)] = inst_12202__$1);

(statearr_12261[(11)] = inst_12200__$1);

return statearr_12261;
})();
var statearr_12262_12294 = state_12247__$1;
(statearr_12262_12294[(2)] = null);

(statearr_12262_12294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12248 === (22))){
var state_12247__$1 = state_12247;
var statearr_12263_12295 = state_12247__$1;
(statearr_12263_12295[(2)] = null);

(statearr_12263_12295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12248 === (6))){
var inst_12188 = (state_12247[(13)]);
var inst_12197 = f.call(null,inst_12188);
var inst_12198 = cljs.core.seq.call(null,inst_12197);
var inst_12199 = inst_12198;
var inst_12200 = null;
var inst_12201 = (0);
var inst_12202 = (0);
var state_12247__$1 = (function (){var statearr_12264 = state_12247;
(statearr_12264[(8)] = inst_12199);

(statearr_12264[(9)] = inst_12201);

(statearr_12264[(10)] = inst_12202);

(statearr_12264[(11)] = inst_12200);

return statearr_12264;
})();
var statearr_12265_12296 = state_12247__$1;
(statearr_12265_12296[(2)] = null);

(statearr_12265_12296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12248 === (17))){
var inst_12213 = (state_12247[(7)]);
var inst_12217 = cljs.core.chunk_first.call(null,inst_12213);
var inst_12218 = cljs.core.chunk_rest.call(null,inst_12213);
var inst_12219 = cljs.core.count.call(null,inst_12217);
var inst_12199 = inst_12218;
var inst_12200 = inst_12217;
var inst_12201 = inst_12219;
var inst_12202 = (0);
var state_12247__$1 = (function (){var statearr_12266 = state_12247;
(statearr_12266[(8)] = inst_12199);

(statearr_12266[(9)] = inst_12201);

(statearr_12266[(10)] = inst_12202);

(statearr_12266[(11)] = inst_12200);

return statearr_12266;
})();
var statearr_12267_12297 = state_12247__$1;
(statearr_12267_12297[(2)] = null);

(statearr_12267_12297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12248 === (3))){
var inst_12245 = (state_12247[(2)]);
var state_12247__$1 = state_12247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12247__$1,inst_12245);
} else {
if((state_val_12248 === (12))){
var inst_12233 = (state_12247[(2)]);
var state_12247__$1 = state_12247;
var statearr_12268_12298 = state_12247__$1;
(statearr_12268_12298[(2)] = inst_12233);

(statearr_12268_12298[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12248 === (2))){
var state_12247__$1 = state_12247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12247__$1,(4),in$);
} else {
if((state_val_12248 === (23))){
var inst_12241 = (state_12247[(2)]);
var state_12247__$1 = state_12247;
var statearr_12269_12299 = state_12247__$1;
(statearr_12269_12299[(2)] = inst_12241);

(statearr_12269_12299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12248 === (19))){
var inst_12228 = (state_12247[(2)]);
var state_12247__$1 = state_12247;
var statearr_12270_12300 = state_12247__$1;
(statearr_12270_12300[(2)] = inst_12228);

(statearr_12270_12300[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12248 === (11))){
var inst_12199 = (state_12247[(8)]);
var inst_12213 = (state_12247[(7)]);
var inst_12213__$1 = cljs.core.seq.call(null,inst_12199);
var state_12247__$1 = (function (){var statearr_12271 = state_12247;
(statearr_12271[(7)] = inst_12213__$1);

return statearr_12271;
})();
if(inst_12213__$1){
var statearr_12272_12301 = state_12247__$1;
(statearr_12272_12301[(1)] = (14));

} else {
var statearr_12273_12302 = state_12247__$1;
(statearr_12273_12302[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12248 === (9))){
var inst_12235 = (state_12247[(2)]);
var inst_12236 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12247__$1 = (function (){var statearr_12274 = state_12247;
(statearr_12274[(15)] = inst_12235);

return statearr_12274;
})();
if(cljs.core.truth_(inst_12236)){
var statearr_12275_12303 = state_12247__$1;
(statearr_12275_12303[(1)] = (21));

} else {
var statearr_12276_12304 = state_12247__$1;
(statearr_12276_12304[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12248 === (5))){
var inst_12191 = cljs.core.async.close_BANG_.call(null,out);
var state_12247__$1 = state_12247;
var statearr_12277_12305 = state_12247__$1;
(statearr_12277_12305[(2)] = inst_12191);

(statearr_12277_12305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12248 === (14))){
var inst_12213 = (state_12247[(7)]);
var inst_12215 = cljs.core.chunked_seq_QMARK_.call(null,inst_12213);
var state_12247__$1 = state_12247;
if(inst_12215){
var statearr_12278_12306 = state_12247__$1;
(statearr_12278_12306[(1)] = (17));

} else {
var statearr_12279_12307 = state_12247__$1;
(statearr_12279_12307[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12248 === (16))){
var inst_12231 = (state_12247[(2)]);
var state_12247__$1 = state_12247;
var statearr_12280_12308 = state_12247__$1;
(statearr_12280_12308[(2)] = inst_12231);

(statearr_12280_12308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12248 === (10))){
var inst_12202 = (state_12247[(10)]);
var inst_12200 = (state_12247[(11)]);
var inst_12207 = cljs.core._nth.call(null,inst_12200,inst_12202);
var state_12247__$1 = state_12247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12247__$1,(13),out,inst_12207);
} else {
if((state_val_12248 === (18))){
var inst_12213 = (state_12247[(7)]);
var inst_12222 = cljs.core.first.call(null,inst_12213);
var state_12247__$1 = state_12247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12247__$1,(20),out,inst_12222);
} else {
if((state_val_12248 === (8))){
var inst_12201 = (state_12247[(9)]);
var inst_12202 = (state_12247[(10)]);
var inst_12204 = (inst_12202 < inst_12201);
var inst_12205 = inst_12204;
var state_12247__$1 = state_12247;
if(cljs.core.truth_(inst_12205)){
var statearr_12281_12309 = state_12247__$1;
(statearr_12281_12309[(1)] = (10));

} else {
var statearr_12282_12310 = state_12247__$1;
(statearr_12282_12310[(1)] = (11));

}

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
});})(c__10645__auto__))
;
return ((function (switch__10557__auto__,c__10645__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10558__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10558__auto____0 = (function (){
var statearr_12283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12283[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10558__auto__);

(statearr_12283[(1)] = (1));

return statearr_12283;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10558__auto____1 = (function (state_12247){
while(true){
var ret_value__10559__auto__ = (function (){try{while(true){
var result__10560__auto__ = switch__10557__auto__.call(null,state_12247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10560__auto__;
}
break;
}
}catch (e12284){if((e12284 instanceof Object)){
var ex__10561__auto__ = e12284;
var statearr_12285_12311 = state_12247;
(statearr_12285_12311[(5)] = ex__10561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12312 = state_12247;
state_12247 = G__12312;
continue;
} else {
return ret_value__10559__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10558__auto__ = function(state_12247){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10558__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10558__auto____1.call(this,state_12247);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10558__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10558__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10558__auto__;
})()
;})(switch__10557__auto__,c__10645__auto__))
})();
var state__10647__auto__ = (function (){var statearr_12286 = f__10646__auto__.call(null);
(statearr_12286[(6)] = c__10645__auto__);

return statearr_12286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10647__auto__);
});})(c__10645__auto__))
);

return c__10645__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12314 = arguments.length;
switch (G__12314) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__12317 = arguments.length;
switch (G__12317) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__12320 = arguments.length;
switch (G__12320) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10645__auto___12367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10645__auto___12367,out){
return (function (){
var f__10646__auto__ = (function (){var switch__10557__auto__ = ((function (c__10645__auto___12367,out){
return (function (state_12344){
var state_val_12345 = (state_12344[(1)]);
if((state_val_12345 === (7))){
var inst_12339 = (state_12344[(2)]);
var state_12344__$1 = state_12344;
var statearr_12346_12368 = state_12344__$1;
(statearr_12346_12368[(2)] = inst_12339);

(statearr_12346_12368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12345 === (1))){
var inst_12321 = null;
var state_12344__$1 = (function (){var statearr_12347 = state_12344;
(statearr_12347[(7)] = inst_12321);

return statearr_12347;
})();
var statearr_12348_12369 = state_12344__$1;
(statearr_12348_12369[(2)] = null);

(statearr_12348_12369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12345 === (4))){
var inst_12324 = (state_12344[(8)]);
var inst_12324__$1 = (state_12344[(2)]);
var inst_12325 = (inst_12324__$1 == null);
var inst_12326 = cljs.core.not.call(null,inst_12325);
var state_12344__$1 = (function (){var statearr_12349 = state_12344;
(statearr_12349[(8)] = inst_12324__$1);

return statearr_12349;
})();
if(inst_12326){
var statearr_12350_12370 = state_12344__$1;
(statearr_12350_12370[(1)] = (5));

} else {
var statearr_12351_12371 = state_12344__$1;
(statearr_12351_12371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12345 === (6))){
var state_12344__$1 = state_12344;
var statearr_12352_12372 = state_12344__$1;
(statearr_12352_12372[(2)] = null);

(statearr_12352_12372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12345 === (3))){
var inst_12341 = (state_12344[(2)]);
var inst_12342 = cljs.core.async.close_BANG_.call(null,out);
var state_12344__$1 = (function (){var statearr_12353 = state_12344;
(statearr_12353[(9)] = inst_12341);

return statearr_12353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12344__$1,inst_12342);
} else {
if((state_val_12345 === (2))){
var state_12344__$1 = state_12344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12344__$1,(4),ch);
} else {
if((state_val_12345 === (11))){
var inst_12324 = (state_12344[(8)]);
var inst_12333 = (state_12344[(2)]);
var inst_12321 = inst_12324;
var state_12344__$1 = (function (){var statearr_12354 = state_12344;
(statearr_12354[(10)] = inst_12333);

(statearr_12354[(7)] = inst_12321);

return statearr_12354;
})();
var statearr_12355_12373 = state_12344__$1;
(statearr_12355_12373[(2)] = null);

(statearr_12355_12373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12345 === (9))){
var inst_12324 = (state_12344[(8)]);
var state_12344__$1 = state_12344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12344__$1,(11),out,inst_12324);
} else {
if((state_val_12345 === (5))){
var inst_12324 = (state_12344[(8)]);
var inst_12321 = (state_12344[(7)]);
var inst_12328 = cljs.core._EQ_.call(null,inst_12324,inst_12321);
var state_12344__$1 = state_12344;
if(inst_12328){
var statearr_12357_12374 = state_12344__$1;
(statearr_12357_12374[(1)] = (8));

} else {
var statearr_12358_12375 = state_12344__$1;
(statearr_12358_12375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12345 === (10))){
var inst_12336 = (state_12344[(2)]);
var state_12344__$1 = state_12344;
var statearr_12359_12376 = state_12344__$1;
(statearr_12359_12376[(2)] = inst_12336);

(statearr_12359_12376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12345 === (8))){
var inst_12321 = (state_12344[(7)]);
var tmp12356 = inst_12321;
var inst_12321__$1 = tmp12356;
var state_12344__$1 = (function (){var statearr_12360 = state_12344;
(statearr_12360[(7)] = inst_12321__$1);

return statearr_12360;
})();
var statearr_12361_12377 = state_12344__$1;
(statearr_12361_12377[(2)] = null);

(statearr_12361_12377[(1)] = (2));


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
});})(c__10645__auto___12367,out))
;
return ((function (switch__10557__auto__,c__10645__auto___12367,out){
return (function() {
var cljs$core$async$state_machine__10558__auto__ = null;
var cljs$core$async$state_machine__10558__auto____0 = (function (){
var statearr_12362 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12362[(0)] = cljs$core$async$state_machine__10558__auto__);

(statearr_12362[(1)] = (1));

return statearr_12362;
});
var cljs$core$async$state_machine__10558__auto____1 = (function (state_12344){
while(true){
var ret_value__10559__auto__ = (function (){try{while(true){
var result__10560__auto__ = switch__10557__auto__.call(null,state_12344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10560__auto__;
}
break;
}
}catch (e12363){if((e12363 instanceof Object)){
var ex__10561__auto__ = e12363;
var statearr_12364_12378 = state_12344;
(statearr_12364_12378[(5)] = ex__10561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12379 = state_12344;
state_12344 = G__12379;
continue;
} else {
return ret_value__10559__auto__;
}
break;
}
});
cljs$core$async$state_machine__10558__auto__ = function(state_12344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10558__auto____1.call(this,state_12344);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10558__auto____0;
cljs$core$async$state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10558__auto____1;
return cljs$core$async$state_machine__10558__auto__;
})()
;})(switch__10557__auto__,c__10645__auto___12367,out))
})();
var state__10647__auto__ = (function (){var statearr_12365 = f__10646__auto__.call(null);
(statearr_12365[(6)] = c__10645__auto___12367);

return statearr_12365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10647__auto__);
});})(c__10645__auto___12367,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12381 = arguments.length;
switch (G__12381) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10645__auto___12447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10645__auto___12447,out){
return (function (){
var f__10646__auto__ = (function (){var switch__10557__auto__ = ((function (c__10645__auto___12447,out){
return (function (state_12419){
var state_val_12420 = (state_12419[(1)]);
if((state_val_12420 === (7))){
var inst_12415 = (state_12419[(2)]);
var state_12419__$1 = state_12419;
var statearr_12421_12448 = state_12419__$1;
(statearr_12421_12448[(2)] = inst_12415);

(statearr_12421_12448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12420 === (1))){
var inst_12382 = (new Array(n));
var inst_12383 = inst_12382;
var inst_12384 = (0);
var state_12419__$1 = (function (){var statearr_12422 = state_12419;
(statearr_12422[(7)] = inst_12383);

(statearr_12422[(8)] = inst_12384);

return statearr_12422;
})();
var statearr_12423_12449 = state_12419__$1;
(statearr_12423_12449[(2)] = null);

(statearr_12423_12449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12420 === (4))){
var inst_12387 = (state_12419[(9)]);
var inst_12387__$1 = (state_12419[(2)]);
var inst_12388 = (inst_12387__$1 == null);
var inst_12389 = cljs.core.not.call(null,inst_12388);
var state_12419__$1 = (function (){var statearr_12424 = state_12419;
(statearr_12424[(9)] = inst_12387__$1);

return statearr_12424;
})();
if(inst_12389){
var statearr_12425_12450 = state_12419__$1;
(statearr_12425_12450[(1)] = (5));

} else {
var statearr_12426_12451 = state_12419__$1;
(statearr_12426_12451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12420 === (15))){
var inst_12409 = (state_12419[(2)]);
var state_12419__$1 = state_12419;
var statearr_12427_12452 = state_12419__$1;
(statearr_12427_12452[(2)] = inst_12409);

(statearr_12427_12452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12420 === (13))){
var state_12419__$1 = state_12419;
var statearr_12428_12453 = state_12419__$1;
(statearr_12428_12453[(2)] = null);

(statearr_12428_12453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12420 === (6))){
var inst_12384 = (state_12419[(8)]);
var inst_12405 = (inst_12384 > (0));
var state_12419__$1 = state_12419;
if(cljs.core.truth_(inst_12405)){
var statearr_12429_12454 = state_12419__$1;
(statearr_12429_12454[(1)] = (12));

} else {
var statearr_12430_12455 = state_12419__$1;
(statearr_12430_12455[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12420 === (3))){
var inst_12417 = (state_12419[(2)]);
var state_12419__$1 = state_12419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12419__$1,inst_12417);
} else {
if((state_val_12420 === (12))){
var inst_12383 = (state_12419[(7)]);
var inst_12407 = cljs.core.vec.call(null,inst_12383);
var state_12419__$1 = state_12419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12419__$1,(15),out,inst_12407);
} else {
if((state_val_12420 === (2))){
var state_12419__$1 = state_12419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12419__$1,(4),ch);
} else {
if((state_val_12420 === (11))){
var inst_12399 = (state_12419[(2)]);
var inst_12400 = (new Array(n));
var inst_12383 = inst_12400;
var inst_12384 = (0);
var state_12419__$1 = (function (){var statearr_12431 = state_12419;
(statearr_12431[(10)] = inst_12399);

(statearr_12431[(7)] = inst_12383);

(statearr_12431[(8)] = inst_12384);

return statearr_12431;
})();
var statearr_12432_12456 = state_12419__$1;
(statearr_12432_12456[(2)] = null);

(statearr_12432_12456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12420 === (9))){
var inst_12383 = (state_12419[(7)]);
var inst_12397 = cljs.core.vec.call(null,inst_12383);
var state_12419__$1 = state_12419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12419__$1,(11),out,inst_12397);
} else {
if((state_val_12420 === (5))){
var inst_12383 = (state_12419[(7)]);
var inst_12392 = (state_12419[(11)]);
var inst_12387 = (state_12419[(9)]);
var inst_12384 = (state_12419[(8)]);
var inst_12391 = (inst_12383[inst_12384] = inst_12387);
var inst_12392__$1 = (inst_12384 + (1));
var inst_12393 = (inst_12392__$1 < n);
var state_12419__$1 = (function (){var statearr_12433 = state_12419;
(statearr_12433[(11)] = inst_12392__$1);

(statearr_12433[(12)] = inst_12391);

return statearr_12433;
})();
if(cljs.core.truth_(inst_12393)){
var statearr_12434_12457 = state_12419__$1;
(statearr_12434_12457[(1)] = (8));

} else {
var statearr_12435_12458 = state_12419__$1;
(statearr_12435_12458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12420 === (14))){
var inst_12412 = (state_12419[(2)]);
var inst_12413 = cljs.core.async.close_BANG_.call(null,out);
var state_12419__$1 = (function (){var statearr_12437 = state_12419;
(statearr_12437[(13)] = inst_12412);

return statearr_12437;
})();
var statearr_12438_12459 = state_12419__$1;
(statearr_12438_12459[(2)] = inst_12413);

(statearr_12438_12459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12420 === (10))){
var inst_12403 = (state_12419[(2)]);
var state_12419__$1 = state_12419;
var statearr_12439_12460 = state_12419__$1;
(statearr_12439_12460[(2)] = inst_12403);

(statearr_12439_12460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12420 === (8))){
var inst_12383 = (state_12419[(7)]);
var inst_12392 = (state_12419[(11)]);
var tmp12436 = inst_12383;
var inst_12383__$1 = tmp12436;
var inst_12384 = inst_12392;
var state_12419__$1 = (function (){var statearr_12440 = state_12419;
(statearr_12440[(7)] = inst_12383__$1);

(statearr_12440[(8)] = inst_12384);

return statearr_12440;
})();
var statearr_12441_12461 = state_12419__$1;
(statearr_12441_12461[(2)] = null);

(statearr_12441_12461[(1)] = (2));


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
});})(c__10645__auto___12447,out))
;
return ((function (switch__10557__auto__,c__10645__auto___12447,out){
return (function() {
var cljs$core$async$state_machine__10558__auto__ = null;
var cljs$core$async$state_machine__10558__auto____0 = (function (){
var statearr_12442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12442[(0)] = cljs$core$async$state_machine__10558__auto__);

(statearr_12442[(1)] = (1));

return statearr_12442;
});
var cljs$core$async$state_machine__10558__auto____1 = (function (state_12419){
while(true){
var ret_value__10559__auto__ = (function (){try{while(true){
var result__10560__auto__ = switch__10557__auto__.call(null,state_12419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10560__auto__;
}
break;
}
}catch (e12443){if((e12443 instanceof Object)){
var ex__10561__auto__ = e12443;
var statearr_12444_12462 = state_12419;
(statearr_12444_12462[(5)] = ex__10561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12463 = state_12419;
state_12419 = G__12463;
continue;
} else {
return ret_value__10559__auto__;
}
break;
}
});
cljs$core$async$state_machine__10558__auto__ = function(state_12419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10558__auto____1.call(this,state_12419);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10558__auto____0;
cljs$core$async$state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10558__auto____1;
return cljs$core$async$state_machine__10558__auto__;
})()
;})(switch__10557__auto__,c__10645__auto___12447,out))
})();
var state__10647__auto__ = (function (){var statearr_12445 = f__10646__auto__.call(null);
(statearr_12445[(6)] = c__10645__auto___12447);

return statearr_12445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10647__auto__);
});})(c__10645__auto___12447,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12465 = arguments.length;
switch (G__12465) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10645__auto___12535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10645__auto___12535,out){
return (function (){
var f__10646__auto__ = (function (){var switch__10557__auto__ = ((function (c__10645__auto___12535,out){
return (function (state_12507){
var state_val_12508 = (state_12507[(1)]);
if((state_val_12508 === (7))){
var inst_12503 = (state_12507[(2)]);
var state_12507__$1 = state_12507;
var statearr_12509_12536 = state_12507__$1;
(statearr_12509_12536[(2)] = inst_12503);

(statearr_12509_12536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12508 === (1))){
var inst_12466 = [];
var inst_12467 = inst_12466;
var inst_12468 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12507__$1 = (function (){var statearr_12510 = state_12507;
(statearr_12510[(7)] = inst_12467);

(statearr_12510[(8)] = inst_12468);

return statearr_12510;
})();
var statearr_12511_12537 = state_12507__$1;
(statearr_12511_12537[(2)] = null);

(statearr_12511_12537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12508 === (4))){
var inst_12471 = (state_12507[(9)]);
var inst_12471__$1 = (state_12507[(2)]);
var inst_12472 = (inst_12471__$1 == null);
var inst_12473 = cljs.core.not.call(null,inst_12472);
var state_12507__$1 = (function (){var statearr_12512 = state_12507;
(statearr_12512[(9)] = inst_12471__$1);

return statearr_12512;
})();
if(inst_12473){
var statearr_12513_12538 = state_12507__$1;
(statearr_12513_12538[(1)] = (5));

} else {
var statearr_12514_12539 = state_12507__$1;
(statearr_12514_12539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12508 === (15))){
var inst_12497 = (state_12507[(2)]);
var state_12507__$1 = state_12507;
var statearr_12515_12540 = state_12507__$1;
(statearr_12515_12540[(2)] = inst_12497);

(statearr_12515_12540[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12508 === (13))){
var state_12507__$1 = state_12507;
var statearr_12516_12541 = state_12507__$1;
(statearr_12516_12541[(2)] = null);

(statearr_12516_12541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12508 === (6))){
var inst_12467 = (state_12507[(7)]);
var inst_12492 = inst_12467.length;
var inst_12493 = (inst_12492 > (0));
var state_12507__$1 = state_12507;
if(cljs.core.truth_(inst_12493)){
var statearr_12517_12542 = state_12507__$1;
(statearr_12517_12542[(1)] = (12));

} else {
var statearr_12518_12543 = state_12507__$1;
(statearr_12518_12543[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12508 === (3))){
var inst_12505 = (state_12507[(2)]);
var state_12507__$1 = state_12507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12507__$1,inst_12505);
} else {
if((state_val_12508 === (12))){
var inst_12467 = (state_12507[(7)]);
var inst_12495 = cljs.core.vec.call(null,inst_12467);
var state_12507__$1 = state_12507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12507__$1,(15),out,inst_12495);
} else {
if((state_val_12508 === (2))){
var state_12507__$1 = state_12507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12507__$1,(4),ch);
} else {
if((state_val_12508 === (11))){
var inst_12475 = (state_12507[(10)]);
var inst_12471 = (state_12507[(9)]);
var inst_12485 = (state_12507[(2)]);
var inst_12486 = [];
var inst_12487 = inst_12486.push(inst_12471);
var inst_12467 = inst_12486;
var inst_12468 = inst_12475;
var state_12507__$1 = (function (){var statearr_12519 = state_12507;
(statearr_12519[(7)] = inst_12467);

(statearr_12519[(11)] = inst_12485);

(statearr_12519[(12)] = inst_12487);

(statearr_12519[(8)] = inst_12468);

return statearr_12519;
})();
var statearr_12520_12544 = state_12507__$1;
(statearr_12520_12544[(2)] = null);

(statearr_12520_12544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12508 === (9))){
var inst_12467 = (state_12507[(7)]);
var inst_12483 = cljs.core.vec.call(null,inst_12467);
var state_12507__$1 = state_12507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12507__$1,(11),out,inst_12483);
} else {
if((state_val_12508 === (5))){
var inst_12475 = (state_12507[(10)]);
var inst_12471 = (state_12507[(9)]);
var inst_12468 = (state_12507[(8)]);
var inst_12475__$1 = f.call(null,inst_12471);
var inst_12476 = cljs.core._EQ_.call(null,inst_12475__$1,inst_12468);
var inst_12477 = cljs.core.keyword_identical_QMARK_.call(null,inst_12468,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12478 = (inst_12476) || (inst_12477);
var state_12507__$1 = (function (){var statearr_12521 = state_12507;
(statearr_12521[(10)] = inst_12475__$1);

return statearr_12521;
})();
if(cljs.core.truth_(inst_12478)){
var statearr_12522_12545 = state_12507__$1;
(statearr_12522_12545[(1)] = (8));

} else {
var statearr_12523_12546 = state_12507__$1;
(statearr_12523_12546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12508 === (14))){
var inst_12500 = (state_12507[(2)]);
var inst_12501 = cljs.core.async.close_BANG_.call(null,out);
var state_12507__$1 = (function (){var statearr_12525 = state_12507;
(statearr_12525[(13)] = inst_12500);

return statearr_12525;
})();
var statearr_12526_12547 = state_12507__$1;
(statearr_12526_12547[(2)] = inst_12501);

(statearr_12526_12547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12508 === (10))){
var inst_12490 = (state_12507[(2)]);
var state_12507__$1 = state_12507;
var statearr_12527_12548 = state_12507__$1;
(statearr_12527_12548[(2)] = inst_12490);

(statearr_12527_12548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12508 === (8))){
var inst_12475 = (state_12507[(10)]);
var inst_12467 = (state_12507[(7)]);
var inst_12471 = (state_12507[(9)]);
var inst_12480 = inst_12467.push(inst_12471);
var tmp12524 = inst_12467;
var inst_12467__$1 = tmp12524;
var inst_12468 = inst_12475;
var state_12507__$1 = (function (){var statearr_12528 = state_12507;
(statearr_12528[(7)] = inst_12467__$1);

(statearr_12528[(8)] = inst_12468);

(statearr_12528[(14)] = inst_12480);

return statearr_12528;
})();
var statearr_12529_12549 = state_12507__$1;
(statearr_12529_12549[(2)] = null);

(statearr_12529_12549[(1)] = (2));


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
});})(c__10645__auto___12535,out))
;
return ((function (switch__10557__auto__,c__10645__auto___12535,out){
return (function() {
var cljs$core$async$state_machine__10558__auto__ = null;
var cljs$core$async$state_machine__10558__auto____0 = (function (){
var statearr_12530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12530[(0)] = cljs$core$async$state_machine__10558__auto__);

(statearr_12530[(1)] = (1));

return statearr_12530;
});
var cljs$core$async$state_machine__10558__auto____1 = (function (state_12507){
while(true){
var ret_value__10559__auto__ = (function (){try{while(true){
var result__10560__auto__ = switch__10557__auto__.call(null,state_12507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10560__auto__;
}
break;
}
}catch (e12531){if((e12531 instanceof Object)){
var ex__10561__auto__ = e12531;
var statearr_12532_12550 = state_12507;
(statearr_12532_12550[(5)] = ex__10561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12551 = state_12507;
state_12507 = G__12551;
continue;
} else {
return ret_value__10559__auto__;
}
break;
}
});
cljs$core$async$state_machine__10558__auto__ = function(state_12507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10558__auto____1.call(this,state_12507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10558__auto____0;
cljs$core$async$state_machine__10558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10558__auto____1;
return cljs$core$async$state_machine__10558__auto__;
})()
;})(switch__10557__auto__,c__10645__auto___12535,out))
})();
var state__10647__auto__ = (function (){var statearr_12533 = f__10646__auto__.call(null);
(statearr_12533[(6)] = c__10645__auto___12535);

return statearr_12533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10647__auto__);
});})(c__10645__auto___12535,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map