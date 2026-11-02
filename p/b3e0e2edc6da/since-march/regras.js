/* As regras do corretor desta aula (nível 2): present perfect com since / for; since + ponto, for + tamanho; com data, passado. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:i|you|we|they|he|she|it)\s+(live|lives|work|works|know|knows|am|is|are|study|studies)\s+(?:here\s+|there\s+|in \w+\s+|at \w+\s+|him\s+|her\s+|them\s+|english\s+)?(?:since|for)\s+(?:\d|one|two|three|four|five|six|seven|eight|nine|ten|twelve|[a-z]+ (?:years?|months?|weeks?|days?)|january|february|march|april|may|june|july|august|september|october|november|december|school|last|20|19)/g, m, 1, 'Started before, still true: have / has + third form (have lived, has worked…).'));
  out = out.concat(A(/\b(since\s+(?:one|two|three|four|five|six|seven|eight|nine|ten|twelve|a few|many|\d+)\s+(?:years?|months?|weeks?|days?|hours?))\b/g, m, 1, 'A length: for three years.'));
  out = out.concat(A(/\b(for\s+(?:january|february|march|april|may|june|july|august|september|october|november|december|monday|tuesday|wednesday|thursday|friday|saturday|sunday|20\d\d|19\d\d))\b/g, m, 1, 'A point: since March.'));
  out = out.concat(A(/\b(?:have|has|'ve|'s)\s+(?:\w+ed|been|gone|left|paid|seen|known|had)\b[^.!?]*?\b((?:in|on) (?:january|february|march|april|may|june|july|august|september|october|november|december|monday|tuesday|wednesday|thursday|friday|saturday|sunday|20\d\d|19\d\d))\b/g, m, 1, 'With a date, the door closes: past (he left in March).'));
  out = out.concat(A(/\b(?:she|he|it)\s+(have)\s+(?:lived|worked|known|had|been|studied)\b/g, m, 1, 'he / she: has.'));
  return out;
};
