/* As regras do corretor da revisão The Museum at Night. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:turn|turned|turns|pick|picked|put|take|give|switch) (?:on|off|up|down|back) (?:it|them|him|her))\b/gi, m, 1, "Pronoun in the middle: turn it on."));
  out = out.concat(A(/\b((?:look|looking|looked) (?:it|them|him|her) for)\b/gi, m, 1, "look for never opens: look for it."));
  out = out.concat(A(/\b(where [^.]* there\.)/gi, m, 1, "After where, no there at the end."));
  out = out.concat(A(/\b((?:a|the) (?:\w+ )?(?:man|woman|person|cat|dog|room|painting|crown|museum) what)\b/gi, m, 1, "Relative: who (people), which / that (things)."));
  out = out.concat(A(/\b((?:it|they) (?:made|kept|found|built) (?:of|in|by))\b/gi, m, 1, "The passive needs be: it is made of…"));
  return out;
};
