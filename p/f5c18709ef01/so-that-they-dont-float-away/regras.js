/* As regras do corretor desta aula (nível 3): propósito. for + verbo, for to, for + sujeito, for not, to don't, so as to not, in order to + -ing, so that sem verbo de verdade ("the glass not break"), can to. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(for to \w+)/g, m, 1, 'Just TO: to travel. Never for to.'));
  out = out.concat(A(/\b(for (?:keep|avoid|stay|need|sleep|travel|learn|get|see|buy|save|find|look|make|study|go|work|eat|protect|remember|forget|visit|help|wake))\b/g, m, 1, 'Before a verb, purpose is TO: to keep. for goes with a noun.'));
  out = out.concat(A(/\b(for (?:it|he|she|they|we|you|the kids|the food|the glass|the tool|the lights|his bones|my \w+) (?:don't|don’t|doesn't|doesn’t|not|can|stay|stays|ask|understand|won't|won’t))\b/g, m, 1, 'A new subject: SO THAT + subject + verb. so that it won’t…'));
  out = out.concat(A(/\b(for not(?: to)? \w+)/g, m, 1, 'The negative: so as not to / in order not to. Never for not.'));
  out = out.concat(A(/\b(to (?:don't|don’t|not to) \w+)/g, m, 1, 'not goes BEFORE to: so as not to fall. Never to don’t.'));
  out = out.concat(A(/\b(so as to not|in order to not)\b/g, m, 1, 'so as NOT TO / in order NOT TO.'));
  out = out.concat(A(/\b(in order to \w+ing)\b/g, m, 1, 'in order to + the plain verb.'));
  out = out.concat(A(/\b(so that (?:it|he|she|the \w+|they|we|i) not \w+)/g, m, 1, 'After so that + subject: a real verb. won’t / doesn’t / wouldn’t.'));
  out = out.concat(A(/\b((?:can|could) to \w+)/g, m, 1, 'can / could + the plain verb, no to.'));
  out = out.concat(A(/\b(to (?:it|he|she|the tool) not \w+)/g, m, 1, 'A new subject: so that it won’t…'));
  return out;
};
