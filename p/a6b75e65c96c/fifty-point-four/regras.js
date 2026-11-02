/* As regras do corretor desta aula (nível 3): present perfect sem tempo terminado; past simple com tempo terminado e com when; terceira forma depois de have. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:i|you|we|they|he|she|it)(?:'ve|'s| have| has)\s+(?:never\s+|already\s+|just\s+)?\w+)\b[^.!?]*\b(?:yesterday|last (?:week|month|year|night|summer|christmas|friday|monday|weekend)|in (?:19|20)\d\d|\w+ ago)\b/g, m, 1, 'A finished time: past simple (I saw it yesterday).'));
  out = out.concat(A(/(?:^|[.!?,])\s*(when\s+(?:have|has))\s+(?:you|he|she|they|we|i|it)\b/g, m, 1, 'WHEN asks about a finished moment: When DID you…?'));
  out = out.concat(A(/\b((?:i|you|we|they|he|she)\s+(?:saw|went|did|ate|wrote|took|deleted|posted|watched|met)\s+never)\b/g, m, 1, 'No finished time: I have never seen…'));
  out = out.concat(A(/\b(?:have|has|'ve|'s)\s+(?:you\s+|he\s+|she\s+|they\s+)?(?:ever\s+|never\s+)?(went|saw|ate|wrote|took|did|began|drank|spoke|broke|forgot|chose|swam|ran|came|gave|knew|rode|sang|stole)\b/g, m, 1, 'After have: the third form (gone, seen, eaten).', function (x) { return !/\bit's\b|\bhe's\b|\bshe's\b/.test(x[0]) || /(?:'s)\s+(?:never|ever)/.test(x[0]); }));
  return out;
};
