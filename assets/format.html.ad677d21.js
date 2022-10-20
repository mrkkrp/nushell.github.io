import{_ as e,o,c as r,a,t,d as n,e as c}from"./app.f650a2d3.js";const p={},i={id:"frontmatter-title-for-strings",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d=n(),u=n(" for strings"),h={class:"command-title"},f=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; format (pattern)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pattern</code>: the pattern to output. e.g.) &quot;{foo}: {bar}&quot;</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Print filenames with their sizes</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> <span class="token function">format</span> <span class="token string">&#39;{name}: {size}&#39;</span>
</code></pre></div><p>Print elements from some columns of a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>col1, col2<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>v1, v2<span class="token punctuation">]</span> <span class="token punctuation">[</span>v3, v4<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">format</span> <span class="token string">&#39;{col2}&#39;</span>
</code></pre></div>`,9);function m(s,g){return o(),r("div",null,[a("h1",i,[l,d,a("code",null,t(s.$frontmatter.title),1),u]),a("div",h,t(s.$frontmatter.strings),1),f])}const k=e(p,[["render",m],["__file","format.html.vue"]]);export{k as default};
