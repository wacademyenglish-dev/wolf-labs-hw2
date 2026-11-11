/* ============================================================
   NO SOONER HAD WE ARRIVED · THE TIME GAP · LIVE CLASS  06/10/2026
   Main series C1 · a inversão que ordena o tempo numa narrativa:
   No sooner had … THAN · Hardly / Scarcely had … WHEN · Not until /
   Only when / Only after … DID (na SEGUNDA oração). E quando não usar:
   na conversa, "as soon as".
   Erros: No sooner we had landed · No sooner … when · Hardly … than ·
   Not until the fog lifted we saw · No sooner had we land · did we saw.
   O MUNDO (da aula velha): o diário da capitã Elin Hale, 1921, uma
   expedição no Ártico em que tudo dá errado dia após dia; a rota de
   volta, acampamento por acampamento; o jornalista no porto. Sem áudio,
   sem vídeo. Sem nome de jornal real na tela.
   A CARA (nova; a velha era diário + rota em cartões): o INTERVALO DE
   TEMPO — dois pontos numa linha (o primeiro fato, o segundo); com
   NO SOONER / HARDLY eles colidem (AT ONCE); com NOT UNTIL / ONLY WHEN
   aparece a barra de espera (ONLY THEN); o diário a tinta (IM Fell); e
   o MAPA DO GELO com oito acampamentos e a equipe avançando.
   Colisão conferida: a B2 inversion (never, not only, rarely) está no
   ar; aqui só a inversão de tempo.
   Fila: FILA-LIVE-386.md · 143. Pasta piloto-sooner (conferida: não existia).
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas 8
   páginas. A auditoria: 16 rodadas de escolher entre três frases quase iguais
   (II e IV) e as armadilhas de tocar. Agora: II uma página do diário da Elin
   → tocar o que pula e completar a regra (FM.carta); III "At once or only
   then?": separar seis momentos pelo SENTIDO do intervalo (FM.separa) e dizer
   com a abertura certa; IV a rota em seis acampamentos, falada + Check, o mapa
   anda (FM.fala). A placa da regra fica no canto em III e IV.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'tenda', rot: 'I · Your Worst Trip', t: 'Every traveler has one disastrous trip.', p: 'Tap a card. The student tells it plainly; then the teacher tells one too.' },
  { k: 'diario', est: 'f', min: 7, img: 'diario', rot: 'II · The Journal', t: 'May 1921. A page from Captain Elin Hale’s journal.', p: 'Read the page out loud, with drama. Tap the words that jump to the front. Then finish the rule.' },
  { k: 'gx', est: 'f', min: 4, img: 'diario', rot: 'III · The Journal in Blocks', t: 'Two facts, one after the other.', p: 'Read the blocks out loud. Notice where the helper goes. Then build a sentence and say your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'tenda', rot: 'IV · At Once or Only Then?', t: 'Six moments from the journal. Did the second thing come at once, or only then?', p: 'Tap a moment, then its box. Then say it as one sentence, with the opening of the box.' },
  { k: 'rota', est: 'o', min: 7, img: 'gelo', rot: 'V · The Route', t: 'The route home, camp by camp. The ice is moving: tell it fast.', p: 'Read the two events and the first words. Say one dramatic sentence out loud. Then tap Check: the team moves on.' },
  { k: 'debate', est: 'o', min: 7, img: 'aurora', rot: 'VI · Brave or Selfish?', t: 'Is it brave, or selfish, to risk your life for discovery?', p: 'Tap a card. Take a side and defend it. The teacher takes the other side.' },
  { k: 'porto', est: 'o', min: 7, img: 'navio', rot: 'VII · The Harbor', t: 'Oslo harbor, 1921. A journalist wants the story for tomorrow’s front page.', p: 'The teacher is the journalist. Answer as the captain, with drama.' },
  { k: 'fim', est: 'w', min: 6, img: 'aurora', rot: 'VIII · The Last Page', t: 'Your disastrous trip, told like a 1921 journal.', p: 'Three dramatic sentences. They go to your My notes.' }
];

var VOCE = [
  { k: 'THE DISASTER', q: 'Tell me about a trip where everything went wrong, one thing after another.', fup: 'What went wrong first?', st: ['We had just arrived when …'], ex: 'We had just arrived at the hotel when the power went out. Then it rained for a week.' },
  { k: 'TOO FAST', q: 'Has something ever gone wrong the second you arrived somewhere?', fup: 'What did you do?', st: ['The moment I …'], ex: 'The moment I sat down on the plane, I realized I had left my passport in the taxi.' },
  { k: 'THE COLD', q: 'What is the coldest you have ever been? Where were you?', fup: 'When did you feel warm again?', st: ['In a …'], ex: 'In a tent in the mountains. I couldn’t feel my feet until the sun came up.' },
  { k: 'EXPLORERS', q: 'Would you go on an expedition to the Arctic or the desert? Why, or why not?', fup: 'What would you miss most?', st: ['I would love to …, but …'], ex: 'I would love to see the ice, but I would hate the food.' },
  { k: 'THE STORY', q: 'When you tell a story, do you make it more dramatic than it really was?', fup: 'Give an example.', st: ['Always! …'], ex: 'Always! A small problem becomes a disaster in my version.' }
];

/* t: tipo do intervalo (ja = colidem; espera = barra de espera) · só o 3 de maio, para a capa */
var DIARIO = [
  { k: 'MAY 3', a: 'We landed on the ice.', b: 'The storm hit.', t: 'ja', pal: 'No sooner…', ops: ['No sooner had we landed than the storm hit.'] }
];

