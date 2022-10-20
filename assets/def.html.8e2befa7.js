import{_ as t,o,c,a,t as s,d as n,e as i}from"./app.f650a2d3.js";const r={},d={id:"frontmatter-title-for-core",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),p=n(),h=n(" for core"),u={class:"command-title"},m=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; def (def_name) (params) (block)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>def_name</code>: definition name</li><li><code>params</code>: parameters</li><li><code>block</code>: body of the definition</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Define a command and run it</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def say-hi <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;hi&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> say-hi
</code></pre></div><p>Define a command and run it with parameter(s)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def say-sth <span class="token punctuation">[</span>sth: string<span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token variable">$sth</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> say-sth hi
</code></pre></div>`,11);function f(e,_){return o(),c("div",null,[a("h1",d,[l,p,a("code",null,s(e.$frontmatter.title),1),h]),a("div",u,s(e.$frontmatter.core),1),m])}const g=t(r,[["render",f],["__file","def.html.vue"]]);export{g as default};
