// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('redlobster.stream');
goog.require('cljs.core');
goog.require('redlobster.promise');
goog.require('redlobster.events');
goog.require('cljs.node');
redlobster.stream.Stream = require("stream");
redlobster.stream.createReadStream = (require("fs")["createReadStream"]);

redlobster.stream.createWriteStream = (require("fs")["createWriteStream"]);

/**
 * @interface
 */
redlobster.stream.IStream = function(){};

redlobster.stream.readable_QMARK_ = (function redlobster$stream$readable_QMARK_(this$){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$readable_QMARK_$arity$1 == null)))){
return this$.redlobster$stream$IStream$readable_QMARK_$arity$1(this$);
} else {
var x__885__auto__ = (((this$ == null))?null:this$);
var m__886__auto__ = (redlobster.stream.readable_QMARK_[goog.typeOf(x__885__auto__)]);
if(!((m__886__auto__ == null))){
return m__886__auto__.call(null,this$);
} else {
var m__886__auto____$1 = (redlobster.stream.readable_QMARK_["_"]);
if(!((m__886__auto____$1 == null))){
return m__886__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.readable?",this$);
}
}
}
});

redlobster.stream.writable_QMARK_ = (function redlobster$stream$writable_QMARK_(this$){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$writable_QMARK_$arity$1 == null)))){
return this$.redlobster$stream$IStream$writable_QMARK_$arity$1(this$);
} else {
var x__885__auto__ = (((this$ == null))?null:this$);
var m__886__auto__ = (redlobster.stream.writable_QMARK_[goog.typeOf(x__885__auto__)]);
if(!((m__886__auto__ == null))){
return m__886__auto__.call(null,this$);
} else {
var m__886__auto____$1 = (redlobster.stream.writable_QMARK_["_"]);
if(!((m__886__auto____$1 == null))){
return m__886__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.writable?",this$);
}
}
}
});

redlobster.stream.set_encoding = (function redlobster$stream$set_encoding(this$,encoding){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$set_encoding$arity$2 == null)))){
return this$.redlobster$stream$IStream$set_encoding$arity$2(this$,encoding);
} else {
var x__885__auto__ = (((this$ == null))?null:this$);
var m__886__auto__ = (redlobster.stream.set_encoding[goog.typeOf(x__885__auto__)]);
if(!((m__886__auto__ == null))){
return m__886__auto__.call(null,this$,encoding);
} else {
var m__886__auto____$1 = (redlobster.stream.set_encoding["_"]);
if(!((m__886__auto____$1 == null))){
return m__886__auto____$1.call(null,this$,encoding);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.set-encoding",this$);
}
}
}
});

redlobster.stream.pause = (function redlobster$stream$pause(this$){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$pause$arity$1 == null)))){
return this$.redlobster$stream$IStream$pause$arity$1(this$);
} else {
var x__885__auto__ = (((this$ == null))?null:this$);
var m__886__auto__ = (redlobster.stream.pause[goog.typeOf(x__885__auto__)]);
if(!((m__886__auto__ == null))){
return m__886__auto__.call(null,this$);
} else {
var m__886__auto____$1 = (redlobster.stream.pause["_"]);
if(!((m__886__auto____$1 == null))){
return m__886__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.pause",this$);
}
}
}
});

redlobster.stream.resume = (function redlobster$stream$resume(this$){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$resume$arity$1 == null)))){
return this$.redlobster$stream$IStream$resume$arity$1(this$);
} else {
var x__885__auto__ = (((this$ == null))?null:this$);
var m__886__auto__ = (redlobster.stream.resume[goog.typeOf(x__885__auto__)]);
if(!((m__886__auto__ == null))){
return m__886__auto__.call(null,this$);
} else {
var m__886__auto____$1 = (redlobster.stream.resume["_"]);
if(!((m__886__auto____$1 == null))){
return m__886__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.resume",this$);
}
}
}
});

redlobster.stream.destroy = (function redlobster$stream$destroy(this$){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$destroy$arity$1 == null)))){
return this$.redlobster$stream$IStream$destroy$arity$1(this$);
} else {
var x__885__auto__ = (((this$ == null))?null:this$);
var m__886__auto__ = (redlobster.stream.destroy[goog.typeOf(x__885__auto__)]);
if(!((m__886__auto__ == null))){
return m__886__auto__.call(null,this$);
} else {
var m__886__auto____$1 = (redlobster.stream.destroy["_"]);
if(!((m__886__auto____$1 == null))){
return m__886__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.destroy",this$);
}
}
}
});

