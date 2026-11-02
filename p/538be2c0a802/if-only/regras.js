/* As regras do corretor desta aula (nível 4): wish / if only. presente depois de wish (I wish she plays), will depois de wish, I wish I would, passado simples onde já passou com earlier / yesterday (if only we knew earlier), if only + would have, would / could + passado, wish + can, wish + presente onde é hope, hope + passado com tomorrow. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:wish|wishes|if only) (?:that |the |my |this )?(?:i|you|he|she|it|we|they|bonnie|\w+) (?:still )?(?:plays|is|am|are|has|needs|lives|loves|knows|comes|works|wants|likes|stops|talks))\b/g, m, 1, 'A wish about now goes one step back: wish she played, wish I were.'));
  out = out.concat(A(/\b((?:wish|wishes|if only) (?:i|you|he|she|it|we|they|\w+) (?:will|won't|'ll) \w+)/g, m, 1, 'No will after wish: I wish she played.'));
  out = out.concat(A(/\b((?:wish|if only) i would \w+)/g, m, 1, 'Not “I wish I would”: use were or could.'));
  out = out.concat(A(/\b((?:wish|if only) (?:i|you|he|she|it|we|they|\w+) (?:knew|left|went|said|told|saw|did|came|took|bought|played|listened|called) [^.!?]*\b(?:earlier|yesterday|last \w+|ago|before))\b/g, m, 1, 'It already happened: had + participle (if only we had known earlier).'));
  out = out.concat(A(/\b((?:wish|if only) (?:i|you|he|she|it|we|they|\w+) (?:wouldn't|would) have \w+)/g, m, 1, 'If only + had + participle, no would have.'));
  out = out.concat(A(/\b((?:wish|if only) (?:i|you|he|she|it|we|they|\w+) (?:have|has) (?:known|left|gone|done|been|seen|told))\b/g, m, 1, 'It already happened: had + participle.'));
  out = out.concat(A(/\b((?:would|could) (?:stops|flew|talked|played|went|came|was))\b/g, m, 1, 'After would / could: the base verb (would stop, could fly).'));
  out = out.concat(A(/\b((?:wish|if only) (?:i|you|he|she|we|they) can\b)/g, m, 1, 'Wish + could, not can.'));
  out = out.concat(A(/\b(wish (?:\w+ ){1,2}(?:comes|come|goes|go|calls|call|wins|win) [^.!?]*\b(?:tomorrow|next \w+|tonight|soon))\b/g, m, 1, 'A real possibility: hope + present (I hope she comes tomorrow).'));
  out = out.concat(A(/\b(hope (?:\w+ ){1,2}(?:came|went|called|won|was) [^.!?]*\b(?:tomorrow|next \w+|tonight|soon))\b/g, m, 1, 'Hope + present for the future: I hope she comes.'));
  out = out.concat(A(/\b((?:wish|if only) (?:i|you|he|she|it|we|they|\w+) would (?:still )?(?:need|know|be|have|love|like|want))\b/g, m, 1, 'A state (need, know, be): wish + past, not would.'));
  return out;
};
