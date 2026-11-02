/* As regras do corretor desta aula (nível 3): few / a few / little / a little / most. a few + incontável; a little + contável plural; few + incontável; little + contável plural; "the most of"; "most of people" (sem the); "a little of them". "Few" querendo dizer "a few" não dá para o corretor saber: é o professor quem pergunta "is it a complaint?". A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var INC = '(?:money|time|patience|water|training|information|advice|help|work|news|coffee|milk|sugar|luck|space|homework|furniture|traffic|food|noise)';
  var CONT = '(?:people|friends|teachers|colleagues|students|books|days|hours|minutes|questions|answers|copies|calls|words|cars|children|kids|years|weeks|times)';
  out = out.concat(A(new RegExp('\\b((?:a )?few ' + INC + ')\\b', 'g'), m, 1, 'You can’t count it: (a) little.'));
  out = out.concat(A(new RegExp('\\b((?:a )?little ' + CONT + ')\\b', 'g'), m, 1, 'You can count them: (a) few.'));
  out = out.concat(A(/\b(the most of)\b/g, m, 1, 'Never “the most of”: most of the teachers.'));
  out = out.concat(A(new RegExp('\\b(most of ' + CONT + ')\\b', 'g'), m, 1, 'most of THE people, or just most people.'));
  out = out.concat(A(/\b(a little of (?:them|us|you|the \w+s))\b/g, m, 1, 'You can count them: a few of them.'));
  out = out.concat(A(/\b(a few of (?:the )?(?:money|time|water))\b/g, m, 1, 'You can’t count it: a little of the money.'));
  return out;
};
