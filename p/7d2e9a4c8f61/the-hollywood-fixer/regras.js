/* As regras do corretor desta aula (nível 2): want / ask / tell + pessoa + to; sem "that"; say não leva pessoa. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:want|wants|wanted)\s+that)\s+(?:you|he|she|they|we|i|me|him|her|them|us|everybody|my|the)\b/g, m, 1, 'No THAT here: wants YOU TO go.'));
  out = out.concat(A(/\b((?:told|tell|tells|asked|ask|asks)\s+(?:me|you|him|her|them|us))\s+(?!to\b|not\b|that\b|she\b|he\b|i\b|we\b|they\b|you\b|there\b|everybody\b|nobody\b|lies\b|stories\b|about\b|for\b|a\b|the\b|my\b|your\b|his\b|her\b|our\b|their\b|why\b|what\b|where\b|when\b|how\b|who\b|if\b|and\b|so\b|again\b|yesterday\b|today\b|before\b|it\b|this\b|something\b|nothing\b|everything\b|questions?\b|out\b)[a-z]+\b/g, m, 1, 'The second verb keeps its TO: told me TO go.'));
  out = out.concat(A(/\b((?:say|says|said)\s+(?:me|him|her|them|us))\b/g, m, 1, 'SAY takes no person: told me, or said to me.'));
  out = out.concat(A(/\b((?:want|wants|wanted)\s+(?:me|you|him|her|them|us))\s+(?!to\b|not\b|back\b|here\b|there\b|now\b|home\b|so\b|too\b)[a-z]+\b/g, m, 1, 'want + person + TO: wants me TO stay.'));
  out = out.concat(A(/\b(?:told|asked)\s+(?:me|you|him|her|them|us)\s+(don't|don’t)\b/g, m, 1, 'NOT goes before TO: told me not to come.'));
  return out;
};
