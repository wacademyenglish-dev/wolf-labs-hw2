/* As regras do corretor da revisão Why This Color?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(enough (?:big|strong|clear|bright|dark|light|small))\b/gi, m, 1, "Adjective + enough: big enough."));
  out = out.concat(A(/\b(feels like (?:warm|calm|cold|cozy|modern|clean))\b/gi, m, 1, "feels + adjective: It feels warm."));
  return out;
};
