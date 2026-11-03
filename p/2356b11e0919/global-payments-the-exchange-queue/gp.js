/* ============================================================
   GLOBAL PAYMENTS ENGLISH · as peças do curso (Business · CURSOS)      03/11/2026
   Carregado DEPOIS do revisao.js e do dialogo.js. O mesmo arquivo em todas as aulas;
   cada aula.js traz só os dados:
     MORNING   { rot, ref, perguntas:[{q, st:[…], r}], frase }        I · Morning Check (o ritual fixo)
     TERMOS    [{ w, tela, pt, au, pron }] × 8                          as palavras da tela
     EXPLICA   { cards:[{ tile, le, titulo, img, ex:[{b:[[en,pt,cor]], en, pt, au}], aviso }],
                 monta:[{ pt, blocos:[…], certo }] }                    a explicação em blocos (pedido do Carlos, 03/11)
     SIM       { mods:[…], ops:[refs], missoes:[{ q, st, r, alvo:{t, v}, prof }], anexo }   o simulador
     CHECK     { ref, itens:[…] }                                       o Screen Check da unidade
     PT        { cena: 'dica em português' }                            o botão PT do aluno
   Tudo é estado (S.gp) mudado por toques data-a: na sala o toque viaja e os dois lados ficam iguais.
   Sistemas FICTÍCIOS: Exchange, SWIFT Monitor e Unit são telas genéricas da Wolf Labs; bancos, empresas,
   BICs e referências são inventados (nenhum dado real de banco ou cliente).
   ============================================================ */
S.gp = S.gp || { pt: 0, mc: { q: 0 }, tm: { sel: 0, rep: {} }, ex: { n: 0, m: 0, sel: {}, conf: {} }, ck: {},
  sim: { aba: 'exchange', st: 'ALL', ccy: 'ALL', sel: '', campo: '', fmt: 'mt', un: { sel: '', passo: 0, fix: 0, anexo: 0, cancela: 0 }, muda: {}, log: {}, m: 0, ok: {} } };

/* ---------- as operações da fila (as mesmas no curso inteiro) ---------- */
var GP_OPS = {
  'FX-20481': { amt: '25,000.00', ccy: 'USD', vd: '12 MAY', st: 'PENDING', ben: 'Lumen Trading LLC', bbk: 'Northgate Bank', bbic: 'NGTQUS33XXX', ord: 'Serra Steel S.A.', snd: 'AURQBRSPXXX', int: 'HBRQGB2LXXX', intn: 'Harbor Trust Bank', rmt: 'INVOICE 7781', chg: 'SHA', un: '' },
  'FX-20482': { amt: '8,750.50', ccy: 'EUR', vd: '12 MAY', st: 'ON HOLD', ben: 'Vela Foods GmbH', bbk: 'Rhein Merchant Bank', bbic: 'RMBQDEFFXXX', ord: 'Brava Foods Ltda.', snd: 'AURQBRSPXXX', int: '', intn: '', rmt: 'INVOICE (MISSING)', chg: 'OUR', un: 'missing' },
  'FX-20483': { amt: '140,000.00', ccy: 'USD', vd: '13 MAY', st: 'APPROVED', ben: 'Atlas Motors Inc.', bbk: 'Northgate Bank', bbic: 'NGTQUS33XXX', ord: 'Serra Steel S.A.', snd: 'AURQBRSPXXX', int: 'HBRQGB2LXXX', intn: 'Harbor Trust Bank', rmt: 'INVOICE 7790', chg: 'SHA', un: '' },
  'FX-20484': { amt: '3,200.00', ccy: 'GBP', vd: '13 MAY', st: 'APPROVED', ben: 'Kestrel Design Ltd', bbk: 'Harbor Trust Bank', bbic: 'HBRQGB2', ord: 'Lumen Brasil Ltda.', snd: 'AURQBRSPXXX', int: '', intn: '', rmt: 'INVOICE 1204', chg: 'SHA', un: 'bic', certo: 'HBRQGB2LXXX', opcoes: ['HBRQGB2LXXX', 'HBRQGB2XXXL', 'HRBQGB2LXXX'] },
  'FX-20485': { amt: '12,000.00', ccy: 'USD', vd: '12 MAY', st: 'REJECTED', ben: '(MISSING NAME)', bbk: 'Northgate Bank', bbic: 'NGTQUS33XXX', ord: 'Brava Foods Ltda.', snd: 'AURQBRSPXXX', int: 'HBRQGB2LXXX', intn: 'Harbor Trust Bank', rmt: 'INVOICE 7802', chg: 'BEN', un: 'rejeitada' },
  'FX-20486': { amt: '61,300.00', ccy: 'EUR', vd: '11 MAY', st: 'APPROVED', ben: 'Vela Foods GmbH', bbk: 'Rhein Merchant Bank', bbic: 'RMBQDEFFXXX', ord: 'Brava Foods Ltda.', snd: 'AURQBRSPXXX', int: '', intn: '', rmt: 'CONTRACT 0451', chg: 'SHA', un: 'cutoff' },
  'FX-20487': { amt: '9,999.00', ccy: 'USD', vd: '14 MAY', st: 'PENDING', ben: 'Orion Tools Corp.', bbk: 'Northgate Bank', bbic: 'NGTQUS33XXX', ord: 'Serra Steel S.A.', snd: 'AURQBRSPXXX', int: 'HBRQGB2LXXX', intn: 'Harbor Trust Bank', rmt: 'INVOICE 7811', chg: 'OUR', un: 'funds' },
  'FX-20488': { amt: '450,000', ccy: 'JPY', vd: '14 MAY', st: 'PENDING', ben: 'Kaito Parts Co.', bbk: 'Hikari Commerce Bank', bbic: 'HKRQJPJTXXX', ord: 'Lumen Brasil Ltda.', snd: 'AURQBRSPXXX', int: 'NGTQUS33XXX', intn: 'Northgate Bank', rmt: 'INVOICE 0093', chg: 'SHA', un: '' }
};
var GP_ST = ['ALL', 'PENDING', 'APPROVED', 'ON HOLD', 'RELEASED', 'REJECTED'];
var GP_CCY = ['ALL', 'USD', 'EUR', 'GBP', 'JPY'];
/* os campos da mensagem: a mesma chave no MT103 e no pacs.008 */
var GP_CAMPOS = [
  { k: 'ref', mt: ':20:', mtn: 'Sender’s Reference', mx: 'MsgId', v: function (r) { return r; }, en: 'The number of the payment.', pt: 'A referência: o “número” do pagamento.' },
  { k: 'amt', mt: ':32A:', mtn: 'Value Date / Currency / Amount', mx: 'IntrBkSttlmAmt + Dt', v: function (r, o, mx) { return mx ? o.ccy + ' ' + o.amt + ' · 2026-05-' + o.vd.slice(0, 2) : '2605' + o.vd.slice(0, 2) + o.ccy + o.amt.replace(/,/g, '').replace('.', ','); }, en: 'The value date, the currency and the amount.', pt: 'Data-valor, moeda e valor. No MT a data é AAMMDD e o decimal é vírgula.' },
  { k: 'ord', mt: ':50K:', mtn: 'Ordering Customer', mx: 'Dbtr', v: function (r, o) { return o.ord; }, en: 'The client who sends the money.', pt: 'O cliente que manda o dinheiro (ordenante).' },
  { k: 'snd', mt: ':52A:', mtn: 'Ordering Institution', mx: 'DbtrAgt', v: function (r, o) { return o.snd; }, en: 'The bank of the client who sends. Here: Banco Aurora.', pt: 'O banco de quem manda. Aqui: o Banco Aurora (o “nosso” banco).' },
  { k: 'int', mt: ':56A:', mtn: 'Intermediary', mx: 'IntrmyAgt1', v: function (r, o) { return o.int || '(none)'; }, en: 'A bank in the middle of the route.', pt: 'Banco intermediário: um banco no meio do caminho.' },
  { k: 'bbk', mt: ':57A:', mtn: 'Account With Institution', mx: 'CdtrAgt', v: function (r, o) { return o.bbic; }, en: 'The bank of the beneficiary.', pt: 'O banco do beneficiário (onde o dinheiro chega).' },
  { k: 'ben', mt: ':59:', mtn: 'Beneficiary Customer', mx: 'Cdtr', v: function (r, o) { return o.ben; }, en: 'Who receives the money.', pt: 'O beneficiário: quem recebe o dinheiro.' },
  { k: 'rmt', mt: ':70:', mtn: 'Remittance Information', mx: 'RmtInf', v: function (r, o) { return o.rmt; }, en: 'Why we pay: the invoice or the contract.', pt: 'Informação do pagamento: a invoice ou o contrato.' },
  { k: 'chg', mt: ':71A:', mtn: 'Details of Charges', mx: 'ChrgBr', v: function (r, o, mx) { return mx ? { SHA: 'SHAR', OUR: 'DEBT', BEN: 'CRED' }[o.chg] : o.chg; }, en: 'Who pays the bank fees.', pt: 'Quem paga as tarifas: OUR (quem manda), BEN (quem recebe), SHA (divide).' }
];
var GP_ERROS = {
  missing: ['Missing information', 'The invoice is missing.', 'Falta informação: a invoice não chegou.'],
  bic: ['Invalid BIC', 'The BIC of the beneficiary bank is invalid.', 'BIC inválido: o código do banco está errado (incompleto).'],
  cutoff: ['Cut-off time passed', 'Value date 11 MAY. The cut-off for EUR was 12:00 PM (noon).', 'Passou do horário limite (cut-off) do euro: meio-dia.'],
  funds: ['Insufficient funds', 'There isn’t enough money in the account.', 'Saldo insuficiente na conta do cliente.'],
  rejeitada: ['Rejected payment', 'This payment is rejected. You can’t settle it.', 'Pagamento rejeitado: não dá para liquidar.']
};
/* ---------- o número por extenso (pedido do Carlos, 03/11): mouse em cima (ou toque) mostra como se fala ---------- */
var GP_UM = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var GP_DEZ = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
function gpAte999(n) {
  var c = Math.floor(n / 100), r = n % 100, s = c ? GP_UM[c] + ' hundred' : '';
  if (r) s += (c ? ' and ' : '') + (r < 20 ? GP_UM[r] : GP_DEZ[Math.floor(r / 10)] + (r % 10 ? '-' + GP_UM[r % 10] : ''));
  return s;
}
function gpPorExtenso(n) {
  n = Math.floor(n); if (!n) return 'zero';
  var mi = Math.floor(n / 1e6), mil = Math.floor(n / 1000) % 1000, r = n % 1000, p = [];
  if (mi) p.push(gpAte999(mi) + ' million'); if (mil) p.push(gpAte999(mil) + ' thousand');
  if (r && p.length && r < 100) return p.join(', ') + ' and ' + gpAte999(r);
  if (r) p.push(gpAte999(r));
  return p.join(', ');
}
var GP_MOEDA = { USD: ['dollars', 'cents'], EUR: ['euros', 'cents'], GBP: ['pounds', 'pence'], JPY: ['yen', ''], BRL: ['reais', 'centavos'] };
function gpValor(amt, ccy) {
  var p = String(amt).replace(/,/g, '').split('.'), m = GP_MOEDA[ccy] || ['', ''], c = +(p[1] || 0);
  return gpPorExtenso(+p[0]) + (m[0] ? ' ' + m[0] : '') + (c && m[1] ? ' and ' + gpPorExtenso(c) + ' ' + m[1] : '');
}
var GP_ORD = { one: 'first', two: 'second', three: 'third', five: 'fifth', eight: 'eighth', nine: 'ninth', twelve: 'twelfth' };
function gpOrdinal(n) { var w = gpPorExtenso(n), u = w.split(/[- ]/).pop(); var o = GP_ORD[u] || (/y$/.test(u) ? u.slice(0, -1) + 'ieth' : u + 'th'); return w.slice(0, w.length - u.length) + o; }
var GP_MES = { JAN: 'January', FEB: 'February', MAR: 'March', APR: 'April', MAY: 'May', JUN: 'June', JUL: 'July', AUG: 'August', SEP: 'September', OCT: 'October', NOV: 'November', DEC: 'December' };
function gpData(vd) { var p = String(vd).split(' '); return (GP_MES[p[1]] || p[1]) + ' ' + gpOrdinal(+p[0]); }
function gpRefDiz(r) { return String(r).replace(/-/g, ' ').split('').map(function (ch) { return /\d/.test(ch) ? (ch === '0' ? 'oh' : GP_UM[+ch]) : ch === ' ' ? '·' : ch; }).join(' ').replace(/ · /g, ', '); }
/* a etiqueta: tabindex para abrir com toque/teclado também */
function gpDiz(txt, diz) { return '<span class="gp-num" tabindex="0" data-diz="' + h(diz) + '">' + txt + '</span>'; }
function gpAmt(o) { return gpDiz(o.amt, gpValor(o.amt, o.ccy)); }
function gpVd(vd) { return gpDiz(vd, gpData(vd)); }
function gpRef(r) { return gpDiz(r, gpRefDiz(r)); }
function gpOp(r) { var o = GP_OPS[r] || {}, m = S.gp.sim.muda[r]; if (!m) return o; var x = {}; for (var k in o) x[k] = o[k]; for (k in m) x[k] = m[k]; return x; }
function gpStCls(st) { return 'gp-st st-' + st.toLowerCase().replace(/\s+/g, '-'); }
function gpBadge(st) { return '<span class="' + gpStCls(st) + '">' + st + '</span>'; }
function gpLog(t, v) { var L2 = S.gp.sim.log; L2[t] = L2[t] || {}; L2[t][v] = 1; }
function gpTem(t, v) { return !!((S.gp.sim.log[t] || {})[v]); }
function gpPt(txt) { return S.gp.pt && txt ? '<p class="gp-ptx" lang="pt-BR"><b>PT</b><span>' + txt + '</span></p>' : ''; }
var GP_ICO_AVISO = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 3 2 21h20L12 3Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 10v5M12 18v.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

