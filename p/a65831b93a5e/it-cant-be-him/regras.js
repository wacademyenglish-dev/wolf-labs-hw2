/* As regras do corretor desta aula (nível 3): modais de dedução. must / might / may / could / can't + TO, modal + verbo flexionado (must is, might is, must being), mustn't be no lugar de can't be, don't can, pergunta sem inversão (Who he could be?). O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:must|might|may|could|can't|cannot|couldn't) to be)\b/g, m, 1, 'No TO after the modal: must be, might be, can’t be.'));
  out = out.concat(A(/\b((?:must|might|may|could|can't|cannot) (?:is|are|was|were|am|being|has|have to))\b/g, m, 1, 'After the modal: be (must be, might be).', function (x) { return !/(?:might|may|could|must) have$/.test(x[1]); }));
  out = out.concat(A(/\b((?:must|might|may|could)s be)\b/g, m, 1, 'No -s on a modal: could be.'));
  out = out.concat(A(/\b(mustn't be|must not be)\b/g, m, 1, 'Sure it is not: can’t be. Mustn’t means “it is not allowed”.'));
  out = out.concat(A(/\b((?:don't|doesn't|didn't) can)\b/g, m, 1, 'The negative of can: can’t.'));
  out = out.concat(A(/^\s*((?:who|what|where|why) (?:he|she|it|they|you|the \w+) (?:could|might|must|may) be)\b/g, m, 1, 'Questions: Who could he be? (the modal before the subject)'));
  out = out.concat(A(/^\s*((?:who|what|where) (?:could|might|may) (?:he|she|it|they) (?:is|are))\b/g, m, 1, 'After the modal: be. Who could he be?'));
  out = out.concat(A(/\b((?:the killer|he|she|it|someone|the riddler|selina) can be (?:a |the |in |at |home|involved))/g, m, 1, 'Maybe, right now: might or could. Can is for what is possible in general.'));
  return out;
};
