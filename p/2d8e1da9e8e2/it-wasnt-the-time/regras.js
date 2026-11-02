/* As regras do corretor desta aula (nível 3): cleft sentences. "Is/Was/Isn't/Wasn't the X that/who" no começo de afirmação sem IT (alvo: It is/was …); "It is/was … what" depois do foco (alvo: that/who); "What are/is/do + sujeito + is/was" (ordem de pergunta dentro do what); "Who + verbo … is/was" no começo de afirmação (alvo: It is X who …); "That + verbo … is" no começo (alvo: What). Começos com pergunta de verdade (Is it…?, Was the…?) só pegam quando há that/who e terminam sem "?". A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  if (!/\?\s*$/.test(frase)) out = out.concat(A(/^\s*((?:is|was|isn't|isn’t|wasn't|wasn’t) (?:the|my|a|an|his|her|our|their|this|only) [^,.!?]*? (?:that|who) )/g, m, 1, 'The empty IT is missing: IT was the conversation that …'));
  out = out.concat(A(/\b(it(?:'s|’s| is| was| isn't| isn’t| wasn't| wasn’t) [^,.!?]{2,40}? what) (?!if\b)/g, m, 1, 'After the focus: THAT (or WHO), not what.'));
  out = out.concat(A(/^\s*(what (?:are|is|was|were|do|does|did) (?:you|i|we|they|he|she|it|people)(?: \w+){0,2} (?:is|was))\b/g, m, 1, 'After WHAT, normal order: what you are is …'));
  out = out.concat(A(/^\s*(who (?:keeps|interrupts|interrupted|distracts|distracted|called|said|told|helped) [^,.!?]*? (?:is|was))\b/g, m, 1, 'A person: It is my manager WHO …'));
  out = out.concat(A(/^\s*(that (?:distracts|costs|stopped|slowed|changed|surprised|matters|helps) [^,.!?]*? (?:is|was))\b/g, m, 1, 'No noun in front: WHAT distracts me is …'));
  return out;
};
