/* As regras do corretor desta aula (nível 2): hear / see / watch / feel + pessoa + -ing ou verbo puro; sem to, sem he/she, sem -s/-ed; listen to. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:hear|hears|heard|see|sees|saw|watch|watched|feel|felt|notice|noticed)\s+(?:someone|somebody|something|him|her|them|us|me|it|the\s+\w+|my\s+\w+|a\s+\w+)\s+(to\s+[a-z]+)\b/g, m, 1, 'After hear / see + person: no to. I heard someone walk / walking.'));
  out = out.concat(A(/\b(?:hear|hears|heard|see|sees|saw|watch|watched|feel|felt)\s+(he|she|they|we)\s+[a-z]+\b/g, m, 1, 'After hear / see: him, her, them, us.'));
  out = out.concat(A(/\b(?:hear|heard|see|saw|watch|watched)\s+(?:him|her|them|us|me|someone|somebody|something|the\s+\w+|my\s+\w+)\s+((?!need|seed|feed|bleed|speed|used)[a-z]+ed|opens|closes|walks|runs|moves|eats|comes|goes|leaves|plays|barks|cries|screams|laughs)\b/g, m, 1, 'After the person: the base verb or -ing. No -s, no -ed.'));
  out = out.concat(A(/\b(listen(?:ed|s|ing)?)\s+(?:someone|somebody|him|her|them|the\s+\w+|my\s+\w+|a\s+\w+)\b/g, m, 1, 'listen needs to: I listened to… Or: I heard…'));
  out = out.concat(A(/\b(could to|can to)\s+(?:hear|see)\b/g, m, 1, 'After could / can: the base verb. No to.'));
  return out;
};
