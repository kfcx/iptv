!function(){function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function t(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?e(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./useECharts-legacy.acff3b31.js","./props-legacy.bd9f90d2.js","./vendor-legacy.d8193a32.js","./index-legacy.5f587d09.js","./echarts-legacy.6399330f.js"],(function(e){"use strict";var r,n,i,o,c,u,a,s;return{setters:[function(e){r=e.u},function(e){n=e.b},function(e){i=e.A,o=e.r,c=e._,u=e.B,a=e.D,s=e.X},function(){},function(){}],execute:function(){e("default",i({props:t({},n),setup:function(e){var t=o(null),n=r(t).setOptions;return c((function(){n({tooltip:{trigger:"axis",axisPointer:{lineStyle:{width:1,color:"#019680"}}},grid:{left:"1%",right:"1%",top:"2  %",bottom:0,containLabel:!0},xAxis:{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},yAxis:{type:"value",max:6e4,splitNumber:4},series:[{data:[37234,42345,46567,49876,38765,41234,45678,48987,35678,42345,47890,49899,51102],type:"bar",barMaxWidth:80}]})})),function(e,r){return u(),a("div",{ref:function(e,r){r.chartRef=e,t.value=e},style:s({height:e.height,width:e.width})},null,4)}}}))}}}))}();
