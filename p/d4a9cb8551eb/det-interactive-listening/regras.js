/* As regras do corretor da revisão Interactive Listening. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(the student (?:talk|ask|say)) /gi, m, 1, "Summary of something that happened: past tense (talked, asked)."));
  return out;
};
