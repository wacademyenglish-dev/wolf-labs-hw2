/* As regras do corretor desta aula (nível 3): a voz passiva. be + passado simples no lugar do particípio ("was stole", "was did", "were gave"); "was stealed"; passiva de verbo que não tem ("was happened", "were came", "was arrived", "was died"); "borned"; be + forma base ("was test"). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:is|are|was|were|be|been|being|am) (?:stole|did|gave|took|wrote|ate|broke|chose|drove|spoke|forgot|went|saw|knew|threw|shook|hid|bit|rode)\b)(?! up\b)/g, m, 1, 'BE + the third form: stolen, done, given, taken, written.'));
  out = out.concat(A(/\b((?:is|are|was|were|be|been) (?:stealed|taked|gived|writed|eated|breaked|maked))\b/g, m, 1, 'Irregular third form: stolen, taken, given, written, eaten, broken, made.'));
  out = out.concat(A(/\b((?:is|are|was|were|be|been) (?:happened|came|come|arrived|died|occurred))\b(?! (?:to|from|by|out of)\b)/g, m, 1, 'happen, come, arrive and die have no passive: it happened.'));
  out = out.concat(A(/\b(borned|was bear|were bear)\b/g, m, 1, 'There’s no verb “to born”: I was born.'));
  out = out.concat(A(/\b((?:is|are|was|were) (?:test|destroy|publish|measure|judge|ban|give|take|steal|do|make|show|tell|ask|teach|invite|help|release|use)) (?!to\b)/g, m, 1, 'BE + the third form: tested, published, measured.'));
  return out;
};
