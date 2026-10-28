/* As regras do corretor da revisão Tell Me About Your Brand. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(for who)\b/gi, m, 1, "In questions: Who is it for?"));
  out = out.concat(A(/\b(hoping (?!to\b)\w+)\b/gi, m, 1, "hoping TO + verb: What are you hoping to achieve?"));
  return out;
};
