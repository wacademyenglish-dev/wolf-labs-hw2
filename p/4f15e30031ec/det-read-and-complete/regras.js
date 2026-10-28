/* As regras do corretor da revisão Read and Complete. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(peoples|withought|allso|more hard)\b/gi, m, 1, "Check the spelling and the form."));
  out = out.concat(A(/\b(do (?:a |more |many )?mistakes?)\b/gi, m, 1, "make a mistake, not do."));
  return out;
};
