import{_ as l,r,o as h,c as i,f as a,a as t,b as n,d as e,e as s}from"./app.f650a2d3.js";const _={},d=t("h1",{id:"nushell-0-66",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-0-66","aria-hidden":"true"},"#"),e(" Nushell 0.66")],-1),c=t("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),u=t("p",null,"Today, we're releasing version 0.66 of Nu. This is release includes a new table output, better exit code support, and more.",-1),p=t("h1",{id:"where-to-get-it",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),g=e("Nu 0.66 is available as "),f={href:"https://github.com/nushell/nushell/releases/tag/0.66.0",target:"_blank",rel:"noopener noreferrer"},b=e("pre-built binaries"),m=e(" or from "),k={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},w=e("crates.io"),x=e(". If you have Rust installed you can install it using "),v=t("code",null,"cargo install nu",-1),y=e("."),N=s('<p>If you want all the built-in goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of optional plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="themes-of-this-release" tabindex="-1"><a class="header-anchor" href="#themes-of-this-release" aria-hidden="true">#</a> Themes of this release</h1><h2 id="new-table-output-zhiburt" tabindex="-1"><a class="header-anchor" href="#new-table-output-zhiburt" aria-hidden="true">#</a> New table output (zhiburt)</h2><p>When you pull up 0.66 and print out a table you might notice something - that it looks surprisingly similar to previous releases of Nushell. But, under the hood, something has changed. In 0.66, we&#39;ve moved to a new table renderer: <code>tabled</code>.</p>',5),z=e("We're looking forward to really "),A={href:"https://github.com/zhiburt/tabled/issues/198",target:"_blank",rel:"noopener noreferrer"},F=e("getting creative"),S=e(" with future releases and what tabled allows us to do."),W=s('<h2 id="exit-codes-windsoilder-jt" tabindex="-1"><a class="header-anchor" href="#exit-codes-windsoilder-jt" aria-hidden="true">#</a> Exit codes (WindSoilder, jt)</h2><p>We&#39;ve done work in this release that will cause pipelines and commands to stop a script from continuing if they hit a non-zero exit case, much in the same way as <code>a &amp;&amp; b</code> in bash does not run <code>b</code> if <code>a</code> returns with a non-zero exit code.</p><p>This has been extended to also work when running the full script, so that <code>nu</code> itself will return an non-zero exit code matching the error the script saw when it stopped.</p><h1 id="looking-ahead" tabindex="-1"><a class="header-anchor" href="#looking-ahead" aria-hidden="true">#</a> Looking ahead</h1><p>We&#39;re deep in preparations for the work that will get us to 0.80, including a lot of syntax improvements, pipeline improvements, and more. We&#39;ll be talking about these more as the design and implementation develops.</p><p>From there, we&#39;re on our path to 1.0.</p><h1 id="full-changelog" tabindex="-1"><a class="header-anchor" href="#full-changelog" aria-hidden="true">#</a> Full changelog</h1><h2 id="nushell" tabindex="-1"><a class="header-anchor" href="#nushell" aria-hidden="true">#</a> Nushell</h2>',8),C=e("jt created "),R={href:"https://github.com/nushell/nushell/pull/6138",target:"_blank",rel:"noopener noreferrer"},I=e("fix 0.66 nu-command crate"),D=e(", and "),U={href:"https://github.com/nushell/nushell/pull/6137",target:"_blank",rel:"noopener noreferrer"},j=e("bump to 0.66"),B=e(", and "),T={href:"https://github.com/nushell/nushell/pull/6136",target:"_blank",rel:"noopener noreferrer"},E=e("move to latest stable reedline"),L=e(", and "),P={href:"https://github.com/nushell/nushell/pull/6116",target:"_blank",rel:"noopener noreferrer"},V=e('Revert "'),M=t("code",null,"extern",-1),H=e(' command should be treated as external"'),O=e(", and "),q={href:"https://github.com/nushell/nushell/pull/6115",target:"_blank",rel:"noopener noreferrer"},J=e("exit with non-zero exit code when script ends with non-zero exit"),K=e(", and "),$={href:"https://github.com/nushell/nushell/pull/6016",target:"_blank",rel:"noopener noreferrer"},G=e("Use simpler reedline"),Q=e("merelymyself created "),X={href:"https://github.com/nushell/nushell/pull/6135",target:"_blank",rel:"noopener noreferrer"},Y=e("allow view-source to view aliases"),Z=e(", and "),ee={href:"https://github.com/nushell/nushell/pull/6118",target:"_blank",rel:"noopener noreferrer"},te=e("remove misleading example from "),oe=t("code",null,"source",-1),ne=e(", and "),se={href:"https://github.com/nushell/nushell/pull/6110",target:"_blank",rel:"noopener noreferrer"},le=e("throw error if any? or all? expression invokes invalid command"),re=e(", and "),he={href:"https://github.com/nushell/nushell/pull/6096",target:"_blank",rel:"noopener noreferrer"},ie=e("Prevents panic when parsing JSON containing large number"),ae=e(", and "),_e={href:"https://github.com/nushell/nushell/pull/6090",target:"_blank",rel:"noopener noreferrer"},de=e("add a fair amount of search terms"),ce=e(", and "),ue={href:"https://github.com/nushell/nushell/pull/6084",target:"_blank",rel:"noopener noreferrer"},pe=e("make "),ge=t("code",null,"into string --decimals",-1),fe=e(" add decimals to integer numbers"),be=e(", and "),me={href:"https://github.com/nushell/nushell/pull/6076",target:"_blank",rel:"noopener noreferrer"},ke=e("add config option to limit external command completions"),we=e(", and "),xe={href:"https://github.com/nushell/nushell/pull/6062",target:"_blank",rel:"noopener noreferrer"},ve=e("add "),ye=t("code",null,"split list",-1),Ne=e(" subcommand to split up lists"),ze=e(", and "),Ae={href:"https://github.com/nushell/nushell/pull/6056",target:"_blank",rel:"noopener noreferrer"},Fe=e("add "),Se=t("code",null,"wc",-1),We=e(" search term for "),Ce=t("code",null,"size",-1),Re=e(" and "),Ie=t("code",null,"length",-1),De=e(", and "),Ue={href:"https://github.com/nushell/nushell/pull/6041",target:"_blank",rel:"noopener noreferrer"},je=e("allow for easy reset of config files with a single command"),Be=e(", and "),Te={href:"https://github.com/nushell/nushell/pull/6019",target:"_blank",rel:"noopener noreferrer"},Ee=e("make auto-cd change "),Le=t("code",null,"$env.OLDPWD",-1),Pe=e(", and "),Ve={href:"https://github.com/nushell/nushell/pull/6017",target:"_blank",rel:"noopener noreferrer"},Me=e("add "),He=t("code",null,"unspanned",-1),Oe=e(" flag to error make, add tests"),qe=e(", and "),Je={href:"https://github.com/nushell/nushell/pull/6000",target:"_blank",rel:"noopener noreferrer"},Ke=e("throw parser error when multiple short flags are defined without whitespace"),$e=e(", and "),Ge={href:"https://github.com/nushell/nushell/pull/5977",target:"_blank",rel:"noopener noreferrer"},Qe=e("adds better error for failed string-to-duration conversions"),Xe=e("nibon7 created "),Ye={href:"https://github.com/nushell/nushell/pull/6134",target:"_blank",rel:"noopener noreferrer"},Ze=e("Make login.nu work when using nu as a login shell "),et=e(", and "),tt={href:"https://github.com/nushell/nushell/pull/6132",target:"_blank",rel:"noopener noreferrer"},ot=e("Use local time for logger"),nt=e(", and "),st={href:"https://github.com/nushell/nushell/pull/6130",target:"_blank",rel:"noopener noreferrer"},lt=e("Fix print_table_or_error when "),rt=t("code",null,"table",-1),ht=e(" is overridden"),it=e(", and "),at={href:"https://github.com/nushell/nushell/pull/6129",target:"_blank",rel:"noopener noreferrer"},_t=e("Fix PipelineData::print when "),dt=t("code",null,"table",-1),ct=e(" is overridden"),ut=e(", and "),pt={href:"https://github.com/nushell/nushell/pull/6122",target:"_blank",rel:"noopener noreferrer"},gt=e("Simplify print_table_or_error"),ft=e(", and "),bt={href:"https://github.com/nushell/nushell/pull/6121",target:"_blank",rel:"noopener noreferrer"},mt=e("Simplify eval_block"),kt=e(", and "),wt={href:"https://github.com/nushell/nushell/pull/6119",target:"_blank",rel:"noopener noreferrer"},xt=e("Simplify PipelineData::print"),vt=e(", and "),yt={href:"https://github.com/nushell/nushell/pull/6106",target:"_blank",rel:"noopener noreferrer"},Nt=e("Log warning message if nu failed to sync history"),zt=e(", and "),At={href:"https://github.com/nushell/nushell/pull/6104",target:"_blank",rel:"noopener noreferrer"},Ft=e("Don't panic if nu failed to create config files "),St=e(", and "),Wt={href:"https://github.com/nushell/nushell/pull/6047",target:"_blank",rel:"noopener noreferrer"},Ct=e("Fix ps command on linux"),Rt=e(", and "),It={href:"https://github.com/nushell/nushell/pull/6034",target:"_blank",rel:"noopener noreferrer"},Dt=e("Fix panic when opening symlink which points to an inaccessible directory"),Ut=e("fdncred created "),jt={href:"https://github.com/nushell/nushell/pull/6131",target:"_blank",rel:"noopener noreferrer"},Bt=e("update some dependencies"),Tt=e(", and "),Et={href:"https://github.com/nushell/nushell/pull/6123",target:"_blank",rel:"noopener noreferrer"},Lt=e("expand durations to include month, year, decade"),Pt=e(", and "),Vt={href:"https://github.com/nushell/nushell/pull/6112",target:"_blank",rel:"noopener noreferrer"},Mt=e("move the shell integration title setting to the right place"),Ht=e(", and "),Ot={href:"https://github.com/nushell/nushell/pull/6105",target:"_blank",rel:"noopener noreferrer"},qt=e("trim spaces when converting strings to ints"),Jt=e(", and "),Kt={href:"https://github.com/nushell/nushell/pull/6094",target:"_blank",rel:"noopener noreferrer"},$t=e("enable find to work on some external streams"),Gt=e(", and "),Qt={href:"https://github.com/nushell/nushell/pull/6087",target:"_blank",rel:"noopener noreferrer"},Xt=e("add more shell integration ansi escapes in support of vscode"),Yt=e(", and "),Zt={href:"https://github.com/nushell/nushell/pull/6086",target:"_blank",rel:"noopener noreferrer"},eo=e("enable find to be able to highlight some hits"),to=e(", and "),oo={href:"https://github.com/nushell/nushell/pull/6054",target:"_blank",rel:"noopener noreferrer"},no=e("Ensure users colors are maintained when highlighting find matches"),so=e(", and "),lo={href:"https://github.com/nushell/nushell/pull/6053",target:"_blank",rel:"noopener noreferrer"},ro=e("allow "),ho=t("code",null,"into int",-1),io=e(" to convert octal numbers and 0 padded strings"),ao=e(", and "),_o={href:"https://github.com/nushell/nushell/pull/6033",target:"_blank",rel:"noopener noreferrer"},co=e("add ability to do into int on floats using a radix"),uo=e(", and "),po={href:"https://github.com/nushell/nushell/pull/6031",target:"_blank",rel:"noopener noreferrer"},go=e("fix small bug converting string to int"),fo=e(", and "),bo={href:"https://github.com/nushell/nushell/pull/6012",target:"_blank",rel:"noopener noreferrer"},mo=e("fixes ansi escape leakage from ill-behaved externals, again!"),ko=e(", and "),wo={href:"https://github.com/nushell/nushell/pull/6009",target:"_blank",rel:"noopener noreferrer"},xo=e("update some dependencies"),vo=e(", and "),yo={href:"https://github.com/nushell/nushell/pull/5992",target:"_blank",rel:"noopener noreferrer"},No=e("add the ability to highlight with regular expressiosn"),zo=e(", and "),Ao={href:"https://github.com/nushell/nushell/pull/5981",target:"_blank",rel:"noopener noreferrer"},Fo=e("tweak the find hit highlighting"),So=e(", and "),Wo={href:"https://github.com/nushell/nushell/pull/5980",target:"_blank",rel:"noopener noreferrer"},Co=e("make history.txt and history.sqlite3 tables have same command column"),Ro=e(", and "),Io={href:"https://github.com/nushell/nushell/pull/5979",target:"_blank",rel:"noopener noreferrer"},Do=e("add the ability to highlight searched for terms"),Uo=e("kubouch created "),jo={href:"https://github.com/nushell/nushell/pull/6127",target:"_blank",rel:"noopener noreferrer"},Bo=e("Use official virtualenv repo for the CI tests"),To=e(", and "),Eo={href:"https://github.com/nushell/nushell/pull/6007",target:"_blank",rel:"noopener noreferrer"},Lo=e("Allow keeping selected environment variables from removed overlay"),Po=e(", and "),Vo={href:"https://github.com/nushell/nushell/pull/6006",target:"_blank",rel:"noopener noreferrer"},Mo=e("Fix load order of config files"),Ho=e(", and "),Oo={href:"https://github.com/nushell/nushell/pull/6005",target:"_blank",rel:"noopener noreferrer"},qo=e("Split merging of parser delta and stack environment"),Jo=e(", and "),Ko={href:"https://github.com/nushell/nushell/pull/6002",target:"_blank",rel:"noopener noreferrer"},$o=e('Revert "make module imports in scripts used for relative path."'),Go=e(", and "),Qo={href:"https://github.com/nushell/nushell/pull/5982",target:"_blank",rel:"noopener noreferrer"},Xo=e("Expand Hooks Functionality"),Yo=e("elferherrera created "),Zo={href:"https://github.com/nushell/nushell/pull/6126",target:"_blank",rel:"noopener noreferrer"},en=e("plugin show signature"),tn=e(", and "),on={href:"https://github.com/nushell/nushell/pull/6093",target:"_blank",rel:"noopener noreferrer"},nn=e("concat string with lazy expressions"),sn=e(", and "),ln={href:"https://github.com/nushell/nushell/pull/6089",target:"_blank",rel:"noopener noreferrer"},rn=e("append string to series"),hn=e(", and "),an={href:"https://github.com/nushell/nushell/pull/6058",target:"_blank",rel:"noopener noreferrer"},_n=e("check column type during aggregation"),dn=e("hustcer created "),cn={href:"https://github.com/nushell/nushell/pull/6120",target:"_blank",rel:"noopener noreferrer"},un=e("fix typo of "),pn=t("code",null,"port",-1),gn=e(" command"),fn=e("WindSoilder created "),bn={href:"https://github.com/nushell/nushell/pull/6117",target:"_blank",rel:"noopener noreferrer"},mn=e("try make port test more reliable"),kn=e(", and "),wn={href:"https://github.com/nushell/nushell/pull/6079",target:"_blank",rel:"noopener noreferrer"},xn=e("Make Semicolon stop on error"),vn=e(", and "),yn={href:"https://github.com/nushell/nushell/pull/6040",target:"_blank",rel:"noopener noreferrer"},Nn=e("load default env when user don't specified env path"),zn=e(", and "),An={href:"https://github.com/nushell/nushell/pull/6008",target:"_blank",rel:"noopener noreferrer"},Fn=e("Add bytes collect, bytes remove, bytes build cmd"),Sn=e(", and "),Wn={href:"https://github.com/nushell/nushell/pull/5989",target:"_blank",rel:"noopener noreferrer"},Cn=e("add more bytes cmd"),Rn=e("PlasmaIntec created "),In={href:"https://github.com/nushell/nushell/pull/6114",target:"_blank",rel:"noopener noreferrer"},Dn=e("Allow cp multiple files at once"),Un=e(", and "),jn={href:"https://github.com/nushell/nushell/pull/6103",target:"_blank",rel:"noopener noreferrer"},Bn=e("Allow mv multiple files at once"),Tn=e(", and "),En={href:"https://github.com/nushell/nushell/pull/6098",target:"_blank",rel:"noopener noreferrer"},Ln=e("Allow multiple patterns in ls command"),Pn=e("micouy created "),Vn={href:"https://github.com/nushell/nushell/pull/6099",target:"_blank",rel:"noopener noreferrer"},Mn=e("Bump "),Hn=t("code",null,"powierza-coefficient",-1),On=e(" to "),qn=t("code",null,"1.0.1",-1),Jn=e("zhiburt created "),Kn={href:"https://github.com/nushell/nushell/pull/6097",target:"_blank",rel:"noopener noreferrer"},$n=e("nu-table/ Bump tabled version"),Gn=e(", and "),Qn={href:"https://github.com/nushell/nushell/pull/6082",target:"_blank",rel:"noopener noreferrer"},Xn=e("nu-table: Update tests after #6080"),Yn=e(", and "),Zn={href:"https://github.com/nushell/nushell/pull/6080",target:"_blank",rel:"noopener noreferrer"},es=e("Consider space for single "),ts=t("code",null,"...",-1),os=e(" column not enough space"),ns=e(", and "),ss={href:"https://github.com/nushell/nushell/pull/6074",target:"_blank",rel:"noopener noreferrer"},ls=e("nu-table: Add a few tests"),rs=e(", and "),hs={href:"https://github.com/nushell/nushell/pull/6073",target:"_blank",rel:"noopener noreferrer"},is=e("nu-table: Fix header style (again 2x)"),as=e(", and "),_s={href:"https://github.com/nushell/nushell/pull/6071",target:"_blank",rel:"noopener noreferrer"},ds=e("nu-table: Add suffix coloring"),cs=e(", and "),us={href:"https://github.com/nushell/nushell/pull/6049",target:"_blank",rel:"noopener noreferrer"},ps=e("Refactoring nu_table"),gs=e(", and "),fs={href:"https://github.com/nushell/nushell/pull/6038",target:"_blank",rel:"noopener noreferrer"},bs=e("nu-table: Bump tabled to master"),ms=e(", and "),ks={href:"https://github.com/nushell/nushell/pull/6037",target:"_blank",rel:"noopener noreferrer"},ws=e("nu-table: Use all available termwidth"),xs=e(", and "),vs={href:"https://github.com/nushell/nushell/pull/6036",target:"_blank",rel:"noopener noreferrer"},ys=e("nu-table: Restore atty check"),Ns=e(", and "),zs={href:"https://github.com/nushell/nushell/pull/6035",target:"_blank",rel:"noopener noreferrer"},As=e("nu-table: Don't show empty header"),Fs=e(", and "),Ss={href:"https://github.com/nushell/nushell/pull/6028",target:"_blank",rel:"noopener noreferrer"},Ws=e("nu_table: Fix truncating logic"),Cs=e(", and "),Rs={href:"https://github.com/nushell/nushell/pull/6025",target:"_blank",rel:"noopener noreferrer"},Is=e("nu_table: Fix style of tables with no header"),Ds=e(", and "),Us={href:"https://github.com/nushell/nushell/pull/5999",target:"_blank",rel:"noopener noreferrer"},js=e("Move wrap responsibility on tabled"),Bs=e(", and "),Ts={href:"https://github.com/nushell/nushell/pull/5998",target:"_blank",rel:"noopener noreferrer"},Es=e("nu-table: Fix wrap logic"),Ls=e(", and "),Ps={href:"https://github.com/nushell/nushell/pull/5997",target:"_blank",rel:"noopener noreferrer"},Vs=e("nu-table: Fix a term_width value"),Ms=e(", and "),Hs={href:"https://github.com/nushell/nushell/pull/5993",target:"_blank",rel:"noopener noreferrer"},Os=e("nu-table: Remove a error prone assertion"),qs=e("Kangaxx-0 created "),Js={href:"https://github.com/nushell/nushell/pull/6083",target:"_blank",rel:"noopener noreferrer"},Ks=t("code",null,"extern",-1),$s=e(" command should be treated as external"),Gs=e(", and "),Qs={href:"https://github.com/nushell/nushell/pull/6044",target:"_blank",rel:"noopener noreferrer"},Xs=e("Downgrade typetag to 0.1.8"),Ys=e(", and "),Zs={href:"https://github.com/nushell/nushell/pull/6014",target:"_blank",rel:"noopener noreferrer"},el=e("Conditionally disable expansion for external command"),tl=e("Mathspy created "),ol={href:"https://github.com/nushell/nushell/pull/6070",target:"_blank",rel:"noopener noreferrer"},nl=e("Add CustomValue support to plugins"),sl=e(", and "),ll={href:"https://github.com/nushell/nushell/pull/6065",target:"_blank",rel:"noopener noreferrer"},rl=e("Restore "),hl=t("code",null,"nu_with_plugins",-1),il=e(" test macro"),al=e(", and "),_l={href:"https://github.com/nushell/nushell/pull/6064",target:"_blank",rel:"noopener noreferrer"},dl=e("Add plugin CLI argument"),cl=e("jackos created "),ul={href:"https://github.com/nushell/nushell/pull/6067",target:"_blank",rel:"noopener noreferrer"},pl=e("Fix short-flag completion"),gl=e("Benjamin-L created "),fl={href:"https://github.com/nushell/nushell/pull/6052",target:"_blank",rel:"noopener noreferrer"},bl=e("fix documentation of plugin encodings"),ml=e("rgwood created "),kl={href:"https://github.com/nushell/nushell/pull/6051",target:"_blank",rel:"noopener noreferrer"},wl=e("Handle Windows drive paths in auto-cd"),xl=e(", and "),vl={href:"https://github.com/nushell/nushell/pull/5987",target:"_blank",rel:"noopener noreferrer"},yl=e('Revert "Return error when external command core dumped (#5908)"'),Nl=e("stormasm created "),zl={href:"https://github.com/nushell/nushell/pull/6050",target:"_blank",rel:"noopener noreferrer"},Al=e("Cargo.lock was not checked in on typetag revert"),Fl=e("valdaarhun created "),Sl={href:"https://github.com/nushell/nushell/pull/5990",target:"_blank",rel:"noopener noreferrer"},Wl=e("Add search terms to 'math' commands"),Cl=e("moxuze created "),Rl={href:"https://github.com/nushell/nushell/pull/5970",target:"_blank",rel:"noopener noreferrer"},Il=e("Add --directory (-D) flag to ls, list the directory itself instead of its contents"),Dl=t("h2",{id:"documentation",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#documentation","aria-hidden":"true"},"#"),e(" Documentation")],-1),Ul=e("kubouch created "),jl={href:"https://github.com/nushell/nushell.github.io/pull/542",target:"_blank",rel:"noopener noreferrer"},Bl=e("Add overviews of chapters; Move Introduction to top level"),Tl=e(", and "),El={href:"https://github.com/nushell/nushell.github.io/pull/537",target:"_blank",rel:"noopener noreferrer"},Ll=e("Add hooks documentation"),Pl=e("hustcer created "),Vl={href:"https://github.com/nushell/nushell.github.io/pull/541",target:"_blank",rel:"noopener noreferrer"},Ml=e("Translate hooks.md to Chinese"),Hl=e(", and "),Ol={href:"https://github.com/nushell/nushell.github.io/pull/539",target:"_blank",rel:"noopener noreferrer"},ql=e("Update zh-CN translation for moving_around and theming"),Jl=e(", and "),Kl={href:"https://github.com/nushell/nushell.github.io/pull/538",target:"_blank",rel:"noopener noreferrer"},$l=e("Update some zh-CN translations"),Gl=e(", and "),Ql={href:"https://github.com/nushell/nushell.github.io/pull/535",target:"_blank",rel:"noopener noreferrer"},Xl=e("update vuepress and related plugins"),Yl=e("morzel85 created "),Zl={href:"https://github.com/nushell/nushell.github.io/pull/540",target:"_blank",rel:"noopener noreferrer"},er=e("Update working_with_lists.md (removing unnecessary use of echo)"),tr=e("merelymyself created "),or={href:"https://github.com/nushell/nushell.github.io/pull/533",target:"_blank",rel:"noopener noreferrer"},nr=e("Remove entry for "),sr=t("code",null,"count",-1),lr=e(", and "),rr={href:"https://github.com/nushell/nushell.github.io/pull/531",target:"_blank",rel:"noopener noreferrer"},hr=e("Add helpful links"),ir=e("WindSoilder created "),ar={href:"https://github.com/nushell/nushell.github.io/pull/532",target:"_blank",rel:"noopener noreferrer"},_r=e("add light theme relative doc"),dr=e("fdncred created "),cr={href:"https://github.com/nushell/nushell.github.io/pull/530",target:"_blank",rel:"noopener noreferrer"},ur=e("add some new operators"),pr=t("h2",{id:"nu-scripts",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nu-scripts","aria-hidden":"true"},"#"),e(" Nu_Scripts")],-1),gr=e("Eun created "),fr={href:"https://github.com/nushell/nu_scripts/pull/265",target:"_blank",rel:"noopener noreferrer"},br=e("Use autojump with nushell"),mr=e(", and "),kr={href:"https://github.com/nushell/nu_scripts/pull/262",target:"_blank",rel:"noopener noreferrer"},wr=t("code",null,"select-aws-profile.nu",-1),xr=e(" an alias to select an aws profile with ease"),vr=e("WindSoilder created "),yr={href:"https://github.com/nushell/nu_scripts/pull/264",target:"_blank",rel:"noopener noreferrer"},Nr=e("fix env.PATH after conda activate"),zr=e("fdncred created "),Ar={href:"https://github.com/nushell/nu_scripts/pull/263",target:"_blank",rel:"noopener noreferrer"},Fr=e("add nana to twin script"),Sr=t("h2",{id:"reedline",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#reedline","aria-hidden":"true"},"#"),e(" reedline")],-1),Wr=e("jt created "),Cr={href:"https://github.com/nushell/reedline/pull/454",target:"_blank",rel:"noopener noreferrer"},Rr=e("bump to 0.9"),Ir=e(", and "),Dr={href:"https://github.com/nushell/reedline/pull/451",target:"_blank",rel:"noopener noreferrer"},Ur=e("Remove animations and resize repaint"),jr=e("fdncred created "),Br={href:"https://github.com/nushell/reedline/pull/453",target:"_blank",rel:"noopener noreferrer"},Tr=e("update some deps"),Er=e("drbrain created "),Lr={href:"https://github.com/nushell/reedline/pull/452",target:"_blank",rel:"noopener noreferrer"},Pr=e("Support swtiching the case of a char with ~ in vi"),Vr=e(", and "),Mr={href:"https://github.com/nushell/reedline/pull/450",target:"_blank",rel:"noopener noreferrer"},Hr=e("Support vi mode ; and , motions");function Or(qr,Jr){const o=r("ExternalLinkIcon");return h(),i("div",null,[d,c,u,a(" more "),p,t("p",null,[g,t("a",f,[b,n(o)]),m,t("a",k,[w,n(o)]),x,v,y]),N,t("p",null,[z,t("a",A,[F,n(o)]),S]),W,t("ul",null,[t("li",null,[C,t("a",R,[I,n(o)]),D,t("a",U,[j,n(o)]),B,t("a",T,[E,n(o)]),L,t("a",P,[V,M,H,n(o)]),O,t("a",q,[J,n(o)]),K,t("a",$,[G,n(o)])]),t("li",null,[Q,t("a",X,[Y,n(o)]),Z,t("a",ee,[te,oe,n(o)]),ne,t("a",se,[le,n(o)]),re,t("a",he,[ie,n(o)]),ae,t("a",_e,[de,n(o)]),ce,t("a",ue,[pe,ge,fe,n(o)]),be,t("a",me,[ke,n(o)]),we,t("a",xe,[ve,ye,Ne,n(o)]),ze,t("a",Ae,[Fe,Se,We,Ce,Re,Ie,n(o)]),De,t("a",Ue,[je,n(o)]),Be,t("a",Te,[Ee,Le,n(o)]),Pe,t("a",Ve,[Me,He,Oe,n(o)]),qe,t("a",Je,[Ke,n(o)]),$e,t("a",Ge,[Qe,n(o)])]),t("li",null,[Xe,t("a",Ye,[Ze,n(o)]),et,t("a",tt,[ot,n(o)]),nt,t("a",st,[lt,rt,ht,n(o)]),it,t("a",at,[_t,dt,ct,n(o)]),ut,t("a",pt,[gt,n(o)]),ft,t("a",bt,[mt,n(o)]),kt,t("a",wt,[xt,n(o)]),vt,t("a",yt,[Nt,n(o)]),zt,t("a",At,[Ft,n(o)]),St,t("a",Wt,[Ct,n(o)]),Rt,t("a",It,[Dt,n(o)])]),t("li",null,[Ut,t("a",jt,[Bt,n(o)]),Tt,t("a",Et,[Lt,n(o)]),Pt,t("a",Vt,[Mt,n(o)]),Ht,t("a",Ot,[qt,n(o)]),Jt,t("a",Kt,[$t,n(o)]),Gt,t("a",Qt,[Xt,n(o)]),Yt,t("a",Zt,[eo,n(o)]),to,t("a",oo,[no,n(o)]),so,t("a",lo,[ro,ho,io,n(o)]),ao,t("a",_o,[co,n(o)]),uo,t("a",po,[go,n(o)]),fo,t("a",bo,[mo,n(o)]),ko,t("a",wo,[xo,n(o)]),vo,t("a",yo,[No,n(o)]),zo,t("a",Ao,[Fo,n(o)]),So,t("a",Wo,[Co,n(o)]),Ro,t("a",Io,[Do,n(o)])]),t("li",null,[Uo,t("a",jo,[Bo,n(o)]),To,t("a",Eo,[Lo,n(o)]),Po,t("a",Vo,[Mo,n(o)]),Ho,t("a",Oo,[qo,n(o)]),Jo,t("a",Ko,[$o,n(o)]),Go,t("a",Qo,[Xo,n(o)])]),t("li",null,[Yo,t("a",Zo,[en,n(o)]),tn,t("a",on,[nn,n(o)]),sn,t("a",ln,[rn,n(o)]),hn,t("a",an,[_n,n(o)])]),t("li",null,[dn,t("a",cn,[un,pn,gn,n(o)])]),t("li",null,[fn,t("a",bn,[mn,n(o)]),kn,t("a",wn,[xn,n(o)]),vn,t("a",yn,[Nn,n(o)]),zn,t("a",An,[Fn,n(o)]),Sn,t("a",Wn,[Cn,n(o)])]),t("li",null,[Rn,t("a",In,[Dn,n(o)]),Un,t("a",jn,[Bn,n(o)]),Tn,t("a",En,[Ln,n(o)])]),t("li",null,[Pn,t("a",Vn,[Mn,Hn,On,qn,n(o)])]),t("li",null,[Jn,t("a",Kn,[$n,n(o)]),Gn,t("a",Qn,[Xn,n(o)]),Yn,t("a",Zn,[es,ts,os,n(o)]),ns,t("a",ss,[ls,n(o)]),rs,t("a",hs,[is,n(o)]),as,t("a",_s,[ds,n(o)]),cs,t("a",us,[ps,n(o)]),gs,t("a",fs,[bs,n(o)]),ms,t("a",ks,[ws,n(o)]),xs,t("a",vs,[ys,n(o)]),Ns,t("a",zs,[As,n(o)]),Fs,t("a",Ss,[Ws,n(o)]),Cs,t("a",Rs,[Is,n(o)]),Ds,t("a",Us,[js,n(o)]),Bs,t("a",Ts,[Es,n(o)]),Ls,t("a",Ps,[Vs,n(o)]),Ms,t("a",Hs,[Os,n(o)])]),t("li",null,[qs,t("a",Js,[Ks,$s,n(o)]),Gs,t("a",Qs,[Xs,n(o)]),Ys,t("a",Zs,[el,n(o)])]),t("li",null,[tl,t("a",ol,[nl,n(o)]),sl,t("a",ll,[rl,hl,il,n(o)]),al,t("a",_l,[dl,n(o)])]),t("li",null,[cl,t("a",ul,[pl,n(o)])]),t("li",null,[gl,t("a",fl,[bl,n(o)])]),t("li",null,[ml,t("a",kl,[wl,n(o)]),xl,t("a",vl,[yl,n(o)])]),t("li",null,[Nl,t("a",zl,[Al,n(o)])]),t("li",null,[Fl,t("a",Sl,[Wl,n(o)])]),t("li",null,[Cl,t("a",Rl,[Il,n(o)])])]),Dl,t("ul",null,[t("li",null,[Ul,t("a",jl,[Bl,n(o)]),Tl,t("a",El,[Ll,n(o)])]),t("li",null,[Pl,t("a",Vl,[Ml,n(o)]),Hl,t("a",Ol,[ql,n(o)]),Jl,t("a",Kl,[$l,n(o)]),Gl,t("a",Ql,[Xl,n(o)])]),t("li",null,[Yl,t("a",Zl,[er,n(o)])]),t("li",null,[tr,t("a",or,[nr,sr,n(o)]),lr,t("a",rr,[hr,n(o)])]),t("li",null,[ir,t("a",ar,[_r,n(o)])]),t("li",null,[dr,t("a",cr,[ur,n(o)])])]),pr,t("ul",null,[t("li",null,[gr,t("a",fr,[br,n(o)]),mr,t("a",kr,[wr,xr,n(o)])]),t("li",null,[vr,t("a",yr,[Nr,n(o)])]),t("li",null,[zr,t("a",Ar,[Fr,n(o)])])]),Sr,t("ul",null,[t("li",null,[Wr,t("a",Cr,[Rr,n(o)]),Ir,t("a",Dr,[Ur,n(o)])]),t("li",null,[jr,t("a",Br,[Tr,n(o)])]),t("li",null,[Er,t("a",Lr,[Pr,n(o)]),Vr,t("a",Mr,[Hr,n(o)])])])])}const $r=l(_,[["render",Or],["__file","2022-07-26-nushell-0_66.html.vue"]]);export{$r as default};
