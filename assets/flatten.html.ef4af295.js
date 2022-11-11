import{_ as p,o,c,a,t as s,d as t,e}from"./app.c7ac2154.js";const l={},r={id:"frontmatter-title-for-expression",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-expression","aria-hidden":"true"},"#",-1),u=t(),d=t(" for expression"),k={class:"command-title"},h=e(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; flatten </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>
</code></pre></div>`,4),g={id:"frontmatter-title-for-filters",tabindex:"-1"},f=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),m=t(),b=t(" for filters"),_={class:"command-title"},v=e(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; flatten ...rest --all</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally flatten data by column</li><li><code>--all</code>: flatten inner table out</li></ul><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>flatten a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>N, u, s, h, e, l, l<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> flatten
</code></pre></div><p>flatten a table, get the first item</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>N, u, s, h, e, l, l<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> flatten <span class="token operator">|</span> first
</code></pre></div><p>flatten a column having a nested table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>origin, people<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>Ecuador, <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>name, meal<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;Andres&#39;</span>, <span class="token string">&#39;arepa&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> flatten <span class="token parameter variable">--all</span> <span class="token operator">|</span> get meal
</code></pre></div><p>restrict the flattening by passing column names</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>origin, crate, versions<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>World, <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;nu-cli&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>, <span class="token punctuation">[</span><span class="token string">&#39;0.21&#39;</span>, <span class="token string">&#39;0.22&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> flatten versions <span class="token parameter variable">--all</span> <span class="token operator">|</span> last <span class="token operator">|</span> get versions
</code></pre></div><p>Flatten inner table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span> a: b, d: <span class="token punctuation">[</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token punctuation">]</span>,  e: <span class="token punctuation">[</span> <span class="token number">4</span> <span class="token number">3</span>  <span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token operator">|</span> flatten d <span class="token parameter variable">--all</span>
</code></pre></div>`,15);function x(n,N){return o(),c("div",null,[a("h1",r,[i,u,a("code",null,s(n.$frontmatter.title),1),d]),a("div",k,s(n.$frontmatter.expression),1),h,a("h1",g,[f,m,a("code",null,s(n.$frontmatter.title),1),b]),a("div",_,s(n.$frontmatter.filters),1),v])}const E=p(l,[["render",x],["__file","flatten.html.vue"]]);export{E as default};