/* ---------- o cartão de explicação (o jeito do app de japonês do Carlos, 03/11) ---------- */
function gpBlocos(b) {
  return '<div class="gp-blocos" lang="en">' + b.map(function (x) {
    return '<span class="gp-b gp-b-' + (x[2] || 'a') + '"><b>' + x[0] + '</b><i lang="pt-BR">' + (x[1] || '') + '</i></span>';
  }).join('') + '</div>';
}
function gpCartao(x, comSom) {
  return '<div class="gp-ex">'
    + '<div class="gp-ex-top"><span class="gp-tile">' + x.tile + '</span><div class="gp-ex-tt">' + (x.le ? '<small>' + x.le + '</small>' : '') + '<b>' + x.titulo + '</b></div></div>'
    + (x.img ? '<p class="gp-ex-img">' + x.img + '</p>' : '')
    + (x.ex || []).map(function (e) {
      return '<div class="gp-frase">' + gpBlocos(e.b) + '<p class="gp-tr"><span lang="en">' + e.en + '</span><em lang="pt-BR">' + e.pt + '</em>' + (comSom && e.au ? tocar(e.au, 1) : '') + '</p></div>';
    }).join('')
    + (x.aviso ? '<p class="gp-aviso">' + GP_ICO_AVISO + '<span>' + x.aviso + '</span></p>' : '')
    + '</div>';
}

