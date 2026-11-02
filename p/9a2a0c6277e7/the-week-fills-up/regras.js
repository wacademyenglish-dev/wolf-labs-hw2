/* As regras do corretor desta aula (nível 2): present continuous para o que já está marcado; will não serve para compromisso já combinado; previsão não usa o continuous. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var dia = '(?:tomorrow|tonight|on (?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)|next (?:week|month|monday|tuesday|wednesday|thursday|friday|saturday|sunday)|this (?:weekend|evening|afternoon|friday|saturday|sunday))';
  out = out.concat(A(new RegExp("(?:^|[.!?]\\s*)(?:i|we|they|she|he)\\s+((?:meet|meets|see|sees|visit|visits|have|has|play|plays|go|goes|fly|flies|start|starts|leave|leaves))\\s+[^.!?]{0,40}?\\b" + dia + "\\b", 'g'), m, 1, 'Already arranged? The form of now: I’m meeting / I’m seeing … + the day.'));
  out = out.concat(A(new RegExp("\\b((?:i|we|they|she|he)\\s+will\\s+(?:meet|see|visit|have|play|go|fly))\\s+[^.!?]{0,40}?\\b(?:on (?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)|at \\d)", 'g'), m, 1, 'If it’s already in the calendar: I’m meeting / I’m seeing …'));
  out = out.concat(A(/\b(it's raining|it is raining)\s+(?:tomorrow|tonight|next|on)\b/g, m, 1, 'Rain agreed with nobody: it will rain tomorrow.'));
  out = out.concat(A(/\b(?:i'm|i am|we're|we are|they're|they are|she's|he's)\s+(meet|see|work|play|have|go|visit|fly|study)\b/g, m, 1, 'Keep the -ing: I’m meeting, I’m working.'));
  out = out.concat(A(/(?:^|[.!?]\s*)(what\s+(?:do|does)\s+you\s+do)\s+(?:on\s+(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)\s+at|tomorrow|tonight|this\s+(?:weekend|friday|saturday))\b/g, m, 1, 'A one-time plan: What are you doing on…?'));
  return out;
};
