// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('dogfort.middleware.cookies');
goog.require('cljs.core');
goog.require('dogfort.util.codec');
goog.require('clojure.string');
goog.require('redlobster.promise');
/**
 * HTTP token: 1*<any CHAR except CTLs or tspecials>. See RFC2068
 */
dogfort.middleware.cookies.re_token = /[!#$%&'*\-+.0-9A-Z\^_`a-z\|~]+/;
/**
 * RFC6265 cookie-octet
 */
dogfort.middleware.cookies.re_cookie_octet = /[!#$%&'()*+\-.\/0-9:<=>?@A-Z\[\]\^_`a-z\{\|\}~]/;
/**
 * RFC6265 cookie-value
 */
dogfort.middleware.cookies.re_cookie_value = cljs.core.re_pattern.call(null,[cljs.core.str("\""),cljs.core.str(dogfort.middleware.cookies.re_cookie_octet.source),cljs.core.str("*\"|"),cljs.core.str(dogfort.middleware.cookies.re_cookie_octet.source),cljs.core.str("*")].join(''));
/**
 * RFC6265 set-cookie-string
 */
dogfort.middleware.cookies.re_cookie = cljs.core.re_pattern.call(null,[cljs.core.str("\\s*("),cljs.core.str(dogfort.middleware.cookies.re_token.source),cljs.core.str(")=("),cljs.core.str(dogfort.middleware.cookies.re_cookie_value.source),cljs.core.str(")\\s*[;,]?")].join(''));
/**
 * Attributes defined by RFC6265 that apply to the Set-Cookie header.
 */
dogfort.middleware.cookies.set_cookie_attrs = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"domain","domain",1847214937),"Domain",new cljs.core.Keyword(null,"max-age","max-age",-270129271),"Max-Age",new cljs.core.Keyword(null,"path","path",-188191168),"Path",new cljs.core.Keyword(null,"secure","secure",176883900),"Secure",new cljs.core.Keyword(null,"expires","expires",1393008816),"Expires",new cljs.core.Keyword(null,"http-only","http-only",-825379555),"HttpOnly"], null);
/**
 * Turn a HTTP Cookie header into a list of name/value pairs.
 */
