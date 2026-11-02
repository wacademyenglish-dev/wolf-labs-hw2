/* As regras do corretor da REVISÃO A1 · UNIDADE 2: a / an pelo som, o adjetivo depois da coisa (bag black),
   this / that + plural, os plurais com -s a mais (childrens, peoples), more cheap. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(a (?:umbrella|apple|orange|egg|hour|old|eye|idea|ice|elephant|answer|English))\b/gi, m, 1, 'A vowel sound: an. an umbrella, an hour.'));
  out = out.concat(A(/\b((?:bag|car|coat|phone|house|dog|cat|umbrella|suitcase|backpack|book) (?:black|white|red|blue|green|yellow|big|small|new|old))\b/gi, m, 1, 'The adjective comes first: a black bag.'));
  out = out.concat(A(/\b((?:this|that) (?:keys|books|shoes|boxes|people|children|bags|things|pens))\b/gi, m, 1, 'Plural: these / those. these keys.'));
  out = out.concat(A(/\b(childrens|peoples|mouses|foots|mans|womans)\b/gi, m, 1, 'This plural is already plural: children, people, mice, feet, men, women.'));
  out = out.concat(A(/\b(more (?:cheap|big|small|fast|old|new|nice))\b/gi, m, 1, 'Short word: -er. cheaper, bigger.'));
  return out;
};