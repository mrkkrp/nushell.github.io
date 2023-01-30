import{_ as r,z as n,A as l,X as a,C as s,D as t,a6 as c}from"./framework.3d018c9f.js";const i={},o={id:"frontmatter-title-for-default",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title-for-default","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str trim ...rest --char --left --right --all --both --format</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: For a data structure input, trim strings at the given cell paths</li><li><code>--char {string}</code>: character to trim (default: whitespace)</li><li><code>--left</code>: trims characters only from the beginning of the string (default: whitespace)</li><li><code>--right</code>: trims characters only from the end of the string (default: whitespace)</li><li><code>--all</code>: trims all characters from both sides of the string <em>and</em> in the middle (default: whitespace)</li><li><code>--both</code>: trims all characters from left and right side of the string (default: whitespace)</li><li><code>--format</code>: trims spaces replacing multiple characters with singles in the middle (default: whitespace)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Trim whitespace</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Nu shell &#39;</span> <span class="token operator">|</span> str trim
</code></pre></div><p>Trim a specific character</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;=== Nu shell ===&#39;</span> <span class="token operator">|</span> str trim <span class="token parameter variable">-c</span> <span class="token string">&#39;=&#39;</span> <span class="token operator">|</span> str trim
</code></pre></div><p>Trim all characters</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39; Nu   shell &#39;</span> <span class="token operator">|</span> str trim <span class="token parameter variable">-a</span>
</code></pre></div><p>Trim whitespace from the beginning of string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39; Nu shell &#39;</span> <span class="token operator">|</span> str trim <span class="token parameter variable">-l</span>
</code></pre></div><p>Trim a specific character</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;=== Nu shell ===&#39;</span> <span class="token operator">|</span> str trim <span class="token parameter variable">-c</span> <span class="token string">&#39;=&#39;</span>
</code></pre></div><p>Trim whitespace from the end of string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39; Nu shell &#39;</span> <span class="token operator">|</span> str trim <span class="token parameter variable">-r</span>
</code></pre></div><p>Trim a specific character</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;=== Nu shell ===&#39;</span> <span class="token operator">|</span> str trim <span class="token parameter variable">-r</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;=&#39;</span>
</code></pre></div>`,19);function g(e,m){return n(),l("div",null,[a("h1",o,[p,s(),a("code",null,t(e.$frontmatter.title),1),s(" for default")]),a("div",d,t(e.$frontmatter.default),1),h])}const f=r(i,[["render",g],["__file","str_trim.html.vue"]]);export{f as default};