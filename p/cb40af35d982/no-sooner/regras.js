/* As regras do corretor desta aula (nível 3): a inversão de tempo. "no sooner / hardly / scarcely / barely + sujeito + had" (sem inverter); "no sooner had … when" (THAN); "hardly / scarcely had … than" (WHEN); "not until / only when / only after" sem inversão em nenhuma oração (DID na segunda); "not until did / only when did" (inversão no lugar errado); "had + sujeito + forma base ou passado simples" (particípio); "did + sujeito + passado" (forma base). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var SUJ = '(?:we|i|he|she|they|you|it|the \\w+|tomas|[a-z]+)';
  out = out.concat(A(new RegExp('\\b((?:no sooner|hardly|scarcely|barely) (?!had\\b)' + SUJ + ' had)\\b', 'g'), m, 1, 'The auxiliary jumps before the subject: No sooner HAD WE …'));
  out = out.concat(A(/\bno sooner had [^.;!?]*?\b(when)\b/g, m, 1, 'No sooner … THAN.'));
  out = out.concat(A(/\b(?:hardly|scarcely|barely) had [^.;!?]*?\b(than)\b/g, m, 1, 'Hardly / scarcely … WHEN.'));
  out = out.concat(A(/\b((?:not until|only when|only after) did)\b/g, m, 1, 'Invert the SECOND clause: Not until the fog lifted DID WE see …'));
  out = out.concat(A(/\b(not until|only when|only after)\b(?![^.;!?]*\b(?:did|could|had|would|was|were|do|does|will|can|should|must|is|are) (?:we|i|he|she|they|you|it|the|my)\b)(?=[^.;!?]*,|[^.;!?]* (?:we|i|he|she|they) \w+)/g, m, 1, 'After not until / only when … the SECOND clause inverts: DID WE see, COULD WE move.'));
  out = out.concat(A(new RegExp('\\b(?:no sooner|hardly|scarcely|barely) had ' + SUJ + ' ((?:land|repair|start|open|cross|reach|arrive|leave|ate|saw|went|took|began|wrote|came|go|see|eat|take|begin|write|come|find|lose|climb))\\b', 'g'), m, 1, 'After HAD + subject: the participle. had we landED, had we SEEN, had we EATEN.'));
  out = out.concat(A(/\bdid (?:we|i|he|she|they|you|it) ((?!need\b|feed\b|speed\b|bleed\b)\w+ed|saw|found|knew|went|came|got|understood|heard|felt|realized)\b/g, m, 1, 'After DID: the base verb. did we SEE, did we FIND.'));
  return out;
};
