import{_ as t,o as r,c as o,a,t as s,d as n,e as c}from"./app.f650a2d3.js";const p={},l={id:"frontmatter-title-for-math",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-math","aria-hidden":"true"},"#",-1),h=n(),d=n(" for math"),m={class:"command-title"},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; math variance --sample</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--sample</code>: calculate sample variance</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the variance of a list of numbers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> math variance
</code></pre></div><p>Get the sample variance of a list of numbers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> math variance <span class="token parameter variable">-s</span>
</code></pre></div>`,9);function _(e,b){return r(),o("div",null,[a("h1",l,[i,h,a("code",null,s(e.$frontmatter.title),1),d]),a("div",m,s(e.$frontmatter.math),1),u])}const k=t(p,[["render",_],["__file","math_variance.html.vue"]]);export{k as default};
