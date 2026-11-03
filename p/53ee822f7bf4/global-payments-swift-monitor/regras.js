/* As regras do corretor · Global Payments English 3 · SWIFT Monitor. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/^((?:am|is) (?:a|an|the|at|busy|very|good)\b)/gim, m, 1, "Start with the subject: I’m … / It’s …"));
  out = out.concat(A(/\b(a (?:analyst|international|invoice|error|email|urgent|intermediary))\b/gi, m, 1, "Vowel sound: an analyst, an international payment."));
  out = out.concat(A(/\b(i(?:'|’)?m analyst|i am analyst)\b/gi, m, 1, "I’m an analyst (with an)."));
  out = out.concat(A(/\b(the payment (?:pending|on hold|released|rejected|approved))\b/gi, m, 1, "Add is: the payment is pending."));
  out = out.concat(A(/\b(who the \w+ is)\b/gi, m, 1, "Question order: Who is the …?"));
  out = out.concat(A(/\b(what the \w+ is)\b/gi, m, 1, "Question order: What is the …?"));
  out = out.concat(A(/^(what the \w+\?)/gim, m, 1, "Add is: What is the …?"));
  return out;
};
