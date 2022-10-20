import{_ as t,o,c as p,a,t as n,d as e,e as r}from"./app.f650a2d3.js";const c={},i={id:"frontmatter-title-for-conversions",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-conversions","aria-hidden":"true"},"#",-1),d=e(),g=e(" for conversions"),u={class:"command-title"},h=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into int ...rest --radix --little-endian</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: column paths to convert to int (for table input)</li><li><code>--radix {number}</code>: radix of integer</li><li><code>--little-endian</code>: use little-endian byte decoding</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert string to integer in table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;-5&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1.5</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into int num
</code></pre></div><p>Convert string to integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;2&#39;</span> <span class="token operator">|</span> into int
</code></pre></div><p>Convert decimal to integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">5.9</span> <span class="token operator">|</span> into int
</code></pre></div><p>Convert decimal string to integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;5.9&#39;</span> <span class="token operator">|</span> into int
</code></pre></div><p>Convert file size to integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 4KB <span class="token operator">|</span> into int
</code></pre></div><p>Convert bool to integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>false, true<span class="token punctuation">]</span> <span class="token operator">|</span> into int
</code></pre></div><p>Convert date to integer (Unix timestamp)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">2022</span>-02-02 <span class="token operator">|</span> into int
</code></pre></div><p>Convert to integer from binary</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;1101&#39;</span> <span class="token operator">|</span> into int <span class="token parameter variable">-r</span> <span class="token number">2</span>
</code></pre></div><p>Convert to integer from hex</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;FF&#39;</span> <span class="token operator">|</span>  into int <span class="token parameter variable">-r</span> <span class="token number">16</span>
</code></pre></div><p>Convert octal string to integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;0o10132&#39;</span> <span class="token operator">|</span> into int
</code></pre></div><p>Convert 0 padded string to integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;0010132&#39;</span> <span class="token operator">|</span> into int
</code></pre></div><p>Convert 0 padded string to integer with radix</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;0010132&#39;</span> <span class="token operator">|</span> into int <span class="token parameter variable">-r</span> <span class="token number">8</span>
</code></pre></div>`,29);function k(s,v){return o(),p("div",null,[a("h1",i,[l,d,a("code",null,n(s.$frontmatter.title),1),g]),a("div",u,n(s.$frontmatter.conversions),1),h])}const m=t(c,[["render",k],["__file","into_int.html.vue"]]);export{m as default};
