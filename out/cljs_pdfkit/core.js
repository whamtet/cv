// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs_pdfkit.core');
goog.require('cljs.core');
goog.require('cljs_pdfkit.optimize_dom');
goog.require('cljs_pdfkit.util');
cljs_pdfkit.core.PDFDocument = require("pdfkit");
cljs_pdfkit.core.handle_tag;
cljs_pdfkit.core.draw_tag;
cljs_pdfkit.core.default_stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font","font",-1506159249),"Helvetica",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null)], null);
cljs_pdfkit.core.print_through = (function cljs_pdfkit$core$print_through(x){
cljs.core.println.call(null,x);

return x;
});
cljs_pdfkit.core.page = (function cljs_pdfkit$core$page(doc,page__$1,pdf_opts){
var vec__4679 = cljs_pdfkit.optimize_dom.add_style.call(null,page__$1);
var page_tag = cljs.core.nth.call(null,vec__4679,(0),null);
var opts = cljs.core.nth.call(null,vec__4679,(1),null);
var children = cljs.core.nthnext.call(null,vec__4679,(2));
var _ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397),page_tag))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Symbol(null,"page-tag","page-tag",-403138499,null))))].join('')))})());
var opts__$1 = cljs.core.merge.call(null,opts,cljs.core.select_keys.call(null,pdf_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921)], null)));
var opts__$2 = cljs.core.clj__GT_js.call(null,opts__$1);
doc.addPage(opts__$2);

return cljs_pdfkit.core.handle_tag.call(null,doc,cljs_pdfkit.core.default_stack,cljs_pdfkit.optimize_dom.optimize_dom.call(null,cljs.core.vec.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY,children))));
});
/**
 * Create a pdf with a vector of the form
 * 
 *   [:pdf opts & pages]
 * 
 *   opts takes the form
 *   {:info
 *  {:title "Title of the Document"
 *   :author "Author"
 *   :subject - "Subject"
 *   :keywords - "Keywords"}
 * :layout "landscape"}
 *   
 */
cljs_pdfkit.core.pdf = (function cljs_pdfkit$core$pdf(dom){
var vec__4685 = cljs_pdfkit.optimize_dom.add_style.call(null,dom);
var pdf_tag = cljs.core.nth.call(null,vec__4685,(0),null);
var opts = cljs.core.nth.call(null,vec__4685,(1),null);
var children = cljs.core.nthnext.call(null,vec__4685,(2));
var _ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pdf","pdf",1586765132),pdf_tag))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Symbol(null,"pdf-tag","pdf-tag",1229214313,null))))].join('')))})());
var opts__$1 = cljs.core.assoc.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),cljs_pdfkit.util.capitalize_map),new cljs.core.Keyword(null,"autoFirstPage","autoFirstPage",1771180266),false);
var doc = (new cljs_pdfkit.core.PDFDocument(cljs.core.clj__GT_js.call(null,opts__$1)));
var children__$1 = cljs.core.remove.call(null,cljs.core.seq_QMARK_,cljs.core.tree_seq.call(null,cljs.core.seq_QMARK_,cljs.core.identity,children));
var seq__4686_4690 = cljs.core.seq.call(null,children__$1);
var chunk__4687_4691 = null;
var count__4688_4692 = (0);
var i__4689_4693 = (0);
while(true){
if((i__4689_4693 < count__4688_4692)){
var child_4694 = cljs.core._nth.call(null,chunk__4687_4691,i__4689_4693);
cljs_pdfkit.core.page.call(null,doc,child_4694,opts__$1);

var G__4695 = seq__4686_4690;
var G__4696 = chunk__4687_4691;
var G__4697 = count__4688_4692;
var G__4698 = (i__4689_4693 + (1));
seq__4686_4690 = G__4695;
chunk__4687_4691 = G__4696;
count__4688_4692 = G__4697;
i__4689_4693 = G__4698;
continue;
} else {
var temp__4425__auto___4699 = cljs.core.seq.call(null,seq__4686_4690);
if(temp__4425__auto___4699){
var seq__4686_4700__$1 = temp__4425__auto___4699;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4686_4700__$1)){
var c__1033__auto___4701 = cljs.core.chunk_first.call(null,seq__4686_4700__$1);
var G__4702 = cljs.core.chunk_rest.call(null,seq__4686_4700__$1);
var G__4703 = c__1033__auto___4701;
var G__4704 = cljs.core.count.call(null,c__1033__auto___4701);
var G__4705 = (0);
seq__4686_4690 = G__4702;
chunk__4687_4691 = G__4703;
count__4688_4692 = G__4704;
i__4689_4693 = G__4705;
continue;
} else {
var child_4706 = cljs.core.first.call(null,seq__4686_4700__$1);
cljs_pdfkit.core.page.call(null,doc,child_4706,opts__$1);

var G__4707 = cljs.core.next.call(null,seq__4686_4700__$1);
var G__4708 = null;
var G__4709 = (0);
var G__4710 = (0);
seq__4686_4690 = G__4707;
chunk__4687_4691 = G__4708;
count__4688_4692 = G__4709;
i__4689_4693 = G__4710;
continue;
}
} else {
}
}
break;
}

