/* As regras do corretor da revisão Can We Make the Logo Bigger?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(where are you coming from)\b/gi, m, 1, "Statement order: I see where you’re coming from."));
  out = out.concat(A(/\b(you are wrong)\b/gi, m, 1, "Softer: I see it a bit differently."));
  return out;
};
