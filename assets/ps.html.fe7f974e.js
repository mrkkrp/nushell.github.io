import{_ as n,o,c as r,a as s,t as a,d as t,e as p}from"./app.c7ac2154.js";const c={},l={id:"frontmatter-title-for-system",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title-for-system","aria-hidden":"true"},"#",-1),h=t(),d=t(" for system"),m={class:"command-title"},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; ps --long</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--long</code>: list all available columns for each entry</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>List the system processes</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span>
</code></pre></div><p>List the top 5 system processes with the highest memory usage</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> sort-by mem <span class="token operator">|</span> last <span class="token number">5</span>
</code></pre></div><p>List the top 3 system processes with the highest CPU usage</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> sort-by cpu <span class="token operator">|</span> last <span class="token number">3</span>
</code></pre></div><p>List the system processes with &#39;nu&#39; in their names</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> where name <span class="token operator">=~</span> <span class="token string">&#39;nu&#39;</span>
</code></pre></div>`,13);function g(e,f){return o(),r("div",null,[s("h1",l,[i,h,s("code",null,a(e.$frontmatter.title),1),d]),s("div",m,a(e.$frontmatter.system),1),u])}const k=n(c,[["render",g],["__file","ps.html.vue"]]);export{k as default};
