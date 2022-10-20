import{_ as n,o,c as r,a as e,t as a,d as s,e as i}from"./app.f650a2d3.js";const d={},c={id:"frontmatter-title-for-strings",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),h=s(),p=s(" for strings"),u={class:"command-title"},g=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; encode (encoding)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>encoding</code>: the text encoding to use</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>Multiple encodings are supported, here is an example of a few:
big5, euc-jp, euc-kr, gbk, iso-8859-1, cp1252, latin5

Note that since the Encoding Standard doesn&#39;t specify encoders for utf-16le and utf-16be, these are not yet supported.

For a more complete list of encodings please refer to the encoding_rs
documentation link at https://docs.rs/encoding_rs/0.8.28/encoding_rs/#statics
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Encode an UTF-8 string into Shift-JIS</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u8CA0\u3051\u308B\u3068\u77E5\u3063\u3066\u6226\u3046\u306E\u304C\u3001\u9065\u304B\u306B\u7F8E\u3057\u3044\u306E\u3060&quot;</span> <span class="token operator">|</span> encode shift-jis
</code></pre></div>`,9);function f(t,_){return o(),r("div",null,[e("h1",c,[l,h,e("code",null,a(t.$frontmatter.title),1),p]),e("div",u,a(t.$frontmatter.strings),1),g])}const x=n(d,[["render",f],["__file","encode.html.vue"]]);export{x as default};
