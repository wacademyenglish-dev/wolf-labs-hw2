/* As regras do corretor da revisão The Pitch. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(wanted that i)\b/gi, m, 1, "wanted ME TO + verb."));
  out = out.concat(A(/\b(on the time)\b/gi, m, 1, "on time (no the)."));
  return out;
};
