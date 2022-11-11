import{_ as a,r as i,o as l,c as h,a as e,b as s,w as n,d as t}from"./app.c7ac2154.js";const d={},c=e("h1",{id:"nu-fundamentals",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nu-fundamentals","aria-hidden":"true"},"#"),t(" Nu Fundamentals")],-1),_=e("p",null,"This chapter explains some of the fundamentals of the Nushell programming language. After going through it, you should have an idea how to write simple Nushell programs.",-1),r=t("Nushell has a rich type system. You will find typical data types such as strings or integers and less typical data types, such as cell paths. Furthermore, one of the defining features of Nushell is the notion of "),u=e("em",null,"structured data",-1),m=t(" which means that you can organize types into collections: lists, records, or tables. Contrary to the traditional Unix approach where commands communicate via plain text, Nushell commands communicate via these data types. All of the above is explained in "),p=t("Types of Data"),f=t("."),g=t("Loading Data"),w=t(" explains how to read common data formats, such as JSON, into "),y=e("em",null,"structured data",-1),b=t('. This includes our own "NUON" data format.'),k=t("Just like Unix shells, Nushell commands can be composed into "),N=t("pipelines"),x=t(" to pass and modify a stream of data."),v=t("Some data types have interesting features that deserve their own sections: "),C=t("strings"),T=t(", "),A=t("lists"),B=t(", and "),F=t("tables"),L=t(". Apart from explaining the features, these sections also show how to do some common operations, such as composing strings or updating values in a list."),R=t("Finally, "),U=t("Command Reference"),V=t(" lists all the built-in commands with brief descriptions. Note that you can also access this info from within Nushell using the "),D=e("code",null,"help",-1),J=t(" command.");function O(S,z){const o=i("RouterLink");return l(),h("div",null,[c,_,e("p",null,[r,u,m,s(o,{to:"/book/types_of_data.html"},{default:n(()=>[p]),_:1}),f]),e("p",null,[s(o,{to:"/book/loading_data.html"},{default:n(()=>[g]),_:1}),w,y,b]),e("p",null,[k,s(o,{to:"/book/pipelines.html"},{default:n(()=>[N]),_:1}),x]),e("p",null,[v,s(o,{to:"/book/working_with_strings.html"},{default:n(()=>[C]),_:1}),T,s(o,{to:"/book/working_with_lists.html"},{default:n(()=>[A]),_:1}),B,s(o,{to:"/book/working_with_tables.html"},{default:n(()=>[F]),_:1}),L]),e("p",null,[R,s(o,{to:"/book/command_reference.html"},{default:n(()=>[U]),_:1}),V,D,J])])}const Y=a(d,[["render",O],["__file","nu_fundamentals.html.vue"]]);export{Y as default};
