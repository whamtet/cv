// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('dogfort.http');
goog.require('cljs.core');
goog.require('redlobster.promise');
goog.require('cljs.node');
goog.require('dogfort.util.response');
goog.require('redlobster.stream');
goog.require('redlobster.events');
dogfort.http.http = require("http");
dogfort.http.url = require("url");
dogfort.http.Stream = require("stream");
dogfort.http.ws = require("ws");

/**
 * @interface
 */
dogfort.http.IHTTPResponseWriter = function(){};

/**
 * Write data to a http.ServerResponse
 */
dogfort.http._write_response = (function dogfort$http$_write_response(data,res){
if((!((data == null))) && (!((data.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 == null)))){
return data.dogfort$http$IHTTPResponseWriter$_write_response$arity$2(data,res);
} else {
var x__885__auto__ = (((data == null))?null:data);
var m__886__auto__ = (dogfort.http._write_response[goog.typeOf(x__885__auto__)]);
if(!((m__886__auto__ == null))){
return m__886__auto__.call(null,data,res);
} else {
var m__886__auto____$1 = (dogfort.http._write_response["_"]);
if(!((m__886__auto____$1 == null))){
return m__886__auto____$1.call(null,data,res);
} else {
throw cljs.core.missing_protocol.call(null,"IHTTPResponseWriter.-write-response",data);
}
}
}
});

