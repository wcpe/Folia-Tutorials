(()=>{"use strict";var e,t,r,a,o,f={},n={};function c(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return f[e].call(r.exports,r,r.exports,c),r.loaded=!0,r.exports}c.m=f,c.c=n,e=[],c.O=(t,r,a,o)=>{if(!r){var f=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],o=e[l][2];for(var n=!0,i=0;i<r.length;i++)(!1&o||f>=o)&&Object.keys(c.O).every((e=>c.O[e](r[i])))?r.splice(i--,1):(n=!1,o<f&&(f=o));if(n){e.splice(l--,1);var b=a();void 0!==b&&(t=b)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,a,o]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var f={};t=t||[null,r({}),r([]),r(r)];for(var n=2&a&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>f[t]=()=>e[t]));return f.default=()=>e,c.d(o,f),o},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>"assets/js/"+({53:"935f2afb",71:"14118563",85:"1f391b9e",192:"8043a861",195:"c4f5d8e4",402:"25284443",414:"393be207",508:"60290c7c",514:"1be78505",585:"644db9c5",671:"0e384e19",725:"e49c002a",748:"83f8456c",769:"5134e4bc",806:"a22e22e9",811:"b5b95b77",816:"66af47f6",817:"14eb3368",829:"95f79350",843:"9ca46a08",918:"17896441",920:"1a4e3797",994:"7627f69c"}[e]||e)+"."+{53:"f81bd7ef",71:"5a00d058",85:"74088b6e",192:"b4a2e127",195:"3782ab89",402:"1e38c15c",414:"f8e417d6",443:"502f7799",508:"654a7633",514:"1f6ad4b7",525:"d2c4b052",585:"c035c6ee",671:"bc8763f4",690:"bfaa72b2",725:"a6fea215",748:"81e8467d",769:"302c4528",806:"9b212656",811:"f9a210d2",816:"5c4dcbe7",817:"0a83c78a",829:"6596b926",843:"9009cb43",918:"72334183",920:"3c987a9f",972:"d4b03a54",994:"4a000ced"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="folia_tutorial:",c.l=(e,t,r,f)=>{if(a[e])a[e].push(t);else{var n,i;if(void 0!==r)for(var b=document.getElementsByTagName("script"),l=0;l<b.length;l++){var u=b[l];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){n=u;break}}n||(i=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,c.nc&&n.setAttribute("nonce",c.nc),n.setAttribute("data-webpack",o+r),n.src=e),a[e]=[t];var d=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(d.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=d.bind(null,n.onerror),n.onload=d.bind(null,n.onload),i&&document.head.appendChild(n)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/Folia-Tutorials/",c.gca=function(e){return e={14118563:"71",17896441:"918",25284443:"402","935f2afb":"53","1f391b9e":"85","8043a861":"192",c4f5d8e4:"195","393be207":"414","60290c7c":"508","1be78505":"514","644db9c5":"585","0e384e19":"671",e49c002a:"725","83f8456c":"748","5134e4bc":"769",a22e22e9:"806",b5b95b77:"811","66af47f6":"816","14eb3368":"817","95f79350":"829","9ca46a08":"843","1a4e3797":"920","7627f69c":"994"}[e]||e,c.p+c.u(e)},(()=>{var e={303:0,532:0};c.f.j=(t,r)=>{var a=c.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var f=c.p+c.u(t),n=new Error;c.l(f,(r=>{if(c.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),f=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+f+")",n.name="ChunkLoadError",n.type=o,n.request=f,a[1](n)}}),"chunk-"+t,t)}},c.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,f=r[0],n=r[1],i=r[2],b=0;if(f.some((t=>0!==e[t]))){for(a in n)c.o(n,a)&&(c.m[a]=n[a]);if(i)var l=i(c)}for(t&&t(r);b<f.length;b++)o=f[b],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(l)},r=self.webpackChunkfolia_tutorial=self.webpackChunkfolia_tutorial||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();