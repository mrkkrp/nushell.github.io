import{_ as o,o as p,c,a,t as n,d as t,e}from"./app.c7ac2154.js";const l={},r={id:"frontmatter-title-for-dataframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),u=t(),d=t(" for dataframe"),h={class:"command-title"},m=e(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; columns </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Dataframe columns</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> columns
</code></pre></div>`,5),k={id:"frontmatter-title-for-filters",tabindex:"-1"},f=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),g=t(),_=t(" for filters"),b={class:"command-title"},x=e(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; columns </code></p><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Get the columns from the table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name,age,grade<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>bill,20,a<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> columns
</code></pre></div><p>Get the first column from the table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name,age,grade<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>bill,20,a<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> columns <span class="token operator">|</span> first
</code></pre></div><p>Get the second column from the table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name,age,grade<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>bill,20,a<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> columns <span class="token operator">|</span> <span class="token keyword">select</span> <span class="token number">1</span>
</code></pre></div>`,9);function v(s,S){return p(),c("div",null,[a("h1",r,[i,u,a("code",null,n(s.$frontmatter.title),1),d]),a("div",h,n(s.$frontmatter.dataframe),1),m,a("h1",k,[f,g,a("code",null,n(s.$frontmatter.title),1),_]),a("div",b,n(s.$frontmatter.filters),1),x])}const B=o(l,[["render",v],["__file","columns.html.vue"]]);export{B as default};
