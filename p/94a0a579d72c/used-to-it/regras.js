/* As regras do corretor desta aula (nível 3): used to × be used to × get used to. BE / GET + used to + verbo puro ("I'm used to wake up"); used to + -ING sem BE ("I used to living"); "use to" depois de BE/GET; "could never getting used to". A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:am|is|are|was|were|be|been|being|'m|’m|'s|’s|'re|’re|get|gets|got|getting|gotten) (?:not )?used to (?:wake|work|live|drive|speak|eat|have|walk|get up|sleep|cook|study|do|go|take|use|see|hear|run|talk|be|say|write|read|make))\b/g, m, 1, 'That TO is a preposition: -ING. I’m used to waking up.'));
  out = out.concat(A(/(?:^|[^’'a-z])((?:i|you|we|they|he|she|it) used to (?!be\b|being\b)\w+ing)\b/g, m, 1, 'A habit that ended: used to + verb. Normal now: I’m used to …-ing.'));
  out = out.concat(A(/\b((?:am|is|are|was|were|'m|’m|'s|’s|'re|’re|get|getting|got) (?:not )?use to)\b/g, m, 1, 'USED to: I’m used to it.'));
  out = out.concat(A(/\b((?:could|can|will|would|might|should|must|never)(?: never)? getting used to)\b/g, m, 1, 'After a modal, bare GET: I could never get used to it.'));
  out = out.concat(A(/\b((?:i'm|i’m|i am|she's|she’s|he's|he’s|we're|we’re|they're|they’re) used to it (?:slowly|little by little|bit by bit))\b/g, m, 1, 'Still on the road: I’m GETTING used to it slowly.'));
  return out;
};
