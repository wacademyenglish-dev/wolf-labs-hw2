/* As regras do corretor desta aula (nível 3): expressões idiomáticas são fixas. Plural e artigo quebrados (spilled the bean, broke the ices, an elephant in the room, piece of cake sem a, an arm and leg, threw in the towels, beat around the bushes, under the weathers, on the roll); preposição trocada (from the top of my head, in the tip of, elephant of the room, below the weather, in a roll); palavra trocada ou traduzida (a piece of pie, two rabbits, stepped on the ball, the eyes of the face, the last drop, the chip fell, one rock); "kicked the bucket" para desistir; "off the top of the head" (o possessivo). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [], FIXO = 'This idiom is fixed: keep every word, the -s, the article and the preposition. ';
  out = out.concat(A(/\b(spill(?:ed|s|ing)? the bean)\b(?!s)/g, m, 1, FIXO + 'spill the BEANS.'));
  out = out.concat(A(/\b((?:break|broke|breaking|breaks) the ices)\b/g, m, 1, FIXO + 'break the ICE.'));
  out = out.concat(A(/\b(an elephant in the room|the elephant of the room)\b/g, m, 1, FIXO + 'THE elephant IN the room.'));
  out = out.concat(A(/\b((?:was|is|it's|it’s|be) piece of cake)\b/g, m, 1, FIXO + 'A piece of cake.'));
  out = out.concat(A(/\b(?:was|is|it's|it’s|be|were|are) (a piece of (?:pie|bread|candy))\b/g, m, 1, 'Very easy is a piece of CAKE. No other food.'));
  out = out.concat(A(/\b(two rabbits|with one rock)\b/g, m, 1, 'The English picture: kill two BIRDS with one STONE.'));
  out = out.concat(A(/\b(step(?:ped|s)? on the ball)\b/g, m, 1, 'The English picture: DROP the ball.'));
  out = out.concat(A(/\b(the eyes of the face)\b/g, m, 1, 'The English picture: it cost AN ARM AND A LEG.'));
  out = out.concat(A(/\b(an arm and leg)\b/g, m, 1, FIXO + 'an arm and A leg.'));
  out = out.concat(A(/\b(the last drop)\b/g, m, 1, 'The English picture: the last STRAW.'));
  out = out.concat(A(/\b(the chip (?:finally )?(?:fell|dropped|falls))\b/g, m, 1, 'The English picture: the PENNY dropped.'));
  out = out.concat(A(/\b(kick(?:ed|s)? the bucket)\b(?= and (?:quit|left|gave|went|bought|stopped))/g, m, 1, 'KICK THE BUCKET means to DIE. Giving up is THROW IN THE TOWEL.'));
  out = out.concat(A(/\b(threw in the towels|beat around the bushes|under the weathers|below the weather)\b/g, m, 1, FIXO));
  out = out.concat(A(/\b(from the top of (?:my|your|his|her|our|their) head|off the top of the head)\b/g, m, 1, FIXO + 'OFF the top of MY / HER head: the possessive follows the person.'));
  out = out.concat(A(/\b(in the tip of|the point of my tongue)\b/g, m, 1, FIXO + 'ON the TIP of my tongue.'));
  out = out.concat(A(/\b((?:in a|on the) roll)\b/g, m, 1, FIXO + 'ON A roll.'));
  out = out.concat(A(/\b(beated)\b/g, m, 1, 'Only the verb moves, and BEAT is irregular: he beat around the bush.'));
  return out;
};
