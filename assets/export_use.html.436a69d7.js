import{_ as n,o,c as r,a as e,t,d as s,e as c}from"./app.f650a2d3.js";const i={},p={id:"frontmatter-title-for-core",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),l=s(),u=s(" for core"),h={class:"command-title"},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; export use (pattern)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pattern</code>: import pattern</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Re-export a command from another module</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module spam <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> def foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;foo&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
    module eggs <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> use spam foo <span class="token punctuation">}</span>
    use eggs foo
    foo

</code></pre></div>`,9);function f(a,_){return o(),r("div",null,[e("h1",p,[d,l,e("code",null,t(a.$frontmatter.title),1),u]),e("div",h,t(a.$frontmatter.core),1),m])}const g=n(i,[["render",f],["__file","export_use.html.vue"]]);export{g as default};
