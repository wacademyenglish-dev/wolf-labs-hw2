/* As regras do corretor desta aula (nível 2): who / which / that / where. Pessoa + which, coisa + who, lugar + which / who + frase com sujeito, what como relativo (the gem what…), lugar + where + verbo sem sujeito (where escape the animals), who / that + verbo sem -s com pessoa no singular (the hero who never give up). O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:the|a|an) (?:boy|girl|man|woman|person|hero|player|teacher|friend|character|doctor|villain|people|kid) which)\b/g, m, 1, 'A person: who.'));
  out = out.concat(A(/\b((?:the|a|an) (?:drum|thing|stone|gem|game|book|phone|car|film|movie|board|box|map|dog|animal|song) who)\b/g, m, 1, 'A thing or an animal: which / that.'));
  out = out.concat(A(/\b((?:the|a|an) (?:place|level|city|town|house|room|beach|mall|zoo|school|jungle|street|park|restaurant) (?:which|who|that) (?:i|you|we|they|he|she|the \w+|people) \w+)/g, m, 1, 'A place + a full sentence: where.', function (x) { return !/\b(?:which|that) (?:i|you|we|they|he|she|people) (?:love|loved|like|liked|visit|visited|know|knew|see|saw|want|wanted|need|hate|hated|remember|found|built|chose|choose|bought|recommend)\b/.test(x[1]); }));
  out = out.concat(A(/\b((?:the|a|an) \w+ what (?!\w+ (?:i|you|we|they) )\w+)/g, m, 1, 'What is not a relative pronoun here: who / which / that.'));
  out = out.concat(A(/\b((?:the|a|an) (?:place|level|city|town|house|room|beach|mall|zoo|school|jungle|street|park) where (?:escape|live|play|start|work|eat|happen|happens|lives|plays|starts)\b(?! \w+ing))/g, m, 1, 'After where: person or thing + verb. where the animals escape.'));
  out = out.concat(A(/\b((?:the|a|an) (?:boy|girl|man|woman|person|hero|player|teacher|friend|character) (?:who|that) (?:never |always |only )?(?:give|play|say|win|live|work|help|love|want|know|make) )/g, m, 1, 'One person = he / she: who plays, who never gives up.'));
  out = out.concat(A(/\b((?:the|a|an) (?:animals|players|people|kids|heroes) where \w+ \w+es)\b/g, m, 1, 'They: escape (no -s).'));
  out = out.concat(A(/\b(where (?:the )?(?:animals|kids|players|people) (?:escapes|plays|lives|works))\b/g, m, 1, 'They (the animals): escape, no -s.'));
  return out;
};
