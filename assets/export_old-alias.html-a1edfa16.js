import{_ as r,p as o,q as n,Q as a,t,v as s,a1 as l}from"./framework-344bb0e4.js";const i={},d={id:"frontmatter-title-for-core",tabindex:"-1"},c=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),h={class:"command-title"},p=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; export old-alias (name) (initial_value)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>name</code>: name of the alias</li><li><code>initial_value</code>: equals sign followed by value</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>This command is a parser keyword. For details, check: https://www.nushell.sh/book/thinking_in_nu.html</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>export an alias of ll to ls -l, from a module</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">export</span> old-alias ll <span class="token operator">=</span> <span class="token function">ls</span> <span class="token parameter variable">-l</span>

</code></pre></div>`,9);function m(e,u){return o(),n("div",null,[a("h1",d,[c,t(),a("code",null,s(e.$frontmatter.title),1),t(" for core")]),a("div",h,s(e.$frontmatter.core),1),p])}const _=r(i,[["render",m],["__file","export_old-alias.html.vue"]]);export{_ as default};