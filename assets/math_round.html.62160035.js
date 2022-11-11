import{_ as t,o,c as r,a,t as s,d as n,e as c}from"./app.c7ac2154.js";const p={},i={id:"frontmatter-title-for-math",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-math","aria-hidden":"true"},"#",-1),l=n(),h=n(" for math"),u={class:"command-title"},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; math round --precision</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--precision {number}</code>: digits of precision</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Apply the round function to a list of numbers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1.5</span> <span class="token number">2.3</span> -3.1<span class="token punctuation">]</span> <span class="token operator">|</span> math round
</code></pre></div><p>Apply the round function with precision specified</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1.555</span> <span class="token number">2.333</span> -3.111<span class="token punctuation">]</span> <span class="token operator">|</span> math round <span class="token parameter variable">-p</span> <span class="token number">2</span>
</code></pre></div>`,9);function _(e,f){return o(),r("div",null,[a("h1",i,[d,l,a("code",null,s(e.$frontmatter.title),1),h]),a("div",u,s(e.$frontmatter.math),1),m])}const g=t(p,[["render",_],["__file","math_round.html.vue"]]);export{g as default};
