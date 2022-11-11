import{_ as o,o as n,c as r,a as e,t,d as s,e as i}from"./app.c7ac2154.js";const c={},d={id:"frontmatter-title-for-filesystem",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-filesystem","aria-hidden":"true"},"#",-1),p=s(),h=s(" for filesystem"),f={class:"command-title"},u=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; touch (filename) ...rest --reference --modified --access --no-create</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>filename</code>: the path of the file you want to create</li><li><code>...rest</code>: additional files to create</li><li><code>--reference {string}</code>: change the file or directory time to the time of the reference file/directory</li><li><code>--modified</code>: change the modification time of the file or directory. If no timestamp, date or reference file/directory is given, the current time is used</li><li><code>--access</code>: change the access time of the file or directory. If no timestamp, date or reference file/directory is given, the current time is used</li><li><code>--no-create</code>: do not create the file if it does not exist</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Creates &quot;fixture.json&quot;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">touch</span> fixture.json
</code></pre></div><p>Creates files a, b and c</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">touch</span> a b c
</code></pre></div><p>Changes the last modified time of &quot;fixture.json&quot; to today&#39;s date</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">touch</span> <span class="token parameter variable">-m</span> fixture.json
</code></pre></div><p>Changes the last modified time of files a, b and c to a date</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">touch</span> <span class="token parameter variable">-m</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;yesterday&quot;</span> a b c
</code></pre></div><p>Changes the last modified time of file d and e to &quot;fixture.json&quot;&#39;s last modified time</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">touch</span> <span class="token parameter variable">-m</span> <span class="token parameter variable">-r</span> fixture.json d e
</code></pre></div><p>Changes the last accessed time of &quot;fixture.json&quot; to a date</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">touch</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;August 24, 2019; 12:30:30&quot;</span> fixture.json
</code></pre></div>`,17);function m(a,g){return n(),r("div",null,[e("h1",d,[l,p,e("code",null,t(a.$frontmatter.title),1),h]),e("div",f,t(a.$frontmatter.filesystem),1),u])}const v=o(c,[["render",m],["__file","touch.html.vue"]]);export{v as default};
