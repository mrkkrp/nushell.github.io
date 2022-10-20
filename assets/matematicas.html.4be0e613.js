import{_ as e,o as a,c as o,e as d}from"./app.f650a2d3.js";const r={},i=d(`<h1 id="matematicas" tabindex="-1"><a class="header-anchor" href="#matematicas" aria-hidden="true">#</a> Matem\xE1ticas</h1><p>Hay veces que simplemente necesitas sumar un par de n\xFAmeros cuando te encuentras resolviendo problemas. Nu ofrece un conjunto de operaciones matem\xE1ticas b\xE1sicas que puedes utilizar. Expresiones matem\xE1ticas se encuentran disponibles cuando llamas a un comando.</p><h2 id="sumar-restar-mupltiplicar-dividir" tabindex="-1"><a class="header-anchor" href="#sumar-restar-mupltiplicar-dividir" aria-hidden="true">#</a> Sumar, Restar, Mupltiplicar, Dividir</h2><div class="language-text ext-text"><pre class="language-text"><code>&gt; 1 + 3
4
</code></pre></div><p>En Nu puedes realizar lo usual: sumar, restar, mutiplicar y dividir con los operadores <code>+</code>, <code>-</code>, <code>*</code>, y <code>/</code> respectivamente. Precedencia de operadores es respetada, por lo que <code>1 + 2 * 3</code> ser\xE1 tratado como <code>1 + (2 * 3)</code>. Lo que nos lleva a par\xE9ntesis.</p><h2 id="parentesis" tabindex="-1"><a class="header-anchor" href="#parentesis" aria-hidden="true">#</a> Par\xE9ntesis</h2><p>Puedes usar par\xE9ntesis para agrupar expresiones matem\xE1ticas en modo <code>math</code>. Esto te permite escribir <code>(1 + 2) * 3</code> si deseas que adici\xF3n tenga mayor precedencia.</p><h2 id="in-y-not-in" tabindex="-1"><a class="header-anchor" href="#in-y-not-in" aria-hidden="true">#</a> <code>in</code> y <code>not-in</code></h2><p>Puedes revisar si un valor se encuentra dentro de un conjunto de valores o no, usando los operadores <code>in</code> y <code>not-in</code>.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; 1 in [1 2 3]
true
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>&gt; 1 not-in [1 2 3]
false
</code></pre></div><h2 id="y" tabindex="-1"><a class="header-anchor" href="#y" aria-hidden="true">#</a> =~ y !~</h2><p>Puedes revisar si una cadena se encuentra dentro de otra cadena o no, usando <code>=~</code> y <code>!~</code>.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; &quot;gallinagallo&quot; =~ &quot;gallo&quot;
true
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>&gt; &quot;gallinagallo&quot; !~ &quot;pollito&quot;
true
</code></pre></div><h2 id="comparaciones" tabindex="-1"><a class="header-anchor" href="#comparaciones" aria-hidden="true">#</a> Comparaciones</h2><p>Los siguientes comparadores tambi\xE9n se encuentran disponibles:</p><ul><li><code>&lt;</code> - menor que</li><li><code>&lt;=</code> - menor o igual que</li><li><code>&gt;</code> - mayor que</li><li><code>&gt;=</code> - mayor o igual que</li><li><code>==</code> - igual a</li><li><code>!=</code> - no es igual a</li></ul><h2 id="operadores-compuestos" tabindex="-1"><a class="header-anchor" href="#operadores-compuestos" aria-hidden="true">#</a> Operadores Compuestos</h2><p>Nushell tambi\xE9n soporta <code>&amp;&amp;</code> y <code>||</code> para unir dos operaciones que regresen valores booleanos, usando <code>y</code> y <code>o</code> respectivamente. Por ejemplo: <code>ls | where name in [&quot;uno&quot; &quot;dos&quot; &quot;tres&quot;] &amp;&amp; size &gt; 10kb</code></p><h2 id="orden-de-operaciones" tabindex="-1"><a class="header-anchor" href="#orden-de-operaciones" aria-hidden="true">#</a> Orden de operaciones</h2><p>Las operaciones matem\xE1ticas son evaluadas de la siguiente manera (de mayor precedencia a menor):</p><ul><li>Parentesis (<code>()</code>)</li><li>Multiplicaci\xF3n (<code>*</code>) y Divisi\xF3n (<code>/</code>)</li><li>Suma (<code>+</code>) y Resta (<code>-</code>)</li></ul><div class="language-text ext-text"><pre class="language-text"><code>&gt; 3 * (1 + 2)
9
</code></pre></div><h2 id="modo-matematico-abreviado" tabindex="-1"><a class="header-anchor" href="#modo-matematico-abreviado" aria-hidden="true">#</a> Modo matem\xE1tico abreviado</h2><p>Hay una variaci\xF3n abreviada &quot;short-hand&quot; en modo matem\xE1tico inclu\xEDda en Nushell. La raz\xF3n se debe a que permite una forma de acceder columnas de manera m\xE1s simple.</p><p>Es probable que ya la usaste antes. Por ejemplo, supongamos que deseamos ver filas de <code>ls</code> donde para cada uno por lo menos tenga 10 kilobytes, podemos escribir:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | where size &gt; 10kb
</code></pre></div><p>El comando <code>where memoria &gt; 10kb</code> tiene dos partes: El nombre del comando <code>where</code> y su abreviaci\xF3n expresi\xF3n matem\xE1tica <code>size &gt; 10kb</code>. Indicamos <code>abreviada</code> debido a que <code>size</code> es una versi\xF3n acortada de escribir <code>$it.size</code>. Si observamos su forma completamente expandida, ver\xEDamos:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | where {|$it| $it.size &gt; 10kb }
</code></pre></div><p>Usamos el modo abreviado para trabajar con datos de columnas para no tener que repetir la forma expandida siempre.</p><p>Para el funcionamiento apropiado de la abreviaci\xF3n acortada y por lo tanto su expansi\xF3n, el nombre de la columna tiene que aparecer en el lado izquierdo de la operaci\xF3n. Arriba, <code>size</code> aparece en en lado izquierdo de la comparaci\xF3n que permite la expresi\xF3n expanderse al modo completo matem\xE1tico del bloque.</p>`,32),t=[i];function s(c,n){return a(),o("div",null,t)}const u=e(r,[["render",s],["__file","matematicas.html.vue"]]);export{u as default};
