/* IN MY TIME · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: who / which / that / where / whose. Filme: falas originais, sem violência. B1: nenhum português. */
window.HW2 = {
  "id": "in-my-time",
  "titulo": "In My Time",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f7f8bdcabc5c/in-my-time/img/live-capa.webp",
  "alvo": "relative clauses with who (people), which / that (things), where (places) and whose (belonging): the guide who told me, the castle whose tower leans; no pronoun repeated (the castle which we visited it); where needs no extra in",
  "abrir": "Who is a person whose advice you trust?",
  "fecho": "<b>who</b> = a person · <b>which / that</b> = a thing · <b>where</b> = a place · <b>whose</b> = belonging: <i>a man whose dog can sing.</i> Do not repeat the object: <i>the castle that we visited</i>, not <i>that we visited it</i>.",
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
      "sub": "Mia and Leo walk through an old town at sunset. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/f7f8bdcabc5c/in-my-time/img/live-ceu.webp",
      "leg": "A town at sunset",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, look at that castle on the hill. It's the one which they show on every postcard."
        },
        {
          "quem": "leo",
          "t": "Is it the castle whose tower is leaning?"
        },
        {
          "quem": "mia",
          "t": "Yes! A guide who I met this morning told me the story."
        },
        {
          "quem": "leo",
          "t": "What did he say?"
        },
        {
          "quem": "mia",
          "t": "He said the family who built it moved to the coast, and the castle that stayed empty for fifty years is now a museum."
        },
        {
          "quem": "leo",
          "t": "So the town where we are staying is famous for it?"
        },
        {
          "quem": "mia",
          "t": "Yes. And the woman whose shop is across the street sells the best bread in town."
        },
        {
          "quem": "leo",
          "t": "The bread that smells like honey? I bought some. It's the best thing I've eaten this year."
        }
      ],
      "perguntas": [
        {
          "q": "Which castle are they talking about?",
          "op": [
            "The one whose tower is leaning",
            "The one that is on the coast",
            "The one where Mia works"
          ],
          "a": 0,
          "por": "Is it the castle whose tower is leaning? Yes!"
        },
        {
          "q": "Who told Mia the story?",
          "op": [
            "A guide she met this morning",
            "A woman who sells bread",
            "The family who built it"
          ],
          "a": 0,
          "por": "A guide who I met this morning told me the story."
        },
        {
          "q": "What is the castle now?",
          "op": [
            "A museum",
            "A hotel",
            "A bakery"
          ],
          "a": 0,
          "por": "The castle that stayed empty for fifty years is now a museum."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a town. Hear it, then say it.",
      "frases": [
        {
          "t": "A guide who I met this morning told me the story.",
          "img": "https://wolf-labs.pages.dev/p/f7f8bdcabc5c/in-my-time/img/live-latveria.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It's the castle whose tower is leaning.",
          "img": "https://wolf-labs.pages.dev/p/f7f8bdcabc5c/in-my-time/img/live-latveria.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The town where we are staying is famous for it.",
          "img": "https://wolf-labs.pages.dev/p/f7f8bdcabc5c/in-my-time/img/live-ceu.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "who, which, where, whose. Four quick ones.",
      "regra": "<b>who</b> = a person · <b>which / that</b> = a thing · <b>where</b> = a place · <b>whose</b> = belonging · no repeated pronoun.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "That is the woman whose house is on the hill.",
          "aceita": [],
          "d": "Hint: <b>whose</b> = her house."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I know a man who his dog can sing.",
          "r": "I know a man whose dog can sing.",
          "aceita": [],
          "d": "Hint: the dog belongs to the man, so <b>whose</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "This is the town where I was born in.",
          "r": "This is the town where I was born.",
          "aceita": [],
          "d": "Hint: <b>where</b> already means \"in which\"."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "The castle which we visited it was old.",
          "r": "The castle which we visited was old.",
          "aceita": [
            "The castle that we visited was old."
          ],
          "d": "Hint: <b>which</b> already replaces the castle. Do not say <b>it</b> again."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f7f8bdcabc5c/in-my-time/img/live-ceu.webp",
      "leg": "A town skyline at sunset",
      "pede": "Look at the picture: a town at sunset. Write 2 or 3 sentences about a place, a person or a thing you know. Use <b>who</b>, <b>which / that</b>, <b>where</b> or <b>whose</b>.",
      "ph": "It is a town where … I know a woman who …",
      "ex": "It is a town where everybody knows each other. I know a woman whose bakery opens at five. She makes bread that smells like honey."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who is a person whose advice you trust?",
          "ph": "I trust my … whose advice …",
          "ex": "I trust my aunt, whose advice has always helped me."
        },
        {
          "q": "What is a place where you can be yourself?",
          "ph": "It is a place where …",
          "ex": "It is my kitchen, where I can cook and sing as loud as I want."
        }
      ]
    }
  }
};
