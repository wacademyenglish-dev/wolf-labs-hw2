/* As regras do corretor desta aula (nível 3): o grau do comparativo. very + comparativo; more + -er; much more + -er; "more better"; not nearly as … than; "a little more easier". A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(very (?:\w+er|better|worse|more \w+|less \w+))\b(?<!\bvery (?:clever|tender|bitter|proper|eager|sober|super|over|other|under|after|never|ever|clear|dear|near|her|power|water|silver|summer|winter|number|paper|other|whatever))/g, m, 1, 'VERY goes with fast, never with faster. much / a lot / far + faster.'));
  out = out.concat(A(/\b((?:much |a lot |far |a bit |slightly )?more (?:easier|harder|faster|slower|better|worse|bigger|smaller|cheaper|healthier|older|younger|longer|shorter|happier|smarter))\b/g, m, 1, 'Never more + -er: easier OR more difficult.'));
  out = out.concat(A(/\b((?:not|isn't|isn’t|aren't|aren’t|wasn't|wasn’t) (?:nearly )?as \w+ than)\b/g, m, 1, 'not nearly as … AS.'));
  out = out.concat(A(/\b(isn't nearly so|isn’t nearly so)\b/g, m, 1, 'not nearly AS … as.'));
  out = out.concat(A(/\b((?:much|far|a lot|a bit|slightly) (?:good|bad|fast|slow|easy|hard|big|small|expensive|difficult|fluent) than)\b/g, m, 1, 'The comparative: much faster than, far better than.'));
  return out;
};
