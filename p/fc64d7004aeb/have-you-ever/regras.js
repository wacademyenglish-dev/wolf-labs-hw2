/* As regras do corretor desta aula (nível 2): present perfect de experiência (Have you ever + particípio) e o detalhe no passado (I went in 2018). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(did you (?:ever|already))\s+\w+/g, m, 1, 'Your whole life, no date: Have you ever + participle?'));
  out = out.concat(A(/\b(?:have|has|'ve|'s)\s+(?:(?:you|he|she|they|we)\s+)?(?:ever\s+|never\s+)?(eated|sleeped|flied|meeted|winned|feeled|swimmed|rided|breaked|singed|losed|goed|seed|maked|taked|writed)\b/g, m, 1, 'After have: the participle (eaten, slept, flown, met, won…).'));
  out = out.concat(A(/\b(?:have|has)\s+(?:you\s+|he\s+|she\s+|they\s+|we\s+)?(?:ever\s+|never\s+)?(saw|ate|went|rode|broke|sang|swam|was|were|did|took|wrote|flew|drank|spoke)\b/g, m, 1, 'After have: the participle (seen, eaten, been, ridden…).'));
  out = out.concat(A(/\b(?:i|you|we|they|he|she)\s+(never (?:have|has))\s+\w+/g, m, 1, 'have NEVER + participle: I have never seen snow.'));
  out = out.concat(A(/\b(?:have|has|'ve)\s+(?:never\s+|ever\s+)?(?:been|gone|lived|seen|eaten|visited|traveled|travelled)\b[^.!?]*?\b(in (?:19|20)\d\d|last (?:year|week|month|summer)|\w+ (?:years?|months?|days?) ago|yesterday)\b/g, m, 1, 'A date goes to the past: I went in 2018.'));
  out = out.concat(A(/\b((?:when|what year|what time) (?:have|has) (?:you|he|she|they|we))\b/g, m, 1, 'When asks for a date: When did you go?'));
  out = out.concat(A(/\b((?:two|three|four|many) times ago|twice ago|once ago)\b/g, m, 1, 'No ago here: once, twice, three times.'));
  return out;
};
