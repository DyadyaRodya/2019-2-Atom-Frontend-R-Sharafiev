(this["webpackJsonpatom-mail-2019-uncle-rodya"]=this["webpackJsonpatom-mail-2019-uncle-rodya"]||[]).push([[0],{1:function(e,t,a){e.exports={app_header:"appHeaderStyles_app_header__eMAY6",chat_header:"appHeaderStyles_chat_header__1e3SL",profile_header:"appHeaderStyles_profile_header__3rIWS",button:"appHeaderStyles_button__ymuMM",button_menu:"appHeaderStyles_button_menu__33-kD",button_backward:"appHeaderStyles_button_backward__1Mi_w",button_search_chat:"appHeaderStyles_button_search_chat__87VvR",button_settings:"appHeaderStyles_button_settings__K0zkx","button-hover-animation":"appHeaderStyles_button-hover-animation__22oEy",button_img:"appHeaderStyles_button_img__26JxL",header:"appHeaderStyles_header__1qT0V",companion:"appHeaderStyles_companion__2Jxw3",companion_image:"appHeaderStyles_companion_image__1sghw",companion_info:"appHeaderStyles_companion_info__2ZhJh",companion_name:"appHeaderStyles_companion_name__o3cCV",companion_status:"appHeaderStyles_companion_status__3loeI",companion_logo:"appHeaderStyles_companion_logo__aDG9g",button_tick:"appHeaderStyles_button_tick__24kYF"}},15:function(e,t,a){e.exports={message_form:"messageFormStyles_message_form__1HmG8","open-chat-animation":"messageFormStyles_open-chat-animation__1rqel",form_chat:"messageFormStyles_form_chat__13ON3",chat_container:"messageFormStyles_chat_container__2Ua4D"}},19:function(e,t,a){e.exports={chats_list:"chatListStyles_chats_list__pKNOu",create_chat:"chatListStyles_create_chat__3vyTY",pulse:"chatListStyles_pulse__135GO"}},22:function(e,t,a){},3:function(e,t,a){e.exports={profile_form:"profileStyles_profile_form__9dyjf",profile_img_preview:"profileStyles_profile_img_preview__Bhdsi",profile_input_div:"profileStyles_profile_input_div__PqQ1w",profile_input:"profileStyles_profile_input__36cDR",field_info:"profileStyles_field_info__2KXxn",fullname_input_div:"profileStyles_fullname_input_div__1694W",username_input_div:"profileStyles_username_input_div__1ELtx",biography_input_div:"profileStyles_biography_input_div__1a_NI",profile_img:"profileStyles_profile_img__2tbov"}},33:function(e,t,a){e.exports=a(44)},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(24);a(22),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(25),c=a(26),l=a(31),i=a(27),m=a(32),u=a(10),_=a(11),p=a(13),f=a(5),d=a.n(f),g=["","",""];function v(e){return r.a.createElement(u.b,{to:"/chat_id=".concat(e.id),className:d.a.chat_elem},r.a.createElement("div",{className:d.a.companion_img}),r.a.createElement("div",{className:d.a.text_info},r.a.createElement("div",{className:d.a.message_preview},r.a.createElement("span",{className:d.a.companion_name},e.companionName)),r.a.createElement("div",{className:d.a.lastmessage_info},r.a.createElement("p",{className:d.a.lastmessage_text},e.lastmessageText),r.a.createElement("span",{className:d.a.lastmessage_time},e.lastmessageTime),r.a.createElement("div",{className:d.a.indicator},g[e.indicator]))))}g[0]=r.a.createElement("div",{className:d.a.sending}),g[1]=r.a.createElement("div",{className:d.a.sent}),g[2]=r.a.createElement("div",{className:d.a.read});var y=a(19),h=a.n(y),b="chatsArray";function E(e){var t=0,a=Object(n.useState)(function(){var e=JSON.parse(localStorage.getItem(b));if(null!==e){for(var a=[];t<e.length;t+=1){var n=i(e[t]);a.push(r.a.createElement(v,{key:n.key,id:n.id,indicator:n.indicator,lastmessageText:n.lastmessageText,lastmessageTime:n.lastmessageTime,companionName:n.companionName,onClickFunc:n.onClickFunc}))}return a}return[]}()),s=Object(p.a)(a,2),o=s[0],c=s[1],l=r.a.createRef();function i(e){var a="",n="",r=0;if(0!==e.messages.length){r=1;var s=e.messages[e.messages.length-1];a=s.messageContent,n=new Date(s.messageTime).toTimeString().slice(0,5)}return{key:t,id:t,indicator:r,lastmessageText:a,lastmessageTime:n,companionName:e.companion}}return r.a.createElement("div",{ref:l,className:h.a.chats_list},o,r.a.createElement("button",{type:"button",className:h.a.create_chat,onClick:function(){var e={id:t,companion:"Name",messages:[]};!function(e){var t=i(e);c(o.concat(r.a.createElement(v,{key:t.key,id:t.id,indicator:t.indicator,lastmessageText:t.lastmessageText,lastmessageTime:t.lastmessageTime,companionName:t.companionName})))}(e),function(e){var t=JSON.parse(localStorage.getItem(b));null===t&&(t=[]);t.push(e),localStorage.setItem(b,JSON.stringify(t))}(e),t+=1,function(){var e=l.current;setTimeout((function(){e.scrollTop=9999}),0)}()}}))}var S=a(20),O=a.n(S),N=a(30);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var j=r.a.createElement("path",{d:"M140.25,395.25C63.75,395.25,0,331.5,0,255s63.75-140.25,140.25-140.25H408c56.1,0,102,45.9,102,102 c0,56.1-45.9,102-102,102H191.25c-35.7,0-63.75-28.05-63.75-63.75s28.05-63.75,63.75-63.75H382.5v38.25H191.25 c-15.3,0-25.5,10.2-25.5,25.5s10.2,25.5,25.5,25.5H408c35.7,0,63.75-28.05,63.75-63.75S443.7,153,408,153H140.25 c-56.1,0-102,45.9-102,102c0,56.1,45.9,102,102,102H382.5v38.25H140.25z"}),k=function(e){var t=e.svgRef,a=e.title,n=x(e,["svgRef","title"]);return r.a.createElement("svg",w({x:"0px",y:"0px",width:"5vh",height:"5vh",viewBox:"0 0 510 510",ref:t},n),a?r.a.createElement("title",null,a):null,j)},I=r.a.forwardRef((function(e,t){return r.a.createElement(k,w({svgRef:t},e))}));a.p;function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var T=r.a.createElement("polygon",{points:"0.213,32 0,181.333 320,224 0,266.667 0.213,416 448,224"}),H=function(e){var t=e.svgRef,a=e.title,n=C(e,["svgRef","title"]);return r.a.createElement("svg",R({x:"0px",y:"0px",width:"5vh",height:"5vh",viewBox:"0 0 448 448",ref:t},n),a?r.a.createElement("title",null,a):null,T)},L=r.a.forwardRef((function(e,t){return r.a.createElement(H,R({svgRef:t},e))}));a.p;function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var B=r.a.createElement("path",{d:"M237.541,328.897c25.128,0,46.632-8.946,64.523-26.83c17.888-17.884,26.833-39.399,26.833-64.525V91.365 c0-25.126-8.938-46.632-26.833-64.525C284.173,8.951,262.669,0,237.541,0c-25.125,0-46.632,8.951-64.524,26.84 c-17.893,17.89-26.838,39.399-26.838,64.525v146.177c0,25.125,8.949,46.641,26.838,64.525 C190.906,319.951,212.416,328.897,237.541,328.897z"}),M=r.a.createElement("path",{d:"M396.563,188.15c-3.606-3.617-7.898-5.426-12.847-5.426c-4.944,0-9.226,1.809-12.847,5.426 c-3.613,3.616-5.421,7.898-5.421,12.845v36.547c0,35.214-12.518,65.333-37.548,90.362c-25.022,25.03-55.145,37.545-90.36,37.545 c-35.214,0-65.334-12.515-90.365-37.545c-25.028-25.022-37.541-55.147-37.541-90.362v-36.547c0-4.947-1.809-9.229-5.424-12.845 c-3.617-3.617-7.895-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426c-3.618,3.616-5.426,7.898-5.426,12.845v36.547 c0,42.065,14.04,78.659,42.112,109.776c28.073,31.118,62.762,48.961,104.068,53.526v37.691h-73.089 c-4.949,0-9.231,1.811-12.847,5.428c-3.617,3.614-5.426,7.898-5.426,12.847c0,4.941,1.809,9.233,5.426,12.847 c3.616,3.614,7.898,5.428,12.847,5.428h182.719c4.948,0,9.236-1.813,12.847-5.428c3.621-3.613,5.431-7.905,5.431-12.847 c0-4.948-1.81-9.232-5.431-12.847c-3.61-3.617-7.898-5.428-12.847-5.428h-73.08v-37.691 c41.299-4.565,75.985-22.408,104.061-53.526c28.076-31.117,42.12-67.711,42.12-109.776v-36.547 C401.998,196.049,400.185,191.77,396.563,188.15z"}),J=function(e){var t=e.svgRef,a=e.title,n=D(e,["svgRef","title"]);return r.a.createElement("svg",P({x:"0px",y:"0px",viewBox:"0 0 475.085 475.085",ref:t},n),a?r.a.createElement("title",null,a):null,B,M)},A=r.a.forwardRef((function(e,t){return r.a.createElement(J,P({svgRef:t},e))}));a.p;function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var V=r.a.createElement("path",{d:"M18.993,10.688h-7.936c-0.19,0-0.346,0.149-0.346,0.342v8.022c0,0.189,0.155,0.344,0.346,0.344 h7.936c0.19,0,0.344-0.154,0.344-0.344V11.03C19.336,10.838,19.183,10.688,18.993,10.688z"}),U=r.a.createElement("path",{d:"M15.026,0C6.729,0,0.001,6.726,0.001,15.025S6.729,30.05,15.026,30.05 c8.298,0,15.023-6.726,15.023-15.025S23.324,0,15.026,0z M15.026,27.54c-6.912,0-12.516-5.604-12.516-12.515 c0-6.914,5.604-12.517,12.516-12.517c6.913,0,12.514,5.603,12.514,12.517C27.54,21.936,21.939,27.54,15.026,27.54z"}),G=function(e){var t=e.svgRef,a=e.title,n=F(e,["svgRef","title"]);return r.a.createElement("svg",z({x:"0px",y:"0px",viewBox:"0 0 30.05 30.05",ref:t},n),a?r.a.createElement("title",null,a):null,V,U)},W=r.a.forwardRef((function(e,t){return r.a.createElement(G,z({svgRef:t},e))}));a.p;function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Q=r.a.createElement("path",{d:"M48.855,0C29.021,0,12.883,16.138,12.883,35.974c0,5.174,1.059,10.114,3.146,14.684 c8.994,19.681,26.238,40.46,31.31,46.359c0.38,0.441,0.934,0.695,1.517,0.695s1.137-0.254,1.517-0.695 c5.07-5.898,22.314-26.676,31.311-46.359c2.088-4.57,3.146-9.51,3.146-14.684C84.828,16.138,68.69,0,48.855,0z M48.855,54.659 c-10.303,0-18.686-8.383-18.686-18.686c0-10.304,8.383-18.687,18.686-18.687s18.686,8.383,18.686,18.687 C67.542,46.276,59.159,54.659,48.855,54.659z"}),Y=function(e){var t=e.svgRef,a=e.title,n=K(e,["svgRef","title"]);return r.a.createElement("svg",q({x:"0px",y:"0px",viewBox:"0 0 97.713 97.713",ref:t},n),a?r.a.createElement("title",null,a):null,Q)},Z=r.a.forwardRef((function(e,t){return r.a.createElement(Y,q({svgRef:t},e))})),X=(a.p,a(6)),$=a.n(X);function ee(e){var t=r.a.createRef();return r.a.createElement("div",{className:$.a.form_input},r.a.createElement("input",{id:"input",className:$.a.input,type:"text",value:e.value,placeholder:e.placeholder,onChange:e.onChange}),r.a.createElement("button",{id:"start",type:"button",className:$.a.attach_button,onClick:e.handleRecordStart},r.a.createElement(A,{className:$.a.attach_button_img})),r.a.createElement("button",{id:"stop",type:"button",className:$.a.attach_button,style:{display:"none"}},r.a.createElement(W,{className:$.a.attach_button_img})),r.a.createElement("button",{id:"bGeo",type:"button",className:$.a.attach_button,onClick:e.handleGeo},r.a.createElement(Z,{className:$.a.attach_button_img})),r.a.createElement("input",{type:"file",ref:t,accept:"image/*",style:{display:"none"},onChange:e.handleImage}),r.a.createElement("button",{id:"bImage",type:"button",className:$.a.attach_button,onClick:function(e){t&&t.current.click()}},r.a.createElement(I,{className:$.a.attach_button_img})),r.a.createElement("button",{type:"submit",className:$.a.submit_button,style:{display:e.submitButtonDisplayStyle}},r.a.createElement(L,{className:$.a.submit_button_img})))}var te=a(8),ae=a.n(te),ne=["","",""];function re(e){var t=r.a.createElement("div",null);if("text"===e.contentType){for(var a=e.messageContent.split(/(https:\/\/\S+[^\s.,> )\];'"!?])/),n=1;n<a.length;n+=2)a[n]=r.a.createElement("a",{className:ae.a.link,key:"link".concat(n),target:"_blank",rel:"noopener noreferrer",href:a[n]},a[n]);t=r.a.createElement("div",{className:ae.a.message_text},a)}else"img"===e.contentType?t=r.a.createElement("img",{className:ae.a.image,src:e.messageContent,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f",onLoad:function(){se.current.scrollIntoView(),window.URL.revokeObjectURL(e.messageContent)}}):"audio"===e.contentType&&(t=r.a.createElement("audio",{src:e.messageContent,controls:!0,onLoad:function(){window.URL.revokeObjectURL(e.messageContent)}}));return t}ne[0]=r.a.createElement("div",{className:ae.a.sending}),ne[1]=r.a.createElement("div",{className:ae.a.sent}),ne[2]=r.a.createElement("div",{className:ae.a.read});var se=r.a.createRef();function oe(e){return Object(n.useEffect)((function(){se.current.scrollIntoView()})),r.a.createElement("div",{ref:se,className:"".concat(ae.a.message_element," ").concat(ae.a[e.position])},r.a.createElement(re,{messageContent:e.messageContent,contentType:e.contentType}),r.a.createElement("div",{className:ae.a.message_info},r.a.createElement("span",{className:ae.a.message_time},e.messageTime),r.a.createElement("div",{className:ae.a.mes_indicator},ne[e.indicator])))}var ce=a(15),le=a.n(ce),ie="chatsArray";function me(e){var t=Object(_.f)().chatId,a=Object(n.useState)("none"),s=Object(p.a)(a,2),o=s[0],c=s[1],l=Object(n.useState)(""),i=Object(p.a)(l,2),m=i[0],u=i[1],f=Object(n.useState)((function(){for(var e=JSON.parse(localStorage.getItem(ie))[t],a=[],n=0;n<e.messages.length;n+=1)a.push(e.messages[n]);return a})),d=Object(p.a)(f,2),g=d[0],v=d[1];function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.target.files;if(t.length){var a=new FormData,n=window.URL.createObjectURL(t[0]);a.append("image",t),S(b(n,"img")),fetch("https://tt-front.now.sh/upload",{method:"POST",body:a})}}function h(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"}function b(e){return{contentType:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text",messageContent:e,messageAuthor:"Me",messageTime:new Date}}function E(e,t){var a="right_messages";"Me"!==e.messageAuthor&&(a="left_messages");var n=new Date(e.messageTime).toTimeString().slice(0,5);return r.a.createElement(oe,{key:t,indicator:1,contentType:e.contentType,messageContent:e.messageContent,messageTime:n,position:a})}function S(e){v(g.concat(e))}function w(e){var a=JSON.parse(localStorage.getItem(ie));0===a[t].messages.length&&(a[t].messages=[]),a[t].messages.push(e),localStorage.setItem(ie,JSON.stringify(a))}return r.a.createElement("div",{className:le.a.message_form},r.a.createElement("form",{className:le.a.form_chat,onSubmit:function(e){if(e.preventDefault(),c("none"),""!==m){var t=b(m);u(""),S(t),w(t)}}},r.a.createElement("div",{className:le.a.chat_container,onDragEnter:h,onDragOver:h,onDrop:function(e){h(e),y(e,e.dataTransfer.files)}},function(){for(var e=[],t=0;t<g.length;t+=1)e.push(E(g[t],t));return e}()),r.a.createElement(ee,{placeholder:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",value:m,onChange:function(e){var t=e.target.value;u(t),c(""!==t?"inline-block":"none")},submitButtonDisplayStyle:o,handleGeo:function(){if("geolocation"in navigator){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,a=t.latitude,n=t.longitude,r=b("https://www.openstreetmap.org/#map=18/".concat(a,"/").concat(n));S(r),w(r)}),(function(e){console.log(e.message)}),{enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3})}else alert("\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044e!")},handleImage:y,handleRecordStart:function(){function e(e){var t=document.getElementById("input"),a=document.getElementById("bImage"),n=document.getElementById("bGeo");!1===e?(t.disabled=!0,a.disabled=!0,n.disabled=!0):(t.removeAttribute("disabled"),a.removeAttribute("disabled"),n.removeAttribute("disabled"))}function t(t){var a=document.getElementById("start"),n=document.getElementById("stop"),r=new MediaRecorder(t);r.start(),n.style.display="block",a.style.display="none",e(!1);var s=[];r.addEventListener("dataavailable",(function(e){s.push(e.data)})),r.addEventListener("stop",(function(){var e=new Blob(s,{type:r.mimeType});s=[],S(b(URL.createObjectURL(e),"audio"));var t=new FormData;t.append("audio",e),fetch("https://tt-front.now.sh/upload",{method:"POST",body:t})})),n.addEventListener("click",(function(){r.stop(),n.style.display="none",a.style.display="block",e(!0)}),{once:!0})}function a(){return(a=Object(N.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null,e.prev=1,a={audio:!0},e.next=5,navigator.mediaDevices.getUserMedia(a);case 5:t(e.sent),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}})))}var ue=a(1),_e=a.n(ue),pe="chatsArray";function fe(e){var t=Object(_.f)().chatId,a=JSON.parse(localStorage.getItem(pe)),n="Companion's name";return null!==a&&(n=a[t].companion),r.a.createElement("div",{className:"".concat(_e.a.app_header," ").concat(_e.a.chat_header)},r.a.createElement(u.b,{to:"/",className:_e.a.button},r.a.createElement("div",{className:"".concat(_e.a.button_backward," ").concat(_e.a.button)})),r.a.createElement("div",{className:_e.a.companion},r.a.createElement("div",{className:_e.a.companion_image}),r.a.createElement("div",{className:_e.a.companion_info},r.a.createElement("span",{className:_e.a.companion_name},n),r.a.createElement("span",{className:_e.a.companion_status},"online"))),r.a.createElement("button",{type:"button",className:"".concat(_e.a.button_search_chat," ").concat(_e.a.button)}),r.a.createElement("button",{type:"button",className:"".concat(_e.a.button_settings," ").concat(_e.a.button)}))}function de(e){return r.a.createElement("div",{className:_e.a.app_header},r.a.createElement("button",{type:"button",className:"".concat(_e.a.button_menu," ").concat(_e.a.button)}),r.a.createElement("span",{className:_e.a.header},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"))}function ge(e){return r.a.createElement("div",{className:"".concat(_e.a.app_header," ").concat(_e.a.profile_header)},r.a.createElement(u.b,{to:"/",className:_e.a.button},r.a.createElement("div",{className:"".concat(_e.a.button_backward," ").concat(_e.a.button)})),r.a.createElement("span",{className:_e.a.header},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f"),r.a.createElement("button",{type:"submit",form:"profile-form",className:_e.a.button},r.a.createElement("div",{className:_e.a.button_tick})))}var ve=a(3),ye=a.n(ve);function he(e){return r.a.createElement("form",{id:"profile-form",className:ye.a.profile_form,onSubmit:function(e){e.preventDefault()}},r.a.createElement("div",{className:ye.a.profile_img_preview},r.a.createElement("div",{className:ye.a.profile_img})),r.a.createElement("div",{className:"".concat(ye.a.profile_input_div," ").concat(ye.a.fullname_input_div)},r.a.createElement("span",{className:ye.a.field_info},"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f"),r.a.createElement("input",{className:ye.a.profile_input})),r.a.createElement("div",{className:"".concat(ye.a.profile_input_div," ").concat(ye.a.username_input_div)},r.a.createElement("span",{className:ye.a.field_info},"\u041d\u0438\u043a\u043d\u0435\u0439\u043c"),r.a.createElement("input",{className:ye.a.profile_input,pattern:"^[a-z][a-z0-9-_\\.]{4,20}$",onInvalid:function(e){e.target.setCustomValidity("\u041d\u0438\u043a\u043d\u0435\u0439\u043c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432: \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b \u0432 \u043d\u0438\u0436\u043d\u0435\u043c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0435 \u0438 \u0446\u0438\u0444\u0440\u044b (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, john123).")}})),r.a.createElement("div",{className:"".concat(ye.a.profile_input_div," ").concat(ye.a.biography_input_div)},r.a.createElement("span",{className:ye.a.field_info},"\u041e \u0441\u0435\u0431\u0435"),r.a.createElement("textarea",{className:ye.a.profile_input})))}var be=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-window"},r.a.createElement(u.a,null,r.a.createElement(_.c,null,r.a.createElement(_.a,{path:"/profile"},r.a.createElement(ge,null),r.a.createElement(he,null)),r.a.createElement(_.a,{path:"/chat_id=:chatId"},r.a.createElement(fe,null),r.a.createElement(me,null)),r.a.createElement(_.a,{exact:!0,path:"/"},r.a.createElement(de,null),r.a.createElement(E,null)))))}}]),t}(r.a.Component);Object(s.render)(r.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,a){e.exports={chat_elem:"chatElemStyles_chat_elem__2V239",companion_img:"chatElemStyles_companion_img__1diSY",text_info:"chatElemStyles_text_info__3EbuI",message_preview:"chatElemStyles_message_preview__8Q5Lx",companion_name:"chatElemStyles_companion_name__3IRJK",lastmessage_text:"chatElemStyles_lastmessage_text__1f0wG",lastmessage_info:"chatElemStyles_lastmessage_info__2AmB7",lastmessage_time:"chatElemStyles_lastmessage_time__2olrH",indicator:"chatElemStyles_indicator__1aANW",sending:"chatElemStyles_sending__BQ7li",sent:"chatElemStyles_sent__3xMOj",read:"chatElemStyles_read__EytnU"}},6:function(e,t,a){e.exports={form_input:"formInputStyles_form_input__3QpMe",input:"formInputStyles_input__2tPDl",attach_button:"formInputStyles_attach_button__36Wer",submit_button:"formInputStyles_submit_button__3NjKa","show-submit-button":"formInputStyles_show-submit-button__1Vf27",attach_button_img:"formInputStyles_attach_button_img__3dzVX",submit_button_img:"formInputStyles_submit_button_img__3FwRF"}},8:function(e,t,a){e.exports={message_element:"messageElemStyles_message_element__xsqIA","add-message-animation":"messageElemStyles_add-message-animation__22aji",link:"messageElemStyles_link__GrmDl",message_text:"messageElemStyles_message_text__3pbJa",message_info:"messageElemStyles_message_info__1-kVy",message_time:"messageElemStyles_message_time__LB5Za",mes_indicator:"messageElemStyles_mes_indicator__1OFL3",image:"messageElemStyles_image__mdwoJ",sending:"messageElemStyles_sending__1ZtDP",sent:"messageElemStyles_sent__1MsJv",read:"messageElemStyles_read__1l-E6",right_messages:"messageElemStyles_right_messages__35SEv",left_messages:"messageElemStyles_left_messages__1qolC"}}},[[33,1,2]]]);
//# sourceMappingURL=main.9d0191bb.chunk.js.map