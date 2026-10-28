/* As regras do corretor da revisão Listen and Type. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(wanna|gonna|gotta)\b/gi, m, 1, "Type the written form: want to, going to, got to."));
  out = out.concat(A(/\b(their (?:late|here|coming|going))\b/gi, m, 1, "they’re = they are."));
  return out;
};
