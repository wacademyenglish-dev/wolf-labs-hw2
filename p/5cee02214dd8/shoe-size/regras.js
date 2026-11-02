/* As regras do corretor desta aula (nível 3): hedging. "tend/tends/tended to + -ing" e "seem/seems to + -ing" (alvo: verbo base); "seem/seems + verbo base sem to" (seems be, seems measure); "in/on/at some extent" (alvo: to some extent); "is tend / are tend"; absolutos sobre inteligência ("intelligence is genetic / fixed") viram dica de hedge. "arguably" no lugar errado fica com o professor. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:tend|tends|tended|seem|seems|seemed) to (?!be\b)\w+ing)\b/g, m, 1, 'TEND TO / SEEM TO + bare verb: tend to forget.'));
  out = out.concat(A(/\b((?:seem|seems|seemed) (?:be|being|measure|change|matter|have|know|work|understand|like))\b/g, m, 1, 'SEEM TO + verb: seems to be, seems to measure.'));
  out = out.concat(A(/\b((?:in|on|at) some extents?)\b/g, m, 1, 'Always TO some extent.'));
  out = out.concat(A(/\b((?:is|are|am) tend)\b/g, m, 1, 'No BE: memory tends to …'));
  out = out.concat(A(/\b(intelligence is (?:genetic|fixed|innate|everything))\b/g, m, 1, 'Too sure: Intelligence seems to be partly genetic.'));
  return out;
};
