/* As regras do corretor da revisão Not a Normal Day. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:I|you|we|they|he|she) (?:watching|sitting|eating|playing|reading|working|cooking|using))\b/gi, m, 1, "Right now: I’m watching, she’s eating (am / is / are + -ing)."));
  out = out.concat(A(/\b((?:am|is|are|I’m|I'm) knowing|(?:am|is|are|I’m|I'm) wanting|(?:am|is|are|I’m|I'm) liking)\b/gi, m, 1, "know, want, like don’t take -ing: I know."));
  out = out.concat(A(/\b((?:she|he|it) (?:cook|watch|work|answer|play|take|use))\b/gi, m, 1, "He / she: cooks, watches, works."));
  out = out.concat(A(/\b((?:he|she|it) don’t|(?:he|she|it) don't)\b/gi, m, 1, "He / she: doesn’t."));
  return out;
};
