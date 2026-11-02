/* As regras do corretor desta aula (nível 3): could × was able to × managed to. COULD positivo com UM dia ("I could open the jar last night"; verbos de sentido ficam fora: could see / hear); "managed open" sem TO; "managed to opened"; "could to". A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var DIA = '(?:last night|last (?:monday|tuesday|wednesday|thursday|friday|saturday|sunday|week|weekend)|yesterday|this morning|that night|that day|on (?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)|on the (?:first|second|third|fourth|last) try|in the end|after (?:\\w+ ){0,2}(?:tries|minutes|hours)|before (?:it closed|midnight))';
  var VERBO = 'could (?!not\\b|never\\b|see\\b|hear\\b|smell\\b|feel\\b|taste\\b|understand\\b|remember\\b|be\\b|have\\b|you\\b|i\\b|we\\b|they\\b|he\\b|she\\b)\\w+';
  out = out.concat(A(new RegExp('\\b(' + VERBO + '[^.!?]*?\\b' + DIA + ')', 'g'), m, 1, 'One day, positive: COULD breaks. was able to / managed to.'));
  out = out.concat(A(new RegExp('\\b(' + DIA + ',? (?:\\w+ ){0,3}?' + VERBO + ')', 'g'), m, 1, 'One day, positive: COULD breaks. was able to / managed to.'));
  out = out.concat(A(/\b(manag(?:ed|e|es) (?!to\b)(?:open|fix|find|get|solve|finish|do|make|pass|run|swim|say|keep|book|understand|calm|catch|reach|convince|cook|sleep|stop))\b/g, m, 1, 'managed + TO + verb: managed to open.'));
  out = out.concat(A(/\b(managed to (?!need|feed|speed|succeed|proceed|exceed|seed|bleed)\w+ed)\b/g, m, 1, 'managed to + the base verb: managed to open.'));
  out = out.concat(A(/\b((?:could|couldn't|couldn’t) to \w+)/g, m, 1, 'No TO after could: could swim.'));
  return out;
};
