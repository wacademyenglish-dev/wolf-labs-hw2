/* As regras do corretor desta aula (nível 1): o -s da 3ª pessoa, um S só. A aula e a lição de casa Live usam este arquivo. */
var VERBOS_B = '(?:work|go|read|wake|make|watch|study|have|do|play|live|sleep|cook|wash|get|turn|eat|drink|like|walk|come|open|close|stop|finish|teach|leave|take|want|need|know|love|bark|write|drive|run|start)';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(new RegExp('\\b(?:he|she|it|my (?:mother|father|brother|sister|friend|boss|neighbor|dog|cat|wife|husband|son|daughter)|the (?:dog|cat|man|woman|bus|store|light))\\s+(?:always\\s+|usually\\s+|never\\s+|often\\s+|sometimes\\s+)?(' + VERBOS_B + ')\\b(?!s)', 'g'), m, 1, 'He, she, it: the verb takes the S. She works, he goes.'));
  out = out.concat(A(/\b(?:they|we|you|i|the (?:dogs|neighbors|children|twins|lights)|my (?:friends|parents))\s+(?:always\s+|usually\s+)?(works|goes|reads|wakes|makes|watches|studies|has|does|plays|lives|sleeps|cooks|washes|gets|turns|eats|likes|barks|comes|stops|opens|drinks|walks|drives)\b/g, m, 1, 'They: no S on the verb. They work, they go.'));
  out = out.concat(A(/\b(watchs|washs|studys|gos|dos|haves|finishs|teachs|fixs|misss)\b/g, m, 1, 'Spelling: watches, washes, studies, goes, does, has.'));
  out = out.concat(A(/\b(?:doesn['’]?t|does not)\s+(\w+s)\b/g, m, 1, 'The S moved into DOES: he doesn’t work.', function (x) { return !/\b(?:doesn['’]?t|does not)\s+(?:us|this|is|always)\b/.test(x[0]); }));
  return out;
};
