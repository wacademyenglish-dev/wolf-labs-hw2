/* As regras do corretor da revisão The Style Guide. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(Dear [^\n]+\n?[^]*?\bcheers\b)/gi, m, 1, "Don’t mix registers: Dear… Kind regards."));
  out = out.concat(A(/\b(I couldn(?:’|')t care more)\b/gi, m, 1, "Zero interest: I couldn’t care LESS."));
  return out;
};
