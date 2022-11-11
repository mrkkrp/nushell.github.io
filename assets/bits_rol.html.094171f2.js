import{_ as n,o,c as r,a as e,t as s,d as t,e as i}from"./app.c7ac2154.js";const c={},l={id:"frontmatter-title-for-bits",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title-for-bits","aria-hidden":"true"},"#",-1),p=t(),h=t(" for bits"),u={class:"command-title"},b=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; bits rol (bits) --signed --number-bytes</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>bits</code>: number of bits to rotate left</li><li><code>--signed</code>: always treat input number as a signed number</li><li><code>--number-bytes {string}</code>: the word size in number of bytes, it can be 1, 2, 4, 8, auto, default value <code>8</code></li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Rotate left a number with 2 bits</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">17</span> <span class="token operator">|</span> bits rol <span class="token number">2</span>
</code></pre></div><p>Rotate left a list of numbers with 2 bits</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">3</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> bits rol <span class="token number">2</span>
</code></pre></div>`,9);function m(a,f){return o(),r("div",null,[e("h1",l,[d,p,e("code",null,s(a.$frontmatter.title),1),h]),e("div",u,s(a.$frontmatter.bits),1),b])}const g=n(c,[["render",m],["__file","bits_rol.html.vue"]]);export{g as default};
