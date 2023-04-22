import{_ as n,p as r,q as i,Q as e,t,v as s,a1 as o}from"./framework-344bb0e4.js";const l={},c={id:"frontmatter-title-for-filters",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),p={class:"command-title"},h=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; lines --skip-empty</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--skip-empty</code> <code>(-s)</code>: skip empty lines</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Split multi-line string into lines</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> $<span class="token string">&quot;two<span class="token entity" title="\\n">\\n</span>lines&quot;</span> <span class="token operator">|</span> lines
╭───┬───────╮
│ <span class="token number">0</span> │ two   │
│ <span class="token number">1</span> │ lines │
╰───┴───────╯

</code></pre></div>`,7);function m(a,f){return r(),i("div",null,[e("h1",c,[d,t(),e("code",null,s(a.$frontmatter.title),1),t(" for filters")]),e("div",p,s(a.$frontmatter.filters),1),h])}const _=n(l,[["render",m],["__file","lines.html.vue"]]);export{_ as default};