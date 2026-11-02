/* As regras do corretor desta aula (nível 1): tamanho + cor + coisa, e o A de "I want a…". A aula e a lição de casa Live usam este arquivo. */
var CORES_RE = '(?:black|white|red|blue|green|yellow|pink|brown|gray|grey|orange|purple|beige)';
var TAM_RE = '(?:small|medium|large|big|little|long|short)';
var COISA_RE = '(?:coat|bag|hat|shirt|sweater|jacket|dress|scarf|skirt|t-shirt|car|bike|house|cup|phone|backpack|umbrella|jumper|hoodie)';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  /* a cor depois da coisa: a coat black */
  out = out.concat(A(new RegExp('\\b(?:a|an|the|my|your|his|her|our|their|one)\\s+(?:' + TAM_RE + '\\s+)?(' + COISA_RE + '\\s+(?:' + CORES_RE + '|' + TAM_RE + '))\\b', 'g'), m, 1, 'Size and color go BEFORE the thing: a small black coat.'));
  /* a cor antes do tamanho: a black small coat */
  out = out.concat(A(new RegExp('\\b(' + CORES_RE + '\\s+' + TAM_RE + ')\\s+' + COISA_RE + '\\b', 'g'), m, 1, 'Size first, then color: a small black coat.'));
  /* sem o A: I want black coat */
  out = out.concat(A(new RegExp('\\b(?:want|need|have|buy|bought|like|wear|get)\\s+((?:' + TAM_RE + '|' + CORES_RE + '|warm|new|old|nice)\\s+(?:(?:' + CORES_RE + '|warm|new)\\s+)?' + COISA_RE + ')\\b(?!s)', 'g'), m, 1, 'One thing: say A. I want a black coat.'));
  out = out.concat(A(new RegExp('\\b(?:want|need|buy|bought)\\s+(' + COISA_RE + ')\\b(?!s)', 'g'), m, 1, 'One thing: say A. I want a coat.'));
  /* won't no lugar de want */
  out = out.concat(A(/\bi (won['’]?t) an? \w+/g, m, 1, 'WANT (long A): I want a coat. Won’t = will not.'));
  return out;
};
