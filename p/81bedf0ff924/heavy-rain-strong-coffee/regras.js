/* As regras do corretor da revisão Heavy Rain, Strong Coffee. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(strong (?:rain|traffic|smoker))\b/gi, m, 1, "Rain, traffic and smokers are heavy: heavy rain."));
  out = out.concat(A(/\b(very recommend(?:ed)?)\b/gi, m, 1, "highly recommended (never very recommend)."));
  out = out.concat(A(/\b(highly (?:cold|sad|happy|tired|grateful))\b/gi, m, 1, "highly goes with recommended, unlikely, qualified."));
  out = out.concat(A(/\b(very very \w+)\b/gi, m, 1, "One precise word: bitterly cold, deeply grateful."));
  return out;
};