redlobster.stream.pipe = (function redlobster$stream$pipe(this$,destination){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$pipe$arity$2 == null)))){
return this$.redlobster$stream$IStream$pipe$arity$2(this$,destination);
} else {
var x__885__auto__ = (((this$ == null))?null:this$);
var m__886__auto__ = (redlobster.stream.pipe[goog.typeOf(x__885__auto__)]);
if(!((m__886__auto__ == null))){
return m__886__auto__.call(null,this$,destination);
} else {
var m__886__auto____$1 = (redlobster.stream.pipe["_"]);
if(!((m__886__auto____$1 == null))){
return m__886__auto____$1.call(null,this$,destination);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.pipe",this$);
}
}
}
});

redlobster.stream.pipe = (function redlobster$stream$pipe(this$,destination,options){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$pipe$arity$3 == null)))){
return this$.redlobster$stream$IStream$pipe$arity$3(this$,destination,options);
} else {
var x__885__auto__ = (((this$ == null))?null:this$);
var m__886__auto__ = (redlobster.stream.pipe[goog.typeOf(x__885__auto__)]);
if(!((m__886__auto__ == null))){
return m__886__auto__.call(null,this$,destination,options);
} else {
var m__886__auto____$1 = (redlobster.stream.pipe["_"]);
if(!((m__886__auto____$1 == null))){
return m__886__auto____$1.call(null,this$,destination,options);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.pipe",this$);
}
}
}
});

redlobster.stream.write = (function redlobster$stream$write(this$,data){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$write$arity$2 == null)))){
return this$.redlobster$stream$IStream$write$arity$2(this$,data);
} else {
var x__885__auto__ = (((this$ == null))?null:this$);
var m__886__auto__ = (redlobster.stream.write[goog.typeOf(x__885__auto__)]);
if(!((m__886__auto__ == null))){
return m__886__auto__.call(null,this$,data);
} else {
var m__886__auto____$1 = (redlobster.stream.write["_"]);
if(!((m__886__auto____$1 == null))){
return m__886__auto____$1.call(null,this$,data);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.write",this$);
}
}
}
});

redlobster.stream.write = (function redlobster$stream$write(this$,data,encoding){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$write$arity$3 == null)))){
return this$.redlobster$stream$IStream$write$arity$3(this$,data,encoding);
} else {
var x__885__auto__ = (((this$ == null))?null:this$);
var m__886__auto__ = (redlobster.stream.write[goog.typeOf(x__885__auto__)]);
if(!((m__886__auto__ == null))){
return m__886__auto__.call(null,this$,data,encoding);
} else {
var m__886__auto____$1 = (redlobster.stream.write["_"]);
if(!((m__886__auto____$1 == null))){
return m__886__auto____$1.call(null,this$,data,encoding);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.write",this$);
}
}
}
});

redlobster.stream.end = (function redlobster$stream$end(this$){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$end$arity$1 == null)))){
return this$.redlobster$stream$IStream$end$arity$1(this$);
} else {
var x__885__auto__ = (((this$ == null))?null:this$);
var m__886__auto__ = (redlobster.stream.end[goog.typeOf(x__885__auto__)]);
if(!((m__886__auto__ == null))){
return m__886__auto__.call(null,this$);
} else {
var m__886__auto____$1 = (redlobster.stream.end["_"]);
if(!((m__886__auto____$1 == null))){
return m__886__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.end",this$);
}
}
}
});

redlobster.stream.end = (function redlobster$stream$end(this$,data){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$end$arity$2 == null)))){
return this$.redlobster$stream$IStream$end$arity$2(this$,data);
} else {
var x__885__auto__ = (((this$ == null))?null:this$);
var m__886__auto__ = (redlobster.stream.end[goog.typeOf(x__885__auto__)]);
if(!((m__886__auto__ == null))){
return m__886__auto__.call(null,this$,data);
} else {
var m__886__auto____$1 = (redlobster.stream.end["_"]);
if(!((m__886__auto____$1 == null))){
return m__886__auto____$1.call(null,this$,data);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.end",this$);
}
}
}
});

