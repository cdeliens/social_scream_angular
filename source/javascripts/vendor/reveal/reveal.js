/*!
 * reveal.js 2.5.0 (2013-06-18, 08:38)
 * http://lab.hakim.se/reveal-js
 * MIT licensed
 *
 * Copyright (C) 2013 Hakim El Hattab, http://hakim.se
 */
var Reveal=function(){"use strict";function e(e){return Ht||zt?(window.addEventListener("load",k,!1),l(Pt,e),r(),o(),void 0):(document.body.setAttribute("class","no-transforms"),void 0)}function t(){if(Yt.theme=document.querySelector("#theme"),Yt.wrapper=document.querySelector(".reveal"),Yt.slides=document.querySelector(".reveal .slides"),document.querySelector(".reveal .backgrounds")||(Yt.background=document.createElement("div"),Yt.background.classList.add("backgrounds"),Yt.wrapper.appendChild(Yt.background)),!Yt.wrapper.querySelector(".progress")){var e=document.createElement("div");e.classList.add("progress"),e.innerHTML="<span></span>",Yt.wrapper.appendChild(e)}if(!Yt.wrapper.querySelector(".controls")){var t=document.createElement("aside");t.classList.add("controls"),t.innerHTML='<div class="navigate-left"></div><div class="navigate-right"></div><div class="navigate-up"></div><div class="navigate-down"></div>',Yt.wrapper.appendChild(t)}if(!Yt.wrapper.querySelector(".state-background")){var n=document.createElement("div");n.classList.add("state-background"),Yt.wrapper.appendChild(n)}if(!Yt.wrapper.querySelector(".pause-overlay")){var r=document.createElement("div");r.classList.add("pause-overlay"),Yt.wrapper.appendChild(r)}Yt.progress=document.querySelector(".reveal .progress"),Yt.progressbar=document.querySelector(".reveal .progress span"),Pt.controls&&(Yt.controls=document.querySelector(".reveal .controls"),Yt.controlsLeft=d(document.querySelectorAll(".navigate-left")),Yt.controlsRight=d(document.querySelectorAll(".navigate-right")),Yt.controlsUp=d(document.querySelectorAll(".navigate-up")),Yt.controlsDown=d(document.querySelectorAll(".navigate-down")),Yt.controlsPrev=d(document.querySelectorAll(".navigate-prev")),Yt.controlsNext=d(document.querySelectorAll(".navigate-next")))}function n(){function e(e,t){var n={background:e.getAttribute("data-background"),backgroundSize:e.getAttribute("data-background-size"),backgroundColor:e.getAttribute("data-background-color"),backgroundRepeat:e.getAttribute("data-background-repeat"),backgroundPosition:e.getAttribute("data-background-position"),backgroundTransition:e.getAttribute("data-background-transition")},r=document.createElement("div");return r.className="slide-background",n.background&&(/\.(png|jpg|jpeg|gif|bmp)$/gi.test(n.background)?r.style.backgroundImage="url("+n.background+")":r.style.background=n.background),n.backgroundSize&&(r.style.backgroundSize=n.backgroundSize),n.backgroundColor&&(r.style.backgroundColor=n.backgroundColor),n.backgroundRepeat&&(r.style.backgroundRepeat=n.backgroundRepeat),n.backgroundPosition&&(r.style.backgroundPosition=n.backgroundPosition),n.backgroundTransition&&r.setAttribute("data-background-transition",n.backgroundTransition),t.appendChild(r),r}v()&&document.body.classList.add("print-pdf"),Yt.background.innerHTML="",Yt.background.classList.add("no-transition"),d(document.querySelectorAll(xt)).forEach(function(t){var n;n=v()?e(t,t):e(t,Yt.background),d(t.querySelectorAll("section")).forEach(function(t){v()?e(t,t):e(t,n)})})}function r(){/iphone|ipod|android/gi.test(navigator.userAgent)&&!/crios/gi.test(navigator.userAgent)&&(window.addEventListener("load",p,!1),window.addEventListener("orientationchange",p,!1))}function o(){function e(){n.length&&head.js.apply(null,n),a()}for(var t=[],n=[],r=0,o=Pt.dependencies.length;o>r;r++){var i=Pt.dependencies[r];(!i.condition||i.condition())&&(i.async?n.push(i.src):t.push(i.src),"function"==typeof i.callback&&head.ready(i.src.match(/([\w\d_\-]*)\.?js$|[^\\\/]*$/i)[0],i.callback))}t.length?(head.ready(e),head.js.apply(null,t)):e()}function a(){t(),i(),K(),setTimeout(function(){m("ready",{indexh:Dt,indexv:Ct,currentSlide:At})},1)}function i(e){if(Yt.wrapper.classList.remove(Pt.transition),"object"==typeof e&&l(Pt,e),zt===!1&&(Pt.transition="linear"),Yt.wrapper.classList.add(Pt.transition),Yt.wrapper.setAttribute("data-transition-speed",Pt.transitionSpeed),Yt.wrapper.setAttribute("data-background-transition",Pt.backgroundTransition),Yt.controls&&(Yt.controls.style.display=Pt.controls&&Yt.controls?"block":"none"),Yt.progress&&(Yt.progress.style.display=Pt.progress&&Yt.progress?"block":"none"),Pt.rtl?Yt.wrapper.classList.add("rtl"):Yt.wrapper.classList.remove("rtl"),Pt.center?Yt.wrapper.classList.add("center"):Yt.wrapper.classList.remove("center"),Pt.mouseWheel?(document.addEventListener("DOMMouseScroll",ft,!1),document.addEventListener("mousewheel",ft,!1)):(document.removeEventListener("DOMMouseScroll",ft,!1),document.removeEventListener("mousewheel",ft,!1)),Pt.rollingLinks?h():g(),Pt.previewLinks?y():(b(),y("[data-preview-link]")),Pt.theme&&Yt.theme){var t=Yt.theme.getAttribute("href"),n=/[^\/]*?(?=\.css)/,r=t.match(n)[0];Pt.theme!==r&&(t=t.replace(n,Pt.theme),Yt.theme.setAttribute("href",t))}z()}function s(){Ft=!0,window.addEventListener("hashchange",wt,!1),window.addEventListener("resize",Lt,!1),Pt.touch&&(Yt.wrapper.addEventListener("touchstart",it,!1),Yt.wrapper.addEventListener("touchmove",st,!1),Yt.wrapper.addEventListener("touchend",ct,!1),window.navigator.msPointerEnabled&&(Yt.wrapper.addEventListener("MSPointerDown",lt,!1),Yt.wrapper.addEventListener("MSPointerMove",dt,!1),Yt.wrapper.addEventListener("MSPointerUp",ut,!1))),Pt.keyboard&&document.addEventListener("keydown",at,!1),Pt.progress&&Yt.progress&&Yt.progress.addEventListener("click",vt,!1),Pt.controls&&Yt.controls&&["touchstart","click"].forEach(function(e){Yt.controlsLeft.forEach(function(t){t.addEventListener(e,pt,!1)}),Yt.controlsRight.forEach(function(t){t.addEventListener(e,mt,!1)}),Yt.controlsUp.forEach(function(t){t.addEventListener(e,ht,!1)}),Yt.controlsDown.forEach(function(t){t.addEventListener(e,gt,!1)}),Yt.controlsPrev.forEach(function(t){t.addEventListener(e,yt,!1)}),Yt.controlsNext.forEach(function(t){t.addEventListener(e,bt,!1)})})}function c(){Ft=!1,document.removeEventListener("keydown",at,!1),window.removeEventListener("hashchange",wt,!1),window.removeEventListener("resize",Lt,!1),Yt.wrapper.removeEventListener("touchstart",it,!1),Yt.wrapper.removeEventListener("touchmove",st,!1),Yt.wrapper.removeEventListener("touchend",ct,!1),window.navigator.msPointerEnabled&&(Yt.wrapper.removeEventListener("MSPointerDown",lt,!1),Yt.wrapper.removeEventListener("MSPointerMove",dt,!1),Yt.wrapper.removeEventListener("MSPointerUp",ut,!1)),Pt.progress&&Yt.progress&&Yt.progress.removeEventListener("click",vt,!1),Pt.controls&&Yt.controls&&["touchstart","click"].forEach(function(e){Yt.controlsLeft.forEach(function(t){t.removeEventListener(e,pt,!1)}),Yt.controlsRight.forEach(function(t){t.removeEventListener(e,mt,!1)}),Yt.controlsUp.forEach(function(t){t.removeEventListener(e,ht,!1)}),Yt.controlsDown.forEach(function(t){t.removeEventListener(e,gt,!1)}),Yt.controlsPrev.forEach(function(t){t.removeEventListener(e,yt,!1)}),Yt.controlsNext.forEach(function(t){t.removeEventListener(e,bt,!1)})})}function l(e,t){for(var n in t)e[n]=t[n]}function d(e){return Array.prototype.slice.call(e)}function u(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)}function f(e){var t=0;if(e){var n=0;d(e.childNodes).forEach(function(e){"number"==typeof e.offsetTop&&e.style&&("absolute"===e.style.position&&(n+=1),t=Math.max(t,e.offsetTop+e.offsetHeight))}),0===n&&(t=e.offsetHeight)}return t}function v(){return/print-pdf/gi.test(window.location.search)}function p(){0===window.orientation?(document.documentElement.style.overflow="scroll",document.body.style.height="120%"):(document.documentElement.style.overflow="",document.body.style.height="100%"),setTimeout(function(){window.scrollTo(0,1)},10)}function m(e,t){var n=document.createEvent("HTMLEvents",1,2);n.initEvent(e,!0,!0),l(n,t),Yt.wrapper.dispatchEvent(n)}function h(){if(zt&&!("msPerspective"in document.body.style))for(var e=document.querySelectorAll(qt+" a:not(.image)"),t=0,n=e.length;n>t;t++){var r=e[t];if(!(!r.textContent||r.querySelector("*")||r.className&&r.classList.contains(r,"roll"))){var o=document.createElement("span");o.setAttribute("data-title",r.text),o.innerHTML=r.innerHTML,r.classList.add("roll"),r.innerHTML="",r.appendChild(o)}}}function g(){for(var e=document.querySelectorAll(qt+" a.roll"),t=0,n=e.length;n>t;t++){var r=e[t],o=r.querySelector("span");o&&(r.classList.remove("roll"),r.innerHTML=o.innerHTML)}}function y(e){var t=d(document.querySelectorAll(e?e:"a"));t.forEach(function(e){/^(http|www)/gi.test(e.getAttribute("href"))&&e.addEventListener("click",kt,!1)})}function b(){var e=d(document.querySelectorAll("a"));e.forEach(function(e){/^(http|www)/gi.test(e.getAttribute("href"))&&e.removeEventListener("click",kt,!1)})}function w(e){L(),Yt.preview=document.createElement("div"),Yt.preview.classList.add("preview-link-overlay"),Yt.wrapper.appendChild(Yt.preview),Yt.preview.innerHTML=["<header>",'<a class="close" href="#"><span class="icon"></span></a>','<a class="external" href="'+e+'" target="_blank"><span class="icon"></span></a>',"</header>",'<div class="spinner"></div>','<div class="viewport">','<iframe src="'+e+'"></iframe>',"</div>"].join(""),Yt.preview.querySelector("iframe").addEventListener("load",function(){Yt.preview.classList.add("loaded")},!1),Yt.preview.querySelector(".close").addEventListener("click",function(e){L(),e.preventDefault()},!1),Yt.preview.querySelector(".external").addEventListener("click",function(){L()},!1),setTimeout(function(){Yt.preview.classList.add("visible")},1)}function L(){Yt.preview&&(Yt.preview.setAttribute("src",""),Yt.preview.parentNode.removeChild(Yt.preview),Yt.preview=null)}function E(e){var t=d(e);return t.forEach(function(e,t){e.hasAttribute("data-fragment-index")||e.setAttribute("data-fragment-index",t)}),t.sort(function(e,t){return e.getAttribute("data-fragment-index")-t.getAttribute("data-fragment-index")}),t}function k(){if(Yt.wrapper&&!v()){var e=Yt.wrapper.offsetWidth,t=Yt.wrapper.offsetHeight;e-=t*Pt.margin,t-=t*Pt.margin;var n=Pt.width,r=Pt.height;if("string"==typeof n&&/%$/.test(n)&&(n=parseInt(n,10)/100*e),"string"==typeof r&&/%$/.test(r)&&(r=parseInt(r,10)/100*t),Yt.slides.style.width=n+"px",Yt.slides.style.height=r+"px",Ot=Math.min(e/n,t/r),Ot=Math.max(Ot,Pt.minScale),Ot=Math.min(Ot,Pt.maxScale),void 0===Yt.slides.style.zoom||navigator.userAgent.match(/(iphone|ipod|ipad|android)/gi)){var o="translate(-50%, -50%) scale("+Ot+") translate(50%, 50%)";Yt.slides.style.WebkitTransform=o,Yt.slides.style.MozTransform=o,Yt.slides.style.msTransform=o,Yt.slides.style.OTransform=o,Yt.slides.style.transform=o}else Yt.slides.style.zoom=Ot;for(var a=d(document.querySelectorAll(qt)),i=0,s=a.length;s>i;i++){var c=a[i];"none"!==c.style.display&&(c.style.top=Pt.center?c.classList.contains("stack")?0:Math.max(-(f(c)/2)-20,-r/2)+"px":"")}X()}}function S(e,t){"object"==typeof e&&"function"==typeof e.setAttribute&&e.setAttribute("data-previous-indexv",t||0)}function A(e){if("object"==typeof e&&"function"==typeof e.setAttribute&&e.classList.contains("stack")){var t=e.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(e.getAttribute(t)||0,10)}return 0}function q(){if(Pt.overview){G();var e=Yt.wrapper.classList.contains("overview");Yt.wrapper.classList.add("overview"),Yt.wrapper.classList.remove("exit-overview"),clearTimeout(Ut),clearTimeout(jt),Ut=setTimeout(function(){for(var t=document.querySelectorAll(xt),n=0,r=t.length;r>n;n++){var o=t[n],a=Pt.rtl?-105:105,i="translateZ(-2500px) translate("+(n-Dt)*a+"%, 0%)";if(o.setAttribute("data-index-h",n),o.style.display="block",o.style.WebkitTransform=i,o.style.MozTransform=i,o.style.msTransform=i,o.style.OTransform=i,o.style.transform=i,o.classList.contains("stack"))for(var s=o.querySelectorAll("section"),c=0,l=s.length;l>c;c++){var d=n===Dt?Ct:A(o),u=s[c],f="translate(0%, "+105*(c-d)+"%)";u.setAttribute("data-index-h",n),u.setAttribute("data-index-v",c),u.style.display="block",u.style.WebkitTransform=f,u.style.MozTransform=f,u.style.msTransform=f,u.style.OTransform=f,u.style.transform=f,u.addEventListener("click",Et,!0)}else o.addEventListener("click",Et,!0)}k(),e||m("overviewshown",{indexh:Dt,indexv:Ct,currentSlide:At})},10)}}function x(){if(Pt.overview){clearTimeout(Ut),clearTimeout(jt),Yt.wrapper.classList.remove("overview"),Yt.wrapper.classList.add("exit-overview"),jt=setTimeout(function(){Yt.wrapper.classList.remove("exit-overview")},10);for(var e=d(document.querySelectorAll(qt)),t=0,n=e.length;n>t;t++){var r=e[t];r.style.display="",r.style.WebkitTransform="",r.style.MozTransform="",r.style.msTransform="",r.style.OTransform="",r.style.transform="",r.removeEventListener("click",Et,!0)}Y(Dt,Ct),B(),m("overviewhidden",{indexh:Dt,indexv:Ct,currentSlide:At})}}function T(e){"boolean"==typeof e?e?q():x():M()?x():q()}function M(){return Yt.wrapper.classList.contains("overview")}function P(e){return e=e?e:At,e&&!!e.parentNode.nodeName.match(/section/i)}function N(){var e=document.body,t=e.requestFullScreen||e.webkitRequestFullscreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullScreen;t&&t.apply(e)}function D(){var e=Yt.wrapper.classList.contains("paused");G(),Yt.wrapper.classList.add("paused"),e===!1&&m("paused")}function C(){var e=Yt.wrapper.classList.contains("paused");Yt.wrapper.classList.remove("paused"),B(),e&&m("resumed")}function R(){O()?C():D()}function O(){return Yt.wrapper.classList.contains("paused")}function Y(e,t,n,r){St=At;var o=document.querySelectorAll(xt);void 0===t&&(t=A(o[e])),St&&St.parentNode&&St.parentNode.classList.contains("stack")&&S(St.parentNode,Ct);var a=Rt.concat();Rt.length=0;var i=Dt,s=Ct;Dt=H(xt,void 0===e?Dt:e),Ct=H(Tt,void 0===t?Ct:t),k();e:for(var c=0,l=Rt.length;l>c;c++){for(var u=0;a.length>u;u++)if(a[u]===Rt[c]){a.splice(u,1);continue e}document.documentElement.classList.add(Rt[c]),m(Rt[c])}for(;a.length;)document.documentElement.classList.remove(a.pop());M()&&q(),$(1500);var f=o[Dt],v=f.querySelectorAll("section");if(At=v[Ct]||f,n!==void 0){var p=E(At.querySelectorAll(".fragment"));d(p).forEach(function(e,t){n>t?e.classList.add("visible"):e.classList.remove("visible")})}var h=Dt!==i||Ct!==s;h?m("slidechanged",{indexh:Dt,indexv:Ct,previousSlide:St,currentSlide:At,origin:r}):St=null,St&&(St.classList.remove("present"),document.querySelector(Mt).classList.contains("present")&&setTimeout(function(){var e,t=d(document.querySelectorAll(xt+".stack"));for(e in t)t[e]&&S(t[e],0)},0)),h&&(_(St),F(At)),I(),X(),W()}function z(){c(),s(),k(),Nt=Pt.autoSlide,B(),n(),I(),X(),W()}function H(e,t){var n=d(document.querySelectorAll(e)),r=n.length;if(r){Pt.loop&&(t%=r,0>t&&(t=r+t)),t=Math.max(Math.min(t,r-1),0);for(var o=0;r>o;o++){var a=n[o];if(M()===!1){var i=Math.abs((t-o)%(r-3))||0;a.style.display=i>3?"none":"block"}var s=Pt.rtl&&!P(a);a.classList.remove("past"),a.classList.remove("present"),a.classList.remove("future"),a.setAttribute("hidden",""),t>o?a.classList.add(s?"future":"past"):o>t&&a.classList.add(s?"past":"future"),a.querySelector("section")&&a.classList.add("stack")}n[t].classList.add("present"),n[t].removeAttribute("hidden");var c=n[t].getAttribute("data-state");c&&(Rt=Rt.concat(c.split(" ")));var l=n[t].getAttribute("data-autoslide");Nt=l?parseInt(l,10):Pt.autoSlide}else t=0;return t}function X(){if(Pt.progress&&Yt.progress){var e=d(document.querySelectorAll(xt)),t=document.querySelectorAll(qt+":not(.stack)").length,n=0;e:for(var r=0;e.length>r;r++){for(var o=e[r],a=d(o.querySelectorAll("section")),i=0;a.length>i;i++){if(a[i].classList.contains("present"))break e;n++}if(o.classList.contains("present"))break;o.classList.contains("stack")===!1&&n++}Yt.progressbar.style.width=n/(t-1)*window.innerWidth+"px"}}function I(){if(Pt.controls&&Yt.controls){var e=U(),t=j();Yt.controlsLeft.concat(Yt.controlsRight).concat(Yt.controlsUp).concat(Yt.controlsDown).concat(Yt.controlsPrev).concat(Yt.controlsNext).forEach(function(e){e.classList.remove("enabled"),e.classList.remove("fragmented")}),e.left&&Yt.controlsLeft.forEach(function(e){e.classList.add("enabled")}),e.right&&Yt.controlsRight.forEach(function(e){e.classList.add("enabled")}),e.up&&Yt.controlsUp.forEach(function(e){e.classList.add("enabled")}),e.down&&Yt.controlsDown.forEach(function(e){e.classList.add("enabled")}),(e.left||e.up)&&Yt.controlsPrev.forEach(function(e){e.classList.add("enabled")}),(e.right||e.down)&&Yt.controlsNext.forEach(function(e){e.classList.add("enabled")}),At&&(t.prev&&Yt.controlsPrev.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&Yt.controlsNext.forEach(function(e){e.classList.add("fragmented","enabled")}),P(At)?(t.prev&&Yt.controlsUp.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&Yt.controlsDown.forEach(function(e){e.classList.add("fragmented","enabled")})):(t.prev&&Yt.controlsLeft.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&Yt.controlsRight.forEach(function(e){e.classList.add("fragmented","enabled")})))}}function W(){d(Yt.background.childNodes).forEach(function(e,t){var n=Pt.rtl?"future":"past",r=Pt.rtl?"past":"future";e.className="slide-background "+(Dt>t?n:t>Dt?r:"present"),d(e.childNodes).forEach(function(e,t){e.className="slide-background "+(Ct>t?"past":t>Ct?"future":"present")})}),setTimeout(function(){Yt.background.classList.remove("no-transition")},1)}function U(){var e=document.querySelectorAll(xt),t=document.querySelectorAll(Tt),n={left:Dt>0||Pt.loop,right:e.length-1>Dt||Pt.loop,up:Ct>0,down:t.length-1>Ct};if(Pt.rtl){var r=n.left;n.left=n.right,n.right=r}return n}function j(){if(At&&Pt.fragments){var e=At.querySelectorAll(".fragment"),t=At.querySelectorAll(".fragment:not(.visible)");return{prev:e.length-t.length>0,next:!!t.length}}return{prev:!1,next:!1}}function F(e){e&&(d(e.querySelectorAll("video, audio")).forEach(function(e){e.hasAttribute("data-autoplay")&&e.play()}),d(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(e){e.hasAttribute("data-autoplay")&&e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}))}function _(e){e&&(d(e.querySelectorAll("video, audio")).forEach(function(e){e.hasAttribute("data-ignore")||e.pause()}),d(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(e){e.hasAttribute("data-ignore")||"function"!=typeof e.contentWindow.postMessage||e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}))}function K(){var e=window.location.hash,t=e.slice(2).split("/"),n=e.replace(/#|\//gi,"");if(isNaN(parseInt(t[0],10))&&n.length){var r=document.querySelector("#"+n);if(r){var o=Reveal.getIndices(r);Y(o.h,o.v)}else Y(Dt,Ct)}else{var a=parseInt(t[0],10)||0,i=parseInt(t[1],10)||0;Y(a,i)}}function $(e){if(Pt.history)if(clearTimeout(Wt),"number"==typeof e)Wt=setTimeout($,e);else{var t="/";At&&"string"==typeof At.getAttribute("id")?t="/"+At.getAttribute("id"):((Dt>0||Ct>0)&&(t+=Dt),Ct>0&&(t+="/"+Ct)),window.location.hash=t}}function V(e){var t,n=Dt,r=Ct;if(e){var o=P(e),a=o?e.parentNode:e,i=d(document.querySelectorAll(xt));n=Math.max(i.indexOf(a),0),o&&(r=Math.max(d(e.parentNode.querySelectorAll("section")).indexOf(e),0))}if(!e&&At){var s=At.querySelectorAll(".fragment.visible");s.length&&(t=s.length)}return{h:n,v:r,f:t}}function Z(){if(At&&Pt.fragments){var e=E(At.querySelectorAll(".fragment:not(.visible)"));if(e.length){var t=e[0].getAttribute("data-fragment-index");return e=At.querySelectorAll('.fragment[data-fragment-index="'+t+'"]'),d(e).forEach(function(e){e.classList.add("visible"),m("fragmentshown",{fragment:e})}),I(),!0}}return!1}function Q(){if(At&&Pt.fragments){var e=E(At.querySelectorAll(".fragment.visible"));if(e.length){var t=e[e.length-1].getAttribute("data-fragment-index");return e=At.querySelectorAll('.fragment[data-fragment-index="'+t+'"]'),d(e).forEach(function(e){e.classList.remove("visible"),m("fragmenthidden",{fragment:e})}),I(),!0}}return!1}function B(){clearTimeout(It),!Nt||O()||M()||(It=setTimeout(ot,Nt))}function G(){clearTimeout(It)}function J(){Pt.rtl?(M()||Z()===!1)&&U().left&&Y(Dt+1):(M()||Q()===!1)&&U().left&&Y(Dt-1)}function et(){Pt.rtl?(M()||Q()===!1)&&U().right&&Y(Dt-1):(M()||Z()===!1)&&U().right&&Y(Dt+1)}function tt(){(M()||Q()===!1)&&U().up&&Y(Dt,Ct-1)}function nt(){(M()||Z()===!1)&&U().down&&Y(Dt,Ct+1)}function rt(){if(Q()===!1)if(U().up)tt();else{var e=document.querySelector(xt+".past:nth-child("+Dt+")");if(e){var t=e.querySelectorAll("section").length-1||void 0,n=Dt-1;Y(n,t)}}}function ot(){Z()===!1&&(U().down?nt():et()),B()}function at(e){document.activeElement;var t=!(!document.activeElement||!document.activeElement.type&&!document.activeElement.href&&"inherit"===document.activeElement.contentEditable);if(!(t||e.shiftKey&&32!==e.keyCode||e.altKey||e.ctrlKey||e.metaKey)){if(O()&&-1===[66,190,191].indexOf(e.keyCode))return!1;var n=!1;if("object"==typeof Pt.keyboard)for(var r in Pt.keyboard)if(parseInt(r,10)===e.keyCode){var o=Pt.keyboard[r];"function"==typeof o?o.apply(null,[e]):"string"==typeof o&&"function"==typeof Reveal[o]&&Reveal[o].call(),n=!0}if(n===!1)switch(n=!0,e.keyCode){case 80:case 33:rt();break;case 78:case 34:ot();break;case 72:case 37:J();break;case 76:case 39:et();break;case 75:case 38:tt();break;case 74:case 40:nt();break;case 36:Y(0);break;case 35:Y(Number.MAX_VALUE);break;case 32:M()?x():e.shiftKey?rt():ot();break;case 13:M()?x():n=!1;break;case 66:case 190:case 191:R();break;case 70:N();break;default:n=!1}n?e.preventDefault():27===e.keyCode&&zt&&(T(),e.preventDefault()),B()}}function it(e){_t.startX=e.touches[0].clientX,_t.startY=e.touches[0].clientY,_t.startCount=e.touches.length,2===e.touches.length&&Pt.overview&&(_t.startSpan=u({x:e.touches[1].clientX,y:e.touches[1].clientY},{x:_t.startX,y:_t.startY}))}function st(e){if(_t.handled)navigator.userAgent.match(/android/gi)&&e.preventDefault();else{var t=e.touches[0].clientX,n=e.touches[0].clientY;if(2===e.touches.length&&2===_t.startCount&&Pt.overview){var r=u({x:e.touches[1].clientX,y:e.touches[1].clientY},{x:_t.startX,y:_t.startY});Math.abs(_t.startSpan-r)>_t.threshold&&(_t.handled=!0,_t.startSpan>r?q():x()),e.preventDefault()}else if(1===e.touches.length&&2!==_t.startCount){var o=t-_t.startX,a=n-_t.startY;o>_t.threshold&&Math.abs(o)>Math.abs(a)?(_t.handled=!0,J()):-_t.threshold>o&&Math.abs(o)>Math.abs(a)?(_t.handled=!0,et()):a>_t.threshold?(_t.handled=!0,tt()):-_t.threshold>a&&(_t.handled=!0,nt()),e.preventDefault()}}}function ct(){_t.handled=!1}function lt(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],it(e))}function dt(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],st(e))}function ut(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],ct(e))}function ft(e){if(Date.now()-Xt>600){Xt=Date.now();var t=e.detail||-e.wheelDelta;t>0?ot():rt()}}function vt(e){e.preventDefault();var t=d(document.querySelectorAll(xt)).length,n=Math.floor(e.clientX/Yt.wrapper.offsetWidth*t);Y(n)}function pt(e){e.preventDefault(),J()}function mt(e){e.preventDefault(),et()}function ht(e){e.preventDefault(),tt()}function gt(e){e.preventDefault(),nt()}function yt(e){e.preventDefault(),rt()}function bt(e){e.preventDefault(),ot()}function wt(){K()}function Lt(){k()}function Et(e){if(Ft&&M()){e.preventDefault();for(var t=e.target;t&&!t.nodeName.match(/section/gi);)t=t.parentNode;if(t&&!t.classList.contains("disabled")&&(x(),t.nodeName.match(/section/gi))){var n=parseInt(t.getAttribute("data-index-h"),10),r=parseInt(t.getAttribute("data-index-v"),10);Y(n,r)}}}function kt(e){var t=e.target.getAttribute("href");t&&(w(t),e.preventDefault())}var St,At,qt=".reveal .slides section",xt=".reveal .slides>section",Tt=".reveal .slides>section.present>section",Mt=".reveal .slides>section:first-child",Pt={width:960,height:700,margin:.1,minScale:.2,maxScale:1,controls:!0,progress:!0,history:!1,keyboard:!0,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,fragments:!0,autoSlide:0,mouseWheel:!1,rollingLinks:!0,previewLinks:!1,theme:null,transition:"default",transitionSpeed:"default",backgroundTransition:"default",dependencies:[]},Nt=0,Dt=0,Ct=0,Rt=[],Ot=1,Yt={},zt="WebkitPerspective"in document.body.style||"MozPerspective"in document.body.style||"msPerspective"in document.body.style||"OPerspective"in document.body.style||"perspective"in document.body.style,Ht="WebkitTransform"in document.body.style||"MozTransform"in document.body.style||"msTransform"in document.body.style||"OTransform"in document.body.style||"transform"in document.body.style,Xt=0,It=0,Wt=0,Ut=0,jt=0,Ft=!1,_t={startX:0,startY:0,startSpan:0,startCount:0,handled:!1,threshold:80};return{initialize:e,configure:i,sync:z,slide:Y,left:J,right:et,up:tt,down:nt,prev:rt,next:ot,prevFragment:Q,nextFragment:Z,navigateTo:Y,navigateLeft:J,navigateRight:et,navigateUp:tt,navigateDown:nt,navigatePrev:rt,navigateNext:ot,layout:k,availableRoutes:U,availableFragments:j,toggleOverview:T,togglePause:R,isOverview:M,isPaused:O,addEventListeners:s,removeEventListeners:c,getIndices:V,getSlide:function(e,t){var n=document.querySelectorAll(xt)[e],r=n&&n.querySelectorAll("section");return t!==void 0?r?r[t]:void 0:n},getPreviousSlide:function(){return St},getCurrentSlide:function(){return At},getScale:function(){return Ot},getConfig:function(){return Pt},getQueryHash:function(){var e={};return location.search.replace(/[A-Z0-9]+?=(\w*)/gi,function(t){e[t.split("=").shift()]=t.split("=").pop()}),e},isFirstSlide:function(){return null==document.querySelector(qt+".past")?!0:!1},isLastSlide:function(){return At&&At.classList.contains(".stack")?null==At.querySelector(qt+".future")?!0:!1:null==document.querySelector(qt+".future")?!0:!1},addEventListener:function(e,t,n){"addEventListener"in window&&(Yt.wrapper||document.querySelector(".reveal")).addEventListener(e,t,n)},removeEventListener:function(e,t,n){"addEventListener"in window&&(Yt.wrapper||document.querySelector(".reveal")).removeEventListener(e,t,n)}}}();