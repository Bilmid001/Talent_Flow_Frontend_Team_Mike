"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1827],{3238:function(e,t,r){r.d(t,{Z:function(){return m}});var s=r(7437),a=r(2265),n=r(6463),i=r(4817),l=r(6600),o=r(2421),c=r(2022),d=r(4258),u=r(9896),x=r(7138);function m(e){let{title:t="Titus",subtitle:r="Boost your tech skills now and stand out."}=e,[m,h]=(0,a.useState)(!1),[y,f]=(0,a.useState)(!1),p=(0,a.useRef)(null),g=(0,a.useRef)(null),v=(0,n.useRouter)();return(0,a.useEffect)(()=>{function e(e){p.current&&!p.current.contains(e.target)&&h(!1),g.current&&!g.current.contains(e.target)&&f(!1)}return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,s.jsxs)("header",{className:"bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between sticky top-0 z-20",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{className:"font-extrabold text-gray-900 text-sm",children:["Welcome back, ",(0,s.jsxs)("span",{className:"text-primary",children:[t,"!"]})," \uD83D\uDC4B"]}),(0,s.jsx)("p",{className:"text-gray-400 text-xs",children:r})]}),(0,s.jsxs)("div",{className:"hidden md:flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-2.5 w-96",children:[(0,s.jsx)(i.Z,{size:15,className:"text-gray-400 flex-shrink-0"}),(0,s.jsx)("input",{type:"text",placeholder:"Search...",className:"bg-transparent text-sm text-gray-600 placeholder-gray-400 focus:outline-none flex-1 min-w-0"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsxs)("div",{className:"relative",ref:g,children:[(0,s.jsxs)("button",{onClick:()=>{f(!y),h(!1)},className:"relative p-2 rounded-xl bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors",children:[(0,s.jsx)(l.Z,{size:18}),(0,s.jsx)("span",{className:"absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"})]}),y&&(0,s.jsxs)("div",{className:"absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden",children:[(0,s.jsxs)("div",{className:"px-4 py-3 border-b border-gray-100 flex items-center justify-between",children:[(0,s.jsx)("p",{className:"font-bold text-gray-900 text-sm",children:"Notifications"}),(0,s.jsx)("button",{className:"text-primary text-xs font-medium hover:underline",children:"Mark all read"})]}),(0,s.jsx)("ul",{className:"divide-y divide-gray-50 max-h-64 overflow-y-auto",children:[{id:1,text:"New lecture added to Figma UI UX Design",time:"2 mins ago",unread:!0},{id:2,text:"Your assignment is due tomorrow",time:"1 hour ago",unread:!0},{id:3,text:"Instructor replied to your comment",time:"3 hours ago",unread:!1}].map(e=>(0,s.jsxs)("li",{className:"px-4 py-3 hover:bg-gray-50 transition-colors ".concat(e.unread?"bg-blue-50/40":""),children:[(0,s.jsx)("p",{className:"text-sm text-gray-700 leading-snug",children:e.text}),(0,s.jsx)("p",{className:"text-xs text-gray-400 mt-1",children:e.time})]},e.id))}),(0,s.jsx)("div",{className:"px-4 py-2.5 border-t border-gray-100 text-center",children:(0,s.jsx)(x.default,{href:"/student/StudentNotifications",className:"text-primary text-xs font-semibold hover:underline",children:"View all notifications"})})]})]}),(0,s.jsxs)("div",{className:"relative",ref:p,children:[(0,s.jsxs)("button",{onClick:()=>{h(!m),f(!1)},className:"flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-xl px-2 py-1.5 transition-colors",children:[(0,s.jsx)("img",{src:"https://randomuser.me/api/portraits/men/30.jpg",alt:"User",className:"w-8 h-8 rounded-full object-cover"}),(0,s.jsxs)("div",{className:"hidden sm:block text-left",children:[(0,s.jsx)("p",{className:"font-semibold text-gray-900 text-xs leading-none",children:"Titus Williams"}),(0,s.jsx)("p",{className:"text-gray-400 text-xs mt-0.5",children:"UI/UX Designer"})]}),(0,s.jsx)(o.Z,{size:14,className:"text-gray-400 transition-transform ".concat(m?"rotate-180":"")})]}),m&&(0,s.jsxs)("div",{className:"absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden py-1",children:[(0,s.jsxs)("div",{className:"px-4 py-3 border-b border-gray-100",children:[(0,s.jsx)("p",{className:"font-bold text-gray-900 text-sm",children:"Titus Williams"}),(0,s.jsx)("p",{className:"text-gray-400 text-xs",children:"titus@example.com"})]}),(0,s.jsxs)(x.default,{href:"/student/StudentProfile",onClick:()=>h(!1),className:"flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors",children:[(0,s.jsx)(c.Z,{size:15})," My Profile"]}),(0,s.jsxs)(x.default,{href:"/student/settings",onClick:()=>h(!1),className:"flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors",children:[(0,s.jsx)(d.Z,{size:15})," Settings"]}),(0,s.jsx)("div",{className:"border-t border-gray-100 mt-1 pt-1",children:(0,s.jsxs)("button",{onClick:()=>{h(!1),v.push("/home")},className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors",children:[(0,s.jsx)(u.Z,{size:15})," Logout"]})})]})]})]})]})}},8030:function(e,t,r){r.d(t,{Z:function(){return o}});var s=r(2265);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,s.forwardRef)((e,t)=>{let{color:r="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:c="",children:d,iconNode:u,...x}=e;return(0,s.createElement)("svg",{ref:t,...i,width:a,height:a,stroke:r,strokeWidth:o?24*Number(l)/Number(a):l,className:n("lucide",c),...x},[...u.map(e=>{let[t,r]=e;return(0,s.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),o=(e,t)=>{let r=(0,s.forwardRef)((r,i)=>{let{className:o,...c}=r;return(0,s.createElement)(l,{ref:i,iconNode:t,className:n("lucide-".concat(a(e)),o),...c})});return r.displayName="".concat(e),r}},6600:function(e,t,r){r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(8030).Z)("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]])},6540:function(e,t,r){r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(8030).Z)("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]])},2421:function(e,t,r){r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(8030).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},9896:function(e,t,r){r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(8030).Z)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]])},4817:function(e,t,r){r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(8030).Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},4258:function(e,t,r){r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(8030).Z)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},2022:function(e,t,r){r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(8030).Z)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]])},1240:function(e,t,r){r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(8030).Z)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]])},6463:function(e,t,r){var s=r(1169);r.o(s,"usePathname")&&r.d(t,{usePathname:function(){return s.usePathname}}),r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}}),r.o(s,"useSearchParams")&&r.d(t,{useSearchParams:function(){return s.useSearchParams}})}}]);