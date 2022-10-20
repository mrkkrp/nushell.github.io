import{_ as t,o as p,c as o,a as n,t as a,d as e,e as c}from"./app.f650a2d3.js";const r={},l={id:"frontmatter-title-for-expression",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#frontmatter-title-for-expression","aria-hidden":"true"},"#",-1),i=e(),k=e(" for expression"),h={class:"command-title"},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; otherwise (otherwise expression)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>otherwise expression</code>: expressioini to apply when no when predicate matches</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create a when conditions</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">4</span> <span class="token operator">|</span> otherwise <span class="token number">5</span>
</code></pre></div><p>Create a when conditions</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">4</span> <span class="token operator">|</span> when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">6</span> <span class="token operator">|</span> otherwise <span class="token number">0</span>
</code></pre></div><p>Create a new column for the dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
   <span class="token operator">|</span> into lazy
   <span class="token operator">|</span> with-column <span class="token punctuation">(</span>
       when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">4</span> <span class="token operator">|</span> otherwise <span class="token number">5</span> <span class="token operator">|</span> as c
     <span class="token punctuation">)</span>
   <span class="token operator">|</span> with-column <span class="token punctuation">(</span>
       when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token number">10</span> <span class="token operator">|</span> when <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">6</span> <span class="token operator">|</span> otherwise <span class="token number">0</span> <span class="token operator">|</span> as d
     <span class="token punctuation">)</span>
   <span class="token operator">|</span> collect
</code></pre></div>`,11);function m(s,b){return p(),o("div",null,[n("h1",l,[u,i,n("code",null,a(s.$frontmatter.title),1),k]),n("div",h,a(s.$frontmatter.expression),1),d])}const w=t(r,[["render",m],["__file","otherwise.html.vue"]]);export{w as default};
