goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__6932__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6933__i = 0, G__6933__a = new Array(arguments.length -  0);
while (G__6933__i < G__6933__a.length) {G__6933__a[G__6933__i] = arguments[G__6933__i + 0]; ++G__6933__i;}
  args = new cljs.core.IndexedSeq(G__6933__a,0);
} 
return G__6932__delegate.call(this,args);};
G__6932.cljs$lang$maxFixedArity = 0;
G__6932.cljs$lang$applyTo = (function (arglist__6934){
var args = cljs.core.seq(arglist__6934);
return G__6932__delegate(args);
});
G__6932.cljs$core$IFn$_invoke$arity$variadic = G__6932__delegate;
return G__6932;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__6935__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6935 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6936__i = 0, G__6936__a = new Array(arguments.length -  0);
while (G__6936__i < G__6936__a.length) {G__6936__a[G__6936__i] = arguments[G__6936__i + 0]; ++G__6936__i;}
  args = new cljs.core.IndexedSeq(G__6936__a,0);
} 
return G__6935__delegate.call(this,args);};
G__6935.cljs$lang$maxFixedArity = 0;
G__6935.cljs$lang$applyTo = (function (arglist__6937){
var args = cljs.core.seq(arglist__6937);
return G__6935__delegate(args);
});
G__6935.cljs$core$IFn$_invoke$arity$variadic = G__6935__delegate;
return G__6935;
})()
;

return null;
});
