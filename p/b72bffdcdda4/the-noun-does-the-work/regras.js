/* As regras do corretor desta aula (nível 3): make / do / take / have + substantivo. make/made/making + a photo/a picture/exercise/a favor/homework/the dishes/the shopping; do/did/does + a mistake/a decision/a photo/a call/a noise/a good time/a break/a plan/progress; take/took + a decision (forma britânica aceita: fica fora); had/have + a photo. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:make|makes|made|making) (?:a |some |the )?(?:photo|photos|picture|pictures))\b/g, m, 1, 'TAKE a photo.'));
  out = out.concat(A(/\b((?:make|makes|made|making) (?:some |more )?exercise)\b/g, m, 1, 'DO exercise.'));
  out = out.concat(A(/\b((?:make|makes|made|making) (?:me |him |her |us |them |you )?a favou?r)\b/g, m, 1, 'DO a favor.'));
  out = out.concat(A(/\b((?:make|makes|made|making) (?:my |your |the |his |her )?(?:homework|dishes|shopping|housework))\b/g, m, 1, 'DO homework, DO the dishes, DO the shopping.'));
  out = out.concat(A(/\b((?:do|does|did|doing|done) (?:a |an |the |some |many |lots of |a lot of |a big |a great |a good |two |three )?(?:mistake|mistakes|decision|decisions|phone call|call|calls|noise|good time|great time|plan|progress|complaint))\b/g, m, 1, 'MAKE a mistake, MAKE a decision, MAKE a call (HAVE a good time).'));
  out = out.concat(A(/\b((?:do|does|did|make|makes|made) (?:a |an )?(?:short |quick |long )?(?:break|shower|look|rest))\b/g, m, 1, 'TAKE or HAVE a break, a shower, a look, a rest.'));
  return out;
};
