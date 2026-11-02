/* As regras do corretor desta aula (nível 3): second conditional. would na metade do if (If I would have / If she would love), If + passado e will na outra metade, If I was you (conselho), would / wouldn't + to, would + passado / -s (would changed, wouldn't loves), What you would…? sem inversão, presente no if com would na outra metade (If she loves me, I would…), If I can … I would. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(if (?:i|you|he|she|we|they|it|\w+) (?:would|'d|’d) \w+)/g, m, 1, 'No would after if: If I had…, If she loved…'));
  out = out.concat(A(/\b(if (?:i|you|he|she|we|they|it|there) (?:had|were|was|could|loved|lived|won|cancelled|canceled|found|knew|went|did|lost)\b[^.!?]*?,? (?:i|you|he|she|we|they|it) (?:will|won't|won’t) \w+)/g, m, 1, 'An imagined situation: would (not will).'));
  out = out.concat(A(/\b(if (?:i|you|he|she|we|they|it|there) (?:had|were|could)\b[^.!?]*?,? (?:will|won't|won’t) (?:you|he|she|they|we|i) \w+)/g, m, 1, 'An imagined situation: would (not will).'));
  out = out.concat(A(/\b(if i was you)\b/g, m, 1, 'For advice: If I were you.'));
  out = out.concat(A(/\b((?:would|wouldn't|wouldn’t|'d) (?:not |you |he |she |we |they |i )?to \w+)/g, m, 1, 'After would: the base verb, no to.', function (x) { return !/\bwould (?:not )?to (?:be honest)\b/.test(x[1]); }));
  out = out.concat(A(/\b((?:would|wouldn't|wouldn’t) (?:changed|loved|asked|bought|went|made|did|was|were|had|loves|asks|goes|makes|does|has|is))\b/g, m, 1, 'After would: the base verb. would change.'));
  out = out.concat(A(/^\s*(what (?:you|he|she|they|we) would \w+)/g, m, 1, 'Questions: What would you do…?'));
  out = out.concat(A(/\b(if (?:i|you|he|she|we|they|it|there) (?:loves|have|has|is|are|can|want|wants|live|win|cancel)\b[^.!?]*?,? (?:i|you|he|she|we|they|it|\w+) (?:would|wouldn't|wouldn’t) \w+)/g, m, 1, 'With would: the if half in the past. If she loved me, If I could…'));
  out = out.concat(A(/\b((?:\w+ )(?:would|wouldn't|wouldn’t) \w+ [^.!?]*?\bif (?:i|you|he|she|we|they|it|there) (?:is|are|has|have|loves|can|wants))\b/g, m, 1, 'With would: the if half in the past. if there were, if she had.'));
  return out;
};
