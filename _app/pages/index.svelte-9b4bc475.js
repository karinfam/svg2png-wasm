import{C as de,S as X,i as Z,s as J,e as C,k as T,j as R,c as j,a as O,d as g,n as P,m as I,E as F,b as w,f as E,F as d,o as L,x as b,l as D,N as Y,O as ne,u as v,r as x,w as ee,v as V,P as Pe,Q as re,R as se,T as oe,U as Oe,V as Re,t as K,g as Q,M as y,W as $e,X as Ie,Y as ae,Z as ie,_ as ce,$ as ue,a0 as Le,a1 as Ve,B as Be,p as Ne,q as Ue,a2 as De}from"../chunks/vendor-01fa4947.js";import{b as fe}from"../chunks/paths-28a87002.js";import{H as We}from"../chunks/HighlightCodeSnippet-89559f69.js";const be="packageManager",He=a=>a==="npm"||a==="yarn"||a==="pnpm"?a:"npm",ve=(()=>{const{subscribe:a,set:e}=de(He(localStorage.getItem(be)));return{subscribe:a,set:l=>{e(l),localStorage.setItem(be,l)}}})();function Ae(){return new Worker("/svg2png-wasm/_app/assets/worker.4e514e30.js",{type:"module"})}const ze=a=>{const e=new Ae;e.postMessage({type:"initialize",options:a});const t=(l,n)=>{const r=`svg2png-${Math.random().toString(36)}`;let o,s;const i=p=>{const f=p.data;if(f.id===r)switch(f.type){case"success":o(f.data);break;case"error":s(f.error);break;default:s(f)}},c=p=>s(p.data),M=p=>s(p.error);return new Promise((p,f)=>{o=p,s=f,e.addEventListener("message",i),e.addEventListener("messageerror",c),e.addEventListener("error",M),e.postMessage({id:r,type:"svg2png",svg:l,options:n})}).finally(()=>{e.removeEventListener("message",i),e.removeEventListener("messageerror",c),e.removeEventListener("error",M)})};return t.dispose=()=>e.terminate(),t},ke=(()=>{const{subscribe:a}=de(ze());return{subscribe:a}})();function we(a,e,t){const l=a.slice();return l[3]=e[t][0],l[4]=e[t][1],l}function ye(a,e,t){const l=a.slice();return l[7]=e[t],l}function Ge(a){let e;return{c(){e=K("CONVERT")},l(t){e=Q(t,"CONVERT")},m(t,l){E(t,e,l)},d(t){t&&g(e)}}}function qe(a){return{c:y,l:y,m:y,p:y,i:y,o:y,d:y}}function Fe(a){let e,t=Ye(a);return{c(){t&&t.c(),e=T()},l(l){t&&t.l(l),e=P(l)},m(l,n){t&&t.m(l,n),E(l,e,n)},p(l,n){t.p(l,n)},i:y,o:y,d(l){t&&t.d(l),l&&g(e)}}}function Ye(a){let e,t;return{c(){e=C("img"),this.h()},l(l){e=j(l,"IMG",{src:!0,alt:!0}),this.h()},h(){F(e.src,t=URL.createObjectURL(new Blob([a[10]],{type:"image/png"})))||w(e,"src",t),w(e,"alt","converted")},m(l,n){E(l,e,n)},p(l,n){n&1&&!F(e.src,t=URL.createObjectURL(new Blob([l[10]],{type:"image/png"})))&&w(e,"src",t)},d(l){l&&g(e)}}}function Ke(a){let e,t,l;return e=new $e({props:{style:"height:24px"}}),{c(){R(e.$$.fragment),t=T()},l(n){I(e.$$.fragment,n),t=P(n)},m(n,r){L(e,n,r),E(n,t,r),l=!0},p:y,i(n){l||(b(e.$$.fragment,n),l=!0)},o(n){v(e.$$.fragment,n),l=!1},d(n){V(e,n),n&&g(t)}}}function Ee(a){let e,t,l,n={ctx:a,current:null,token:null,hasCatch:!1,pending:Ke,then:Fe,catch:qe,value:10,blocks:[,,,]};return Y(t=a[7],n),{c(){e=D(),n.block.c()},l(r){e=D(),n.block.l(r)},m(r,o){E(r,e,o),n.block.m(r,n.anchor=o),n.mount=()=>e.parentNode,n.anchor=e,l=!0},p(r,o){a=r,n.ctx=a,o&1&&t!==(t=a[7])&&Y(t,n)||ne(n,a,o)},i(r){l||(b(n.block),l=!0)},o(r){for(let o=0;o<3;o+=1){const s=n.blocks[o];v(s)}l=!1},d(r){r&&g(e),n.block.d(r),n.token=null,n=null}}}function Me(a,e){let t,l,n,r,o,s,i,c,M,p,f,u;function _(){return e[2](e[3])}c=new Oe({props:{icon:Re,$$slots:{default:[Ge]},$$scope:{ctx:e}}}),c.$on("click",_);let S=e[4],m=[];for(let h=0;h<S.length;h+=1)m[h]=Ee(ye(e,S,h));const U=h=>v(m[h],1,1,()=>{m[h]=null});return{key:a,first:null,c(){t=C("div"),l=C("p"),n=C("img"),s=T(),i=C("p"),R(c.$$.fragment),M=T(),p=C("p");for(let h=0;h<m.length;h+=1)m[h].c();f=T(),this.h()},l(h){t=j(h,"DIV",{class:!0});var $=O(t);l=j($,"P",{class:!0});var B=O(l);n=j(B,"IMG",{src:!0,alt:!0}),B.forEach(g),s=P($),i=j($,"P",{});var k=O(i);I(c.$$.fragment,k),k.forEach(g),M=P($),p=j($,"P",{class:!0});var W=O(p);for(let A=0;A<m.length;A+=1)m[A].l(W);W.forEach(g),f=P($),$.forEach(g),this.h()},h(){F(n.src,r=e[3])||w(n,"src",r),w(n,"alt",o=""+(e[3]+" svg")),w(l,"class","input"),w(p,"class","result svelte-mzvxcn"),w(t,"class","svelte-mzvxcn"),this.first=t},m(h,$){E(h,t,$),d(t,l),d(l,n),d(t,s),d(t,i),L(c,i,null),d(t,M),d(t,p);for(let B=0;B<m.length;B+=1)m[B].m(p,null);d(t,f),u=!0},p(h,$){e=h,(!u||$&1&&!F(n.src,r=e[3]))&&w(n,"src",r),(!u||$&1&&o!==(o=""+(e[3]+" svg")))&&w(n,"alt",o);const B={};if($&2048&&(B.$$scope={dirty:$,ctx:e}),c.$set(B),$&1){S=e[4];let k;for(k=0;k<S.length;k+=1){const W=ye(e,S,k);m[k]?(m[k].p(W,$),b(m[k],1)):(m[k]=Ee(W),m[k].c(),b(m[k],1),m[k].m(p,null))}for(x(),k=S.length;k<m.length;k+=1)U(k);ee()}},i(h){if(!u){b(c.$$.fragment,h);for(let $=0;$<S.length;$+=1)b(m[$]);u=!0}},o(h){v(c.$$.fragment,h),m=m.filter(Boolean);for(let $=0;$<m.length;$+=1)v(m[$]);u=!1},d(h){h&&g(t),V(c),Pe(m,h)}}}function Qe(a){let e,t=[],l=new Map,n,r=Object.entries(a[0]);const o=s=>s[3];for(let s=0;s<r.length;s+=1){let i=we(a,r,s),c=o(i);l.set(c,t[s]=Me(c,i))}return{c(){e=C("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=j(s,"DIV",{class:!0});var i=O(e);for(let c=0;c<t.length;c+=1)t[c].l(i);i.forEach(g),this.h()},h(){w(e,"class","demos svelte-mzvxcn")},m(s,i){E(s,e,i);for(let c=0;c<t.length;c+=1)t[c].m(e,null);n=!0},p(s,[i]){i&3&&(r=Object.entries(s[0]),x(),t=re(t,i,o,1,s,r,l,e,se,Me,null,we),ee())},i(s){if(!n){for(let i=0;i<r.length;i+=1)b(t[i]);n=!0}},o(s){for(let i=0;i<t.length;i+=1)v(t[i]);n=!1},d(s){s&&g(e);for(let i=0;i<t.length;i+=1)t[i].d()}}}function Xe(a,e,t){let l;oe(a,ke,o=>t(1,l=o));const n={[`${fe}/icon.svg`]:[],[`${fe}/gradient.svg`]:[],[`${fe}/parrot.svg`]:[]};return[n,l,o=>{const s=fetch(o).then(i=>i.text());t(0,n[o]=[s.then(i=>{var c;return(c=l(i,{scale:1}))!=null?c:Promise.reject("error")}),s.then(i=>{var c;return(c=l(i,{scale:2}))!=null?c:Promise.reject("error")}),s.then(i=>{var c;return(c=l(i,{scale:3}))!=null?c:Promise.reject("error")})],n)}]}class Ze extends X{constructor(e){super();Z(this,e,Xe,Qe,J,{})}}function Se(a,e,t){const l=a.slice();return l[5]=e[t].id,l[6]=e[t].name,l[7]=e[t].value,l}function Je(a){let e,t,l;return e=new ue({props:{name:a[6],status:"edit",errorBody:a[12]}}),{c(){R(e.$$.fragment),t=T()},l(n){I(e.$$.fragment,n),t=P(n)},m(n,r){L(e,n,r),E(n,t,r),l=!0},p(n,r){const o={};r&2&&(o.name=n[6]),r&2&&(o.errorBody=n[12]),e.$set(o)},i(n){l||(b(e.$$.fragment,n),l=!0)},o(n){v(e.$$.fragment,n),l=!1},d(n){V(e,n),n&&g(t)}}}function xe(a){let e,t,l,n,r;e=new ue({props:{name:a[6],status:"complete"}});let o={ctx:a,current:null,token:null,hasCatch:!1,pending:nt,then:tt,catch:et,value:11,blocks:[,,,]};return Y(l=a[2](a[10]),o),{c(){R(e.$$.fragment),t=T(),o.block.c(),n=T()},l(s){I(e.$$.fragment,s),t=P(s),o.block.l(s),n=P(s)},m(s,i){L(e,s,i),E(s,t,i),o.block.m(s,o.anchor=i),o.mount=()=>n.parentNode,o.anchor=n,E(s,n,i),r=!0},p(s,i){a=s;const c={};i&2&&(c.name=a[6]),e.$set(c),o.ctx=a,i&6&&l!==(l=a[2](a[10]))&&Y(l,o)||ne(o,a,i)},i(s){r||(b(e.$$.fragment,s),b(o.block),r=!0)},o(s){v(e.$$.fragment,s);for(let i=0;i<3;i+=1){const c=o.blocks[i];v(c)}r=!1},d(s){V(e,s),s&&g(t),o.block.d(s),o.token=null,o=null,s&&g(n)}}}function et(a){return{c:y,l:y,m:y,p:y,i:y,o:y,d:y}}function tt(a){let e,t=lt(a);return{c(){t&&t.c(),e=D()},l(l){t&&t.l(l),e=D()},m(l,n){t&&t.m(l,n),E(l,e,n)},p(l,n){t.p(l,n)},i:y,o:y,d(l){t&&t.d(l),l&&g(e)}}}function lt(a){let e,t,l;return{c(){e=C("img"),this.h()},l(n){e=j(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){F(e.src,t=URL.createObjectURL(new Blob([a[11]],{type:"image/png"})))||w(e,"src",t),w(e,"alt",l=a[6]),w(e,"class","svelte-1615sw")},m(n,r){E(n,e,r)},p(n,r){r&6&&!F(e.src,t=URL.createObjectURL(new Blob([n[11]],{type:"image/png"})))&&w(e,"src",t),r&2&&l!==(l=n[6])&&w(e,"alt",l)},d(n){n&&g(e)}}}function nt(a){let e,t;return e=new $e({}),{c(){R(e.$$.fragment)},l(l){I(e.$$.fragment,l)},m(l,n){L(e,l,n),t=!0},p:y,i(l){t||(b(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){V(e,l)}}}function rt(a){let e,t,l;return e=new ue({props:{name:a[6],status:"uploading"}}),{c(){R(e.$$.fragment),t=T()},l(n){I(e.$$.fragment,n),t=P(n)},m(n,r){L(e,n,r),E(n,t,r),l=!0},p(n,r){const o={};r&2&&(o.name=n[6]),e.$set(o)},i(n){l||(b(e.$$.fragment,n),l=!0)},o(n){v(e.$$.fragment,n),l=!1},d(n){V(e,n),n&&g(t)}}}function Ce(a,e){let t,l,n,r,o={ctx:e,current:null,token:null,hasCatch:!0,pending:rt,then:xe,catch:Je,value:10,error:12,blocks:[,,,]};return Y(n=e[7],o),{key:a,first:null,c(){t=D(),l=D(),o.block.c(),this.h()},l(s){t=D(),l=D(),o.block.l(s),this.h()},h(){this.first=t},m(s,i){E(s,t,i),E(s,l,i),o.block.m(s,o.anchor=i),o.mount=()=>l.parentNode,o.anchor=l,r=!0},p(s,i){e=s,o.ctx=e,i&2&&n!==(n=e[7])&&Y(n,o)||ne(o,e,i)},i(s){r||(b(o.block),r=!0)},o(s){for(let i=0;i<3;i+=1){const c=o.blocks[i];v(c)}r=!1},d(s){s&&g(t),s&&g(l),o.block.d(s),o.token=null,o=null}}}function st(a){let e,t,l,n,r=[],o=new Map,s;function i(f){a[4](f)}let c={multiple:!0,labelText:"Drag and drop file here or click to upload svg",accept:[".svg"]};a[0]!==void 0&&(c.ref=a[0]),t=new Ie({props:c}),ae.push(()=>ie(t,"ref",i)),t.$on("add",a[3]);let M=a[1];const p=f=>f[5];for(let f=0;f<M.length;f+=1){let u=Se(a,M,f),_=p(u);o.set(_,r[f]=Ce(_,u))}return{c(){e=C("div"),R(t.$$.fragment),n=T();for(let f=0;f<r.length;f+=1)r[f].c()},l(f){e=j(f,"DIV",{});var u=O(e);I(t.$$.fragment,u),n=P(u);for(let _=0;_<r.length;_+=1)r[_].l(u);u.forEach(g)},m(f,u){E(f,e,u),L(t,e,null),d(e,n);for(let _=0;_<r.length;_+=1)r[_].m(e,null);s=!0},p(f,[u]){const _={};!l&&u&1&&(l=!0,_.ref=f[0],ce(()=>l=!1)),t.$set(_),u&6&&(M=f[1],x(),r=re(r,u,p,1,f,M,o,e,se,Ce,null,Se),ee())},i(f){if(!s){b(t.$$.fragment,f);for(let u=0;u<M.length;u+=1)b(r[u]);s=!0}},o(f){v(t.$$.fragment,f);for(let u=0;u<r.length;u+=1)v(r[u]);s=!1},d(f){f&&g(e),V(t);for(let u=0;u<r.length;u+=1)r[u].d()}}}function ot(a,e,t){let l;oe(a,ke,i=>t(2,l=i));let n,r=[];const o=({detail:i})=>{t(1,r=[...Array.from(i).filter(c=>c.type==="image/svg+xml").map(c=>({id:`file-${Math.random().toString(36)}`,name:c.name,value:c.text()})),...r])};function s(i){n=i,t(0,n)}return[n,r,l,o,s]}class at extends X{constructor(e){super();Z(this,e,ot,st,J,{})}}function je(a,e,t){const l=a.slice();return l[4]=e[t],l}function Te(a,e){let t,l,n;return l=new De({props:{labelText:e[4],value:e[4]}}),{key:a,first:null,c(){t=D(),R(l.$$.fragment),this.h()},l(r){t=D(),I(l.$$.fragment,r),this.h()},h(){this.first=t},m(r,o){E(r,t,o),L(l,r,o),n=!0},p(r,o){e=r;const s={};o&4&&(s.labelText=e[4]),o&4&&(s.value=e[4]),l.$set(s)},i(r){n||(b(l.$$.fragment,r),n=!0)},o(r){v(l.$$.fragment,r),n=!1},d(r){r&&g(t),V(l,r)}}}function it(a){let e=[],t=new Map,l,n,r=Object.keys(a[2]);const o=s=>s[4];for(let s=0;s<r.length;s+=1){let i=je(a,r,s),c=o(i);t.set(c,e[s]=Te(c,i))}return{c(){for(let s=0;s<e.length;s+=1)e[s].c();l=D()},l(s){for(let i=0;i<e.length;i+=1)e[i].l(s);l=D()},m(s,i){for(let c=0;c<e.length;c+=1)e[c].m(s,i);E(s,l,i),n=!0},p(s,i){i&4&&(r=Object.keys(s[2]),x(),e=re(e,i,o,1,s,r,t,l.parentNode,se,Te,l,je),ee())},i(s){if(!n){for(let i=0;i<r.length;i+=1)b(e[i]);n=!0}},o(s){for(let i=0;i<e.length;i+=1)v(e[i]);n=!1},d(s){for(let i=0;i<e.length;i+=1)e[i].d(s);s&&g(l)}}}function ct(a){let e,t;return e=new Ve({props:{code:a[2][a[0]]}}),{c(){R(e.$$.fragment)},l(l){I(e.$$.fragment,l)},m(l,n){L(e,l,n),t=!0},p(l,n){const r={};n&5&&(r.code=l[2][l[0]]),e.$set(r)},i(l){t||(b(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){V(e,l)}}}function ut(a){let e,t;const l=[{code:a[2][a[0]]},a[1]];let n={};for(let r=0;r<l.length;r+=1)n=Be(n,l[r]);return e=new We({props:n}),{c(){R(e.$$.fragment)},l(r){I(e.$$.fragment,r)},m(r,o){L(e,r,o),t=!0},p(r,o){const s=o&7?Ne(l,[o&5&&{code:r[2][r[0]]},o&2&&Ue(r[1])]):{};e.$set(s)},i(r){t||(b(e.$$.fragment,r),t=!0)},o(r){v(e.$$.fragment,r),t=!1},d(r){V(e,r)}}}function ft(a){let e,t,l,n,r,o,s;function i(u){a[3](u)}let c={$$slots:{default:[it]},$$scope:{ctx:a}};a[0]!==void 0&&(c.selected=a[0]),t=new Le({props:c}),ae.push(()=>ie(t,"selected",i));const M=[ut,ct],p=[];function f(u,_){return u[1]!==void 0?0:1}return r=f(a),o=p[r]=M[r](a),{c(){e=C("div"),R(t.$$.fragment),n=T(),o.c(),this.h()},l(u){e=j(u,"DIV",{class:!0});var _=O(e);I(t.$$.fragment,_),n=P(_),o.l(_),_.forEach(g),this.h()},h(){w(e,"class","svelte-tfikos")},m(u,_){E(u,e,_),L(t,e,null),d(e,n),p[r].m(e,null),s=!0},p(u,[_]){const S={};_&132&&(S.$$scope={dirty:_,ctx:u}),!l&&_&1&&(l=!0,S.selected=u[0],ce(()=>l=!1)),t.$set(S);let m=r;r=f(u),r===m?p[r].p(u,_):(x(),v(p[m],1,1,()=>{p[m]=null}),ee(),o=p[r],o?o.p(u,_):(o=p[r]=M[r](u),o.c()),b(o,1),o.m(e,null))},i(u){s||(b(t.$$.fragment,u),b(o),s=!0)},o(u){v(t.$$.fragment,u),v(o),s=!1},d(u){u&&g(e),V(t),p[r].d()}}}function pt(a,e,t){let{highlight:l=void 0}=e,{titleValueMap:n}=e,{selectedTitle:r=Object.keys(n)[0]}=e;function o(s){r=s,t(0,r)}return a.$$set=s=>{"highlight"in s&&t(1,l=s.highlight),"titleValueMap"in s&&t(2,n=s.titleValueMap),"selectedTitle"in s&&t(0,r=s.selectedTitle)},[r,l,n,o]}class gt extends X{constructor(e){super();Z(this,e,pt,ft,J,{highlight:1,titleValueMap:2,selectedTitle:0})}}function _t(a){let e,t,l;function n(o){a[2](o)}let r={titleValueMap:a[1]};return a[0]!==void 0&&(r.selectedTitle=a[0]),e=new gt({props:r}),ae.push(()=>ie(e,"selectedTitle",n)),{c(){R(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,s){L(e,o,s),l=!0},p(o,[s]){const i={};!t&&s&1&&(t=!0,i.selectedTitle=o[0],ce(()=>t=!1)),e.$set(i)},i(o){l||(b(e.$$.fragment,o),l=!0)},o(o){v(e.$$.fragment,o),l=!1},d(o){V(e,o)}}}function mt(a,e,t){let l;oe(a,ve,o=>t(0,l=o));const n={npm:"npm install svg2png-wasm",yarn:"yarn add svg2png-wasm",pnpm:"pnpm add svg2png-wasm"};function r(o){l=o,ve.set(l)}return[l,n,r]}class ht extends X{constructor(e){super();Z(this,e,mt,_t,J,{})}}function dt(a){let e,t,l,n,r,o,s,i,c,M,p,f,u,_,S,m,U,h,$,B,k,W,A,z,te;return c=new ht({}),S=new Ze({}),z=new at({}),{c(){e=C("main"),t=C("section"),l=C("h1"),n=K("svg2png-wasm"),r=T(),o=C("p"),s=K("Convert svg to png using WebAssembly."),i=T(),R(c.$$.fragment),M=T(),p=C("section"),f=C("h2"),u=K("Demo"),_=T(),R(S.$$.fragment),m=T(),U=C("section"),h=C("h2"),$=K("Playground"),B=T(),k=C("p"),W=K("Runs in the browser, file is not sent to the server."),A=T(),R(z.$$.fragment),this.h()},l(N){e=j(N,"MAIN",{class:!0});var H=O(e);t=j(H,"SECTION",{class:!0});var G=O(t);l=j(G,"H1",{class:!0});var pe=O(l);n=Q(pe,"svg2png-wasm"),pe.forEach(g),r=P(G),o=j(G,"P",{});var ge=O(o);s=Q(ge,"Convert svg to png using WebAssembly."),ge.forEach(g),i=P(G),I(c.$$.fragment,G),G.forEach(g),M=P(H),p=j(H,"SECTION",{class:!0});var le=O(p);f=j(le,"H2",{});var _e=O(f);u=Q(_e,"Demo"),_e.forEach(g),_=P(le),I(S.$$.fragment,le),le.forEach(g),m=P(H),U=j(H,"SECTION",{class:!0});var q=O(U);h=j(q,"H2",{});var me=O(h);$=Q(me,"Playground"),me.forEach(g),B=P(q),k=j(q,"P",{});var he=O(k);W=Q(he,"Runs in the browser, file is not sent to the server."),he.forEach(g),A=P(q),I(z.$$.fragment,q),q.forEach(g),H.forEach(g),this.h()},h(){w(l,"class","main-title svelte-fubwwx"),w(t,"class","svelte-fubwwx"),w(p,"class","svelte-fubwwx"),w(U,"class","svelte-fubwwx"),w(e,"class","svelte-fubwwx")},m(N,H){E(N,e,H),d(e,t),d(t,l),d(l,n),d(t,r),d(t,o),d(o,s),d(t,i),L(c,t,null),d(e,M),d(e,p),d(p,f),d(f,u),d(p,_),L(S,p,null),d(e,m),d(e,U),d(U,h),d(h,$),d(U,B),d(U,k),d(k,W),d(U,A),L(z,U,null),te=!0},p:y,i(N){te||(b(c.$$.fragment,N),b(S.$$.fragment,N),b(z.$$.fragment,N),te=!0)},o(N){v(c.$$.fragment,N),v(S.$$.fragment,N),v(z.$$.fragment,N),te=!1},d(N){N&&g(e),V(c),V(S),V(z)}}}class kt extends X{constructor(e){super();Z(this,e,null,dt,J,{})}}export{kt as default};
