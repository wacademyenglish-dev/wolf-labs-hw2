/* ============================================================
   WHAT'S THE WEATHER LIKE? · THE 7 O'CLOCK WEATHER · LIVE CLASS  05/10/2026
   Main series A1 · It's + o tempo (sunny, cloudy, windy, hot, cold, 31
   degrees) · It's raining / It's snowing · in winter, in July ·
   What's the weather like?
   O MUNDO (da aula velha): o aluno é o novo apresentador da previsão do
   Channel 9, ao vivo às 7 PM. Vídeo real sem fala (lmIFXIXQQ_E, um ano
   num jardim) em cinco capítulos = as estações. A CARA: o estúdio de TV
   escuro; a PAREDE DO TEMPO com cinco telas de cidade, onde os ÍMÃS
   (ícones) só grudam numa frase inteira com It's; e o DISCO DAS ESTAÇÕES
   em SVG (doze meses; no sul as cores giram). Sem áudio.
   Fila: FILA-LIVE-386.md · 038.
   ============================================================ */
var YT = 'lmIFXIXQQ_E';
var L = [
  { k: 'capa', est: null, img: 'estudio' },
  { k: 'abre', est: 'o', min: 7, img: 'janela', rot: 'I · You and the Weather', t: 'Before the show: you and the weather.', p: 'Pick a card. Nobody is corrected here. Your teacher taps what you used.' },
  { k: 'video', est: 'l', min: 10, img: 'estacoes', rot: 'II · One Year, Forty Seconds', t: 'One camera, one garden, one whole year.', p: 'Five short chapters, one for each season. You are the weather presenter.' },
  { k: 'parede', est: 'o', min: 7, img: 'estudio', rot: 'III · The Weather Wall', t: 'Five live pictures. You are on air in five minutes.', p: 'Tap a city. Dana, the producer, asks. Answer from the picture: the magnet only sticks to a whole sentence.' },
  { k: 'regra', est: 'f', min: 6, img: 'estudio', rot: 'IV · The Rule', t: 'The weather always starts with It’s.', p: 'Say each wrong line the right way, out loud. Then tap it.' },
  { k: 'dial', est: 'o', min: 7, img: 'capa', rot: 'V · The Season Dial', t: 'Eight cities, eight months. You are live.', p: 'Say the season AND the weather at once. South of the equator, the dial turns around.' },
  { k: 'walt', est: 'o', min: 7, extra: 1, img: 'janela', rot: 'VI · A Viewer Calls', t: 'After the show, Walt calls the studio.', p: 'Your teacher is Walt. Answer with It’s … and in …' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'chuva', rot: 'VII · Quick Check', t: 'Six lines from the weather desk.', p: 'Say the whole sentence. Then tap the word.' },
  { k: 'roda', est: 'o', min: 7, extra: 1, img: 'sol', rot: 'VIII · Your Weather', t: 'Your weather, your seasons.', p: 'Pick a card. Answer with It’s … or In …, it’s … Your teacher answers too.' },
  { k: 'fim', est: 'w', min: 6, img: 'neve', rot: 'IX · Good Night from the Weather Desk', t: 'Write tonight’s weather for your city.', p: 'Like a presenter: today, and every season. The red line watches It’s. It goes to your My notes.' }
];

var ABRE = [
  { k: 'TODAY', q: 'What’s the weather like today where you are?', fup: 'And yesterday?', st: ['It’s …'], ex: 'It’s sunny and hot today.' },
  { k: 'YOUR SEASON', q: 'What’s your favorite season? Why?', fup: 'And the worst one?', st: ['My favorite season is …', '… because it’s …'], ex: 'Summer, because it’s hot and I love the beach.' },
  { k: 'HOT OR COLD', q: 'Are you a hot-weather person or a cold-weather person?', fup: 'What do you wear?', st: ['I’m a … person.'], ex: 'Cold! I love sweaters and hot chocolate.' }
];
var FORMAS = [{ k: 'its', t: 'IT’S + WEATHER' }, { k: 'in', t: 'IN WINTER / IN JULY' }, { k: 'semit', t: 'IS RAINING (NO IT)', erro: 1 }, { k: 'faz', t: 'MAKES COLD / IT’S SUN', erro: 1 }];

