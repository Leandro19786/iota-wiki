"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[64195,29514],{39738:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(22122),r=n(67294),l=n(5977),o=n(45697),i=n.n(o),s=n(54725),c=n(6832),u=n(19257),m=n(51402);function d(e){var t=e.title,n=e.image,a=e.link,o=e.description,i=(0,l.k6)();return r.createElement("div",{className:"col margin-vert--md"},r.createElement("div",{className:"card card--full-height",onClick:function(e){e.preventDefault(),i.push(a)}},n&&r.createElement("div",{className:"card__image"},r.createElement("img",{alt:t,src:(0,m.Z)(n)})),r.createElement("div",{className:"card__body padding-horiz--lg padding-bottom--lg"},t&&r.createElement("h3",null,t),o)))}function p(){var e=(0,c.Z)().siteConfig,t=(0,u.LU)().cards;return r.createElement(s.Z,{title:""+e.title,description:""+e.tagline},r.createElement("div",{className:"hero"},r.createElement("div",{className:"container"},r.createElement("div",{className:"text--center margin-bottom--lg"},r.createElement("h1",{className:"hero__title margin--none"},e.title),r.createElement("p",{className:"hero__subtitle margin--none"},e.tagline)),t&&r.createElement("div",{className:"row"},t.map((function(e,t){return r.createElement(d,(0,a.Z)({key:t},e))}))))))}d.propTypes={title:i().string,image:i().string,link:i().string,description:i().string}},32577:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(22122),r=n(19756),l=n(67294),o=n(86010),i=n(51384),s=n(19257),c=n(51402),u=n(45697),m=n.n(u),d=n(34455);function p(e){var t=e.title,n=e.icon,a=e.url,r=e.backgroundColor;return l.createElement("a",{className:"social__link padding-horiz--sm padding-vert--md",style:{backgroundColor:r},href:a},l.createElement("div",{className:"social__font social__icon"},n),l.createElement("div",{className:"social__title"},t))}p.propTypes={title:m().string,icon:m().string,url:m().string,backgroundColor:m().string};var f=function(){var e=(0,s.LU)().socials;return l.createElement("div",{className:"social"},e&&e.map((function(e,t){return l.createElement(p,(0,a.Z)({key:t},e))})))},v=["to","href","label","prependBaseUrlToHref"];function g(e){var t=e.to,n=e.href,o=e.label,s=e.prependBaseUrlToHref,u=(0,r.Z)(e,v),m=(0,c.Z)(t),d=(0,c.Z)(n,{forcePrependBaseUrl:!0});return l.createElement(i.Z,(0,a.Z)({className:"footer__link-item"},n?{href:s?d:n}:{to:m},u),o)}g.propTypes={to:m().string,href:m().string,label:m().string,prependBaseUrlToHref:m().bool};var _=function(e){var t=e.sources,n=e.alt;return l.createElement(d.Z,{className:"footer__logo",alt:n,sources:t})};_.propTypes={sources:m().shape({light:m().string,dark:m().string}),alt:m().string};var h=function(){var e=(0,s.LU)().footer,t=e||{},n=t.copyright,a=t.links,r=void 0===a?[]:a,u=t.logo,m=void 0===u?{}:u,d={light:(0,c.Z)(m.src),dark:(0,c.Z)(m.srcDark||m.src)};return e?l.createElement("footer",{className:(0,o.Z)("footer","padding--none",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},r&&r.length>0&&l.createElement("div",{className:"row footer__links padding-vert--xl"},r.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(g,e))}))):null)}))),(m||n)&&l.createElement("div",{className:"footer__bottom padding-bottom--xl"},m&&(m.src||m.srcDark)&&l.createElement("div",null,m.href?l.createElement(i.Z,{href:m.href},l.createElement(_,{alt:m.alt,sources:d})):l.createElement(_,{alt:m.alt,sources:d})),n?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null)),l.createElement(f,null)):null}},78358:function(e,t,n){n.d(t,{O:function(){return _}});var a=n(22122),r=n(19756),l=n(67294),o=n(86010),i=n(45697),s=n.n(i),c=n(51384),u=n(51402),m=n(78168),d=n(71699),p=["activeBasePath","activeBaseRegex","to","href","label","sublabel","icon","activeClassName","prependBaseUrlToHref"],f=["className","isDropdownItem"],v=["className"],g=["mobile","to","label"];function _(e){var t=e.activeBasePath,n=e.activeBaseRegex,o=e.to,i=e.href,s=e.label,f=e.sublabel,v=e.icon,g=e.activeClassName,_=void 0===g?"navbar__link--active":g,h=e.prependBaseUrlToHref,b=(0,r.Z)(e,p),E=(0,u.Z)(o),k=(0,u.Z)(t),N=(0,u.Z)(i,{forcePrependBaseUrl:!0}),y=s&&i&&!(0,d.Z)(i),Z="dropdown__link--active"===_;return l.createElement(c.Z,(0,a.Z)({},i?{href:h?N:i}:Object.assign({isNavLink:!0,activeClassName:_,to:E},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(k)}}:null),b),l.createElement("div",{className:"link"},v&&l.createElement("div",{className:"link__icon"},v),l.createElement("div",{className:"link__body"},l.createElement("div",{className:"link__label"},y?l.createElement("span",null,s,l.createElement(m.Z,Z&&{width:12,height:12})):s),f&&l.createElement("div",{className:"link__sublabel"},f))))}function h(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,s=(0,r.Z)(e,f),c=l.createElement(_,(0,a.Z)({className:(0,o.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},s));return i?l.createElement("li",null,c):c}function b(e){var t=e.className,n=(0,r.Z)(e,v);return delete n.isDropdownItem,l.createElement("li",{className:"menu__list-item"},l.createElement(_,(0,a.Z)({className:(0,o.Z)("menu__link",t)},n)))}function E(e){var t=e.mobile,n=void 0!==t&&t,o=e.to,i=e.label,s=(0,r.Z)(e,g);if(delete s.position,"category-header"===o){return l.createElement("li",{style:{fontSize:"10px",color:"var(--ifm-color-emphasis-600)",paddingTop:"10px"}},i)}var c=n?b:h;return l.createElement(c,(0,a.Z)({to:o,label:i},s))}_.propTypes={activeBasePath:s().string,activeBaseRegex:s().string,to:s().string,href:s().string,label:s().string,sublabel:s().string,icon:s().string,activeClassName:s().string,prependBaseUrlToHref:s().bool},_.defaultProps={activeClassName:"navbar__link--active"},h.propTypes={className:s().string,isDropdownItem:s().bool},h.defaultProps={isDropdownItem:!1},b.propTypes={className:s().string},E.propTypes={mobile:s().bool,to:s().string,label:s().string},E.defaultProps={mobile:!1},t.Z=E},61142:function(e,t,n){var a=n(22122),r=n(19756),l=n(67294),o=n(86010),i=n(45697),s=n.n(i),c=n(19257),u=n(78358),m=n(52807),d=["items","position","className"],p=["items","className"],f=["mobile"];function v(e,t){return!!(0,c.Mg)(e.to,t)||(!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath)))}function g(e){var t,n=e.items,i=e.position,s=e.className,p=(0,r.Z)(e,d),f=(0,l.useRef)(null),g=(0,l.useRef)(null),_=(0,l.useState)(!1),h=_[0],b=_[1],E=function(e,t,n){var a=t.filter((function(e){return v(e,n)}));return a.length?Object.assign({},a[0],{label:e.label+" > "+a[0].label}):e}(p,n,(0,c.be)());return(0,l.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),l.createElement("div",{ref:f,className:(0,o.Z)("dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":h})},l.createElement(u.O,(0,a.Z)({className:(0,o.Z)("navbar__item navbar__link",s)},E,{onClick:p.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!h))}}),null!=(t=p.children)?t:p.label),l.createElement("ul",{ref:g,className:"dropdown__menu"},n.map((function(e,t){return l.createElement(m.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var a=f.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function _(e){var t,n=e.items,i=e.className,s=(0,r.Z)(e,p);delete s.position;var d=(0,c.be)(),f=function(e,t){return e.some((function(e){return v(e,t)}))}(n,d),g=(0,c.uR)({initialState:function(){return!f}}),_=g.collapsed,h=g.toggleCollapsed,b=g.setCollapsed;return(0,l.useEffect)((function(){f&&b(!f)}),[d,f]),l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":_})},l.createElement(u.O,(0,a.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",i)},s,{onClick:function(e){e.preventDefault(),h()}}),null!=(t=s.children)?t:s.label),l.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},n.map((function(e,t){return l.createElement(m.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:s.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}function h(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,f);delete a.isDropdownItem;var o=n?_:g;return l.createElement(o,a)}g.propTypes=Object.assign({items:s().array,position:s().string,className:s().string},u.O.propTypes),_.propTypes=Object.assign({items:s().array,className:s().string},u.O.propTypes),h.propTypes={mobile:s().bool},h.defaultProps={mobile:!1},t.Z=h},52807:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(22122),r=n(19756),l=n(67294),o=n(45697),i=n.n(o),s=n(78358),c=n(61142),u=n(86010),m=n(19257),d=n(98565),p=["items","label","className"],f=["className","to","href","label"],v=["items_","layout","position","className"],g=["items_","className"],_=["mobile"];function h(e,t){return e.some((function(e){e.items?h(e.items,t):function(e,t){!!(0,m.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||(!e.activeBasePath||t.startsWith(e.activeBasePath))}(e,t)}))}function b(e){var t,n=e.items,a=e.label,l=e.className,o=(0,r.Z)(e,p),i={items:[],index:0};n?(a&&i.items.push({label:a,className:l}),(t=i.items).push.apply(t,n)):i.items.push(Object.assign({label:a,className:l},o));return i}function E(e){var t=e.className,n=e.to,o=e.href,i=e.label,c=(0,r.Z)(e,f);if(n||o)return l.createElement(s.O,(0,a.Z)({className:(0,u.Z)("dropdown__link",t),activeClassName:"dropdown__link--active",to:n,href:o,label:i},c));if(i)return l.createElement("div",{className:"dropdown__label"},i);throw"Mega dropdown item must be a link or a category header."}function k(e){var t,n=e.items_,o=e.layout,i=e.position,c=e.className,p=(0,r.Z)(e,v),f=h(n,(0,m.be)()),g=(0,l.useRef)(null),_=(0,l.useState)(!1),k=_[0],N=_[1],y=(0,m.LU)().navbar.hideOnScroll,Z=(0,d.Z)(y).isNavbarVisible,w=n.map(b),C=o.length,T=Math.max.apply(Math,o.map((function(e){return e.split(/\s+/).length}))),D=[];o.forEach((function(e,t){e.split(/\s+/).forEach((function(e,n){e&&"."!==e&&(D[t+n*C]=e)}))}));for(var B=D.map((function(e){var t,n=w[e];if(n)return null!=(t=n.items[n.index++])?t:null})),x=[],O=null,I=0;I<C;I++){for(var L=[],R=0;R<T;R++){var P=B[I+R*C];L.push(P),P&&(O=P)}x.push(L)}return O.onKeyDown=function(e){"Tab"===e.key&&N(!1)},(0,l.useEffect)((function(){Z||N(!1)}),[Z]),(0,l.useEffect)((function(){var e=function(e){g.current&&!g.current.contains(e.target)&&N(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[g]),l.createElement("div",{ref:g,className:(0,u.Z)("dropdown","dropdown--hoverable","dropdown--mega",{"dropdown--right":"right"===i,"dropdown--show":k}),onMouseLeave:function(){return N(!1)}},l.createElement(s.O,(0,a.Z)({className:(0,u.Z)("navbar__item navbar__link",c,{"navbar__link--active":f})},p,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),N(!k))},onMouseEnter:function(){return N(!0)}}),null!=(t=p.children)?t:p.label),l.createElement("div",{className:"dropdown__container"},l.createElement("div",{className:"dropdown__menu"},x.map((function(e,t){return l.createElement("div",{className:"row row--no-gutters dropdown__row",key:t},e.map((function(e,t){return l.createElement("div",{className:"col margin-horiz--xs dropdown__col",key:t},e?l.createElement(E,e):null)})))})))))}function N(e){var t,n=e.items_,o=e.className,i=(0,r.Z)(e,g);delete i.position,delete i.layout;var c=(0,m.be)(),d=h(n,c),p=(0,m.uR)({initialState:function(){return!d}}),f=p.collapsed,v=p.toggleCollapsed,_=p.setCollapsed;return(0,l.useEffect)((function(){d&&_(!d)}),[c,d]),l.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":f})},l.createElement(s.O,(0,a.Z)({role:"button",className:(0,u.Z)("menu__link menu__link--sublist",o)},i,{onClick:function(e){e.preventDefault(),v()}}),null!=(t=i.children)?t:i.label),l.createElement(m.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},n.map((function(e,t){return l.createElement(x,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:i.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}function y(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,_),o=n?N:k;return l.createElement(o,a)}E.propTypes={className:i().string,to:i().string,href:i().string,label:i().string},k.propTypes=Object.assign({items_:i().array,layout:i().arrayOf(i().string),position:i().string,className:i().string},s.O.propTypes),N.propTypes=Object.assign({items_:i().array,className:i().string},s.O.propTypes),y.propTypes={mobile:i().bool},y.defaultProps={mobile:!1};var Z=y,w=n(36508),C=n(62437),T=["type","items","layout"],D={default:function(){return s.Z},localeDropdown:function(){return w.Z},search:function(){return C.Z},dropdown:function(){return c.Z},megaDropdown:function(){return Z},docsVersion:function(){return n(39693).Z},docsVersionDropdown:function(){return n(74493).Z},doc:function(){return n(36673).Z}};function B(e){var t=e.type,n=e.items,o=e.layout,i=(0,r.Z)(e,T),s=function(e){var t=D[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t,n){return n?"megaDropdown":e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n,void 0!==o));return l.createElement(s,(0,a.Z)({items:n,layout:o},i))}B.propTypes={type:i().string,items:i().array,layout:i().arrayOf(i().string)};var x=B},5086:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(22122),r=n(67294),l=n(45697),o=n.n(l),i=n(19257),s=n(5730),c=n(86010),u=(0,r.memo)((function(e){var t=e.className,n=e.styles,a=e.icons,l=e.checked,o=e.disabled,i=e.onChange,s=(0,r.useState)(l),u=s[0],m=s[1],d=(0,r.useState)(!1),p=d[0],f=d[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,c.Z)("toggle",t,{"toggle--checked":u,"toggle--focused":p,"toggle--disabled":o}),role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},r.createElement("div",{className:"toggle__icon toggle__icon--unchecked",style:n.unchecked},a.unchecked),r.createElement("div",{className:"toggle__icon toggle__icon--checked",style:n.checked},a.checked),r.createElement("input",{ref:v,checked:u,type:"checkbox",className:"toggle__screenreader-only","aria-label":"Switch between dark and light mode",onChange:i,onClick:function(){return m(!u)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=v.current)||t.click())}}))}));function m(e){var t=(0,i.LU)().colorMode.switchConfig,n=t.darkIcon,l=t.darkIconStyle,o=t.lightIcon,c=t.lightIconStyle,m=(0,s.Z)();return r.createElement(u,(0,a.Z)({disabled:!m,styles:{unchecked:c,checked:l},icons:{unchecked:o,checked:n}},e))}u.displayName="ToggleMemo",u.propTypes={className:o().string,styles:o().shape({unchecked:o().any,checked:o().any}),icons:o().shape({unchecked:o().string,checked:o().string}),checked:o().bool,disabled:o().bool,onChange:o().func}}}]);