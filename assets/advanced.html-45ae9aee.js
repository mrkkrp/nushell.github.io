import{_ as r,M as l,p as c,q as i,Q as t,t as e,N as a,U as n}from"./framework-344bb0e4.js";const d={},u=t("h1",{id:"not-so-advanced",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#not-so-advanced","aria-hidden":"true"},"#"),e(" (Not So) Advanced")],-1),h=t("p",null,'While the "Advanced" title might sound daunting and you might be tempted to skip this chapter, in fact, some of the most interesting and powerful features can be found here.',-1),p=t("em",null,"structured data",-1),m={href:"https://github.com/pola-rs/polars",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"explore",-1);function _(g,k){const s=l("ExternalLinkIcon"),o=l("RouterLink");return c(),i("div",null,[u,h,t("p",null,[e("Nushell operates on "),p,e('. You could say that Nushell is a "data-first" shell and a programming language. To further explore the data-centric direction, Nushell includes a full-featured dataframe processing engine using '),t("a",m,[e("Polars"),a(s)]),e(" as the backend. Make sure to check the "),a(o,{to:"/book/dataframes.html"},{default:n(()=>[e("Dataframes documentation")]),_:1}),e(" if you want to process large data efficiently directly in your shell.")]),t("p",null,[e("Values in Nushell contain some extra "),a(o,{to:"/book/metadata.html"},{default:n(()=>[e("metadata")]),_:1}),e(". This metadata can be used, for example, to "),a(o,{to:"/book/creating_errors.html"},{default:n(()=>[e("create custom errors")]),_:1}),e(".")]),t("p",null,[e("Thanks to Nushell's strict scoping rules, it is very easy to "),a(o,{to:"/book/parallelism.html"},{default:n(()=>[e("iterate over collections in parallel")]),_:1}),e(" which can help you speed up long-running scripts by just typing a few characters.")]),t("p",null,[e("You can "),a(o,{to:"/book/explore.html"},{default:n(()=>[e("interactively explore data")]),_:1}),e(" with the "),a(o,{to:"/commands/docs/explore.html"},{default:n(()=>[f]),_:1}),e(" command.")]),t("p",null,[e("Finally, you can extend Nushell's functionality with "),a(o,{to:"/book/plugins.html"},{default:n(()=>[e("plugins")]),_:1}),e(". Almost anything can be a plugin as long as it communicates with Nushell in a protocol that Nushell understands.")])])}const y=r(d,[["render",_],["__file","advanced.html.vue"]]);export{y as default};