/* 22/10/2026 · OS FORMATOS NOVOS · II a página do diário da Elin (texto nosso) → a regra */
var CARTA = { de: 'May 1921 · the journal of Captain Elin Hale',
  txt: 'Another terrible week. [[No sooner had we]] landed [[than]] the storm hit. [[Hardly had we]] set up camp [[when]] the ice cracked under the tents. On Tuesday the fog stayed all morning. [[Not until]] it lifted at noon [[did we see]] the mountains. Tomas laughed, but I was afraid. [[Only when]] we counted the food [[did I understand]] the danger. As soon as Tomas reads this, he will laugh again.',
  assina: 'E. H.' };
var REGRA = [
  { a: 'No sooner <b>had we</b> landed: had comes ', par: ['after the subject', 'before the subject'], c: 1 },
  { a: 'No sooner had we landed ', par: ['than', 'when'], c: 0, b: ' the storm hit.' },
  { a: 'Hardly had we set up camp ', par: ['than', 'when'], c: 1, b: ' the ice cracked.' },
  { a: 'Not until the fog lifted ', par: ['did we see', 'we saw'], c: 0, b: ' the mountains. (the second part jumps)' },
  { a: 'No sooner / hardly: the second thing came ', par: ['after a long wait', 'at once'], c: 1 },
  { a: 'To a friend, in a chat: ', par: ['As soon as I sat down', 'Hardly had I sat down'], c: 0, b: ', you called!' }
];
var PRESA = 'No sooner <b>had we</b> landed <b>than</b> …<br>Hardly / Scarcely <b>had we</b> … <b>when</b> …<br>→ at once<br>Not until / Only when …, <b>did we</b> see …<br>→ only then<br>In a chat: <b>as soon as</b>';

/* III · separar pelo sentido do intervalo */
var SEPARA = { formato: 'separa', titulo: 'At once, or only then?', caixas: ['AT ONCE · No sooner had … than · Hardly had … when', 'ONLY THEN · Not until … did · Only when … did'], itens: [
  { t: 'We landed. Seconds later, the storm hit.', c: 0 },
  { t: 'The fog lifted at noon. Then, and only then, we saw the mountains.', c: 1 },
  { t: 'The dogs started to run. Right away, Tomas fell off the sled.', c: 0 },
  { t: 'We counted the food. That was when we understood the danger.', c: 1 },
  { t: 'We repaired the radio. A minute later, it exploded.', c: 0 },
  { t: 'We walked for nine days. Then, at last, we found the old hut.', c: 1 }
] };

