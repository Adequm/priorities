(function(t){function e(e){for(var n,o,a=e[0],c=e[1],u=e[2],d=0,h=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(h.length)h.shift()();return s.push.apply(s,u||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,a=1;a<i.length;a++){var c=i[a];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/priorities/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"1c76":function(t,e,i){"use strict";i("21de")},"21de":function(t,e,i){},"499b":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",style:{height:t.innerHeight+"px",maxWidth:t.innerWidth<768?"100vw":t.maxWidth+"px"}},[t.isPageLoad?i("router-view",{attrs:{themeIcon:t.themeMain.icon,minisLang:t.minisLang,maxWidth:t.maxWidth,bodyWidth:t.innerWidth},on:{switchTheme:t.switchTheme,switchLang:t.switchLang,changeMaxWidth:t.changeContainerMaxWidth}}):i("Icon",{staticClass:"loader",attrs:{type:"loader",rotate:""}})],1)},s=[],o=i("1da1"),a=i("5530"),c=i("3835"),u=(i("96cf"),i("07ac"),i("d3b7"),i("159b"),i("4fad"),i("2f62")),l={name:"App",data:function(){return{isPageLoad:!1}},watch:{translateList:{deep:!0,immediate:!0,handler:function(t){Object.values(t).length&&(document.title=this.translate("title"))}},themeMain:{deep:!0,handler:function(t){if(!t)return this.switchTheme("main");Object.entries(t.colors).forEach((function(t){var e=Object(c["a"])(t,2),i=e[0],n=e[1];document.body.style.setProperty("--".concat(i),n)}))}},themeSpecial:{deep:!0,handler:function(t){if(!t)return this.switchTheme("special");document.body.style.setProperty("--special-color",t.normal)}}},computed:Object(a["a"])(Object(a["a"])({},Object(u["b"])(["translate","translateList","themeMain","themeSpecialName","themeSpecial"])),Object(u["d"])({minisTheme:function(t){return t.minis.minisTheme},minisLang:function(t){return t.minis.minisLang}})),methods:Object(a["a"])(Object(a["a"])({},Object(u["c"])({switchTheme:function(t,e){return t("switchTheme",e)},switchLang:function(t,e){return t("switchLang",e)},initMinis:function(t,e){return t("initMinis",e)}})),{},{getMinisOptions:function(){var t=this,e="https://adequm.github.io/minis";return new Promise(function(){var i=Object(o["a"])(regeneratorRuntime.mark((function i(n){var r,s,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,fetch("".concat(e,"/translate.json")).then((function(t){return t.json()}));case 3:return r=i.sent,i.next=6,fetch("".concat(e,"/minisList.json")).then((function(t){return t.json()}));case 6:return s=i.sent,i.next=9,fetch("".concat(e,"/themesList.json")).then((function(t){return t.json()}));case 9:a=i.sent,Object.entries(a.default||[]).forEach((function(t){var e=Object(c["a"])(t,2),i=e[0],n=e[1];document.body.style.setProperty("--".concat(i),n)})),n({translate:r,minisList:s,themesList:a}),i.next=17;break;case 14:i.prev=14,i.t0=i["catch"](0),setTimeout(Object(o["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getMinisOptions();case 2:i=e.sent,n(i);case 4:case"end":return e.stop()}}),e)}))),2e3);case 17:case"end":return i.stop()}}),i,null,[[0,14]])})));return function(t){return i.apply(this,arguments)}}())}}),created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getMinisOptions();case 2:i=e.sent,t.initMinis(i),t.isPageLoad=!0;case 5:case"end":return e.stop()}}),e)})))()}},d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{class:{rotate:t.rotate},attrs:{width:t.size||t.width,height:t.size||t.height,fill:"none",stroke:t.color,"stroke-width":t.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(e){return t.$emit("click",e)}}},[i("use",{attrs:{href:"./feather-sprite.svg#"+t.type}})])},h=[],p=(i("a9e3"),{name:"Icon",props:{type:String,size:Number,width:{type:Number,default:24},height:{type:Number,default:24},strokeWidth:{type:Number,default:2},rotate:{type:Boolean,default:!1},color:{type:String,default:"currentColor"}}}),m=p,f=(i("1c76"),i("2877")),v=Object(f["a"])(m,d,h,!1,null,"13f5bd86",null),g=v.exports,y={components:{Icon:g},mixins:[l],data:function(){return{console:console,innerHeight:null,innerWidth:null,maxWidth:300}},methods:{changeContainerMaxWidth:function(t){this.maxWidth=Math.min(600,Math.max(t,300))}},beforeMount:function(){var t=this;this.innerHeight=innerHeight,this.innerWidth=innerWidth,window.addEventListener("resize",(function(e){t.innerHeight=innerHeight,t.innerWidth=innerWidth}))}},w=y,b=(i("5c0b"),Object(f["a"])(w,r,s,!1,null,null,null)),x=b.exports,L=i("9483");Object(L["a"])("".concat("/priorities/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});i("99af"),i("fb6a"),i("ac1f"),i("1276");var k=i("0e44"),S=i("0759"),_=i.n(S),W=i("8468"),j=(i("b64b"),{state:function(){return{minisLang:"ru",minisThemeMain:null,minisThemeSpecial:null,themesList:{},translate:{},minisList:{}}}});j.getters={translateList:function(t){var e,i=t.translate,n=t.minisLang;return(null===i||void 0===i||null===(e=i[n])||void 0===e?void 0:e.priorities)||{}},translate:function(t,e){Object(W["a"])(t);var i=e.translateList;return function(t){return(null===i||void 0===i?void 0:i[t])||"Err"}},themeMain:function(t){var e,i,n=t.themesList,r=t.minisThemeMain,s=null===n||void 0===n||null===(e=n.main)||void 0===e?void 0:e[r];return s?n.main[r]:null===n||void 0===n||null===(i=n.main)||void 0===i?void 0:i.dark},themeSpecialName:function(t){var e,i,n,r=t.themesList,s=t.minisThemeSpecial,o=null===r||void 0===r||null===(e=r.special)||void 0===e||null===(i=e.colors)||void 0===i?void 0:i[s];return o?s:null===r||void 0===r||null===(n=r.special)||void 0===n?void 0:n.default},themeSpecial:function(t,e){var i,n,r=t.themesList,s=e.themeSpecialName;return null===r||void 0===r||null===(i=r.special)||void 0===i||null===(n=i.colors)||void 0===n?void 0:n[s]}},j.mutations={switchTheme:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"main",i="main"==e?"minisThemeMain":"minisThemeSpecial",r="main"==e?t.themesList.main:t.themesList.special.colors,s=Object.keys(r),o=s.indexOf(t[i]),a=(o+1)%s.length;n["default"].set(t,i,s[a])},switchLang:function(t){var e=Object.keys(t.translate),i=e.indexOf(t.minisLang),r=(i+1)%e.length;n["default"].set(t,"minisLang",e[r])},initMinis:function(t,e){var i=e.translate,r=e.minisList,s=e.themesList;n["default"].set(t,"minisList",r),n["default"].set(t,"translate",i),n["default"].set(t,"themesList",s)}};var O=j,P={};n["default"].use(u["a"]),P.state=function(){return{history:[]}},P.mutations={addToHistory:function(t,e){var i=t.history.slice(-9).concat([e]);n["default"].set(t,"history",i)},clearHistory:function(t){n["default"].set(t,"history",[])}};var M=["minis.minisThemeMain","minis.minisThemeSpecial","minis.minisLang"],C=["history"],R="minis-".concat(location.pathname.split("/")[1]);P.modules={minis:O},P.plugins=[_()({predicate:function(){return[].concat(M,C)}}),Object(k["a"])({paths:M,key:"minis"}),Object(k["a"])({paths:C,key:R})];var T=new u["a"].Store(P),E=i("8c4f"),I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Priorities",{attrs:{themeIcon:t.themeIcon,minisLang:t.minisLang,maxWidth:t.maxWidth,bodyWidth:t.bodyWidth},on:{switchTheme:function(e){return t.$emit("switchTheme",e)},switchLang:function(e){return t.$emit("switchLang",e)},changeMaxWidth:function(e){return t.$emit("changeMaxWidth",e)}}})},$=[],z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{ref:"priorities",staticClass:"priorities"},[i("div",{staticClass:"settings",class:{isClosedSettings:t.isClosedSettings}},[i("Icon",{attrs:{type:"settings"},on:{click:function(e){t.isClosedSettings=!t.isClosedSettings}}}),i("Icon",{attrs:{type:t.themeIcon},on:{click:function(e){return t.$emit("switchTheme","main")}}}),i("Icon",{attrs:{type:"heart"},on:{click:function(e){return t.$emit("switchTheme","special")}}}),i("Icon",{attrs:{type:"globe"},on:{click:function(e){return t.$emit("switchLang")}}})],1),i("div",{staticClass:"priorities__buttons"},[i("div",{staticClass:"priorities__button",on:{click:function(e){t.swiperPage=!t.swiperPage}}},[i("Icon",{attrs:{type:t.swiperPage?"chevrons-left":"chevrons-right"}})],1),i("div",{staticClass:"priorities__button"},[i("Icon",{attrs:{type:"clock"}})],1),i("div",{staticClass:"priorities__button priorities__button-special"},[i("Icon",{attrs:{type:"send"}})],1)]),i("div",{staticClass:"priorities__list"},[i("div",{staticClass:"content__wrapper",style:{height:t.textareaHeight}},[i("form",{style:{height:t.textareaHeight},attrs:{defaultfocus:"textarea"},on:{submit:function(e){return e.preventDefault(),t.addPriority.apply(null,arguments)}}},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"textarea",attrs:{id:"textarea",rows:t.textareaRows,placeholder:t.swiperPage?"Ваш вопрос":"Ваш приоритет"},domProps:{value:t.value},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.textareaKeyDownEnter.apply(null,arguments)},input:function(e){e.target.composing||(t.value=e.target.value)}}}),t._v(" "),i("button",{attrs:{type:"submit"}},[i("Icon",{attrs:{type:"plus"}})],1)])]),i("div",{staticClass:"abccba",class:{next:t.swiperPage}},[i("div",{staticClass:"wrapper__priorities"},[i("Swiper",{ref:"swiper",on:{activeIndexChange:function(e){t.swiperPage=e.activeIndex}}},[i("SwiperSlide",[i("QuestionsList",{attrs:{questions:t.questions},on:{remove:function(e){return t.questions.splice(e,1)},edit:function(e){return t.editPriority(t.questions,e)}}})],1),i("SwiperSlide",[i("PrioritiesList",{attrs:{priorities:t.priorities},on:{remove:function(e){return t.priorities.splice(e,1)},edit:function(e){return t.editPriority(t.priorities,e)}}})],1)],1)],1)])]),i("div",{staticClass:"resize_button",on:{mousedown:function(e){return e.preventDefault(),t.startResize.apply(null,arguments)}}})]),i("a",{staticClass:"minis",attrs:{href:"https://adequm.github.io/minis",target:"_blank"}},[t._v("Minis")])])},N=[],q=(i("d81d"),i("a434"),i("5319"),i("498a"),i("d7cf")),H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper__priorities_scroll",class:{hide:t.hide}},[t.priorities.length?t._l(t.priorities,(function(e,n){return i("div",{key:e+"_"+n,staticClass:"priority"},[i("span",{domProps:{textContent:t._s(e)}}),i("div",{staticStyle:{float:"right"}},[i("Icon",{attrs:{type:"edit",strokeWidth:3},on:{click:function(e){return t.$emit("edit",n)}}}),i("Icon",{attrs:{type:"trash",strokeWidth:3},on:{click:function(e){return t.$emit("remove",n)}}})],1)])})):i("span",{staticStyle:{opacity:".5","grid-column":"1/4","user-select":"none"}},[t._v(" Напиши выше свои цели на месяц/два/три (купить кактус, зашить шторы, приготовить бутерброды с икрой) Ответь честно на вопросы и по итогу сверху окажутся более важные цели, ближе к низу будут менее важные ")])],2)},A=[],B={name:"PrioritiesList",components:{Icon:g},props:{priorities:Array,hide:Boolean}},D=B,X=(i("6b58"),Object(f["a"])(D,H,A,!1,null,null,null)),K=X.exports,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper__questions_scroll",class:{hide:t.hide}},[t.questions.length?t._l(t.questions,(function(e,n){return i("div",{key:e+"_"+n,staticClass:"question"},[i("span",{domProps:{textContent:t._s(e)}}),i("div",{staticStyle:{float:"right"}},[i("Icon",{attrs:{type:"edit",strokeWidth:3},on:{click:function(e){return t.$emit("edit",n)}}}),i("Icon",{attrs:{type:"trash",strokeWidth:3},on:{click:function(e){return t.$emit("remove",n)}}})],1)])})):i("span",{staticStyle:{opacity:".5","grid-column":"1/4","user-select":"none"}},[t._v(" Напиши выше свои цели на месяц/два/три (купить кактус, зашить шторы, приготовить бутерброды с икрой) Ответь честно на вопросы и по итогу сверху окажутся более важные цели, ближе к низу будут менее важные ")])],2)},Q=[],G={name:"QuestionsList",components:{Icon:g},props:{questions:Array,hide:Boolean}},J=G,U=(i("d0c7"),Object(f["a"])(J,F,Q,!1,null,null,null)),V=U.exports,Y={name:"Priorities",components:{PrioritiesList:K,QuestionsList:V,Swiper:q["Swiper"],SwiperSlide:q["SwiperSlide"],Icon:g},props:{themeIcon:String,minisLang:String,maxWidth:Number,bodyWidth:Number},data:function(){return{console:console,value:"",priorities:["Что важнее прямо сейчас?"],questions:["Что важнее прямо сейчас?","Что больше хочется?","Чего быстрее добиться?"],swiperPage:0,textareaRows:1,mode:"priorities",isClosedSettings:!0,isResize:!1,startX:null}},watch:{value:"setMaxTextareaRows",maxWidth:["setMaxTextareaRows","setSwiperSize"],bodyWidth:["setMaxTextareaRows","setSwiperSize"],swiperPage:function(t){var e=(this.bodyWidth<768?this.bodyWidth:this.maxWidth)-40,i=document.getElementsByClassName("swiper-wrapper"),n=Object(c["a"])(i,1),r=n[0];r.style.setProperty("transition","transform .25s"),r.style.setProperty("transform","translate3d(-".concat(t*e,"px, 0px, 0px)"))}},computed:{textareaHeight:function(){var t="".concat(this.textareaRows,"em"),e="".concat(.2*this.textareaRows,"em");return"calc(".concat(t," + ").concat(e," + 30px)")}},methods:{setSwiperSize:function(){var t=(this.bodyWidth<768?this.bodyWidth:this.maxWidth)-40,e=document.getElementsByClassName("swiper-wrapper"),i=Object(c["a"])(e,1),n=i[0],r=document.getElementsByClassName("swiper-slide");n.style.setProperty("max-width","".concat(t,"px")),n.style.setProperty("display","grid"),n.style.setProperty("grid-auto-flow","column"),n.style.setProperty("transform","translate3d(-".concat(this.swiperPage*t,"px, 0px, 0px)")),[].forEach.call(r,(function(e){e.style.setProperty("width","".concat(t,"px"))}));var s=this.$refs.swiper.swiperRef.snapGrid;this.$refs.swiper.swiperRef.snapGrid=s.map((function(e,i){return i*t}))},setMaxTextareaRows:function(){var t=this;this.textareaRows=1,this.$nextTick((function(){var e=t.$refs.textarea.scrollHeight,i=Math.ceil((e-28)/19);i>5&&(t.value=t.value.slice(0,-1)),t.textareaRows=Math.min(5,i)}))},editPriority:function(t,e){this.value=t[e],t.splice(e,1),this.$refs.textarea.focus()},setMaxWidth:function(t){var e=this,i=t.pageX;requestAnimationFrame((function(){var t=i-e.startResizeX+e.startResizeWidth;e.$emit("changeMaxWidth",t)}))},startResize:function(t){this.startResizeX=t.pageX,this.startResizeWidth=this.maxWidth,document.addEventListener("mousemove",this.setMaxWidth),document.addEventListener("mouseup",this.stopResize),window.addEventListener("mouseleave",this.stopResize)},stopResize:function(){this.startResizeX=null,this.startResizeWidth=null,document.removeEventListener("mousemove",this.setMaxWidth),document.removeEventListener("mouseup",this.stopResize),window.removeEventListener("mouseleave",this.stopResize)},textareaKeyDownEnter:function(t){t.shiftKey||(t.preventDefault(),this.addPriority())},addPriority:function(t){this.value.replace(/\n/g,"")&&this.priorities.push(this.value.trim()),this.value=""},keydown:function(t){var e=t.key;t.shiftKey;switch(e){case"Escape":this.isClosedSettings=!this.isClosedSettings;break}}},beforeMount:function(){document.addEventListener("keydown",this.keydown)},mounted:function(){this.setSwiperSize()},beforeDestroy:function(){document.removeEventListener("keydown",this.keydown)}},Z=Y,tt=(i("85bd"),Object(f["a"])(Z,z,N,!1,null,null,null)),et=tt.exports,it={name:"Home",components:{Priorities:et},props:{maxWidth:Number,bodyWidth:Number,minisLang:String,themeIcon:String}},nt=it,rt=Object(f["a"])(nt,I,$,!1,null,null,null),st=rt.exports;n["default"].use(E["a"]);var ot=[{path:"/",name:"Home",component:st}],at=new E["a"]({mode:"hash",base:"/priorities/",routes:ot});n["default"].config.productionTip=!1,new n["default"]({store:T,router:at,render:function(t){return t(x)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},"6b58":function(t,e,i){"use strict";i("96a9")},"79bb":function(t,e,i){},"85bd":function(t,e,i){"use strict";i("499b")},"96a9":function(t,e,i){},"9c0c":function(t,e,i){},d0c7:function(t,e,i){"use strict";i("79bb")}});
//# sourceMappingURL=app.04b83803.js.map