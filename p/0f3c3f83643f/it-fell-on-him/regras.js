/* As regras do corretor desta aula (nível 1): object pronouns. O pronome sujeito depois do verbo ou da preposição (falls on he, help I, loves they, asks she), o possessivo no lugar do objeto no fim da frase (on his., asks their a), believe to you, listen we. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var V = '(?:loves?|likes?|hates?|helps?|calls?|sees?|saw|catch(?:es)?|chases?|asks?|tells?|believes?|hits?|misses|beats?|wants?|needs?|knows?|pulls?|takes?|gives?|help|call|love|like|see|watch(?:es)?|eats?|buys?|finds?|meets?|visits?|sends?|thanks?|kisses|hugs?)';
  out = out.concat(A(new RegExp('\\b(' + V + ' (?:i|he|she|we|they))\\b(?! (?:am|is|are|was|were|do|does|did|can|will|have|has|had|want|like|go|love|say|said|think|know|live|need|look|come|work|see))', 'g'), m, 1, 'After the verb: me, him, her, us, them (not I, he, she, we, they).'));
  out = out.concat(A(/\b((?:on|to|at|with|for|from|about) (?:i|he|she|we|they))\b(?! (?:am|is|are|was|were|do|does|did|can|will|have|has|had|go|say|said|know|live|come|want|like))/g, m, 1, 'After on / to / at / with: me, him, her, us, them.'));
  out = out.concat(A(/\b((?:on|to|at|with|for|asks?|helps?|loves?|calls?|catch(?:es)?|eats?|help) (?:his|their|my|our|your|its))(?=\s*[.!?]|\s*$| a | an )/g, m, 1, 'His, my, their go before a thing (his car). After the verb: him, me, them.'));
  out = out.concat(A(/\b(believes? to (?:you|me|him|her|us|them))\b/g, m, 1, 'Believe someone: no to. I believe you.'));
  return out;
};
