/* As regras do corretor desta aula (nível 3): perguntas indiretas. Depois de know / tell me / wonder / ask / not sure / remember / like to know: inversão (why are we), do / does / did dentro (where did he go), sim e não sem if (I wonder is it), if + inversão (if is it), I wonder com ponto de interrogação. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var INTRO = '(?:knows|knew|know|tell me|tell us|wonder|wondered|asked (?:her|him|me|them)|asked|not sure|remember|to know|idea)';
  out = out.concat(A(new RegExp('\\b(' + INTRO + ' (?:why|where|what|who|when|how|which) (?:are|is|am|was|were|can|will|could) (?:we|you|they|he|she|it|i|the \\w+))\\b', 'g'), m, 1, 'Inside a sentence the order doesn’t flip: why we are.', function (x) { return !/\b(?:what|who|which) (?:is|was|are|were) (?:the|outside|inside|behind|down|in|on|at)\b/.test(x[1]) || /\b(?:what|who) (?:is|was) (?:it|he|she)\b/.test(x[1]); }));
  out = out.concat(A(new RegExp('\\b(' + INTRO + ' (?:why|where|what|who|when|how|which|if|whether) (?:did|do|does) \\w+)', 'g'), m, 1, 'No do / does / did inside: where he went, who built.'));
  out = out.concat(A(new RegExp('\\b(' + INTRO + ' (?:why|where|what|who|when|how|which) (?:\\w+ ){0,2}(?:did|do|does) \\w+)', 'g'), m, 1, 'No do / does / did inside: where he went.'));
  out = out.concat(A(new RegExp('\\b((?:wonder|know|not sure|asked (?:her|him|me|them)|tell me) (?:is|are|does|do|did|can|will|was) (?:it|he|she|they|we|you|the \\w+))\\b', 'g'), m, 1, 'Yes / no inside: if + subject + verb. I wonder if it is…'));
  out = out.concat(A(/\b((?:if|whether) (?:is|are|was|were|can|will|does|do|did) (?:it|he|she|they|we|you|the \w+))\b/g, m, 1, 'After if: subject + verb. if it is.'));
  out = out.concat(A(new RegExp('\\b(' + INTRO + ' (?:what|where|why|how) (?:outside|down there|behind the door) (?:is|are) (?:it|they))\\b', 'g'), m, 1, 'Inside a sentence: what is outside.'));
  out = out.concat(A(/\b((?:if|whether) (?:opens|works|goes|is open|comes|starts) (?:the \w+|it))\b/g, m, 1, 'After if: subject + verb. if the door opens.'));
  out = out.concat(A(/^\s*(i wonder [^?]*\?)/g, m, 1, 'I wonder… is not a question: end with a full stop.'));
  out = out.concat(A(new RegExp('\\b(' + INTRO + ' (?:what|where) (?:found|built|went|said) (?:juliette|he|she|they|the \\w+))\\b', 'g'), m, 1, 'Inside: subject + verb. what Juliette found.'));
  out = out.concat(A(/\b((?:know|wonder|tell me) where go (?:the \w+|they))\b/g, m, 1, 'Inside: subject + verb. where the stairs go.'));
  return out;
};
