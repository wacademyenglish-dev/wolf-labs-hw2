/* As regras do corretor desta aula (nível 1): whose, possessivos longos sozinhos (ours, theirs, hers), 's no plural (the twins'), dois donos com um 's, Whose are these? A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:it's|it is|they're|they are|is|are)\s+(our|their|your|her|my)\s*(?:[.!?,]|$|\band\b)/g, m, 1, 'No thing after it: ours, theirs, yours, hers, mine.'));
  out = out.concat(A(/\b(?:it's|it is|they're|they are)\s+(us|them|him|me)\s*(?:[.!?,]|$)/g, m, 1, 'The owner word: ours, theirs, his, mine.'));
  out = out.concat(A(/\b(\w+s's)\b/g, m, 1, 'The owner already ends in s: only the apostrophe (the twins’).'));
  out = out.concat(A(/\b(\w+'s\s+and\s+\w+'s)\s+(?:suitcase|bag|car|house|book|room|dog|cat|comic|idea)/g, m, 1, 'Two owners, one thing: one ’s at the end (Mia and Sam’s).'));
  out = out.concat(A(/\bwhose\s+(is)\s+(?:these|those)\b/g, m, 1, 'Many things: Whose are these?'));
  out = out.concat(A(/\b(?:they're|they are)\s+(theirs|ours|yours|hers|mine)\s+(?!and\b)[a-z]{3,}/g, m, 1, 'Before a thing: their, our, your, her, my.'));
  out = out.concat(A(/\b(?:it's|it is)\s+the\s+\w+\s+(of)\s+(?:the|my|your|mia|tom|rosa)\b/g, m, 1, 'Owner first, with ’s: the twins’ suitcase.'));
  return out;
};
