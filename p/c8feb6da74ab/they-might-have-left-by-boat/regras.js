/* As regras do corretor desta aula (nível 3): especular sobre o passado. "must/might/may/could/can't/couldn't + to have"; "modal + have + passado simples irregular" (have went/saw/took/came/did/ate/knew); "mustn't have" (alvo: can't have para impossível); "may/might/could/must + particípio sem have" (may left, might gone); "might/may/must has". "had to + verbo" para conclusão fica com o professor (é ambíguo). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:must|might|may|could|can't|can’t|couldn't|couldn’t)(?: not)? to have)\b/g, m, 1, 'No TO after the modal: must HAVE left.'));
  out = out.concat(A(/\b((?:must|might|may|could|can't|can’t|couldn't|couldn’t)(?: not)? have (?:went|saw|took|came|did|ate|knew|swam|wrote|gave|ran|drove|began|broke|got lost))\b/g, m, 1, 'After HAVE: the participle (gone, seen, taken, come).'));
  out = out.concat(A(/\b(mustn't have|mustn’t have|must not have)\b/g, m, 1, 'For impossible: CAN’T have or COULDN’T have.'));
  out = out.concat(A(/\b((?:must|might|may|could)(?: not)? (?:left|gone|seen|taken|tried|pushed|visited|called|been|rowed|swum|come))\b/g, m, 1, 'Something is missing: might HAVE left.'));
  out = out.concat(A(/\b((?:must|might|may|could) has)\b/g, m, 1, 'After a modal: HAVE, never has.'));
  return out;
};
