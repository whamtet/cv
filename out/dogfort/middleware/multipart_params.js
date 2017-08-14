// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('dogfort.middleware.multipart_params');
goog.require('cljs.core');
goog.require('redlobster.stream');
goog.require('redlobster.promise');
dogfort.middleware.multipart_params.Busboy = require("busboy");
dogfort.middleware.multipart_params.value_map = (function dogfort$middleware$multipart_params$value_map(f,m){
return cljs.core.zipmap.call(null,cljs.core.keys.call(null,m),cljs.core.map.call(null,f,cljs.core.vals.call(null,m)));
});
dogfort.middleware.multipart_params.wrap_multipart_params = (function dogfort$middleware$multipart_params$wrap_multipart_params(handler){
return (function (p__6377){
var map__6378 = p__6377;
var map__6378__$1 = ((((!((map__6378 == null)))?((((map__6378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6378):map__6378);
var req = map__6378__$1;
var body = cljs.core.get.call(null,map__6378__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var request_method = cljs.core.get.call(null,map__6378__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"post","post",269697687),request_method)){
try{var busboy = (new dogfort.middleware.multipart_params.Busboy(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),body.headers], null))));
var params = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var handler_promise = redlobster.promise.promise.call(null);
busboy.on("file",((function (busboy,params,handler_promise,map__6378,map__6378__$1,req,body,request_method){
return (function (fieldname,file,filename,encoding,mimetype){
var data = redlobster.stream.read_binary_stream.call(null,file);
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null),((function (data,busboy,params,handler_promise,map__6378,map__6378__$1,req,body,request_method){
return (function (){
var data__$1 = cljs.core.deref.call(null,data);
return cljs.core.swap_BANG_.call(null,params,cljs.core.assoc,cljs.core.keyword.call(null,fieldname),cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data","filename","encoding","mimetype"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [data__$1,filename,encoding,mimetype], null)));
});})(data,busboy,params,handler_promise,map__6378,map__6378__$1,req,body,request_method))
);
});})(busboy,params,handler_promise,map__6378,map__6378__$1,req,body,request_method))
);

busboy.on("field",((function (busboy,params,handler_promise,map__6378,map__6378__$1,req,body,request_method){
return (function (fieldname,val,fieldname_truncated,val_truncated,encoding,mimetype){
return cljs.core.swap_BANG_.call(null,params,cljs.core.assoc,cljs.core.keyword.call(null,fieldname),val);
});})(busboy,params,handler_promise,map__6378,map__6378__$1,req,body,request_method))
);

busboy.on("finish",((function (busboy,params,handler_promise,map__6378,map__6378__$1,req,body,request_method){
return (function (){
return redlobster.promise.realise.call(null,handler_promise,handler.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,req,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.merge,cljs.core.deref.call(null,params)),new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707),cljs.core.deref.call(null,params))));
});})(busboy,params,handler_promise,map__6378,map__6378__$1,req,body,request_method))
);

body.pipe(busboy);

return handler_promise;
}catch (e6380){var e = e6380;
return handler.call(null,req);
}} else {
return handler.call(null,req);
}
});
});

//# sourceMappingURL=multipart_params.js.map