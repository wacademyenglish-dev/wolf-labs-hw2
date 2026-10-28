/* As regras do corretor da revisão The Video Call. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(listening me)\b/gi, m, 1, "Can you hear me? (listen TO someone)."));
  out = out.concat(A(/\b(internet fell)\b/gi, m, 1, "My connection dropped / went down."));
  return out;
};
