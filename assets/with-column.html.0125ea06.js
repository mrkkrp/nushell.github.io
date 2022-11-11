import{_ as e,o,c as p,a,t as s,d as t,e as c}from"./app.c7ac2154.js";const r={},l={id:"frontmatter-title-for-dataframe-or-lazyframe",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe-or-lazyframe","aria-hidden":"true"},"#",-1),i=t(),d=t(" for dataframe or lazyframe"),k={class:"command-title"},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; with-column ...series or expressions --name</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...series or expressions</code>: series to be added or expressions used to define the new columns</li><li><code>--name {string}</code>: new column name</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Adds a series to the dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> into <span class="token function">df</span>
    <span class="token operator">|</span> with-column <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span> <span class="token parameter variable">--name</span> c
</code></pre></div><p>Adds a series to the dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> into lazy
    <span class="token operator">|</span> with-column <span class="token punctuation">[</span>
        <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> * <span class="token number">2</span> <span class="token operator">|</span> as <span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> * <span class="token number">3</span> <span class="token operator">|</span> as <span class="token string">&quot;d&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span>
    <span class="token operator">|</span> collect
</code></pre></div>`,9);function h(n,f){return o(),p("div",null,[a("h1",l,[u,i,a("code",null,s(n.$frontmatter.title),1),d]),a("div",k,s(n.$frontmatter.dataframe_or_lazyframe),1),m])}const _=e(r,[["render",h],["__file","with-column.html.vue"]]);export{_ as default};
