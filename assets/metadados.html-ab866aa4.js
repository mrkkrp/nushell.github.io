import{_ as a,p as e,q as o,a1 as r}from"./framework-344bb0e4.js";const s={},d=r('<h1 id="metadados" tabindex="-1"><a class="header-anchor" href="#metadados" aria-hidden="true">#</a> Metadados</h1><p>Todos os valores que fluem para/de um comando no Nu são marcados com metadados. Você verá isso no código-fonte normalmente como um <code>Tagged&lt;Value&gt;</code>.</p><p>Apesar de os metadados que são monitorados ainda estão em fase inicial, esperamos expandir isso conforme o Nu amadurecer. Atualmente, existem dois tipos de metadados monitorados em cada valor:</p><h2 id="anchor" tabindex="-1"><a class="header-anchor" href="#anchor" aria-hidden="true">#</a> Anchor</h2><p>Anchor representa a localização de origem de um valor. Se o valor foi carregado de um arquivo, vai ser o nome do arquivo. Se foi carregado de uma URL, vai ser a URL, e assim por diante.</p><h2 id="span" tabindex="-1"><a class="header-anchor" href="#span" aria-hidden="true">#</a> Span</h2><p>Um Span são as localizações de início e fim do valor que foi criado ou referenciado na linha de comando. Eles são normalmente vistos como o underline abaixo de uma mensagem de erro.</p><p>Enquanto spans de linguagens de programação tradicionalmente carregam também o arquivo de origem do span, aqui assumimos que um span While spans from programming languages traditionally also carry the file the span came from, aqui assumimos que o span sempre abrange um valor referenciado na linha de comando, em vez de em um arquivo de origem. Quando o Nu for capaz de executar seus próprios arquivos fonte, isso provavelmente vai precisar ser revisado.</p>',8),n=[d];function i(m,t){return e(),o("div",null,n)}const u=a(s,[["render",i],["__file","metadados.html.vue"]]);export{u as default};