/* As regras do corretor da REVISÃO A1 · UNIDADE 9: o tempo sem it (is sunny, makes cold), estar com dor,
   more + adjetivo curto, more good / more bad, verbo + good. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/^((?:is|makes|make) (?:very )?(?:sunny|hot|cold|rainy|windy|warm|cloudy))\b/gi, m, 1, 'The weather: It’s sunny, it’s cold.'));
  out = out.concat(A(/\b((?:I’m|I'm|I am) with (?:a )?(?:headache|fever|cold|stomachache))\b/gi, m, 1, 'I have a headache.'));
  out = out.concat(A(/\b(more (?:big|small|hot|cold|cheap|fast|old|new|nice|tall|short|good|bad))\b/gi, m, 1, 'Short word: -er. bigger, hotter; good → better, bad → worse.'));
  out = out.concat(A(/\b((?:sleep|cook|sing|drive|swim|play|speak|dance|work)s? good)\b/gi, m, 1, 'An action: well. I sleep well.'));
  out = out.concat(A(/\b(the more (?:big|good|bad|small))\b/gi, m, 1, 'the biggest, the best, the worst.'));
  return out;
};