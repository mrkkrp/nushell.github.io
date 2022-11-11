import{_ as n,o,c as r,a as e,t,d as s,e as d}from"./app.c7ac2154.js";const i={},c={id:"frontmatter-title-for-database",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-database","aria-hidden":"true"},"#",-1),h=s(),p=s(" for database"),_={class:"command-title"},f=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into db </code></p><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This function is used as a hint to Nushell to optimize the pipeline for database queries.
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts an open file into a db object.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> db.sqlite <span class="token operator">|</span> into db
</code></pre></div>`,7);function u(a,b){return o(),r("div",null,[e("h1",c,[l,h,e("code",null,t(a.$frontmatter.title),1),p]),e("div",_,t(a.$frontmatter.database),1),f])}const g=n(i,[["render",u],["__file","into_db.html.vue"]]);export{g as default};
