import{_ as o,r as i,o as r,c as p,a as t,b as s,d as e,e as a}from"./app.94815f9c.js";const l={},d=t("h1",{id:"configuration",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#"),e(" Configuration")],-1),c=t("h2",{id:"nushell-configuration-with-config-toml",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-configuration-with-config-toml","aria-hidden":"true"},"#"),e(" Nushell Configuration with "),t("code",null,"config.toml")],-1),u=t("p",null,[e("Nushell uses a configuration system that loads a toml file at launch time. That configuration file is called the Nushell "),t("code",null,"config.toml"),e(" file. The path to the configuration file can be found by calling "),t("code",null,"config path"),e(". It contains the configuration points that nushell will use as default settings. Each setting follows a key value pattern. A value can be a number, a string, or an array. Below is a description of each setting.")],-1),h=e("An example of the nushell "),g=t("code",null,"config.toml",-1),m=e(" can be found in our repo "),k={href:"https://github.com/nushell/nushell/tree/main/docs/sample_config",target:"_blank",rel:"noopener noreferrer"},y=e("here"),b=e("."),f=a('<h3 id="root-level-configuration-settings" tabindex="-1"><a class="header-anchor" href="#root-level-configuration-settings" aria-hidden="true">#</a> Root level configuration settings.</h3><p>These are at the root level, not because they&#39;re more important, but because they are not in a toml section.</p><table><thead><tr><th>Name</th><th>Purpose</th><th>Value Type</th><th>Options</th></tr></thead><tbody><tr><td>complete_from_path</td><td>Whether or not to complete names of binaries on PATH</td><td>boolean</td><td>true or false</td></tr><tr><td>ctrlc_exit</td><td>Enables/Disables nushell to exit when the key combination of Ctrl+C is hit multiple times.</td><td>boolean</td><td>true or false</td></tr><tr><td>disable_table_indexes</td><td>Enables/Disables the index (#) column on tables.</td><td>boolean</td><td>true or false</td></tr><tr><td>filesize_format</td><td>Set the file size units format returned from the ls command.</td><td>string</td><td>b, kb, kib, mb, mib, gb, gib, etc</td></tr><tr><td>filesize_metric</td><td>Set the file size metric (power of 1000 / power of 1024). <code>true</code> for KB,MB,GB; <code>false</code> for KiB,MiB,GiB</td><td>boolean</td><td>true of false</td></tr><tr><td>nonzero_exit_errors</td><td>Enables/Disables the reporting of non-zeros exit errors.</td><td>boolean</td><td>true or false</td></tr><tr><td>pivot_mode</td><td>Tells nushell how to pivot single row tables.</td><td>string</td><td>auto, always, never</td></tr><tr><td>plugin_dirs</td><td>Tells nushell to look in these folders for optional nushell plugins.</td><td>array</td><td>quoted string of folders delimited by commas between brackets <code>[ ]</code></td></tr><tr><td>prompt</td><td>Instructs nushell to run this command pipeline for every prompt.</td><td>string</td><td>quote command pipeline or custom command.</td></tr><tr><td>rm_always_trash</td><td>Enables/Disables nushell to always delete files to the recycle bin/trash can.</td><td>boolean</td><td>true or false</td></tr><tr><td>skip_welcome_message</td><td>Enables/Disables the nushell welcome message.</td><td>boolean</td><td>true or false</td></tr><tr><td>startup</td><td>Load and run command at startup. These commands can take the form of aliases, custom commands, or external commands.</td><td>array</td><td>quoted string of commands delimited by commas between brackets <code>[ ]</code></td></tr><tr><td>table_mode</td><td>Defines which &quot;theme&quot; that table drawing should use in nushell.</td><td>string</td><td>basic, compact, compact_double, light, thin, with_love, rounded, reinforced, heavy, none, other</td></tr></tbody></table><h3 id="color-config-section" tabindex="-1"><a class="header-anchor" href="#color-config-section" aria-hidden="true">#</a> Color Config section</h3><p>The <code>[color_config]</code> section of the <code>config.toml</code> file enables you to change the color and formatting of datatypes in nushell. This is most apparent in tables like the output of the <code>ls</code> command.</p><p>For each of the options in the color_config section, you are able to set the color alone or with one of the following attributes.</p><table><thead><tr><th>color</th><th>abbreviation</th></tr></thead><tbody><tr><td>green</td><td>g</td></tr><tr><td>red</td><td>r</td></tr><tr><td>blue</td><td>u</td></tr><tr><td>black</td><td>b</td></tr><tr><td>yellow</td><td>y</td></tr><tr><td>purple</td><td>p</td></tr><tr><td>cyan</td><td>c</td></tr><tr><td>white</td><td>w</td></tr></tbody></table><table><thead><tr><th>attribute</th><th>abbreviation</th></tr></thead><tbody><tr><td>bold</td><td>b</td></tr><tr><td>underline</td><td>u</td></tr><tr><td>italic</td><td>i</td></tr><tr><td>dimmed</td><td>d</td></tr><tr><td>reverse</td><td>r</td></tr></tbody></table><h4 id="abbreviated-examples" tabindex="-1"><a class="header-anchor" href="#abbreviated-examples" aria-hidden="true">#</a> Abbreviated Examples:</h4><ul><li><code>gb</code> means green bold</li><li><code>ru</code> means red underline</li><li><code>ud</code> means blue dimmed</li></ul><h4 id="verbose-examples" tabindex="-1"><a class="header-anchor" href="#verbose-examples" aria-hidden="true">#</a> Verbose Examples:</h4><ul><li>green_bold</li><li>red_underline</li><li>blue_dimmed</li></ul><table><thead><tr><th>Name</th><th>Purpose</th><th>Value Type</th><th>Options</th></tr></thead><tbody><tr><td>[color_config]</td><td>This is the section name</td><td>string</td><td>Outlined above</td></tr><tr><td>header_align</td><td>Apply an alignment to the header</td><td>string</td><td>Outlined above</td></tr><tr><td>header_color</td><td>Apply a color to the header</td><td>string</td><td>Outlined above</td></tr><tr><td>index_color</td><td>Apply a style of the Index (#)</td><td>string</td><td>Outlined above</td></tr><tr><td>leading_trailing_space_bg</td><td>Apply a style to leading and trailing space</td><td>string</td><td>Outlined above</td></tr><tr><td>primitive_binary</td><td>Apply a style to Primitive::Binary</td><td>string</td><td>Outlined above</td></tr><tr><td>primitive_boolean</td><td>Apply a style to Primitive::Boolean</td><td>string</td><td>Outlined above</td></tr><tr><td>primitive_columnpath</td><td>Apply a style to Primitive::ColumnPath</td><td>string</td><td>Outlined above</td></tr><tr><td>primitive_date</td><td>Apply a style to Primitive::Date</td><td>string</td><td>Outlined above</td></tr><tr><td>primitive_decimal</td><td>Apply a style to Primitive::Decimal</td><td>string</td><td>Outlined above</td></tr><tr><td>primitive_duration</td><td>Apply a style to Primitive::Duration</td><td>string</td><td>Outlined above</td></tr><tr><td>primitive_filesize</td><td>Apply a style to Primitive::Filesize</td><td>string</td><td>Outlined above</td></tr><tr><td>primitive_int</td><td>Apply a style to Primitive::Int</td><td>string</td><td>Outlined above</td></tr><tr><td>primitive_line</td><td>Apply a style to Primitive::Line</td><td>string</td><td>Outlined above</td></tr><tr><td>primitive_path</td><td>Apply a style to Primitive::Path</td><td>string</td><td>Outlined above</td></tr><tr><td>primitive_pattern</td><td>Apply a style to Primitive::Pattern</td><td>string</td><td>Outlined above</td></tr><tr><td>primitive_range</td><td>Apply a style to Primitive::Range</td><td>string</td><td>Outlined above</td></tr><tr><td>primitive_string</td><td>Apply a style to Primitive::String</td><td>string</td><td>Outlined above</td></tr><tr><td>separator_color</td><td>Apply a style to the table lines</td><td>string</td><td>Outlined above</td></tr></tbody></table><h3 id="line-editor-section" tabindex="-1"><a class="header-anchor" href="#line-editor-section" aria-hidden="true">#</a> Line Editor section</h3><p>The <code>[line_editor]</code> section of the <code>config.toml</code> controls how our line editor, <code>rustyline</code> behaves. These configuration settings are specific to the <code>rustyline</code> crate we use.</p><table><thead><tr><th>Name</th><th>Purpose</th><th>Value Type</th><th>Options</th></tr></thead><tbody><tr><td>[line_editor]</td><td>This is the section name</td><td></td><td></td></tr><tr><td>auto_add_history</td><td>Enable/Disable automatically add each non-blank line to history</td><td>boolean</td><td>true or false</td></tr><tr><td>bell_style</td><td>The bell style for the line editor</td><td>string</td><td>audible, none, visible</td></tr><tr><td>color_mode</td><td>The color mode for the line editor</td><td>string</td><td>enabled, forced, disabled</td></tr><tr><td>completion_prompt_limit</td><td>When listing completion alternatives, only display one screen of possibilities at a time</td><td>number</td><td></td></tr><tr><td>completion_type</td><td>Method used to iterate history items</td><td>string</td><td>circular, list, fuzzy - note fuzzy is not currently supported by nushell</td></tr><tr><td>edit_mode</td><td>The mode for the line editor</td><td>string</td><td>vi or emacs</td></tr><tr><td>history_duplicates</td><td>Rule to apply regarding the adding of duplicates to the history</td><td>string</td><td>alwaysadd, ignoreconsecutive</td></tr><tr><td>history_ignore_space</td><td>Enable/Disable the history to ignore space</td><td>boolean</td><td>true or false</td></tr><tr><td>keyseq_timeout_ms</td><td>Duration rustyline will wait for a character when reading an ambiguous key sequence</td><td>string</td><td>duration in milliseconds</td></tr><tr><td>max_history_size</td><td>The maximum history size</td><td>number</td><td></td></tr><tr><td>tab_stop</td><td>The number of characters for indented/outdented commands</td><td>number</td><td></td></tr><tr><td>completion_match_method</td><td>Sets case-sensitivity of autocompletion</td><td>string</td><td>case-insensitive, case-sensitive</td></tr></tbody></table><h3 id="textview-section" tabindex="-1"><a class="header-anchor" href="#textview-section" aria-hidden="true">#</a> Textview section</h3>',17),_=e("The "),v=t("code",null,"[textview]",-1),q=e(" section of the "),x=t("code",null,"config.toml",-1),w=e(" file is a section with settings for our textviewer which is currently "),S={href:"https://github.com/sharkdp/bat",target:"_blank",rel:"noopener noreferrer"},T=e("bat"),P=e(". So, all these settings apply to the "),O=t("code",null,"bat",-1),E=e(" configuration built into nushell. It won't use settings you may currently have on your system if you use "),C=t("code",null,"bat",-1),D=e("."),N=a('<table><thead><tr><th>Name</th><th>Purpose</th><th>Value Type</th><th>Options</th></tr></thead><tbody><tr><td>[textview]</td><td>This is the section name</td><td></td><td></td></tr><tr><td>colored_output</td><td>Enable/Disable whether or not the output should be colorized</td><td>boolean</td><td>true or false</td></tr><tr><td>grid</td><td>Enable/Disable a grid</td><td>boolean</td><td>true or false</td></tr><tr><td>header</td><td>Enable/Disable a header</td><td>boolean</td><td>true or false</td></tr><tr><td>line_numbers</td><td>Enable/Disable line numbers</td><td>boolean</td><td>true or false</td></tr><tr><td>pager</td><td>Set the pager to use</td><td>string</td><td>less, more, etc</td></tr><tr><td>paging_mode</td><td>Set the paging mode</td><td>string</td><td>always, quitifonescreen, never</td></tr><tr><td>snip</td><td>Enable/Disable snip</td><td>boolean</td><td>true or false</td></tr><tr><td>tab_width</td><td>The width of tab characters. Currently, a value of 0 will cause tabs to be passed through without expanding them.</td><td>number</td><td></td></tr><tr><td>term_width</td><td>The character width of the terminal</td><td>string</td><td></td></tr><tr><td>theme</td><td>Set the bat color theme to use</td><td>string</td><td></td></tr><tr><td>true_color</td><td>Enable/Disable whether the output terminal supports true color</td><td>boolean</td><td>true or false</td></tr><tr><td>use_italics</td><td>Enable/Disable italic type</td><td>boolean</td><td>true or false</td></tr><tr><td>vcs_modification_markers</td><td>Enable/Disable version control system modification markers</td><td>boolean</td><td>true or false</td></tr><tr><td>wrapping_mode</td><td>Set if and how text should be wrapped</td><td>string</td><td>character, nowrapping</td></tr></tbody></table><h3 id="path-section" tabindex="-1"><a class="header-anchor" href="#path-section" aria-hidden="true">#</a> Path section</h3><p>The <code>[path]</code> section in the <code>config.toml</code> is used to store folders that are generally where executable programs are located. The path section is an array type field so it requires quoted string directory paths delmited by commas.</p><p>You can use this command to initially populate the <code>[path]</code> section of your <code>config.toml</code> file.</p><p><code>config set path $nu.path</code></p><p>To view the <code>[path]</code> section of your <code>config.toml</code> you can type the following.</p><p><code>echo $nu.path</code></p><h3 id="environment-variables-section" tabindex="-1"><a class="header-anchor" href="#environment-variables-section" aria-hidden="true">#</a> Environment variables section</h3><p>The <code>[env]</code> section of the <code>config.toml</code> is used to store permanent environment variables that nushell can use.</p><p>You can use this command to initially populate the <code>[env]</code> section of your <code>config.toml</code> file.</p><p><code>config set env $nu.env</code></p><p>To view the <code>[env]</code> section of your <code>config.toml</code> you can type the following command.</p><p><code>echo $nu.env</code></p>',13),I={id:"example-config-toml-below-closely-matches-the-file-found-in-our-repo-here",tabindex:"-1"},A=t("a",{class:"header-anchor",href:"#example-config-toml-below-closely-matches-the-file-found-in-our-repo-here","aria-hidden":"true"},"#",-1),W=e(" Example "),R=t("code",null,"config.toml",-1),F=e(" below closely matches the file found in our repo "),L={href:"https://github.com/nushell/nushell/tree/main/docs/sample_config",target:"_blank",rel:"noopener noreferrer"},M=e("here"),z=e("."),B=a(`<div class="language-toml ext-toml"><pre class="language-toml"><code><span class="token key property">filesize_format</span> <span class="token punctuation">=</span> <span class="token string">&quot;B&quot;</span> <span class="token comment"># can be b, kb, kib, mb, mib, gb, gib, etc</span>
<span class="token key property">skip_welcome_message</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">disable_table_indexes</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
<span class="token key property">nonzero_exit_errors</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">startup</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;alias la = ls --long&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;def nudown [] {fetch https://api.github.com/repos/nushell/nushell/releases | get assets | select name download_count}&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;def nuver [] {version | pivot key value}&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token key property">table_mode</span> <span class="token punctuation">=</span> <span class="token string">&quot;other&quot;</span> <span class="token comment"># basic, compact, compact_double, light, thin, with_love, rounded, reinforced, heavy, none, other</span>
<span class="token key property">plugin_dirs</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;D:\\\\Src\\\\GitHub\\\\nu-plugin-lib\\\\samples\\\\Nu.Plugin.Len\\\\bin\\\\Debug\\\\netcoreapp3.1&quot;</span><span class="token punctuation">]</span>
<span class="token key property">pivot_mode</span> <span class="token punctuation">=</span> <span class="token string">&quot;auto&quot;</span> <span class="token comment"># auto, always, never</span>
<span class="token key property">ctrlc_exit</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
<span class="token key property">complete_from_path</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">rm_always_trash</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">prompt</span> <span class="token punctuation">=</span> <span class="token string">&quot;echo $(ansi gb) $(pwd) $(ansi reset) \\&quot;(\\&quot; $(ansi cb) $(do -i { git rev-parse --abbrev-ref HEAD | str trim }) $(ansi reset) \\&quot;)\\&quot; $(char newline) $(ansi yb) $(date --format \\&quot;%m/%d/%Y %I:%M:%S%.3f %p\\&quot; --raw) $(ansi reset) \\&quot;&gt; \\&quot; | str collect&quot;</span>

<span class="token punctuation">[</span><span class="token table class-name">color_config</span><span class="token punctuation">]</span>
<span class="token key property">primitive_int</span> <span class="token punctuation">=</span> <span class="token string">&quot;green&quot;</span>
<span class="token key property">primitive_decimal</span> <span class="token punctuation">=</span> <span class="token string">&quot;red&quot;</span>
<span class="token key property">primitive_filesize</span> <span class="token punctuation">=</span> <span class="token string">&quot;ur&quot;</span>
<span class="token key property">primitive_string</span> <span class="token punctuation">=</span> <span class="token string">&quot;pb&quot;</span>
<span class="token key property">primitive_line</span> <span class="token punctuation">=</span> <span class="token string">&quot;yellow&quot;</span>
<span class="token key property">primitive_columnpath</span> <span class="token punctuation">=</span> <span class="token string">&quot;cyan&quot;</span>
<span class="token key property">primitive_pattern</span> <span class="token punctuation">=</span> <span class="token string">&quot;white&quot;</span>
<span class="token key property">primitive_boolean</span> <span class="token punctuation">=</span> <span class="token string">&quot;green&quot;</span>
<span class="token key property">primitive_date</span> <span class="token punctuation">=</span> <span class="token string">&quot;ru&quot;</span>
<span class="token key property">primitive_duration</span> <span class="token punctuation">=</span> <span class="token string">&quot;blue&quot;</span>
<span class="token key property">primitive_range</span> <span class="token punctuation">=</span> <span class="token string">&quot;purple&quot;</span>
<span class="token key property">primitive_path</span> <span class="token punctuation">=</span> <span class="token string">&quot;yellow&quot;</span>
<span class="token key property">primitive_binary</span> <span class="token punctuation">=</span> <span class="token string">&quot;cyan&quot;</span>
<span class="token key property">separator_color</span> <span class="token punctuation">=</span> <span class="token string">&quot;purple&quot;</span>
<span class="token key property">header_align</span> <span class="token punctuation">=</span> <span class="token string">&quot;l&quot;</span> <span class="token comment"># left|l, right|r, center|c</span>
<span class="token key property">header_color</span> <span class="token punctuation">=</span> <span class="token string">&quot;c&quot;</span> <span class="token comment"># green|g, red|r, blue|u, black|b, yellow|y, purple|p, cyan|c, white|w</span>
<span class="token key property">header_bold</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">index_color</span> <span class="token punctuation">=</span> <span class="token string">&quot;rd&quot;</span>
<span class="token key property">leading_trailing_space_bg</span> <span class="token punctuation">=</span> <span class="token string">&quot;white&quot;</span>

<span class="token punctuation">[</span><span class="token table class-name">line_editor</span><span class="token punctuation">]</span>
<span class="token key property">max_history_size</span> <span class="token punctuation">=</span> <span class="token number">100000</span>
<span class="token key property">history_duplicates</span> <span class="token punctuation">=</span> <span class="token string">&quot;ignoreconsecutive&quot;</span> <span class="token comment"># alwaysadd,ignoreconsecutive</span>
<span class="token key property">history_ignore_space</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
<span class="token key property">completion_type</span> <span class="token punctuation">=</span> <span class="token string">&quot;circular&quot;</span> <span class="token comment"># circular, list, fuzzy</span>
<span class="token key property">completion_prompt_limit</span> <span class="token punctuation">=</span> <span class="token number">100</span>
<span class="token key property">keyseq_timeout_ms</span> <span class="token punctuation">=</span> <span class="token number">500</span> <span class="token comment"># ms</span>
<span class="token key property">edit_mode</span> <span class="token punctuation">=</span> <span class="token string">&quot;emacs&quot;</span> <span class="token comment"># vi, emacs</span>
<span class="token key property">auto_add_history</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">bell_style</span> <span class="token punctuation">=</span> <span class="token string">&quot;audible&quot;</span> <span class="token comment"># audible, none, visible</span>
<span class="token key property">color_mode</span> <span class="token punctuation">=</span> <span class="token string">&quot;enabled&quot;</span> <span class="token comment"># enabled, forced, disabled</span>
<span class="token key property">tab_stop</span> <span class="token punctuation">=</span> <span class="token number">4</span>

<span class="token punctuation">[</span><span class="token table class-name">textview</span><span class="token punctuation">]</span>
<span class="token key property">term_width</span> <span class="token punctuation">=</span> <span class="token string">&quot;default&quot;</span> <span class="token comment"># &quot;default&quot; or a number</span>
<span class="token key property">tab_width</span> <span class="token punctuation">=</span> <span class="token number">4</span>
<span class="token key property">colored_output</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">true_color</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">header</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">line_numbers</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">grid</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
<span class="token key property">vcs_modification_markers</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">snip</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">wrapping_mode</span> <span class="token punctuation">=</span> <span class="token string">&quot;NoWrapping&quot;</span> <span class="token comment"># Character, NoWrapping</span>
<span class="token key property">use_italics</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">paging_mode</span> <span class="token punctuation">=</span> <span class="token string">&quot;QuitIfOneScreen&quot;</span> <span class="token comment"># Always, QuitIfOneScreen, Never</span>
<span class="token key property">pager</span> <span class="token punctuation">=</span> <span class="token string">&quot;less&quot;</span>
<span class="token key property">theme</span> <span class="token punctuation">=</span> <span class="token string">&quot;TwoDark&quot;</span>

<span class="token comment"># These are from a Windows system, Mac and Linux will look slightly different</span>
<span class="token key property">path</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;C:\\\\WINDOWS\\\\system32&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;C:\\\\WINDOWS&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;C:\\\\WINDOWS\\\\System32\\\\OpenSSH\\\\&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token comment"># Some environment variables removed to protect the innocent</span>
<span class="token comment"># These are from a Windows environment, Mac and Linux will look slightly different</span>
<span class="token punctuation">[</span><span class="token table class-name">env</span><span class="token punctuation">]</span>
<span class="token key property">ALLUSERSPROFILE</span> <span class="token punctuation">=</span> <span class="token string">&quot;C:\\\\ProgramData&quot;</span>
<span class="token key property">CommonProgramFiles</span> <span class="token punctuation">=</span> <span class="token string">&quot;C:\\\\Program Files\\\\Common Files&quot;</span>
<span class="token key property">&quot;CommonProgramFiles(x86)&quot;</span> <span class="token punctuation">=</span> <span class="token string">&quot;C:\\\\Program Files (x86)\\\\Common Files&quot;</span>
<span class="token key property">CommonProgramW6432</span> <span class="token punctuation">=</span> <span class="token string">&quot;C:\\\\Program Files\\\\Common Files&quot;</span>
<span class="token key property">ComSpec</span> <span class="token punctuation">=</span> <span class="token string">&quot;C:\\\\WINDOWS\\\\system32\\\\cmd.exe&quot;</span>
<span class="token key property">DriverData</span> <span class="token punctuation">=</span> <span class="token string">&quot;C:\\\\Windows\\\\System32\\\\Drivers\\\\DriverData&quot;</span>
<span class="token key property">HOMEDRIVE</span> <span class="token punctuation">=</span> <span class="token string">&quot;C:&quot;</span>
<span class="token key property">NUMBER_OF_PROCESSORS</span> <span class="token punctuation">=</span> <span class="token string">&quot;16&quot;</span>
<span class="token key property">NVIDIAWHITELISTED</span> <span class="token punctuation">=</span> <span class="token string">&quot;0x01&quot;</span>
<span class="token key property">OS</span> <span class="token punctuation">=</span> <span class="token string">&quot;Windows_NT&quot;</span>
<span class="token key property">PATHEXT</span> <span class="token punctuation">=</span> <span class="token string">&quot;.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC&quot;</span>
<span class="token key property">POWERSHELL_DISTRIBUTION_CHANNEL</span> <span class="token punctuation">=</span> <span class="token string">&quot;MSI:Windows 10 Pro&quot;</span>
<span class="token key property">PROCESSOR_ARCHITECTURE</span> <span class="token punctuation">=</span> <span class="token string">&quot;AMD64&quot;</span>
<span class="token key property">PROCESSOR_IDENTIFIER</span> <span class="token punctuation">=</span> <span class="token string">&quot;Intel64 Family 6 Model 158 Stepping 13, GenuineIntel&quot;</span>
<span class="token key property">PROCESSOR_LEVEL</span> <span class="token punctuation">=</span> <span class="token string">&quot;6&quot;</span>
<span class="token key property">PROCESSOR_REVISION</span> <span class="token punctuation">=</span> <span class="token string">&quot;9e0d&quot;</span>
<span class="token key property">ProgramData</span> <span class="token punctuation">=</span> <span class="token string">&quot;C:\\\\ProgramData&quot;</span>
<span class="token key property">ProgramFiles</span> <span class="token punctuation">=</span> <span class="token string">&quot;C:\\\\Program Files&quot;</span>
<span class="token key property">&quot;ProgramFiles(x86)&quot;</span> <span class="token punctuation">=</span> <span class="token string">&quot;C:\\\\Program Files (x86)&quot;</span>
<span class="token key property">ProgramW6432</span> <span class="token punctuation">=</span> <span class="token string">&quot;C:\\\\Program Files&quot;</span>
<span class="token key property">PSModulePath</span> <span class="token punctuation">=</span> <span class="token string">&quot;C:\\\\Program Files\\\\WindowsPowerShell\\\\Modules;C:\\\\WINDOWS\\\\system32\\\\WindowsPowerShell\\\\v1.0\\\\Modules&quot;</span>
<span class="token key property">PUBLIC</span> <span class="token punctuation">=</span> <span class="token string">&quot;C:\\\\Users\\\\Public&quot;</span>
<span class="token key property">SHIM_MCCOMPAT</span> <span class="token punctuation">=</span> <span class="token string">&quot;0x810000001&quot;</span>
<span class="token key property">SystemDrive</span> <span class="token punctuation">=</span> <span class="token string">&quot;C:&quot;</span>
<span class="token key property">SystemRoot</span> <span class="token punctuation">=</span> <span class="token string">&quot;C:\\\\WINDOWS&quot;</span>
<span class="token key property">windir</span> <span class="token punctuation">=</span> <span class="token string">&quot;C:\\\\WINDOWS&quot;</span>
<span class="token key property">WSLENV</span> <span class="token punctuation">=</span> <span class="token string">&quot;WT_SESSION::WT_PROFILE_ID&quot;</span>
</code></pre></div><h2 id="startup-commands" tabindex="-1"><a class="header-anchor" href="#startup-commands" aria-hidden="true">#</a> Startup commands</h2><p>To run commands at start, Nushell offers a special part of the configuration that contains a list of strings which will be treated as commands you haved typed in as Nushell starts up.</p><p>Let&#39;s add a single line to print &quot;hello&quot; as Nushell starts up:</p><div class="language-text ext-text"><pre class="language-text"><code>config set startup [&quot;echo &#39;hello&#39;&quot;]
</code></pre></div><p>The startup section lets you do the configuration steps that should happen before your Nushell session begins, including adding aliases or custom commands.</p><h2 id="using-the-config-command" tabindex="-1"><a class="header-anchor" href="#using-the-config-command" aria-hidden="true">#</a> Using the <code>config</code> command</h2><h3 id="setting-variables" tabindex="-1"><a class="header-anchor" href="#setting-variables" aria-hidden="true">#</a> Setting variables</h3><p>To set one of these variables, you can use <code>config set</code>. For example:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config set line_editor.edit_mode &quot;vi&quot;
</code></pre></div><h3 id="setting-a-variable-from-the-pipeline" tabindex="-1"><a class="header-anchor" href="#setting-a-variable-from-the-pipeline" aria-hidden="true">#</a> Setting a variable from the pipeline</h3><p>There&#39;s an additional way to set a variable, and that is to use the contents of the pipeline as the value you want to use for the variable. For this, use the <code>set_into</code> flag:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo &quot;bar&quot; | config set_into foo
</code></pre></div><p>This is helpful when working with the <code>env</code> and <code>path</code> variables.</p><h3 id="listing-all-variables" tabindex="-1"><a class="header-anchor" href="#listing-all-variables" aria-hidden="true">#</a> Listing all variables</h3><p>Running the <code>config</code> command without any arguments will show a table of the current configuration settings:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 completion_type \u2502 circular
 env             \u2502 [row 51 columns]
 path            \u2502 [table 9 rows]
 startup         \u2502 [table 1 rows]
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Note: if you haven&#39;t set any configuration variables, yet, this may be empty.</p><h3 id="getting-a-variable" tabindex="-1"><a class="header-anchor" href="#getting-a-variable" aria-hidden="true">#</a> Getting a variable</h3><p>Using the <code>get</code> flag, you can retrieve the value for a given variable:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config get line_editor.edit_mode
</code></pre></div><h3 id="removing-a-variable" tabindex="-1"><a class="header-anchor" href="#removing-a-variable" aria-hidden="true">#</a> Removing a variable</h3><p>To remove a variable from the configuration, use the <code>remove</code> flag:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config remove line_editor.edit_mode
</code></pre></div><h3 id="clearing-the-whole-configuration" tabindex="-1"><a class="header-anchor" href="#clearing-the-whole-configuration" aria-hidden="true">#</a> Clearing the whole configuration</h3><p>If you want to clear the whole configuration and start fresh, you can use the <code>clear</code> flag. Of course, be careful with this as once you run it, the configuration file is also cleared.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config clear
</code></pre></div><h3 id="finding-where-the-configuration-is-stored" tabindex="-1"><a class="header-anchor" href="#finding-where-the-configuration-is-stored" aria-hidden="true">#</a> Finding where the configuration is stored</h3><p>The configuration file is loaded from a default location. To find what this location is on your system, you can ask for it using the <code>path</code> flag:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config path
/home/jonathant/.config/nu/config.toml
</code></pre></div><h2 id="configuring-nu-as-a-login-shell" tabindex="-1"><a class="header-anchor" href="#configuring-nu-as-a-login-shell" aria-hidden="true">#</a> Configuring Nu as a login shell</h2><p>To use Nu as a login shell, you&#39;ll need to configure the <code>path</code> and <code>env</code> configuration variables. With these, you&#39;ll have enough support to run external commands as a login shell.</p><p>Before switching, run Nu inside of another shell, like Bash. Then, take the environment and PATH from that shell with the following commands:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config set path $nu.path
&gt; config set env  $nu.env
</code></pre></div><p>The <code>$nu.path</code> and <code>$nu.env</code> values are set to the current PATH and environment variables, respectively. More information about these two config sections is available in the <code>config.toml</code> description. Once you set these into the configuration, they&#39;ll be available later when using Nu as a login shell.</p><p>Next, on some distros you&#39;ll also need to ensure Nu is in the /etc/shells list:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; cat /etc/shells
# /etc/shells: valid login shells
/bin/sh
/bin/dash
/bin/bash
/bin/rbash
/usr/bin/screen
/usr/bin/fish
/home/jonathan/.cargo/bin/nu
</code></pre></div><p>With this, you should be able to <code>chsh</code> and set Nu to be your login shell. After a logout, on your next login you should be greeted with a shiny Nu prompt.</p><h3 id="macos-keeping-usr-bin-open-as-open" tabindex="-1"><a class="header-anchor" href="#macos-keeping-usr-bin-open-as-open" aria-hidden="true">#</a> macOS: Keeping <code>/usr/bin/open</code> as <code>open</code></h3><p>Some tools (e.g. Emacs) rely on an <code>open</code> command to open files on Mac. As nushell has its own <code>open</code> command which has different semantics and shadows <code>/usr/bin/open</code>, these tools will error out when trying to use it. One way to work around this is to define <code>alias</code>es in your <code>startup</code> config like this:</p><div class="language-text ext-text"><pre class="language-text"><code>cat (config path)

startup = [
  &quot;alias nuopen = open&quot;,
  &quot;alias open = ^open&quot;,
]
</code></pre></div><p>Or using a one-liner:</p><div class="language-text ext-text"><pre class="language-text"><code>config set startup (config get startup | append &quot;alias nuopen = open&quot; | append &quot;alias open = ^open&quot;)
</code></pre></div><h2 id="prompt-configuration" tabindex="-1"><a class="header-anchor" href="#prompt-configuration" aria-hidden="true">#</a> Prompt configuration</h2><p>Prompt configuration is handled by setting the value of <code>prompt</code>.</p>`,45),$=e("For example, to use "),H={href:"https://starship.rs",target:"_blank",rel:"noopener noreferrer"},V=e("Starship"),U=e(", download it and enter the following command (0.18.2 and later):"),G=a(`<div class="language-text ext-text"><pre class="language-text"><code>config set prompt &quot;starship prompt&quot;
</code></pre></div><p>Now restart Nu.</p><div class="language-text ext-text"><pre class="language-text"><code>nushell on \u{1F4D9} master [$] is \u{1F4E6} v0.18.2 via \u{1F980} v1.48.0-nightly
\u276F
</code></pre></div><p>If your prompt looks a bit garbled like this:</p><div class="language-text ext-text"><pre class="language-text"><code>%{%}~%{%}
%{%}\u276F%{%}
</code></pre></div><p>you may want to unset the <code>STARSHIP_SHELL</code> environment variable when setting the prompt.</p><div class="language-text ext-text"><pre class="language-text"><code>config set prompt &quot;STARSHIP_SHELL= starship prompt&quot;
</code></pre></div>`,7);function K(Y,j){const n=i("ExternalLinkIcon");return r(),p("div",null,[d,c,u,t("p",null,[h,g,m,t("a",k,[y,s(n)]),b]),f,t("p",null,[_,v,q,x,w,t("a",S,[T,s(n)]),P,O,E,C,D]),N,t("h3",I,[A,W,R,F,t("a",L,[M,s(n)]),z]),B,t("p",null,[$,t("a",H,[V,s(n)]),U]),G])}var Q=o(l,[["render",K],["__file","configuration.html.vue"]]);export{Q as default};