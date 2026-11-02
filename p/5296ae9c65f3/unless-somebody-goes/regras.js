/* As regras do corretor desta aula (nível 3): first conditional. will depois de if / unless / when / as soon as, unless + not, passado no if com will no resultado, doesn't will, will + -ing, will sem be antes de adjetivo. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:if|unless|when|as soon as|before|after|until) (?:\w+ ){1,3}?(?:will|'ll|won't) \w+)/g, m, 1, 'After if / unless / when: present (if we use, when we leave). Never will.', function (x) { return !/^(?:if|when) (?:you|he|she|they) will (?:help|be so kind)/.test(x[1]) && !/,/.test(x[1]) && !/(?:know|wonder|ask|asked|sure|see|tell me|idea) $/.test(x.input.slice(0, x.index)); }));
  out = out.concat(A(/\b(unless (?:\w+ ){1,3}?(?:doesn't|don't|didn't|does not|do not|isn't|aren't|is not|are not) \w+)/g, m, 1, 'Unless already means “if … not”. No second not: unless somebody takes it.'));
  out = out.concat(A(/\b(if (?:\w+ ){1,3}?(?:used|went|took|found|helped|left|had|stayed|came)\b[^.!?]*?(?:will|'ll|won't) \w+)/g, m, 1, 'A real future: if + present (if we use… we will…).'));
  out = out.concat(A(/\b((?:doesn't|don't|didn't) will)\b/g, m, 1, 'The negative: won’t + verb (it won’t break).'));
  out = out.concat(A(/\b((?:will|won't|'ll) (?!be\b)\w+ing)\b/g, m, 1, 'After will: the base verb (will protect).', function (x) { return !/(?:bring|sing|ring|swing)$/.test(x[1]); }));
  out = out.concat(A(/\b((?:will|won't|'ll) (?:safer|happier|better|worse|easier|harder|happy|safe|tired|late|ready|rich|angry|sad|free|dangerous|long))\b/g, m, 1, 'Don’t forget be: will be safer.'));
  out = out.concat(A(/\b(if (?:\w+ ){1,3}?(?:stays|goes|use|uses|leave|leaves|help|helps|rains|practice|practices|fight)\b[^,]*, (?:\w+ ){0,2}?(?:find|finds|win|wins|take|takes|break|breaks|protect|protects|fail|fails|need|needs|go|goes) (?:it|the|you|me|them|him|her|tomorrow)\b)/g, m, 1, 'The result is the future: will + verb.', function (x) { return !/\b(?:will|won't|'ll|can|must|should|might|may)\b/.test(x[1].split(',')[1] || ''); }));
  return out;
};