var NOTA = {
  it: 'English needs a subject. For the weather: It’s …', ing: 'Right now: It’s raining. It’s snowing.', faz: 'The weather uses be: It’s cold. Never make.',
  y: 'After it’s, the -y word: sunny, cloudy, windy.', tem: 'The number uses be too: It’s 31 degrees.', heat: 'heat is a noun. After it’s: hot.',
  tempo: 'time is the clock. Sun, rain and wind are the weather. And the weather starts with It’s.', on: 'Months and seasons: in January, in winter.', the: 'No the: in January.', sul: 'South of the equator, the seasons turn around.'
};

var CAPS = [
  { k: 'WINTER', ic: '❄️', ini: 2, fim: 10, q: 'What season is it? What’s the weather like?', h: 'It’s winter. It’s snowy and cold.' },
  { k: 'SPRING', ic: '🌷', ini: 10, fim: 23, q: 'Where is the snow now? What color is the grass?', h: 'The snow is gone. The grass is green. It’s spring, and it’s warm.' },
  { k: 'SUMMER', ic: '☀️', ini: 23, fim: 29, q: 'What color are the trees? Is it hot or cold?', h: 'They’re very green. It’s summer. It’s hot and sunny.' },
  { k: 'FALL', ic: '🍂', ini: 29, fim: 37, q: 'What color are the leaves now? What season is it?', h: 'Yellow and orange. It’s fall. It’s cool and cloudy.' },
  { k: 'WINTER AGAIN', ic: '🌨️', ini: 37, fim: 44, q: 'And at the end? What’s the weather like?', h: 'It’s winter again. It’s snowing.' }
];

var CIDADES = [{ k: 'TORONTO', img: 'neve', grau: '−8°C' }, { k: 'LONDON', img: 'chuva', grau: '9°C' }, { k: 'SYDNEY', img: 'sol', grau: '31°C' }, { k: 'CHICAGO', img: 'vento', grau: '4°C' }, { k: 'SEATTLE', img: 'nuvem', grau: '12°C' }];
var PAREDE = [
  { cid: 0, ic: '🌨️', q: 'Good evening! We start in Toronto. What’s the weather like there?', ini: 'It’s …', ops: [['It’s snowing in Toronto.', 'ok'], ['Is snowing in Toronto.', 'it'], ['It’s snow in Toronto.', 'ing']] },
  { cid: 0, ic: '🥶', q: 'And the number in Toronto? Hot or cold?', ini: 'It’s cold. It’s minus …', ops: [['It’s cold. It’s minus eight degrees.', 'ok'], ['It makes cold. Minus eight degrees.', 'faz'], ['Is cold. Is minus eight degrees.', 'it']] },
  { cid: 1, ic: '🌧️', q: 'Now London. What’s the weather like in London?', ini: 'It’s …', ops: [['It’s raining in London.', 'ok'], ['It’s rain in London.', 'ing'], ['Makes rain in London.', 'faz']] },
  { cid: 2, ic: '☀️', q: 'And Sydney, in Australia?', ini: 'It’s …', ops: [['It’s sunny in Sydney.', 'ok'], ['It’s sun in Sydney.', 'y'], ['Makes sun in Sydney.', 'faz']] },
  { cid: 2, ic: '🔥', q: 'Look at the number for Sydney. Hot or cold?', ini: 'It’s … degrees. It’s …', ops: [['It’s thirty-one degrees. It’s hot!', 'ok'], ['It has thirty-one degrees.', 'tem'], ['It’s thirty-one degrees. It’s very heat!', 'heat']] },
  { cid: 3, ic: '💨', q: 'Chicago is next. Look at the trees!', ini: 'It’s …', ops: [['It’s windy in Chicago.', 'ok'], ['It’s wind in Chicago.', 'y'], ['The time is windy in Chicago.', 'tempo']] },
  { cid: 4, ic: '☁️', q: 'Last city: Seattle. What’s the weather like?', ini: 'It’s …', ops: [['It’s cloudy in Seattle.', 'ok'], ['It’s cloud in Seattle.', 'y'], ['Is cloudy in Seattle.', 'it']] }
];

