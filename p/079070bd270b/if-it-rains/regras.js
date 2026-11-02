/* As regras do corretor da revisão If It Rains, Take This. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(if (?:it|he|she|you|they|we|I|the \w+) will)\b/gi, m, 1, "After if, use the present: if it rains."));
  out = out.concat(A(/\b(no worry)\b/gi, m, 1, "Don’t worry."));
  out = out.concat(A(/\b(if (?:he|she|it|the dog|the cat|biscuit|the machine) (?:bark|look|make|rain|call|knock|stop))\b/gi, m, 1, "He / she / it: barks, looks, makes."));
  return out;
};
