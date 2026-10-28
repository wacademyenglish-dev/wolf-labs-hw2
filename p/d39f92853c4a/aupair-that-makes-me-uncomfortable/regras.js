/* As regras do corretor da revisão That Makes Me Uncomfortable. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(that[’']?s not my job)\b/gi, m, 1, "Kinder: That’s not part of my duties."));
  out = out.concat(A(/\b(I am not comfortable with this things)\b/gi, m, 1, "I’m not comfortable with that."));
  return out;
};
