/* As regras do corretor desta aula (nível 2): a few / many com contável, a little / much com incontável, a lot of nas positivas, sem of depois de a few / a little. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var INC = '(?:gravy|rice|butter|time|money|water|juice|salt|sugar|bread|milk|coffee|tea|cheese|meat|work|homework|information|advice|furniture|pie|cake|soup|ice)';
  var CONT = '(?:beans|potatoes|chairs|napkins|guests|friends|cookies|people|plates|apps|shoes|cups|bottles|boxes|eggs|apples|minutes|hours|days|kids|children)';
  out = out.concat(A(new RegExp('\\b(a few|many|not many)\\s+' + INC + '\\b', 'g'), m, 1, 'You can’t count it: a little, much.'));
  out = out.concat(A(new RegExp('\\b(a little|much|not much)\\s+' + CONT + '\\b', 'g'), m, 1, 'You can count it: a few, many.'));
  out = out.concat(A(new RegExp('\\bhow\\s+(many)\\s+' + INC + '\\b', 'g'), m, 1, 'Can’t count it: How much …?'));
  out = out.concat(A(new RegExp('\\bhow\\s+(much)\\s+' + CONT + '\\b', 'g'), m, 1, 'Count it: How many …?'));
  out = out.concat(A(/\b(?:a few|a little)\s+(of)\s+(?!the\b|my\b|your\b|them\b|us\b|it\b)/g, m, 1, 'No of after a few / a little.'));
  out = out.concat(A(/\b(a lot)\s+(?!of\b|more\b|better\b|of\b)(?:green|beans|potatoes|chairs|food|people|guests|friends|time|work|money)\b/g, m, 1, 'a lot OF: three words.'));
  out = out.concat(A(/(?<!\b(?:do|does|did)\s)\b(?:i|we|you|they|he|she)\s+(?:have|has|need|needs|want|wants|eat|drink)\s+(much)\s+(?!more\b)\w+/g, m, 1, 'Positive sentence: a lot of (not much).'));
  out = out.concat(A(/\bthere\s+(is)\s+a\s+few\b/g, m, 1, 'a few + plural: There are a few …'));
  return out;
};
