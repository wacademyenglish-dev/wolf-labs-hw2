/* As regras do corretor da revisão Writing Sample. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(gonna|wanna|gotta)\b/gi, m, 1, "Written English: going to / want to / have to."));
  out = out.concat(A(/\b(u)\b/g, m, 1, "Write “you”."));
  out = out.concat(A(/\b(super cool|stuff|lol|btw)\b/gi, m, 1, "Too informal for a university: be specific."));
  out = out.concat(A(/\b(thats|dont|cant|wont|im)\b/gi, m, 1, "Use the apostrophe or the full form."));
  return out;
};
