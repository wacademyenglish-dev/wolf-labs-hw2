/* As regras do corretor da revisão My Childcare Experience. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(didn[’']t (?:wanted|went|played|liked|ate|slept))\b/gi, m, 1, "didn’t + base verb: didn’t want."));
  out = out.concat(A(/\b(readed|maked|taked|teached|eated|singed)\b/gi, m, 1, "Irregular past: read, made, took, taught, ate, sang."));
  return out;
};
