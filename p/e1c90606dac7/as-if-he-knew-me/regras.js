/* As regras do corretor desta aula (nível 4): as if / as though. would / will depois de as if, like as if / like if, as if you be, had readed, as if + verbo base para algo visível (as if it stuck), passado simples com for years (as if I knew her for years). O presente para algo falso não é marcado (às vezes é verdade); a aula ensina o passo atrás. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:as if|as though) (?:(?:i|you|he|she|it|we|they|\w+) (?:would|will)|(?:i|you|he|she|it|we|they)(?:'d|'ll)) (?:never )?\w+)/g, m, 1, 'No would / will after as if: as if he knew, as if she had been.', function (x) { return !/(?:would|'d) (?:like|rather)$/.test(x[1]); }));
  out = out.concat(A(/\b(like as if|like if|like as though)\b/g, m, 1, 'Say as if, not like as if / like if.'));
  out = out.concat(A(/\b((?:as if|as though) (?:i|you|he|she|it|we|they) be)\b/g, m, 1, 'Not true: were. as if you were happy.'));
  out = out.concat(A(/\b(had readed|has readed|have readed|had knowed|had saw|had went|had came)\b/g, m, 1, 'The participle: had read, had known, had seen, had gone.'));
  out = out.concat(A(/\b((?:as if|as though) (?:the \w+|it|he|she) (?:stuck|broke|stopped|closed))\b(?! (?:the|a|his|her|it)\b)/g, m, 1, 'Something you can see: as if + present (the elevator is stuck).'));
  out = out.concat(A(/\b((?:as if|as though) (?:i|you|he|she|we|they) (?:knew|met|saw|loved) (?:\w+ ){0,2}for (?:years|months|weeks|ages|a long time))\b/g, m, 1, 'Not true, before that moment: had + participle (as if I had known her for years).'));
  out = out.concat(A(/\b((?:felt|looked|seemed|acted|talked|spoke) (?:as if|as though) (?:i|you|he|she|we|they) (?:has|have) (?:known|been|seen|read|met))\b/g, m, 1, 'Not true, before that moment: had + participle (as if I had known).'));
  return out;
};
