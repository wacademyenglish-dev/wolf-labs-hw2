/* As regras do corretor da revisão So That Nobody Gets Lost. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(for to)\b/gi, m, 1, "Purpose: to / in order to + verb (not for to)."));
  out = out.concat(A(/\b(because (?:the|a|an) (?:floods?|storms?|rain|tide|wind|snow|traffic|weather))\b/gi, m, 1, "Before a noun: because of the floods."));
  out = out.concat(A(/\b(in order to not|so as to not)\b/gi, m, 1, "in order NOT to / so as NOT to."));
  out = out.concat(A(/\b(for that (?:people|nobody|everybody|they|we|you))\b/gi, m, 1, "Purpose with a subject: so that people can…"));
  return out;
};
