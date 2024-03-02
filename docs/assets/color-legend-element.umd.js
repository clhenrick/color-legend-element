var t,i;t=this,i=function(t,i,e,s){
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const r=globalThis,o=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),h=new WeakMap;class c{constructor(t,i,e){if(this._$cssResult$=!0,e!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(o&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=h.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&h.set(i,t))}return t}toString(){return this.cssText}}const l=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new c("string"==typeof t?t:t+"",void 0,n))(i)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,{is:a,defineProperty:d,getOwnPropertyDescriptor:u,getOwnPropertyNames:f,getOwnPropertySymbols:g,getPrototypeOf:p}=Object,m=globalThis,v=m.trustedTypes,y=v?v.emptyScript:"",b=m.reactiveElementPolyfillSupport,w=(t,i)=>t,$={toAttribute(t,i){switch(i){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},S=(t,i)=>!a(t,i),k={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:S};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=k){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const e=Symbol(),s=this.getPropertyDescriptor(t,e,i);void 0!==s&&d(this.prototype,t,s)}}static getPropertyDescriptor(t,i,e){const{get:s,set:r}=u(this.prototype,t)??{get(){return this[i]},set(t){this[i]=t}};return{get(){return s?.call(this)},set(i){const o=s?.call(this);r.call(this,i),this.requestUpdate(t,o,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??k}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const t=this.properties,i=[...f(t),...g(t)];for(const e of i)this.createProperty(e,t[e])}const t=this[Symbol.metadata];if(null!==t){const i=litPropertyMetadata.get(t);if(void 0!==i)for(const[t,e]of i)this.elementProperties.set(t,e)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const e=this._$Eu(t,i);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(l(t))}else void 0!==t&&i.push(l(t));return i}static _$Eu(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const e of i.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(o)t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),s=r.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$EC(t,i){const e=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,e);if(void 0!==s&&!0===e.reflect){const r=(void 0!==e.converter?.toAttribute?e.converter:$).toAttribute(i,e.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,i){const e=this.constructor,s=e._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=e.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=s,this[s]=r.fromAttribute(i,t.type),this._$Em=null}}requestUpdate(t,i,e){if(void 0!==t){if(e??=this.constructor.getPropertyOptions(t),!(e.hasChanged??S)(this[t],i))return;this.P(t,i,e)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,i,e){this._$AL.has(t)||this._$AL.set(t,i),!0===e.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,i]of this._$Ep)this[t]=i;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[i,e]of t)!0!==e.wrapped||this._$AL.has(i)||void 0===this[i]||this.P(i,this[i],e)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(i)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[w("elementProperties")]=new Map,x[w("finalized")]=new Map,b?.({ReactiveElement:x}),(m.reactiveElementVersions??=[]).push("2.0.4");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const C=globalThis,T=C.trustedTypes,A=T?T.createPolicy("lit-html",{createHTML:t=>t}):void 0,_="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,z="?"+E,M=`<${z}>`,U=document,N=()=>U.createComment(""),j=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,R="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,L=/>/g,D=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,q=/"/g,B=/^(?:script|style|textarea|title)$/i,V=t=>(i,...e)=>({_$litType$:t,strings:i,values:e}),W=V(1),H=V(2),J=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),K=new WeakMap,X=U.createTreeWalker(U,129);function G(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(i):i}const Q=(t,i)=>{const e=t.length-1,s=[];let r,o=2===i?"<svg>":"",n=P;for(let i=0;i<e;i++){const e=t[i];let h,c,l=-1,a=0;for(;a<e.length&&(n.lastIndex=a,c=n.exec(e),null!==c);)a=n.lastIndex,n===P?"!--"===c[1]?n=F:void 0!==c[1]?n=L:void 0!==c[2]?(B.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=D):void 0!==c[3]&&(n=D):n===D?">"===c[0]?(n=r??P,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,h=c[1],n=void 0===c[3]?D:'"'===c[3]?q:I):n===q||n===I?n=D:n===F||n===L?n=P:(n=D,r=void 0);const d=n===D&&t[i+1].startsWith("/>")?" ":"";o+=n===P?e+M:l>=0?(s.push(h),e.slice(0,l)+_+e.slice(l)+E+d):e+E+(-2===l?i:d)}return[G(t,o+(t[e]||"<?>")+(2===i?"</svg>":"")),s]};class Y{constructor({strings:t,_$litType$:i},e){let s;this.parts=[];let r=0,o=0;const n=t.length-1,h=this.parts,[c,l]=Q(t,i);if(this.el=Y.createElement(c,e),X.currentNode=this.el.content,2===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=X.nextNode())&&h.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(_)){const i=l[o++],e=s.getAttribute(t).split(E),n=/([.?@])?(.*)/.exec(i);h.push({type:1,index:r,name:n[2],strings:e,ctor:"."===n[1]?rt:"?"===n[1]?ot:"@"===n[1]?nt:st}),s.removeAttribute(t)}else t.startsWith(E)&&(h.push({type:6,index:r}),s.removeAttribute(t));if(B.test(s.tagName)){const t=s.textContent.split(E),i=t.length-1;if(i>0){s.textContent=T?T.emptyScript:"";for(let e=0;e<i;e++)s.append(t[e],N()),X.nextNode(),h.push({type:2,index:++r});s.append(t[i],N())}}}else if(8===s.nodeType)if(s.data===z)h.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(E,t+1));)h.push({type:7,index:r}),t+=E.length-1}r++}}static createElement(t,i){const e=U.createElement("template");return e.innerHTML=t,e}}function tt(t,i,e=t,s){if(i===J)return i;let r=void 0!==s?e._$Co?.[s]:e._$Cl;const o=j(i)?void 0:i._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,e,s)),void 0!==s?(e._$Co??=[])[s]=r:e._$Cl=r),void 0!==r&&(i=tt(t,r._$AS(t,i.values),r,s)),i}class it{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:e}=this._$AD,s=(t?.creationScope??U).importNode(i,!0);X.currentNode=s;let r=X.nextNode(),o=0,n=0,h=e[0];for(;void 0!==h;){if(o===h.index){let i;2===h.type?i=new et(r,r.nextSibling,this,t):1===h.type?i=new h.ctor(r,h.name,h.strings,this,t):6===h.type&&(i=new ht(r,this,t)),this._$AV.push(i),h=e[++n]}o!==h?.index&&(r=X.nextNode(),o++)}return X.currentNode=U,s}p(t){let i=0;for(const e of this._$AV)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,e,s){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=tt(this,t,i),j(t)?t===Z||null==t||""===t?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==J&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Z&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:e}=t,s="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=Y.createElement(G(e.h,e.h[0]),this.options)),e);if(this._$AH?._$AD===s)this._$AH.p(i);else{const t=new it(s,this),e=t.u(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let i=K.get(t.strings);return void 0===i&&K.set(t.strings,i=new Y(t)),i}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,s=0;for(const r of t)s===i.length?i.push(e=new et(this.S(N()),this.S(N()),this,this.options)):e=i[s],e._$AI(r),s++;s<i.length&&(this._$AR(e&&e._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class st{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,e,s,r){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=r,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=Z}_$AI(t,i=this,e,s){const r=this.strings;let o=!1;if(void 0===r)t=tt(this,t,i,0),o=!j(t)||t!==this._$AH&&t!==J,o&&(this._$AH=t);else{const s=t;let n,h;for(t=r[0],n=0;n<r.length-1;n++)h=tt(this,s[e+n],i,n),h===J&&(h=this._$AH[n]),o||=!j(h)||h!==this._$AH[n],h===Z?t=Z:t!==Z&&(t+=(h??"")+r[n+1]),this._$AH[n]=h}o&&!s&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rt extends st{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}}class ot extends st{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Z)}}class nt extends st{constructor(t,i,e,s,r){super(t,i,e,s,r),this.type=5}_$AI(t,i=this){if((t=tt(this,t,i,0)??Z)===J)return;const e=this._$AH,s=t===Z&&e!==Z||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,r=t!==Z&&(e===Z||s);s&&this.element.removeEventListener(this.name,this,e),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ht{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){tt(this,t)}}const ct=C.litHtmlPolyfillSupport;ct?.(Y,et),(C.litHtmlVersions??=[]).push("3.1.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
class lt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,e)=>{const s=e?.renderBefore??i;let r=s._$litPart$;if(void 0===r){const t=e?.renderBefore??null;s._$litPart$=r=new et(i.insertBefore(N(),t),t,void 0,e??{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}}lt._$litElement$=!0,lt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lt});const at=globalThis.litElementPolyfillSupport;at?.({LitElement:lt}),(globalThis.litElementVersions??=[]).push("4.0.4");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const dt={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:S},ut=(t=dt,i,e)=>{const{kind:s,metadata:r}=e;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(e.name,t),"accessor"===s){const{name:s}=e;return{set(e){const r=i.get.call(this);i.set.call(this,e),this.requestUpdate(s,r,t)},init(i){return void 0!==i&&this.P(s,void 0,t),i}}}if("setter"===s){const{name:s}=e;return function(e){const r=this[s];i.call(this,e),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function ft(t){return(i,e)=>"object"==typeof e?ut(t,i,e):((t,i,e)=>{const s=i.hasOwnProperty(e);return i.constructor.createProperty(e,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(i,e):void 0})(t,i,e)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}const gt=(t,i,e)=>(e.configurable=!0,e.enumerable=!0,e)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;class pt{constructor(t){this.cle=t}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:t,domain:s,range:r}=this.cle;this.colorScale=t?i.scaleSequential(t).domain(s):i.scaleLinear().range(r).domain(s).interpolate(e.interpolateHcl)}setDiscreteColorScale(){this.colorScale=i.scaleQuantize().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const t=this.cle.domain;this.colorScale=i.scaleThreshold().domain(t.slice(1,t.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=i.scaleOrdinal().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(t){throw new Error(`invalid property scaletype: ${t}.\n      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const mt=1;class vt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,e){this._$Ct=t,this._$AM=i,this._$Ci=e}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const yt=(t=>(...i)=>({_$litDirective$:t,values:i}))(class extends vt{constructor(t){if(super(t),t.type!==mt||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(t,[i]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(i)}const e=t.element.classList;for(const t of this.st)t in i||(e.remove(t),this.st.delete(t));for(const t in i){const s=!!i[t];s===this.st.has(t)||this.nt?.has(t)||(s?(e.add(t),this.st.add(t)):(e.remove(t),this.st.delete(t)))}return J}});class bt{constructor(t){this.cle=t}render(){const t=this.cle.titleText?W`<p class="legend-title">${this.cle.titleText}</p>`:"",i={hidden:"categorical"===this.cle.scaleType},e={hidden:"categorical"!==this.cle.scaleType,"categorical-container":!0};return W`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${t}
      <slot name="subtitle"></slot>
      <svg
        class=${yt(i)}
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
      <ul class=${yt(e)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if("categorical"!==this.cle.scaleType)return"";const{markType:t,colorScale:i,domain:e}=this.cle,s={"legend-item":!0,line:"line"===t,circle:"circle"===t};return W`${e.map((t=>W`<li
          class=${yt(s)}
          style="--color:${i(t)}"
        >
          ${t}
        </li>`))}`}renderContinuous(){if("continuous"!==this.cle.scaleType||null===this.cle.colorScale)return"";const{colorScale:t,marginTop:i,marginLeft:s,marginRight:r,tickSize:o,width:n,range:h}=this.cle,c=this.cle.marginBottom+o,l=this.cle.height+o,a=t.interpolator?.()||e.piecewise(e.interpolateHcl,h);return H`<image
      x=${s}
      y=${i}
      width=${n-r-s}
      height=${l-i-c}
      preserveAspectRatio="none"
      href=${this.getColorRamp(a).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if("discrete"!==this.cle.scaleType&&"threshold"!==this.cle.scaleType)return"";const{tickSize:t,marginTop:i,marginLeft:e,colorScale:s,xScale:r}=this.cle,o=this.cle.height+t,n=this.cle.marginBottom+t,h=s.range();return H`${h.map((t=>H`<rect x=${(t=>s.invertExtent(t).map(r)[0]||e)(t)} y=${i} width=${(t=>{let[i,e]=s.invertExtent(t).map(r);return i=i||0,e=e||r.range()[1],e-i})(t)} height=${o-i-n} fill=${t}></rect>`))}`}renderAxis(){if(!this.cle.xScale||"categorical"===this.cle.scaleType)return"";const{ticks:t,tickSize:i,tickFormat:e,tickFormatter:s,tickValues:r,xScale:o,marginTop:n}=this.cle,h=this.cle.height+i,c=this.cle.marginBottom+i,l=r?.length?r:o.ticks.apply(o,[t,e]),a=Math.max(i,0)+3;return H`<g
      class="x-axis"
      transform="translate(0, ${h-c})"
      text-anchor="middle"
    >${l.map((t=>H`<g class="tick" transform='translate(${o(t)},0)'>
      <line stroke="currentColor" y2="${i}" y1="${n+c-h}"></line>
      <text fill="currentColor" y="${a}" dy="0.71em">${s(t)}</text>
      </g>`))}</g>`}getColorRamp(t,i=256){const e=document.createElement("canvas");e.setAttribute("height","1"),e.setAttribute("width",`${i}`);const s=e.getContext("2d");for(let e=0;e<i;e++)s.fillStyle=t(e/(i-1)),s.fillRect(e,0,1,1);return e}}const wt=[0,1],$t=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],St=["domain","range","interpolator","scaleType"],kt=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class xt{constructor(t){this.cle=t}setXScale(){const{scaleType:t,marginLeft:e,width:s,marginRight:r}=this.cle;switch(t){case"continuous":this.xScale=i.scaleLinear().domain(this.cle.domain).range([e,s-r]);break;case"discrete":case"threshold":this.xScale=i.scaleLinear().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([e,s-r]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${t}`)}}handleAxisTicks(){if(("discrete"===this.cle.scaleType||"threshold"===this.cle.scaleType)&&!this.cle.tickValues){const[t,i]=this.xScale.domain();this.cle.tickValues=[t,...this.cle.colorScale?.thresholds?.()||this.cle.colorScale.domain(),i]}"function"!=typeof this.cle.tickFormatter&&(this.cle.tickFormat?.length?this.cle.tickFormatter=s.format(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||5,this.cle.tickFormat||".1f"))}}const Ct=((t,...i)=>{const e=1===t.length?t[0]:i.reduce(((i,e,s)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[s+1]),t[0]);return new c(e,t,n)})`
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
`;var Tt=function(t,i,e,s){for(var r,o=arguments.length,n=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(i,e,n):r(i,e))||n);return o>3&&n&&Object.defineProperty(i,e,n),n};t.ColorLegendElement=class extends lt{constructor(){super(...arguments),this.titleText="Color Legend Element",this.width=325,this.height=32,this.marginTop=6,this.marginRight=12,this.marginBottom=16,this.marginLeft=12,this.scaleType="continuous",this.domain=wt,this.range=$t,this.markType="circle",this.ticks=5,this.tickFormat=".1f",this.tickSize=6,this.tickValues=null,this.colorScaleSetter=new pt(this),this.axisTickSetter=new xt(this),this.renderer=new bt(this)}get interpolator(){return this._interpolator}set interpolator(t){if("function"!=typeof t)throw new Error("interpolator must be a function.");{const i=this.interpolator;this._interpolator=t,this.requestUpdate("interpolator",i)}}get tickFormatter(){return this._tickFormatter}set tickFormatter(t){if("function"!=typeof t)throw new Error("tickFormatter must be a function.");{const i=this.tickFormatter;this._tickFormatter=t,this.requestUpdate("tickFormatter",i)}}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(t){St.some((i=>t.has(i)))&&this.colorScaleSetter.setColorScale(),kt.some((i=>t.has(i)))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}},t.ColorLegendElement.styles=[Ct],Tt([ft({type:String})],t.ColorLegendElement.prototype,"titleText",void 0),Tt([ft({type:Number})],t.ColorLegendElement.prototype,"width",void 0),Tt([ft({type:Number})],t.ColorLegendElement.prototype,"height",void 0),Tt([ft({type:Number})],t.ColorLegendElement.prototype,"marginTop",void 0),Tt([ft({type:Number})],t.ColorLegendElement.prototype,"marginRight",void 0),Tt([ft({type:Number})],t.ColorLegendElement.prototype,"marginBottom",void 0),Tt([ft({type:Number})],t.ColorLegendElement.prototype,"marginLeft",void 0),Tt([ft({type:String})],t.ColorLegendElement.prototype,"scaleType",void 0),Tt([ft({type:Array})],t.ColorLegendElement.prototype,"domain",void 0),Tt([ft({type:Array})],t.ColorLegendElement.prototype,"range",void 0),Tt([ft({type:String})],t.ColorLegendElement.prototype,"markType",void 0),Tt([ft({type:Number})],t.ColorLegendElement.prototype,"ticks",void 0),Tt([ft({type:String})],t.ColorLegendElement.prototype,"tickFormat",void 0),Tt([ft({type:Number})],t.ColorLegendElement.prototype,"tickSize",void 0),Tt([ft({type:Array})],t.ColorLegendElement.prototype,"tickValues",void 0),Tt([function(t,i){return(e,s,r)=>{const o=i=>i.renderRoot?.querySelector(t)??null;if(i){const{get:t,set:i}="object"==typeof s?e:r??(()=>{const t=Symbol();return{get(){return this[t]},set(i){this[t]=i}}})();return gt(0,0,{get(){let e=t.call(this);return void 0===e&&(e=o(this),(null!==e||this.hasUpdated)&&i.call(this,e)),e}})}return gt(0,0,{get(){return o(this)}})}}("svg")],t.ColorLegendElement.prototype,"svg",void 0),Tt([ft({attribute:!1})],t.ColorLegendElement.prototype,"interpolator",null),Tt([ft({attribute:!1})],t.ColorLegendElement.prototype,"tickFormatter",null),t.ColorLegendElement=Tt([(t=>(i,e)=>{void 0!==e?e.addInitializer((()=>{customElements.define(t,i)})):customElements.define(t,i)})("color-legend")],t.ColorLegendElement),Object.defineProperty(t,"i",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?i(exports,require("d3-scale"),require("d3-interpolate"),require("d3-format")):"function"==typeof define&&define.amd?define(["exports","d3-scale","d3-interpolate","d3-format"],i):i((t="undefined"!=typeof globalThis?globalThis:t||self)["color-legend-element"]={},t.d3,t.d3,t.d3);
