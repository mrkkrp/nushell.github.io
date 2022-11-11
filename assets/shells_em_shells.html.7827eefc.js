import{_ as o,r as e,o as p,c as t,a as r,b as l,w as c,e as a,d as s}from"./app.c7ac2154.js";const u={},i=a(`<h1 id="shells-em-shells" tabindex="-1"><a class="header-anchor" href="#shells-em-shells" aria-hidden="true">#</a> Shells em shells</h1><h2 id="trabalhando-em-multiplos-diretorios" tabindex="-1"><a class="header-anchor" href="#trabalhando-em-multiplos-diretorios" aria-hidden="true">#</a> Trabalhando em m\xFAltiplos diret\xF3rios</h2><p>Embora seja comum trabalhar em um \xFAnico diret\xF3rio, pode ser \xFAtil trabalhar em m\xFAltiplos locais ao mesmo tempo. Para isso, Nu oferece o conceito de &quot;shells&quot;. Como o nome implica, eles s\xE3o uma maneira de executar m\xFAltiplos shells em um, permitindo que voc\xEA salte rapidamente entre diret\xF3rios e muito mais.</p><p>Para come\xE7ar, vamos entrar num diret\xF3rio:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>/home/jonathan/Source/nushell<span class="token punctuation">(</span>master<span class="token punctuation">)</span><span class="token operator">&gt;</span> enter <span class="token punctuation">..</span>/lark
/home/jonathan/Source/lark<span class="token punctuation">(</span>master<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token function">ls</span>
----+----------------+-----------+----------+---------+---------------+---------------
 <span class="token comment">#  | name           | type      | readonly | size    | accessed      | modified</span>
----+----------------+-----------+----------+---------+---------------+---------------
 <span class="token number">0</span>  <span class="token operator">|</span> Cargo.toml     <span class="token operator">|</span> File      <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">2.2</span> KB  <span class="token operator">|</span> <span class="token number">6</span> months ago  <span class="token operator">|</span> <span class="token number">6</span> months ago
 <span class="token number">1</span>  <span class="token operator">|</span> target         <span class="token operator">|</span> Directory <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">4.1</span> KB  <span class="token operator">|</span> <span class="token number">10</span> months ago <span class="token operator">|</span> <span class="token number">6</span> months ago
 <span class="token number">2</span>  <span class="token operator">|</span> notes          <span class="token operator">|</span> Directory <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">4.1</span> KB  <span class="token operator">|</span> <span class="token number">10</span> months ago <span class="token operator">|</span> <span class="token number">6</span> months ago
</code></pre></div><p>Entrar \xE9 semlhante a mudar de diret\xF3rio (como vimos com o comando <code>cd</code>), permitindo que voc\xEA salte para o diret\xF3rio dentro do qual vai trabalhar. Ao inv\xE9s de mudar de diret\xF3rio, n\xF3s agora estamos em dois diret\xF3rios. Para ver isso mais claramente, podemos usar o comando <code>shells</code> para listar os diret\xF3rios ativos agora:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>/home/jonathan/Source/lark<span class="token punctuation">(</span>master<span class="token punctuation">)</span><span class="token operator">&gt;</span> shells
---+---+------------+-------------------------------
 <span class="token comment"># |   | name       | path</span>
---+---+------------+-------------------------------
 <span class="token number">0</span> <span class="token operator">|</span>   <span class="token operator">|</span> filesystem <span class="token operator">|</span> /home/jonathan/Source/nushell
 <span class="token number">1</span> <span class="token operator">|</span> X <span class="token operator">|</span> filesystem <span class="token operator">|</span> /home/jonathan/Source/lark
---+---+------------+-------------------------------
</code></pre></div><p>O comando <code>shells</code> nos mostra que h\xE1 dois diret\xF3rios ativos agora: nosso diret\xF3rio original &quot;nushell&quot; e agora esse novo diret\xF3rio &quot;lark&quot;.</p><p>Podemos saltar entre esses shells com os atalhos <code>n</code> e <code>p</code>, abrevis\xE7\xF5es para &quot;next&quot; (pr\xF3ximo) e &quot;previous&quot; (anterior):</p><div class="language-text ext-text"><pre class="language-text"><code>/home/jonathan/Source/lark(master)&gt; n
/home/jonathan/Source/nushell(master)&gt; p
/home/jonathan/Source/lark(master)&gt;
</code></pre></div><p>Podemos ver a altera\xE7\xE3o de diret\xF3rios, mas sempre somos capazes de voltar para um diret\xF3rio anterior em que est\xE1vamos trabalhando. Isso nos permite trabalhar em m\xFAltiplos diret\xF3rios na mesma sess\xE3o.</p><h2 id="saindo-do-shell" tabindex="-1"><a class="header-anchor" href="#saindo-do-shell" aria-hidden="true">#</a> Saindo do shell</h2><p>Voc\xEA pode sair de um shell em que tenha entrado (usando <code>enter</code>) atrav\xE9s do comando <code>exit</code>. Se esse for o \xFAltimo shell aberto, Nu ser\xE1 encerrado.</p><p>Voc\xEA sempre pode emcerrar o Nu, mesmo que m\xFAltiplos shells estejam ativos, passando o modificador <code>--now</code> para o comando <code>exit</code>. Assim: <code>exit --now</code>.</p><h2 id="indo-alem-de-diretorios" tabindex="-1"><a class="header-anchor" href="#indo-alem-de-diretorios" aria-hidden="true">#</a> Indo al\xE9m de diret\xF3rios</h2><p>O Nu tamb\xE9m pode criar shells a partir de outras coisas al\xE9m de caminhos do sistema de arquivos. Digamos, por exemplo, que voc\xEA est\xE1 trabalhando com uma grande massa de dadose n\xE3o quer perder seu lugar dentro dela.</p>`,16),k=s("Para ver como isso funciona, vamos fazer o seguinte exerc\xEDcio. Atualmente, listamos os "),d=s("plugins"),m=s(' que desenvolvemos para o Nu no arquivo "Cargo.toml". Digamos que tenhamos acabado de criar um novo plugin no diret\xF3rio src/plugins chamado "doc.rs" e queremos saber se ele tamb\xE9m est\xE1 listado, de forma que possa ser compilado e instalado corretamente.'),h=a(`<p>Vamos entrar no arquivo &quot;Cargo.toml&quot; do c\xF3digo fonte do Nu:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>/Users/andresrobalino/Code/nushell<span class="token punctuation">(</span>master<span class="token punctuation">)</span><span class="token operator">&gt;</span> enter Cargo.toml
/<span class="token operator">&gt;</span> <span class="token function">ls</span>
------------+--------------+------------------+----------+----------
 bin        <span class="token operator">|</span> dependencies <span class="token operator">|</span> dev-dependencies <span class="token operator">|</span> lib      <span class="token operator">|</span> package
------------+--------------+------------------+----------+----------
 <span class="token punctuation">[</span><span class="token number">11</span> items<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span>object<span class="token punctuation">]</span>     <span class="token operator">|</span> <span class="token punctuation">[</span>object<span class="token punctuation">]</span>         <span class="token operator">|</span> <span class="token punctuation">[</span>object<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span>object<span class="token punctuation">]</span>
------------+--------------+------------------+----------+----------
</code></pre></div><p>At\xE9 o momento, apenas entramos no arquivo (usando o comando <code>enter</code>) e podemos ver o que h\xE1 dentro dele pela tabela que o <code>ls</code> nos retorna. Se voc\xEA prestar bastante aten\xE7\xE3o, dessa vez entramos num arquivo cujo formato o Nu entende (.toml). O Nu tamb\xE9m projeta o conte\xFAdo do arquivo em algo semelhante a um sistema de arquivos para que possamos explor\xE1-lo como se fosse um sistema de arquivos regular.</p><p>Antes de continuarmos, vamos checar os shells ativos:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>/<span class="token operator">&gt;</span> shells
---+---+-------------------------------------------------+------------------------------------
 <span class="token comment"># |   | name                                            | path</span>
---+---+-------------------------------------------------+------------------------------------
 <span class="token number">0</span> <span class="token operator">|</span>   <span class="token operator">|</span> filesystem                                      <span class="token operator">|</span> /Users/andresrobalino/Code/nushell
 <span class="token number">1</span> <span class="token operator">|</span> X <span class="token operator">|</span> <span class="token punctuation">{</span>/Users/andresrobalino/Code/nushell/Cargo.toml<span class="token punctuation">}</span> <span class="token operator">|</span> /
---+---+-------------------------------------------------+------------------------------------

</code></pre></div><p>Podemos observar que temos dois shells ativos e que estamos agora dentro do arquivo &quot;Cargo.toml&quot; com um caminho ra\xEDz padr\xE3o &quot;/&quot;. Vamos ver seu cont\xE9udo novamente:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>/<span class="token operator">&gt;</span> <span class="token function">ls</span>
------------+--------------+------------------+----------+----------
 bin        <span class="token operator">|</span> dependencies <span class="token operator">|</span> dev-dependencies <span class="token operator">|</span> lib      <span class="token operator">|</span> package
------------+--------------+------------------+----------+----------
 <span class="token punctuation">[</span><span class="token number">11</span> items<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span>object<span class="token punctuation">]</span>     <span class="token operator">|</span> <span class="token punctuation">[</span>object<span class="token punctuation">]</span>         <span class="token operator">|</span> <span class="token punctuation">[</span>object<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span>object<span class="token punctuation">]</span>
------------+--------------+------------------+----------+----------
</code></pre></div><p>O que estamos procurando pode estar dentro da coluna &quot;bin&quot;, ent\xE3o vamos entrar l\xE1:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> bin
/bin<span class="token operator">&gt;</span> <span class="token function">ls</span>
----+----------------------+---------------------------
 <span class="token comment">#  | name                 | path</span>
----+----------------------+---------------------------
 <span class="token number">0</span>  <span class="token operator">|</span> nu_plugin_inc        <span class="token operator">|</span> src/plugins/inc.rs
 <span class="token number">1</span>  <span class="token operator">|</span> nu_plugin_sum        <span class="token operator">|</span> src/plugins/sum.rs
 <span class="token number">2</span>  <span class="token operator">|</span> nu_plugin_add        <span class="token operator">|</span> src/plugins/add.rs
 <span class="token number">3</span>  <span class="token operator">|</span> nu_plugin_edit       <span class="token operator">|</span> src/plugins/edit.rs
 <span class="token number">4</span>  <span class="token operator">|</span> nu_plugin_str        <span class="token operator">|</span> src/plugins/str.rs
 <span class="token number">5</span>  <span class="token operator">|</span> nu_plugin_skip       <span class="token operator">|</span> src/plugins/skip.rs
 <span class="token number">6</span>  <span class="token operator">|</span> nu_plugin_sys        <span class="token operator">|</span> src/plugins/sys.rs
 <span class="token number">7</span>  <span class="token operator">|</span> nu_plugin_tree       <span class="token operator">|</span> src/plugins/tree.rs
 <span class="token number">8</span>  <span class="token operator">|</span> nu_plugin_binaryview <span class="token operator">|</span> src/plugins/binaryview.rs
 <span class="token number">9</span>  <span class="token operator">|</span> nu_plugin_textview   <span class="token operator">|</span> src/plugins/textview.rs
 <span class="token number">10</span> <span class="token operator">|</span> nu                   <span class="token operator">|</span> src/main.rs
----+----------------------+---------------------------
</code></pre></div><p>Daqui, sempre podemos voltar para o diret\xF3rio em que est\xE1vamos trabalhando antes usando p (de pr\xE9vio, anterior).</p><div class="language-bash ext-sh"><pre class="language-bash"><code>/bin<span class="token operator">&gt;</span> p
</code></pre></div><p>Vamos verificar os shells de novo:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>/Users/andresrobalino/Code/nushell<span class="token punctuation">(</span>master<span class="token punctuation">)</span><span class="token operator">&gt;</span> shells
---+---+-------------------------------------------------+------------------------------------
 <span class="token comment"># |   | name                                            | path</span>
---+---+-------------------------------------------------+------------------------------------
 <span class="token number">0</span> <span class="token operator">|</span> X <span class="token operator">|</span> filesystem                                      <span class="token operator">|</span> /Users/andresrobalino/Code/nushell
 <span class="token number">1</span> <span class="token operator">|</span>   <span class="token operator">|</span> <span class="token punctuation">{</span>/Users/andresrobalino/Code/nushell/Cargo.toml<span class="token punctuation">}</span> <span class="token operator">|</span> /bin
---+---+-------------------------------------------------+------------------------------------

</code></pre></div><p>Estamos de volta ao diret\xF3rio onde est\xE1vamos trabalhando antes de entrar no arquivo &quot;Cargo.toml&quot;. Agora vamos mudar para o diret\xF3rio onde ent\xE3o os c\xF3digos fonte dos plugins e rastre\xE1-los:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>/Users/andresrobalino/Code/nushell<span class="token punctuation">(</span>master<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> src/plugins/
/Users/andresrobalino/Code/nushell/src/plugins<span class="token punctuation">(</span>master<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token function">ls</span>
----+---------------+------+----------+---------+------------+------------
 <span class="token comment">#  | name          | type | readonly | size    | accessed   | modified</span>
----+---------------+------+----------+---------+------------+------------
 <span class="token number">0</span>  <span class="token operator">|</span> doc.rs        <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">3.0</span> KB  <span class="token operator">|</span> a week ago <span class="token operator">|</span> a week ago
 <span class="token number">1</span>  <span class="token operator">|</span> sum.rs        <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">3.0</span> KB  <span class="token operator">|</span> a week ago <span class="token operator">|</span> a week ago
 <span class="token number">2</span>  <span class="token operator">|</span> inc.rs        <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">11.8</span> KB <span class="token operator">|</span> a week ago <span class="token operator">|</span> a week ago
 <span class="token number">3</span>  <span class="token operator">|</span> sys.rs        <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">9.2</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">4</span>  <span class="token operator">|</span> edit.rs       <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">2.7</span> KB  <span class="token operator">|</span> a week ago <span class="token operator">|</span> a week ago
 <span class="token number">5</span>  <span class="token operator">|</span> str.rs        <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">21.4</span> KB <span class="token operator">|</span> <span class="token number">5</span> days ago <span class="token operator">|</span> <span class="token number">5</span> days ago
 <span class="token number">6</span>  <span class="token operator">|</span> secret.rs     <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">1.8</span> KB  <span class="token operator">|</span> <span class="token number">2</span> days ago <span class="token operator">|</span> <span class="token number">2</span> days ago
 <span class="token number">7</span>  <span class="token operator">|</span> skip.rs       <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">1.7</span> KB  <span class="token operator">|</span> a week ago <span class="token operator">|</span> a week ago
 <span class="token number">8</span>  <span class="token operator">|</span> binaryview.rs <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">13.0</span> KB <span class="token operator">|</span> a week ago <span class="token operator">|</span> a week ago
 <span class="token number">9</span>  <span class="token operator">|</span> tree.rs       <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">3.0</span> KB  <span class="token operator">|</span> a week ago <span class="token operator">|</span> a week ago
 <span class="token number">10</span> <span class="token operator">|</span> add.rs        <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">2.7</span> KB  <span class="token operator">|</span> a week ago <span class="token operator">|</span> a week ago
 <span class="token number">11</span> <span class="token operator">|</span> textview.rs   <span class="token operator">|</span> File <span class="token operator">|</span>          <span class="token operator">|</span> <span class="token number">9.4</span> KB  <span class="token operator">|</span> <span class="token number">5</span> days ago <span class="token operator">|</span> <span class="token number">5</span> days ago
----+---------------+------+----------+---------+------------+------------
</code></pre></div><p>Podemos agora comparar os dois para ver se h\xE1 algum plugin faltando ou a mais que precisemos adicionao ao nosso arquivo (claramente precisamos adicionar o plugin <code>doc.rs</code> que criamos ao arquivo &quot;Cargo.toml&quot;!).</p>`,16);function g(b,v){const n=e("RouterLink");return p(),t("div",null,[i,r("p",null,[k,l(n,{to:"/pt-BR/book/plugins.html"},{default:c(()=>[d]),_:1}),m]),h])}const _=o(u,[["render",g],["__file","shells_em_shells.html.vue"]]);export{_ as default};
