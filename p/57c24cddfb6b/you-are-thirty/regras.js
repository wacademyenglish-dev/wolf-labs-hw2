/* As regras do corretor desta aula (nível 1): be para idade e estados (I'm 30, I'm hungry), How old are you? A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var NUM = '(?:\\d{1,3}|(?:twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)(?:-\\w+)?|ten|eleven|twelve|\\w+teen)';
  out = out.concat(A(new RegExp('\\b(?:i|you|he|she|we|they|my \\w+)\\s+(have|has)\\s+' + NUM + '(?:\\s+years)?(?=\\s*(?:years|[.,!]|$|and\\b))', 'g'), m, 1, 'Age uses be: I’m 30. She’s 40.'));
  out = out.concat(A(/\b(?:i|you|he|she|we|they)\s+(have|has)\s+(?:hungry|thirsty|cold|hot|afraid|sleepy|tired|fear|hunger|thirst|sleep)\b/g, m, 1, 'States use be: I’m hungry. I’m cold.'));
  out = out.concat(A(/\bdo\s+you\s+(have)\s+(?:cold|hot|hungry|hunger|thirst|fear|sleep)\b/g, m, 1, 'Are you cold?'));
  out = out.concat(A(/\b(how many years)\s+(?:do|does|have|has)\b/g, m, 1, 'The question: How old are you?'));
  out = out.concat(A(/\bhow\s+old\s+(you|he|she|they)\b/g, m, 1, 'How old ARE you? / How old IS she?'));
  return out;
};
