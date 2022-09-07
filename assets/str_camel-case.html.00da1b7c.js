import{_ as t,o as n,c,a,t as e,d as o,e as r}from"./app.c2a61f71.js";const p={},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(),h={style:{"white-space":"pre-wrap"}},u=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str camel-case ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally convert text to camelCase by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>convert a string to camelCase</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;NuShell&#39;</span> <span class="token operator">|</span> str camel-case
</code></pre></div><p>convert a string to camelCase</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;this-is-the-first-case&#39;</span> <span class="token operator">|</span> str camel-case
</code></pre></div><p>convert a string to camelCase</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;this_is_the_second_case&#39;</span> <span class="token operator">|</span> str camel-case
</code></pre></div><p>convert a column from a table to camelCase</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>lang, gems<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>nu_test, <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str camel-case lang
</code></pre></div>`,13);function g(s,m){return n(),c("div",null,[a("h1",l,[i,d,a("code",null,e(s.$frontmatter.title),1)]),a("div",h,e(s.$frontmatter.usage),1),u])}const k=t(p,[["render",g],["__file","str_camel-case.html.vue"]]);export{k as default};