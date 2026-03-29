(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9985],{8317:function(e,t,r){Promise.resolve().then(r.bind(r,2183))},8030:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(2265);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:u,className:l="",children:c,iconNode:m,...d}=e;return(0,n.createElement)("svg",{ref:t,...o,width:a,height:a,stroke:r,strokeWidth:u?24*Number(i)/Number(a):i,className:s("lucide",l),...d},[...m.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(c)?c:[c]])}),u=(e,t)=>{let r=(0,n.forwardRef)((r,o)=>{let{className:u,...l}=r;return(0,n.createElement)(i,{ref:o,iconNode:t,className:s("lucide-".concat(a(e)),u),...l})});return r.displayName="".concat(e),r}},518:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},6463:function(e,t,r){"use strict";var n=r(1169);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},2183:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(7437),a=r(2265),s=r(7138),o=r(6463),i=r(518);function u(){let[e,t]=(0,a.useState)(""),[r,u]=(0,a.useState)(!1),l=(0,o.useRouter)();return(0,n.jsx)("main",{className:"min-h-screen bg-white flex items-center justify-center px-4",children:(0,n.jsxs)("div",{className:"w-full max-w-md text-center",children:[(0,n.jsx)("h1",{className:"text-2xl font-extrabold text-gray-900 mb-3",children:"Forgot password?"}),(0,n.jsx)("p",{className:"text-gray-500 text-sm leading-relaxed mb-8 max-w-sm mx-auto",children:"Enter the email or number associated with your account, and we will email you a verification code to reset your password"}),(0,n.jsxs)("form",{onSubmit:t=>{t.preventDefault(),u(!0),setTimeout(()=>{l.push("/verify-code?email="+encodeURIComponent(e))},800)},className:"space-y-4",children:[(0,n.jsx)("input",{type:"text",placeholder:"Email/Number",required:!0,value:e,onChange:e=>t(e.target.value),className:"w-full px-4 py-3 border border-blue-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-left"}),(0,n.jsx)("button",{type:"submit",disabled:r,className:"w-full py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all text-sm disabled:opacity-70",children:r?"Sending…":"Continue"})]}),(0,n.jsxs)(s.default,{href:"/signin",className:"inline-flex items-center gap-1.5 text-gray-500 text-sm mt-6 hover:text-primary transition-colors",children:[(0,n.jsx)(i.Z,{size:16}),"Back to Sign in"]})]})})}}},function(e){e.O(0,[7138,2971,7023,1744],function(){return e(e.s=8317)}),_N_E=e.O()}]);