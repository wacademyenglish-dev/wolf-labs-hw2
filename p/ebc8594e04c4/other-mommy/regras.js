/* As regras do corretor desta aula (nível 1): present simple com he / she. Sujeito de 3ª pessoa + verbo sem -s (Mommy wear, she sing), she / he + have / haves, is + verbo base (is wear), don't com he / she, doesn't / does + verbo com -s, Do he / Do she, -ing sem be (She wearing). O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var Q = '(?:he|she|it|mommy|other mommy|bela|my mother|my father|my sister|my brother|my mom|my dad|my friend|my teacher|my grandmother|the girl|the mother)';
  var V = '(?:wear|sing|call|smile|like|live|work|play|cook|open|look|want|know|watch|sleep|go|eat|need|love|hate|stay)';
  out = out.concat(A(new RegExp('\\b(' + Q + ' ' + V + ')\\b', 'g'), m, 1, 'He / she: the verb + -s. She wears, she sings.', function (x) { return !/\b(?:does|doesn't|doesn’t|did|didn't|didn’t|can|can't|can’t|will|would|should|to|let|make|help) (?:\w+ )?(?:\w+ )?$/i.test(frase.slice(0, frase.toLowerCase().indexOf(x[1].toLowerCase()))); }));
  out = out.concat(A(new RegExp('\\b(' + Q + ' (?:have|haves))\\b', 'g'), m, 1, 'He / she: has. She has short hair.', function (x) { return !/\b(?:does|doesn't|doesn’t|did|didn't|didn’t|can|will|would|should|to) (?:\w+ )?(?:\w+ )?$/i.test(frase.slice(0, frase.toLowerCase().indexOf(x[1].toLowerCase()))); }));
  out = out.concat(A(/\b(haves)\b/g, m, 1, 'Have → has. She has.'));
  out = out.concat(A(new RegExp('\\b((?:is|are|am) ' + V + ')\\b(?! to)', 'g'), m, 1, 'No is here: Mommy wears…, she sings…', function (x) { return !/\b(?:is|are|am) (?:like)\b/.test(x[1]); }));
  out = out.concat(A(new RegExp('\\b(' + Q + ' (?:don\'t|don’t|do not))\\b', 'g'), m, 1, 'He / she: doesn’t. She doesn’t sing.'));
  out = out.concat(A(/\b((?:does|doesn't|doesn’t|does not) (?:\w+ )?(?:wears|sings|calls|smiles|likes|lives|works|plays|has|wants|knows|watches|sleeps|goes|eats|loves|stays))\b/g, m, 1, 'After does / doesn’t: no -s. Does she smile?'));
  out = out.concat(A(/\b(do (?:he|she|it|mommy|bela|your mother|your father))\b/g, m, 1, 'He / she: Does she…?'));
  out = out.concat(A(new RegExp('\\b(' + Q + ' (?:wearing|singing|smiling|calling|playing|working))\\b', 'g'), m, 1, 'Always, every day: she wears (not wearing).', function () { return !/^\s*(?:is|are|was|were)\b/i.test(frase); }));
  return out;
};
