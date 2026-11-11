/* ============================================================
   UNDER PRESSURE · THE ATTENTION TARGET · LIVE CLASS  06/10/2026
   Main series B1 · causa, efeito e propósito: because + frase /
   because of + coisa; leads to / results in + coisa ou -ING; to / in
   order to + verbo; so that + sujeito + can / will; for + coisa.
   Erros: "because of I was nervous", "for not fail", "in order to
   don't", "leads to lose", "I came here for learn".
   O MUNDO (da aula velha): cada aluno escolhe uma ARENA (prova,
   apresentação, jogo, entrevista, conversa difícil); o estudo de 2005
   (quem tinha mais memória perdeu mais pontos); 14 perguntas que dão
   dois números: THE WORRIER (a atenção sai para a sala) e THE WATCHER
   (a atenção entra no próprio corpo), com remédios opostos; a golfista
   e o palestrante; o treinador. Um momento, não um rótulo. Quatro
   gravações mantidas, conferidas no faster-whisper em 06/10: batem.
   A CARA: o ALVO DA ATENÇÃO — três anéis: o miolo é o CORPO, o anel do
   meio é a TAREFA, o de fora é a SALA. Um ponto de luz marca onde a
   atenção está; no perfil, ele escorrega para fora (Worrier) ou para
   dentro (Watcher). E a corrente de três elos: causa · efeito ·
   propósito (a válvula).
   Fila: FILA-LIVE-386.md · 112.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'caldeira' },
  { k: 'arena', est: 'o', min: 7, img: 'sala', rot: 'I · Your Arena', t: 'Pick one place where pressure matters to you.', p: 'Keep it all hour. Then answer three questions out loud. Nothing gets corrected.' },
  { k: 'lab', est: 'l', min: 7, img: 'sala', rot: 'II · The Lab', t: 'Two groups, the same math problems. One worked in silence. The other worked for money, on camera.', p: 'Listen once. Then choose, and say your reason out loud first.' },
  { k: 'lista', est: 'o', min: 7, img: 'caldeira', rot: 'III · Fourteen Questions', t: 'Fourteen questions about your arena, not about your whole life.', p: 'Read each one out loud. Tap the ones that are true for you. There’s no good answer, only a true one.' },
  { k: 'porque', est: 'f', min: 6, img: 'dominos', rot: 'IV · Because, or Because Of?', t: 'A sentence takes BECAUSE. A thing takes BECAUSE OF.', p: 'Is there a verb after the gap? Choose, then say the whole sentence.' },
  { k: 'gx', est: 'f', min: 4, img: 'caldeira', rot: 'V · The Chain in Blocks', t: 'Cause, effect, purpose. Each block has a job.', p: 'Read the blocks out loud. Notice the little link words. Then build a chain and say your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'dominos', rot: 'VI · The Three Links', t: 'Every explanation has three links: cause, effect, purpose.', p: 'Tap a link. Read the rule out loud. Then make one from your arena.' },
  { k: 'perfil', est: 'o', min: 7, img: 'caldeira', rot: 'VII · The Profile', t: 'Two numbers, two different problems, and the cures are opposites.', p: 'Read your result out loud, including the two lines of advice.' },
  { k: 'para', est: 'f', min: 6, extra: 1, img: 'dominos', rot: 'VIII · To, For, or So That?', t: 'A verb takes TO. A thing takes FOR. A new subject takes SO THAT.', p: 'Choose. Then say the whole sentence out loud.' },
  { k: 'casos', est: 'l', min: 7, extra: 1, img: 'sala', rot: 'IX · Two Cases', t: 'Two people, two bad days. They sound the same, and they aren’t.', p: 'Listen. Which type is it? Then say why, with BECAUSE.' },
  { k: 'corrente', est: 'o', min: 7, extra: 1, img: 'caldeira', rot: 'X · The Chain', t: 'Six facts. Three links each: cause, effect, and the purpose that opens the valve.', p: 'Tap the links in order. Say the whole sentence before the last one.' },
  { k: 'sua', est: 'o', min: 7, extra: 1, img: 'sala', rot: 'XI · Your Own Chain', t: 'The same three links, about your arena, and about somebody else.', p: 'Answer about yourself. Then the same about another person.' },
  { k: 'relato', est: 'l', min: 7, extra: 1, img: 'caldeira', rot: 'XII · The Report', t: 'Explain your arena to somebody who knows nothing. Six markers.', p: 'One marker at a time, without stopping. Then listen to the coach.' },
  { k: 'fim', est: 'w', min: 6, img: 'dominos', rot: 'XIII · The Arena Again', t: 'Your three sentences from scene I come back, with the right links.', p: 'Write your arena in one chain: cause, effect, purpose. It goes to your My notes.' }
];

var TR = {
  'lab.mp3': 'A study from two thousand and five. Two groups of students, and the same math problems. One group worked in silence. The other group worked for money, on camera, with a partner who depended on them. The results surprised the researchers. The students with the best memory for numbers lost the most points. The other students did not change at all. The pressure did not take something from everybody. It took from the people who had the most to use.',
  'golfista.mp3': 'I have made that shot ten thousand times. That day, I could feel my left hand on the club. I could feel where my shoulder was. I remember thinking: keep the arm slow, keep it straight, do not move the head. And I did all of it correctly. The ball went four meters past the hole. I have never missed that shot in practice. Not once.',
  'palestra.mp3': 'There were about sixty people. I knew the material. I had the whole thing in my head an hour before. Then I started thinking about the man in the second row, the one who was not smiling. And about the time. And about the questions at the end. And whether the file would open. I got to slide four and I could not remember what came next. It was my own slide. I wrote it.',
  'treinador.mp3': 'There are two of you, and you need different things. If your head leaves the task, you do not need more practice. You need practice with the pressure already in the room. And you need one small thing you always do first. The same thing, every time. If your head goes into your own hands, do the opposite. Give your attention something outside your body. Watch the ball. Watch the person’s face. Not the arm.'
};

var ARENAS = ['a test', 'a presentation', 'a match', 'an interview', 'a difficult conversation', 'a performance'];
var ABRE = [
  { q: 'Your arena: when did it last go wrong? Why did it go wrong?', fup: 'What were you thinking about?', st: ['It went wrong because …', 'Last time, …'], ex: 'It went wrong because I was thinking about the clock.' },
  { q: 'What did that lead to?', fup: 'And after that?', st: ['That led to …', 'So I …'], ex: 'That led to a really bad last question.' },
  { q: 'What do you want to do differently next time, and what for?', fup: 'Why that?', st: ['Next time I want to …', '… so that …'], ex: 'Next time I want to read each question once.' }
];

var ITENS = [
  ['When it matters, I start thinking about what happens if I get it wrong.', 'W'],
  ['When it matters, I can feel my own hands or my own mouth working.', 'M'],
  ['I notice the people watching more than the thing I’m doing.', 'W'],
  ['I slow down to do it correctly, and it comes out worse.', 'M'],
  ['I check the clock or the score more than I need to.', 'W'],
  ['I think about the steps of something I’ve done a thousand times.', 'M'],
  ['My head is already in the next part before this part is finished.', 'W'],
  ['I hear my own voice while I’m speaking.', 'M'],
  ['I plan what I’m going to say instead of listening.', 'W'],
  ['I try to control something my body used to do on its own.', 'M'],
  ['One small mistake stays with me for the rest of the day.', 'W'],
  ['I’m better before somebody explains the technique to me.', 'M'],
  ['Afterward, I remember my worry better than my performance.', 'W'],
  ['When I concentrate on how I do it, I lose how it felt.', 'M']
];

var PORQUE = [
  { a: 'She missed the shot ', b: ' she was thinking about her arm.', k: 'a', por: 'A sentence follows (she was thinking): <b>because</b>.' },
  { a: 'He lost his place ', b: ' the man in the second row.', k: 'b', por: 'A thing follows (the man): <b>because of</b>.' },
  { a: 'I couldn’t finish ', b: ' the time.', k: 'b', por: 'THE TIME is a thing: <b>because of</b>.' },
  { a: 'I couldn’t finish ', b: ' there was no time left.', k: 'a', por: 'A sentence follows: <b>because</b>.' },
  { a: 'The team lost ', b: ' one bad minute.', k: 'b', por: 'ONE BAD MINUTE is a thing.' },
  { a: 'The team lost ', b: ' nobody was talking.', k: 'a', por: 'NOBODY WAS TALKING has a verb.' }
];

var ELOS = [
  { k: 'CAUSE', c: '#f0b866', linhas: [['because + a sentence', 'She missed <b>because</b> she was thinking.'], ['because of + a thing', 'He lost his place <b>because of</b> the clock.']] },
  { k: 'EFFECT', c: '#ff7a6e', linhas: [['leads to / results in + a thing', 'Worry <b>leads to</b> slower thinking.'], ['… or + -ING, never a plain verb', 'That <b>results in losing</b> the ball.']] },
  { k: 'PURPOSE', c: '#8fd9a2', linhas: [['to / in order to + verb (you)', 'I watch the ball <b>to</b> stop thinking about my arm. · <b>in order not to</b> fail'], ['so that + subject + can / will', 'I speak slowly <b>so that</b> they can follow.']] }
];

var PERFIS = {
  W: { nome: 'THE WORRIER', oque: 'Your attention leaves the task and goes to the room.', como: 'The worry takes the space you were using to think.', remedio: ['Practice with the pressure already in the room.', 'Build one small thing you always do first. The same thing, every time.'], estudo: 'Players who trained under pressure didn’t fall apart under more of it.' },
  M: { nome: 'THE WATCHER', oque: 'Your attention goes into your own body.', como: 'You take control of something that already worked without you.', remedio: ['Give your attention something outside your body.', 'Watch the ball, or the face in front of you. Never the arm.'], estudo: 'Golfers who watched the ball’s flight beat golfers who watched their own stroke.' },
  B: { nome: 'BOTH, ALMOST EQUAL', oque: 'Your attention moves: sometimes out, sometimes in.', como: 'The two happen in the same minute and feed each other.', remedio: ['Start with the routine. It buys back attention.', 'Then give that attention something outside your body.'], estudo: 'Most people are one or the other. A few are both.' }
};

var PARA = [
  { a: 'I watch the ball ', b: ' stop thinking about my arm.', k: 'to', por: 'A verb follows (stop): <b>to</b>, never FOR.' },
  { a: 'I practice under pressure ', b: ' the day it matters.', k: 'for', por: 'A thing follows (the day): <b>for</b>.' },
  { a: 'I say the plan out loud ', b: ' my partner knows it too.', k: 'so', por: 'Somebody else does the second part: <b>so that</b>.' },
  { a: 'She breathes twice ', b: ' slow herself down.', k: 'to', por: 'SLOW is a verb: <b>to</b>.' },
  { a: 'He writes the first line ', b: ' he can start without thinking.', k: 'so', por: 'HE CAN: a subject and a modal, <b>so that</b>.' },
  { a: 'This routine is ', b: ' the bad days, not the good ones.', k: 'for', por: 'THE BAD DAYS is a thing: <b>for</b>.' }
];

var CASOS = [
  { au: 'golfista.mp3', quem: 'THE GOLFER', ok: 'M', por: 'Everything she noticed was inside her own body: her hand, her shoulder, her head. <b>The Watcher.</b>' },
  { au: 'palestra.mp3', quem: 'THE SPEAKER', ok: 'W', por: 'Everything he noticed was outside the task: the man, the time, the questions. <b>The Worrier.</b>' }
];

var CORRENTES = [
  { fato: 'A runner keeps checking the clock.', partes: ['because of the clock', 'it leads to losing her rhythm', 'she covers it in order to run free'], ok: 'She loses her rhythm because of the clock, so she covers it in order to run free.' },
  { fato: 'A pianist thinks about his fingers.', partes: ['because he watches his hands', 'that results in a slower piece', 'he looks at the room to stop watching'], ok: 'The piece gets slower because he watches his hands, so he looks at the room to stop watching.' },
  { fato: 'A student reads the question four times.', partes: ['because she’s thinking about the result', 'it leads to losing time', 'she reads once in order to save time'], ok: 'She loses time because she’s thinking about the result, so she reads once in order to save time.' },
  { fato: 'A goalkeeper hears one man shouting.', partes: ['because of one voice in the crowd', 'that results in a late jump', 'he watches the ball so that the voice stops mattering'], ok: 'He jumps late because of one voice in the crowd, so he watches the ball so that the voice stops mattering.' },
  { fato: 'A driver thinks about her feet.', partes: ['because she’s controlling the pedals', 'it leads to a hard stop', 'she looks far ahead in order to drive smoothly'], ok: 'She stops hard because she’s controlling the pedals, so she looks far ahead in order to drive smoothly.' },
  { fato: 'A singer plans the next line while singing.', partes: ['because he’s ahead of himself', 'that results in a missed word', 'he breathes first so that he can stay in this line'], ok: 'He misses a word because he’s ahead of himself, so he breathes first so that he can stay in this line.' }
];

var SUA = [
  { q: 'What takes your attention first, when it matters?', st: ['I lose it because …', 'I lose it because of …'], entao: 'Now somebody you’ve watched lose it. Why did they?' },
  { q: 'And what happens right after that?', st: ['That leads to …-ing', 'That results in …'], entao: 'Now the same for them. What did it lead to?' },
  { q: 'What’s one thing you could do before you start?', st: ['I want to … in order to …'], entao: 'What would you tell them to do first?' },
  { q: 'Who else is in the room when it matters?', st: ['I … so that they can …'], entao: 'What do they need from you that you forget to give?' }
];

var MARCOS = ['your arena, and what it is', 'what happens to your attention', 'why it happens: one cause', 'what that leads to', 'the one thing you’ll do first', 'and what it’s for'];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  ar: { tipo: '', n: 0, foi: {} }, lb: { esc: -1 }, li: {}, pq: { n: 0, esc: '' }, rg: { sel: '' }, pr: { n: 0, esc: '' }, cs: { n: 0, esc: '' }, ch: { n: 0, feitos: 0, erro: 0 }, su: { n: 0, outro: 0 }, rl: { n: 0 } };

/* o alvo: miolo = corpo, meio = tarefa, fora = sala; o ponto de luz é a atenção */
function alvo(onde, mini) {
  var pos = { tarefa: [50, 30], sala: [88, 14], corpo: [50, 50], '': [50, 30] }[onde || ''];
  return '<div class="pt-alvo' + (mini ? ' mini' : '') + '"><span class="pt-anel sala"><small>THE ROOM</small></span><span class="pt-anel tarefa"><small>THE TASK</small></span><span class="pt-anel corpo"><small>YOUR BODY</small></span>'
    + '<i class="pt-ponto ' + (onde || 'tarefa') + '" style="left:' + pos[0] + '%;top:' + pos[1] + '%"></i></div>';
}
function perfil() {
  var w = 0, m = 0; ITENS.forEach(function (x, i) { if (S.li[i]) { if (x[1] === 'W') w++; else m++; } });
  return { w: w, m: m, k: Math.abs(w - m) <= 1 ? 'B' : w > m ? 'W' : 'M' };
}
function corrente(acesos, rotulos) {
  return '<div class="pt-corrente">' + ['CAUSE', 'EFFECT', 'PURPOSE'].map(function (k, i) { return '<span class="pt-elo e' + i + (i < acesos ? ' on' : '') + '"><small>' + k + '</small>' + ((rotulos || [])[i] && i < acesos ? rotulos[i] : '') + '</span>'; }).join('<b class="pt-seta">→</b>') + '</div>';
}
function escolha(acao, est, ops, ok) {
  return '<div class="pt-esc">' + ops.map(function (o) { return '<button type="button" class="versao grande-v' + (est.esc === o[0] ? (est.esc === ok ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · CAUSE · EFFECT · PURPOSE</span><h1>Under <b>Pressure</b></h1>'
    + '<p class="sub">Everybody has one place where it matters more than it should. Why it goes wrong, what that <b>leads to</b>, and what you do <b>in order to</b> stop it.</p>'
    + '<div class="chipsx"><span class="pilula">because · because of</span><span class="pilula">leads to + -ing</span><span class="pilula">to · in order to · so that</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Choose your arena</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + alvo('tarefa') + corrente(3, ['because of the clock', 'leads to losing time', 'in order to save time']) + '</div></div>';
};

R.arena = function (c) {
  var e = S.ar;
  var chips = '<div class="pt-arenas">' + ARENAS.map(function (t) { return '<button type="button" class="pilula' + (e.tipo === t ? ' on' : '') + '" data-a="ar-tipo" data-v="' + h(t) + '">' + t + '</button>'; }).join('') + '</div>';
  if (!e.tipo) return cab(c) + chips + '<p class="dica-aluno" style="text-align:center">One place. You keep it all hour.</p>';
  return cab(c) + chips + sequencia({ est: 'o', rot: '', t: '', p: '' }, ABRE, e, 'ar', 'Three sentences about a bad day. You’ll hear them again at the end.').replace(/<div class="cab[\s\S]*?<\/p><\/div>/, '')
    + '<p class="so-prof dica-aluno" style="text-align:center">Write their three sentences word for word. Expect “because of I was nervous” and “for not fail”.</p>';
};

R.lab = function (c) {
  var ouviu = (S.ouviu || {})['lab.mp3'], e = S.lb, ok = e.esc === 0;
  var ops = ['The students with the best memory for numbers.', 'The students with the worst memory.', 'Everybody, more or less equally.'];
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="ouve-c vd"><div class="toca-linha">' + tocar('lab.mp3') + '<b>THE LAB · 2005</b></div>' + transcricao('lab.mp3', TR['lab.mp3']) + '</div>' + alvo(ok ? 'sala' : 'tarefa', 1) + '</div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>THE QUESTION</small><h2>Under pressure, who lost the most points?</h2></div>'
    + (ouviu ? '<div class="pt-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), 2).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="lb" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
      + (ok ? '<p class="aprova">Pressure takes working memory. It takes the most from the people who use the most. You don’t freeze because you’re bad at it. You freeze because you have something to use.</p>' : e.esc > 0 ? '<p class="recusa">Not that one. One group lost points and the other didn’t move at all.</p>' : '<p class="dica-aluno">Say your reason out loud first.</p>')
      : '<p class="dica-aluno">Guess first. Then play the recording.</p>') + '</div></div>';
};

R.lista = function (c) {
  var p = perfil(), n = Object.keys(S.li).filter(function (k) { return S.li[k]; }).length;
  return cab(c) + '<div class="pt-lista">' + ITENS.map(function (x, i) { return '<button type="button" class="pt-item' + (S.li[i] ? ' on' : '') + '" data-a="li" data-n="' + i + '"><b>' + (i + 1) + '</b><span>' + x[0] + '</span><i>' + (S.li[i] ? 'TRUE' : '') + '</i></button>'; }).join('') + '</div>'
    + '<p class="pista" style="text-align:center">' + n + ' true · nothing is decided yet · scene VI reads the two numbers</p><p class="so-prof dica-aluno" style="text-align:center">Keep them inside the arena: ' + (S.ar.tipo || 'their arena') + '.</p>';
};

R.porque = function (c) {
  var e = S.pq, n = e.n, fim = n >= PORQUE.length;
  if (fim) return cab(c) + trilha(PORQUE, n) + '<div class="foco"><div class="pergunta vd"><small>SIX ROUNDS</small><h2>One question decides it: is there a verb after the gap? Now one fact from your arena, both ways.</h2></div></div>';
  var x = PORQUE[n], ok = e.esc === x.k;
  return cab(c) + trilha(PORQUE, n) + '<div class="foco"><div class="balao vd"><p>' + x.a + '<u>' + (ok ? (x.k === 'a' ? 'because' : 'because of') : '_____') + '</u>' + x.b + '</p></div>' + escolha('pq', e, [['a', 'BECAUSE'], ['b', 'BECAUSE OF']], x.k)
    + (ok ? '<p class="aprova" style="text-align:center">' + x.por + ' Say the whole sentence.</p><div style="text-align:center"><button type="button" class="btn" data-a="pq-prox">Next</button></div>' : e.esc ? '<p class="recusa" style="text-align:center">Look for a verb after the gap. If there is one, the OF goes away.</p>' : '') + '</div>';
};

R.regra = function (c) {
  var k = S.rg.sel, E = ELOS.filter(function (x) { return x.k === k; })[0];
  return cab(c) + '<div class="pt-corrente grande">' + ELOS.map(function (x, i) { return '<button type="button" class="pt-elo e' + i + (k === x.k ? ' on' : '') + '" data-a="rg" data-v="' + x.k + '"><small>' + x.k + '</small>' + ['why?', 'what then?', 'what for?'][i] + '</button>'; }).join('<b class="pt-seta">→</b>') + '</div>'
    + (E ? '<div class="pt-regras">' + E.linhas.map(function (l) { return '<div class="pt-regra vd" style="--ec:' + E.c + '"><small>' + l[0] + '</small><p>' + l[1] + '</p></div>'; }).join('') + '</div>' + fala('rg' + k, k === 'CAUSE' ? ['It goes wrong because …', '… because of …'] : k === 'EFFECT' ? ['That leads to …-ing', 'It results in …'] : ['I … in order to …', 'I … so that they can …'], []) : '<p class="dica-aluno" style="text-align:center">Tap a link: cause, effect, purpose.</p>')
    + '<p class="so-prof dica-aluno" style="text-align:center">“After LEADS TO, a thing or -ING” is the line that breaks sentences later.</p>';
};

R.perfil = function (c) {
  var p = perfil(), P = PERFIS[p.k], onde = p.k === 'W' ? 'sala' : p.k === 'M' ? 'corpo' : 'tarefa';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + alvo(onde, 1) + '<div class="pt-nums"><span class="w"><b>' + p.w + '</b><small>THE ROOM · WORRIER</small></span><span class="m"><b>' + p.m + '</b><small>YOUR BODY · WATCHER</small></span></div></div>'
    + '<div class="lado-l"><div class="pt-perfil vd"><small>' + (S.ar.tipo ? 'YOUR ARENA: ' + S.ar.tipo.toUpperCase() : 'YOUR ARENA') + '</small><h2>' + P.nome + '</h2><p>' + P.oque + ' ' + P.como + '</p><ul>' + P.remedio.map(function (r) { return '<li>' + r + '</li>'; }).join('') + '</ul><span class="pt-estudo">' + P.estudo + '</span></div>'
    + '<p class="aprova">That’s your result for one arena and one hour. It can move.</p><p class="so-prof dica-aluno">A moment, not a personality. Ask what the WRONG remedy would do to them.</p></div></div>';
};

R.para = function (c) {
  var e = S.pr, n = e.n, fim = n >= PARA.length;
  if (fim) return cab(c) + trilha(PARA, n) + '<div class="foco"><div class="pergunta vd"><small>SIX ROUNDS</small><h2>Is there a verb after the gap? A verb takes TO. Now the same purpose twice: TO + verb, then SO THAT + a subject + can.</h2></div></div>';
  var x = PARA[n], ok = e.esc === x.k;
  return cab(c) + trilha(PARA, n) + '<div class="foco"><div class="balao vd"><p>' + x.a + '<u>' + (ok ? { to: 'to', for: 'for', so: 'so that' }[x.k] : '_____') + '</u>' + x.b + '</p></div>' + escolha('pr', e, [['to', 'TO'], ['for', 'FOR'], ['so', 'SO THAT']], x.k)
    + (ok ? '<p class="aprova" style="text-align:center">' + x.por + ' Say the whole sentence.</p><div style="text-align:center"><button type="button" class="btn" data-a="pr-prox">Next</button></div>' : e.esc ? '<p class="recusa" style="text-align:center">Look after the gap: a verb, a thing, or somebody + can?</p>' : '<p class="so-prof dica-aluno" style="text-align:center">“I came here for learn” is the error you’ll hear for years.</p>') + '</div>';
};

R.casos = function (c) {
  var e = S.cs, n = Math.min(e.n, CASOS.length - 1), fim = e.n >= CASOS.length, x = CASOS[n], ok = e.esc === x.ok, ouviu = (S.ouviu || {})[x.au];
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l">' + alvo('corpo', 1) + '<p class="pista" style="text-align:center">THE GOLFER · inside her own body</p></div><div class="lado-l">' + alvo('sala', 1) + '<p class="pista" style="text-align:center">THE SPEAKER · out in the room</p></div></div><div class="foco"><div class="pergunta vd"><h2>Same nerves, two different problems. Which one is closer to you? Say it with because.</h2></div></div>';
  return cab(c) + trilha(CASOS, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="ouve-c vd"><div class="toca-linha">' + tocar(x.au) + '<b>' + x.quem + '</b></div>' + transcricao(x.au, TR[x.au]) + '</div>' + (ok ? alvo(x.ok === 'M' ? 'corpo' : 'sala', 1) : '') + '</div>'
    + '<div class="lado-l">' + (ouviu ? escolha('cs', e, [['W', 'THE WORRIER'], ['M', 'THE WATCHER']], x.ok)
      + (ok ? '<p class="aprova">' + x.por + '</p>' + fala('cs' + n, [x.ok === 'M' ? 'She’s a Watcher because she …' : 'He’s a Worrier because he …'], []) + '<div><button type="button" class="btn" data-a="cs-prox">' + (n === 0 ? 'Next case' : 'Done') + '</button></div>' : e.esc ? '<p class="recusa">Listen again to what this person named. Inside the body, or outside?</p>' : '<p class="dica-aluno">What did they notice?</p>')
      : '<p class="dica-aluno">Play it. Then decide.</p>') + '</div></div>';
};

R.corrente = function (c) {
  var e = S.ch, n = Math.min(e.n, CORRENTES.length - 1), fim = e.n >= CORRENTES.length, x = CORRENTES[n];
  if (fim) return cab(c) + corrente(3, ['why?', 'what then?', 'what for?']) + '<div class="foco"><div class="pergunta vd"><small>SIX CHAINS</small><h2>Eighteen links, and the valve opened every time. Now cover the parts and build one from the fact alone.</h2></div></div>';
  var ordemP = ordem(x.partes.map(function (p, i) { return [p, i]; }), n + 1);
  return cab(c) + trilha(CORRENTES, e.n) + '<div class="pede vd pt-fato"><small>THE FACT</small><b>' + x.fato + '</b></div>' + corrente(e.feitos, x.partes)
    + '<div class="pt-partes">' + ordemP.map(function (p) { var usado = p[1] < e.feitos; return '<button type="button" class="versao' + (usado ? ' certo' : '') + (e.erro === p[1] + 1 ? ' errado' : '') + '" data-a="ch" data-n="' + p[1] + '"' + (usado ? ' disabled' : '') + '>' + p[0] + '</button>'; }).join('') + '</div>'
    + (e.feitos >= 3 ? '<div class="balao vd ok-b"><small>THE WHOLE SENTENCE · SAY IT</small><p>' + x.ok + '</p></div><div style="text-align:center"><button type="button" class="btn" data-a="ch-prox">Next fact</button></div>' : e.feitos === 2 ? '<p class="so-prof dica-aluno" style="text-align:center">The whole sentence out loud BEFORE the purpose is tapped.</p>' : e.erro ? '<p class="recusa" style="text-align:center">Not that link yet. Cause first, then effect, then purpose.</p>' : '');
};

R.sua = function (c) {
  var e = S.su, n = Math.min(e.n, SUA.length - 1), fim = e.n >= SUA.length, x = SUA[n];
  if (fim) return cab(c) + '<div class="foco">' + corrente(3, ['you', 'and them', 'what for']) + '<div class="pergunta vd"><small>EIGHT CHAINS</small><h2>And half of them were about somebody who isn’t here. Now one chain with all three links in one sentence.</h2></div></div>';
  return cab(c) + trilha(SUA, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="pergunta vd' + (e.outro ? ' ja' : '') + '"><small>YOU · ' + (S.ar.tipo || 'YOUR ARENA').toUpperCase() + '</small><h2>' + x.q + '</h2></div>' + fala('su' + n, x.st, []) + '</div>'
    + '<div class="lado-l">' + (e.outro ? '<div class="pergunta vd"><small>SOMEBODY ELSE</small><h2>' + x.entao + '</h2></div>' + fala('so' + n, x.st.map(function (s) { return s.replace(/^I /, 'They ').replace(/^I lose/, 'They lose'); }), []) + '<div><button type="button" class="btn" data-a="su-prox">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="su-outro">Answered · now somebody else</button></div><p class="dica-aluno">Answer about yourself first.</p>') + '</div></div>';
};

R.relato = function (c) {
  var e = S.rl, feitos = e.n, tudo = feitos >= MARCOS.length;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="pt-marcos">' + MARCOS.map(function (m, i) { return '<button type="button" class="pt-marco' + (i < feitos ? ' feito' : i === feitos ? ' on' : '') + '" data-a="rl" data-n="' + i + '"><b>' + (i + 1) + '</b>' + m + '</button>'; }).join('') + '</div><p class="so-prof dica-aluno">Six markers, and then you’re quiet. Let wrong forms pass; feedback at the end.</p></div>'
    + '<div class="lado-l">' + (tudo ? '<div class="ouve-c vd"><div class="toca-linha">' + tocar('treinador.mp3') + '<b>THE COACH</b></div>' + transcricao('treinador.mp3', TR['treinador.mp3']) + '</div>' + ((S.ouviu || {})['treinador.mp3'] ? '<div class="pergunta vd ja"><h2>Two people, two opposite answers. Which half of the coach’s advice is for you? Why?</h2></div>' + fala('rl', ['The first half is for me because …', 'I need to … in order to …'], []) : '<p class="dica-aluno">Now listen to the coach.</p>') : '<div class="pergunta vd ja"><small>MARKER ' + (feitos + 1) + ' OF 6</small><h2>' + MARCOS[Math.min(feitos, 5)] + '</h2></div><p class="dica-aluno">Talk. Tap the marker when it’s done.</p>') + '</div></div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'In my arena, it goes wrong because …\nThat leads to …-ing.\nNext time I’ll … in order to …\nI’ll … so that …', 'Your chain',
    ['because', 'because of', 'leads to', 'results in', 'in order to', 'so that', 'to'], ['YOUR ARENA, IN ONE CHAIN', 'Cause, effect, purpose. Then one link about somebody else in the room.'])
    + '<div class="lado-fim">' + corrente(3, ['because / because of', 'leads to + -ing', 'to · in order to · so that'])
    + '<div class="grande vd"><span><u>because</u> + a sentence · <u>because of</u> + a thing</span><span><u>leads to</u> + a thing or -ing</span><span><u>to</u> + verb · <u>for</u> + thing · <u>so that</u> + somebody + can</span><span>not <s>because of I was nervous</s>, not <s>for learn</s></span></div>'
    + mostra('fim', 'In tests, it goes wrong because I think about the clock.<br>That leads to reading every question four times.<br>Next time I’ll read each question once in order to save time.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ar-tipo'] = function (b, n, v) { S.ar.tipo = v; };
TOQUES.lb = function (b, n) { S.lb.esc = n; };
TOQUES.li = function (b, n) { S.li[n] = !S.li[n]; };
TOQUES.pq = function (b, n, v) { S.pq.esc = v; };
TOQUES['pq-prox'] = function () { S.pq = { n: S.pq.n + 1, esc: '' }; };
TOQUES.rg = function (b, n, v) { S.rg.sel = v; };
TOQUES.pr = function (b, n, v) { S.pr.esc = v; };
TOQUES['pr-prox'] = function () { S.pr = { n: S.pr.n + 1, esc: '' }; };
TOQUES.cs = function (b, n, v) { S.cs.esc = v; };
TOQUES['cs-prox'] = function () { S.cs = { n: S.cs.n + 1, esc: '' }; };
TOQUES.ch = function (b, n) { var e = S.ch; if (n === e.feitos) { e.feitos++; e.erro = 0; } else e.erro = n + 1; };
TOQUES['ch-prox'] = function () { S.ch = { n: S.ch.n + 1, feitos: 0, erro: 0 }; };
TOQUES['su-outro'] = function () { S.su.outro = 1; };
TOQUES['su-prox'] = function () { S.su = { n: S.su.n + 1, outro: 0 }; };
TOQUES.rl = function (b, n) { S.rl.n = Math.max(S.rl.n, n + 1); };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G1 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'blocos', titulo: 'Pressure, in blocks. Each block has a job.',
  frases: [
    { b: [['I lost points', 'EFFECT', 'acao'], ['because', 'LINK', 'aux'], ['I was nervous', 'CAUSE', 'quando']], d: 'Because + a whole sentence.' },
    { b: [['I lost points', 'EFFECT', 'acao'], ['because of', 'LINK', 'aux'], ['the pressure', 'CAUSE', 'quando']], d: 'Because of + a thing. No verb after it.' },
    { b: [['Too much worry', 'CAUSE', 'quando'], ['leads to', 'LINK', 'aux'], ['mistakes', 'EFFECT', 'acao']], d: 'Leads to + a thing.' },
    { b: [['I breathe slowly', 'ACTION', 'acao'], ['to', 'LINK', 'aux'], ['calm down', 'PURPOSE', 'quem']], d: 'To + verb: the purpose.' }
  ],
  nota: 'Every explanation has links. <b>because</b> + a sentence. <b>because of</b> + a thing. <b>leads to</b> + a thing. <b>to</b> + a verb for the purpose.',
  monta: { p: 'Build a chain about the golfer. Then say it.', pecas: [['a bad shot', 'EFFECT', 'acao'], ['Looking at the crowd', 'CAUSE', 'quando'], ['leads to', 'LINK', 'aux']], ordem: [1, 2, 0] },
  uso: { p: 'Now your own arena. Say one cause, one effect and one purpose.', molde: ['I get nervous because …', 'That leads to …', 'I … to …'], ex: 'I get nervous because the room is silent. That leads to a fast heartbeat. I breathe slowly to calm down.' },
  prof: 'Read the blocks with the student, top to bottom: the words on top, the job under them. Point at the little link words.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_blocos', GX_EXPLICA); };
