/* As regras do corretor desta aula (nível 1): don't / doesn't + verbo puro, Do / Does …? e o S que não dobra. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:it|he|she|this|that|the\s+(?:machine|door|dryer|shower|oven|phone|fridge|tv|light|car))\s+(don['’]?t)\b/g, m, 1, 'One thing: DOESN’T.'));
  out = out.concat(A(/\b(?:they|we|you|i|the\s+(?:machines|doors|windows|lights|kids))\s+(doesn['’]?t)\b/g, m, 1, 'More than one, or I, you: DON’T.'));
  out = out.concat(A(/\b(?:doesn['’]?t|does\s+not|don['’]?t|do\s+not)\s+(\w+s)\b(?<!\b(?:is|was|has|this|us|plus|gas|bus|always|across|less|kiss|miss|pass|guess|press|dress|cross|process|discuss|focus)\b)/g, m, 1, 'After doesn’t, the verb is plain: doesn’t work.'));
  out = out.concat(A(/\b(?:doesn['’]?t|does\s+not)\s+(has)\b/g, m, 1, 'HAS goes back to HAVE: doesn’t have.'));
  out = out.concat(A(/\bdoes\s+(?:it|he|she|the\s+\w+|your\s+\w+|my\s+\w+)\s+(\w+s|has)\b(?<!\b(?:is|was|this|us|always|plus|bus)\b)/g, m, 1, 'After DOES, the verb is plain: Does it work?'));
  out = out.concat(A(/\b(do)\s+(?:it|he|she|the\s+(?:machine|door|dryer))\b/g, m, 1, 'One thing: DOES it…?'));
  out = out.concat(A(/\b(does)\s+(?:they|we|you|the\s+(?:machines|doors))\b/g, m, 1, 'More than one: DO they…?'));
  out = out.concat(A(/\b(?:it|he|she|i|they|we|shower|machine|door|phone|oven|car)\s+((?:not|no)\s+(?:work|works|close|get|take|like|have|use))\b/g, m, 1, 'The no: doesn’t / don’t + the verb.'));
  return out;
};
