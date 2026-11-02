/* As regras do corretor desta aula (nível 4): reporting verbs. deny / admit / suggest / avoid + to, deny / admit + verbo base, admit + pessoa, promise / refuse / agree + -ing, to + -ing, blame of / because, accuse to, of / for + verbo base, warn + don't, warn to + pessoa, apologize to + verbo. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:denied|deny|denies|admitted|admit|admits|suggested|avoided) to (?!me\b|him\b|her\b|them\b|us\b|the\b)\w+)/g, m, 1, 'After deny / admit: verb-ing (denied causing).'));
  out = out.concat(A(/\b((?:denied|admitted) (?:cause|know|steal|take|lie|break|eat|be|do|make|hide|sign))\b/g, m, 1, 'After deny / admit: verb-ing (denied causing).'));
  out = out.concat(A(/\b(admitted (?:me|him|her|them|us) that)\b/g, m, 1, 'No person after admit: he admitted (that)…'));
  out = out.concat(A(/\b((?:promised|refused|agreed|decided|offered|threatened) (?!to\b)\w+ing)\b/g, m, 1, 'After promise / refuse: to + verb (promised to fix).', function (x) { return !/(?:nothing|something|anything|everything)$/.test(x[1]); }));
  out = out.concat(A(/\b((?:promised|refused|agreed|decided|offered|threatened) to \w+ing)\b/g, m, 1, 'After to: the base verb (to fix, to sign).', function (x) { return !/to (?:bring|sing)$/.test(x[1]); }));
  out = out.concat(A(/\b((?:promised|refused) (?:me|him|her|them|us) (?!to\b)(?:fix|sign|help|pay|come|call|do|go))\b/g, m, 1, 'After promise: to + verb (promised me to… / promised to fix).'));
  out = out.concat(A(/\b(blamed? (?:\w+ )(?:of|because) )/g, m, 1, 'Blame someone FOR something.'));
  out = out.concat(A(/\b(accused? (?:\w+ )(?:to|for) \w+)/g, m, 1, 'Accuse someone OF + -ing.'));
  out = out.concat(A(/\b((?:accused \w+ of|apologized for|blamed \w+ for) (?:lie|cause|take|steal|break|be|do|make|hide))\b/g, m, 1, 'After of / for: verb-ing (of lying, for causing).'));
  out = out.concat(A(/\b(warned (?:\w+ )?(?:don't|do not))\b/g, m, 1, 'Warn someone (not) to + verb: warned them not to go.'));
  out = out.concat(A(/\b(warned to (?:me|him|her|them|us))\b/g, m, 1, 'Warn someone directly: warned them.'));
  out = out.concat(A(/\b(apologized to (?!me\b|him\b|her\b|them\b|us\b|the\b|everyone\b|everybody\b)\w+)/g, m, 1, 'Apologize FOR + -ing.'));
  return out;
};
