// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('dogfort.util.codec');
goog.require('cljs.core');
goog.require('dogfort.util.data');
goog.require('clojure.string');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
dogfort.util.codec.double_escape = (function dogfort$util$codec$double_escape(x){
return x.replace("\\","\\\\").replace("$","\\$");
});
dogfort.util.codec.number__GT_hex = (function dogfort$util$codec$number__GT_hex(num){
return num.toString((16)).toUpperCase();
});
/**
 * Percent-encode every character in the given string using either the specified
 *   encoding, or UTF-8 by default.
 */
dogfort.util.codec.percent_encode = (function dogfort$util$codec$percent_encode(var_args){
var args__1295__auto__ = [];
var len__1288__auto___2381 = arguments.length;
var i__1289__auto___2382 = (0);
while(true){
if((i__1289__auto___2382 < len__1288__auto___2381)){
args__1295__auto__.push((arguments[i__1289__auto___2382]));

var G__2383 = (i__1289__auto___2382 + (1));
i__1289__auto___2382 = G__2383;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic = (function (unencoded,p__2379){
var vec__2380 = p__2379;
var encoding = cljs.core.nth.call(null,vec__2380,(0),null);
var buf = (new Buffer(unencoded,(function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})()));
var bytes = cljs.core.map.call(null,((function (buf,vec__2380,encoding){
return (function (p1__2376_SHARP_){
return [cljs.core.str("%"),cljs.core.str(dogfort.util.codec.number__GT_hex.call(null,(buf[p1__2376_SHARP_])))].join('');
});})(buf,vec__2380,encoding))
,cljs.core.range.call(null,buf.length));
return clojure.string.join.call(null,bytes);
});

dogfort.util.codec.percent_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.percent_encode.cljs$lang$applyTo = (function (seq2377){
var G__2378 = cljs.core.first.call(null,seq2377);
var seq2377__$1 = cljs.core.next.call(null,seq2377);
return dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic(G__2378,seq2377__$1);
});
dogfort.util.codec.parse_bytes = (function dogfort$util$codec$parse_bytes(encoded_bytes){
return (new Buffer(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__2385_SHARP_){
return parseInt(p1__2385_SHARP_,(16));
}),cljs.core.map.call(null,(function (p1__2384_SHARP_){
return cljs.core.subs.call(null,p1__2384_SHARP_,(1));
}),cljs.core.re_seq.call(null,/%../,encoded_bytes))))));
});
/**
 * Decode every percent-encoded character in the given string using the
 *   specified encoding, or UTF-8 by default.
 */
