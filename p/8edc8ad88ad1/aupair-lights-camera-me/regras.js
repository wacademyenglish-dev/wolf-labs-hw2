/* As regras do corretor da revisão Lights, Camera, Me!. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(have (?:work|travel|babysit|cook|study|live))\b/gi, m, 1, "have + participle: have worked, have traveled."));
  out = out.concat(A(/\b(have teached|have taked|have maked)\b/gi, m, 1, "Irregular: taught, taken, made."));
  out = out.concat(A(/\b(have \w+ed in (?:19|20)\d\d)\b/gi, m, 1, "With a year: past simple (I traveled in 2022)."));
  return out;
};
