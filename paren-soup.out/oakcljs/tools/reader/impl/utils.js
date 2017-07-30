// Compiled by ClojureScript 1.9.671 {}
goog.provide('oakcljs.tools.reader.impl.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
oakcljs.tools.reader.impl.utils.char$ = (function oakcljs$tools$reader$impl$utils$char(x){
if((x == null)){
return null;
} else {
return cljs.core.char$.call(null,x);
}
});
oakcljs.tools.reader.impl.utils.ex_info_QMARK_ = (function oakcljs$tools$reader$impl$utils$ex_info_QMARK_(ex){
return (ex instanceof cljs.core.ExceptionInfo);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
oakcljs.tools.reader.impl.utils.ReaderConditional = (function (splicing_QMARK_,form,__meta,__extmap,__hash){
this.splicing_QMARK_ = splicing_QMARK_;
this.form = form;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
oakcljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7911__auto__,k__7912__auto__){
var self__ = this;
var this__7911__auto____$1 = this;
return this__7911__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7912__auto__,null);
});

oakcljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7913__auto__,k8975,else__7914__auto__){
var self__ = this;
var this__7913__auto____$1 = this;
var G__8979 = k8975;
var G__8979__$1 = (((G__8979 instanceof cljs.core.Keyword))?G__8979.fqn:null);
switch (G__8979__$1) {
case "splicing?":
return self__.splicing_QMARK_;

break;
case "form":
return self__.form;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k8975,else__7914__auto__);

}
});

oakcljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7925__auto__,writer__7926__auto__,opts__7927__auto__){
var self__ = this;
var this__7925__auto____$1 = this;
var pr_pair__7928__auto__ = ((function (this__7925__auto____$1){
return (function (keyval__7929__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7926__auto__,cljs.core.pr_writer,""," ","",opts__7927__auto__,keyval__7929__auto__);
});})(this__7925__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7926__auto__,pr_pair__7928__auto__,"#oakcljs.tools.reader.impl.utils.ReaderConditional{",", ","}",opts__7927__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null))], null),self__.__extmap));
});

oakcljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8974){
var self__ = this;
var G__8974__$1 = this;
return (new cljs.core.RecordIter((0),G__8974__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),new cljs.core.Keyword(null,"form","form",-1624062471)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

oakcljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7909__auto__){
var self__ = this;
var this__7909__auto____$1 = this;
return self__.__meta;
});

oakcljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7906__auto__){
var self__ = this;
var this__7906__auto____$1 = this;
return (new oakcljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,self__.__extmap,self__.__hash));
});

oakcljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7915__auto__){
var self__ = this;
var this__7915__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

oakcljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7907__auto__){
var self__ = this;
var this__7907__auto____$1 = this;
var h__7725__auto__ = self__.__hash;
if(!((h__7725__auto__ == null))){
return h__7725__auto__;
} else {
var h__7725__auto____$1 = ((function (h__7725__auto__,this__7907__auto____$1){
return (function (coll__7908__auto__){
return (-293805204 ^ cljs.core.hash_unordered_coll.call(null,coll__7908__auto__));
});})(h__7725__auto__,this__7907__auto____$1))
.call(null,this__7907__auto____$1);
self__.__hash = h__7725__auto____$1;

return h__7725__auto____$1;
}
});

oakcljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8976,other8977){
var self__ = this;
var this8976__$1 = this;
return (!((other8977 == null))) && ((this8976__$1.constructor === other8977.constructor)) && (cljs.core._EQ_.call(null,this8976__$1.splicing_QMARK_,other8977.splicing_QMARK_)) && (cljs.core._EQ_.call(null,this8976__$1.form,other8977.form)) && (cljs.core._EQ_.call(null,this8976__$1.__extmap,other8977.__extmap));
});

oakcljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7920__auto__,k__7921__auto__){
var self__ = this;
var this__7920__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),null,new cljs.core.Keyword(null,"form","form",-1624062471),null], null), null),k__7921__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7920__auto____$1),self__.__meta),k__7921__auto__);
} else {
return (new oakcljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7921__auto__)),null));
}
});

oakcljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7918__auto__,k__7919__auto__,G__8974){
var self__ = this;
var this__7918__auto____$1 = this;
var pred__8980 = cljs.core.keyword_identical_QMARK_;
var expr__8981 = k__7919__auto__;
if(cljs.core.truth_(pred__8980.call(null,new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),expr__8981))){
return (new oakcljs.tools.reader.impl.utils.ReaderConditional(G__8974,self__.form,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8980.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),expr__8981))){
return (new oakcljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,G__8974,self__.__meta,self__.__extmap,null));
} else {
return (new oakcljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7919__auto__,G__8974),null));
}
}
});

oakcljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7923__auto__){
var self__ = this;
var this__7923__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null))], null),self__.__extmap));
});

oakcljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7910__auto__,G__8974){
var self__ = this;
var this__7910__auto____$1 = this;
return (new oakcljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,G__8974,self__.__extmap,self__.__hash));
});

oakcljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7916__auto__,entry__7917__auto__){
var self__ = this;
var this__7916__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7917__auto__)){
return this__7916__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__7917__auto__,(0)),cljs.core._nth.call(null,entry__7917__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7916__auto____$1,entry__7917__auto__);
}
});

oakcljs.tools.reader.impl.utils.ReaderConditional.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"splicing?","splicing?",1211935161,null),new cljs.core.Symbol(null,"form","form",16469056,null)], null);
});

oakcljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$type = true;

oakcljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrSeq = (function (this__7947__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"oakcljs.tools.reader.impl.utils/ReaderConditional");
});

oakcljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrWriter = (function (this__7947__auto__,writer__7948__auto__){
return cljs.core._write.call(null,writer__7948__auto__,"oakcljs.tools.reader.impl.utils/ReaderConditional");
});

oakcljs.tools.reader.impl.utils.__GT_ReaderConditional = (function oakcljs$tools$reader$impl$utils$__GT_ReaderConditional(splicing_QMARK_,form){
return (new oakcljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});

oakcljs.tools.reader.impl.utils.map__GT_ReaderConditional = (function oakcljs$tools$reader$impl$utils$map__GT_ReaderConditional(G__8978){
return (new oakcljs.tools.reader.impl.utils.ReaderConditional(new cljs.core.Keyword(null,"splicing?","splicing?",-428596366).cljs$core$IFn$_invoke$arity$1(G__8978),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(G__8978),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__8978,new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),new cljs.core.Keyword(null,"form","form",-1624062471))),null));
});

/**
 * Return true if the value is the data representation of a reader conditional
 */
oakcljs.tools.reader.impl.utils.reader_conditional_QMARK_ = (function oakcljs$tools$reader$impl$utils$reader_conditional_QMARK_(value){
return (value instanceof oakcljs.tools.reader.impl.utils.ReaderConditional);
});
/**
 * Construct a data representation of a reader conditional.
 *   If true, splicing? indicates read-cond-splicing.
 */
oakcljs.tools.reader.impl.utils.reader_conditional = (function oakcljs$tools$reader$impl$utils$reader_conditional(form,splicing_QMARK_){
return (new oakcljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});
oakcljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

oakcljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"splicing?","splicing?",-428596366).cljs$core$IFn$_invoke$arity$1(coll__$1))?"@":null))].join(''));

return cljs.core.pr_writer.call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(coll__$1),writer,opts);
});
oakcljs.tools.reader.impl.utils.ws_rx = /[\s]/;
/**
 * Checks whether a given character is whitespace
 */
oakcljs.tools.reader.impl.utils.whitespace_QMARK_ = (function oakcljs$tools$reader$impl$utils$whitespace_QMARK_(ch){
if((ch == null)){
return null;
} else {
if((ch === ",")){
return true;
} else {
return oakcljs.tools.reader.impl.utils.ws_rx.test(ch);
}
}
});
/**
 * Checks whether a given character is numeric
 */
oakcljs.tools.reader.impl.utils.numeric_QMARK_ = (function oakcljs$tools$reader$impl$utils$numeric_QMARK_(ch){
if((ch == null)){
return null;
} else {
return goog.string.isNumeric(ch);
}
});
/**
 * Checks whether the character is a newline
 */
