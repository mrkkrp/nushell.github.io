import{_ as o,o as p,c,a,t as s,d as e,e as t}from"./app.f650a2d3.js";const r={},l={id:"frontmatter-title-for-dataframe-or-lazyframe",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe-or-lazyframe","aria-hidden":"true"},"#",-1),i=e(),d=e(" for dataframe or lazyframe"),m={class:"command-title"},k=t(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; rename (columns) (new names)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>columns</code>: Column(s) to be renamed. A string or list of strings</li><li><code>new names</code>: New names for the selected column(s). A string or list of strings</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Renames a series</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> <span class="token function">rename</span> <span class="token string">&#39;0&#39;</span> new_name
</code></pre></div><p>Renames a dataframe column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> <span class="token function">rename</span> a a_new
</code></pre></div><p>Renames two dataframe columns</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> <span class="token function">rename</span> <span class="token punctuation">[</span>a b<span class="token punctuation">]</span> <span class="token punctuation">[</span>a_new b_new<span class="token punctuation">]</span>
</code></pre></div>`,11),h={id:"frontmatter-title-for-filters",tabindex:"-1"},f=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),b=e(),g=e(" for filters"),_={class:"command-title"},x=t(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; rename ...rest --column</code></p><h2 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the new names for the columns</li><li><code>--column {list&lt;string&gt;}</code>: column name to be changed</li></ul><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Rename a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a, b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">rename</span> my_column
</code></pre></div><p>Rename many columns</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a, b, c<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">rename</span> eggs ham bacon
</code></pre></div><p>Rename a specific column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a, b, c<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">rename</span> <span class="token parameter variable">-c</span> <span class="token punctuation">[</span>a ham<span class="token punctuation">]</span>
</code></pre></div>`,11);function v(n,w){return p(),c("div",null,[a("h1",l,[u,i,a("code",null,s(n.$frontmatter.title),1),d]),a("div",m,s(n.$frontmatter.dataframe_or_lazyframe),1),k,a("h1",h,[f,b,a("code",null,s(n.$frontmatter.title),1),g]),a("div",_,s(n.$frontmatter.filters),1),x])}const R=o(r,[["render",v],["__file","rename.html.vue"]]);export{R as default};
