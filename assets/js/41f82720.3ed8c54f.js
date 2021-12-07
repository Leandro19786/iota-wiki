"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[16910],{75283:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={description:"Smart Contracts can only interact with the world by using the Sandbox interface which provides limited and deterministic access to the state through a key/value storage abstraction.",image:"/img/sandbox.png",keywords:["ISCP","Smart Contracts","Sandbox","interface","storage abstraction"]},s="Sandbox Interface",l={unversionedId:"guide/core_concepts/sandbox",id:"guide/core_concepts/sandbox",isDocsHomePage:!1,title:"Sandbox Interface",description:"Smart Contracts can only interact with the world by using the Sandbox interface which provides limited and deterministic access to the state through a key/value storage abstraction.",source:"@site/external/wasp/documentation/docs/guide/core_concepts/sandbox.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/sandbox",permalink:"/smart-contracts/guide/core_concepts/sandbox",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/core_concepts/sandbox.md",tags:[],version:"current",frontMatter:{description:"Smart Contracts can only interact with the world by using the Sandbox interface which provides limited and deterministic access to the state through a key/value storage abstraction.",image:"/img/sandbox.png",keywords:["ISCP","Smart Contracts","Sandbox","interface","storage abstraction"]},sidebar:"tutorialSidebar",previous:{title:"Anatomy of a Smart Contract",permalink:"/smart-contracts/guide/core_concepts/smart-contract-anatomy"},next:{title:"Core Contracts",permalink:"/smart-contracts/guide/core_concepts/core_contracts/overview"}},u=[],d={toc:u};function p(t){var e=t.components,i=(0,a.Z)(t,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sandbox-interface"},"Sandbox Interface"),(0,o.kt)("p",null,"The only way a smart contract can interact with the world (access the state, call other smart contracts or send transactions) is by using the Sandbox interface."),(0,o.kt)("p",null,"The Sandbox provides limited and deterministic access to the state through a key/value storage abstraction."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sandbox",src:n(16010).Z})),(0,o.kt)("p",null,"Besides reading and writing to the contract state, the Sandbox interface allows Smart contracts to access:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the AgentID of the contract"),(0,o.kt)("li",{parentName:"ul"},"the details of the current function invocation (request or view call)"),(0,o.kt)("li",{parentName:"ul"},"the balances owned by the contract"),(0,o.kt)("li",{parentName:"ul"},"the AgentID of whoever deployed the contract"),(0,o.kt)("li",{parentName:"ul"},"the timestamp of the current block"),(0,o.kt)("li",{parentName:"ul"},"cryptographic utilities (hashing, verify signatures, obtain addresses from public keys, etc)"),(0,o.kt)("li",{parentName:"ul"},"events dispatch"),(0,o.kt)("li",{parentName:"ul"},"Entropy (deterministic randomness)"),(0,o.kt)("li",{parentName:"ul"},"logging (usually only used for debugging when testing)")))}p.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,c(c({ref:e},u),{},{components:n})):r.createElement(f,c({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},16010:function(t,e,n){e.Z=n.p+"assets/images/sandbox-c1866a6e91a9d1630540da307e84ca19.png"}}]);