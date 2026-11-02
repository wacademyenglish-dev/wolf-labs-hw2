/* As regras do corretor da revisão Pitch Night. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:lamp|app|box|sensor|thing|idea|product|book|man|woman|person|place) what)\b/gi, m, 1, "who / which / that, never what."));
  out = out.concat(A(/\b((?:instead of|before|after|without|by|about|on|in) (?:drive|change|use|buy|ask|look|search|sleep|eat|go|take|work|make))\b/gi, m, 1, "After a preposition: -ing."));
  out = out.concat(A(/\b((?:do|does|did|doing|done) (?:a|the|my|his|her|a big|a huge|the right|the wrong) (?:decision|mistake|difference|effort))\b/gi, m, 1, "make a decision / a mistake / a difference."));
  out = out.concat(A(/\b(, that (?:is|was|works|lives))\b/gi, m, 1, "Extra information between commas: who / which, not that."));
  return out;
};
