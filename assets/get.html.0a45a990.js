import{_ as o,o as r,c,a,t as s,d as t,e as n}from"./app.c7ac2154.js";const p={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),d=t(),h=t(" for dataframe"),u={class:"command-title"},g=n(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; get ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: column names to sort dataframe</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns the selected column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> get a
</code></pre></div>`,7),f={id:"frontmatter-title-for-filters",tabindex:"-1"},m=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),k=t(),_=t(" for filters"),b={class:"command-title"},v=n(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; get (cell_path) ...rest --ignore-errors --sensitive</code></p><h2 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h2><ul><li><code>cell_path</code>: the cell path to the data</li><li><code>...rest</code>: additional cell paths</li><li><code>--ignore-errors</code>: when there are empty cells, instead of erroring out, replace them with nothing</li><li><code>--sensitive</code>: get path in a case sensitive manner</li></ul><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Extract the name of files as a list</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get name
</code></pre></div><p>Extract the name of the 3rd entry of a file list</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get name.2
</code></pre></div><p>Extract the name of the 3rd entry of a file list (alternative)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get <span class="token number">2</span>.name
</code></pre></div><p>Extract the cpu list from the sys information record</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get cpu
</code></pre></div><p>Getting Path/PATH in a case insensitive way</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$env</span> <span class="token operator">|</span> get paTH
</code></pre></div><p>Getting Path in a case sensitive way, won&#39;t work for &#39;PATH&#39;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$env</span> <span class="token operator">|</span> get <span class="token parameter variable">-s</span> Path
</code></pre></div>`,17);function x(e,y){return r(),c("div",null,[a("h1",l,[i,d,a("code",null,s(e.$frontmatter.title),1),h]),a("div",u,s(e.$frontmatter.dataframe),1),g,a("h1",f,[m,k,a("code",null,s(e.$frontmatter.title),1),_]),a("div",b,s(e.$frontmatter.filters),1),v])}const P=o(p,[["render",x],["__file","get.html.vue"]]);export{P as default};
