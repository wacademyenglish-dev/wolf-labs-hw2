/* As regras do corretor desta aula (nível 2): want / need / plan / hope / decide + TO e enjoy / avoid / finish / mind / keep + -ING; nunca to + -ing. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:enjoy|enjoys|enjoyed|avoid|avoids|avoided|finish|finishes|finished|mind|minds|minded|keep|keeps|kept) to)\s+(?!the\b|my\b|your\b|his\b|her\b|our\b|their\b|me\b|him\b|them\b|us\b|a\b|an\b|this\b|that\b|it\b)[a-z]+\b/g, m, 1, 'enjoy, avoid, finish, mind, keep + -ing: I enjoy working.'));
  out = out.concat(A(/\b(?:want|wants|wanted|need|needs|needed|plan|plans|planned|hope|hopes|hoped|decide|decides|decided)\s+((?!nothing|something|anything|everything|morning|evening|thing|king|ring|spring|wing|sing\b|bring\b)[a-z]+ing)\b/g, m, 1, 'want, need, plan, hope, decide + TO + verb: I want to go.'));
  out = out.concat(A(/\b(?:want|wants|need|needs|plan|plans|hope|hopes|decided|decide)\s+to\s+((?!nothing|something|anything|everything|bring|sing|ring)[a-z]+ing)\b/g, m, 1, 'After to, the simple verb: decided to stay.'));
  out = out.concat(A(/\b(decided for)\s+\w+/g, m, 1, 'No for: I decided to stay.'));
  out = out.concat(A(/\b(?:i|you|we|they)\s+(?:don't\s+|do not\s+)?(?:want|need|plan|hope)\s+(go|find|work|stay|travel|visit|call|see|buy|eat|be|live|study|learn)\b/g, m, 1, 'Don’t forget the TO: I want to go.'));
  out = out.concat(A(/\b(?:enjoy|avoid|finish|mind|keep)\s+(work|travel|swim|cook|read|eat|take|clean|pack|wait|say|check|sleep|go|play|walk)\b(?!ing)/g, m, 1, 'This verb needs -ing: enjoy working.'));
  return out;
};
