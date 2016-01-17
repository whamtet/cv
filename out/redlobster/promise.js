// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('redlobster.promise');
goog.require('cljs.core');
goog.require('redlobster.events');

/**
 * @interface
 */
redlobster.promise.IPromise = function(){};

redlobster.promise.realised_QMARK_ = (function redlobster$promise$realised_QMARK_(this$){
if((!((this$ == null))) && (!((this$.redlobster$promise$IPromise$realised_QMARK_$arity$1 == null)))){
return this$.redlobster$promise$IPromise$realised_QMARK_$arity$1(this$);
} else {
var x__885__auto__ = (((this$ == null))?null:this$);
var m__886__auto__ = (redlobster.promise.realised_QMARK_[goog.typeOf(x__885__auto__)]);
if(!((m__886__auto__ == null))){
return m__886__auto__.call(null,this$);
} else {
var m__886__auto____$1 = (redlobster.promise.realised_QMARK_["_"]);
if(!((m__886__auto____$1 == null))){
return m__886__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.realised?",this$);
}
}
}
});

redlobster.promise.failed_QMARK_ = (function redlobster$promise$failed_QMARK_(this$){
if((!((this$ == null))) && (!((this$.redlobster$promise$IPromise$failed_QMARK_$arity$1 == null)))){
return this$.redlobster$promise$IPromise$failed_QMARK_$arity$1(this$);
} else {
var x__885__auto__ = (((this$ == null))?null:this$);
var m__886__auto__ = (redlobster.promise.failed_QMARK_[goog.typeOf(x__885__auto__)]);
if(!((m__886__auto__ == null))){
return m__886__auto__.call(null,this$);
} else {
var m__886__auto____$1 = (redlobster.promise.failed_QMARK_["_"]);
if(!((m__886__auto____$1 == null))){
return m__886__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.failed?",this$);
}
}
}
});

redlobster.promise.realise = (function redlobster$promise$realise(this$,value){
if((!((this$ == null))) && (!((this$.redlobster$promise$IPromise$realise$arity$2 == null)))){
return this$.redlobster$promise$IPromise$realise$arity$2(this$,value);
} else {
var x__885__auto__ = (((this$ == null))?null:this$);
var m__886__auto__ = (redlobster.promise.realise[goog.typeOf(x__885__auto__)]);
if(!((m__886__auto__ == null))){
return m__886__auto__.call(null,this$,value);
} else {
var m__886__auto____$1 = (redlobster.promise.realise["_"]);
if(!((m__886__auto____$1 == null))){
return m__886__auto____$1.call(null,this$,value);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.realise",this$);
}
}
}
});

redlobster.promise.realise_error = (function redlobster$promise$realise_error(this$,value){
if((!((this$ == null))) && (!((this$.redlobster$promise$IPromise$realise_error$arity$2 == null)))){
return this$.redlobster$promise$IPromise$realise_error$arity$2(this$,value);
} else {
var x__885__auto__ = (((this$ == null))?null:this$);
var m__886__auto__ = (redlobster.promise.realise_error[goog.typeOf(x__885__auto__)]);
if(!((m__886__auto__ == null))){
return m__886__auto__.call(null,this$,value);
} else {
var m__886__auto____$1 = (redlobster.promise.realise_error["_"]);
if(!((m__886__auto____$1 == null))){
return m__886__auto____$1.call(null,this$,value);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.realise-error",this$);
}
}
}
});

redlobster.promise.on_realised = (function redlobster$promise$on_realised(this$,on_success,on_error){
if((!((this$ == null))) && (!((this$.redlobster$promise$IPromise$on_realised$arity$3 == null)))){
return this$.redlobster$promise$IPromise$on_realised$arity$3(this$,on_success,on_error);
} else {
var x__885__auto__ = (((this$ == null))?null:this$);
var m__886__auto__ = (redlobster.promise.on_realised[goog.typeOf(x__885__auto__)]);
if(!((m__886__auto__ == null))){
return m__886__auto__.call(null,this$,on_success,on_error);
} else {
var m__886__auto____$1 = (redlobster.promise.on_realised["_"]);
if(!((m__886__auto____$1 == null))){
return m__886__auto____$1.call(null,this$,on_success,on_error);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.on-realised",this$);
}
}
}
});

