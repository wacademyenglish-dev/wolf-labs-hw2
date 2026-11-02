/* As regras do corretor desta aula (nível 3): orações relativas. "That I need is" no começo (alvo: What); "the people which" (pessoa: who); ", that" depois de vírgula (explicativa: which/who); "my mother/father/wife/husband … that is/was" (uma pessoa só: , who … ,); "the thing what" (com substantivo: that/which). Vírgula sem vírgula em explicativa de coisa única fica com o professor. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/^\s*(that (?:i|you|we|they|he|she) (?:need|want|said|mean|know|like|learned|remember)\w*)\b/g, m, 1, 'No noun in front: WHAT I need is …'));
  out = out.concat(A(/\b((?:people|person|residents|students|patients|doctors|friends|colleagues|men|women|children|man|woman|teacher|teachers) which)\b/g, m, 1, 'People: WHO, not which.'));
  out = out.concat(A(/(, that (?!is,|is to say)\w+)/g, m, 1, 'After a comma: WHICH or WHO, never THAT.'));
  out = out.concat(A(/\b(my (?:mother|father|mom|dad|wife|husband|boss|grandmother|grandfather|brother|sister) (?:that|which) (?:is|was|lives|works|has))\b/g, m, 1, 'Only one: put commas and WHO: my mother, who is a doctor, …'));
  out = out.concat(A(/\b((?:the|a|an|this|that) (?:thing|book|method|technique|study|place|one|food|movie) what)\b/g, m, 1, 'With a noun before it: THAT or WHICH, not what.'));
  return out;
};