var FITAS = [['WHAT’S IT LIKE?', 'It’s sunny · cloudy · windy · hot · cold · warm'], ['RIGHT NOW', 'It’s raining · It’s snowing'], ['WHEN?', 'in winter · in summer · in fall · in July']];
var ARMAS = [
  ['IT FIRST', 'Is raining in London.', 'It’s raining in London.', 'English needs a subject. For the weather: it.'],
  ['BE, NOT MAKE', 'It makes cold in Toronto.', 'It’s cold in Toronto.', 'It’s cold, it’s hot, it’s 30 degrees.'],
  ['SUN → SUNNY', 'It’s sun in Sydney. It’s very heat.', 'It’s sunny in Sydney. It’s very hot.', 'sun → sunny · cloud → cloudy · heat → hot'],
  ['WEATHER, NOT TIME', 'How is the time like in Tokyo?', 'What’s the weather like in Tokyo?', 'time = the clock. And What’s … like?']
];

var MESES = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
var EST_N = ['w', 'w', 's', 's', 's', 'v', 'v', 'v', 'o', 'o', 'o', 'w'];   /* norte: winter, spring, summer (v), fall (o) */
var TROCA = { w: 'v', v: 'w', s: 'o', o: 's' };
var DIAL = [
  { k: 'TORONTO', mes: 0, sul: 0, ic: '🌨️', ini: 'In January, it’s …', ops: [['In January, it’s winter in Toronto. It’s snowing.', 'ok'], ['On January, it’s winter in Toronto.', 'on'], ['In January, is winter in Toronto. Is snowing.', 'it']] },
  { k: 'SYDNEY', mes: 0, sul: 1, ic: '☀️', ini: 'In January, it’s …', ops: [['In January, it’s summer in Sydney. It’s hot and sunny.', 'ok'], ['In January, it’s winter in Sydney.', 'sul'], ['In the January, it’s summer in Sydney.', 'the']] },
  { k: 'LONDON', mes: 3, sul: 0, ic: '🌧️', ini: 'In April, it’s …', ops: [['In April, it’s spring in London. It’s raining.', 'ok'], ['In April, it’s spring in London. It’s rain.', 'ing'], ['In April, makes spring in London.', 'faz']] },
  { k: 'NEW YORK', mes: 6, sul: 0, ic: '🔥', ini: 'In July, it’s …', ops: [['In July, it’s summer in New York. It’s very hot.', 'ok'], ['In July, it’s summer in New York. It’s very heat.', 'heat'], ['In July, is summer in New York. Is very hot.', 'it']] },
  { k: 'RIO DE JANEIRO', mes: 6, sul: 1, ic: '🌤️', ini: 'In July, it’s …', ops: [['In July, it’s winter in Rio. It’s warm and sunny.', 'ok'], ['In July, it’s summer in Rio.', 'sul'], ['In July, makes sun in Rio.', 'faz']] },
  { k: 'CHICAGO', mes: 9, sul: 0, ic: '💨', ini: 'In October, it’s …', ops: [['In October, it’s fall in Chicago. It’s windy.', 'ok'], ['In October, it’s fall in Chicago. It’s wind.', 'y'], ['On October, it’s fall in Chicago.', 'on']] },
  { k: 'BUENOS AIRES', mes: 5, sul: 1, ic: '🥶', ini: 'In June, it’s …', ops: [['In June, it’s winter in Buenos Aires. It’s cold and cloudy.', 'ok'], ['In June, it makes cold in Buenos Aires.', 'faz'], ['In June, it’s summer in Buenos Aires.', 'sul']] },
  { k: 'TOKYO', mes: 3, sul: 0, ic: '🌸', ini: 'In April, it’s …', ops: [['In April, it’s spring in Tokyo. It’s warm.', 'ok'], ['In April, the time is warm in Tokyo.', 'tempo'], ['In the April, it’s spring in Tokyo.', 'the']] }
];