redlobster.promise.promise_QMARK_ = (function redlobster$promise$promise_QMARK_(v){
if(!((v == null))){
if((false) || (v.redlobster$promise$IPromise$)){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,redlobster.promise.IPromise,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,redlobster.promise.IPromise,v);
}
});

/**
* @constructor
 * @implements {redlobster.promise.IPromise}
 * @implements {cljs.core.IDeref}
*/
redlobster.promise.Promise = (function (ee){
this.ee = ee;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redlobster.promise.Promise.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var realised = self__.ee.__realised;
var value = self__.ee.__value;
if(cljs.core.not.call(null,realised)){
return new cljs.core.Keyword("redlobster.promise","not-realised","redlobster.promise/not-realised",332544846);
} else {
return value;

}
});

redlobster.promise.Promise.prototype.redlobster$promise$IPromise$ = true;

redlobster.promise.Promise.prototype.redlobster$promise$IPromise$realised_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.ee.__realised == null)){
return false;
} else {
return true;
}
});

redlobster.promise.Promise.prototype.redlobster$promise$IPromise$failed_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var and__218__auto__ = redlobster.promise.realised_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(and__218__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),self__.ee.__realised);
} else {
return and__218__auto__;
}
});

redlobster.promise.Promise.prototype.redlobster$promise$IPromise$realise$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(redlobster.promise.realised_QMARK_.call(null,this$__$1))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("redlobster.promise","timeout","redlobster.promise/timeout",-1857733661),cljs.core.deref.call(null,this$__$1))){
return null;
} else {
throw new cljs.core.Keyword("redlobster.promise","already-realised","redlobster.promise/already-realised",-1081920201);
}
} else {
if(cljs.core.truth_(redlobster.promise.promise_QMARK_.call(null,value))){
return redlobster.promise.on_realised.call(null,value,((function (this$__$1){
return (function (p1__4363_SHARP_){
return redlobster.promise.realise.call(null,this$__$1,p1__4363_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__4364_SHARP_){
return redlobster.promise.realise_error.call(null,this$__$1,p1__4364_SHARP_);
});})(this$__$1))
);
} else {
self__.ee.__realised = new cljs.core.Keyword(null,"success","success",1890645906);

self__.ee.__value = value;

return redlobster.events.emit.call(null,self__.ee,new cljs.core.Keyword(null,"realise-success","realise-success",-1942827085),value);
}
}
});

redlobster.promise.Promise.prototype.redlobster$promise$IPromise$realise_error$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(redlobster.promise.realised_QMARK_.call(null,this$__$1))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("redlobster.promise","timeout","redlobster.promise/timeout",-1857733661),cljs.core.deref.call(null,this$__$1))){
return null;
} else {
throw new cljs.core.Keyword("redlobster.promise","already-realised","redlobster.promise/already-realised",-1081920201);
}
} else {
if(cljs.core.truth_(redlobster.promise.promise_QMARK_.call(null,value))){
return redlobster.promise.on_realised.call(null,value,((function (this$__$1){
return (function (p1__4365_SHARP_){
return redlobster.promise.realise.call(null,this$__$1,p1__4365_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__4366_SHARP_){
return redlobster.promise.realise_error.call(null,this$__$1,p1__4366_SHARP_);
});})(this$__$1))
);
} else {
self__.ee.__realised = new cljs.core.Keyword(null,"error","error",-978969032);

self__.ee.__value = value;

return redlobster.events.emit.call(null,self__.ee,new cljs.core.Keyword(null,"realise-error","realise-error",402975089),value);
}
}
});

