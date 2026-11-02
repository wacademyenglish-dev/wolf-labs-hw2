/* As regras do corretor desta aula (nível 3): sintagmas nominais complexos. O número no plural dentro da pilha (a two-years-old car, a three-pages memo, a two years old car); a ordem dos modificadores (material antes de tamanho/opinião/cor, cor antes de tamanho/idade/opinião, origem antes de idade/tamanho, finalidade antes do material, tamanho antes de opinião, idade antes de tamanho); o modificador depois do núcleo com OF (a bag of leather brown). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var NUM = '(?:one|two|three|four|five|six|seven|eight|nine|ten|twenty|\\d+)';
  var OP = '(?:beautiful|lovely|nice|ugly|strange|great|cheap|expensive|worn|heavy)', TAM = '(?:small|big|little|large|tall|huge|tiny)', IDA = '(?:old|new|antique|young)';
  var COR = '(?:black|white|red|green|blue|brown|gray|grey|yellow|pink)', MAT = '(?:brass|wooden|glass|leather|steel|iron|cast-iron|metal|plastic|cotton|silk|rosewood)';
  var ORI = '(?:french|italian|german|english|american|japanese|chinese|brazilian|victorian|mexican)', FIM = '(?:cooking|writing|reading|running|smoothing|office|work|delivery|sleeping)';
  out = out.concat(A(new RegExp('\\b(' + NUM + '-(?:years|pages|minutes|stars|hours|days|weeks|months|miles|floors|rooms|euros|dollars)(?:-old)?)\\b(?= [a-z])', 'g'), m, 1, 'Inside the stack, the number word goes SINGULAR: a two-YEAR-old car, a three-PAGE memo.'));
  out = out.concat(A(new RegExp('\\b(?:a|an) (' + NUM + ' years? old) (?!man\\b|woman\\b|boy\\b|girl\\b)[a-z]+', 'g'), m, 1, 'Before the noun: a two-year-old car (hyphens, singular).'));
  out = out.concat(A(new RegExp('\\b(' + MAT + ' (?:' + TAM + '|' + OP + '|' + COR + '|' + IDA + '))\\b', 'g'), m, 1, 'Material goes late, near the noun: opinion, size, age, shape, color, origin, MATERIAL, purpose.'));
  out = out.concat(A(new RegExp('\\b(' + COR + ' (?:' + TAM + '|' + OP + '|' + IDA + '))\\b', 'g'), m, 1, 'Color comes after opinion, size and age.'));
  out = out.concat(A(new RegExp('\\b(' + ORI + ' (?:' + IDA + '|' + TAM + '|' + OP + '))\\b', 'g'), m, 1, 'Origin comes after age and size: an old FRENCH clock.'));
  out = out.concat(A(new RegExp('\\b(' + FIM + ' (?:' + MAT + '|' + COR + '))\\b', 'g'), m, 1, 'Purpose goes right next to the noun: a cast-iron COOKING pot.'));
  out = out.concat(A(new RegExp('\\b(' + TAM + ' ' + OP + ')\\b', 'g'), m, 1, 'Opinion comes first: a BEAUTIFUL small …'));
  out = out.concat(A(new RegExp('\\b(' + IDA + ' ' + TAM + ')\\b', 'g'), m, 1, 'Size comes before age: a small OLD …'));
  out = out.concat(A(new RegExp('\\b(of (?:leather|wood|brass|glass|steel|iron|cotton|silk|plastic),? (?:' + COR + '|' + TAM + '|' + OP + '))\\b', 'g'), m, 1, 'English builds to the LEFT and joins with nothing: a brown leather bag.'));
  return out;
};
