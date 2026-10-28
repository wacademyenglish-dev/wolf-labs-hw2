/* As regras do corretor da revisão Let’s Sort This Out. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(calm down)\b/gi, m, 1, "Try: I can see you’re really frustrated."));
  out = out.concat(A(/\b(it[’']s not my fault)\b/gi, m, 1, "Try: I’m sorry that you’ve had to…"));
  return out;
};
