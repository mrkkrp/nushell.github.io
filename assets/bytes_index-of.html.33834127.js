import{_ as t,o as p,c as o,a as n,t as a,d as e,e as c}from"./app.f650a2d3.js";const r={},l={id:"frontmatter-title-for-bytes",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#frontmatter-title-for-bytes","aria-hidden":"true"},"#",-1),i=e(),k=e(" for bytes"),d={class:"command-title"},b=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; bytes index-of (pattern) ...rest --all --end</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pattern</code>: the pattern to find index of</li><li><code>...rest</code>: optionally returns index of pattern in string by column paths</li><li><code>--all</code>: returns all matched index</li><li><code>--end</code>: search from the end of the binary</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns index of pattern in bytes</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  0x<span class="token punctuation">[</span><span class="token number">33</span> <span class="token number">44</span> <span class="token number">55</span> <span class="token number">10</span> 01 <span class="token number">13</span> <span class="token number">44</span> <span class="token number">55</span><span class="token punctuation">]</span> <span class="token operator">|</span> bytes index-of 0x<span class="token punctuation">[</span><span class="token number">44</span> <span class="token number">55</span><span class="token punctuation">]</span>
</code></pre></div><p>Returns index of pattern, search from end</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  0x<span class="token punctuation">[</span><span class="token number">33</span> <span class="token number">44</span> <span class="token number">55</span> <span class="token number">10</span> 01 <span class="token number">13</span> <span class="token number">44</span> <span class="token number">55</span><span class="token punctuation">]</span> <span class="token operator">|</span> bytes index-of <span class="token parameter variable">-e</span> 0x<span class="token punctuation">[</span><span class="token number">44</span> <span class="token number">55</span><span class="token punctuation">]</span>
</code></pre></div><p>Returns all matched index</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  0x<span class="token punctuation">[</span><span class="token number">33</span> <span class="token number">44</span> <span class="token number">55</span> <span class="token number">10</span> 01 <span class="token number">33</span> <span class="token number">44</span> <span class="token number">33</span> <span class="token number">44</span><span class="token punctuation">]</span> <span class="token operator">|</span> bytes index-of <span class="token parameter variable">-a</span> 0x<span class="token punctuation">[</span><span class="token number">33</span> <span class="token number">44</span><span class="token punctuation">]</span>
</code></pre></div><p>Returns all matched index, searching from end</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  0x<span class="token punctuation">[</span><span class="token number">33</span> <span class="token number">44</span> <span class="token number">55</span> <span class="token number">10</span> 01 <span class="token number">33</span> <span class="token number">44</span> <span class="token number">33</span> <span class="token number">44</span><span class="token punctuation">]</span> <span class="token operator">|</span> bytes index-of <span class="token parameter variable">-a</span> <span class="token parameter variable">-e</span> 0x<span class="token punctuation">[</span><span class="token number">33</span> <span class="token number">44</span><span class="token punctuation">]</span>
</code></pre></div><p>Returns index of pattern for specific column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB ColC<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>0x<span class="token punctuation">[</span><span class="token number">11</span> <span class="token number">12</span> <span class="token number">13</span><span class="token punctuation">]</span> 0x<span class="token punctuation">[</span><span class="token number">14</span> <span class="token number">15</span> <span class="token number">16</span><span class="token punctuation">]</span> 0x<span class="token punctuation">[</span><span class="token number">17</span> <span class="token number">18</span> <span class="token number">19</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> bytes index-of 0x<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span> ColA ColC
</code></pre></div>`,15);function m(s,h){return p(),o("div",null,[n("h1",l,[u,i,n("code",null,a(s.$frontmatter.title),1),k]),n("div",d,a(s.$frontmatter.bytes),1),b])}const f=t(r,[["render",m],["__file","bytes_index-of.html.vue"]]);export{f as default};
