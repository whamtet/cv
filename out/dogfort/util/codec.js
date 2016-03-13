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
var len__1288__auto___7296 = arguments.length;
var i__1289__auto___7297 = (0);
while(true){
if((i__1289__auto___7297 < len__1288__auto___7296)){
args__1295__auto__.push((arguments[i__1289__auto___7297]));

var G__7298 = (i__1289__auto___7297 + (1));
i__1289__auto___7297 = G__7298;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic = (function (unencoded,p__7294){
var vec__7295 = p__7294;
var encoding = cljs.core.nth.call(null,vec__7295,(0),null);
var buf = (new Buffer(unencoded,(function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})()));
var bytes = cljs.core.map.call(null,((function (buf,vec__7295,encoding){
return (function (p1__7291_SHARP_){
return [cljs.core.str("%"),cljs.core.str(dogfort.util.codec.number__GT_hex.call(null,(buf[p1__7291_SHARP_])))].join('');
});})(buf,vec__7295,encoding))
,cljs.core.range.call(null,buf.length));
return clojure.string.join.call(null,bytes);
});

dogfort.util.codec.percent_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.percent_encode.cljs$lang$applyTo = (function (seq7292){
var G__7293 = cljs.core.first.call(null,seq7292);
var seq7292__$1 = cljs.core.next.call(null,seq7292);
return dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic(G__7293,seq7292__$1);
});
dogfort.util.codec.parse_bytes = (function dogfort$util$codec$parse_bytes(encoded_bytes){
return (new Buffer(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__7300_SHARP_){
return parseInt(p1__7300_SHARP_,(16));
}),cljs.core.map.call(null,(function (p1__7299_SHARP_){
return cljs.core.subs.call(null,p1__7299_SHARP_,(1));
}),cljs.core.re_seq.call(null,/%../,encoded_bytes))))));
});
/**
 * Decode every percent-encoded character in the given string using the
 *   specified encoding, or UTF-8 by default.
 */
