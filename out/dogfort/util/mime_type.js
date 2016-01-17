// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('dogfort.util.mime_type');
goog.require('cljs.core');
dogfort.util.mime_type.default_mime_types = cljs.core.PersistentHashMap.fromArrays(["mp4","iso","json","gif","webm","js","flv","tiff","qt","xml","mpe","ogg","dmg","flac","crt","pdf","dll","xpm","cer","class","tar","deb","ps","xwd","css","mp3","csv","svg","sgml","lzh","jpeg","eps","gz","exe","ogv","avi","mpeg","tif","sgm","wmv","xbm","ico","pnm","atom","xls","htm","ppt","swf","m4v","bin","crl","ras","rd","jar","asc","ai","mov","oga","7z","bz2","png","txt","dvi","rar","aac","pbm","jpe","ppm","html","pgm","etx","jpg","lha","rss","zip","doc","rtf","rb","dms","mpg","bmp"],["video/mp4","application/x-iso9660-image","application/json","image/gif","video/webm","text/javascript","video/x-flv","image/tiff","video/quicktime","text/xml","video/mpeg","audio/ogg","application/octet-stream","audio/flac","application/x-x509-ca-cert","application/pdf","application/octet-stream","image/x-xpixmap","application/pkix-cert","application/octet-stream","application/x-tar","application/x-deb","application/postscript","image/x-xwindowdump","text/css","audio/mpeg","text/csv","image/svg+xml","text/sgml","application/octet-stream","image/jpeg","application/postscript","application/gzip","application/octet-stream","video/ogg","video/x-msvideo","video/mpeg","image/tiff","text/sgml","video/x-ms-wmv","image/x-xbitmap","image/x-icon","image/x-portable-anymap","application/atom+xml","application/vnd.ms-excel","text/html","application/vnd.ms-powerpoint","application/x-shockwave-flash","video/mp4","application/octet-stream","application/pkix-crl","image/x-cmu-raster","text/plain","application/java-archive","text/plain","application/postscript","video/quicktime","audio/ogg","application/x-7z-compressed","application/x-bzip","image/png","text/plain","application/x-dvi","application/x-rar-compressed","audio/aac","image/x-portable-bitmap","image/jpeg","image/x-portable-pixmap","text/html","image/x-portable-graymap","text/x-setext","image/jpeg","application/octet-stream","application/rss+xml","application/zip","application/msword","application/rtf","text/plain","application/octet-stream","video/mpeg","image/bmp"]);
/**
 * Returns the file extension of a filename or filepath.
 */
dogfort.util.mime_type.filename_ext = (function dogfort$util$mime_type$filename_ext(filename){
return cljs.core.second.call(null,cljs.core.re_find.call(null,/\.([^.\/\\]+)$/,filename));
});
/**
 * Get the mimetype from the filename extension. Takes an optional map of
 *   extensions to mimetypes that overrides values in the default-mime-types map.
 */
dogfort.util.mime_type.ext_mime_type = (function dogfort$util$mime_type$ext_mime_type(var_args){
var args__1295__auto__ = [];
var len__1288__auto___6445 = arguments.length;
var i__1289__auto___6446 = (0);
while(true){
if((i__1289__auto___6446 < len__1288__auto___6445)){
args__1295__auto__.push((arguments[i__1289__auto___6446]));

var G__6447 = (i__1289__auto___6446 + (1));
i__1289__auto___6446 = G__6447;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.util.mime_type.ext_mime_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.util.mime_type.ext_mime_type.cljs$core$IFn$_invoke$arity$variadic = (function (filename,p__6443){
var vec__6444 = p__6443;
var mime_types = cljs.core.nth.call(null,vec__6444,(0),null);
var mime_types__$1 = cljs.core.merge.call(null,dogfort.util.mime_type.default_mime_types,mime_types);
return mime_types__$1.call(null,dogfort.util.mime_type.filename_ext.call(null,filename));
});

dogfort.util.mime_type.ext_mime_type.cljs$lang$maxFixedArity = (1);

dogfort.util.mime_type.ext_mime_type.cljs$lang$applyTo = (function (seq6441){
var G__6442 = cljs.core.first.call(null,seq6441);
var seq6441__$1 = cljs.core.next.call(null,seq6441);
return dogfort.util.mime_type.ext_mime_type.cljs$core$IFn$_invoke$arity$variadic(G__6442,seq6441__$1);
});

//# sourceMappingURL=mime_type.js.map