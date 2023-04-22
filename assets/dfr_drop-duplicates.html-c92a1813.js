import{_ as t,p,q as o,Q as a,t as s,v as e,a1 as r}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),u={class:"command-title"},i=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr drop-duplicates </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>drop duplicates</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr drop-duplicates
╭───┬───┬───╮
│ <span class="token comment"># │ a │ b │</span>
├───┼───┼───┤
│ <span class="token number">0</span> │ <span class="token number">3</span> │ <span class="token number">4</span> │
│ <span class="token number">1</span> │ <span class="token number">1</span> │ <span class="token number">2</span> │
╰───┴───┴───╯

</code></pre></div>`,5);function m(n,k){return p(),o("div",null,[a("h1",l,[d,s(),a("code",null,e(n.$frontmatter.title),1),s(" for dataframe")]),a("div",u,e(n.$frontmatter.dataframe),1),i])}const h=t(c,[["render",m],["__file","dfr_drop-duplicates.html.vue"]]);export{h as default};