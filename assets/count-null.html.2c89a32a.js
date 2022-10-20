import{_ as t,o,c,a,t as n,d as e,e as p}from"./app.f650a2d3.js";const r={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),u=e(),d=e(" for dataframe"),h={class:"command-title"},m=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; count-null </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Counts null values</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">1</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">3</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">(</span><span class="token variable">$s</span> / <span class="token variable">$s</span><span class="token punctuation">)</span> <span class="token operator">|</span> count-null
</code></pre></div>`,5);function k(s,f){return o(),c("div",null,[a("h1",l,[i,u,a("code",null,n(s.$frontmatter.title),1),d]),a("div",h,n(s.$frontmatter.dataframe),1),m])}const b=t(r,[["render",k],["__file","count-null.html.vue"]]);export{b as default};
