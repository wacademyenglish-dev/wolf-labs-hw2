/* As regras do corretor desta aula (nível 3): depois do verbo, -ING ou TO. want / need / decide / try + verbo puro (falta o TO);
   keep / avoid / enjoy / finish + TO (é -ING); stop TO + verbo (= parar PARA fazer); preposição + verbo puro (afraid of fail);
   keep / stop / avoid + verbo puro. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var V = '(?:quit|stop|start|go|find|leave|learn|open|change|look|work|be|get|make|do|move|try|travel|study|save|sleep|play|practice|call|ask|talk|write|read|buy|sell|tell|help|eat)';
  out = out.concat(A(new RegExp('\\b((?:want|wants|wanted|need|needs|needed|decide|decides|decided|plan|plans|planned|hope|hopes|hoped|try|tries|tried|would like|’d like|\'d like) ' + V + ')\\b', 'g'), m, 1, 'want, need, decide, try: + TO. wants to quit.'));
  out = out.concat(A(/\b((?:keep|keeps|kept|avoid|avoids|avoided|enjoy|enjoys|enjoyed|finish|finishes|finished|mind|minds) to \w+)\b/g, m, 1, 'keep, avoid, enjoy, finish: + -ING. keeps saying.'));
  out = out.concat(A(/\b((?:stop|stops|stopped) to (?:smoke|work|drink|eat|worry|think|talk|wait|watch|forgive|complain|play|use))\b/g, m, 1, 'stop TO do = stop in order to do it. No more: stop + -ING. stop smoking.'));
  out = out.concat(A(new RegExp('\\b((?:afraid of|scared of|tired of|good at|bad at|think about|thinking about|instead of|interested in|without|before|after) ' + V + ')\\b', 'g'), m, 1, 'After a preposition: -ING. afraid of failing.'));
  out = out.concat(A(/\b((?:afraid of|scared of|tired of|good at|instead of) fail)\b/g, m, 1, 'After a preposition: -ING. afraid of failing.'));
  out = out.concat(A(/\b((?:keep|keeps|kept|avoid|avoids|avoided|stop|stops|stopped|enjoy|enjoys|finish|finished) (?:work|smoke|put|say|wait|watch|think|talk|forgive|play|practice|drink|eat|worry|complain|look|use))\b/g, m, 1, 'After keep, stop, avoid: the -ING form. keeps working.'));
  return out;
};
