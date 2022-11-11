import{_ as a,r,o as s,c as i,a as e,b as n,d as o,e as d}from"./app.c7ac2154.js";const h="/assets/utf8_table.b9960183.png",l="/assets/utf8_light_table.7c7601d5.png",c="/assets/did_you_mean.eb4152e3.png",u={},p=e("h1",{id:"nushell-0-3-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-3-0","aria-hidden":"true"},"#"),o(" Nushell 0.3.0")],-1),m=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),_=e("p",null,"We're happy to announce that today we're releasing Nushell 0.3.0. Nu has seen numerous bugfixes, performance improvements, and features added since its initial public release (which was only a few weeks ago!)",-1),g=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),o(" Where to get it")],-1),f=o("Nu 0.3.0 is available as "),b={href:"https://github.com/nushell/nushell/releases/tag/0.3.0",target:"_blank",rel:"noopener noreferrer"},w=o("pre-built binaries"),k=o(" or from "),y={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},v=o("crates.io"),x=o(". If you have Rust installed you can install it using "),N=e("code",null,"cargo +nightly install nu",-1),j=o(" (or if you want all the features "),W=e("code",null,"cargo +nightly install nu --all-features",-1),I=o(")."),R=d('<h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s new</h1><h2 id="new-table-design-porges-jonathandturner" tabindex="-1"><a class="header-anchor" href="#new-table-design-porges-jonathandturner" aria-hidden="true">#</a> New table design (Porges, jonathandturner)</h2><p><img src="'+h+'" alt="Table with utf8 box drawing"></p><p>One of the most striking differences is that Nu now uses UTF-8 box drawing to draw its tables.</p><p><img src="'+l+`" alt="Table with utf8 box drawing in light mode"></p><p>The table is also configurable. If you feel like the table is a bit too heavy, you can also configure it to work in light mode using this command:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config --set [table_mode light]
</code></pre></div><h2 id="new-file-formats-pmeredit-est31-andrasio-jonathandturner" tabindex="-1"><a class="header-anchor" href="#new-file-formats-pmeredit-est31-andrasio-jonathandturner" aria-hidden="true">#</a> New file formats (pmeredit, est31, andrasio, jonathandturner)</h2><p>Nu now natively supports new file formats, including: bson, tsv, sqlite, and url-encoded strings.</p><h2 id="new-commands-incrop-ramonsnir-ijt-jonathandturner-andrasio-jonnywalker81-chhetripradeep-pka" tabindex="-1"><a class="header-anchor" href="#new-commands-incrop-ramonsnir-ijt-jonathandturner-andrasio-jonnywalker81-chhetripradeep-pka" aria-hidden="true">#</a> New commands (incrop, ramonsnir, ijt, jonathandturner, andrasio, JonnyWalker81, chhetripradeep, pka)</h2><p>Since the 0.2.0 release, Nu has gained a set of additional commands, including:</p><ul><li><code>help</code> - built-in help system</li><li><code>reverse</code> - reverse a table</li><li><code>last</code> - like the <code>first</code> command, but working from the bottom of the table, return n rows</li><li><code>embed</code> - create a new table using the current table as a start</li><li><code>fetch</code> - get the contents of a URL (this originally lived in <code>open</code>)</li><li><code>post</code> - post to a URL and get the results</li><li><code>pwd</code> - print the working directory</li><li><code>env</code> - give access to a number of important paths and environment settings</li><li><code>pivot</code> - pivot a table so that rows become columns and vice-versa</li><li><code>echo</code> - a built-in echo command</li></ul><h2 id="error-improvements-jonathandturner" tabindex="-1"><a class="header-anchor" href="#error-improvements-jonathandturner" aria-hidden="true">#</a> Error improvements (jonathandturner)</h2><p><img src="`+c+'" alt="Improve error messages"></p><p>We&#39;ve made steady progress on improving error messages. Recently, we added &quot;did you mean?&quot; errors to help when you mistype the name of columns. Nu 0.3.0 also has gone through a few passes to generally polish the errors to include more information when an error occurs.</p><h2 id="shell-features-pka-wycats-twe4ked-andrasio-iamcodemaker" tabindex="-1"><a class="header-anchor" href="#shell-features-pka-wycats-twe4ked-andrasio-iamcodemaker" aria-hidden="true">#</a> Shell features (pka, wycats, twe4ked, andrasio, iamcodemaker)</h2><p>Nu now supports <code>~</code> to refer to your home directory as part of a path. You can also use <code>cd -</code> to return to a previous directory you were working in.</p><p>The shell itself also got a few updates. You can now enable &#39;vi&#39; mode, if you&#39;d prefer vi-like bindings (by running <code>config --set [edit_mode vi]</code>). On non-Windows platforms, you can also use Ctrl-R to enable Sublime-style history searching (we&#39;re hoping to enable Windows support for this soon).</p><h2 id="plugin-improvements-jonathandturner-andrasio" tabindex="-1"><a class="header-anchor" href="#plugin-improvements-jonathandturner-andrasio" aria-hidden="true">#</a> Plugin improvements (jonathandturner, andrasio)</h2><p>Plugins have continued to mature, and it&#39;s now possible to use plugins to extend Nu with support for new file formats.</p>',20),E=o("We've also added documentation on how to "),S={href:"https://github.com/nushell/contributor-book/blob/master/en/plugins.md",target:"_blank",rel:"noopener noreferrer"},T=o("write Nu plugins in both Rust and Python"),D=o(", with info on Ruby coming soon."),A=e("h2",{id:"docker-support-vsoch-drsensor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker-support-vsoch-drsensor","aria-hidden":"true"},"#"),o(" Docker support (vsoch, DrSensor)")],-1),B=o("If you're interested in using Nu and Docker together, be sure to check out the "),L={href:"https://github.com/nushell/nushell/blob/master/docs/docker.md",target:"_blank",rel:"noopener noreferrer"},P=o("new Docker support"),J=o("."),V=e("h2",{id:"book-progress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#book-progress","aria-hidden":"true"},"#"),o(" Book progress")],-1),q=o("The "),G={href:"http://book.nushell.sh",target:"_blank",rel:"noopener noreferrer"},U=o("Nu book"),C=o(" is now available in "),O=e("em",null,"three",-1),Y=o(" languages: English, Spanish, and Japanese."),z=o("We've also created a "),F={href:"https://github.com/nushell/contributor-book/blob/master/en/README.md",target:"_blank",rel:"noopener noreferrer"},M=o("Nu contributor book"),H=o(", which will help developers who want to contribute to Nu learn about its philosophy, design, and how to create plugins."),K=e("h2",{id:"acknowledgements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#acknowledgements","aria-hidden":"true"},"#"),o(" Acknowledgements")],-1),Q=e("p",null,[o("est31, pmeredit, twe4ked, DrSensor, vsoch, pka, jankoprowski, Porges, max-sixty, ijt, djc, vthriller, taiki-e, oskarskog, iamcodemaker, JonnyWalker81, yaahc, tim77, svartalf, ramonsnir, orf, lesichkovm, ineol, incrop, eoinkelly, devnought, chhetripradeep, aidanharris, GuillaumeGomez, and BatmanAod for contributing to the Nu codebase. Also a "),e("em",null,"big"),o(" thanks to our issue reporters!")],-1),X=e("p",null,"ymgyt - for the Japanese version of the Nu book!",-1),Z=e("p",null,"mistydemeo, romanlevin, ralvessa, pka, lord, kkalyan, jankprowski, and boisgera for helping with the book.",-1),$=e("h2",{id:"looking-ahead",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),o(" Looking ahead")],-1),ee=o("We're hard at work on the "),oe={href:"https://github.com/nushell/nushell/issues/261",target:"_blank",rel:"noopener noreferrer"},te=o("upcoming milestone release"),ne=o(". If you'd like to help, feel free to jump in! We have an active "),ae={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},re=o("discord"),se=o(" you can join for both users and contributors.");function ie(de,he){const t=r("ExternalLinkIcon");return s(),i("div",null,[p,m,_,g,e("p",null,[f,e("a",b,[w,n(t)]),k,e("a",y,[v,n(t)]),x,N,j,W,I]),R,e("p",null,[E,e("a",S,[T,n(t)]),D]),A,e("p",null,[B,e("a",L,[P,n(t)]),J]),V,e("p",null,[q,e("a",G,[U,n(t)]),C,O,Y]),e("p",null,[z,e("a",F,[M,n(t)]),H]),K,Q,X,Z,$,e("p",null,[ee,e("a",oe,[te,n(t)]),ne,e("a",ae,[re,n(t)]),se])])}const ce=a(u,[["render",ie],["__file","2019-09-24-nushell_0_3_0.html.vue"]]);export{ce as default};
