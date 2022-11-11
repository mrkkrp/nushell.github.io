import{_ as i,o as n,c as r,a as e,t,d as s,e as l}from"./app.c7ac2154.js";const o={},c={id:"frontmatter-title-for-shells",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title-for-shells","aria-hidden":"true"},"#",-1),h=s(),p=s(" for shells"),u={class:"command-title"},m=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; exit (exit_code) --now</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>exit_code</code>: Exit code to return immediately with</li><li><code>--now</code>: Exit out of all shells immediately (exiting Nu)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Exit the current shell</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">exit</span>
</code></pre></div><p>Exit all shells (exiting Nu)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">exit</span> <span class="token parameter variable">--now</span>
</code></pre></div>`,9);function x(a,_){return n(),r("div",null,[e("h1",c,[d,h,e("code",null,t(a.$frontmatter.title),1),p]),e("div",u,t(a.$frontmatter.shells),1),m])}const g=i(o,[["render",x],["__file","exit.html.vue"]]);export{g as default};
