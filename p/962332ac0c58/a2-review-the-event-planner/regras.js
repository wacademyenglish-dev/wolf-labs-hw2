/* As regras do corretor da revisão The Event Planner. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(in (?:monday|tuesday|wednesday|thursday|friday|saturday|sunday))\b/gi, m, 1, "Days: on. on Sunday."));
  out = out.concat(A(/\b(at (?:january|february|march|april|may|june|july|august|september|october|november|december|\d{4}))\b/gi, m, 1, "Months and years: in. in June."));
  out = out.concat(A(/\b(on (?:\d{1,2}(?::\d\d)? ?(?:am|pm)|noon|midnight))\b/gi, m, 1, "Clock time: at. at 7 PM."));
  out = out.concat(A(/\b(will to \w+|’ll to \w+|'ll to \w+)\b/gi, m, 1, "will + verb, no to: I’ll call."));
  out = out.concat(A(/\b(enter in(?:to)?)\b/gi, m, 1, "enter the room / go into the room."));
  return out;
};
