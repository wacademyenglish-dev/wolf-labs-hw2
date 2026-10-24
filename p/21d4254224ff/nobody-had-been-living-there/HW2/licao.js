/* NOBODY HAD BEEN LIVING THERE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past perfect continuous x past perfect. B2: no Portuguese. Mild mystery, no death. Only live-* images. */
window.HW2 = {
  "id": "nobody-had-been-living-there",
  "titulo": "Nobody Had Been Living There",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/21d4254224ff/nobody-had-been-living-there/img/live-capa.webp",
  "alvo": "past perfect continuous: had been + -ing for what was going on up to a moment in the past (with for / since / how long); past perfect simple (had + participle) for finished things, counted things and states (had known, never had been knowing); never was ... since, since two hours",
  "abrir": "Is there a house near you where nobody lives?",
  "fecho": "<b>Had been + -ing</b> = what was going on up to a moment in the past: <i>She had been living there for nine years.</i> <b>Had + participle</b> = finished or counted: <i>She had written three letters.</i> A state stays simple: <i>had known</i>, never <i>had been knowing</i>. <b>For</b> + length, <b>since</b> + starting point.",
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
      "sub": "Mia and Leo in a small-town archive. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/21d4254224ff/nobody-had-been-living-there/img/live-arquivo.webp",
      "leg": "An old archive at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, look at this clipping from 1998. The police opened the door of the Crow Hill house."
        },
        {
          "quem": "leo",
          "t": "The empty house? Everybody said nobody had lived there for years."
        },
        {
          "quem": "mia",
          "t": "That's the legend. But the kitchen was warm. Someone had been cooking."
        },
        {
          "quem": "leo",
          "t": "Who?"
        },
        {
          "quem": "mia",
          "t": "Rosa Lane, the youngest daughter. She had been living there in secret for nine years."
        },
        {
          "quem": "leo",
          "t": "Nine years! What had she been doing all that time?"
        },
        {
          "quem": "mia",
          "t": "Looking after the house. She had been watering the roses every evening, and she had planted over forty."
        },
        {
          "quem": "leo",
          "t": "Forty roses. Had she been working alone?"
        },
        {
          "quem": "mia",
          "t": "Yes. She had been repairing the roof, too, and she had painted every room."
        },
        {
          "quem": "leo",
          "t": "So the legend was wrong."
        },
        {
          "quem": "mia",
          "t": "The town had been telling the story for years, and nobody had checked."
        }
      ],
      "perguntas": [
        {
          "q": "What did the police notice in the kitchen?",
          "op": [
            "Someone had been cooking",
            "The house had been empty",
            "The roses had died"
          ],
          "a": 0,
          "por": "But the kitchen was warm. Someone had been cooking."
        },
        {
          "q": "How long had Rosa been living in the house?",
          "op": [
            "For nine years",
            "Since last week",
            "For two months"
          ],
          "a": 0,
          "por": "She had been living there in secret for nine years."
        },
        {
          "q": "What had Rosa been doing every evening?",
          "op": [
            "Watering the roses",
            "Painting the rooms",
            "Telling the story"
          ],
          "a": 0,
          "por": "She had been watering the roses every evening."
        }
      ]
    },
    "out": {
      "sub": "Three lines from the archive. Hear it, then say it.",
      "frases": [
        {
          "t": "The town had been telling the story for years.",
          "img": "https://wolf-labs.pages.dev/p/21d4254224ff/nobody-had-been-living-there/img/live-cidade.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She had been living in the house for nine years.",
          "img": "https://wolf-labs.pages.dev/p/21d4254224ff/nobody-had-been-living-there/img/live-casa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She had been watering the roses every evening.",
          "img": "https://wolf-labs.pages.dev/p/21d4254224ff/nobody-had-been-living-there/img/live-casa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Had been + -ing, or had + participle? Four quick ones.",
      "regra": "<b>had been + -ing</b> = going on up to then · <b>had + participle</b> = finished, counted, a state · <b>for</b> + length · <b>since</b> + starting point.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She had been living there for nine years.",
          "aceita": [],
          "d": "Hint: <b>had been</b> + verb-ing, then <b>for</b> + length of time."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She had been knowing the house for years.",
          "r": "She had known the house for years.",
          "aceita": [],
          "d": "Hint: <b>know</b> is a state, so it stays simple: <b>had known</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "She had been writing three letters.",
          "r": "She had written three letters.",
          "aceita": [],
          "d": "Hint: a number means it is counted and finished: <b>had written</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "They had been waiting since two hours.",
          "r": "They had been waiting for two hours.",
          "aceita": [],
          "d": "Hint: two hours is a length of time, so <b>for</b>. <i>Since</i> needs a starting point."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/21d4254224ff/nobody-had-been-living-there/img/live-casa.webp",
      "leg": "A house in the fog, one window lit",
      "pede": "Look at the picture: a house in the fog with one lit window. Write 2 or 3 sentences about who had been living there and what they had been doing. Use <b>had been + -ing</b> with <b>for</b> or <b>since</b>.",
      "ph": "Someone had been living there …",
      "ex": "Someone had been living there for years. A woman had been watering the roses every evening. Nobody in town had noticed."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What had you been doing before this lesson started?",
          "ph": "I had been …",
          "ex": "I had been working all afternoon, and I was tired."
        },
        {
          "q": "How long had you been living in your last home before you moved?",
          "ph": "I had been living there for …",
          "ex": "I had been living there for six years."
        }
      ]
    }
  }
};