var ROTA = [
  { k: 'CAMP 1', a: 'We left the hut.', b: 'A blizzard started.', t: 'ja', pal: 'No sooner …', f: 'No sooner had we left the hut than a blizzard started.' },
  { k: 'CAMP 2', a: 'The blizzard stopped.', b: 'Only then could we move.', t: 'espera', pal: 'Not until …', f: 'Not until the blizzard stopped could we move.' },
  { k: 'CAMP 3', a: 'We crossed the ice floe.', b: 'It split in two.', t: 'ja', pal: 'Hardly …', f: 'Hardly had we crossed the floe when it split in two.' },
  { k: 'CAMP 4', a: 'We lost the last sled.', b: 'Then we realized how far we were.', t: 'espera', pal: 'Only when …', f: 'Only when we lost the last sled did we realize how far we were.' },
  { k: 'CAMP 5', a: 'Tomas lit the stove.', b: 'The wind blew it out.', t: 'ja', pal: 'Scarcely …', f: 'Scarcely had Tomas lit the stove when the wind blew it out.' },
  { k: 'THE SHIP', a: 'We climbed the last ridge.', b: 'After that, we saw the ship.', t: 'espera', pal: 'Only after …', f: 'Only after we had climbed the last ridge did we see the ship.' }
];

var DEBATE = [
  { k: 'FAMILY', q: 'The captain had two children at home. Should she have gone?', fup: 'And if she were a father?', st: ['I think she had the right to …'], ex: 'I think she had the right to go. Explorers have families too.' },
  { k: 'MONEY', q: 'Who should pay for dangerous expeditions: governments or private companies?', fup: 'Who keeps the discoveries?', st: ['Private companies, because …'], ex: 'Private companies, because they profit from them.' },
  { k: 'SPACE', q: 'Would you go to Mars on a one-way trip?', fup: 'What would change your mind?', st: ['Only if … would I …'], ex: 'Not a chance. Only if I could come back would I go.' },
  { k: 'THE TEAM', q: 'If the leader makes a bad decision and someone dies, who is responsible?', fup: 'And if the team voted?', st: ['The leader, always …'], ex: 'The leader, always. That is what leadership means.' },
  { k: 'PHONES', q: 'Is adventure still possible when everyone has GPS and satellite phones?', fup: 'Give an example.', st: ['Yes, because …'], ex: 'Yes, because nature doesn’t care about your phone.' },
  { k: 'STORY', q: 'Do explorers exaggerate their stories? Is that OK?', fup: 'Do you?', st: ['Of course. No sooner had they …'], ex: 'Of course. No sooner had they arrived home than the story got bigger.' }
];

