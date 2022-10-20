import{_ as o,o as p,c as r,a,t as n,d as e,e as t}from"./app.f650a2d3.js";const c={},l={id:"frontmatter-title-for-database",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-database","aria-hidden":"true"},"#",-1),d=e(),u=e(" for database"),h={class:"command-title"},k=t(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; or (where)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>where</code>: Where expression on the table</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>selects a column from a database with an OR clause</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> db.sqlite
    <span class="token operator">|</span> from table table_1
    <span class="token operator">|</span> <span class="token keyword">select</span> a
    <span class="token operator">|</span> where <span class="token punctuation">((</span>field a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token operator">|</span> or <span class="token punctuation">((</span>field b<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token operator">|</span> describe
</code></pre></div><p>Creates an OR clause in the column names and a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> db.sqlite
    <span class="token operator">|</span> from table table_1
    <span class="token operator">|</span> <span class="token keyword">select</span> a
    <span class="token operator">|</span> where <span class="token variable"><span class="token punctuation">((</span>field a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">|</span> or <span class="token punctuation">((</span>field a<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">))</span></span>
    <span class="token operator">|</span> or <span class="token punctuation">((</span>field b<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token operator">|</span> describe
</code></pre></div>`,9),m={id:"frontmatter-title-for-db-expression",tabindex:"-1"},b=a("a",{class:"header-anchor",href:"#frontmatter-title-for-db-expression","aria-hidden":"true"},"#",-1),f=e(),_=e(" for db-expression"),g={class:"command-title"},x=t(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; or (or)</code></p><h2 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h2><ul><li><code>or</code>: OR expression</li></ul><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Creates an AND expression</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">(</span>field a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">|</span> or <span class="token punctuation">((</span>field a<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">|</span> into nu
</code></pre></div>`,7);function v(s,w){return p(),r("div",null,[a("h1",l,[i,d,a("code",null,n(s.$frontmatter.title),1),u]),a("div",h,n(s.$frontmatter.database),1),k,a("h1",m,[b,f,a("code",null,n(s.$frontmatter.title),1),_]),a("div",g,n(s.$frontmatter.db_expression),1),x])}const S=o(c,[["render",v],["__file","or.html.vue"]]);export{S as default};
