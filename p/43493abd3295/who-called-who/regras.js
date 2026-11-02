/* As regras do corretor desta aula (nível 2): pergunta de sujeito sem did; de objeto com did + verbo puro. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/(?:^|[.!?,])\s*((?:who|what)\s+did\s+(?:call|pay|invite|text|drive|happen|send|tell|ask|win|break|take|eat|see|help|choose|bring|make|cook|order|leave|forget|meet)\s+(?:me|you|him|her|us|them|the|a|my|your|caio|bea|nina|davi|marina|sara|rui|lia|iuri|on|at|in|yesterday|last|first|\?))/g, m, 1, 'WHO is the doer: no DID. Who called you?', function (x) { return /\?/.test(m); }));
  out = out.concat(A(/(?:^|[.!?,])\s*((?:who|what)\s+(?:you|she|he|they|we|i|marina|caio|bea|sara|iuri|nina|davi)\s+(?:called|paid|invited|texted|drove|sent|told|asked|saw|met|ate))\b(?=[^.!]*\?)/g, m, 1, 'WHO is the other one: DID comes in. Who did you call?'));
  out = out.concat(A(/\b(?:who|what)\s+did\s+\w+\s+((?:called|paid|invited|texted|drove|sent|told|asked|saw|met|ate|bought|had))\b/g, m, 1, 'One past only: Who did Sara DRIVE home?'));
  return out;
};
