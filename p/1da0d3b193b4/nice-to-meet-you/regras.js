/* As regras do corretor desta aula (nível 1): apresentações, soletrar, his / her. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(name['’]s is|name is is)\b/g, m, 1, 'name’s already has IS inside: My name’s Ana, or My name is Ana.'));
  out = out.concat(A(/\b(what['’]?s you|what is you)\s+name\b/g, m, 1, 'YOUR name: What’s your name?'));
  out = out.concat(A(/\bhow\s+(you)\s+spell\b/g, m, 1, 'How DO you spell it?'));
  out = out.concat(A(/\bhow do you (spell)\s*\?/g, m, 1, 'Spell what? How do you spell IT?'));
  out = out.concat(A(/\bnice to meet you,?\s+(to)\b(?!\s+\w)/g, m, 1, 'Also: TOO, with two O’s.'));
  out = out.concat(A(/\b(?:i|my name)\s+(call|calls|am call|is call)\b/g, m, 1, 'In English: My name’s … or I’m …'));
  out = out.concat(A(/\b((?:she|he)\s+name(?:['’]s)?)\b/g, m, 1, 'HIS name (a man), HER name (a woman).'));
  out = out.concat(A(/\b(i am|i['’]m)\s+(?:is|am)\b/g, m, 1, 'I’m already has AM inside: I’m Ana.'));
  return out;
};
