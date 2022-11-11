import{_ as n,o,c as r,a as e,t,d as s,e as c}from"./app.c7ac2154.js";const d={},i={id:"frontmatter-title-for-date",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-date","aria-hidden":"true"},"#",-1),p=s(),h=s(" for date"),u={class:"command-title"},_=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; date to-record </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert the current date into a structured table.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> to-table
</code></pre></div><p>Convert the current date into a structured table.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> to-record
</code></pre></div><p>Convert a given date into a structured table.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;2020-04-12 22:10:57 +0200&#39;</span> <span class="token operator">|</span> <span class="token function">date</span> to-record
</code></pre></div>`,9);function g(a,f){return o(),r("div",null,[e("h1",i,[l,p,e("code",null,t(a.$frontmatter.title),1),h]),e("div",u,t(a.$frontmatter.date),1),_])}const b=n(d,[["render",g],["__file","date_to-record.html.vue"]]);export{b as default};
