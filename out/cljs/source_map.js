// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__2557){
var vec__2558 = p__2557;
var i = cljs.core.nth.call(null,vec__2558,(0),null);
var v = cljs.core.nth.call(null,vec__2558,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__2560 = seg;
var gcol = cljs.core.nth.call(null,vec__2560,(0),null);
var source = cljs.core.nth.call(null,vec__2560,(1),null);
var line = cljs.core.nth.call(null,vec__2560,(2),null);
var col = cljs.core.nth.call(null,vec__2560,(3),null);
var name = cljs.core.nth.call(null,vec__2560,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4425__auto__)){
var name__$1 = temp__4425__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__2563 = seg;
var gcol = cljs.core.nth.call(null,vec__2563,(0),null);
var source = cljs.core.nth.call(null,vec__2563,(1),null);
var line = cljs.core.nth.call(null,vec__2563,(2),null);
var col = cljs.core.nth.call(null,vec__2563,(3),null);
var name = cljs.core.nth.call(null,vec__2563,(4),null);
var vec__2564 = relseg;
var rgcol = cljs.core.nth.call(null,vec__2564,(0),null);
var rsource = cljs.core.nth.call(null,vec__2564,(1),null);
var rline = cljs.core.nth.call(null,vec__2564,(2),null);
var rcol = cljs.core.nth.call(null,vec__2564,(3),null);
var rname = cljs.core.nth.call(null,vec__2564,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__230__auto__ = source;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__230__auto__ = line;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__230__auto__ = col;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__230__auto__ = name;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__2567 = segmap;
var map__2567__$1 = ((((!((map__2567 == null)))?((((map__2567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2567):map__2567);
var gcol = cljs.core.get.call(null,map__2567__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__2567__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__2567__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__2567__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__2567__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__2567,map__2567__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__2567,map__2567__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__2567,map__2567__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__2567,map__2567__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__2567,map__2567__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__2567,map__2567__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args2569 = [];
var len__1288__auto___2573 = arguments.length;
var i__1289__auto___2574 = (0);
while(true){
if((i__1289__auto___2574 < len__1288__auto___2573)){
args2569.push((arguments[i__1289__auto___2574]));

var G__2575 = (i__1289__auto___2574 + (1));
i__1289__auto___2574 = G__2575;
continue;
} else {
}
break;
}

var G__2571 = args2569.length;
switch (G__2571) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2569.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__2572 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__2577 = cljs.core.next.call(null,segs__$1);
var G__2578 = nrelseg;
var G__2579 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__2577;
relseg__$1 = G__2578;
result__$1 = G__2579;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__2572,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__2572,(1),null);
var G__2580 = (gline + (1));
var G__2581 = cljs.core.next.call(null,lines__$1);
var G__2582 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__2583 = result__$1;
gline = G__2580;
lines__$1 = G__2581;
relseg = G__2582;
result = G__2583;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;
/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__2587 = segmap;
var map__2587__$1 = ((((!((map__2587 == null)))?((((map__2587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2587):map__2587);
var gcol = cljs.core.get.call(null,map__2587__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__2587__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__2587__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__2587__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__2587__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__2587,map__2587__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__2587,map__2587__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__2584_SHARP_){
return cljs.core.conj.call(null,p1__2584_SHARP_,d__$1);
});})(map__2587,map__2587__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__2587,map__2587__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args2589 = [];
var len__1288__auto___2593 = arguments.length;
var i__1289__auto___2594 = (0);
while(true){
if((i__1289__auto___2594 < len__1288__auto___2593)){
args2589.push((arguments[i__1289__auto___2594]));

var G__2595 = (i__1289__auto___2594 + (1));
i__1289__auto___2594 = G__2595;
continue;
} else {
}
break;
}

var G__2591 = args2589.length;
switch (G__2591) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2589.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__2592 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__2597 = cljs.core.next.call(null,segs__$1);
var G__2598 = nrelseg;
var G__2599 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__2597;
relseg__$1 = G__2598;
result__$1 = G__2599;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__2592,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__2592,(1),null);
var G__2600 = (gline + (1));
var G__2601 = cljs.core.next.call(null,lines__$1);
var G__2602 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__2603 = result__$1;
gline = G__2600;
lines__$1 = G__2601;
relseg = G__2602;
result = G__2603;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;
/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__2610){
var vec__2611 = p__2610;
var _ = cljs.core.nth.call(null,vec__2611,(0),null);
var source = cljs.core.nth.call(null,vec__2611,(1),null);
var line = cljs.core.nth.call(null,vec__2611,(2),null);
var col = cljs.core.nth.call(null,vec__2611,(3),null);
var name = cljs.core.nth.call(null,vec__2611,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__2612){
var vec__2613 = p__2612;
var gcol = cljs.core.nth.call(null,vec__2613,(0),null);
var sidx = cljs.core.nth.call(null,vec__2613,(1),null);
var line = cljs.core.nth.call(null,vec__2613,(2),null);
var col = cljs.core.nth.call(null,vec__2613,(3),null);
var name = cljs.core.nth.call(null,vec__2613,(4),null);
var seg = vec__2613;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__2613,gcol,sidx,line,col,name,seg,relseg){
return (function (p__2614){
var vec__2615 = p__2614;
var _ = cljs.core.nth.call(null,vec__2615,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__2615,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__2615,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__2615,(3),null);
var lname = cljs.core.nth.call(null,vec__2615,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__230__auto__ = name;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__2613,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__230__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
var idx = (function (){var temp__4423__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__2669 = cljs.core.seq.call(null,infos);
var chunk__2670 = null;
var count__2671 = (0);
var i__2672 = (0);
while(true){
if((i__2672 < count__2671)){
var info = cljs.core._nth.call(null,chunk__2670,i__2672);
var segv_2719 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_2720 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_2721 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_2720 > (lc_2721 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__2669,chunk__2670,count__2671,i__2672,segv_2719,gline_2720,lc_2721,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_2720 - (lc_2721 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_2719], null));
});})(seq__2669,chunk__2670,count__2671,i__2672,segv_2719,gline_2720,lc_2721,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__2669,chunk__2670,count__2671,i__2672,segv_2719,gline_2720,lc_2721,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_2720], null),cljs.core.conj,segv_2719);
});})(seq__2669,chunk__2670,count__2671,i__2672,segv_2719,gline_2720,lc_2721,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__2722 = seq__2669;
var G__2723 = chunk__2670;
var G__2724 = count__2671;
var G__2725 = (i__2672 + (1));
seq__2669 = G__2722;
chunk__2670 = G__2723;
count__2671 = G__2724;
i__2672 = G__2725;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__2669);
if(temp__4425__auto__){
var seq__2669__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2669__$1)){
var c__1033__auto__ = cljs.core.chunk_first.call(null,seq__2669__$1);
var G__2726 = cljs.core.chunk_rest.call(null,seq__2669__$1);
var G__2727 = c__1033__auto__;
var G__2728 = cljs.core.count.call(null,c__1033__auto__);
var G__2729 = (0);
seq__2669 = G__2726;
chunk__2670 = G__2727;
count__2671 = G__2728;
i__2672 = G__2729;
continue;
} else {
var info = cljs.core.first.call(null,seq__2669__$1);
var segv_2730 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_2731 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_2732 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_2731 > (lc_2732 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__2669,chunk__2670,count__2671,i__2672,segv_2730,gline_2731,lc_2732,info,seq__2669__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_2731 - (lc_2732 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_2730], null));
});})(seq__2669,chunk__2670,count__2671,i__2672,segv_2730,gline_2731,lc_2732,info,seq__2669__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__2669,chunk__2670,count__2671,i__2672,segv_2730,gline_2731,lc_2732,info,seq__2669__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_2731], null),cljs.core.conj,segv_2730);
});})(seq__2669,chunk__2670,count__2671,i__2672,segv_2730,gline_2731,lc_2732,info,seq__2669__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__2733 = cljs.core.next.call(null,seq__2669__$1);
var G__2734 = null;
var G__2735 = (0);
var G__2736 = (0);
seq__2669 = G__2733;
chunk__2670 = G__2734;
count__2671 = G__2735;
i__2672 = G__2736;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__2673_2737 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__2674_2738 = null;
var count__2675_2739 = (0);
var i__2676_2740 = (0);
while(true){
if((i__2676_2740 < count__2675_2739)){
var vec__2677_2741 = cljs.core._nth.call(null,chunk__2674_2738,i__2676_2740);
var source_idx_2742 = cljs.core.nth.call(null,vec__2677_2741,(0),null);
var vec__2678_2743 = cljs.core.nth.call(null,vec__2677_2741,(1),null);
var __2744 = cljs.core.nth.call(null,vec__2678_2743,(0),null);
var lines_2745__$1 = cljs.core.nth.call(null,vec__2678_2743,(1),null);
var seq__2679_2746 = cljs.core.seq.call(null,lines_2745__$1);
var chunk__2680_2747 = null;
var count__2681_2748 = (0);
var i__2682_2749 = (0);
while(true){
if((i__2682_2749 < count__2681_2748)){
var vec__2683_2750 = cljs.core._nth.call(null,chunk__2680_2747,i__2682_2749);
var line_2751 = cljs.core.nth.call(null,vec__2683_2750,(0),null);
var cols_2752 = cljs.core.nth.call(null,vec__2683_2750,(1),null);
var seq__2684_2753 = cljs.core.seq.call(null,cols_2752);
var chunk__2685_2754 = null;
var count__2686_2755 = (0);
var i__2687_2756 = (0);
while(true){
if((i__2687_2756 < count__2686_2755)){
var vec__2688_2757 = cljs.core._nth.call(null,chunk__2685_2754,i__2687_2756);
var col_2758 = cljs.core.nth.call(null,vec__2688_2757,(0),null);
var infos_2759 = cljs.core.nth.call(null,vec__2688_2757,(1),null);
encode_cols.call(null,infos_2759,source_idx_2742,line_2751,col_2758);

var G__2760 = seq__2684_2753;
var G__2761 = chunk__2685_2754;
var G__2762 = count__2686_2755;
var G__2763 = (i__2687_2756 + (1));
seq__2684_2753 = G__2760;
chunk__2685_2754 = G__2761;
count__2686_2755 = G__2762;
i__2687_2756 = G__2763;
continue;
} else {
var temp__4425__auto___2764 = cljs.core.seq.call(null,seq__2684_2753);
if(temp__4425__auto___2764){
var seq__2684_2765__$1 = temp__4425__auto___2764;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2684_2765__$1)){
var c__1033__auto___2766 = cljs.core.chunk_first.call(null,seq__2684_2765__$1);
var G__2767 = cljs.core.chunk_rest.call(null,seq__2684_2765__$1);
var G__2768 = c__1033__auto___2766;
var G__2769 = cljs.core.count.call(null,c__1033__auto___2766);
var G__2770 = (0);
seq__2684_2753 = G__2767;
chunk__2685_2754 = G__2768;
count__2686_2755 = G__2769;
i__2687_2756 = G__2770;
continue;
} else {
var vec__2689_2771 = cljs.core.first.call(null,seq__2684_2765__$1);
var col_2772 = cljs.core.nth.call(null,vec__2689_2771,(0),null);
var infos_2773 = cljs.core.nth.call(null,vec__2689_2771,(1),null);
encode_cols.call(null,infos_2773,source_idx_2742,line_2751,col_2772);

var G__2774 = cljs.core.next.call(null,seq__2684_2765__$1);
var G__2775 = null;
var G__2776 = (0);
var G__2777 = (0);
seq__2684_2753 = G__2774;
chunk__2685_2754 = G__2775;
count__2686_2755 = G__2776;
i__2687_2756 = G__2777;
continue;
}
} else {
}
}
break;
}

var G__2778 = seq__2679_2746;
var G__2779 = chunk__2680_2747;
var G__2780 = count__2681_2748;
var G__2781 = (i__2682_2749 + (1));
seq__2679_2746 = G__2778;
chunk__2680_2747 = G__2779;
count__2681_2748 = G__2780;
i__2682_2749 = G__2781;
continue;
} else {
var temp__4425__auto___2782 = cljs.core.seq.call(null,seq__2679_2746);
if(temp__4425__auto___2782){
var seq__2679_2783__$1 = temp__4425__auto___2782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2679_2783__$1)){
var c__1033__auto___2784 = cljs.core.chunk_first.call(null,seq__2679_2783__$1);
var G__2785 = cljs.core.chunk_rest.call(null,seq__2679_2783__$1);
var G__2786 = c__1033__auto___2784;
var G__2787 = cljs.core.count.call(null,c__1033__auto___2784);
var G__2788 = (0);
seq__2679_2746 = G__2785;
chunk__2680_2747 = G__2786;
count__2681_2748 = G__2787;
i__2682_2749 = G__2788;
continue;
} else {
var vec__2690_2789 = cljs.core.first.call(null,seq__2679_2783__$1);
var line_2790 = cljs.core.nth.call(null,vec__2690_2789,(0),null);
var cols_2791 = cljs.core.nth.call(null,vec__2690_2789,(1),null);
var seq__2691_2792 = cljs.core.seq.call(null,cols_2791);
var chunk__2692_2793 = null;
var count__2693_2794 = (0);
var i__2694_2795 = (0);
while(true){
if((i__2694_2795 < count__2693_2794)){
var vec__2695_2796 = cljs.core._nth.call(null,chunk__2692_2793,i__2694_2795);
var col_2797 = cljs.core.nth.call(null,vec__2695_2796,(0),null);
var infos_2798 = cljs.core.nth.call(null,vec__2695_2796,(1),null);
encode_cols.call(null,infos_2798,source_idx_2742,line_2790,col_2797);

var G__2799 = seq__2691_2792;
var G__2800 = chunk__2692_2793;
var G__2801 = count__2693_2794;
var G__2802 = (i__2694_2795 + (1));
seq__2691_2792 = G__2799;
chunk__2692_2793 = G__2800;
count__2693_2794 = G__2801;
i__2694_2795 = G__2802;
continue;
} else {
var temp__4425__auto___2803__$1 = cljs.core.seq.call(null,seq__2691_2792);
if(temp__4425__auto___2803__$1){
var seq__2691_2804__$1 = temp__4425__auto___2803__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2691_2804__$1)){
var c__1033__auto___2805 = cljs.core.chunk_first.call(null,seq__2691_2804__$1);
var G__2806 = cljs.core.chunk_rest.call(null,seq__2691_2804__$1);
var G__2807 = c__1033__auto___2805;
var G__2808 = cljs.core.count.call(null,c__1033__auto___2805);
var G__2809 = (0);
seq__2691_2792 = G__2806;
chunk__2692_2793 = G__2807;
count__2693_2794 = G__2808;
i__2694_2795 = G__2809;
continue;
} else {
var vec__2696_2810 = cljs.core.first.call(null,seq__2691_2804__$1);
var col_2811 = cljs.core.nth.call(null,vec__2696_2810,(0),null);
var infos_2812 = cljs.core.nth.call(null,vec__2696_2810,(1),null);
encode_cols.call(null,infos_2812,source_idx_2742,line_2790,col_2811);

var G__2813 = cljs.core.next.call(null,seq__2691_2804__$1);
var G__2814 = null;
var G__2815 = (0);
var G__2816 = (0);
seq__2691_2792 = G__2813;
chunk__2692_2793 = G__2814;
count__2693_2794 = G__2815;
i__2694_2795 = G__2816;
continue;
}
} else {
}
}
break;
}

var G__2817 = cljs.core.next.call(null,seq__2679_2783__$1);
var G__2818 = null;
var G__2819 = (0);
var G__2820 = (0);
seq__2679_2746 = G__2817;
chunk__2680_2747 = G__2818;
count__2681_2748 = G__2819;
i__2682_2749 = G__2820;
continue;
}
} else {
}
}
break;
}

