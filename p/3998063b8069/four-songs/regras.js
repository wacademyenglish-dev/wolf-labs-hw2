/* As regras do corretor desta aula (nível 2): remind me OF, remember × remind, sounds + adjetivo (sem like), feel like + -ing. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:remind|reminds|reminded)\s+(?:me|you|him|her|us|them)\s+(?!of\b|to\b|that\b|about\b)(\w+)/g, m, 1, 'remind + me + OF: It reminds me of …'));
  out = out.concat(A(/\b(?:it|this song|that song|the song|this|that|they|this one|the smell)\s+(remembers?|remembered)\s+(?:me|you|him|her|us|them)\b/g, m, 1, 'The song reminds you (you remember): It reminds me of …'));
  out = out.concat(A(/\bsounds?\s+(like)\s+(?:good|great|bad|sad|happy|nice|amazing|perfect|beautiful|different|calm|fun|interesting|boring|strange|cool|awesome|terrible|old|new|fast|slow|loud|quiet)\b(?!\s+(?:song|band|party|day|time|idea|place|music))/g, m, 1, 'sounds + an adjective: It sounds good. (like + a noun)'));
  out = out.concat(A(/\bfeel(?:s)?\s+like\s+(to\s+\w+|dance|sing|cry|run|sleep|eat|go|stay|play|listen|watch|clean|walk|cook|drink)\b/g, m, 1, 'feel like + -ing: I feel like dancing.'));
  return out;
};
