/* As regras do corretor desta aula (nível 3): present perfect continuous. Presente contínuo/simples com SINCE ("I'm doing it since March"); "have been + forma base" ("I have been work"); SINCE + pedaço de tempo ("since three weeks"); FOR + ponto ("for Sunday"); "How long are you …-ing". A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:i'm|i’m|i am|you're|you’re|you are|he's|he’s|she's|she’s|it's|it’s|we're|we’re|they're|they’re|he is|she is|it is|we are|they are) \w+ing\b[^.!?]*?\bsince\b)/g, m, 1, 'Still going since a point: have / has been + -ing. I’ve been doing it since March.'));
  out = out.concat(A(/\b((?:i|you|we|they|he|she|it) (?:live|work|study|do|play|learn|run|wait) [^.!?]*?\bsince\b)/g, m, 1, 'Since a point, still going: I’ve been living / I’ve lived here since …'));
  out = out.concat(A(/\b((?:have|has|'ve|’ve|'s|’s) been (?:work|learn|play|run|study|wait|live|talk|write|read|wait|try|mean|use|do|make|watch|ignore|avoid|rain|sit))\b/g, m, 1, 'been + -ING: I’ve been working.'));
  out = out.concat(A(/\b(since (?:(?:a|one|two|three|four|five|six|seven|eight|nine|ten|\d+|a few|many|several) (?:minutes?|hours?|days?|weeks?|months?|years?)|a long time|ages))\b/g, m, 1, 'A piece of time takes FOR: for three weeks.'));
  out = out.concat(A(/\b(for (?:monday|tuesday|wednesday|thursday|friday|saturday|sunday|january|february|march|april|june|july|august|september|october|november|december|19\d\d|20\d\d|last (?:week|month|year)))\b(?!['’])/g, m, 1, 'A point in time takes SINCE: since Sunday.'));
  out = out.concat(A(/\b(how long (?:are|is) (?:you|he|she|they|we|it) (?!staying|going|leaving|coming)\w+ing)\b/g, m, 1, 'How long HAVE you BEEN …-ing?'));
  return out;
};
