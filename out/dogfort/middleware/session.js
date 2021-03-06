// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('dogfort.middleware.session');
goog.require('cljs.core');
goog.require('dogfort.middleware.cookies');
goog.require('dogfort.middleware.session.store');
goog.require('dogfort.middleware.session.memory');
goog.require('redlobster.promise');
dogfort.middleware.session.session_options = (function dogfort$middleware$session$session_options(options){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"store","store",1512230022).cljs$core$IFn$_invoke$arity$2(options,dogfort.middleware.session.memory.memory_store.call(null)),new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745),new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745).cljs$core$IFn$_invoke$arity$2(options,"ring-session"),new cljs.core.Keyword(null,"cookie-attrs","cookie-attrs",-1318966946),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/",new cljs.core.Keyword(null,"http-only","http-only",-825379555),true], null),new cljs.core.Keyword(null,"cookie-attrs","cookie-attrs",-1318966946).cljs$core$IFn$_invoke$arity$1(options),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__4423__auto__)){
var root = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),root], null);
} else {
return null;
}
})())], null);
});
dogfort.middleware.session.bare_session_request = (function dogfort$middleware$session$bare_session_request(var_args){
var args__1295__auto__ = [];
var len__1288__auto___6293 = arguments.length;
var i__1289__auto___6294 = (0);
while(true){
if((i__1289__auto___6294 < len__1288__auto___6293)){
args__1295__auto__.push((arguments[i__1289__auto___6294]));

var G__6295 = (i__1289__auto___6294 + (1));
i__1289__auto___6294 = G__6295;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.middleware.session.bare_session_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.middleware.session.bare_session_request.cljs$core$IFn$_invoke$arity$variadic = (function (request,p__6289){
var vec__6290 = p__6289;
var map__6291 = cljs.core.nth.call(null,vec__6290,(0),null);
var map__6291__$1 = ((((!((map__6291 == null)))?((((map__6291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6291):map__6291);
var store = cljs.core.get.call(null,map__6291__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var cookie_name = cljs.core.get.call(null,map__6291__$1,new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745));
var req_key = cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cookies","cookies",1839416329),cookie_name,new cljs.core.Keyword(null,"value","value",305978217)], null));
var session = dogfort.middleware.session.store.read_session.call(null,store,req_key);
var session_key = (cljs.core.truth_(session)?req_key:null);
return cljs.core.merge.call(null,request,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"session","session",1008279103),(function (){var or__230__auto__ = session;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword("session","key","session/key",756123603),session_key], null));
});

dogfort.middleware.session.bare_session_request.cljs$lang$maxFixedArity = (1);

dogfort.middleware.session.bare_session_request.cljs$lang$applyTo = (function (seq6287){
var G__6288 = cljs.core.first.call(null,seq6287);
var seq6287__$1 = cljs.core.next.call(null,seq6287);
return dogfort.middleware.session.bare_session_request.cljs$core$IFn$_invoke$arity$variadic(G__6288,seq6287__$1);
});
/**
 * Reads current HTTP session map and adds it to :session key of the request.
 *   See: wrap-session.
 */
dogfort.middleware.session.session_request = (function dogfort$middleware$session$session_request(var_args){
var args__1295__auto__ = [];
var len__1288__auto___6300 = arguments.length;
var i__1289__auto___6301 = (0);
while(true){
if((i__1289__auto___6301 < len__1288__auto___6300)){
args__1295__auto__.push((arguments[i__1289__auto___6301]));

var G__6302 = (i__1289__auto___6301 + (1));
i__1289__auto___6301 = G__6302;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.middleware.session.session_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.middleware.session.session_request.cljs$core$IFn$_invoke$arity$variadic = (function (request,p__6298){
var vec__6299 = p__6298;
var options = cljs.core.nth.call(null,vec__6299,(0),null);
return dogfort.middleware.session.bare_session_request.call(null,dogfort.middleware.cookies.cookies_request.call(null,request),options);
});

dogfort.middleware.session.session_request.cljs$lang$maxFixedArity = (1);

dogfort.middleware.session.session_request.cljs$lang$applyTo = (function (seq6296){
var G__6297 = cljs.core.first.call(null,seq6296);
var seq6296__$1 = cljs.core.next.call(null,seq6296);
return dogfort.middleware.session.session_request.cljs$core$IFn$_invoke$arity$variadic(G__6297,seq6296__$1);
});
dogfort.middleware.session.bare_session_response = (function dogfort$middleware$session$bare_session_response(var_args){
var args__1295__auto__ = [];
var len__1288__auto___6313 = arguments.length;
var i__1289__auto___6314 = (0);
while(true){
if((i__1289__auto___6314 < len__1288__auto___6313)){
args__1295__auto__.push((arguments[i__1289__auto___6314]));

var G__6315 = (i__1289__auto___6314 + (1));
i__1289__auto___6314 = G__6315;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((2) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((2)),(0))):null);
return dogfort.middleware.session.bare_session_response.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__1296__auto__);
});

dogfort.middleware.session.bare_session_response.cljs$core$IFn$_invoke$arity$variadic = (function (response,p__6306,p__6307){
var map__6308 = p__6306;
var map__6308__$1 = ((((!((map__6308 == null)))?((((map__6308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6308):map__6308);
var session_key = cljs.core.get.call(null,map__6308__$1,new cljs.core.Keyword("session","key","session/key",756123603));
var vec__6309 = p__6307;
var map__6310 = cljs.core.nth.call(null,vec__6309,(0),null);
var map__6310__$1 = ((((!((map__6310 == null)))?((((map__6310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6310):map__6310);
var store = cljs.core.get.call(null,map__6310__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var cookie_name = cljs.core.get.call(null,map__6310__$1,new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745));
var cookie_attrs = cljs.core.get.call(null,map__6310__$1,new cljs.core.Keyword(null,"cookie-attrs","cookie-attrs",-1318966946));
var new_session_key = ((cljs.core.contains_QMARK_.call(null,response,new cljs.core.Keyword(null,"session","session",1008279103)))?(function (){var temp__4423__auto__ = response.call(null,new cljs.core.Keyword(null,"session","session",1008279103));
if(cljs.core.truth_(temp__4423__auto__)){
var session = temp__4423__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"recreate","recreate",706397197).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,session)))){
dogfort.middleware.session.store.delete_session.call(null,store,session_key);

return dogfort.middleware.session.store.write_session.call(null,store,null,session);
} else {
return dogfort.middleware.session.store.write_session.call(null,store,session_key,session);
}
} else {
if(cljs.core.truth_(session_key)){
return dogfort.middleware.session.store.delete_session.call(null,store,session_key);
} else {
return null;
}
}
})():null);
var session_attrs = new cljs.core.Keyword(null,"session-cookie-attrs","session-cookie-attrs",-680857706).cljs$core$IFn$_invoke$arity$1(response);
var cookie = cljs.core.PersistentArrayMap.fromArray([cookie_name,cljs.core.merge.call(null,cookie_attrs,session_attrs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__230__auto__ = new_session_key;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return session_key;
}
})()], null))], true, false);
var response__$1 = cljs.core.dissoc.call(null,response,new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"session-cookie-attrs","session-cookie-attrs",-680857706));
if(cljs.core.truth_((function (){var or__230__auto__ = (function (){var and__218__auto__ = new_session_key;
if(cljs.core.truth_(and__218__auto__)){
return cljs.core.not_EQ_.call(null,session_key,new_session_key);
} else {
return and__218__auto__;
}
})();
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
var and__218__auto__ = session_attrs;
if(cljs.core.truth_(and__218__auto__)){
var or__230__auto____$1 = new_session_key;
if(cljs.core.truth_(or__230__auto____$1)){
return or__230__auto____$1;
} else {
return session_key;
}
} else {
return and__218__auto__;
}
}
})())){
return cljs.core.assoc.call(null,response__$1,new cljs.core.Keyword(null,"cookies","cookies",1839416329),cljs.core.merge.call(null,response__$1.call(null,new cljs.core.Keyword(null,"cookies","cookies",1839416329)),cookie));
} else {
return response__$1;
}
});

dogfort.middleware.session.bare_session_response.cljs$lang$maxFixedArity = (2);

dogfort.middleware.session.bare_session_response.cljs$lang$applyTo = (function (seq6303){
var G__6304 = cljs.core.first.call(null,seq6303);
var seq6303__$1 = cljs.core.next.call(null,seq6303);
var G__6305 = cljs.core.first.call(null,seq6303__$1);
var seq6303__$2 = cljs.core.next.call(null,seq6303__$1);
return dogfort.middleware.session.bare_session_response.cljs$core$IFn$_invoke$arity$variadic(G__6304,G__6305,seq6303__$2);
});
/**
 * Updates session based on :session key in response. See: wrap-session.
 */
dogfort.middleware.session.session_response = (function dogfort$middleware$session$session_response(var_args){
var args__1295__auto__ = [];
var len__1288__auto___6321 = arguments.length;
var i__1289__auto___6322 = (0);
while(true){
if((i__1289__auto___6322 < len__1288__auto___6321)){
args__1295__auto__.push((arguments[i__1289__auto___6322]));

var G__6323 = (i__1289__auto___6322 + (1));
i__1289__auto___6322 = G__6323;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((2) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((2)),(0))):null);
return dogfort.middleware.session.session_response.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__1296__auto__);
});

dogfort.middleware.session.session_response.cljs$core$IFn$_invoke$arity$variadic = (function (response,request,p__6319){
var vec__6320 = p__6319;
var options = cljs.core.nth.call(null,vec__6320,(0),null);
var response__$1 = response;
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response__$1], null),((function (response__$1,vec__6320,options){
return (function (){
return dogfort.middleware.session.bare_session_response.call(null,cljs.core.deref.call(null,response__$1),request,options);
});})(response__$1,vec__6320,options))
);
});

dogfort.middleware.session.session_response.cljs$lang$maxFixedArity = (2);

dogfort.middleware.session.session_response.cljs$lang$applyTo = (function (seq6316){
var G__6317 = cljs.core.first.call(null,seq6316);
var seq6316__$1 = cljs.core.next.call(null,seq6316);
var G__6318 = cljs.core.first.call(null,seq6316__$1);
var seq6316__$2 = cljs.core.next.call(null,seq6316__$1);
return dogfort.middleware.session.session_response.cljs$core$IFn$_invoke$arity$variadic(G__6317,G__6318,seq6316__$2);
});
/**
 * Reads in the current HTTP session map, and adds it to the :session key on
 *   the request. If a :session key is added to the response by the handler, the
 *   session is updated with the new value. If the value is nil, the session is
 *   deleted.
 * 
 *   Accepts the following options:
 * 
 *   :store        - An implementation of the SessionStore protocol in the
 *                dogfort.middleware.session.store namespace. This determines how
 *                the session is stored. Defaults to in-memory storage using
 *                dogfort.middleware.session.store/memory-store.
 * 
 *   :root         - The root path of the session. Any path above this will not be
 *                able to see this session. Equivalent to setting the cookie's
 *                path attribute. Defaults to "/".
 * 
 *   :cookie-name  - The name of the cookie that holds the session key. Defaults to
 *                "ring-session"
 * 
 *   :cookie-attrs - A map of attributes to associate with the session cookie.
 *                Defaults to {:http-only true}.
 */
dogfort.middleware.session.wrap_session = (function dogfort$middleware$session$wrap_session(var_args){
var args6324 = [];
var len__1288__auto___6327 = arguments.length;
var i__1289__auto___6328 = (0);
while(true){
if((i__1289__auto___6328 < len__1288__auto___6327)){
args6324.push((arguments[i__1289__auto___6328]));

var G__6329 = (i__1289__auto___6328 + (1));
i__1289__auto___6328 = G__6329;
continue;
} else {
}
break;
}

var G__6326 = args6324.length;
switch (G__6326) {
case 1:
return dogfort.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dogfort.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6324.length)].join('')));

}
});

dogfort.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return dogfort.middleware.session.wrap_session.call(null,handler,cljs.core.PersistentArrayMap.EMPTY);
});

dogfort.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$2 = (function (handler,options){
var options__$1 = dogfort.middleware.session.session_options.call(null,options);
return ((function (options__$1){
return (function (request){
var new_request = dogfort.middleware.session.session_request.call(null,request,options__$1);
return dogfort.middleware.session.session_response.call(null,handler.call(null,new_request),new_request,options__$1);
});
;})(options__$1))
});

dogfort.middleware.session.wrap_session.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=session.js.map