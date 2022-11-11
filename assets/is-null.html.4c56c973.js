import{_ as o,o as r,c as l,a,t as e,d as n,e as t}from"./app.c7ac2154.js";const c={},i={id:"frontmatter-title-for-dataframe",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),d=n(),h=n(" for dataframe"),u={class:"command-title"},m=t(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; is-null </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create mask where values are null</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span> <span class="token number">0</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> res <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$s</span> / <span class="token variable">$s</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$res</span> <span class="token operator">|</span> is-null
</code></pre></div>`,5),f={id:"frontmatter-title-for-expression",tabindex:"-1"},_=a("a",{class:"header-anchor",href:"#frontmatter-title-for-expression","aria-hidden":"true"},"#",-1),k=n(),b=n(" for expression"),g={class:"command-title"},x=t(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; is-null </code></p><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Creates a is null expression from a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> col a <span class="token operator">|</span> is-null
</code></pre></div>`,5);function v(s,$){return r(),l("div",null,[a("h1",i,[p,d,a("code",null,e(s.$frontmatter.title),1),h]),a("div",u,e(s.$frontmatter.dataframe),1),m,a("h1",f,[_,k,a("code",null,e(s.$frontmatter.title),1),b]),a("div",g,e(s.$frontmatter.expression),1),x])}const S=o(c,[["render",v],["__file","is-null.html.vue"]]);export{S as default};
