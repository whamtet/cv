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
var len__1288__auto___6111 = arguments.length;
var i__1289__auto___6112 = (0);
while(true){
if((i__1289__auto___6112 < len__1288__auto___6111)){
args__1295__auto__.push((arguments[i__1289__auto___6112]));

var G__6113 = (i__1289__auto___6112 + (1));
i__1289__auto___6112 = G__6113;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic = (function (unencoded,p__6109){
var vec__6110 = p__6109;
var encoding = cljs.core.nth.call(null,vec__6110,(0),null);
var buf = (new Buffer(unencoded,(function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})()));
var bytes = cljs.core.map.call(null,((function (buf,vec__6110,encoding){
return (function (p1__6106_SHARP_){
return [cljs.core.str("%"),cljs.core.str(dogfort.util.codec.number__GT_hex.call(null,(buf[p1__6106_SHARP_])))].join('');
});})(buf,vec__6110,encoding))
,cljs.core.range.call(null,buf.length));
return clojure.string.join.call(null,bytes);
});

dogfort.util.codec.percent_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.percent_encode.cljs$lang$applyTo = (function (seq6107){
var G__6108 = cljs.core.first.call(null,seq6107);
var seq6107__$1 = cljs.core.next.call(null,seq6107);
return dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic(G__6108,seq6107__$1);
});
dogfort.util.codec.parse_bytes = (function dogfort$util$codec$parse_bytes(encoded_bytes){
return (new Buffer(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__6115_SHARP_){
return parseInt(p1__6115_SHARP_,(16));
}),cljs.core.map.call(null,(function (p1__6114_SHARP_){
return cljs.core.subs.call(null,p1__6114_SHARP_,(1));
}),cljs.core.re_seq.call(null,/%../,encoded_bytes))))));
});
/**
 * Decode every percent-encoded character in the given string using the
 *   specified encoding, or UTF-8 by default.
 */
