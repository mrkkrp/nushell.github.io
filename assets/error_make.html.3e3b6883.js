import{_ as t,o,c as r,a,t as n,d as e,e as c}from"./app.f650a2d3.js";const p={},i={id:"frontmatter-title-for-core",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),u=e(),d=e(" for core"),h={class:"command-title"},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; error make (error_struct) --unspanned</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>error_struct</code>: the error to create</li><li><code>--unspanned</code>: remove the origin label from the error</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create a custom error for a custom command</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def foo <span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token punctuation">{</span>
      <span class="token builtin class-name">let</span> span <span class="token operator">=</span> <span class="token punctuation">(</span>metadata <span class="token variable">$x</span><span class="token punctuation">)</span>.span<span class="token punctuation">;</span>
      error <span class="token function">make</span> <span class="token punctuation">{</span>msg: <span class="token string">&quot;this is fishy&quot;</span>, label: <span class="token punctuation">{</span>text: <span class="token string">&quot;fish right here&quot;</span>, start: <span class="token variable">$span</span>.start, end: <span class="token variable">$span</span>.end <span class="token punctuation">}</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre></div><p>Create a simple custom error for a custom command</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def foo <span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token punctuation">{</span>
      error <span class="token function">make</span> <span class="token punctuation">{</span>msg: <span class="token string">&quot;this is fishy&quot;</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre></div>`,9);function k(s,f){return o(),r("div",null,[a("h1",i,[l,u,a("code",null,n(s.$frontmatter.title),1),d]),a("div",h,n(s.$frontmatter.core),1),m])}const g=t(p,[["render",k],["__file","error_make.html.vue"]]);export{g as default};
