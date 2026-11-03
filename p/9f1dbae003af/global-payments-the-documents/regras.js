/* As regras do corretor · Global Payments English 10 · The Documents. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/^((?:am|is) (?:a|an|the|at|busy|very|good)\b)/gim, m, 1, "Start with the subject: I’m … / It’s …"));
  out = out.concat(A(/\b(a (?:analyst|international|invoice|error|email|urgent|intermediary))\b/gi, m, 1, "Vowel sound: an analyst, an international payment."));
  out = out.concat(A(/\b(i(?:'|’)?m analyst|i am analyst)\b/gi, m, 1, "I’m an analyst (with an)."));
  out = out.concat(A(/\b(the payment (?:pending|on hold|released|rejected|approved))\b/gi, m, 1, "Add is: the payment is pending."));
  out = out.concat(A(/^(you have [^\n]*\?)/gim, m, 1, "Question: Do you have …?"));
  out = out.concat(A(/\b(yes, i have)\b/gi, m, 1, "Short answer: Yes, I do."));
  out = out.concat(A(/\b(need of)\b/gi, m, 1, "Need without of: We need the invoice."));
  out = out.concat(A(/\b(i not have|i no have)\b/gi, m, 1, "Negative: I don’t have."));
  return out;
};
