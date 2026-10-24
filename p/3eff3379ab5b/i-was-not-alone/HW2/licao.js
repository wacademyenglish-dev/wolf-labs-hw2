/* I WAS NOT ALONE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: was / were, there was / there were, wasn't / weren't. A1: dicas em português só nas notas (d). Só imagens live-* escuras. */
window.HW2 = {
  "id": "i-was-not-alone",
  "titulo": "I Was Not Alone",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/3eff3379ab5b/i-was-not-alone/img/live-hall-noite.webp",
  "alvo": "was / were: I, he, she, it, one thing = was; you, we, they, more than one = were; there was (one) / there were (more); wasn't / weren't; Was it ...? Were you ...?",
  "abrir": "Where were you at nine o'clock last night?",
  "fecho": "<b>was</b>: I, he, she, it, one thing. <b>were</b>: you, we, they, more than one. <i>There was a cup. There were two cups.</i> No: <b>wasn't</b> / <b>weren't</b> (<i>I wasn't alone.</i>). The question: <i>Were you alone? Was it quiet?</i>",
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
  "rate": "-16%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo talk about a night in a house. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/3eff3379ab5b/i-was-not-alone/img/live-cozinha-noite.webp",
      "leg": "A kitchen at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, where were you last night?"
        },
        {
          "quem": "leo",
          "t": "I was at my aunt's house. I was alone with her dog."
        },
        {
          "quem": "mia",
          "t": "Were you scared?"
        },
        {
          "quem": "leo",
          "t": "A little. There was a noise in the kitchen at midnight."
        },
        {
          "quem": "mia",
          "t": "What was it?"
        },
        {
          "quem": "leo",
          "t": "Two cups were on the floor. And the window was open."
        },
        {
          "quem": "mia",
          "t": "Was the dog quiet?"
        },
        {
          "quem": "leo",
          "t": "Yes, he was. He wasn't scared. He was asleep."
        },
        {
          "quem": "mia",
          "t": "So who was in the kitchen?"
        },
        {
          "quem": "leo",
          "t": "It was the cat! She wasn't asleep. She was hungry."
        }
      ],
      "perguntas": [
        {
          "q": "Where was Leo last night?",
          "op": [
            "At his aunt's house",
            "At work",
            "At the cinema"
          ],
          "a": 0,
          "por": "I was at my aunt's house."
        },
        {
          "q": "What was on the floor?",
          "op": [
            "Two cups",
            "Two plates",
            "Two phones"
          ],
          "a": 0,
          "por": "Two cups were on the floor."
        },
        {
          "q": "Who was in the kitchen?",
          "op": [
            "The cat",
            "The dog",
            "Leo's aunt"
          ],
          "a": 0,
          "por": "It was the cat!"
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a night at home. Hear it, then say it.",
      "frases": [
        {
          "t": "The windows were closed all night.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/3eff3379ab5b/i-was-not-alone/img/live-janelas.webp"
        },
        {
          "t": "There were cups on the shelf in the kitchen.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/3eff3379ab5b/i-was-not-alone/img/live-cozinha-noite.webp"
        },
        {
          "t": "Rex was on his bed. He wasn't loud.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/3eff3379ab5b/i-was-not-alone/img/live-rex.webp"
        }
      ]
    },
    "focus": {
      "sub": "was, were, wasn't, weren't. Four quick ones.",
      "regra": "<b>was</b>: I, he, she, it, one thing · <b>were</b>: you, we, they, more than one · <b>There was</b> + one · <b>There were</b> + more · <b>wasn't</b> / <b>weren't</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The cups were on the table.",
          "aceita": [],
          "d": "Dica: <b>cups</b> são vários, então <b>were</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There was two cups on the table.",
          "r": "There were two cups on the table.",
          "aceita": [],
          "d": "Dica: duas xícaras, mais de uma coisa: <b>There were</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Was you alone last night?",
          "r": "Were you alone last night?",
          "aceita": [],
          "d": "Dica: com <b>you</b> usamos <b>were</b>, e ele vai na frente na pergunta."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The door weren't open.",
          "r": "The door wasn't open.",
          "aceita": [
            "The door was not open."
          ],
          "d": "Dica: uma porta é uma coisa só: <b>wasn't</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/3eff3379ab5b/i-was-not-alone/img/live-hall-noite.webp",
      "leg": "A dark hall with a coat stand",
      "pede": "Look at the picture: a dark hall at night. Write 2 or 3 sentences about it. Use <b>was</b>, <b>were</b>, <b>wasn't</b> or <b>weren't</b>.",
      "ph": "The door was … There were …",
      "ex": "The door was closed. There was a coat stand near the stairs. The stairs weren't bright."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where were you at nine o'clock last night?",
          "ph": "I was at / in …",
          "ex": "I was at home. I was in the kitchen."
        },
        {
          "q": "Were you alone? Was it quiet?",
          "ph": "Yes, I was. / No, I wasn't. …",
          "ex": "No, I wasn't alone. My cat was with me. It was quiet."
        }
      ]
    }
  }
};
