/* As regras do corretor da revisão Let Me Rephrase. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(or be)\b(?=,)/gi, m, 1, "“ou seja” = in other words / that is to say."));
  out = out.concat(A(/\b(what I want to say)\b/gi, m, 1, "Natural: what I mean is…"));
  out = out.concat(A(/\b(in other way)\b/gi, m, 1, "in other words / to put it another way."));
  out = out.concat(A(/\b(want to say with)\b/gi, m, 1, "What do you MEAN BY…?"));
  out = out.concat(A(/\b(in another words)\b/gi, m, 1, "in other words."));
  return out;
};
