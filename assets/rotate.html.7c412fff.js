import{_ as e,o as p,c as o,a,t as s,d as t,e as c}from"./app.f650a2d3.js";const l={},u={id:"frontmatter-title-for-filters",tabindex:"-1"},r=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),i=t(),k=t(" for filters"),d={class:"command-title"},b=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; rotate ...rest --ccw</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the names to give columns once rotated</li><li><code>--ccw</code>: rotate counter clockwise</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Rotate 2x2 table clockwise</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> rotate
</code></pre></div><p>Rotate 2x3 table clockwise</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> rotate
</code></pre></div><p>Rotate table clockwise and change columns names</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> rotate col_a col_b
</code></pre></div><p>Rotate table counter clockwise</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> rotate <span class="token parameter variable">--ccw</span>
</code></pre></div><p>Rotate table counter-clockwise</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> rotate <span class="token parameter variable">--ccw</span>
</code></pre></div><p>Rotate table counter-clockwise and change columns names</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> rotate <span class="token parameter variable">--ccw</span> col_a col_b
</code></pre></div>`,17);function h(n,m){return p(),o("div",null,[a("h1",u,[r,i,a("code",null,s(n.$frontmatter.title),1),k]),a("div",d,s(n.$frontmatter.filters),1),b])}const _=e(l,[["render",h],["__file","rotate.html.vue"]]);export{_ as default};
