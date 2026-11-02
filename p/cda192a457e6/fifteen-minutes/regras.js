/* As regras do corretor desta aula (nível 3): past perfect. had + passado simples no lugar do particípio (had went, had gave, had ran, had took…); had + verbo puro; "never had + verbo"; "already had + particípio"; um momento só com yesterday / last … + had. "When I arrived, the train left" não dá para o corretor saber: é o professor quem pergunta "did you see it?". A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:had|hadn't|hadn’t)(?: already| never| just)? (?:went|gave|ran|took|ate|wrote|flew|saw|came|began|drank|forgot|spoke|broke|chose|did))\b/g, m, 1, 'HAD + the third form: had gone, had given, had run.'));
  out = out.concat(A(/\b((?:had|hadn't|hadn’t)(?: already| never| just)? (?:go|give|take|eat|close|leave|start|try|change|cancel|finish|land|see|write|fly|tell|lose))\b/g, m, 1, 'HAD + the third form: had closed, had left.'));
  out = out.concat(A(/\b(never had (?:\w+ed|gone|been|seen|flown|flew|done))\b/g, m, 1, 'had never + verb: I had never flown.'));
  out = out.concat(A(/(?:^|[.!?]\s*)((?:yesterday|last (?:night|week|year|monday|friday|weekend)),? (?:i|we|she|he|they) had \w+)/g, m, 1, 'One moment only: simple past. Yesterday I missed…'));
  return out;
};
