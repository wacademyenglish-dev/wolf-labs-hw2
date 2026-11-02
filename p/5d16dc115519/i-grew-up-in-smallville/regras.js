/* As regras do corretor desta aula (nível 2): past simple. Irregulares com -ed (comed, growed, meeted, haved, goed, wented, telled, maked, taked), -ed duplicado (moveed, liveed, loveed), did + passado na afirmativa (did grew, did met), didn't + passado, no + verbo, Did he + passado, pergunta sem did (He told Lois…?), presente com ano ou marca do passado (in 1997 he move). O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(comed|growed|meeted|haved|goed|wented|telled|maked|taked|leaved|finded|thinked|buyed|bringed|eated|drinked|sleeped|seed|sayed|gived|runned|writed|knowed)\b/g, m, 1, 'This verb is irregular: came, grew, met, had, went, told…'));
  out = out.concat(A(/\b(moveed|liveed|loveed|likeed|closeed|arriveed|useed|danceed)\b/g, m, 1, 'The verb ends in e: just add -d. moved, lived.'));
  out = out.concat(A(/\b(did (?:grew|met|came|went|had|told|moved|lived|loved|saw|made|took|left|found))\b/g, m, 1, 'Positive sentences have no did: he grew up, he met.', function (x) { return !/^\s*did\b/.test(m) ; }));
  out = out.concat(A(/\b((?:didn't|didn’t|did not) (?:told|went|came|grew|met|had|moved|lived|saw|made|took|left|found|liked|loved|was|were))\b/g, m, 1, 'After didn’t: the base verb. didn’t tell.'));
  out = out.concat(A(/\b((?:i|you|he|she|we|they|clark|lois) no (?:told|tell|went|go|came|come|liked|like|moved|move))\b/g, m, 1, 'The negative is didn’t + verb.'));
  out = out.concat(A(/^\s*(did (?:i|you|he|she|we|they|clark|lois|your \w+) (?:told|went|came|grew|met|had|moved|lived|saw|made|took|left|found|liked|loved))\b/g, m, 1, 'After Did: the base verb. Did he tell…?'));
  out = out.concat(A(/^\s*((?:he|she|they|you|clark|lois) (?:told|met|moved|went|came|grew up|had|lived) [^?.!]*\?)/g, m, 1, 'Questions: Did + person + verb. Did he tell…?', function (x) { return !/^\s*(?:who|what)/.test(m); }));
  out = out.concat(A(/\b((?:in (?:19|20)\d\d|yesterday|last (?:year|week|month)|when i was \w+|as a (?:child|kid)),? (?:\w+ ){1,2}(?:come|move|meet|grow up|go|live|have|tell))\b/g, m, 1, 'It is the past: came, moved, met, went, had.'));
  out = out.concat(A(/\b((?:clark|he|she|they|we|i) (?:come|move|meet|go|have|live) [^.!?]*\bin (?:19|20)\d\d)\b/g, m, 1, 'It is the past (the year says so): came, moved, had.'));
  return out;
};
