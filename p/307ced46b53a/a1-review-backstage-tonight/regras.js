/* As regras do corretor da REVISÃO A1 · UNIDADE 8: can to / can + -s / can + -ing, do you can,
   sujeito + -ing sem be, a grafia do -ing (runing, makeing, swiming, writting). */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(can(?:’t|'t|not)? to \w+)\b/gi, m, 1, 'can + verb, no to: I can swim.'));
  out = out.concat(A(/\b(can(?:’t|'t)? (?:sings|dances|plays|cooks|swims|drives|speaks|reads))\b/gi, m, 1, 'can + verb, no -s: she can sing.'));
  out = out.concat(A(/\b(do you can|does (?:he|she) can)\b/gi, m, 1, 'The question: Can you…?'));
  out = out.concat(A(/\b((?:I|he|she|we|they) (?:talking|working|playing|practicing|sleeping|eating|reading|watching|drinking|looking|putting))\b/gi, m, 1, 'be + -ing: I’m talking, she’s working.'));
  out = out.concat(A(/\b(runing|makeing|swiming|writting|siting|takeing|comeing|geting)\b/gi, m, 1, 'Spelling: running, making, swimming, writing, sitting.'));
  return out;
};