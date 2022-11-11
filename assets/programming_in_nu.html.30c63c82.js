import{_ as n,r as i,o as r,c as l,a as e,b as t,w as a,d as o}from"./app.c7ac2154.js";const d={},u=e("h1",{id:"programming-in-nu",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#programming-in-nu","aria-hidden":"true"},"#"),o(" Programming in Nu")],-1),c=e("p",null,"This chapter goes into more detail of Nushell as a programming language. Each major language feature has its own section.",-1),_=o("Just like most programming languages allow you to define functions, Nushell uses "),m=o("custom commands"),h=o(" for this purpose."),p=o("From other shells you might be used to "),g=o("aliases"),f=o(". Nushell's aliases work in a similar way and are a part of the programming language, not just a shell feature."),b=o("Common operations can, such as addition or regex search, be done with "),v=o("operators"),y=o(". Not all operations are supported for all data types and Nushell will make sure to let you know."),k=o("You can store intermediate results to "),w=o("variables"),x=o(" and immediately evaluate subrountines with "),N=o("subexpressions"),j=o("."),B=e("p",null,"The last three sections are aimed at organizing your code:",-1),T=o("Scripts"),C=o(' are the simplest form of code organization: You just put the code into a file and source it. However, you can also run scripts as standalone programs with command line signatures using the "special" '),V=e("code",null,"main",-1),z=o(" command."),E=o("With "),L=o("modules"),R=o(", just like in many other programming languages, it is possible to compose your code from smaller pieces. Modules let you define a public interface vs. private commands and you can import custom commands, aliases, and environment variables from them."),Y=o("Overlays"),F=o(` build on top of modules. By defining an overlay, you bring in module's definitions into its own swappable "layer" that gets applied on top of other overlays. This enables features like activating virtual environments or overriding sets of default commands with custom variants.`);function H(J,M){const s=i("RouterLink");return r(),l("div",null,[u,c,e("p",null,[_,t(s,{to:"/book/custom_commands.html"},{default:a(()=>[m]),_:1}),h]),e("p",null,[p,t(s,{to:"/book/aliases.html"},{default:a(()=>[g]),_:1}),f]),e("p",null,[b,t(s,{to:"/book/operators.html"},{default:a(()=>[v]),_:1}),y]),e("p",null,[k,t(s,{to:"/book/variables_and_subexpressions.html"},{default:a(()=>[w]),_:1}),x,t(s,{to:"/book/variables_and_subexpressions.html#subexpressions"},{default:a(()=>[N]),_:1}),j]),B,e("p",null,[t(s,{to:"/book/scripts.html"},{default:a(()=>[T]),_:1}),C,V,z]),e("p",null,[E,t(s,{to:"/book/modules.html"},{default:a(()=>[L]),_:1}),R]),e("p",null,[t(s,{to:"/book/overlays.html"},{default:a(()=>[Y]),_:1}),F])])}const P=n(d,[["render",H],["__file","programming_in_nu.html.vue"]]);export{P as default};
