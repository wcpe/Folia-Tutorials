"use strict";(self.webpackChunkfolia_tutorial=self.webpackChunkfolia_tutorial||[]).push([[402],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),f=a,d=c["".concat(p,".").concat(f)]||c[f]||m[f]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3025:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:5},o="[\u5176\u56db] \u6742\u9879",l={unversionedId:"\u5176\u56db",id:"\u5176\u56db",title:"[\u5176\u56db] \u6742\u9879",description:"\u8fd9\u91cc\u8bb0\u5f55\u4e86\u4e00\u4e9b\u6742\u4e71\u7684\u4e8b\u9879\uff0c\u4e5f\u8bb8\u5bf9\u4f60\u7684\u5f00\u53d1\u6709\u7528\uff01",source:"@site/docs/\u5176\u56db.md",sourceDirName:".",slug:"/\u5176\u56db",permalink:"/Folia-Tutorials/\u5176\u56db",draft:!1,editUrl:"https://github.com/xgpjun/Folia-Tutorials/blob/main/docs/\u5176\u56db.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u5c0f\u7ed3",permalink:"/Folia-Tutorials/\u5176\u4e09/\u5c0f\u7ed3"},next:{title:"[\u5176\u4e94] \u7ed3\u675f\u4e86\uff1f",permalink:"/Folia-Tutorials/\u5176\u4e94"}},p={},s=[{value:"\u540c\u65f6\u652f\u6301Spigot\u4e0eFolia",id:"\u540c\u65f6\u652f\u6301spigot\u4e0efolia",level:2},{value:"\u652f\u6301Java8",id:"\u652f\u6301java8",level:2},{value:"bstats",id:"bstats",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5176\u56db-\u6742\u9879"},"[\u5176\u56db]"," \u6742\u9879"),(0,a.kt)("p",null,"\u8fd9\u91cc\u8bb0\u5f55\u4e86\u4e00\u4e9b\u6742\u4e71\u7684\u4e8b\u9879\uff0c\u4e5f\u8bb8\u5bf9\u4f60\u7684\u5f00\u53d1\u6709\u7528\uff01"),(0,a.kt)("h2",{id:"\u540c\u65f6\u652f\u6301spigot\u4e0efolia"},"\u540c\u65f6\u652f\u6301Spigot\u4e0eFolia"),(0,a.kt)("p",null,"\u7531\u4e8eFoliaAPI\u662f\u57fa\u4e8eBukkitAPI\u7684\uff0c\u7406\u8bba\u4e0a\u4f60\u4e5f\u53ef\u4ee5\u5199\u51fa\u4e00\u4e2a\u540c\u65f6\u652f\u6301Folia\u4e0eSpigot\u670d\u52a1\u7aef\u7684\u63d2\u4ef6\uff0c\u53ea\u9700\u8981\u5305\u88c5\u5bf9\u5e94\u7684\u65b9\u6cd5\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u57fa\u672c\u601d\u8def\u662f\u5224\u65ad\u670d\u52a1\u7aef\u7c7b\u578b\uff0c\u6bd4\u5982\u53cd\u5c04Folia\u7279\u6709\u7684\u7c7b:",(0,a.kt)("inlineCode",{parentName:"p"},"io.papermc.paper.threadedregions.RegionizedServerInitEvent"),"\uff0c\u7136\u540e\u5728\u5de5\u5177\u7c7b\u4e2d\u6267\u884c\u4e0d\u540c\u7684\u4ee3\u7801\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/xgpjun/FoliaLib"},"\u8fd9\u91cc\u7684\u4ee3\u7801"),"\u662f\u6211\u7684\u4e00\u4e2a\u7b80\u5355\u5b9e\u73b0\uff0c\u6211\u5c1d\u8bd5\u5305\u88c5\u4e86FoliaAPI\u548cBukkitAPI\u4e2d\u7684\u8c03\u5ea6\u7b49API\u3002\u4ee3\u7801\u4ec5\u4f9b\u53c2\u8003\uff01\u7531\u4e8eFolia\u670d\u52a1\u7aef\u53ef\u80fd\u6709\u5f88\u591a\u4fee\u6539\uff0c\u8bf7\u5c3d\u91cf\u4e0d\u8981\u76f4\u63a5\u4f7f\u7528\uff0c\u6216\u8005\u8bf7\u81ea\u884c\u6253\u5305\u5230\u81ea\u5df1\u7684\u6e90\u4ee3\u7801\u4e2d\u3002"),(0,a.kt)("h2",{id:"\u652f\u6301java8"},"\u652f\u6301Java8"),(0,a.kt)("p",null,"\u65e2\u7136\u652f\u6301\u4e86Spigot\uff0c\u7531\u4e8e\u7f16\u8bd1Folia\u63d2\u4ef6\u9700\u8981\u4f7f\u7528Java17\uff0c\u5982\u679c\u4f60\u5728Java8\u73af\u5883\u4e2d\u52a0\u8f7d\u65f6\u629b\u51fa\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"java.lang.UnsupportedClassVersionError"),"\uff0c\u90a3\u4e48\u4f60\u9700\u8981\u6ce8\u610f\u5728pom.xml\u914d\u7f6e\u91ccmaven-compiler-plugin\u7684source\u548ctarget\u662f\u5426\u4e3a1.8\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-compiler-plugin</artifactId>\n                <version>3.8.1</version>\n                <configuration>\n                    <source>1.8</source>\n                    <target>1.8</target>\n                </configuration>\n            </plugin>\n")),(0,a.kt)("h2",{id:"bstats"},"bstats"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u53d1\u73b0bstats\u4e5f\u4f7f\u7528\u4e86BukkitAPI\u4e2d\u7684\u8c03\u5ea6\u7a0b\u5e8f\uff0c\u56e0\u6b64\u9700\u8981\u5bf9bstats\u4e5f\u8fdb\u884c\u4e00\u4e9b\u66f4\u6539\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\u9009\u62e9\u76f4\u63a5\u590d\u5236\u4e00\u4e2ajava\u4e0b\u6765\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Bastian/bstats-metrics/blob/1.x.x/bstats-bukkit/src/main/java/org/bstats/bukkit/Metrics.java"},"bstats-metrics"),"  \u4fee\u6539191\u884c\uff0c  Bukkit.getScheduler().runTask(plugin, this::submitData);"),(0,a.kt)("p",null,"\u4f7f\u7528\u4e0a\u6587\u4e2dAsyncScheduler\u66ff\u4ee3\u4e4b\uff01"))}m.isMDXComponent=!0}}]);