dogfort.util.codec.percent_decode = (function dogfort$util$codec$percent_decode(var_args){
var args__1295__auto__ = [];
var len__1288__auto___6120 = arguments.length;
var i__1289__auto___6121 = (0);
while(true){
if((i__1289__auto___6121 < len__1288__auto___6120)){
args__1295__auto__.push((arguments[i__1289__auto___6121]));

var G__6122 = (i__1289__auto___6121 + (1));
i__1289__auto___6121 = G__6122;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__6118){
var vec__6119 = p__6118;
var encoding = cljs.core.nth.call(null,vec__6119,(0),null);
return clojure.string.replace.call(null,encoded,/(?:%..)+/,((function (vec__6119,encoding){
return (function (chars){
return dogfort.util.codec.parse_bytes.call(null,chars).toString((function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})()).replace("\\","\\\\");
});})(vec__6119,encoding))
);
});

dogfort.util.codec.percent_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.percent_decode.cljs$lang$applyTo = (function (seq6116){
var G__6117 = cljs.core.first.call(null,seq6116);
var seq6116__$1 = cljs.core.next.call(null,seq6116);
return dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic(G__6117,seq6116__$1);
});
/**
 * Returns the url-encoded version of the given string, using either a specified
 *   encoding or UTF-8 by default.
 */
dogfort.util.codec.url_encode = (function dogfort$util$codec$url_encode(var_args){
var args__1295__auto__ = [];
var len__1288__auto___6128 = arguments.length;
var i__1289__auto___6129 = (0);
while(true){
if((i__1289__auto___6129 < len__1288__auto___6128)){
args__1295__auto__.push((arguments[i__1289__auto___6129]));

var G__6130 = (i__1289__auto___6129 + (1));
i__1289__auto___6129 = G__6130;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic = (function (unencoded,p__6126){
var vec__6127 = p__6126;
var encoding = cljs.core.nth.call(null,vec__6127,(0),null);
return clojure.string.replace.call(null,unencoded,/[^A-Za-z0-9_~.+-]+/,((function (vec__6127,encoding){
return (function (p1__6123_SHARP_){
return dogfort.util.codec.double_escape.call(null,dogfort.util.codec.percent_encode.call(null,p1__6123_SHARP_,encoding));
});})(vec__6127,encoding))
);
});

dogfort.util.codec.url_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.url_encode.cljs$lang$applyTo = (function (seq6124){
var G__6125 = cljs.core.first.call(null,seq6124);
var seq6124__$1 = cljs.core.next.call(null,seq6124);
return dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic(G__6125,seq6124__$1);
});
/**
 * Returns the url-decoded version of the given string, using either a specified
 *   encoding or UTF-8 by default. If the encoding is invalid, nil is returned.
 */
dogfort.util.codec.url_decode = (function dogfort$util$codec$url_decode(var_args){
var args__1295__auto__ = [];
var len__1288__auto___6135 = arguments.length;
var i__1289__auto___6136 = (0);
while(true){
if((i__1289__auto___6136 < len__1288__auto___6135)){
args__1295__auto__.push((arguments[i__1289__auto___6136]));

var G__6137 = (i__1289__auto___6136 + (1));
i__1289__auto___6136 = G__6137;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__6133){
var vec__6134 = p__6133;
var encoding = cljs.core.nth.call(null,vec__6134,(0),null);
return dogfort.util.codec.percent_decode.call(null,clojure.string.replace.call(null,encoded,/[+]/," "),encoding);
});

dogfort.util.codec.url_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.url_decode.cljs$lang$applyTo = (function (seq6131){
var G__6132 = cljs.core.first.call(null,seq6131);
var seq6131__$1 = cljs.core.next.call(null,seq6131);
return dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__6132,seq6131__$1);
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
var encode_param = (function dogfort$util$codec$form_encode_STAR__$_encode_param(p__6151){
var vec__6153 = p__6151;
var k = cljs.core.nth.call(null,vec__6153,(0),null);
var v = cljs.core.nth.call(null,vec__6153,(1),null);
return [cljs.core.str(encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(encode.call(null,v))].join('');
});
return clojure.string.join.call(null,"&",cljs.core.mapcat.call(null,(function (p__6154){
var vec__6155 = p__6154;
var k = cljs.core.nth.call(null,vec__6155,(0),null);
var v = cljs.core.nth.call(null,vec__6155,(1),null);
if((cljs.core.seq_QMARK_.call(null,v)) || (cljs.core.sequential_QMARK_.call(null,v))){
return cljs.core.map.call(null,((function (vec__6155,k,v){
return (function (p1__6139_SHARP_){
return encode_param.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,p1__6139_SHARP_], null));
});})(vec__6155,k,v))
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
var len__1288__auto___6160 = arguments.length;
var i__1289__auto___6161 = (0);
while(true){
if((i__1289__auto___6161 < len__1288__auto___6160)){
args__1295__auto__.push((arguments[i__1289__auto___6161]));

var G__6162 = (i__1289__auto___6161 + (1));
i__1289__auto___6161 = G__6162;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__6158){
var vec__6159 = p__6158;
var encoding = cljs.core.nth.call(null,vec__6159,(0),null);
return clojure.string.replace.call(null,clojure.string.replace.call(null,dogfort.util.codec.form_encode_STAR_.call(null,x,(function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})()),/\+/,"%2B"),/%20/,"+");
});

dogfort.util.codec.form_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_encode.cljs$lang$applyTo = (function (seq6156){
var G__6157 = cljs.core.first.call(null,seq6156);
var seq6156__$1 = cljs.core.next.call(null,seq6156);
return dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic(G__6157,seq6156__$1);
});
/**
 * Decode the supplied www-form-urlencoded string using the specified encoding,
 *   or UTF-8 by default.
 */
dogfort.util.codec.form_decode_str = (function dogfort$util$codec$form_decode_str(var_args){
var args__1295__auto__ = [];
var len__1288__auto___6167 = arguments.length;
var i__1289__auto___6168 = (0);
while(true){
if((i__1289__auto___6168 < len__1288__auto___6167)){
args__1295__auto__.push((arguments[i__1289__auto___6168]));

var G__6169 = (i__1289__auto___6168 + (1));
i__1289__auto___6168 = G__6169;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__6165){
var vec__6166 = p__6165;
var encoding = cljs.core.nth.call(null,vec__6166,(0),null);
return dogfort.util.codec.url_decode.call(null,encoded,(function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})());
});

dogfort.util.codec.form_decode_str.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_decode_str.cljs$lang$applyTo = (function (seq6163){
var G__6164 = cljs.core.first.call(null,seq6163);
var seq6163__$1 = cljs.core.next.call(null,seq6163);
return dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic(G__6164,seq6163__$1);
});
/**
 * Decode the supplied www-form-urlencoded string using the specified encoding,
 *   or UTF-8 by default. If the encoded value is a string, a string is returned.
 *   If the encoded value is a map of parameters, a map is returned.
 */
dogfort.util.codec.form_decode = (function dogfort$util$codec$form_decode(var_args){
var args__1295__auto__ = [];
var len__1288__auto___6175 = arguments.length;
var i__1289__auto___6176 = (0);
while(true){
if((i__1289__auto___6176 < len__1288__auto___6175)){
args__1295__auto__.push((arguments[i__1289__auto___6176]));

var G__6177 = (i__1289__auto___6176 + (1));
i__1289__auto___6176 = G__6177;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__6172){
var vec__6173 = p__6172;
var encoding = cljs.core.nth.call(null,vec__6173,(0),null);
if((encoded.indexOf("=") < (0))){
return dogfort.util.codec.form_decode_str.call(null,encoded,encoding);
} else {
return cljs.core.reduce.call(null,((function (vec__6173,encoding){
return (function (m,param){
var temp__4423__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__6174 = temp__4423__auto__;
var k = cljs.core.nth.call(null,vec__6174,(0),null);
var v = cljs.core.nth.call(null,vec__6174,(1),null);
return dogfort.util.data.assoc_conj.call(null,m,dogfort.util.codec.form_decode_str.call(null,k,encoding),dogfort.util.codec.form_decode_str.call(null,v,encoding));
} else {
return m;
}
});})(vec__6173,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,encoded,/&/));
}
});

dogfort.util.codec.form_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_decode.cljs$lang$applyTo = (function (seq6170){
var G__6171 = cljs.core.first.call(null,seq6170);
var seq6170__$1 = cljs.core.next.call(null,seq6170);
return dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic(G__6171,seq6170__$1);
});

//# sourceMappingURL=codec.js.map