import{S as y,i as E,s as $,k as d,q as k,a as q,l as h,m as _,r as w,h as p,c as C,n as b,b as D,N as m,C as u,T as H}from"../chunks/index.16371ad8.js";import{p as I}from"../chunks/stores.0cdacac3.js";import{p as S}from"../chunks/posts.077a870b.js";function T(n){var f,v;let t,a,o=((f=n[0])==null?void 0:f.title)+"",r,c,e,i=((v=n[0])==null?void 0:v.content)+"";return{c(){t=d("div"),a=d("h1"),r=k(o),c=q(),e=d("div"),this.h()},l(l){t=h(l,"DIV",{});var s=_(t);a=h(s,"H1",{class:!0});var g=_(a);r=w(g,o),g.forEach(p),c=C(s),e=h(s,"DIV",{class:!0});var x=_(e);x.forEach(p),s.forEach(p),this.h()},h(){b(a,"class","text-3xl"),b(e,"class","mt-2 p-2 w-96 card bg-base-content text-base-300")},m(l,s){D(l,t,s),m(t,a),m(a,r),m(t,c),m(t,e),e.innerHTML=i},p:u,i:u,o:u,d(l){l&&p(t)}}}function V(n,t,a){let o;H(n,I,i=>a(1,o=i));const{slug:r,category:c}=o.params,e=S[c].find(i=>i.key===r);return console.log(e),[e]}class P extends y{constructor(t){super(),E(this,t,V,T,$,{})}}export{P as component};