return doc;
});
cljs_pdfkit.core.make_linear_gradient = (function cljs_pdfkit$core$make_linear_gradient(doc,p__4711){
var map__4721 = p__4711;
var map__4721__$1 = ((((!((map__4721 == null)))?((((map__4721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4721):map__4721);
var vec__4722 = cljs.core.get.call(null,map__4721__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var x1 = cljs.core.nth.call(null,vec__4722,(0),null);
var y1 = cljs.core.nth.call(null,vec__4722,(1),null);
var x2 = cljs.core.nth.call(null,vec__4722,(2),null);
var y2 = cljs.core.nth.call(null,vec__4722,(3),null);
var stops = cljs.core.get.call(null,map__4721__$1,new cljs.core.Keyword(null,"stops","stops",-1205459005));
var grad = doc.linearGradient(x1,y1,x2,y2);
var seq__4724_4730 = cljs.core.seq.call(null,stops);
var chunk__4725_4731 = null;
var count__4726_4732 = (0);
var i__4727_4733 = (0);
while(true){
if((i__4727_4733 < count__4726_4732)){
var vec__4728_4734 = cljs.core._nth.call(null,chunk__4725_4731,i__4727_4733);
var point_4735 = cljs.core.nth.call(null,vec__4728_4734,(0),null);
var color_4736 = cljs.core.nth.call(null,vec__4728_4734,(1),null);
grad.stop(point_4735,color_4736);

var G__4737 = seq__4724_4730;
var G__4738 = chunk__4725_4731;
var G__4739 = count__4726_4732;
var G__4740 = (i__4727_4733 + (1));
seq__4724_4730 = G__4737;
chunk__4725_4731 = G__4738;
count__4726_4732 = G__4739;
i__4727_4733 = G__4740;
continue;
} else {
var temp__4425__auto___4741 = cljs.core.seq.call(null,seq__4724_4730);
if(temp__4425__auto___4741){
var seq__4724_4742__$1 = temp__4425__auto___4741;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4724_4742__$1)){
var c__1033__auto___4743 = cljs.core.chunk_first.call(null,seq__4724_4742__$1);
var G__4744 = cljs.core.chunk_rest.call(null,seq__4724_4742__$1);
var G__4745 = c__1033__auto___4743;
var G__4746 = cljs.core.count.call(null,c__1033__auto___4743);
var G__4747 = (0);
seq__4724_4730 = G__4744;
chunk__4725_4731 = G__4745;
count__4726_4732 = G__4746;
i__4727_4733 = G__4747;
continue;
} else {
var vec__4729_4748 = cljs.core.first.call(null,seq__4724_4742__$1);
var point_4749 = cljs.core.nth.call(null,vec__4729_4748,(0),null);
var color_4750 = cljs.core.nth.call(null,vec__4729_4748,(1),null);
grad.stop(point_4749,color_4750);

var G__4751 = cljs.core.next.call(null,seq__4724_4742__$1);
var G__4752 = null;
var G__4753 = (0);
var G__4754 = (0);
seq__4724_4730 = G__4751;
chunk__4725_4731 = G__4752;
count__4726_4732 = G__4753;
i__4727_4733 = G__4754;
continue;
}
} else {
}
}
break;
}

return grad;
});
cljs_pdfkit.core.make_radial_gradient = (function cljs_pdfkit$core$make_radial_gradient(doc,p__4755){
var map__4765 = p__4755;
var map__4765__$1 = ((((!((map__4765 == null)))?((((map__4765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4765):map__4765);
var vec__4766 = cljs.core.get.call(null,map__4765__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var x1 = cljs.core.nth.call(null,vec__4766,(0),null);
var y1 = cljs.core.nth.call(null,vec__4766,(1),null);
var r1 = cljs.core.nth.call(null,vec__4766,(2),null);
var x2 = cljs.core.nth.call(null,vec__4766,(3),null);
var y2 = cljs.core.nth.call(null,vec__4766,(4),null);
var r2 = cljs.core.nth.call(null,vec__4766,(5),null);
var stops = cljs.core.get.call(null,map__4765__$1,new cljs.core.Keyword(null,"stops","stops",-1205459005));
var grad = doc.radialGradient(x1,y1,r1,x2,y2,r2);
var seq__4768_4774 = cljs.core.seq.call(null,stops);
var chunk__4769_4775 = null;
var count__4770_4776 = (0);
var i__4771_4777 = (0);
while(true){
if((i__4771_4777 < count__4770_4776)){
var vec__4772_4778 = cljs.core._nth.call(null,chunk__4769_4775,i__4771_4777);
var a_4779 = cljs.core.nth.call(null,vec__4772_4778,(0),null);
var color_4780 = cljs.core.nth.call(null,vec__4772_4778,(1),null);
var b_4781 = cljs.core.nth.call(null,vec__4772_4778,(2),null);
grad.stop(a_4779,color_4780,b_4781);

var G__4782 = seq__4768_4774;
var G__4783 = chunk__4769_4775;
var G__4784 = count__4770_4776;
var G__4785 = (i__4771_4777 + (1));
seq__4768_4774 = G__4782;
chunk__4769_4775 = G__4783;
count__4770_4776 = G__4784;
i__4771_4777 = G__4785;
continue;
} else {
var temp__4425__auto___4786 = cljs.core.seq.call(null,seq__4768_4774);
if(temp__4425__auto___4786){
var seq__4768_4787__$1 = temp__4425__auto___4786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4768_4787__$1)){
var c__1033__auto___4788 = cljs.core.chunk_first.call(null,seq__4768_4787__$1);
var G__4789 = cljs.core.chunk_rest.call(null,seq__4768_4787__$1);
var G__4790 = c__1033__auto___4788;
var G__4791 = cljs.core.count.call(null,c__1033__auto___4788);
var G__4792 = (0);
seq__4768_4774 = G__4789;
chunk__4769_4775 = G__4790;
count__4770_4776 = G__4791;
i__4771_4777 = G__4792;
continue;
} else {
var vec__4773_4793 = cljs.core.first.call(null,seq__4768_4787__$1);
var a_4794 = cljs.core.nth.call(null,vec__4773_4793,(0),null);
var color_4795 = cljs.core.nth.call(null,vec__4773_4793,(1),null);
var b_4796 = cljs.core.nth.call(null,vec__4773_4793,(2),null);
grad.stop(a_4794,color_4795,b_4796);

var G__4797 = cljs.core.next.call(null,seq__4768_4787__$1);
var G__4798 = null;
var G__4799 = (0);
var G__4800 = (0);
seq__4768_4774 = G__4797;
chunk__4769_4775 = G__4798;
count__4770_4776 = G__4799;
i__4771_4777 = G__4800;
continue;
}
} else {
}
}
break;
}

return grad;
});
cljs_pdfkit.core.apply_state = (function cljs_pdfkit$core$apply_state(doc,opts){
if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903)))){
doc.fillColor(opts.call(null,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"line-join","line-join",-1560936092)))){
doc.lineJoin(opts.call(null,new cljs.core.Keyword(null,"line-join","line-join",-1560936092)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937)))){
doc.strokeColor(opts.call(null,new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159)))){
doc.strokeOpacity(opts.call(null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"miter-limit","miter-limit",-1242625357)))){
doc.miterLimit(opts.call(null,new cljs.core.Keyword(null,"miter-limit","miter-limit",-1242625357)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"line-width","line-width",-906934988)))){
doc.lineWidth(opts.call(null,new cljs.core.Keyword(null,"line-width","line-width",-906934988)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"opacity","opacity",397153780)))){
doc.opacity(opts.call(null,new cljs.core.Keyword(null,"opacity","opacity",397153780)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"line-cap","line-cap",448406012)))){
doc.lineCap(opts.call(null,new cljs.core.Keyword(null,"line-cap","line-cap",448406012)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170)))){
return doc.fillOpacity(opts.call(null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170)));
} else {
return null;
}
});
cljs_pdfkit.core.apply_stack_frame = (function cljs_pdfkit$core$apply_stack_frame(doc,p__4801,save_QMARK_){
var map__4804 = p__4801;
var map__4804__$1 = ((((!((map__4804 == null)))?((((map__4804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4804):map__4804);
var font = cljs.core.get.call(null,map__4804__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var font_size = cljs.core.get.call(null,map__4804__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
if(cljs.core.truth_(save_QMARK_)){
doc.save();
} else {
doc.restore();
}

if(cljs.core.truth_(font)){
if(typeof font === 'string'){
doc.font(font);
} else {
doc.font(cljs.core.first.call(null,font),cljs.core.second.call(null,font));
}
} else {
}

if(cljs.core.truth_(font_size)){
return doc.fontSize(font_size);
} else {
return null;
}
});
cljs_pdfkit.core.handle_tag = (function cljs_pdfkit$core$handle_tag(doc,stack,p__4806){
var vec__4811 = p__4806;
var tag = cljs.core.nth.call(null,vec__4811,(0),null);
var tag_opts = cljs.core.nth.call(null,vec__4811,(1),null);
var children = cljs.core.nthnext.call(null,vec__4811,(2));
var v = vec__4811;
var map__4812 = tag_opts;
var map__4812__$1 = ((((!((map__4812 == null)))?((((map__4812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4812):map__4812);
var font_size = cljs.core.get.call(null,map__4812__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
var linear_gradient = cljs.core.get.call(null,map__4812__$1,new cljs.core.Keyword(null,"linear-gradient","linear-gradient",1752751047));
var fill_and_stroke = cljs.core.get.call(null,map__4812__$1,new cljs.core.Keyword(null,"fill-and-stroke","fill-and-stroke",1756742695));
var scale = cljs.core.get.call(null,map__4812__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var fill = cljs.core.get.call(null,map__4812__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var dash = cljs.core.get.call(null,map__4812__$1,new cljs.core.Keyword(null,"dash","dash",23821356));
var radial_gradient = cljs.core.get.call(null,map__4812__$1,new cljs.core.Keyword(null,"radial-gradient","radial-gradient",-635026259));
var font = cljs.core.get.call(null,map__4812__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var rotate = cljs.core.get.call(null,map__4812__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
var translate = cljs.core.get.call(null,map__4812__$1,new cljs.core.Keyword(null,"translate","translate",1336199447));
var stack_frame = cljs.core.select_keys.call(null,tag_opts,cljs_pdfkit.optimize_dom.root_properties2);
var new_stack = cljs.core.conj.call(null,stack,cljs.core.merge.call(null,cljs.core.peek.call(null,stack),stack_frame));
var save_stack_QMARK_ = (function (){var or__230__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"clip","clip",830998499),tag);
if(or__230__auto__){
return or__230__auto__;
} else {
return cljs.core.not_empty.call(null,tag_opts);
}
})();
if(cljs.core.truth_(save_stack_QMARK_)){
cljs_pdfkit.core.apply_stack_frame.call(null,doc,stack_frame,true);
} else {
}

cljs_pdfkit.core.apply_state.call(null,doc,tag_opts);

if(cljs.core.truth_(dash)){
doc.dash(cljs.core.first.call(null,dash),cljs.core.clj__GT_js.call(null,cljs.core.second.call(null,dash)));
} else {
}

if(cljs.core.truth_(translate)){
doc.translate(cljs.core.first.call(null,translate),cljs.core.second.call(null,translate));
} else {
}

if(cljs.core.truth_(rotate)){
doc.rotate(cljs.core.first.call(null,rotate),cljs.core.clj__GT_js.call(null,cljs.core.second.call(null,rotate)));
} else {
}

if(cljs.core.truth_(scale)){
var vec__4814_4815 = ((typeof scale === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,scale], null):scale);
var x_4816 = cljs.core.nth.call(null,vec__4814_4815,(0),null);
var y_4817 = cljs.core.nth.call(null,vec__4814_4815,(1),null);
doc.scale(x_4816,y_4817);
} else {
}

cljs_pdfkit.core.draw_tag.call(null,tag,doc,new_stack,tag_opts,children);

if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clip","clip",830998499),null,new cljs.core.Keyword(null,"do","do",46310725),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null).call(null,tag))){
} else {
if(cljs.core.truth_(fill_and_stroke)){
doc.fillAndStroke(cljs.core.first.call(null,fill_and_stroke),cljs.core.second.call(null,fill_and_stroke));
} else {
if(cljs.core.truth_(linear_gradient)){
doc.fill(cljs_pdfkit.core.make_linear_gradient.call(null,doc,linear_gradient));
} else {
if(cljs.core.truth_(radial_gradient)){
doc.fill(cljs_pdfkit.core.make_radial_gradient.call(null,doc,radial_gradient));
} else {
if(cljs.core.truth_(fill)){
if(cljs.core.coll_QMARK_.call(null,fill)){
doc.fill.apply(doc,cljs.core.clj__GT_js.call(null,fill));
} else {
doc.fill(fill);
}
} else {
doc.stroke();

}
}
}
}
}

if(cljs.core.truth_(save_stack_QMARK_)){
return cljs_pdfkit.core.apply_stack_frame.call(null,doc,cljs.core.peek.call(null,stack),false);
} else {
return null;
}
});
if(typeof cljs_pdfkit.core.draw_tag !== 'undefined'){
} else {
cljs_pdfkit.core.draw_tag = (function (){var method_table__1143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__1144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__1145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__1146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__1147__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs-pdfkit.core","draw-tag"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__1147__auto__,method_table__1143__auto__,prefer_table__1144__auto__,method_cache__1145__auto__,cached_hierarchy__1146__auto__));
})();
}
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"note","note",1426297904),(function (tag__4649__auto__,doc__4650__auto__,stack__4651__auto__,opts__4652__auto__,p__4818){
var vec__4819 = p__4818;
var x = cljs.core.nth.call(null,vec__4819,(0),null);
var y = cljs.core.nth.call(null,vec__4819,(1),null);
var width = cljs.core.nth.call(null,vec__4819,(2),null);
var height = cljs.core.nth.call(null,vec__4819,(3),null);
var contents = cljs.core.nth.call(null,vec__4819,(4),null);
return doc__4650__auto__.note(x,y,width,height,contents,cljs.core.clj__GT_js.call(null,opts__4652__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"link","link",-1769163468),(function (tag__4649__auto__,doc__4650__auto__,stack__4651__auto__,opts__4652__auto__,p__4820){
var vec__4821 = p__4820;
var x = cljs.core.nth.call(null,vec__4821,(0),null);
var y = cljs.core.nth.call(null,vec__4821,(1),null);
var width = cljs.core.nth.call(null,vec__4821,(2),null);
var height = cljs.core.nth.call(null,vec__4821,(3),null);
var url = cljs.core.nth.call(null,vec__4821,(4),null);
return doc__4650__auto__.link(x,y,width,height,url,cljs.core.clj__GT_js.call(null,opts__4652__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"highlight","highlight",-800930873),(function (tag__4649__auto__,doc__4650__auto__,stack__4651__auto__,opts__4652__auto__,p__4822){
var vec__4823 = p__4822;
var x = cljs.core.nth.call(null,vec__4823,(0),null);
var y = cljs.core.nth.call(null,vec__4823,(1),null);
var width = cljs.core.nth.call(null,vec__4823,(2),null);
var height = cljs.core.nth.call(null,vec__4823,(3),null);
return doc__4650__auto__.highlight(x,y,width,height,cljs.core.clj__GT_js.call(null,opts__4652__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"underline","underline",2018066703),(function (tag__4649__auto__,doc__4650__auto__,stack__4651__auto__,opts__4652__auto__,p__4824){
var vec__4825 = p__4824;
var x = cljs.core.nth.call(null,vec__4825,(0),null);
var y = cljs.core.nth.call(null,vec__4825,(1),null);
var width = cljs.core.nth.call(null,vec__4825,(2),null);
var height = cljs.core.nth.call(null,vec__4825,(3),null);
return doc__4650__auto__.underline(x,y,width,height,cljs.core.clj__GT_js.call(null,opts__4652__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"strike","strike",-1173815471),(function (tag__4649__auto__,doc__4650__auto__,stack__4651__auto__,opts__4652__auto__,p__4826){
var vec__4827 = p__4826;
var x = cljs.core.nth.call(null,vec__4827,(0),null);
var y = cljs.core.nth.call(null,vec__4827,(1),null);
var width = cljs.core.nth.call(null,vec__4827,(2),null);
var height = cljs.core.nth.call(null,vec__4827,(3),null);
return doc__4650__auto__.strike(x,y,width,height,cljs.core.clj__GT_js.call(null,opts__4652__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"lineAnnotation","lineAnnotation",-1656470988),(function (tag__4649__auto__,doc__4650__auto__,stack__4651__auto__,opts__4652__auto__,p__4828){
var vec__4829 = p__4828;
var x1 = cljs.core.nth.call(null,vec__4829,(0),null);
var y1 = cljs.core.nth.call(null,vec__4829,(1),null);
var x2 = cljs.core.nth.call(null,vec__4829,(2),null);
var y2 = cljs.core.nth.call(null,vec__4829,(3),null);
return doc__4650__auto__.lineAnnotation(x1,y1,x2,y2,cljs.core.clj__GT_js.call(null,opts__4652__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"rectAnnotation","rectAnnotation",-1860365626),(function (tag__4649__auto__,doc__4650__auto__,stack__4651__auto__,opts__4652__auto__,p__4830){
var vec__4831 = p__4830;
var x = cljs.core.nth.call(null,vec__4831,(0),null);
var y = cljs.core.nth.call(null,vec__4831,(1),null);
var width = cljs.core.nth.call(null,vec__4831,(2),null);
var height = cljs.core.nth.call(null,vec__4831,(3),null);
return doc__4650__auto__.rectAnnotation(x,y,width,height,cljs.core.clj__GT_js.call(null,opts__4652__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"ellipseAnnotation","ellipseAnnotation",-578264907),(function (tag__4649__auto__,doc__4650__auto__,stack__4651__auto__,opts__4652__auto__,p__4832){
var vec__4833 = p__4832;
var x = cljs.core.nth.call(null,vec__4833,(0),null);
var y = cljs.core.nth.call(null,vec__4833,(1),null);
var width = cljs.core.nth.call(null,vec__4833,(2),null);
var height = cljs.core.nth.call(null,vec__4833,(3),null);
return doc__4650__auto__.ellipseAnnotation(x,y,width,height,cljs.core.clj__GT_js.call(null,opts__4652__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"textAnnotation","textAnnotation",-1223996839),(function (tag__4649__auto__,doc__4650__auto__,stack__4651__auto__,opts__4652__auto__,p__4834){
var vec__4835 = p__4834;
var x = cljs.core.nth.call(null,vec__4835,(0),null);
var y = cljs.core.nth.call(null,vec__4835,(1),null);
var width = cljs.core.nth.call(null,vec__4835,(2),null);
var height = cljs.core.nth.call(null,vec__4835,(3),null);
var text = cljs.core.nth.call(null,vec__4835,(4),null);
return doc__4650__auto__.textAnnotation(x,y,width,height,text,cljs.core.clj__GT_js.call(null,opts__4652__auto__));
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"image","image",-58725096),(function (tag,doc,stack,opts,p__4836){
var vec__4837 = p__4836;
var source = cljs.core.nth.call(null,vec__4837,(0),null);
var x = cljs.core.nth.call(null,vec__4837,(1),null);
var y = cljs.core.nth.call(null,vec__4837,(2),null);
var opts__$1 = cljs.core.nth.call(null,vec__4837,(3),null);
return doc.image(source,x,y,cljs.core.clj__GT_js.call(null,opts__$1));
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"text","text",-1790561697),(function (tag,doc,stack,p__4838,p__4839){
var map__4840 = p__4838;
var map__4840__$1 = ((((!((map__4840 == null)))?((((map__4840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4840):map__4840);
var opts = map__4840__$1;
var move_down = cljs.core.get.call(null,map__4840__$1,new cljs.core.Keyword(null,"move-down","move-down",-1149356017));
var vec__4841 = p__4839;
var text = cljs.core.nth.call(null,vec__4841,(0),null);
var x = cljs.core.nth.call(null,vec__4841,(1),null);
var y = cljs.core.nth.call(null,vec__4841,(2),null);
if(cljs.core.truth_(x)){
doc.text(text,x,y,cljs_pdfkit.util.camelize_js.call(null,opts));
} else {
doc.text(text,cljs_pdfkit.util.camelize_js.call(null,opts));
}

if(cljs.core.truth_(move_down)){
return doc.moveDown(move_down);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"clip","clip",830998499),(function (tag,doc,stack,opts,p__4843){
var vec__4844 = p__4843;
var vec__4845 = cljs.core.nth.call(null,vec__4844,(0),null);
var clip_tag = cljs.core.nth.call(null,vec__4845,(0),null);
var clip_opts = cljs.core.nth.call(null,vec__4845,(1),null);
var clip_children = cljs.core.nthnext.call(null,vec__4845,(2));
var children = cljs.core.nthnext.call(null,vec__4844,(1));
cljs_pdfkit.core.draw_tag.call(null,clip_tag,doc,stack,opts,clip_children).clip();

var seq__4846 = cljs.core.seq.call(null,children);
var chunk__4847 = null;
var count__4848 = (0);
var i__4849 = (0);
while(true){
if((i__4849 < count__4848)){
var child = cljs.core._nth.call(null,chunk__4847,i__4849);
cljs_pdfkit.core.handle_tag.call(null,doc,stack,child);

var G__4850 = seq__4846;
var G__4851 = chunk__4847;
var G__4852 = count__4848;
var G__4853 = (i__4849 + (1));
seq__4846 = G__4850;
chunk__4847 = G__4851;
count__4848 = G__4852;
i__4849 = G__4853;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__4846);
if(temp__4425__auto__){
var seq__4846__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4846__$1)){
var c__1033__auto__ = cljs.core.chunk_first.call(null,seq__4846__$1);
var G__4854 = cljs.core.chunk_rest.call(null,seq__4846__$1);
var G__4855 = c__1033__auto__;
var G__4856 = cljs.core.count.call(null,c__1033__auto__);
var G__4857 = (0);
seq__4846 = G__4854;
chunk__4847 = G__4855;
count__4848 = G__4856;
i__4849 = G__4857;
continue;
} else {
var child = cljs.core.first.call(null,seq__4846__$1);
cljs_pdfkit.core.handle_tag.call(null,doc,stack,child);

var G__4858 = cljs.core.next.call(null,seq__4846__$1);
var G__4859 = null;
var G__4860 = (0);
var G__4861 = (0);
seq__4846 = G__4858;
chunk__4847 = G__4859;
count__4848 = G__4860;
i__4849 = G__4861;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"do","do",46310725),(function (tag,doc,stack,opts,p__4862){
var vec__4863 = p__4862;
var child = cljs.core.nth.call(null,vec__4863,(0),null);
return eval(child);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"rect","rect",-108902628),(function (tag,doc,stack,opts,p__4864){
var vec__4865 = p__4864;
var x = cljs.core.nth.call(null,vec__4865,(0),null);
var y = cljs.core.nth.call(null,vec__4865,(1),null);
var width = cljs.core.nth.call(null,vec__4865,(2),null);
var height = cljs.core.nth.call(null,vec__4865,(3),null);
return doc.rect(x,y,width,height);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"rounded-rect","rounded-rect",-1655760547),(function (tag,doc,stack,opts,p__4866){
var vec__4867 = p__4866;
var x = cljs.core.nth.call(null,vec__4867,(0),null);
var y = cljs.core.nth.call(null,vec__4867,(1),null);
var width = cljs.core.nth.call(null,vec__4867,(2),null);
var height = cljs.core.nth.call(null,vec__4867,(3),null);
var corner_radius = cljs.core.nth.call(null,vec__4867,(4),null);
return doc.roundedRect(x,y,width,height,corner_radius);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),(function (tag,doc,stack,opts,p__4868){
var vec__4869 = p__4868;
var x = cljs.core.nth.call(null,vec__4869,(0),null);
var y = cljs.core.nth.call(null,vec__4869,(1),null);
var radius_x = cljs.core.nth.call(null,vec__4869,(2),null);
var radius_y = cljs.core.nth.call(null,vec__4869,(3),null);
return doc.ellipse(x,y,radius_x,(function (){var or__230__auto__ = radius_y;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return radius_x;
}
})());
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"circle","circle",1903212362),(function (tag,doc,stack,opts,p__4870){
var vec__4871 = p__4870;
var x = cljs.core.nth.call(null,vec__4871,(0),null);
var y = cljs.core.nth.call(null,vec__4871,(1),null);
var radius = cljs.core.nth.call(null,vec__4871,(2),null);
return doc.circle(x,y,radius);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"polygon","polygon",837053759),(function (tag,doc,stack,opts,points){
return doc.polygon.apply(doc,cljs.core.clj__GT_js.call(null,points));
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"path","path",-188191168),(function (tag,doc,stack,opts,p__4872){
var vec__4873 = p__4872;
var path = cljs.core.nth.call(null,vec__4873,(0),null);
return doc.path(path);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"style","style",-496642736),(function (tag,doc,stack,opts,children){
var seq__4874 = cljs.core.seq.call(null,children);
var chunk__4875 = null;
var count__4876 = (0);
var i__4877 = (0);
while(true){
if((i__4877 < count__4876)){
var child = cljs.core._nth.call(null,chunk__4875,i__4877);
cljs_pdfkit.core.handle_tag.call(null,doc,stack,child);

var G__4878 = seq__4874;
var G__4879 = chunk__4875;
var G__4880 = count__4876;
var G__4881 = (i__4877 + (1));
seq__4874 = G__4878;
chunk__4875 = G__4879;
count__4876 = G__4880;
i__4877 = G__4881;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__4874);
if(temp__4425__auto__){
var seq__4874__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4874__$1)){
var c__1033__auto__ = cljs.core.chunk_first.call(null,seq__4874__$1);
var G__4882 = cljs.core.chunk_rest.call(null,seq__4874__$1);
var G__4883 = c__1033__auto__;
var G__4884 = cljs.core.count.call(null,c__1033__auto__);
var G__4885 = (0);
seq__4874 = G__4882;
chunk__4875 = G__4883;
count__4876 = G__4884;
i__4877 = G__4885;
continue;
} else {
var child = cljs.core.first.call(null,seq__4874__$1);
cljs_pdfkit.core.handle_tag.call(null,doc,stack,child);

var G__4886 = cljs.core.next.call(null,seq__4874__$1);
var G__4887 = null;
var G__4888 = (0);
var G__4889 = (0);
seq__4874 = G__4886;
chunk__4875 = G__4887;
count__4876 = G__4888;
i__4877 = G__4889;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"line","line",212345235),(function (tag,doc,stack,opts,p__4890){
var vec__4891 = p__4890;
var x1 = cljs.core.nth.call(null,vec__4891,(0),null);
var y1 = cljs.core.nth.call(null,vec__4891,(1),null);
var x2 = cljs.core.nth.call(null,vec__4891,(2),null);
var y2 = cljs.core.nth.call(null,vec__4891,(3),null);
doc.moveTo(x1,y1);

return doc.lineTo(x2,y2);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"quadratic-curve","quadratic-curve",1423731804),(function (tag,doc,stack,opts,p__4892){
var vec__4893 = p__4892;
var x1 = cljs.core.nth.call(null,vec__4893,(0),null);
var y1 = cljs.core.nth.call(null,vec__4893,(1),null);
var x2 = cljs.core.nth.call(null,vec__4893,(2),null);
var y2 = cljs.core.nth.call(null,vec__4893,(3),null);
var x3 = cljs.core.nth.call(null,vec__4893,(4),null);
var y3 = cljs.core.nth.call(null,vec__4893,(5),null);
doc.moveTo(x1,y1);

return doc.quadraticCurveTo(x2,y2,x3,y3);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"bezier-curve","bezier-curve",-2032784108),(function (tag,doc,stack,opts,p__4894){
var vec__4895 = p__4894;
var x1 = cljs.core.nth.call(null,vec__4895,(0),null);
var y1 = cljs.core.nth.call(null,vec__4895,(1),null);
var x2 = cljs.core.nth.call(null,vec__4895,(2),null);
var y2 = cljs.core.nth.call(null,vec__4895,(3),null);
var x3 = cljs.core.nth.call(null,vec__4895,(4),null);
var y3 = cljs.core.nth.call(null,vec__4895,(5),null);
var x4 = cljs.core.nth.call(null,vec__4895,(6),null);
var y4 = cljs.core.nth.call(null,vec__4895,(7),null);
doc.moveTo(x1,y1);

return doc.bezierCurveTo(x2,y2,x3,y3,x4,y4);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tag){
throw (new Error([cljs.core.str(tag),cljs.core.str(" tag not supported")].join('')));
}));

//# sourceMappingURL=core.js.map