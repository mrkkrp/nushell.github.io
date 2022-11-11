import{_ as n,o,c as l,a,t as s,d as t,e as r}from"./app.c7ac2154.js";const c={},p={id:"frontmatter-title-for-filters",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),i=t(),u=t(" for filters"),h={class:"command-title"},f=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; default (default value) (column name)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>default value</code>: the value to use as a default</li><li><code>column name</code>: the name of the column</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Give a default &#39;target&#39; column to all file entries</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token parameter variable">-la</span> <span class="token operator">|</span> default <span class="token string">&#39;nothing&#39;</span> target
</code></pre></div><p>Get the env value of <code>MY_ENV</code> with a default value &#39;abc&#39; if not present</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$env</span> <span class="token operator">|</span> get <span class="token parameter variable">-i</span> MY_ENV <span class="token operator">|</span> default <span class="token string">&#39;abc&#39;</span>
</code></pre></div><p>Replace the <code>null</code> value in a list</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, null, <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> default <span class="token number">3</span>
</code></pre></div>`,11);function m(e,g){return o(),l("div",null,[a("h1",p,[d,i,a("code",null,s(e.$frontmatter.title),1),u]),a("div",h,s(e.$frontmatter.filters),1),f])}const k=n(c,[["render",m],["__file","default.html.vue"]]);export{k as default};
