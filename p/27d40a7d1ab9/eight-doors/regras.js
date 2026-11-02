/* As regras do corretor desta aula (nível 3): habilidade com AT; "intelligent in"; "the best in everything"; "didn't … yet"; "not good in nothing" (dupla negação). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:good|better|best|bad|worse|terrible|brilliant|great|excellent|ok|okay) in (?:music|math|maths|sports?|languages?|english|cooking|dancing|drawing|writing|singing|numbers|people|art|science|everything|anything|nothing|it))\b/g, m, 1, 'Ability takes AT: good at music.'));
  out = out.concat(A(/\b(intelligent in \w+)/g, m, 1, 'For one ability: good at. (intelligent in → good at)'));
  out = out.concat(A(/\b((?:didn't|didn’t|did not) (?:\w+ ){0,3}yet)\b/g, m, 1, 'With yet: haven’t + participle. I haven’t tried yet.'));
  out = out.concat(A(/\b((?:not|n't|n’t) (?:very )?good (?:at|in) nothing)\b/g, m, 1, 'not … anything: I’m not very good at anything.'));
  out = out.concat(A(/\b(i'm the best in|i’m the best in|i am the best in)\b/g, m, 1, 'Soften it: I’d say I’m quite good at…'));
  return out;
};
