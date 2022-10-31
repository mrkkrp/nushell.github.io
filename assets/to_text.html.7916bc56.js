import{_ as n,o,c as r,a,t as e,d as t,e as p}from"./app.479190fd.js";const c={},l={id:"frontmatter-title-for-formats",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),d=t(),h=t(" for formats"),u={class:"command-title"},m=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; to text </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Outputs data as simple text</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">|</span> to text
</code></pre></div><p>Outputs external data as simple text</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> <span class="token builtin class-name">help</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">find</span> <span class="token parameter variable">-r</span> <span class="token string">&#39;^ &#39;</span> <span class="token operator">|</span>  to text
</code></pre></div><p>Outputs records as simple text</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span>  to text
</code></pre></div>`,9);function f(s,_){return o(),r("div",null,[a("h1",l,[i,d,a("code",null,e(s.$frontmatter.title),1),h]),a("div",u,e(s.$frontmatter.formats),1),m])}const x=n(c,[["render",f],["__file","to_text.html.vue"]]);export{x as default};