var WALT = [
  { ela: 'Hi, I’m Walt! I’m at the lake with my dog. What’s the weather like in your city right now?', pede: 'In my city, it’s … (look out of your window)', resp: 'Ha! Here at the lake, it’s cloudy. My dog is not happy.' },
  { ela: 'My granddaughter lives in Australia. It’s July. Is it summer there?', pede: 'No! In July, it’s … (summer or winter?)', resp: 'Winter in July! The world is a funny place.' },
  { ela: 'What’s your favorite season, and why?', pede: 'My favorite season is … because it’s …', resp: 'For me, it’s fall. The leaves are beautiful.' },
  { ela: 'And in your country? What’s the weather like in winter?', pede: 'In my country, in winter, it’s …', resp: 'Really? I want to visit! Good night, and thank you!' }
];

var QUIZ = [
  { a: '', b: ' raining in Chicago right now.', op: ['It’s', 'Is', 'It'], nao: 'The weather needs it: It’s raining.' },
  { a: 'It’s very ', b: ' today: 35 degrees!', op: ['hot', 'heat', 'hotting'], nao: 'After it’s: hot. heat is a noun.' },
  { a: 'Take an umbrella. It’s ', b: ' in Toronto.', op: ['cloudy', 'cloud', 'clouds'], nao: 'cloud → cloudy.' },
  { a: '', b: ' winter, it snows in Canada.', op: ['In', 'On', 'At'], nao: 'Seasons take in: in winter.' },
  { a: 'What’s the ', b: ' like in London?', op: ['weather', 'time', 'hour'], nao: 'Sun and rain: weather. The clock: time.' },
  { a: 'In July, it’s ', b: ' in Sydney.', op: ['winter', 'summer', 'hot winter'], nao: 'Sydney is south: in July, it’s winter.' }
];

