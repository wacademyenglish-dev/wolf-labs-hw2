/* As regras do corretor desta aula (nível 4): passive reporting. It says / It believes / It thinks / It knows that, Is known that sem It, as duas portas coladas (is said that he), to + passado (to stole), is believe sem particípio, the signal thinks to, the reporter reported to have, to are, plural com is, to have knew. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/^\s*(it (?:says|believes|thinks|knows|expects|reports) that)\b/g, m, 1, 'Nobody in particular says it: It is said / believed / thought / known that…'));
  out = out.concat(A(/^\s*((?:is|was) (?:known|said|believed|thought|expected|reported) that)\b/g, m, 1, 'Start with It: It is known that…'));
  out = out.concat(A(/\b((?:\w+) (?:is|are|was|were) (?:said|believed|thought|expected|reported|known) that (?:he|she|they|it|we))\b/g, m, 1, 'Choose one door: He is said to have stolen… OR It is said that he stole…', function (x) { return !/^it /.test(x[1]); }));
  out = out.concat(A(/\b((?:said|believed|thought|expected|reported|known) to (?:stole|took|lost|knew|went|came|saw|did|were|was|had))\b/g, m, 1, 'Something in the past: to have + participle (to have stolen).'));
  out = out.concat(A(/\b((?:is|are|was|were) (?:believe|say|think|expect|report|know))\b(?! (?:me|you)\b)/g, m, 1, 'The passive: is + participle (is believed, is said).'));
  out = out.concat(A(/\b((?:the \w+|he|she|they|it) (?:thinks|believes|says) to \w+)/g, m, 1, 'Use the passive: is thought to, is believed to.'));
  out = out.concat(A(/\b((?:the \w+|he|she) (?:reported|said|believed|thought) to have)\b/g, m, 1, 'Don’t forget be: is reported to have.'));
  out = out.concat(A(/\b((?:said|believed|thought|expected|reported|known) to (?:are|is|am))\b/g, m, 1, 'After to: the base verb (to be).'));
  out = out.concat(A(/\b((?:the \w+s|they|people) is (?:said|believed|thought|expected|reported|known))\b/g, m, 1, 'Plural: are believed.'));
  out = out.concat(A(/\b(to have (?:knew|stole|took|went|saw|came|did|ate|wrote|spoke|broke))\b/g, m, 1, 'After to have: the participle (known, stolen, taken).'));
  out = out.concat(A(/\b((?:is|are) (?:said|believed|thought|expected|reported) to (?:\w+ )?(?:yesterday|last \w+|ago))\b/g, m, 1, 'Something in the past: to have + participle.'));
  out = out.concat(A(/\b((?:is|are|was|were) (?:said|believed|thought|expected|reported|known) that (?:comes|come|is|are|was|were|has|have|lives|works|speaks|knows))\b/g, m, 1, 'Choose one door: The signal is thought to come… OR It is thought that the signal comes…'));
  return out;
};
