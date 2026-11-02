/* As regras do corretor desta aula (nível 2): phrasal verbs separáveis. Pronome depois da partícula (cheer up her, figure out it, turn off it, pick up me, give back it, put on it, look up it, turn down it), partícula que some depois do pronome (figure it. / cheer her. / pick me at), turn it of, give it to back. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:cheer|cheers|cheered|figure|figures|figured|turn|turns|turned|pick|picks|picked|give|gives|gave|put|puts|look|looks|looked) (?:up|out|off|on|back|down) (?:it|her|him|me|them|us|you))\b/g, m, 1, 'A pronoun goes in the middle: cheer her up, figure it out.', function (x) { return !/\bput on you\b/.test(x[1]) && !/\b(?:look|looks|looked) (?:out|back|down|on) /.test(x[1]) && !/\b(?:give|gives|gave) back you\b/.test(x[1]); }));
  out = out.concat(A(/\b((?:figure|figures|figured) (?:it|this|that)(?! out)\b)/g, m, 1, 'Don’t lose the little word: figure it out.'));
  out = out.concat(A(/\b((?:cheer|cheers|cheered) (?:her|him|me|them|us|you|carol)(?! up)\b)/g, m, 1, 'Don’t lose the little word: cheer her up.'));
  out = out.concat(A(/\b((?:pick|picks|picked) (?:me|her|him|them|us|you) (?!up\b)(?:at|from|in|tomorrow|tonight)\b)/g, m, 1, 'Don’t lose the little word: pick me up.'));
  out = out.concat(A(/\b((?:turn|turns|turned) (?:it|them) (?!off\b|on\b|up\b|down\b|around\b|over\b|into\b)\w+)/g, m, 1, 'Don’t lose the little word: turn it off / down.'));
  out = out.concat(A(/\b((?:turn|turns) (?:it|them))(?:,|\.|!|$)/g, m, 1, 'Don’t lose the little word: turn it down / off.'));
  out = out.concat(A(/\b((?:put|puts) it(?:, please)?(?:\.|!|$))/g, m, 1, 'Don’t lose the little word: put it on.', function (x) { return !/\bput it (?:here|there|on|in|down|away|back)\b/.test(m); }));
  out = out.concat(A(/\b((?:turn|turns|turned) (?:it |the \w+ )?of)\b/g, m, 1, 'The little word is off (two f’s).'));
  out = out.concat(A(/\b((?:give|gives|gave) it to back)\b/g, m, 1, 'Verb + it + little word: give it back to me.'));
  out = out.concat(A(/\b((?:look|looks|looked) it on up)\b/g, m, 1, 'Verb + it + little word: look it up.'));
  return out;
};
