/* As regras do corretor · Selling Services 11 · Last Year We Saved 20%. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b(didn[’']t (?:saved|needed|connected|worked|used|started|wanted|changed|reduced|sent|made|had|began|bought))\b/gi, m, 1, "After didn’t: the simple verb (didn’t save, didn’t need)."));
  out = out.concat(A(/\b((?:was|were) don[’']t|didn[’']t (?:was|were))\b/gi, m, 1, "Past of be: wasn’t / weren’t."));
  out = out.concat(A(/\b(last (?:year|month|week),? (?:we|they|i) (?:save|connect|start|reduce|send|make|have|begin|need|work))\b/gi, m, 1, "Past: we saved, we sent, we had, we began."));
  return out;
};
