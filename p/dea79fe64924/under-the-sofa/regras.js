/* As regras do corretor da revisão Under the Sofa. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(on the (?:kitchen|bedroom|bathroom|living room|bag|box|car))\b/gi, m, 1, "Inside a room or a box: in the kitchen, in my bag."));
  out = out.concat(A(/\b(in the (?:table|shelf|floor|wall|desk|sofa))\b/gi, m, 1, "A surface: on the table, on the shelf."));
  out = out.concat(A(/\b(next (?:the|a|my|your))\b/gi, m, 1, "Two words: next to the door."));
  out = out.concat(A(/\b(between of)\b/gi, m, 1, "No of: between the cushions."));
  return out;
};
