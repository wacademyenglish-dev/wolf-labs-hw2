/* As regras do corretor desta aula (nível 1): saúde (have a, feel, hurts, should). A aula e a lição de casa Live usam este arquivo. */
var MAL = '(?:headache|cold|fever|cough|sore throat|stomachache|toothache|backache|earache|flu)';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(new RegExp('\\b((?:am|is|are|was|were|\'m|’m|\'s|’s)\\s+with)\\s+(?:a\\s+|the\\s+)?' + MAL, 'g'), m, 1, 'You HAVE it: I have a headache.'));
  out = out.concat(A(/\b(?:have|has|had)\s+(fever|cough|headache|cold|sore throat|stomachache|toothache)\b/g, m, 1, 'One problem, one A: a fever.'));
  out = out.concat(A(/(?:^\s*|[.!?]\s+)(hurts?)\s+my\s+\w+/g, m, 1, 'Body part first: My head hurts.'));
  out = out.concat(A(/\bmy\s+(?:head|knee|back|tooth|leg|arm|foot|stomach|throat|ear|eye|hand|neck)\s+(pains?|is\s+hurting\s+me|hurt)\b/g, m, 1, 'One part: it HURTS.'));
  out = out.concat(A(/\b(feel\s+(?:me|myself))\s+\w+/g, m, 1, 'No ME: I feel tired.'));
  out = out.concat(A(/\b(stay|stayed)\s+(?:dizzy|sick|tired)\b/g, m, 1, 'Say FEEL: I feel dizzy.'));
  out = out.concat(A(/\b(?:feel|feels|felt)\s+(tiring|boring)\b/g, m, 1, 'How you feel: tired.'));
  out = out.concat(A(/\bshould\s+(to)\s+\w+/g, m, 1, 'SHOULD + the verb alone: you should rest.'));
  out = out.concat(A(/\bshould\s+(\w+ing|\w+s)\b(?<!\bshould\s+(?:this|less|bless|dress|press|guess|miss|kiss|discuss|cross|pass|bring|sing|swing|ring))/g, m, 1, 'SHOULD + the verb alone: you should drink.'));
  out = out.concat(A(/\b(a\s+pain\s+of)\s+\w+/g, m, 1, 'Say a sore throat, a stomachache.'));
  out = out.concat(A(/\b(?:a|bad)\s+(toss)\b/g, m, 1, 'The word is COUGH.'));
  return out;
};