redlobster.promise.Promise.prototype.redlobster$promise$IPromise$on_realised$arity$3 = (function (this$,on_success,on_error){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(redlobster.promise.realised_QMARK_.call(null,this$__$1))){
if(cljs.core.truth_(redlobster.promise.failed_QMARK_.call(null,this$__$1))){
return on_error.call(null,cljs.core.deref.call(null,this$__$1));
} else {
return on_success.call(null,cljs.core.deref.call(null,this$__$1));
}
} else {
var G__4367 = self__.ee;
redlobster.events.on.call(null,G__4367,new cljs.core.Keyword(null,"realise-success","realise-success",-1942827085),on_success);

redlobster.events.on.call(null,G__4367,new cljs.core.Keyword(null,"realise-error","realise-error",402975089),on_error);

return G__4367;
}
});

redlobster.promise.Promise.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ee","ee",-2011118369,null)], null);
});

redlobster.promise.Promise.cljs$lang$type = true;

redlobster.promise.Promise.cljs$lang$ctorStr = "redlobster.promise/Promise";

redlobster.promise.Promise.cljs$lang$ctorPrWriter = (function (this__828__auto__,writer__829__auto__,opt__830__auto__){
return cljs.core._write.call(null,writer__829__auto__,"redlobster.promise/Promise");
});

redlobster.promise.__GT_Promise = (function redlobster$promise$__GT_Promise(ee){
return (new redlobster.promise.Promise(ee));
});

redlobster.promise.promise = (function redlobster$promise$promise(var_args){
var args4368 = [];
var len__1288__auto___4372 = arguments.length;
var i__1289__auto___4373 = (0);
while(true){
if((i__1289__auto___4373 < len__1288__auto___4372)){
args4368.push((arguments[i__1289__auto___4373]));

var G__4374 = (i__1289__auto___4373 + (1));
i__1289__auto___4373 = G__4374;
continue;
} else {
}
break;
}

var G__4370 = args4368.length;
switch (G__4370) {
case 0:
return redlobster.promise.promise.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return redlobster.promise.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4368.length)].join('')));

}
});

redlobster.promise.promise.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new redlobster.promise.Promise((function (){var ee = redlobster.events.event_emitter.call(null);
ee.__realised = null;

ee.__value = null;

return ee;
})()));
});

redlobster.promise.promise.cljs$core$IFn$_invoke$arity$1 = (function (success_value){
var G__4371 = redlobster.promise.promise.call(null);
redlobster.promise.realise.call(null,G__4371,success_value);

return G__4371;
});

redlobster.promise.promise.cljs$lang$maxFixedArity = 1;
redlobster.promise.promise_fail = (function redlobster$promise$promise_fail(error_value){
var G__4377 = redlobster.promise.promise.call(null);
redlobster.promise.realise_error.call(null,G__4377,error_value);

return G__4377;
});
/**
 * Takes a list of promises, and creates a promise that will realise as
 * `:redlobster.promise/realised` when each promise has successfully realised,
 * or if one or more of the promises fail, fail with the value of the first
 * failing promise.
 * 
 * If the first argument is the keyword `:all`, then instead of failing when
 * one of the promises fails, it will just wait for all promises to realise
 * and realise itself with `:redlobster.promise/realised` regardless of the
 * success or failure of any promise.
 */
redlobster.promise.await = (function redlobster$promise$await(var_args){
var args__1295__auto__ = [];
var len__1288__auto___4383 = arguments.length;
var i__1289__auto___4384 = (0);
while(true){
if((i__1289__auto___4384 < len__1288__auto___4383)){
args__1295__auto__.push((arguments[i__1289__auto___4384]));

var G__4385 = (i__1289__auto___4384 + (1));
i__1289__auto___4384 = G__4385;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((0) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((0)),(0))):null);
return redlobster.promise.await.cljs$core$IFn$_invoke$arity$variadic(argseq__1296__auto__);
});

