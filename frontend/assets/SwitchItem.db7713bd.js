import{A as e,bC as t,k as n,a0 as i,B as a,D as s,H as d,J as o,w as r,a4 as l,K as p}from"./vendor.84d2d683.js";/* empty css                */import{_ as c,a as m,b as h}from"./index.2956b203.js";import{b as f}from"./index.4082a4c5.js";import"./index.005634a4.js";/* empty css               *//* empty css               */import"./index.a4aaac45.js";import"./index.152b55f3.js";import"./useWindowSizeFn.a02e5cb7.js";import"./useContentViewHeight.fee9e617.js";/* empty css               */import"./useSortable.817b3359.js";import"./lock.aaef7da8.js";var u=c(e({name:"SwitchItem",components:{Switch:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=m("setting-switch-item"),{t:i}=h();return{prefixCls:t,t:i,handleChange:function(t){e.event&&f(e.event,t)},getBindValue:n((()=>e.def?{checked:e.def}:{}))}}}),[["render",function(e,t,n,c,m,h){const f=i("Switch");return a(),s("div",{class:p(e.prefixCls)},[d("span",null,o(e.title),1),r(f,l(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}],["__scopeId","data-v-440e72fd"]]);export{u as default};
