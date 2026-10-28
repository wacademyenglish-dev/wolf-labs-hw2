/* As regras do corretor da revisão Read and Select. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(happyness|beautyful|unpossible|decidement|knowlege|childs)\b/gi, m, 1, "Fake word: check the ending, the prefix and the spelling."));
  return out;
};
