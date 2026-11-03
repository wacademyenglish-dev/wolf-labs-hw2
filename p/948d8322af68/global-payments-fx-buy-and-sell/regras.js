/* As regras do corretor · Global Payments English 9 · FX: Buy and Sell. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/^((?:am|is) (?:a|an|the|at|busy|very|good)\b)/gim, m, 1, "Start with the subject: I’m … / It’s …"));
  out = out.concat(A(/\b(a (?:analyst|international|invoice|error|email|urgent|intermediary))\b/gi, m, 1, "Vowel sound: an analyst, an international payment."));
  out = out.concat(A(/\b(i(?:'|’)?m analyst|i am analyst)\b/gi, m, 1, "I’m an analyst (with an)."));
  out = out.concat(A(/\b(the payment (?:pending|on hold|released|rejected|approved))\b/gi, m, 1, "Add is: the payment is pending."));
  out = out.concat(A(/\b(\w+ comma \w+)\b/gi, m, 1, "Decimal in English: point (five point four)."));
  out = out.concat(A(/\b(how many is)\b/gi, m, 1, "Money: How much is …?"));
  out = out.concat(A(/\b(more (?:high|low|cheap))\b/gi, m, 1, "Short adjectives: higher, lower, cheaper."));
  return out;
};
