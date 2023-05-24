"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?o.createElement(g,a(a({ref:t},p),{},{components:n})):o.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(7462),i=(n(7294),n(3905));const r={},a="Building Wings",l={unversionedId:"Community/Customization/wings",id:"Community/Customization/wings",title:"Building Wings",description:"Do not run the following steps on your production nodes.",source:"@site/docs/Community/Customization/wings.md",sourceDirName:"Community/Customization",slug:"/Community/Customization/wings",permalink:"/pterodactyl-documentation/docs/Community/Customization/wings",draft:!1,editUrl:"https://github.com/QuintenQVD0/pterodactyl-documentation/docs/Community/Customization/wings.md",tags:[],version:"current",frontMatter:{},sidebar:"CommunitySidebar",previous:{title:"Building Panel Assets",permalink:"/pterodactyl-documentation/docs/Community/Customization/panel"}},s={},u=[{value:"Build Requirements",id:"build-requirements",level:2},{value:"Building",id:"building",level:2},{value:"Install the new binary",id:"install-the-new-binary",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"building-wings"},"Building Wings"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Do ",(0,i.kt)("strong",{parentName:"p"},"not")," run the following steps on your production nodes.")),(0,i.kt)("p",null,"Wings is written in Go. This makes it very easy to modify and compile it on your own, and distribute your own binaries.\nThis guide will cover the steps necessary to build it yourself."),(0,i.kt)("p",null,"It will not, however, explain where to look for certain aspects of Wings and which changes are necessary to achieve specific results. Knowledge of the Go language is required if you want to modify it."),(0,i.kt)("p",null,"Building Go programs is very easy, and the same also applies to Wings. Go is cross-platform, but Wings only supports Linux at the moment. The easiest way to compile it for Linux is to run the commands on a Linux machine."),(0,i.kt)("h2",{id:"build-requirements"},"Build Requirements"),(0,i.kt)("p",null,"An up to date version of Go is required to compile Wings. The minimum version can be found at the top of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pterodactyl/wings/blob/develop/go.mod"},"go.mod")," file. See the ",(0,i.kt)("a",{parentName:"p",href:"https://golang.org/doc/install"},"official instructions")," for help with installing Go."),(0,i.kt)("h2",{id:"building"},"Building"),(0,i.kt)("p",null,"Execute the following command in your local clone of the repository to compile Wings into a binary."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go build\n")),(0,i.kt)("p",null,"You should now have a ",(0,i.kt)("inlineCode",{parentName:"p"},"wings")," binary file in your wings directory."),(0,i.kt)("h2",{id:"install-the-new-binary"},"Install the new binary"),(0,i.kt)("admonition",{title:"Root required",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Some the following commands require root permissions. Prepend them with ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo")," if you are not logged in as root.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Backup the current installation of wings")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mv /usr/local/bin/wings /usr/local/bin/wings-backup\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Place the new binary in ",(0,i.kt)("inlineCode",{parentName:"li"},"/usr/local/bin"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cp ./wings /usr/local/bin\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Restart wings ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"systemctl restart wings\n")),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If the wings service does not start properly, you can try to start Wings in a console window."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wings --debug\n")),(0,i.kt)("p",null,"Remember to stop the system service before, and re-enable it afterwards."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"systemctl stop wings\n\nsystemctl start wings\n")))}m.isMDXComponent=!0}}]);