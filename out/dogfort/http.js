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
var map__6963 = ring_result;
var map__6963__$1 = ((((!((map__6963 == null)))?((((map__6963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6963):map__6963);
var status = cljs.core.get.call(null,map__6963__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var headers = cljs.core.get.call(null,map__6963__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__6963__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var end_stream_QMARK_ = cljs.core.get.call(null,map__6963__$1,new cljs.core.Keyword(null,"end-stream?","end-stream?",-166958884));
res.statusCode = status;

var seq__6965_6971 = cljs.core.seq.call(null,headers);
var chunk__6966_6972 = null;
var count__6967_6973 = (0);
var i__6968_6974 = (0);
while(true){
if((i__6968_6974 < count__6967_6973)){
var vec__6969_6975 = cljs.core._nth.call(null,chunk__6966_6972,i__6968_6974);
var header_6976 = cljs.core.nth.call(null,vec__6969_6975,(0),null);
var value_6977 = cljs.core.nth.call(null,vec__6969_6975,(1),null);
res.setHeader(cljs.core.clj__GT_js.call(null,header_6976),cljs.core.clj__GT_js.call(null,value_6977));

var G__6978 = seq__6965_6971;
var G__6979 = chunk__6966_6972;
var G__6980 = count__6967_6973;
var G__6981 = (i__6968_6974 + (1));
seq__6965_6971 = G__6978;
chunk__6966_6972 = G__6979;
count__6967_6973 = G__6980;
i__6968_6974 = G__6981;
continue;
} else {
var temp__4425__auto___6982 = cljs.core.seq.call(null,seq__6965_6971);
if(temp__4425__auto___6982){
var seq__6965_6983__$1 = temp__4425__auto___6982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6965_6983__$1)){
var c__1033__auto___6984 = cljs.core.chunk_first.call(null,seq__6965_6983__$1);
var G__6985 = cljs.core.chunk_rest.call(null,seq__6965_6983__$1);
var G__6986 = c__1033__auto___6984;
var G__6987 = cljs.core.count.call(null,c__1033__auto___6984);
var G__6988 = (0);
seq__6965_6971 = G__6985;
chunk__6966_6972 = G__6986;
count__6967_6973 = G__6987;
i__6968_6974 = G__6988;
continue;
} else {
var vec__6970_6989 = cljs.core.first.call(null,seq__6965_6983__$1);
var header_6990 = cljs.core.nth.call(null,vec__6970_6989,(0),null);
var value_6991 = cljs.core.nth.call(null,vec__6970_6989,(1),null);
res.setHeader(cljs.core.clj__GT_js.call(null,header_6990),cljs.core.clj__GT_js.call(null,value_6991));

var G__6992 = cljs.core.next.call(null,seq__6965_6983__$1);
var G__6993 = null;
var G__6994 = (0);
var G__6995 = (0);
seq__6965_6971 = G__6992;
chunk__6966_6972 = G__6993;
count__6967_6973 = G__6994;
i__6968_6974 = G__6995;
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
var seq__6997_7009 = cljs.core.seq.call(null,data__$1);
var chunk__6998_7010 = null;
var count__6999_7011 = (0);
var i__7000_7012 = (0);
while(true){
if((i__7000_7012 < count__6999_7011)){
var i_7013 = cljs.core._nth.call(null,chunk__6998_7010,i__7000_7012);
dogfort.http._write_response.call(null,i_7013,res);

var G__7014 = seq__6997_7009;
var G__7015 = chunk__6998_7010;
var G__7016 = count__6999_7011;
var G__7017 = (i__7000_7012 + (1));
seq__6997_7009 = G__7014;
chunk__6998_7010 = G__7015;
count__6999_7011 = G__7016;
i__7000_7012 = G__7017;
continue;
} else {
var temp__4425__auto___7018 = cljs.core.seq.call(null,seq__6997_7009);
if(temp__4425__auto___7018){
var seq__6997_7019__$1 = temp__4425__auto___7018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6997_7019__$1)){
var c__1033__auto___7020 = cljs.core.chunk_first.call(null,seq__6997_7019__$1);
var G__7021 = cljs.core.chunk_rest.call(null,seq__6997_7019__$1);
var G__7022 = c__1033__auto___7020;
var G__7023 = cljs.core.count.call(null,c__1033__auto___7020);
var G__7024 = (0);
seq__6997_7009 = G__7021;
chunk__6998_7010 = G__7022;
count__6999_7011 = G__7023;
i__7000_7012 = G__7024;
continue;
} else {
var i_7025 = cljs.core.first.call(null,seq__6997_7019__$1);
dogfort.http._write_response.call(null,i_7025,res);

var G__7026 = cljs.core.next.call(null,seq__6997_7019__$1);
var G__7027 = null;
var G__7028 = (0);
var G__7029 = (0);
seq__6997_7009 = G__7026;
chunk__6998_7010 = G__7027;
count__6999_7011 = G__7028;
i__7000_7012 = G__7029;
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
var seq__7001_7030 = cljs.core.seq.call(null,data__$1);
var chunk__7002_7031 = null;
var count__7003_7032 = (0);
var i__7004_7033 = (0);
while(true){
if((i__7004_7033 < count__7003_7032)){
var i_7034 = cljs.core._nth.call(null,chunk__7002_7031,i__7004_7033);
dogfort.http._write_response.call(null,i_7034,res);

var G__7035 = seq__7001_7030;
var G__7036 = chunk__7002_7031;
var G__7037 = count__7003_7032;
var G__7038 = (i__7004_7033 + (1));
seq__7001_7030 = G__7035;
chunk__7002_7031 = G__7036;
count__7003_7032 = G__7037;
i__7004_7033 = G__7038;
continue;
} else {
var temp__4425__auto___7039 = cljs.core.seq.call(null,seq__7001_7030);
if(temp__4425__auto___7039){
var seq__7001_7040__$1 = temp__4425__auto___7039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7001_7040__$1)){
var c__1033__auto___7041 = cljs.core.chunk_first.call(null,seq__7001_7040__$1);
var G__7042 = cljs.core.chunk_rest.call(null,seq__7001_7040__$1);
var G__7043 = c__1033__auto___7041;
var G__7044 = cljs.core.count.call(null,c__1033__auto___7041);
var G__7045 = (0);
seq__7001_7030 = G__7042;
chunk__7002_7031 = G__7043;
count__7003_7032 = G__7044;
i__7004_7033 = G__7045;
continue;
} else {
var i_7046 = cljs.core.first.call(null,seq__7001_7040__$1);
dogfort.http._write_response.call(null,i_7046,res);

var G__7047 = cljs.core.next.call(null,seq__7001_7040__$1);
var G__7048 = null;
var G__7049 = (0);
var G__7050 = (0);
seq__7001_7030 = G__7047;
chunk__7002_7031 = G__7048;
count__7003_7032 = G__7049;
i__7004_7033 = G__7050;
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
var seq__7005_7051 = cljs.core.seq.call(null,data__$1);
var chunk__7006_7052 = null;
var count__7007_7053 = (0);
var i__7008_7054 = (0);
while(true){
if((i__7008_7054 < count__7007_7053)){
var i_7055 = cljs.core._nth.call(null,chunk__7006_7052,i__7008_7054);
dogfort.http._write_response.call(null,i_7055,res);

var G__7056 = seq__7005_7051;
var G__7057 = chunk__7006_7052;
var G__7058 = count__7007_7053;
var G__7059 = (i__7008_7054 + (1));
seq__7005_7051 = G__7056;
chunk__7006_7052 = G__7057;
count__7007_7053 = G__7058;
i__7008_7054 = G__7059;
continue;
} else {
var temp__4425__auto___7060 = cljs.core.seq.call(null,seq__7005_7051);
if(temp__4425__auto___7060){
var seq__7005_7061__$1 = temp__4425__auto___7060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7005_7061__$1)){
var c__1033__auto___7062 = cljs.core.chunk_first.call(null,seq__7005_7061__$1);
var G__7063 = cljs.core.chunk_rest.call(null,seq__7005_7061__$1);
var G__7064 = c__1033__auto___7062;
var G__7065 = cljs.core.count.call(null,c__1033__auto___7062);
var G__7066 = (0);
seq__7005_7051 = G__7063;
chunk__7006_7052 = G__7064;
count__7007_7053 = G__7065;
i__7008_7054 = G__7066;
continue;
} else {
var i_7067 = cljs.core.first.call(null,seq__7005_7061__$1);
dogfort.http._write_response.call(null,i_7067,res);

var G__7068 = cljs.core.next.call(null,seq__7005_7061__$1);
var G__7069 = null;
var G__7070 = (0);
var G__7071 = (0);
seq__7005_7051 = G__7068;
chunk__7006_7052 = G__7069;
count__7007_7053 = G__7070;
i__7008_7054 = G__7071;
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
return (function (p1__6996_SHARP_){
return dogfort.http.send_error_page.call(null,res,(500),p1__6996_SHARP_);
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
return (function (p1__7072_SHARP_){
return dogfort.http.send_result.call(null,res,p1__7072_SHARP_);
});})(url,uri,query,query__$1,headers,conn,address,peer_cert_fn,ring_req,result))
,((function (url,uri,query,query__$1,headers,conn,address,peer_cert_fn,ring_req,result){
return (function (p1__7073_SHARP_){
return dogfort.http.send_error_page.call(null,res,(500),p1__7073_SHARP_);
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
return (function (p1__7074_SHARP_){
return dogfort.http.ws_handler.call(null,handler,p1__7074_SHARP_);
});})(server,wss))
);

return server.listen(new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(options));
});

//# sourceMappingURL=http.js.map