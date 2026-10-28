/* As regras do corretor da revisão Low-Fi First. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(will to \w+)\b/gi, m, 1, "will + verb (no to): will test."));
  out = out.concat(A(/\b(will can)\b/gi, m, 1, "Use might or will be able to."));
  return out;
};
