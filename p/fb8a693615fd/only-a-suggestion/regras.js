/* As regras do corretor desta aula (nível 3): suggest / recommend / insist / explain / mention. "suggest + pessoa + to" e "suggest to + verbo"; "recommend + pronome objeto + to" (forma britânica com nome fica com o professor); "explain/explained me/him/her/us/them"; "insist(ed) to + verbo" (alvo: insist on + -ing); "suggest/recommend/insist that + he/she/it + verbo com -s" (alvo: verbo puro); "ask that + pessoa + to". A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:suggest|suggests|suggested) (?:you|him|her|them|us|me|marina|paulo|ines|hugo|ada|my \w+|the \w+) to (?!the\b|my\b|a\b|him\b|her\b|them\b|me\b|us\b)\w+)/g, m, 1, 'SUGGEST has no room for a person: suggest THAT you take …'));
  out = out.concat(A(/\b((?:suggest|suggests|suggested) to (?!(?:you|him|her|them|us|me|the|my|our|your)\b)\w+)/g, m, 1, 'An idea with no owner: suggest + -ING (suggest sending).'));
  out = out.concat(A(/\b((?:recommend|recommends|recommended) (?:you|him|her|them|us|me) to \w+)/g, m, 1, 'Recommend THAT + person + plain verb: recommended that I rest.'));
  out = out.concat(A(/\b((?:explain|explains|explained|mention|mentions|mentioned) (?:me|him|her|us|them|you)) (?!to\b|that\b|how\b|why\b|what\b)/g, m, 1, 'Thing first, then TO + person: explained the delay TO me.'));
  out = out.concat(A(/\b((?:insist|insists|insisted) to \w+)/g, m, 1, 'INSIST ON + -ING: insisted on paying.'));
  out = out.concat(A(/\b((?:suggest|suggests|suggested|recommend|recommends|recommended|insist|insists|insisted) (?:that )?(?:he|she|it) (?!is\b|was\b|has\b|does\b)\w+s)\b/g, m, 1, 'After suggest / recommend / insist that: plain form (she take, he update).'));
  out = out.concat(A(/\b(ask(?:ed)? that \w+ to)\b/g, m, 1, 'ASK has room for a person: asked Marina to …'));
  return out;
};
