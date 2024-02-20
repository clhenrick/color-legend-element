var t,i;t=this,i=function(t,i,e,s){
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const r=window,n=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),l=new WeakMap;class h{constructor(t,i,e){if(this._$cssResult$=!0,e!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(n&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=l.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&l.set(i,t))}return t}toString(){return this.cssText}}const c=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new h("string"==typeof t?t:t+"",void 0,o))(i)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var a;const d=window,u=d.trustedTypes,v=u?u.emptyScript:"",f=d.reactiveElementPolyfillSupport,g={toAttribute(t,i){switch(i){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},p=(t,i)=>i!==t&&(i==i||t==t),m={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:p},y="finalized";class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,e)=>{const s=this._$Ep(e,i);void 0!==s&&(this._$Ev.set(s,e),t.push(s))})),t}static createProperty(t,i=m){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,e,i);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(s){const r=this[t];this[i]=s,this.requestUpdate(t,r,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty(y))return!1;this[y]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of i)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(c(t))}else void 0!==t&&i.push(c(t));return i}static _$Ep(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,e;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{n?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((i=>{const e=document.createElement("style"),s=r.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$EO(t,i,e=m){var s;const r=this.constructor._$Ep(t,e);if(void 0!==r&&!0===e.reflect){const n=(void 0!==(null===(s=e.converter)||void 0===s?void 0:s.toAttribute)?e.converter:g).toAttribute(i,e.type);this._$El=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,i){var e;const s=this.constructor,r=s._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=s.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(e=t.converter)||void 0===e?void 0:e.fromAttribute)?t.converter:g;this._$El=r,this[r]=n.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,e){let s=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===e.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,e))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(e)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(e)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var w;b[y]=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==f||f({ReactiveElement:b}),(null!==(a=d.reactiveElementVersions)&&void 0!==a?a:d.reactiveElementVersions=[]).push("1.6.3");const $=window,S=$.trustedTypes,k=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,A="?"+C,T=`<${A}>`,_=document,z=()=>_.createComment(""),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,N="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,O=/>/g,R=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,F=/"/g,D=/^(?:script|style|textarea|title)$/i,I=t=>(i,...e)=>({_$litType$:t,strings:i,values:e}),P=I(1),q=I(2),B=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),H=new WeakMap,J=_.createTreeWalker(_,129,null,!1);function K(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(i):i}const W=(t,i)=>{const e=t.length-1,s=[];let r,n=2===i?"<svg>":"",o=U;for(let i=0;i<e;i++){const e=t[i];let l,h,c=-1,a=0;for(;a<e.length&&(o.lastIndex=a,h=o.exec(e),null!==h);)a=o.lastIndex,o===U?"!--"===h[1]?o=M:void 0!==h[1]?o=O:void 0!==h[2]?(D.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=R):void 0!==h[3]&&(o=R):o===R?">"===h[0]?(o=null!=r?r:U,c=-1):void 0===h[1]?c=-2:(c=o.lastIndex-h[2].length,l=h[1],o=void 0===h[3]?R:'"'===h[3]?F:L):o===F||o===L?o=R:o===M||o===O?o=U:(o=R,r=void 0);const d=o===R&&t[i+1].startsWith("/>")?" ":"";n+=o===U?e+T:c>=0?(s.push(l),e.slice(0,c)+x+e.slice(c)+C+d):e+C+(-2===c?(s.push(void 0),i):d)}return[K(t,n+(t[e]||"<?>")+(2===i?"</svg>":"")),s]};class Z{constructor({strings:t,_$litType$:i},e){let s;this.parts=[];let r=0,n=0;const o=t.length-1,l=this.parts,[h,c]=W(t,i);if(this.el=Z.createElement(h,e),J.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(s=J.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const i of s.getAttributeNames())if(i.endsWith(x)||i.startsWith(C)){const e=c[n++];if(t.push(i),void 0!==e){const t=s.getAttribute(e.toLowerCase()+x).split(C),i=/([.?@])?(.*)/.exec(e);l.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?tt:"?"===i[1]?et:"@"===i[1]?st:Y})}else l.push({type:6,index:r})}for(const i of t)s.removeAttribute(i)}if(D.test(s.tagName)){const t=s.textContent.split(C),i=t.length-1;if(i>0){s.textContent=S?S.emptyScript:"";for(let e=0;e<i;e++)s.append(t[e],z()),J.nextNode(),l.push({type:2,index:++r});s.append(t[i],z())}}}else if(8===s.nodeType)if(s.data===A)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)l.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,i){const e=_.createElement("template");return e.innerHTML=t,e}}function X(t,i,e=t,s){var r,n,o,l;if(i===B)return i;let h=void 0!==s?null===(r=e._$Co)||void 0===r?void 0:r[s]:e._$Cl;const c=E(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==c&&(null===(n=null==h?void 0:h._$AO)||void 0===n||n.call(h,!1),void 0===c?h=void 0:(h=new c(t),h._$AT(t,e,s)),void 0!==s?(null!==(o=(l=e)._$Co)&&void 0!==o?o:l._$Co=[])[s]=h:e._$Cl=h),void 0!==h&&(i=X(t,h._$AS(t,i.values),h,s)),i}class G{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:e},parts:s}=this._$AD,r=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:_).importNode(e,!0);J.currentNode=r;let n=J.nextNode(),o=0,l=0,h=s[0];for(;void 0!==h;){if(o===h.index){let i;2===h.type?i=new Q(n,n.nextSibling,this,t):1===h.type?i=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(i=new rt(n,this,t)),this._$AV.push(i),h=s[++l]}o!==(null==h?void 0:h.index)&&(n=J.nextNode(),o++)}return J.currentNode=_,r}v(t){let i=0;for(const e of this._$AV)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}}class Q{constructor(t,i,e,s){var r;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=s,this._$Cp=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=X(this,t,i),E(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>j(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==V&&E(this._$AH)?this._$AA.nextSibling.data=t:this.$(_.createTextNode(t)),this._$AH=t}g(t){var i;const{values:e,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Z.createElement(K(s.h,s.h[0]),this.options)),s);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===r)this._$AH.v(e);else{const t=new G(r,this),i=t.u(this.options);t.v(e),this.$(i),this._$AH=t}}_$AC(t){let i=H.get(t.strings);return void 0===i&&H.set(t.strings,i=new Z(t)),i}T(t){j(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,s=0;for(const r of t)s===i.length?i.push(e=new Q(this.k(z()),this.k(z()),this,this.options)):e=i[s],e._$AI(r),s++;s<i.length&&(this._$AR(e&&e._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){var e;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class Y{constructor(t,i,e,s,r){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=r,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,e,s){const r=this.strings;let n=!1;if(void 0===r)t=X(this,t,i,0),n=!E(t)||t!==this._$AH&&t!==B,n&&(this._$AH=t);else{const s=t;let o,l;for(t=r[0],o=0;o<r.length-1;o++)l=X(this,s[e+o],i,o),l===B&&(l=this._$AH[o]),n||(n=!E(l)||l!==this._$AH[o]),l===V?t=V:t!==V&&(t+=(null!=l?l:"")+r[o+1]),this._$AH[o]=l}n&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}const it=S?S.emptyScript:"";class et extends Y{constructor(){super(...arguments),this.type=4}j(t){t&&t!==V?this.element.setAttribute(this.name,it):this.element.removeAttribute(this.name)}}class st extends Y{constructor(t,i,e,s,r){super(t,i,e,s,r),this.type=5}_$AI(t,i=this){var e;if((t=null!==(e=X(this,t,i,0))&&void 0!==e?e:V)===B)return;const s=this._$AH,r=t===V&&s!==V||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==V&&(s===V||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,e;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const nt=$.litHtmlPolyfillSupport;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var ot,lt;null==nt||nt(Z,Q),(null!==(w=$.litHtmlVersions)&&void 0!==w?w:$.litHtmlVersions=[]).push("2.8.0");class ht extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,e)=>{var s,r;const n=null!==(s=null==e?void 0:e.renderBefore)&&void 0!==s?s:i;let o=n._$litPart$;if(void 0===o){const t=null!==(r=null==e?void 0:e.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new Q(i.insertBefore(z(),t),t,void 0,null!=e?e:{})}return o._$AI(t),o})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return B}}ht.finalized=!0,ht._$litElement$=!0,null===(ot=globalThis.litElementHydrateSupport)||void 0===ot||ot.call(globalThis,{LitElement:ht});const ct=globalThis.litElementPolyfillSupport;null==ct||ct({LitElement:ht}),(null!==(lt=globalThis.litElementVersions)&&void 0!==lt?lt:globalThis.litElementVersions=[]).push("3.3.3");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const at=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(e){e.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(e){e.createProperty(i.key,t)}};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function dt(t){return(i,e)=>void 0!==e?((t,i,e)=>{i.constructor.createProperty(e,t)})(t,i,e):at(t,i)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var ut;null===(ut=window.HTMLSlotElement)||void 0===ut||ut.prototype.assignedElements;class vt{constructor(t){this.cle=t}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:t,domain:s,range:r}=this.cle;this.colorScale=t?i.scaleSequential(t).domain(s):i.scaleLinear().range(r).domain(s).interpolate(e.interpolateHcl)}setDiscreteColorScale(){this.colorScale=i.scaleQuantize().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const t=this.cle.domain;this.colorScale=i.scaleThreshold().domain(t.slice(1,t.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=i.scaleOrdinal().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(t){throw new Error(`invalid property scaletype: ${t}.\n      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const ft=1,gt=(t=>(...i)=>({_$litDirective$:t,values:i}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,e){this._$Ct=t,this._$AM=i,this._$Ci=e}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */{constructor(t){var i;if(super(t),t.type!==ft||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(t,[i]){var e,s;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!(null===(e=this.nt)||void 0===e?void 0:e.has(t))&&this.it.add(t);return this.render(i)}const r=t.element.classList;this.it.forEach((t=>{t in i||(r.remove(t),this.it.delete(t))}));for(const t in i){const e=!!i[t];e===this.it.has(t)||(null===(s=this.nt)||void 0===s?void 0:s.has(t))||(e?(r.add(t),this.it.add(t)):(r.remove(t),this.it.delete(t)))}return B}});class pt{constructor(t){this.cle=t}render(){const t=this.cle.titleText?P`<p class="legend-title">${this.cle.titleText}</p>`:"",i={hidden:"categorical"===this.cle.scaleType},e={hidden:"categorical"!==this.cle.scaleType,"categorical-container":!0};return P`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${t}
      <slot name="subtitle"></slot>
      <svg
        class=${gt(i)}
        width=${this.cle.width}
        height=${this.cle.height}
      >
        <!-- discrete and threshold -->
        <g class="rects">${this.renderDiscreteThreshold()}</g>
        <!-- continuous -->
        ${this.renderContinuous()}
        <!-- axis ticks -->
        ${this.renderAxis()}
      </svg>
      <ul class=${gt(e)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if("categorical"!==this.cle.scaleType)return"";const{markType:t,colorScale:i,domain:e}=this.cle,s={"legend-item":!0,line:"line"===t,circle:"circle"===t};return P`${e.map((t=>P`<li
        class=${gt(s)}
        style="--color:${i(t)}"
      >
        ${t}
      </li>`))}`}renderContinuous(){var t,i;if("continuous"!==this.cle.scaleType||null===this.cle.colorScale)return"";const{colorScale:s,marginTop:r,marginLeft:n,marginRight:o,tickSize:l,width:h,range:c}=this.cle,a=this.cle.marginBottom+l,d=this.cle.height+l,u=(null===(i=(t=s).interpolator)||void 0===i?void 0:i.call(t))||e.piecewise(e.interpolateHcl,c);return q`<image
      x=${n}
      y=${r}
      width=${h-o-n}
      height=${d-r-a}
      preserveAspectRatio="none"
      href=${this.getColorRamp(u).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if("discrete"!==this.cle.scaleType&&"threshold"!==this.cle.scaleType)return"";const{tickSize:t,marginTop:i,marginLeft:e,colorScale:s,xScale:r}=this.cle,n=this.cle.height+t,o=this.cle.marginBottom+t,l=s.range();return q`${l.map((t=>q`<rect x=${(t=>s.invertExtent(t).map(r)[0]||e)(t)} y=${i} width=${(t=>{let[i,e]=s.invertExtent(t).map(r);return i=i||0,e=e||r.range()[1],e-i})(t)} height=${n-i-o} fill=${t}></rect>`))}`}renderAxis(){if(!this.cle.xScale||"categorical"===this.cle.scaleType)return"";const{ticks:t,tickSize:i,tickFormat:e,tickFormatter:s,tickValues:r,xScale:n,marginTop:o}=this.cle,l=this.cle.height+i,h=this.cle.marginBottom+i,c=(null==r?void 0:r.length)?r:n.ticks.apply(n,[t,e]),a=Math.max(i,0)+3;return q`<g
      class="x-axis"
      transform="translate(0, ${l-h})"
      text-anchor="middle"
    >${c.map((t=>q`<g class="tick" transform='translate(${n(t)},0)'>
      <line stroke="currentColor" y2="${i}" y1="${o+h-l}"></line>
      <text fill="currentColor" y="${a}" dy="0.71em">${s(t)}</text>
      </g>`))}</g>`}getColorRamp(t,i=256){const e=document.createElement("canvas");e.setAttribute("height","1"),e.setAttribute("width",`${i}`);const s=e.getContext("2d");for(let e=0;e<i;e++)s.fillStyle=t(e/(i-1)),s.fillRect(e,0,1,1);return e}}const mt=[0,1],yt=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],bt=["domain","range","interpolator","scaleType"],wt=["scaleType","ticks","tickSize","tickValues","tickFormat","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class $t{constructor(t){this.cle=t}setXScale(){const{scaleType:t,marginLeft:e,width:s,marginRight:r}=this.cle;switch(t){case"continuous":this.xScale=i.scaleLinear().domain(this.cle.domain).range([e,s-r]);break;case"discrete":case"threshold":this.xScale=i.scaleLinear().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([e,s-r]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${t}`)}}handleAxisTicks(){var t,i,e;const{scaleType:r}=this.cle;if("continuous"!==r&&"categorical"!==r){const[e,s]=this.xScale.domain();this.cle.tickValues=this.cle.tickValues||[e,...(null===(i=null===(t=this.cle.colorScale)||void 0===t?void 0:t.thresholds)||void 0===i?void 0:i.call(t))||this.cle.colorScale.domain(),s]}(null===(e=this.cle.tickFormat)||void 0===e?void 0:e.length)?this.cle.tickFormatter=s.format(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||5,this.cle.tickFormat||".1f")}}const St=((t,...i)=>{const e=1===t.length?t[0]:i.reduce(((i,e,s)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[s+1]),t[0]);return new h(e,t,o)})`
  :host {
    --cle-font-family: sans-serif;
    --cle-font-family-title: var(--cle-font-family);
    --cle-font-size: 0.75rem;
    --cle-font-size-title: 0.875rem;
    --cle-letter-spacing: 0.3px;
    --cle-letter-spacing-title: 0.25px;
    --cle-font-weight: 400;
    --cle-font-weight-title: 500;
    --cle-color: currentColor;
    --cle-background: #fff;
    --cle-padding: 0.375rem;
    --cle-border: none;
    --cle-border-radius: 0;
    --cle-box-sizing: content-box;
    --cle-columns: 2;
    --cle-column-width: auto;
    --cle-item-margin: 0.375rem 0.75rem 0 0;
    --cle-line-width: 24px;
    --cle-line-height: 2px;
    --cle-swatch-size: 10px;
    --cle-swatch-width: var(--cle-swatch-size);
    --cle-swatch-height: var(--cle-swatch-size);
    --cle-swatch-margin: 0 0.5rem 0 0;
  }

  :host([hidden]),
  .hidden {
    display: none !important;
  }

  div.cle-container {
    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size);
    font-weight: var(--cle-font-weight);
    letter-spacing: var(--cle-letter-spacing);
    color: var(--cle-color);
    background: var(--cle-background);
    display: inline-block;
    padding: var(--cle-padding);
    border: var(--cle-border);
    border-radius: var(--cle-border-radius);
    box-sizing: var(--cle-box-sizing);
  }

  svg {
    display: block;
    overflow: visible;
  }

  svg text {
    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size);
    fill: var(--cle-color);
  }

  p.legend-title {
    margin: 0;
    font-family: var(--cle-font-family-title);
    font-size: var(--cle-font-size-title);
    font-weight: var(--cle-font-weight-title);
    letter-spacing: var(--cle-letter-spacing-title);
  }

  ul.categorical-container {
    padding: 0;
    margin: 0;
    column-count: var(--cle-columns);
    column-width: var(--cle-column-width);
  }

  .legend-item {
    display: inline-flex;
    align-items: center;
    margin: var(--cle-item-margin);
  }

  .legend-item::before {
    content: "";
    width: var(--cle-swatch-width);
    height: var(--cle-swatch-height);
    margin: var(--cle-swatch-margin);
    background: var(--color);
  }

  .legend-item.line::before {
    width: var(--cle-line-width);
    height: var(--cle-line-height);
  }

  .legend-item.circle::before {
    border-radius: 50%;
  }
`;var kt=function(t,i,e,s){for(var r,n=arguments.length,o=n<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(i,e,o):r(i,e))||o);return n>3&&o&&Object.defineProperty(i,e,o),o};t.ColorLegendElement=class extends ht{constructor(){super(...arguments),this.titleText="Color Legend Element",this.width=325,this.height=32,this.marginTop=6,this.marginRight=12,this.marginBottom=16,this.marginLeft=12,this.scaleType="continuous",this.domain=mt,this.range=yt,this.markType="circle",this.ticks=5,this.tickFormat=".1f",this.tickSize=6,this.tickValues=null,this.colorScaleSetter=new vt(this),this.axisTickSetter=new $t(this),this.renderer=new pt(this)}get interpolator(){return this._interpolator}set interpolator(t){if("function"!=typeof t)throw new Error("interpolator must be a function.");{const i=this.interpolator;this._interpolator=t,this.requestUpdate("interpolator",i)}}get tickFormatter(){return this._tickFormatter}set tickFormatter(t){if("function"!=typeof t)throw new Error("tickFormatter must be a function.");{const i=this.tickFormatter;this._tickFormatter=t,this.requestUpdate("tickFormatter",i)}}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(t){bt.some((i=>t.has(i)))&&this.colorScaleSetter.setColorScale(),wt.some((i=>t.has(i)))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}},t.ColorLegendElement.styles=[St],kt([dt({type:String})],t.ColorLegendElement.prototype,"titleText",void 0),kt([dt({type:Number})],t.ColorLegendElement.prototype,"width",void 0),kt([dt({type:Number})],t.ColorLegendElement.prototype,"height",void 0),kt([dt({type:Number})],t.ColorLegendElement.prototype,"marginTop",void 0),kt([dt({type:Number})],t.ColorLegendElement.prototype,"marginRight",void 0),kt([dt({type:Number})],t.ColorLegendElement.prototype,"marginBottom",void 0),kt([dt({type:Number})],t.ColorLegendElement.prototype,"marginLeft",void 0),kt([dt({type:String})],t.ColorLegendElement.prototype,"scaleType",void 0),kt([dt({type:Array})],t.ColorLegendElement.prototype,"domain",void 0),kt([dt({type:Array})],t.ColorLegendElement.prototype,"range",void 0),kt([dt({type:String})],t.ColorLegendElement.prototype,"markType",void 0),kt([dt({type:Number})],t.ColorLegendElement.prototype,"ticks",void 0),kt([dt({type:String})],t.ColorLegendElement.prototype,"tickFormat",void 0),kt([dt({type:Number})],t.ColorLegendElement.prototype,"tickSize",void 0),kt([dt({type:Array})],t.ColorLegendElement.prototype,"tickValues",void 0),kt([
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
function(t,i){return(({finisher:t,descriptor:i})=>(e,s)=>{var r;if(void 0===s){const s=null!==(r=e.originalKey)&&void 0!==r?r:e.key,n=null!=i?{kind:"method",placement:"prototype",key:s,descriptor:i(e.key)}:{...e,key:s};return null!=t&&(n.finisher=function(i){t(i,s)}),n}{const r=e.constructor;void 0!==i&&Object.defineProperty(e,s,i(s)),null==t||t(r,s)}})({descriptor:e=>{const s={get(){var i,e;return null!==(e=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==e?e:null},enumerable:!0,configurable:!0};if(i){const i="symbol"==typeof e?Symbol():"__"+e;s.get=function(){var e,s;return void 0===this[i]&&(this[i]=null!==(s=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==s?s:null),this[i]}}return s}})}("svg")],t.ColorLegendElement.prototype,"svg",void 0),kt([dt({attribute:!1})],t.ColorLegendElement.prototype,"interpolator",null),kt([dt({attribute:!1})],t.ColorLegendElement.prototype,"tickFormatter",null),t.ColorLegendElement=kt([(t=>i=>"function"==typeof i?((t,i)=>(customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:e,elements:s}=i;return{kind:e,elements:s,finisher(i){customElements.define(t,i)}}})(t,i))("color-legend")],t.ColorLegendElement),Object.defineProperty(t,"i",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?i(exports,require("d3-scale"),require("d3-interpolate"),require("d3-format")):"function"==typeof define&&define.amd?define(["exports","d3-scale","d3-interpolate","d3-format"],i):i((t="undefined"!=typeof globalThis?globalThis:t||self)["color-legend-element"]={},t.d3,t.d3,t.d3);