redlobster.promise.await.cljs$core$IFn$_invoke$arity$variadic = (function (promises){
var await_all = cljs.core._EQ_.call(null,cljs.core.first.call(null,promises),new cljs.core.Keyword(null,"all","all",892129742));
var promises__$1 = ((await_all)?cljs.core.rest.call(null,promises):promises);
var p = redlobster.promise.promise.call(null);
var total = cljs.core.count.call(null,promises__$1);
var count = cljs.core.atom.call(null,(0));
var done = cljs.core.atom.call(null,false);
var seq__4379_4386 = cljs.core.seq.call(null,promises__$1);
var chunk__4380_4387 = null;
var count__4381_4388 = (0);
var i__4382_4389 = (0);
while(true){
if((i__4382_4389 < count__4381_4388)){
var subp_4390 = cljs.core._nth.call(null,chunk__4380_4387,i__4382_4389);
var succ_4391 = ((function (seq__4379_4386,chunk__4380_4387,count__4381_4388,i__4382_4389,subp_4390,await_all,promises__$1,p,total,count,done){
return (function (_){
if(cljs.core.not.call(null,cljs.core.deref.call(null,done))){
cljs.core.swap_BANG_.call(null,count,cljs.core.inc);

if(cljs.core._EQ_.call(null,total,cljs.core.deref.call(null,count))){
cljs.core.reset_BANG_.call(null,done,true);

return redlobster.promise.realise.call(null,p,new cljs.core.Keyword("redlobster.promise","realised","redlobster.promise/realised",-398894750));
} else {
return null;
}
} else {
return null;
}
});})(seq__4379_4386,chunk__4380_4387,count__4381_4388,i__4382_4389,subp_4390,await_all,promises__$1,p,total,count,done))
;
var fail_4392 = ((await_all)?succ_4391:((function (seq__4379_4386,chunk__4380_4387,count__4381_4388,i__4382_4389,succ_4391,subp_4390,await_all,promises__$1,p,total,count,done){
return (function (err){
if(cljs.core.not.call(null,cljs.core.deref.call(null,done))){
cljs.core.reset_BANG_.call(null,done,true);

return redlobster.promise.realise_error.call(null,p,err);
} else {
return null;
}
});})(seq__4379_4386,chunk__4380_4387,count__4381_4388,i__4382_4389,succ_4391,subp_4390,await_all,promises__$1,p,total,count,done))
);
redlobster.promise.on_realised.call(null,subp_4390,succ_4391,fail_4392);

var G__4393 = seq__4379_4386;
var G__4394 = chunk__4380_4387;
var G__4395 = count__4381_4388;
var G__4396 = (i__4382_4389 + (1));
seq__4379_4386 = G__4393;
chunk__4380_4387 = G__4394;
count__4381_4388 = G__4395;
i__4382_4389 = G__4396;
continue;
} else {
var temp__4425__auto___4397 = cljs.core.seq.call(null,seq__4379_4386);
if(temp__4425__auto___4397){
var seq__4379_4398__$1 = temp__4425__auto___4397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4379_4398__$1)){
var c__1033__auto___4399 = cljs.core.chunk_first.call(null,seq__4379_4398__$1);
var G__4400 = cljs.core.chunk_rest.call(null,seq__4379_4398__$1);
var G__4401 = c__1033__auto___4399;
var G__4402 = cljs.core.count.call(null,c__1033__auto___4399);
var G__4403 = (0);
seq__4379_4386 = G__4400;
chunk__4380_4387 = G__4401;
count__4381_4388 = G__4402;
i__4382_4389 = G__4403;
continue;
} else {
var subp_4404 = cljs.core.first.call(null,seq__4379_4398__$1);
var succ_4405 = ((function (seq__4379_4386,chunk__4380_4387,count__4381_4388,i__4382_4389,subp_4404,seq__4379_4398__$1,temp__4425__auto___4397,await_all,promises__$1,p,total,count,done){
return (function (_){
if(cljs.core.not.call(null,cljs.core.deref.call(null,done))){
cljs.core.swap_BANG_.call(null,count,cljs.core.inc);

if(cljs.core._EQ_.call(null,total,cljs.core.deref.call(null,count))){
cljs.core.reset_BANG_.call(null,done,true);

return redlobster.promise.realise.call(null,p,new cljs.core.Keyword("redlobster.promise","realised","redlobster.promise/realised",-398894750));
} else {
return null;
}
} else {
return null;
}
});})(seq__4379_4386,chunk__4380_4387,count__4381_4388,i__4382_4389,subp_4404,seq__4379_4398__$1,temp__4425__auto___4397,await_all,promises__$1,p,total,count,done))
;
var fail_4406 = ((await_all)?succ_4405:((function (seq__4379_4386,chunk__4380_4387,count__4381_4388,i__4382_4389,succ_4405,subp_4404,seq__4379_4398__$1,temp__4425__auto___4397,await_all,promises__$1,p,total,count,done){
return (function (err){
if(cljs.core.not.call(null,cljs.core.deref.call(null,done))){
cljs.core.reset_BANG_.call(null,done,true);

return redlobster.promise.realise_error.call(null,p,err);
} else {
return null;
}
});})(seq__4379_4386,chunk__4380_4387,count__4381_4388,i__4382_4389,succ_4405,subp_4404,seq__4379_4398__$1,temp__4425__auto___4397,await_all,promises__$1,p,total,count,done))
);
redlobster.promise.on_realised.call(null,subp_4404,succ_4405,fail_4406);

var G__4407 = cljs.core.next.call(null,seq__4379_4398__$1);
var G__4408 = null;
var G__4409 = (0);
var G__4410 = (0);
seq__4379_4386 = G__4407;
chunk__4380_4387 = G__4408;
count__4381_4388 = G__4409;
i__4382_4389 = G__4410;
continue;
}
} else {
}
}
break;
}

