/* As regras do corretor · Global Payments English 7 · Cut-off Time. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/^((?:am|is) (?:a|an|the|at|busy|very|good)\b)/gim, m, 1, "Start with the subject: I’m … / It’s …"));
  out = out.concat(A(/\b(a (?:analyst|international|invoice|error|email|urgent|intermediary))\b/gi, m, 1, "Vowel sound: an analyst, an international payment."));
  out = out.concat(A(/\b(i(?:'|’)?m analyst|i am analyst)\b/gi, m, 1, "I’m an analyst (with an)."));
  out = out.concat(A(/\b(the payment (?:pending|on hold|released|rejected|approved))\b/gi, m, 1, "Add is: the payment is pending."));
  out = out.concat(A(/\b(are (?:\w+ )?hours)\b/gi, m, 1, "The time: It’s four o’clock."));
  out = out.concat(A(/\b(in (?:\d+|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)(?::\d+)? ?(?:a\.?m\.?|p\.?m\.?))/gi, m, 1, "Time with at: at 4 p.m."));
  out = out.concat(A(/\b((?:after|before) of)\b/gi, m, 1, "No of: after the cut-off."));
  return out;
};
