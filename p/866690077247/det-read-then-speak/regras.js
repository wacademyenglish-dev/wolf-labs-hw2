/* As regras do corretor da revisão Read, Then Speak. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(would like (?!to)\w+)\b/gi, m, 1, "would like TO + verb."));
  out = out.concat(A(/\b(the reason is because)\b/gi, m, 1, "The reason is THAT… (or just: because…)."));
  return out;
};
