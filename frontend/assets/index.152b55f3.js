import{A as e,r as s,k as a,u as n,B as t,D as i,w as r,a5 as o,H as f,K as l,X as u,aQ as c}from"./vendor.84d2d683.js";import{u as m}from"./useWindowSizeFn.a02e5cb7.js";import{p as d,a as p,_ as g}from"./index.2956b203.js";import{a as h}from"./useContentViewHeight.fee9e617.js";const v=["src"];var w=g(e({props:{frameSrc:d.string.def("")},setup(e){const d=s(!0),g=s(50),w=s(window.innerHeight),H=s(),{headerHeightRef:_}=h(),{prefixCls:x}=p("iframe-page");m(y,150,{immediate:!0});const j=a((()=>({height:`${n(w)}px`})));function y(){const e=n(H);if(!e)return;const s=_.value;g.value=s,w.value=window.innerHeight-s;const a=document.documentElement.clientHeight-s;e.style.height=`${a}px`}function b(){d.value=!1,y()}return(s,a)=>(t(),i("div",{class:l(n(x)),style:u(n(j))},[r(n(c),{spinning:d.value,size:"large",style:u(n(j))},{default:o((()=>[f("iframe",{src:e.frameSrc,class:l(`${n(x)}__main`),ref:(e,s)=>{s.frameRef=e,H.value=e},onLoad:b},null,42,v)])),_:1},8,["spinning","style"])],6))}}),[["__scopeId","data-v-179381bf"]]);export{w as default};
