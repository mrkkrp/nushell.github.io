import{_ as e,o as t,c as o,a,t as n,d as p,e as c}from"./app.17282d37.js";const r={},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p(),d={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; bytes collect (separator)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>separator</code>: optional separator to use when creating binary</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create a byte array from input</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>0x<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span> 0x<span class="token punctuation">[</span><span class="token number">13</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> bytes collect
</code></pre></div><p>Create a byte array from input with a separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>0x<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span> 0x<span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">]</span> 0x<span class="token punctuation">[</span><span class="token number">44</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> bytes collect 0x<span class="token punctuation">[</span>01<span class="token punctuation">]</span>
</code></pre></div>`,9);function k(s,m){return t(),o("div",null,[a("h1",l,[i,u,a("code",null,n(s.$frontmatter.title),1)]),a("div",d,n(s.$frontmatter.usage),1),h])}var _=e(r,[["render",k],["__file","bytes_collect.html.vue"]]);export{_ as default};