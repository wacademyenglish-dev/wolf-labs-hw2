/* As regras do corretor da revisão The Small Print. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(prior to (?:sign|pay|leave|start|move|cancel|read))\b/gi, m, 1, "prior to + -ing: prior to signing."));
  out = out.concat(A(/\b(liable to (?:the|any) (?:damage|costs?|losses?))\b/gi, m, 1, "liable FOR the damage."));
  return out;
};
