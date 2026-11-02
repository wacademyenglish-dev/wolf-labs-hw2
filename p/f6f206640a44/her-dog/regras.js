/* As regras do corretor desta aula (nível 1): his / her / their / its pelo DONO; sem S; its sem apóstrofo. A aula e a lição de casa Live usam este arquivo. */
var HOMEM = '(?:uncle|father|dad|brother|son|grandfather|grandpa|husband|boyfriend|paulo|hugo|tom|tomas|daniel|marco|leo|pedro|john|mr\\.?\\s+\\w+)';
var MULHER = '(?:aunt|mother|mom|mum|sister|daughter|grandmother|grandma|wife|girlfriend|marta|ana|sofia|elena|maria|julia|bia|mrs\\.?\\s+\\w+|ms\\.?\\s+\\w+)';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(it['’]s)\s+(?:name|tail|color|colour|collar|leg|legs|house|garden|eyes|owner|food|bed|door|roof|walls?|price)\b/g, m, 1, 'ITS, no apostrophe: its name.'));
  out = out.concat(A(/\b(hers|theirs|yours|ours)\s+(?!is\b|are\b|was\b|were\b|too\b|and\b|or\b|but\b)[a-z]+s?\b(?=[\s.,!?])/g, m, 1, 'No S before a thing: her books, their car.'));
  /* a pessoa da frase escolhe a palavra: "My uncle … her car" */
  out = out.concat(A(new RegExp('\\b(?:my|your|his|her|our|their)?\\s*' + HOMEM + '\\s+(?:has|have|had|is|was|lives|loves|likes|drives|takes|walks)\\b[^.!?]{0,40}?\\b(her)\\s+(?!and\\b)[a-z]+', 'g'), m, 1, 'The owner is a man: HIS.'));
  out = out.concat(A(new RegExp('\\b(?:my|your|his|her|our|their)?\\s*' + MULHER + '\\s+(?:has|have|had|is|was|lives|loves|likes|drives|takes|walks)\\b[^.!?]{0,40}?\\b(his)\\s+[a-z]+', 'g'), m, 1, 'The owner is a woman: HER.'));
  out = out.concat(A(/\b(?:\w+\s+and\s+\w+|my parents|my friends|my neighbors|the twins|the kids)\s+(?:have|had|live|love|like)\b[^.!?]{0,40}?\b(his|her)\s+[a-z]+/g, m, 1, 'Two owners or more: THEIR.'));
  return out;
};
