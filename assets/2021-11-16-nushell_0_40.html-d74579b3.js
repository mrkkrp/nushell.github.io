import{_ as o,M as a,p as r,q as l,R as i,Q as e,t,N as s,a1 as d}from"./framework-344bb0e4.js";const c={},h=e("h1",{id:"nushell-0-40",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-40","aria-hidden":"true"},"#"),t(" Nushell 0.40")],-1),u=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),p=e("p",null,"Today, we're releasing 0.40 of Nu. This release is includes better table imports and much smaller release size.",-1),m=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),f={href:"https://github.com/nushell/nushell/releases/tag/0.40.0",target:"_blank",rel:"noopener noreferrer"},g={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"cargo install nu",-1),_=d(`<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="detecting-columns-jt" tabindex="-1"><a class="header-anchor" href="#detecting-columns-jt" aria-hidden="true">#</a> Detecting columns (jt)</h2><p>Nushell now supports a new command: <code>detect columns</code>. This command is intended as an easy way to handle tabular data that&#39;s written as text. Commands like <code>ps</code>, <code>ls -l</code>, <code>netstat</code>, <code>df</code>, and others commonly output their output as text. With <code>detect columns</code>, you can run the external command, and convert them into Nushell&#39;s tabular data format.</p><p>Let&#39;s look at an example:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; df
Filesystem     1K-blocks      Used Available Use% Mounted on
udev             8108824         0   8108824   0% /dev
tmpfs            1631284      2068   1629216   1% /run
/dev/nvme1n1p2 490691512 346066860 119629172  75% /
tmpfs            8156408    251332   7905076   4% /dev/shm
tmpfs               5120         4      5116   1% /run/lock
tmpfs            8156408         0   8156408   0% /sys/fs/cgroup
/dev/nvme0n1p1    508932    211684    297248  42% /boot/efi
tmpfs            1631280       128   1631152   1% /run/user/1000
/dev/nvme0n1p2 238810780 136867812  89742316  61% /media/jt/Data
</code></pre></div><p>The <code>df</code> command comes with most Unix-based systems and prints out a table of data for each of the devices on the system. Let&#39;s turn this into a table we can work with in Nushell:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; df | detect columns
───┬────────────────┬───────────┬───────────┬───────────┬──────┬────────────────┬────────────────
 # │   Filesystem   │ 1K-blocks │   Used    │ Available │ Use% │    Mounted     │       on
───┼────────────────┼───────────┼───────────┼───────────┼──────┼────────────────┼────────────────
 0 │ udev           │ 8108824   │ 0         │ 8108824   │ 0%   │ /dev           │
 1 │ tmpfs          │ 1631284   │ 2068      │ 1629216   │ 1%   │ /run           │
 2 │ /dev/nvme1n1p2 │ 490691512 │ 346067044 │ 119628988 │ 75%  │ /              │
 3 │ tmpfs          │ 8156408   │ 251332    │ 7905076   │ 4%   │ /dev/shm       │
 4 │ tmpfs          │ 5120      │ 4         │ 5116      │ 1%   │ /run/lock      │ /run/lock
 5 │ tmpfs          │ 8156408   │ 0         │ 8156408   │ 0%   │ /sys/fs/cgroup │ /sys/fs/cgroup
 6 │ /dev/nvme0n1p1 │ 508932    │ 211684    │ 297248    │ 42%  │ /boot/efi      │ /boot/efi
 7 │ tmpfs          │ 1631280   │ 128       │ 1631152   │ 1%   │ /run/user/1000 │ /run/user/1000
 8 │ /dev/nvme0n1p2 │ 238810780 │ 136867812 │ 89742316  │ 61%  │ /media/jt/Data │ /media/jt/Data
───┴────────────────┴───────────┴───────────┴───────────┴──────┴────────────────┴────────────────
</code></pre></div><p>Ahh, that&#39;s close to what we want in just one step. Let&#39;s go ahead and clean this up a little. First, let&#39;s drop that last column. &quot;Mounted on&quot; being two words confused the importer, but all the data is there, we just need to drop the last column.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; df | detect columns | drop column
───┬────────────────┬───────────┬───────────┬───────────┬──────┬────────────────
 # │   Filesystem   │ 1K-blocks │   Used    │ Available │ Use% │    Mounted
───┼────────────────┼───────────┼───────────┼───────────┼──────┼────────────────
 0 │ udev           │ 8108824   │ 0         │ 8108824   │ 0%   │ /dev
 1 │ tmpfs          │ 1631284   │ 2068      │ 1629216   │ 1%   │ /run
 2 │ /dev/nvme1n1p2 │ 490691512 │ 346067188 │ 119628844 │ 75%  │ /
 3 │ tmpfs          │ 8156408   │ 251332    │ 7905076   │ 4%   │ /dev/shm
 4 │ tmpfs          │ 5120      │ 4         │ 5116      │ 1%   │ /run/lock
 5 │ tmpfs          │ 8156408   │ 0         │ 8156408   │ 0%   │ /sys/fs/cgroup
 6 │ /dev/nvme0n1p1 │ 508932    │ 211684    │ 297248    │ 42%  │ /boot/efi
 7 │ tmpfs          │ 1631280   │ 128       │ 1631152   │ 1%   │ /run/user/1000
 8 │ /dev/nvme0n1p2 │ 238810780 │ 136867812 │ 89742316  │ 61%  │ /media/jt/Data
───┴────────────────┴───────────┴───────────┴───────────┴──────┴────────────────
</code></pre></div><p>Finally, it&#39;d be nice to be able to have real file sizes for the middle columns, so let&#39;s convert the numbers into Nushell&#39;s filesize type:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; df | detect columns | drop column | into filesize 1K-blocks Used Available
───┬────────────────┬───────────┬──────────┬───────────┬──────┬────────────────
 # │   Filesystem   │ 1K-blocks │   Used   │ Available │ Use% │    Mounted
───┼────────────────┼───────────┼──────────┼───────────┼──────┼────────────────
 0 │ udev           │    8.1 MB │      0 B │    8.1 MB │ 0%   │ /dev
 1 │ tmpfs          │    1.6 MB │   2.1 KB │    1.6 MB │ 1%   │ /run
 2 │ /dev/nvme1n1p2 │  490.7 MB │ 346.1 MB │  119.6 MB │ 75%  │ /
 3 │ tmpfs          │    8.2 MB │ 251.3 KB │    7.9 MB │ 4%   │ /dev/shm
 4 │ tmpfs          │    5.1 KB │      4 B │    5.1 KB │ 1%   │ /run/lock
 5 │ tmpfs          │    8.2 MB │      0 B │    8.2 MB │ 0%   │ /sys/fs/cgroup
 6 │ /dev/nvme0n1p1 │  508.9 KB │ 211.7 KB │  297.2 KB │ 42%  │ /boot/efi
 7 │ tmpfs          │    1.6 MB │    128 B │    1.6 MB │ 1%   │ /run/user/1000
 8 │ /dev/nvme0n1p2 │  238.8 MB │ 136.9 MB │   89.7 MB │ 61%  │ /media/jt/Data
───┴────────────────┴───────────┴──────────┴───────────┴──────┴────────────────
</code></pre></div><p>In just a couple steps, we&#39;ve converted the text-based table into tabular data we can use just like any other Nushell command. To make this easy to do in the future, we can alias <code>df</code> to do these steps:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; alias df = (^df | detect columns | drop column | into filesize 1K-blocks Used Available)
</code></pre></div><h2 id="smaller-binaries-fdncred" tabindex="-1"><a class="header-anchor" href="#smaller-binaries-fdncred" aria-hidden="true">#</a> Smaller binaries (fdncred)</h2><p>The size of the Nushell release binaries has come up as regular feedback from Nushell users. &quot;Why does the shell have to be so big?&quot; And we&#39;ve heard you!</p><p>Today&#39;s release now uses a combination of <code>strip</code> and <code>upx</code> to bring considerable savings in binary size. The Linux release (plugins incl.) has dropped from 475mb to 58mb(!!), making it <strong>88% smaller</strong>. We&#39;re seeing similar improvements in the sizes of the macOS and Windows releases.</p><h2 id="additional-fixes" tabindex="-1"><a class="header-anchor" href="#additional-fixes" aria-hidden="true">#</a> Additional fixes</h2>`,19),v={href:"https://github.com/nushell/nushell/pull/4122",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/nushell/nushell/pull/4107",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"rm",-1),x=e("code",null,"ls",-1),k={href:"https://github.com/nushell/nushell/pull/4099",target:"_blank",rel:"noopener noreferrer"},B=e("h1",{id:"engine-q-progress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#engine-q-progress","aria-hidden":"true"},"#"),t(" Engine-q progress")],-1),N=e("p",null,"We've also hit a milestone with engine-q: now over 100 commands have been ported to engine-q! Special thanks to onthebridgetonowhere, CBenoit, luccasmmg, stormasm, and aslynatilla for their work in these ports since the last Nushell release.",-1),M={href:"https://github.com/nushell/engine-q/pull/332",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"$config",-1),j={href:"https://github.com/nushell/engine-q/pull/309",target:"_blank",rel:"noopener noreferrer"},K=e("code",null,"$in",-1),U={href:"https://github.com/nushell/engine-q/pull/326",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/nushell/engine-q/pull/340",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"ls",-1),W={href:"https://github.com/nushell/engine-q/pull/331",target:"_blank",rel:"noopener noreferrer"},F={href:"https://www.youtube.com/watch?v=3o8b_QcrFHc",target:"_blank",rel:"noopener noreferrer"},z=e("h1",{id:"looking-forward",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-forward","aria-hidden":"true"},"#"),t(" Looking forward")],-1),I=e("p",null,"We're excited to see Nushell continue to gain more ability to work with data in easier ways as well as doing so in as a much smaller binary. Progress on engine-q continues to grow, and covers a large amount of ground in the engine internals, porting commands, plugin support, modules, and more.",-1),L={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"};function D(V,C){const n=a("ExternalLinkIcon");return r(),l("div",null,[h,u,p,i(" more "),m,e("p",null,[t("Nu 0.40 is available as "),e("a",f,[t("pre-built binaries"),s(n)]),t(" or from "),e("a",g,[t("crates.io"),s(n)]),t(". If you have Rust installed you can install it using "),b,t(".")]),_,e("ul",null,[e("li",null,[t("Upgraded "),e("a",v,[t("polars dataframe support"),s(n)]),t(" (nmandery)")]),e("li",null,[t("Fixed a "),e("a",w,[t("panic during parsing"),s(n)]),t(" (ahkrr)")]),e("li",null,[t("File matching between "),y,t(" and "),x,t(" is now "),e("a",k,[t("more consistent"),s(n)]),t(" (yogi)")])]),B,N,e("p",null,[t("We've also added support for "),e("a",M,[q,s(n)]),t(", "),e("a",j,[K,s(n)]),t(", a new "),e("a",U,[t("record syntax"),s(n)]),t(", "),e("a",A,[T,t(" colors"),s(n)]),t(", "),e("a",W,[t("environment variable module imports"),s(n)]),t(", and much more. While engine-q isn't quite ready to be tested as a daily driver, with each day its capabilities and stability grows.")]),e("p",null,[t("If you're interested in how some of the upcoming support for parallel processing in engine-q works, contributor JT "),e("a",F,[t("made a video explaining it"),s(n)]),t(".")]),z,I,e("p",null,[t("If you're interested in helping out, come "),e("a",L,[t("join us on the discord"),s(n)]),t(". We're more than happy to help answer questions and point you towards on-going projects!")])])}const S=o(c,[["render",D],["__file","2021-11-16-nushell_0_40.html.vue"]]);export{S as default};