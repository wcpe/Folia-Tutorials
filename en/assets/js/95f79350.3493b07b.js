"use strict";(self.webpackChunkfolia_tutorial=self.webpackChunkfolia_tutorial||[]).push([[829],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(t),k=a,m=p["".concat(u,".").concat(k)]||p[k]||d[k]||l;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=k;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},700:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const l={sidebar_position:2},i="\u6765\u70b9\u524d\u620f\uff1a\u4fee\u6539\u73a9\u5bb6\u811a\u4e0b\u7684\u65b9\u5757",o={unversionedId:"\u5176\u4e09/\u4f8b\u4e00",id:"\u5176\u4e09/\u4f8b\u4e00",title:"\u6765\u70b9\u524d\u620f\uff1a\u4fee\u6539\u73a9\u5bb6\u811a\u4e0b\u7684\u65b9\u5757",description:"\u9996\u5148\uff0c\u6211\u60f3\u8bbe\u8ba1\u4e00\u70b9\u7279\u6548\u3002\u6bd4\u5982\u5728\u968f\u673a\u4f20\u9001\u524d\u8fde\u7eed\u4fee\u6539\u73a9\u5bb6\u811a\u4e0b\u7684\u65b9\u5757\u4e09\u6b21\uff0c\u6548\u679c\u4f9d\u6b21\u662f\u94bb\u77f3\u5757\u3001\u91d1\u5757\u3001\u94c1\u5757\uff0c\u95f4\u96941\u79d2\u3002  \u5728\u4f20\u7edfSpigot\u670d\u52a1\u7aef\u4e2d\uff0c\u53ef\u4ee5\u5199\u51fa\u5982\u4e0b\u7684\u4ee3\u7801\uff1a",source:"@site/docs/\u5176\u4e09/\u4f8b\u4e00.md",sourceDirName:"\u5176\u4e09",slug:"/\u5176\u4e09/\u4f8b\u4e00",permalink:"/Folia-Tutorials/en/\u5176\u4e09/\u4f8b\u4e00",draft:!1,editUrl:"https://github.com/xgpjun/Folia-Tutorials/blob/main/docs/\u5176\u4e09/\u4f8b\u4e00.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u9996\u5148\u662f",permalink:"/Folia-Tutorials/en/\u5176\u4e09/\u9996\u5148\u662f"},next:{title:"\u968f\u673a\u4f20\u9001\u5b9e\u73b0",permalink:"/Folia-Tutorials/en/\u5176\u4e09/\u4f8b\u4e8c"}},u={},c=[{value:"ScheduledTask\u662f\u4ec0\u4e48\u4e1c\u897f\u554a\uff1f",id:"scheduledtask\u662f\u4ec0\u4e48\u4e1c\u897f\u554a",level:3},{value:"\u4e3a\u4ec0\u4e48\u4e0a\u9762\u5199\u7684\u5ef6\u8fdf\u4e3a0L\uff0c\u4e0b\u9762\u5374\u51991L\uff1f",id:"\u4e3a\u4ec0\u4e48\u4e0a\u9762\u5199\u7684\u5ef6\u8fdf\u4e3a0l\u4e0b\u9762\u5374\u51991l",level:3},{value:"RegionScheduler()\u662f\u4ec0\u4e48\uff1f",id:"regionscheduler\u662f\u4ec0\u4e48",level:3}],s={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6765\u70b9\u524d\u620f\u4fee\u6539\u73a9\u5bb6\u811a\u4e0b\u7684\u65b9\u5757"},"\u6765\u70b9\u524d\u620f\uff1a\u4fee\u6539\u73a9\u5bb6\u811a\u4e0b\u7684\u65b9\u5757"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6211\u60f3\u8bbe\u8ba1\u4e00\u70b9\u7279\u6548\u3002\u6bd4\u5982\u5728\u968f\u673a\u4f20\u9001\u524d\u8fde\u7eed\u4fee\u6539\u73a9\u5bb6\u811a\u4e0b\u7684\u65b9\u5757\u4e09\u6b21\uff0c\u6548\u679c\u4f9d\u6b21\u662f\u94bb\u77f3\u5757\u3001\u91d1\u5757\u3001\u94c1\u5757\uff0c\u95f4\u96941\u79d2\u3002  \u5728\u4f20\u7edfSpigot\u670d\u52a1\u7aef\u4e2d\uff0c\u53ef\u4ee5\u5199\u51fa\u5982\u4e0b\u7684\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"        Block block = player.getLocation().add(0,-1,0).getBlock();\n        Material[] materials = {Material.DIAMOND_BLOCK,Material.GOLD_BLOCK,Material.IRON_BLOCK};\n        task = Bukkit.getScheduler().runTaskTimer(this, new Runnable() {\n            int i = 0;\n            @Override\n            public void run() {\n                block.setType(materials[i]);\n                i++;\n                if(i==3){\n                    //\u53d6\u6d88\u4efb\u52a1\n                    stop();\n                }\n            }\n        },0L,20L);\n")),(0,a.kt)("p",null,"\u5982\u679c\u6211\u76f4\u63a5\u5728Folia\u670d\u52a1\u7aef\u4e2d\u6d4b\u8bd5\u8fd9\u6bb5\u8c03\u5ea6\u7a0b\u5e8f\uff0c\u4f1a\u53d1\u73b0\u5b83\u7ed9\u6211\u629b\u51fa\u4e86\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"UnsupportedOperationException"),"\uff0c\u8868\u793a\u670d\u52a1\u7aef\u4e0d\u652f\u6301\u8fd9\u6837\u64cd\u4f5c\u3002\u90a3\u4e48\u6211\u4eec\u5e94\u8be5\u600e\u4e48\u529e\u5462\uff1f"),(0,a.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528Folia\u63d0\u4f9b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"RegionScheduler"),"\uff01\u867d\u7136\u6ca1\u6709\u4e3b\u7ebf\u7a0b\u7684\u6982\u5ff5\uff0c\u4f46\u662f\u6211\u4eec\u53ef\u4ee5\u628a\u8fd9\u4e2a\u533a\u57df\u7684\u7ebf\u7a0b\u5f53\u4f5c\u5b83\u81ea\u8eab\u7684\u4e3b\u7ebf\u7a0b\uff01\u5728\u4f20\u7edf\u7684Spigot\u670d\u52a1\u7aef\u4e2d\u4e3b\u7ebf\u7a0b\u7ba1\u7406\u4e86\u670d\u52a1\u5668\u5185\u6240\u6709\u533a\u5757\uff0c\u800c\u8fd9\u4e2a\u533a\u57df\u7684\u7ebf\u7a0b\u5927\u7ea6\u53ea\u7ba1\u7406\u4e86\u9644\u8fd1\u4e5d\u4e2a\u533a\u5757\uff0c\u4f46\u662f\u5728\u5b9e\u73b0\u7684\u539f\u7406\u4e0a\u662f\u5dee\u4e0d\u591a\u7684\uff01\u540c\u6837\u7684\uff0c\u901a\u8fc7\u8fd9\u4e2a\u65b9\u5f0f\u83b7\u5f97\u7684\u533a\u57df\u8c03\u5ea6\u5668\u53ea\u80fd\u64cd\u4f5c\u5b83\u62e5\u6709\u533a\u5757\u5185\u7684\u65b9\u5757\uff0c\u5c31\u50cf\u5728\u4f20\u7edfSpigot\u4e2d\u4f60\u65e0\u6cd5\u76f4\u63a5\u64cd\u4f5c\u522b\u7684\u670d\u52a1\u5668\u4e2d\u67d0\u4e9b\u65b9\u5757\uff0c\u4e0d\u662f\u5417\uff1f"),(0,a.kt)("p",null,"\u7ecf\u8fc7\u7b80\u5355\u7684\u4fee\u6539\u6211\u4eec\u5f97\u51fa\u4e86\u8fd9\u6837\u7684\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    ScheduledTask task; \n        public void stop(){\n        task.cancel();\n    }\n        ...\n        ...\n                Block block = player.getLocation().add(0,-1,0).getBlock();\n        Material[] materials = {Material.DIAMOND_BLOCK,Material.GOLD_BLOCK,Material.IRON_BLOCK};\n        task = Bukkit.getRegionScheduler().runAtFixedRate(this, block.getLocation(), new Consumer<ScheduledTask>() {\n            int i = 0;\n            @Override\n            public void accept(ScheduledTask scheduledTask) {\n                    block.setType(materials[i]);\n                    i++;\n                    if(i==3){\n                        //\u53d6\u6d88\u4efb\u52a1\n                        stop();\n                    }\n            }\n        },1L,20L);\n")),(0,a.kt)("p",null,"\u7f16\u8bd1\u6253\u5305\u4e4b\u540e\u5728Folia\u670d\u52a1\u7aef\u6d4b\u8bd5\uff0c\u6210\u529f\u4e86\uff01 \u811a\u4e0b\u7684\u65b9\u5757\u5b9e\u73b0\u4e86\u9884\u671f\u7684\u53d8\u5316\u3002"),(0,a.kt)("h3",{id:"scheduledtask\u662f\u4ec0\u4e48\u4e1c\u897f\u554a"},"ScheduledTask\u662f\u4ec0\u4e48\u4e1c\u897f\u554a\uff1f"),(0,a.kt)("p",null,"\u7531\u4e8e\u4e0d\u518d\u4f7f\u7528BukkitAPI\u63d0\u4f9b\u7684\u8c03\u5ea6\u7a0b\u5e8f\uff0c\u8fd9\u662fFolia\u6dfb\u52a0\u7684\u4e00\u4e2aBukkitTask\u66ff\u4ee3\u54c1\u3002"),(0,a.kt)("p",null,"ScheduledTask\u5c31\u50cfBukkitTask\u4e00\u6837\uff0c\u540c\u6837\u4f5c\u4e3a\u8c03\u5ea6\u7ba1\u7406\u5668\u7684\u8fd4\u56de\u503c\uff0c\u4f60\u53ef\u4ee5\u50cfBukkitTask\u4e00\u6837\u8c03\u7528\u5b83\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"cancel()"),"\u65b9\u6cd5\u6765\u4e2d\u6b62\u8c03\u5ea6\u7a0b\u5e8f\u7684\u8fd0\u884c\uff0c\u5c31\u50cf\u4f8b\u5b50\u4e2d\u7684\u90a3\u6837\u3002"),(0,a.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u4e0a\u9762\u5199\u7684\u5ef6\u8fdf\u4e3a0l\u4e0b\u9762\u5374\u51991l"},"\u4e3a\u4ec0\u4e48\u4e0a\u9762\u5199\u7684\u5ef6\u8fdf\u4e3a0L\uff0c\u4e0b\u9762\u5374\u51991L\uff1f"),(0,a.kt)("p",null,'FoliaAPI\u89c4\u5b9a\u4e86\u6709\u5173\u533a\u5757\u3001\u5b9e\u4f53\u7684\u8c03\u5ea6\u7684\u5ef6\u8fdf\u90fd\u9700\u8981\u5927\u4e8e\u96f6\uff0c\u6bd5\u7adf\u8c03\u5ea6\u7a0b\u5e8f\u7684\u8fd0\u884c\u65f6\u95f4\u662f"\u4e0b\u4e00tick"\u3002'),(0,a.kt)("h3",{id:"regionscheduler\u662f\u4ec0\u4e48"},"RegionScheduler()\u662f\u4ec0\u4e48\uff1f"),(0,a.kt)("p",null,"Bukkit.getRegionScheduler()\u662fFolia\u63d0\u4f9b\u4ee5\u83b7\u5f97",(0,a.kt)("inlineCode",{parentName:"p"},"RegionScheduler"),"\u7684\u65b9\u6cd5\uff0c\u8fd9\u4e2a\u8c03\u5ea6\u9700\u8981\u4f20\u5165\u4e00\u4e2aLocation\uff0c\u6267\u884c\u8be5Location\u6240\u5728\u533a\u57df\u76f8\u5173\u7684\u4efb\u52a1\uff0c\u5176\u4e3b\u8981\u6709\u4e09\u79cd\u4e3b\u8981\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"run(Plugin plugin, Location location, Consumer<ScheduledTask> task)\n\nrunDelayed(Plugin plugin, Location location, Consumer<ScheduledTask> task,long delayTicks)\n\nrunAtFixedRate(Plugin plugin, Location location, Consumer<ScheduledTask> task, long initialDelayTicks, long periodTicks);    \n")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u628a\u5b83\u4eec\u7406\u89e3\u4e3aBukkit\u4e2d\u7684runTask\u3001runTaskLater\u3001runTaskTimer\uff01"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Consumer<ScheduledTask> task"),"\u662f\u4e00\u4e2a\u65b9\u6cd5\uff0c\u9700\u8981\u4f20\u5165\u4ee5ScheduledTask\u7c7b\u53c2\u6570\u5e76\u65e0\u8fd4\u56de\u503c\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u662f\u4e0d\u540c\u7684\u5199\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Bukkit.getRegionScheduler().run(instance, Location, new Consumer<ScheduledTask>() {\n                    //some field\n            @Override\n            public void accept(ScheduledTask scheduledTask) {\n                //code\n            }\n});\n//lambda\nBukkit.getAsyncScheduler().runNow(instance,scheduledTask -> {\n    //code\n});\nBukkit.getRegionScheduler().run(XgpLottery.instance, player.getLocation(), scheduledTask -> Class.methed()));\n\n")))}d.isMDXComponent=!0}}]);