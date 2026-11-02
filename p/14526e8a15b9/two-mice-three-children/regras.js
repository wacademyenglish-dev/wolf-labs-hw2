/* As regras do corretor desta aula (A1): os plurais. + S em palavra que muda (childrens, peoples, mouses, foots,
   tooths, gooses, mans, womans); + S em palavra que não muda (sheeps, fishs); y → ies (babys);
   número maior que um + singular de palavra que muda (two child, three mouse, five person).
   A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(childrens)\b/gi, m, 1, 'children is already plural. No -s.'));
  out = out.concat(A(/\b(peoples)\b/gi, m, 1, 'people is already plural. No -s.'));
  out = out.concat(A(/\b(mouses|mices)\b/gi, m, 1, 'one mouse, two mice.'));
  out = out.concat(A(/\b(foots|feets)\b/gi, m, 1, 'one foot, two feet.'));
  out = out.concat(A(/\b(tooths|teeths)\b/gi, m, 1, 'one tooth, two teeth.'));
  out = out.concat(A(/\b(gooses|geeses)\b/gi, m, 1, 'one goose, two geese.'));
  out = out.concat(A(/\b(mans|mens)\b/gi, m, 1, 'one man, two men.'));
  out = out.concat(A(/\b(womans|womens)\b/gi, m, 1, 'one woman, two women.'));
  out = out.concat(A(/\b(sheeps|fishs)\b/gi, m, 1, 'sheep and fish do not change: five sheep, six fish.'));
  out = out.concat(A(/\b(babys)\b/gi, m, 1, 'baby → babies: y → ies.'));
  out = out.concat(A(/\b((?:two|three|four|five|six|seven|eight|nine|ten|\d+) (?:child|person|man|woman|mouse|foot|tooth|goose|baby))\b/gi, m, 1, 'More than one: the plural. two children, three people, four mice.'));
  return out;
};
