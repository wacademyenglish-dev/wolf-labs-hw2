/* As regras do corretor desta aula (nível 3): comparativos duplos e multiplicadores. Frase que começa com "More/Less + sujeito … , more/less" sem THE; "the more/-er …, more/less/-er" (segundo THE caiu); "the most/the least" na segunda metade; "times more long/fast/big…" e "more long/big/good/fast/soon" depois de THE; "the less + plural" fica como dica (fewer) só em messages/things/emails/clients/people. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/^\s*((?:more|less|longer|sooner|later|bigger|faster) (?:you|i|we|they|he|she|the|people)\b[^,]*,)/g, m, 1, 'Two THEs: THE more you …, THE more …'));
  out = out.concat(A(/\b(the (?:more|less|\w+er)\b[^,]{1,40}, (?:more|less|worse|\w+er)) (?!than)/g, m, 1, 'The second THE: the more …, THE less …'));
  out = out.concat(A(/\b(the (?:more|less|\w+er)\b[^,]{1,40}, the (?:most|least))\b/g, m, 1, 'Not most / least: the more …, the MORE / the LESS.'));
  out = out.concat(A(/\b((?:times|the) more (?:long|fast|big|good|soon|short|bad|late|cheap|small|old|young|high|easy))\b/g, m, 1, 'Short adjectives take -ER: longer, faster, bigger, better.'));
  out = out.concat(A(/\b(the less (?:messages|things|emails|clients|people|mistakes|tasks))\b/g, m, 1, 'With plural nouns: the FEWER messages.'));
  return out;
};
