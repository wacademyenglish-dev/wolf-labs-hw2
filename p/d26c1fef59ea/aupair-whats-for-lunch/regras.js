/* As regras do corretor da revisão What’s for Lunch?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(isn[’']t some|aren[’']t some|don[’']t have some)\b/gi, m, 1, "Negative: any."));
  out = out.concat(A(/\b(breads|cheeses|rices|milks)\b/gi, m, 1, "Uncountable: bread, cheese, rice, milk (a slice of bread)."));
  out = out.concat(A(/\b(how much (?:eggs|apples|cookies|bananas))\b/gi, m, 1, "Countable: How many…?"));
  return out;
};
