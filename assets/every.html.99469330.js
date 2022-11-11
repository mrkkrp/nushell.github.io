import{_ as t,o as r,c as o,a as e,t as s,d as n,e as p}from"./app.c7ac2154.js";const c={},i={id:"frontmatter-title-for-filters",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),d=n(),h=n(" for filters"),u={class:"command-title"},m=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; every (stride) --skip</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>stride</code>: how many rows to skip between (and including) each row returned</li><li><code>--skip</code>: skip the rows that would be returned, instead of selecting them</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get every second row</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> every <span class="token number">2</span>
</code></pre></div><p>Skip every second row</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> every <span class="token number">2</span> <span class="token parameter variable">--skip</span>
</code></pre></div>`,9);function k(a,b){return r(),o("div",null,[e("h1",i,[l,d,e("code",null,s(a.$frontmatter.title),1),h]),e("div",u,s(a.$frontmatter.filters),1),m])}const _=t(c,[["render",k],["__file","every.html.vue"]]);export{_ as default};
