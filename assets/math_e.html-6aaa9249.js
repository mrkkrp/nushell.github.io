import{_ as r,p as n,q as o,Q as e,t,v as s,a1 as i}from"./framework-344bb0e4.js";const c={},d={id:"frontmatter-title-for-math",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title-for-math","aria-hidden":"true"},"#",-1),l={class:"command-title"},m=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; math e </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the first three decimal digits of e</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> math e <span class="token operator">|</span> math round <span class="token parameter variable">--precision</span> <span class="token number">3</span>
</code></pre></div>`,5);function p(a,_){return n(),o("div",null,[e("h1",d,[h,t(),e("code",null,s(a.$frontmatter.title),1),t(" for math")]),e("div",l,s(a.$frontmatter.math),1),m])}const u=r(c,[["render",p],["__file","math_e.html.vue"]]);export{u as default};