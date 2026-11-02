/* As regras do corretor da REVISÃO A1 · UNIDADE 4: o "tem" do português (have / has + coisa + lugar),
   between of / next of / in front the, in the home, isn't some, how much + plural. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/^((?:have|has) (?:a|an|two|three|four|some|one|many) \w+)/gi, m, 1, 'To say what exists: There is / There are.'));
  out = out.concat(A(/\b(between of|next of|in front the|in front to|under of|above of|behind of)\b/gi, m, 1, 'between, next to, in front of, under, behind.'));
  out = out.concat(A(/\b(in (?:the )?home)\b/gi, m, 1, 'at home (no in, no the).'));
  out = out.concat(A(/\b((?:isn’t|isn't|aren’t|aren't|is not|are not) some)\b/gi, m, 1, 'In a no-sentence: any. There isn’t any milk.'));
  out = out.concat(A(/\b(how much (?:chairs|rooms|bedrooms|people|books|apples|eggs|students))\b/gi, m, 1, 'Things you count: how many.'));
  return out;
};