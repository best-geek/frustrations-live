(function(){"use strict";var t={2188:function(t,e,s){var n=s(9242),o=s(3396);function i(t,e,s,n,i,a){const r=(0,o.up)("HelloWorld");return(0,o.wg)(),(0,o.j4)(r)}var a=s(7139);const r=t=>((0,o.dD)("data-v-db541764"),t=t(),(0,o.Cn)(),t),u={class:"hello"},d=r((()=>(0,o._)("h1",null,"My Frustrations",-1))),l=r((()=>(0,o._)("p",null,[(0,o.Uk)(" Use the frustrations below to document when they really get to you. It's okay to be frustrated, but when you click the button and remind yourself that the problem is being dealt with, or see if you can come up with a solution to the problem. "),(0,o._)("br"),(0,o._)("br"),(0,o._)("b",null,"More importantly,"),(0,o.Uk)(" remember to congratulate yourself when you have completed fixing the problem. ")],-1))),c=r((()=>(0,o._)("p",{style:{"font-size":"smaller",color:"rgb(53, 101, 117)"}},"Frustrations are only kept locally on this device and are never transmitted!",-1))),f={class:"hello",style:{"margin-top":"10px"}},p={style:{display:"inline-flex"}},h={style:{display:"inline-flex"}},v=r((()=>(0,o._)("b",null,"||",-1))),g={key:0,style:{display:"inline-flexbox"}},m={key:0,class:"hello",style:{"margin-top":"15px"}};function y(t,e,s,i,r,y){const _=(0,o.up)("SuccessComponent"),b=(0,o.up)("FustrationComponent");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",u,[(0,o.Wm)(n.uT,{name:"fade"},{default:(0,o.w5)((()=>[this.successMessageBind?((0,o.wg)(),(0,o.j4)(_,{key:0,f_count:this.successCount,display_text:this.successMessageBind},null,8,["f_count","display_text"])):(0,o.kq)("",!0)])),_:1}),d,l,c]),(0,o._)("div",f,[(0,o._)("p",p,"😬 Active Frustrations: "+(0,a.zw)(this.allFustrations),1),(0,o._)("p",h,[(0,o.Uk)(" "),v,(0,o.Uk)("  🛠️ Fixed Frustrations: "+(0,a.zw)(this.fixedFustrations),1)]),(0,o._)("button",{class:"hello",style:{float:"right","margin-top":"5px"},onClick:e[0]||(e[0]=t=>this.addNewFrust())}," ➕ Add a Frustration "),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>this.newFrustInputBind=t),type:"text",placeholder:"Enter frustration",style:{"font-size":"0.8em","border-radius":"7px","margin-top":"5px",padding:"10px","min-width":"30%",float:"right","margin-right":"10px"}},null,512),[[n.nr,this.newFrustInputBind]])]),this.successMessageBind?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",g,[this.loadedFustrations?((0,o.wg)(),(0,o.iD)("div",m,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(Object.entries(t.loadedFustrations),(([t,e])=>((0,o.wg)(),(0,o.j4)(b,{key:t,f_count:e.frustration_count,unique_id:t,display_text:e.display_text,onIncreaseFCount:e=>y.updateFCount(t),onCompletedTask:e=>y.showSuccessMsg(t)},null,8,["f_count","unique_id","display_text","onIncreaseFCount","onCompletedTask"])))),128))])):(0,o.kq)("",!0)]))],64)}const _=t=>((0,o.dD)("data-v-2bc7a906"),t=t(),(0,o.Cn)(),t),b={class:"frustrate",style:{display:"inline-block"}},w={class:"frustrate",style:{"font-size":"1.2em","font-weight":"bolder","word-wrap":"break-word","vertical-align":"text-top"}},F={class:"frustrate",style:{"margin-bottom":"1em"}},x={style:{position:"absolute",bottom:"0","margin-bottom":"10px"}},k=_((()=>(0,o._)("br",null,null,-1)));function C(t,e,s,n,i,r){return(0,o.wg)(),(0,o.iD)("div",b,[(0,o._)("p",w,(0,a.zw)(s.display_text),1),(0,o._)("p",F," Frustrations: "+(0,a.zw)(s.f_count),1),(0,o._)("div",x,[(0,o._)("button",{class:"frustrate angry",onClick:e[0]||(e[0]=e=>t.$emit("increaseFCount"))}," This got to me 😔 "),k,(0,o._)("button",{class:"frustrate happy",style:{"margin-top":"5px"},onClick:e[1]||(e[1]=e=>t.$emit("completedTask"))}," I've fixed this! 👍 ")])])}var S={name:"FrustrationComponent",props:{f_count:{type:Number,default:0,required:!0},display_text:String,unique_id:String},data:()=>({})},I=s(89);const O=(0,I.Z)(S,[["render",C],["__scopeId","data-v-2bc7a906"]]);var j=O;const M=t=>((0,o.dD)("data-v-512d4315"),t=t(),(0,o.Cn)(),t),B={style:{"background-color":"rgb(188, 188, 188)"}},D={id:"confetti-wrapper",style:{"background-color":"rgb(188, 188, 188)",top:"0",left:"0"}},z={class:"message",style:{"z-index":"99999"}},T=M((()=>(0,o._)("h1",{class:"message"},"Congratulations!",-1))),q={style:{"font-weight":"lighter"},class:"message"},N=(0,o.uE)('<div class="confetti" data-v-512d4315></div><div class="confetti" data-v-512d4315></div><div class="confetti" data-v-512d4315></div><div class="confetti" data-v-512d4315></div><div class="confetti" data-v-512d4315></div><div class="confetti" data-v-512d4315></div><div class="confetti" data-v-512d4315></div><div class="confetti" data-v-512d4315></div><div class="confetti" data-v-512d4315></div><div class="confetti" data-v-512d4315></div><div class="confetti" data-v-512d4315></div><div class="confetti" data-v-512d4315></div><div class="confetti" data-v-512d4315></div>',13);function U(t,e,s,n,i,r){return(0,o.wg)(),(0,o.iD)("div",B,[(0,o._)("div",D,[(0,o._)("div",z,[T,(0,o._)("h2",q,"This issue ' "+(0,a.zw)(s.display_text)+" ' frustrated you: "+(0,a.zw)(s.f_count)+" times(s)and now you don't have to worry about it!",1)]),N])])}var H={name:"SuccessComponent",props:{display_text:String,f_count:Number},data:()=>({})};const W=(0,I.Z)(H,[["render",U],["__scopeId","data-v-512d4315"]]);var Z=W,A={name:"HelloWorld",props:{msg:String},data:()=>({successCount:0,successMessageBind:"",newFrustInputBind:"",allFustrations:0,fixedFustrations:0,loadedFustrations:{blah:{display_text:"blah blah blah",frustration_count:10,created_epoch:1e4}}}),components:{FustrationComponent:j,SuccessComponent:Z},created:function(){this.loadStorage()},methods:{updateFCount:function(t){this.loadedFustrations[t]["frustration_count"]+=1;var e=0;for(var s in this.loadedFustrations){var n=this.loadedFustrations[s];e+=n["frustration_count"]}this.allFustrations=e,this.updateStorage()},showSuccessMsg:async function(t){this.successCount=this.loadedFustrations[t]["frustration_count"],this.successMessageBind=this.loadedFustrations[t]["display_text"],await new Promise((t=>setTimeout(t,4e3))),this.fixedFustrations+=this.successCount,localStorage.setItem("fixedFustrations",this.fixedFustrations.toString()),this.successCount=0,this.successMessageBind="",delete this.loadedFustrations[t],this.updateStorage()},addNewFrust:function(){if(console.log("adding item"),!this.newFrustInputBind)return;let t=Math.floor(Math.random()*Date.now()),e=t.toString(),s={display_text:this.newFrustInputBind,frustration_count:0,created_epoch:Date.now()};console.log(s),this.loadedFustrations[e]=new Object,this.loadedFustrations[e]=s,this.newFrustInputBind="",this.updateStorage(),console.log(Object(this.loadedFustrations))},updateStorage(){localStorage.setItem("FustrateList",JSON.stringify(this.loadedFustrations)),this.loadStorage()},loadStorage(){for(var t in this.loadedFustrations=JSON.parse(localStorage.getItem("FustrateList")),this.fixedFustrations=Number(localStorage.getItem("fixedFustrations"))||0,null===this.loadedFustrations&&(this.loadedFustrations=new Object),this.allFustrations=0,this.loadedFustrations){var e=this.loadedFustrations[t];this.allFustrations+=e["frustration_count"]}}}};const E=(0,I.Z)(A,[["render",y],["__scopeId","data-v-db541764"]]);var P=E,J={name:"App",components:{HelloWorld:P}};const L=(0,I.Z)(J,[["render",i]]);var Y=L;(0,n.ri)(Y).mount("#app")}},e={};function s(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,n,o,i){if(!n){var a=1/0;for(l=0;l<t.length;l++){n=t[l][0],o=t[l][1],i=t[l][2];for(var r=!0,u=0;u<n.length;u++)(!1&i||a>=i)&&Object.keys(s.O).every((function(t){return s.O[t](n[u])}))?n.splice(u--,1):(r=!1,i<a&&(a=i));if(r){t.splice(l--,1);var d=o();void 0!==d&&(e=d)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[n,o,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,i,a=n[0],r=n[1],u=n[2],d=0;if(a.some((function(e){return 0!==t[e]}))){for(o in r)s.o(r,o)&&(s.m[o]=r[o]);if(u)var l=u(s)}for(e&&e(n);d<a.length;d++)i=a[d],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(l)},n=self["webpackChunkmy_fusrations"]=self["webpackChunkmy_fusrations"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(2188)}));n=s.O(n)})();
//# sourceMappingURL=app.eb7e61a4.js.map