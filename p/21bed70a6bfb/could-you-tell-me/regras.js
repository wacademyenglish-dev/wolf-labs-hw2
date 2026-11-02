/* As regras do corretor desta aula (nível 3): perguntas indiretas — ordem de frase depois do começo educado, sem do/does/did, if para sim/não, mind + -ing. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var ini = '(?:could you tell me|can you tell me|do you know|can i ask|i was wondering|i wonder|would you mind telling me|i\'d like to know|i would like to know)';
  out = out.concat(A(new RegExp('\\b' + ini + '\\s+(?:where|when|what|why|how(?:\\s+\\w+)?|who|which)\\s+((?:is|are|was|were|will|would|can|could)\\s+(?:the|my|your|our|their|it|he|she|they|we|i|you|there|this|that)\\b)', 'g'), m, 1, 'After the starter, sentence order: where the office IS.'));
  out = out.concat(A(new RegExp('\\b' + ini + '\\s+(?:where|when|what|why|how(?:\\s+\\w+)?|who|which)\\s+(?:\\w+\\s+)?((?:do|does|did)\\s+(?:the|my|your|it|he|she|they|we|i|you|people)\\b)', 'g'), m, 1, 'No do / does / did after the starter: what time it starts.'));
  out = out.concat(A(new RegExp('\\b' + ini + '\\s+((?:is|are|was|were|do|does|did|can|could|will)\\s+(?:the|it|there|he|she|they|we|i|you)\\b)', 'g'), m, 1, 'A yes/no question needs IF: … if the job is remote.'));
  out = out.concat(A(/\b(would you mind to)\s+\w+/g, m, 1, 'Would you mind + -ing: mind telling me.'));
  out = out.concat(A(/\b(if\s+(?:is|are|was|were|do|does|did|can|could)\s+(?:the|it|there|he|she|they|we|i|you))\b/g, m, 1, 'After if, sentence order: if the job is remote.'));
  return out;
};