redlobster.stream.end = (function redlobster$stream$end(this$,data,encoding){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$end$arity$3 == null)))){
return this$.redlobster$stream$IStream$end$arity$3(this$,data,encoding);
} else {
var x__885__auto__ = (((this$ == null))?null:this$);
var m__886__auto__ = (redlobster.stream.end[goog.typeOf(x__885__auto__)]);
if(!((m__886__auto__ == null))){
return m__886__auto__.call(null,this$,data,encoding);
} else {
var m__886__auto____$1 = (redlobster.stream.end["_"]);
if(!((m__886__auto____$1 == null))){
return m__886__auto____$1.call(null,this$,data,encoding);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.end",this$);
}
}
}
});

redlobster.stream.destroy_soon = (function redlobster$stream$destroy_soon(this$){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$destroy_soon$arity$1 == null)))){
return this$.redlobster$stream$IStream$destroy_soon$arity$1(this$);
} else {
var x__885__auto__ = (((this$ == null))?null:this$);
var m__886__auto__ = (redlobster.stream.destroy_soon[goog.typeOf(x__885__auto__)]);
if(!((m__886__auto__ == null))){
return m__886__auto__.call(null,this$);
} else {
var m__886__auto____$1 = (redlobster.stream.destroy_soon["_"]);
if(!((m__886__auto____$1 == null))){
return m__886__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.destroy-soon",this$);
}
}
}
});

redlobster.stream.stream_QMARK_ = (function redlobster$stream$stream_QMARK_(v){
if(!((v == null))){
if((false) || (v.redlobster$stream$IStream$)){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,redlobster.stream.IStream,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,redlobster.stream.IStream,v);
}
});
redlobster.stream.Stream.prototype.redlobster$stream$IStream$ = true;

