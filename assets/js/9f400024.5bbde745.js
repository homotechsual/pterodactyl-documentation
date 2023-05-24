"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[655],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=p(n),g=a,c=d["".concat(s,".").concat(g)]||d[g]||m[g]||l;return n?r.createElement(c,i(i({ref:e},u),{},{components:n})):r.createElement(c,i({ref:e},u))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4380:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},i="Upgrading Wings",o={unversionedId:"Documentation/Wings/upgrading",id:"Documentation/Wings/upgrading",title:"Upgrading Wings",description:"Upgrading Wings is a painless process and should take less than a minute to complete.",source:"@site/docs/Documentation/Wings/upgrading.md",sourceDirName:"Documentation/Wings",slug:"/Documentation/Wings/upgrading",permalink:"/pterodactyl-documentation/docs/Documentation/Wings/upgrading",draft:!1,editUrl:"https://github.com/QuintenQVD0/pterodactyl-documentation/docs/Documentation/Wings/upgrading.md",tags:[],version:"current",frontMatter:{},sidebar:"DocsSidebar",previous:{title:"Installing Wings",permalink:"/pterodactyl-documentation/docs/Documentation/Wings/installing"},next:{title:"Migrating to Wings",permalink:"/pterodactyl-documentation/docs/Documentation/Wings/migrating"}},s={},p=[{value:"Wings Version Requirements",id:"wings-version-requirements",level:2},{value:"Download Updated Binary",id:"download-updated-binary",level:2},{value:"Restart Process",id:"restart-process",level:2}],u={toc:p},d="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upgrading-wings"},"Upgrading Wings"),(0,a.kt)("p",null,"Upgrading Wings is a painless process and should take less than a minute to complete."),(0,a.kt)("h2",{id:"wings-version-requirements"},"Wings Version Requirements"),(0,a.kt)("p",null,"Each version of Pterodactyl Panel also has a corresponding minimum version of Wings that\nis required for it to run. Please see the chart below for how these versions line up. In\nmost cases your base Wings version should match that of your Panel."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Panel Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Wings Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Supported"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.0.x"),(0,a.kt)("td",{parentName:"tr",align:null},"1.0.x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.1.x"),(0,a.kt)("td",{parentName:"tr",align:null},"1.1.x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.2.x"),(0,a.kt)("td",{parentName:"tr",align:null},"1.2.x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.3.x"),(0,a.kt)("td",{parentName:"tr",align:null},"1.3.x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.4.x"),(0,a.kt)("td",{parentName:"tr",align:null},"1.4.x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.5.x"),(0,a.kt)("td",{parentName:"tr",align:null},"1.4.x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.6.x"),(0,a.kt)("td",{parentName:"tr",align:null},"1.4.x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.7.x"),(0,a.kt)("td",{parentName:"tr",align:null},"1.5.x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.8.x"),(0,a.kt)("td",{parentName:"tr",align:null},"1.6.x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.9.x"),(0,a.kt)("td",{parentName:"tr",align:null},"1.6.x"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"1.10.x")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"1.7.x")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"1.11.x")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"1.11.x")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"NOTE: There are no 1.8.x, 1.9.x, or 1.10.x releases of Wings.")),(0,a.kt)("h2",{id:"download-updated-binary"},"Download Updated Binary"),(0,a.kt)("p",null,"First, download the updated wings binary into ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),". You will need to stop Wings briefly. ",(0,a.kt)("em",{parentName:"p"},"Your running\nservers ",(0,a.kt)("strong",{parentName:"em"},"will not")," be affected.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'systemctl stop wings\ncurl -L -o /usr/local/bin/wings "https://github.com/pterodactyl/wings/releases/latest/download/wings_linux_$([[ "$(uname -m)" == "x86_64" ]] && echo "amd64" || echo "arm64")"\nchmod u+x /usr/local/bin/wings\n')),(0,a.kt)("h2",{id:"restart-process"},"Restart Process"),(0,a.kt)("p",null,"Finally, restart the wings process. Your running servers will not be affected and any open\nconnections to the instance will re-connect automatically."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart wings\n")))}m.isMDXComponent=!0}}]);