/* ---------- as siglas: o glossário do professor (em português) ---------- */
var GP_GLOSS = {
  swift: { tile: 'SWIFT', le: 'lê-se “suift”', titulo: 'a rede de mensagens dos bancos', img: 'Pense num correio só de bancos. O dinheiro não “viaja” pelo SWIFT: viajam as ORDENS (mensagens) que dizem a outro banco “pague tanto para fulano”.', ex: [{ b: [['The message', 'a mensagem', 'a'], ['is', 'está', 'v'], ['in the SWIFT Monitor', 'no monitor SWIFT', 'c']], en: 'The message is in the SWIFT Monitor.', pt: 'A mensagem está no SWIFT Monitor.' }], aviso: 'Não precisa saber como funciona por dentro: o especialista é o aluno. Você cuida do inglês.' },
  bic: { tile: 'BIC', le: 'lê-se “B-I-C” ou “bick”', titulo: 'o endereço do banco no SWIFT', img: 'Como um CEP de banco: 8 ou 11 letras e números. 4 do banco + 2 do país + 2 da cidade (+ 3 da agência). Ex.: NGTQ US 33 XXX.', ex: [{ b: [['What', 'qual', 'a'], ['is', 'é', 'v'], ['the BIC?', 'o BIC?', 'c']], en: 'What is the BIC?', pt: 'Qual é o BIC?' }], aviso: 'Também se chama “SWIFT code”. Os BICs do curso são INVENTADOS (todos com Q na 4ª letra).' },
  mt103: { tile: 'MT103', le: 'lê-se “M-T one-oh-three”', titulo: 'a mensagem de um pagamento (formato antigo)', img: 'É o “formulário” padrão de transferência internacional para um cliente. Cada linha é um campo com uma etiqueta: :20: referência, :32A: data/moeda/valor, :59: beneficiário.', ex: [{ b: [['It’s', 'é', 'v'], ['an MT103', 'um MT103', 'c']], en: 'It’s an MT103.', pt: 'É um MT103.' }], aviso: 'Note o “an”: MT começa com som de vogal (“em-tee”), então é an MT103.' },
  pacs008: { tile: 'pacs.008', le: 'lê-se “packs oh-oh-eight”', titulo: 'a mesma mensagem, formato novo (ISO 20022)', img: 'O substituto do MT103. Mesma informação, nomes diferentes: Cdtr = creditor (beneficiário), Dbtr = debtor (ordenante), CdtrAgt = banco do beneficiário.', ex: [{ b: [['Cdtr', 'creditor', 'a'], ['is', 'é', 'v'], ['the beneficiary', 'o beneficiário', 'c']], en: 'Cdtr is the beneficiary.', pt: 'Cdtr é o beneficiário.' }], aviso: 'Os bancos estão migrando do MT para o MX (pacs). No simulador, o botão MT / pacs troca o formato.' },
  vd: { tile: 'VD', le: 'value date · lê-se “vál-iu deit”', titulo: 'data-valor', img: 'O dia em que o dinheiro “vale” na conta de quem recebe. Não é o dia em que a ordem foi digitada.', ex: [{ b: [['The value date', 'a data-valor', 'a'], ['is', 'é', 'v'], ['May twelfth', '12 de maio', 'c']], en: 'The value date is May twelfth.', pt: 'A data-valor é 12 de maio.' }], aviso: 'Datas em inglês usam número ordinal: twelfth (12º), thirteenth (13º). 12 MAY se lê “May twelfth”.' },
  ccy: { tile: 'CCY', le: 'currency · lê-se “câ-ren-si”', titulo: 'moeda (e os códigos de 3 letras)', img: 'USD dólar americano, EUR euro, GBP libra esterlina, JPY iene, BRL real. Na tela aparece só o código.', ex: [{ b: [['The currency', 'a moeda', 'a'], ['is', 'é', 'v'], ['euros', 'euros', 'c']], en: 'The currency is euros.', pt: 'A moeda é euro.' }], aviso: 'Fala-se o nome, não o código: “dollars”, “euros”, “pounds”, “yen”, “reais”.' },
  numeros: { tile: '8,750.50', le: 'lê-se “eight thousand, seven hundred and fifty”', titulo: 'vírgula e ponto ao contrário', img: 'Em inglês a VÍRGULA separa os milhares e o PONTO separa os centavos. 8,750.50 = oito mil setecentos e cinquenta e cinquenta centavos.', ex: [{ b: [['The amount', 'o valor', 'a'], ['is', 'é', 'v'], ['25,000 dollars', '25 mil dólares', 'c']], en: 'The amount is twenty-five thousand dollars.', pt: 'O valor é 25 mil dólares.' }], aviso: 'Erro clássico de brasileiro: ler 8,750 como “oito vírgula setecentos”. É eight THOUSAND.' },
  status: { tile: 'ST', le: 'status · lê-se “stei-tus” ou “sta-tus”', titulo: 'a situação da operação', img: 'PENDING esperando · APPROVED aprovada · ON HOLD retida (parada) · RELEASED liberada · REJECTED rejeitada · SETTLED liquidada.', ex: [{ b: [['What’s', 'qual é', 'a'], ['the status?', 'a situação?', 'c']], en: 'What’s the status?', pt: 'Qual é a situação?' }], aviso: 'ON HOLD é “parada esperando algo”, não “em espera de telefone”. É a palavra que mais aparece na fila.' },
  cutoff: { tile: 'COT', le: 'cut-off time · lê-se “cât-óf taim”', titulo: 'horário limite do dia', img: 'Cada moeda e cada banco têm um horário até quando o pagamento sai com data de hoje. Passou do cut-off: só amanhã.', ex: [{ b: [['The cut-off time', 'o horário limite', 'a'], ['is', 'é', 'v'], ['4 PM', '16h', 'c']], en: 'The cut-off time is 4 PM.', pt: 'O horário limite é 16h.' }], aviso: '“4 PM” se lê “four p-m”. Em inglês se usa 12 horas, não 16h.' },
  settle: { tile: 'STL', le: 'settle · lê-se “sé-tou”', titulo: 'liquidar (pagar de verdade)', img: 'Liquidação é o momento em que o dinheiro efetivamente sai e a operação fecha. No curso, é o que o sistema “Unit” faz.', ex: [{ b: [['I', 'eu', 'a'], ['can', 'consigo', 'v'], ['settle it', 'liquidar', 'c']], en: 'I can settle it.', pt: 'Eu consigo liquidar.' }], aviso: 'Settlement é o substantivo (a liquidação). Settled = liquidada.' },
  bene: { tile: 'BEN', le: 'beneficiary · lê-se “bé-ne-fí-xe-ri”', titulo: 'beneficiário: quem recebe', img: 'Do outro lado há o ordering customer (ordenante): quem manda. Beneficiary bank é o banco de quem recebe.', ex: [{ b: [['Who', 'quem', 'a'], ['is', 'é', 'v'], ['the beneficiary?', 'o beneficiário?', 'c']], en: 'Who is the beneficiary?', pt: 'Quem é o beneficiário?' }], aviso: 'A palavra é longa: deixe o aluno repetir em pedaços: be-ne-FI-ci-a-ry.' },
  inter: { tile: 'INT', le: 'intermediary bank · lê-se “in-ter-mí-di-é-ri”', titulo: 'banco intermediário / correspondente', img: 'Quando o banco de quem manda não tem conta direta no banco de quem recebe, o dinheiro passa por um banco no meio. É a “rota” do pagamento.', ex: [{ b: [['The intermediary bank', 'o banco intermediário', 'a'], ['is', 'é', 'v'], ['Harbor Trust', 'o Harbor Trust', 'c']], en: 'The intermediary bank is Harbor Trust.', pt: 'O banco intermediário é o Harbor Trust.' }], aviso: 'Correspondent bank é quase sinônimo: o banco parceiro que tem a conta em outra moeda (nostro).' },
  sndrcv: { tile: 'S/R', le: 'sender / receiver', titulo: 'quem manda a MENSAGEM e quem recebe', img: 'Sender e receiver são os BANCOS da mensagem SWIFT (não as empresas). Ordering customer e beneficiary são as EMPRESAS.', ex: [{ b: [['The sender', 'quem envia', 'a'], ['is', 'é', 'v'], ['Banco Aurora', 'o Banco Aurora', 'c']], en: 'The sender is Banco Aurora.', pt: 'Quem envia é o Banco Aurora.' }], aviso: 'Se o aluno confundir, a pergunta-guia é: “Is it a bank or a company?”' },
  ref: { tile: 'REF', le: 'reference · lê-se “ré-fe-rens”', titulo: 'o número da operação', img: 'O “RG” do pagamento: FX-20481. É por ele que todo mundo procura a operação na fila, no SWIFT e na liquidação.', ex: [{ b: [['The reference', 'a referência', 'a'], ['is', 'é', 'v'], ['FX-20481', 'FX-20481', 'c']], en: 'The reference is FX-20481.', pt: 'A referência é FX-20481.' }], aviso: 'Ao telefone, número se lê dígito por dígito: “two-oh-four-eight-one”. O zero vira “oh”.' },
  fees: { tile: 'OUR', le: 'OUR · SHA · BEN', titulo: 'quem paga as tarifas', img: 'OUR: quem manda paga tudo. BEN: quem recebe paga (chega menos). SHA (shared): cada um paga a tarifa do seu banco.', ex: [{ b: [['The charges', 'as tarifas', 'a'], ['are', 'são', 'v'], ['SHA', 'divididas', 'c']], en: 'The charges are SHA.', pt: 'As tarifas são divididas.' }], aviso: 'Fica para a Unidade 3. Se o aluno perguntar agora, essa é a resposta.' },
  fx: { tile: 'FX', le: 'foreign exchange · lê-se “éf-éks”', titulo: 'câmbio', img: 'Troca de uma moeda por outra (real por dólar). Daí as referências “FX-…” das operações no simulador.', ex: [{ b: [['I', 'eu', 'a'], ['work', 'trabalho', 'v'], ['with FX', 'com câmbio', 'c']], en: 'I work with FX.', pt: 'Eu trabalho com câmbio.' }], aviso: 'Contrato de câmbio = FX contract. Taxa de câmbio = exchange rate (Unidade 2).' },
  invoice: { tile: 'INV', le: 'invoice · lê-se “ín-vóis”', titulo: 'fatura comercial', img: 'O documento do exportador que diz o que foi vendido e quanto custa. Sem ele, muitos pagamentos ficam ON HOLD.', ex: [{ b: [['Can you', 'você pode', 'v'], ['send', 'mandar', 'a'], ['the invoice, please?', 'a invoice, por favor?', 'c']], en: 'Can you send the invoice, please?', pt: 'Você pode mandar a invoice, por favor?' }], aviso: 'No Brasil se fala “invoice” mesmo. A pronúncia é ÍN-vóis, com força no começo.' },
  queue: { tile: 'Q', le: 'queue · lê-se “kiu”, igual à letra Q', titulo: 'a fila de operações', img: 'A lista de pagamentos que o analista precisa processar no dia. No curso, é a tela principal do sistema “Exchange”.', ex: [{ b: [['This', 'esta', 'a'], ['is', 'é', 'v'], ['the queue', 'a fila', 'c']], en: 'This is the queue.', pt: 'Esta é a fila.' }], aviso: 'Escreve-se q-u-e-u-e, fala-se só “kiu”. O aluno vai achar graça: aproveite.' },
  imperativo: { tile: 'BTN', le: 'os botões da tela', titulo: 'a tela dá ordens: verbo primeiro', img: 'Select, Confirm, Submit, Settle, Cancel: são ordens (imperativo). Em português: Selecione, Confirme, Envie, Liquide, Cancele.', ex: [{ b: [['Select', 'selecione', 'v'], ['the payment', 'o pagamento', 'c']], en: 'Select the payment.', pt: 'Selecione o pagamento.' }], aviso: 'Submit = enviar (para aprovação), não “submeter” no sentido de obedecer.' }
  ,rate: { tile: 'RATE', le: 'exchange rate · lê-se “eks-tchêindj reit”', titulo: 'a cotação (taxa de câmbio)', img: 'Quantos reais custa 1 dólar. Na tela: USD/BRL 5.4380. Lê-se com POINT e dígito por dígito: five point four three eight zero.', ex: [{ b: [['The rate', 'a cotação', 'a'], ['is', 'é', 'v'], ['five point four', '5,4', 'c']], en: 'The rate is five point four three eight zero.', pt: 'A cotação é 5,4380.' }], aviso: 'Em inglês o decimal é PONTO (point), não vírgula. 5.4380 nunca é “five comma”.' },
  buysell: { tile: 'B/S', le: 'we buy · we sell', titulo: 'o banco compra / o banco vende', img: 'A tela mostra a cotação do ponto de vista do BANCO. Cliente quer comprar dólar → o banco VENDE → usa a coluna WE SELL (a mais alta). Cliente vende dólar → coluna WE BUY.', ex: [{ b: [['The client', 'o cliente', 'a'], ['buys', 'compra', 'v'], ['dollars', 'dólares', 'c']], en: 'The client buys dollars.', pt: 'O cliente compra dólares.' }], aviso: 'Se o aluno inverter, é normal: no Brasil se fala “cotação de compra / venda” do lado do cliente às vezes. Pergunte: “Who buys: the bank or the client?”' },
  spread: { tile: 'SPR', le: 'spread · lê-se “sprééd”', titulo: 'a diferença entre compra e venda', img: 'WE SELL menos WE BUY. É de onde vem o ganho do banco na operação de câmbio.', ex: [{ b: [['The spread', 'o spread', 'a'], ['is', 'é', 'v'], ['small', 'pequeno', 'c']], en: 'The spread is small today.', pt: 'O spread está pequeno hoje.' }], aviso: 'Palavra igual em português: só cuide da pronúncia (sprééd, sem “i” no começo).' },
  bl: { tile: 'B/L', le: 'bill of lading · lê-se “bil óv lei-ding”', titulo: 'conhecimento de embarque', img: 'O documento do navio: prova que a mercadoria foi embarcada. Sem ele, muito pagamento de importação fica parado.', ex: [{ b: [['The bill of lading', 'o conhecimento de embarque', 'a'], ['is', 'está', 'v'], ['missing', 'faltando', 'c']], en: 'The bill of lading is missing.', pt: 'O conhecimento de embarque está faltando.' }], aviso: 'No dia a dia se fala só “B-L” (bi-él).' },
  proforma: { tile: 'PRO', le: 'proforma invoice · lê-se “pro-fór-ma”', titulo: 'fatura proforma', img: 'A fatura prévia, antes da venda final: serve para o pagamento antecipado. Depois vem a commercial invoice (final).', ex: [{ b: [['It’s', 'é', 'v'], ['a proforma invoice', 'uma fatura proforma', 'c']], en: 'It’s a proforma invoice.', pt: 'É uma fatura proforma.' }], aviso: 'Proforma não é final: “It isn’t the final invoice.”' },
  fxc: { tile: 'FXC', le: 'FX contract · lê-se “éf-éks cón-trakt”', titulo: 'contrato de câmbio', img: 'O contrato entre o cliente e o banco para comprar (ou vender) a moeda estrangeira. No Brasil é obrigatório na operação de câmbio.', ex: [{ b: [['The FX contract', 'o contrato de câmbio', 'a'], ['is', 'está', 'v'], ['signed', 'assinado', 'c']], en: 'The FX contract is signed.', pt: 'O contrato de câmbio está assinado.' }], aviso: 'Contract: força no começo (CÓN-tract).' },
  di: { tile: 'DI', le: 'import declaration', titulo: 'declaração de importação (DI / DUIMP)', img: 'O documento da alfândega que registra a entrada da mercadoria no Brasil. Em inglês se diz “import declaration”.', ex: [{ b: [['We need', 'precisamos de', 'v'], ['the import declaration', 'a declaração de importação', 'c']], en: 'We need the import declaration.', pt: 'Precisamos da declaração de importação.' }], aviso: 'Não precisa traduzir DUIMP: diga “the import declaration”.' },
  ampm: { tile: 'PM', le: 'a.m. · p.m.', titulo: 'as horas em inglês', img: 'Inglês usa 12 horas. a.m. = manhã (antes do meio-dia), p.m. = depois do meio-dia. 16h = 4 p.m. 12h = twelve noon.', ex: [{ b: [['The cut-off', 'o horário limite', 'a'], ['is', 'é', 'v'], ['at four p.m.', 'às 16h', 'c']], en: 'The cut-off is at four p.m.', pt: 'O horário limite é às 16h.' }], aviso: 'Hora com AT: at 4 p.m. Dia com ON: on Monday.' }
};
/* as siglas de cada cena (o aula.js pode trocar com GP_SIG_CENA) */
var GP_SIG_CENA = window.GP_SIG_CENA || {};

