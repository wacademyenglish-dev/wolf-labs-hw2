/* As regras do corretor · Global Payments English 5 · A Short Email and a Call. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/^((?:am|is) (?:a|an|the|at|busy|very|good)\b)/gim, m, 1, "Start with the subject: I’m … / It’s …"));
  out = out.concat(A(/\b(a (?:analyst|international|invoice|error|email|urgent|intermediary))\b/gi, m, 1, "Vowel sound: an analyst, an international payment."));
  out = out.concat(A(/\b(i(?:'|’)?m analyst|i am analyst)\b/gi, m, 1, "I’m an analyst (with an)."));
  out = out.concat(A(/\b(the payment (?:pending|on hold|released|rejected|approved))\b/gi, m, 1, "Add is: the payment is pending."));
  out = out.concat(A(/^(you send [^\n]*)/gim, m, 1, "Polite request: Can you send …, please?"));
  out = out.concat(A(/\b(can you to \w+)\b/gi, m, 1, "No to after can: Can you send …?"));
  out = out.concat(A(/\b(hello dear)\b/gi, m, 1, "Email start: Dear Ms. Cole,"));
  return out;
};
