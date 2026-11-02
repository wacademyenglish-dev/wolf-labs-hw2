/* As regras do corretor da revisão Reportedly, Allegedly. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(according to (?:me|my opinion))\b/gi, m, 1, "For yourself: in my opinion / in my view."));
  out = out.concat(A(/\b(according (?:the|a|an|my) \w+)\b/gi, m, 1, "according TO + source."));
  out = out.concat(A(/\b(rumou?r has that)\b/gi, m, 1, "Rumour has IT that…"));
  out = out.concat(A(/\b(allegedly (?:won|helped|saved|gave|donated|received an award))\b/gi, m, 1, "allegedly is for accusations; good news: reportedly."));
  return out;
};
