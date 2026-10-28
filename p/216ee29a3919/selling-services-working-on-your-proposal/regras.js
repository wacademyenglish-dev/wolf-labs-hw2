/* As regras do corretor · Selling Services 10 · We’re Working on Your Proposal.. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/(?<!\b(?:are|is|am|was|were)\s)\b((?:we|they|i|you|he|she) (?:working|preparing|checking|sending|waiting|talking|using|writing))\b/gi, m, 1, "Now: am / is / are + -ing (we’re working)."));
  out = out.concat(A(/\b((?:am|is|are|i[’']m|we[’']re|they[’']re|she[’']s|he[’']s) (?:work|prepare|check|send|wait|talk|write))\b/gi, m, 1, "be + verb-ing: I’m working, we’re checking."));
  return out;
};