/* ---------- I · Morning Check: o ritual fixo, a mesma porta toda aula ---------- */
var GP_CORE = [
  ['What’s the status?', 2], ['It’s pending / on hold / released.', 2], ['The amount is …', 2], ['The currency is …', 2], ['The value date is …', 2],
  ['Can you spell that, please?', 3], ['One moment, please. I’m checking.', 1], ['Sorry, can you repeat that?', 1], ['Can you send the …, please?', 5], ['Thank you. I’ll check and confirm.', 5]];
function gpCore() {
  var n = REV.aula || 1;
  return '<div class="gp-core"><small>THE CORE 10 · EVERY LESSON</small><ol>' + GP_CORE.map(function (x, i) {
    return '<li class="' + (x[1] <= n ? (x[1] === n ? 'novo' : 'on') : 'fora') + '"><b>' + (i + 1) + '</b><span>' + (x[1] <= n ? x[0] : 'Lesson ' + x[1]) + '</span></li>';
  }).join('') + '</ol></div>';
}
R.morning = function (c) {
  var M = window.MORNING, e = S.gp.mc, P = M.perguntas, q = Math.min(e.q, P.length - 1);
  var tela = M.perfil
    ? '<div class="gp-sim gp-mini"><div class="gp-sim-bar"><b>EXCHANGE</b><span>USER PROFILE</span></div><div class="gp-det">' + M.perfil.map(function (l) { return '<div><span>' + l[0] + '</span><b>' + l[1] + '</b></div>'; }).join('') + '</div></div>'
    : (function () { var o = gpOp(M.ref); return '<div class="gp-sim gp-mini"><div class="gp-sim-bar"><b>EXCHANGE</b><span>' + M.rot + '</span></div><div class="gp-tab-wrap"><table class="gp-tab"><thead><tr><th>REF</th><th>AMOUNT</th><th>CCY</th><th>VALUE DATE</th><th>STATUS</th></tr></thead><tbody><tr class="on"><td>' + gpRef(M.ref) + '</td><td class="num">' + gpAmt(o) + '</td><td>' + o.ccy + '</td><td>' + gpVd(o.vd) + '</td><td>' + gpBadge(o.st) + '</td></tr></tbody></table></div></div>'; })();
  var lado = '<div class="mesa-card"><small>QUESTION ' + (q + 1) + ' OF ' + P.length + '</small><p class="pq">' + P[q].q + '</p>'
    + fala('mc' + q, P[q].st, []) + mostra('mc' + q, P[q].r, 0)
    + '<div class="pratos-bt">' + (q < P.length - 1 ? '<button type="button" class="btn" data-a="gp-mc-prox">Next question</button>' : '') + '</div>'
    + (q >= P.length - 1 ? '<div class="gp-tudo"><small>NOW ALL TOGETHER</small><p lang="en">' + M.frase + '</p>' + mostra('mc-tudo', M.frase, 0) + '</div>' : '')
    + '<p class="so-prof dica-aluno">Ritual fixo: a mesma tela toda aula, só os dados mudam. O aluno lê em voz alta; você aponta na tela. Três vezes a frase final: com você, junto, sozinho.</p></div>';
  return cab(c) + trilha(P, q) + '<div class="mesa-c"><div class="lado-l">' + tela + gpCore() + '</div><div class="lado-l">' + lado + '</div></div>';
};
TOQUES['gp-mc-prox'] = function () { S.gp.mc.q++; };

/* ---------- as palavras da tela: ouvir, ver como aparece, repetir 3 vezes ---------- */
R.termos = function (c) {
  var T = window.TERMOS, e = S.gp.tm, x = T[e.sel] || T[0], rep = e.rep[e.sel] || 0;
  var grade = '<div class="gp-termos">' + T.map(function (t, i) {
    return '<button type="button" class="gp-termo' + (i === e.sel ? ' on' : '') + ((e.rep[i] || 0) >= 3 ? ' feito' : '') + '" data-a="gp-tm" data-n="' + i + '"><small>0' + (i + 1) + '</small><b lang="en">' + t.w + '</b>' + (S.gp.pt ? '<i lang="pt-BR">' + t.pt + '</i>' : '') + '</button>';
  }).join('') + '</div>';
  var lado = '<div class="mesa-card gp-termo-big"><small>WORD ' + (e.sel + 1) + ' OF ' + T.length + '</small>'
    + '<div class="gp-tw"><b lang="en">' + x.w + '</b>' + tocar(x.au) + '</div>'
    + '<div class="gp-onde"><small>ON THE SCREEN</small><div>' + x.tela + '</div></div>'
    + gpPt(x.pt)
    + '<div class="gp-rep"><small>SAY IT 3 TIMES</small><div>' + [0, 1, 2].map(function (k) { return '<i class="' + (k < rep ? 'on' : '') + '"></i>'; }).join('') + '</div>'
    + '<button type="button" class="btn' + (rep >= 3 ? '' : ' cheio') + '" data-a="gp-tm-rep">' + (rep >= 3 ? 'Done' : 'I said it') + '</button></div>'
    + (x.pron ? '<p class="so-prof dica-aluno"><b>Pronúncia:</b> ' + x.pron + '</p>' : '')
    + '<div class="pratos-bt">' + (e.sel < T.length - 1 ? '<button type="button" class="btn" data-a="gp-tm" data-n="' + (e.sel + 1) + '">Next word</button>' : '<p class="aprova">Eight words. Now they are your screen words.</p>') + '</div></div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + grade + '</div><div class="lado-l">' + lado + '</div></div>';
};
TOQUES['gp-tm'] = function (b, n) { S.gp.tm.sel = n; };
TOQUES['gp-tm-rep'] = function () { var e = S.gp.tm; e.rep[e.sel] = Math.min(3, (e.rep[e.sel] || 0) + 1); };

