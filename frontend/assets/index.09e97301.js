import{P as e}from"./index.7a603658.js";import{B as s,u as r}from"./useForm.07071468.js";import"./FormAction.9732afc1.js";import{_ as t,ah as o}from"./index.2956b203.js";import{A as i,a0 as a,B as n,a1 as d,a5 as l,H as m,w as p,ad as c}from"./vendor.84d2d683.js";/* empty css               *//* empty css               */import"./useWindowSizeFn.a02e5cb7.js";import"./useContentViewHeight.fee9e617.js";import"./useFormItem.75e32247.js";/* empty css               */import"./index.a66a0969.js";/* empty css               *//* empty css              *//* empty css               *//* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./download.eecfd47d.js";import"./index.8bcb94a9.js";import"./index.1350911d.js";const u=[{field:"passwordOld",label:"当前密码",component:"InputPassword",required:!0},{field:"passwordNew",label:"新密码",component:"StrengthMeter",componentProps:{placeholder:"新密码"},rules:[{required:!0,message:"请输入新密码"}]},{field:"confirmPassword",label:"确认密码",component:"InputPassword",dynamicRules:({values:e})=>[{required:!0,validator:(s,r)=>r?r!==e.passwordNew?Promise.reject("两次输入的密码不一致!"):Promise.resolve():Promise.reject("密码不能为空")}]}],j=i({name:"ChangePassword",components:{AButton:o,BasicForm:s,PageWrapper:e},setup(){const[e,{validate:s,resetFields:t}]=r({size:"large",baseColProps:{span:24},labelWidth:100,showActionButtonGroup:!1,schemas:u});return{register:e,resetFields:t,handleSubmit:function(){return e=this,r=null,t=function*(){try{const e=yield s(),{passwordOld:r,passwordNew:t}=e}catch(e){}},new Promise(((s,o)=>{var i=e=>{try{n(t.next(e))}catch(s){o(s)}},a=e=>{try{n(t.throw(e))}catch(s){o(s)}},n=e=>e.done?s(e.value):Promise.resolve(e.value).then(i,a);n((t=t.apply(e,r)).next())}));var e,r,t}}}}),f={class:"py-8 bg-white flex flex-col justify-center items-center"},x={class:"flex justify-center"},w=c(" 重置 "),h=c(" 确认 ");var P=t(j,[["render",function(e,s,r,t,o,i){const c=a("BasicForm"),u=a("a-button"),j=a("PageWrapper");return n(),d(j,{title:"修改当前用户密码",content:"修改成功后会自动退出当前登录！"},{default:l((()=>[m("div",f,[p(c,{onRegister:e.register},null,8,["onRegister"]),m("div",x,[p(u,{onClick:e.resetFields},{default:l((()=>[w])),_:1},8,["onClick"]),p(u,{class:"!ml-4",type:"primary",onClick:e.handleSubmit},{default:l((()=>[h])),_:1},8,["onClick"])])])])),_:1})}]]);export{P as default};
