/* As regras do corretor desta aula (nível 1): I'm + idade, pounds com s, dias com maiúscula e com on, How much is it? A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var NUM = '(?:\\d{1,3}|(?:twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)(?:-\\w+)?|ten|eleven|twelve|\\w+teen)';
  out = out.concat(A(new RegExp('\\b(?:i|he|she|you|we|they)\\s+(have|has)\\s+' + NUM + '(?=\\s+years|\\s*[.,!]|\\s*$|\\s+and\\b)', 'g'), m, 1, 'For age: I’m 25 (no have).'));
  out = out.concat(A(new RegExp('\\b(?:two|three|four|five|six|seven|eight|nine|ten|hundred|' + NUM + ')\\s+(pound)\\b(?!s)', 'g'), m, 1, 'More than one: pounds, with an s.'));
  out = out.concat(A(/\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/g, frase, 1, 'Days start with a capital letter: Monday.'));
  out = out.concat(A(/\b(in)\s+(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/g, m, 1, 'With a day: on Monday.'));
  out = out.concat(A(/\bhow much\s+(it is|it's|is cost|costs it)\b/g, m, 1, 'The question: How much is it?'));
  out = out.concat(A(/\bmy name\s+(?!is\b|'s\b)([a-z]+)\b/g, m, 1, 'My name IS …'));
  return out;
};
