"use strict";(self.webpackChunkfolia_tutorial=self.webpackChunkfolia_tutorial||[]).push([[255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),k=i,m=d["".concat(p,".").concat(k)]||d[k]||s[k]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=k;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[d]="string"==typeof e?e:i,o[1]=a;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const l={sidebar_position:3},o=void 0,a={unversionedId:"\u5f00\u59cb/API",id:"\u5f00\u59cb/API",title:"API",description:"\u76ee\u524d\uff0cBukkit\u4e2d\u6709\u5f88\u591aAPI\u662f\u4f9d\u8d56\u4e3b\u7ebf\u7a0b\u5b9e\u73b0\u7684\uff0c\u4f8b\u5982Bukkit Scheduler\u3002",source:"@site/docs/\u5f00\u59cb/API.md",sourceDirName:"\u5f00\u59cb",slug:"/\u5f00\u59cb/API",permalink:"/Folia-Tutorials/\u5f00\u59cb/API",draft:!1,editUrl:"https://github.com/xgpjun/Folia-Tutorials/blob/main/docs/\u5f00\u59cb/API.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u673a\u5236",permalink:"/Folia-Tutorials/\u5f00\u59cb/\u673a\u5236"},next:{title:"\u8c03\u5ea6\u7a0b\u5e8f",permalink:"/Folia-Tutorials/\u5f00\u59cb/\u8c03\u5ea6\u7a0b\u5e8f"}},p={},u=[{value:"\u6dfb\u52a0",id:"\u6dfb\u52a0",level:3},{value:"\u4e0d\u518d\u53ef\u7528\u7684API",id:"\u4e0d\u518d\u53ef\u7528\u7684api",level:3},{value:"\u8ba1\u5212\u4e2d\u8981\u6dfb\u52a0\u7684API(\u5b98\u65b9\u753b\u997c)",id:"\u8ba1\u5212\u4e2d\u8981\u6dfb\u52a0\u7684api\u5b98\u65b9\u753b\u997c",level:3}],c={toc:u},d="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u76ee\u524d\uff0cBukkit\u4e2d\u6709\u5f88\u591aAPI\u662f\u4f9d\u8d56\u4e3b\u7ebf\u7a0b\u5b9e\u73b0\u7684\uff0c\u4f8b\u5982Bukkit Scheduler\u3002"),(0,i.kt)("p",null,"Folia\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"RegionScheduler"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"EntityScheduler"),"\u5141\u8bb8\u5c06\u4efb\u52a1\u8c03\u5ea6\u5230\u201c\u62e5\u6709\u201d\u8be5\u7279\u5b9a\u4f4d\u7f6e\u6216\u5b9e\u4f53\u7684\u533a\u57df\u7684\u201c\u4e0b\u4e00\u4e2atick\u201d\u8fd0\u884c\u3002"),(0,i.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u8c03\u5ea6\u5668\u6765\u521b\u5efa\u5728\u7279\u5b9a\u533a\u57df\u4e2d\u4e0b\u4e00tick\u65f6\u6267\u884c\u7684\u4efb\u52a1\u3002\u4f8b\u5982\uff0c\u5728\u8be5\u533a\u57df\u5185\u4e0b\u4e00tick\u65f6\u8fdb\u884c\u67d0\u4e2a\u4f4d\u7f6e\u4e0a\u7684\u64cd\u4f5c\uff0c\u6216\u8005\u5728\u8be5\u533a\u57df\u7684\u5b9e\u4f53\u4e0b\u4e00tick\u65f6\u6267\u884c\u67d0\u9879\u4efb\u52a1\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e9b\u65b9\u6cd5\u5305\u542b\u5728PaperAPI\u5728\uff0c\u5f53\u7136\u53ef\u4ee5\u5728Paper\u7aef\u8c03\u7528\uff0c\u53ea\u4e0d\u8fc7\u5b83\u4eec\u90fd\u4f1a\u5728Paper\u7684\u4e3b\u7ebf\u7a0b\u4e2d\u6267\u884c\u3002"),(0,i.kt)("h3",{id:"\u6dfb\u52a0"},"\u6dfb\u52a0"),(0,i.kt)("p",null,"\u6dfb\u52a0\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"RegionScheduler"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncScheduler"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"GlobalRegionScheduler"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"EntityScheduler"),"\u4f5c\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"BukkitScheduler"),"\u7684\u66ff\u4ee3\u54c1\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"EntityScheduler"),"\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"entity#getScheduler"),"\u83b7\u5f97\uff0c\u5176\u4f59\u5219\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"Bukkit"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"Server"),"\u7c7b\u83b7\u5f97\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Bukkit#isownedbycurrentreregion")," \u7528\u4e8e\u68c0\u6d4b\u5f53\u524d\u4ee3\u7801\u6267\u884c\u7684\u533a\u57df\u662f\u5426\u6709\u5bf9\u5e94\u7684\u5b9e\u4f53\u3001\u65b9\u5757\u3001Location\u7b49\u3002"),(0,i.kt)("p",null,"\u56e0\u4e3a\u6ca1\u6709\u660e\u786e\u7684\u4e3b\u7ebf\u7a0b\uff0c\u4e8b\u4ef6\u7684async\u4fee\u9970\u7b26\u90fd\u88ab\u6807\u8bb0\u4e86\u5f03\u7528\u3002"),(0,i.kt)("h3",{id:"\u4e0d\u518d\u53ef\u7528\u7684api"},"\u4e0d\u518d\u53ef\u7528\u7684API"),(0,i.kt)("p",null,"\u90e8\u5206 \u4f20\u9001\u95e8/\u91cd\u751f/\u767b\u5f55\u7684API\u4e0d\u53ef\u7528\u3002"),(0,i.kt)("p",null,"\u8bb0\u5206\u677f\u3001\u4e16\u754c\u52a0\u8f7d\u548c\u5378\u8f7dAPI\u5747\u4e0d\u53ef\u7528\u3002"),(0,i.kt)("p",null,"Entity#teleport\u3002\u5728\u4efb\u4f55\u60c5\u51b5\u4e0b\u7684\u4f20\u9001\u90fd\u4e0d\u80fd\u4f7f\u7528\uff0c\u4f7f\u7528teleportAsync"),(0,i.kt)("h3",{id:"\u8ba1\u5212\u4e2d\u8981\u6dfb\u52a0\u7684api\u5b98\u65b9\u753b\u997c"},"\u8ba1\u5212\u4e2d\u8981\u6dfb\u52a0\u7684API(\u5b98\u65b9\u753b\u997c)"),(0,i.kt)("p",null,"\u4e00\u79cd\u5f02\u6b65\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u7ebf\u7a0b\u4e0a\u4e0b\u6587\u4e2d\u6267\u884c\uff0c\u5141\u8bb8\u4e8b\u4ef6\u5728\u7a0d\u5fae\u665a\u7684\u8282\u70b9\u6267\u884c\u3002\u4f8b\u5982\u8bbf\u95ee\u6240\u5728\u533a\u57df\u4e0d\u76f8\u540c\u7684\u65b9\u5757\u6570\u636e\uff0c\u9700\u8981\u5148\u5f02\u6b65\u52a0\u8f7d\u533a\u5757\u3002"),(0,i.kt)("p",null,"\u4e16\u754c\u52a0\u8f7d/\u5378\u8f7d"),(0,i.kt)("p",null,"\u52a0\u5f3a\u7ebf\u7a0b\u5b89\u5168\u68c0\u67e5\u3002"),(0,i.kt)("p",null,"and more..."))}s.isMDXComponent=!0}}]);