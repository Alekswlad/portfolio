(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var c=r.getElementsByTagName("script");c.length&&(e=c[c.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.p,t.p,t.p,t.p,t.p,t.p,t.p,[...document.querySelectorAll(".control")].forEach((t=>{t.addEventListener("click",(function(){document.querySelector(".active-btn").classList.remove("active-btn"),this.classList.add("active-btn"),document.querySelector(".active").classList.remove("active"),document.getElementById(t.dataset.id).classList.add("active")}))}))})();