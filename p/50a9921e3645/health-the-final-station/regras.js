/* As regras do corretor da revisão The Final Station. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(what is your worry)\b/gi, m, 1, "More natural: Is anything worrying you?"));
  return out;
};
