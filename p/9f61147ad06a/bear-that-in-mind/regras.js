/* As regras do corretor da revisão Bear That in Mind. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:take|took|taken|taking) (?:some |the |a |any )?conclusions?)\b/gi, m, 1, "You draw a conclusion."));
  out = out.concat(A(/\b((?:reach|reached|reaching) (?:the |a |our )?deadline)\b/gi, m, 1, "meet a deadline (reach an agreement)."));
  out = out.concat(A(/\b((?:lift|lifted|lifting) (?:a |any |some )?concerns?)\b/gi, m, 1, "raise a concern."));
  out = out.concat(A(/\b(have in mind)\b/gi, m, 1, "bear in mind / keep in mind."));
  out = out.concat(A(/\b(take in consideration)\b/gi, m, 1, "take into account / into consideration."));
  return out;
};
