/* As regras do corretor desta aula (nível 3): discurso indireto. "said me / said him"; "told that" sem pessoa; "asked did I / asked me where did I"; "asked me if had I"; "said me don't"; "told me to not being". A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:said|say|says|saying) (?:me|him|her|us|them|you)\b)(?! (?:to|that)\b)/g, m, 1, 'SAY has no person: she said … · TELL needs one: she told me …'));
  out = out.concat(A(/\b((?:told|tell|tells) that)\b/g, m, 1, 'TELL needs a person: she told me that …'));
  out = out.concat(A(/\b(asked (?:me |him |her |us |them )?(?:where|what|why|when|how|who|how long|how much)? ?(?:did|do|does) (?:i|you|he|she|we|they|it)\b)/g, m, 1, 'A reported question loses DID: she asked me where I lived.'));
  out = out.concat(A(/\b(asked (?:me |him |her |us |them )?(?:where|what|why|when|how|how long|if) (?:was|were|had|have|is|are|would|could|will|can) (?:i|you|he|she|we|they|it)\b)/g, m, 1, 'Statement order: she asked me why I was there.'));
  out = out.concat(A(/\b(told (?:me|him|her|us|them) (?:to not|don't|don’t)\b)/g, m, 1, 'An order: told me NOT TO …'));
  return out;
};
