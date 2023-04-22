import{_ as s,p as o,q as n,Q as e,t,v as r,a1 as c}from"./framework-344bb0e4.js";const d={},i={id:"frontmatter-title-for-formats",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),m={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from url </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert url encoded string into a record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;bread=baguette&amp;cheese=comt%C3%A9&amp;meat=ham&amp;fat=butter&#39;</span> <span class="token operator">|</span> from url
╭────────┬──────────╮
│ bread  │ baguette │
│ cheese │ comté    │
│ meat   │ ham      │
│ fat    │ butter   │
╰────────┴──────────╯
</code></pre></div>`,5);function f(a,p){return o(),n("div",null,[e("h1",i,[l,t(),e("code",null,r(a.$frontmatter.title),1),t(" for formats")]),e("div",m,r(a.$frontmatter.formats),1),h])}const _=s(d,[["render",f],["__file","from_url.html.vue"]]);export{_ as default};