/* ---------- a explicação em blocos + montar a frase ---------- */
R.explica = function (c) {
  var X = window.EXPLICA, e = S.gp.ex, n = Math.min(e.n, X.cards.length - 1), x = X.cards[n];
  var abas = '<div class="gp-abas">' + '<span class="gp-de">' + (n + 1) + ' of ' + X.cards.length + '</span>' + X.cards.map(function (k, i) {
    return '<button type="button" class="gp-aba' + (i === n ? ' on' : '') + '" data-a="gp-ex" data-n="' + i + '"><b>' + k.tile + '</b><span>' + k.curto + '</span></button>';
  }).join('') + '</div>';
  var M = X.monta, m = Math.min(e.m, M.length - 1), y = M[m], sel = e.sel[m] || [], conf = e.conf[m];
  var feita = sel.map(function (i) { return y.blocos[i]; }).join(' ').replace(/\s+([?.,!])/g, '$1');
  var certo = conf && gpNorm(feita) === gpNorm(y.certo);
  var monta = '<div class="mesa-card gp-monta"><small>BUILD IT · ' + (m + 1) + ' OF ' + M.length + '</small>'
    + '<p class="pq">Say it in English: <b lang="pt-BR">' + y.pt + '</b></p>'
    + '<div class="gp-linha' + (conf ? (certo ? ' ok' : ' nao') : '') + '" lang="en">' + (sel.length ? sel.map(function (i) { return '<button type="button" class="gp-peca on" data-a="gp-ex-tira" data-n="' + i + '">' + y.blocos[i] + '</button>'; }).join('') : '<span class="gp-vazio">Tap the blocks in order</span>') + '</div>'
    + '<div class="gp-pecas" lang="en">' + y.blocos.map(function (t, i) { return sel.indexOf(i) >= 0 ? '' : '<button type="button" class="gp-peca" data-a="gp-ex-poe" data-n="' + i + '">' + t + '</button>'; }).join('') + '</div>'
    + (conf ? '<p class="' + (certo ? 'aprova' : 'recusa') + '">' + (certo ? 'Right! Now say it out loud, three times.' : 'Not yet. Look at the card again and try.') + '</p>' : '')
    + '<div class="pratos-bt">' + (sel.length === y.blocos.length && !certo ? '<button type="button" class="btn cheio" data-a="gp-ex-conf">Check</button>' : '')
    + (sel.length ? '<button type="button" class="btn" data-a="gp-ex-limpa">Clear</button>' : '')
    + (m < M.length - 1 ? '<button type="button" class="btn" data-a="gp-ex-prox">Next sentence</button>' : '') + '</div>'
    + mostra('ex' + m, y.certo, 0) + '</div>';
  return cab(c) + abas + '<div class="mesa-c"><div class="lado-l">' + gpCartao(x, 1) + '</div><div class="lado-l">' + monta
    + '<p class="so-prof dica-aluno">Leia o cartão COM o aluno, bloco por bloco: o inglês em cima, o português embaixo. Depois ele monta a frase tocando nos blocos e fala em voz alta.</p></div></div>';
};
function gpNorm(s) { return String(s).toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9',.?-]+/g, ' ').replace(/\s+/g, ' ').trim(); }
TOQUES['gp-ex'] = function (b, n) { S.gp.ex.n = n; };
TOQUES['gp-ex-poe'] = function (b, n) { var e = S.gp.ex, m = e.m; e.sel[m] = (e.sel[m] || []).concat([n]); e.conf[m] = 0; };
TOQUES['gp-ex-tira'] = function (b, n) { var e = S.gp.ex, m = e.m; e.sel[m] = (e.sel[m] || []).filter(function (i) { return i !== n; }); e.conf[m] = 0; };
TOQUES['gp-ex-limpa'] = function () { var e = S.gp.ex; e.sel[e.m] = []; e.conf[e.m] = 0; };
TOQUES['gp-ex-conf'] = function () { S.gp.ex.conf[S.gp.ex.m] = 1; };
TOQUES['gp-ex-prox'] = function () { S.gp.ex.m++; };

/* ---------- O SIMULADOR: Exchange (fila) · SWIFT Monitor · Unit (liquidação) ---------- */
var GP_ABAS = [['exchange', 'EXCHANGE', 'The queue'], ['swift', 'SWIFT MONITOR', 'The message'], ['unit', 'UNIT', 'Pay and settle'], ['fx', 'FX DESK', 'Rates'], ['docs', 'DOCUMENTS', 'The papers']];
var GP_ABRE = { swift: 3, unit: 4, fx: 9, docs: 10 };
function gpSimTela() {
  var Z = window.SIM, e = S.gp.sim, mods = Z.mods;
  var bar = '<div class="gp-sim-bar"><span class="gp-logo" aria-hidden="true"><i></i></span><nav>' + GP_ABAS.map(function (a) {
    var livre = mods.indexOf(a[0]) >= 0;
    return '<button type="button" class="gp-sim-aba' + (e.aba === a[0] ? ' on' : '') + (livre ? '' : ' fechada') + '"' + (livre ? ' data-a="gp-sim-aba" data-v="' + a[0] + '"' : ' disabled') + '><b>' + a[1] + '</b><small>' + (livre ? a[2] : 'Lesson ' + GP_ABRE[a[0]]) + '</small></button>';
  }).join('') + '</nav><span class="gp-user">analyst01 · MON 11 MAY · ' + gpDiz(Z.hora || '9:14 AM', gpHora(Z.hora || '9:14 AM')) + '</span></div>';
  var corpo = e.aba === 'swift' ? gpSwift() : e.aba === 'unit' ? gpUnit() : e.aba === 'fx' ? gpFx() : e.aba === 'docs' ? gpDocs() : gpExchange();
  return '<div class="gp-sim" lang="en">' + bar + '<div class="gp-sim-corpo">' + corpo + '</div></div>';
}
function gpExchange() {
  var Z = window.SIM, e = S.gp.sim;
  var lista = Z.ops.filter(function (r) { var o = gpOp(r); return (e.st === 'ALL' || o.st === e.st) && (e.ccy === 'ALL' || o.ccy === e.ccy); });
  var filtros = '<div class="gp-filtros"><div><small>STATUS</small>' + GP_ST.map(function (s) { return '<button type="button" class="gp-f' + (e.st === s ? ' on' : '') + '" data-a="gp-sim-st" data-v="' + s + '">' + s + '</button>'; }).join('') + '</div>'
    + '<div><small>CCY</small>' + GP_CCY.map(function (s) { return '<button type="button" class="gp-f' + (e.ccy === s ? ' on' : '') + '" data-a="gp-sim-ccy" data-v="' + s + '">' + s + '</button>'; }).join('') + '</div></div>';
  var tab = '<div class="gp-tab-wrap"><table class="gp-tab"><thead><tr><th>REF</th><th>AMOUNT</th><th>CCY</th><th>VALUE DATE</th><th>BENEFICIARY</th><th>STATUS</th></tr></thead><tbody>'
    + (lista.length ? lista.map(function (r) { var o = gpOp(r); return '<tr class="' + (e.sel === r ? 'on' : '') + '" data-a="gp-sim-abre" data-v="' + r + '"><td><button type="button" class="gp-ref gp-num" data-diz="' + h(gpRefDiz(r)) + '" data-a="gp-sim-abre" data-v="' + r + '">' + r + '</button></td><td class="num">' + gpAmt(o) + '</td><td>' + o.ccy + '</td><td>' + gpVd(o.vd) + '</td><td>' + o.ben + '</td><td>' + gpBadge(o.st) + '</td></tr>'; }).join('')
      : '<tr><td colspan="6" class="gp-nada">No operations.</td></tr>') + '</tbody></table></div>'
    + '<p class="gp-rodape">Showing ' + lista.length + ' of ' + Z.ops.length + ' operations</p>';
  var det = '';
  if (e.sel) {
    var o = gpOp(e.sel), mods = Z.mods;
    det = '<div class="gp-det-caixa"><div class="gp-det-cab"><b>' + gpRef(e.sel) + '</b>' + gpBadge(o.st) + '<button type="button" class="gp-x" data-a="gp-sim-abre" data-v="" aria-label="Close">×</button></div><div class="gp-det">'
      + [['Amount', gpAmt(o)], ['Currency', o.ccy], ['Value date', gpVd(o.vd)], ['Client', o.ord], ['Beneficiary', o.ben], ['Beneficiary bank', o.bbk]].map(function (l) { return '<div><span>' + l[0] + '</span><b>' + l[1] + '</b></div>'; }).join('')
      + '</div><div class="gp-acoes">' + (mods.indexOf('swift') >= 0 ? '<button type="button" class="gp-bt" data-a="gp-sim-aba" data-v="swift">Open in SWIFT Monitor</button>' : '')
      + (mods.indexOf('unit') >= 0 ? '<button type="button" class="gp-bt" data-a="gp-un-sel" data-v="' + e.sel + '">Send to Unit</button>' : '') + '</div></div>';
  }
  return (Z.mods.indexOf('cutoff') >= 0 ? gpCutoffs() : '') + filtros + tab + det;
}
function gpSwift() {
  var Z = window.SIM, e = S.gp.sim, mx = e.fmt === 'mx';
  if (!e.sel) return '<p class="gp-dica">Choose a message.</p><div class="gp-msgs">' + Z.ops.map(function (r) { var o = gpOp(r); return '<button type="button" class="gp-msg" data-a="gp-sim-abre" data-v="' + r + '"><b>' + r + '</b><span>MT103 · ' + o.ccy + ' ' + gpAmt(o) + '</span>' + gpBadge(o.st) + '</button>'; }).join('') + '</div>';
  var o = gpOp(e.sel), rcv = o.int || o.bbic;
  var head = '<div class="gp-sw-cab"><div><small>MESSAGE</small><b>' + (mx ? 'pacs.008 · FI to FI Customer Credit Transfer' : 'MT103 · Single Customer Credit Transfer') + '</b></div>'
    + '<div class="gp-fmt"><button type="button" class="gp-f' + (mx ? '' : ' on') + '" data-a="gp-sim-fmt" data-v="mt">MT103</button><button type="button" class="gp-f' + (mx ? ' on' : '') + '" data-a="gp-sim-fmt" data-v="mx">pacs.008</button></div></div>'
    + '<div class="gp-det gp-sr"><div><span>Sender</span><b>' + o.snd + '</b></div><div><span>Receiver</span><b>' + rcv + '</b></div><div><span>Reference</span><b>' + e.sel + '</b></div></div>';
  var campos = '<div class="gp-campos">' + GP_CAMPOS.map(function (f) {
    return '<button type="button" class="gp-campo' + (e.campo === f.k ? ' on' : '') + '" data-a="gp-sim-campo" data-v="' + f.k + '"><span class="gp-tag">' + (mx ? f.mx : f.mt) + '</span><span class="gp-cn">' + (mx ? '' : f.mtn) + '</span><b>' + (f.k === 'amt' ? gpDiz(f.v(e.sel, o, mx), gpData(o.vd) + ', ' + gpValor(o.amt, o.ccy)) : f.k === 'ref' ? gpRef(e.sel) : f.v(e.sel, o, mx)) + '</b></button>';
  }).join('') + '</div>';
  var f = GP_CAMPOS.filter(function (x) { return x.k === e.campo; })[0];
  var expl = f ? '<div class="gp-campo-ex"><small>' + (mx ? f.mx : f.mt + ' ' + f.mtn) + '</small><p>' + f.en + '</p>' + gpPt(f.pt) + '</div>' : '<p class="gp-dica">Tap a field.</p>';
  return head + campos + expl + '<div class="gp-acoes"><button type="button" class="gp-bt" data-a="gp-sim-aba" data-v="exchange">Back to the queue</button></div>';
}
function gpUnit() {
  var Z = window.SIM, e = S.gp.sim, u = e.un;
  var lista = Z.ops.filter(function (r) { var st = gpOp(r).st; return st !== 'RELEASED' && st !== 'CANCELLED'; });
  var esq = '<div class="gp-un-lista"><small>TO SETTLE</small>' + lista.map(function (r) { var o = gpOp(r); return '<button type="button" class="gp-msg' + (u.sel === r ? ' on' : '') + '" data-a="gp-un-sel" data-v="' + r + '"><b>' + r + '</b><span>' + o.ccy + ' ' + gpAmt(o) + '</span>' + gpBadge(o.st) + '</button>'; }).join('') + '</div>';
  var dir;
  if (!u.sel) dir = '<p class="gp-dica">Select a payment.</p>';
  else {
    var o = gpOp(u.sel), passos = ['Select', 'Confirm', 'Settle'];
    dir = '<div class="gp-passos">' + passos.map(function (p, i) { return '<span class="' + (i < u.passo ? 'foi' : i === u.passo ? 'on' : '') + '"><b>' + (i + 1) + '</b>' + p + '</span>'; }).join('') + '</div>'
      + '<div class="gp-det">' + [['Reference', gpRef(u.sel)], ['Amount', o.ccy + ' ' + gpAmt(o)], ['Value date', gpVd(o.vd)], ['Beneficiary', o.ben], ['Beneficiary bank BIC', o.bbic]].map(function (l) { return '<div><span>' + l[0] + '</span><b>' + l[1] + '</b></div>'; }).join('') + '</div>';
    if (u.passo === 3) dir += '<div class="gp-banner ok"><b>SETTLED</b><span>' + u.sel + ' · ' + o.ccy + ' ' + o.amt + ' · Status: RELEASED</span></div>';
    else if (u.cancela === 2) dir += '<div class="gp-banner"><b>CANCELLED</b><span>' + u.sel + ' is cancelled.</span></div>';
    else if (u.cancela === 1) dir += '<div class="gp-banner aviso"><b>CANCEL THIS PAYMENT?</b><span>You can’t undo it.</span><div class="gp-acoes"><button type="button" class="gp-bt perigo" data-a="gp-un-cancela" data-v="2">Yes, cancel</button><button type="button" class="gp-bt" data-a="gp-un-cancela" data-v="0">No</button></div></div>';
    else if (u.erro) {
      var E = GP_ERROS[u.erro];
      dir += '<div class="gp-banner erro"><b>ERROR · ' + E[0] + '</b><span>' + E[1] + '</span>' + gpPt(E[2]);
      if (u.erro === 'bic') dir += u.fix ? '<div class="gp-fix"><small>CHOOSE THE RIGHT BIC</small>' + o.opcoes.map(function (b) { return '<button type="button" class="gp-f" data-a="gp-un-bic" data-v="' + b + '">' + b + '</button>'; }).join('') + '</div>' : '<div class="gp-acoes"><button type="button" class="gp-bt" data-a="gp-un-fix">Edit BIC</button></div>';
      if (u.erro === 'missing' && Z.anexo) dir += '<div class="gp-acoes"><button type="button" class="gp-bt" data-a="gp-un-anexo">Attach invoice (received)</button></div>';
      dir += '</div>';
    }
    if (u.passo < 3 && u.cancela !== 2) dir += '<div class="gp-acoes">'
      + (u.passo <= 1 ? '<button type="button" class="gp-bt cheio" data-a="gp-un-passo" data-v="confirm">Confirm</button>' : '')
      + (u.passo === 2 && !u.erro ? '<button type="button" class="gp-bt cheio" data-a="gp-un-passo" data-v="settle">Settle</button>' : '')
      + (u.erro === 'bic' && u.bicOk ? '<button type="button" class="gp-bt cheio" data-a="gp-un-passo" data-v="submit">Submit</button>' : '')
      + (u.cancela ? '' : '<button type="button" class="gp-bt perigo" data-a="gp-un-cancela" data-v="1">Cancel</button>') + '</div>';
  }
  return '<div class="gp-un">' + esq + '<div class="gp-un-dir">' + dir + '</div></div>';
}
function gpMissaoFeita(m, i) { return !!S.gp.sim.ok[i] || (m.alvo && m.alvo.t !== 'prof' && gpTem(m.alvo.t, m.alvo.v)); }
R.simulador = function (c) {
  var Z = window.SIM, e = S.gp.sim, M = Z.missoes, n = Math.min(e.m, M.length - 1), m = M[n], feita = gpMissaoFeita(m, n);
  var lado = '<div class="mesa-card gp-missao' + (feita ? ' feita' : '') + '"><small>MISSION ' + (n + 1) + ' OF ' + M.length + '</small>'
    + '<p class="pq">' + m.q + '</p>' + gpPt(m.pt)
    + (feita ? '<p class="gp-feito"><b>DONE</b> Now say it out loud.</p>' : '<p class="gp-faz">Do it on the screen.</p>')
    + fala('sim' + n, m.st, []) + mostra('sim' + n, m.r, 0)
    + '<div class="pratos-bt">' + (feita ? '' : '<button type="button" class="btn so-prof" data-a="gp-m-ok">Mark as done</button>')
    + (n < M.length - 1 ? '<button type="button" class="btn' + (feita ? ' cheio' : '') + '" data-a="gp-m-prox">Next mission</button>' : (feita ? '<p class="aprova">' + (Z.fim || 'Every mission done. You can use the system in English.') + '</p>' : '')) + '</div>'
    + (m.prof ? '<p class="so-prof dica-aluno">' + m.prof + '</p>' : '') + '</div>';
  return cab(c) + trilha(M, n) + '<div class="gp-simgrid"><div>' + gpSimTela() + '</div><div class="lado-l">' + lado + '</div></div>';
};
TOQUES['gp-sim-aba'] = function (b, n, v) { S.gp.sim.aba = v; gpLog('aba', v); };
TOQUES['gp-sim-st'] = function (b, n, v) { S.gp.sim.st = v; gpLog('filtro', v); };
TOQUES['gp-sim-ccy'] = function (b, n, v) { S.gp.sim.ccy = v; gpLog('ccy', v); };
TOQUES['gp-sim-abre'] = function (b, n, v) { var e = S.gp.sim; e.sel = v; if (v) { gpLog('abre', v); if (e.aba === 'swift') gpLog('swift', v); } };
TOQUES['gp-sim-fmt'] = function (b, n, v) { S.gp.sim.fmt = v; gpLog('fmt', v); if (S.gp.sim.campo) gpLog('campo-' + v, S.gp.sim.campo); };
TOQUES['gp-sim-campo'] = function (b, n, v) { var e = S.gp.sim; e.campo = v; gpLog('campo', v); gpLog('campo-' + e.fmt, v); };
/* o Open in SWIFT Monitor também conta como “abrir no SWIFT” */
var gpAbaVelha = TOQUES['gp-sim-aba'];
TOQUES['gp-sim-aba'] = function (b, n, v) { gpAbaVelha(b, n, v); if (v === 'swift' && S.gp.sim.sel) gpLog('swift', S.gp.sim.sel); };
TOQUES['gp-un-sel'] = function (b, n, v) { var e = S.gp.sim; e.aba = 'unit'; gpLog('aba', 'unit'); e.un = { sel: v, passo: 1, fix: 0, anexo: 0, cancela: 0 }; gpLog('unsel', v); };
TOQUES['gp-un-passo'] = function (b, n, v) {
  var e = S.gp.sim, u = e.un, o = gpOp(u.sel);
  if (v === 'confirm') {
    u.passo = 2; gpLog('confirm', u.sel);
    var err = o.un === 'missing' && (u.anexo || o.rmt !== 'INVOICE (MISSING)') ? '' : o.un === 'bic' && (u.bicOk || o.bbic === o.certo) ? '' : o.un;
    u.erro = err || ''; if (err) gpLog('erro', u.sel);
  } else if (v === 'submit') { u.erro = ''; gpLog('fix', u.sel); }
  else if (v === 'settle') { u.passo = 3; e2(u.sel, { st: 'RELEASED' }); gpLog('settle', u.sel); }
};
TOQUES['gp-un-fix'] = function () { S.gp.sim.un.fix = 1; };
TOQUES['gp-un-bic'] = function (b, n, v) { var u = S.gp.sim.un, o = gpOp(u.sel); if (v === o.certo) { u.bicOk = 1; u.fix = 0; e2(u.sel, { bbic: v }); } else { u.fix = 1; u.tentou = v; } };
function e2(r, x) { var m = S.gp.sim.muda[r] = S.gp.sim.muda[r] || {}; for (var k in x) m[k] = x[k]; }
TOQUES['gp-un-anexo'] = function () { var u = S.gp.sim.un; u.anexo = 1; u.erro = ''; e2(u.sel, { rmt: 'INVOICE 7795' }); gpLog('anexo', u.sel); };
TOQUES['gp-un-cancela'] = function (b, n, v) { var u = S.gp.sim.un; u.cancela = +v; if (+v === 2) { e2(u.sel, { st: 'CANCELLED' }); gpLog('cancel', u.sel); } };
TOQUES['gp-m-ok'] = function () { S.gp.sim.ok[S.gp.sim.m] = 1; };

/* ---------- Unidade 2 (03/11): horários de cut-off, mesa de câmbio e documentos ---------- */
var GP_CUT = [['USD', '4:00 PM'], ['EUR', '12:00 PM'], ['GBP', '1:30 PM'], ['JPY', '9:00 AM'], ['BRL', '5:00 PM']];
function gpMin(hh) { var m = String(hh).match(/(\d+):(\d+)\s*(AM|PM)/); if (!m) return 0; var hr = +m[1] % 12 + (m[3] === 'PM' ? 12 : 0); return hr * 60 + +m[2]; }
function gpHora(hh) {
  var m = String(hh).match(/(\d+):(\d+)\s*(AM|PM)/); if (!m) return hh;
  if (m[1] === '12' && m[2] === '00') return m[3] === 'PM' ? 'twelve noon' : 'midnight';
  var mm = +m[2]; return gpPorExtenso(+m[1]) + (mm ? ' ' + (mm < 10 ? 'oh ' + GP_UM[mm] : gpPorExtenso(mm)) : '') + ' ' + (m[3] === 'AM' ? 'a.m.' : 'p.m.');
}
function gpCutoffs() {
  var Z = window.SIM, agora = gpMin(Z.hora || '9:14 AM');
  return '<div class="gp-cuts"><small>CUT-OFF TIMES · TODAY</small><div>' + GP_CUT.map(function (c) {
    var aberto = gpMin(c[1]) > agora;
    return '<button type="button" class="gp-cut' + (S.gp.sim.cut === c[0] ? ' on' : '') + '" data-a="gp-sim-cut" data-v="' + c[0] + '"><b>' + c[0] + '</b>' + gpDiz(c[1], gpHora(c[1])) + '<i class="' + (aberto ? 'ab' : 'fe') + '">' + (aberto ? 'OPEN' : 'CLOSED') + '</i></button>';
  }).join('') + '</div></div>';
}
TOQUES['gp-sim-cut'] = function (b, n, v) { S.gp.sim.cut = v; gpLog('cut', v); };
/* a mesa de câmbio: cotações (o banco compra / o banco vende) e a boleta */
var GP_FX = [['USD/BRL', '5.4120', '5.4380'], ['EUR/BRL', '5.8950', '5.9310'], ['GBP/BRL', '6.8710', '6.9150'], ['JPY/BRL', '0.0352', '0.0360']];
function gpTaxaDiz(x) { var p = String(x).split('.'); return gpPorExtenso(+p[0]) + ' point ' + p[1].split('').map(function (d) { return d === '0' ? 'zero' : GP_UM[+d]; }).join(' '); }
function gpTaxa(x) { return gpDiz(x, gpTaxaDiz(x)); }
function gpFmt(n, dec) { var p = n.toFixed(dec).split('.'); return p[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (p[1] ? '.' + p[1] : ''); }
function gpFx() {
  var e = S.gp.sim, f = e.fx = e.fx || { par: '', lado: '', qt: 0, feito: 0 };
  var tab = '<div class="gp-tab-wrap"><table class="gp-tab"><thead><tr><th>PAIR</th><th>WE BUY</th><th>WE SELL</th><th>SPREAD</th></tr></thead><tbody>' + GP_FX.map(function (r) {
    var sp = (parseFloat(r[2]) - parseFloat(r[1])).toFixed(4);
    return '<tr class="' + (f.par === r[0] ? 'on' : '') + '" data-a="gp-fx-par" data-v="' + r[0] + '"><td><b>' + r[0] + '</b></td><td class="num">' + gpTaxa(r[1]) + '</td><td class="num">' + gpTaxa(r[2]) + '</td><td class="num">' + gpTaxa(sp) + '</td></tr>';
  }).join('') + '</tbody></table></div><p class="gp-rodape">Rates for clients · updated 9:14 AM · tap a pair</p>';
  var bol = '<div class="gp-det-caixa"><div class="gp-det-cab"><b>DEAL TICKET</b>' + (f.feito ? '<span class="gp-st st-released">BOOKED · FXD-3001</span>' : '') + '</div>';
  if (!f.par) bol += '<p class="gp-dica">Choose a currency pair.</p>';
  else {
    var r = GP_FX.filter(function (x) { return x[0] === f.par; })[0], ccy = f.par.slice(0, 3);
    bol += '<div class="gp-acoes"><button type="button" class="gp-f' + (f.lado === 'buy' ? ' on' : '') + '" data-a="gp-fx-lado" data-v="buy">CLIENT BUYS ' + ccy + '</button><button type="button" class="gp-f' + (f.lado === 'sell' ? ' on' : '') + '" data-a="gp-fx-lado" data-v="sell">CLIENT SELLS ' + ccy + '</button></div>';
    if (f.lado) {
      bol += '<div class="gp-acoes">' + [10000, 25000, 100000].map(function (q) { return '<button type="button" class="gp-f' + (f.qt === q ? ' on' : '') + '" data-a="gp-fx-qt" data-n="' + q + '">' + ccy + ' ' + gpFmt(q, 0) + '</button>'; }).join('') + '</div>';
      if (f.qt) {
        var taxa = f.lado === 'buy' ? r[2] : r[1], brl = f.qt * parseFloat(taxa);
        bol += '<div class="gp-det"><div><span>Client</span><b>' + (f.lado === 'buy' ? 'buys' : 'sells') + ' ' + ccy + '</b></div><div><span>Amount</span><b>' + gpDiz(gpFmt(f.qt, 2), gpValor(gpFmt(f.qt, 2), ccy)) + '</b></div><div><span>Rate</span><b>' + gpTaxa(taxa) + '</b></div><div><span>Total in BRL</span><b>' + gpDiz(gpFmt(brl, 2), gpValor(gpFmt(brl, 2), 'BRL')) + '</b></div></div>'
          + (f.feito ? '' : '<div class="gp-acoes"><button type="button" class="gp-bt cheio" data-a="gp-fx-book">Book the deal</button></div>');
      }
    }
  }
  return tab + bol + '</div>';
}
TOQUES['gp-fx-par'] = function (b, n, v) { S.gp.sim.fx = { par: v, lado: '', qt: 0, feito: 0 }; gpLog('par', v); };
TOQUES['gp-fx-lado'] = function (b, n, v) { var f = S.gp.sim.fx; f.lado = v; f.feito = 0; gpLog('lado', v); };
TOQUES['gp-fx-qt'] = function (b, n) { var f = S.gp.sim.fx; f.qt = n; f.feito = 0; gpLog('qt', String(n)); };
TOQUES['gp-fx-book'] = function () { var f = S.gp.sim.fx; f.feito = 1; gpLog('deal', f.par); gpLog('deal-' + f.lado, f.par); };
/* os documentos de cada operação (pagamento de importação) */
var GP_DOC_NOMES = [['inv', 'Commercial invoice'], ['pro', 'Proforma invoice'], ['bl', 'Bill of lading'], ['fxc', 'FX contract'], ['di', 'Import declaration']];
var GP_DOCS = { 'FX-20481': { di: 'M' }, 'FX-20482': { inv: 'M' }, 'FX-20486': { bl: 'M', di: 'M' }, 'FX-20488': { pro: 'M', bl: 'M' } };
var GP_DOC_EN = { inv: 'The final bill from the supplier: what we buy and the price.', pro: 'The first bill, before the sale. It is not final.', bl: 'The paper from the ship: the goods are on the ship.', fxc: 'The contract between the client and the bank to buy the foreign currency.', di: 'The paper for customs: the goods enter Brazil.' };
var GP_DOC_PT = { inv: 'Fatura comercial: a conta final do fornecedor.', pro: 'Fatura proforma: a conta prévia, antes da venda.', bl: 'Conhecimento de embarque: prova de que a mercadoria está no navio.', fxc: 'Contrato de câmbio: o acordo do cliente com o banco para comprar a moeda.', di: 'Declaração de importação (DI / DUIMP): o documento da alfândega.' };
function gpDocSt(r, k) { var m = (S.gp.sim.docs || {})[r + k]; return m || (GP_DOCS[r] || {})[k] || 'R'; }
function gpDocs() {
  var Z = window.SIM, e = S.gp.sim;
  var esq = '<div class="gp-un-lista"><small>OPERATIONS</small>' + Z.ops.map(function (r) {
    var falta = GP_DOC_NOMES.filter(function (d) { return gpDocSt(r, d[0]) === 'M'; }).length;
    return '<button type="button" class="gp-msg' + (e.dsel === r ? ' on' : '') + '" data-a="gp-doc-sel" data-v="' + r + '"><b>' + r + '</b><span>' + (falta ? falta + ' missing' : 'complete') + '</span>' + (falta ? '<span class="gp-st st-on-hold">MISSING</span>' : '<span class="gp-st st-released">OK</span>') + '</button>';
  }).join('') + '</div>';
  var nome = e.dver ? GP_DOC_NOMES.filter(function (d) { return d[0] === e.dver; })[0][1] : '';
  var dir = !e.dsel ? '<p class="gp-dica">Select an operation.</p>' : '<div class="gp-docs">' + GP_DOC_NOMES.map(function (d) {
    var st = gpDocSt(e.dsel, d[0]);
    return '<div class="gp-doc' + (e.dver === d[0] ? ' on' : '') + '"><button type="button" class="gp-doc-n" data-a="gp-doc-ver" data-v="' + d[0] + '"><b>' + d[1] + '</b></button>'
      + (st === 'R' ? '<span class="gp-st st-released">RECEIVED</span>' : st === 'P' ? '<span class="gp-st st-pending">REQUESTED</span>' : '<span class="gp-st st-on-hold">MISSING</span><button type="button" class="gp-bt" data-a="gp-doc-pede" data-v="' + d[0] + '">Request</button>') + '</div>';
  }).join('') + '</div>' + (e.dver ? '<div class="gp-campo-ex"><small>' + nome.toUpperCase() + '</small><p>' + GP_DOC_EN[e.dver] + '</p>' + gpPt(GP_DOC_PT[e.dver]) + '</div>' : '');
  return '<div class="gp-un">' + esq + '<div class="gp-un-dir">' + dir + '</div></div>';
}
TOQUES['gp-doc-sel'] = function (b, n, v) { var e = S.gp.sim; e.dsel = v; e.dver = ''; gpLog('dsel', v); };
TOQUES['gp-doc-ver'] = function (b, n, v) { S.gp.sim.dver = v; gpLog('doc', v); };
TOQUES['gp-doc-pede'] = function (b, n, v) { var e = S.gp.sim; e.docs = e.docs || {}; e.docs[e.dsel + v] = 'P'; gpLog('pede', e.dsel + ':' + v); };

TOQUES['gp-m-prox'] = function () { S.gp.sim.m++; };

/* ---------- Screen Check (fim de unidade): tela nova, 10 itens ---------- */
R.check = function (c) {
  var K = window.CHECK, o = gpOp(K.ref), e = S.gp.ck, n = K.itens.filter(function (t, i) { return e[i]; }).length;
  var tela = '<div class="gp-sim gp-mini" lang="en"><div class="gp-sim-bar"><b>EXCHANGE</b><span>' + K.ref + '</span></div><div class="gp-det">'
    + [['Reference', gpRef(K.ref)], ['Status', gpBadge(o.st)], ['Amount', gpAmt(o)], ['Currency', o.ccy], ['Value date', gpVd(o.vd)], ['Beneficiary', o.ben], ['Beneficiary bank', o.bbk + ' · ' + o.bbic], ['Intermediary', o.intn ? o.intn + ' · ' + o.int : '(none)'], ['Remittance', o.rmt]].map(function (l) { return '<div><span>' + l[0] + '</span><b>' + l[1] + '</b></div>'; }).join('') + '</div></div>';
  var lista = '<div class="pode-lista">' + K.itens.map(function (t, i) { return '<button type="button" class="pode' + (e[i] ? ' on' : '') + '" data-a="gp-ck" data-n="' + i + '"><i aria-hidden="true"></i><span>' + t + '</span></button>'; }).join('') + '</div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + tela + mostra('ck', K.modelo, 1) + '<p class="so-prof dica-aluno">' + K.prof + '</p></div><div class="lado-l"><div class="carimbo-u' + (n >= 7 ? ' dado' : '') + '"><small>SCREEN CHECK · UNIT ' + REV.unidade + '</small><b>' + n + ' / ' + K.itens.length + '</b><span>Goal: 7 of 10</span></div>' + lista + '</div></div>';
};
TOQUES['gp-ck'] = function (b, n) { S.gp.ck[n] = !S.gp.ck[n]; };

/* ---------- o botão PT do aluno + as siglas do professor (peças: rodam depois de cada pintura) ---------- */
TOQUES['gp-pt'] = function () { S.gp.pt = S.gp.pt ? 0 : 1; };
var GP_SIG_ABERTA = '';
function gpSigCard(id) { var g = GP_GLOSS[id]; return g ? gpCartao(g, 0) : ''; }
(window.WL_PECAS = window.WL_PECAS || []).push(function (palco, c) {
  var cabEl = palco.querySelector('.cab');
  if (cabEl && c.k !== 'capa' && !cabEl.querySelector('.gp-ptb')) {
    cabEl.insertAdjacentHTML('beforeend', '<button type="button" class="gp-ptb' + (S.gp.pt ? ' on' : '') + '" data-a="gp-pt" aria-pressed="' + (S.gp.pt ? 'true' : 'false') + '" title="Dica em português">PT</button>'
      + (S.gp.pt && (window.PT || {})[c.k] ? '<p class="gp-ptx gp-ptcena" lang="pt-BR"><b>PT</b><span>' + PT[c.k] + '</span></p>' : ''));
  }
  var sig = (GP_SIG_CENA[c.k] || c.sig || []).filter(function (id) { return GP_GLOSS[id]; });
  if (cabEl && sig.length && !palco.querySelector('.gp-sig')) {
    cabEl.insertAdjacentHTML('afterend', '<div class="gp-sig so-prof" lang="pt-BR"><small>SIGLAS DESTA TELA · SÓ VOCÊ VÊ</small>' + sig.map(function (id) {
      return '<button type="button" class="gp-sigb' + (GP_SIG_ABERTA === id ? ' on' : '') + '" data-gp-sig="' + id + '"><b>' + GP_GLOSS[id].tile + '</b><span>' + GP_GLOSS[id].titulo + '</span></button>';
    }).join('') + (GP_SIG_ABERTA && sig.indexOf(GP_SIG_ABERTA) >= 0 ? '<div class="gp-sig-card">' + gpSigCard(GP_SIG_ABERTA) + '</div>' : '') + '</div>');
  }
  gpNotas(c, sig);
  /* aula 5 e prática em casa: #sim abre direto no simulador */
  if (c.k === 'pode' && !palco.querySelector('.gp-casa')) {
    var hw = palco.querySelector('.hw');
    if (hw) hw.insertAdjacentHTML('beforeend', ' <a class="pilula gp-casa" href="#sim">Practice the simulator again →</a>');
  }
});
function gpNotas(c, sig) {
  var p = document.getElementById('notas'); if (!p) return;
  var box = p.querySelector('.gp-pn');
  if (!box) { box = document.createElement('div'); box.className = 'gp-pn'; var cena = p.querySelector('.pn-cena'); if (cena) cena.insertAdjacentElement('afterend', box); else p.appendChild(box); }
  box.innerHTML = sig.length ? '<h3>Siglas e termos desta cena</h3>' + sig.map(gpSigCard).join('') : '';
}
document.addEventListener('click', function (ev) {
  var b = ev.target.closest && ev.target.closest('[data-gp-sig]'); if (!b) return;
  var id = b.getAttribute('data-gp-sig'); GP_SIG_ABERTA = GP_SIG_ABERTA === id ? '' : id;
  var box = b.closest('.gp-sig'); if (!box) return;
  [].forEach.call(box.querySelectorAll('.gp-sigb'), function (x) { x.classList.toggle('on', x.getAttribute('data-gp-sig') === GP_SIG_ABERTA); });
  var velho = box.querySelector('.gp-sig-card'); if (velho) velho.remove();
  if (GP_SIG_ABERTA) box.insertAdjacentHTML('beforeend', '<div class="gp-sig-card">' + gpSigCard(GP_SIG_ABERTA) + '</div>');
});
/* o painel do professor nasce depois da primeira pintura: repõe as siglas quando ele existir */
setTimeout(function () { var c = L[S.i]; if (c) gpNotas(c, (GP_SIG_CENA[c.k] || c.sig || []).filter(function (id) { return GP_GLOSS[id]; })); }, 400);
/* #sim: abre direto no simulador (prática em casa, link da última cena) */
function gpVaiSim() { if (location.hash !== '#sim') return; for (var i = 0; i < L.length; i++) if (L[i].k === 'simulador') { vai(i); break; } }
window.addEventListener('hashchange', gpVaiSim);
document.addEventListener('DOMContentLoaded', function () { setTimeout(gpVaiSim, 300); });
/* o glossário completo no guia do professor: <div class="gp-glos" data-gp-glos="swift,bic,…"> */
function gpGlossario() { [].forEach.call(document.querySelectorAll('[data-gp-glos]'), function (d) { d.innerHTML = d.getAttribute('data-gp-glos').split(',').map(gpSigCard).join(''); }); }
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', gpGlossario); else gpGlossario();
