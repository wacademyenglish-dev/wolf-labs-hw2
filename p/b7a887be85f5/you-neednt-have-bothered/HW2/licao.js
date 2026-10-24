/* YOU NEEDN'T HAVE BOTHERED · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: needn't have + particípio x didn't need to x could have + particípio. C1: nenhum português. Só imagens live-* escuras. */
window.HW2 = {
  "id": "you-neednt-have-bothered",
  "titulo": "You Needn't Have Bothered",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b7a887be85f5/you-neednt-have-bothered/img/live-capa.webp",
  "alvo": "needn't have + past participle (you did it, for nothing) versus didn't need to + plain verb (it wasn't necessary, and usually you didn't do it) versus could have + past participle (the chance that passed)",
  "abrir": "What did you prepare too much for, and not need in the end?",
  "fecho": "<b>Needn't have + past participle</b> = you did it, and it wasn't necessary: <i>We needn't have brought the soup.</i> <b>Didn't need to + verb</b> = it wasn't necessary, and usually you didn't do it: <i>We didn't need to buy snacks.</i> <b>Could have + past participle</b> = the chance that passed: <i>We could have bought chains.</i>",
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
  "rate": "-6%",
  "rodadas": {
    "listen": {
      "sub": "Mia tells Leo about a mountain cabin weekend. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/b7a887be85f5/you-neednt-have-bothered/img/live-portamalas.webp",
      "leg": "A car packed to the roof",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, how was the cabin? You packed a lot, didn't you?"
        },
        {
          "quem": "mia",
          "t": "We packed the car to the roof, and we needn't have. We took twelve cans of soup."
        },
        {
          "quem": "leo",
          "t": "Twelve? Why?"
        },
        {
          "quem": "mia",
          "t": "We needn't have brought them. The owner had left a full pantry. We found out when we arrived."
        },
        {
          "quem": "leo",
          "t": "And snacks for the drive?"
        },
        {
          "quem": "mia",
          "t": "We didn't need to buy any. The road was short, so we didn't."
        },
        {
          "quem": "leo",
          "t": "Did you remember the snow chains?"
        },
        {
          "quem": "mia",
          "t": "No. We could have bought them in town, but we forgot."
        },
        {
          "quem": "leo",
          "t": "So how did you get up the hill?"
        },
        {
          "quem": "mia",
          "t": "Very slowly. We could have been stuck all night."
        },
        {
          "quem": "leo",
          "t": "Next time, pack less and think about the important things."
        },
        {
          "quem": "mia",
          "t": "I know. We needn't have worried about food. We should have worried about the chains."
        }
      ],
      "perguntas": [
        {
          "q": "Why needn't they have brought the soup?",
          "op": [
            "The cabin already had a full pantry",
            "They don't like soup",
            "The cans were too heavy"
          ],
          "a": 0,
          "por": "We needn't have brought them. The owner had left a full pantry."
        },
        {
          "q": "What happened with the snacks for the drive?",
          "op": [
            "They didn't need to buy any, so they didn't",
            "They bought too many",
            "They forgot them at home"
          ],
          "a": 0,
          "por": "We didn't need to buy any. The road was short, so we didn't."
        },
        {
          "q": "Which chance did they miss?",
          "op": [
            "They could have bought snow chains in town",
            "They could have stayed in town",
            "They could have borrowed a car"
          ],
          "a": 0,
          "por": "We could have bought them in town, but we forgot."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the trip. Hear it, then say it.",
      "frases": [
        {
          "t": "We needn't have brought twelve cans of soup.",
          "img": "https://wolf-labs.pages.dev/p/b7a887be85f5/you-neednt-have-bothered/img/live-portamalas.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We didn't need to buy snacks, so we didn't.",
          "img": "https://wolf-labs.pages.dev/p/b7a887be85f5/you-neednt-have-bothered/img/live-estrada.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We could have bought snow chains in town.",
          "img": "https://wolf-labs.pages.dev/p/b7a887be85f5/you-neednt-have-bothered/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Did you do it? Four quick ones.",
      "regra": "<b>needn't have</b> + past participle = you did it, for nothing · <b>didn't need to</b> + plain verb = not necessary, not done · <b>could have</b> + past participle = the chance that passed.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She could have bought the chains in town.",
          "aceita": [],
          "d": "Hint: <b>could have</b> + past participle (<i>bought</i>)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: they brought it, for nothing.",
          "mostra": "We needn't have bring the soup.",
          "r": "We needn't have brought the soup.",
          "aceita": [],
          "d": "Hint: after <b>needn't have</b>, the past participle: <i>brought</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: nobody bought it.",
          "mostra": "We needn't have bought snacks, so we didn't.",
          "r": "We didn't need to buy snacks, so we didn't.",
          "aceita": [
            "We did not need to buy snacks, so we did not."
          ],
          "d": "Hint: <b>needn't have</b> says you DID it. If you didn't, use <b>didn't need to</b> + plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: a chance that passed.",
          "mostra": "We could buy chains, but we forgot.",
          "r": "We could have bought chains, but we forgot.",
          "aceita": [],
          "d": "Hint: for a chance in the past that you did not take, use <b>could have</b> + past participle."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b7a887be85f5/you-neednt-have-bothered/img/live-lareira.webp",
      "leg": "A cabin room with a fire",
      "pede": "Look at the picture: a warm cabin room. Think of a trip, a party or a move you prepared a lot for. Write 2 or 3 sentences: something you did for nothing (<b>needn't have</b>), something you <b>didn't need to</b> do, and a chance you missed (<b>could have</b>).",
      "ph": "I needn't have …",
      "ex": "I needn't have bought so much food for the party; half of it was left. I didn't need to book a taxi, so I walked. I could have invited my cousin, but I forgot."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you do recently that turned out to be unnecessary?",
          "ph": "I needn't have …",
          "ex": "I needn't have printed the ticket, because the gate scanned my phone."
        },
        {
          "q": "Think of a chance you missed. What could you have done?",
          "ph": "I could have …",
          "ex": "I could have called my friend yesterday, but I was too tired."
        }
      ]
    }
  }
};
