!function(){function e(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function t(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function n(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(r){u(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r,t,n,a,o,u){try{var c=e[o](u),i=c.value}catch(l){return void t(l)}c.done?r(i):Promise.resolve(i).then(n,a)}function o(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var u=e.apply(r,t);function c(e){a(u,n,o,c,i,"next",e)}function i(e){a(u,n,o,c,i,"throw",e)}c(void 0)}))}}function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var c=document.createElement("style");c.innerHTML=".vben-layout-breadcrumb{display:flex;padding:0 8px;align-items:center}.vben-layout-breadcrumb .ant-breadcrumb-link .anticon{margin-right:4px;margin-bottom:2px}.vben-layout-breadcrumb--light .ant-breadcrumb-link{color:#999}.vben-layout-breadcrumb--light .ant-breadcrumb-link a{color:rgba(0,0,0,.65)}.vben-layout-breadcrumb--light .ant-breadcrumb-link a:hover{color:#0960bd}.vben-layout-breadcrumb--light .ant-breadcrumb-separator{color:#999}.vben-layout-breadcrumb--dark .ant-breadcrumb-link{color:rgba(255,255,255,.6)}.vben-layout-breadcrumb--dark .ant-breadcrumb-link a{color:rgba(255,255,255,.8)}.vben-layout-breadcrumb--dark .ant-breadcrumb-link a:hover{color:#fff}.vben-layout-breadcrumb--dark .ant-breadcrumb-separator,.vben-layout-breadcrumb--dark .anticon{color:rgba(255,255,255,.8)}\n",document.head.appendChild(c),System.register(["./vendor-legacy.d8193a32.js","./index-legacy.f25f109a7.js","./index-legacy.5f587d09.js"],(function(r){"use strict";var t,a,c,i,l,b,d,f,m,s,v,p,h,y,g,k,O,j,w,x,P,C,I,A,S,B,R;return{setters:[function(e){t=e.A,a=e.cj,c=e.r,i=e.a,l=e.am,b=e.a0,d=e.B,f=e.D,m=e.w,s=e.a5,v=e.a1,p=e.ac,h=e.J,y=e.ad,g=e.K},function(){},function(e){k=e._,O=e.I,j=e.p,w=e.a,x=e.O,P=e.j,C=e.b,I=e.R,A=e.K,S=e.r,B=e.aP,R=e.i}],execute:function(){var D=t({name:"LayoutBreadcrumb",components:u({Icon:O},a.name,a),props:{theme:j.oneOf(["dark","light"])},setup:function(){var r=c([]),t=i().currentRoute,a=w("layout-breadcrumb").prefixCls,u=x().getShowBreadCrumbIcon,b=P(),d=C().t;function f(r,t){var a=[];return r.forEach((function(r){var o,u;t.includes(r.path)&&a.push(n(n({},r),{},{name:(null===(u=r.meta)||void 0===u?void 0:u.title)||r.name}));null!==(o=r.children)&&void 0!==o&&o.length&&a.push.apply(a,e(f(r.children,t)))})),a}return l(o(regeneratorRuntime.mark((function e(){var a,o,u,c,i,l,b,d,m,s,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.value.name!==I){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,A();case 4:if(u=e.sent,c=t.value.matched,i=null==c?void 0:c[c.length-1],l=t.value.path,i&&null!=i&&null!==(a=i.meta)&&void 0!==a&&a.currentActiveMenu&&(l=i.meta.currentActiveMenu),b=S(u,l),d=u.filter((function(e){return e.path===b[0]})),(m=f(d,b))&&0!==m.length){e.next=14;break}return e.abrupt("return");case 14:s=B(m,(function(e){var r=e.meta,t=e.name;if(!r)return!!t;var n=r.title,a=r.hideBreadcrumb;return!(!n||a)})).filter((function(e){var r;return!(null!==(r=e.meta)&&void 0!==r&&r.hideBreadcrumb)})),null!==(o=t.value.meta)&&void 0!==o&&o.currentActiveMenu&&s.push(n(n({},t.value),{},{name:(null===(v=t.value.meta)||void 0===v?void 0:v.title)||t.value.name})),r.value=s;case 17:case"end":return e.stop()}}),e)})))),{routes:r,t:d,prefixCls:a,getIcon:function(e){var r;return e.icon||(null===(r=e.meta)||void 0===r?void 0:r.icon)},getShowBreadCrumbIcon:u,handleClick:function(e,r,t){null==t||t.preventDefault();var n=e.children,a=e.redirect,o=e.meta;if(null==n||!n.length||a){if(null==o||!o.carryParam)if(a&&R(a))b(a);else{var u="";if(1===r.length)u=r[0];else{var c=r.slice(1).pop()||"";u="".concat(c)}u=/^\//.test(u)?u:"/".concat(u),b(u)}}else null==t||t.stopPropagation()},hasRedirect:function(e,r){return e.indexOf(r)!==e.length-1}}}}),E={key:1};r("default",k(D,[["render",function(e,r,t,n,a,o){var u=b("Icon"),c=b("router-link"),i=b("a-breadcrumb");return d(),f("div",{class:g([e.prefixCls,"".concat(e.prefixCls,"--").concat(e.theme)])},[m(i,{routes:e.routes},{itemRender:s((function(r){var t=r.route,n=r.routes,a=r.paths;return[e.getShowBreadCrumbIcon&&e.getIcon(t)?(d(),v(u,{key:0,icon:e.getIcon(t)},null,8,["icon"])):p("",!0),e.hasRedirect(n,t)?(d(),v(c,{key:2,to:"",onClick:function(r){return e.handleClick(t,a,r)}},{default:s((function(){return[y(h(e.t(t.name||t.meta.title)),1)]})),_:2},1032,["onClick"])):(d(),f("span",E,h(e.t(t.name||t.meta.title)),1))]})),_:1},8,["routes"])],2)}]]))}}}))}();
