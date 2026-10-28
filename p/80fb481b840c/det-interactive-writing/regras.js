/* As regras do corretor da revisão Interactive Writing. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(like for example)\b/gi, m, 1, "Choose one: for example / for instance."));
  out = out.concat(A(/\b(in the other hand)\b/gi, m, 1, "on the other hand."));
  out = out.concat(A(/\b(more over)\b/gi, m, 1, "moreover (one word)."));
  return out;
};