var G__2821 = seq__2673_2737;
var G__2822 = chunk__2674_2738;
var G__2823 = count__2675_2739;
var G__2824 = (i__2676_2740 + (1));
seq__2673_2737 = G__2821;
chunk__2674_2738 = G__2822;
count__2675_2739 = G__2823;
i__2676_2740 = G__2824;
continue;
} else {
var temp__4425__auto___2825 = cljs.core.seq.call(null,seq__2673_2737);
if(temp__4425__auto___2825){
var seq__2673_2826__$1 = temp__4425__auto___2825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2673_2826__$1)){
var c__1033__auto___2827 = cljs.core.chunk_first.call(null,seq__2673_2826__$1);
var G__2828 = cljs.core.chunk_rest.call(null,seq__2673_2826__$1);
var G__2829 = c__1033__auto___2827;
var G__2830 = cljs.core.count.call(null,c__1033__auto___2827);
var G__2831 = (0);
seq__2673_2737 = G__2828;
chunk__2674_2738 = G__2829;
count__2675_2739 = G__2830;
i__2676_2740 = G__2831;
continue;
} else {
var vec__2697_2832 = cljs.core.first.call(null,seq__2673_2826__$1);
var source_idx_2833 = cljs.core.nth.call(null,vec__2697_2832,(0),null);
var vec__2698_2834 = cljs.core.nth.call(null,vec__2697_2832,(1),null);
var __2835 = cljs.core.nth.call(null,vec__2698_2834,(0),null);
var lines_2836__$1 = cljs.core.nth.call(null,vec__2698_2834,(1),null);
var seq__2699_2837 = cljs.core.seq.call(null,lines_2836__$1);
var chunk__2700_2838 = null;
var count__2701_2839 = (0);
var i__2702_2840 = (0);
while(true){
if((i__2702_2840 < count__2701_2839)){
var vec__2703_2841 = cljs.core._nth.call(null,chunk__2700_2838,i__2702_2840);
var line_2842 = cljs.core.nth.call(null,vec__2703_2841,(0),null);
var cols_2843 = cljs.core.nth.call(null,vec__2703_2841,(1),null);
var seq__2704_2844 = cljs.core.seq.call(null,cols_2843);
var chunk__2705_2845 = null;
var count__2706_2846 = (0);
var i__2707_2847 = (0);
while(true){
if((i__2707_2847 < count__2706_2846)){
var vec__2708_2848 = cljs.core._nth.call(null,chunk__2705_2845,i__2707_2847);
var col_2849 = cljs.core.nth.call(null,vec__2708_2848,(0),null);
var infos_2850 = cljs.core.nth.call(null,vec__2708_2848,(1),null);
encode_cols.call(null,infos_2850,source_idx_2833,line_2842,col_2849);

var G__2851 = seq__2704_2844;
var G__2852 = chunk__2705_2845;
var G__2853 = count__2706_2846;
var G__2854 = (i__2707_2847 + (1));
seq__2704_2844 = G__2851;
chunk__2705_2845 = G__2852;
count__2706_2846 = G__2853;
i__2707_2847 = G__2854;
continue;
} else {
var temp__4425__auto___2855__$1 = cljs.core.seq.call(null,seq__2704_2844);
if(temp__4425__auto___2855__$1){
var seq__2704_2856__$1 = temp__4425__auto___2855__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2704_2856__$1)){
var c__1033__auto___2857 = cljs.core.chunk_first.call(null,seq__2704_2856__$1);
var G__2858 = cljs.core.chunk_rest.call(null,seq__2704_2856__$1);
var G__2859 = c__1033__auto___2857;
var G__2860 = cljs.core.count.call(null,c__1033__auto___2857);
var G__2861 = (0);
seq__2704_2844 = G__2858;
chunk__2705_2845 = G__2859;
count__2706_2846 = G__2860;
i__2707_2847 = G__2861;
continue;
} else {
var vec__2709_2862 = cljs.core.first.call(null,seq__2704_2856__$1);
var col_2863 = cljs.core.nth.call(null,vec__2709_2862,(0),null);
var infos_2864 = cljs.core.nth.call(null,vec__2709_2862,(1),null);
encode_cols.call(null,infos_2864,source_idx_2833,line_2842,col_2863);

var G__2865 = cljs.core.next.call(null,seq__2704_2856__$1);
var G__2866 = null;
var G__2867 = (0);
var G__2868 = (0);
seq__2704_2844 = G__2865;
chunk__2705_2845 = G__2866;
count__2706_2846 = G__2867;
i__2707_2847 = G__2868;
continue;
}
} else {
}
}
break;
}

var G__2869 = seq__2699_2837;
var G__2870 = chunk__2700_2838;
var G__2871 = count__2701_2839;
var G__2872 = (i__2702_2840 + (1));
seq__2699_2837 = G__2869;
chunk__2700_2838 = G__2870;
count__2701_2839 = G__2871;
i__2702_2840 = G__2872;
continue;
} else {
var temp__4425__auto___2873__$1 = cljs.core.seq.call(null,seq__2699_2837);
if(temp__4425__auto___2873__$1){
var seq__2699_2874__$1 = temp__4425__auto___2873__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2699_2874__$1)){
var c__1033__auto___2875 = cljs.core.chunk_first.call(null,seq__2699_2874__$1);
var G__2876 = cljs.core.chunk_rest.call(null,seq__2699_2874__$1);
var G__2877 = c__1033__auto___2875;
var G__2878 = cljs.core.count.call(null,c__1033__auto___2875);
var G__2879 = (0);
seq__2699_2837 = G__2876;
chunk__2700_2838 = G__2877;
count__2701_2839 = G__2878;
i__2702_2840 = G__2879;
continue;
} else {
var vec__2710_2880 = cljs.core.first.call(null,seq__2699_2874__$1);
var line_2881 = cljs.core.nth.call(null,vec__2710_2880,(0),null);
var cols_2882 = cljs.core.nth.call(null,vec__2710_2880,(1),null);
var seq__2711_2883 = cljs.core.seq.call(null,cols_2882);
var chunk__2712_2884 = null;
var count__2713_2885 = (0);
var i__2714_2886 = (0);
while(true){
if((i__2714_2886 < count__2713_2885)){
var vec__2715_2887 = cljs.core._nth.call(null,chunk__2712_2884,i__2714_2886);
var col_2888 = cljs.core.nth.call(null,vec__2715_2887,(0),null);
var infos_2889 = cljs.core.nth.call(null,vec__2715_2887,(1),null);
encode_cols.call(null,infos_2889,source_idx_2833,line_2881,col_2888);

var G__2890 = seq__2711_2883;
var G__2891 = chunk__2712_2884;
var G__2892 = count__2713_2885;
var G__2893 = (i__2714_2886 + (1));
seq__2711_2883 = G__2890;
chunk__2712_2884 = G__2891;
count__2713_2885 = G__2892;
i__2714_2886 = G__2893;
continue;
} else {
var temp__4425__auto___2894__$2 = cljs.core.seq.call(null,seq__2711_2883);
if(temp__4425__auto___2894__$2){
var seq__2711_2895__$1 = temp__4425__auto___2894__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2711_2895__$1)){
var c__1033__auto___2896 = cljs.core.chunk_first.call(null,seq__2711_2895__$1);
var G__2897 = cljs.core.chunk_rest.call(null,seq__2711_2895__$1);
var G__2898 = c__1033__auto___2896;
var G__2899 = cljs.core.count.call(null,c__1033__auto___2896);
var G__2900 = (0);
seq__2711_2883 = G__2897;
chunk__2712_2884 = G__2898;
count__2713_2885 = G__2899;
i__2714_2886 = G__2900;
continue;
} else {
var vec__2716_2901 = cljs.core.first.call(null,seq__2711_2895__$1);
var col_2902 = cljs.core.nth.call(null,vec__2716_2901,(0),null);
var infos_2903 = cljs.core.nth.call(null,vec__2716_2901,(1),null);
encode_cols.call(null,infos_2903,source_idx_2833,line_2881,col_2902);

var G__2904 = cljs.core.next.call(null,seq__2711_2895__$1);
var G__2905 = null;
var G__2906 = (0);
var G__2907 = (0);
seq__2711_2883 = G__2904;
chunk__2712_2884 = G__2905;
count__2713_2885 = G__2906;
i__2714_2886 = G__2907;
continue;
}
} else {
}
}
break;
}

