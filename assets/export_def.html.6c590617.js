import{_ as n,o,c as r,a as e,t,d as s,e as c}from"./app.c7ac2154.js";const i={},d={id:"frontmatter-title-for-core",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),p=s(),h=s(" for core"),u={class:"command-title"},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; export def (name) (params) (block)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>name</code>: definition name</li><li><code>params</code>: parameters</li><li><code>block</code>: body of the definition</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Define a custom command in a module and call it</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module spam <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> def foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;foo&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> use spam foo<span class="token punctuation">;</span> foo
</code></pre></div>`,9);function f(a,_){return o(),r("div",null,[e("h1",d,[l,p,e("code",null,t(a.$frontmatter.title),1),h]),e("div",u,t(a.$frontmatter.core),1),m])}const x=n(i,[["render",f],["__file","export_def.html.vue"]]);export{x as default};
