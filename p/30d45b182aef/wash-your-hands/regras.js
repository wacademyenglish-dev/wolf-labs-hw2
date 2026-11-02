/* As regras do corretor desta aula (nível 1): imperativos. You + verbo de ordem no começo (You give me…), verbo com -s no começo (Gives / Calms / Washes), To + verbo no começo, please to / please + -ing, don't + -ing, Not / No + verbo no começo, Let's to / Let's we, Are quiet no começo. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var VB = '(?:give|calm|wash|close|open|sit|stand|come|go|be|move|touch|stop|look|listen|turn|take|put|eat|help|wait|call|clean|knock)';
  out = out.concat(A(new RegExp('^\\s*(?:please,? )?(you ' + VB + ')\\b(?![^.!?]*\\?)', 'g'), m, 1, 'An order starts with the verb: Give me…, Be quiet. No you.', function () { return /!\s*$/.test(frase) || /^\s*(?:please,? )?you \w+ (?:me|my|your|it|the door|down|up|quiet)\b/i.test(frase); }));
  out = out.concat(A(/^\s*(?:please,? )?((?:gives|calms|washes|closes|opens|sits|comes|goes|moves|touches|stops|looks|listens|turns|takes|puts|eats|helps|waits|calls|cleans))\b/g, m, 1, 'The verb with no -s: give, calm down, move, wash.'));
  out = out.concat(A(/^\s*(to (?:calm|wash|close|open|sit|come|go|be|move|stop|look|listen|turn|take|put|help|wait|clean))\b/g, m, 1, 'No to: Calm down. Wash your hands.'));
  out = out.concat(A(/\b(please,? to \w+)/g, m, 1, 'No to: Please wash your hands.'));
  out = out.concat(A(/\b((?:please,?|don't|don’t|do not) \w+ing)\b/g, m, 1, 'The base verb, no -ing: Don’t touch. Please wash.', function (x) { return !/(?:thing|bring|sing|ring|swing|king)$/.test(x[1]); }));
  out = out.concat(A(/^\s*((?:not|no) (?:touch|move|eat|go|come|look|run|talk|sit|open|close|be|stop|use|smoke|park))\b/g, m, 1, 'The negative: Don’t + verb. Don’t touch. Don’t move.'));
  out = out.concat(A(/\b(let's to|let’s to|lets to|let's we|let’s we|let us we)\b/g, m, 1, 'Let’s + verb: Let’s have a meeting.'));
  out = out.concat(A(/^\s*((?:you )?are (?:quiet|careful|nice|ready|on time|calm|happy|patient|polite))\b(?![^.!?]*\?)/g, m, 1, 'With adjectives, be: Be quiet. Don’t be late.'));
  out = out.concat(A(/\b((?:don't|don’t) (?:moves|touches|eats|goes|comes|looks))\b/g, m, 1, 'After don’t: the verb with no -s.'));
  return out;
};
