/* As regras do corretor desta aula (nível 2): phrasal verbs — pronome no meio (turn it on), os que nunca abrem (look for it). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var v = '(?:turn|turns|turned|pick|picks|picked|put|puts|take|takes|took|give|gives|gave|throw|throws|threw|write|writes|wrote|call|calls|called|look|looks|looked|send|sends|sent|switch|switched|try|tried|bring|brought|clean|cleaned|fill|filled|pay|paid|wake|woke)';
  out = out.concat(A(new RegExp('\\b(' + v + '\\s+(?:on|off|up|down|out|back|away)\\s+(?:it|them|him|me|us|her(?=\\s*[.,!?]|\\s*$|\\s+(?:at|to|in|on|for|with|when|now|again|tomorrow|today|later|please|before|after)\\b)))\\b', 'g'), m, 1, 'A pronoun goes in the middle: turn it on, pick them up.'));
  out = out.concat(A(/\b((?:look|looking|looked|looks)\s+(?:it|them|him|her)\s+(?:for|after))\b/g, m, 1, 'look for / look after never open: I’m looking for it.'));
  out = out.concat(A(/\b((?:deal|dealing|dealt)\s+(?:it|them|him|her)\s+with)\b/g, m, 1, 'deal with never opens: I’ll deal with it.'));
  out = out.concat(A(/\b((?:ran|run|running)\s+(?:it|them|him|her)\s+into)\b/g, m, 1, 'run into never opens: I ran into him.'));
  return out;
};
