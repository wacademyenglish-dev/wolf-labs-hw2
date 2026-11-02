/* As regras do corretor desta aula (nível 2): -ed para a pessoa que sente, -ing para a coisa que causa. Só pega o óbvio: coisa + was/is + -ed; I'm/I was + -ing de sentimento. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:the|this|that|my|our|your|his|her)\s+(?:film|movie|show|series|class|trip|book|story|game|end|ending|day|week|weekend|meeting|job|work|lesson|music|bus ride|party|conversation)\s+(?:was|is|were|are)\s+(?:so\s+|very\s+|really\s+|a bit\s+)?(bored|tired|interested|surprised|excited|relaxed)\b/g, m, 1, 'A thing causes the feeling: -ing (boring, tiring…).'));
  out = out.concat(A(/\b(?:i'm|i am|i was|we are|we were|we're|i feel|i felt)\s+(?:so\s+|very\s+|really\s+|a bit\s+)?(boring|tiring|surprising|exciting|relaxing)\b(?!\s+(?:for|to)\b)/g, m, 1, 'You feel it: -ed (bored, tired…).'));
  out = out.concat(A(/\b(?:i'm|i am|i was|we were|we are)\s+(?:so\s+|very\s+|really\s+)?(interesting)\s+in\b/g, m, 1, 'You feel it: interested in.'));
  return out;
};
