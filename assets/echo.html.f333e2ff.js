import{_ as n,z as r,A as i,X as e,C as s,D as t,a6 as o}from"./framework.3d018c9f.js";const c={},l={id:"frontmatter-title-for-core",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),d={class:"command-title"},p=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; echo ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the values to echo</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>When given no arguments, it returns an empty string. When given one argument, it returns it. Otherwise, it returns a list of the arguments. There is usually little reason to use this over just writing the values as-is.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Put a list of numbers in the pipeline. This is the same as [1 2 3].</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
</code></pre></div><p>Returns the piped-in value, by using the special $in variable to obtain it.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$in</span>
</code></pre></div>`,11);function u(a,m){return r(),i("div",null,[e("h1",l,[h,s(),e("code",null,t(a.$frontmatter.title),1),s(" for core")]),e("div",d,t(a.$frontmatter.core),1),p])}const f=n(c,[["render",u],["__file","echo.html.vue"]]);export{f as default};