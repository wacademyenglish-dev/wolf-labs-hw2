/* As regras do corretor desta aula (nível 3): -ing como substantivo. Verbo base no começo como sujeito (Use the Force is hard), preposição + verbo base (afraid of fail, good at fly), preposição + to (good at to fly, before to fight), -ing sujeito com are, afraid to + -ing / interested to + -ing, by mal trocado por for + -ing para o meio. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/^\s*((?:learn|use|trust|speak|read|study|fly|swim|cook|drive|travel|make|watch|wait|wake up|live|work)\b[^.!?]{0,30}? (?:is|takes|makes|was|helps))\b/g, m, 1, 'An action as the subject: -ing. Learning…, Using…'));
  out = out.concat(A(/\b((?:of|at|in|about|before|after|without|by|for) (?:fail|fly|fight|see|use|become|learn|make|speak|read|study|cook|swim|lose|go|leave|win|practice|travel|drive|sleep|meet|try|wait|play|close|trust))\b/g, m, 1, 'After a preposition: -ing. afraid of failing.', function (x) { return !/^(?:for|in|at) (?:go|play|close|meet|try|fly)\b/.test(x[1]) || /\b(?:afraid|good|interested|tired|bad|excited|thank you|sorry) (?:of|at|in|for) \w+$/.test(m.slice(0, m.indexOf(x[1]) + x[1].length)); }));
  out = out.concat(A(/\b((?:of|at|about|before|after|without|by) to \w+|(?:good|bad|interested|tired|afraid) (?:at|in|of) to \w+)/g, m, 1, 'After a preposition: -ing, never to.'));
  out = out.concat(A(/^\s*(\w+ing\b[^.!?]{0,40}? are (?:hard|easy|fun|important|difficult|boring|great|good|bad|the))/g, m, 1, 'One action = it: is (not are).', function (x) { return !/^\s*(?:things|feelings|beings|buildings|paintings|meetings|earrings|ceilings|evenings|mornings)\b/.test(x[1]); }));
  out = out.concat(A(/\b((?:afraid|interested|tired|good|bad|excited) to \w+ing)\b/g, m, 1, 'Preposition + -ing: afraid of failing, interested in becoming.'));
  out = out.concat(A(/\b((?:block|win|stop|relax|learn|improve) [^.!?]{0,20}? for (?:using|practicing|trusting|closing|reading))\b/g, m, 1, 'How you do it: by + -ing.'));
  return out;
};