dogfort.util.codec.percent_decode = (function dogfort$util$codec$percent_decode(var_args){
var args__1295__auto__ = [];
var len__1288__auto___2390 = arguments.length;
var i__1289__auto___2391 = (0);
while(true){
if((i__1289__auto___2391 < len__1288__auto___2390)){
args__1295__auto__.push((arguments[i__1289__auto___2391]));

var G__2392 = (i__1289__auto___2391 + (1));
i__1289__auto___2391 = G__2392;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__2388){
var vec__2389 = p__2388;
var encoding = cljs.core.nth.call(null,vec__2389,(0),null);
return clojure.string.replace.call(null,encoded,/(?:%..)+/,((function (vec__2389,encoding){
return (function (chars){
return dogfort.util.codec.parse_bytes.call(null,chars).toString((function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})()).replace("\\","\\\\");
});})(vec__2389,encoding))
);
});

dogfort.util.codec.percent_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.percent_decode.cljs$lang$applyTo = (function (seq2386){
var G__2387 = cljs.core.first.call(null,seq2386);
var seq2386__$1 = cljs.core.next.call(null,seq2386);
return dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic(G__2387,seq2386__$1);
});
/**
 * Returns the url-encoded version of the given string, using either a specified
 *   encoding or UTF-8 by default.
 */
dogfort.util.codec.url_encode = (function dogfort$util$codec$url_encode(var_args){
var args__1295__auto__ = [];
var len__1288__auto___2398 = arguments.length;
var i__1289__auto___2399 = (0);
while(true){
if((i__1289__auto___2399 < len__1288__auto___2398)){
args__1295__auto__.push((arguments[i__1289__auto___2399]));

var G__2400 = (i__1289__auto___2399 + (1));
i__1289__auto___2399 = G__2400;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic = (function (unencoded,p__2396){
var vec__2397 = p__2396;
var encoding = cljs.core.nth.call(null,vec__2397,(0),null);
return clojure.string.replace.call(null,unencoded,/[^A-Za-z0-9_~.+-]+/,((function (vec__2397,encoding){
return (function (p1__2393_SHARP_){
return dogfort.util.codec.double_escape.call(null,dogfort.util.codec.percent_encode.call(null,p1__2393_SHARP_,encoding));
});})(vec__2397,encoding))
);
});

dogfort.util.codec.url_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.url_encode.cljs$lang$applyTo = (function (seq2394){
var G__2395 = cljs.core.first.call(null,seq2394);
var seq2394__$1 = cljs.core.next.call(null,seq2394);
return dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic(G__2395,seq2394__$1);
});
/**
 * Returns the url-decoded version of the given string, using either a specified
 *   encoding or UTF-8 by default. If the encoding is invalid, nil is returned.
 */
dogfort.util.codec.url_decode = (function dogfort$util$codec$url_decode(var_args){
var args__1295__auto__ = [];
var len__1288__auto___2405 = arguments.length;
var i__1289__auto___2406 = (0);
while(true){
if((i__1289__auto___2406 < len__1288__auto___2405)){
args__1295__auto__.push((arguments[i__1289__auto___2406]));

var G__2407 = (i__1289__auto___2406 + (1));
i__1289__auto___2406 = G__2407;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__2403){
var vec__2404 = p__2403;
var encoding = cljs.core.nth.call(null,vec__2404,(0),null);
return dogfort.util.codec.percent_decode.call(null,clojure.string.replace.call(null,encoded,/[+]/," "),encoding);
});

dogfort.util.codec.url_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.url_decode.cljs$lang$applyTo = (function (seq2401){
var G__2402 = cljs.core.first.call(null,seq2401);
var seq2401__$1 = cljs.core.next.call(null,seq2401);
return dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__2402,seq2401__$1);
});
/**
 * Encode a Buffer into a base64 encoded string.
 */
dogfort.util.codec.base64_encode = (function dogfort$util$codec$base64_encode(unencoded){
return unencoded.toString("base64");
});
/**
 * Decode a base64 encoded string into a Buffer.
 */
dogfort.util.codec.base64_decode = (function dogfort$util$codec$base64_decode(encoded){
return (new Buffer(encoded,"base64"));
});
dogfort.util.codec.form_encode_STAR_ = (function dogfort$util$codec$form_encode_STAR_(params,encoding){
if(cljs.core.map_QMARK_.call(null,params)){
var encode = (function dogfort$util$codec$form_encode_STAR__$_encode(x){
return dogfort$util$codec$form_encode_STAR_.call(null,x,encoding);
});
var encode_param = (function dogfort$util$codec$form_encode_STAR__$_encode_param(p__2421){
var vec__2423 = p__2421;
var k = cljs.core.nth.call(null,vec__2423,(0),null);
var v = cljs.core.nth.call(null,vec__2423,(1),null);
return [cljs.core.str(encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(encode.call(null,v))].join('');
});
return clojure.string.join.call(null,"&",cljs.core.mapcat.call(null,(function (p__2424){
var vec__2425 = p__2424;
var k = cljs.core.nth.call(null,vec__2425,(0),null);
var v = cljs.core.nth.call(null,vec__2425,(1),null);
if((cljs.core.seq_QMARK_.call(null,v)) || (cljs.core.sequential_QMARK_.call(null,v))){
return cljs.core.map.call(null,((function (vec__2425,k,v){
return (function (p1__2409_SHARP_){
return encode_param.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,p1__2409_SHARP_], null));
});})(vec__2425,k,v))
,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [encode_param.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null))], null);
}
}),params));
} else {
return dogfort.util.codec.url_encode.call(null,[cljs.core.str(params)].join(''),encoding);
}
});
/**
 * Encode the supplied value into www-form-urlencoded format, often used in
 *   URL query strings and POST request bodies, using the specified encoding.
 *   If the encoding is not specified, it defaults to UTF-8
 */
dogfort.util.codec.form_encode = (function dogfort$util$codec$form_encode(var_args){
var args__1295__auto__ = [];
var len__1288__auto___2430 = arguments.length;
var i__1289__auto___2431 = (0);
while(true){
if((i__1289__auto___2431 < len__1288__auto___2430)){
args__1295__auto__.push((arguments[i__1289__auto___2431]));

var G__2432 = (i__1289__auto___2431 + (1));
i__1289__auto___2431 = G__2432;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__2428){
var vec__2429 = p__2428;
var encoding = cljs.core.nth.call(null,vec__2429,(0),null);
return clojure.string.replace.call(null,clojure.string.replace.call(null,dogfort.util.codec.form_encode_STAR_.call(null,x,(function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})()),/\+/,"%2B"),/%20/,"+");
});

dogfort.util.codec.form_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_encode.cljs$lang$applyTo = (function (seq2426){
var G__2427 = cljs.core.first.call(null,seq2426);
var seq2426__$1 = cljs.core.next.call(null,seq2426);
return dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic(G__2427,seq2426__$1);
});
/**
 * Decode the supplied www-form-urlencoded string using the specified encoding,
 *   or UTF-8 by default.
 */
dogfort.util.codec.form_decode_str = (function dogfort$util$codec$form_decode_str(var_args){
var args__1295__auto__ = [];
var len__1288__auto___2437 = arguments.length;
var i__1289__auto___2438 = (0);
while(true){
if((i__1289__auto___2438 < len__1288__auto___2437)){
args__1295__auto__.push((arguments[i__1289__auto___2438]));

var G__2439 = (i__1289__auto___2438 + (1));
i__1289__auto___2438 = G__2439;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__2435){
var vec__2436 = p__2435;
var encoding = cljs.core.nth.call(null,vec__2436,(0),null);
return dogfort.util.codec.url_decode.call(null,encoded,(function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})());
});

dogfort.util.codec.form_decode_str.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_decode_str.cljs$lang$applyTo = (function (seq2433){
var G__2434 = cljs.core.first.call(null,seq2433);
var seq2433__$1 = cljs.core.next.call(null,seq2433);
return dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic(G__2434,seq2433__$1);
});
/**
 * Decode the supplied www-form-urlencoded string using the specified encoding,
 *   or UTF-8 by default. If the encoded value is a string, a string is returned.
 *   If the encoded value is a map of parameters, a map is returned.
 */
dogfort.util.codec.form_decode = (function dogfort$util$codec$form_decode(var_args){
var args__1295__auto__ = [];
var len__1288__auto___2445 = arguments.length;
var i__1289__auto___2446 = (0);
while(true){
if((i__1289__auto___2446 < len__1288__auto___2445)){
args__1295__auto__.push((arguments[i__1289__auto___2446]));

var G__2447 = (i__1289__auto___2446 + (1));
i__1289__auto___2446 = G__2447;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__2442){
var vec__2443 = p__2442;
var encoding = cljs.core.nth.call(null,vec__2443,(0),null);
if((encoded.indexOf("=") < (0))){
return dogfort.util.codec.form_decode_str.call(null,encoded,encoding);
} else {
return cljs.core.reduce.call(null,((function (vec__2443,encoding){
return (function (m,param){
var temp__4423__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__2444 = temp__4423__auto__;
var k = cljs.core.nth.call(null,vec__2444,(0),null);
var v = cljs.core.nth.call(null,vec__2444,(1),null);
return dogfort.util.data.assoc_conj.call(null,m,dogfort.util.codec.form_decode_str.call(null,k,encoding),dogfort.util.codec.form_decode_str.call(null,v,encoding));
} else {
return m;
}
});})(vec__2443,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,encoded,/&/));
}
});

dogfort.util.codec.form_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_decode.cljs$lang$applyTo = (function (seq2440){
var G__2441 = cljs.core.first.call(null,seq2440);
var seq2440__$1 = cljs.core.next.call(null,seq2440);
return dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic(G__2441,seq2440__$1);
});

//# sourceMappingURL=codec.js.map