import{_ as s,o as n,c as r,a as e,t,d as i,e as o}from"./app.40c10a0a.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=i(),h={style:{"white-space":"pre-wrap"}},g=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; ast (pipeline)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pipeline</code>: the pipeline to print the ast for</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Print the ast of a string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ast <span class="token string">&#39;hello&#39;</span>
</code></pre></div><p>Print the ast of a pipeline</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ast <span class="token string">&#39;ls | where name =~ README&#39;</span>
</code></pre></div><p>Print the ast of a pipeline with an error</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ast <span class="token string">&#39;for x in 1..10 { echo $x &#39;</span>
</code></pre></div>`,11);function u(a,f){return n(),r("div",null,[e("h1",l,[p,d,e("code",null,t(a.$frontmatter.title),1)]),e("div",h,t(a.$frontmatter.usage),1),g])}const m=s(c,[["render",u],["__file","ast.html.vue"]]);export{m as default};