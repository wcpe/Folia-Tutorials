(()=>{"use strict";var e,t,r,a,o,f={},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return f[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=f,i.c=n,e=[],i.O=(t,r,a,o)=>{if(!r){var f=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],o=e[u][2];for(var n=!0,c=0;c<r.length;c++)(!1&o||f>=o)&&Object.keys(i.O).every((e=>i.O[e](r[c])))?r.splice(c--,1):(n=!1,o<f&&(f=o));if(n){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var f={};t=t||[null,r({}),r([]),r(r)];for(var n=2&a&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>f[t]=()=>e[t]));return f.default=()=>e,i.d(o,f),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"assets/js/"+({53:"935f2afb",71:"14118563",85:"1f391b9e",192:"8043a861",195:"c4f5d8e4",402:"25284443",414:"393be207",508:"60290c7c",514:"1be78505",578:"b3d63a03",671:"0e384e19",725:"e49c002a",748:"83f8456c",769:"5134e4bc",806:"a22e22e9",811:"b5b95b77",816:"66af47f6",817:"14eb3368",829:"95f79350",843:"9ca46a08",918:"17896441",920:"1a4e3797",994:"7627f69c"}[e]||e)+"."+{53:"ab8921c8",71:"5a00d058",85:"74088b6e",192:"4a1d9546",195:"3782ab89",402:"88904437",414:"bae5db41",443:"502f7799",508:"859b0695",514:"1f6ad4b7",525:"d2c4b052",578:"bdf9c6e0",671:"a2ea3e72",690:"bfaa72b2",725:"e38feaef",748:"c33d908f",769:"31bef25d",806:"9b212656",811:"0fa7c086",816:"ed9bf81e",817:"0a83c78a",829:"3493b07b",843:"9009cb43",918:"72334183",920:"3c987a9f",972:"d4b03a54",994:"96d6cb99"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="folia_tutorial:",i.l=(e,t,r,f)=>{if(a[e])a[e].push(t);else{var n,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var b=l[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==o+r){n=b;break}}n||(c=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,i.nc&&n.setAttribute("nonce",i.nc),n.setAttribute("data-webpack",o+r),n.src=e),a[e]=[t];var d=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(d.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=d.bind(null,n.onerror),n.onload=d.bind(null,n.onload),c&&document.head.appendChild(n)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/Folia-Tutorials/en/",i.gca=function(e){return e={14118563:"71",17896441:"918",25284443:"402","935f2afb":"53","1f391b9e":"85","8043a861":"192",c4f5d8e4:"195","393be207":"414","60290c7c":"508","1be78505":"514",b3d63a03:"578","0e384e19":"671",e49c002a:"725","83f8456c":"748","5134e4bc":"769",a22e22e9:"806",b5b95b77:"811","66af47f6":"816","14eb3368":"817","95f79350":"829","9ca46a08":"843","1a4e3797":"920","7627f69c":"994"}[e]||e,i.p+i.u(e)},(()=>{var e={303:0,532:0};i.f.j=(t,r)=>{var a=i.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var f=i.p+i.u(t),n=new Error;i.l(f,(r=>{if(i.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),f=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+f+")",n.name="ChunkLoadError",n.type=o,n.request=f,a[1](n)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,f=r[0],n=r[1],c=r[2],l=0;if(f.some((t=>0!==e[t]))){for(a in n)i.o(n,a)&&(i.m[a]=n[a]);if(c)var u=c(i)}for(t&&t(r);l<f.length;l++)o=f[l],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(u)},r=self.webpackChunkfolia_tutorial=self.webpackChunkfolia_tutorial||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();