// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__3247 = s;
var map__3247__$1 = ((((!((map__3247 == null)))?((((map__3247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3247):map__3247);
var name = cljs.core.get.call(null,map__3247__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__3247__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__3250 = info;
var map__3251 = G__3250;
var map__3251__$1 = ((((!((map__3251 == null)))?((((map__3251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3251):map__3251);
var shadow = cljs.core.get.call(null,map__3251__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__3250__$1 = G__3250;
while(true){
var d__$2 = d__$1;
var map__3253 = G__3250__$1;
var map__3253__$1 = ((((!((map__3253 == null)))?((((map__3253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3253):map__3253);
var shadow__$1 = cljs.core.get.call(null,map__3253__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__3255 = (d__$2 + (1));
var G__3256 = shadow__$1;
d__$1 = G__3255;
G__3250__$1 = G__3256;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.munge;
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__3257){
var map__3262 = p__3257;
var map__3262__$1 = ((((!((map__3262 == null)))?((((map__3262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3262):map__3262);
var name_var = map__3262__$1;
var name = cljs.core.get.call(null,map__3262__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__3262__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__3264 = info;
var map__3264__$1 = ((((!((map__3264 == null)))?((((map__3264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3264):map__3264);
var ns = cljs.core.get.call(null,map__3264__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__3264__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args3266 = [];
var len__1288__auto___3269 = arguments.length;
var i__1289__auto___3270 = (0);
while(true){
if((i__1289__auto___3270 < len__1288__auto___3269)){
args3266.push((arguments[i__1289__auto___3270]));

var G__3271 = (i__1289__auto___3270 + (1));
i__1289__auto___3270 = G__3271;
continue;
} else {
}
break;
}

var G__3268 = args3266.length;
switch (G__3268) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args3266.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;
cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__3274 = cp;
switch (G__3274) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
return [cljs.core.str("\\u"),cljs.core.str(cp.toString((16)))].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__3280_3284 = cljs.core.seq.call(null,s);
var chunk__3281_3285 = null;
var count__3282_3286 = (0);
var i__3283_3287 = (0);
while(true){
if((i__3283_3287 < count__3282_3286)){
var c_3288 = cljs.core._nth.call(null,chunk__3281_3285,i__3283_3287);
sb.append(cljs.compiler.escape_char.call(null,c_3288));

var G__3289 = seq__3280_3284;
var G__3290 = chunk__3281_3285;
var G__3291 = count__3282_3286;
var G__3292 = (i__3283_3287 + (1));
seq__3280_3284 = G__3289;
chunk__3281_3285 = G__3290;
count__3282_3286 = G__3291;
i__3283_3287 = G__3292;
continue;
} else {
var temp__4425__auto___3293 = cljs.core.seq.call(null,seq__3280_3284);
if(temp__4425__auto___3293){
var seq__3280_3294__$1 = temp__4425__auto___3293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3280_3294__$1)){
var c__1033__auto___3295 = cljs.core.chunk_first.call(null,seq__3280_3294__$1);
var G__3296 = cljs.core.chunk_rest.call(null,seq__3280_3294__$1);
var G__3297 = c__1033__auto___3295;
var G__3298 = cljs.core.count.call(null,c__1033__auto___3295);
var G__3299 = (0);
seq__3280_3284 = G__3296;
chunk__3281_3285 = G__3297;
count__3282_3286 = G__3298;
i__3283_3287 = G__3299;
continue;
} else {
var c_3300 = cljs.core.first.call(null,seq__3280_3294__$1);
sb.append(cljs.compiler.escape_char.call(null,c_3300));

var G__3301 = cljs.core.next.call(null,seq__3280_3294__$1);
var G__3302 = null;
var G__3303 = (0);
var G__3304 = (0);
seq__3280_3284 = G__3301;
chunk__3281_3285 = G__3302;
count__3282_3286 = G__3303;
i__3283_3287 = G__3304;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__1143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__1144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__1145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__1146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__1147__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__1147__auto__,method_table__1143__auto__,prefer_table__1144__auto__,method_cache__1145__auto__,cached_hierarchy__1146__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__2494__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__2494__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__3310_3315 = ast;
var map__3310_3316__$1 = ((((!((map__3310_3315 == null)))?((((map__3310_3315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3310_3315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3310_3315):map__3310_3315);
var env_3317 = cljs.core.get.call(null,map__3310_3316__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_3317))){
var map__3312_3318 = env_3317;
var map__3312_3319__$1 = ((((!((map__3312_3318 == null)))?((((map__3312_3318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3312_3318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3312_3318):map__3312_3318);
var line_3320 = cljs.core.get.call(null,map__3312_3319__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_3321 = cljs.core.get.call(null,map__3312_3319__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__3312_3318,map__3312_3319__$1,line_3320,column_3321,map__3310_3315,map__3310_3316__$1,env_3317,val__2494__auto__){
return (function (m){
var minfo = (function (){var G__3314 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__3314__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.call(null,G__3314,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__3314);
return G__3314__$1;
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_3320 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__3312_3318,map__3312_3319__$1,line_3320,column_3321,map__3310_3315,map__3310_3316__$1,env_3317,val__2494__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_3321)?(column_3321 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__3312_3318,map__3312_3319__$1,line_3320,column_3321,map__3310_3315,map__3310_3316__$1,env_3317,val__2494__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__3312_3318,map__3312_3319__$1,line_3320,column_3321,map__3310_3315,map__3310_3316__$1,env_3317,val__2494__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__3312_3318,map__3312_3319__$1,line_3320,column_3321,map__3310_3315,map__3310_3316__$1,env_3317,val__2494__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__3312_3318,map__3312_3319__$1,line_3320,column_3321,map__3310_3315,map__3310_3316__$1,env_3317,val__2494__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__2494__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__1295__auto__ = [];
var len__1288__auto___3328 = arguments.length;
var i__1289__auto___3329 = (0);
while(true){
if((i__1289__auto___3329 < len__1288__auto___3328)){
args__1295__auto__.push((arguments[i__1289__auto___3329]));

var G__3330 = (i__1289__auto___3329 + (1));
i__1289__auto___3329 = G__3330;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((0) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__1296__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__3324_3331 = cljs.core.seq.call(null,xs);
var chunk__3325_3332 = null;
var count__3326_3333 = (0);
var i__3327_3334 = (0);
while(true){
if((i__3327_3334 < count__3326_3333)){
var x_3335 = cljs.core._nth.call(null,chunk__3325_3332,i__3327_3334);
if((x_3335 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_3335)){
cljs.compiler.emit.call(null,x_3335);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_3335)){
cljs.core.apply.call(null,cljs.compiler.emits,x_3335);
} else {
if(goog.isFunction(x_3335)){
x_3335.call(null);
} else {
var s_3336 = cljs.core.print_str.call(null,x_3335);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__3324_3331,chunk__3325_3332,count__3326_3333,i__3327_3334,s_3336,x_3335){
return (function (p1__3322_SHARP_){
return (p1__3322_SHARP_ + cljs.core.count.call(null,s_3336));
});})(seq__3324_3331,chunk__3325_3332,count__3326_3333,i__3327_3334,s_3336,x_3335))
);
}

cljs.core.print.call(null,s_3336);

}
}
}
}

var G__3337 = seq__3324_3331;
var G__3338 = chunk__3325_3332;
var G__3339 = count__3326_3333;
var G__3340 = (i__3327_3334 + (1));
seq__3324_3331 = G__3337;
chunk__3325_3332 = G__3338;
count__3326_3333 = G__3339;
i__3327_3334 = G__3340;
continue;
} else {
var temp__4425__auto___3341 = cljs.core.seq.call(null,seq__3324_3331);
if(temp__4425__auto___3341){
var seq__3324_3342__$1 = temp__4425__auto___3341;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3324_3342__$1)){
var c__1033__auto___3343 = cljs.core.chunk_first.call(null,seq__3324_3342__$1);
var G__3344 = cljs.core.chunk_rest.call(null,seq__3324_3342__$1);
var G__3345 = c__1033__auto___3343;
var G__3346 = cljs.core.count.call(null,c__1033__auto___3343);
var G__3347 = (0);
seq__3324_3331 = G__3344;
chunk__3325_3332 = G__3345;
count__3326_3333 = G__3346;
i__3327_3334 = G__3347;
continue;
} else {
var x_3348 = cljs.core.first.call(null,seq__3324_3342__$1);
if((x_3348 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_3348)){
cljs.compiler.emit.call(null,x_3348);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_3348)){
cljs.core.apply.call(null,cljs.compiler.emits,x_3348);
} else {
if(goog.isFunction(x_3348)){
x_3348.call(null);
} else {
var s_3349 = cljs.core.print_str.call(null,x_3348);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__3324_3331,chunk__3325_3332,count__3326_3333,i__3327_3334,s_3349,x_3348,seq__3324_3342__$1,temp__4425__auto___3341){
return (function (p1__3322_SHARP_){
return (p1__3322_SHARP_ + cljs.core.count.call(null,s_3349));
});})(seq__3324_3331,chunk__3325_3332,count__3326_3333,i__3327_3334,s_3349,x_3348,seq__3324_3342__$1,temp__4425__auto___3341))
);
}

cljs.core.print.call(null,s_3349);

}
}
}
}

var G__3350 = cljs.core.next.call(null,seq__3324_3342__$1);
var G__3351 = null;
var G__3352 = (0);
var G__3353 = (0);
seq__3324_3331 = G__3350;
chunk__3325_3332 = G__3351;
count__3326_3333 = G__3352;
i__3327_3334 = G__3353;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq3323){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3323));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__1295__auto__ = [];
var len__1288__auto___3358 = arguments.length;
var i__1289__auto___3359 = (0);
while(true){
if((i__1289__auto___3359 < len__1288__auto___3358)){
args__1295__auto__.push((arguments[i__1289__auto___3359]));

var G__3360 = (i__1289__auto___3359 + (1));
i__1289__auto___3359 = G__3360;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((0) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__1296__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__3355){
var map__3356 = p__3355;
var map__3356__$1 = ((((!((map__3356 == null)))?((((map__3356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3356):map__3356);
var m = map__3356__$1;
var gen_line = cljs.core.get.call(null,map__3356__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq3354){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3354));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__1204__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_3363_3365 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_3364_3366 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_3363_3365,_STAR_print_fn_STAR_3364_3366,sb__1204__auto__){
return (function (x__1205__auto__){
return sb__1204__auto__.append(x__1205__auto__);
});})(_STAR_print_newline_STAR_3363_3365,_STAR_print_fn_STAR_3364_3366,sb__1204__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_3364_3366;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_3363_3365;
}
return [cljs.core.str(sb__1204__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__1143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__1144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__1145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__1146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__1147__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__1147__auto__,method_table__1143__auto__,prefer_table__1144__auto__,method_cache__1145__auto__,cached_hierarchy__1146__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,x);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__3367 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__3367,(0),null);
var flags = cljs.core.nth.call(null,vec__3367,(1),null);
var pattern = cljs.core.nth.call(null,vec__3367,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__3369){
var map__3370 = p__3369;
var map__3370__$1 = ((((!((map__3370 == null)))?((((map__3370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3370):map__3370);
var arg = map__3370__$1;
var info = cljs.core.get.call(null,map__3370__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__3370__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__3370__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__230__auto__ = js_module_name;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__3231__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__3372 = info__$1;
var G__3372__$1 = ((cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.call(null,G__3372):G__3372);
return G__3372__$1;
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__3373){
var map__3374 = p__3373;
var map__3374__$1 = ((((!((map__3374 == null)))?((((map__3374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3374):map__3374);
var arg = map__3374__$1;
var env = cljs.core.get.call(null,map__3374__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__3374__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__3374__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__3374__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))))].join('')));
}

var map__3376 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__3376__$1 = ((((!((map__3376 == null)))?((((map__3376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3376):map__3376);
var name = cljs.core.get.call(null,map__3376__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__3231__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__3378){
var map__3379 = p__3378;
var map__3379__$1 = ((((!((map__3379 == null)))?((((map__3379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3379):map__3379);
var expr = cljs.core.get.call(null,map__3379__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__3379__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__3379__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3231__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__3381_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__3381_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__3382){
var map__3383 = p__3382;
var map__3383__$1 = ((((!((map__3383 == null)))?((((map__3383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3383):map__3383);
var env = cljs.core.get.call(null,map__3383__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__3383__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__3383__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__3231__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__3385){
var map__3386 = p__3385;
var map__3386__$1 = ((((!((map__3386 == null)))?((((map__3386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3386):map__3386);
var items = cljs.core.get.call(null,map__3386__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__3386__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3231__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__3388){
var map__3389 = p__3388;
var map__3389__$1 = ((((!((map__3389 == null)))?((((map__3389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3389):map__3389);
var items = cljs.core.get.call(null,map__3389__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__3389__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3231__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_3391 = cljs.core.count.call(null,items);
if((cnt_3391 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_3391,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__3392_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__3392_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__3393){
var map__3394 = p__3393;
var map__3394__$1 = ((((!((map__3394 == null)))?((((map__3394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3394):map__3394);
var items = cljs.core.get.call(null,map__3394__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__3394__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3231__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__3396){
var map__3397 = p__3396;
var map__3397__$1 = ((((!((map__3397 == null)))?((((map__3397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3397):map__3397);
var items = cljs.core.get.call(null,map__3397__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__3397__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__3397__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3231__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4425__auto___3407 = cljs.core.seq.call(null,items);
if(temp__4425__auto___3407){
var items_3408__$1 = temp__4425__auto___3407;
var vec__3399_3409 = items_3408__$1;
var vec__3400_3410 = cljs.core.nth.call(null,vec__3399_3409,(0),null);
var k_3411 = cljs.core.nth.call(null,vec__3400_3410,(0),null);
var v_3412 = cljs.core.nth.call(null,vec__3400_3410,(1),null);
var r_3413 = cljs.core.nthnext.call(null,vec__3399_3409,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_3411),"\": ",v_3412);

var seq__3401_3414 = cljs.core.seq.call(null,r_3413);
var chunk__3402_3415 = null;
var count__3403_3416 = (0);
var i__3404_3417 = (0);
while(true){
if((i__3404_3417 < count__3403_3416)){
var vec__3405_3418 = cljs.core._nth.call(null,chunk__3402_3415,i__3404_3417);
var k_3419__$1 = cljs.core.nth.call(null,vec__3405_3418,(0),null);
var v_3420__$1 = cljs.core.nth.call(null,vec__3405_3418,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_3419__$1),"\": ",v_3420__$1);

var G__3421 = seq__3401_3414;
var G__3422 = chunk__3402_3415;
var G__3423 = count__3403_3416;
var G__3424 = (i__3404_3417 + (1));
seq__3401_3414 = G__3421;
chunk__3402_3415 = G__3422;
count__3403_3416 = G__3423;
i__3404_3417 = G__3424;
continue;
} else {
var temp__4425__auto___3425__$1 = cljs.core.seq.call(null,seq__3401_3414);
if(temp__4425__auto___3425__$1){
var seq__3401_3426__$1 = temp__4425__auto___3425__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3401_3426__$1)){
var c__1033__auto___3427 = cljs.core.chunk_first.call(null,seq__3401_3426__$1);
var G__3428 = cljs.core.chunk_rest.call(null,seq__3401_3426__$1);
var G__3429 = c__1033__auto___3427;
var G__3430 = cljs.core.count.call(null,c__1033__auto___3427);
var G__3431 = (0);
seq__3401_3414 = G__3428;
chunk__3402_3415 = G__3429;
count__3403_3416 = G__3430;
i__3404_3417 = G__3431;
continue;
} else {
var vec__3406_3432 = cljs.core.first.call(null,seq__3401_3426__$1);
var k_3433__$1 = cljs.core.nth.call(null,vec__3406_3432,(0),null);
var v_3434__$1 = cljs.core.nth.call(null,vec__3406_3432,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_3433__$1),"\": ",v_3434__$1);

var G__3435 = cljs.core.next.call(null,seq__3401_3426__$1);
var G__3436 = null;
var G__3437 = (0);
var G__3438 = (0);
seq__3401_3414 = G__3435;
chunk__3402_3415 = G__3436;
count__3403_3416 = G__3437;
i__3404_3417 = G__3438;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"}");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__3439){
var map__3440 = p__3439;
var map__3440__$1 = ((((!((map__3440 == null)))?((((map__3440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3440):map__3440);
var form = cljs.core.get.call(null,map__3440__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__3440__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__3231__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__3442){
var map__3445 = p__3442;
var map__3445__$1 = ((((!((map__3445 == null)))?((((map__3445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3445):map__3445);
var op = cljs.core.get.call(null,map__3445__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__3445__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__218__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__218__auto__){
var and__218__auto____$1 = form;
if(cljs.core.truth_(and__218__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__218__auto____$1;
}
} else {
return and__218__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__3447){
var map__3450 = p__3447;
var map__3450__$1 = ((((!((map__3450 == null)))?((((map__3450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3450):map__3450);
var op = cljs.core.get.call(null,map__3450__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__3450__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__230__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__3452){
var map__3453 = p__3452;
var map__3453__$1 = ((((!((map__3453 == null)))?((((map__3453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3453):map__3453);
var test = cljs.core.get.call(null,map__3453__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__3453__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__3453__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__3453__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__3453__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__230__auto__ = unchecked;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__3455){
var map__3456 = p__3455;
var map__3456__$1 = ((((!((map__3456 == null)))?((((map__3456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3456):map__3456);
var v = cljs.core.get.call(null,map__3456__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__3456__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__3456__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__3456__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__3456__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__3458_3472 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__3459_3473 = null;
var count__3460_3474 = (0);
var i__3461_3475 = (0);
while(true){
if((i__3461_3475 < count__3460_3474)){
var vec__3462_3476 = cljs.core._nth.call(null,chunk__3459_3473,i__3461_3475);
var ts_3477 = cljs.core.nth.call(null,vec__3462_3476,(0),null);
var then_3478 = cljs.core.nth.call(null,vec__3462_3476,(1),null);
var seq__3463_3479 = cljs.core.seq.call(null,ts_3477);
var chunk__3464_3480 = null;
var count__3465_3481 = (0);
var i__3466_3482 = (0);
while(true){
if((i__3466_3482 < count__3465_3481)){
var test_3483 = cljs.core._nth.call(null,chunk__3464_3480,i__3466_3482);
cljs.compiler.emitln.call(null,"case ",test_3483,":");

var G__3484 = seq__3463_3479;
var G__3485 = chunk__3464_3480;
var G__3486 = count__3465_3481;
var G__3487 = (i__3466_3482 + (1));
seq__3463_3479 = G__3484;
chunk__3464_3480 = G__3485;
count__3465_3481 = G__3486;
i__3466_3482 = G__3487;
continue;
} else {
var temp__4425__auto___3488 = cljs.core.seq.call(null,seq__3463_3479);
if(temp__4425__auto___3488){
var seq__3463_3489__$1 = temp__4425__auto___3488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3463_3489__$1)){
var c__1033__auto___3490 = cljs.core.chunk_first.call(null,seq__3463_3489__$1);
var G__3491 = cljs.core.chunk_rest.call(null,seq__3463_3489__$1);
var G__3492 = c__1033__auto___3490;
var G__3493 = cljs.core.count.call(null,c__1033__auto___3490);
var G__3494 = (0);
seq__3463_3479 = G__3491;
chunk__3464_3480 = G__3492;
count__3465_3481 = G__3493;
i__3466_3482 = G__3494;
continue;
} else {
var test_3495 = cljs.core.first.call(null,seq__3463_3489__$1);
cljs.compiler.emitln.call(null,"case ",test_3495,":");

var G__3496 = cljs.core.next.call(null,seq__3463_3489__$1);
var G__3497 = null;
var G__3498 = (0);
var G__3499 = (0);
seq__3463_3479 = G__3496;
chunk__3464_3480 = G__3497;
count__3465_3481 = G__3498;
i__3466_3482 = G__3499;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_3478);
} else {
cljs.compiler.emitln.call(null,then_3478);
}

cljs.compiler.emitln.call(null,"break;");

var G__3500 = seq__3458_3472;
var G__3501 = chunk__3459_3473;
var G__3502 = count__3460_3474;
var G__3503 = (i__3461_3475 + (1));
seq__3458_3472 = G__3500;
chunk__3459_3473 = G__3501;
count__3460_3474 = G__3502;
i__3461_3475 = G__3503;
continue;
} else {
var temp__4425__auto___3504 = cljs.core.seq.call(null,seq__3458_3472);
if(temp__4425__auto___3504){
var seq__3458_3505__$1 = temp__4425__auto___3504;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3458_3505__$1)){
var c__1033__auto___3506 = cljs.core.chunk_first.call(null,seq__3458_3505__$1);
var G__3507 = cljs.core.chunk_rest.call(null,seq__3458_3505__$1);
var G__3508 = c__1033__auto___3506;
var G__3509 = cljs.core.count.call(null,c__1033__auto___3506);
var G__3510 = (0);
seq__3458_3472 = G__3507;
chunk__3459_3473 = G__3508;
count__3460_3474 = G__3509;
i__3461_3475 = G__3510;
continue;
} else {
var vec__3467_3511 = cljs.core.first.call(null,seq__3458_3505__$1);
var ts_3512 = cljs.core.nth.call(null,vec__3467_3511,(0),null);
var then_3513 = cljs.core.nth.call(null,vec__3467_3511,(1),null);
var seq__3468_3514 = cljs.core.seq.call(null,ts_3512);
var chunk__3469_3515 = null;
var count__3470_3516 = (0);
var i__3471_3517 = (0);
while(true){
if((i__3471_3517 < count__3470_3516)){
var test_3518 = cljs.core._nth.call(null,chunk__3469_3515,i__3471_3517);
cljs.compiler.emitln.call(null,"case ",test_3518,":");

var G__3519 = seq__3468_3514;
var G__3520 = chunk__3469_3515;
var G__3521 = count__3470_3516;
var G__3522 = (i__3471_3517 + (1));
seq__3468_3514 = G__3519;
chunk__3469_3515 = G__3520;
count__3470_3516 = G__3521;
i__3471_3517 = G__3522;
continue;
} else {
var temp__4425__auto___3523__$1 = cljs.core.seq.call(null,seq__3468_3514);
if(temp__4425__auto___3523__$1){
var seq__3468_3524__$1 = temp__4425__auto___3523__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3468_3524__$1)){
var c__1033__auto___3525 = cljs.core.chunk_first.call(null,seq__3468_3524__$1);
var G__3526 = cljs.core.chunk_rest.call(null,seq__3468_3524__$1);
var G__3527 = c__1033__auto___3525;
var G__3528 = cljs.core.count.call(null,c__1033__auto___3525);
var G__3529 = (0);
seq__3468_3514 = G__3526;
chunk__3469_3515 = G__3527;
count__3470_3516 = G__3528;
i__3471_3517 = G__3529;
continue;
} else {
var test_3530 = cljs.core.first.call(null,seq__3468_3524__$1);
cljs.compiler.emitln.call(null,"case ",test_3530,":");

var G__3531 = cljs.core.next.call(null,seq__3468_3524__$1);
var G__3532 = null;
var G__3533 = (0);
var G__3534 = (0);
seq__3468_3514 = G__3531;
chunk__3469_3515 = G__3532;
count__3470_3516 = G__3533;
i__3471_3517 = G__3534;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_3513);
} else {
cljs.compiler.emitln.call(null,then_3513);
}

cljs.compiler.emitln.call(null,"break;");

var G__3535 = cljs.core.next.call(null,seq__3458_3505__$1);
var G__3536 = null;
var G__3537 = (0);
var G__3538 = (0);
seq__3458_3472 = G__3535;
chunk__3459_3473 = G__3536;
count__3460_3474 = G__3537;
i__3461_3475 = G__3538;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__3539){
var map__3540 = p__3539;
var map__3540__$1 = ((((!((map__3540 == null)))?((((map__3540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3540):map__3540);
var throw$ = cljs.core.get.call(null,map__3540__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__3540__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__3545 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__3545,(0),null);
var rstr = cljs.core.nth.call(null,vec__3545,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__3545,fstr,rstr,ret_t,axstr){
return (function (p1__3542_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__3542_SHARP_);
});})(idx,vec__3545,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__3546 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
var G__3546__$1 = (cljs.core.truth_(ret_t)?[cljs.core.str(G__3546),cljs.core.str(":"),cljs.core.str(ret_t)].join(''):G__3546);
return G__3546__$1;
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__3547_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__3547_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__3550 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__3550,(0),null);
var ts = cljs.core.nth.call(null,vec__3550,(1),null);
var n = cljs.core.nth.call(null,vec__3550,(2),null);
var xs = cljs.core.nthnext.call(null,vec__3550,(3));
if(cljs.core.truth_((function (){var and__218__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__218__auto__){
var and__218__auto____$1 = ts;
if(cljs.core.truth_(and__218__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__218__auto____$1;
}
} else {
return and__218__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__3551 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__3551,(0),null);
var ts = cljs.core.nth.call(null,vec__3551,(1),null);
var xs = cljs.core.nthnext.call(null,vec__3551,(2));
if(cljs.core.truth_((function (){var and__218__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__218__auto__){
var and__218__auto____$1 = ts;
if(cljs.core.truth_(and__218__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__218__auto____$1;
}
} else {
return and__218__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args3553 = [];
var len__1288__auto___3580 = arguments.length;
var i__1289__auto___3581 = (0);
while(true){
if((i__1289__auto___3581 < len__1288__auto___3580)){
args3553.push((arguments[i__1289__auto___3581]));

var G__3582 = (i__1289__auto___3581 + (1));
i__1289__auto___3581 = G__3582;
continue;
} else {
}
break;
}

var G__3555 = args3553.length;
switch (G__3555) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args3553.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__3571 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__3552_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__3552_SHARP_);
} else {
return p1__3552_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var x = cljs.core.nth.call(null,vec__3571,(0),null);
var ys = cljs.core.nthnext.call(null,vec__3571,(1));
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__3572 = cljs.core.seq.call(null,ys);
var chunk__3573 = null;
var count__3574 = (0);
var i__3575 = (0);
while(true){
if((i__3575 < count__3574)){
var next_line = cljs.core._nth.call(null,chunk__3573,i__3575);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__3584 = seq__3572;
var G__3585 = chunk__3573;
var G__3586 = count__3574;
var G__3587 = (i__3575 + (1));
seq__3572 = G__3584;
chunk__3573 = G__3585;
count__3574 = G__3586;
i__3575 = G__3587;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__3572);
if(temp__4425__auto__){
var seq__3572__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3572__$1)){
var c__1033__auto__ = cljs.core.chunk_first.call(null,seq__3572__$1);
var G__3588 = cljs.core.chunk_rest.call(null,seq__3572__$1);
var G__3589 = c__1033__auto__;
var G__3590 = cljs.core.count.call(null,c__1033__auto__);
var G__3591 = (0);
seq__3572 = G__3588;
chunk__3573 = G__3589;
count__3574 = G__3590;
i__3575 = G__3591;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__3572__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__3592 = cljs.core.next.call(null,seq__3572__$1);
var G__3593 = null;
var G__3594 = (0);
var G__3595 = (0);
seq__3572 = G__3592;
chunk__3573 = G__3593;
count__3574 = G__3594;
i__3575 = G__3595;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__3576_3596 = cljs.core.seq.call(null,docs__$2);
var chunk__3577_3597 = null;
var count__3578_3598 = (0);
var i__3579_3599 = (0);
while(true){
if((i__3579_3599 < count__3578_3598)){
var e_3600 = cljs.core._nth.call(null,chunk__3577_3597,i__3579_3599);
if(cljs.core.truth_(e_3600)){
print_comment_lines.call(null,e_3600);
} else {
}

var G__3601 = seq__3576_3596;
var G__3602 = chunk__3577_3597;
var G__3603 = count__3578_3598;
var G__3604 = (i__3579_3599 + (1));
seq__3576_3596 = G__3601;
chunk__3577_3597 = G__3602;
count__3578_3598 = G__3603;
i__3579_3599 = G__3604;
continue;
} else {
var temp__4425__auto___3605 = cljs.core.seq.call(null,seq__3576_3596);
if(temp__4425__auto___3605){
var seq__3576_3606__$1 = temp__4425__auto___3605;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3576_3606__$1)){
var c__1033__auto___3607 = cljs.core.chunk_first.call(null,seq__3576_3606__$1);
var G__3608 = cljs.core.chunk_rest.call(null,seq__3576_3606__$1);
var G__3609 = c__1033__auto___3607;
var G__3610 = cljs.core.count.call(null,c__1033__auto___3607);
var G__3611 = (0);
seq__3576_3596 = G__3608;
chunk__3577_3597 = G__3609;
count__3578_3598 = G__3610;
i__3579_3599 = G__3611;
continue;
} else {
var e_3612 = cljs.core.first.call(null,seq__3576_3606__$1);
if(cljs.core.truth_(e_3612)){
print_comment_lines.call(null,e_3612);
} else {
}

var G__3613 = cljs.core.next.call(null,seq__3576_3606__$1);
var G__3614 = null;
var G__3615 = (0);
var G__3616 = (0);
seq__3576_3596 = G__3613;
chunk__3577_3597 = G__3614;
count__3578_3598 = G__3615;
i__3579_3599 = G__3616;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;
cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__218__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__3618_SHARP_){
return goog.string.startsWith(p1__3618_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__218__auto__)){
var and__218__auto____$1 = opts;
if(cljs.core.truth_(and__218__auto____$1)){
var and__218__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__218__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__218__auto____$2;
}
} else {
return and__218__auto____$1;
}
} else {
return and__218__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__3619){
var map__3620 = p__3619;
var map__3620__$1 = ((((!((map__3620 == null)))?((((map__3620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3620):map__3620);
var name = cljs.core.get.call(null,map__3620__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__3620__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__3620__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__3620__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__3620__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__3620__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__3620__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__3620__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__3620__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4423__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4423__auto__)){
var define = temp__4423__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__218__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__218__auto__)){
return test;
} else {
return and__218__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__3622){
var map__3639 = p__3622;
var map__3639__$1 = ((((!((map__3639 == null)))?((((map__3639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3639):map__3639);
var name = cljs.core.get.call(null,map__3639__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__3639__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__3639__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__3641_3655 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__3642_3656 = null;
var count__3643_3657 = (0);
var i__3644_3658 = (0);
while(true){
if((i__3644_3658 < count__3643_3657)){
var vec__3645_3659 = cljs.core._nth.call(null,chunk__3642_3656,i__3644_3658);
var i_3660 = cljs.core.nth.call(null,vec__3645_3659,(0),null);
var param_3661 = cljs.core.nth.call(null,vec__3645_3659,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_3661);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__3662 = seq__3641_3655;
var G__3663 = chunk__3642_3656;
var G__3664 = count__3643_3657;
var G__3665 = (i__3644_3658 + (1));
seq__3641_3655 = G__3662;
chunk__3642_3656 = G__3663;
count__3643_3657 = G__3664;
i__3644_3658 = G__3665;
continue;
} else {
var temp__4425__auto___3666 = cljs.core.seq.call(null,seq__3641_3655);
if(temp__4425__auto___3666){
var seq__3641_3667__$1 = temp__4425__auto___3666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3641_3667__$1)){
var c__1033__auto___3668 = cljs.core.chunk_first.call(null,seq__3641_3667__$1);
var G__3669 = cljs.core.chunk_rest.call(null,seq__3641_3667__$1);
var G__3670 = c__1033__auto___3668;
var G__3671 = cljs.core.count.call(null,c__1033__auto___3668);
var G__3672 = (0);
seq__3641_3655 = G__3669;
chunk__3642_3656 = G__3670;
count__3643_3657 = G__3671;
i__3644_3658 = G__3672;
continue;
} else {
var vec__3646_3673 = cljs.core.first.call(null,seq__3641_3667__$1);
var i_3674 = cljs.core.nth.call(null,vec__3646_3673,(0),null);
var param_3675 = cljs.core.nth.call(null,vec__3646_3673,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_3675);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__3676 = cljs.core.next.call(null,seq__3641_3667__$1);
var G__3677 = null;
var G__3678 = (0);
var G__3679 = (0);
seq__3641_3655 = G__3676;
chunk__3642_3656 = G__3677;
count__3643_3657 = G__3678;
i__3644_3658 = G__3679;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__3647_3680 = cljs.core.seq.call(null,params);
var chunk__3648_3681 = null;
var count__3649_3682 = (0);
var i__3650_3683 = (0);
while(true){
if((i__3650_3683 < count__3649_3682)){
var param_3684 = cljs.core._nth.call(null,chunk__3648_3681,i__3650_3683);
cljs.compiler.emit.call(null,param_3684);

if(cljs.core._EQ_.call(null,param_3684,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__3685 = seq__3647_3680;
var G__3686 = chunk__3648_3681;
var G__3687 = count__3649_3682;
var G__3688 = (i__3650_3683 + (1));
seq__3647_3680 = G__3685;
chunk__3648_3681 = G__3686;
count__3649_3682 = G__3687;
i__3650_3683 = G__3688;
continue;
} else {
var temp__4425__auto___3689 = cljs.core.seq.call(null,seq__3647_3680);
if(temp__4425__auto___3689){
var seq__3647_3690__$1 = temp__4425__auto___3689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3647_3690__$1)){
var c__1033__auto___3691 = cljs.core.chunk_first.call(null,seq__3647_3690__$1);
var G__3692 = cljs.core.chunk_rest.call(null,seq__3647_3690__$1);
var G__3693 = c__1033__auto___3691;
var G__3694 = cljs.core.count.call(null,c__1033__auto___3691);
var G__3695 = (0);
seq__3647_3680 = G__3692;
chunk__3648_3681 = G__3693;
count__3649_3682 = G__3694;
i__3650_3683 = G__3695;
continue;
} else {
var param_3696 = cljs.core.first.call(null,seq__3647_3690__$1);
cljs.compiler.emit.call(null,param_3696);

if(cljs.core._EQ_.call(null,param_3696,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__3697 = cljs.core.next.call(null,seq__3647_3690__$1);
var G__3698 = null;
var G__3699 = (0);
var G__3700 = (0);
seq__3647_3680 = G__3697;
chunk__3648_3681 = G__3698;
count__3649_3682 = G__3699;
i__3650_3683 = G__3700;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__3651_3701 = cljs.core.seq.call(null,params);
var chunk__3652_3702 = null;
var count__3653_3703 = (0);
var i__3654_3704 = (0);
while(true){
if((i__3654_3704 < count__3653_3703)){
var param_3705 = cljs.core._nth.call(null,chunk__3652_3702,i__3654_3704);
cljs.compiler.emit.call(null,param_3705);

if(cljs.core._EQ_.call(null,param_3705,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__3706 = seq__3651_3701;
var G__3707 = chunk__3652_3702;
var G__3708 = count__3653_3703;
var G__3709 = (i__3654_3704 + (1));
seq__3651_3701 = G__3706;
chunk__3652_3702 = G__3707;
count__3653_3703 = G__3708;
i__3654_3704 = G__3709;
continue;
} else {
var temp__4425__auto___3710 = cljs.core.seq.call(null,seq__3651_3701);
if(temp__4425__auto___3710){
var seq__3651_3711__$1 = temp__4425__auto___3710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3651_3711__$1)){
var c__1033__auto___3712 = cljs.core.chunk_first.call(null,seq__3651_3711__$1);
var G__3713 = cljs.core.chunk_rest.call(null,seq__3651_3711__$1);
var G__3714 = c__1033__auto___3712;
var G__3715 = cljs.core.count.call(null,c__1033__auto___3712);
var G__3716 = (0);
seq__3651_3701 = G__3713;
chunk__3652_3702 = G__3714;
count__3653_3703 = G__3715;
i__3654_3704 = G__3716;
continue;
} else {
var param_3717 = cljs.core.first.call(null,seq__3651_3711__$1);
cljs.compiler.emit.call(null,param_3717);

if(cljs.core._EQ_.call(null,param_3717,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__3718 = cljs.core.next.call(null,seq__3651_3711__$1);
var G__3719 = null;
var G__3720 = (0);
var G__3721 = (0);
seq__3651_3701 = G__3718;
chunk__3652_3702 = G__3719;
count__3653_3703 = G__3720;
i__3654_3704 = G__3721;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__3726 = cljs.core.seq.call(null,params);
var chunk__3727 = null;
var count__3728 = (0);
var i__3729 = (0);
while(true){
if((i__3729 < count__3728)){
var param = cljs.core._nth.call(null,chunk__3727,i__3729);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__3730 = seq__3726;
var G__3731 = chunk__3727;
var G__3732 = count__3728;
var G__3733 = (i__3729 + (1));
seq__3726 = G__3730;
chunk__3727 = G__3731;
count__3728 = G__3732;
i__3729 = G__3733;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__3726);
if(temp__4425__auto__){
var seq__3726__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3726__$1)){
var c__1033__auto__ = cljs.core.chunk_first.call(null,seq__3726__$1);
var G__3734 = cljs.core.chunk_rest.call(null,seq__3726__$1);
var G__3735 = c__1033__auto__;
var G__3736 = cljs.core.count.call(null,c__1033__auto__);
var G__3737 = (0);
seq__3726 = G__3734;
chunk__3727 = G__3735;
count__3728 = G__3736;
i__3729 = G__3737;
continue;
} else {
var param = cljs.core.first.call(null,seq__3726__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__3738 = cljs.core.next.call(null,seq__3726__$1);
var G__3739 = null;
var G__3740 = (0);
var G__3741 = (0);
seq__3726 = G__3738;
chunk__3727 = G__3739;
count__3728 = G__3740;
i__3729 = G__3741;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__3742){
var map__3745 = p__3742;
var map__3745__$1 = ((((!((map__3745 == null)))?((((map__3745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3745):map__3745);
var type = cljs.core.get.call(null,map__3745__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__3745__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__3745__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__3745__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__3745__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__3745__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__3745__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__3745__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__3231__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null)))))].join('')));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__3747){
var map__3758 = p__3747;
var map__3758__$1 = ((((!((map__3758 == null)))?((((map__3758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3758):map__3758);
var f = map__3758__$1;
var type = cljs.core.get.call(null,map__3758__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__3758__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__3758__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__3758__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__3758__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__3758__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__3758__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__3758__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__3231__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_3768__$1 = (function (){var or__230__auto__ = name;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_3769 = cljs.compiler.munge.call(null,name_3768__$1);
var delegate_name_3770 = [cljs.core.str(mname_3769),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_3770," = function (");

var seq__3760_3771 = cljs.core.seq.call(null,params);
var chunk__3761_3772 = null;
var count__3762_3773 = (0);
var i__3763_3774 = (0);
while(true){
if((i__3763_3774 < count__3762_3773)){
var param_3775 = cljs.core._nth.call(null,chunk__3761_3772,i__3763_3774);
cljs.compiler.emit.call(null,param_3775);

if(cljs.core._EQ_.call(null,param_3775,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__3776 = seq__3760_3771;
var G__3777 = chunk__3761_3772;
var G__3778 = count__3762_3773;
var G__3779 = (i__3763_3774 + (1));
seq__3760_3771 = G__3776;
chunk__3761_3772 = G__3777;
count__3762_3773 = G__3778;
i__3763_3774 = G__3779;
continue;
} else {
var temp__4425__auto___3780 = cljs.core.seq.call(null,seq__3760_3771);
if(temp__4425__auto___3780){
var seq__3760_3781__$1 = temp__4425__auto___3780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3760_3781__$1)){
var c__1033__auto___3782 = cljs.core.chunk_first.call(null,seq__3760_3781__$1);
var G__3783 = cljs.core.chunk_rest.call(null,seq__3760_3781__$1);
var G__3784 = c__1033__auto___3782;
var G__3785 = cljs.core.count.call(null,c__1033__auto___3782);
var G__3786 = (0);
seq__3760_3771 = G__3783;
chunk__3761_3772 = G__3784;
count__3762_3773 = G__3785;
i__3763_3774 = G__3786;
continue;
} else {
var param_3787 = cljs.core.first.call(null,seq__3760_3781__$1);
cljs.compiler.emit.call(null,param_3787);

if(cljs.core._EQ_.call(null,param_3787,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__3788 = cljs.core.next.call(null,seq__3760_3781__$1);
var G__3789 = null;
var G__3790 = (0);
var G__3791 = (0);
seq__3760_3771 = G__3788;
chunk__3761_3772 = G__3789;
count__3762_3773 = G__3790;
i__3763_3774 = G__3791;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_3769," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_3792 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_3792,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_3770,".call(this,");

var seq__3764_3793 = cljs.core.seq.call(null,params);
var chunk__3765_3794 = null;
var count__3766_3795 = (0);
var i__3767_3796 = (0);
while(true){
if((i__3767_3796 < count__3766_3795)){
var param_3797 = cljs.core._nth.call(null,chunk__3765_3794,i__3767_3796);
cljs.compiler.emit.call(null,param_3797);

if(cljs.core._EQ_.call(null,param_3797,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__3798 = seq__3764_3793;
var G__3799 = chunk__3765_3794;
var G__3800 = count__3766_3795;
var G__3801 = (i__3767_3796 + (1));
seq__3764_3793 = G__3798;
chunk__3765_3794 = G__3799;
count__3766_3795 = G__3800;
i__3767_3796 = G__3801;
continue;
} else {
var temp__4425__auto___3802 = cljs.core.seq.call(null,seq__3764_3793);
if(temp__4425__auto___3802){
var seq__3764_3803__$1 = temp__4425__auto___3802;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3764_3803__$1)){
var c__1033__auto___3804 = cljs.core.chunk_first.call(null,seq__3764_3803__$1);
var G__3805 = cljs.core.chunk_rest.call(null,seq__3764_3803__$1);
var G__3806 = c__1033__auto___3804;
var G__3807 = cljs.core.count.call(null,c__1033__auto___3804);
var G__3808 = (0);
seq__3764_3793 = G__3805;
chunk__3765_3794 = G__3806;
count__3766_3795 = G__3807;
i__3767_3796 = G__3808;
continue;
} else {
var param_3809 = cljs.core.first.call(null,seq__3764_3803__$1);
cljs.compiler.emit.call(null,param_3809);

if(cljs.core._EQ_.call(null,param_3809,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__3810 = cljs.core.next.call(null,seq__3764_3803__$1);
var G__3811 = null;
var G__3812 = (0);
var G__3813 = (0);
seq__3764_3793 = G__3810;
chunk__3765_3794 = G__3811;
count__3766_3795 = G__3812;
i__3767_3796 = G__3813;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_3769,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_3769,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_3768__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_3769,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_3770,";");

cljs.compiler.emitln.call(null,"return ",mname_3769,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__3817){
var map__3818 = p__3817;
var map__3818__$1 = ((((!((map__3818 == null)))?((((map__3818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3818):map__3818);
var name = cljs.core.get.call(null,map__3818__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__3818__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__3818__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__3818__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__3818__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__3818__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__3818__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__3818,map__3818__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__3814_SHARP_){
var and__218__auto__ = p1__3814_SHARP_;
if(cljs.core.truth_(and__218__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__3814_SHARP_));
} else {
return and__218__auto__;
}
});})(map__3818,map__3818__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_3839__$1 = (function (){var or__230__auto__ = name;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_3840 = cljs.compiler.munge.call(null,name_3839__$1);
var maxparams_3841 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_3842 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_3839__$1,mname_3840,maxparams_3841,loop_locals,map__3818,map__3818__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_3840),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_3839__$1,mname_3840,maxparams_3841,loop_locals,map__3818,map__3818__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_3843 = cljs.core.sort_by.call(null,((function (name_3839__$1,mname_3840,maxparams_3841,mmap_3842,loop_locals,map__3818,map__3818__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__3815_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__3815_SHARP_)));
});})(name_3839__$1,mname_3840,maxparams_3841,mmap_3842,loop_locals,map__3818,map__3818__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_3842));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_3840," = null;");

var seq__3820_3844 = cljs.core.seq.call(null,ms_3843);
var chunk__3821_3845 = null;
var count__3822_3846 = (0);
var i__3823_3847 = (0);
while(true){
if((i__3823_3847 < count__3822_3846)){
var vec__3824_3848 = cljs.core._nth.call(null,chunk__3821_3845,i__3823_3847);
var n_3849 = cljs.core.nth.call(null,vec__3824_3848,(0),null);
var meth_3850 = cljs.core.nth.call(null,vec__3824_3848,(1),null);
cljs.compiler.emits.call(null,"var ",n_3849," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_3850))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_3850);
} else {
cljs.compiler.emit_fn_method.call(null,meth_3850);
}

cljs.compiler.emitln.call(null,";");

var G__3851 = seq__3820_3844;
var G__3852 = chunk__3821_3845;
var G__3853 = count__3822_3846;
var G__3854 = (i__3823_3847 + (1));
seq__3820_3844 = G__3851;
chunk__3821_3845 = G__3852;
count__3822_3846 = G__3853;
i__3823_3847 = G__3854;
continue;
} else {
var temp__4425__auto___3855 = cljs.core.seq.call(null,seq__3820_3844);
if(temp__4425__auto___3855){
var seq__3820_3856__$1 = temp__4425__auto___3855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3820_3856__$1)){
var c__1033__auto___3857 = cljs.core.chunk_first.call(null,seq__3820_3856__$1);
var G__3858 = cljs.core.chunk_rest.call(null,seq__3820_3856__$1);
var G__3859 = c__1033__auto___3857;
var G__3860 = cljs.core.count.call(null,c__1033__auto___3857);
var G__3861 = (0);
seq__3820_3844 = G__3858;
chunk__3821_3845 = G__3859;
count__3822_3846 = G__3860;
i__3823_3847 = G__3861;
continue;
} else {
var vec__3825_3862 = cljs.core.first.call(null,seq__3820_3856__$1);
var n_3863 = cljs.core.nth.call(null,vec__3825_3862,(0),null);
var meth_3864 = cljs.core.nth.call(null,vec__3825_3862,(1),null);
cljs.compiler.emits.call(null,"var ",n_3863," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_3864))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_3864);
} else {
cljs.compiler.emit_fn_method.call(null,meth_3864);
}

cljs.compiler.emitln.call(null,";");

var G__3865 = cljs.core.next.call(null,seq__3820_3856__$1);
var G__3866 = null;
var G__3867 = (0);
var G__3868 = (0);
seq__3820_3844 = G__3865;
chunk__3821_3845 = G__3866;
count__3822_3846 = G__3867;
i__3823_3847 = G__3868;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_3840," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_3841),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_3841)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_3841));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__3826_3869 = cljs.core.seq.call(null,ms_3843);
var chunk__3827_3870 = null;
var count__3828_3871 = (0);
var i__3829_3872 = (0);
while(true){
if((i__3829_3872 < count__3828_3871)){
var vec__3830_3873 = cljs.core._nth.call(null,chunk__3827_3870,i__3829_3872);
var n_3874 = cljs.core.nth.call(null,vec__3830_3873,(0),null);
var meth_3875 = cljs.core.nth.call(null,vec__3830_3873,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_3875))){
cljs.compiler.emitln.call(null,"default:");

var restarg_3876 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_3876," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_3877 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_3876," = new cljs.core.IndexedSeq(",a_3877,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_3874,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_3841)),(((cljs.core.count.call(null,maxparams_3841) > (1)))?", ":null),restarg_3876,");");
} else {
var pcnt_3878 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_3875));
cljs.compiler.emitln.call(null,"case ",pcnt_3878,":");

cljs.compiler.emitln.call(null,"return ",n_3874,".call(this",(((pcnt_3878 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_3878,maxparams_3841))),",")),");");
}

var G__3879 = seq__3826_3869;
var G__3880 = chunk__3827_3870;
var G__3881 = count__3828_3871;
var G__3882 = (i__3829_3872 + (1));
seq__3826_3869 = G__3879;
chunk__3827_3870 = G__3880;
count__3828_3871 = G__3881;
i__3829_3872 = G__3882;
continue;
} else {
var temp__4425__auto___3883 = cljs.core.seq.call(null,seq__3826_3869);
if(temp__4425__auto___3883){
var seq__3826_3884__$1 = temp__4425__auto___3883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3826_3884__$1)){
var c__1033__auto___3885 = cljs.core.chunk_first.call(null,seq__3826_3884__$1);
var G__3886 = cljs.core.chunk_rest.call(null,seq__3826_3884__$1);
var G__3887 = c__1033__auto___3885;
var G__3888 = cljs.core.count.call(null,c__1033__auto___3885);
var G__3889 = (0);
seq__3826_3869 = G__3886;
chunk__3827_3870 = G__3887;
count__3828_3871 = G__3888;
i__3829_3872 = G__3889;
continue;
} else {
var vec__3831_3890 = cljs.core.first.call(null,seq__3826_3884__$1);
var n_3891 = cljs.core.nth.call(null,vec__3831_3890,(0),null);
var meth_3892 = cljs.core.nth.call(null,vec__3831_3890,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_3892))){
cljs.compiler.emitln.call(null,"default:");

var restarg_3893 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_3893," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_3894 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_3893," = new cljs.core.IndexedSeq(",a_3894,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_3891,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_3841)),(((cljs.core.count.call(null,maxparams_3841) > (1)))?", ":null),restarg_3893,");");
} else {
var pcnt_3895 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_3892));
cljs.compiler.emitln.call(null,"case ",pcnt_3895,":");

cljs.compiler.emitln.call(null,"return ",n_3891,".call(this",(((pcnt_3895 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_3895,maxparams_3841))),",")),");");
}

var G__3896 = cljs.core.next.call(null,seq__3826_3884__$1);
var G__3897 = null;
var G__3898 = (0);
var G__3899 = (0);
seq__3826_3869 = G__3896;
chunk__3827_3870 = G__3897;
count__3828_3871 = G__3898;
i__3829_3872 = G__3899;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_3840,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_3840,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_3839__$1,mname_3840,maxparams_3841,mmap_3842,ms_3843,loop_locals,map__3818,map__3818__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__3816_SHARP_){
var vec__3832 = p1__3816_SHARP_;
var n = cljs.core.nth.call(null,vec__3832,(0),null);
var m = cljs.core.nth.call(null,vec__3832,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_3839__$1,mname_3840,maxparams_3841,mmap_3842,ms_3843,loop_locals,map__3818,map__3818__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_3843),".cljs$lang$applyTo;");
} else {
}

var seq__3833_3900 = cljs.core.seq.call(null,ms_3843);
var chunk__3834_3901 = null;
var count__3835_3902 = (0);
var i__3836_3903 = (0);
while(true){
if((i__3836_3903 < count__3835_3902)){
var vec__3837_3904 = cljs.core._nth.call(null,chunk__3834_3901,i__3836_3903);
var n_3905 = cljs.core.nth.call(null,vec__3837_3904,(0),null);
var meth_3906 = cljs.core.nth.call(null,vec__3837_3904,(1),null);
var c_3907 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_3906));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_3906))){
cljs.compiler.emitln.call(null,mname_3840,".cljs$core$IFn$_invoke$arity$variadic = ",n_3905,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_3840,".cljs$core$IFn$_invoke$arity$",c_3907," = ",n_3905,";");
}

var G__3908 = seq__3833_3900;
var G__3909 = chunk__3834_3901;
var G__3910 = count__3835_3902;
var G__3911 = (i__3836_3903 + (1));
seq__3833_3900 = G__3908;
chunk__3834_3901 = G__3909;
count__3835_3902 = G__3910;
i__3836_3903 = G__3911;
continue;
} else {
var temp__4425__auto___3912 = cljs.core.seq.call(null,seq__3833_3900);
if(temp__4425__auto___3912){
var seq__3833_3913__$1 = temp__4425__auto___3912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3833_3913__$1)){
var c__1033__auto___3914 = cljs.core.chunk_first.call(null,seq__3833_3913__$1);
var G__3915 = cljs.core.chunk_rest.call(null,seq__3833_3913__$1);
var G__3916 = c__1033__auto___3914;
var G__3917 = cljs.core.count.call(null,c__1033__auto___3914);
var G__3918 = (0);
seq__3833_3900 = G__3915;
chunk__3834_3901 = G__3916;
count__3835_3902 = G__3917;
i__3836_3903 = G__3918;
continue;
} else {
var vec__3838_3919 = cljs.core.first.call(null,seq__3833_3913__$1);
var n_3920 = cljs.core.nth.call(null,vec__3838_3919,(0),null);
var meth_3921 = cljs.core.nth.call(null,vec__3838_3919,(1),null);
var c_3922 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_3921));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_3921))){
cljs.compiler.emitln.call(null,mname_3840,".cljs$core$IFn$_invoke$arity$variadic = ",n_3920,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_3840,".cljs$core$IFn$_invoke$arity$",c_3922," = ",n_3920,";");
}

var G__3923 = cljs.core.next.call(null,seq__3833_3913__$1);
var G__3924 = null;
var G__3925 = (0);
var G__3926 = (0);
seq__3833_3900 = G__3923;
chunk__3834_3901 = G__3924;
count__3835_3902 = G__3925;
i__3836_3903 = G__3926;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_3840,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__3927){
var map__3928 = p__3927;
var map__3928__$1 = ((((!((map__3928 == null)))?((((map__3928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3928):map__3928);
var statements = cljs.core.get.call(null,map__3928__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__3928__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__3928__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__218__auto__ = statements;
if(cljs.core.truth_(and__218__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__218__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__3930_3934 = cljs.core.seq.call(null,statements);
var chunk__3931_3935 = null;
var count__3932_3936 = (0);
var i__3933_3937 = (0);
while(true){
if((i__3933_3937 < count__3932_3936)){
var s_3938 = cljs.core._nth.call(null,chunk__3931_3935,i__3933_3937);
cljs.compiler.emitln.call(null,s_3938);

var G__3939 = seq__3930_3934;
var G__3940 = chunk__3931_3935;
var G__3941 = count__3932_3936;
var G__3942 = (i__3933_3937 + (1));
seq__3930_3934 = G__3939;
chunk__3931_3935 = G__3940;
count__3932_3936 = G__3941;
i__3933_3937 = G__3942;
continue;
} else {
var temp__4425__auto___3943 = cljs.core.seq.call(null,seq__3930_3934);
if(temp__4425__auto___3943){
var seq__3930_3944__$1 = temp__4425__auto___3943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3930_3944__$1)){
var c__1033__auto___3945 = cljs.core.chunk_first.call(null,seq__3930_3944__$1);
var G__3946 = cljs.core.chunk_rest.call(null,seq__3930_3944__$1);
var G__3947 = c__1033__auto___3945;
var G__3948 = cljs.core.count.call(null,c__1033__auto___3945);
var G__3949 = (0);
seq__3930_3934 = G__3946;
chunk__3931_3935 = G__3947;
count__3932_3936 = G__3948;
i__3933_3937 = G__3949;
continue;
} else {
var s_3950 = cljs.core.first.call(null,seq__3930_3944__$1);
cljs.compiler.emitln.call(null,s_3950);

var G__3951 = cljs.core.next.call(null,seq__3930_3944__$1);
var G__3952 = null;
var G__3953 = (0);
var G__3954 = (0);
seq__3930_3934 = G__3951;
chunk__3931_3935 = G__3952;
count__3932_3936 = G__3953;
i__3933_3937 = G__3954;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__218__auto__ = statements;
if(cljs.core.truth_(and__218__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__218__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__3955){
var map__3956 = p__3955;
var map__3956__$1 = ((((!((map__3956 == null)))?((((map__3956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3956):map__3956);
var env = cljs.core.get.call(null,map__3956__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__3956__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__3956__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__3956__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__3956__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__230__auto__ = name;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.list(new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"finally","finally",-1065347064,null)))))].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__3958,is_loop){
var map__3970 = p__3958;
var map__3970__$1 = ((((!((map__3970 == null)))?((((map__3970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3970):map__3970);
var bindings = cljs.core.get.call(null,map__3970__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__3970__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__3970__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_3972_3981 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_3972_3981,context,map__3970,map__3970__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_3972_3981,context,map__3970,map__3970__$1,bindings,expr,env))
,bindings):null));

try{var seq__3973_3982 = cljs.core.seq.call(null,bindings);
var chunk__3974_3983 = null;
var count__3975_3984 = (0);
var i__3976_3985 = (0);
while(true){
if((i__3976_3985 < count__3975_3984)){
var map__3977_3986 = cljs.core._nth.call(null,chunk__3974_3983,i__3976_3985);
var map__3977_3987__$1 = ((((!((map__3977_3986 == null)))?((((map__3977_3986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3977_3986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3977_3986):map__3977_3986);
var binding_3988 = map__3977_3987__$1;
var init_3989 = cljs.core.get.call(null,map__3977_3987__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_3988);

cljs.compiler.emitln.call(null," = ",init_3989,";");

var G__3990 = seq__3973_3982;
var G__3991 = chunk__3974_3983;
var G__3992 = count__3975_3984;
var G__3993 = (i__3976_3985 + (1));
seq__3973_3982 = G__3990;
chunk__3974_3983 = G__3991;
count__3975_3984 = G__3992;
i__3976_3985 = G__3993;
continue;
} else {
var temp__4425__auto___3994 = cljs.core.seq.call(null,seq__3973_3982);
if(temp__4425__auto___3994){
var seq__3973_3995__$1 = temp__4425__auto___3994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3973_3995__$1)){
var c__1033__auto___3996 = cljs.core.chunk_first.call(null,seq__3973_3995__$1);
var G__3997 = cljs.core.chunk_rest.call(null,seq__3973_3995__$1);
var G__3998 = c__1033__auto___3996;
var G__3999 = cljs.core.count.call(null,c__1033__auto___3996);
var G__4000 = (0);
seq__3973_3982 = G__3997;
chunk__3974_3983 = G__3998;
count__3975_3984 = G__3999;
i__3976_3985 = G__4000;
continue;
} else {
var map__3979_4001 = cljs.core.first.call(null,seq__3973_3995__$1);
var map__3979_4002__$1 = ((((!((map__3979_4001 == null)))?((((map__3979_4001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3979_4001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3979_4001):map__3979_4001);
var binding_4003 = map__3979_4002__$1;
var init_4004 = cljs.core.get.call(null,map__3979_4002__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_4003);

cljs.compiler.emitln.call(null," = ",init_4004,";");

var G__4005 = cljs.core.next.call(null,seq__3973_3995__$1);
var G__4006 = null;
var G__4007 = (0);
var G__4008 = (0);
seq__3973_3982 = G__4005;
chunk__3974_3983 = G__4006;
count__3975_3984 = G__4007;
i__3976_3985 = G__4008;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_3972_3981;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__4009){
var map__4010 = p__4009;
var map__4010__$1 = ((((!((map__4010 == null)))?((((map__4010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4010):map__4010);
var frame = cljs.core.get.call(null,map__4010__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__4010__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__4010__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__1133__auto___4012 = cljs.core.count.call(null,exprs);
var i_4013 = (0);
while(true){
if((i_4013 < n__1133__auto___4012)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_4013)," = ",exprs.call(null,i_4013),";");

var G__4014 = (i_4013 + (1));
i_4013 = G__4014;
continue;
} else {
}
break;
}

var n__1133__auto___4015 = cljs.core.count.call(null,exprs);
var i_4016 = (0);
while(true){
if((i_4016 < n__1133__auto___4015)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_4016))," = ",temps.call(null,i_4016),";");

var G__4017 = (i_4016 + (1));
i_4016 = G__4017;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__4018){
var map__4019 = p__4018;
var map__4019__$1 = ((((!((map__4019 == null)))?((((map__4019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4019):map__4019);
var bindings = cljs.core.get.call(null,map__4019__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__4019__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__4019__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__4021_4029 = cljs.core.seq.call(null,bindings);
var chunk__4022_4030 = null;
var count__4023_4031 = (0);
var i__4024_4032 = (0);
while(true){
if((i__4024_4032 < count__4023_4031)){
var map__4025_4033 = cljs.core._nth.call(null,chunk__4022_4030,i__4024_4032);
var map__4025_4034__$1 = ((((!((map__4025_4033 == null)))?((((map__4025_4033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4025_4033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4025_4033):map__4025_4033);
var binding_4035 = map__4025_4034__$1;
var init_4036 = cljs.core.get.call(null,map__4025_4034__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_4035)," = ",init_4036,";");

var G__4037 = seq__4021_4029;
var G__4038 = chunk__4022_4030;
var G__4039 = count__4023_4031;
var G__4040 = (i__4024_4032 + (1));
seq__4021_4029 = G__4037;
chunk__4022_4030 = G__4038;
count__4023_4031 = G__4039;
i__4024_4032 = G__4040;
continue;
} else {
var temp__4425__auto___4041 = cljs.core.seq.call(null,seq__4021_4029);
if(temp__4425__auto___4041){
var seq__4021_4042__$1 = temp__4425__auto___4041;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4021_4042__$1)){
var c__1033__auto___4043 = cljs.core.chunk_first.call(null,seq__4021_4042__$1);
var G__4044 = cljs.core.chunk_rest.call(null,seq__4021_4042__$1);
var G__4045 = c__1033__auto___4043;
var G__4046 = cljs.core.count.call(null,c__1033__auto___4043);
var G__4047 = (0);
seq__4021_4029 = G__4044;
chunk__4022_4030 = G__4045;
count__4023_4031 = G__4046;
i__4024_4032 = G__4047;
continue;
} else {
var map__4027_4048 = cljs.core.first.call(null,seq__4021_4042__$1);
var map__4027_4049__$1 = ((((!((map__4027_4048 == null)))?((((map__4027_4048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4027_4048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4027_4048):map__4027_4048);
var binding_4050 = map__4027_4049__$1;
var init_4051 = cljs.core.get.call(null,map__4027_4049__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_4050)," = ",init_4051,";");

var G__4052 = cljs.core.next.call(null,seq__4021_4042__$1);
var G__4053 = null;
var G__4054 = (0);
var G__4055 = (0);
seq__4021_4029 = G__4052;
chunk__4022_4030 = G__4053;
count__4023_4031 = G__4054;
i__4024_4032 = G__4055;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__4058){
var map__4059 = p__4058;
var map__4059__$1 = ((((!((map__4059 == null)))?((((map__4059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4059):map__4059);
var expr = map__4059__$1;
var f = cljs.core.get.call(null,map__4059__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__4059__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__4059__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__218__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__218__auto__)){
var and__218__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__218__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__218__auto____$1;
}
} else {
return and__218__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__218__auto__ = protocol;
if(cljs.core.truth_(and__218__auto__)){
var and__218__auto____$1 = tag;
if(cljs.core.truth_(and__218__auto____$1)){
var or__230__auto__ = (function (){var and__218__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__218__auto____$2)){
var and__218__auto____$3 = protocol;
if(cljs.core.truth_(and__218__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__218__auto____$3;
}
} else {
return and__218__auto____$2;
}
})();
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
var and__218__auto____$2 = (function (){var or__230__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__230__auto____$1)){
return or__230__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__218__auto____$2)){
var or__230__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__230__auto____$1){
return or__230__auto____$1;
} else {
var and__218__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__218__auto____$3){
var and__218__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null], null), null).call(null,tag));
if(and__218__auto____$4){
var temp__4425__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__218__auto____$4;
}
} else {
return and__218__auto____$3;
}
}
} else {
return and__218__auto____$2;
}
}
} else {
return and__218__auto____$1;
}
} else {
return and__218__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__230__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__230__auto__){
return or__230__auto__;
} else {
var temp__4425__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4425__auto__)){
var ns_str = temp__4425__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__4061 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__218__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__218__auto__)){
return (arity > mfa);
} else {
return and__218__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4059,map__4059__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4059,map__4059__$1,expr,f,args,env){
return (function (p1__4056_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__4056_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4059,map__4059__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4059,map__4059__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4059,map__4059__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4059,map__4059__$1,expr,f,args,env){
return (function (p1__4057_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__4057_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4059,map__4059__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4059,map__4059__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__4061,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__4061,(1),null);
var env__3231__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_4062 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_4062,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_4063 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_4063,args)),(((mfa_4063 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_4063,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__230__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
var or__230__auto____$1 = js_QMARK_;
if(or__230__auto____$1){
return or__230__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__218__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__218__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__218__auto__;
}
})())){
var fprop_4064 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_4064," ? ",f__$1,fprop_4064,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__4065){
var map__4066 = p__4065;
var map__4066__$1 = ((((!((map__4066 == null)))?((((map__4066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4066):map__4066);
var ctor = cljs.core.get.call(null,map__4066__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__4066__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__4066__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3231__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__4068){
var map__4069 = p__4068;
var map__4069__$1 = ((((!((map__4069 == null)))?((((map__4069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4069):map__4069);
var target = cljs.core.get.call(null,map__4069__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__4069__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__4069__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3231__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__4075_4079 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__4076_4080 = null;
var count__4077_4081 = (0);
var i__4078_4082 = (0);
while(true){
if((i__4078_4082 < count__4077_4081)){
var lib_4083 = cljs.core._nth.call(null,chunk__4076_4080,i__4078_4082);
if(cljs.core.truth_((function (){var or__230__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_4083),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4083),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__230__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_4083),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4083),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4083),"');");

}
}

var G__4084 = seq__4075_4079;
var G__4085 = chunk__4076_4080;
var G__4086 = count__4077_4081;
var G__4087 = (i__4078_4082 + (1));
seq__4075_4079 = G__4084;
chunk__4076_4080 = G__4085;
count__4077_4081 = G__4086;
i__4078_4082 = G__4087;
continue;
} else {
var temp__4425__auto___4088 = cljs.core.seq.call(null,seq__4075_4079);
if(temp__4425__auto___4088){
var seq__4075_4089__$1 = temp__4425__auto___4088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4075_4089__$1)){
var c__1033__auto___4090 = cljs.core.chunk_first.call(null,seq__4075_4089__$1);
var G__4091 = cljs.core.chunk_rest.call(null,seq__4075_4089__$1);
var G__4092 = c__1033__auto___4090;
var G__4093 = cljs.core.count.call(null,c__1033__auto___4090);
var G__4094 = (0);
seq__4075_4079 = G__4091;
chunk__4076_4080 = G__4092;
count__4077_4081 = G__4093;
i__4078_4082 = G__4094;
continue;
} else {
var lib_4095 = cljs.core.first.call(null,seq__4075_4089__$1);
if(cljs.core.truth_((function (){var or__230__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_4095),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4095),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__230__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_4095),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4095),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4095),"');");

}
}

var G__4096 = cljs.core.next.call(null,seq__4075_4089__$1);
var G__4097 = null;
var G__4098 = (0);
var G__4099 = (0);
seq__4075_4079 = G__4096;
chunk__4076_4080 = G__4097;
count__4077_4081 = G__4098;
i__4078_4082 = G__4099;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__4100){
var map__4101 = p__4100;
var map__4101__$1 = ((((!((map__4101 == null)))?((((map__4101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4101):map__4101);
var name = cljs.core.get.call(null,map__4101__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__4101__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__4101__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__4101__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__4101__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__4101__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__4103){
var map__4104 = p__4103;
var map__4104__$1 = ((((!((map__4104 == null)))?((((map__4104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4104):map__4104);
var t = cljs.core.get.call(null,map__4104__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__4104__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__4104__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__4104__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__4104__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__4106_4120 = cljs.core.seq.call(null,protocols);
var chunk__4107_4121 = null;
var count__4108_4122 = (0);
var i__4109_4123 = (0);
while(true){
if((i__4109_4123 < count__4108_4122)){
var protocol_4124 = cljs.core._nth.call(null,chunk__4107_4121,i__4109_4123);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_4124)].join('')),"}");

var G__4125 = seq__4106_4120;
var G__4126 = chunk__4107_4121;
var G__4127 = count__4108_4122;
var G__4128 = (i__4109_4123 + (1));
seq__4106_4120 = G__4125;
chunk__4107_4121 = G__4126;
count__4108_4122 = G__4127;
i__4109_4123 = G__4128;
continue;
} else {
var temp__4425__auto___4129 = cljs.core.seq.call(null,seq__4106_4120);
if(temp__4425__auto___4129){
var seq__4106_4130__$1 = temp__4425__auto___4129;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4106_4130__$1)){
var c__1033__auto___4131 = cljs.core.chunk_first.call(null,seq__4106_4130__$1);
var G__4132 = cljs.core.chunk_rest.call(null,seq__4106_4130__$1);
var G__4133 = c__1033__auto___4131;
var G__4134 = cljs.core.count.call(null,c__1033__auto___4131);
var G__4135 = (0);
seq__4106_4120 = G__4132;
chunk__4107_4121 = G__4133;
count__4108_4122 = G__4134;
i__4109_4123 = G__4135;
continue;
} else {
var protocol_4136 = cljs.core.first.call(null,seq__4106_4130__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_4136)].join('')),"}");

var G__4137 = cljs.core.next.call(null,seq__4106_4130__$1);
var G__4138 = null;
var G__4139 = (0);
var G__4140 = (0);
seq__4106_4120 = G__4137;
chunk__4107_4121 = G__4138;
count__4108_4122 = G__4139;
i__4109_4123 = G__4140;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__4110_4141 = cljs.core.seq.call(null,fields__$1);
var chunk__4111_4142 = null;
var count__4112_4143 = (0);
var i__4113_4144 = (0);
while(true){
if((i__4113_4144 < count__4112_4143)){
var fld_4145 = cljs.core._nth.call(null,chunk__4111_4142,i__4113_4144);
cljs.compiler.emitln.call(null,"this.",fld_4145," = ",fld_4145,";");

var G__4146 = seq__4110_4141;
var G__4147 = chunk__4111_4142;
var G__4148 = count__4112_4143;
var G__4149 = (i__4113_4144 + (1));
seq__4110_4141 = G__4146;
chunk__4111_4142 = G__4147;
count__4112_4143 = G__4148;
i__4113_4144 = G__4149;
continue;
} else {
var temp__4425__auto___4150 = cljs.core.seq.call(null,seq__4110_4141);
if(temp__4425__auto___4150){
var seq__4110_4151__$1 = temp__4425__auto___4150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4110_4151__$1)){
var c__1033__auto___4152 = cljs.core.chunk_first.call(null,seq__4110_4151__$1);
var G__4153 = cljs.core.chunk_rest.call(null,seq__4110_4151__$1);
var G__4154 = c__1033__auto___4152;
var G__4155 = cljs.core.count.call(null,c__1033__auto___4152);
var G__4156 = (0);
seq__4110_4141 = G__4153;
chunk__4111_4142 = G__4154;
count__4112_4143 = G__4155;
i__4113_4144 = G__4156;
continue;
} else {
var fld_4157 = cljs.core.first.call(null,seq__4110_4151__$1);
cljs.compiler.emitln.call(null,"this.",fld_4157," = ",fld_4157,";");

var G__4158 = cljs.core.next.call(null,seq__4110_4151__$1);
var G__4159 = null;
var G__4160 = (0);
var G__4161 = (0);
seq__4110_4141 = G__4158;
chunk__4111_4142 = G__4159;
count__4112_4143 = G__4160;
i__4113_4144 = G__4161;
continue;
}
} else {
}
}
break;
}

var seq__4114_4162 = cljs.core.seq.call(null,pmasks);
var chunk__4115_4163 = null;
var count__4116_4164 = (0);
var i__4117_4165 = (0);
while(true){
if((i__4117_4165 < count__4116_4164)){
var vec__4118_4166 = cljs.core._nth.call(null,chunk__4115_4163,i__4117_4165);
var pno_4167 = cljs.core.nth.call(null,vec__4118_4166,(0),null);
var pmask_4168 = cljs.core.nth.call(null,vec__4118_4166,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4167,"$ = ",pmask_4168,";");

var G__4169 = seq__4114_4162;
var G__4170 = chunk__4115_4163;
var G__4171 = count__4116_4164;
var G__4172 = (i__4117_4165 + (1));
seq__4114_4162 = G__4169;
chunk__4115_4163 = G__4170;
count__4116_4164 = G__4171;
i__4117_4165 = G__4172;
continue;
} else {
var temp__4425__auto___4173 = cljs.core.seq.call(null,seq__4114_4162);
if(temp__4425__auto___4173){
var seq__4114_4174__$1 = temp__4425__auto___4173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4114_4174__$1)){
var c__1033__auto___4175 = cljs.core.chunk_first.call(null,seq__4114_4174__$1);
var G__4176 = cljs.core.chunk_rest.call(null,seq__4114_4174__$1);
var G__4177 = c__1033__auto___4175;
var G__4178 = cljs.core.count.call(null,c__1033__auto___4175);
var G__4179 = (0);
seq__4114_4162 = G__4176;
chunk__4115_4163 = G__4177;
count__4116_4164 = G__4178;
i__4117_4165 = G__4179;
continue;
} else {
var vec__4119_4180 = cljs.core.first.call(null,seq__4114_4174__$1);
var pno_4181 = cljs.core.nth.call(null,vec__4119_4180,(0),null);
var pmask_4182 = cljs.core.nth.call(null,vec__4119_4180,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4181,"$ = ",pmask_4182,";");

var G__4183 = cljs.core.next.call(null,seq__4114_4174__$1);
var G__4184 = null;
var G__4185 = (0);
var G__4186 = (0);
seq__4114_4162 = G__4183;
chunk__4115_4163 = G__4184;
count__4116_4164 = G__4185;
i__4117_4165 = G__4186;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__4187){
var map__4188 = p__4187;
var map__4188__$1 = ((((!((map__4188 == null)))?((((map__4188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4188):map__4188);
var t = cljs.core.get.call(null,map__4188__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__4188__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__4188__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__4188__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__4188__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__4190_4204 = cljs.core.seq.call(null,protocols);
var chunk__4191_4205 = null;
var count__4192_4206 = (0);
var i__4193_4207 = (0);
while(true){
if((i__4193_4207 < count__4192_4206)){
var protocol_4208 = cljs.core._nth.call(null,chunk__4191_4205,i__4193_4207);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_4208)].join('')),"}");

var G__4209 = seq__4190_4204;
var G__4210 = chunk__4191_4205;
var G__4211 = count__4192_4206;
var G__4212 = (i__4193_4207 + (1));
seq__4190_4204 = G__4209;
chunk__4191_4205 = G__4210;
count__4192_4206 = G__4211;
i__4193_4207 = G__4212;
continue;
} else {
var temp__4425__auto___4213 = cljs.core.seq.call(null,seq__4190_4204);
if(temp__4425__auto___4213){
var seq__4190_4214__$1 = temp__4425__auto___4213;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4190_4214__$1)){
var c__1033__auto___4215 = cljs.core.chunk_first.call(null,seq__4190_4214__$1);
var G__4216 = cljs.core.chunk_rest.call(null,seq__4190_4214__$1);
var G__4217 = c__1033__auto___4215;
var G__4218 = cljs.core.count.call(null,c__1033__auto___4215);
var G__4219 = (0);
seq__4190_4204 = G__4216;
chunk__4191_4205 = G__4217;
count__4192_4206 = G__4218;
i__4193_4207 = G__4219;
continue;
} else {
var protocol_4220 = cljs.core.first.call(null,seq__4190_4214__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_4220)].join('')),"}");

var G__4221 = cljs.core.next.call(null,seq__4190_4214__$1);
var G__4222 = null;
var G__4223 = (0);
var G__4224 = (0);
seq__4190_4204 = G__4221;
chunk__4191_4205 = G__4222;
count__4192_4206 = G__4223;
i__4193_4207 = G__4224;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__4194_4225 = cljs.core.seq.call(null,fields__$1);
var chunk__4195_4226 = null;
var count__4196_4227 = (0);
var i__4197_4228 = (0);
while(true){
if((i__4197_4228 < count__4196_4227)){
var fld_4229 = cljs.core._nth.call(null,chunk__4195_4226,i__4197_4228);
cljs.compiler.emitln.call(null,"this.",fld_4229," = ",fld_4229,";");

var G__4230 = seq__4194_4225;
var G__4231 = chunk__4195_4226;
var G__4232 = count__4196_4227;
var G__4233 = (i__4197_4228 + (1));
seq__4194_4225 = G__4230;
chunk__4195_4226 = G__4231;
count__4196_4227 = G__4232;
i__4197_4228 = G__4233;
continue;
} else {
var temp__4425__auto___4234 = cljs.core.seq.call(null,seq__4194_4225);
if(temp__4425__auto___4234){
var seq__4194_4235__$1 = temp__4425__auto___4234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4194_4235__$1)){
var c__1033__auto___4236 = cljs.core.chunk_first.call(null,seq__4194_4235__$1);
var G__4237 = cljs.core.chunk_rest.call(null,seq__4194_4235__$1);
var G__4238 = c__1033__auto___4236;
var G__4239 = cljs.core.count.call(null,c__1033__auto___4236);
var G__4240 = (0);
seq__4194_4225 = G__4237;
chunk__4195_4226 = G__4238;
count__4196_4227 = G__4239;
i__4197_4228 = G__4240;
continue;
} else {
var fld_4241 = cljs.core.first.call(null,seq__4194_4235__$1);
cljs.compiler.emitln.call(null,"this.",fld_4241," = ",fld_4241,";");

var G__4242 = cljs.core.next.call(null,seq__4194_4235__$1);
var G__4243 = null;
var G__4244 = (0);
var G__4245 = (0);
seq__4194_4225 = G__4242;
chunk__4195_4226 = G__4243;
count__4196_4227 = G__4244;
i__4197_4228 = G__4245;
continue;
}
} else {
}
}
break;
}

var seq__4198_4246 = cljs.core.seq.call(null,pmasks);
var chunk__4199_4247 = null;
var count__4200_4248 = (0);
var i__4201_4249 = (0);
while(true){
if((i__4201_4249 < count__4200_4248)){
var vec__4202_4250 = cljs.core._nth.call(null,chunk__4199_4247,i__4201_4249);
var pno_4251 = cljs.core.nth.call(null,vec__4202_4250,(0),null);
var pmask_4252 = cljs.core.nth.call(null,vec__4202_4250,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4251,"$ = ",pmask_4252,";");

var G__4253 = seq__4198_4246;
var G__4254 = chunk__4199_4247;
var G__4255 = count__4200_4248;
var G__4256 = (i__4201_4249 + (1));
seq__4198_4246 = G__4253;
chunk__4199_4247 = G__4254;
count__4200_4248 = G__4255;
i__4201_4249 = G__4256;
continue;
} else {
var temp__4425__auto___4257 = cljs.core.seq.call(null,seq__4198_4246);
if(temp__4425__auto___4257){
var seq__4198_4258__$1 = temp__4425__auto___4257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4198_4258__$1)){
var c__1033__auto___4259 = cljs.core.chunk_first.call(null,seq__4198_4258__$1);
var G__4260 = cljs.core.chunk_rest.call(null,seq__4198_4258__$1);
var G__4261 = c__1033__auto___4259;
var G__4262 = cljs.core.count.call(null,c__1033__auto___4259);
var G__4263 = (0);
seq__4198_4246 = G__4260;
chunk__4199_4247 = G__4261;
count__4200_4248 = G__4262;
i__4201_4249 = G__4263;
continue;
} else {
var vec__4203_4264 = cljs.core.first.call(null,seq__4198_4258__$1);
var pno_4265 = cljs.core.nth.call(null,vec__4203_4264,(0),null);
var pmask_4266 = cljs.core.nth.call(null,vec__4203_4264,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4265,"$ = ",pmask_4266,";");

var G__4267 = cljs.core.next.call(null,seq__4198_4258__$1);
var G__4268 = null;
var G__4269 = (0);
var G__4270 = (0);
seq__4198_4246 = G__4267;
chunk__4199_4247 = G__4268;
count__4200_4248 = G__4269;
i__4201_4249 = G__4270;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__4271){
var map__4272 = p__4271;
var map__4272__$1 = ((((!((map__4272 == null)))?((((map__4272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4272):map__4272);
var target = cljs.core.get.call(null,map__4272__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__4272__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__4272__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__4272__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__4272__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3231__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__4274){
var map__4275 = p__4274;
var map__4275__$1 = ((((!((map__4275 == null)))?((((map__4275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4275):map__4275);
var op = cljs.core.get.call(null,map__4275__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__4275__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__4275__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__4275__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__4275__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__218__auto__ = code;
if(cljs.core.truth_(and__218__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__218__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__3231__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3231__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__4285 = cljs.core.seq.call(null,table);
var chunk__4286 = null;
var count__4287 = (0);
var i__4288 = (0);
while(true){
if((i__4288 < count__4287)){
var vec__4289 = cljs.core._nth.call(null,chunk__4286,i__4288);
var sym = cljs.core.nth.call(null,vec__4289,(0),null);
var value = cljs.core.nth.call(null,vec__4289,(1),null);
var ns_4291 = cljs.core.namespace.call(null,sym);
var name_4292 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__4293 = seq__4285;
var G__4294 = chunk__4286;
var G__4295 = count__4287;
var G__4296 = (i__4288 + (1));
seq__4285 = G__4293;
chunk__4286 = G__4294;
count__4287 = G__4295;
i__4288 = G__4296;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__4285);
if(temp__4425__auto__){
var seq__4285__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4285__$1)){
var c__1033__auto__ = cljs.core.chunk_first.call(null,seq__4285__$1);
var G__4297 = cljs.core.chunk_rest.call(null,seq__4285__$1);
var G__4298 = c__1033__auto__;
var G__4299 = cljs.core.count.call(null,c__1033__auto__);
var G__4300 = (0);
seq__4285 = G__4297;
chunk__4286 = G__4298;
count__4287 = G__4299;
i__4288 = G__4300;
continue;
} else {
var vec__4290 = cljs.core.first.call(null,seq__4285__$1);
var sym = cljs.core.nth.call(null,vec__4290,(0),null);
var value = cljs.core.nth.call(null,vec__4290,(1),null);
var ns_4301 = cljs.core.namespace.call(null,sym);
var name_4302 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__4303 = cljs.core.next.call(null,seq__4285__$1);
var G__4304 = null;
var G__4305 = (0);
var G__4306 = (0);
seq__4285 = G__4303;
chunk__4286 = G__4304;
count__4287 = G__4305;
i__4288 = G__4306;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map