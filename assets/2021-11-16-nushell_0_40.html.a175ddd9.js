import{_ as o,r as a,o as r,c as l,f as i,a as e,b as s,d as t,e as d}from"./app.c7ac2154.js";const c={},h=e("h1",{id:"nushell-0-40",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-40","aria-hidden":"true"},"#"),t(" Nushell 0.40")],-1),u=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),p=e("p",null,"Today, we're releasing 0.40 of Nu. This release is includes better table imports and much smaller release size.",-1),m=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),_=t("Nu 0.40 is available as "),f={href:"https://github.com/nushell/nushell/releases/tag/0.40.0",target:"_blank",rel:"noopener noreferrer"},g=t("pre-built binaries"),b=t(" or from "),v={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},w=t("crates.io"),y=t(". If you have Rust installed you can install it using "),x=e("code",null,"cargo install nu",-1),k=t("."),B=d(`<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="detecting-columns-jt" tabindex="-1"><a class="header-anchor" href="#detecting-columns-jt" aria-hidden="true">#</a> Detecting columns (jt)</h2><p>Nushell now supports a new command: <code>detect columns</code>. This command is intended as an easy way to handle tabular data that&#39;s written as text. Commands like <code>ps</code>, <code>ls -l</code>, <code>netstat</code>, <code>df</code>, and others commonly output their output as text. With <code>detect columns</code>, you can run the external command, and convert them into Nushell&#39;s tabular data format.</p><p>Let&#39;s look at an example:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; df
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
</code></pre></div><p>The <code>df</code> command comes with most Unix-based systems and prints out a table of data for each of the devices on the system. Let&#39;s turn this into a table we can work with in Nushell:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; df | detect columns
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502   Filesystem   \u2502 1K-blocks \u2502   Used    \u2502 Available \u2502 Use% \u2502    Mounted     \u2502       on
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 udev           \u2502 8108824   \u2502 0         \u2502 8108824   \u2502 0%   \u2502 /dev           \u2502
 1 \u2502 tmpfs          \u2502 1631284   \u2502 2068      \u2502 1629216   \u2502 1%   \u2502 /run           \u2502
 2 \u2502 /dev/nvme1n1p2 \u2502 490691512 \u2502 346067044 \u2502 119628988 \u2502 75%  \u2502 /              \u2502
 3 \u2502 tmpfs          \u2502 8156408   \u2502 251332    \u2502 7905076   \u2502 4%   \u2502 /dev/shm       \u2502
 4 \u2502 tmpfs          \u2502 5120      \u2502 4         \u2502 5116      \u2502 1%   \u2502 /run/lock      \u2502 /run/lock
 5 \u2502 tmpfs          \u2502 8156408   \u2502 0         \u2502 8156408   \u2502 0%   \u2502 /sys/fs/cgroup \u2502 /sys/fs/cgroup
 6 \u2502 /dev/nvme0n1p1 \u2502 508932    \u2502 211684    \u2502 297248    \u2502 42%  \u2502 /boot/efi      \u2502 /boot/efi
 7 \u2502 tmpfs          \u2502 1631280   \u2502 128       \u2502 1631152   \u2502 1%   \u2502 /run/user/1000 \u2502 /run/user/1000
 8 \u2502 /dev/nvme0n1p2 \u2502 238810780 \u2502 136867812 \u2502 89742316  \u2502 61%  \u2502 /media/jt/Data \u2502 /media/jt/Data
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Ahh, that&#39;s close to what we want in just one step. Let&#39;s go ahead and clean this up a little. First, let&#39;s drop that last column. &quot;Mounted on&quot; being two words confused the importer, but all the data is there, we just need to drop the last column.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; df | detect columns | drop column
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502   Filesystem   \u2502 1K-blocks \u2502   Used    \u2502 Available \u2502 Use% \u2502    Mounted
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 udev           \u2502 8108824   \u2502 0         \u2502 8108824   \u2502 0%   \u2502 /dev
 1 \u2502 tmpfs          \u2502 1631284   \u2502 2068      \u2502 1629216   \u2502 1%   \u2502 /run
 2 \u2502 /dev/nvme1n1p2 \u2502 490691512 \u2502 346067188 \u2502 119628844 \u2502 75%  \u2502 /
 3 \u2502 tmpfs          \u2502 8156408   \u2502 251332    \u2502 7905076   \u2502 4%   \u2502 /dev/shm
 4 \u2502 tmpfs          \u2502 5120      \u2502 4         \u2502 5116      \u2502 1%   \u2502 /run/lock
 5 \u2502 tmpfs          \u2502 8156408   \u2502 0         \u2502 8156408   \u2502 0%   \u2502 /sys/fs/cgroup
 6 \u2502 /dev/nvme0n1p1 \u2502 508932    \u2502 211684    \u2502 297248    \u2502 42%  \u2502 /boot/efi
 7 \u2502 tmpfs          \u2502 1631280   \u2502 128       \u2502 1631152   \u2502 1%   \u2502 /run/user/1000
 8 \u2502 /dev/nvme0n1p2 \u2502 238810780 \u2502 136867812 \u2502 89742316  \u2502 61%  \u2502 /media/jt/Data
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Finally, it&#39;d be nice to be able to have real file sizes for the middle columns, so let&#39;s convert the numbers into Nushell&#39;s filesize type:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; df | detect columns | drop column | into filesize 1K-blocks Used Available
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502   Filesystem   \u2502 1K-blocks \u2502   Used   \u2502 Available \u2502 Use% \u2502    Mounted
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 udev           \u2502    8.1 MB \u2502      0 B \u2502    8.1 MB \u2502 0%   \u2502 /dev
 1 \u2502 tmpfs          \u2502    1.6 MB \u2502   2.1 KB \u2502    1.6 MB \u2502 1%   \u2502 /run
 2 \u2502 /dev/nvme1n1p2 \u2502  490.7 MB \u2502 346.1 MB \u2502  119.6 MB \u2502 75%  \u2502 /
 3 \u2502 tmpfs          \u2502    8.2 MB \u2502 251.3 KB \u2502    7.9 MB \u2502 4%   \u2502 /dev/shm
 4 \u2502 tmpfs          \u2502    5.1 KB \u2502      4 B \u2502    5.1 KB \u2502 1%   \u2502 /run/lock
 5 \u2502 tmpfs          \u2502    8.2 MB \u2502      0 B \u2502    8.2 MB \u2502 0%   \u2502 /sys/fs/cgroup
 6 \u2502 /dev/nvme0n1p1 \u2502  508.9 KB \u2502 211.7 KB \u2502  297.2 KB \u2502 42%  \u2502 /boot/efi
 7 \u2502 tmpfs          \u2502    1.6 MB \u2502    128 B \u2502    1.6 MB \u2502 1%   \u2502 /run/user/1000
 8 \u2502 /dev/nvme0n1p2 \u2502  238.8 MB \u2502 136.9 MB \u2502   89.7 MB \u2502 61%  \u2502 /media/jt/Data
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>In just a couple steps, we&#39;ve converted the text-based table into tabular data we can use just like any other Nushell command. To make this easy to do in the future, we can alias <code>df</code> to do these steps:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; alias df = (^df | detect columns | drop column | into filesize 1K-blocks Used Available)
</code></pre></div><h2 id="smaller-binaries-fdncred" tabindex="-1"><a class="header-anchor" href="#smaller-binaries-fdncred" aria-hidden="true">#</a> Smaller binaries (fdncred)</h2><p>The size of the Nushell release binaries has come up as regular feedback from Nushell users. &quot;Why does the shell have to be so big?&quot; And we&#39;ve heard you!</p><p>Today&#39;s release now uses a combination of <code>strip</code> and <code>upx</code> to bring considerable savings in binary size. The Linux release (plugins incl.) has dropped from 475mb to 58mb(!!), making it <strong>88% smaller</strong>. We&#39;re seeing similar improvements in the sizes of the macOS and Windows releases.</p><h2 id="additional-fixes" tabindex="-1"><a class="header-anchor" href="#additional-fixes" aria-hidden="true">#</a> Additional fixes</h2>`,19),N=t("Upgraded "),M={href:"https://github.com/nushell/nushell/pull/4122",target:"_blank",rel:"noopener noreferrer"},q=t("polars dataframe support"),j=t(" (nmandery)"),K=t("Fixed a "),U={href:"https://github.com/nushell/nushell/pull/4107",target:"_blank",rel:"noopener noreferrer"},A=t("panic during parsing"),T=t(" (ahkrr)"),W=t("File matching between "),F=e("code",null,"rm",-1),z=t(" and "),I=e("code",null,"ls",-1),L=t(" is now "),D={href:"https://github.com/nushell/nushell/pull/4099",target:"_blank",rel:"noopener noreferrer"},V=t("more consistent"),C=t(" (yogi)"),E=e("h1",{id:"engine-q-progress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#engine-q-progress","aria-hidden":"true"},"#"),t(" Engine-q progress")],-1),S=e("p",null,"We've also hit a milestone with engine-q: now over 100 commands have been ported to engine-q! Special thanks to onthebridgetonowhere, CBenoit, luccasmmg, stormasm, and aslynatilla for their work in these ports since the last Nushell release.",-1),$=t("We've also added support for "),G={href:"https://github.com/nushell/engine-q/pull/332",target:"_blank",rel:"noopener noreferrer"},H=e("code",null,"$config",-1),J=t(", "),O={href:"https://github.com/nushell/engine-q/pull/309",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"$in",-1),Q=t(", a new "),R={href:"https://github.com/nushell/engine-q/pull/326",target:"_blank",rel:"noopener noreferrer"},X=t("record syntax"),Y=t(", "),Z={href:"https://github.com/nushell/engine-q/pull/340",target:"_blank",rel:"noopener noreferrer"},ee=e("code",null,"ls",-1),te=t(" colors"),ne=t(", "),se={href:"https://github.com/nushell/engine-q/pull/331",target:"_blank",rel:"noopener noreferrer"},oe=t("environment variable module imports"),ae=t(", and much more. While engine-q isn't quite ready to be tested as a daily driver, with each day its capabilities and stability grows."),re=t("If you're interested in how some of the upcoming support for parallel processing in engine-q works, contributor JT "),le={href:"https://www.youtube.com/watch?v=3o8b_QcrFHc",target:"_blank",rel:"noopener noreferrer"},ie=t("made a video explaining it"),de=t("."),ce=e("h1",{id:"looking-forward",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-forward","aria-hidden":"true"},"#"),t(" Looking forward")],-1),he=e("p",null,"We're excited to see Nushell continue to gain more ability to work with data in easier ways as well as doing so in as a much smaller binary. Progress on engine-q continues to grow, and covers a large amount of ground in the engine internals, porting commands, plugin support, modules, and more.",-1),ue=t("If you're interested in helping out, come "),pe={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},me=t("join us on the discord"),_e=t(". We're more than happy to help answer questions and point you towards on-going projects!");function fe(ge,be){const n=a("ExternalLinkIcon");return r(),l("div",null,[h,u,p,i(" more "),m,e("p",null,[_,e("a",f,[g,s(n)]),b,e("a",v,[w,s(n)]),y,x,k]),B,e("ul",null,[e("li",null,[N,e("a",M,[q,s(n)]),j]),e("li",null,[K,e("a",U,[A,s(n)]),T]),e("li",null,[W,F,z,I,L,e("a",D,[V,s(n)]),C])]),E,S,e("p",null,[$,e("a",G,[H,s(n)]),J,e("a",O,[P,s(n)]),Q,e("a",R,[X,s(n)]),Y,e("a",Z,[ee,te,s(n)]),ne,e("a",se,[oe,s(n)]),ae]),e("p",null,[re,e("a",le,[ie,s(n)]),de]),ce,he,e("p",null,[ue,e("a",pe,[me,s(n)]),_e])])}const we=o(c,[["render",fe],["__file","2021-11-16-nushell_0_40.html.vue"]]);export{we as default};
