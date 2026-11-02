/* As regras do corretor desta aula (nível 2): much / many / a lot of, too much / too many, too + adjetivo, enough. many + incontável (sugar, money, candy, time, water, coffee, work, food, love), much + plural contável, How many money / How much kids, sugars / moneys, a lot + substantivo sem of, a lots of, too much / very much + adjetivo, substantivo + enough, there isn't enough + plural, How much money they spent? O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:too many|so many|how many|many) (?:sugar|money|candy(?! bars?\b)|time|water|coffee|work|food|love|homework|bread|milk|chocolate|noise|traffic|cheese|information))\b/g, m, 1, 'You can’t count it: much (too much sugar, how much money).'));
  out = out.concat(A(/\b((?:too much|so much|how much|much) (?:candy bars|bars|kids|children|people|dollars|times|chairs|apps|shoes|cars|cookies|candies|friends|things|clothes|books|games|cups|parks|jobs))\b/g, m, 1, 'You can count it: many (too many kids, how many dollars).'));
  out = out.concat(A(/\b(sugars|moneys|informations|homeworks)\b/g, m, 1, 'No plural: sugar, money, information, homework.'));
  out = out.concat(A(/\b((?:too many|how many|many) (?:candy bar|kid|dollar|chair|app|shoe|car|cookie|friend|thing|book|game|cup|park))\b/g, m, 1, 'After many: the plural. many kids, too many candy bars.', function (x) { return !/\bmany \w+ (?:bars|stores|shops)\b/.test(m.slice(m.indexOf(x[1]), m.indexOf(x[1]) + x[1].length + 8)); }));
  out = out.concat(A(/\b(a lot (?!of\b|cheaper|more|less|better|worse|bigger|smaller)(?:candy|sugar|money|kids|people|chocolate|time|work|friends|shoes|apps|food|coffee|cars))\b/g, m, 1, 'A lot of + noun: a lot of candy.'));
  out = out.concat(A(/\b(a lots of)\b/g, m, 1, 'a lot of / lots of (not a lots of).'));
  out = out.concat(A(/\b((?:too much|very much|too many) (?:expensive|cheap|sweet|big|small|hot|cold|tired|busy|late|early|fast|slow|loud|hard|easy|good|bad))\b/g, m, 1, 'Too + adjective: too expensive (no much).'));
  out = out.concat(A(/\b((?:chairs|money|candy|time|food|parks|chocolate|kids|people|cups) enough)\b/g, m, 1, 'Enough goes before the noun: enough chairs.', function (x) { return !/\b(?:old|big|tall|good|fast)\s*$/i.test(m.slice(0, m.indexOf(x[1]))); }));
  out = out.concat(A(/\b(there (?:isn't|isn’t|is not|is) enough (?:chairs|kids|people|cups|cars|parks|books|candy bars|seats))\b/g, m, 1, 'Many things: there aren’t / are enough.'));
  out = out.concat(A(/^\s*(how (?:much|many) \w+ (?:they|you|we|he|she|i) (?:spent|bought|ate|had|paid|made|got)\b[^?]*\?)/g, m, 1, 'Questions: How much money did they spend?'));
  return out;
};