redlobster.stream.Stream.prototype.redlobster$stream$IStream$readable_QMARK_$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.readable;
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$writable_QMARK_$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.writable;
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$set_encoding$arity$2 = (function (this$,encoding){
var this$__$1 = this;
return this$__$1.setEncoding(encoding);
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$pause$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.pause();
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$resume$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.resume();
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$destroy$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.destroy();
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$pipe$arity$2 = (function (this$,destination){
var this$__$1 = this;
return this$__$1.pipe(destination);
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$pipe$arity$3 = (function (this$,destination,options){
var this$__$1 = this;
return this$__$1.pipe(destination,cljs.core.clj__GT_js.call(null,options));
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$write$arity$2 = (function (this$,data){
var this$__$1 = this;
return this$__$1.write(data);
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$write$arity$3 = (function (this$,data,encoding){
var this$__$1 = this;
return this$__$1.write(data,encoding);
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$end$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.end();
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$end$arity$2 = (function (this$,data){
var this$__$1 = this;
return this$__$1.end(data);
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$end$arity$3 = (function (this$,data,encoding){
var this$__$1 = this;
return this$__$1.end(data,encoding);
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$destroy_soon$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.destroySoon();
});
redlobster.stream.read_file = (function redlobster$stream$read_file(path){
return redlobster.stream.createReadStream.call(null,path);
});
redlobster.stream.write_file = (function redlobster$stream$write_file(path){
return redlobster.stream.createWriteStream.call(null,path);
});
redlobster.stream.append_data = (function redlobster$stream$append_data(current,data,encoding){
var data__$1 = (((data instanceof Buffer))?data.toString(encoding):data);
return [cljs.core.str(current),cljs.core.str(data__$1)].join('');
});
redlobster.stream.read_stream = (function redlobster$stream$read_stream(var_args){
var args__1295__auto__ = [];
var len__1288__auto___4480 = arguments.length;
var i__1289__auto___4481 = (0);
while(true){
if((i__1289__auto___4481 < len__1288__auto___4480)){
args__1295__auto__.push((arguments[i__1289__auto___4481]));

var G__4482 = (i__1289__auto___4481 + (1));
i__1289__auto___4481 = G__4482;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return redlobster.stream.read_stream.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

redlobster.stream.read_stream.cljs$core$IFn$_invoke$arity$variadic = (function (stream,p__4478){
var vec__4479 = p__4478;
var encoding = cljs.core.nth.call(null,vec__4479,(0),null);
var promise__4434__auto__ = redlobster.promise.promise.call(null);
var realise__4435__auto__ = ((function (promise__4434__auto__,vec__4479,encoding){
return (function (promise__4434__auto____$1,value__4436__auto__){
return redlobster.promise.realise.call(null,promise__4434__auto____$1,value__4436__auto__);
});})(promise__4434__auto__,vec__4479,encoding))
;
var realise_error__4437__auto__ = ((function (promise__4434__auto__,realise__4435__auto__,vec__4479,encoding){
return (function (promise__4434__auto____$1,value__4436__auto__){
return redlobster.promise.realise_error.call(null,promise__4434__auto____$1,value__4436__auto__);
});})(promise__4434__auto__,realise__4435__auto__,vec__4479,encoding))
;
var realise = cljs.core.partial.call(null,realise__4435__auto__,promise__4434__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__4437__auto__,promise__4434__auto__);
var content_4483 = cljs.core.atom.call(null,"");
var encoding_4484__$1 = (function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})();
redlobster.events.on.call(null,stream,new cljs.core.Keyword(null,"error","error",-978969032),((function (content_4483,encoding_4484__$1,promise__4434__auto__,realise__4435__auto__,realise_error__4437__auto__,realise,realise_error,vec__4479,encoding){
return (function (p1__4475_SHARP_){
return realise_error.call(null,p1__4475_SHARP_);
});})(content_4483,encoding_4484__$1,promise__4434__auto__,realise__4435__auto__,realise_error__4437__auto__,realise,realise_error,vec__4479,encoding))
);

redlobster.events.on.call(null,stream,new cljs.core.Keyword(null,"data","data",-232669377),((function (content_4483,encoding_4484__$1,promise__4434__auto__,realise__4435__auto__,realise_error__4437__auto__,realise,realise_error,vec__4479,encoding){
return (function (data){
return cljs.core.swap_BANG_.call(null,content_4483,redlobster.stream.append_data,data,encoding_4484__$1);
});})(content_4483,encoding_4484__$1,promise__4434__auto__,realise__4435__auto__,realise_error__4437__auto__,realise,realise_error,vec__4479,encoding))
);

redlobster.events.on.call(null,stream,new cljs.core.Keyword(null,"end","end",-268185958),((function (content_4483,encoding_4484__$1,promise__4434__auto__,realise__4435__auto__,realise_error__4437__auto__,realise,realise_error,vec__4479,encoding){
return (function (){
return realise.call(null,cljs.core.deref.call(null,content_4483));
});})(content_4483,encoding_4484__$1,promise__4434__auto__,realise__4435__auto__,realise_error__4437__auto__,realise,realise_error,vec__4479,encoding))
);

return promise__4434__auto__;
});

redlobster.stream.read_stream.cljs$lang$maxFixedArity = (1);

redlobster.stream.read_stream.cljs$lang$applyTo = (function (seq4476){
var G__4477 = cljs.core.first.call(null,seq4476);
var seq4476__$1 = cljs.core.next.call(null,seq4476);
return redlobster.stream.read_stream.cljs$core$IFn$_invoke$arity$variadic(G__4477,seq4476__$1);
});
redlobster.stream.read_binary_stream = (function redlobster$stream$read_binary_stream(stream){
var promise__4434__auto__ = redlobster.promise.promise.call(null);
var realise__4435__auto__ = ((function (promise__4434__auto__){
return (function (promise__4434__auto____$1,value__4436__auto__){
return redlobster.promise.realise.call(null,promise__4434__auto____$1,value__4436__auto__);
});})(promise__4434__auto__))
;
var realise_error__4437__auto__ = ((function (promise__4434__auto__,realise__4435__auto__){
return (function (promise__4434__auto____$1,value__4436__auto__){
return redlobster.promise.realise_error.call(null,promise__4434__auto____$1,value__4436__auto__);
});})(promise__4434__auto__,realise__4435__auto__))
;
var realise = cljs.core.partial.call(null,realise__4435__auto__,promise__4434__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__4437__auto__,promise__4434__auto__);
var arrays_4485 = [];
redlobster.events.on.call(null,stream,new cljs.core.Keyword(null,"error","error",-978969032),realise_error);

redlobster.events.on.call(null,stream,new cljs.core.Keyword(null,"data","data",-232669377),((function (arrays_4485,promise__4434__auto__,realise__4435__auto__,realise_error__4437__auto__,realise,realise_error){
return (function (data){
return arrays_4485.push(data);
});})(arrays_4485,promise__4434__auto__,realise__4435__auto__,realise_error__4437__auto__,realise,realise_error))
);

redlobster.events.on.call(null,stream,new cljs.core.Keyword(null,"end","end",-268185958),((function (arrays_4485,promise__4434__auto__,realise__4435__auto__,realise_error__4437__auto__,realise,realise_error){
return (function (){
return realise.call(null,Buffer.concat(arrays_4485));
});})(arrays_4485,promise__4434__auto__,realise__4435__auto__,realise_error__4437__auto__,realise,realise_error))
);

return promise__4434__auto__;
});
redlobster.stream.write_stream = (function redlobster$stream$write_stream(var_args){
var args__1295__auto__ = [];
var len__1288__auto___4492 = arguments.length;
var i__1289__auto___4493 = (0);
while(true){
if((i__1289__auto___4493 < len__1288__auto___4492)){
args__1295__auto__.push((arguments[i__1289__auto___4493]));

var G__4494 = (i__1289__auto___4493 + (1));
i__1289__auto___4493 = G__4494;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((2) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((2)),(0))):null);
return redlobster.stream.write_stream.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__1296__auto__);
});

redlobster.stream.write_stream.cljs$core$IFn$_invoke$arity$variadic = (function (stream,data,p__4490){
var vec__4491 = p__4490;
var encoding = cljs.core.nth.call(null,vec__4491,(0),null);
var promise__4434__auto__ = redlobster.promise.promise.call(null);
var realise__4435__auto__ = ((function (promise__4434__auto__,vec__4491,encoding){
return (function (promise__4434__auto____$1,value__4436__auto__){
return redlobster.promise.realise.call(null,promise__4434__auto____$1,value__4436__auto__);
});})(promise__4434__auto__,vec__4491,encoding))
;
var realise_error__4437__auto__ = ((function (promise__4434__auto__,realise__4435__auto__,vec__4491,encoding){
return (function (promise__4434__auto____$1,value__4436__auto__){
return redlobster.promise.realise_error.call(null,promise__4434__auto____$1,value__4436__auto__);
});})(promise__4434__auto__,realise__4435__auto__,vec__4491,encoding))
;
var realise = cljs.core.partial.call(null,realise__4435__auto__,promise__4434__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__4437__auto__,promise__4434__auto__);
redlobster.events.on.call(null,stream,new cljs.core.Keyword(null,"close","close",1835149582),((function (promise__4434__auto__,realise__4435__auto__,realise_error__4437__auto__,realise,realise_error,vec__4491,encoding){
return (function (){
return realise.call(null,null);
});})(promise__4434__auto__,realise__4435__auto__,realise_error__4437__auto__,realise,realise_error,vec__4491,encoding))
);

redlobster.events.on.call(null,stream,new cljs.core.Keyword(null,"error","error",-978969032),((function (promise__4434__auto__,realise__4435__auto__,realise_error__4437__auto__,realise,realise_error,vec__4491,encoding){
return (function (p1__4486_SHARP_){
return realise_error.call(null,p1__4486_SHARP_);
});})(promise__4434__auto__,realise__4435__auto__,realise_error__4437__auto__,realise,realise_error,vec__4491,encoding))
);

if(cljs.core.truth_(redlobster.stream.stream_QMARK_.call(null,data))){
data.pipe(stream);
} else {
if((data instanceof Buffer)){
stream.write(data);

stream.end();
} else {
if(typeof data === 'string'){
if(cljs.core.truth_(encoding)){
stream.write(data,encoding);
} else {
stream.write(data);
}

stream.end();
} else {
stream.end();

realise_error.call(null,new cljs.core.Keyword("redlobster.stream","unknown-datatype","redlobster.stream/unknown-datatype",-1349072327));

}
}
}

return promise__4434__auto__;
});

redlobster.stream.write_stream.cljs$lang$maxFixedArity = (2);

redlobster.stream.write_stream.cljs$lang$applyTo = (function (seq4487){
var G__4488 = cljs.core.first.call(null,seq4487);
var seq4487__$1 = cljs.core.next.call(null,seq4487);
var G__4489 = cljs.core.first.call(null,seq4487__$1);
var seq4487__$2 = cljs.core.next.call(null,seq4487__$1);
return redlobster.stream.write_stream.cljs$core$IFn$_invoke$arity$variadic(G__4488,G__4489,seq4487__$2);
});

//# sourceMappingURL=stream.js.map