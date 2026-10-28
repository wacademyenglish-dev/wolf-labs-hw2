/* As regras do corretor da revisão Fill in the Blanks. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(looking forward to (?:see|meet|hear|work))\b/gi, m, 1, "look forward to + -ing: seeing, meeting."));
  out = out.concat(A(/\b((?:could|can|will|would) you \w+ed)\b/gi, m, 1, "After could / can / will: the base verb."));
  return out;
};
