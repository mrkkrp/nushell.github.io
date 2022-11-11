import{_ as n,o as r,c as i,a as e,t as a,d as s,e as o}from"./app.c7ac2154.js";const l={},c={id:"frontmatter-title-for-filters",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),h=s(),p=s(" for filters"),m={class:"command-title"},f=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; lines --skip-empty</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--skip-empty</code>: skip empty lines</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Split multi-line string into lines</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> $<span class="token string">&quot;two<span class="token entity" title="\\n">\\n</span>lines&quot;</span> <span class="token operator">|</span> lines
</code></pre></div>`,7);function _(t,u){return r(),i("div",null,[e("h1",c,[d,h,e("code",null,a(t.$frontmatter.title),1),p]),e("div",m,a(t.$frontmatter.filters),1),f])}const k=n(l,[["render",_],["__file","lines.html.vue"]]);export{k as default};
