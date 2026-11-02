/* As regras do corretor desta aula (nível 1): good × well, -ly. A aula e a lição de casa Live usam este mesmo arquivo. */
var VERBO_ACAO = '(?:sings?|sang|sung|singing|plays?|played|playing|speaks?|spoke|speaking|dances?|danced|dancing|cooks?|cooked|cooking|drives?|drove|driving|works?|worked|working|writes?|wrote|writing|runs?|ran|running|swims?|swam|swimming|reads?|reading|draws?|drew|drawing|talks?|talked|talking|did|does|do|doing|paints?|painted|painting|studies|study|studied)';
var ADJ_LY = '(?:bad|careful|quiet|loud|slow|beautiful|happy|easy|quick|nice|perfect|terrible|awful|real|sad|soft|clear)';
var FIM_FRASE = '(?=\\s*(?:[.,!?;]|$|\\band\\b|\\bbut\\b|\\bbecause\\b|\\btoo\\b|\\bnow\\b|\\btoday\\b|\\blive\\b|\\bat\\b|\\bin\\b|\\bon\\b|\\bwith\\b|\\bevery\\b|\\blast\\b))';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  /* o fazer com a palavra do canal errado: sings good, speaks English good */
  out = out.concat(A(new RegExp('\\b' + VERBO_ACAO + '(?:\\s+(?!good\\b)[a-z\'’]+){0,3}?\\s+(?:very |really |so |too )?(good)' + FIM_FRASE, 'g'), m, 1, 'How? That’s the doing: WELL (she sings well).'));
  out = out.concat(A(new RegExp('\\b' + VERBO_ACAO + '(?:\\s+(?!' + ADJ_LY + '\\b)[a-z\'’]+){0,2}?\\s+(?:very |really |so |too )?(' + ADJ_LY + ')' + FIM_FRASE, 'g'), m, 1, 'How? Add -LY: badly, carefully, quietly.'));
  /* o contrário: a well singer */
  out = out.concat(A(/\b(?:a|an|the|very|really|my|his|her|their|our)\s+(well)\s+(?!done\b|known\b|made\b)[a-z]*(?:er|or|ist|ian|band|group|team|cook|chef)s?\b/g, m, 1, 'Before a noun: GOOD (a good singer).'));
  out = out.concat(A(/\b(?:am|'m|’m|is|'s|’s|are|'re|’re)\s+(?:very |really |so )?(well)\s+at\b/g, m, 1, 'Good AT: I’m good at it.'));
  /* as palavras que não existem ou que mudam de sentido */
  out = out.concat(A(/\b(fastly|goodly)\b/g, m, 1, 'No -ly here: fast stays fast; good becomes well.'));
  out = out.concat(A(/\b(?:work|works|worked|working|study|studies|studied|train|trains|trained|try|tries|tried)\s+(?:very |really |so )?(hardly)\b/g, m, 1, 'HARDLY means “almost not”. Say: work hard.'));
  return out;
};
