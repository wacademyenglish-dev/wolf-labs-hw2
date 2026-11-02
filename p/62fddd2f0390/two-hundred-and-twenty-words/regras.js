/* As regras do corretor desta aula (nível 3): nominalização. Formas que não existem (improvation, refusement, decidement, reducement, cutment, risement, performation, refusation, improval, decidal); a forma -ing onde o inglês usa a forma zero (a cutting in, a rising in, a dropping of, a falling of); cadeia de OF longa (the X of the Y of the Z); "a decision/review was made/done" sem pessoa (quem fez?). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(improvation|refusement|decidement|reducement|cutment|risement|performation|refusation|improval|decidal|analyzation|deliverment)\b/g, m, 1, 'That noun doesn’t exist: improveMENT, refusAL, decisION, reductION, performANCE.'));
  out = out.concat(A(/\b(an? (?:\d+% )?(?:cutting|rising|dropping|falling|delaying|changing) (?:in|of))\b/g, m, 1, 'The zero form: a CUT in, a RISE in, a DROP in, a FALL in.'));
  out = out.concat(A(/\b(?:the|a) \w+ (of the \w+ of the \w+)\b/g, m, 1, 'A chain of OF: stack it before the noun (transport cost reduction).'));
  out = out.concat(A(/\b(a (?:decision|review|change|recommendation) was (?:made|done)\b)(?! by)/g, m, 1, 'Who did it? Put the person back: The director decided …'));
  out = out.concat(A(/\b(a (?:reviewing|analyzing|changing|improving) of)\b/g, m, 1, 'Use the noun: a REVIEW of, an ANALYSIS of, a CHANGE in.'));
  return out;
};
