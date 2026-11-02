/* As regras do corretor desta aula (nível 1): o adjetivo antes do nome, but × and, "more cheap". A aula e a lição de casa Live usam este arquivo. */
var ADJ_F = '(?:cheap|expensive|fast|slow|good|bad|new|old|big|small|nice|beautiful|quick|long|short|easy|hard|comfortable)';
var NOME_F = '(?:car|bike|bus|train|plane|taxi|phone|metro|subway|trip|ticket|house|city|computer|bag|coat|shoes|watch|restaurant|hotel|book)';
var BONS_F = { cheap: 1, fast: 1, good: 1, nice: 1, quick: 1, easy: 1, comfortable: 1, beautiful: 1 }, RUINS_F = { expensive: 1, slow: 1, bad: 1, hard: 1 };
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(new RegExp('\\b(?:a|an|the|my|your|his|her|our|their)\\s+(' + NOME_F + '\\s+' + ADJ_F + ')\\b(?!\\s+(?:and|but|or)\\b)(?=\\s*(?:[.,!?]|$|for|in|to))', 'g'), m, 1, 'The adjective comes first: a fast car.'));
  out = out.concat(A(/\b(more\s+(?:cheap|fast|slow|big|small|good|bad|nice|long|short|easy|old|new))\b/g, m, 1, 'Not “more cheap”: say cheap (or cheaper, another lesson).'));
  /* but × and: dois adjetivos, um bom e um ruim → but; os dois do mesmo lado → and */
  var re = /\b(cheap|expensive|fast|slow|good|bad|easy|hard|nice|quick|comfortable)\b(?:,)?\s+(and|but)\s+(?:it(?:'s|’s| is| was)\s+|(?:it\s+)?(?:isn['’]t|wasn['’]t)\s+)?(?:very\s+|really\s+)?(cheap|expensive|fast|slow|good|bad|easy|hard|nice|quick|comfortable)\b/g, r;
  while ((r = re.exec(m))) {
    var neg = /isn|wasn/.test(r[0]);
    var b1 = BONS_F[r[1]] ? 1 : 0, b2 = BONS_F[r[3]] ? 1 : 0; if (neg) b2 = 1 - b2;
    var quer = b1 === b2 ? 'and' : 'but';
    if (r[2] !== quer) { var i = r.index + r[0].indexOf(' ' + r[2] + ' ') + 1; out.push({ i: i, f: i + r[2].length, msg: quer === 'but' ? 'One good, one bad: BUT.' : 'Both on the same side: AND.' }); }
  }
  out = out.concat(A(/\bit\s+(not)\s+(?:fast|cheap|slow|expensive)\b/g, m, 1, 'Say it isn’t: It isn’t fast.'));
  return out;
};