dogfort.util.codec.percent_decode = (function dogfort$util$codec$percent_decode(var_args){
var args__1295__auto__ = [];
var len__1288__auto___7305 = arguments.length;
var i__1289__auto___7306 = (0);
while(true){
if((i__1289__auto___7306 < len__1288__auto___7305)){
args__1295__auto__.push((arguments[i__1289__auto___7306]));

var G__7307 = (i__1289__auto___7306 + (1));
i__1289__auto___7306 = G__7307;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__7303){
var vec__7304 = p__7303;
var encoding = cljs.core.nth.call(null,vec__7304,(0),null);
return clojure.string.replace.call(null,encoded,/(?:%..)+/,((function (vec__7304,encoding){
return (function (chars){
return dogfort.util.codec.parse_bytes.call(null,chars).toString((function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})()).replace("\\","\\\\");
});})(vec__7304,encoding))
);
});

dogfort.util.codec.percent_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.percent_decode.cljs$lang$applyTo = (function (seq7301){
var G__7302 = cljs.core.first.call(null,seq7301);
var seq7301__$1 = cljs.core.next.call(null,seq7301);
return dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic(G__7302,seq7301__$1);
});
/**
 * Returns the url-encoded version of the given string, using either a specified
 *   encoding or UTF-8 by default.
 */
dogfort.util.codec.url_encode = (function dogfort$util$codec$url_encode(var_args){
var args__1295__auto__ = [];
var len__1288__auto___7313 = arguments.length;
var i__1289__auto___7314 = (0);
while(true){
if((i__1289__auto___7314 < len__1288__auto___7313)){
args__1295__auto__.push((arguments[i__1289__auto___7314]));

var G__7315 = (i__1289__auto___7314 + (1));
i__1289__auto___7314 = G__7315;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic = (function (unencoded,p__7311){
var vec__7312 = p__7311;
var encoding = cljs.core.nth.call(null,vec__7312,(0),null);
return clojure.string.replace.call(null,unencoded,/[^A-Za-z0-9_~.+-]+/,((function (vec__7312,encoding){
return (function (p1__7308_SHARP_){
return dogfort.util.codec.double_escape.call(null,dogfort.util.codec.percent_encode.call(null,p1__7308_SHARP_,encoding));
});})(vec__7312,encoding))
);
});

dogfort.util.codec.url_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.url_encode.cljs$lang$applyTo = (function (seq7309){
var G__7310 = cljs.core.first.call(null,seq7309);
var seq7309__$1 = cljs.core.next.call(null,seq7309);
return dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic(G__7310,seq7309__$1);
});
/**
 * Returns the url-decoded version of the given string, using either a specified
 *   encoding or UTF-8 by default. If the encoding is invalid, nil is returned.
 */
dogfort.util.codec.url_decode = (function dogfort$util$codec$url_decode(var_args){
var args__1295__auto__ = [];
var len__1288__auto___7320 = arguments.length;
var i__1289__auto___7321 = (0);
while(true){
if((i__1289__auto___7321 < len__1288__auto___7320)){
args__1295__auto__.push((arguments[i__1289__auto___7321]));

var G__7322 = (i__1289__auto___7321 + (1));
i__1289__auto___7321 = G__7322;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__7318){
var vec__7319 = p__7318;
var encoding = cljs.core.nth.call(null,vec__7319,(0),null);
return dogfort.util.codec.percent_decode.call(null,clojure.string.replace.call(null,encoded,/[+]/," "),encoding);
});

dogfort.util.codec.url_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.url_decode.cljs$lang$applyTo = (function (seq7316){
var G__7317 = cljs.core.first.call(null,seq7316);
var seq7316__$1 = cljs.core.next.call(null,seq7316);
return dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__7317,seq7316__$1);
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
var encode_param = (function dogfort$util$codec$form_encode_STAR__$_encode_param(p__7336){
var vec__7338 = p__7336;
var k = cljs.core.nth.call(null,vec__7338,(0),null);
var v = cljs.core.nth.call(null,vec__7338,(1),null);
return [cljs.core.str(encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(encode.call(null,v))].join('');
});
return clojure.string.join.call(null,"&",cljs.core.mapcat.call(null,(function (p__7339){
var vec__7340 = p__7339;
var k = cljs.core.nth.call(null,vec__7340,(0),null);
var v = cljs.core.nth.call(null,vec__7340,(1),null);
if((cljs.core.seq_QMARK_.call(null,v)) || (cljs.core.sequential_QMARK_.call(null,v))){
return cljs.core.map.call(null,((function (vec__7340,k,v){
return (function (p1__7324_SHARP_){
return encode_param.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,p1__7324_SHARP_], null));
});})(vec__7340,k,v))
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
var len__1288__auto___7345 = arguments.length;
var i__1289__auto___7346 = (0);
while(true){
if((i__1289__auto___7346 < len__1288__auto___7345)){
args__1295__auto__.push((arguments[i__1289__auto___7346]));

var G__7347 = (i__1289__auto___7346 + (1));
i__1289__auto___7346 = G__7347;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__7343){
var vec__7344 = p__7343;
var encoding = cljs.core.nth.call(null,vec__7344,(0),null);
return clojure.string.replace.call(null,clojure.string.replace.call(null,dogfort.util.codec.form_encode_STAR_.call(null,x,(function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})()),/\+/,"%2B"),/%20/,"+");
});

dogfort.util.codec.form_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_encode.cljs$lang$applyTo = (function (seq7341){
var G__7342 = cljs.core.first.call(null,seq7341);
var seq7341__$1 = cljs.core.next.call(null,seq7341);
return dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic(G__7342,seq7341__$1);
});
/**
 * Decode the supplied www-form-urlencoded string using the specified encoding,
 *   or UTF-8 by default.
 */
dogfort.util.codec.form_decode_str = (function dogfort$util$codec$form_decode_str(var_args){
var args__1295__auto__ = [];
var len__1288__auto___7352 = arguments.length;
var i__1289__auto___7353 = (0);
while(true){
if((i__1289__auto___7353 < len__1288__auto___7352)){
args__1295__auto__.push((arguments[i__1289__auto___7353]));

var G__7354 = (i__1289__auto___7353 + (1));
i__1289__auto___7353 = G__7354;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__7350){
var vec__7351 = p__7350;
var encoding = cljs.core.nth.call(null,vec__7351,(0),null);
return dogfort.util.codec.url_decode.call(null,encoded,(function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})());
});

dogfort.util.codec.form_decode_str.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_decode_str.cljs$lang$applyTo = (function (seq7348){
var G__7349 = cljs.core.first.call(null,seq7348);
var seq7348__$1 = cljs.core.next.call(null,seq7348);
return dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic(G__7349,seq7348__$1);
});
/**
 * Decode the supplied www-form-urlencoded string using the specified encoding,
 *   or UTF-8 by default. If the encoded value is a string, a string is returned.
 *   If the encoded value is a map of parameters, a map is returned.
 */
dogfort.util.codec.form_decode = (function dogfort$util$codec$form_decode(var_args){
var args__1295__auto__ = [];
var len__1288__auto___7360 = arguments.length;
var i__1289__auto___7361 = (0);
while(true){
if((i__1289__auto___7361 < len__1288__auto___7360)){
args__1295__auto__.push((arguments[i__1289__auto___7361]));

var G__7362 = (i__1289__auto___7361 + (1));
i__1289__auto___7361 = G__7362;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__7357){
var vec__7358 = p__7357;
var encoding = cljs.core.nth.call(null,vec__7358,(0),null);
if((encoded.indexOf("=") < (0))){
return dogfort.util.codec.form_decode_str.call(null,encoded,encoding);
} else {
return cljs.core.reduce.call(null,((function (vec__7358,encoding){
return (function (m,param){
var temp__4423__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__7359 = temp__4423__auto__;
var k = cljs.core.nth.call(null,vec__7359,(0),null);
var v = cljs.core.nth.call(null,vec__7359,(1),null);
return dogfort.util.data.assoc_conj.call(null,m,dogfort.util.codec.form_decode_str.call(null,k,encoding),dogfort.util.codec.form_decode_str.call(null,v,encoding));
} else {
return m;
}
});})(vec__7358,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,encoded,/&/));
}
});

dogfort.util.codec.form_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_decode.cljs$lang$applyTo = (function (seq7355){
var G__7356 = cljs.core.first.call(null,seq7355);
var seq7355__$1 = cljs.core.next.call(null,seq7355);
return dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic(G__7356,seq7355__$1);
});

//# sourceMappingURL=codec.js.map