/* As regras do corretor desta aula (nível 1): pronomes objeto depois do verbo e da preposição; call sem TO; e o IT que não cai (I like it). A aula e a lição de casa Live usam este arquivo. */
var VERBO_OBJ = '(?:call|calls|called|tell|tells|told|ask|asks|asked|invite|invites|invited|send|sends|sent|give|gives|gave|show|shows|showed|help|helps|helped|see|sees|saw|love|loves|loved|like|likes|liked|meet|meets|met|pay|pays|paid|bring|brings|brought|visit|visits|visited|thank|thanks|thanked|text|texts|texted|miss|misses|missed|kiss|hug|hugged|pick|picked|drive|drove|answer|answered|know|knows|knew|understand|understood|need|needs|needed|want|wants|wanted|hate|hates|with|for|to|about|from|without|behind|near)';
var SEGUE_VERBO = '(?:is|are|was|were|am|can|can[\'’]t|will|won[\'’]t|has|have|had|do|does|did|don[\'’]t|doesn[\'’]t|didn[\'’]t|isn[\'’]t|aren[\'’]t|wasn[\'’]t|might|must|should|could|would|\\w+ed|\\w+s|went|came|said|told|made|got|knew|thought|saw|left|took|gave|ate|always|never|often|really|also|just)';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var SUJ = { he: 'him', she: 'her', we: 'us', they: 'them' };
  var re = new RegExp('\\b' + VERBO_OBJ + '\\s+(he|she|we|they)\\b(?!\\s+' + SEGUE_VERBO + '\\b)', 'g'), r;
  while ((r = re.exec(m))) { var w = r[1], i = r.index + r[0].length - w.length; out.push({ i: i, f: i + w.length, msg: 'After the verb: ' + w + ' → ' + SUJ[w] + '.' }); }
  out = out.concat(A(/\b(?:call|calls|called|calling|phone|phoned|text|texted)\s+(to)\s+(?:me|him|her|them|us|you|my|your|his|our|their|the)\b/g, m, 1, 'CALL takes no TO: call him.'));
  out = out.concat(A(/\b(?:with|for|to|about|from|and)\s+(i)\b(?!\s+(?:am|'m|’m|was|have|had|can|will|do|did|don|didn|want|went|saw|love|like|think|know|said|called|told))/g, m, 1, 'After a little word like with: me.'));
  out = out.concat(A(/\b(?:explain|explains|explained|say|says|said)\s+(me|him|her|us|them)\b(?!\s+(?:to|that))/g, m, 1, 'Explain IT TO me: the thing first, then to + person.'));
  /* não largar o IT: "Yes, I like." / "Give to her." / "I love." no fim */
  out = out.concat(A(/\b(?:i|we|you|they)\s+(?:really\s+)?(like|love|want|need|have)\s*(?=[.!]\s*$|[.!]\s+[A-Za-z])/g, m, 1, 'Say the thing: I like IT.'));
  out = out.concat(A(/\b(?:give|send|bring|take)\s+(to)\s+(?:me|him|her|us|them|you)\b/g, m, 1, 'Say the thing: give IT to her.'));
  out = out.concat(A(/\b(?:for|to|with)\s+(my|your|our|their)\s*[.!?,]/g, m, 1, 'Alone, after for: me, you, us, them.'));
  return out;
};
