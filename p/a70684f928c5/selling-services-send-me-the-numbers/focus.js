/* ============================================================
   KIT LIVE CLASS · AS ARMADILHAS DO FOCUS              08/10/2026
   Catálogo do Focus aprovado (08/10): a parte "THE TRAPS · TAP TO FIX"
   ganha sete jeitos de consertar o erro, todos gerados das mesmas
   armadilhas que cada aula já tem:  [rótulo, errada, certa (com <b>), nota]
     T1 A Caneta Vermelha · T2 A Balança · T3 Objection! · T4 A Peça que Falta
     T5 Desliza · T6 O Cofre · T7 O Revelador
   (T8, O Ouvido Engana, depende do som: só à mão.)
   O motor chama WolfFoco.armas(lista, titulo) no lugar do armas() antigo.
   O modo: <script src="focus.js" data-foco="T6"> manda; sem isso, um
   rodízio por linha, decidido pelo título da aula (igual nos dois lados
   da sala). Estado em S.__fo, toques "wlf-…" (nenhuma aula usa esses
   nomes); o avanço é "wlf-prox", então o ‹ Previous do motor funciona.
   ============================================================ */
(function () {
  var eu = document.currentScript, pedido = eu && eu.getAttribute('data-foco');
  var POR_LINHA = { 'WOLFLIX': ['T6', 'T7', 'T3', 'T1'], 'WOLFSTATION': ['T6', 'T4', 'T3', 'T2'], 'WOLFFY': ['T7', 'T5', 'T3', 'T2'],
    'WOLFAITH': ['T3', 'T7', 'T5', 'T2'], 'MAIN SERIES': ['T1', 'T2', 'T4', 'T5'], 'BUSINESS': ['T1', 'T2', 'T4', 'T5'] };
  function hash(s) { var x = 7; for (var i = 0; i < s.length; i++) x = (x * 31 + s.charCodeAt(i)) % 100003; return x; }
  function linha() { var b = document.querySelector('.marca b'); return b ? b.textContent.trim().toUpperCase() : ''; }
  function modo() { if (pedido) return pedido; var l = POR_LINHA[linha()] || ['T1', 'T2', 'T5', 'T7']; return l[hash(document.title) % l.length]; }
  function h(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function txt(x) { return String(x).replace(/<[^>]+>/g, ''); }
  function st() { if (!S.__fo) S.__fo = { n: 0, esc: {}, ok: {}, rev: {}, ob: {}, tk: {} }; return S.__fo; }

  /* onde a errada e a certa diferem, palavra a palavra (o "meio"); sem meio, abre uma palavra para cada lado */
  function meio(x) {
    var a = String(x[1]).split(/\s+/), b = txt(x[2]).split(/\s+/), i = 0, j = 0;
    while (i < a.length && i < b.length && a[i] === b[i]) i++;
    while (j < a.length - i && j < b.length - i && a[a.length - 1 - j] === b[b.length - 1 - j]) j++;
    if (i === a.length - j || i === b.length - j) { if (i > 0) i--; else if (j > 0) j--; }
    return { pre: b.slice(0, i).join(' '), suf: b.slice(b.length - j).join(' '), certo: b.slice(i, b.length - j).join(' '), errado: a.slice(i, a.length - j).join(' '), ia: i, fa: a.length - j, palavras: a };
  }
  function trilha(n, tot) { var s = ''; for (var k = 0; k < tot; k++) s += '<span class="' + (k === n ? 'on' : k < n ? 'foi' : '') + '">' + (k + 1) + '</span>'; return '<div class="tempos wlf-tempos">' + s + '</div>'; }
  function nota(x) { return x[3] ? '<p class="wlf-nota">' + x[3] + '</p>' : ''; }
  function proxBt(rot) { return '<button type="button" class="btn" data-a="wlf-prox">' + (rot || 'Next') + '</button>'; }
  function cab(t, sub) { return '<div class="cab st-f"><span class="rot">' + t + '</span></div>' + (sub ? '<p class="wlf-sub">' + sub + '</p>' : ''); }
  function fim(lista, frase) { return '<div class="wlf-fim vd"><p class="aprova">' + frase + '</p><ul>' + lista.map(function (x) { return '<li><b>' + x[0] + '</b> ' + x[2] + '</li>'; }).join('') + '</ul></div>'; }

  var M = {};
  /* T2 · A BALANÇA: duas versões, uma em cada prato; a certa pesa */
  M.T2 = function (lista) {
    var e = st(), n = e.n;
    if (n >= lista.length) return cab('THE BALANCE · DONE') + fim(lista, 'Every trap weighed. Now say each right one out loud.');
    var x = lista[n], esc = e.esc[n], troca = n % 2, pratos = troca ? [[x[2], 0], [h(x[1]), 1]] : [[h(x[1]), 1], [x[2], 0]];
    var lado = esc === 0 ? (troca ? 'esq' : 'dir') : '';
    return cab('THE BALANCE · ' + x[0], 'Which one weighs more? Choose, then say why the other one is light.') + trilha(n, lista.length)
      + '<div class="wlf-bal ' + lado + (esc === 1 ? ' treme' : '') + '"><i class="wlf-braco"></i><i class="wlf-pino"></i>'
      + pratos.map(function (p, k) { return '<button type="button" class="wlf-prato p' + k + (esc === p[1] ? (p[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="wlf-esc" data-n="' + p[1] + '"><small>VERSION ' + 'AB'.charAt(k) + '</small>' + p[0] + '</button>'; }).join('') + '</div>'
      + (esc === 0 ? nota(x) + '<div class="wlf-pe">' + proxBt('Next trap') + '</div>' : esc === 1 ? '<p class="recusa">That one is light. Look again.</p>' : '');
  };
  /* T5 · DESLIZA: cartas certas e erradas misturadas; o aluno julga cada uma */
  M.T5 = function (lista) {
    var e = st(), cartas = [];
    lista.forEach(function (x, k) { cartas.push([x, k % 2 ? 0 : 1]); });
    lista.forEach(function (x, k) { cartas.push([x, k % 2 ? 1 : 0]); });
    var n = e.n; if (n >= cartas.length) return cab('THE DECK · DONE') + fim(lista, 'The deck is empty. Which trap was the hardest for you?');
    var c = cartas[n], x = c[0], errada = c[1] === 1, esc = e.esc[n], acertou = esc != null && (esc === 1) === errada;
    return cab('THE DECK · CARD ' + (n + 1) + ' OF ' + cartas.length, 'Right or wrong? Swipe it.') + trilha(n, cartas.length)
      + '<div class="wlf-pilha"><div class="wlf-carta tras"></div><div class="wlf-carta' + (esc != null ? (acertou ? ' ok' : ' nao') + (esc === 1 ? ' vai-esq' : ' vai-dir') : '') + '"><small>' + x[0] + '</small><p>' + (errada ? h(x[1]) : x[2]) + '</p>'
      + (esc != null ? '<span class="wlf-selo">' + (errada ? '✗ WRONG' : '✓ RIGHT') + '</span>' : '') + '</div></div>'
      + (esc == null ? '<div class="wlf-lados"><button type="button" class="btn wlf-esq" data-a="wlf-esc" data-n="1">← Wrong</button><button type="button" class="btn wlf-dir" data-a="wlf-esc" data-n="0">Right →</button></div>'
        : '<div class="wlf-res">' + (acertou ? '<p class="aprova">Yes!</p>' : '<p class="recusa">Not this time.</p>') + (errada ? '<p class="wlf-certa">' + x[2] + '</p>' : '') + nota(x) + '<div class="wlf-pe">' + proxBt('Next card') + '</div></div>');
  };
  /* T7 · O REVELADOR: o aluno diz a certa; depois a foto revela */
  M.T7 = function (lista) {
    var e = st(), n = e.n;
    if (n >= lista.length) return cab('THE DARKROOM · DONE') + fim(lista, 'All four photos developed.');
    var x = lista[n], rv = e.rev[n];
    return cab('THE DARKROOM · ' + x[0], 'Say it the right way first. Then develop the photo.') + trilha(n, lista.length)
      + '<div class="wlf-foto' + (rv ? ' revela' : '') + '"><div class="wlf-velha"><span>' + h(x[1]) + '</span></div><div class="wlf-nova"><span>' + x[2] + '</span></div><i class="wlf-alca"></i></div>'
      + (rv ? nota(x) + '<div class="wlf-pe">' + proxBt('Next photo') + '</div>' : '<div class="wlf-pe"><button type="button" class="btn cheio" data-a="wlf-rev">Develop the photo</button></div>');
  };
  /* T3 · OBJECTION!: o professor lê (certa ou errada); o aluno objeta ou não */
  M.T3 = function (lista) {
    var e = st(), itens = [];
    lista.forEach(function (x, k) { itens.push([x, k % 2 ? 0 : 1]); itens.push([x, k % 2 ? 1 : 0]); });
    var n = e.n; if (n >= itens.length) return cab('THE COURT · DONE') + fim(lista, 'Court dismissed. These are the four traps.');
    var it = itens[n], x = it[0], errada = it[1] === 1, ob = e.ob[n], frase = errada ? h(x[1]) : x[2];
    var corpo = '<div class="wlf-corte"><div class="wlf-ler so-prof"><small>READ THIS OUT LOUD (only you see it)</small><p>“' + frase + '”</p></div>'
      + '<p class="dica-aluno wlf-ouve">Listen to your teacher. Is it right?</p>';
    if (ob == null) corpo += '<div class="wlf-lados"><button type="button" class="wlf-objection" data-a="wlf-ob" data-n="1">OBJECTION!</button><button type="button" class="btn" data-a="wlf-ob" data-n="0">No objection</button></div>';
    else {
      var acertou = (ob === 1) === errada;
      corpo += '<p class="' + (acertou ? 'aprova' : 'recusa') + '">' + (errada ? (acertou ? 'Sustained! Now say it right.' : 'It was wrong! Listen again.') : (acertou ? 'Right: that one was correct.' : 'Overruled: that one was correct.')) + '</p>'
        + '<div class="wlf-mostra"><s>' + h(x[1]) + '</s><span>' + x[2] + '</span></div>' + nota(x) + '<div class="wlf-pe">' + proxBt('Next sentence') + '</div>';
    }
    return cab('THE COURT · ' + (n + 1) + ' OF ' + itens.length, 'The teacher reads a sentence. Wrong? Shout OBJECTION!') + trilha(n, itens.length) + corpo + '</div>';
  };
  /* T6 · O COFRE e T4 · A PEÇA QUE FALTA: a frase com o buraco no lugar do erro; escolher a peça certa */
  function buraco(lista, skin) {
    var e = st(), n = e.n, cofre = skin === 'cofre';
    if (n >= lista.length) return cab(cofre ? 'THE SAFE · OPEN' : 'THE MISSING PIECE · DONE') + (cofre ? '<div class="wlf-cofre aberto"><i></i></div>' : '') + fim(lista, cofre ? 'Four locks, four fixes. The safe is open.' : 'Every sentence is whole again.');
    var x = lista[n], m = meio(x), esc = e.esc[n];
    var outra = lista[(n + 1) % lista.length], mo = meio(outra);
    var ops = [[m.certo, 0], [m.errado || '—', 1]]; if (!cofre && mo.certo && mo.certo !== m.certo && mo.certo !== m.errado) ops.push([mo.certo, 2]);
    var r = n % ops.length; ops = ops.slice(r).concat(ops.slice(0, r));
    var frase = '<span class="wlf-f">' + h(m.pre) + ' <b class="wlf-buraco' + (esc === 0 ? ' cheio' : '') + '">' + (esc === 0 ? h(m.certo) : '') + '</b> ' + h(m.suf) + '</span>';
    var travas = cofre ? '<div class="wlf-travas">' + lista.map(function (y, k) { return '<span class="' + (k < n || (k === n && esc === 0) ? 'aberta' : k === n ? 'agora' : '') + '">' + (k < n || (k === n && esc === 0) ? '✓' : '🔒') + '</span>'; }).join('') + '</div>' : '';
    return cab((cofre ? 'THE SAFE · LOCK ' : 'THE MISSING PIECE · ') + (n + 1) + ' · ' + x[0], cofre ? 'Turn the dial to the right piece. The lock opens.' : 'Pick the piece that closes the sentence.')
      + travas + '<div class="wlf-buraco-cena ' + skin + '">' + frase
      + '<div class="wlf-pecas">' + ops.map(function (o) { return '<button type="button" class="wlf-peca' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="wlf-esc" data-n="' + o[1] + '">' + h(o[0]) + '</button>'; }).join('') + '</div></div>'
      + (esc === 0 ? nota(x) + '<div class="wlf-pe">' + proxBt(cofre ? 'Next lock' : 'Next sentence') + '</div>' : esc != null ? '<p class="recusa">It doesn’t fit. Read it out loud and try again.</p>' : '');
  }
  M.T6 = function (lista) { return buraco(lista, 'cofre'); };
  M.T4 = function (lista) { return buraco(lista, 'pecas'); };
  /* T1 · A CANETA VERMELHA: as frases erradas num bilhete; o aluno toca no erro */
  M.T1 = function (lista) {
    var e = st(), feitas = lista.filter(function (x, k) { return e.ok[k]; }).length;
    var corpo = lista.map(function (x, k) {
      var m = meio(x);
      if (e.ok[k]) return '<span class="wlf-linha">' + h(m.palavras.slice(0, m.ia).join(' ')) + ' <span class="wlf-par"><s>' + h(m.palavras.slice(m.ia, m.fa).join(' ') || '‸') + '</s><span class="wlf-mao">' + h(m.certo) + '</span></span> ' + h(m.palavras.slice(m.fa).join(' ')) + '</span>';
      return '<span class="wlf-linha">' + m.palavras.map(function (w, j) { return '<button type="button" class="wlf-tok' + (e.tk[k + ':' + j] ? ' errou' : '') + '" data-a="wlf-tok" data-n="' + k + '" data-v="' + j + '">' + h(w) + '</button>'; }).join(' ') + '</span>';
    }).join(' ');
    return cab('THE RED PEN · ' + feitas + ' OF ' + lista.length, 'Something is wrong in every sentence. Tap the mistake, then say the sentence right.')
      + '<div class="wlf-memo"><p class="wlf-memo-cab">NOTE · PLEASE CHECK BEFORE SENDING</p><p>' + corpo + '</p></div>'
      + (feitas === lista.length ? fim(lista, 'Clean copy. Ready to send.') : '');
  };

  TOQUES['wlf-esc'] = function (b, n) { st().esc[st().n] = n; };
  TOQUES['wlf-prox'] = function () { st().n++; };
  TOQUES['wlf-rev'] = function () { st().rev[st().n] = 1; };
  TOQUES['wlf-ob'] = function (b, n) { st().ob[st().n] = n; };
  TOQUES['wlf-tok'] = function (b, n, v) {
    var e = st(), lista = WolfFoco.ultima; if (!lista) return false;
    var m = meio(lista[n]), j = +v, ini = m.ia, fimx = Math.max(m.fa, m.ia + 1);
    if (m.ia === m.fa) { ini = Math.max(0, m.ia - 1); fimx = m.ia + 1; }
    if (j >= ini && j < fimx) e.ok[n] = 1; else e.tk[n + ':' + j] = 1;
  };

  /* o subtítulo da cena ainda manda "tap SHOW ME" (o gesto antigo): troca pelo gesto do modo */
  var INSTR = { T1: 'Find the mistake in each sentence. Then say it right.', T2: 'Weigh two versions. Then say why the right one wins.', T3: 'The teacher reads. Catch the wrong ones.',
    T4: 'Find the missing piece. Then say the whole sentence.', T5: 'Right or wrong? Judge each card.', T6: 'Fix each sentence to open the safe.', T7: 'Say it right first. Then develop the photo.' };
  function subtitulo() {
    [].forEach.call(document.querySelectorAll('#palco .cena > .cab p'), function (p) {
      var t = p.textContent;
      if (/^(Listen, then )?Say each (trap|one|wrong line) the right way(,? out loud)?\. Then tap (SHOW ME|it)\.$/.test(t)) p.textContent = INSTR[WolfFoco.modo] || t;
      else if (/ Then tap SHOW ME\.$/.test(t)) p.textContent = t.replace(/ Then tap SHOW ME\.$/, '');
    });
  }
  window.WolfFoco = {
    modo: modo(),
    armas: function (lista, titulo) { WolfFoco.ultima = lista; setTimeout(subtitulo, 0); var f = M[WolfFoco.modo] || M.T2; return '<div class="wlf wlf-' + WolfFoco.modo + '">' + f(lista, titulo) + '</div>'; }
  };

  var css = document.createElement('style');
  css.textContent = ''
    + '.wlf{display:grid;gap:12px;margin-top:6px}.wlf .cab{margin-bottom:0}.wlf-sub{margin:-4px 0 0;color:var(--t2);font:600 15px var(--ui)}'
    + '.wlf-tempos{justify-content:flex-start}.wlf-pe{display:flex;justify-content:flex-end;gap:8px}.wlf-nota{margin:0;color:var(--t2);font:600 15px/1.5 var(--ui)}'
    + '.wlf-fim ul{margin:6px 0 0;padding-left:18px;display:grid;gap:6px;color:var(--t1)}.wlf-fim li b{color:var(--ac);margin-right:6px;font-size:.85em;letter-spacing:.06em}.wlf-fim{padding:16px 20px}'
    /* T2 */
    + '.wlf-bal{position:relative;height:270px;max-width:900px;width:100%;margin:0 auto}'
    + '.wlf-braco{position:absolute;left:8%;right:8%;top:60px;height:5px;border-radius:5px;background:var(--ac2,var(--ac));transition:transform .5s cubic-bezier(.3,1.4,.5,1)}'
    + '.wlf-pino{position:absolute;left:50%;top:48px;width:20px;height:150px;margin-left:-10px;background:linear-gradient(var(--ac2,var(--ac)),transparent);clip-path:polygon(40% 0,60% 0,100% 100%,0 100%)}'
    + '.wlf-prato{position:absolute;top:84px;width:42%;min-height:110px;padding:14px 16px;border-radius:16px;border:1.5px solid var(--fio2);background:var(--vidro2);text-align:left;font:600 clamp(16px,1.25vw,20px)/1.4 var(--ui);color:var(--t1);transition:transform .5s cubic-bezier(.3,1.4,.5,1)}'
    + '.wlf-prato small{display:block;font:800 11px var(--ui);letter-spacing:.14em;color:var(--t3);margin-bottom:6px}.wlf-prato.p0{left:3%}.wlf-prato.p1{right:3%}'
    + '.wlf-bal.dir .wlf-braco{transform:rotate(4deg)}.wlf-bal.dir .p1{transform:translateY(34px)}.wlf-bal.dir .p0{transform:translateY(-14px)}'
    + '.wlf-bal.esq .wlf-braco{transform:rotate(-4deg)}.wlf-bal.esq .p0{transform:translateY(34px)}.wlf-bal.esq .p1{transform:translateY(-14px)}'
    + '.wlf-prato.certo{border-color:var(--ok);background:color-mix(in srgb,var(--ok) 14%,transparent)}.wlf-prato.errado{border-color:var(--erro);opacity:.7}'
    + '.wlf-bal.treme .wlf-braco{animation:wlfTreme .4s}@keyframes wlfTreme{25%{transform:rotate(-2deg)}75%{transform:rotate(2deg)}}'
    /* T5 */
    + '.wlf-pilha{position:relative;width:min(460px,100%);height:180px;margin:6px auto 0}'
    + '.wlf-carta{position:absolute;inset:0;border-radius:22px;padding:22px 24px;background:linear-gradient(160deg,var(--ac2,var(--ac)),var(--ac));color:#1a120c;box-shadow:0 18px 40px rgba(0,0,0,.5);transition:transform .45s,opacity .45s}'
    + '.wlf-carta.tras{transform:rotate(-5deg) translate(-8px,6px);opacity:.35}.wlf-carta small{display:block;font:800 11.5px var(--ui);letter-spacing:.12em;opacity:.7;margin-bottom:10px}'
    + '.wlf-carta p{margin:0;font:800 clamp(22px,1.9vw,30px)/1.25 var(--ui)}.wlf-carta p b{text-decoration:underline}'
    + '.wlf-carta.vai-esq{transform:translateX(-30px) rotate(-6deg)}.wlf-carta.vai-dir{transform:translateX(30px) rotate(6deg)}'
    + '.wlf-selo{position:absolute;top:16px;right:16px;font:900 15px var(--ui);padding:4px 10px;border:3px solid #1a120c;border-radius:8px;transform:rotate(8deg)}'
    + '.wlf-lados{display:flex;justify-content:center;gap:12px}.wlf-esq{border-color:var(--erro)!important;color:var(--erro)!important}.wlf-dir{border-color:var(--ok)!important;color:var(--ok)!important}'
    + '.wlf-res{display:grid;gap:6px;max-width:640px;margin:0 auto;width:100%}.wlf-certa{margin:0;font:700 19px var(--ui);color:var(--ok)}'
    /* T7 */
    + '.wlf-foto{position:relative;height:200px;max-width:860px;width:100%;margin:6px auto 0;border-radius:14px;overflow:hidden;border:8px solid color-mix(in srgb,var(--tinta) 80%,transparent);box-shadow:var(--sombra)}'
    + '.wlf-velha,.wlf-nova{position:absolute;inset:0;display:grid;place-items:center;padding:0 28px;text-align:center;font:800 clamp(22px,2vw,34px)/1.25 var(--ui)}'
    + '.wlf-velha{background:#2b2420;color:#c8b6a6;text-decoration:line-through;text-decoration-color:var(--erro);filter:sepia(.4)}'
    + '.wlf-nova{background:linear-gradient(135deg,var(--ac),color-mix(in srgb,var(--ac) 50%,#000));color:#fff;clip-path:inset(0 0 0 100%);transition:clip-path 1.2s ease}'
    + '.wlf-alca{position:absolute;top:0;bottom:0;left:100%;width:4px;background:#fff;transition:left 1.2s ease}.wlf-foto.revela .wlf-nova{clip-path:inset(0 0 0 0)}.wlf-foto.revela .wlf-alca{left:0;opacity:0}'
    /* T3 */
    + '.wlf-corte{display:grid;gap:12px;max-width:760px;width:100%;margin:0 auto}.wlf-ler{padding:16px 20px;border-radius:18px;background:var(--vidro2);border:1px dashed var(--fio2)}'
    + '.wlf-ler small{font:800 11.5px var(--ui);letter-spacing:.12em;color:var(--t3)}.wlf-ler p{margin:6px 0 0;font:700 clamp(20px,1.6vw,26px)/1.35 var(--ui)}'
    + '.wlf-objection{min-height:56px;padding:0 28px;border-radius:16px;border:0;background:var(--erro);color:#1b0f12;font:900 22px var(--ui);letter-spacing:.04em;transform:rotate(-2deg);box-shadow:0 10px 26px color-mix(in srgb,var(--erro) 40%,transparent)}'
    + '.wlf-mostra{display:grid;gap:4px;font:700 18px var(--ui)}.wlf-mostra s{color:var(--erro)}.wlf-mostra span{color:var(--ok)}.wlf-ouve{display:none;text-align:center}html.wl-sala-aluno .wlf-ouve{display:block}'
    /* T6 e T4 */
    + '.wlf-travas{display:flex;gap:8px}.wlf-travas span{width:46px;height:46px;border-radius:12px;display:grid;place-items:center;border:1.5px solid var(--fio2);background:var(--vidro);font-size:18px}'
    + '.wlf-travas .agora{border-color:var(--am,var(--ac))}.wlf-travas .aberta{border-color:var(--ok);color:var(--ok);background:color-mix(in srgb,var(--ok) 12%,transparent)}'
    + '.wlf-buraco-cena{display:grid;gap:16px;padding:22px 24px;border-radius:20px;background:var(--vidro);border:1px solid var(--fio)}'
    + '.wlf-f{font:700 clamp(22px,1.9vw,32px)/1.4 var(--ui)}.wlf-buraco{display:inline-block;min-width:110px;border-bottom:3px dashed var(--ac);text-align:center;color:var(--ok)}.wlf-buraco.cheio{border-bottom-style:solid;border-color:var(--ok)}'
    + '.wlf-pecas{display:flex;gap:10px;flex-wrap:wrap}.wlf-peca{min-height:48px;padding:0 18px;border-radius:12px;border:1.5px solid var(--fio2);background:var(--vidro2);font:700 18px var(--ui);color:var(--t1)}'
    + '.wlf-peca.certo{border-color:var(--ok);background:color-mix(in srgb,var(--ok) 16%,transparent)}.wlf-peca.errado{border-color:var(--erro);text-decoration:line-through;opacity:.7}'
    + '.pecas .wlf-peca{border-radius:4px;border-width:3px;box-shadow:inset 0 -4px 0 rgba(0,0,0,.25)}.pecas .wlf-buraco{border-bottom-width:4px}'
    + '.wlf-cofre{width:140px;height:140px;margin:0 auto;border-radius:20px;border:3px solid var(--ok);display:grid;place-items:center}.wlf-cofre i{width:70px;height:70px;border-radius:50%;border:6px solid var(--ok)}'
    /* T1 */
    + '.wlf-memo{max-width:980px;width:100%;margin:0 auto;padding:20px 26px 24px;border-radius:8px;background:repeating-linear-gradient(transparent 0 2.3em,rgba(255,255,255,.05) 2.3em 2.4em),#1d1a1f;color:var(--t1);border:1px solid var(--fio2);box-shadow:var(--sombra);transform:rotate(-.4deg)}'
    + '.wlf-memo-cab{margin:0 0 8px;padding-bottom:6px;border-bottom:1px solid var(--fio2);font:800 11px var(--ui);letter-spacing:.14em;color:var(--t3)}'
    + '.wlf-memo p{margin:0;font:600 clamp(18px,1.4vw,22px)/2.4 var(--ui)}.wlf-linha{margin-right:10px}'
    + '.wlf-tok{border:0;background:none;padding:0 1px;font:inherit;color:inherit;cursor:pointer;border-radius:4px}.wlf-tok:hover{background:rgba(255,120,120,.12)}.wlf-tok.errou{animation:wlfTreme .35s;color:var(--t3)}'
    + '.wlf-par{position:relative;display:inline-block;line-height:1.3}.wlf-par s{text-decoration-color:#ff6b6b;text-decoration-thickness:3px;color:var(--t3)}'
    + '.wlf-mao{position:absolute;left:0;top:-1.1em;white-space:nowrap;font:700 1.1em Caveat,cursive;color:#ff7a7a}'
    + '@media (max-width:720px){.wlf-bal{height:auto;display:grid;gap:10px}.wlf-braco,.wlf-pino{display:none}.wlf-prato{position:static;width:100%;transform:none!important}.wlf-pilha{height:240px}}';
  document.head.appendChild(css);
})();
