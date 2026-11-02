/* As regras do corretor desta aula (nível 3): compound adjectives. Plural na parte do número antes do substantivo ("a ten-hours flight"); a ordem do português ("a flight of ten hours", "a view five-star"); "a very known"; "well-knowed"; "-ed/-ing" trocados em compostos conhecidos; "blue-eyes", "open-mind". A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var NUM = '(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|fifteen|twenty|thirty|forty|fifty|sixty|hundred|\\d+)';
  out = out.concat(A(new RegExp('\\b(' + NUM + '-(?:hours|minutes|days|weeks|months|years|stars|pounds|dollars|kilos|miles|floors|seconds)(?:-old)? \\w+)', 'g'), m, 1, 'The number part is an adjective: no -S. a ten-hour flight.'));
  out = out.concat(A(new RegExp('\\b((?:flight|trip|walk|ride|drive|journey|break|wait|delay|meeting|course|holiday|vacation) of ' + NUM + ' (?:hours?|minutes?|days?|weeks?|months?))\\b', 'g'), m, 1, 'Before the noun, in one piece: a ten-hour flight.'));
  out = out.concat(A(/\b((?:view|hotel|restaurant|room) (?:five|four|three|two|one)-stars?)\b/g, m, 1, 'Before the noun: a five-star view.'));
  out = out.concat(A(/\b((?:a|the) very known)\b/g, m, 1, 'WELL + past participle: a well-known hotel.'));
  out = out.concat(A(/\b(well-knowed|well-payed|well-maked|hand-maked)\b/g, m, 1, 'The past participle: well-known, well-paid, hand-made.'));
  out = out.concat(A(/\b(mouth-watered|jaw-dropped|eye-opened|heart-broke|good-looked|hand-making|home-cooking food|italian-spoken|english-spoken)\b/g, m, 1, 'It does something: -ING (mouth-watering). It was done: participle (hand-made).'));
  out = out.concat(A(/\b((?:blue|green|brown|open|kind|narrow|broken|warm|cold)-(?:eyes|mind|minds|heart|hearts)) (?:people|person|man|woman|cat|dog|girl|boy|host|hosts|guide|friend|friends)\b/g, m, 1, 'Adjective + noun + -ED: blue-eyed, open-minded.'));
  return out;
};
