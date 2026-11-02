/* As regras do corretor desta aula (nível 3): linguagem vaga. "a kind of / a sort of + adjetivo" (sem artigo); "kind of a + adjetivo" pendurado (sem substantivo); "stuffs"; "and thing" no fim; "or something like" pendurado; "-ish o'clock"; "a bit of + adjetivo"; "kind of / sort of / a bit + very"; "and these things" fechando a lista. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var ADJ = '(?:weird|big|late|slow|strange|nice|cold|tired|funny|small|expensive|annoying|annoyed|boring|sad|hard|difficult|crazy|good|bad|long|scary|quiet|cheap|busy|hot|nervous|relieved|angry|happy|sweet)';
  out = out.concat(A(new RegExp('\\b((?:a|an) (?:kind|sort) of ' + ADJ + ')\\b', 'g'), m, 1, 'KIND OF + adjective has no A: kind of weird.'));
  out = out.concat(A(new RegExp('\\b((?:kind|sort) of an? ' + ADJ + ')(?=[.,!?]|$| and | but )', 'g'), m, 1, 'KIND OF A needs a noun after it: kind of a big bag. Or just: kind of big.'));
  out = out.concat(A(/\b(stuffs)\b/g, m, 1, 'STUFF is uncountable: and stuff.'));
  out = out.concat(A(/\b(and thing)(?=[.,!?]|$)/g, m, 1, 'Close the list with AND STUFF or AND THINGS (like that).'));
  out = out.concat(A(/\b(or something like)(?=[.,!?]|$)/g, m, 1, 'Finish it: or something LIKE THAT.'));
  out = out.concat(A(/\b(\w+-ish o'clock)\b/g, m, 1, '-ISH replaces o’clock: seven-ish.'));
  out = out.concat(A(new RegExp('\\b(a bit of ' + ADJ + ')\\b', 'g'), m, 1, 'A BIT + adjective (a bit tired). A BIT OF A + noun (a bit of a problem).'));
  out = out.concat(A(/\b((?:kind of|sort of|a bit) very)\b/g, m, 1, 'One word makes it smaller, the other bigger: kind of expensive, OR very expensive.'));
  out = out.concat(A(/\b(and these things)(?=[.,!?]|$)/g, m, 1, 'Close the list with AND THINGS LIKE THAT.'));
  return out;
};
