import{_ as n,o,c as r,a,t as e,d as s,e as d}from"./app.c7ac2154.js";const c={},i={id:"frontmatter-title-for-dataframe",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),h=s(),p=s(" for dataframe"),u={class:"command-title"},m=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; as-date (format) --not-exact</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>format</code>: formatting date string</li><li><code>--not-exact</code>: the format string may be contained in the date (e.g. foo-2021-01-01-bar could match 2021-01-01)</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>Format example:
        &quot;%Y-%m-%d&quot;    =&gt; 2021-12-31
        &quot;%d-%m-%Y&quot;    =&gt; 31-12-2021
        &quot;%Y%m%d&quot;      =&gt; 2021319 (2021-03-19)
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts string to date</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;2021-12-30&quot;</span> <span class="token string">&quot;2021-12-31&quot;</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> as-datetime <span class="token string">&quot;%Y-%m-%d&quot;</span>
</code></pre></div>`,9);function f(t,g){return o(),r("div",null,[a("h1",i,[l,h,a("code",null,e(t.$frontmatter.title),1),p]),a("div",u,e(t.$frontmatter.dataframe),1),m])}const x=n(c,[["render",f],["__file","as-date.html.vue"]]);export{x as default};
