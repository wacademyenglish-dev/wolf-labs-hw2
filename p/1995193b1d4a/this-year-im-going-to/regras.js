/* As regras do corretor desta aula (nível 2): going to × will; will sem to; would like / want + to; was going to para plano que falhou; promessa com will. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(will\s+to|'ll\s+to|’ll\s+to)\s+[a-z]+/g, m, 1, 'will never takes to: I’ll run.'));
  out = out.concat(A(/\b((?:i'm|i’m|i am|you're|you’re|he's|she's|it's|we're|they're|was|were|am|is|are)\s+going)\s+(?!to\b|home\b|out\b|back\b|well\b|there\b|away\b|now\b|on\b|crazy\b|fast\b)[a-z]+\b/g, m, 1, 'going needs its to: I’m going to run.'));
  out = out.concat(A(/\b((?:would like|'d like|’d like|want|wants|wanted))\s+(?!to\b|a\b|an\b|the\b|some\b|more\b|it\b|this\b|that\b|my\b|your\b|me\b|you\b|him\b|her\b|them\b|us\b|one\b|coffee\b|tea\b)[a-z]+\b/g, m, 1, 'want / would like + to + verb: I’d like to speak.'));
  out = out.concat(A(/\b(want\s+going\s+to|wants\s+going\s+to)\b/g, m, 1, 'A goal: I want to swim.'));
  out = out.concat(A(/\b(i went to)\s+(?:clean|do|call|study|finish|fix|buy|tell|write|read|run|cook|learn|start)\b[^.!?]*\bbut\b/g, m, 1, 'A plan that didn’t happen: I was going to …, but …'));
  out = out.concat(A(/(?:^|[.!?,])\s*(i\s+(?:call|help|get|send|bring|text|pay|do))\s+(?:you\s+|it\s+)?(?:tomorrow|later|tonight|i promise)\b/g, m, 1, 'A promise, decided now: I’ll call you.'));
  out = out.concat(A(/\b(?:i|we)\s+(?:don't|don’t|do not)?\s*think\s+(?:you|he|she|they|it|this year)\s+((?:do|does|run|runs|win|wins|make|makes|swim|swims)\b)/g, m, 1, 'An opinion about tomorrow: I think you’ll do it.'));
  return out;
};
