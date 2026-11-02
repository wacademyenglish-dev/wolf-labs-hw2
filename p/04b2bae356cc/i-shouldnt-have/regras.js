/* As regras do corretor desta aula (nível 4): modais no passado. modal + have + verbo base ou passado simples (shouldn't have make, have drank, have knew, have went), should had, modal + passado sem have (could asked, can't knew), should of, needn't have to, pergunta sem inversão. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:should|shouldn't|could|couldn't|needn't|might|must|would|wouldn't) (?:not )?have (?:make|tell|ask|buy|drink|drank|know|knew|say|go|went|do|did|eat|ate|take|took|see|saw|read|stop|call|come|came|break|broke|write|wrote|give|gave|speak|spoke|begin|began|wear|wore|run|ran|leave|think|spend|stay|study|try|wait|worry|use|get))\b/g, m, 1, 'After have: the past participle (made, told, drunk, known, said).'));
  out = out.concat(A(/\b((?:should|shouldn't|could|couldn't|might|must|would) (?:not )?had \w+)/g, m, 1, 'Modal + have, never had: shouldn’t have made.'));
  out = out.concat(A(/\b((?:should|shouldn't|could|couldn't|can't|might|must|needn't) (?:asked|told|made|knew|went|said|bought|called|drank|ate|took|saw|did|stopped|tried|worried|spent|stayed|studied|waited|used))\b/g, m, 1, 'Past regret: modal + have + participle (could have asked).'));
  out = out.concat(A(/\b((?:should|shouldn't|could|couldn't|would|might|must) of)\b/g, m, 1, 'We say “should’ve”, but we write should have.'));
  out = out.concat(A(/\b(needn't have to \w+)/g, m, 1, 'Needn’t have + participle: needn’t have bought (no to).'));
  out = out.concat(A(/\b((?:shouldn't|should) (?:drink|eat|buy|say|go|make|tell) [^.!?]*\b(?:last night|yesterday|last week|last year|ago))\b/g, m, 1, 'It is about the past: shouldn’t have + participle.'));
  out = out.concat(A(/^\s*((?:what|where|who|how) (?:i|you|he|she|we|they) (?:should|could) have)\b/g, m, 1, 'Questions: What should I have said? (should before I)'));
  out = out.concat(A(/\b((?:should|could) (?:i|you|he|she|we|they) have (?:say|do|tell|go|make|ask|buy|know|see|take))\b/g, m, 1, 'After have: the past participle (What should I have said?).'));
  return out;
};
