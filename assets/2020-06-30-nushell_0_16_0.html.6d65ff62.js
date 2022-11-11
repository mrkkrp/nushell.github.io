import{_ as s,r,o as i,c as d,a as e,b as a,d as t,e as n}from"./app.c7ac2154.js";const l="/assets/0_16_0_prompt_3.0c3ae97a.png",h="/assets/0_16_0_prompt_4.fb5fab2d.png",c="/assets/0_16_0_before_table.2e322a57.png",u="/assets/0_16_0_after_table.19cfeea9.png",p="/assets/0_16_0_rendering_time.78191f1a.png",m={},f=e("h1",{id:"nushell-0-16-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-16-0","aria-hidden":"true"},"#"),t(" Nushell 0.16.0")],-1),g=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),b=e("p",null,"Today, we're releasing 0.16 of Nu",-1),_=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),w=t("Nu 0.16.0 is available as "),y={href:"https://github.com/nushell/nushell/releases/tag/0.16.0",target:"_blank",rel:"noopener noreferrer"},v=t("pre-built binaries"),x=t(" or from "),k={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},q=t("crates.io"),j=t(". If you have Rust installed you can install it using "),$=e("code",null,"cargo install nu",-1),N=t("."),W=n('<p>If you want more goodies, you can install <code>cargo install nu --features=stable</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="new-automated-release-binaries-charlespierce-fdncred-jonathandturner" tabindex="-1"><a class="header-anchor" href="#new-automated-release-binaries-charlespierce-fdncred-jonathandturner" aria-hidden="true">#</a> New automated release binaries (charlespierce, fdncred, jonathandturner)</h2><p>Up to this point, we&#39;ve hand-rolled all the binary releases. The process has been time-consuming and error-prone. Starting with 0.16.0, we&#39;ll be releasing using the GitHub release automation. The first benefits you&#39;ll see is that we&#39;ve also added a wix-based installer for Windows users. The second, perhaps harder to see, benefit is a more relaxed release process that&#39;s easier on the project maintainers \u{1F603}</p><p>Please note: as part of this, we took the opportunity to also align the directory structure across platforms. Apologies in advance for any inconvenience this might cause.</p><h2 id="new-textview-fdncred" tabindex="-1"><a class="header-anchor" href="#new-textview-fdncred" aria-hidden="true">#</a> New textview (fdncred)</h2>',7),T=t("We've had a few requests for an improved text viewing experience, so with 0.16.0 we're trying out a new viewer based on the "),I={href:"https://crates.io/crates/bat",target:"_blank",rel:"noopener noreferrer"},C=t("bat"),L=t(" crate. We also support quite a lot of "),z={href:"https://github.com/nushell/nushell/pull/2010",target:"_blank",rel:"noopener noreferrer"},E=t("configuration settings"),A=t(" for this new text viewer."),S=n('<h2 id="new-commands" tabindex="-1"><a class="header-anchor" href="#new-commands" aria-hidden="true">#</a> New commands</h2><h3 id="let-s-get-random-josephtlyons" tabindex="-1"><a class="header-anchor" href="#let-s-get-random-josephtlyons" aria-hidden="true">#</a> Let&#39;s get <code>random</code> (JosephTLyons)</h3><p>We have a new top-level command: <code>random</code>. To start, there are three sub-commands:</p><ul><li><code>random uuid</code> - generate random UUIDs</li><li><code>random bool</code> - a random &quot;coin flip&quot; with optional bias</li><li><code>random dice</code> - roll a single or a set of dice, optionally setting the number of sides and number of dices</li></ul><h3 id="more-math-josephtlyons-arashout-andrasio-amousa11" tabindex="-1"><a class="header-anchor" href="#more-math-josephtlyons-arashout-andrasio-amousa11" aria-hidden="true">#</a> More <code>math</code> (JosephTLyons, arashout, andrasio, amousa11)</h3><p>We&#39;ve consolidated and added to our math operations. Now available as part of the 0.16.0 release:</p><ul><li><code>math avg</code> - averages a list of numbers</li><li><code>math sum</code> - totals a list of numbers</li><li><code>math mode</code> - gets the mode of a list of numbers</li><li><code>math median</code> - gets the median of a list of numbers</li><li><code>math min</code> - gets the minimum value of a list of numbers</li><li><code>math max</code> - gets the maximum value of a list of numbers</li></ul><h3 id="other-commands" tabindex="-1"><a class="header-anchor" href="#other-commands" aria-hidden="true">#</a> Other commands</h3>',8),H={href:"https://github.com/nushell/nushell/pull/1992",target:"_blank",rel:"noopener noreferrer"},D=e("code",null,"every",-1),F=t(" - lets you skip every n-rows (kubouch)"),J=e("li",null,[e("code",null,"ansi"),t(" - lets you output ANSI color codes to color your strings (jonathandturner, fdncred)")],-1),O=e("li",null,[e("code",null,"char"),t(" - makes it possible to output newlines and tabs (jonathandturner)")],-1),R=e("li",null,[e("code",null,"do"),t(" - runs a block to completion, optionally ignoring errors (jonathandturner)")],-1),U=n(`<h2 id="custom-prompts-jonathandturner" tabindex="-1"><a class="header-anchor" href="#custom-prompts-jonathandturner" aria-hidden="true">#</a> Custom prompts (jonathandturner)</h2><p>You can now run a pipeline which returns a string, or list of strings, that is used to create a custom prompt. To do so, set the pipeline you want to use in the config for the <code>prompt</code> setting.</p><p>A simple example:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config --set [prompt &quot;echo &#39;&gt; &#39;&quot;]
</code></pre></div><p>We&#39;ve also added a new <code>ansi</code> command to let you change the color. Let&#39;s use it to change the prompt to blue:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config --set [prompt &quot;echo $(ansi blue) &#39;&gt; &#39;&quot;]
</code></pre></div><p>You can make the prompt even fancier. For example, this prompt prints the current directory, git branch, and current date and time:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config --set [prompt &#39;echo [ $(ansi green) $(pwd) $(ansi reset) $(do -i {git rev-parse --abbrev-ref HEAD } | trim | echo [ &quot;(&quot; $(ansi blue) $it $(ansi reset) &quot;)&quot; ] | str join) $(char newline) $(ansi cyan) $(date --format &quot;%d/%m/%Y %H:%M:%S&quot;).formatted $(ansi reset) &quot;&gt; &quot; ]&#39;]
</code></pre></div><p><img src="`+l+`" alt="image of full prompt"></p><p><em>Example of full prompt</em></p><p>Or update your prompt to show an abbreviated path:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config --set [prompt &#39;echo [ $(ansi green) $(pwd | split row &quot;/&quot; | first $(pwd | split row &quot;/&quot; | count | = $it - 1 ) | each { str substring &quot;0,1&quot; | format &quot;{$it}/&quot; } | append $(pwd | split row &quot;/&quot; | last ) | str join) $(do -i { git rev-parse --abbrev-ref HEAD | trim | echo $(ansi reset) &quot;(&quot; $(ansi blue) $it $(ansi reset) &quot;)&quot; | str join }) $(ansi reset) &quot;&gt; &quot;]&#39;]
</code></pre></div><p>(note: the above assumes Unix-based systems, so on Windows use &quot;&quot; as the path separator))</p><p><img src="`+h+'" alt="image of abbreviated prompt"></p><p><em>Example of abbreviated prompt</em></p><h2 id="rfc-process-jzaefferer" tabindex="-1"><a class="header-anchor" href="#rfc-process-jzaefferer" aria-hidden="true">#</a> RFC process (jzaefferer)</h2>',16),V=t("We now have an "),B={href:"https://github.com/nushell/rfcs",target:"_blank",rel:"noopener noreferrer"},Y=t("RFC process"),G=t(" if you want to propose new features and breaking changes to Nu. Come let us know what you think and share your vision with us."),M=n(`<h2 id="starship-becomes-optional-fdncred" tabindex="-1"><a class="header-anchor" href="#starship-becomes-optional-fdncred" aria-hidden="true">#</a> Starship becomes optional (fdncred)</h2><p>We&#39;ve made enabling starship a configuration option, rather than always being on. This allows you to opt-in, if you&#39;d like the starship experience, but removes the requirement that you have to know to build without starship if you&#39;d rather not have it (which may not be possible if you&#39;re using binary releases).</p><p>To enable starship, set the <code>use_starship</code> setting:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config --set [use_starship $true]
</code></pre></div><h2 id="new-table-drawing-jonathandturner" tabindex="-1"><a class="header-anchor" href="#new-table-drawing-jonathandturner" aria-hidden="true">#</a> New table drawing (jonathandturner)</h2><p>With 0.16.0, we now use a new table drawing algorithm. Here&#39;s the before and after for comparison:</p><p><img src="`+c+'" alt="image of a table before"></p><p><em>Table drawn with 0.15.0</em></p><p><img src="'+u+'" alt="image of a table before"></p><p><em>Table drawn with 0.16.0</em></p><p>If you&#39;re struggling to see much difference, that&#39;s a good thing! Where you&#39;ll really see the difference is in the time it takes to draw these tables:</p><p><img src="'+p+'" alt="image of a table before"></p><p><em>0.16.0 renders tables 40% faster than 0.15.0</em></p><h2 id="simplified-chinese-nu-book-zombie110year" tabindex="-1"><a class="header-anchor" href="#simplified-chinese-nu-book-zombie110year" aria-hidden="true">#</a> Simplified Chinese Nu book (zombie110year)</h2><p>Over the past few weeks we&#39;ve seen steady progress on the Simplified Chinese translation of the Nu book. With this release, another set of translated chapters were added.</p><h2 id="command-improvements" tabindex="-1"><a class="header-anchor" href="#command-improvements" aria-hidden="true">#</a> Command improvements</h2><ul><li><code>to toml</code> now properly disallows incorrect top-level values (arashout)</li><li><code>mkdir</code> can now optionally show the names of directories created (utam0k)</li><li><code>uniq</code> can now optional provide the counts of each value in the result (siedentop)</li><li><code>cal</code> will now allow you to configure the start day of the week (JosephTLyons)</li><li>Division by zero is now an error that&#39;s caught and shown to the user (bailey-layzer)</li><li><code>date</code> can now output formatted datetime strings (fdncred)</li><li>Docs added for autoview, touch, and pwd (orientnab)</li><li>New <code>str join</code> allows you to join a list of strings into a single string (jonathandturner)</li><li>Wix build support (fdncred)</li><li>Fixes for running external commands using the new Windows links feature (fdncred)</li><li><code>open</code> can now optionally take an encoding (fdncred)</li><li>The <code>config</code> settings file can now be readonly (jonathandturner)</li></ul><h2 id="internal-improvements" tabindex="-1"><a class="header-anchor" href="#internal-improvements" aria-hidden="true">#</a> Internal improvements</h2><ul><li>Replaced use of <code>async_stream</code> macro with creating async streams directly (JosephTLyons, jonathandturner)</li><li>Fixes to the <code>ps</code> process time algorithm (svartalf)</li><li>Interruptible stream API is now public (daschl)</li><li>We now test Windows drive changing during our CI tests (HiranmayaGundu)</li><li>Errors are now bubbled up earlier when possible (jonathandturner)</li><li>Config loading no longer panics if it doesn&#39;t succeed (jonathandturner)</li><li>Clean up and formatting of our docs (JosephTLyons)</li><li>Optimization work to not clone in some places (utam0k)</li></ul><h1 id="looking-ahead" tabindex="-1"><a class="header-anchor" href="#looking-ahead" aria-hidden="true">#</a> Looking ahead</h1><p>We are looking into a few areas for the next release: further improving our per-directory environments, improving compile times, continuing to do code cleanup and pay down tech debt, and possibly more.</p>',21);function P(K,Q){const o=r("ExternalLinkIcon");return i(),d("div",null,[f,g,b,_,e("p",null,[w,e("a",y,[v,a(o)]),x,e("a",k,[q,a(o)]),j,$,N]),W,e("p",null,[T,e("a",I,[C,a(o)]),L,e("a",z,[E,a(o)]),A]),S,e("ul",null,[e("li",null,[e("a",H,[D,a(o)]),F]),J,O,R]),U,e("p",null,[V,e("a",B,[Y,a(o)]),G]),M])}const Z=s(m,[["render",P],["__file","2020-06-30-nushell_0_16_0.html.vue"]]);export{Z as default};
