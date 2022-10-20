import{_ as o,o as r,c as i,a as e,t,d as s,e as n}from"./app.f650a2d3.js";const c={},d={id:"frontmatter-title-for-filesystem",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-filesystem","aria-hidden":"true"},"#",-1),h=s(),m=s(" for filesystem"),p={class:"command-title"},f=n(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; mv (source) (destination) --verbose --interactive</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>source</code>: the location to move files/directories from</li><li><code>destination</code>: the location to move files/directories to</li><li><code>--verbose</code>: make mv to be verbose, showing files been moved.</li><li><code>--interactive</code>: ask user to confirm action</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Rename a file</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mv</span> before.txt after.txt
</code></pre></div><p>Move a file into a directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mv</span> test.txt my/subdirectory
</code></pre></div><p>Move many files into a directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mv</span> *.txt my/subdirectory
</code></pre></div>`,11);function u(a,v){return r(),i("div",null,[e("h1",d,[l,h,e("code",null,t(a.$frontmatter.title),1),m]),e("div",p,t(a.$frontmatter.filesystem),1),f])}const g=o(c,[["render",u],["__file","mv.html.vue"]]);export{g as default};
