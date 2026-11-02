/* As regras do corretor da revisão Hook Them in Ten Seconds. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(wonder(?:ed)? why (?:do|does|did|are|is) )/gi, m, 1, "Indirect question: wondered why WE dream (no do)."));
  out = out.concat(A(/\b((?:sorry|I apologi[sz]e) (?:for|about) my english)\b/gi, m, 1, "Never apologize in your opening: promise something instead."));
  out = out.concat(A(/\b(imagine that you will)\b/gi, m, 1, "Imagine + present: Imagine you’re…"));
  return out;
};
