import{_ as s,o as r,c as n,a,t,d as o,e as l}from"./app.f360d736.js";const c={},p={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=o(),d={style:{"white-space":"pre-wrap"}},u=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; url path ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally operate by cell path</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get path of a url</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;http://www.example.com/foo/bar&#39;</span> <span class="token operator">|</span> url path
</code></pre></div><p>A trailing slash will be reflected in the path</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;http://www.example.com&#39;</span> <span class="token operator">|</span> url path
</code></pre></div>`,9);function m(e,_){return r(),n("div",null,[a("h1",p,[i,h,a("code",null,t(e.$frontmatter.title),1)]),a("div",d,t(e.$frontmatter.usage),1),u])}const f=s(c,[["render",m],["__file","url_path.html.vue"]]);export{f as default};