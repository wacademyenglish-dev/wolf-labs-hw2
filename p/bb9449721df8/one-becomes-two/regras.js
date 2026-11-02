/* As regras do corretor desta aula (nível 1): plural regular e irregular. A aula e a lição de casa Live usam este arquivo. */
var CONTAVEIS = '(?:apple|tomato|banana|egg|lemon|orange|peach|cherry|berry|grape|plum|carrot|potato|onion|nut|box|knife|loaf|cake|cookie|pie|glass|dish|cup|book|pen|dog|cat|ticket|bag|bottle|brother|sister|friend|kid|day|week|year|hour|minute)';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(new RegExp('\\b(?:two|three|four|five|six|seven|eight|nine|ten|twelve|many|some|\\d+)\\s+(' + CONTAVEIS + ')\\b(?!\\s+(?:pies?|juices?|trees?|cakes?|bread|jam|of|old)\\b)', 'g'), m, 1, 'More than one needs its ending: two tomatoes.'));
  out = out.concat(A(/\b(childs|childrens|peoples|mans|womans|womens|mens|foots|tooths|mouses)\b/g, m, 1, 'A stubborn one: children, people, men, women, feet, teeth.'));
  out = out.concat(A(/\b(knifes|loafs|leafs|halfs|shelfs|wifes)\b/g, m, 1, 'The F turns into V: knives, loaves, leaves.'));
  out = out.concat(A(/\b(cherrys|berrys|babys|citys|partys|familys|storys|countrys|ladys)\b/g, m, 1, 'A consonant before the Y: -IES (cherries).'));
  out = out.concat(A(/\b(daies|boies|keies|traies|toies|monkies)\b/g, m, 1, 'A vowel before the Y: just + S (days, boys).'));
  out = out.concat(A(/\b(peachs|boxs|dishs|buss|glasss|brushs|watchs|tomatos|potatos|sandwichs|classs)\b/g, m, 1, 'A hiss at the end needs a beat: + ES (peaches, boxes).'));
  return out;
};
