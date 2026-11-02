/* As regras do corretor desta aula (nível 2): orações de tempo com o presente para o futuro (when I arrive, nunca when I will arrive), until sem not, before/after + frase. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/(?<!(?:know|ask|asks|wonder|sure|idea|me|tell)\s)\b(?:when|as soon as|until|before|after|by the time)\s+(?:i|you|he|she|we|they|it|the \w+|my \w+)\s+(will|'ll|am going to|is going to|are going to|'m going to|'s going to|'re going to)\b/g, m, 1, 'The time half stays in the present: when I arrive.'));
  out = out.concat(A(/\b(?:when|as soon as|until|before|after)\s+(i'll|you'll|he'll|she'll|we'll|they'll|it'll)\b/g, m, 1, 'The time half stays in the present: when I arrive.'));
  out = out.concat(A(/\b(?:when|as soon as|until|before|after|by the time)\s+((?:i'm|you're|he's|she's|we're|they're|it's)\s+going to)\b/g, m, 1, 'No going to in the time half: present.'));
  out = out.concat(A(/\buntil\s+(?:i|you|he|she|we|they|it|the \w+)\s+(don't|doesn't|do not|does not)\b/g, m, 1, 'until already has the stop in it: until you come.'));
  out = out.concat(A(/\b(?:before|after)\s+(to)\s+\w+/g, m, 1, 'before / after + a full sentence: before I leave (or before leaving).'));
  out = out.concat(A(/\b(?:when|as soon as)\s+i\s+(?:get|arrive|wake up|finish|get home|get there)[^,.]*,\s*(i)\s+(?!'ll|will)(?:call|text|send|tell|go|eat|have|make)\b/g, m, 1, 'A plan for tomorrow: the other half needs will (I’ll call).'));
  return out;
};