return p;
});

redlobster.promise.await.cljs$lang$maxFixedArity = (0);

redlobster.promise.await.cljs$lang$applyTo = (function (seq4378){
return redlobster.promise.await.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4378));
});
redlobster.promise.defer_until_realised = (function redlobster$promise$defer_until_realised(promises,callback){
var p = redlobster.promise.promise.call(null);
redlobster.promise.on_realised.call(null,cljs.core.apply.call(null,redlobster.promise.await,promises),((function (p){
return (function (_){
return redlobster.promise.realise.call(null,p,callback.call(null));
});})(p))
,((function (p){
return (function (error){
return redlobster.promise.realise_error.call(null,p,error);
});})(p))
);

return p;
});
/**
 * Creates a promise that fulfills with an event object when the matching
 * event is triggered on the EventEmitter. This promise cannot fail; it will
 * either succeed or never realise.
 */
redlobster.promise.on_event = (function redlobster$promise$on_event(ee,type){
var p = redlobster.promise.promise.call(null);
redlobster.events.once.call(null,ee,type,((function (p){
return (function (event){
return redlobster.promise.realise.call(null,p,event);
});})(p))
);

return p;
});
/**
 * Sets a promise to fail with `:redlobster.promise/timeout` after a
 * specified number of milliseconds.
 * 
 * A promise that has timed out will not throw an error when you try to
 * realise it, but the realised value will remain
 * `:redlobster.promise/timeout`.
 */
redlobster.promise.timeout = (function redlobster$promise$timeout(promise,timeout__$1){
var timeout_func = (function (){
if(cljs.core.truth_(redlobster.promise.realised_QMARK_.call(null,promise))){
return null;
} else {
return redlobster.promise.realise_error.call(null,promise,new cljs.core.Keyword("redlobster.promise","timeout","redlobster.promise/timeout",-1857733661));
}
});
return setTimeout(timeout_func,timeout__$1);
});

//# sourceMappingURL=promise.js.map