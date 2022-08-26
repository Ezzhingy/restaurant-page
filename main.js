(()=>{"use strict";var n={996:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),c=t(667),s=t.n(c),d=new URL(t(697),t.b),l=a()(r()),u=s()(d);l.push([n.id,".contact-background {\n    height: 100vh;\n    background: url("+u+") center/cover fixed;\n}\n\n.contact-box {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    text-align: center;\n    transform: translate(-50%, -50%);\n    z-index: 2;\n    background-color: rgb(0,0,0); \n    background-color: rgba(0,0,0, 0.4); \n\n}\n\n.contact-box h1,\n.contact-box h2,\n.contact-box h3 {\n    color: white;\n}\n\n.contact-box h2, \n.contact-box h3 {\n    font-weight: 500;\n}",""]);const p=l},18:(n,e,t)=>{t.d(e,{Z:()=>h});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),c=t(667),s=t.n(c),d=new URL(t(251),t.b),l=new URL(t(531),t.b),u=a()(r()),p=s()(d),m=s()(l);u.push([n.id,":root {\n    --purple: #251760;\n    --pink: #cd8a8a;\n}\n\nbody {\n    margin: 0;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n.header button {\n    background-color: transparent;\n    font-size: 1.5rem;\n    color: white;\n    border: none;\n    width: 124px;\n}\n\n.header button:hover {\n    font-weight: 700;\n}\n\n.header-container {\n    display: flex;\n    justify-content: center;\n}\n\n.header {\n    position: fixed;\n    display: flex;\n    gap: 50px;\n    background-color: var(--purple);\n    padding: 50px;\n}\n\n.headline {\n    background-color: rgb(0,0,0); \n    background-color: rgba(0,0,0, 0.4); \n    color: white;\n    font-weight: bold;\n    font-size: 80px;\n    border: 10px solid #f1f1f1;\n    position: absolute;\n    top: 40%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 2;\n    width: 300px;\n    padding: 20px;\n    text-align: center;\n}\n\n.description-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--purple);\n    padding: 100px;\n    font-size: larger;\n}\n\n.description-container h2 {\n    margin: 0;\n    padding: 0;\n    color: var(--pink);\n}\n\n.background-img {\n    height: 100vh;\n    background: url("+p+") center/cover fixed;\n}\n\n.quote-container {\n    background: url("+m+") center/cover fixed;\n    padding: 300px 0 400px 200px;\n}\n\n.quote-box {\n    width: 40%;\n}\n\n.quote-container p {\n    margin: 0 20px 0 0;\n    font-weight: 700;\n}\n\n.footer {\n    font-size: 1rem;\n    display: flex;\n    margin-top: auto;\n    justify-content: center;\n    padding: 25px;\n    background-color: var(--purple);\n}\n\n.footer p {\n    text-align: center;\n    color: white;\n}\n\n.footer a {\n    text-decoration: none;\n    color: white;\n}\n\n.footer a:hover {\n    font-weight: 700;\n}",""]);const h=u},195:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),c=t(667),s=t.n(c),d=new URL(t(301),t.b),l=a()(r()),u=s()(d);l.push([n.id,".menu-background {\n    height: 100vh;\n    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)) fixed, url("+u+') center/cover fixed;\n    display: grid;\n    grid-template-rows: 2fr 1fr 1fr;\n}\n\n.menu-background h1 {\n    text-align: center;\n    color: white;\n    margin: 0;\n}\n\n.menu-background div {\n    align-self: end;\n    border: 1px solid;\n    background-color: rgb(0,0,0); \n    background-color: rgba(0,0,0, 0.4); \n    padding: 20px;\n}\n\n.menu-grid {\n    grid-row: 2;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    gap: 80px;\n    margin: 0 20px 0 20px;\n}\n\n.cell {\n    height: 150px;\n    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6));\n    display: flex;\n    align-items: center;\n    overflow: auto;\n}\n\n.food-desc {\n    color: white;\n    margin: 0 0 0 40px;\n}\n\n#content1::after {\n    content: "\\a";\n    white-space: pre;\n}\n\n.food-img {\n    height: 80%;\n    width: auto;\n    margin: 20px 0 0 20px;\n}',""]);const p=l},372:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},251:(n,e,t)=>{n.exports=t.p+"0e37429c7eb60852de4e.webp"},301:(n,e,t)=>{n.exports=t.p+"24a00a0e7e7048429f31.jpeg"},531:(n,e,t)=>{n.exports=t.p+"76768ff06ef96de7c303.webp"},697:(n,e,t)=>{n.exports=t.p+"e697ba626a88287238b1.gif"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(18),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var f=t(372),b={};b.styleTagTransform=p(),b.setAttributes=s(),b.insert=a().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=l(),e()(f.Z,b),f.Z&&f.Z.locals&&f.Z.locals;var g=t(195),y={};y.styleTagTransform=p(),y.setAttributes=s(),y.insert=a().bind(null,"head"),y.domAPI=r(),y.insertStyleElement=l(),e()(g.Z,y),g.Z&&g.Z.locals&&g.Z.locals;var v=t(996),x={};x.styleTagTransform=p(),x.setAttributes=s(),x.insert=a().bind(null,"head"),x.domAPI=r(),x.insertStyleElement=l(),e()(v.Z,x),v.Z&&v.Z.locals&&v.Z.locals,function(){const n=document.querySelector(".content"),e=document.querySelector(".general"),t=document.querySelector(".footer-container"),o=document.createElement("div");o.classList.add("header-container");const r=document.createElement("div");r.classList.add("header");const i=document.createElement("div");i.classList.add("home"),i.innerHTML="<button class='home-btn'>HOME</button>";const a=document.createElement("div");a.classList.add("menu"),a.innerHTML="<button class='menu-btn'>MENU</button>";const c=document.createElement("div");c.classList.add("contact"),c.innerHTML="<button class='contact-btn'>CONTACT</button>",r.appendChild(i),r.appendChild(a),r.appendChild(c),o.appendChild(r);const s=document.createElement("div");s.classList.add("headline"),s.innerText="PHO LOVE";const d=document.createElement("div");d.classList.add("background-img");const l=document.createElement("div");l.classList.add("description-container");const u=document.createElement("h2"),p=document.createElement("h2");u.innerText="The best Pho in the GTA, comprised of the perfect bowl of Vietnamese soup noodles!",p.innerText="Check out our menu page and do contact us — we are always available!",l.appendChild(u),l.appendChild(p);const m=document.createElement("div");m.classList.add("quote-container");const h=document.createElement("div");h.classList.add("quote-box");const f=document.createElement("h1"),b=document.createElement("h1");f.innerText='Authentic Vietnamese Famous Rice Noodle Soup "Pho" and Asian Cusine. Try out our yummy Pad Thai and hot Stir Fried dishes.',b.innerText="-PHO LOVE",b.style.fontStyle="italic";const g=document.createElement("div");g.classList.add("footer"),g.innerHTML='<p>Copyright © <a href="https://github.com/Ezzhingy">Ezzhingy</a> 2022</p>',h.appendChild(f),h.appendChild(b),m.appendChild(h),e.appendChild(o),n.appendChild(s),n.appendChild(d),n.appendChild(l),n.appendChild(m),t.appendChild(g)}(),function(){const n=document.querySelector(".menu-content"),e=document.createElement("div");e.classList.add("menu-background");const t=document.createElement("div"),o=document.createElement("h1");o.innerText="NOODLE SOUP MENU",t.appendChild(o),e.appendChild(t);const r=document.createElement("div");r.classList.add("menu-grid");for(let n=0;n<6;n++){const n=document.createElement("div");n.classList.add("cell");const e=document.createElement("img");e.classList.add("food-img"),e.src="../src/images/pho2.webp",e.alt="Pho Image";const t=document.createElement("p");t.classList.add("food-desc"),t.innerHTML="<span id='content1'>201. PHO LOVE SPECIAL NOODLE SOUP - PHO LOVE DAC BIET'</span><span id='content2'>$14.99</span>",n.append(e),n.append(t),r.appendChild(n)}e.appendChild(r),n.appendChild(e)}(),function(){const n=document.querySelector(".contact-content"),e=document.createElement("div");e.classList.add("contact-background");const t=document.createElement("div");t.classList.add("contact-box");const o=document.createElement("h1");o.innerText="CONTACT US";const r=document.createElement("h2");r.innerText="BETTER YET, SEE US IN PERSON!";const i=document.createElement("h3");i.innerText="We love our customers, so feel free to visit during normal business hours.";const a=document.createElement("h2");a.innerText="PHO LOVE";const c=document.createElement("h3");c.innerText="123 Imaginary Street, Toronto, Ontario ABC 123",t.appendChild(o),t.appendChild(r),t.appendChild(i),t.appendChild(a),t.appendChild(c),e.appendChild(t),n.appendChild(e)}();const E=document.querySelector(".menu-content"),w=document.querySelector(".contact-content");E.style.display="none",w.style.display="none";const C=document.querySelector(".home-btn"),S=document.querySelector(".menu-btn"),k=document.querySelector(".contact-btn");C.addEventListener("click",(function(){const n=document.querySelector(".content"),e=document.querySelector(".menu-content"),t=document.querySelector(".contact-content");e.style.display="none",t.style.display="none",n.style.display="block"})),S.addEventListener("click",(function(){const n=document.querySelector(".content"),e=document.querySelector(".menu-content"),t=document.querySelector(".contact-content");n.style.display="none",t.style.display="none",e.style.display="block"})),k.addEventListener("click",(function(){const n=document.querySelector(".content"),e=document.querySelector(".menu-content"),t=document.querySelector(".contact-content");n.style.display="none",e.style.display="none",t.style.display="block"}))})()})();