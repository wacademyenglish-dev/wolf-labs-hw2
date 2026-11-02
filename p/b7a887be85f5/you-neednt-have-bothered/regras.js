/* As regras do corretor desta aula (nível 3): needn't have × didn't need to × could have. "didn't need to have + particípio"; "needn't to"; "needn't have + forma base ou passado"; "needn't had"; "mustn't have + particípio" para esforço à toa; "there was no need of"; "there wasn't need"; "could have / would have been able to + passado ou forma base errada"; "could had". A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:didn't|didn’t|did not) need to have)\b/g, m, 1, 'HAVE + participle goes with NEEDN’T: we needn’t have bought. DIDN’T NEED TO takes the base verb.'));
  out = out.concat(A(/\b(needn['’]t to)\b/g, m, 1, 'No TO after NEEDN’T: you needn’t have worried / you needn’t worry.'));
  out = out.concat(A(/\b(needn['’]t have (?:bring|buy|carry|fill|bother|drive|drove|wrap|pack|worry|come|go|went|make|take|took|spend|spent))\b/g, m, 1, 'NEEDN’T HAVE + participle: brought, bought, carried, bothered, driven.'));
  out = out.concat(A(/\b(needn['’]t had)\b/g, m, 1, 'NEEDN’T HAVE, never needn’t had.'));
  out = out.concat(A(/\b(mustn['’]t have (?:brought|bought|packed|carried|worried|bothered|reserved))\b/g, m, 1, 'For wasted effort: NEEDN’T HAVE. Mustn’t have is a guess.'));
  out = out.concat(A(/\b(no need of|there wasn['’]t need)\b/g, m, 1, 'The fixed frame: THERE WAS NO NEED TO + verb.'));
  out = out.concat(A(/\b((?:could|would) have (?:buy|use|bring|drive|take|go)|would have been able to (?:drove|went|bought|took))\b/g, m, 1, 'COULD HAVE + participle (bought, used). WOULD HAVE BEEN ABLE TO + base verb (drive).'));
  out = out.concat(A(/\b(could had)\b/g, m, 1, 'COULD HAVE + participle.'));
  out = out.concat(A(/\b(shouldn['’]t have bother)\b/g, m, 1, 'Shouldn’t have bothered.'));
  return out;
};
