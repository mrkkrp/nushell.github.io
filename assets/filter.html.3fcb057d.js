import{_ as t,o,c as p,a,t as s,d as e,e as r}from"./app.c7ac2154.js";const c={},i={id:"frontmatter-title-for-lazyframe",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-lazyframe","aria-hidden":"true"},"#",-1),u=e(),d=e(" for lazyframe"),h={class:"command-title"},f=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; filter (filter expression)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>filter expression</code>: Expression that define the column selection</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Filter dataframe using an expression</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> filter <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">4</span><span class="token punctuation">)</span>
</code></pre></div>`,7);function m(n,k){return o(),p("div",null,[a("h1",i,[l,u,a("code",null,s(n.$frontmatter.title),1),d]),a("div",h,s(n.$frontmatter.lazyframe),1),f])}const b=t(c,[["render",m],["__file","filter.html.vue"]]);export{b as default};
