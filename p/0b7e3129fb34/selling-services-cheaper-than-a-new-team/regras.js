/* As regras do corretor · Selling Services 12 · It’s Cheaper Than a New Team. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b(more (?:cheap|fast|easy|big|small|slow|quick|good|bad|cheaper|faster|easier|better|worse))\b/gi, m, 1, "Short word: -er (cheaper, faster). Good → better. No “more”."));
  out = out.concat(A(/\b((?:cheaper|faster|better|easier|bigger|smaller|worse|slower) that)\b/gi, m, 1, "Compare with than: cheaper than."));
  out = out.concat(A(/\b(efficienter|expensiver|importanter)\b/gi, m, 1, "Long word: more efficient, more expensive."));
  return out;
};
