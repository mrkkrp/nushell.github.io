import{_ as e,p,q as o,Q as a,t as n,v as t,a1 as c}from"./framework-344bb0e4.js";const l={},r={id:"frontmatter-title-for-dataframe",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),i={class:"command-title"},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr drop-nulls </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>drop null values in dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token function">df</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> res <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$df</span>.b / <span class="token variable">$df</span>.b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$df</span> <span class="token operator">|</span> dfr with-column <span class="token variable">$res</span> <span class="token parameter variable">--name</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$a</span> <span class="token operator">|</span> dfr drop-nulls
</code></pre></div><p>drop null values in dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">(</span><span class="token variable">$s</span> / <span class="token variable">$s</span><span class="token punctuation">)</span> <span class="token operator">|</span> dfr drop-nulls
</code></pre></div>`,7);function k(s,m){return p(),o("div",null,[a("h1",r,[u,n(),a("code",null,t(s.$frontmatter.title),1),n(" for dataframe")]),a("div",i,t(s.$frontmatter.dataframe),1),d])}const b=e(l,[["render",k],["__file","dfr_drop-nulls.html.vue"]]);export{b as default};