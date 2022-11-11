import{_ as o,o as t,c as r,a,t as s,d as n,e as p}from"./app.c7ac2154.js";const l={},c={id:"frontmatter-title-for-core",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),d=n(),u=n(" for core"),h={class:"command-title"},m=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; overlay use (name) (as) --prefix</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>name</code>: Module name to use overlay for</li><li><code>as</code>: as keyword followed by a new name</li><li><code>--prefix</code>: Prepend module name to the imported commands and aliases</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create an overlay from a module</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module spam <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> def foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;foo&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
    overlay use spam
    foo
</code></pre></div><p>Create an overlay from a module and rename it</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module spam <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> def foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;foo&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
    overlay use spam as spam_new
    foo
</code></pre></div><p>Create an overlay with a prefix</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;export def foo { &quot;foo&quot; }&#39;</span>
    overlay use <span class="token parameter variable">--prefix</span> spam
    spam foo
</code></pre></div><p>Create an overlay from a file</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;export-env { let-env FOO = &quot;foo&quot; }&#39;</span> <span class="token operator">|</span> save spam.nu
    overlay use spam.nu
    <span class="token variable">$env</span>.FOO
</code></pre></div>`,15);function f(e,g){return t(),r("div",null,[a("h1",c,[i,d,a("code",null,s(e.$frontmatter.title),1),u]),a("div",h,s(e.$frontmatter.core),1),m])}const v=o(l,[["render",f],["__file","overlay_use.html.vue"]]);export{v as default};
