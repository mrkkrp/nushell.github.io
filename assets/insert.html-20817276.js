import{_ as t,p,q as o,Q as n,t as a,v as e,a1 as l}from"./framework-344bb0e4.js";const c={},r={id:"frontmatter-title-for-filters",tabindex:"-1"},i=n("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u={class:"command-title"},k=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; insert (field) (new value)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>field</code>: the name of the column to insert</li><li><code>new value</code>: the new value to give the cell(s)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Insert a new entry into a single record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;nu&#39;</span>, <span class="token string">&#39;stars&#39;</span><span class="token builtin class-name">:</span> <span class="token number">5</span><span class="token punctuation">}</span> <span class="token operator">|</span> insert <span class="token builtin class-name">alias</span> <span class="token string">&#39;Nushell&#39;</span>
╭───────┬─────────╮
│ name  │ nu      │
│ stars │ <span class="token number">5</span>       │
│ <span class="token builtin class-name">alias</span> │ Nushell │
╰───────┴─────────╯
</code></pre></div><p>Insert a new column into a table, populating all rows</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>project, lang<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;Nushell&#39;</span>, <span class="token string">&#39;Rust&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> insert <span class="token builtin class-name">type</span> <span class="token string">&#39;shell&#39;</span>
╭───┬─────────┬──────┬───────╮
│ <span class="token comment"># │ project │ lang │ type  │</span>
├───┼─────────┼──────┼───────┤
│ <span class="token number">0</span> │ Nushell │ Rust │ shell │
╰───┴─────────┴──────┴───────╯

</code></pre></div><p>Insert a column with values equal to their row index, plus the value of &#39;foo&#39; in each row</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>foo<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> enumerate <span class="token operator">|</span> insert bar <span class="token punctuation">{</span><span class="token operator">|</span>e<span class="token operator">|</span> <span class="token variable">$e</span>.item.foo + <span class="token variable">$e</span>.index <span class="token punctuation">}</span> <span class="token operator">|</span> flatten
╭───┬─────┬─────╮
│ <span class="token comment"># │ foo │ bar │</span>
├───┼─────┼─────┤
│ <span class="token number">0</span> │   <span class="token number">7</span> │   <span class="token number">7</span> │
│ <span class="token number">1</span> │   <span class="token number">8</span> │   <span class="token number">9</span> │
│ <span class="token number">2</span> │   <span class="token number">9</span> │  <span class="token number">11</span> │
╰───┴─────┴─────╯

</code></pre></div>`,11);function d(s,h){return p(),o("div",null,[n("h1",r,[i,a(),n("code",null,e(s.$frontmatter.title),1),a(" for filters")]),n("div",u,e(s.$frontmatter.filters),1),k])}const b=t(c,[["render",d],["__file","insert.html.vue"]]);export{b as default};
