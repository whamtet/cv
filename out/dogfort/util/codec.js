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
var len__1288__auto___10911 = arguments.length;
var i__1289__auto___10912 = (0);
while(true){
if((i__1289__auto___10912 < len__1288__auto___10911)){
args__1295__auto__.push((arguments[i__1289__auto___10912]));

var G__10913 = (i__1289__auto___10912 + (1));
i__1289__auto___10912 = G__10913;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic = (function (unencoded,p__10909){
var vec__10910 = p__10909;
var encoding = cljs.core.nth.call(null,vec__10910,(0),null);
var buf = (new Buffer(unencoded,(function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})()));
var bytes = cljs.core.map.call(null,((function (buf,vec__10910,encoding){
return (function (p1__10906_SHARP_){
return [cljs.core.str("%"),cljs.core.str(dogfort.util.codec.number__GT_hex.call(null,(buf[p1__10906_SHARP_])))].join('');
});})(buf,vec__10910,encoding))
,cljs.core.range.call(null,buf.length));
return clojure.string.join.call(null,bytes);
});

dogfort.util.codec.percent_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.percent_encode.cljs$lang$applyTo = (function (seq10907){
var G__10908 = cljs.core.first.call(null,seq10907);
var seq10907__$1 = cljs.core.next.call(null,seq10907);
return dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic(G__10908,seq10907__$1);
});
dogfort.util.codec.parse_bytes = (function dogfort$util$codec$parse_bytes(encoded_bytes){
return (new Buffer(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__10915_SHARP_){
return parseInt(p1__10915_SHARP_,(16));
}),cljs.core.map.call(null,(function (p1__10914_SHARP_){
return cljs.core.subs.call(null,p1__10914_SHARP_,(1));
}),cljs.core.re_seq.call(null,/%../,encoded_bytes))))));
});
/**
 * Decode every percent-encoded character in the given string using the
 *   specified encoding, or UTF-8 by default.
 */
