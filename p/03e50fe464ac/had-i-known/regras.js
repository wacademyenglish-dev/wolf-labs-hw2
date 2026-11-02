/* As regras do corretor desta aula (nível 3): condicionais invertidas. "if + had/were/should + sujeito" (if + inversão); "Hadn't/Weren't + sujeito …," (contração na inversão); "Had not / Were not + sujeito" (NOT depois do sujeito); "Was it not for / Was I" (sempre WERE); "Should + sujeito + will/passado"; "Did + sujeito …," no lugar de Had; "Had … , + will" (would have). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(if (?:had|were|should) (?:i|you|he|she|we|they|it|the|my|our)\b)/g, m, 1, 'The inversion replaces IF. Had I known… (no IF).'));
  out = out.concat(A(/(?:^\s*|[.!;]\s*)((?:hadn't|weren't|shouldn't) (?:i|you|he|she|we|they|it|the \w+|my \w+))\b[^?]*,/g, m, 1, 'No contraction in the inversion: Had he NOT …'));
  out = out.concat(A(/\b((?:had|were) not (?:i|you|he|she|we|they|it))\b/g, m, 1, 'NOT goes after the subject: Had he not …, Were it not for …'));
  out = out.concat(A(/(?:^\s*|[.!;]\s*)(was (?:it not for|i (?:in|you|rich|to|not|him|her)\b))/g, m, 1, 'Always WERE in the inversion: Were it not for … / Were I …'));
  out = out.concat(A(/\b(should (?:i|you|he|she|we|they|it) (?:ever )?(?:will|would|needed|flew|were|was|went|wanted|got|had|needs|flies))\b/g, m, 1, 'After SHOULD + subject: the base verb. Should you need …'));
  out = out.concat(A(/(?:^\s*)(did (?:i|you|he|she|we|they|the \w+) (?:not )?\w+)[^?]*,/g, m, 1, 'For the past, imagined: HAD + subject + participle.'));
  out = out.concat(A(/(?:^\s*)had (?:i|you|he|she|we|they|it|the \w+) (?:not )?\w+[^,]*, (?:i|you|he|she|we|they|it) (will|can)\b/g, m, 1, 'Had I known… → I WOULD HAVE …'));
  return out;
};
