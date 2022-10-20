import{_ as r,o as n,c as o,a as e,t,d as s,e as c}from"./app.f650a2d3.js";const l={},i={id:"frontmatter-title-for-network",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title-for-network","aria-hidden":"true"},"#",-1),p=s(),h=s(" for network"),u={class:"command-title"},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; url query ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally operate by cell path</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get a query string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;http://www.example.com/?foo=bar&amp;baz=quux&#39;</span> <span class="token operator">|</span> url query
</code></pre></div><p>Returns an empty string if there is no query string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;http://www.example.com/&#39;</span> <span class="token operator">|</span> url query
</code></pre></div>`,9);function _(a,f){return n(),o("div",null,[e("h1",i,[d,p,e("code",null,t(a.$frontmatter.title),1),h]),e("div",u,t(a.$frontmatter.network),1),m])}const k=r(l,[["render",_],["__file","url_query.html.vue"]]);export{k as default};
