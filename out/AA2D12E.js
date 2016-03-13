goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__4242__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4242 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4243__i = 0, G__4243__a = new Array(arguments.length -  0);
while (G__4243__i < G__4243__a.length) {G__4243__a[G__4243__i] = arguments[G__4243__i + 0]; ++G__4243__i;}
  args = new cljs.core.IndexedSeq(G__4243__a,0);
} 
return G__4242__delegate.call(this,args);};
G__4242.cljs$lang$maxFixedArity = 0;
G__4242.cljs$lang$applyTo = (function (arglist__4244){
var args = cljs.core.seq(arglist__4244);
return G__4242__delegate(args);
});
G__4242.cljs$core$IFn$_invoke$arity$variadic = G__4242__delegate;
return G__4242;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__4245__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4245 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4246__i = 0, G__4246__a = new Array(arguments.length -  0);
while (G__4246__i < G__4246__a.length) {G__4246__a[G__4246__i] = arguments[G__4246__i + 0]; ++G__4246__i;}
  args = new cljs.core.IndexedSeq(G__4246__a,0);
} 
return G__4245__delegate.call(this,args);};
G__4245.cljs$lang$maxFixedArity = 0;
G__4245.cljs$lang$applyTo = (function (arglist__4247){
var args = cljs.core.seq(arglist__4247);
return G__4245__delegate(args);
});
G__4245.cljs$core$IFn$_invoke$arity$variadic = G__4245__delegate;
return G__4245;
})()
;

return null;
});
