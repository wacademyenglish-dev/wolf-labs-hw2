/* As regras do corretor da REVISÃO A1 · UNIDADE 7: love / like / hate + verbo puro, pronome sujeito
   depois do verbo ou da preposição, call to, he like. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:love|loves|like|likes|hate|hates|enjoy|enjoys) (?:cook|dance|read|run|swim|play|watch|walk|shop|sleep|travel|sing|clean|go|study|drive|eat))\b/gi, m, 1, 'love / like / hate + -ing: I love cooking.'));
  out = out.concat(A(/\b((?:call|help|visit|love|see|like|with|for|to) (?:he|she|they|I))\b/g, m, 1, 'After a verb or with / for: me, him, her, them.'));
  out = out.concat(A(/\b(call to (?:me|him|her|them|you|us))\b/gi, m, 1, 'call + person, no to: call me.'));
  out = out.concat(A(/\b((?:he|she) (?:like|love|hate) \w+ing)\b/gi, m, 1, 'he / she + -s: she likes reading.'));
  return out;
};