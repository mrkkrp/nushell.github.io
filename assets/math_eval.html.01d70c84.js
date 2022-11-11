import{_ as r,o as n,c as o,a as e,t,d as s,e as i}from"./app.c7ac2154.js";const h={},c={id:"frontmatter-title-for-math",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title-for-math","aria-hidden":"true"},"#",-1),l=s(),m=s(" for math"),p={class:"command-title"},_=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; math eval (math expression)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>math expression</code>: the math expression to evaluate</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Evaluate math in the pipeline</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;10 / 4&#39;</span> <span class="token operator">|</span> math <span class="token builtin class-name">eval</span>
</code></pre></div>`,7);function u(a,f){return n(),o("div",null,[e("h1",c,[d,l,e("code",null,t(a.$frontmatter.title),1),m]),e("div",p,t(a.$frontmatter.math),1),_])}const g=r(h,[["render",u],["__file","math_eval.html.vue"]]);export{g as default};
