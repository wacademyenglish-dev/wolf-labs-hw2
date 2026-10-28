/* As regras do corretor da revisão I’m Afraid the Results…. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(don[’']t worry,? it will be fine)\b/gi, m, 1, "Honest hope: We’re going to do everything we can."));
  out = out.concat(A(/\b(any questions\?)/gi, m, 1, "More open: What questions do you have?"));
  return out;
};
