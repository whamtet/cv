// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('dogfort.middleware.file');
goog.require('cljs.core');
goog.require('redlobster.io');
goog.require('redlobster.promise');
goog.require('cljs.node');
goog.require('dogfort.util.time');
goog.require('dogfort.util.codec');
goog.require('dogfort.util.mime_type');
dogfort.middleware.file.fs = require("fs");
dogfort.middleware.file.path = require("path");
dogfort.middleware.file.crypto = require("crypto");
dogfort.middleware.file.normalise_path = (function dogfort$middleware$file$normalise_path(file,root){
var file__$1 = dogfort.middleware.file.path.join(root,file);
if(((cljs.core.count.call(null,file__$1) > cljs.core.count.call(null,root))) && (cljs.core._EQ_.call(null,root,file__$1.slice((0),cljs.core.count.call(null,root))))){
return file__$1;
} else {
return null;
}
});
dogfort.middleware.file.stat_file = (function dogfort$middleware$file$stat_file(file,opts){
var promise__2492__auto__ = redlobster.promise.promise.call(null);
var realise__2493__auto__ = ((function (promise__2492__auto__){
return (function (promise__2492__auto____$1,value__2494__auto__){
return redlobster.promise.realise.call(null,promise__2492__auto____$1,value__2494__auto__);
});})(promise__2492__auto__))
;
var realise_error__2495__auto__ = ((function (promise__2492__auto__,realise__2493__auto__){
return (function (promise__2492__auto____$1,value__2494__auto__){
return redlobster.promise.realise_error.call(null,promise__2492__auto____$1,value__2494__auto__);
});})(promise__2492__auto__,realise__2493__auto__))
;
var realise = cljs.core.partial.call(null,realise__2493__auto__,promise__2492__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__2495__auto__,promise__2492__auto__);
var temp__4423__auto___2702 = dogfort.middleware.file.normalise_path.call(null,file,new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(temp__4423__auto___2702)){
var file_2703__$1 = temp__4423__auto___2702;
dogfort.middleware.file.fs.stat(file_2703__$1,((function (file_2703__$1,temp__4423__auto___2702,promise__2492__auto__,realise__2493__auto__,realise_error__2495__auto__,realise,realise_error){
return (function (err,stats){
if(cljs.core.truth_(err)){
return realise_error.call(null,err);
} else {
(stats["path"] = file_2703__$1);

return realise.call(null,stats);
}
});})(file_2703__$1,temp__4423__auto___2702,promise__2492__auto__,realise__2493__auto__,realise_error__2495__auto__,realise,realise_error))
);
} else {
realise_error.call(null,null);
}

return promise__2492__auto__;
});
dogfort.middleware.file.etag = (function dogfort$middleware$file$etag(stats){
return dogfort.middleware.file.crypto.createHash("md5").update([cljs.core.str(stats.ino),cljs.core.str("/"),cljs.core.str(stats.mtime),cljs.core.str("/"),cljs.core.str(stats.size)].join('')).digest("hex");
});
dogfort.middleware.file.last_modified = (function dogfort$middleware$file$last_modified(stats){
return dogfort.util.time.rfc822_date.call(null,stats.mtime);
});
dogfort.middleware.file.expand_dir = (function dogfort$middleware$file$expand_dir(path){
try{return dogfort.middleware.file.fs.realpathSync(path);
}catch (e2705){var e = e2705;
throw [cljs.core.str("Directory does not exist: "),cljs.core.str(path)].join('');
}});
dogfort.middleware.file.file_response = (function dogfort$middleware$file$file_response(stats){
var file = stats.path;
var s = redlobster.io.binary_slurp.call(null,file);
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null),((function (s,file){
return (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),dogfort.util.mime_type.ext_mime_type.call(null,file),new cljs.core.Keyword(null,"content-length","content-length",441319507),stats.size,new cljs.core.Keyword(null,"last-modified","last-modified",1593411791),dogfort.middleware.file.last_modified.call(null,stats),new cljs.core.Keyword(null,"etag","etag",-329255476),dogfort.middleware.file.etag.call(null,stats)], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.deref.call(null,s)], null);
});})(s,file))
);
});
dogfort.middleware.file.wrap_file = (function dogfort$middleware$file$wrap_file(var_args){
var args__1295__auto__ = [];
var len__1288__auto___2712 = arguments.length;
var i__1289__auto___2713 = (0);
while(true){
if((i__1289__auto___2713 < len__1288__auto___2712)){
args__1295__auto__.push((arguments[i__1289__auto___2713]));

var G__2714 = (i__1289__auto___2713 + (1));
i__1289__auto___2713 = G__2714;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((2) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((2)),(0))):null);
return dogfort.middleware.file.wrap_file.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__1296__auto__);
});

