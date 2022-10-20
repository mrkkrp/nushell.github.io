import{_ as r,r as s,o as n,c as i,a as e,b as o,d as a,e as h}from"./app.f650a2d3.js";const l="/assets/0_4_0_new_colors.3e91040d.png",d="/assets/0_4_0_streaming_table.0bd03622.gif",c={},u=e("h1",{id:"nushell-0-4-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-4-0","aria-hidden":"true"},"#"),a(" Nushell 0.4.0")],-1),p=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),m=a("Today we're happy to announce the 0.4.0 release of Nushell. The "),f={href:"https://github.com/nushell/nushell/releases/tag/0.4.0",target:"_blank",rel:"noopener noreferrer"},b=a("0.4.0 release"),g=a(" marks a continually maturing shell that is now starting to show signs of stability. And, of course, a few fun features along the way."),w=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),a(" Where to get it")],-1),y=a("Nu 0.4.0 is available as "),_={href:"https://github.com/nushell/nushell/releases/tag/0.4.0",target:"_blank",rel:"noopener noreferrer"},k=a("pre-built binaries"),v=a(" or from "),x={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},N=a("crates.io"),z=a(". If you have Rust installed you can install it using "),j=e("code",null,"cargo +beta install nu",-1),W=a(" (or if you want all the features "),T=e("code",null,"cargo +beta install nu --all-features",-1),B=a(")."),C=h('<h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s new</h1><h2 id="new-colors-wycats" tabindex="-1"><a class="header-anchor" href="#new-colors-wycats" aria-hidden="true">#</a> New Colors (wycats)</h2><p><img src="'+l+'" alt="Example of nushell"> New colors!</p><p>With 0.4.0, we&#39;re adding some new colors to show off different types of the command, where errors might be happening, and if the command is internal or external. The coloring is just the tip of the iceberg, as it were, and builds from a reworking of the parser to make it more accurate, more stable, and more feature-complete.</p><h2 id="streaming-table-jonathandturner" tabindex="-1"><a class="header-anchor" href="#streaming-table-jonathandturner" aria-hidden="true">#</a> Streaming table (jonathandturner)</h2><p><img src="'+d+'" alt="Animation of a long table streaming out"> Streaming tables</p><p>Up to this point, we&#39;ve taken a few shortcuts with how streams worked in Nushell. We knew that a table, in theory, was a stream of rows. In practice, though, this wasn&#39;t the case as the code has lots of assumptions about how tables worked.</p><p>With the 0.4.0, we&#39;re taking a big step in the direction of full support for streams. You&#39;ll see that now data will start being printed as it becomes available, with tables printing pages of 50 rows at a time (by default). This allows you to get deep listings of files (eg using <code>ls **</code>), work with streams from external sources, and more.</p><h2 id="better-ctrl-c-support-jonathandturner-landaire" tabindex="-1"><a class="header-anchor" href="#better-ctrl-c-support-jonathandturner-landaire" aria-hidden="true">#</a> Better ctrl-c support (jonathandturner, landaire)</h2><p>As part of having streams of tables, it&#39;s always helpful to be able to say &quot;stop!&quot; when you need to. With 0.4.0, using ctrl-c to stop the output should be a lot more responsive and will take you back to the prompt.</p><h2 id="textview-gets-vi-keys-jonnywalker81" tabindex="-1"><a class="header-anchor" href="#textview-gets-vi-keys-jonnywalker81" aria-hidden="true">#</a> Textview gets VI keys (JonnyWalker81)</h2><p>The built-in text viewer now lets you use vi keys for navigation thanks to JonnyWalker81&#39;s work.</p><h2 id="onto-the-beta-compiler-est31" tabindex="-1"><a class="header-anchor" href="#onto-the-beta-compiler-est31" aria-hidden="true">#</a> Onto the Beta compiler (est31)</h2><p>For those of you wondering if and when Nu was going to be usable on stable Rust, you need but wait just a little longer. Contributer est31 has been hard at work at moving Nu onto stable Rust and has now successfully moved Nu off of nightly and onto beta. As beta matures and becomes the next release of Rust, we&#39;ll be able to move Nu onto stable. This should help people who are working to distribute Nu on various distributions.</p><h2 id="brazilian-portuguese-book-marcelocg" tabindex="-1"><a class="header-anchor" href="#brazilian-portuguese-book-marcelocg" aria-hidden="true">#</a> Brazilian Portuguese book (marcelocg)</h2><p>Contributor marcelocg surprised us with a translation of the Nu book into Brazillian Portuguese. Obrigado, Marcelo!</p><h2 id="new-commands" tabindex="-1"><a class="header-anchor" href="#new-commands" aria-hidden="true">#</a> New commands</h2><h3 id="from-ssv-t-hart" tabindex="-1"><a class="header-anchor" href="#from-ssv-t-hart" aria-hidden="true">#</a> from-ssv (t-hart)</h3><p>To follow along with our <code>from-csv</code> (comma-separated-values) and <code>from-tsv</code> (tab-separated-values), we now have a new way of handle importing content from commands that output their own tables: <code>from-ssv</code>. Like its siblings, it looks for values separated by a separator, using the spaces to show where the breaks between cells should be.</p><h3 id="match-rnxpyke" tabindex="-1"><a class="header-anchor" href="#match-rnxpyke" aria-hidden="true">#</a> match (rnxpyke)</h3><p>We&#39;re continuing to evolve our support for matching string data. Recently, we began experimenting with a <code>match</code> command that can find matches in strings for you. We plan to continue experimenting and exploring what&#39;s possible in this space in the future.</p><h2 id="lots-of-new-documentation-sdfnz-twe4ked-chhetripradeep-mfarberbrodsky-cristicismas-charles-schleich-coolshaurya-notryanb-pema99-gilesv-yahsinhuangtw-jesterornot-nalshihabi-marcelocg-sorrell-pizzafox-iggy14750-drsensor-mlbright-bradybromley-andrasio-piotrek-szczygiel" tabindex="-1"><a class="header-anchor" href="#lots-of-new-documentation-sdfnz-twe4ked-chhetripradeep-mfarberbrodsky-cristicismas-charles-schleich-coolshaurya-notryanb-pema99-gilesv-yahsinhuangtw-jesterornot-nalshihabi-marcelocg-sorrell-pizzafox-iggy14750-drsensor-mlbright-bradybromley-andrasio-piotrek-szczygiel" aria-hidden="true">#</a> Lots of new documentation (sdfnz, twe4ked, chhetripradeep, mfarberbrodsky, cristicismas, Charles-Schleich, coolshaurya, notryanb, pema99, gilesv, yahsinhuangtw, JesterOrNot, nalshihabi, marcelocg, sorrell, pizzafox, iggy14750, DrSensor, mlbright, BradyBromley, andrasio, piotrek-szczygiel)</h2><p>Happy hacktoberfest! Lots of people wanted to jump in and help document all of our commands, help fix docs that are already there, and generally give things a bit of polish. Much appreciated everyone who came by and contributed.</p><h2 id="tons-of-stability-fixes-thegedge-jonathandturner-wycats-jonnywalker81-vsoch-pka" tabindex="-1"><a class="header-anchor" href="#tons-of-stability-fixes-thegedge-jonathandturner-wycats-jonnywalker81-vsoch-pka" aria-hidden="true">#</a> Tons of stability fixes (thegedge, jonathandturner, wycats, JonnyWalker81, vsoch, pka)</h2><p>As always, there were a bunch of stability and correctness both in Nu and in the CI that support Nu&#39;s development</p><h1 id="looking-ahead" tabindex="-1"><a class="header-anchor" href="#looking-ahead" aria-hidden="true">#</a> Looking ahead</h1><p>We&#39;ll continuing filling out the features that will let folks use Nu as their everyday shell. Coming up are better support for the environment, path, and for command aliases.</p>',27);function I(L,A){const t=s("ExternalLinkIcon");return n(),i("div",null,[u,p,e("p",null,[m,e("a",f,[b,o(t)]),g]),w,e("p",null,[y,e("a",_,[k,o(t)]),v,e("a",x,[N,o(t)]),z,j,W,T,B]),C])}const S=r(c,[["render",I],["__file","2019-10-15-nushell-0_4_0.html.vue"]]);export{S as default};
