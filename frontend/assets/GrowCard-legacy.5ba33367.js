!function(){function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}System.register(["./index-legacy.5f587d09.js","./vendor-legacy.d8193a32.js","./index-legacy.f25f109a6.js","./index-legacy.f25f109a15.js","./index-legacy.f25f109a5.js","./index-legacy.f25f109a2.js"],(function(n){"use strict";var r,a,o,i,l,u,c,f,s,d,p,y,g,v,b,m,x,j,O,w,V,S,P,h,D,E,N;return{setters:[function(t){r=t.ac,a=t._,o=t.w,i=t.I},function(t){l=t.A,u=t.r,c=t.b$,f=t.k,s=t.u,d=t.am,p=t.S,y=t._,g=t.c0,v=t.B,b=t.D,m=t.J,x=t.X,j=t.aa,O=t.ao,w=t.a1,V=t.a5,S=t.w,P=t.ad,h=t.bq,D=t.H,E=t.K,N=t.c1},function(){},function(){},function(){},function(){}],execute:function(){var B={startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator:function(t){return t>=0}},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},F=l({name:"CountTo",props:B,emits:["onStarted","onFinished"],setup:function(n,a){var o=a.emit,i=u(n.startVal),l=u(!1),v=c(i),b=f((function(){return function(t){if(!t&&0!==t)return"";var e=n.decimals,a=n.decimal,o=n.separator,i=n.suffix,l=n.prefix;t=Number(t).toFixed(e);var u=(t+="").split("."),c=u[0],f=u.length>1?a+u[1]:"",s=/(\d+)(\d{3})/;if(o&&!r(o))for(;s.test(c);)c=c.replace(s,"$1"+o+"$2");return l+c+f+i}(s(v))}));function m(){x(),i.value=n.endVal}function x(){v=c(i,function(n){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?t(Object(a),!0).forEach((function(t){e(n,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(a,t))}))}return n}({disabled:l,duration:n.duration,onFinished:function(){return o("onFinished")},onStarted:function(){return o("onStarted")}},n.useEasing?{transition:g[n.transition]}:{}))}return d((function(){i.value=n.startVal})),p([function(){return n.startVal},function(){return n.endVal}],(function(){n.autoplay&&m()})),y((function(){n.autoplay&&m()})),{value:b,start:m,reset:function(){i.value=n.startVal,x()}}}});var _=o(a(F,[["render",function(t,e,n,r,a,o){return v(),b("span",{style:x({color:t.color})},m(t.value),5)}]])),k=[{title:"访问数",icon:"visit-count|svg",value:32511,total:1966211,color:"green",action:"月"},{title:"用户数",icon:"total-sales|svg",value:312,total:10220,color:"blue",action:"月"},{title:"下载数",icon:"download-count|svg",value:752213,total:99521542,color:"orange",action:"周"},{title:"频道数",icon:"transaction|svg",value:92,total:1e3,color:"purple",action:"年"}],$={class:"md:flex"},z={class:"py-4 px-4 flex justify-between"},q={class:"p-2 px-4 flex justify-between"};n("default",l({props:{loading:{type:Boolean}},setup:function(t){return function(e,n){return v(),b("div",$,[(v(!0),b(j,null,O(s(k),(function(e,n){return v(),w(s(N),{key:e.title,size:"small",loading:t.loading,title:e.title,class:E(["md:w-1/4 w-full !md:mt-0 !mt-4",[n+1<4&&"!md:mr-4"]]),canExpan:!1},{extra:V((function(){return[S(s(h),{color:e.color},{default:V((function(){return[P(m(e.action),1)]})),_:2},1032,["color"])]})),default:V((function(){return[D("div",z,[S(s(_),{prefix:"+",startVal:1,endVal:e.value,class:"text-2xl"},null,8,["endVal"]),S(s(i),{icon:e.icon,size:40},null,8,["icon"])]),D("div",q,[D("span",null,"总"+m(e.title),1),S(s(_),{startVal:1,endVal:e.total},null,8,["endVal"])])]})),_:2},1032,["loading","title","class"])})),128))])}}}))}}}))}();
