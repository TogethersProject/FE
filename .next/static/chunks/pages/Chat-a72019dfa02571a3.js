(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[440],{2430:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Chat",function(){return n(9008)}])},9008:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var s=n(5893),i=n(7294),r=n(7066);n(2599),n(3454);let a=(0,i.createContext)({socket:null,isConnected:!1}),l=()=>(0,i.useContext)(a);var o=()=>{let[e,t]=(0,i.useState)([]),[n,a]=(0,i.useState)(""),{socket:o,isConnected:c}=l(),[u]=(0,i.useState)(+new Date);(0,i.useEffect)(()=>{if(!o)return;let e=e=>{t(t=>[...t,e])};return o.on("message",e),()=>{o.off("message",e)}},[o]);let d=async e=>{if(e.preventDefault(),""===n.trim())return;let s={userId:u,content:n};await r.Z.post("/api/chat",s),t(e=>[...e,s]),a("")};return(0,s.jsxs)("div",{className:"rounded-xl border bg-card text-card-foreground shadow w-[300px] mx-auto",children:[(0,s.jsx)("div",{className:"p-6",children:(0,s.jsx)("p",{children:c?"연결 완료":"연결중"})}),(0,s.jsx)("div",{className:"p-6 pt-0",children:(0,s.jsx)("div",{className:"space-y-4",children:e.map((e,t)=>(0,s.jsx)("div",{className:"flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ".concat(e.userId!==u?"ml-auto bg-blue-400 text-white":"bg-zinc-100"),children:e.content},t))})}),(0,s.jsx)("div",{className:"flex items-center p-6 pt-0",children:(0,s.jsxs)("form",{className:"flex w-full items-center space-x-2",onSubmit:d,children:[(0,s.jsx)("input",{type:"text",value:n,onChange:e=>a(e.target.value),className:"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 flex-1"}),(0,s.jsx)("button",{type:"submit",className:"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white shadow hover:bg-primary/90 h-9 w-9",children:"전송"})]})})]})}}},function(e){e.O(0,[861,888,774,179],function(){return e(e.s=2430)}),_N_E=e.O()}]);