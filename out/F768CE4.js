goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__4569__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4569 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4570__i = 0, G__4570__a = new Array(arguments.length -  0);
while (G__4570__i < G__4570__a.length) {G__4570__a[G__4570__i] = arguments[G__4570__i + 0]; ++G__4570__i;}
  args = new cljs.core.IndexedSeq(G__4570__a,0);
} 
return G__4569__delegate.call(this,args);};
G__4569.cljs$lang$maxFixedArity = 0;
G__4569.cljs$lang$applyTo = (function (arglist__4571){
var args = cljs.core.seq(arglist__4571);
return G__4569__delegate(args);
});
G__4569.cljs$core$IFn$_invoke$arity$variadic = G__4569__delegate;
return G__4569;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__4572__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4572 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4573__i = 0, G__4573__a = new Array(arguments.length -  0);
while (G__4573__i < G__4573__a.length) {G__4573__a[G__4573__i] = arguments[G__4573__i + 0]; ++G__4573__i;}
  args = new cljs.core.IndexedSeq(G__4573__a,0);
} 
return G__4572__delegate.call(this,args);};
G__4572.cljs$lang$maxFixedArity = 0;
G__4572.cljs$lang$applyTo = (function (arglist__4574){
var args = cljs.core.seq(arglist__4574);
return G__4572__delegate(args);
});
G__4572.cljs$core$IFn$_invoke$arity$variadic = G__4572__delegate;
return G__4572;
})()
;

return null;
});
