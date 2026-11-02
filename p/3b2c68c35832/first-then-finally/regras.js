/* As regras do corretor desta aula (nível 2): história no passado e em ordem — after sozinho, at the end, irregulares regularizados, did/didn't + base. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/(?:^|[.!?]\s*)(after)\s*,/g, m, 1, 'after needs something after it. Alone: Then, or After that.'));
  out = out.concat(A(/(?:^|[.!?]\s*)(at the end)\s*,/g, m, 1, 'In the end, … (or Finally). At the end needs “of the …”.'));
  out = out.concat(A(/\b(throwed|falled|comed|goed|meeted|runned|seed|bringed|leaved|losed|standed|taked|finded|getted|sitted|eated|drinked|buyed|thinked|catched|teached|writed|maked|telled|sayed|knowed|growed|flyed|breaked|forgetted)\b/g, m, 1, 'An irregular verb: no -ed (threw, fell, came, went, met …).'));
  out = out.concat(A(/\b(stoped|droped|planed|shoped)\b/g, m, 1, 'Double the last letter: stopped, dropped.'));
  out = out.concat(A(/\b(?:didn't|didnt|did not|did)\s+(?:\w+\s+)?(wanted|went|came|saw|took|threw|fell|met|ran|got|made|said|told|found|left|liked|worked|played|stopped|arrived)\b/g, m, 1, 'did / didn’t + the base verb: didn’t want, did he go?'));
  return out;
};
