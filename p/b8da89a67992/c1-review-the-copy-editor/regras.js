/* As regras do corretor da revisão The Copy Editor. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(strong (?:rain|traffic|smoker))\b/gi, m, 1, "heavy rain / traffic / smoker."));
  out = out.concat(A(/\b((?:take|took|taken|taking) (?:a |some |the )?conclusions?)\b/gi, m, 1, "draw a conclusion."));
  out = out.concat(A(/\b(very very \w+)\b/gi, m, 1, "One precise word: bitterly cold, eerily quiet."));
  out = out.concat(A(/\b(and stuff)\b/gi, m, 1, "In writing: be specific."));
  return out;
};
