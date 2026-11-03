/* As regras do corretor · Global Payments English 1 · My Job. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/^((?:am|is) (?:a|an|the|at|busy|very|good)\b)/gim, m, 1, "Start with the subject: I’m … / It’s …"));
  out = out.concat(A(/\b(a (?:analyst|international|invoice|error|email|urgent|intermediary))\b/gi, m, 1, "Vowel sound: an analyst, an international payment."));
  out = out.concat(A(/\b(i(?:'|’)?m analyst|i am analyst)\b/gi, m, 1, "I’m an analyst (with an)."));
  out = out.concat(A(/\b(the payment (?:pending|on hold|released|rejected|approved))\b/gi, m, 1, "Add is: the payment is pending."));
  return out;
};
