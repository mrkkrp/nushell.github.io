import{_ as n,o,c as r,a as e,t,d as s,e as d}from"./app.c7ac2154.js";const i={},c={id:"frontmatter-title-for-date",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title-for-date","aria-hidden":"true"},"#",-1),l=s(),p=s(" for date"),u={class:"command-title"},m=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; date humanize </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Print a &#39;humanized&#39; format for the date, relative to now.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> humanize
</code></pre></div><p>Print a &#39;humanized&#39; format for the date, relative to now.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;2021-10-22 20:00:12 +01:00&quot;</span> <span class="token operator">|</span> <span class="token function">date</span> humanize
</code></pre></div>`,7);function _(a,f){return o(),r("div",null,[e("h1",c,[h,l,e("code",null,t(a.$frontmatter.title),1),p]),e("div",u,t(a.$frontmatter.date),1),m])}const x=n(i,[["render",_],["__file","date_humanize.html.vue"]]);export{x as default};
