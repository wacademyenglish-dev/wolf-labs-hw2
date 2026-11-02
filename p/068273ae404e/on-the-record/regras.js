/* As regras do corretor desta aula (nível 3): reported speech. said + pessoa sem to (said me), told sem pessoa (told that / told he), told to + pessoa, asked + did / do / does (asked where did he live), asked if + inversão (asked if had he), sem passo atrás depois de said / told / asked no passado (said he is / will / can / has), ordens com don't (told her don't), not to + -ing. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(said (?:me|him|her|us|them|reporters|lois|you) (?!to\b)\w+)/g, m, 1, 'Said has no person after it: said he… / told me he…'));
  out = out.concat(A(/\b(told (?:that|he|she|they|we|i) \w+)/g, m, 1, 'Told needs a person: told me / told reporters…'));
  out = out.concat(A(/\b(told to (?:me|him|her|us|them|lois|reporters|\w+))\b/g, m, 1, 'Told + person, no to: told Lois.'));
  out = out.concat(A(/\b(asked (?:\w+ )?(?:where|what|when|why|how|who|if)? ?(?:did|do|does) (?:he|she|they|i|you|we)\b)/g, m, 1, 'Reported questions have no do / did: asked where he lived.'));
  out = out.concat(A(/\b(asked (?:\w+ )?(?:if|whether|where|what|when|why|how) (?:had|was|were|is|are|could|would|has|have|will|can) (?:he|she|they|i|you|we)\b)/g, m, 1, 'Reported questions: normal order. asked if he had…'));
  out = out.concat(A(/\b((?:said|told \w+|told reporters|asked(?: \w+)? if) (?:that )?(?:he|she|they|i|we|it) (?:is|isn't|isn’t|are|aren't|aren’t|will|won't|won’t|can|can't|can’t|has|have|stops|lives|wants|does|doesn't|doesn’t))\b/g, m, 1, 'One step back in time: is → was, will → would, can → could, has → had.'));
  out = out.concat(A(/\b(told (?:me|him|her|us|them|lois|reporters|\w+) (?:don't|don’t|do not) \w+)/g, m, 1, 'Reported orders: told + person + not to.'));
  out = out.concat(A(/\b((?:not )?to not \w+ing|not to \w+ing)\b/g, m, 1, 'Not to + base verb: not to print.', function (x) { return !/\bnot to (?:bring|sing|ring|swing)\b/.test(x[1]); }));
  return out;
};
