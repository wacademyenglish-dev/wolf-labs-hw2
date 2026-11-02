/* As regras do corretor desta aula (nível 1): am / is / are going to para planos. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/(?<!(?:\b(?:am|is|are|was|were|not)|n['’]t)\s+)\b((?:i|you|we|they|he|she|it)\s+going to)\b/g, m, 1, 'Going to needs its partner: I’m going to, she’s going to.'));
  out = out.concat(A(/\b(?:tomorrow|tonight|next week|next month|next year|this weekend|this saturday|this sunday)\s*,?\s*(?:i|we|they|you)\s+(?!am\b|are\b|will\b|want|need|have\b|think|hope|can\b|might|plan|don|won|was\b|were\b|going\b|usually|always|never|also)(\w+)\b/g, m, 1, 'A plan: I’m going to travel tomorrow.'));
  out = out.concat(A(/\b(?:tomorrow|tonight|next week|next month|next year|this weekend)\s*,?\s*(?:he|she|it)\s+(?!is\b|will\b|wants|needs|has\b|thinks|can\b|might|plans|doesn|won|was\b|going\b|usually|always|never|also)(\w+s)\b/g, m, 1, 'A plan: she’s going to work tomorrow.'));
  out = out.concat(A(/\bgoing to (?!bring|sing|ring|swing|spring)(\w+ing)\b/g, m, 1, 'After going to: the plain verb. going to travel.'));
  out = out.concat(A(/\b(?:am|is|are|['’]m|['’]s|['’]re)\s+(go to)\s+(?!the\b|a\b|my\b|school|work|bed|church|class)\w+/g, m, 1, 'Going, with -ing: I’m going to travel.'));
  out = out.concat(A(/\b(amn['’]?t)\b/g, m, 1, 'There is no amn’t: I’m not going to.'));
  out = out.concat(A(/\b(gonna)\b/g, m, 1, 'You say gonna. You write going to.'));
  return out;
};
