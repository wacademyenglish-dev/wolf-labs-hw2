/* As regras do corretor desta aula (nível 3): want / expect / need / ask / tell / would like + pessoa + to. want / expect / need / would like + that + frase, verbo + pessoa + -ing (expect me going), pronome sujeito (want he to), sem to (want me go), ask / tell + to + pessoa, wants me not to (o natural é doesn't want me to), told him to not + adjetivo (sem be). O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:want|wants|wanted|expect|expects|expected|need|needs|needed|would like|'d like|’d like|asked) that \w+)/g, m, 1, 'Not that: want / expect / need + person + to + verb.'));
  out = out.concat(A(/\b((?:expect|expects|expected|want|wants|wanted|need|needs|needed) (?:me|you|him|her|us|them|harry|ron|people|\w+) (?:going|working|reading|coming|doing|being|winning|studying))\b/g, m, 1, 'Want / expect + person + to (not -ing).', function (x) { return !/\b(?:need|needs|needed) (?:\w+) (?:fixing|cleaning)\b/.test(x[1]); }));
  out = out.concat(A(/\b((?:want|wants|wanted|expect|expects|expected|need|needs|needed|asked|told|would like) (?:he|she|they|we|i) to)\b/g, m, 1, 'After want / ask / tell: the object pronoun. want him to.'));
  out = out.concat(A(/\b((?:want|wants|wanted|expect|expects|expected|need|needs|needed|would like) (?:me|you|him|her|us|them|harry|ron|the \w+|people) (?:come|go|read|do|work|sit|be|win|choose|study|help|call|stay))\b/g, m, 1, 'Don’t forget to: want them to do.'));
  out = out.concat(A(/\b((?:ask|asks|asked|tell|tells|told) to (?:me|you|him|her|us|them|harry|ron|\w+) (?:to|not))\b/g, m, 1, 'Ask / tell + person, no to: asked Harry to sit.'));
  out = out.concat(A(/\b((?:wants|want|wanted) (?:me|you|him|her|us|them|harry|the \w+) not to \w+)/g, m, 1, 'More natural: doesn’t want him to…', function (x) { return !/\b(?:don't|don’t|doesn't|doesn’t|didn't|didn’t)\s*$/.test(m.slice(0, m.indexOf(x[1]))); }));
  out = out.concat(A(/\b((?:told|asked|tell|ask) (?:me|you|him|her|us|them|harry|\w+) to not (?:afraid|late|sad|angry|nervous|scared))\b/g, m, 1, 'The negative: not to + verb. not to be afraid.'));
  return out;
};
