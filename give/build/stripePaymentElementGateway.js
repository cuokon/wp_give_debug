(()=>{var e={6664:function(e,t,n){!function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],_n=!0,i=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);_n=!0);}catch(e){i=!0,o=e}finally{try{_n||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;function c(){}function u(){}u.resetWarningCache=c;var l,p,f=(l=function(e){e.exports=function(){function e(e,t,n,r,o,a){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:c};return n.PropTypes=n,n}()},l(p={exports:{}},p.exports),p.exports),m=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},d=function(e){return null!==e&&"object"===o(e)},y="[object Object]",h=function e(t,n){if(!d(t)||!d(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===y;if(o!==(Object.prototype.toString.call(n)===y))return!1;if(!o&&!r)return t===n;var a=Object.keys(t),i=Object.keys(n);if(a.length!==i.length)return!1;for(var s={},c=0;c<a.length;c+=1)s[a[c]]=!0;for(var u=0;u<i.length;u+=1)s[i[u]]=!0;var l=Object.keys(s);if(l.length!==a.length)return!1;var p=t,f=n;return l.every((function(t){return e(p[t],f[t])}))},g=function(e,t,n){return d(e)?Object.keys(e).reduce((function(o,i){var s=!d(t)||!h(e[i],t[i]);return n.includes(i)?(s&&console.warn("Unsupported prop change: options.".concat(i," is not a mutable property.")),o):s?r(r({},o||{}),{},a({},i,e[i])):o}),null):null},v=function(e){if(null===e||d(t=e)&&"function"==typeof t.elements&&"function"==typeof t.createToken&&"function"==typeof t.createPaymentMethod&&"function"==typeof t.confirmCardPayment)return e;var t;throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")},E=function(e){if(function(e){return d(e)&&"function"==typeof e.then}(e))return{tag:"async",stripePromise:Promise.resolve(e).then(v)};var t=v(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},w=t.createContext(null);w.displayName="ElementsContext";var b=t.createContext(null);b.displayName="CartElementContext";var C=function(e){var n=e.stripe,r=e.options,o=e.children,a=t.useMemo((function(){return E(n)}),[n]),s=i(t.useState(null),2),c=s[0],u=s[1],l=i(t.useState(null),2),p=l[0],f=l[1],d=i(t.useState((function(){return{stripe:"sync"===a.tag?a.stripe:null,elements:"sync"===a.tag?a.stripe.elements(r):null}})),2),y=d[0],h=d[1];t.useEffect((function(){var e=!0,t=function(e){h((function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}}))};return"async"!==a.tag||y.stripe?"sync"!==a.tag||y.stripe||t(a.stripe):a.stripePromise.then((function(n){n&&e&&t(n)})),function(){e=!1}}),[a,y,r]);var v=m(n);t.useEffect((function(){null!==v&&v!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[v,n]);var C=m(r);return t.useEffect((function(){if(y.elements){var e=g(r,C,["clientSecret","fonts"]);e&&y.elements.update(e)}}),[r,C,y.elements]),t.useEffect((function(){var e=y.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"2.1.2"}),e.registerAppInfo({name:"react-stripe-js",version:"2.1.2",url:"https://stripe.com/docs/stripe-js/react"}))}),[y.stripe]),t.createElement(w.Provider,{value:y},t.createElement(b.Provider,{value:{cart:c,setCart:u,cartState:p,setCartState:f}},o))};C.propTypes={stripe:f.any,options:f.object};var S=function(e){return function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e}(t.useContext(w),e)},P=function(e){return function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e}(t.useContext(b),e)},j=function(e){return(0,e.children)(S("mounts <ElementsConsumer>"))};j.propTypes={children:f.func.isRequired};var O=function(e,n,r){var o=!!r,a=t.useRef(r);t.useEffect((function(){a.current=r}),[r]),t.useEffect((function(){if(!o||!e)return function(){};var t=function(){a.current&&a.current.apply(a,arguments)};return e.on(n,t),function(){e.off(n,t)}}),[o,n,e,a])},k=function(e,n){var r,o="".concat((r=e).charAt(0).toUpperCase()+r.slice(1),"Element"),a=n?function(e){S("mounts <".concat(o,">")),P("mounts <".concat(o,">"));var n=e.id,r=e.className;return t.createElement("div",{id:n,className:r})}:function(n){var r,a=n.id,s=n.className,c=n.options,u=void 0===c?{}:c,l=n.onBlur,p=n.onFocus,f=n.onReady,d=n.onChange,y=n.onEscape,h=n.onClick,v=n.onLoadError,E=n.onLoaderStart,w=n.onNetworksChange,b=n.onCheckout,C=n.onLineItemClick,j=n.onConfirm,k=n.onCancel,_=n.onShippingAddressChange,A=n.onShippingRateChange,x=S("mounts <".concat(o,">")).elements,I=i(t.useState(null),2),R=I[0],F=I[1],M=t.useRef(null),T=t.useRef(null),B=P("mounts <".concat(o,">")),D=B.setCart,L=B.setCartState;O(R,"blur",l),O(R,"focus",p),O(R,"escape",y),O(R,"click",h),O(R,"loaderror",v),O(R,"loaderstart",E),O(R,"networkschange",w),O(R,"lineitemclick",C),O(R,"confirm",j),O(R,"cancel",k),O(R,"shippingaddresschange",_),O(R,"shippingratechange",A),"cart"===e?r=function(e){L(e),f&&f(e)}:f&&(r="expressCheckout"===e?f:function(){f(R)}),O(R,"ready",r),O(R,"change","cart"===e?function(e){L(e),d&&d(e)}:d),O(R,"checkout","cart"===e?function(e){L(e),b&&b(e)}:b),t.useLayoutEffect((function(){if(null===M.current&&x&&null!==T.current){var t=x.create(e,u);"cart"===e&&D&&D(t),M.current=t,F(t),t.mount(T.current)}}),[x,u,D]);var N=m(u);return t.useEffect((function(){if(M.current){var e=g(u,N,["paymentRequest"]);e&&M.current.update(e)}}),[u,N]),t.useLayoutEffect((function(){return function(){if(M.current&&"function"==typeof M.current.destroy)try{M.current.destroy(),M.current=null}catch(e){}}}),[]),t.createElement("div",{id:a,className:s,ref:T})};return a.propTypes={id:f.string,className:f.string,onChange:f.func,onBlur:f.func,onFocus:f.func,onReady:f.func,onEscape:f.func,onClick:f.func,onLoadError:f.func,onLoaderStart:f.func,onNetworksChange:f.func,onCheckout:f.func,onLineItemClick:f.func,onConfirm:f.func,onCancel:f.func,onShippingAddressChange:f.func,onShippingRateChange:f.func,options:f.object},a.displayName=o,a.__elementType=e,a},_="undefined"==typeof window,A=k("auBankAccount",_),x=k("card",_),I=k("cardNumber",_),R=k("cardExpiry",_),F=k("cardCvc",_),M=k("fpxBank",_),T=k("iban",_),B=k("idealBank",_),D=k("p24Bank",_),L=k("epsBank",_),N=k("payment",_),W=k("expressCheckout",_),U=k("paymentRequestButton",_),q=k("linkAuthentication",_),Y=k("address",_),G=k("shippingAddress",_),V=k("cart",_),X=k("paymentMethodMessaging",_),K=k("affirmMessage",_),J=k("afterpayClearpayMessage",_);e.AddressElement=Y,e.AffirmMessageElement=K,e.AfterpayClearpayMessageElement=J,e.AuBankAccountElement=A,e.CardCvcElement=F,e.CardElement=x,e.CardExpiryElement=R,e.CardNumberElement=I,e.CartElement=V,e.Elements=C,e.ElementsConsumer=j,e.EpsBankElement=L,e.ExpressCheckoutElement=W,e.FpxBankElement=M,e.IbanElement=T,e.IdealBankElement=B,e.LinkAuthenticationElement=q,e.P24BankElement=D,e.PaymentElement=N,e.PaymentMethodMessagingElement=X,e.PaymentRequestButtonElement=U,e.ShippingAddressElement=G,e.useCartElement=function(){return P("calls useCartElement()").cart},e.useCartElementState=function(){return P("calls useCartElementState()").cartState},e.useElements=function(){return S("calls useElements()").elements},e.useStripe=function(){return S("calls useStripe()").stripe},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(9196))},9196:e=>{"use strict";e.exports=window.React}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}(()=>{"use strict";var e=n(9196),t="https://js.stripe.com/v3",r=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,o="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",a=null,i=Promise.resolve().then((function(){return e=null,null!==a||(a=new Promise((function(n,a){if("undefined"!=typeof window&&"undefined"!=typeof document)if(window.Stripe&&e&&console.warn(o),window.Stripe)n(window.Stripe);else try{var i=function(){for(var e=document.querySelectorAll('script[src^="'.concat(t,'"]')),n=0;n<e.length;n++){var o=e[n];if(r.test(o.src))return o}return null}();i&&e?console.warn(o):i||(i=function(e){var n=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(t).concat(n);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(r),r}(e)),i.addEventListener("load",(function(){window.Stripe?n(window.Stripe):a(new Error("Stripe.js not available"))})),i.addEventListener("error",(function(){a(new Error("Failed to load Stripe.js"))}))}catch(e){return void a(e)}else n(null)}))),a;var e})),s=!1;i.catch((function(e){s||console.warn(e)}));var c=n(6664);const u=window.wp.hooks,l=window.wp.i18n;let p=null,f=null,m=!1;const d=["BIF","CLP","DJF","GNF","JPY","KMF","KRW","MGA","PYG","RWF","UGX","VND","VUV","XAF","XOF","XPF"],y=({gateway:t})=>{const n=(0,c.useStripe)(),r=(0,c.useElements)();return t.stripe=n,t.elements=r,(0,e.createElement)(c.PaymentElement,{onChange:e=>{f=e.value.type,m="card"===e.value.type},options:{fields:{billingDetails:{name:"never",email:"never"}}}})};let h={};const g={id:"stripe_payment_element",initialize(){const{stripeKey:e,stripeConnectedAccountId:t,formId:n}=this.settings;if(!e&&!t)throw new Error("Stripe gateway settings are missing.  Check your Stripe settings.");h=(0,u.applyFilters)("givewp_stripe_payment_element_appearance_options",{},n),p=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];s=!0;var r=Date.now();return i.then((function(e){return function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:t})}(r,n),r}(e,t,r)}))}(e,t?{stripeAccount:t}:{})},beforeCreatePayment:async function(e){if(!this.stripe||!this.elements)throw new Error("Stripe was not able to load.");const{error:t}=await this.elements.submit();if(t){let e=(0,l.__)("Invalid Payment Data.","give");throw"string"==typeof t&&(e=(0,l.sprintf)((0,l.__)("Invalid Payment Data. Error Details: %s","give"),t)),t.hasOwnProperty("code")&&t.hasOwnProperty("message")&&(e=(0,l.sprintf)((0,l.__)("Invalid Payment Data. Error Details: %s (code: %s)","give"),t.message,t.code)),new Error(e)}return{stripePaymentMethod:f,stripePaymentMethodIsCreditCard:m,...this.settings}},afterCreatePayment:async function(e){const{error:t}=await this.stripe.confirmPayment({elements:this.elements,clientSecret:e.data.clientSecret,confirmParams:{payment_method_data:{billing_details:e.data.billingDetails},return_url:e.data.returnUrl}});if(console.error(t),"card_error"===t.type||"validation_error"===t.type)throw new Error(t.message);if(t)throw new Error(t.message)},Fields(){if(!p)throw new Error("Stripe library was not able to load.  Check your Stripe settings.");const{useWatch:t}=window.givewp.form.hooks,n=t({name:"donationType"}),r=t({name:"currency"});var o,a;const i={mode:"subscription"===n?"subscription":"payment",amount:(o=t({name:"amount"}),a=r.toString().toUpperCase(),d.includes(a)?Math.round(parseFloat(o)):Math.round(100*parseFloat(o))),currency:r.toLowerCase(),appearance:h};return(0,e.createElement)(c.Elements,{stripe:p,options:i},(0,e.createElement)(y,{gateway:g}))}};window.givewp.gateways.register(g)})()})();