var G__2908 = cljs.core.next.call(null,seq__2699_2874__$1);
var G__2909 = null;
var G__2910 = (0);
var G__2911 = (0);
seq__2699_2837 = G__2908;
chunk__2700_2838 = G__2909;
count__2701_2839 = G__2910;
i__2702_2840 = G__2911;
continue;
}
} else {
}
}
break;
}

var G__2912 = cljs.core.next.call(null,seq__2673_2826__$1);
var G__2913 = null;
var G__2914 = (0);
var G__2915 = (0);
seq__2673_2737 = G__2912;
chunk__2674_2738 = G__2913;
count__2675_2739 = G__2914;
i__2676_2740 = G__2915;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__2717 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__2616_SHARP_){
return [cljs.core.str(p1__2616_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__2617_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__2617_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__2618_SHARP_){
return clojure.string.join.call(null,",",p1__2618_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__2717__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__2718 = G__2717;
goog.object.set(G__2718,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__2718;
})():G__2717);
return G__2717__$1;
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__2921 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__2921,(0),null);
var col_map = cljs.core.nth.call(null,vec__2921,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__2922 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__2922,(0),null);
var infos = cljs.core.nth.call(null,vec__2922,(1),null);
var G__2926 = cljs.core.next.call(null,col_map_seq);
var G__2927 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__2922,col,infos,vec__2921,line,col_map){
return (function (v,p__2923){
var map__2924 = p__2923;
var map__2924__$1 = ((((!((map__2924 == null)))?((((map__2924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2924):map__2924);
var gline = cljs.core.get.call(null,map__2924__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__2924__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__2922,col,infos,vec__2921,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__2926;
new_cols = G__2927;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__2928 = cljs.core.next.call(null,line_map_seq);
var G__2929 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__2928;
new_lines = G__2929;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__2980_3030 = cljs.core.seq.call(null,reverse_map);
var chunk__2981_3031 = null;
var count__2982_3032 = (0);
var i__2983_3033 = (0);
while(true){
if((i__2983_3033 < count__2982_3032)){
var vec__2984_3034 = cljs.core._nth.call(null,chunk__2981_3031,i__2983_3033);
var line_3035 = cljs.core.nth.call(null,vec__2984_3034,(0),null);
var columns_3036 = cljs.core.nth.call(null,vec__2984_3034,(1),null);
var seq__2985_3037 = cljs.core.seq.call(null,columns_3036);
var chunk__2986_3038 = null;
var count__2987_3039 = (0);
var i__2988_3040 = (0);
while(true){
if((i__2988_3040 < count__2987_3039)){
var vec__2989_3041 = cljs.core._nth.call(null,chunk__2986_3038,i__2988_3040);
var column_3042 = cljs.core.nth.call(null,vec__2989_3041,(0),null);
var column_info_3043 = cljs.core.nth.call(null,vec__2989_3041,(1),null);
var seq__2990_3044 = cljs.core.seq.call(null,column_info_3043);
var chunk__2991_3045 = null;
var count__2992_3046 = (0);
var i__2993_3047 = (0);
while(true){
if((i__2993_3047 < count__2992_3046)){
var map__2994_3048 = cljs.core._nth.call(null,chunk__2991_3045,i__2993_3047);
var map__2994_3049__$1 = ((((!((map__2994_3048 == null)))?((((map__2994_3048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2994_3048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2994_3048):map__2994_3048);
var gline_3050 = cljs.core.get.call(null,map__2994_3049__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3051 = cljs.core.get.call(null,map__2994_3049__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3052 = cljs.core.get.call(null,map__2994_3049__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3050], null),cljs.core.fnil.call(null,((function (seq__2990_3044,chunk__2991_3045,count__2992_3046,i__2993_3047,seq__2985_3037,chunk__2986_3038,count__2987_3039,i__2988_3040,seq__2980_3030,chunk__2981_3031,count__2982_3032,i__2983_3033,map__2994_3048,map__2994_3049__$1,gline_3050,gcol_3051,name_3052,vec__2989_3041,column_3042,column_info_3043,vec__2984_3034,line_3035,columns_3036,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_3042], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3035,new cljs.core.Keyword(null,"col","col",-1959363084),column_3042,new cljs.core.Keyword(null,"name","name",1843675177),name_3052], null));
});})(seq__2990_3044,chunk__2991_3045,count__2992_3046,i__2993_3047,seq__2985_3037,chunk__2986_3038,count__2987_3039,i__2988_3040,seq__2980_3030,chunk__2981_3031,count__2982_3032,i__2983_3033,map__2994_3048,map__2994_3049__$1,gline_3050,gcol_3051,name_3052,vec__2989_3041,column_3042,column_info_3043,vec__2984_3034,line_3035,columns_3036,inverted))
,cljs.core.sorted_map.call(null)));

var G__3053 = seq__2990_3044;
var G__3054 = chunk__2991_3045;
var G__3055 = count__2992_3046;
var G__3056 = (i__2993_3047 + (1));
seq__2990_3044 = G__3053;
chunk__2991_3045 = G__3054;
count__2992_3046 = G__3055;
i__2993_3047 = G__3056;
continue;
} else {
var temp__4425__auto___3057 = cljs.core.seq.call(null,seq__2990_3044);
if(temp__4425__auto___3057){
var seq__2990_3058__$1 = temp__4425__auto___3057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2990_3058__$1)){
var c__1033__auto___3059 = cljs.core.chunk_first.call(null,seq__2990_3058__$1);
var G__3060 = cljs.core.chunk_rest.call(null,seq__2990_3058__$1);
var G__3061 = c__1033__auto___3059;
var G__3062 = cljs.core.count.call(null,c__1033__auto___3059);
var G__3063 = (0);
seq__2990_3044 = G__3060;
chunk__2991_3045 = G__3061;
count__2992_3046 = G__3062;
i__2993_3047 = G__3063;
continue;
} else {
var map__2996_3064 = cljs.core.first.call(null,seq__2990_3058__$1);
var map__2996_3065__$1 = ((((!((map__2996_3064 == null)))?((((map__2996_3064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2996_3064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2996_3064):map__2996_3064);
var gline_3066 = cljs.core.get.call(null,map__2996_3065__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3067 = cljs.core.get.call(null,map__2996_3065__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3068 = cljs.core.get.call(null,map__2996_3065__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3066], null),cljs.core.fnil.call(null,((function (seq__2990_3044,chunk__2991_3045,count__2992_3046,i__2993_3047,seq__2985_3037,chunk__2986_3038,count__2987_3039,i__2988_3040,seq__2980_3030,chunk__2981_3031,count__2982_3032,i__2983_3033,map__2996_3064,map__2996_3065__$1,gline_3066,gcol_3067,name_3068,seq__2990_3058__$1,temp__4425__auto___3057,vec__2989_3041,column_3042,column_info_3043,vec__2984_3034,line_3035,columns_3036,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_3042], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3035,new cljs.core.Keyword(null,"col","col",-1959363084),column_3042,new cljs.core.Keyword(null,"name","name",1843675177),name_3068], null));
});})(seq__2990_3044,chunk__2991_3045,count__2992_3046,i__2993_3047,seq__2985_3037,chunk__2986_3038,count__2987_3039,i__2988_3040,seq__2980_3030,chunk__2981_3031,count__2982_3032,i__2983_3033,map__2996_3064,map__2996_3065__$1,gline_3066,gcol_3067,name_3068,seq__2990_3058__$1,temp__4425__auto___3057,vec__2989_3041,column_3042,column_info_3043,vec__2984_3034,line_3035,columns_3036,inverted))
,cljs.core.sorted_map.call(null)));

var G__3069 = cljs.core.next.call(null,seq__2990_3058__$1);
var G__3070 = null;
var G__3071 = (0);
var G__3072 = (0);
seq__2990_3044 = G__3069;
chunk__2991_3045 = G__3070;
count__2992_3046 = G__3071;
i__2993_3047 = G__3072;
continue;
}
} else {
}
}
break;
}

var G__3073 = seq__2985_3037;
var G__3074 = chunk__2986_3038;
var G__3075 = count__2987_3039;
var G__3076 = (i__2988_3040 + (1));
seq__2985_3037 = G__3073;
chunk__2986_3038 = G__3074;
count__2987_3039 = G__3075;
i__2988_3040 = G__3076;
continue;
} else {
var temp__4425__auto___3077 = cljs.core.seq.call(null,seq__2985_3037);
if(temp__4425__auto___3077){
var seq__2985_3078__$1 = temp__4425__auto___3077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2985_3078__$1)){
var c__1033__auto___3079 = cljs.core.chunk_first.call(null,seq__2985_3078__$1);
var G__3080 = cljs.core.chunk_rest.call(null,seq__2985_3078__$1);
var G__3081 = c__1033__auto___3079;
var G__3082 = cljs.core.count.call(null,c__1033__auto___3079);
var G__3083 = (0);
seq__2985_3037 = G__3080;
chunk__2986_3038 = G__3081;
count__2987_3039 = G__3082;
i__2988_3040 = G__3083;
continue;
} else {
var vec__2998_3084 = cljs.core.first.call(null,seq__2985_3078__$1);
var column_3085 = cljs.core.nth.call(null,vec__2998_3084,(0),null);
var column_info_3086 = cljs.core.nth.call(null,vec__2998_3084,(1),null);
var seq__2999_3087 = cljs.core.seq.call(null,column_info_3086);
var chunk__3000_3088 = null;
var count__3001_3089 = (0);
var i__3002_3090 = (0);
while(true){
if((i__3002_3090 < count__3001_3089)){
var map__3003_3091 = cljs.core._nth.call(null,chunk__3000_3088,i__3002_3090);
var map__3003_3092__$1 = ((((!((map__3003_3091 == null)))?((((map__3003_3091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3003_3091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3003_3091):map__3003_3091);
var gline_3093 = cljs.core.get.call(null,map__3003_3092__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3094 = cljs.core.get.call(null,map__3003_3092__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3095 = cljs.core.get.call(null,map__3003_3092__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3093], null),cljs.core.fnil.call(null,((function (seq__2999_3087,chunk__3000_3088,count__3001_3089,i__3002_3090,seq__2985_3037,chunk__2986_3038,count__2987_3039,i__2988_3040,seq__2980_3030,chunk__2981_3031,count__2982_3032,i__2983_3033,map__3003_3091,map__3003_3092__$1,gline_3093,gcol_3094,name_3095,vec__2998_3084,column_3085,column_info_3086,seq__2985_3078__$1,temp__4425__auto___3077,vec__2984_3034,line_3035,columns_3036,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_3085], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3035,new cljs.core.Keyword(null,"col","col",-1959363084),column_3085,new cljs.core.Keyword(null,"name","name",1843675177),name_3095], null));
});})(seq__2999_3087,chunk__3000_3088,count__3001_3089,i__3002_3090,seq__2985_3037,chunk__2986_3038,count__2987_3039,i__2988_3040,seq__2980_3030,chunk__2981_3031,count__2982_3032,i__2983_3033,map__3003_3091,map__3003_3092__$1,gline_3093,gcol_3094,name_3095,vec__2998_3084,column_3085,column_info_3086,seq__2985_3078__$1,temp__4425__auto___3077,vec__2984_3034,line_3035,columns_3036,inverted))
,cljs.core.sorted_map.call(null)));

var G__3096 = seq__2999_3087;
var G__3097 = chunk__3000_3088;
var G__3098 = count__3001_3089;
var G__3099 = (i__3002_3090 + (1));
seq__2999_3087 = G__3096;
chunk__3000_3088 = G__3097;
count__3001_3089 = G__3098;
i__3002_3090 = G__3099;
continue;
} else {
var temp__4425__auto___3100__$1 = cljs.core.seq.call(null,seq__2999_3087);
if(temp__4425__auto___3100__$1){
var seq__2999_3101__$1 = temp__4425__auto___3100__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2999_3101__$1)){
var c__1033__auto___3102 = cljs.core.chunk_first.call(null,seq__2999_3101__$1);
var G__3103 = cljs.core.chunk_rest.call(null,seq__2999_3101__$1);
var G__3104 = c__1033__auto___3102;
var G__3105 = cljs.core.count.call(null,c__1033__auto___3102);
var G__3106 = (0);
seq__2999_3087 = G__3103;
chunk__3000_3088 = G__3104;
count__3001_3089 = G__3105;
i__3002_3090 = G__3106;
continue;
} else {
var map__3005_3107 = cljs.core.first.call(null,seq__2999_3101__$1);
var map__3005_3108__$1 = ((((!((map__3005_3107 == null)))?((((map__3005_3107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3005_3107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3005_3107):map__3005_3107);
var gline_3109 = cljs.core.get.call(null,map__3005_3108__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3110 = cljs.core.get.call(null,map__3005_3108__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3111 = cljs.core.get.call(null,map__3005_3108__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3109], null),cljs.core.fnil.call(null,((function (seq__2999_3087,chunk__3000_3088,count__3001_3089,i__3002_3090,seq__2985_3037,chunk__2986_3038,count__2987_3039,i__2988_3040,seq__2980_3030,chunk__2981_3031,count__2982_3032,i__2983_3033,map__3005_3107,map__3005_3108__$1,gline_3109,gcol_3110,name_3111,seq__2999_3101__$1,temp__4425__auto___3100__$1,vec__2998_3084,column_3085,column_info_3086,seq__2985_3078__$1,temp__4425__auto___3077,vec__2984_3034,line_3035,columns_3036,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_3085], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3035,new cljs.core.Keyword(null,"col","col",-1959363084),column_3085,new cljs.core.Keyword(null,"name","name",1843675177),name_3111], null));
});})(seq__2999_3087,chunk__3000_3088,count__3001_3089,i__3002_3090,seq__2985_3037,chunk__2986_3038,count__2987_3039,i__2988_3040,seq__2980_3030,chunk__2981_3031,count__2982_3032,i__2983_3033,map__3005_3107,map__3005_3108__$1,gline_3109,gcol_3110,name_3111,seq__2999_3101__$1,temp__4425__auto___3100__$1,vec__2998_3084,column_3085,column_info_3086,seq__2985_3078__$1,temp__4425__auto___3077,vec__2984_3034,line_3035,columns_3036,inverted))
,cljs.core.sorted_map.call(null)));

var G__3112 = cljs.core.next.call(null,seq__2999_3101__$1);
var G__3113 = null;
var G__3114 = (0);
var G__3115 = (0);
seq__2999_3087 = G__3112;
chunk__3000_3088 = G__3113;
count__3001_3089 = G__3114;
i__3002_3090 = G__3115;
continue;
}
} else {
}
}
break;
}

var G__3116 = cljs.core.next.call(null,seq__2985_3078__$1);
var G__3117 = null;
var G__3118 = (0);
var G__3119 = (0);
seq__2985_3037 = G__3116;
chunk__2986_3038 = G__3117;
count__2987_3039 = G__3118;
i__2988_3040 = G__3119;
continue;
}
} else {
}
}
break;
}

var G__3120 = seq__2980_3030;
var G__3121 = chunk__2981_3031;
var G__3122 = count__2982_3032;
var G__3123 = (i__2983_3033 + (1));
seq__2980_3030 = G__3120;
chunk__2981_3031 = G__3121;
count__2982_3032 = G__3122;
i__2983_3033 = G__3123;
continue;
} else {
var temp__4425__auto___3124 = cljs.core.seq.call(null,seq__2980_3030);
if(temp__4425__auto___3124){
var seq__2980_3125__$1 = temp__4425__auto___3124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2980_3125__$1)){
var c__1033__auto___3126 = cljs.core.chunk_first.call(null,seq__2980_3125__$1);
var G__3127 = cljs.core.chunk_rest.call(null,seq__2980_3125__$1);
var G__3128 = c__1033__auto___3126;
var G__3129 = cljs.core.count.call(null,c__1033__auto___3126);
var G__3130 = (0);
seq__2980_3030 = G__3127;
chunk__2981_3031 = G__3128;
count__2982_3032 = G__3129;
i__2983_3033 = G__3130;
continue;
} else {
var vec__3007_3131 = cljs.core.first.call(null,seq__2980_3125__$1);
var line_3132 = cljs.core.nth.call(null,vec__3007_3131,(0),null);
var columns_3133 = cljs.core.nth.call(null,vec__3007_3131,(1),null);
var seq__3008_3134 = cljs.core.seq.call(null,columns_3133);
var chunk__3009_3135 = null;
var count__3010_3136 = (0);
var i__3011_3137 = (0);
while(true){
if((i__3011_3137 < count__3010_3136)){
var vec__3012_3138 = cljs.core._nth.call(null,chunk__3009_3135,i__3011_3137);
var column_3139 = cljs.core.nth.call(null,vec__3012_3138,(0),null);
var column_info_3140 = cljs.core.nth.call(null,vec__3012_3138,(1),null);
var seq__3013_3141 = cljs.core.seq.call(null,column_info_3140);
var chunk__3014_3142 = null;
var count__3015_3143 = (0);
var i__3016_3144 = (0);
while(true){
if((i__3016_3144 < count__3015_3143)){
var map__3017_3145 = cljs.core._nth.call(null,chunk__3014_3142,i__3016_3144);
var map__3017_3146__$1 = ((((!((map__3017_3145 == null)))?((((map__3017_3145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3017_3145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3017_3145):map__3017_3145);
var gline_3147 = cljs.core.get.call(null,map__3017_3146__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3148 = cljs.core.get.call(null,map__3017_3146__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3149 = cljs.core.get.call(null,map__3017_3146__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3147], null),cljs.core.fnil.call(null,((function (seq__3013_3141,chunk__3014_3142,count__3015_3143,i__3016_3144,seq__3008_3134,chunk__3009_3135,count__3010_3136,i__3011_3137,seq__2980_3030,chunk__2981_3031,count__2982_3032,i__2983_3033,map__3017_3145,map__3017_3146__$1,gline_3147,gcol_3148,name_3149,vec__3012_3138,column_3139,column_info_3140,vec__3007_3131,line_3132,columns_3133,seq__2980_3125__$1,temp__4425__auto___3124,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_3139], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3132,new cljs.core.Keyword(null,"col","col",-1959363084),column_3139,new cljs.core.Keyword(null,"name","name",1843675177),name_3149], null));
});})(seq__3013_3141,chunk__3014_3142,count__3015_3143,i__3016_3144,seq__3008_3134,chunk__3009_3135,count__3010_3136,i__3011_3137,seq__2980_3030,chunk__2981_3031,count__2982_3032,i__2983_3033,map__3017_3145,map__3017_3146__$1,gline_3147,gcol_3148,name_3149,vec__3012_3138,column_3139,column_info_3140,vec__3007_3131,line_3132,columns_3133,seq__2980_3125__$1,temp__4425__auto___3124,inverted))
,cljs.core.sorted_map.call(null)));

var G__3150 = seq__3013_3141;
var G__3151 = chunk__3014_3142;
var G__3152 = count__3015_3143;
var G__3153 = (i__3016_3144 + (1));
seq__3013_3141 = G__3150;
chunk__3014_3142 = G__3151;
count__3015_3143 = G__3152;
i__3016_3144 = G__3153;
continue;
} else {
var temp__4425__auto___3154__$1 = cljs.core.seq.call(null,seq__3013_3141);
if(temp__4425__auto___3154__$1){
var seq__3013_3155__$1 = temp__4425__auto___3154__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3013_3155__$1)){
var c__1033__auto___3156 = cljs.core.chunk_first.call(null,seq__3013_3155__$1);
var G__3157 = cljs.core.chunk_rest.call(null,seq__3013_3155__$1);
var G__3158 = c__1033__auto___3156;
var G__3159 = cljs.core.count.call(null,c__1033__auto___3156);
var G__3160 = (0);
seq__3013_3141 = G__3157;
chunk__3014_3142 = G__3158;
count__3015_3143 = G__3159;
i__3016_3144 = G__3160;
continue;
} else {
var map__3019_3161 = cljs.core.first.call(null,seq__3013_3155__$1);
var map__3019_3162__$1 = ((((!((map__3019_3161 == null)))?((((map__3019_3161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3019_3161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3019_3161):map__3019_3161);
var gline_3163 = cljs.core.get.call(null,map__3019_3162__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3164 = cljs.core.get.call(null,map__3019_3162__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3165 = cljs.core.get.call(null,map__3019_3162__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3163], null),cljs.core.fnil.call(null,((function (seq__3013_3141,chunk__3014_3142,count__3015_3143,i__3016_3144,seq__3008_3134,chunk__3009_3135,count__3010_3136,i__3011_3137,seq__2980_3030,chunk__2981_3031,count__2982_3032,i__2983_3033,map__3019_3161,map__3019_3162__$1,gline_3163,gcol_3164,name_3165,seq__3013_3155__$1,temp__4425__auto___3154__$1,vec__3012_3138,column_3139,column_info_3140,vec__3007_3131,line_3132,columns_3133,seq__2980_3125__$1,temp__4425__auto___3124,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_3139], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3132,new cljs.core.Keyword(null,"col","col",-1959363084),column_3139,new cljs.core.Keyword(null,"name","name",1843675177),name_3165], null));
});})(seq__3013_3141,chunk__3014_3142,count__3015_3143,i__3016_3144,seq__3008_3134,chunk__3009_3135,count__3010_3136,i__3011_3137,seq__2980_3030,chunk__2981_3031,count__2982_3032,i__2983_3033,map__3019_3161,map__3019_3162__$1,gline_3163,gcol_3164,name_3165,seq__3013_3155__$1,temp__4425__auto___3154__$1,vec__3012_3138,column_3139,column_info_3140,vec__3007_3131,line_3132,columns_3133,seq__2980_3125__$1,temp__4425__auto___3124,inverted))
,cljs.core.sorted_map.call(null)));

var G__3166 = cljs.core.next.call(null,seq__3013_3155__$1);
var G__3167 = null;
var G__3168 = (0);
var G__3169 = (0);
seq__3013_3141 = G__3166;
chunk__3014_3142 = G__3167;
count__3015_3143 = G__3168;
i__3016_3144 = G__3169;
continue;
}
} else {
}
}
break;
}

