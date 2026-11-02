/* As regras do corretor desta aula (nível 2): will + verbo puro (nunca will to), going to + verbo, won't; plano já marcado pede going to. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(will to|'ll to|won't to)\s+\w+/g, m, 1, 'No to after will: I’ll help.'));
  out = out.concat(A(/\b(?:will|'ll|won't)\s+(\w+(?:s|ed|ing))\b(?<!\b(?:is|was|has|does|this|bus|class|pass|miss|kiss|guess|dress|cross|press|focus|discuss|less|process|access)\b)/g, m, 1, 'After will: the plain verb (help, go, rain).'));
  out = out.concat(A(/\b(?:i|you|we|they)\s+(going to)\s+\w+/g, m, 1, 'With going to: am / are going to.'));
  out = out.concat(A(/\b(?:he|she|it)\s+(going to)\s+\w+/g, m, 1, 'With going to: is going to.'));
  out = out.concat(A(/\b(?:i|we)\s+(will)\s+\w+[^.!?]*\b(?:i booked|we booked|the ticket is|the table is booked|i already bought|it's booked)\b/g, m, 1, 'The plan was already there: going to.'));
  out = out.concat(A(/\b((?:am|is|are|'m|'s|'re)\s+going to)\s+(\w+(?:s|ed|ing))\b(?<!\b(?:is|was|has|does|this|bus|class|pass|miss|kiss|guess|dress|cross|press|focus|discuss|less)\b)/g, m, 2, 'After going to: the plain verb.'));
  return out;
};
