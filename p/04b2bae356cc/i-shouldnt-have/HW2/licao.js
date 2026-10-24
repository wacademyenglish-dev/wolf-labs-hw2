/* I SHOULDN’T HAVE WISHED · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past modals (should have, could have, needn't have). Filme: falas originais, no mundo da aula, sem violência. B2: nenhum português. Só arrependimentos do dia a dia. */
window.HW2 = {
  "id": "i-shouldnt-have",
  "titulo": "I Shouldn’t Have Wished",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/04b2bae356cc/i-shouldnt-have/img/live-capa.webp",
  "alvo": "past modals: should have + past participle (a better choice), shouldn't have (a mistake), could have (it was possible), needn't have (it was not necessary); never should have + past simple (went), never didn't should have, never could + past participle without have",
  "abrir": "What is something you shouldn't have bought?",
  "fecho": "<b>should have</b> + past participle = a better choice in the past: <i>I should have called.</i> <b>shouldn't have</b> = it was a mistake. <b>could have</b> = it was possible. <b>needn't have</b> = it was not necessary. Never <i>should have went</i>, never <i>didn't should have</i>.",
  "elenco": {
    "mia": {
      "nome": "Mia",
      "voz": "en-US-AvaNeural",
      "cor": "#86c9f0"
    },
    "leo": {
      "nome": "Leo",
      "voz": "en-AU-WilliamMultilingualNeural",
      "cor": "#f0b866"
    }
  },
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo talk about a bad night. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/04b2bae356cc/i-shouldnt-have/img/live-telefone.webp",
      "leg": "A phone on a bedside table at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you look tired. Did you stay up again?"
        },
        {
          "quem": "leo",
          "t": "Yes. I bought a gadget online at two in the morning. I shouldn't have done that."
        },
        {
          "quem": "mia",
          "t": "Why not? What was it?"
        },
        {
          "quem": "leo",
          "t": "A box of ten phone cases. I needn't have bought ten. One was enough."
        },
        {
          "quem": "mia",
          "t": "You could have asked me first. I have three spare cases."
        },
        {
          "quem": "leo",
          "t": "I know. I should have called you. Instead I looked at my phone until four."
        },
        {
          "quem": "mia",
          "t": "Then you should have turned it off. You could have read a book."
        },
        {
          "quem": "leo",
          "t": "True. And I shouldn't have drunk that coffee after dinner."
        },
        {
          "quem": "mia",
          "t": "Tonight, no coffee and no shopping. Deal?"
        },
        {
          "quem": "leo",
          "t": "Deal."
        }
      ],
      "perguntas": [
        {
          "q": "What shouldn't Leo have done at two in the morning?",
          "op": [
            "Bought a gadget online",
            "Called Mia",
            "Read a book"
          ],
          "a": 0,
          "por": "I bought a gadget online at two in the morning. I shouldn't have done that."
        },
        {
          "q": "What could Leo have done before buying?",
          "op": [
            "Asked Mia first",
            "Bought ten more",
            "Turned on the TV"
          ],
          "a": 0,
          "por": "You could have asked me first."
        },
        {
          "q": "What should Leo have done instead of looking at his phone?",
          "op": [
            "Turned it off",
            "Called the shop",
            "Had more coffee"
          ],
          "a": 0,
          "por": "Then you should have turned it off."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about small mistakes. Hear it, then say it.",
      "frases": [
        {
          "t": "I shouldn't have stayed up so late.",
          "img": "https://wolf-labs.pages.dev/p/04b2bae356cc/i-shouldnt-have/img/live-quarto.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You should have called me earlier.",
          "img": "https://wolf-labs.pages.dev/p/04b2bae356cc/i-shouldnt-have/img/live-telefone.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We could have left this old thing in the shop.",
          "img": "https://wolf-labs.pages.dev/p/04b2bae356cc/i-shouldnt-have/img/live-galho.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "should have, could have, needn't have. Four quick ones.",
      "regra": "<b>should have</b> + past participle · <b>shouldn't have</b> · <b>could have</b> · <b>needn't have</b> · never <i>should have went</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We needn't have bought so many snacks.",
          "aceita": [],
          "d": "Hint: <b>needn't have</b> + past participle = it was not necessary."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I should have went to bed earlier.",
          "r": "I should have gone to bed earlier.",
          "aceita": [],
          "d": "Hint: after <b>should have</b>, use the past participle: <i>gone</i>, not <i>went</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "You didn't should have told her.",
          "r": "You shouldn't have told her.",
          "aceita": [
            "You should not have told her."
          ],
          "d": "Hint: the negative is <b>shouldn't have</b>, never <i>didn't should have</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "You could asked me first.",
          "r": "You could have asked me first.",
          "aceita": [],
          "d": "Hint: <b>could have</b> + past participle: you need <i>have</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/04b2bae356cc/i-shouldnt-have/img/live-loja.webp",
      "leg": "A little shop full of old things",
      "pede": "Look at the picture: a little shop full of old things. Write 2 or 3 sentences about a small mistake in your week. Use <b>should have</b>, <b>shouldn't have</b>, <b>could have</b> or <b>needn't have</b>.",
      "ph": "I should have … I shouldn't have …",
      "ex": "I shouldn't have bought another jacket. I should have saved the money. I needn't have gone out in the rain."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is something you should have done yesterday?",
          "ph": "I should have …",
          "ex": "I should have called my aunt yesterday."
        },
        {
          "q": "What could you have done differently last week?",
          "ph": "I could have …",
          "ex": "I could have saved more money last week."
        }
      ]
    }
  }
};
