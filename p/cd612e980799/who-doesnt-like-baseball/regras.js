/* As regras do corretor desta aula (nível 1): like / love / hate + -ing. he / she / nome + like / love / hate sem -s, like / love / hate + verbo sem -ing (loves play, hates go), likes to + -ing, he / she don't like, doesn't likes, pergunta sem do (You like…?), does + you, plural com -s (the boys likes), are + like. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:he|she|it|my (?:mother|father|brother|sister|friend|son|daughter|mom|dad|wife|husband)|jonathan|jordan|clark|lois|superman) (?:like|love|hate))\b/g, m, 1, 'He / she: loves, hates, likes (with -s).', function (x) { return !/\b(?:does|doesn't|doesn’t|did|didn't|didn’t|can|can't|can’t|will|would|should|to) (?:\w+ )?(?:\w+ )?$/i.test(frase.slice(0, frase.toLowerCase().indexOf(x[1])) ); }));
  out = out.concat(A(/\b((?:likes?|loves?|hates?) (?:play|go|write|work|lie|live|cook|watch|study|drive|dance|sing|read|swim|run|eat|get up|travel|wait|talk))\b(?! (?:you|him|her|them|me|it|this|that))/g, m, 1, 'After like / love / hate: the verb + -ing. loves playing.', function (x) { return !/\b(?:likes?|loves?|hates?) to\b/.test(x[1]); }));
  out = out.concat(A(/\b((?:likes?|loves?|hates?) to \w+ing)\b/g, m, 1, 'Likes writing, or likes to write. Not to + -ing.'));
  out = out.concat(A(/\b((?:he|she|it|who|my \w+|jonathan|jordan|clark|lois) (?:don't|don’t|do not) (?:like|love|want))\b/g, m, 1, 'He / she / who: doesn’t like.', function (x) { return !/\b(?:my \w+s|my parents|my friends) (?:don't|don’t)/.test(x[1]); }));
  out = out.concat(A(/\b((?:doesn't|doesn’t|does not) (?:likes|loves|hates|wants))\b/g, m, 1, 'After doesn’t: like (no -s).'));
  out = out.concat(A(/^\s*((?:you|they|he|she) (?:like|likes|love|loves) [^?]*\?)/g, m, 1, 'Questions: Do you like…? Does he like…?'));
  out = out.concat(A(/\b(does (?:you|they|we|i))\b/g, m, 1, 'You → do. He / she → does.'));
  out = out.concat(A(/\b((?:the boys|the kids|my parents|they|we|people|the twins) (?:likes|loves|hates))\b/g, m, 1, 'Two or more: like (no -s).'));
  out = out.concat(A(/\b((?:is|are|am) (?:like|love|hate))\b(?! (?:a|an|the|this|that|him|her|it|me|his|my|their|your|our))/g, m, 1, 'No are: The boys like…'));
  return out;
};
