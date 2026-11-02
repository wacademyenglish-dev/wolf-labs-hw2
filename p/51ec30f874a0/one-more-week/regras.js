/* As regras do corretor desta aula (nível 3): I'd rather + verbo puro (eu); I'd rather + outra pessoa + passado; It's time + pessoa + passado; já aconteceu: hadn't + particípio. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:i'd|i’d|i would|we'd|we’d) rather (?:you|he|she|they|we|people|my \w+|the \w+) (?:go|stay|call|give|play|come|tell|talk|leave|do|invite|find|expect|take|don't|don’t|doesn't|doesn’t|not))\b/g, m, 1, 'Someone else after rather: a PAST form (you went, you didn’t).'));
  out = out.concat(A(/\b((?:it's|it’s|it is)(?: about)? time (?:we|you|i|they|he|she|somebody|the \w+) (?:go|leave|find|do|tell|decide|start|talk|say|book|call|stop|get))\b/g, m, 1, 'It’s time + person + PAST form: it’s time we left.'));
  out = out.concat(A(/\b((?:i'd|i’d|i would) rather to \w+)/g, m, 1, 'No to: I’d rather stay.'));
  out = out.concat(A(/\b((?:i'd|i’d|i would) rather (?:stayed|went|took|worked|called))\b/g, m, 1, 'About you: the plain verb. I’d rather stay.'));
  out = out.concat(A(/\b((?:didn't|didn’t) (?:said|told|went|did|called|made))\b/g, m, 1, 'didn’t + the plain verb. Already done? hadn’t said.'));
  out = out.concat(A(/\b((?:it's|it’s|it is) time for (?:we|you|i|they))\b/g, m, 1, 'It’s time we… (no for).'));
  out = out.concat(A(/(?:^|[.!?,]\s*)(i rather)\b/g, m, 1, 'I’D rather (I would rather).'));
  return out;
};
