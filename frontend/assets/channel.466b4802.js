import{aD as t}from"./index.2956b203.js";var n,a;(a=n||(n={})).AccountList="/channel",a.HotChannels="/channel/hot",a.recommendChannels="/channel/recommend";const e=a=>t.get({url:`${n.AccountList}/${a}`}),s=()=>t.get({url:`${n.HotChannels}`}),c=()=>t.get({url:`${n.recommendChannels}`}),o=a=>t.delete({url:`${n.AccountList}/${a}`}),r=a=>t.post({url:n.AccountList,data:a}),l=(a,e)=>t.put({url:`${n.AccountList}/${a}`,data:e}),u=a=>t.get({url:n.AccountList,params:a});export{r as a,s as b,c,o as d,u as g,l as p,e as r};
