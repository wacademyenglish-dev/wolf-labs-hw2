/* As regras do corretor da revisão Safety First. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(must to)\b/gi, m, 1, "must + verb (no “to”)."));
  out = out.concat(A(/\b(musts)\b/gi, m, 1, "must (no -s)."));
  out = out.concat(A(/\b(do I must)\b/gi, m, 1, "Do I have to…?"));
  return out;
};