dogfort.http.send_result = (function dogfort$http$send_result(res,ring_result){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"keep-alive","keep-alive",-47515827).cljs$core$IFn$_invoke$arity$1(ring_result))){
if(cljs.core.truth_(ring_result)){
var map__6946 = ring_result;
var map__6946__$1 = ((((!((map__6946 == null)))?((((map__6946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6946):map__6946);
var status = cljs.core.get.call(null,map__6946__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var headers = cljs.core.get.call(null,map__6946__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__6946__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var end_stream_QMARK_ = cljs.core.get.call(null,map__6946__$1,new cljs.core.Keyword(null,"end-stream?","end-stream?",-166958884));
res.statusCode = status;

var seq__6948_6954 = cljs.core.seq.call(null,headers);
var chunk__6949_6955 = null;
var count__6950_6956 = (0);
var i__6951_6957 = (0);
while(true){
if((i__6951_6957 < count__6950_6956)){
var vec__6952_6958 = cljs.core._nth.call(null,chunk__6949_6955,i__6951_6957);
var header_6959 = cljs.core.nth.call(null,vec__6952_6958,(0),null);
var value_6960 = cljs.core.nth.call(null,vec__6952_6958,(1),null);
res.setHeader(cljs.core.clj__GT_js.call(null,header_6959),cljs.core.clj__GT_js.call(null,value_6960));

var G__6961 = seq__6948_6954;
var G__6962 = chunk__6949_6955;
var G__6963 = count__6950_6956;
var G__6964 = (i__6951_6957 + (1));
seq__6948_6954 = G__6961;
chunk__6949_6955 = G__6962;
count__6950_6956 = G__6963;
i__6951_6957 = G__6964;
continue;
} else {
var temp__4425__auto___6965 = cljs.core.seq.call(null,seq__6948_6954);
if(temp__4425__auto___6965){
var seq__6948_6966__$1 = temp__4425__auto___6965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6948_6966__$1)){
var c__1033__auto___6967 = cljs.core.chunk_first.call(null,seq__6948_6966__$1);
var G__6968 = cljs.core.chunk_rest.call(null,seq__6948_6966__$1);
var G__6969 = c__1033__auto___6967;
var G__6970 = cljs.core.count.call(null,c__1033__auto___6967);
var G__6971 = (0);
seq__6948_6954 = G__6968;
chunk__6949_6955 = G__6969;
count__6950_6956 = G__6970;
i__6951_6957 = G__6971;
continue;
} else {
var vec__6953_6972 = cljs.core.first.call(null,seq__6948_6966__$1);
var header_6973 = cljs.core.nth.call(null,vec__6953_6972,(0),null);
var value_6974 = cljs.core.nth.call(null,vec__6953_6972,(1),null);
res.setHeader(cljs.core.clj__GT_js.call(null,header_6973),cljs.core.clj__GT_js.call(null,value_6974));

var G__6975 = cljs.core.next.call(null,seq__6948_6966__$1);
var G__6976 = null;
var G__6977 = (0);
var G__6978 = (0);
seq__6948_6954 = G__6975;
chunk__6949_6955 = G__6976;
count__6950_6956 = G__6977;
i__6951_6957 = G__6978;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(dogfort.http._write_response.call(null,body,res))){
res.end();
} else {
}

if(cljs.core.truth_((function (){var and__218__auto__ = redlobster.stream.stream_QMARK_.call(null,body);
if(cljs.core.truth_(and__218__auto__)){
return end_stream_QMARK_;
} else {
return and__218__auto__;
}
})())){
return body.end();
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
dogfort.http.send_error_page = (function dogfort$http$send_error_page(res,status,err){
return dogfort.http.send_result.call(null,res,dogfort.util.response.default_response.call(null,(500)));
});
(dogfort.http.IHTTPResponseWriter["null"] = true);

(dogfort.http._write_response["null"] = (function (data,res){
return true;
}));

(dogfort.http.IHTTPResponseWriter["string"] = true);

(dogfort.http._write_response["string"] = (function (data,res){
res.write(data);

return true;
}));

cljs.core.PersistentVector.prototype.dogfort$http$IHTTPResponseWriter$ = true;

cljs.core.PersistentVector.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
var seq__6980_6992 = cljs.core.seq.call(null,data__$1);
var chunk__6981_6993 = null;
var count__6982_6994 = (0);
var i__6983_6995 = (0);
while(true){
if((i__6983_6995 < count__6982_6994)){
var i_6996 = cljs.core._nth.call(null,chunk__6981_6993,i__6983_6995);
dogfort.http._write_response.call(null,i_6996,res);

var G__6997 = seq__6980_6992;
var G__6998 = chunk__6981_6993;
var G__6999 = count__6982_6994;
var G__7000 = (i__6983_6995 + (1));
seq__6980_6992 = G__6997;
chunk__6981_6993 = G__6998;
count__6982_6994 = G__6999;
i__6983_6995 = G__7000;
continue;
} else {
var temp__4425__auto___7001 = cljs.core.seq.call(null,seq__6980_6992);
if(temp__4425__auto___7001){
var seq__6980_7002__$1 = temp__4425__auto___7001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6980_7002__$1)){
var c__1033__auto___7003 = cljs.core.chunk_first.call(null,seq__6980_7002__$1);
var G__7004 = cljs.core.chunk_rest.call(null,seq__6980_7002__$1);
var G__7005 = c__1033__auto___7003;
var G__7006 = cljs.core.count.call(null,c__1033__auto___7003);
var G__7007 = (0);
seq__6980_6992 = G__7004;
chunk__6981_6993 = G__7005;
count__6982_6994 = G__7006;
i__6983_6995 = G__7007;
continue;
} else {
var i_7008 = cljs.core.first.call(null,seq__6980_7002__$1);
dogfort.http._write_response.call(null,i_7008,res);

var G__7009 = cljs.core.next.call(null,seq__6980_7002__$1);
var G__7010 = null;
var G__7011 = (0);
var G__7012 = (0);
seq__6980_6992 = G__7009;
chunk__6981_6993 = G__7010;
count__6982_6994 = G__7011;
i__6983_6995 = G__7012;
continue;
}
} else {
}
}
break;
}

return true;
});

cljs.core.List.prototype.dogfort$http$IHTTPResponseWriter$ = true;

cljs.core.List.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
var seq__6984_7013 = cljs.core.seq.call(null,data__$1);
var chunk__6985_7014 = null;
var count__6986_7015 = (0);
var i__6987_7016 = (0);
while(true){
if((i__6987_7016 < count__6986_7015)){
var i_7017 = cljs.core._nth.call(null,chunk__6985_7014,i__6987_7016);
dogfort.http._write_response.call(null,i_7017,res);

var G__7018 = seq__6984_7013;
var G__7019 = chunk__6985_7014;
var G__7020 = count__6986_7015;
var G__7021 = (i__6987_7016 + (1));
seq__6984_7013 = G__7018;
chunk__6985_7014 = G__7019;
count__6986_7015 = G__7020;
i__6987_7016 = G__7021;
continue;
} else {
var temp__4425__auto___7022 = cljs.core.seq.call(null,seq__6984_7013);
if(temp__4425__auto___7022){
var seq__6984_7023__$1 = temp__4425__auto___7022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6984_7023__$1)){
var c__1033__auto___7024 = cljs.core.chunk_first.call(null,seq__6984_7023__$1);
var G__7025 = cljs.core.chunk_rest.call(null,seq__6984_7023__$1);
var G__7026 = c__1033__auto___7024;
var G__7027 = cljs.core.count.call(null,c__1033__auto___7024);
var G__7028 = (0);
seq__6984_7013 = G__7025;
chunk__6985_7014 = G__7026;
count__6986_7015 = G__7027;
i__6987_7016 = G__7028;
continue;
} else {
var i_7029 = cljs.core.first.call(null,seq__6984_7023__$1);
dogfort.http._write_response.call(null,i_7029,res);

var G__7030 = cljs.core.next.call(null,seq__6984_7023__$1);
var G__7031 = null;
var G__7032 = (0);
var G__7033 = (0);
seq__6984_7013 = G__7030;
chunk__6985_7014 = G__7031;
count__6986_7015 = G__7032;
i__6987_7016 = G__7033;
continue;
}
} else {
}
}
break;
}

return true;
});

cljs.core.LazySeq.prototype.dogfort$http$IHTTPResponseWriter$ = true;

cljs.core.LazySeq.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
var seq__6988_7034 = cljs.core.seq.call(null,data__$1);
var chunk__6989_7035 = null;
var count__6990_7036 = (0);
var i__6991_7037 = (0);
while(true){
if((i__6991_7037 < count__6990_7036)){
var i_7038 = cljs.core._nth.call(null,chunk__6989_7035,i__6991_7037);
dogfort.http._write_response.call(null,i_7038,res);

var G__7039 = seq__6988_7034;
var G__7040 = chunk__6989_7035;
var G__7041 = count__6990_7036;
var G__7042 = (i__6991_7037 + (1));
seq__6988_7034 = G__7039;
chunk__6989_7035 = G__7040;
count__6990_7036 = G__7041;
i__6991_7037 = G__7042;
continue;
} else {
var temp__4425__auto___7043 = cljs.core.seq.call(null,seq__6988_7034);
if(temp__4425__auto___7043){
var seq__6988_7044__$1 = temp__4425__auto___7043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6988_7044__$1)){
var c__1033__auto___7045 = cljs.core.chunk_first.call(null,seq__6988_7044__$1);
var G__7046 = cljs.core.chunk_rest.call(null,seq__6988_7044__$1);
var G__7047 = c__1033__auto___7045;
var G__7048 = cljs.core.count.call(null,c__1033__auto___7045);
var G__7049 = (0);
seq__6988_7034 = G__7046;
chunk__6989_7035 = G__7047;
count__6990_7036 = G__7048;
i__6991_7037 = G__7049;
continue;
} else {
var i_7050 = cljs.core.first.call(null,seq__6988_7044__$1);
dogfort.http._write_response.call(null,i_7050,res);

var G__7051 = cljs.core.next.call(null,seq__6988_7044__$1);
var G__7052 = null;
var G__7053 = (0);
var G__7054 = (0);
seq__6988_7034 = G__7051;
chunk__6989_7035 = G__7052;
count__6990_7036 = G__7053;
i__6991_7037 = G__7054;
continue;
}
} else {
}
}
break;
}

return true;
});

