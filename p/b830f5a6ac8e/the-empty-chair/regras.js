/* As regras do corretor desta aula (nível 3): should / could have + particípio. "should/could/would/must have + passado simples irregular" (have went, have took, have knew, have saw); "should/could/would/must of"; "should/could + passado" sem have (should called); "should/could + verbo + marca de passado" (yesterday, last week/month/year, in April, ago) — alvo: should have + particípio. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:should|could|would|must|might)(?:n't|n’t| not)? have (?:went|took|knew|saw|wrote|ate|spoke|gave|did|came|ran|began|broke|chose|drove|forgot|got up))\b/g, m, 1, 'HAVE + participle: gone, taken, known, seen.'));
  out = out.concat(A(/\b((?:should|could|would|must|might)(?:n't|n’t)? of)\b/g, m, 1, 'Write HAVE: should have (it sounds like “of”).'));
  out = out.concat(A(/\b((?:should|could|would)(?:n't|n’t)? (?:called|talked|asked|told|said|checked|went|took|knew|moved|sent|prepared|stopped))\b/g, m, 1, 'Door closed: SHOULD HAVE + participle (should have called).'));
  out = out.concat(A(/\b((?:should|could)(?:n't|n’t)? (?!have\b|be\b)\w+\b[^.!?,]{0,40}\b(?:yesterday|last (?:week|month|year|night|april|monday|friday)|in april|ago))\b/g, m, 1, 'The door is closed: SHOULD HAVE + participle.'));
  return out;
};
