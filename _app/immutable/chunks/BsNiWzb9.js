import{j as V,s as R,k as A,m as C,o as M,p as I,q as b,r as P,H as Y,t as j,v as T,w as g,x as D,y as q,g as p,z as B,A as $,B as z,C as F,D as G,F as J,G as W,d as K,I as Q,h as E,J as U,c as X}from"./5mW6CfFj.js";import{b as Z}from"./CyuiirnU.js";const x=["touchstart","touchmove"];function rr(r){return x.includes(r)}const er=new Set,O=new Set;function m(r){var N;var e=this,s=e.ownerDocument,c=r.type,o=((N=r.composedPath)==null?void 0:N.call(r))||[],t=o[0]||r.target,f=0,_=r.__root;if(_){var u=o.indexOf(_);if(u!==-1&&(e===document||e===window)){r.__root=e;return}var h=o.indexOf(e);if(h===-1)return;u<=h&&(f=u)}if(t=o[f]||r.target,t!==e){V(r,"currentTarget",{configurable:!0,get(){return t||s}});var w=M,i=I;R(null),A(null);try{for(var a,n=[];t!==null;){var d=t.assignedSlot||t.parentNode||t.host||null;try{var l=t["__"+c];if(l!==void 0&&!t.disabled)if(C(l)){var[H,...L]=l;H.apply(t,[r,...L])}else l.call(t,r)}catch(y){a?n.push(y):a=y}if(r.cancelBubble||d===e||d===null)break;t=d}if(a){for(let y of n)queueMicrotask(()=>{throw y});throw a}}finally{r.__root=e,delete r.currentTarget,R(w),A(i)}}}function nr(r,e){var s=e==null?"":typeof e=="object"?e+"":e;s!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=s,r.nodeValue=s==null?"":s+"")}function tr(r,e){return k(r,e)}function ir(r,e){b(),e.intro=e.intro??!1;const s=e.target,c=E,o=p;try{for(var t=P(s);t&&(t.nodeType!==8||t.data!==Y);)t=j(t);if(!t)throw T;g(!0),D(t),q();const f=k(r,{...e,anchor:t});if(p===null||p.nodeType!==8||p.data!==B)throw $(),T;return g(!1),f}catch(f){if(f===T)return e.recover===!1&&z(),b(),F(s),g(!1),tr(r,e);throw f}finally{g(c),D(o)}}const v=new Map;function k(r,{target:e,anchor:s,props:c={},events:o,context:t,intro:f=!0}){b();var _=new Set,u=i=>{for(var a=0;a<i.length;a++){var n=i[a];if(!_.has(n)){_.add(n);var d=rr(n);e.addEventListener(n,m,{passive:d});var l=v.get(n);l===void 0?(document.addEventListener(n,m,{passive:d}),v.set(n,1)):v.set(n,l+1)}}};u(G(er)),O.add(u);var h=void 0,w=J(()=>{var i=s??e.appendChild(W());return K(()=>{if(t){Q({});var a=X;a.c=t}o&&(c.$$events=o),E&&Z(i,null),h=r(i,c)||{},E&&(I.nodes_end=p),t&&U()}),()=>{var d;for(var a of _){e.removeEventListener(a,m);var n=v.get(a);--n===0?(document.removeEventListener(a,m),v.delete(a)):v.set(a,n)}O.delete(u),i!==s&&((d=i.parentNode)==null||d.removeChild(i))}});return S.set(h,w),h}let S=new WeakMap;function or(r,e){const s=S.get(r);return s?(S.delete(r),s(e)):Promise.resolve()}export{ir as h,tr as m,nr as s,or as u};