oakcljs.tools.reader.impl.utils.newline_QMARK_ = (function oakcljs$tools$reader$impl$utils$newline_QMARK_(c){
return (("\n" === c)) || (("\n" === c)) || ((c == null));
});
/**
 * Resolves syntactical sugar in metadata
 */
oakcljs.tools.reader.impl.utils.desugar_meta = (function oakcljs$tools$reader$impl$utils$desugar_meta(f){
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([f,true]);
} else {
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
return f;

}
}
}
});
oakcljs.tools.reader.impl.utils.last_id = cljs.core.atom.call(null,(0));
oakcljs.tools.reader.impl.utils.next_id = (function oakcljs$tools$reader$impl$utils$next_id(){
return cljs.core.swap_BANG_.call(null,oakcljs.tools.reader.impl.utils.last_id,cljs.core.inc);
});
oakcljs.tools.reader.impl.utils.namespace_keys = (function oakcljs$tools$reader$impl$utils$namespace_keys(ns,keys){
var iter__8074__auto__ = (function oakcljs$tools$reader$impl$utils$namespace_keys_$_iter__8984(s__8985){
return (new cljs.core.LazySeq(null,(function (){
var s__8985__$1 = s__8985;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8985__$1);
if(temp__4657__auto__){
var s__8985__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8985__$2)){
var c__8072__auto__ = cljs.core.chunk_first.call(null,s__8985__$2);
var size__8073__auto__ = cljs.core.count.call(null,c__8072__auto__);
var b__8987 = cljs.core.chunk_buffer.call(null,size__8073__auto__);
if((function (){var i__8986 = (0);
while(true){
if((i__8986 < size__8073__auto__)){
var key = cljs.core._nth.call(null,c__8072__auto__,i__8986);
cljs.core.chunk_append.call(null,b__8987,((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword)))?(function (){var vec__8988 = cljs.core.juxt.call(null,cljs.core.namespace,cljs.core.name).call(null,key);
var key_ns = cljs.core.nth.call(null,vec__8988,(0),null);
var key_name = cljs.core.nth.call(null,vec__8988,(1),null);
var __GT_key = (((key instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.keyword);
if((key_ns == null)){
return __GT_key.call(null,ns,key_name);
} else {
if(cljs.core._EQ_.call(null,"_",key_ns)){
return __GT_key.call(null,key_name);
} else {
return key;

}
}
})():key));

var G__8994 = (i__8986 + (1));
i__8986 = G__8994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8987),oakcljs$tools$reader$impl$utils$namespace_keys_$_iter__8984.call(null,cljs.core.chunk_rest.call(null,s__8985__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8987),null);
}
} else {
var key = cljs.core.first.call(null,s__8985__$2);
return cljs.core.cons.call(null,((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword)))?(function (){var vec__8991 = cljs.core.juxt.call(null,cljs.core.namespace,cljs.core.name).call(null,key);
var key_ns = cljs.core.nth.call(null,vec__8991,(0),null);
var key_name = cljs.core.nth.call(null,vec__8991,(1),null);
var __GT_key = (((key instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.keyword);
if((key_ns == null)){
return __GT_key.call(null,ns,key_name);
} else {
if(cljs.core._EQ_.call(null,"_",key_ns)){
return __GT_key.call(null,key_name);
} else {
return key;

}
}
})():key),oakcljs$tools$reader$impl$utils$namespace_keys_$_iter__8984.call(null,cljs.core.rest.call(null,s__8985__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8074__auto__.call(null,keys);
});
oakcljs.tools.reader.impl.utils.second_SINGLEQUOTE_ = (function oakcljs$tools$reader$impl$utils$second_SINGLEQUOTE_(p__8995){
var vec__8996 = p__8995;
var a = cljs.core.nth.call(null,vec__8996,(0),null);
var b = cljs.core.nth.call(null,vec__8996,(1),null);
if(cljs.core.truth_(a)){
return null;
} else {
return b;
}
});

//# sourceMappingURL=utils.js.map