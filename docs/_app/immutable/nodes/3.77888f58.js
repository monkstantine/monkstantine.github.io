import{S as v,i as k,s as x,k as f,l as _,m,h as i,b,C as d,R as E,T as S,q,a as w,r as A,c as C,n as h,N as p,u as N}from"../chunks/index.16371ad8.js";import{p as P}from"../chunks/stores.0cdacac3.js";import{p as D}from"../chunks/posts.077a870b.js";function g(l,s,r){const e=l.slice();return e[3]=s[r],e}function y(l){let s,r,e=l[3].title+"",a,n,t;return{c(){s=f("a"),r=f("span"),a=q(e),n=w(),this.h()},l(c){s=_(c,"A",{class:!0,href:!0});var o=m(s);r=_(o,"SPAN",{class:!0});var u=m(r);a=A(u,e),u.forEach(i),n=C(o),o.forEach(i),this.h()},h(){h(r,"class","card-title text-primary"),h(s,"class","card bg-primary-content shadow m-2 p-2 h-36 w-96 btn btn-ghost"),h(s,"href",t="/etc/"+l[3].key)},m(c,o){b(c,s,o),p(s,r),p(r,a),p(s,n)},p(c,o){o&1&&e!==(e=c[3].title+"")&&N(a,e),o&1&&t!==(t="/etc/"+c[3].key)&&h(s,"href",t)},d(c){c&&i(s)}}}function I(l){let s,r=l[0],e=[];for(let a=0;a<r.length;a+=1)e[a]=y(g(l,r,a));return{c(){s=f("div");for(let a=0;a<e.length;a+=1)e[a].c()},l(a){s=_(a,"DIV",{});var n=m(s);for(let t=0;t<e.length;t+=1)e[t].l(n);n.forEach(i)},m(a,n){b(a,s,n);for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(s,null)},p(a,[n]){if(n&1){r=a[0];let t;for(t=0;t<r.length;t+=1){const c=g(a,r,t);e[t]?e[t].p(c,n):(e[t]=y(c),e[t].c(),e[t].m(s,null))}for(;t<e.length;t+=1)e[t].d(1);e.length=r.length}},i:d,o:d,d(a){a&&i(s),E(e,a)}}}function R(l,s,r){let e,a,n;return S(l,P,t=>r(2,n=t)),l.$$.update=()=>{l.$$.dirty&4&&r(1,e=n.params.category),l.$$.dirty&2&&r(0,a=D[e])},[a,e,n]}class z extends v{constructor(s){super(),k(this,s,R,I,x,{})}}export{z as component};