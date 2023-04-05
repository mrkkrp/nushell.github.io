import{_ as n,p as o,q as r,Q as a,t,v as s,a1 as i}from"./framework-344bb0e4.js";const c={},p={id:"frontmatter-title-for-bytes",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-bytes","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; bytes build ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: list of bytes</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Builds binary data from 0x[01 02], 0x[03], 0x[04]</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> bytes build 0x<span class="token punctuation">[</span>01 02<span class="token punctuation">]</span> 0x<span class="token punctuation">[</span>03<span class="token punctuation">]</span> 0x<span class="token punctuation">[</span>04<span class="token punctuation">]</span>
Length: <span class="token number">4</span> <span class="token punctuation">(</span>0x4<span class="token punctuation">)</span> bytes <span class="token operator">|</span> printable whitespace ascii_other non_ascii
00000000:   01 02 03 04                                          ••••

</code></pre></div>`,7);function h(e,b){return o(),r("div",null,[a("h1",p,[l,t(),a("code",null,s(e.$frontmatter.title),1),t(" for bytes")]),a("div",d,s(e.$frontmatter.bytes),1),u])}const f=n(c,[["render",h],["__file","bytes_build.html.vue"]]);export{f as default};