dogfort.middleware.cookies.parse_cookie_header = (function dogfort$middleware$cookies$parse_cookie_header(header){
var iter__1002__auto__ = (function dogfort$middleware$cookies$parse_cookie_header_$_iter__7373(s__7374){
return (new cljs.core.LazySeq(null,(function (){
var s__7374__$1 = s__7374;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7374__$1);
if(temp__4425__auto__){
var s__7374__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7374__$2)){
var c__1000__auto__ = cljs.core.chunk_first.call(null,s__7374__$2);
var size__1001__auto__ = cljs.core.count.call(null,c__1000__auto__);
var b__7376 = cljs.core.chunk_buffer.call(null,size__1001__auto__);
if((function (){var i__7375 = (0);
while(true){
if((i__7375 < size__1001__auto__)){
var vec__7379 = cljs.core._nth.call(null,c__1000__auto__,i__7375);
var _ = cljs.core.nth.call(null,vec__7379,(0),null);
var name = cljs.core.nth.call(null,vec__7379,(1),null);
var value = cljs.core.nth.call(null,vec__7379,(2),null);
cljs.core.chunk_append.call(null,b__7376,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null));

var G__7381 = (i__7375 + (1));
i__7375 = G__7381;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7376),dogfort$middleware$cookies$parse_cookie_header_$_iter__7373.call(null,cljs.core.chunk_rest.call(null,s__7374__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7376),null);
}
} else {
var vec__7380 = cljs.core.first.call(null,s__7374__$2);
var _ = cljs.core.nth.call(null,vec__7380,(0),null);
var name = cljs.core.nth.call(null,vec__7380,(1),null);
var value = cljs.core.nth.call(null,vec__7380,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null),dogfort$middleware$cookies$parse_cookie_header_$_iter__7373.call(null,cljs.core.rest.call(null,s__7374__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__1002__auto__.call(null,cljs.core.re_seq.call(null,dogfort.middleware.cookies.re_cookie,header));
});
/**
 * Strip quotes from a cookie value.
 */
dogfort.middleware.cookies.strip_quotes = (function dogfort$middleware$cookies$strip_quotes(value){
return clojure.string.replace.call(null,value,/^\"|\"$/,"");
});
dogfort.middleware.cookies.decode_values = (function dogfort$middleware$cookies$decode_values(cookies,decoder){
var iter__1002__auto__ = (function dogfort$middleware$cookies$decode_values_$_iter__7390(s__7391){
return (new cljs.core.LazySeq(null,(function (){
var s__7391__$1 = s__7391;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7391__$1);
if(temp__4425__auto__){
var s__7391__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7391__$2)){
var c__1000__auto__ = cljs.core.chunk_first.call(null,s__7391__$2);
var size__1001__auto__ = cljs.core.count.call(null,c__1000__auto__);
var b__7393 = cljs.core.chunk_buffer.call(null,size__1001__auto__);
if((function (){var i__7392 = (0);
while(true){
if((i__7392 < size__1001__auto__)){
var vec__7396 = cljs.core._nth.call(null,c__1000__auto__,i__7392);
var name = cljs.core.nth.call(null,vec__7396,(0),null);
var value = cljs.core.nth.call(null,vec__7396,(1),null);
cljs.core.chunk_append.call(null,b__7393,(function (){var temp__4423__auto__ = decoder.call(null,dogfort.middleware.cookies.strip_quotes.call(null,value));
if(cljs.core.truth_(temp__4423__auto__)){
var value__$1 = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value__$1], null)], null);
} else {
return null;
}
})());

var G__7398 = (i__7392 + (1));
i__7392 = G__7398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7393),dogfort$middleware$cookies$decode_values_$_iter__7390.call(null,cljs.core.chunk_rest.call(null,s__7391__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7393),null);
}
} else {
var vec__7397 = cljs.core.first.call(null,s__7391__$2);
var name = cljs.core.nth.call(null,vec__7397,(0),null);
var value = cljs.core.nth.call(null,vec__7397,(1),null);
return cljs.core.cons.call(null,(function (){var temp__4423__auto__ = decoder.call(null,dogfort.middleware.cookies.strip_quotes.call(null,value));
if(cljs.core.truth_(temp__4423__auto__)){
var value__$1 = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value__$1], null)], null);
} else {
return null;
}
})(),dogfort$middleware$cookies$decode_values_$_iter__7390.call(null,cljs.core.rest.call(null,s__7391__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__1002__auto__.call(null,cookies);
});
/**
 * Parse the cookies from a request map.
 */
dogfort.middleware.cookies.parse_cookies = (function dogfort$middleware$cookies$parse_cookies(request,encoder){
var temp__4423__auto__ = cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"cookie"], null));
if(cljs.core.truth_(temp__4423__auto__)){
var cookie = temp__4423__auto__;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,((function (cookie,temp__4423__auto__){
return (function (c){
return dogfort.middleware.cookies.decode_values.call(null,c,encoder);
});})(cookie,temp__4423__auto__))
.call(null,dogfort.middleware.cookies.parse_cookie_header.call(null,cookie))));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Write the main cookie value.
 */
dogfort.middleware.cookies.write_value = (function dogfort$middleware$cookies$write_value(key,value,encoder){
return encoder.call(null,cljs.core.PersistentArrayMap.fromArray([key,value], true, false));
});
/**
 * Is the attribute valid?
 */
dogfort.middleware.cookies.valid_attr_QMARK_ = (function dogfort$middleware$cookies$valid_attr_QMARK_(p__7399){
var vec__7404 = p__7399;
var key = cljs.core.nth.call(null,vec__7404,(0),null);
var value = cljs.core.nth.call(null,vec__7404,(1),null);
var and__218__auto__ = cljs.core.contains_QMARK_.call(null,dogfort.middleware.cookies.set_cookie_attrs,key);
if(and__218__auto__){
var and__218__auto____$1 = cljs.core._EQ_.call(null,(-1),[cljs.core.str(value)].join('').indexOf(";"));
if(and__218__auto____$1){
var G__7407 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__7407) {
case "max-age":
return cljs.core.integer_QMARK_.call(null,value);

break;
case "expires":
return ((value instanceof Date)) || (typeof value === 'string');

break;
default:
return true;

}
} else {
return and__218__auto____$1;
}
} else {
return and__218__auto__;
}
});
/**
 * Write a map of cookie attributes to a string.
 */
dogfort.middleware.cookies.write_attr_map = (function dogfort$middleware$cookies$write_attr_map(attrs){
if(cljs.core.every_QMARK_.call(null,dogfort.middleware.cookies.valid_attr_QMARK_,attrs)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"valid-attr?","valid-attr?",657119621,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null))))].join('')));
}

var iter__1002__auto__ = (function dogfort$middleware$cookies$write_attr_map_$_iter__7417(s__7418){
return (new cljs.core.LazySeq(null,(function (){
var s__7418__$1 = s__7418;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7418__$1);
if(temp__4425__auto__){
var s__7418__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7418__$2)){
var c__1000__auto__ = cljs.core.chunk_first.call(null,s__7418__$2);
var size__1001__auto__ = cljs.core.count.call(null,c__1000__auto__);
var b__7420 = cljs.core.chunk_buffer.call(null,size__1001__auto__);
if((function (){var i__7419 = (0);
while(true){
if((i__7419 < size__1001__auto__)){
var vec__7423 = cljs.core._nth.call(null,c__1000__auto__,i__7419);
var key = cljs.core.nth.call(null,vec__7423,(0),null);
var value = cljs.core.nth.call(null,vec__7423,(1),null);
cljs.core.chunk_append.call(null,b__7420,(function (){var attr_name = cljs.core.name.call(null,dogfort.middleware.cookies.set_cookie_attrs.call(null,key));
if(value === true){
return [cljs.core.str(";"),cljs.core.str(attr_name)].join('');
} else {
if(value === false){
return "";
} else {
return [cljs.core.str(";"),cljs.core.str(attr_name),cljs.core.str("="),cljs.core.str(value)].join('');

}
}
})());

var G__7425 = (i__7419 + (1));
i__7419 = G__7425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7420),dogfort$middleware$cookies$write_attr_map_$_iter__7417.call(null,cljs.core.chunk_rest.call(null,s__7418__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7420),null);
}
} else {
var vec__7424 = cljs.core.first.call(null,s__7418__$2);
var key = cljs.core.nth.call(null,vec__7424,(0),null);
var value = cljs.core.nth.call(null,vec__7424,(1),null);
return cljs.core.cons.call(null,(function (){var attr_name = cljs.core.name.call(null,dogfort.middleware.cookies.set_cookie_attrs.call(null,key));
if(value === true){
return [cljs.core.str(";"),cljs.core.str(attr_name)].join('');
} else {
if(value === false){
return "";
} else {
return [cljs.core.str(";"),cljs.core.str(attr_name),cljs.core.str("="),cljs.core.str(value)].join('');

}
}
})(),dogfort$middleware$cookies$write_attr_map_$_iter__7417.call(null,cljs.core.rest.call(null,s__7418__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__1002__auto__.call(null,attrs);
});
/**
 * Turn a map of cookies into a seq of strings for a Set-Cookie header.
 */
dogfort.middleware.cookies.write_cookies = (function dogfort$middleware$cookies$write_cookies(cookies,encoder){
var iter__1002__auto__ = (function dogfort$middleware$cookies$write_cookies_$_iter__7434(s__7435){
return (new cljs.core.LazySeq(null,(function (){
var s__7435__$1 = s__7435;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7435__$1);
if(temp__4425__auto__){
var s__7435__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7435__$2)){
var c__1000__auto__ = cljs.core.chunk_first.call(null,s__7435__$2);
var size__1001__auto__ = cljs.core.count.call(null,c__1000__auto__);
var b__7437 = cljs.core.chunk_buffer.call(null,size__1001__auto__);
if((function (){var i__7436 = (0);
while(true){
if((i__7436 < size__1001__auto__)){
var vec__7440 = cljs.core._nth.call(null,c__1000__auto__,i__7436);
var key = cljs.core.nth.call(null,vec__7440,(0),null);
var value = cljs.core.nth.call(null,vec__7440,(1),null);
cljs.core.chunk_append.call(null,b__7437,((cljs.core.map_QMARK_.call(null,value))?cljs.core.apply.call(null,cljs.core.str,dogfort.middleware.cookies.write_value.call(null,key,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value),encoder),dogfort.middleware.cookies.write_attr_map.call(null,cljs.core.dissoc.call(null,value,new cljs.core.Keyword(null,"value","value",305978217)))):dogfort.middleware.cookies.write_value.call(null,key,value,encoder)));

var G__7442 = (i__7436 + (1));
i__7436 = G__7442;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7437),dogfort$middleware$cookies$write_cookies_$_iter__7434.call(null,cljs.core.chunk_rest.call(null,s__7435__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7437),null);
}
} else {
var vec__7441 = cljs.core.first.call(null,s__7435__$2);
var key = cljs.core.nth.call(null,vec__7441,(0),null);
var value = cljs.core.nth.call(null,vec__7441,(1),null);
return cljs.core.cons.call(null,((cljs.core.map_QMARK_.call(null,value))?cljs.core.apply.call(null,cljs.core.str,dogfort.middleware.cookies.write_value.call(null,key,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value),encoder),dogfort.middleware.cookies.write_attr_map.call(null,cljs.core.dissoc.call(null,value,new cljs.core.Keyword(null,"value","value",305978217)))):dogfort.middleware.cookies.write_value.call(null,key,value,encoder)),dogfort$middleware$cookies$write_cookies_$_iter__7434.call(null,cljs.core.rest.call(null,s__7435__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__1002__auto__.call(null,cookies);
});
/**
 * Add a Set-Cookie header to a response if there is a :cookies key.
 */
dogfort.middleware.cookies.set_cookies = (function dogfort$middleware$cookies$set_cookies(response,encoder){
var temp__4423__auto__ = new cljs.core.Keyword(null,"cookies","cookies",1839416329).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(temp__4423__auto__)){
var cookies = temp__4423__auto__;
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"Set-Cookie"], null),cljs.core.concat,cljs.core.doall.call(null,dogfort.middleware.cookies.write_cookies.call(null,cookies,encoder)));
} else {
return response;
}
});
/**
 * Parses cookies in the request map. See: wrap-cookies.
 */
dogfort.middleware.cookies.cookies_request = (function dogfort$middleware$cookies$cookies_request(var_args){
var args__1295__auto__ = [];
var len__1288__auto___7449 = arguments.length;
var i__1289__auto___7450 = (0);
while(true){
if((i__1289__auto___7450 < len__1288__auto___7449)){
args__1295__auto__.push((arguments[i__1289__auto___7450]));

var G__7451 = (i__1289__auto___7450 + (1));
i__1289__auto___7450 = G__7451;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.middleware.cookies.cookies_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.middleware.cookies.cookies_request.cljs$core$IFn$_invoke$arity$variadic = (function (request,p__7445){
var vec__7446 = p__7445;
var map__7447 = cljs.core.nth.call(null,vec__7446,(0),null);
var map__7447__$1 = ((((!((map__7447 == null)))?((((map__7447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7447):map__7447);
var decoder = cljs.core.get.call(null,map__7447__$1,new cljs.core.Keyword(null,"decoder","decoder",1169558843),dogfort.util.codec.form_decode_str);
if(cljs.core.truth_(request.call(null,new cljs.core.Keyword(null,"cookies","cookies",1839416329)))){
return request;
} else {
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"cookies","cookies",1839416329),dogfort.middleware.cookies.parse_cookies.call(null,request,decoder));
}
});

dogfort.middleware.cookies.cookies_request.cljs$lang$maxFixedArity = (1);

dogfort.middleware.cookies.cookies_request.cljs$lang$applyTo = (function (seq7443){
var G__7444 = cljs.core.first.call(null,seq7443);
var seq7443__$1 = cljs.core.next.call(null,seq7443);
return dogfort.middleware.cookies.cookies_request.cljs$core$IFn$_invoke$arity$variadic(G__7444,seq7443__$1);
});
/**
 * For responses with :cookies, adds Set-Cookie header and returns response
 *   without :cookies. See: wrap-cookies.
 */
dogfort.middleware.cookies.cookies_response = (function dogfort$middleware$cookies$cookies_response(var_args){
var args__1295__auto__ = [];
var len__1288__auto___7458 = arguments.length;
var i__1289__auto___7459 = (0);
while(true){
if((i__1289__auto___7459 < len__1288__auto___7458)){
args__1295__auto__.push((arguments[i__1289__auto___7459]));

var G__7460 = (i__1289__auto___7459 + (1));
i__1289__auto___7459 = G__7460;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.middleware.cookies.cookies_response.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.middleware.cookies.cookies_response.cljs$core$IFn$_invoke$arity$variadic = (function (response,p__7454){
var vec__7455 = p__7454;
var map__7456 = cljs.core.nth.call(null,vec__7455,(0),null);
var map__7456__$1 = ((((!((map__7456 == null)))?((((map__7456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7456):map__7456);
var encoder = cljs.core.get.call(null,map__7456__$1,new cljs.core.Keyword(null,"encoder","encoder",-1113127834),dogfort.util.codec.form_encode);
var response__$1 = response;
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response__$1], null),((function (response__$1,vec__7455,map__7456,map__7456__$1,encoder){
return (function (){
return cljs.core.dissoc.call(null,dogfort.middleware.cookies.set_cookies.call(null,cljs.core.deref.call(null,response__$1),encoder),new cljs.core.Keyword(null,"cookies","cookies",1839416329));
});})(response__$1,vec__7455,map__7456,map__7456__$1,encoder))
);
});

dogfort.middleware.cookies.cookies_response.cljs$lang$maxFixedArity = (1);

dogfort.middleware.cookies.cookies_response.cljs$lang$applyTo = (function (seq7452){
var G__7453 = cljs.core.first.call(null,seq7452);
var seq7452__$1 = cljs.core.next.call(null,seq7452);
return dogfort.middleware.cookies.cookies_response.cljs$core$IFn$_invoke$arity$variadic(G__7453,seq7452__$1);
});
/**
 * Parses the cookies in the request map, then assocs the resulting map
 *   to the :cookies key on the request.
 * 
 *   Accepts the following options:
 * 
 *   :decoder - a function to decode the cookie value. Expects a function that
 *   takes a string and returns a string. Defaults to URL-decoding.
 * 
 *   :encoder - a function to encode the cookie name and value. Expects a
 *   function that takes a name/value map and returns a string.
 *   Defaults to URL-encoding.
 * 
 *   Each cookie is represented as a map, with its value being held in the
 *   :value key. A cookie may optionally contain a :path, :domain or :port
 *   attribute.
 * 
 *   To set cookies, add a map to the :cookies key on the response. The values
 *   of the cookie map can either be strings, or maps containing the following
 *   keys:
 * 
 *   :value     - the new value of the cookie
 *   :path      - the subpath the cookie is valid for
 *   :domain    - the domain the cookie is valid for
 *   :max-age   - the maximum age in seconds of the cookie
 *   :expires   - a date string at which the cookie will expire
 *   :secure    - set to true if the cookie requires HTTPS, prevent HTTP access
 *   :http-only - set to true if the cookie is valid for HTTP and HTTPS only
 *   (ie. prevent JavaScript access)
 */
dogfort.middleware.cookies.wrap_cookies = (function dogfort$middleware$cookies$wrap_cookies(var_args){
var args__1295__auto__ = [];
var len__1288__auto___7467 = arguments.length;
var i__1289__auto___7468 = (0);
while(true){
if((i__1289__auto___7468 < len__1288__auto___7467)){
args__1295__auto__.push((arguments[i__1289__auto___7468]));

var G__7469 = (i__1289__auto___7468 + (1));
i__1289__auto___7468 = G__7469;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.middleware.cookies.wrap_cookies.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.middleware.cookies.wrap_cookies.cljs$core$IFn$_invoke$arity$variadic = (function (handler,p__7463){
var vec__7464 = p__7463;
var map__7465 = cljs.core.nth.call(null,vec__7464,(0),null);
var map__7465__$1 = ((((!((map__7465 == null)))?((((map__7465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7465):map__7465);
var decoder = cljs.core.get.call(null,map__7465__$1,new cljs.core.Keyword(null,"decoder","decoder",1169558843),dogfort.util.codec.form_decode_str);
var encoder = cljs.core.get.call(null,map__7465__$1,new cljs.core.Keyword(null,"encoder","encoder",-1113127834),dogfort.util.codec.form_encode);
return ((function (vec__7464,map__7465,map__7465__$1,decoder,encoder){
return (function (request){
return dogfort.middleware.cookies.cookies_response.call(null,handler.call(null,dogfort.middleware.cookies.cookies_request.call(null,request,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"decoder","decoder",1169558843),decoder], null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"encoder","encoder",-1113127834),encoder], null));
});
;})(vec__7464,map__7465,map__7465__$1,decoder,encoder))
});

dogfort.middleware.cookies.wrap_cookies.cljs$lang$maxFixedArity = (1);

dogfort.middleware.cookies.wrap_cookies.cljs$lang$applyTo = (function (seq7461){
var G__7462 = cljs.core.first.call(null,seq7461);
var seq7461__$1 = cljs.core.next.call(null,seq7461);
return dogfort.middleware.cookies.wrap_cookies.cljs$core$IFn$_invoke$arity$variadic(G__7462,seq7461__$1);
});

//# sourceMappingURL=cookies.js.map