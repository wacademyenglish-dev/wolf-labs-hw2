/* As regras do corretor desta aula (nível 1): imperativo (o verbo sozinho) e Don't + verbo. A aula e a lição de casa Live usam este arquivo. */
var COZ = '(?:crack|pour|mix|heat|flip|cut|wash|eat|add|put|whisk|beat|stir|boil|cook|bake|fry|take|cover|stack|serve|open|close|turn|wait|drink|use|leave|touch|make|get|chop|melt|slice|spread|toast)';
var COZ_S = '(?:cracks|pours|mixes|heats|flips|cuts|washes|adds|puts|whisks|beats|stirs|boils|cooks|bakes|fries|takes|covers|serves|opens|turns|waits|uses|leaves|makes|chops|melts|slices|spreads)';
var COZ_ING = '(?:cracking|pouring|mixing|heating|flipping|cutting|washing|adding|putting|whisking|beating|stirring|boiling|cooking|baking|frying|taking|covering|serving|opening|turning|waiting|using|leaving|touching|making|chopping|melting|slicing|spreading)';
var INICIO = '(?:^\\s*|\\n|[.!?]\\s+|(?:first|then|next|after that|finally),?\\s+)';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(new RegExp(INICIO + '(you)\\s+' + COZ + '\\b', 'g'), m, 1, 'An order starts with the verb. No YOU: Crack two eggs.'));
  out = out.concat(A(new RegExp(INICIO + '(' + COZ_ING + ')\\b', 'g'), m, 1, 'No -ING in an order: Mix the milk.'));
  out = out.concat(A(new RegExp(INICIO + '(to)\\s+' + COZ + '\\b', 'g'), m, 1, 'No TO in an order: Pour the milk.'));
  out = out.concat(A(new RegExp(INICIO + '(' + COZ_S + ')\\b', 'g'), m, 1, 'The verb alone, no -S: Flip the pancake.'));
  out = out.concat(A(new RegExp('(?:^\\s*|[.!?,]\\s*|\\n)((?:no|not)\\s+' + COZ + ')\\b', 'g'), m, 1, 'NO = Don’t + verb: Don’t touch.'));
  out = out.concat(A(/\b(don['’]?t\s+to)\s+\w+/g, m, 1, 'After Don’t: the verb alone. Don’t open.'));
  out = out.concat(A(/\bdon['’]?t\s+(\w+ing)\b/g, m, 1, 'After Don’t: the verb alone, no -ING.'));
  return out;
};