var PORTO = [
  { q: '“Captain! Welcome home. When did things start to go wrong?”', fup: 'Ask back: “What did the newspapers say while we were away?” The journalist says: “That you were lost. Some wrote that you were dead!”', st: ['No sooner had we … than …'], ex: 'No sooner had we landed than the storm hit.' },
  { q: '“What was the worst moment?”', fup: 'Ask back: “Would you have gone, in my place?” The journalist says: “Me? I get cold in the office.”', st: ['Hardly had we … when …'], ex: 'Hardly had we crossed the floe when it split in two.' },
  { q: '“When did you know you would survive?”', fup: 'Ask back: “Is my family here?” The journalist says: “They have been waiting at the harbor since dawn.”', st: ['Not until … did I …'], ex: 'Not until I saw the ship’s smoke did I believe it.' },
  { q: '“Will you ever go back to the ice?”', fup: 'Ask back: “Would your readers go?” The journalist says: “Half of Oslo will want to. After the biscuits, the other half won’t.”', st: ['Only when … will I …'], ex: 'Only when my children are older will I go back.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, de: { sel: -1, foi: {} }, po: { n: 0, foi: {} } };

/* o intervalo de tempo: dois pontos; colidem (ja) ou esperam (espera) */
function intervalo(x, foi) {
  var cls = 'ns-linha' + (foi ? ' ' + x.t : '');
  return '<div class="ns-tempo vd"><small>THE TIME GAP</small><div class="' + cls + '"><i class="ns-a"></i>' + (foi && x.t === 'espera' ? '<span class="ns-espera">ONLY THEN ▸</span>' : '') + '<i class="ns-b"></i>' + (foi && x.t === 'ja' ? '<span class="ns-ja">AT ONCE</span>' : '') + '</div>'
    + '<div class="ns-fatos"><p><b>1</b>' + x.a + '</p><p><b>2</b>' + x.b + '</p></div></div>';
}
function pagina(x, foi, data) {
  return '<div class="ns-pagina vd"><small>' + data + ', 1921 · THE CAPTAIN’S JOURNAL</small>' + (foi ? '<p class="ns-tinta">' + x.ops[0] + '</p>' : '<p class="ns-branco">' + (x.pal || '…') + '</p>') + '</div>';
}
/* o mapa do gelo: oito acampamentos ao longo de uma curva */
function mapa(n) {
  var P = [[40, 150], [115, 122], [190, 132], [265, 92], [340, 78], [425, 40]];
  var d = 'M' + P.map(function (p) { return p.join(' '); }).join(' L');
  return '<div class="ns-mapa vd"><svg viewBox="0 0 470 190" aria-hidden="true"><path d="' + d + '" class="ns-trilha"/>' + P.map(function (p, i) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + (i === n ? 10 : 6) + '" class="' + (i < n ? 'feito' : i === n ? 'agora' : '') + '"/>'; }).join('')
    + '<text x="425" y="20" class="ns-navio">SHIP</text></svg><small>' + (n >= P.length ? 'ON BOARD · THE ICE CLOSES BEHIND US' : 'CAMP ' + (n + 1) + ' OF ' + P.length) + '</small></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · C1 · INVERSION FOR TIME</span><h1>No Sooner <b>Had We Arrived</b></h1>'
    + '<p class="sub">1921, the captain’s journal: <b>no sooner had we landed than the ice began to move.</b> Two events, no time between them, and the verb jumps before the subject.</p>'
    + '<div class="chipsx"><span class="pilula">No sooner … than</span><span class="pilula">Hardly … when</span><span class="pilula">Not until … did</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the journal</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + intervalo(DIARIO[0], 1) + pagina(DIARIO[0], 1, 'MAY 3') + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce', ['We had just …', 'The moment I …', 'Always!']); };

