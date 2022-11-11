import{_ as o,o as r,c,a,t as s,d as t,e as n}from"./app.c7ac2154.js";const l={},p={id:"frontmatter-title-for-database",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-database","aria-hidden":"true"},"#",-1),d=t(),h=t(" for database"),u={class:"command-title"},m=n(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; collect </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Collect from a select query</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> foo.db <span class="token operator">|</span> from table table_1 db <span class="token operator">|</span> <span class="token keyword">select</span> a <span class="token operator">|</span> collect
</code></pre></div>`,5),f={id:"frontmatter-title-for-filters",tabindex:"-1"},k=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),_=t(),b=t(" for filters"),g={class:"command-title"},x=n(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; collect (block) --keep-env</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>block</code>: the block to run once the stream is collected</li><li><code>--keep-env</code>: let the block affect environment variables</li></ul><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Use the second value in the stream</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token operator">|</span> collect <span class="token punctuation">{</span> <span class="token operator">|</span>x<span class="token operator">|</span> <span class="token builtin class-name">echo</span> <span class="token variable">$x</span>.1 <span class="token punctuation">}</span>
</code></pre></div>`,7),v={id:"frontmatter-title-for-lazyframe",tabindex:"-1"},y=a("a",{class:"header-anchor",href:"#frontmatter-title-for-lazyframe","aria-hidden":"true"},"#",-1),$=t(),z=t(" for lazyframe"),S={class:"command-title"},E=n(`<h2 id="signature-2" tabindex="-1"><a class="header-anchor" href="#signature-2" aria-hidden="true">#</a> Signature</h2><p><code>&gt; collect </code></p><h2 id="examples-2" tabindex="-1"><a class="header-anchor" href="#examples-2" aria-hidden="true">#</a> Examples</h2><p>drop duplicates</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into lazy <span class="token operator">|</span> collect
</code></pre></div>`,5);function B(e,N){return r(),c("div",null,[a("h1",p,[i,d,a("code",null,s(e.$frontmatter.title),1),h]),a("div",u,s(e.$frontmatter.database),1),m,a("h1",f,[k,_,a("code",null,s(e.$frontmatter.title),1),b]),a("div",g,s(e.$frontmatter.filters),1),x,a("h1",v,[y,$,a("code",null,s(e.$frontmatter.title),1),z]),a("div",S,s(e.$frontmatter.lazyframe),1),E])}const q=o(l,[["render",B],["__file","collect.html.vue"]]);export{q as default};
