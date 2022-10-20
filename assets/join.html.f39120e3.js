import{_ as e,o as p,c,a,t as s,d as t,e as o}from"./app.f650a2d3.js";const l={},i={id:"frontmatter-title-for-database",tabindex:"-1"},r=a("a",{class:"header-anchor",href:"#frontmatter-title-for-database","aria-hidden":"true"},"#",-1),u=t(),k=t(" for database"),d={class:"command-title"},b=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; join (table) (on) --as --left --right --outer --cross</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>table</code>: table or derived table to join on</li><li><code>on</code>: expression to join tables</li><li><code>--as {string}</code>: Alias for the selected join</li><li><code>--left</code>: left outer join</li><li><code>--right</code>: right outer join</li><li><code>--outer</code>: full outer join</li><li><code>--cross</code>: cross join</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>joins two tables on col_b</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> db.sqlite
    <span class="token operator">|</span> from table table_1 <span class="token parameter variable">--as</span> t1
    <span class="token operator">|</span> <span class="token function">join</span> table_2 col_b <span class="token parameter variable">--as</span> t2
    <span class="token operator">|</span> <span class="token keyword">select</span> col_a
    <span class="token operator">|</span> describe
</code></pre></div><p>joins a table with a derived table using aliases</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> db.sqlite
    <span class="token operator">|</span> from table table_1 <span class="token parameter variable">--as</span> t1
    <span class="token operator">|</span> <span class="token function">join</span> <span class="token punctuation">(</span>
        <span class="token function">open</span> db.sqlite
        <span class="token operator">|</span> from table table_2
        <span class="token operator">|</span> <span class="token keyword">select</span> col_c
      <span class="token punctuation">)</span> <span class="token variable"><span class="token punctuation">((</span>field t1.col_a<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token punctuation">(</span>field t2.col_c<span class="token punctuation">))</span></span> <span class="token parameter variable">--as</span> t2 <span class="token parameter variable">--right</span>
    <span class="token operator">|</span> <span class="token keyword">select</span> col_a
    <span class="token operator">|</span> describe
</code></pre></div>`,9),h={id:"frontmatter-title-for-lazyframe",tabindex:"-1"},f=a("a",{class:"header-anchor",href:"#frontmatter-title-for-lazyframe","aria-hidden":"true"},"#",-1),m=t(),g=t(" for lazyframe"),q={class:"command-title"},_=o(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; join (other) (left_on) (right_on) --inner --left --outer --cross --suffix</code></p><h2 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h2><ul><li><code>other</code>: LazyFrame to join with</li><li><code>left_on</code>: Left column(s) to join on</li><li><code>right_on</code>: Right column(s) to join on</li><li><code>--inner</code>: inner joing between lazyframes (default)</li><li><code>--left</code>: left join between lazyframes</li><li><code>--outer</code>: outer join between lazyframes</li><li><code>--cross</code>: cross join between lazyframes</li><li><code>--suffix {string}</code>: Suffix to use on columns with same name</li></ul><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Join two lazy dataframes</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> df_a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>a b c<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;a&quot;</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token string">&quot;b&quot;</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;c&quot;</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;c&quot;</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into lazy<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> df_b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span> <span class="token string">&quot;bar&quot;</span> <span class="token string">&quot;ham&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;a&quot;</span> <span class="token string">&quot;let&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token string">&quot;c&quot;</span> <span class="token string">&quot;var&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token string">&quot;c&quot;</span> <span class="token string">&quot;const&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into lazy<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$df_a</span> <span class="token operator">|</span> <span class="token function">join</span> <span class="token variable">$df_b</span> a foo <span class="token operator">|</span> collect
</code></pre></div><p>Join one eager dataframe with a lazy dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> df_a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>a b c<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;a&quot;</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token string">&quot;b&quot;</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;c&quot;</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;c&quot;</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> df_b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span> <span class="token string">&quot;bar&quot;</span> <span class="token string">&quot;ham&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;a&quot;</span> <span class="token string">&quot;let&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token string">&quot;c&quot;</span> <span class="token string">&quot;var&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token string">&quot;c&quot;</span> <span class="token string">&quot;const&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into lazy<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$df_a</span> <span class="token operator">|</span> <span class="token function">join</span> <span class="token variable">$df_b</span> a foo
</code></pre></div>`,9);function v(n,j){return p(),c("div",null,[a("h1",i,[r,u,a("code",null,s(n.$frontmatter.title),1),k]),a("div",d,s(n.$frontmatter.database),1),b,a("h1",h,[f,m,a("code",null,s(n.$frontmatter.title),1),g]),a("div",q,s(n.$frontmatter.lazyframe),1),_])}const y=e(l,[["render",v],["__file","join.html.vue"]]);export{y as default};
