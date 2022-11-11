import{_ as n,o,c as i,a,t as s,d as t,e as r}from"./app.c7ac2154.js";const c={},d={id:"frontmatter-title-for-core",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),p=t(),h=t(" for core"),u={class:"command-title"},m=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; is-admin </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Echo &#39;iamroot&#39; if nushell is running with admin/root privileges, and &#39;iamnotroot&#39; if not.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">if</span> is-admin <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;iamroot&quot;</span> <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;iamnotroot&quot;</span> <span class="token punctuation">}</span>
</code></pre></div>`,5);function _(e,f){return o(),i("div",null,[a("h1",d,[l,p,a("code",null,s(e.$frontmatter.title),1),h]),a("div",u,s(e.$frontmatter.core),1),m])}const g=n(c,[["render",_],["__file","is-admin.html.vue"]]);export{g as default};