/* II · a página do diário → a regra */
R.diario = function (c) {
  return cab(c) + FM.carta('carta', CARTA, REGRA, { toque: 'Tap the words that jump: the time word, had / did + the subject, than / when', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

/* III · at once ou only then: o sentido escolhe a abertura */
R.regra = function (c) {
  return cab(c) + '<div class="fm-com-regra"><div class="fm-mio">' + FM.ex('separa', SEPARA)
    + '<div class="mesa-c"><div class="lado-l">' + intervalo({ a: 'We landed.', b: 'The storm hit.', t: 'ja' }, 1) + '</div><div class="lado-l">' + intervalo({ a: 'The fog lifted.', b: 'We saw the mountains.', t: 'espera' }, 1) + '</div></div>'
    + '<p class="dica-aluno" style="text-align:center">In the box: say each moment as one sentence, with the opening of its box.</p></div>' + FM.regra(PRESA) + '</div>';
};

/* IV · a rota: a frase dita e conferida move a equipe */
R.rota = function (c) {
  return cab(c) + FM.fala('rota', ROTA.map(function (x) {
    return { pista: x.a + ' ' + x.b + ' · <b>' + x.pal + '</b>', resp: x.f };
  }), {
    rotulo: 'Camp', prox: 'Next camp', regra: PRESA, diga: 'Say it in one sentence first',
    lado: function (feitas, atual, nova) {
      return '<div class="mesa-c" style="align-items:center"><div class="lado-l" style="max-width:380px;justify-self:end;width:100%">' + mapa(feitas) + '</div><div class="lado-l">' + (atual < 0 ? '<div class="pergunta vd"><small>ON BOARD</small><h2>Everyone is home.</h2></div>' : intervalo(ROTA[atual], nova)) + '</div></div>';
    },
    fim: 'The ship is moving. Everyone is home. Now tell the whole route in three sentences, without looking.'
  });
};

R.debate = function (c) { return cartasPessoais(c, DEBATE, S.de, 'de', ['I think …, because …', 'Only if …', 'No sooner had …']); };

R.porto = function (c) {
  return cab(c) + '<div class="ns-porto vd"><b>OSLO HARBOR · 1921</b><small>A JOURNALIST · TOMORROW’S FRONT PAGE</small></div>'
    + sequencia({ est: 'o', rot: '', t: '', p: '' }, PORTO, S.po, 'po', 'The front page is written. The captain goes home.').replace(/<div class="cab[\s\S]*?<\/p><\/div>/, '');
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'No sooner had I … than …\nHardly had we … when …\nOnly when … did I …', 'Your journal',
    ['No sooner had', 'than', 'Hardly had', 'when', 'Only when', 'did I'], ['YOUR LAST PAGE', 'Your disastrous trip from scene I, as three dramatic sentences.'])
    + '<div class="lado-fim">' + mapa(8)
    + '<div class="grande vd"><span><u>No sooner had + subject + participle … than</u> · at once</span><span><u>Hardly / Scarcely had … when</u> · almost no time</span><span><u>Not until / Only when … did + subject + verb</u> · the second clause</span><span>not <s>no sooner we had</s>, not <s>no sooner … when</s>, not <s>hardly … than</s>; in a chat: as soon as</span></div>'
    + mostra('fim', 'No sooner had we arrived at the hotel than the power went out.<br>Hardly had I found a candle when the fire alarm went off.<br>Only when we got home did we laugh about it.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G1 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'blocos', titulo: 'Captain Hale’s journal, in blocks. Each block has a job.',
  frases: [
    { b: [['No sooner', 'FIRST', 'quando'], ['had', 'HELPER', 'aux'], ['we', 'WHO', 'quem'], ['landed', 'FIRST FACT', 'acao'], ['than', 'LINK', 'aux'], ['the ice began to move', 'SECOND FACT', 'o']], d: 'The helper jumps before we. The link is than.' },
    { b: [['Hardly', 'FIRST', 'quando'], ['had', 'HELPER', 'aux'], ['the crew', 'WHO', 'quem'], ['set up camp', 'FIRST FACT', 'acao'], ['when', 'LINK', 'aux'], ['the fog came down', 'SECOND FACT', 'o']], d: 'Hardly goes with when. Same shape.' },
    { b: [['Not until', 'FIRST', 'quando'], ['the fog lifted', 'ONE EVENT', 'o'], ['did', 'HELPER', 'aux'], ['we', 'WHO', 'quem'], ['see', 'ACTION', 'acao'], ['the ship', 'WHAT', 'o']], d: 'The helper comes in the second part, and the verb is clean.' }
  ],
  nota: 'The first word opens the sentence, and the <b>helper</b> comes before the subject: <b>No sooner had we</b> … <b>than</b> …; <b>Hardly had we</b> … <b>when</b> …; <b>Not until</b> … <b>did we</b> …',
  monta: { p: 'Build the next line of the journal. Then say it.', pecas: [['than', 'LINK', 'aux'], ['No sooner', 'FIRST', 'quando'], ['the sun came up', 'SECOND FACT', 'o'], ['had', 'HELPER', 'aux'], ['we', 'WHO', 'quem'], ['left camp', 'FIRST FACT', 'acao']], ordem: [1, 3, 4, 5, 0, 2] },
  uso: { p: 'Now your own disaster. Two facts from a bad trip, with No sooner or Hardly.', molde: ['No sooner had we … than …', 'Hardly had I … when …'], ex: 'No sooner had we checked in than the hotel lost our reservation.' },
  prof: 'Read the blocks top to bottom with the student. Point at the helper: it jumps in front of the subject.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_blocos', GX_EXPLICA); };
