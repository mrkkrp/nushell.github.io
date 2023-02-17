import{_ as t,p as r,q as o,Q as a,t as s,v as n,a1 as c}from"./framework-344bb0e4.js";const p={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; wrap (name)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>name</code>: the name of the column</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Wrap a list into a table with a given column name</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> wrap num
</code></pre></div><p>Wrap a range into a table with a given column name</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">..</span><span class="token number">3</span> <span class="token operator">|</span> wrap num
</code></pre></div>`,9);function u(e,m){return r(),o("div",null,[a("h1",l,[i,s(),a("code",null,n(e.$frontmatter.title),1),s(" for filters")]),a("div",d,n(e.$frontmatter.filters),1),h])}const g=t(p,[["render",u],["__file","wrap.html.vue"]]);export{g as default};