/* ================================================================
   LIÇÃO DE CASA 2.0 · o motor                           23/10/2026
   Catálogo aprovado pelo Carlos (licao-de-casa-2-0.html): 07 certo
   vale · 10 cinco rodadas ~10 min · 01 listening de bolso · 04 repita
   e veja · 08 por que errei · 13 relatório para o professor.

   As cinco rodadas (W·O·L·F + You, na ordem em que o aluno faz):
     L  Listen    um diálogo curto NOVO com as palavras da aula; pausa,
                  0.75×, transcrição só depois de ouvir; 2 perguntas.
     O  Out loud  repita e veja: o reconhecimento de voz do navegador
                  marca as palavras que ele entendeu. NÃO é nota.
                  24/10/2026: com a "Atualização de fala" baixada no app,
                  o corretor de SONS (no aparelho, pela ponte 'hw-pron')
                  marca a palavra e o som trocado ("th → you said t") +
                  uma dica; o professor recebe sons certos / trocas.
     F  Focus     montar / juntar / consertar; antes de marcar errado
                  o Wolf confere ("certo vale"); "Why?" no erro.
     W  Write     escrita curta com o corretor da aula + o Wolf
                  (no máximo 2 correções e um elogio).
     Y  You       2 perguntas pessoais, falando ou digitando; o Wolf
                  corrige UM ponto.

   O conteúdo de cada aula fica em licao.js (window.HW2 = {...}, JSON
   puro: o gera_audio.py lê o mesmo arquivo). Os tempos das falas vêm
   de audio/tempos.js (window.HW2_TEMPOS), escrito pelo gera_audio.py.

   A IA NUNCA é chamada daqui direto: a lição está em outra origem
   (Cloudflare) e não tem a sessão do aluno. Ela pede à plataforma por
   postMessage ({wolf:'hw-ia'}), e a plataforma chama o wolf-aluno com
   a sessão dele (a chave da API mora no Supabase; teto do mês e 80
   por dia valem igual). Fora da plataforma a IA some com elegância:
   cada lugar que usaria a IA tem uma saída sem ela.

   O recado do fim é o MESMO de sempre (wolf:'hw-resultado', placar de
   primeira tentativa) + um recado novo, wolf:'hw2-relatorio'.

   28/10/2026 · O WOLF ACOMPANHA A LIÇÃO (desenho HFPprMBW1gub8EhEmMYAGe):
     · abertura: o Wolf chama o aluno pelo nome e liga com algo real
       ("Oi, Marina! Semana passada o -es te pegou…") + uma pergunta
       pessoal ligada ao assunto (hw_abertura, feita 1 vez por dia);
       o aluno responde em inglês e o Wolf comenta (hw_comenta).
     · Focus: acertou de primeira = só comemora (grátis). 1º erro =
       a PISTA PRONTA (pistas.js, window.HW2_WOLF, escrita uma vez em
       lote; nunca entrega a resposta). 2º erro = o Wolf ao vivo lê a
       resposta e explica o erro DELE, com exemplo da vida dele
       (hw_explica; a parte geral fica guardada para o próximo aluno).
     · o "por quê?" (orbe) em toda pergunta, já respondida: o aluno
       escreve a dúvida do jeito dele (porque + duvida).
     · fim: o que melhorou, o que volta, as correções vão para o
       caderno (wolf:'hw2-caderno') e o professor recebe o resumo.
     · A1/A2: o Wolf fala português simples; B1+: só inglês. Lição
       bíblica (WOLFAITH): nunca marca o versículo como errado.
     · as respostas que a tela mostra chegam em pedaços (vivo:true →
       wolf:'hw-ia-parcial').
   ================================================================ */
