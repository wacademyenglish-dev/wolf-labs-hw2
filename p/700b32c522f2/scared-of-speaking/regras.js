/* As regras do corretor desta aula (nível 2): adjetivo + preposição certa + -ing (good at, scared of, tired of, nervous about, interested in, worried about, proud of). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(good (?:in|on))\s+\w+ing\b/g, m, 1, 'good AT: good at reading.'));
  out = out.concat(A(/\b(interested (?:on|about|for))\b/g, m, 1, 'interested IN.'));
  out = out.concat(A(/\b(nervous (?:for|with|of))\s+\w+/g, m, 1, 'nervous ABOUT.'));
  out = out.concat(A(/\b(tired (?:from|with))\s+\w+ing\b/g, m, 1, 'Fed up: tired OF waiting.'));
  out = out.concat(A(/\b(scared (?:from|with)|afraid (?:from|with))\b/g, m, 1, 'scared OF / afraid OF.'));
  out = out.concat(A(/\b(?:good at|scared of|afraid of|tired of|nervous about|interested in|worried about|proud of|bad at)\s+(to\s+\w+|speak|cook|read|write|fly|drive|answer|swim|learn|wait|sing|dance|talk|play|work|travel|call|lose|meet)\b/g, m, 1, 'After the small word: -ing (speaking, cooking…).'));
  return out;
};
