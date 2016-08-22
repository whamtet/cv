// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2350__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2350 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2351__i = 0, G__2351__a = new Array(arguments.length -  0);
while (G__2351__i < G__2351__a.length) {G__2351__a[G__2351__i] = arguments[G__2351__i + 0]; ++G__2351__i;}
  args = new cljs.core.IndexedSeq(G__2351__a,0);
} 
return G__2350__delegate.call(this,args);};
G__2350.cljs$lang$maxFixedArity = 0;
G__2350.cljs$lang$applyTo = (function (arglist__2352){
var args = cljs.core.seq(arglist__2352);
return G__2350__delegate(args);
});
G__2350.cljs$core$IFn$_invoke$arity$variadic = G__2350__delegate;
return G__2350;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2353__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2353 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2354__i = 0, G__2354__a = new Array(arguments.length -  0);
while (G__2354__i < G__2354__a.length) {G__2354__a[G__2354__i] = arguments[G__2354__i + 0]; ++G__2354__i;}
  args = new cljs.core.IndexedSeq(G__2354__a,0);
} 
return G__2353__delegate.call(this,args);};
G__2353.cljs$lang$maxFixedArity = 0;
G__2353.cljs$lang$applyTo = (function (arglist__2355){
var args = cljs.core.seq(arglist__2355);
return G__2353__delegate(args);
});
G__2353.cljs$core$IFn$_invoke$arity$variadic = G__2353__delegate;
return G__2353;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map