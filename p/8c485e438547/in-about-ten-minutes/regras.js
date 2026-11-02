/* As regras do corretor desta aula (nível 2): at / on / in de tempo. in / on + hora (in 9 a.m., on five o'clock), in / at + dia da semana ou data (in Friday, at December 24th), on / at + mês ou ano (on March, at 2010), on / at + parte do dia (on the afternoon, at the morning), in the night / on night (é at night), after ten minutes no sentido de daqui a (só depois de "is" ou "in about"), on ten minutes. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:in|on) (?:\d{1,2}(?::\d\d)? ?(?:a\.|p\.|am\b|pm\b|o'clock|o’clock)|(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve) (?:o'clock|o’clock)|noon|midnight))/g, m, 1, 'Hours: at. at 9 a.m., at five o’clock.'));
  out = out.concat(A(/\b((?:in|at) (?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)s?)\b/g, m, 1, 'Days: on. on Friday.'));
  out = out.concat(A(/\b((?:in|at) (?:january|february|march|april|may|june|july|august|september|october|november|december) \d{1,2}(?:st|nd|rd|th)?)\b/g, m, 1, 'Dates: on. on December 24th.'));
  out = out.concat(A(/\b((?:on|at) (?:january|february|march|april|june|july|august|september|october|november|december))\b(?! \d)/g, m, 1, 'Months: in. in March.'));
  out = out.concat(A(/\b((?:on|at) (?:19|20)\d\d)\b/g, m, 1, 'Years: in. in 2010.'));
  out = out.concat(A(/\b((?:on|at) the (?:morning|afternoon|evening))\b/g, m, 1, 'Parts of the day: in the morning, in the afternoon.', function (x) { return !/\b(?:on|at) the (?:morning|afternoon|evening) of\b/.test(m); }));
  out = out.concat(A(/\b(in the night|on night|on the night)\b/g, m, 1, 'Night is different: at night.', function (x) { return !/\bnight (?:of|before)\b/.test(m); }));
  out = out.concat(A(/\b((?:is|in about|about) after (?:about )?(?:\d+|one|two|five|ten|fifteen|twenty|thirty) (?:minutes|hours|days))\b/g, m, 1, 'From now: in ten minutes.'));
  out = out.concat(A(/\b(on (?:about )?(?:\d+|one|two|five|ten|fifteen|twenty|thirty) (?:minutes|hours|days))\b/g, m, 1, 'From now: in ten minutes.'));
  return out;
};
