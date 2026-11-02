/* As regras do corretor desta aula (nível 1): passado com -ed e os irregulares. A aula e a lição de casa Live usam este arquivo. */
var IRR = { goed: 'went', taked: 'took', buyed: 'bought', eated: 'ate', seed: 'saw', seen: 'saw', leaved: 'left', maked: 'made', bringed: 'brought', thinked: 'thought', drinked: 'drank', writed: 'wrote', comed: 'came', gived: 'gave', haved: 'had', getted: 'got', runned: 'ran', swimmed: 'swam', sleeped: 'slept', feeled: 'felt', telled: 'told', sayed: 'said', catched: 'caught', teached: 'taught', drived: 'drove', knowed: 'knew', falled: 'fell', waked: 'woke', heared: 'heard', readed: 'read', speaked: 'spoke', meeted: 'met', sitted: 'sat', standed: 'stood', finded: 'found', losed: 'lost', putted: 'put', cutted: 'cut', doed: 'did', wented: 'went', builded: 'built', spended: 'spent', payed: 'paid' };
var BASE_ED = '(?:work|play|watch|go|eat|take|cook|call|walk|see|buy|clean|wash|open|start|wait|want|need|talk|visit|make|have|read|listen|study|stay|travel|live|drink|sleep|meet|get|leave)';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var irr = new RegExp('\\b(' + Object.keys(IRR).join('|') + ')\\b', 'g'), r;
  while ((r = irr.exec(m))) { var w = r[1]; if (w === 'seen' && /\b(?:have|has|had|'ve|’ve|'s|’s)\s+(?:\w+\s+)?seen$/.test(m.slice(0, r.index + 4))) continue; out.push({ i: r.index, f: r.index + w.length, msg: 'A vault word: ' + w + ' → ' + IRR[w] + '.' }); }
  /* o verbo no presente com "last night / yesterday" */
  out = out.concat(A(new RegExp('\\b(?:i|he|she|we|they|you)\\s+(' + BASE_ED + ')\\b(?=[^.!?]*\\b(?:yesterday|last night|last week|last weekend|last year|ago)\\b)', 'g'), m, 1, 'Last night = the past: worked, went, ate.'));
  out = out.concat(A(new RegExp('\\b(?:first|then|after that|finally),?\\s+(?:i|he|she|we|they)\\s+(' + BASE_ED + ')\\b', 'g'), m, 1, 'A story about last night: the past (worked, went).'));
  /* a ortografia: stop → stopped */
  out = out.concat(A(/\b(stoped|planed|shoped|droped|chated|joged|grabed)\b/g, m, 1, 'Double the letter: stopped, planned, shopped.'));
  out = out.concat(A(/\b(studyed|tryed|cryed|carryed)\b/g, m, 1, 'Y becomes I: studied, tried.'));
  out = out.concat(A(/\b(\w+teded|\w+deded)\b/g, m, 1, 'One -ED only.'));
  out = out.concat(A(/\bdid(?:\s+not|n['’]?t)?\s+(went|worked|watched|played|ate|took|saw|bought|called|cooked)\b/g, m, 1, 'After DID, the base verb: did go, didn’t work.'));
  return out;
};
