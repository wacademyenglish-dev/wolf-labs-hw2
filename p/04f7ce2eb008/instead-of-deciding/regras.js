/* As regras do corretor desta aula (nível 3): preposição + -ing. "instead of / without / after / before / by + verbo base ou to"; "look forward to / be used to / get used to / object to + verbo base"; "insist to / succeed to" (alvo: insist on, succeed in + -ing). Cuidado com "after/before + substantivo" (after lunch, before dinner): a regra só pega verbos comuns. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var V = '(?:decide|say|know|pay|read|see|get|go|check|eat|wash|think|leave|work|study|sleep|call|watch|scroll|open|meet|hear|make|take|look|ask|tell|cook|buy|try|use|answer|wait|talk|write|stop|start|finish|change|do)';
  out = out.concat(A(new RegExp('\\b((?:instead of|without|after|before|by) (?:to )?' + V + ')\\b(?!ing|s\\b)', 'g'), m, 1, 'After a preposition, the verb takes -ING: instead of deciding, without knowing.'));
  out = out.concat(A(new RegExp('\\b((?:look|looking|looked) forward to ' + V + ')\\b(?!ing)', 'g'), m, 1, 'This TO is a preposition: look forward to SEEING.'));
  out = out.concat(A(new RegExp('\\b((?:am|is|are|was|were|\'m|’m|\'re|’re|get|got|getting|be|been) (?:not )?used to ' + V + ')\\b(?!ing)', 'g'), m, 1, 'BE / GET used to + -ING: I’m used to getting up early.'));
  out = out.concat(A(/\b((?:insist|insists|insisted) to \w+)/g, m, 1, 'INSIST ON + -ING: he insisted on paying.'));
  out = out.concat(A(/\b((?:succeed|succeeds|succeeded) to \w+)/g, m, 1, 'SUCCEED IN + -ING: they succeeded in opening it.'));
  return out;
};
