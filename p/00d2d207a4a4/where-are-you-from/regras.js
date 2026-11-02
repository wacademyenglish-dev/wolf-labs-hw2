/* As regras do corretor desta aula (nível 1): wh-questions — wh + do/does + pessoa + verbo, be sem do, from/with no fim, who para pessoa. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(from where|with who|with whom)\b/g, m, 1, 'Question word first. from / with at the end: Where are you from?'));
  out = out.concat(A(/\b(?:where|what|when|who)\s+(do|does)\s+(?:you|he|she|they|we|\w+)\s+from\b/g, m, 1, 'from goes with be: Where are you from?'));
  out = out.concat(A(/\b(?:where|what|when|who)\s+(?:you|they|we|he|she)\s+(live|lives|work|works|get|gets|do|does)\b/g, m, 1, 'An action verb needs do / does: Where do you live?'));
  out = out.concat(A(/\b(?:where|when|who)\s+(are|is|am)\s+(?:you|he|she|they|we)\s+(?:live|work|get|study|go)\b/g, m, 1, 'live is an action verb: Where do you live?'));
  out = out.concat(A(/\bdoes\s+(?:he|she|it|\w+)\s+((?:live|work|get|go|do|study|play|watch|eat)s|does|goes)\b/g, m, 1, 'Only one s: does takes it. Where does she live?'));
  out = out.concat(A(/\b(?:where|what|when|who)\s+(do)\s+(?:he|she|it)\b/g, m, 1, 'He / she: does.'));
  out = out.concat(A(/\bwhat\s+do\s+you\s+(make)\s*\?/g, m, 1, 'For a job: What do you do?'));
  out = out.concat(A(/\b(what)\s+is\s+your\s+favorite\s+(?:singer|actor|actress|player|band|artist|writer)\b/g, m, 1, 'A person: Who is your favorite singer?'));
  return out;
};
