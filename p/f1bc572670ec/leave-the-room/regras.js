/* As regras do corretor desta aula (nível 3): second conditional. WOULD não entra na metade do IF; "if I was you" → were; "if … past, … will"; "would to", "would + passado"; "would have" no lugar de "would" quando o IF está no passado simples. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(if (?:i|you|he|she|it|we|they|nadia|the \w+) would (?:\w+))\b/g, m, 1, 'No WOULD in the IF half: if she asked…'));
  out = out.concat(A(/\b(if i was you)\b/g, m, 1, 'If I WERE you…'));
  out = out.concat(A(/\b(if (?:i|you|he|she|it|we|they) (?:had|were|was|could|asked|went|lived|knew|found|told|sent|did|got|won|lost|saw)\b[^.?!]*?,\s*(?:i|you|he|she|it|we|they) will)\b/g, m, 1, 'The other world: WOULD, not will.'));
  out = out.concat(A(/\b((?:would|could|might|wouldn't|wouldn’t) to \w+)/g, m, 1, 'would + the plain verb, no to.'));
  out = out.concat(A(/\b((?:would|could|might) (?:asked|went|called|lent|deleted|talked|told|answered|stopped|kept|said|did|bought|was))\b/g, m, 1, 'would + the plain verb: would ask, would go.'));
  out = out.concat(A(/\b(if (?:i|you|he|she|we|they) had (?:time|more time|money|a car|the chance)\b[^.?!]*?(?:would|could) have)\b/g, m, 1, 'If I had time, I WOULD read (not would have read).'));
  return out;
};
