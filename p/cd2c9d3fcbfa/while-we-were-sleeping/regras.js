/* As regras do corretor desta aula (nível 3): past continuous × past simple. was / were + verbo base (was watch), sujeito + -ing sem be (I sleeping), he / she / nome + were, they / people + was, when + was / were + -ing para o momento curto (when the lights were going out), while + passado simples, didn't + -ing, What you were doing?, What did you doing?, presente contínuo com marca de passado (is patrolling … when … heard). O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:was|were|wasn't|wasn’t|weren't|weren’t) (?:watch|cook|sleep|patrol|look|finish|drive|work|walk|read|play|study|take|make|run|eat|have|talk))\b/g, m, 1, 'Be + verb-ing: was watching, were looking.'));
  out = out.concat(A(/^\s*((?:i|you|he|she|we|they|people) (?:sleeping|cooking|watching|working|walking|driving|reading|playing|studying|looking|eating|running))\b/g, m, 1, 'Don’t forget be: I was sleeping.'));
  out = out.concat(A(/\b((?:he|she|it|the sheriff|mitsuki|aneesha|trevor|my (?:mother|father|brother|sister|boss)) were \w+ing)\b/g, m, 1, 'One person: was.'));
  out = out.concat(A(/\b((?:they|we|you|people|the kids|the soldiers|my parents) (?:was|wasn't|wasn’t) \w+ing)\b/g, m, 1, 'They / we / people: were.'));
  out = out.concat(A(/\b(when (?:the \w+|it|it all|the lights|the signal|they|he|she|the bus) (?:was|were) (?:going|stopping|beginning|starting|happening|arriving|ringing|coming))\b/g, m, 1, 'The sudden moment: past simple. when the lights went out.'));
  out = out.concat(A(/^\s*(while (?:i|you|he|she|we|they|\w+) (?:cooked|slept|watched|walked|drove|worked|read|played|studied|looked|ate))\b/g, m, 1, 'While + was / were + -ing: while she was cooking.'));
  out = out.concat(A(/\b((?:didn't|didn’t|did not) \w+ing)\b/g, m, 1, 'The negative: wasn’t / weren’t + -ing.', function (x) { return !/\b(?:bring|sing|ring|swing|thing|king)\b/.test(x[1]); }));
  out = out.concat(A(/^\s*(what (?:you|he|she|they|we) (?:were|was) doing)\b/g, m, 1, 'Questions: What were you doing…?'));
  out = out.concat(A(/^\s*(what did (?:you|he|she|they|we) \w+ing)\b/g, m, 1, 'Questions with -ing: What were you doing? (no did)'));
  out = out.concat(A(/\b((?:is|are|am) \w+ing [^.!?]*\bwhen (?:\w+ ){1,3}(?:heard|saw|stopped|went|came|began|happened|started))\b/g, m, 1, 'It is the past: was / were + -ing.'));
  return out;
};
