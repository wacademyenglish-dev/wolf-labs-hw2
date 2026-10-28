/* As regras do corretor da revisão The Crit. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(you must change)\b/gi, m, 1, "Softer: You could try…"));
  out = out.concat(A(/\b(i just don'?t like it)\b/gi, m, 1, "Give a what and a why."));
  return out;
};
