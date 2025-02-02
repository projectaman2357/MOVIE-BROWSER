import{r as c}from"./index-C2ZIC7G7.js";let S={data:""},_=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||S,H=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,L=/\/\*[^]*?\*\/|  +/g,D=/\n+/g,b=(e,t)=>{let a="",i="",s="";for(let r in e){let n=e[r];r[0]=="@"?r[1]=="i"?a=r+" "+n+";":i+=r[1]=="f"?b(n,r):r+"{"+b(n,r[1]=="k"?"":t)+"}":typeof n=="object"?i+=b(n,t?t.replace(/([^,])+/g,o=>r.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,o):o?o+" "+l:l)):r):n!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=b.p?b.p(r,n):r+":"+n+";")}return a+(t&&s?t+"{"+s+"}":s)+i},y={},T=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+T(e[a]);return t}return e},U=(e,t,a,i,s)=>{let r=T(e),n=y[r]||(y[r]=(l=>{let d=0,u=11;for(;d<l.length;)u=101*u+l.charCodeAt(d++)>>>0;return"go"+u})(r));if(!y[n]){let l=r!==e?e:(d=>{let u,m,f=[{}];for(;u=H.exec(d.replace(L,""));)u[4]?f.shift():u[3]?(m=u[3].replace(D," ").trim(),f.unshift(f[0][m]=f[0][m]||{})):f[0][u[1]]=u[2].replace(D," ").trim();return f[0]})(e);y[n]=b(s?{["@keyframes "+n]:l}:l,a?"":"."+n)}let o=a&&y.g?y.g:null;return a&&(y.g=y[n]),((l,d,u,m)=>{m?d.data=d.data.replace(m,l):d.data.indexOf(l)===-1&&(d.data=u?l+d.data:d.data+l)})(y[n],t,i,o),n},R=(e,t,a)=>e.reduce((i,s,r)=>{let n=t[r];if(n&&n.call){let o=n(a),l=o&&o.props&&o.props.className||/^go/.test(o)&&o;n=l?"."+l:o&&typeof o=="object"?o.props?"":b(o,""):o===!1?"":o}return i+s+(n??"")},"");function A(e){let t=this||{},a=e.call?e(t.p):e;return U(a.unshift?a.raw?R(a,[].slice.call(arguments,1),t.p):a.reduce((i,s)=>Object.assign(i,s&&s.call?s(t.p):s),{}):a,_(t.target),t.g,t.o,t.k)}let M,I,N;A.bind({g:1});let h=A.bind({k:1});function Y(e,t,a,i){b.p=t,M=e,I=a,N=i}function x(e,t){let a=this||{};return function(){let i=arguments;function s(r,n){let o=Object.assign({},r),l=o.className||s.className;a.p=Object.assign({theme:I&&I()},o),a.o=/ *go\d+/.test(l),o.className=A.apply(a,i)+(l?" "+l:"");let d=e;return e[0]&&(d=o.as||e,delete o.as),N&&d[0]&&N(o),M(d,o)}return t?t(s):s}}var Z=e=>typeof e=="function",j=(e,t)=>Z(e)?e(t):e,q=(()=>{let e=0;return()=>(++e).toString()})(),F=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),B=20,$=new Map,G=1e3,P=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),v({type:4,toastId:e})},G);$.set(e,t)},J=e=>{let t=$.get(e);t&&clearTimeout(t)},z=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,B)};case 1:return t.toast.id&&J(t.toast.id),{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:a}=t;return e.toasts.find(r=>r.id===a.id)?z(e,{type:1,toast:a}):z(e,{type:0,toast:a});case 3:let{toastId:i}=t;return i?P(i):e.toasts.forEach(r=>{P(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===i||i===void 0?{...r,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+s}))}}},k=[],O={toasts:[],pausedAt:void 0},v=e=>{O=z(O,e),k.forEach(t=>{t(O)})},Q={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},V=(e={})=>{let[t,a]=c.useState(O);c.useEffect(()=>(k.push(a),()=>{let s=k.indexOf(a);s>-1&&k.splice(s,1)}),[t]);let i=t.toasts.map(s=>{var r,n;return{...e,...e[s.type],...s,duration:s.duration||((r=e[s.type])==null?void 0:r.duration)||(e==null?void 0:e.duration)||Q[s.type],style:{...e.style,...(n=e[s.type])==null?void 0:n.style,...s.style}}});return{...t,toasts:i}},W=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(a==null?void 0:a.id)||q()}),w=e=>(t,a)=>{let i=W(t,e,a);return v({type:2,toast:i}),i.id},p=(e,t)=>w("blank")(e,t);p.error=w("error");p.success=w("success");p.loading=w("loading");p.custom=w("custom");p.dismiss=e=>{v({type:3,toastId:e})};p.remove=e=>v({type:4,toastId:e});p.promise=(e,t,a)=>{let i=p.loading(t.loading,{...a,...a==null?void 0:a.loading});return e.then(s=>(p.success(j(t.success,s),{id:i,...a,...a==null?void 0:a.success}),s)).catch(s=>{p.error(j(t.error,s),{id:i,...a,...a==null?void 0:a.error})}),e};var X=(e,t)=>{v({type:1,toast:{id:e,height:t}})},K=()=>{v({type:5,time:Date.now()})},ee=e=>{let{toasts:t,pausedAt:a}=V(e);c.useEffect(()=>{if(a)return;let r=Date.now(),n=t.map(o=>{if(o.duration===1/0)return;let l=(o.duration||0)+o.pauseDuration-(r-o.createdAt);if(l<0){o.visible&&p.dismiss(o.id);return}return setTimeout(()=>p.dismiss(o.id),l)});return()=>{n.forEach(o=>o&&clearTimeout(o))}},[t,a]);let i=c.useCallback(()=>{a&&v({type:6,time:Date.now()})},[a]),s=c.useCallback((r,n)=>{let{reverseOrder:o=!1,gutter:l=8,defaultPosition:d}=n||{},u=t.filter(g=>(g.position||d)===(r.position||d)&&g.height),m=u.findIndex(g=>g.id===r.id),f=u.filter((g,C)=>C<m&&g.visible).length;return u.filter(g=>g.visible).slice(...o?[f+1]:[0,f]).reduce((g,C)=>g+(C.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:X,startPause:K,endPause:i,calculateOffset:s}}},te=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ae=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,re=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,se=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${te} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ae} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${re} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ie=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,oe=x("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ie} 1s linear infinite;
`,ne=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,le=h`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,de=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ne} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${le} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ce=x("div")`
  position: absolute;
`,ue=x("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,pe=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,fe=x("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${pe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,me=({toast:e})=>{let{icon:t,type:a,iconTheme:i}=e;return t!==void 0?typeof t=="string"?c.createElement(fe,null,t):t:a==="blank"?null:c.createElement(ue,null,c.createElement(oe,{...i}),a!=="loading"&&c.createElement(ce,null,a==="error"?c.createElement(se,{...i}):c.createElement(de,{...i})))},ge=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ye=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,he="0%{opacity:0;} 100%{opacity:1;}",be="0%{opacity:1;} 100%{opacity:0;}",xe=x("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ve=x("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,we=(e,t)=>{let a=e.includes("top")?1:-1,[i,s]=F()?[he,be]:[ge(a),ye(a)];return{animation:t?`${h(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ee=c.memo(({toast:e,position:t,style:a,children:i})=>{let s=e.height?we(e.position||t||"top-center",e.visible):{opacity:0},r=c.createElement(me,{toast:e}),n=c.createElement(ve,{...e.ariaProps},j(e.message,e));return c.createElement(xe,{className:e.className,style:{...s,...a,...e.style}},typeof i=="function"?i({icon:r,message:n}):c.createElement(c.Fragment,null,r,n))});Y(c.createElement);var $e=({id:e,className:t,style:a,onHeightUpdate:i,children:s})=>{let r=c.useCallback(n=>{if(n){let o=()=>{let l=n.getBoundingClientRect().height;i(e,l)};o(),new MutationObserver(o).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return c.createElement("div",{ref:r,className:t,style:a},s)},ke=(e,t)=>{let a=e.includes("top"),i=a?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:F()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...i,...s}},Oe=A`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,E=16,Ae=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:i,children:s,containerStyle:r,containerClassName:n})=>{let{toasts:o,handlers:l}=ee(a);return c.createElement("div",{style:{position:"fixed",zIndex:9999,top:E,left:E,right:E,bottom:E,pointerEvents:"none",...r},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},o.map(d=>{let u=d.position||t,m=l.calculateOffset(d,{reverseOrder:e,gutter:i,defaultPosition:t}),f=ke(u,m);return c.createElement($e,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Oe:"",style:f},d.type==="custom"?j(d.message,d):s?s(d):c.createElement(Ee,{toast:d,position:u}))}))},Ce=p;export{Ae as I,Ce as _};
