/* As regras do corretor desta aula (nível 2): some- / any- / no- + body / thing / where; uma negativa só; everybody e somebody no singular. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:isn['’]t|aren['’]t|wasn['’]t|weren['’]t|don['’]t|doesn['’]t|didn['’]t|can['’]t|won['’]t|haven['’]t|hasn['’]t)\s+(?:\w+\s+)?(nothing|nobody|no one|nowhere)\b/g, m, 1, 'One negative is enough: isn’t anything, or just nothing.'));
  out = out.concat(A(/\b(?:nobody|no one|nothing)\s+(didn['’]t|doesn['’]t|don['’]t|wasn['’]t|isn['’]t|can['’]t|won['’]t)\b/g, m, 1, 'nobody / nothing is already negative: Nobody saw it.'));
  out = out.concat(A(/\b(?:everybody|everyone|somebody|someone|nobody|anybody)\s+(are|were|have|want|like|know|need)\b/g, m, 1, 'everybody / somebody is singular: is, was, has, wants.'));
  out = out.concat(A(/\b(somebodies|anybodies|everybodies|somethings|nobodies)\b/g, m, 1, 'No plural: somebody, something.'));
  out = out.concat(A(/^\s*(?:there['’]s|there is|there was)\s+(anybody|anything|anyone)\b/g, m, 1, 'In a positive sentence: somebody, something.'));
  out = out.concat(A(/\b(every people|all the people is)\b/g, m, 1, 'Say: everybody is… (one word, singular).'));
  return out;
};