var RODA = [
  { k: 'YOUR SUMMER', q: 'What’s the weather like in your city in summer?', ex: 'In summer, it’s very hot and sunny.' },
  { k: 'YOUR WINTER', q: 'What’s winter like where you live?', ex: 'In winter, it’s cool, but it never snows.' },
  { k: 'RAIN', q: 'What do you do when it’s raining?', ex: 'When it’s raining, I read a book at home.' },
  { k: 'RIGHT NOW', q: 'Look out of the window. What’s the weather like right now?', ex: 'It’s cloudy and a little windy.' },
  { k: 'A DREAM TRIP', q: 'Where do you want to go? What’s the weather like there?', ex: 'I want to go to Iceland. It’s cold and windy there.' },
  { k: 'PERFECT DAY', q: 'What’s your perfect weather day?', ex: 'It’s sunny and warm, about 25 degrees.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, video: { p: 0, cap: 0, viu: {} }, par: { sel: -1, esc: {} }, dial: { n: 0, esc: '' }, walt: { n: 0, viu: {} }, quiz: { esc: {} }, roda: { sel: -1, foi: {} } };

function parede(sel, feitos) {
  var ims = {}; PAREDE.forEach(function (p, i) { if (feitos[i]) { ims[p.cid] = (ims[p.cid] || '') + '<i>' + p.ic + '</i>'; } });
  return '<div class="parede"><div class="globo"><span>CHANNEL 9 · 7 PM</span></div>' + CIDADES.map(function (c, i) {
    var alvo = sel >= 0 && PAREDE[sel].cid === i;
    return '<div class="tela tela-' + i + (alvo ? ' on' : '') + '" style="background-image:url(' + img(c.img) + ')"><b>' + c.k + '</b><small>' + c.grau + '</small><div class="imas">' + (ims[i] || '') + '</div></div>';
  }).join('') + '</div>';
}
function disco(mes, sul) {
  var cor = { w: '#4f8fd6', s: '#7cc58a', v: '#f0b44a', o: '#e0784a' }, nome = { w: 'WINTER', s: 'SPRING', v: 'SUMMER', o: 'FALL' };
  var s = '<svg class="disco" viewBox="0 0 300 300" role="img" aria-label="Season dial"><circle cx="150" cy="150" r="140" class="d-fundo"/>';
  for (var i = 0; i < 12; i++) {
    var e = sul ? TROCA[EST_N[i]] : EST_N[i], a0 = (i * 30 - 90 - 15) * Math.PI / 180, a1 = ((i + 1) * 30 - 90 - 15) * Math.PI / 180;
    var x0 = 150 + 130 * Math.cos(a0), y0 = 150 + 130 * Math.sin(a0), x1 = 150 + 130 * Math.cos(a1), y1 = 150 + 130 * Math.sin(a1);
    var xi0 = 150 + 82 * Math.cos(a0), yi0 = 150 + 82 * Math.sin(a0), xi1 = 150 + 82 * Math.cos(a1), yi1 = 150 + 82 * Math.sin(a1);
    var am = (i * 30 - 90) * Math.PI / 180;
    s += '<path d="M' + xi0 + ' ' + yi0 + ' L' + x0 + ' ' + y0 + ' A130 130 0 0 1 ' + x1 + ' ' + y1 + ' L' + xi1 + ' ' + yi1 + ' A82 82 0 0 0 ' + xi0 + ' ' + yi0 + 'z" fill="' + cor[e] + '" class="fatia' + (i === mes ? ' on' : '') + '"/>'
      + '<text x="' + (150 + 106 * Math.cos(am)) + '" y="' + (150 + 106 * Math.sin(am) + 4) + '" class="d-mes' + (i === mes ? ' on' : '') + '">' + MESES[i] + '</text>';
  }
  var e2 = sul ? TROCA[EST_N[mes]] : EST_N[mes], ag = (mes * 30 - 90) * Math.PI / 180;
  s += '<line x1="150" y1="150" x2="' + (150 + 76 * Math.cos(ag)) + '" y2="' + (150 + 76 * Math.sin(ag)) + '" class="agulha"/><circle cx="150" cy="150" r="54" class="d-meio"/>'
    + '<text x="150" y="146" class="d-est" fill="' + cor[e2] + '">' + nome[e2] + '</text><text x="150" y="168" class="d-hemi">' + (sul ? 'SOUTH' : 'NORTH') + '</text>';
  return s + '</svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1 · THE 7 O’CLOCK WEATHER</span><h1>What’s the <b>Weather</b> Like?</h1>'
    + '<p class="sub">Five cities, one big globe, and you on live TV. <b>It’s snowing</b> in Toronto. <b>It’s sunny</b> in Sydney.</p>'
    + '<div class="chipsx"><span class="pilula">It’s sunny</span><span class="pilula">It’s raining</span><span class="pilula">in winter</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Go on air</button>' + faixaLive() + '</div>'
    + '<div class="vd capa-p"><div class="no-ar">● ON AIR</div>' + parede(-1, {}) + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.video = function (c) {
  var e = S.video, passos = '<div class="tres-tempos">' + tempos3(e.p) + '</div>', corpo;
  if (e.p === 0) corpo = '<div class="foco"><div class="pergunta vd"><small>BEFORE YOU WATCH</small><h2>How many seasons are there? Which one is the coldest, and which one is the hottest?</h2></div>' + fala('va', ['There are …', '… is the coldest.'], ['winter', 'spring', 'summer', 'fall']) + mostra('va', 'Four: winter, spring, summer and fall. Winter is the coldest. Summer is the hottest.') + '<div style="text-align:center"><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, season by season</button></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'One year', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Video: chapter ' + (e.cap + 1) + ' of 5 · no words</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.ic + ' ' + (i + 1) + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>CHAPTER ' + (e.cap + 1) + '</small><h2>' + k.q + '</h2></div>' + fala('vc' + e.cap, ['It’s …', 'It’s … and …'], []) + mostra('vd' + e.cap, k.h)
      + '<div class="acoes">' + (e.cap < 4 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="foco"><div class="pergunta vd ja"><small>AFTER</small><h2>Pick one season. Give the weather on TV, like a presenter.</h2></div>' + fala('vb', ['Good evening! It’s …', 'It’s … and …'], []) + mostra('vb', 'Good evening! It’s fall. It’s cloudy and cool.', 1) + '</div>';
  return cab(c) + passos + corpo;
};

R.parede = function (c) {
  var e = S.par, x = e.sel >= 0 ? PAREDE[e.sel] : null, feitos = {};
  PAREDE.forEach(function (_, i) { if (e.esc[i] === 'ok') feitos[i] = 1; });
  var botoes = '<div class="perg-p">' + PAREDE.map(function (p, i) { return '<button type="button" class="chip' + (e.sel === i ? ' on' : '') + (feitos[i] ? ' feito' : '') + '" data-a="pr" data-n="' + i + '">' + CIDADES[p.cid].k.charAt(0) + CIDADES[p.cid].k.slice(1).toLowerCase() + ' ' + p.ic + '</button>'; }).join('') + '</div>';
  var lado = botoes + '<p class="dica-aluno">Tap a question. Dana asks it.</p>';
  if (x) {
    var esc = e.esc[e.sel], ok = esc === 'ok';
    lado = botoes + '<div class="balao vd"><small>DANA · THE PRODUCER</small><p>“' + x.q + '”</p></div><p class="ini">' + x.ini + '</p><h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 1).map(function (o) {
      return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 'ok' ? ' certo' : ' errado') : '') + '" data-a="pr-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
      + (esc && !ok ? '<p class="recusa">' + NOTA[esc] + ' The magnet won’t stick. Say it again.</p>' : '') + (ok && Object.keys(e.esc).filter(function (k) { return e.esc[k] === 'ok'; }).length < PAREDE.length ? '<p class="aprova">GOT IT. The magnet sticks: ' + x.ic + '</p>' : '');
  }
  var todos = Object.keys(feitos).length === PAREDE.length;
  return cab(c) + '<div class="mesa-par"><div class="vd par-box">' + parede(e.sel, feitos) + '</div><div class="lado-l">' + lado + (todos ? '<p class="aprova">Seven magnets. They only stick to It’s … The rule is next.</p>' : '') + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.dial = function (c) {
  var e = S.dial, n = e.n;
  if (n >= DIAL.length) return cab(c) + trilha(DIAL, n) + '<div class="mesa-par"><div class="vd disco-box">' + disco(6, 1) + '</div><div class="lado-l"><div class="pergunta vd"><small>THAT’S A WRAP</small><h2>Eight cities, eight seasons, and not one “Is raining”.</h2></div><p class="dica-aluno">July in the south: winter.</p></div></div>';
  var x = DIAL[n], ok = e.esc === 'ok';
  return cab(c) + trilha(DIAL, n) + '<div class="mesa-par"><div class="vd disco-box">' + disco(x.mes, x.sul) + '</div><div class="lado-l"><div class="pede vd"><small>' + (x.sul ? 'SOUTH OF THE EQUATOR' : 'NORTH OF THE EQUATOR') + '</small><b>' + x.k + ' · ' + MESES[x.mes] + ' ' + x.ic + '</b></div><p class="ini">' + x.ini + '</p><h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5><div class="versoes">' + ordem(x.ops, n + 2).map(function (o) {
    return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 'ok' ? ' certo' : ' errado') : '') + '" data-a="dl" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (e.esc && !ok ? '<p class="recusa">' + NOTA[e.esc] + '</p>' : '') + (ok ? '<div class="acoes"><p class="aprova">GOT IT.</p><button type="button" class="btn" data-a="dl-prox">Next city</button></div>' : '') + '</div></div>';
};

R.walt = function (c) {
  var e = S.walt, n = e.n, fim = n >= WALT.length;
  var foto = '<div class="aberta vd" style="background-image:url(' + img('janela') + ')"><span>WALT · ON THE PHONE</span></div>';
  if (fim) return cab(c) + '<div class="mesa-par">' + foto + '<div class="lado-l">' + follow('THE BIG QUESTION', 'Sun or snow: which do you like?', ['I like …', 'It’s … and …'], ['sunny', 'snowy', 'warm', 'cold'], 'big', mostra('big', 'I like sun. It’s warm and nice.', 1)) + '</div></div>';
  var x = WALT[n], viu = e.viu[n];
  return cab(c) + '<div class="mesa-par">' + foto + '<div class="lado-l">' + trilha(WALT, n) + '<div class="balao vd"><small>WALT</small><p>“' + x.ela + '”</p></div><div class="pede vd"><small>YOUR ANSWER</small><b>' + x.pede + '</b></div>'
    + (viu ? '<div class="balao vd resp"><small>WALT</small><p>“' + x.resp + '”</p></div><div><button type="button" class="btn" data-a="wt-prox">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="wt-viu">Answered · Walt replies</button><p class="dica-aluno">Answer Walt with It’s …</p></div>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.quiz, todos = QUIZ.every(function (_, i) { return e.esc[i] === 0; });
  return cab(c) + '<div class="quiz">' + QUIZ.map(function (x, i) {
    var esc = e.esc[i], ok = esc === 0;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>' + x.a + '<span class="gap">' + (ok ? x.op[0] : '___') + '</span>' + x.b + '</p><div class="tres-b">' + ordem(x.op.map(function (o, k) { return [o, k]; }), i + 1).map(function (o) {
      return '<button type="button" class="pilula' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (esc > 0 ? '<p class="recusa">' + x.nao + '</p>' : '') + '</div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Six out of six. Now your own weather.</p>' : '');
};

R.roda = function (c) {
  var e = S.roda, x = e.sel >= 0 ? RODA[e.sel] : null;
  return cab(c) + '<div class="mesa-par"><div class="cartoes-c">' + RODA.map(function (k, i) { return '<button type="button" class="cartao-c' + (e.sel === i ? ' on' : '') + (e.foi[i] ? ' feito' : '') + '" data-a="rd" data-n="' + i + '"><small>0' + (i + 1) + '</small><b>' + k.k + '</b></button>'; }).join('') + '</div>'
    + '<div class="lado-l">' + (x ? '<div class="pergunta vd"><small>' + x.k + '</small><h2>' + x.q + '</h2></div>' + fala('rd' + e.sel, ['It’s …', 'In …, it’s …', 'When it’s …, I …'], []) + mostra('rd' + e.sel, x.ex, 1) : '<p class="dica-aluno">Pick a card.</p>') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Good evening! Today in …, it’s …\nIn winter, it’s …\nIn summer, it’s …', 'The weather desk',
    ['Good evening! ', 'Today in ', 'it’s ', 'It’s raining', 'In winter, ', 'In summer, ', ' degrees'], ['YOUR CITY ON TV', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now give the weather, It’s every time.' : 'Tonight’s weather, and every season.'])
    + '<div class="lado-fim"><div class="grande vd"><span><u>It’s</u> sunny · <u>It’s</u> 31 degrees</span><span>now: <u>It’s raining</u></span><span>sun → <u>sunny</u> · heat → <u>hot</u></span><span><u>in</u> winter · <u>in</u> July</span></div>'
    + mostra('fim', 'Good evening! Today in Lisbon, it’s sunny and warm. It’s 24 degrees.<br>In winter, it’s cool and it’s raining a lot.<br>In summer, it’s very hot.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
TOQUES.pr = function (b, n) { S.par.sel = n; };
TOQUES['pr-v'] = function (b, n, v) { S.par.esc[S.par.sel] = v; };
TOQUES.dl = function (b, n, v) { S.dial.esc = v; };
TOQUES['dl-prox'] = function () { S.dial = { n: S.dial.n + 1, esc: '' }; };
TOQUES['wt-viu'] = function () { S.walt.viu[S.walt.n] = 1; };
TOQUES['wt-prox'] = function () { S.walt.n++; };
TOQUES.qz = function (b, n, v) { S.quiz.esc[n] = +v; };
TOQUES.rd = function (b, n) { S.roda.sel = n; S.roda.foi[n] = 1; };
