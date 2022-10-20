import{_ as n,o,c as r,a as e,t as s,d as t,e as c}from"./app.f650a2d3.js";const i={},p={id:"frontmatter-title-for-filesystem",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-filesystem","aria-hidden":"true"},"#",-1),d=t(),h=t(" for filesystem"),f={class:"command-title"},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; save (filename) --raw --append</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>filename</code>: the filename to use</li><li><code>--raw</code>: save file as raw binary</li><li><code>--append</code>: append input to the end of the file</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Save a string to foo.txt in the current directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;save me&#39;</span> <span class="token operator">|</span> save foo.txt
</code></pre></div><p>Append a string to the end of foo.txt</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;append me&#39;</span> <span class="token operator">|</span> save <span class="token parameter variable">--append</span> foo.txt
</code></pre></div><p>Save a record to foo.json in the current directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span> a: <span class="token number">1</span>, b: <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token operator">|</span> save foo.json
</code></pre></div>`,11);function m(a,g){return o(),r("div",null,[e("h1",p,[l,d,e("code",null,s(a.$frontmatter.title),1),h]),e("div",f,s(a.$frontmatter.filesystem),1),u])}const v=n(i,[["render",m],["__file","save.html.vue"]]);export{v as default};
