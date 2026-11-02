/* As regras do corretor desta aula (nível 4): whoever / whatever / wherever / whenever / however. who ever / what ever separados, whoever + verbo sem -s, whoever who, however + sujeito + adjetivo (however he tries hard / however you are strong), will depois de -ever, whatever it cost (presente). O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:who|what|where|when|how) ever)\b/g, m, 1, 'One word: whoever, whatever, wherever, whenever, however.'));
  out = out.concat(A(/\b(whoever (?:take|wear|want|find|hold|go|know|leave|come|have|keep|try))\b/g, m, 1, 'Whoever = he / she: verb + s (takes, wears).'));
  out = out.concat(A(/\b(whoever who)\b/g, m, 1, 'Whoever already means “the person who”.'));
  out = out.concat(A(/^\s*(however (?:i|you|he|she|we|they|it) (?:\w+ )?(?:hard|strong|fast|much|tired|good|rich|smart|try|tries|are|is|am))\b/g, m, 1, 'However + adjective / adverb first: however hard he tries, however strong you are.', function (x) { return !/^\s*however,/.test(x.input); }));
  out = out.concat(A(/\b((?:whoever|whatever|wherever|whenever|however \w+) (?:\w+ )?will \w+)/g, m, 1, 'After -ever, present for the future: wherever you go.'));
  out = out.concat(A(/\b(whatever it cost),/g, m, 1, 'Present: whatever it costs.', function (x) { return !/\b(?:would|was|were|did|had)\b/.test(x.input); }));
  out = out.concat(A(/\b((?:whatever|whenever) he (?:did|touched),? (?:the ring |he )(?:stay|feel))\b/g, m, 1, 'It is the past: stayed, felt.'));
  out = out.concat(A(/\b(whenever he touch)\b/g, m, 1, 'It is the past: whenever he touched.'));
  return out;
};
