/* As regras do corretor desta aula (nível 3): distância acadêmica. "the evidences" e "evidence suggest/indicate/show" sem -s; o sujeito vazio que some no começo (Is widely assumed that, Has been claimed that, Has reason to believe); "there are reason"; "study/paper/report … pretends to"; "purports that / purports showing"; "suggests to + verbo"; "would seems"; "has been claim / is widely assume" (particípio); "supposed + verbo" (supposedly). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(the evidences)\b/g, m, 1, 'EVIDENCE is uncountable: the evidence suggests (one item: a piece of evidence).'));
  out = out.concat(A(/\b(evidence (?:suggest|indicate|show|prove|point))\b(?! to)/g, m, 1, 'EVIDENCE is singular: the evidence suggestS.'));
  out = out.concat(A(/(?:^\s*)((?:is|has been) (?:widely |generally |often )?(?:assumed|claimed|believed|thought|said|reported|known|suggested))\b/g, m, 1, 'English needs a subject: IT is widely assumed, IT has been claimed.'));
  out = out.concat(A(/(?:^\s*)(has reason to believe)\b/g, m, 1, 'The fixed frame: THERE IS reason to believe …'));
  out = out.concat(A(/\b(there are reason)\b/g, m, 1, 'REASON here is uncountable: there IS reason to believe.'));
  out = out.concat(A(/\b((?:study|paper|report|article|device|headband|research|data|author|authors) pretends?)\b/g, m, 1, 'PRETEND means to act as if something false is true. A study CLAIMS TO or PURPORTS TO show.'));
  out = out.concat(A(/\b(purports? (?:that|showing))\b/g, m, 1, 'PURPORT TO + verb: the study purports TO SHOW that …'));
  out = out.concat(A(/\b(suggests? to (?:sleep|use|eat|do|go|be|take|stop|buy|wait|drink|read|avoid))\b/g, m, 1, 'SUGGEST never takes TO + verb: the evidence suggests THAT we should …'));
  out = out.concat(A(/\b(would seems)\b/g, m, 1, 'After WOULD, the base form: would SEEM to.'));
  out = out.concat(A(/\b((?:has|have) been claim|(?:is|are) widely assume|(?:is|are) widely believe)\b/g, m, 1, 'The participle: it has been claimED, it is widely assumED.'));
  out = out.concat(A(/\b(supposed (?:replaces|works|helps|cures|shows|makes))\b/g, m, 1, 'The adverb: it SUPPOSEDLY replaces …'));
  return out;
};