dogfort.util.codec.percent_decode = (function dogfort$util$codec$percent_decode(var_args){
var args__1295__auto__ = [];
var len__1288__auto___10920 = arguments.length;
var i__1289__auto___10921 = (0);
while(true){
if((i__1289__auto___10921 < len__1288__auto___10920)){
args__1295__auto__.push((arguments[i__1289__auto___10921]));

var G__10922 = (i__1289__auto___10921 + (1));
i__1289__auto___10921 = G__10922;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__10918){
var vec__10919 = p__10918;
var encoding = cljs.core.nth.call(null,vec__10919,(0),null);
return clojure.string.replace.call(null,encoded,/(?:%..)+/,((function (vec__10919,encoding){
return (function (chars){
return dogfort.util.codec.parse_bytes.call(null,chars).toString((function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})()).replace("\\","\\\\");
});})(vec__10919,encoding))
);
});

dogfort.util.codec.percent_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.percent_decode.cljs$lang$applyTo = (function (seq10916){
var G__10917 = cljs.core.first.call(null,seq10916);
var seq10916__$1 = cljs.core.next.call(null,seq10916);
return dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic(G__10917,seq10916__$1);
});
/**
 * Returns the url-encoded version of the given string, using either a specified
 *   encoding or UTF-8 by default.
 */
dogfort.util.codec.url_encode = (function dogfort$util$codec$url_encode(var_args){
var args__1295__auto__ = [];
var len__1288__auto___10928 = arguments.length;
var i__1289__auto___10929 = (0);
while(true){
if((i__1289__auto___10929 < len__1288__auto___10928)){
args__1295__auto__.push((arguments[i__1289__auto___10929]));

var G__10930 = (i__1289__auto___10929 + (1));
i__1289__auto___10929 = G__10930;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic = (function (unencoded,p__10926){
var vec__10927 = p__10926;
var encoding = cljs.core.nth.call(null,vec__10927,(0),null);
return clojure.string.replace.call(null,unencoded,/[^A-Za-z0-9_~.+-]+/,((function (vec__10927,encoding){
return (function (p1__10923_SHARP_){
return dogfort.util.codec.double_escape.call(null,dogfort.util.codec.percent_encode.call(null,p1__10923_SHARP_,encoding));
});})(vec__10927,encoding))
);
});

dogfort.util.codec.url_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.url_encode.cljs$lang$applyTo = (function (seq10924){
var G__10925 = cljs.core.first.call(null,seq10924);
var seq10924__$1 = cljs.core.next.call(null,seq10924);
return dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic(G__10925,seq10924__$1);
});
/**
 * Returns the url-decoded version of the given string, using either a specified
 *   encoding or UTF-8 by default. If the encoding is invalid, nil is returned.
 */
dogfort.util.codec.url_decode = (function dogfort$util$codec$url_decode(var_args){
var args__1295__auto__ = [];
var len__1288__auto___10935 = arguments.length;
var i__1289__auto___10936 = (0);
while(true){
if((i__1289__auto___10936 < len__1288__auto___10935)){
args__1295__auto__.push((arguments[i__1289__auto___10936]));

var G__10937 = (i__1289__auto___10936 + (1));
i__1289__auto___10936 = G__10937;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__10933){
var vec__10934 = p__10933;
var encoding = cljs.core.nth.call(null,vec__10934,(0),null);
return dogfort.util.codec.percent_decode.call(null,clojure.string.replace.call(null,encoded,/[+]/," "),encoding);
});

dogfort.util.codec.url_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.url_decode.cljs$lang$applyTo = (function (seq10931){
var G__10932 = cljs.core.first.call(null,seq10931);
var seq10931__$1 = cljs.core.next.call(null,seq10931);
return dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__10932,seq10931__$1);
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
var encode_param = (function dogfort$util$codec$form_encode_STAR__$_encode_param(p__10951){
var vec__10953 = p__10951;
var k = cljs.core.nth.call(null,vec__10953,(0),null);
var v = cljs.core.nth.call(null,vec__10953,(1),null);
return [cljs.core.str(encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(encode.call(null,v))].join('');
});
return clojure.string.join.call(null,"&",cljs.core.mapcat.call(null,(function (p__10954){
var vec__10955 = p__10954;
var k = cljs.core.nth.call(null,vec__10955,(0),null);
var v = cljs.core.nth.call(null,vec__10955,(1),null);
if((cljs.core.seq_QMARK_.call(null,v)) || (cljs.core.sequential_QMARK_.call(null,v))){
return cljs.core.map.call(null,((function (vec__10955,k,v){
return (function (p1__10939_SHARP_){
return encode_param.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,p1__10939_SHARP_], null));
});})(vec__10955,k,v))
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
var len__1288__auto___10960 = arguments.length;
var i__1289__auto___10961 = (0);
while(true){
if((i__1289__auto___10961 < len__1288__auto___10960)){
args__1295__auto__.push((arguments[i__1289__auto___10961]));

var G__10962 = (i__1289__auto___10961 + (1));
i__1289__auto___10961 = G__10962;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__10958){
var vec__10959 = p__10958;
var encoding = cljs.core.nth.call(null,vec__10959,(0),null);
return clojure.string.replace.call(null,clojure.string.replace.call(null,dogfort.util.codec.form_encode_STAR_.call(null,x,(function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})()),/\+/,"%2B"),/%20/,"+");
});

dogfort.util.codec.form_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_encode.cljs$lang$applyTo = (function (seq10956){
var G__10957 = cljs.core.first.call(null,seq10956);
var seq10956__$1 = cljs.core.next.call(null,seq10956);
return dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic(G__10957,seq10956__$1);
});
/**
 * Decode the supplied www-form-urlencoded string using the specified encoding,
 *   or UTF-8 by default.
 */
dogfort.util.codec.form_decode_str = (function dogfort$util$codec$form_decode_str(var_args){
var args__1295__auto__ = [];
var len__1288__auto___10967 = arguments.length;
var i__1289__auto___10968 = (0);
while(true){
if((i__1289__auto___10968 < len__1288__auto___10967)){
args__1295__auto__.push((arguments[i__1289__auto___10968]));

var G__10969 = (i__1289__auto___10968 + (1));
i__1289__auto___10968 = G__10969;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__10965){
var vec__10966 = p__10965;
var encoding = cljs.core.nth.call(null,vec__10966,(0),null);
return dogfort.util.codec.url_decode.call(null,encoded,(function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})());
});

dogfort.util.codec.form_decode_str.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_decode_str.cljs$lang$applyTo = (function (seq10963){
var G__10964 = cljs.core.first.call(null,seq10963);
var seq10963__$1 = cljs.core.next.call(null,seq10963);
return dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic(G__10964,seq10963__$1);
});
/**
 * Decode the supplied www-form-urlencoded string using the specified encoding,
 *   or UTF-8 by default. If the encoded value is a string, a string is returned.
 *   If the encoded value is a map of parameters, a map is returned.
 */
dogfort.util.codec.form_decode = (function dogfort$util$codec$form_decode(var_args){
var args__1295__auto__ = [];
var len__1288__auto___10975 = arguments.length;
var i__1289__auto___10976 = (0);
while(true){
if((i__1289__auto___10976 < len__1288__auto___10975)){
args__1295__auto__.push((arguments[i__1289__auto___10976]));

var G__10977 = (i__1289__auto___10976 + (1));
i__1289__auto___10976 = G__10977;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__10972){
var vec__10973 = p__10972;
var encoding = cljs.core.nth.call(null,vec__10973,(0),null);
if((encoded.indexOf("=") < (0))){
return dogfort.util.codec.form_decode_str.call(null,encoded,encoding);
} else {
return cljs.core.reduce.call(null,((function (vec__10973,encoding){
return (function (m,param){
var temp__4423__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__10974 = temp__4423__auto__;
var k = cljs.core.nth.call(null,vec__10974,(0),null);
var v = cljs.core.nth.call(null,vec__10974,(1),null);
return dogfort.util.data.assoc_conj.call(null,m,dogfort.util.codec.form_decode_str.call(null,k,encoding),dogfort.util.codec.form_decode_str.call(null,v,encoding));
} else {
return m;
}
});})(vec__10973,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,encoded,/&/));
}
});

dogfort.util.codec.form_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_decode.cljs$lang$applyTo = (function (seq10970){
var G__10971 = cljs.core.first.call(null,seq10970);
var seq10970__$1 = cljs.core.next.call(null,seq10970);
return dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic(G__10971,seq10970__$1);
});

//# sourceMappingURL=codec.js.map