dogfort.middleware.file.wrap_file.cljs$core$IFn$_invoke$arity$variadic = (function (app,root_path,p__2710){
var vec__2711 = p__2710;
var opts = cljs.core.nth.call(null,vec__2711,(0),null);
var opts__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"root","root",-448657453),dogfort.middleware.file.expand_dir.call(null,root_path),new cljs.core.Keyword(null,"index-files?","index-files?",1158816198),true,new cljs.core.Keyword(null,"allow-symlinks?","allow-symlinks?",885237804),false], null),opts);
return ((function (opts__$1,vec__2711,opts){
return (function (req){
if(!((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(req))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(req))))){
return app.call(null,req);
} else {
var file = dogfort.util.codec.url_decode.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(req)).slice((1));
var stat_p = dogfort.middleware.file.stat_file.call(null,file,opts__$1);
var promise__2501__auto__ = redlobster.promise.promise.call(null);
var realise__2502__auto__ = ((function (promise__2501__auto__,file,stat_p,opts__$1,vec__2711,opts){
return (function (promise__2501__auto____$1,value__2503__auto__){
return redlobster.promise.realise.call(null,promise__2501__auto____$1,value__2503__auto__);
});})(promise__2501__auto__,file,stat_p,opts__$1,vec__2711,opts))
;
var realise_error__2504__auto__ = ((function (promise__2501__auto__,realise__2502__auto__,file,stat_p,opts__$1,vec__2711,opts){
return (function (promise__2501__auto____$1,value__2503__auto__){
return redlobster.promise.realise_error.call(null,promise__2501__auto____$1,value__2503__auto__);
});})(promise__2501__auto__,realise__2502__auto__,file,stat_p,opts__$1,vec__2711,opts))
;
var realise = cljs.core.partial.call(null,realise__2502__auto__,promise__2501__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__2504__auto__,promise__2501__auto__);
redlobster.promise.on_realised.call(null,stat_p,((function (promise__2501__auto__,realise__2502__auto__,realise_error__2504__auto__,realise,realise_error,file,stat_p,opts__$1,vec__2711,opts){
return (function (p1__2706_SHARP_){
return realise.call(null,dogfort.middleware.file.file_response.call(null,p1__2706_SHARP_));
});})(promise__2501__auto__,realise__2502__auto__,realise_error__2504__auto__,realise,realise_error,file,stat_p,opts__$1,vec__2711,opts))
,((function (promise__2501__auto__,realise__2502__auto__,realise_error__2504__auto__,realise,realise_error,file,stat_p,opts__$1,vec__2711,opts){
return (function (){
return realise.call(null,app.call(null,req));
});})(promise__2501__auto__,realise__2502__auto__,realise_error__2504__auto__,realise,realise_error,file,stat_p,opts__$1,vec__2711,opts))
);

return promise__2501__auto__;
}
});
;})(opts__$1,vec__2711,opts))
});

dogfort.middleware.file.wrap_file.cljs$lang$maxFixedArity = (2);

dogfort.middleware.file.wrap_file.cljs$lang$applyTo = (function (seq2707){
var G__2708 = cljs.core.first.call(null,seq2707);
var seq2707__$1 = cljs.core.next.call(null,seq2707);
var G__2709 = cljs.core.first.call(null,seq2707__$1);
var seq2707__$2 = cljs.core.next.call(null,seq2707__$1);
return dogfort.middleware.file.wrap_file.cljs$core$IFn$_invoke$arity$variadic(G__2708,G__2709,seq2707__$2);
});

//# sourceMappingURL=file.js.map