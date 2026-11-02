/* As regras do corretor desta aula (nível 2): remember / forget / stop + -ing ou to, nunca o verbo puro; lembrete com remember to / don't forget to; "forgot buying" para o que não aconteceu. "stopped to smoke" é inglês certo (parou para fumar), então não é marcado. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:remember|remembers|remembered|forget|forgets|forgot|stop|stops|stopped)\s+(lock|call|buy|smoke|send|post|close|open|bring|pay|eat|drink|talk|meet|turn|take|go|do|make|write|read)\b/g, m, 1, 'After the verb: -ing or to, never the plain verb.'));
  out = out.concat(A(/\b((?:don't|do not)\s+forget\s+\w+ing)\b/g, m, 1, 'A reminder points forward: Don’t forget TO …'));
  out = out.concat(A(/^\s*(remember\s+\w+ing)\b[^.?!]*\b(?:tonight|tomorrow|later|next|before you|when you)\b/g, m, 1, 'A reminder points forward: Remember TO …'));
  out = out.concat(A(/\b(forgot\s+(?:buying|sending|paying|locking|calling|posting|closing|bringing))\b/g, m, 1, 'It didn’t happen: forgot TO buy.'));
  return out;
};