var G__3170 = seq__3008_3134;
var G__3171 = chunk__3009_3135;
var G__3172 = count__3010_3136;
var G__3173 = (i__3011_3137 + (1));
seq__3008_3134 = G__3170;
chunk__3009_3135 = G__3171;
count__3010_3136 = G__3172;
i__3011_3137 = G__3173;
continue;
} else {
var temp__4425__auto___3174__$1 = cljs.core.seq.call(null,seq__3008_3134);
if(temp__4425__auto___3174__$1){
var seq__3008_3175__$1 = temp__4425__auto___3174__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3008_3175__$1)){
var c__1033__auto___3176 = cljs.core.chunk_first.call(null,seq__3008_3175__$1);
var G__3177 = cljs.core.chunk_rest.call(null,seq__3008_3175__$1);
var G__3178 = c__1033__auto___3176;
var G__3179 = cljs.core.count.call(null,c__1033__auto___3176);
var G__3180 = (0);
seq__3008_3134 = G__3177;
chunk__3009_3135 = G__3178;
count__3010_3136 = G__3179;
i__3011_3137 = G__3180;
continue;
} else {
var vec__3021_3181 = cljs.core.first.call(null,seq__3008_3175__$1);
var column_3182 = cljs.core.nth.call(null,vec__3021_3181,(0),null);
var column_info_3183 = cljs.core.nth.call(null,vec__3021_3181,(1),null);
var seq__3022_3184 = cljs.core.seq.call(null,column_info_3183);
var chunk__3023_3185 = null;
var count__3024_3186 = (0);
var i__3025_3187 = (0);
while(true){
if((i__3025_3187 < count__3024_3186)){
var map__3026_3188 = cljs.core._nth.call(null,chunk__3023_3185,i__3025_3187);
var map__3026_3189__$1 = ((((!((map__3026_3188 == null)))?((((map__3026_3188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3026_3188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3026_3188):map__3026_3188);
var gline_3190 = cljs.core.get.call(null,map__3026_3189__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3191 = cljs.core.get.call(null,map__3026_3189__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3192 = cljs.core.get.call(null,map__3026_3189__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3190], null),cljs.core.fnil.call(null,((function (seq__3022_3184,chunk__3023_3185,count__3024_3186,i__3025_3187,seq__3008_3134,chunk__3009_3135,count__3010_3136,i__3011_3137,seq__2980_3030,chunk__2981_3031,count__2982_3032,i__2983_3033,map__3026_3188,map__3026_3189__$1,gline_3190,gcol_3191,name_3192,vec__3021_3181,column_3182,column_info_3183,seq__3008_3175__$1,temp__4425__auto___3174__$1,vec__3007_3131,line_3132,columns_3133,seq__2980_3125__$1,temp__4425__auto___3124,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_3182], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3132,new cljs.core.Keyword(null,"col","col",-1959363084),column_3182,new cljs.core.Keyword(null,"name","name",1843675177),name_3192], null));
});})(seq__3022_3184,chunk__3023_3185,count__3024_3186,i__3025_3187,seq__3008_3134,chunk__3009_3135,count__3010_3136,i__3011_3137,seq__2980_3030,chunk__2981_3031,count__2982_3032,i__2983_3033,map__3026_3188,map__3026_3189__$1,gline_3190,gcol_3191,name_3192,vec__3021_3181,column_3182,column_info_3183,seq__3008_3175__$1,temp__4425__auto___3174__$1,vec__3007_3131,line_3132,columns_3133,seq__2980_3125__$1,temp__4425__auto___3124,inverted))
,cljs.core.sorted_map.call(null)));

var G__3193 = seq__3022_3184;
var G__3194 = chunk__3023_3185;
var G__3195 = count__3024_3186;
var G__3196 = (i__3025_3187 + (1));
seq__3022_3184 = G__3193;
chunk__3023_3185 = G__3194;
count__3024_3186 = G__3195;
i__3025_3187 = G__3196;
continue;
} else {
var temp__4425__auto___3197__$2 = cljs.core.seq.call(null,seq__3022_3184);
if(temp__4425__auto___3197__$2){
var seq__3022_3198__$1 = temp__4425__auto___3197__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3022_3198__$1)){
var c__1033__auto___3199 = cljs.core.chunk_first.call(null,seq__3022_3198__$1);
var G__3200 = cljs.core.chunk_rest.call(null,seq__3022_3198__$1);
var G__3201 = c__1033__auto___3199;
var G__3202 = cljs.core.count.call(null,c__1033__auto___3199);
var G__3203 = (0);
seq__3022_3184 = G__3200;
chunk__3023_3185 = G__3201;
count__3024_3186 = G__3202;
i__3025_3187 = G__3203;
continue;
} else {
var map__3028_3204 = cljs.core.first.call(null,seq__3022_3198__$1);
var map__3028_3205__$1 = ((((!((map__3028_3204 == null)))?((((map__3028_3204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3028_3204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3028_3204):map__3028_3204);
var gline_3206 = cljs.core.get.call(null,map__3028_3205__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3207 = cljs.core.get.call(null,map__3028_3205__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3208 = cljs.core.get.call(null,map__3028_3205__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3206], null),cljs.core.fnil.call(null,((function (seq__3022_3184,chunk__3023_3185,count__3024_3186,i__3025_3187,seq__3008_3134,chunk__3009_3135,count__3010_3136,i__3011_3137,seq__2980_3030,chunk__2981_3031,count__2982_3032,i__2983_3033,map__3028_3204,map__3028_3205__$1,gline_3206,gcol_3207,name_3208,seq__3022_3198__$1,temp__4425__auto___3197__$2,vec__3021_3181,column_3182,column_info_3183,seq__3008_3175__$1,temp__4425__auto___3174__$1,vec__3007_3131,line_3132,columns_3133,seq__2980_3125__$1,temp__4425__auto___3124,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_3182], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3132,new cljs.core.Keyword(null,"col","col",-1959363084),column_3182,new cljs.core.Keyword(null,"name","name",1843675177),name_3208], null));
});})(seq__3022_3184,chunk__3023_3185,count__3024_3186,i__3025_3187,seq__3008_3134,chunk__3009_3135,count__3010_3136,i__3011_3137,seq__2980_3030,chunk__2981_3031,count__2982_3032,i__2983_3033,map__3028_3204,map__3028_3205__$1,gline_3206,gcol_3207,name_3208,seq__3022_3198__$1,temp__4425__auto___3197__$2,vec__3021_3181,column_3182,column_info_3183,seq__3008_3175__$1,temp__4425__auto___3174__$1,vec__3007_3131,line_3132,columns_3133,seq__2980_3125__$1,temp__4425__auto___3124,inverted))
,cljs.core.sorted_map.call(null)));

var G__3209 = cljs.core.next.call(null,seq__3022_3198__$1);
var G__3210 = null;
var G__3211 = (0);
var G__3212 = (0);
seq__3022_3184 = G__3209;
chunk__3023_3185 = G__3210;
count__3024_3186 = G__3211;
i__3025_3187 = G__3212;
continue;
}
} else {
}
}
break;
}

var G__3213 = cljs.core.next.call(null,seq__3008_3175__$1);
var G__3214 = null;
var G__3215 = (0);
var G__3216 = (0);
seq__3008_3134 = G__3213;
chunk__3009_3135 = G__3214;
count__3010_3136 = G__3215;
i__3011_3137 = G__3216;
continue;
}
} else {
}
}
break;
}

var G__3217 = cljs.core.next.call(null,seq__2980_3125__$1);
var G__3218 = null;
var G__3219 = (0);
var G__3220 = (0);
seq__2980_3030 = G__3217;
chunk__2981_3031 = G__3218;
count__2982_3032 = G__3219;
i__2983_3033 = G__3220;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map