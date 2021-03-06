var t,i;t=this,i=function(t,i,e,s){
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const n=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new Map;class l{constructor(t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=r.get(this.cssText);return n&&void 0===t&&(r.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const h=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new l("string"==typeof t?t:t+"",o))(i)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var c;const a=window.trustedTypes,d=a?a.emptyScript:"",u=window.reactiveElementPolyfillSupport,v={toAttribute(t,i){switch(i){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},f=(t,i)=>i!==t&&(i==i||t==t),g={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:f};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,e)=>{const s=this._$Eh(e,i);void 0!==s&&(this._$Eu.set(s,e),t.push(s))})),t}static createProperty(t,i=g){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,e,i);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(s){const n=this[t];this[i]=s,this.requestUpdate(t,n,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of i)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(h(t))}else void 0!==t&&i.push(h(t));return i}static _$Eh(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,e;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{n?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((i=>{const e=document.createElement("style"),s=window.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$ES(t,i,e=g){var s,n;const o=this.constructor._$Eh(t,e);if(void 0!==o&&!0===e.reflect){const r=(null!==(n=null===(s=e.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:v.toAttribute)(i,e.type);this._$Ei=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Ei=null}}_$AK(t,i){var e,s,n;const o=this.constructor,r=o._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=o.getPropertyOptions(r),l=t.converter,h=null!==(n=null!==(s=null===(e=l)||void 0===e?void 0:e.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==n?n:v.fromAttribute;this._$Ei=r,this[r]=h(i,t.type),this._$Ei=null}}requestUpdate(t,i,e){let s=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===e.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,e))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(e)):this._$EU()}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(e)}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var m;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:p}),(null!==(c=globalThis.reactiveElementVersions)&&void 0!==c?c:globalThis.reactiveElementVersions=[]).push("1.0.2");const y=globalThis.trustedTypes,b=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,$="?"+w,S=`<${$}>`,k=document,x=(t="")=>k.createComment(t),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,z=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,U=/'/g,M=/"/g,N=/^(?:script|style|textarea)$/i,O=t=>(i,...e)=>({_$litType$:t,strings:i,values:e}),R=O(1),j=O(2),L=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),D=new WeakMap,I=k.createTreeWalker(k,129,null,!1),P=(t,i)=>{const e=t.length-1,s=[];let n,o=2===i?"<svg>":"",r=A;for(let i=0;i<e;i++){const e=t[i];let l,h,c=-1,a=0;for(;a<e.length&&(r.lastIndex=a,h=r.exec(e),null!==h);)a=r.lastIndex,r===A?"!--"===h[1]?r=_:void 0!==h[1]?r=z:void 0!==h[2]?(N.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=E):void 0!==h[3]&&(r=E):r===E?">"===h[0]?(r=null!=n?n:A,c=-1):void 0===h[1]?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?E:'"'===h[3]?M:U):r===M||r===U?r=E:r===_||r===z?r=A:(r=E,n=void 0);const d=r===E&&t[i+1].startsWith("/>")?" ":"";o+=r===A?e+S:c>=0?(s.push(l),e.slice(0,c)+"$lit$"+e.slice(c)+w+d):e+w+(-2===c?(s.push(void 0),i):d)}const l=o+(t[e]||"<?>")+(2===i?"</svg>":"");return[void 0!==b?b.createHTML(l):l,s]};class q{constructor({strings:t,_$litType$:i},e){let s;this.parts=[];let n=0,o=0;const r=t.length-1,l=this.parts,[h,c]=P(t,i);if(this.el=q.createElement(h,e),I.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(s=I.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const i of s.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(w)){const e=c[o++];if(t.push(i),void 0!==e){const t=s.getAttribute(e.toLowerCase()+"$lit$").split(w),i=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?K:"?"===i[1]?W:"@"===i[1]?X:J})}else l.push({type:6,index:n})}for(const i of t)s.removeAttribute(i)}if(N.test(s.tagName)){const t=s.textContent.split(w),i=t.length-1;if(i>0){s.textContent=y?y.emptyScript:"";for(let e=0;e<i;e++)s.append(t[e],x()),I.nextNode(),l.push({type:2,index:++n});s.append(t[i],x())}}}else if(8===s.nodeType)if(s.data===$)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(w,t+1));)l.push({type:7,index:n}),t+=w.length-1}n++}}static createElement(t,i){const e=k.createElement("template");return e.innerHTML=t,e}}function B(t,i,e=t,s){var n,o,r,l;if(i===L)return i;let h=void 0!==s?null===(n=e._$Cl)||void 0===n?void 0:n[s]:e._$Cu;const c=T(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==c&&(null===(o=null==h?void 0:h._$AO)||void 0===o||o.call(h,!1),void 0===c?h=void 0:(h=new c(t),h._$AT(t,e,s)),void 0!==s?(null!==(r=(l=e)._$Cl)&&void 0!==r?r:l._$Cl=[])[s]=h:e._$Cu=h),void 0!==h&&(i=B(t,h._$AS(t,i.values),h,s)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:e},parts:s}=this._$AD,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:k).importNode(e,!0);I.currentNode=n;let o=I.nextNode(),r=0,l=0,h=s[0];for(;void 0!==h;){if(r===h.index){let i;2===h.type?i=new H(o,o.nextSibling,this,t):1===h.type?i=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(i=new G(o,this,t)),this.v.push(i),h=s[++l]}r!==(null==h?void 0:h.index)&&(o=I.nextNode(),r++)}return n}m(t){let i=0;for(const e of this.v)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}}class H{constructor(t,i,e,s){var n;this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=s,this._$Cg=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=B(this,t,i),T(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==L&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var i;return C(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==F&&T(this._$AH)?this._$AA.nextSibling.data=t:this.S(k.createTextNode(t)),this._$AH=t}T(t){var i;const{values:e,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=q.createElement(s.h,this.options)),s);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===n)this._$AH.m(e);else{const t=new V(n,this),i=t.p(this.options);t.m(e),this.S(i),this._$AH=t}}_$AC(t){let i=D.get(t.strings);return void 0===i&&D.set(t.strings,i=new q(t)),i}M(t){C(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,s=0;for(const n of t)s===i.length?i.push(e=new H(this.A(x()),this.A(x()),this,this.options)):e=i[s],e._$AI(n),s++;s<i.length&&(this._$AR(e&&e._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){var e;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class J{constructor(t,i,e,s,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=n,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=F}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,e,s){const n=this.strings;let o=!1;if(void 0===n)t=B(this,t,i,0),o=!T(t)||t!==this._$AH&&t!==L,o&&(this._$AH=t);else{const s=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=B(this,s[e+r],i,r),l===L&&(l=this._$AH[r]),o||(o=!T(l)||l!==this._$AH[r]),l===F?t=F:t!==F&&(t+=(null!=l?l:"")+n[r+1]),this._$AH[r]=l}o&&!s&&this.k(t)}k(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends J{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===F?void 0:t}}const Z=y?y.emptyScript:"";class W extends J{constructor(){super(...arguments),this.type=4}k(t){t&&t!==F?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class X extends J{constructor(t,i,e,s,n){super(t,i,e,s,n),this.type=5}_$AI(t,i=this){var e;if((t=null!==(e=B(this,t,i,0))&&void 0!==e?e:F)===L)return;const s=this._$AH,n=t===F&&s!==F||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==F&&(s===F||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,e;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class G{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const Q=window.litHtmlPolyfillSupport;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var Y,tt;null==Q||Q(q,H),(null!==(m=globalThis.litHtmlVersions)&&void 0!==m?m:globalThis.litHtmlVersions=[]).push("2.0.2");class it extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,i,e)=>{var s,n;const o=null!==(s=null==e?void 0:e.renderBefore)&&void 0!==s?s:i;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==e?void 0:e.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new H(i.insertBefore(x(),t),t,void 0,null!=e?e:{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return L}}it.finalized=!0,it._$litElement$=!0,null===(Y=globalThis.litElementHydrateSupport)||void 0===Y||Y.call(globalThis,{LitElement:it});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:it}),(null!==(tt=globalThis.litElementVersions)&&void 0!==tt?tt:globalThis.litElementVersions=[]).push("3.0.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const st=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(e){e.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(e){e.createProperty(i.key,t)}};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function nt(t){return(i,e)=>void 0!==e?((t,i,e)=>{i.constructor.createProperty(e,t)})(t,i,e):st(t,i)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}class ot{constructor(t){this.cle=t}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:t,domain:s,range:n}=this.cle;this.colorScale=t?i.scaleSequential(t).domain(s):i.scaleLinear().range(n).domain(s).interpolate(e.interpolateHcl)}setDiscreteColorScale(){this.colorScale=i.scaleQuantize().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const t=this.cle.domain;this.colorScale=i.scaleThreshold().domain(t.slice(1,t.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=i.scaleOrdinal().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(t){throw new Error(`invalid property scaletype: ${t}. \n      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const rt=1,lt=(t=>(...i)=>({_$litDirective$:t,values:i}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,e){this._$Ct=t,this._$AM=i,this._$Ci=e}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */{constructor(t){var i;if(super(t),t.type!==rt||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(t,[i]){var e,s;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.et=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!(null===(e=this.et)||void 0===e?void 0:e.has(t))&&this.st.add(t);return this.render(i)}const n=t.element.classList;this.st.forEach((t=>{t in i||(n.remove(t),this.st.delete(t))}));for(const t in i){const e=!!i[t];e===this.st.has(t)||(null===(s=this.et)||void 0===s?void 0:s.has(t))||(e?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return L}});class ht{constructor(t){this.cle=t}render(){const t=this.cle.titleText?R`<p class="legend-title">${this.cle.titleText}</p>`:"",i={hidden:"categorical"===this.cle.scaleType},e={hidden:"categorical"!==this.cle.scaleType,"categorical-container":!0};return R`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${t}
      <slot name="subtitle"></slot>
      <svg
        class=${lt(i)}
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
      <ul class=${lt(e)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if("categorical"!==this.cle.scaleType)return"";const{markType:t,colorScale:i,domain:e}=this.cle,s={"legend-item":!0,line:"line"===t,circle:"circle"===t};return R`${e.map((t=>R`<li
        class=${lt(s)}
        style="--color:${i(t)}"
      >
        ${t}
      </li>`))}`}renderContinuous(){var t,i;if("continuous"!==this.cle.scaleType||null===this.cle.colorScale)return"";const{colorScale:s,marginTop:n,marginLeft:o,marginRight:r,tickSize:l,width:h,range:c}=this.cle,a=this.cle.marginBottom+l,d=this.cle.height+l,u=(null===(i=(t=s).interpolator)||void 0===i?void 0:i.call(t))||e.piecewise(e.interpolateHcl,c);return j`<image 
      x=${o}
      y=${n}
      width=${h-r-o}
      height=${d-n-a}
      preserveAspectRatio="none"
      href=${this.getColorRamp(u).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if("discrete"!==this.cle.scaleType&&"threshold"!==this.cle.scaleType)return"";const{tickSize:t,marginTop:i,marginLeft:e,colorScale:s,xScale:n}=this.cle,o=this.cle.height+t,r=this.cle.marginBottom+t,l=s.range();return j`${l.map((t=>j`<rect x=${(t=>s.invertExtent(t).map(n)[0]||e)(t)} y=${i} width=${(t=>{let[i,e]=s.invertExtent(t).map(n);return i=i||0,e=e||n.range()[1],e-i})(t)} height=${o-i-r} fill=${t}></rect>`))}`}renderAxis(){if(!this.cle.xScale||"categorical"===this.cle.scaleType)return"";const{ticks:t,tickSize:i,tickFormat:e,tickFormatter:s,tickValues:n,xScale:o,marginTop:r}=this.cle,l=this.cle.height+i,h=this.cle.marginBottom+i,c=(null==n?void 0:n.length)?n:o.ticks.apply(o,[t,e]),a=Math.max(i,0)+3;return j`<g
      class="x-axis"
      transform="translate(0, ${l-h})"
      text-anchor="middle"
    >${c.map((t=>j`<g class="tick" transform='translate(${o(t)},0)'>
      <line stroke="currentColor" y2="${i}" y1="${r+h-l}"></line>
      <text fill="currentColor" y="${a}" dy="0.71em">${s(t)}</text>
      </g>`))}</g>`}getColorRamp(t,i=256){const e=document.createElement("canvas");e.setAttribute("height","1"),e.setAttribute("width",`${i}`);const s=e.getContext("2d");for(let e=0;e<i;e++)s.fillStyle=t(e/(i-1)),s.fillRect(e,0,1,1);return e}}const ct=[0,1],at=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],dt=["domain","range","interpolator","scaleType"],ut=["scaleType","ticks","tickSize","tickValues","tickFormat","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class vt{constructor(t){this.cle=t}setXScale(){const{scaleType:t,marginLeft:e,width:s,marginRight:n}=this.cle;switch(t){case"continuous":this.xScale=i.scaleLinear().domain(this.cle.domain).range([e,s-n]);break;case"discrete":case"threshold":this.xScale=i.scaleLinear().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([e,s-n]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${t}`)}}handleAxisTicks(){var t,i,e;const{scaleType:n}=this.cle;if("continuous"!==n&&"categorical"!==n){const[e,s]=this.xScale.domain();this.cle.tickValues=this.cle.tickValues||[e,...(null===(i=null===(t=this.cle.colorScale)||void 0===t?void 0:t.thresholds)||void 0===i?void 0:i.call(t))||this.cle.colorScale.domain(),s]}(null===(e=this.cle.tickFormat)||void 0===e?void 0:e.length)?this.cle.tickFormatter=s.format(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||5,this.cle.tickFormat||".1f")}}const ft=((t,...i)=>{const e=1===t.length?t[0]:i.reduce(((i,e,s)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[s+1]),t[0]);return new l(e,o)})`
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
`;var gt=function(t,i,e,s){for(var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r};t.ColorLegendElement=class extends it{constructor(){super(...arguments),this.titleText="Color Legend Element",this.width=325,this.height=32,this.marginTop=6,this.marginRight=12,this.marginBottom=16,this.marginLeft=12,this.scaleType="continuous",this.domain=ct,this.range=at,this.markType="circle",this.ticks=5,this.tickFormat=".1f",this.tickSize=6,this.tickValues=null,this.colorScaleSetter=new ot(this),this.axisTickSetter=new vt(this),this.renderer=new ht(this)}get interpolator(){return this._interpolator}set interpolator(t){if("function"!=typeof t)throw new Error("interpolator must be a function.");{const i=this.interpolator;this._interpolator=t,this.requestUpdate("interpolator",i)}}get tickFormatter(){return this._tickFormatter}set tickFormatter(t){if("function"!=typeof t)throw new Error("tickFormatter must be a function.");{const i=this.tickFormatter;this._tickFormatter=t,this.requestUpdate("tickFormatter",i)}}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(t){dt.some((i=>t.has(i)))&&this.colorScaleSetter.setColorScale(),ut.some((i=>t.has(i)))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}},t.ColorLegendElement.styles=[ft],gt([nt({type:String})],t.ColorLegendElement.prototype,"titleText",void 0),gt([nt({type:Number})],t.ColorLegendElement.prototype,"width",void 0),gt([nt({type:Number})],t.ColorLegendElement.prototype,"height",void 0),gt([nt({type:Number})],t.ColorLegendElement.prototype,"marginTop",void 0),gt([nt({type:Number})],t.ColorLegendElement.prototype,"marginRight",void 0),gt([nt({type:Number})],t.ColorLegendElement.prototype,"marginBottom",void 0),gt([nt({type:Number})],t.ColorLegendElement.prototype,"marginLeft",void 0),gt([nt({type:String})],t.ColorLegendElement.prototype,"scaleType",void 0),gt([nt({type:Array})],t.ColorLegendElement.prototype,"domain",void 0),gt([nt({type:Array})],t.ColorLegendElement.prototype,"range",void 0),gt([nt({type:String})],t.ColorLegendElement.prototype,"markType",void 0),gt([nt({type:Number})],t.ColorLegendElement.prototype,"ticks",void 0),gt([nt({type:String})],t.ColorLegendElement.prototype,"tickFormat",void 0),gt([nt({type:Number})],t.ColorLegendElement.prototype,"tickSize",void 0),gt([nt({type:Array})],t.ColorLegendElement.prototype,"tickValues",void 0),gt([
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
function(t,i){return(({finisher:t,descriptor:i})=>(e,s)=>{var n;if(void 0===s){const s=null!==(n=e.originalKey)&&void 0!==n?n:e.key,o=null!=i?{kind:"method",placement:"prototype",key:s,descriptor:i(e.key)}:{...e,key:s};return null!=t&&(o.finisher=function(i){t(i,s)}),o}{const n=e.constructor;void 0!==i&&Object.defineProperty(e,s,i(s)),null==t||t(n,s)}})({descriptor:e=>{const s={get(){var i,e;return null!==(e=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==e?e:null},enumerable:!0,configurable:!0};if(i){const i="symbol"==typeof e?Symbol():"__"+e;s.get=function(){var e,s;return void 0===this[i]&&(this[i]=null!==(s=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==s?s:null),this[i]}}return s}})}("svg")],t.ColorLegendElement.prototype,"svg",void 0),gt([nt({attribute:!1})],t.ColorLegendElement.prototype,"interpolator",null),gt([nt({attribute:!1})],t.ColorLegendElement.prototype,"tickFormatter",null),t.ColorLegendElement=gt([(t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:e,elements:s}=i;return{kind:e,elements:s,finisher(i){window.customElements.define(t,i)}}})(t,i))("color-legend")],t.ColorLegendElement),Object.defineProperty(t,"t",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?i(exports,require("d3-scale"),require("d3-interpolate"),require("d3-format")):"function"==typeof define&&define.amd?define(["exports","d3-scale","d3-interpolate","d3-format"],i):i((t="undefined"!=typeof globalThis?globalThis:t||self)["color-legend-element"]={},t.d3,t.d3,t.d3);