(function () {
  'use strict';
  var H = window.HW2;
  if (!H) { document.body.innerHTML = '<p style="padding:20px">licao.js is missing.</p>'; return; }
  var TEMPOS = window.HW2_TEMPOS || {};
  var Q = new URLSearchParams(location.search);
  var PARA = Q.get('wl');
  var NA_PLATAFORMA = (function () { try { return window.parent !== window && !!PARA; } catch (e) { return false; } })();
  var ORDEM = ['listen', 'out', 'focus', 'write', 'you'];
  /* 28/10 · o Wolf na lição: pistas prontas (pistas.js), a língua do Wolf e a regra da lição bíblica */
  var WOLF = window.HW2_WOLF || {};
  var PISTAS = WOLF.pistas || {};
  var BAIXO = /^A[12]/i.test(String(H.nivel || ''));
  var BIBLICA = !!WOLF.biblica || /WOLFAITH/i.test(decodeURIComponent(location.pathname)) || /WOLFAITH/i.test(String(H.linha || ''));
  function W(en, pt) { return BAIXO ? pt : en; }
  var VIVAS = BAIXO ? ['Isso!', 'Boa!', 'Perfeito!', 'Mandou bem!'] : ['Nice!', 'Spot on!', 'Exactly!', 'Well done!'];
  var NOME = { listen: 'Listen', out: 'Out loud', focus: 'Focus', write: 'Write', you: 'You' };
  var LETRA = { listen: 'L', out: 'O', focus: 'F', write: 'W', you: 'Y' };

  /* ── utilidades ───────────────────────────────────────────── */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return [].slice.call((r || document).querySelectorAll(s)); }
  function esc(v) { return String(v == null ? '' : v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function texto(h) { var d = document.createElement('div'); d.innerHTML = String(h == null ? '' : h); return d.textContent || ''; }
  function baralha(a, semente) {
    a = a.slice(); var s = semente || 7;
    for (var i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; var j = Math.floor(s / 233280 * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  var PLAY = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
  var PAUSA = '<svg viewBox="0 0 24 24"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>';
  var MIC = '<svg viewBox="0 0 24 24"><path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-2.08A7 7 0 0 0 19 12z"/></svg>';

  /* ── aceitar variantes válidas, de forma genérica ─────────────
     · maiúscula, pontuação, espaço, aspas curvas;
     · contrações (don't = do not, I'm = I am, it's = it is…);
     · algarismo = palavra (6 = six, 73 = seventy three);
     · a / an / the / my / his / her valem um pelo outro;
     · a ordem das orações com because / when / if
       ("I took a coat because it was cold" = "Because it was cold, I took a coat"). */
  var NUM0 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var NUMD = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  function numPal(n) { n = +n; if (n < 20) return NUM0[n]; if (n < 100) return NUMD[Math.floor(n / 10)] + (n % 10 ? ' ' + NUM0[n % 10] : ''); return String(n); }
  function normal(s) {
    return String(s == null ? '' : s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/[“”]/g, '"')
      .replace(/\b(\d{1,2})\b/g, function (m) { return numPal(m); })
      .replace(/\bwon't\b/g, 'will not').replace(/\bcan't\b/g, 'cannot').replace(/\bcan not\b/g, 'cannot')
      .replace(/\b(\w+)n't\b/g, '$1 not').replace(/\bi'm\b/g, 'i am')
      .replace(/\b(he|she|it|that|there|what|who|where|here)'s\b/g, '$1 is').replace(/'ve\b/g, ' have').replace(/'d\b/g, ' would')
      .replace(/'ll\b/g, ' will').replace(/'re\b/g, ' are')
      .replace(/[.,;:!?—–"()\-]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  /* aula que ensina artigo/possessivo marca window.HW2_ARTIGO_CONTA = true no licao.js: aí a/an/the/my não viram iguais */
  function semDet(s) { return window.HW2_ARTIGO_CONTA ? s : s.replace(/\b(a|an|the|my|his|her)\b/g, 'D'); }
  var LIGA = /^(.*?)\s*,?\s+\b(because|when|if)\b\s+(.+)$/i;
  function trocas(s) {
    /* s com vírgulas: gera a outra ordem das orações */
    var out = [s], t = String(s).trim().replace(/[.!?]+$/, ''), m;
    m = t.match(/^(because|when|if)\s+([^,]+),\s*(.+)$/i);
    if (m) out.push(m[3] + ' ' + m[1] + ' ' + m[2]);
    m = t.match(LIGA);
    if (m && m[1] && !/^(because|when|if)$/i.test(m[1])) out.push(m[2] + ' ' + m[3] + ', ' + m[1]);
    return out;
  }
  function formas(s) { return trocas(s).map(function (x) { return semDet(normal(x)); }); }
  function aceita(resp, chave, extras) {
    var r = formas(resp);
    var cs = [chave].concat(extras || []).reduce(function (acc, c) { return acc.concat(formas(c)); }, []);
    return r.some(function (x) { return x && cs.indexOf(x) >= 0; });
  }

  /* ── fala: comparar o alvo com o que o navegador ouviu ──────── */
  function tokens(s) { return normal(s).split(' ').filter(Boolean); }
  function comparaFala(frase, ouvido) {
    var ws = String(frase).split(/\s+/).filter(Boolean).map(function (w) { return { w: w, toks: tokens(w) }; });
    var alvo = [], dono = [];
    ws.forEach(function (x, i) { x.toks.forEach(function (t) { alvo.push(t); dono.push(i); }); });
    var ouv = tokens(ouvido), n = alvo.length, m = ouv.length, L = [], i, j;
    for (i = 0; i <= n; i++) { L.push(new Array(m + 1).fill(0)); }
    for (i = n - 1; i >= 0; i--) for (j = m - 1; j >= 0; j--) L[i][j] = alvo[i] === ouv[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    var bateu = new Array(n).fill(false); i = 0; j = 0;
    while (i < n && j < m) { if (alvo[i] === ouv[j]) { bateu[i] = true; i++; j++; } else if (L[i + 1][j] >= L[i][j + 1]) i++; else j++; }
    ws.forEach(function (x) { x.ok = true; });
    bateu.forEach(function (b, k) { if (!b) ws[dono[k]].ok = false; });
    var conta = ws.filter(function (x) { return x.toks.length; });
    var faltaram = conta.filter(function (x) { return !x.ok; }).map(function (x) { return x.toks.join(' '); });
    return { itens: ws, pegou: conta.length - faltaram.length, total: conta.length, faltaram: faltaram };
  }

  /* ── WolfFala: o adaptador da voz ──────────────────────────────
     Hoje: o reconhecimento do próprio navegador (grátis; Chrome,
     Android, Safari novo). Amanhã: Azure Pronunciation Assessment,
     sem mexer no resto — basta um provedor com a mesma forma:
       { nome, suportado(), ouvir({lang, alvo, onParcial, onFim, onErro}) → {parar()} }
     onFim recebe { texto, alternativas:[...], avaliacao?: {palavras:[{w, nota}]} }.
     WolfFala.usar(provedor) troca o provedor (o teste usa isto). */
  var WolfFala = (function () {
    var R = window.SpeechRecognition || window.webkitSpeechRecognition;
    var navegador = {
      nome: 'navegador',
      suportado: function () { return !!R; },
      ouvir: function (o) {
        var rec = new R(), fim = false, finais = [], ultimo = '';
        rec.lang = o.lang || 'en-US'; rec.interimResults = true; rec.maxAlternatives = 3; rec.continuous = false;
        var relogio = setTimeout(function () { try { rec.stop(); } catch (e) {} }, 14000);
        rec.onresult = function (ev) {
          var parcial = '';
          for (var i = ev.resultIndex; i < ev.results.length; i++) {
            var r = ev.results[i];
            if (r.isFinal) { var alts = []; for (var k = 0; k < r.length; k++) alts.push(r[k].transcript); finais.push(alts); }
            else parcial += r[0].transcript;
          }
          ultimo = finais.map(function (a) { return a[0]; }).join(' ') + (parcial ? ' ' + parcial : '');
          if (o.onParcial) o.onParcial(ultimo.trim());
        };
        rec.onerror = function (ev) { if (fim) return; fim = true; clearTimeout(relogio); if (o.onErro) o.onErro(ev.error || 'erro'); };
        rec.onend = function () {
          if (fim) return; fim = true; clearTimeout(relogio);
          /* as alternativas: monta cada uma juntando os pedaços finais */
          var alts = [];
          for (var k = 0; k < 3; k++) { var s = finais.map(function (a) { return a[k] || a[0]; }).join(' ').trim(); if (s && alts.indexOf(s) < 0) alts.push(s); }
          if (!alts.length && ultimo.trim()) alts.push(ultimo.trim());
          if (!alts.length) { if (o.onErro) o.onErro('no-speech'); return; }
          o.onFim({ texto: alts[0], alternativas: alts });
        };
        try { rec.start(); } catch (e) { fim = true; clearTimeout(relogio); if (o.onErro) o.onErro('start'); }
        return { parar: function () { try { rec.stop(); } catch (e) {} } };
      }
    };
    var atual = navegador;
    return {
      usar: function (p) { atual = p || navegador; },
      provedor: function () { return atual; },
      suportado: function () { try { return !!atual.suportado(); } catch (e) { return false; } },
      ouvir: function (o) { return atual.ouvir(o); }
    };
  })();
  window.WolfFala = WolfFala;

  /* a gravação para ouvir a própria voz: só no caminho sem reconhecimento (iPhone antigo) */
  var Grava = {
    pode: function () { return !!(window.MediaRecorder && navigator.mediaDevices && navigator.mediaDevices.getUserMedia); },
    comeca: function (onPronto, onErro) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (st) {
        var mr = new MediaRecorder(st), pedacos = [];
        mr.ondataavailable = function (e) { if (e.data && e.data.size) pedacos.push(e.data); };
        mr.onstop = function () { st.getTracks().forEach(function (t) { t.stop(); }); onPronto(URL.createObjectURL(new Blob(pedacos, { type: mr.mimeType || 'audio/webm' }))); };
        mr.start(); Grava.mr = mr;
        Grava.relogio = setTimeout(function () { Grava.para(); }, 15000);
      }).catch(function () { onErro(); });
    },
    para: function () { clearTimeout(Grava.relogio); if (Grava.mr && Grava.mr.state !== 'inactive') Grava.mr.stop(); Grava.mr = null; }
  };

  /* ── a ponte da IA (pela plataforma) ─────────────────────────── */
  var IA = (function () {
    var pend = {}, parc = {}, n = 0, origem = null;
    try { origem = PARA ? new URL(PARA).origin : null; } catch (e) {}
    var mock = Q.get('mock') === '1';
    window.addEventListener('message', function (ev) {
      var d = ev.data; if (!d || (d.wolf !== 'hw-ia-resposta' && d.wolf !== 'hw-ia-parcial')) return;
      if (ev.source !== window.parent || (origem && ev.origin !== origem)) return;
      if (d.wolf === 'hw-ia-parcial') { var fp = parc[d.id]; if (fp) fp(String(d.t || '')); return; }
      var f = pend[d.id]; if (!f) return; delete pend[d.id]; delete parc[d.id]; f(d);
    });
    function falso(modo, c) {
      var s = {
        confere: { certo: aceita(c.resposta, c.chave) || /\b(so|because|but|and)\b/i.test(c.resposta || ''), comentario: 'Mock: same meaning, another order.', outra_forma: c.chave },
        porque: { explica: 'Mock: o resultado vem depois de so; a razão vem depois de because.', regra: 'A, so B = B because A' },
        dica_pron: { palavra: 'eggs', silabas: 'EGGS', dica: 'Mock: termine com um z bem curto: egz.' },
        corrige: { fixes: /\bi\b/.test(c.texto || '') ? [{ errado: 'i', certo: 'I', porque: 'Mock: I é sempre maiúsculo.' }] : [], elogio: 'Mock: nice use of because!' },
        hw_abertura: { abertura: 'Mock: Oi, Marina! Semana passada o -es te pegou. Hoje ele volta.', pergunta: 'Mock: What did you buy this week, and why?', ajuda_pt: 'Mock: O que você comprou esta semana, e por quê?' },
        hw_explica: { explica: 'Mock: você pensou certo, mas o motivo vem depois de because.', regra: 'because + motivo', exemplo: 'Mock: I study English because I love music.' },
        hw_comenta: { comentario: 'Mock: Bread and coffee, a good start! I like it.', correcao: null }
      }[modo];
      return new Promise(function (ok) { setTimeout(function () { ok(s ? { ok: true, saida: s } : { ok: false, erro: 'dados' }); }, 450); });
    }
    /* op.vivo + op.parcial(t): a resposta chega em pedaços (streaming), quando a plataforma sabe fazer */
    function pede(modo, dados, op) {
      op = op || {};
      if (mock) return falso(modo, dados || {});
      if (!NA_PLATAFORMA) return Promise.resolve({ ok: false, erro: 'fora' });
      return new Promise(function (ok) {
        var id = 'ia' + (++n) + '-' + Date.now().toString(36); pend[id] = ok;
        if (op.parcial) parc[id] = op.parcial;
        try { window.parent.postMessage({ wolf: 'hw-ia', v: 1, id: id, modo: modo, dados: dados, vivo: !!op.parcial }, PARA); } catch (e) { delete pend[id]; delete parc[id]; ok({ ok: false, erro: 'fora' }); return; }
        setTimeout(function () { if (pend[id]) { delete pend[id]; delete parc[id]; ok({ ok: false, erro: 'tempo' }); } }, 25000);
      });
    }
    return { pede: pede, ligada: function () { return mock || NA_PLATAFORMA; } };
  })();
  /* ── a fala no aparelho: Atualização de fala (24/10/2026) ──────
     O corretor de pronúncia (HuBERT + CMUdict) roda NA PLATAFORMA, que
     é onde o aluno baixa a "Atualização de fala" (~134 MB, uma vez). A
     HW grava aqui (para sozinha no silêncio), corta, reamostra para
     16 kHz e manda pela ponte {wolf:'hw-pron'}; a plataforma devolve o
     veredito por palavra e por som. Sem a atualização (ou num aparelho
     que não roda) a resposta é {indisponivel:true} e o Out loud segue
     com o reconhecimento do navegador, como sempre. */
  var Pron = (function () {
    var pend = {}, n = 0, origem = null, est = null, ouvintes = [];
    try { origem = PARA ? new URL(PARA).origin : null; } catch (e) {}
    function avisa() { ouvintes.forEach(function (f) { try { f(est); } catch (e) {} }); }
    window.addEventListener('message', function (ev) {
      var d = ev.data; if (!d || (d.wolf !== 'hw-pron-resposta' && d.wolf !== 'hw-pron-aviso')) return;
      if (ev.source !== window.parent || (origem && ev.origin !== origem)) return;
      if (d.wolf === 'hw-pron-aviso') { est = { disponivel: !!d.disponivel, motivo: d.disponivel ? null : 'nao-baixada' }; avisa(); return; }
      var f = pend[d.id]; if (!f) return; delete pend[d.id]; f(d);
    });
    function pede(modo, extra, transfer, tempo) {
      if (!NA_PLATAFORMA) return Promise.resolve({ ok: false, erro: 'fora' });
      return new Promise(function (ok) {
        var id = 'pr' + (++n) + '-' + Date.now().toString(36); pend[id] = ok;
        var msg = { wolf: 'hw-pron', v: 1, id: id, modo: modo }; for (var c in extra) msg[c] = extra[c];
        try { window.parent.postMessage(msg, PARA, transfer || []); } catch (e) { delete pend[id]; ok({ ok: false, erro: 'fora' }); return; }
        setTimeout(function () { if (pend[id]) { delete pend[id]; ok({ ok: false, erro: 'tempo' }); } }, tempo || 60000);
      });
    }
    return {
      consulta: function () {
        return pede('estado', {}, null, 3000).then(function (r) {
          est = r && r.ok ? { disponivel: !!r.disponivel, motivo: r.motivo || null } : { disponivel: false, motivo: 'sem-ponte' };
          avisa(); return est;
        });
      },
      estado: function () { return est; },
      marca: function (e) { est = e; avisa(); },
      quando: function (f) { ouvintes.push(f); },
      avaliar: function (frase, audio) { return pede('avaliar', { frase: frase, sr: 16000, audio: audio }, [audio.buffer], 60000); },
      abrir: function () { return pede('abrir', {}, null, 5000); }
    };
  })();

  /* o gravador com fim automático (do protótipo aprovado): calibra o ruído nos primeiros
     300 ms; depois que a fala começa, 1,1 s de silêncio encerra. Tocar de novo = parar.
     Sem fala em 5 s = "I didn't hear you". Teto de 15 s. Sem contagem regressiva. */
  function para16k(ab) {
    var AC = window.AudioContext || window.webkitAudioContext, tmp = new AC();
    return new Promise(function (ok, no) { tmp.decodeAudioData(ab, ok, no); }).then(function (b) {
      try { tmp.close(); } catch (e) {}
      var n = Math.max(1, Math.ceil(b.duration * 16000)), off = new OfflineAudioContext(1, n, 16000), src = off.createBufferSource();
      src.buffer = b; src.connect(off.destination); src.start();
      return off.startRendering();
    }).then(function (r) { return r.getChannelData(0).slice(); });
  }
  function cortaSilencio(w, thr) {
    var F = 320, n = Math.floor(w.length / F), e = new Float32Array(n), mx = 0, i, k, s;
    for (i = 0; i < n; i++) { s = 0; for (k = 0; k < F; k++) s += w[i * F + k] * w[i * F + k]; e[i] = Math.sqrt(s / F); mx = Math.max(mx, e[i]); }
    var t = Math.max(thr || 0, mx * 0.06, 0.004), a = 0, b = n - 1;
    while (a < n && e[a] < t) a++; while (b > a && e[b] < t) b--;
    if (a >= b) return w;
    return w.slice(Math.max(0, (a - 8) * F), Math.min(w.length, (b + 13) * F));
  }
  var Ouvido = {
    atual: null,
    pode: function () { return !!(window.MediaRecorder && navigator.mediaDevices && navigator.mediaDevices.getUserMedia && (window.AudioContext || window.webkitAudioContext) && window.OfflineAudioContext); },
    grava: function (o) {
      var VAD = { calib: 300, silencio: 1100, semFala: 5000, teto: 15000, minOn: 90 };
      var vivo = { parar: function () {}, cancela: function () { vivo.cancelado = true; vivo.parar(); } };
      Ouvido.atual = vivo;
      navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: true } }).then(function (st) {
        if (vivo.cancelado) { st.getTracks().forEach(function (t) { t.stop(); }); Ouvido.atual = null; return; }
        var AC = window.AudioContext || window.webkitAudioContext;
        var rec = new MediaRecorder(st), pedacos = [], ac = new AC(), an = ac.createAnalyser(); an.fftSize = 1024;
        ac.createMediaStreamSource(st).connect(an);
        var buf = new Float32Array(an.fftSize), t0 = performance.now(), ruido = [], thr = 0, falouEm = 0, ultimoAlto = 0, corrida = 0, por = '', pico = 0;
        var fim = function (r) { if (rec.state === 'recording') { por = por || r; rec.stop(); } };
        vivo.parar = function () { fim('toque'); };
        rec.ondataavailable = function (e) { if (e.data && e.data.size) pedacos.push(e.data); };
        var relogio = setInterval(function () {
          an.getFloatTimeDomainData(buf); var s = 0; for (var i = 0; i < buf.length; i++) s += buf[i] * buf[i];
          var rms = Math.sqrt(s / buf.length), agora = performance.now() - t0;
          if (agora < VAD.calib) ruido.push(rms);
          else {
            if (!thr) { var m = ruido.reduce(function (a, b) { return a + b; }, 0) / Math.max(1, ruido.length); thr = Math.max(m * 3.5, 0.006); }
            if (rms > thr) { corrida += 30; if (corrida >= VAD.minOn && !falouEm) falouEm = agora; if (falouEm) ultimoAlto = agora; } else corrida = 0;
            if (falouEm && agora - ultimoAlto > VAD.silencio) fim('silencio');
            if (!falouEm && agora > VAD.semFala) fim('semfala');
            if (agora > VAD.teto) fim('teto');
          }
          pico = Math.max(pico * 0.9, rms);
          if (o.onNivel) o.onNivel(Math.min(1, pico / Math.max(thr * 6, 0.05)));
        }, 30);
        rec.onstop = function () {
          clearInterval(relogio); st.getTracks().forEach(function (t) { t.stop(); }); try { ac.close(); } catch (e) {}
          Ouvido.atual = null;
          if (vivo.cancelado) return;
          if (por === 'semfala' || (!falouEm && por !== 'toque')) { o.onErro('silencio'); return; }
          var blob = new Blob(pedacos, { type: rec.mimeType || 'audio/webm' });
          (blob.arrayBuffer ? blob.arrayBuffer() : new Response(blob).arrayBuffer()).then(para16k).then(function (w) {
            var a = cortaSilencio(w, thr);
            if (a.length < 16000 * 0.3) { o.onErro('silencio'); return; }
            o.onFim({ audio: a, por: por });
          }).catch(function () { o.onErro('decodifica'); });
        };
        rec.start();
      }).catch(function () { Ouvido.atual = null; if (!vivo.cancelado) o.onErro('mic'); });
      return vivo;
    }
  };

  var ERRO_IA = { pausa: 'Wolf is resting this month.', plano: 'Wolf is not on for you yet.', hoje: 'That’s enough Wolf for today.', sessao: 'Your session ended. Sign in again.', fora: 'Wolf works inside the Wolf Labs app.', tempo: 'Wolf took too long. Try again.' };
  function erroIA(r) { return ERRO_IA[r && r.erro] || 'Wolf didn’t answer now.'; }

  /* ── o estado (localStorage) ─────────────────────────────────── */
  var CH = 'wolf-hw2-' + H.id;
  function novo() { return { v: 1, p: 0, fez: {}, listen: { ouviu: false, r: {} }, out: {}, focus: {}, write: { t: '', ia: null }, you: { t: [], ia: [] }, erros: [], t0: Date.now(), t1: null, wolf: { abre: null, resp: '', com: null, fechou: 0 } }; }
  var S = novo();
  try { var g = JSON.parse(localStorage.getItem(CH)); if (g && g.v === 1) S = g; } catch (e) {}
  if (!S.wolf) S.wolf = { abre: null, resp: '', com: null, fechou: 0 };
  function grava() { try { localStorage.setItem(CH, JSON.stringify(S)); } catch (e) {} }
  (function () { var p = +Q.get('p'); if (p >= 1 && p <= 6) S.p = p - 1; })();
  function anotaErro(q, minha, certa) {
    q = texto(q).replace(/\s+/g, ' ').trim().slice(0, 240);
    if (!S.erros.some(function (e) { return e.q === q; })) S.erros.push({ q: q, minha: String(minha || '').slice(0, 240), certa: texto(certa).slice(0, 240) });
    grava();
  }

  /* ── o esqueleto ─────────────────────────────────────────────── */
  var R = H.rodadas;
  document.title = texto(H.titulo) + ' · Homework 2.0';
  var app = document.getElementById('app');
  app.innerHTML =
    '<header class="h2-topo"><div class="h2-cab">' + (H.capa ? '<img src="' + esc(H.capa) + '" alt="">' : '') +
    '<div><small>Homework 2.0 · ' + esc(H.nivel || '') + '</small><h1>' + esc(H.titulo) + '</h1></div><span class="h2-tempo">~' + (H.minutos || 10) + ' min</span></div>' +
    '<nav class="h2-letras" id="letras" aria-label="Rounds"></nav></header>' +
    '<main id="main"></main>' +
    '<div class="rod"><div><button class="volta" id="volta" aria-label="Back">←</button><span class="info" id="info"></span><button class="segue" id="segue">Continue</button></div></div>' +
    '<div class="toast" id="toast" role="status" aria-live="polite"></div>';
  var AU = document.getElementById('au') || document.body.appendChild(document.createElement('audio'));

  function letras() {
    $('#letras').innerHTML = ORDEM.map(function (k, i) {
      return '<button class="h2-l' + (S.fez[k] ? ' fez' : '') + (S.p === i ? ' on' : '') + '" data-ir="' + i + '" aria-label="' + NOME[k] + '"><i></i>' + (k === 'you' ? 'YOU' : LETRA[k]) + '</button>';
    }).join('');
  }
  function toast(t) { var el = $('#toast'); el.textContent = t; el.classList.add('ve'); clearTimeout(toast.t); toast.t = setTimeout(function () { el.classList.remove('ve'); }, 2200); }
  function rodape() {
    var fim = S.p >= ORDEM.length, k = ORDEM[S.p];
    $('#volta').disabled = S.p === 0;
    $('#info').textContent = fim ? 'All done' : 'Round ' + (S.p + 1) + ' of 5 · ' + NOME[k];
    $('#segue').hidden = fim;
    $('#segue').disabled = !fim && !S.fez[k];
    $('#segue').textContent = S.p === ORDEM.length - 1 ? 'See my result' : 'Continue';
  }
  function cabeca(k, sub) {
    return '<div class="h2-rh"><span class="h2-letra">' + (k === 'you' ? 'Y' : LETRA[k]) + '</span><div><h2>' + NOME[k] + '</h2><p>' + sub + '</p></div></div>';
  }
  function figura(src, leg) { return src ? '<figure class="h2-img"><img src="' + esc(src) + '" alt="" loading="lazy">' + (leg ? '<figcaption>' + leg + '</figcaption>' : '') + '</figure>' : ''; }
  function feito(k) { if (!S.fez[k]) { S.fez[k] = 1; grava(); toast(NOME[k] + ' ✓'); } letras(); rodape(); }

  function pinta() {
    AU.pause(); if (Grava.mr) Grava.para(); if (Ouvido.atual) Ouvido.atual.cancela();
    var m = $('#main');
    if (S.p >= ORDEM.length) { m.innerHTML = resultado(); letras(); rodape(); envia(); window.scrollTo(0, 0); return; }
    var k = ORDEM[S.p];
    m.innerHTML = (S.p === 0 ? '<div id="wabre"></div>' : '') + '<section class="h2-rod" data-rodada="' + k + '">' + PINTA[k]() + '</section>';
    if (LIGA_[k]) LIGA_[k]();
    if (S.p === 0) abertura();
    letras(); rodape(); window.scrollTo(0, 0);
  }

  /* ── 28/10 · o Wolf abre a lição: o nome do aluno + uma pergunta pessoal ── */
  function wolfCaixa(cls, cab, corpo) { return '<div class="wolf-res ' + (cls || '') + '"><div class="cab"><span class="orbe"></span>' + cab + '</div>' + corpo + '</div>'; }
  function abertura() {
    var box = $('#wabre'); if (!box || S.wolf.fechou) return;
    var a = S.wolf.abre;
    if (!a) {
      if (!IA.ligada() || abertura.pediu) return;
      abertura.pediu = 1;
      box.innerHTML = wolfCaixa('w-abre pensando', 'Wolf', W('Getting your lesson ready…', 'Preparando a sua lição…'));
      IA.pede('hw_abertura', { titulo: texto(H.titulo), alvo: H.alvo, licao: H.id, biblica: BIBLICA }).then(function (r) {
        if (!r.ok || !r.saida || !r.saida.abertura) { box.innerHTML = ''; return; }
        S.wolf.abre = { abertura: r.saida.abertura, pergunta: r.saida.pergunta || '', ajuda_pt: r.saida.ajuda_pt || '' }; grava(); abertura();
      });
      return;
    }
    var com = S.wolf.com;
    box.innerHTML = '<div class="wolf-res w-abre"><div class="cab"><span class="orbe"></span>Wolf<button class="w-fecha" data-wfecha aria-label="' + W('Close', 'Fechar') + '">×</button></div>' +
      '<p class="w-fala">' + esc(a.abertura) + '</p>' +
      (a.pergunta ? '<p class="w-perg">' + esc(a.pergunta) + (a.ajuda_pt ? '<small>' + esc(a.ajuda_pt) + '</small>' : '') + '</p>' +
        (com ? '<p class="w-eu">“' + esc(S.wolf.resp) + '”</p><p class="w-fala">' + esc(com.comentario || '') + '</p>' +
               (com.correcao && com.correcao.certo ? '<p class="w-corr"><s>' + esc(com.correcao.errado) + '</s> → <ins>' + esc(com.correcao.certo) + '</ins>' + (com.correcao.porque ? '<small>' + esc(com.correcao.porque) + '</small>' : '') + '</p>' : '')
             : '<div class="campo w-campo"><textarea rows="1" id="wresp" maxlength="300" placeholder="' + W('Answer in English…', 'Responda em inglês…') + '" aria-label="' + esc(a.pergunta) + '">' + esc(S.wolf.resp || '') + '</textarea><button class="bt" data-wresp>' + W('Send', 'Enviar') + '</button></div>' +
               '<button class="verex" data-wfecha>' + W('Maybe later', 'Agora não') + '</button>') : '') +
      '</div>';
  }
  function respondeAbertura(bt) {
    var ta = $('#wresp'), t = (ta && ta.value || '').trim();
    if (t.length < 3) { if (ta) { ta.classList.add('mal'); setTimeout(function () { ta.classList.remove('mal'); }, 340); } return; }
    S.wolf.resp = t.slice(0, 300); grava(); bt.disabled = true;
    var corpo = $('#wabre .w-campo'); var vivo = document.createElement('p'); vivo.className = 'w-fala pensando'; vivo.textContent = W('Wolf is reading…', 'O Wolf está lendo…');
    corpo.parentNode.insertBefore(vivo, corpo.nextSibling);
    IA.pede('hw_comenta', { pergunta: S.wolf.abre.pergunta, resposta: S.wolf.resp, alvo: H.alvo, titulo: texto(H.titulo), licao: H.id }, { parcial: function (t) { vivo.classList.remove('pensando'); vivo.textContent = t; } }).then(function (r) {
      if (!r.ok) { bt.disabled = false; vivo.textContent = erroIA(r); return; }
      S.wolf.com = { comentario: r.saida.comentario || '', correcao: r.saida.correcao || null }; grava(); abertura();
    });
  }

  /* ── L · Listen ──────────────────────────────────────────────── */
  var PINTA = {}, LIGA_ = {};
  PINTA.listen = function () {
    var r = R.listen, ouviu = S.listen.ouviu;
    return cabeca('listen', r.sub || 'A short new scene. Listen first, then answer.') +
      figura(r.img, r.leg) +
      '<div class="vidro"><div class="pl"><button class="pl-play" id="pl" aria-label="Play">' + PLAY + '</button><div class="pl-meio">' +
      '<div class="pl-barra"><i id="plb"></i></div><div class="pl-bts"><button class="pil" id="lento" aria-pressed="false">0.75×</button>' +
      '<button class="pil" id="vertr"' + (ouviu ? '' : ' disabled') + '>Show transcript</button><span class="pl-tempo" id="plt">' + (r.dur || '') + '</span></div></div></div>' +
      '<div class="trans" id="trans" hidden>' + r.falas.map(function (f, i) { return '<p data-i="' + i + '"><b style="color:' + esc((H.elenco[f.quem] || {}).cor || '#c9b8ff') + '">' + esc((H.elenco[f.quem] || {}).nome || f.quem) + '</b>' + esc(f.t) + '</p>'; }).join('') + '</div>' +
      (ouviu ? '' : '<p class="trancado" id="tranca">Listen to the end first. The questions open after that.</p>') + '</div>' +
      '<div class="vidro" id="qs"' + (ouviu ? '' : ' hidden') + '>' + r.perguntas.map(function (q, j) {
        var ops = baralha(q.op.map(function (o, i) { return { o: o, i: i }; }), j + 3);
        return '<div class="q" data-j="' + j + '"><p class="q-t">' + (j + 1) + '. ' + esc(q.q) + '</p><div class="ops">' +
          ops.map(function (x, n) { return '<button class="op" data-op="' + x.i + '"><i>' + 'ABC'.charAt(n) + '</i><span>' + esc(x.o) + '</span></button>'; }).join('') +
          '</div><p class="porque" hidden></p><div class="lwhy" id="lwhy' + j + '"></div></div>';
      }).join('') + '</div>';
  };
  LIGA_.listen = function () {
    var r = R.listen, t = TEMPOS.listen || [];
    AU.src = r.audio; AU.playbackRate = 1;
    var pl = $('#pl'), lento = $('#lento');
    pl.onclick = function () {
      if (AU.paused) { AU.playbackRate = lento.classList.contains('on') ? 0.75 : 1; var p = AU.play(); if (p && p.catch) p.catch(function () {}); }
      else AU.pause();
    };
    lento.onclick = function () { var on = !lento.classList.contains('on'); lento.classList.toggle('on', on); lento.setAttribute('aria-pressed', on); AU.playbackRate = on ? 0.75 : 1; };
    $('#vertr').onclick = function () { var tr = $('#trans'); tr.hidden = !tr.hidden; this.textContent = tr.hidden ? 'Show transcript' : 'Hide transcript'; };
    AU.onplay = function () { pl.innerHTML = PAUSA; pl.setAttribute('aria-label', 'Pause'); };
    AU.onpause = function () { pl.innerHTML = PLAY; pl.setAttribute('aria-label', 'Play'); };
    AU.ontimeupdate = function () {
      var d = AU.duration || 1, c = AU.currentTime;
      if (!$('#plb')) return;   /* 24/10: o pause() da troca de rodada ainda dispara um timeupdate */
      $('#plb').style.width = Math.min(100, c / d * 100) + '%';
      $('#plt').textContent = Math.floor(c) + ' / ' + Math.round(d) + ' s';
      var i = -1; t.forEach(function (x, k) { if (c >= x.ini && c < x.fim + 0.25) i = k; });
      $$('#trans p').forEach(function (p) { p.classList.toggle('agora', +p.getAttribute('data-i') === i); });
      if (!S.listen.ouviu && c / d > 0.92) abreListen();
    };
    AU.onended = function () { abreListen(); };
    $$('.q').forEach(function (q) { var j = +q.getAttribute('data-j'), v = S.listen.r[j]; if (v) marcaQ(q, v.esc, false); });
  };
  function abreListen() {
    if (S.listen.ouviu) return; S.listen.ouviu = true; grava();
    $('#vertr').disabled = false; var tr = $('#tranca'); if (tr) tr.remove(); $('#qs').hidden = false;
  }
  function marcaQ(q, escolha, novo) {
    var j = +q.getAttribute('data-j'), it = R.listen.perguntas[j];
    q.classList.add('feito');
    $$('.op', q).forEach(function (b) { b.disabled = true; var i = +b.getAttribute('data-op'); if (i === it.a) b.classList.add('certo'); else if (i === escolha) b.classList.add('errado'); });
    var pq = $('.porque', q); pq.hidden = false; pq.className = 'porque' + (escolha === it.a ? '' : ' no');
    pq.innerHTML = (escolha === it.a ? 'Yes. ' : 'Not this time. ') + '<i>“' + esc(it.por) + '”</i>';
    var lw = $('#lwhy' + j); if (lw && IA.ligada() && !lw.innerHTML) lw.innerHTML = botaoPorque('l' + j);
    if (novo) {
      S.listen.r[j] = { esc: escolha, ok: escolha === it.a }; if (escolha !== it.a) anotaErro('Listen: ' + it.q, it.op[escolha], it.op[it.a]);
      grava();
      if (Object.keys(S.listen.r).length === R.listen.perguntas.length) feito('listen');
    }
  }

  /* ── O · Out loud ────────────────────────────────────────────── */
  /* com a Atualização de fala: o corretor de sons; sem ela: o navegador (como sempre) */
  function modoPron() { var e = Pron.estado(); return !!(e && e.disponivel && Ouvido.pode()); }
  function linkPron() { var e = Pron.estado(); return !!(e && !e.disponivel && e.motivo === 'nao-baixada' && Ouvido.pode()); }
  var PINTOU_OUT = '';
  PINTA.out = function () {
    var r = R.out, pron = modoPron(), pode = pron || WolfFala.suportado(), link = linkPron();
    PINTOU_OUT = (pron ? 'p' : 'n') + (link ? 'l' : '');
    var intro = pron
      ? 'This is not a grade. Tap the mic and read the sentence: it stops by itself when you finish. Words in <b style="color:var(--ok)">green</b> sound right. A word in <b style="color:var(--amb)">yellow</b> has a sound to fix, and the note shows which one.'
      : 'This is not a grade. The phone tries to understand you, like a person on the phone. Words in <b style="color:var(--amb)">yellow</b> are the ones it missed: say them again, slowly.' + (pode ? '' : ' <b>Your browser can’t listen here</b>, so say each one out loud and tap “I said it”.');
    return cabeca('out', r.sub || 'Say each sentence. See what the phone understood.') +
      '<div class="vidro" style="padding:12px 14px"><p class="dicapt" style="margin:0">' + intro + '</p>' +
      (link ? '<button class="pron-link" data-pron-abrir="1">Download the speech update to see which sound to fix</button>' : '') + '</div>' +
      r.frases.map(function (f, k) {
        return '<div class="vidro fala" data-k="' + k + '">' + figura(f.img) +
          '<p class="fr" id="fr' + k + '">' + f.t.split(/\s+/).map(function (w, i) { return '<span class="w" data-i="' + i + '">' + esc(w) + '</span>'; }).join(' ') + '</p>' +
          (f.ref ? '<p class="ref">' + esc(f.ref) + ' · World English Bible</p>' : '') +
          '<div class="fala-bts">' + (f.au ? '<button class="pil" data-ouve="' + k + '">▶ Hear it</button><button class="pil" data-ouve="' + k + '" data-lento="1">0.75×</button>' : '') +
          (pron ? '<button class="mic" data-pmic="' + k + '">' + MIC + '<span>Say it</span></button>'
            : pode ? '<button class="mic" data-mic="' + k + '">' + MIC + '<span>Say it</span></button>'
                : (Grava.pode() ? '<button class="pil" data-grava="' + k + '">● Record</button>' : '') + '<button class="bt" data-disse="' + k + '">I said it</button>') +
          '</div>' + (pron ? '<div class="nivel" id="niv' + k + '" hidden><i></i></div>' : '') +
          '<div class="ouvido" id="ouv' + k + '"' + (pode && !pron ? '' : ' hidden') + '><b>The phone heard</b><span>…</span></div><audio id="eu' + k + '" controls hidden></audio>' +
          '<p class="veredito" id="ver' + k + '" hidden></p><div class="sons" id="sons' + k + '"></div><div id="dica' + k + '"></div></div>';
      }).join('');
  };
  LIGA_.out = function () {
    R.out.frases.forEach(function (f, k) {
      var o = S.out[k];
      if (o && o.pron && o.pron.ultima) mostraPron(k, o.pron.ultima);
      else if (o && o.melhor) { var ob = $('#ouv' + k); if (ob) ob.hidden = false; mostraFala(k, o.melhor, o.ouviu); }
      else if (o && o.disse) { var v = $('#ver' + k); v.hidden = false; v.textContent = 'Said out loud ✓'; }
    });
  };
  /* a resposta da plataforma chegou (ou a atualização terminou de baixar): repinta o Out loud se o modo mudou */
  Pron.quando(function () {
    if (ORDEM[S.p] !== 'out' || Ouvido.atual || ESCUTA) return;
    if (PINTOU_OUT === (modoPron() ? 'p' : 'n') + (linkPron() ? 'l' : '')) return;
    var y = window.scrollY; pinta(); window.scrollTo(0, y);
  });

  /* tokens iguais aos da plataforma (fala-worker.js: a mesma regra) */
  function toksPron(s) { return (String(s).toLowerCase().replace(/[’‘]/g, "'").match(/[a-z']+/g) || []).map(function (w) { return w.replace(/^'+|'+$/g, ''); }).filter(Boolean); }
  function compactaPron(r) {
    return {
      ok: (r.palavras || []).map(function (p) { return p.ok !== false; }),
      oov: (r.palavras || []).map(function (p) { return !!p.oov; }),
      trocas: (r.trocas || []).slice(0, 6).map(function (t) { return { som: String(t.som || '').slice(0, 16), disse: String(t.disse || '').slice(0, 16), palavra: String(t.palavra || '').slice(0, 30), rotulo: String(t.rotulo || '').slice(0, 80) }; }),
      dica: String(r.dica || '').slice(0, 200), sc: +r.sons_certos || 0, st: +r.sons_total || 0
    };
  }
  function mostraPron(k, c) {
    var idx = 0;
    $$('#fr' + k + ' .w').forEach(function (w) {
      var tk = toksPron(w.textContent), mal = false, conta = false;
      tk.forEach(function () { if (c.ok[idx] === false) mal = true; if (c.oov[idx] === false) conta = true; idx++; });
      w.classList.remove('faltou'); w.classList.toggle('pegou', conta && !mal); w.classList.toggle('som', mal);
    });
    var v = $('#ver' + k); if (!v) return;
    v.hidden = false;
    v.className = 'veredito' + (c.trocas.length ? '' : ' tudo');
    v.textContent = c.trocas.length ? (c.trocas.length === 1 ? 'One sound to fix. Read the note, then say it again.' : c.trocas.length + ' sounds to fix. Read the notes, then say it again.') : 'All the sounds we check sound right ✓';
    var box = $('#sons' + k);
    box.innerHTML = c.trocas.length
      ? '<ul class="sons-l">' + c.trocas.slice(0, 3).map(function (t) { return '<li><b>' + esc(t.palavra) + '</b><span>' + esc(t.rotulo || (t.som + ' → you said ' + t.disse)) + '</span></li>'; }).join('') + '</ul>' +
        (c.dica ? '<p class="sons-dica"><b>Tip</b>' + esc(c.dica) + '</p>' : '')
      : '';
    var d = $('#dica' + k); if (d) d.innerHTML = '';
  }
  function falarPron(k, bt) {
    if (Ouvido.atual) { Ouvido.atual.parar(); return; }
    if (ESCUTA) return;
    var f = R.out.frases[k], niv = $('#niv' + k), ver = $('#ver' + k);
    AU.pause();
    bt.classList.add('ouvindo'); $('span', bt).textContent = 'Listening… tap to stop';
    if (niv) niv.hidden = false;
    ver.hidden = false; ver.className = 'veredito'; ver.textContent = 'Read the sentence. I stop when you finish.';
    var sb = $('#sons' + k); if (sb) sb.innerHTML = '';
    var fecha = function (rot) { bt.classList.remove('ouvindo'); bt.disabled = false; $('span', bt).textContent = rot || 'Say it again'; if (niv) { niv.hidden = true; $('i', niv).style.width = '0'; } };
    Ouvido.grava({
      onNivel: function (lv) { if (niv) $('i', niv).style.width = Math.round(lv * 100) + '%'; },
      onErro: function (tipo) {
        fecha(S.out[k] && S.out[k].pron ? 'Say it again' : 'Say it');
        if (tipo === 'mic') {
          ver.innerHTML = 'The microphone is blocked here. Say it out loud, then tap <b>I said it</b>.';
          var bts = bt.parentNode; if (!$('[data-disse]', bts)) bts.insertAdjacentHTML('beforeend', '<button class="bt" data-disse="' + k + '">I said it</button>');
          return;
        }
        ver.textContent = tipo === 'silencio' ? 'I didn’t hear you. Tap and try again.' : 'The recording didn’t work. Tap and try again.';
        pulaBt(k, bt);
      },
      onFim: function (g) {
        bt.classList.remove('ouvindo'); bt.disabled = true; $('span', bt).textContent = 'Checking…';
        if (niv) niv.hidden = true;
        ver.textContent = 'Checking the sounds…';
        Pron.avaliar(f.t, g.audio).then(function (r) {
          fecha();
          if (r && r.indisponivel) { Pron.marca({ disponivel: false, motivo: r.motivo || 'nao-baixada' }); toast('Simple check for now'); return; }
          if (!r || !r.ok) {
            if (r && r.erro === 'sem-dicionario' && WolfFala.suportado()) {
              ver.textContent = 'This sentence uses the simple check. Tap the mic again.';
              bt.removeAttribute('data-pmic'); bt.setAttribute('data-mic', k); var ob = $('#ouv' + k); if (ob) ob.hidden = false;
              return;
            }
            ver.textContent = r && r.erro === 'confuso' ? 'I couldn’t follow the whole sentence. Tap and say it again.'
              : r && r.erro === 'silencio' ? 'I didn’t hear you. Tap and try again.' : 'The check didn’t work this time. Tap and try again.';
            pulaBt(k, bt);
            return;
          }
          var c = compactaPron(r), o = S.out[k] || { tent: 0 };
          o.tent = (o.tent || 0) + 1; o.pron = o.pron || {};
          if (!o.pron.primeira) o.pron.primeira = c;
          o.pron.ultima = c; if (!c.trocas.length) o.pron.limpa = 1;
          S.out[k] = o; grava();
          mostraPron(k, c);
          confereOut();
        });
      }
    });
  }
  /* 24/10 (Carlos): quando o corretor não entende, o aluno não fica preso — pula para a próxima frase */
  function pulaBt(k, bt) {
    var bts = bt.parentNode; if ($('[data-pula]', bts)) return;
    bts.insertAdjacentHTML('beforeend', '<button class="pil" data-pula="' + k + '">' + (k < R.out.frases.length - 1 ? 'Next sentence →' : 'Skip this one') + '</button>');
  }
  var ESCUTA = null;
  function falar(k, bt) {
    if (ESCUTA) { ESCUTA.parar(); return; }
    var f = R.out.frases[k], ouv = $('#ouv' + k + ' span');
    AU.pause();
    bt.classList.add('ouvindo'); $('span', bt).textContent = 'Listening… tap to stop'; ouv.textContent = '…';
    var fecha = function () { ESCUTA = null; bt.classList.remove('ouvindo'); $('span', bt).textContent = 'Say it again'; };
    ESCUTA = WolfFala.ouvir({
      lang: 'en-US', alvo: f.t,
      onParcial: function (t) { ouv.textContent = t || '…'; },
      onFim: function (res) {
        fecha();
        /* justo com o aluno: das alternativas do navegador, a que mais bate com a frase */
        var melhor = null, qual = res.texto;
        (res.alternativas || [res.texto]).forEach(function (a) { var c = comparaFala(f.t, a); if (!melhor || c.pegou > melhor.pegou) { melhor = c; qual = a; } });
        var o = S.out[k] || { tent: 0 }; o.tent = (o.tent || 0) + 1;
        if (!o.melhor || melhor.pegou / melhor.total >= o.melhor.pegou / o.melhor.total) { o.melhor = { pegou: melhor.pegou, total: melhor.total, faltaram: melhor.faltaram, ok: melhor.itens.map(function (x) { return x.ok; }) }; o.ouviu = qual; }
        S.out[k] = o; grava();
        mostraFala(k, { pegou: melhor.pegou, total: melhor.total, faltaram: melhor.faltaram, ok: melhor.itens.map(function (x) { return x.ok; }) }, qual);
        confereOut();
      },
      onErro: function (e) {
        fecha();
        if (e === 'not-allowed' || e === 'service-not-allowed' || e === 'audio-capture' || e === 'start') {
          ouv.innerHTML = 'The microphone is blocked here. Say it out loud, then tap <b>I said it</b>.';
          var bts = bt.parentNode; if (!$('[data-disse]', bts)) bts.insertAdjacentHTML('beforeend', '<button class="bt" data-disse="' + k + '">I said it</button>');
        } else { ouv.textContent = e === 'no-speech' ? 'I didn’t hear anything. Try again, a little closer to the mic.' : 'The phone didn’t catch it. Try again.'; pulaBt(k, bt); }
      }
    });
  }
  function mostraFala(k, m, ouviu) {
    $$('#fr' + k + ' .w').forEach(function (w, i) { var ok = m.ok[i] !== false; w.classList.toggle('pegou', ok); w.classList.toggle('faltou', !ok); });
    var ouv = $('#ouv' + k + ' span'); if (ouv && ouviu) ouv.textContent = ouviu;
    var v = $('#ver' + k); v.hidden = false;
    v.className = 'veredito' + (m.pegou === m.total ? ' tudo' : '');
    v.textContent = m.pegou === m.total ? 'The phone understood every word ✓' : 'The phone understood ' + m.pegou + ' of ' + m.total + ' words. Say the yellow ones again, slowly.';
    var d = $('#dica' + k);
    if (m.faltaram.length && IA.ligada() && !d.innerHTML) d.innerHTML = '<div class="acoes"><button class="wolfbt" data-dica="' + k + '"><span class="orbe"></span>Tip from Wolf</button></div>';
    if (!m.faltaram.length) d.innerHTML = '';
  }
  function confereOut() { if (R.out.frases.every(function (f, k) { var o = S.out[k]; return o && (o.melhor || o.disse || o.pron || o.pulou); })) feito('out'); }
  function dicaPron(k, bt) {
    var f = R.out.frases[k], o = S.out[k] || {};
    bt.classList.add('pensando'); bt.disabled = true; bt.lastChild.textContent = 'Wolf is listening…';
    IA.pede('dica_pron', { frase: f.t, ouviu: o.ouviu || '', faltam: ((o.melhor && o.melhor.faltaram) || []).join(', '), alvo: H.alvo }).then(function (r) {
      var box = $('#dica' + k);
      if (!r.ok) { box.innerHTML = '<p class="porque no">' + esc(erroIA(r)) + '</p>'; return; }
      var s = r.saida || {};
      box.innerHTML = '<div class="wolf-res"><div class="cab"><span class="orbe"></span>Wolf · ' + esc(s.silabas || s.palavra || '') + '</div>' + esc(s.dica || '') + '</div>';
      o.dica = s.palavra || ''; S.out[k] = o; grava();
    });
  }

  /* ── F · Focus ───────────────────────────────────────────────── */
  var CHANCES = 3;
  PINTA.focus = function () {
    var r = R.focus;
    return cabeca('focus', r.sub || 'One rule, four quick ones.') + (r.regra ? '<div class="vidro" style="padding:12px 14px"><p class="dicapt" style="margin:0">' + r.regra + '</p></div>' : '') +
      r.itens.map(function (it, j) {
        var corpo;
        if (it.tipo === 'monta') {
          var ws = it.r.replace(/[.!?]+$/, '').replace(/,/g, '').split(/\s+/);
          corpo = '<div class="linha" id="lin' + j + '" data-vazio="tap the words in order"></div><div class="fichas" id="fic' + j + '">' +
            baralha(ws.map(function (w, i) { return { w: w, i: i }; }), j + 11).map(function (x) { return '<button class="ficha" data-w="' + esc(x.w) + '">' + esc(x.w) + '</button>'; }).join('') + '</div>' +
            '<div class="acoes"><button class="bt gh" data-limpa="' + j + '">Start again</button><button class="bt" data-check="' + j + '">Check</button><span class="tent" id="tent' + j + '"></span></div>';
        } else {
          corpo = (it.mostra ? '<p class="fr" style="font-size:20px">' + esc(it.mostra) + '</p>' : '') +
            '<div class="campo"><textarea rows="1" id="inp' + j + '" autocomplete="off" autocapitalize="sentences" spellcheck="false" placeholder="' + esc(it.ph || 'Write the full sentence') + '" aria-label="Your answer"></textarea><button class="bt" data-check="' + j + '">Check</button></div>' +
            '<div class="acoes"><button class="verex" data-mostra="' + j + '">Show answer</button><span class="tent" id="tent' + j + '"></span></div>';
        }
        if (it.tipo === 'monta') corpo = corpo.replace('<span class="tent"', '<button class="verex" data-mostra="' + j + '">Show answer</button><span class="tent"');
        return '<div class="vidro it" data-j="' + j + '"><p class="it-t">' + (j + 1) + '. ' + it.t + '</p>' + corpo + '<div class="porque" id="pq' + j + '" hidden></div><div id="why' + j + '"></div></div>';
      }).join('');
  };
  LIGA_.focus = function () {
    R.focus.itens.forEach(function (it, j) {
      var s = S.focus[j]; if (!s || !s.fim) return;
      var box = $('.it[data-j="' + j + '"]');
      fechaItem(box, j, s.certo, s.final, s.nota || '', true);
    });
  };
  function respostaDe(j) {
    var it = R.focus.itens[j];
    if (it.tipo === 'monta') {
      if ($$('#fic' + j + ' .ficha').length) return null;
      return $$('#lin' + j + ' .ficha').map(function (b) { return b.getAttribute('data-w'); }).join(' ');
    }
    return ($('#inp' + j).value || '').trim();
  }
  function confereFocus(j, bt) {
    var it = R.focus.itens[j], box = $('.it[data-j="' + j + '"]'), pq = $('#pq' + j), resp = respostaDe(j);
    var s = S.focus[j] = S.focus[j] || { n: 0 };
    if (s.fim) return;
    if (resp === null) { pq.hidden = false; pq.className = 'porque no'; pq.textContent = 'Use every word.'; return; }
    if (!resp) { var el = $('#inp' + j); if (el) { el.classList.add('mal'); setTimeout(function () { el.classList.remove('mal'); }, 340); } return; }
    if (aceita(resp, it.r, it.aceita)) return certoFocus(j, resp, '');
    /* 07 · CERTO VALE: antes de marcar errado, o Wolf confere */
    var cache = s.ia && s.ia[normal(resp)];
    if (cache) return cache.certo ? certoFocus(j, resp, cache.comentario) : erradoFocus(j, resp, cache.comentario);
    if (!IA.ligada() || tokens(resp).length < 3) return erradoFocus(j, resp, '');
    bt.disabled = true; pq.hidden = false; pq.className = 'porque wolf pensando'; pq.innerHTML = '<span class="orbe" style="display:inline-block;vertical-align:-3px;margin-right:6px"></span>It doesn’t match the key. Wolf is checking your answer…';
    IA.pede('confere', { tarefa: texto(it.t) + (it.mostra ? ' — ' + it.mostra : ''), alvo: H.alvo, chave: it.r, resposta: resp }).then(function (r) {
      bt.disabled = false;
      if (!r.ok) return erradoFocus(j, resp, '');
      s.ia = s.ia || {}; s.ia[normal(resp)] = { certo: !!r.saida.certo, comentario: r.saida.comentario || '' }; grava();
      if (r.saida.certo) certoFocus(j, resp, (r.saida.comentario || '') + (r.saida.outra_forma ? ' Another way: “' + r.saida.outra_forma + '”' : ''), true);
      else erradoFocus(j, resp, r.saida.comentario || '');
    });
  }
  function certoFocus(j, resp, nota, viaIA) {
    var s = S.focus[j]; s.fim = 1; s.certo = 1; s.primeira = !s.n; s.final = resp;
    /* 28/10: acertou de primeira, o Wolf só comemora (grátis) */
    if (!viaIA && !nota && s.primeira) nota = 'Wolf: ' + VIVAS[j % VIVAS.length];
    s.nota = (viaIA ? 'Wolf: correct! ' : '') + (nota || ''); grava();
    fechaItem($('.it[data-j="' + j + '"]'), j, true, resp, s.nota, false);
    confereFocusFim();
  }
  function erradoFocus(j, resp, nota) {
    var it = R.focus.itens[j], s = S.focus[j], box = $('.it[data-j="' + j + '"]'), pq = $('#pq' + j);
    s.n = (s.n || 0) + 1; s.ultima = resp; if (s.n === 1) { s.err1 = resp; anotaErro('Focus: ' + texto(it.t) + (it.mostra ? ' — ' + it.mostra : ''), resp, it.r); }
    box.classList.add('mal'); setTimeout(function () { box.classList.remove('mal'); }, 340);
    if (s.n >= CHANCES) { s.fim = 1; s.certo = 0; s.final = it.r; grava(); fechaItem(box, j, false, it.r, nota, false); confereFocusFim(); return; }
    grava();
    pq.hidden = false; pq.className = 'porque no';
    var resta = ' (' + (CHANCES - s.n) + ' ' + (CHANCES - s.n === 1 ? 'try' : 'tries') + ' left)';
    var pista = PISTAS['f' + j];
    if (s.n === 1 && pista) {
      /* 28/10 · 1º erro: a pista pronta (escrita antes, sem custo; nunca a resposta) */
      pq.className = 'porque wolf'; pq.innerHTML = '<span class="orbe mini"></span>' + W('Almost! ', 'Quase! ') + esc(pista) + '<small>' + resta.trim() + '</small>';
    } else if (s.n === 2 && IA.ligada()) {
      /* 28/10 · 2º erro: o Wolf lê a resposta e explica o erro DELE, ao vivo */
      pq.className = 'porque wolf pensando'; pq.innerHTML = '<span class="orbe mini"></span><span class="w-vivo">' + W('Wolf is reading your answer…', 'O Wolf está lendo a sua resposta…') + '</span>';
      s.ajuda = 1; grava();
      var alvoTxt = $('.w-vivo', pq);
      IA.pede('hw_explica', { licao: H.id, item: 'f' + j, titulo: texto(H.titulo), alvo: H.alvo, pergunta: texto(it.t) + (it.mostra ? ' — ' + it.mostra : ''), certa: it.r, minha: resp, pista: pista || '', dica: texto(it.d || ''), biblica: BIBLICA },
        { parcial: function (t) { pq.classList.remove('pensando'); alvoTxt.textContent = t; } }).then(function (r) {
        pq.classList.remove('pensando');
        if (!r.ok) { pq.className = 'porque no'; pq.innerHTML = 'Not yet.' + (nota ? ' <i>' + esc(nota) + '</i>' : '') + resta; return; }
        var x = r.saida || {};
        pq.innerHTML = '<span class="orbe mini"></span>' + esc(x.explica || '') + (x.regra ? '<br><b>' + esc(x.regra) + '</b>' : '') + (x.exemplo ? '<br><i>“' + esc(x.exemplo) + '”</i>' : '') + '<small>' + resta.trim() + '</small>';
      });
    } else pq.innerHTML = 'Not yet.' + (nota ? ' <i>' + esc(nota) + '</i>' : '') + resta;
    $('#tent' + j).textContent = '';
  }
  function porqueBt(j) {
    var w = $('#why' + j); if (!w || w.innerHTML) return;
    w.innerHTML = botaoPorque('f' + j);
  }
  /* 28/10 · o "por quê?" (orbe) em toda pergunta já respondida: abre um campo para a dúvida do aluno */
  function botaoPorque(k) { return '<div class="acoes"><button class="wolfbt" data-why="' + k + '"><span class="orbe"></span>' + W('Why?', 'Por quê?') + '</button></div>'; }
  function fechaItem(box, j, certo, final, nota, restaura) {
    var it = R.focus.itens[j], pq = $('#pq' + j);
    box.classList.add(certo ? 'certo' : 'revelado');
    if (it.tipo === 'monta') { $('#lin' + j).innerHTML = '<span style="padding:0 6px;font-weight:700">' + esc(final) + '</span>'; $('#fic' + j).innerHTML = ''; }
    else { var el = $('#inp' + j); el.value = final; el.readOnly = true; cresce(el); }
    $$('[data-check="' + j + '"],[data-limpa="' + j + '"],[data-mostra="' + j + '"]', box).forEach(function (b) { b.hidden = true; });
    pq.hidden = false; pq.className = 'porque' + (certo ? (/^Wolf/.test(nota) ? ' wolf' : '') : ' no');
    pq.innerHTML = certo ? (nota ? esc(nota) : 'Yes! <i>' + esc(it.r) + '</i>') + (it.d ? '<small>' + it.d + '</small>' : '')
                         : 'The answer: <b>' + esc(it.r) + '</b>' + (it.d ? '<small>' + it.d + '</small>' : '');
    if (IA.ligada() || !certo) porqueBt(j);
  }
  function confereFocusFim() { if (R.focus.itens.every(function (x, j) { return S.focus[j] && S.focus[j].fim; })) feito('focus'); }
  /* k = 'f3' (Focus) ou 'l1' (Listen). 1º toque: abre o campo da dúvida (opcional); 2º: pergunta ao Wolf */
  function dadosDoItem(k) {
    var j = +k.slice(1);
    if (k.charAt(0) === 'l') {
      var q = R.listen.perguntas[j], v = S.listen.r[j] || {};
      return { w: $('#lwhy' + j), sem: esc(q.por), pergunta: 'Listening: ' + q.q, certa: q.op[q.a], minha: v.ok ? '' : (q.op[v.esc] || ''), dica: q.por };
    }
    var it = R.focus.itens[j], s = S.focus[j] || {};
    return { w: $('#why' + j), sem: it.d || esc(it.r), pergunta: texto(it.t) + (it.mostra ? ' — ' + it.mostra : ''), certa: it.r, minha: s.certo ? '' : (s.ultima || ''), dica: texto(it.d || '') };
  }
  function porQue(k, bt) {
    var d = dadosDoItem(k), w = d.w;
    var semIA = function (msg) { w.innerHTML = wolfCaixa('', W('Why', 'Por quê'), d.sem + (msg ? '<br><small>' + esc(msg) + '</small>' : '')); };
    if (!IA.ligada()) return semIA('');
    if (!bt.hasAttribute('data-pronto')) {
      w.innerHTML = '<div class="campo w-campo"><textarea rows="1" id="wd' + k + '" maxlength="240" placeholder="' + W('Your question (optional)…', 'Sua dúvida (se quiser)…') + '" aria-label="' + W('Your question', 'Sua dúvida') + '"></textarea>' +
        '<button class="wolfbt" data-why="' + k + '" data-pronto><span class="orbe"></span>' + W('Ask Wolf', 'Perguntar') + '</button></div>';
      var ta = $('#wd' + k); if (ta) ta.focus();
      return;
    }
    var duvida = (($('#wd' + k) || {}).value || '').trim();
    w.innerHTML = '<div class="wolf-res pensando"><div class="cab"><span class="orbe"></span>' + W('Why · Wolf', 'Por quê · Wolf') + '</div><span class="w-vivo">' + W('Wolf is thinking…', 'O Wolf está pensando…') + '</span></div>';
    var vivo = $('.w-vivo', w);
    IA.pede('porque', { pergunta: d.pergunta, certa: d.certa, minha: d.minha, dica: d.dica, duvida: duvida, biblica: BIBLICA }, { parcial: function (t) { w.firstChild.classList.remove('pensando'); vivo.textContent = t; } }).then(function (r) {
      if (!r.ok) return semIA(erroIA(r));
      var x = r.saida || {};
      w.innerHTML = wolfCaixa('', W('Why · Wolf', 'Por quê · Wolf'), (duvida ? '<p class="w-eu">“' + esc(duvida) + '”</p>' : '') + esc(x.explica || '') + (x.regra ? '<br><b>' + esc(x.regra) + '</b>' : '') + (x.treino ? '<br><small>' + W('Try: ', 'Tente: ') + esc(x.treino) + '</small>' : ''));
    });
  }

  /* ── W · Write ───────────────────────────────────────────────── */
  function papel(id, valor, ph, rot) {
    var h = window.WolfCorretor && WolfCorretor.papel ? WolfCorretor.papel(id, valor, ph, rot, 96)
      : '<div class="papel"><textarea data-campo="' + id + '" rows="3" placeholder="' + esc(ph) + '" aria-label="' + esc(rot) + '">' + esc(valor) + '</textarea></div>';
    return h.replace('<textarea ', '<textarea data-teclado maxlength="500" id="' + id + '" ');
  }
  PINTA.write = function () {
    var r = R.write;
    return cabeca('write', r.sub || 'Short and true. Wolf helps with two things, no more.') + figura(r.img, r.leg) +
      '<div class="vidro"><p class="youq">' + r.pede + '</p>' + papel('wt', S.write.t || '', r.ph || 'Write here…', 'Your text') +
      '<div class="acoes"><button class="wolfbt" id="wcheck"><span class="orbe"></span>Check with Wolf</button>' + (r.ex ? '<button class="verex" id="wex">Show an example</button>' : '') + '</div>' +
      (r.ex ? '<p class="ex" id="wexp" hidden><b>EXAMPLE</b>' + esc(r.ex) + '</p>' : '') + '<div id="wres"></div></div>';
  };
  LIGA_.write = function () {
    if (window.WolfCorretor && WolfCorretor.liga) WolfCorretor.liga(document);
    $('#wt').addEventListener('input', function () { S.write.t = this.value; grava(); });
    if (S.write.ia) mostraCorrecao($('#wres'), S.write.ia, false);
  };
  function corrigeTexto(alvoBox, txt, pedido, um, depois) {
    if (txt.trim().length < 12) { alvoBox.innerHTML = '<p class="porque no">Write a little more first: two full sentences.</p>'; return; }
    alvoBox.innerHTML = '<div class="wolf-res pensando"><div class="cab"><span class="orbe"></span>Wolf is reading…</div></div>';
    var local = function (msg) {
      var ach = (window.WolfCorretor && WolfCorretor.confere) ? WolfCorretor.confere(txt).slice(0, um ? 1 : 2) : [];
      var res = { fixes: ach.map(function (a) { return { errado: txt.slice(a.i, a.f), certo: '', porque: texto(a.msg) }; }), elogio: ach.length ? '' : 'Looks good. Read it out loud once.', local: 1, msg: msg };
      depois(res);
    };
    if (!IA.ligada()) return local('Your teacher will read it.');
    IA.pede('corrige', { pedido: texto(pedido), texto: txt, alvo: H.alvo }).then(function (r) {
      if (!r.ok) return local(erroIA(r) + ' Your teacher will read it.');
      var s = r.saida || {}; s.fixes = (s.fixes || []).slice(0, um ? 1 : 2); depois(s);
    });
  }
  function mostraCorrecao(box, s, um) {
    var lista = (s.fixes || []).map(function (f) { return '<li>' + (f.errado ? '<s>' + esc(f.errado) + '</s> ' : '') + (f.certo ? '→ <ins>' + esc(f.certo) + '</ins>' : '') + (f.porque ? '<br><small>' + esc(f.porque) + '</small>' : '') + '</li>'; }).join('');
    box.innerHTML = '<div class="wolf-res"><div class="cab"><span class="orbe"></span>' + (s.local ? 'Lesson checker' : 'Wolf') + '</div>' +
      (lista ? (um ? 'One thing to fix:' : (s.fixes.length === 1 ? '1 thing to fix:' : '2 things to fix:')) + '<ul>' + lista + '</ul>' : (s.local ? '' : 'Nothing important to fix. ')) +
      (s.elogio ? '<p class="elogio">' + esc(s.elogio) + '</p>' : '') + (s.msg ? '<small>' + esc(s.msg) + '</small>' : '') + '</div>';
  }

  /* ── Y · You ─────────────────────────────────────────────────── */
  PINTA.you = function () {
    var r = R.you, pode = WolfFala.suportado();
    return cabeca('you', r.sub || 'Two questions about you. Say it or type it.') + r.perguntas.map(function (q, j) {
      return '<div class="vidro"><p class="youq">' + (j + 1) + '. ' + esc(q.q) + '</p>' + papel('yt' + j, S.you.t[j] || '', q.ph || 'Your answer…', q.q) +
        '<div class="acoes">' + (pode ? '<button class="mic" data-ymic="' + j + '">' + MIC + '<span>Say it</span></button>' : '') +
        '<button class="wolfbt" data-ysend="' + j + '"><span class="orbe"></span>Send to Wolf</button>' + (q.ex ? '<button class="verex" data-yex="' + j + '">Example</button>' : '') + '</div>' +
        (q.ex ? '<p class="ex" id="yex' + j + '" hidden><b>EXAMPLE</b>' + esc(q.ex) + '</p>' : '') + '<div id="yres' + j + '"></div></div>';
    }).join('');
  };
  LIGA_.you = function () {
    if (window.WolfCorretor && WolfCorretor.liga) WolfCorretor.liga(document);
    R.you.perguntas.forEach(function (q, j) {
      $('#yt' + j).addEventListener('input', function () { S.you.t[j] = this.value; grava(); });
      if (S.you.ia[j]) mostraCorrecao($('#yres' + j), S.you.ia[j], true);
    });
  };
  function youMic(j, bt) {
    if (ESCUTA) { ESCUTA.parar(); return; }
    var ta = $('#yt' + j), antes = ta.value.trim();
    bt.classList.add('ouvindo'); $('span', bt).textContent = 'Listening…';
    var fecha = function () { ESCUTA = null; bt.classList.remove('ouvindo'); $('span', bt).textContent = 'Say more'; };
    ESCUTA = WolfFala.ouvir({
      lang: 'en-US',
      onParcial: function (t) { ta.value = (antes ? antes + ' ' : '') + t; },
      onFim: function (res) { fecha(); var t = res.texto.charAt(0).toUpperCase() + res.texto.slice(1); ta.value = (antes ? antes + ' ' : '') + t + (/[.!?]$/.test(t) ? '' : '.'); S.you.t[j] = ta.value; grava(); ta.dispatchEvent(new Event('input', { bubbles: true })); },
      onErro: function (e) { fecha(); toast(e === 'no-speech' ? 'I didn’t hear anything.' : 'No microphone here: type it.'); }
    });
  }

  /* ── o resultado e o relatório ───────────────────────────────── */
  function contas() {
    var L = R.listen.perguntas.map(function (q, j) { var v = S.listen.r[j]; return { ok: !!(v && v.ok), t: 'Listen: ' + q.q, c: q.op[q.a], w: q.por }; });
    var F = R.focus.itens.map(function (it, j) { var s = S.focus[j] || {}; return { ok: !!(s.certo && s.primeira), t: 'Focus: ' + texto(it.t) + (it.mostra ? ' — ' + it.mostra : ''), c: it.r, w: texto(it.d || '') }; });
    var outOk = R.out.frases.filter(function (f, k) { var o = S.out[k]; return o && ((o.melhor && o.melhor.pegou === o.melhor.total) || (o.pron && o.pron.limpa)); }).length;
    var nao = [];
    R.out.frases.forEach(function (f, k) { var o = S.out[k]; ((o && o.melhor && o.melhor.faltaram) || []).forEach(function (w) { if (nao.indexOf(w) < 0) nao.push(w); }); });
    /* Atualização de fala: os sons da 1ª tentativa de cada frase (vão para o professor; o aluno não vê nota) */
    var sons = { c: 0, t: 0, trocas: [] };
    R.out.frases.forEach(function (f, k) {
      var p = S.out[k] && S.out[k].pron && S.out[k].pron.primeira; if (!p) return;
      sons.c += p.sc || 0; sons.t += p.st || 0;
      (p.trocas || []).forEach(function (t) { sons.trocas.push({ som: t.som, disse: t.disse, palavra: t.palavra }); });
    });
    var rOut = { k: 'out', certas: outOk, de: R.out.frases.length };
    if (sons.t) { rOut.sons_certos = sons.c; rOut.sons_total = sons.t; rOut.trocas = sons.trocas.slice(0, 16); }
    var itens = L.concat(F), som = itens.filter(function (x) { return x.ok; }).length;
    return {
      itens: itens, som: som, de: itens.length, nao: nao, sons: sons,
      rodadas: [
        { k: 'listen', certas: L.filter(function (x) { return x.ok; }).length, de: L.length },
        rOut,
        { k: 'focus', certas: F.filter(function (x) { return x.ok; }).length, de: F.length },
        { k: 'write', certas: 0, de: 0 }, { k: 'you', certas: 0, de: 0 }
      ]
    };
  }
  /* "th (three, think) · -ed (worked)": um som por vez, sem número */
  function praticar(trocas) {
    var g = {}, ordem = [];
    trocas.forEach(function (t) { if (!g[t.som]) { g[t.som] = []; ordem.push(t.som); } if (t.palavra && g[t.som].indexOf(t.palavra) < 0) g[t.som].push(t.palavra); });
    return ordem.slice(0, 3).map(function (s) { return '<b>' + esc(s) + '</b>' + (g[s].length ? ' (' + g[s].slice(0, 3).map(esc).join(', ') + ')' : ''); }).join(' · ');
  }
  function resultado() {
    if (!S.t1) { S.t1 = Date.now(); grava(); }
    var c = contas(), pc = c.de ? Math.round(c.som / c.de * 100) : 0, C = 2 * Math.PI * 52, min = Math.max(1, Math.round((S.t1 - S.t0) / 60000));
    var nomes = { listen: 'Listen', out: 'Out loud', focus: 'Focus', write: 'Write', you: 'You' };
    return '<section class="h2-rod"><div class="res-topo"><svg class="anel" viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="11"/>' +
      '<circle cx="60" cy="60" r="52" fill="none" stroke="#c9b8ff" stroke-width="11" stroke-linecap="round" transform="rotate(-90 60 60)" stroke-dasharray="' + (C * pc / 100) + ' ' + C + '"/>' +
      '<text x="60" y="68" text-anchor="middle" font-family="Gloock,serif" font-size="27" fill="#fff">' + c.som + '/' + c.de + '</text></svg>' +
      '<div><h2>' + (pc >= 85 ? 'Excellent.' : pc >= 60 ? 'Good work.' : 'Done. Well done for finishing.') + '</h2><p>' + c.som + ' of ' + c.de + ' right on the first try · ' + min + ' min. Your teacher sees this.</p></div></div>' +
      '<div class="vidro"><ul class="res-rod">' + c.rodadas.map(function (r) {
        /* com o corretor de sons, o Out loud do aluno não vira número (o professor recebe os sons) */
        var semNota = r.k === 'out' && c.sons.t;
        var v = r.de && !semNota ? Math.round(r.certas / r.de * 100) : (S.fez[r.k] ? 100 : 0);
        return '<li><span>' + nomes[r.k] + '</span><i><em style="width:' + v + '%"></em></i><small>' + (r.de && !semNota ? r.certas + '/' + r.de : (S.fez[r.k] ? '✓' : '—')) + '</small></li>';
      }).join('') + '</ul><p class="dicapt">Out loud is not part of the score: it shows what the phone understood.</p></div>' +
      '<div class="vidro prof"><h3>For your next class</h3><ul>' +
      (c.nao.length ? '<li>Say these again: <b>' + c.nao.map(esc).join(', ') + '</b></li>' : c.sons.t ? '' : '<li>The phone understood all your sentences.</li>') +
      (c.sons.t ? (c.sons.trocas.length ? '<li>Sounds to practise: ' + praticar(c.sons.trocas) + '</li>' : '<li>All the sounds we checked sounded right.</li>') : '') +
      (S.erros.length ? S.erros.slice(0, 4).map(function (e) { return '<li>' + esc(e.certa) + '</li>'; }).join('') : '') +
      '</ul><p class="envio" id="envio">' + (NA_PLATAFORMA ? 'Sending to your teacher…' : 'Open this homework in the Wolf Labs app to send it to your teacher.') + '</p></div>' +
      fimWolf(c) +
      (H.fecho ? '<div class="vidro"><p class="dicapt" style="margin:0">' + H.fecho + '</p></div>' : '') +
      '<div class="acoes" style="justify-content:center;margin-top:14px"><button class="bt gh" id="refaz">Do it again</button></div></section>';
  }
  /* 28/10 · o Wolf fecha a lição: o que melhorou e o que volta (sem IA: feito com o que já foi registrado) */
  function correcoes() {
    return R.focus.itens.map(function (it, j) { var s = S.focus[j] || {}; return s.err1 ? { errado: s.err1, certo: it.r } : null; }).filter(Boolean).slice(0, 3);
  }
  function fimWolf(c) {
    var boas = c.rodadas.filter(function (r) { return r.de && r.certas === r.de; }).map(function (r) { return { listen: 'Listen', out: 'Out loud', focus: 'Focus' }[r.k]; });
    var volta = S.erros.slice(0, 2).map(function (e) { return '<b>' + esc(e.certa) + '</b>'; });
    var ajudas = R.focus.itens.filter(function (x, j) { return S.focus[j] && S.focus[j].ajuda; }).length;
    var cad = correcoes();
    if (!boas.length && !volta.length && !cad.length) return '';
    return '<div class="vidro">' + wolfCaixa('w-fim', 'Wolf',
      (boas.length ? '<p>' + W('Strong today: ', 'Forte hoje: ') + boas.join(', ') + '.</p>' : '') +
      (volta.length ? '<p>' + W('Coming back next time: ', 'Volta na próxima: ') + volta.join(' · ') + '</p>' : '<p>' + W('Nothing to bring back. Great job!', 'Nada para voltar. Muito bem!') + '</p>') +
      (ajudas ? '<p><small>' + W(ajudas + ' with Wolf’s help.', ajudas + ' com a ajuda do Wolf.') + '</small></p>' : '') +
      (cad.length && NA_PLATAFORMA ? '<p id="wcad"><small>' + W('Saving your fixes to My notes…', 'Guardando as correções no seu caderno…') + '</small></p>' : '')) + '</div>';
  }
  window.addEventListener('message', function (ev) {
    var d = ev.data; if (!d || d.wolf !== 'hw2-caderno-resposta' || ev.source !== window.parent) return;
    var el = $('#wcad'); if (el) el.innerHTML = '<small>' + (d.ok && d.n ? W(d.n === 1 ? '1 fix went to My notes.' : d.n + ' fixes went to My notes.', d.n === 1 ? '1 correção foi para o seu caderno.' : d.n + ' correções foram para o seu caderno.') : W('Your teacher has your fixes.', 'Seu professor tem as suas correções.')) + '</small>';
  });
  var ENVIADO = '';
  function envia() {
    if (!NA_PLATAFORMA) return;
    var c = contas(), assin = c.som + '/' + c.de + '/' + (S.t1 || 0);
    if (ENVIADO === assin) return; ENVIADO = assin;
    var dados = {
      hw: H.id, alvo: H.alvo, minutos: Math.max(1, Math.round(((S.t1 || Date.now()) - S.t0) / 60000)), placar: c.som, de: c.de,
      rodadas: c.rodadas, nao_reconhecidas: c.nao.slice(0, 20), erros: S.erros.slice(0, 12),
      escrita: [{ pedido: texto(R.write.pede), texto: S.write.t || '' }].concat(R.you.perguntas.map(function (q, j) { return { pedido: q.q, texto: S.you.t[j] || '' }; })).filter(function (x) { return x.texto.trim(); }),
      abrir_com: H.abrir || ''
    };
    var falaNota = [];
    if (c.nao.length) falaNota.push('não entendeu: ' + c.nao.slice(0, 4).join(', '));
    if (c.sons.t) falaNota.push('sons certos ' + Math.round(100 * c.sons.c / c.sons.t) + '%');
    var ajudas = R.focus.itens.filter(function (x, j) { return S.focus[j] && S.focus[j].ajuda; }).length;
    var nota = (falaNota.length ? falaNota.join(' · ') : 'fala ok') + (S.erros.length ? ' · ' + S.erros.length + ' erro' + (S.erros.length > 1 ? 's' : '') : '') + (ajudas ? ' · ' + ajudas + ' com ajuda do Wolf' : '');
    try {
      window.parent.postMessage({ wolf: 'hw2-relatorio', v: 1, dados: dados }, PARA);
      window.parent.postMessage({ wolf: 'hw-resultado', v: 1, tarefa: Q.get('t') || null, hw: 'hw2-' + H.id, placar: c.som, de: c.de,
        segundaTentativa: c.itens.map(function (x, i) { return x.ok ? null : i + 1; }).filter(Boolean),
        respostas: c.itens.map(function (x, i) { return { q: i + 1, primeira: x.ok, t: x.t.slice(0, 240), c: x.c, w: x.w ? x.w.slice(0, 240) : null }; }),
        nota: nota, em: new Date().toISOString() }, PARA);
      var cad = correcoes(); if (cad.length) window.parent.postMessage({ wolf: 'hw2-caderno', v: 1, itens: cad }, PARA);
    } catch (e) {}
  }
  window.addEventListener('message', function (ev) {
    var d = ev.data; if (!d || d.wolf !== 'hw2-relatorio-resposta' || ev.source !== window.parent) return;
    var el = $('#envio'); if (el) el.textContent = d.ok ? 'Sent to your teacher ✓' : 'Saved on this phone. Your score went to your teacher.';
  });

  /* ── os toques ───────────────────────────────────────────────── */
  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('button') : null; if (!t) return;
    if (t.id === 'segue') { if (S.p < ORDEM.length) { S.p++; grava(); pinta(); } return; }
    if (t.id === 'volta') { if (S.p > 0) { S.p--; grava(); pinta(); } return; }
    if (t.hasAttribute('data-ir')) { var i = +t.getAttribute('data-ir'); if (i <= S.p || S.fez[ORDEM[i - 1]] || S.fez[ORDEM[i]]) { S.p = i; grava(); pinta(); } return; }
    if (t.id === 'refaz') { if (confirm('Start this homework again? Your teacher keeps the first result.')) { S = novo(); grava(); ENVIADO = ''; pinta(); } return; }
    /* listen */
    if (t.classList.contains('op')) { var q = t.closest('.q'); if (q.classList.contains('feito')) return; marcaQ(q, +t.getAttribute('data-op'), true); return; }
    /* out loud */
    if (t.hasAttribute('data-ouve')) { var f = R.out.frases[+t.getAttribute('data-ouve')]; AU.src = f.au; AU.playbackRate = t.hasAttribute('data-lento') ? 0.75 : 1; var p = AU.play(); if (p && p.catch) p.catch(function () {}); return; }
    if (t.hasAttribute('data-mic')) { falar(+t.getAttribute('data-mic'), t); return; }
    if (t.hasAttribute('data-pmic')) { falarPron(+t.getAttribute('data-pmic'), t); return; }
    if (t.hasAttribute('data-pron-abrir')) { Pron.abrir(); return; }
    if (t.hasAttribute('data-dica')) { dicaPron(+t.getAttribute('data-dica'), t); return; }
    if (t.hasAttribute('data-pula')) { var kp = +t.getAttribute('data-pula'); var op = S.out[kp] || {}; op.pulou = 1; S.out[kp] = op; grava(); var vp = $('#ver' + kp); vp.hidden = false; vp.className = 'veredito'; vp.textContent = 'Skipped. You can come back to it.'; t.remove(); confereOut(); var prox = $('.fala[data-k="' + (kp + 1) + '"]'); if (prox) prox.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
    if (t.hasAttribute('data-disse')) { var kd = +t.getAttribute('data-disse'); var od = S.out[kd] || {}; od.disse = 1; S.out[kd] = od; grava(); var vd = $('#ver' + kd); vd.hidden = false; vd.className = 'veredito tudo'; vd.textContent = 'Said out loud ✓'; confereOut(); return; }
    if (t.hasAttribute('data-grava')) {
      var kg = +t.getAttribute('data-grava');
      if (Grava.mr) { Grava.para(); t.textContent = '● Record again'; return; }
      t.textContent = '■ Stop';
      Grava.comeca(function (url) { var a = $('#eu' + kg); a.src = url; a.hidden = false; }, function () { t.textContent = 'No microphone'; t.disabled = true; });
      return;
    }
    /* focus */
    if (t.classList.contains('ficha')) { var it0 = t.closest('.it'), jj = it0.getAttribute('data-j'); if (S.focus[jj] && S.focus[jj].fim) return; var lin = $('#lin' + jj); if (t.parentNode === lin) $('#fic' + jj).appendChild(t); else lin.appendChild(t); return; }
    if (t.hasAttribute('data-limpa')) { var jl = t.getAttribute('data-limpa'); $$('#lin' + jl + ' .ficha').forEach(function (b) { $('#fic' + jl).appendChild(b); }); return; }
    if (t.hasAttribute('data-check')) { confereFocus(+t.getAttribute('data-check'), t); return; }
    if (t.hasAttribute('data-mostra')) { var jm = +t.getAttribute('data-mostra'), itm = R.focus.itens[jm], sm = S.focus[jm] = S.focus[jm] || { n: 0 }; if (sm.fim) return; if (!sm.n) anotaErro('Focus: ' + texto(itm.t) + (itm.mostra ? ' — ' + itm.mostra : ''), '(showed the answer)', itm.r); sm.n = Math.max(1, sm.n); sm.fim = 1; sm.certo = 0; sm.final = itm.r; grava(); fechaItem($('.it[data-j="' + jm + '"]'), jm, false, itm.r, '', false); confereFocusFim(); return; }
    if (t.hasAttribute('data-why')) { var kw = t.getAttribute('data-why'); porQue(/^[fl]/.test(kw) ? kw : 'f' + kw, t); return; }
    if (t.hasAttribute('data-wresp')) { respondeAbertura(t); return; }
    if (t.hasAttribute('data-wfecha')) { S.wolf.fechou = 1; grava(); var wb = $('#wabre'); if (wb) wb.innerHTML = ''; return; }
    /* write */
    if (t.id === 'wex') { $('#wexp').hidden = false; t.hidden = true; return; }
    if (t.id === 'wcheck') {
      var txt = $('#wt').value; t.disabled = true;
      corrigeTexto($('#wres'), txt, R.write.pede, false, function (res) { t.disabled = false; S.write.ia = res; grava(); mostraCorrecao($('#wres'), res, false); feito('write'); });
      if (txt.trim().length < 12) t.disabled = false;
      return;
    }
    /* you */
    if (t.hasAttribute('data-yex')) { $('#yex' + t.getAttribute('data-yex')).hidden = false; t.hidden = true; return; }
    if (t.hasAttribute('data-ymic')) { youMic(+t.getAttribute('data-ymic'), t); return; }
    if (t.hasAttribute('data-ysend')) {
      var jy = +t.getAttribute('data-ysend'), ty = $('#yt' + jy).value; t.disabled = true;
      corrigeTexto($('#yres' + jy), ty, R.you.perguntas[jy].q, true, function (res) {
        t.disabled = false; S.you.ia[jy] = res; grava(); mostraCorrecao($('#yres' + jy), res, true);
        if (R.you.perguntas.every(function (q, k) { return S.you.ia[k] && (S.you.t[k] || '').trim().length >= 6; })) feito('you');
      });
      if (ty.trim().length < 12) t.disabled = false;
      return;
    }
  });
  // campo de resposta é textarea de uma linha que cresce: frase longa não some no celular
  function cresce(el) { el.style.height = 'auto'; el.style.height = (el.scrollHeight + 3) + 'px'; }
  document.addEventListener('input', function (e) { if (e.target.matches && e.target.matches('.campo textarea')) cresce(e.target); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Enter' && e.target.matches && e.target.matches('.campo input, .campo textarea')) { e.preventDefault(); var b = e.target.parentNode.querySelector('[data-check],[data-wresp],[data-why]'); if (b) b.click(); } });

  /* para o teste automático (e para depurar): o motor por dentro */
  window.__hw2 = { aceita: aceita, comparaFala: comparaFala, normal: normal, estado: function () { return S; }, contas: contas, pron: Pron };
  pinta();
  if (NA_PLATAFORMA) Pron.consulta();   /* a plataforma tem a Atualização de fala? (3 s; plataforma antiga = sem resposta = navegador) */
})();
