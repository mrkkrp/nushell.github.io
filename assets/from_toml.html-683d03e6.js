import{_ as n,p as o,q as r,Q as a,t as s,v as t,a1 as c}from"./framework-344bb0e4.js";const l={},p={id:"frontmatter-title-for-formats",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),i={class:"command-title"},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from toml </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts toml formatted string to record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;a = 1&#39;</span> <span class="token operator">|</span> from toml
╭───┬───╮
│ a │ <span class="token number">1</span> │
╰───┴───╯
</code></pre></div><p>Converts toml formatted string to record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;a = 1
b = [1, 2]&#39;</span> <span class="token operator">|</span> from toml
╭───┬───────────╮
│ a │ <span class="token number">1</span>         │
│   │ ╭───┬───╮ │
│ b │ │ <span class="token number">0</span> │ <span class="token number">1</span> │ │
│   │ │ <span class="token number">1</span> │ <span class="token number">2</span> │ │
│   │ ╰───┴───╯ │
╰───┴───────────╯
</code></pre></div>`,7);function h(e,f){return o(),r("div",null,[a("h1",p,[d,s(),a("code",null,t(e.$frontmatter.title),1),s(" for formats")]),a("div",i,t(e.$frontmatter.formats),1),m])}const _=n(l,[["render",h],["__file","from_toml.html.vue"]]);export{_ as default};
