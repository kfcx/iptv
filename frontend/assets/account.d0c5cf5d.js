import{n as t}from"./vendor.84d2d683.js";import{aD as c}from"./index.2956b203.js";var a,o;(o=a||(a={})).AccountList="/account",o.AccountCreate="/account",o.AccountUpdate="/account",o.AccountDelete="/account",o.AccountInfo="/account";const e=o=>c.get({url:a.AccountList,params:o,paramsSerializer:c=>t.stringify(c,{indices:!1})}),n=t=>c.post({url:a.AccountCreate,data:t}),u=(t,o)=>c.put({url:`${a.AccountUpdate}/${t}`,data:o}),r=t=>c.delete({url:`${a.AccountDelete}/${t}`}),s=t=>c.get({url:`${a.AccountInfo}/${t}`});export{u as a,e as b,r as d,s as g,n as p};
