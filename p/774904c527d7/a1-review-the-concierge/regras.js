/* As regras do corretor da REVISÃO A1 · UNIDADE 5: no / not + verbo (o "não" do português), let's to / let's + -ing,
   please to, turn left in. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/^((?:no|not) (?:take|open|eat|go|touch|press|forget|ring|be|walk|turn|cross|drink|run))\b/gi, m, 1, 'Don’t + verb: Don’t take the bus.'));
  out = out.concat(A(/\b(let’s to \w+|let's to \w+|let’s \w+ing|let's \w+ing)\b/gi, m, 1, 'let’s + verb: let’s go.'));
  out = out.concat(A(/\b(please to \w+)\b/gi, m, 1, 'please + verb: please sit.'));
  out = out.concat(A(/\b(turn (?:left|right) in (?:the )?\w+)\b/gi, m, 1, 'turn left AT the bank.'));
  out = out.concat(A(/\b(let’s don’t|let's don't)\b/gi, m, 1, 'let’s not + verb.'));
  return out;
};