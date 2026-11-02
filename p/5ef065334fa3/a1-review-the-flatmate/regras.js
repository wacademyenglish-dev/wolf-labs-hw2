/* As regras do corretor da REVISÃO A1 · UNIDADE 6: he / she + verbo sem -s, doesn't + verbo com -s,
   don't + never, in + hora, in + data. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:he|she|it|my (?:mother|father|sister|brother|friend)) (?:work|live|get|go|cook|like|play|watch|eat|drink|have|read|run|sleep|teach))\b/gi, m, 1, 'he / she + -s: she works, he goes.'));
  out = out.concat(A(/\b((?:doesn’t|doesn't|does not) (?:works|lives|gets|goes|cooks|likes|plays|watches|eats|has|reads))\b/gi, m, 1, 'After doesn’t: no -s. He doesn’t cook.'));
  out = out.concat(A(/\b((?:don’t|don't|doesn’t|doesn't) never)\b/gi, m, 1, 'never alone: I never cook.'));
  out = out.concat(A(/\b(in (?:\d{1,2}(?::\d\d)?|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve) o’?'?clock)\b/gi, m, 1, 'at + time: at seven o’clock.'));
  return out;
};