Buffer.prototype.dogfort$http$IHTTPResponseWriter$ = true;

Buffer.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
res.write(data__$1);

return true;
});

dogfort.http.Stream.prototype.dogfort$http$IHTTPResponseWriter$ = true;

dogfort.http.Stream.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
redlobster.events.on.call(null,data__$1,new cljs.core.Keyword(null,"error","error",-978969032),((function (data__$1){
return (function (p1__6979_SHARP_){
return dogfort.http.send_error_page.call(null,res,(500),p1__6979_SHARP_);
});})(data__$1))
);

data__$1.pipe(res);

return false;
});
dogfort.http.build_listener = (function dogfort$http$build_listener(handler,options){
return (function (req,res){
var url = dogfort.http.url.parse(req.url);
var uri = url.pathname;
var query = url.search;
var query__$1 = (cljs.core.truth_(query)?query.substring((1)):null);
var headers = cljs.core.js__GT_clj.call(null,req.headers);
var conn = req.connection;
var address = cljs.core.js__GT_clj.call(null,conn.address());
var peer_cert_fn = conn.getPeerCertificate;
var ring_req = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"ssl-client-cert","ssl-client-cert",661784516),new cljs.core.Keyword(null,"remote-addr","remote-addr",815723977),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"server-port","server-port",663745648),new cljs.core.Keyword(null,"content-length","content-length",441319507),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"character-encoding","character-encoding",-1946080777),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"request-method","request-method",1764796830)],[res,(cljs.core.truth_(peer_cert_fn)?peer_cert_fn.call(null):null),conn.remoteAddress,headers,address.call(null,"port"),headers.call(null,"content-length"),headers.call(null,"content-type"),null,uri,address.call(null,"address"),query__$1,req,"http",cljs.core.keyword.call(null,req.method.toLowerCase())]);
var result = handler.call(null,ring_req);
return redlobster.promise.on_realised.call(null,result,((function (url,uri,query,query__$1,headers,conn,address,peer_cert_fn,ring_req,result){
return (function (p1__7055_SHARP_){
return dogfort.http.send_result.call(null,res,p1__7055_SHARP_);
});})(url,uri,query,query__$1,headers,conn,address,peer_cert_fn,ring_req,result))
,((function (url,uri,query,query__$1,headers,conn,address,peer_cert_fn,ring_req,result){
return (function (p1__7056_SHARP_){
return dogfort.http.send_error_page.call(null,res,(500),p1__7056_SHARP_);
});})(url,uri,query,query__$1,headers,conn,address,peer_cert_fn,ring_req,result))
);
});
});
dogfort.http.ws_handler = (function dogfort$http$ws_handler(handler,websocket){
var upgrade_req = websocket.upgradeReq;
var url = dogfort.http.url.parse(upgrade_req.url);
var uri = url.pathname;
var query = url.search;
var query__$1 = (cljs.core.truth_(query)?query.substring((1)):null);
var headers = cljs.core.js__GT_clj.call(null,upgrade_req.headers);
var conn = upgrade_req.connection;
var address = cljs.core.js__GT_clj.call(null,conn.address());
return handler.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"server-port","server-port",663745648),address.call(null,"port"),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),address.call(null,"address"),new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"query-string","query-string",-1018845061),query__$1,new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket,new cljs.core.Keyword(null,"websocket?","websocket?",1552493139),true,new cljs.core.Keyword(null,"request-method","request-method",1764796830),new cljs.core.Keyword(null,"get","get",1683182755)], null));
});
dogfort.http.run_http = (function dogfort$http$run_http(handler,options){
var server = dogfort.http.http.createServer(dogfort.http.build_listener.call(null,handler,options));
var wss = (new dogfort.http.ws.Server({"server": server}));
wss.on("connection",((function (server,wss){
return (function (p1__7057_SHARP_){
return dogfort.http.ws_handler.call(null,handler,p1__7057_SHARP_);
});})(server,wss))
);

return server.listen(new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(options));
});

//# sourceMappingURL=http.js.map