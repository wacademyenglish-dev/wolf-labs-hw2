/* As regras do corretor desta aula (nível 3): should / ought to / had better. should to / had better to, modal + verbo flexionado (should finding, should sleeps, 'd better smiled), had better don't, ought sem to, had not better, Do I should, pergunta sem inversão, better had. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:should|shouldn't|had better|'d better|you better)(?: not)? to \w+)/g, m, 1, 'No to after should / had better: should find, ’d better smile. (Only ought takes to.)'));
  out = out.concat(A(/\b((?:should|shouldn't|ought to|had better|'d better)(?: not)? \w+ing)\b/g, m, 1, 'After the modal: the base verb (find, sleep).', function (x) { return !/(?:bring|sing|ring|swing)$/.test(x[1]); }));
  out = out.concat(A(/\b((?:should|shouldn't) (?:sleeps|finds|goes|runs|eats|takes|makes|has|does|is))\b/g, m, 1, 'No -s after should: you should sleep.'));
  out = out.concat(A(/\b((?:had|'d) better (?:don't|doesn't|didn't))\b/g, m, 1, 'The negative: had better not + verb.'));
  out = out.concat(A(/\b(ought (?!to\b)\w+)/g, m, 1, 'Ought takes to: ought to find.'));
  out = out.concat(A(/\b((?:had|'d) better(?: not)? (?:smiled|touched|ran|went|hid|found|made|told|stayed|left|called|studied|ate|took))\b/g, m, 1, 'Had better looks past, but it is about now: the base verb.'));
  out = out.concat(A(/\b(had not better|hadn't better)\b/g, m, 1, 'Not goes after better: you’d better not touch.'));
  out = out.concat(A(/\b((?:do|does|did) (?:i|you|he|she|we|they) should)\b/g, m, 1, 'Questions: Should I…? (should first, no do)'));
  out = out.concat(A(/^\s*((?:i|we) should [^?]*\?)/g, m, 1, 'Questions: should first. Should I trust…?'));
  out = out.concat(A(/\b(better had)\b/g, m, 1, 'The order: you had better / you’d better + verb.'));
  return out;
};
