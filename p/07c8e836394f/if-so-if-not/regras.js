/* As regras do corretor da revisão If So, If Not. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(if yes|if no)\b(?=[,.?!])/gi, m, 1, "If so / If not."));
  out = out.concat(A(/\b(I think no|I hope no|I’m afraid no|I'm afraid no)\b/gi, m, 1, "I don’t think so / I hope not / I’m afraid not."));
  out = out.concat(A(/\b(no that I know)\b/gi, m, 1, "Not that I know of."));
  return out;
};
