(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{802:function(s,a,t){"use strict";t.r(a);var e=t(35),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"frontmatter-title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[s._v("#")]),s._v(" "),t("code",[s._v(s._s(s.$frontmatter.title))])]),s._v(" "),t("div",{staticStyle:{"white-space":"pre-wrap"}},[s._v(s._s(s.$frontmatter.usage))]),s._v(" "),t("h2",{attrs:{id:"signature"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#signature"}},[s._v("#")]),s._v(" Signature")]),s._v(" "),t("p",[t("code",[s._v("> ls (pattern) --all --long --short-names --full-paths --du")])]),s._v(" "),t("h2",{attrs:{id:"parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[s._v("#")]),s._v(" Parameters")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("pattern")]),s._v(": the glob pattern to use")]),s._v(" "),t("li",[t("code",[s._v("--all")]),s._v(": Show hidden files")]),s._v(" "),t("li",[t("code",[s._v("--long")]),s._v(": List all available columns for each entry")]),s._v(" "),t("li",[t("code",[s._v("--short-names")]),s._v(": Only print the file names and not the path")]),s._v(" "),t("li",[t("code",[s._v("--full-paths")]),s._v(": display paths as absolute paths")]),s._v(" "),t("li",[t("code",[s._v("--du")]),s._v(": Display the apparent directory size in place of the directory metadata size")])]),s._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),t("p",[s._v("List all files in the current directory")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])])]),t("p",[s._v("List all files in a subdirectory")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" subdir\n")])])]),t("p",[s._v("List all files with full path in the parent directory")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])])]),t("p",[s._v("List all rust files")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" *.rs\n")])])]),t("p",[s._v("List all files and directories whose name do not contain 'bar'")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -s "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("~ bar\n")])])]),t("p",[s._v("List all dirs in your home directory")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" ~ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v("\n")])])]),t("p",[s._v("List all dirs in your home directory which have not been modified in 7 days")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -s ~ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" modified "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v("date now"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" - 7day"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);