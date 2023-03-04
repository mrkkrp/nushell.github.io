import{p as d}from"./app-0ad2cf32.js";import{_ as h,M as u,p as o,q as r,Q as e,t as l,N as m,U as p,O as _,P as f,v as a}from"./framework-344bb0e4.js";const x={computed:{commands(){return d.filter(t=>t.path.indexOf("/commands/docs/")>=0).sort((t,n)=>t.title>n.title?1:n.title>t.title?-1:0)}}},g=e("h1",{id:"command-reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#command-reference","aria-hidden":"true"},"#"),l(" Command Reference")],-1),v=e("p",null,"Nushell provides commands for a variety of use cases. You can find the included categories in the sidebar.",-1),N=e("code",null,"help commands",-1),w=e("tr",null,[e("th",null,"Command"),e("th",null,"Categories"),e("th",null,"Description")],-1),C=["href"],k={style:{"white-space":"pre-wrap"}},y={style:{"white-space":"pre-wrap"}};function B(t,n,L,R,V,c){const i=u("RouterLink");return o(),r("div",null,[g,v,e("p",null,[l("To see all commands in Nushell, run "),m(i,{to:"/commands/docs/help.html"},{default:p(()=>[N]),_:1}),l(".")]),e("table",null,[w,(o(!0),r(_,null,f(c.commands,s=>(o(),r("tr",null,[e("td",null,[e("a",{href:s.path},a(s.title),9,C)]),e("td",k,a(s.frontmatter.categories),1),e("td",y,a(s.frontmatter.usage),1)]))),256))])])}const D=h(x,[["render",B],["__file","index.html.vue"]]);export{D as default};