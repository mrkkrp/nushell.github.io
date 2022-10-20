import{_ as t,o,c,a,t as e,d as n,e as p}from"./app.f650a2d3.js";const i={},l={id:"frontmatter-title-for-core",tabindex:"-1"},r=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),u=n(),d=n(" for core"),h={class:"command-title"},k=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; view-source (item)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>item</code>: name or block to view</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>View the source of a code block</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> abc <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;hi&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> view-source <span class="token variable">$abc</span>
</code></pre></div><p>View the source of a custom command</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def hi <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hi!&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> view-source hi
</code></pre></div><p>View the source of a custom command, which participates in the caller environment</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def-env foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> let-env BAR <span class="token operator">=</span> <span class="token string">&#39;BAZ&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> view-source foo
</code></pre></div><p>View the source of a module</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module mod-foo <span class="token punctuation">{</span> export-env <span class="token punctuation">{</span> let-env FOO_ENV <span class="token operator">=</span> <span class="token string">&#39;BAZ&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> view-source mod-foo
</code></pre></div><p>View the source of an alias</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">alias</span> hello <span class="token operator">=</span> <span class="token builtin class-name">echo</span> hi<span class="token punctuation">;</span> view-source hello
</code></pre></div>`,15);function m(s,g){return o(),c("div",null,[a("h1",l,[r,u,a("code",null,e(s.$frontmatter.title),1),d]),a("div",h,e(s.$frontmatter.core),1),k])}const v=t(i,[["render",m],["__file","view-source.html.vue"]]);export{v as default};
