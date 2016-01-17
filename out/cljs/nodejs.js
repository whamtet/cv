// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10898__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10898 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10899__i = 0, G__10899__a = new Array(arguments.length -  0);
while (G__10899__i < G__10899__a.length) {G__10899__a[G__10899__i] = arguments[G__10899__i + 0]; ++G__10899__i;}
  args = new cljs.core.IndexedSeq(G__10899__a,0);
} 
return G__10898__delegate.call(this,args);};
G__10898.cljs$lang$maxFixedArity = 0;
G__10898.cljs$lang$applyTo = (function (arglist__10900){
var args = cljs.core.seq(arglist__10900);
return G__10898__delegate(args);
});
G__10898.cljs$core$IFn$_invoke$arity$variadic = G__10898__delegate;
return G__10898;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10901__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10901 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10902__i = 0, G__10902__a = new Array(arguments.length -  0);
while (G__10902__i < G__10902__a.length) {G__10902__a[G__10902__i] = arguments[G__10902__i + 0]; ++G__10902__i;}
  args = new cljs.core.IndexedSeq(G__10902__a,0);
} 
return G__10901__delegate.call(this,args);};
G__10901.cljs$lang$maxFixedArity = 0;
G__10901.cljs$lang$applyTo = (function (arglist__10903){
var args = cljs.core.seq(arglist__10903);
return G__10901__delegate(args);
});
G__10901.cljs$core$IFn$_invoke$arity$variadic = G__10901__delegate;
return G__10901;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map