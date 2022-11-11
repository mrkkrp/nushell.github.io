import{_ as o,o as r,c,a,t as s,d as t,e as n}from"./app.c7ac2154.js";const l={},i={id:"frontmatter-title-for-database",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title-for-database","aria-hidden":"true"},"#",-1),d=t(),h=t(" for database"),u={class:"command-title"},f=n(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; where (where)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>where</code>: Where expression on the table</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>selects a column from a database with a where clause</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> db.sqlite
    <span class="token operator">|</span> from table table_1
    <span class="token operator">|</span> <span class="token keyword">select</span> a
    <span class="token operator">|</span> where <span class="token punctuation">((</span>field a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token operator">|</span> describe
</code></pre></div>`,7),k={id:"frontmatter-title-for-filters",tabindex:"-1"},g=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),m=t(),b=t(" for filters"),_={class:"command-title"},w=n(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; where (cond) --block</code></p><h2 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h2><ul><li><code>cond</code>: condition</li><li><code>--block {block}</code>: use where with a block or variable instead</li></ul><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>List all files in the current directory with sizes greater than 2kb</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 2kb
</code></pre></div><p>List only the files in the current directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> <span class="token function">file</span>
</code></pre></div><p>List all files with names that contain &quot;Car&quot;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where name <span class="token operator">=~</span> <span class="token string">&quot;Car&quot;</span>
</code></pre></div><p>List all files that were modified in the last two weeks</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where modified <span class="token operator">&gt;=</span> <span class="token punctuation">(</span>date now<span class="token punctuation">)</span> - 2wk
</code></pre></div>`,13);function x(e,v){return r(),c("div",null,[a("h1",i,[p,d,a("code",null,s(e.$frontmatter.title),1),h]),a("div",u,s(e.$frontmatter.database),1),f,a("h1",k,[g,m,a("code",null,s(e.$frontmatter.title),1),b]),a("div",_,s(e.$frontmatter.filters),1),w])}const q=o(l,[["render",x],["__file","where.html.vue"]]);export{q as default};
