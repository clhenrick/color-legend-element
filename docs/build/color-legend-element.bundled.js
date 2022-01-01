import*as t from"d3";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),s=new Map;class n{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=s.get(this.cssText);return i&&void 0===t&&(s.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new n("string"==typeof t?t:t+"",e))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var o;const l=window.trustedTypes,h=l?l.emptyScript:"",c=window.reactiveElementPolyfillSupport,a={toAttribute(t,i){switch(i){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},d=(t,i)=>i!==t&&(i==i||t==t),u={attribute:!0,type:String,converter:a,reflect:!1,hasChanged:d};class v extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,e)=>{const s=this._$Eh(e,i);void 0!==s&&(this._$Eu.set(s,e),t.push(s))})),t}static createProperty(t,i=u){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,e,i);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(s){const n=this[t];this[i]=s,this.requestUpdate(t,n,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of i)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(r(t))}else void 0!==t&&i.push(r(t));return i}static _$Eh(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,e;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{i?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((i=>{const e=document.createElement("style"),s=window.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$ES(t,i,e=u){var s,n;const r=this.constructor._$Eh(t,e);if(void 0!==r&&!0===e.reflect){const o=(null!==(n=null===(s=e.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:a.toAttribute)(i,e.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,i){var e,s,n;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),l=t.converter,h=null!==(n=null!==(s=null===(e=l)||void 0===e?void 0:e.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==n?n:a.fromAttribute;this._$Ei=o,this[o]=h(i,t.type),this._$Ei=null}}requestUpdate(t,i,e){let s=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===e.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,e))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(e)):this._$EU()}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(e)}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:v}),(null!==(o=globalThis.reactiveElementVersions)&&void 0!==o?o:globalThis.reactiveElementVersions=[]).push("1.0.2");const g=globalThis.trustedTypes,p=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,y="?"+m,b=`<${y}>`,w=document,$=(t="")=>w.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,T=/>/g,A=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,z=/"/g,E=/^(?:script|style|textarea)$/i,U=t=>(i,...e)=>({_$litType$:t,strings:i,values:e}),N=U(1),M=U(2),R=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),j=new WeakMap,L=w.createTreeWalker(w,129,null,!1),F=(t,i)=>{const e=t.length-1,s=[];let n,r=2===i?"<svg>":"",o=x;for(let i=0;i<e;i++){const e=t[i];let l,h,c=-1,a=0;for(;a<e.length&&(o.lastIndex=a,h=o.exec(e),null!==h);)a=o.lastIndex,o===x?"!--"===h[1]?o=C:void 0!==h[1]?o=T:void 0!==h[2]?(E.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=A):void 0!==h[3]&&(o=A):o===A?">"===h[0]?(o=null!=n?n:x,c=-1):void 0===h[1]?c=-2:(c=o.lastIndex-h[2].length,l=h[1],o=void 0===h[3]?A:'"'===h[3]?z:_):o===z||o===_?o=A:o===C||o===T?o=x:(o=A,n=void 0);const d=o===A&&t[i+1].startsWith("/>")?" ":"";r+=o===x?e+b:c>=0?(s.push(l),e.slice(0,c)+"$lit$"+e.slice(c)+m+d):e+m+(-2===c?(s.push(void 0),i):d)}const l=r+(t[e]||"<?>")+(2===i?"</svg>":"");return[void 0!==p?p.createHTML(l):l,s]};class D{constructor({strings:t,_$litType$:i},e){let s;this.parts=[];let n=0,r=0;const o=t.length-1,l=this.parts,[h,c]=F(t,i);if(this.el=D.createElement(h,e),L.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(s=L.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const i of s.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(m)){const e=c[r++];if(t.push(i),void 0!==e){const t=s.getAttribute(e.toLowerCase()+"$lit$").split(m),i=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?K:"@"===i[1]?Z:V})}else l.push({type:6,index:n})}for(const i of t)s.removeAttribute(i)}if(E.test(s.tagName)){const t=s.textContent.split(m),i=t.length-1;if(i>0){s.textContent=g?g.emptyScript:"";for(let e=0;e<i;e++)s.append(t[e],$()),L.nextNode(),l.push({type:2,index:++n});s.append(t[i],$())}}}else if(8===s.nodeType)if(s.data===y)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(m,t+1));)l.push({type:7,index:n}),t+=m.length-1}n++}}static createElement(t,i){const e=w.createElement("template");return e.innerHTML=t,e}}function I(t,i,e=t,s){var n,r,o,l;if(i===R)return i;let h=void 0!==s?null===(n=e._$Cl)||void 0===n?void 0:n[s]:e._$Cu;const c=S(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==c&&(null===(r=null==h?void 0:h._$AO)||void 0===r||r.call(h,!1),void 0===c?h=void 0:(h=new c(t),h._$AT(t,e,s)),void 0!==s?(null!==(o=(l=e)._$Cl)&&void 0!==o?o:l._$Cl=[])[s]=h:e._$Cu=h),void 0!==h&&(i=I(t,h._$AS(t,i.values),h,s)),i}class P{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:e},parts:s}=this._$AD,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:w).importNode(e,!0);L.currentNode=n;let r=L.nextNode(),o=0,l=0,h=s[0];for(;void 0!==h;){if(o===h.index){let i;2===h.type?i=new B(r,r.nextSibling,this,t):1===h.type?i=new h.ctor(r,h.name,h.strings,this,t):6===h.type&&(i=new q(r,this,t)),this.v.push(i),h=s[++l]}o!==(null==h?void 0:h.index)&&(r=L.nextNode(),o++)}return n}m(t){let i=0;for(const e of this.v)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}}class B{constructor(t,i,e,s){var n;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=s,this._$Cg=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=I(this,t,i),S(t)?t===O||null==t||""===t?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==R&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var i;return k(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==O&&S(this._$AH)?this._$AA.nextSibling.data=t:this.S(w.createTextNode(t)),this._$AH=t}T(t){var i;const{values:e,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=D.createElement(s.h,this.options)),s);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===n)this._$AH.m(e);else{const t=new P(n,this),i=t.p(this.options);t.m(e),this.S(i),this._$AH=t}}_$AC(t){let i=j.get(t.strings);return void 0===i&&j.set(t.strings,i=new D(t)),i}M(t){k(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,s=0;for(const n of t)s===i.length?i.push(e=new B(this.A($()),this.A($()),this,this.options)):e=i[s],e._$AI(n),s++;s<i.length&&(this._$AR(e&&e._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){var e;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class V{constructor(t,i,e,s,n){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=n,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,e,s){const n=this.strings;let r=!1;if(void 0===n)t=I(this,t,i,0),r=!S(t)||t!==this._$AH&&t!==R,r&&(this._$AH=t);else{const s=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=I(this,s[e+o],i,o),l===R&&(l=this._$AH[o]),r||(r=!S(l)||l!==this._$AH[o]),l===O?t=O:t!==O&&(t+=(null!=l?l:"")+n[o+1]),this._$AH[o]=l}r&&!s&&this.k(t)}k(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends V{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===O?void 0:t}}const J=g?g.emptyScript:"";class K extends V{constructor(){super(...arguments),this.type=4}k(t){t&&t!==O?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class Z extends V{constructor(t,i,e,s,n){super(t,i,e,s,n),this.type=5}_$AI(t,i=this){var e;if((t=null!==(e=I(this,t,i,0))&&void 0!==e?e:O)===R)return;const s=this._$AH,n=t===O&&s!==O||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==O&&(s===O||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,e;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class q{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const W=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var X,G;null==W||W(D,B),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.0.2");class Q extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,i,e)=>{var s,n;const r=null!==(s=null==e?void 0:e.renderBefore)&&void 0!==s?s:i;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==e?void 0:e.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new B(i.insertBefore($(),t),t,void 0,null!=e?e:{})}return o._$AI(t),o})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return R}}Q.finalized=!0,Q._$litElement$=!0,null===(X=globalThis.litElementHydrateSupport)||void 0===X||X.call(globalThis,{LitElement:Q});const Y=globalThis.litElementPolyfillSupport;null==Y||Y({LitElement:Q}),(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tt=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(e){e.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(e){e.createProperty(i.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function it(t){return(i,e)=>void 0!==e?((t,i,e)=>{i.constructor.createProperty(e,t)})(t,i,e):tt(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}class et{constructor(t){this.cle=t}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:i,domain:e,range:s}=this.cle;this.cle.colorScale=i?t.scaleSequential(i).domain(e):t.scaleLinear().range(s).domain(e).interpolate(t.interpolateHcl)}setDiscreteColorScale(){this.cle.colorScale=t.scaleQuantize().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const i=this.cle.domain;this.cle.colorScale=t.scaleThreshold().domain(i.slice(1,i.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.cle.colorScale=t.scaleOrdinal().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(t){throw new Error(`invalid property scaletype: ${t}. \n      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=1;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt=(t=>(...i)=>({_$litDirective$:t,values:i}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,e){this._$Ct=t,this._$AM=i,this._$Ci=e}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}{constructor(t){var i;if(super(t),t.type!==st||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(t,[i]){var e,s;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.et=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!(null===(e=this.et)||void 0===e?void 0:e.has(t))&&this.st.add(t);return this.render(i)}const n=t.element.classList;this.st.forEach((t=>{t in i||(n.remove(t),this.st.delete(t))}));for(const t in i){const e=!!i[t];e===this.st.has(t)||(null===(s=this.et)||void 0===s?void 0:s.has(t))||(e?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return R}});class rt{constructor(t){this.cle=t}render(){const t=this.cle.titleText?N`<p class="legend-title">${this.cle.titleText}</p>`:"",i={hidden:"categorical"===this.cle.scaleType},e={hidden:"categorical"!==this.cle.scaleType,"categorical-container":!0};return N`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${t}
      <svg
        class=${nt(i)}
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
      <ul class=${nt(e)}>
        ${this.renderCategorical()}
      </ul>
    </div>`}renderCategorical(){if("categorical"!==this.cle.scaleType)return"";const{markType:t,colorScale:i,domain:e}=this.cle,s={"legend-item":!0,line:"line"===t,circle:"circle"===t};return N`${e.map((t=>N`<li
        class=${nt(s)}
        style="--color:${i(t)}"
      >
        ${t}
      </li>`))}`}renderContinuous(){var i,e;if("continuous"!==this.cle.scaleType||null===this.cle.colorScale)return"";const{colorScale:s,marginTop:n,marginLeft:r,marginRight:o,tickSize:l,width:h,range:c}=this.cle,a=this.cle.marginBottom+l,d=this.cle.height+l,u=(null===(e=(i=s).interpolator)||void 0===e?void 0:e.call(i))||t.piecewise(t.interpolateHcl,c);return M`<image 
      x=${r}
      y=${n}
      width=${h-o-r}
      height=${d-n-a}
      preserveAspectRatio="none"
      href=${this.getColorRamp(u).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if("discrete"!==this.cle.scaleType&&"threshold"!==this.cle.scaleType)return"";const{tickSize:t,marginTop:i,marginLeft:e,colorScale:s,xScale:n}=this.cle,r=this.cle.height+t,o=this.cle.marginBottom+t,l=s.range();return M`${l.map((t=>M`<rect x=${(t=>s.invertExtent(t).map(n)[0]||e)(t)} y=${i} width=${(t=>{let[i,e]=s.invertExtent(t).map(n);return i=i||0,e=e||n.range()[1],e-i})(t)} height=${r-i-o} fill=${t}></rect>`))}`}renderAxis(){if(!this.cle.xScale||"categorical"===this.cle.scaleType)return"";const{ticks:t,tickSize:i,tickFormat:e,tickFormatter:s,tickValues:n,xScale:r,marginTop:o}=this.cle,l=this.cle.height+i,h=this.cle.marginBottom+i,c=(null==n?void 0:n.length)?n:r.ticks.apply(r,[t,e]),a=Math.max(i,0)+3;return M`<g
      class="x-axis"
      transform="translate(0, ${l-h})"
      text-anchor="middle"
    >${c.map((t=>M`<g class="tick" transform='translate(${r(t)},0)'>
      <line stroke="currentColor" y2="${i}" y1="${o+h-l}"></line>
      <text fill="currentColor" y="${a}" dy="0.71em">${s(t)}</text>
      </g>`))}</g>`}getColorRamp(t,i=256){const e=document.createElement("canvas");e.setAttribute("height","1"),e.setAttribute("width",`${i}`);const s=e.getContext("2d");for(let e=0;e<i;e++)s.fillStyle=t(e/(i-1)),s.fillRect(e,0,1,1);return e}}const ot=[0,1],lt=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],ht=["domain","range","interpolator","scaleType"],ct=["scaleType","ticks","tickSize","tickValues","tickFormat","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class at{constructor(t){this.cle=t}setXScale(){const{scaleType:i,marginLeft:e,width:s,marginRight:n}=this.cle;switch(i){case"continuous":this.cle.xScale=t.scaleLinear().domain(this.cle.domain).range([e,s-n]);break;case"discrete":case"threshold":this.cle.xScale=t.scaleLinear().domain([this.cle.domain.at(0),this.cle.domain.at(-1)]).rangeRound([e,s-n]);break;case"categorical":this.cle.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${i}`)}}handleAxisTicks(){var i,e,s;const{scaleType:n}=this.cle;if("continuous"!==n&&"categorical"!==n){const[t,s]=this.cle.xScale.domain();this.cle.tickValues=this.cle.tickValues||[t,...(null===(e=null===(i=this.cle.colorScale)||void 0===i?void 0:i.thresholds)||void 0===e?void 0:e.call(i))||this.cle.colorScale.domain(),s]}(null===(s=this.cle.tickFormat)||void 0===s?void 0:s.length)?this.cle.tickFormatter=t.format(this.cle.tickFormat):this.cle.tickFormatter=this.cle.xScale.tickFormat(this.cle.ticks||5.078125,this.cle.tickFormat||".1f")}}const dt=((t,...i)=>{const s=1===t.length?t[0]:i.reduce(((i,e,s)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[s+1]),t[0]);return new n(s,e)})`
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
`;var ut=function(t,i,e,s){for(var n,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(i,e,o):n(i,e))||o);return r>3&&o&&Object.defineProperty(i,e,o),o};let vt=class extends Q{constructor(){super(...arguments),this.titleText="Color Legend Element",this.width=325,this.height=32,this.marginTop=6,this.marginRight=12,this.marginBottom=16,this.marginLeft=12,this.scaleType="continuous",this.domain=ot,this.range=lt,this.markType="circle",this.ticks=5.078125,this.tickFormat=".1f",this.tickSize=6,this.tickValues=null,this.colorScaleSetter=new et(this),this.renderer=new rt(this),this.axisTickSetter=new at(this)}get interpolator(){return this._interpolator}set interpolator(t){if("function"!=typeof t)throw new Error("interpolator must be a function.");{const i=this.interpolator;this._interpolator=t,this.requestUpdate("interpolator",i)}}get tickFormatter(){return this._tickFormatter}set tickFormatter(t){if("function"!=typeof t)throw new Error("tickFormatter must be a function.");{const i=this.tickFormatter;this._tickFormatter=t,this.requestUpdate("tickFormatter",i)}}render(){return this.renderer.render()}willUpdate(t){ht.some((i=>t.has(i)))&&this.colorScaleSetter.setColorScale(),ct.some((i=>t.has(i)))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};vt.styles=[dt],ut([it({type:String})],vt.prototype,"titleText",void 0),ut([it({type:Number})],vt.prototype,"width",void 0),ut([it({type:Number})],vt.prototype,"height",void 0),ut([it({type:Number})],vt.prototype,"marginTop",void 0),ut([it({type:Number})],vt.prototype,"marginRight",void 0),ut([it({type:Number})],vt.prototype,"marginBottom",void 0),ut([it({type:Number})],vt.prototype,"marginLeft",void 0),ut([it({type:String})],vt.prototype,"scaleType",void 0),ut([it({type:Array})],vt.prototype,"domain",void 0),ut([it({type:Array})],vt.prototype,"range",void 0),ut([it({type:String})],vt.prototype,"markType",void 0),ut([it({type:Number})],vt.prototype,"ticks",void 0),ut([it({type:String})],vt.prototype,"tickFormat",void 0),ut([it({type:Number})],vt.prototype,"tickSize",void 0),ut([it({type:Array})],vt.prototype,"tickValues",void 0),ut([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t,i){return(({finisher:t,descriptor:i})=>(e,s)=>{var n;if(void 0===s){const s=null!==(n=e.originalKey)&&void 0!==n?n:e.key,r=null!=i?{kind:"method",placement:"prototype",key:s,descriptor:i(e.key)}:{...e,key:s};return null!=t&&(r.finisher=function(i){t(i,s)}),r}{const n=e.constructor;void 0!==i&&Object.defineProperty(e,s,i(s)),null==t||t(n,s)}})({descriptor:e=>{const s={get(){var i,e;return null!==(e=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==e?e:null},enumerable:!0,configurable:!0};if(i){const i="symbol"==typeof e?Symbol():"__"+e;s.get=function(){var e,s;return void 0===this[i]&&(this[i]=null!==(s=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==s?s:null),this[i]}}return s}})}("svg")],vt.prototype,"svg",void 0),ut([it({attribute:!1})],vt.prototype,"interpolator",null),ut([it({attribute:!1})],vt.prototype,"tickFormatter",null),vt=ut([(t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:e,elements:s}=i;return{kind:e,elements:s,finisher(i){window.customElements.define(t,i)}}})(t,i))("color-legend")],vt);export{vt as ColorLegendElement};
