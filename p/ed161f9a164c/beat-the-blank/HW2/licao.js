/* BEAT THE BLANK · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: contornar a palavra que falta (a kind of, the thing you use for -ing, when, like...but) + that/who/whose/when. B1: nenhum português. */
window.HW2 = {
  "id": "beat-the-blank",
  "titulo": "Beat the Blank",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ed161f9a164c/beat-the-blank/img/live-mesa.webp",
  "alvo": "going around a word you can't find: It's a kind of ..., It's the thing you use for ...-ing, It's when you ..., It's like ..., but ...; relative words that / who / where / whose / when in the middle",
  "abrir": "Think of a word you forgot in English last week. What did you say instead?",
  "fecho": "When the word doesn't come, don't stop: go around it. <b>It's a kind of …</b> · <b>It's the thing you use for …-ing</b> · <b>It's when you …</b> · <b>It's like …, but …</b> A joint in the middle: <b>that · who · where · whose · when</b>.",
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
      "sub": "Mia and Leo unpack a new kitchen. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/ed161f9a164c/beat-the-blank/img/live-mesa.webp",
      "leg": "The table, ready to unpack",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, pass me the, uh, you know when you need to turn cheese into tiny pieces? That thing."
        },
        {
          "quem": "mia",
          "t": "The grater! It's on the table, next to the cord."
        },
        {
          "quem": "leo",
          "t": "Thanks. And what's the word for the thing you use for holding a hot pan? It's like a glove, but it's thicker."
        },
        {
          "quem": "mia",
          "t": "An oven mitt. We don't have one, so use the towel."
        },
        {
          "quem": "leo",
          "t": "I also need the small black thing, the one that's a kind of tool for opening cans."
        },
        {
          "quem": "mia",
          "t": "A can opener. Honestly, Leo, you can always go around the word, and it still works."
        },
        {
          "quem": "leo",
          "t": "True. Last week I forgot the word for a plumber. I said, it's a person whose job is to fix pipes."
        },
        {
          "quem": "mia",
          "t": "And the shop owner understood?"
        },
        {
          "quem": "leo",
          "t": "Right away. He even laughed and told me the word."
        },
        {
          "quem": "mia",
          "t": "See? Never stop talking. Say, well, it's like this, but that, and keep going."
        },
        {
          "quem": "leo",
          "t": "Deal. Now, where's the thing you use for cleaning the floor? It's like a brush, but it has a long handle."
        }
      ],
      "perguntas": [
        {
          "q": "What is Leo describing first?",
          "op": [
            "A grater",
            "A knife",
            "A bowl"
          ],
          "a": 0,
          "por": "You know when you need to turn cheese into tiny pieces? That thing."
        },
        {
          "q": "How does Leo describe the oven mitt?",
          "op": [
            "Like a glove, but thicker",
            "Like a hat, but hot",
            "Like a towel, but wet"
          ],
          "a": 0,
          "por": "It's like a glove, but it's thicker."
        },
        {
          "q": "What does Mia say about forgetting a word?",
          "op": [
            "You can go around it and it still works",
            "You must stop and look it up",
            "You should ask somebody else to talk"
          ],
          "a": 0,
          "por": "You can always go around the word, and it still works."
        }
      ]
    },
    "out": {
      "sub": "Three detours. Hear it, then say it.",
      "frases": [
        {
          "t": "It's the thing you use for grating cheese.",
          "img": "https://wolf-labs.pages.dev/p/ed161f9a164c/beat-the-blank/img/live-mesa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It's a person whose job is to fix pipes.",
          "img": "https://wolf-labs.pages.dev/p/ed161f9a164c/beat-the-blank/img/live-cinto.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It's when you want to say something and the word doesn't come.",
          "img": "https://wolf-labs.pages.dev/p/ed161f9a164c/beat-the-blank/img/live-porta.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Four detours. Four quick ones.",
      "regra": "<b>It's like …, but …</b> · <b>the thing you use for …-ing</b> · <b>a person whose …</b> · <b>It's when …</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It's like a spoon, but it has holes in it.",
          "aceita": [],
          "d": "Hint: <b>It's like …, but …</b> compares two things and says the difference."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It's the thing you use for to cut wire.",
          "r": "It's the thing you use for cutting wire.",
          "aceita": [
            "It is the thing you use for cutting wire.",
            "It's the thing you use for cutting wires.",
            "It is the thing you use for cutting wires."
          ],
          "d": "Hint: after <b>for</b>, use the <b>-ing</b> form: <b>cutting</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It's a person who job is to fix pipes.",
          "r": "It's a person whose job is to fix pipes.",
          "aceita": [
            "It is a person whose job is to fix pipes."
          ],
          "d": "Hint: for <i>his / her job</i>, use <b>whose</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It's the day where you don't have to work.",
          "r": "It's the day when you don't have to work.",
          "aceita": [
            "It is the day when you don't have to work.",
            "It's a day when you don't have to work.",
            "It's the day you don't have to work.",
            "It is the day you don't have to work."
          ],
          "d": "Hint: a moment or a day: <b>when</b>, not <i>where</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/ed161f9a164c/beat-the-blank/img/live-cinto.webp",
      "leg": "A roll of tools on an old table",
      "pede": "Look at the picture: some tools in a leather roll. Pick one and describe it to a friend who doesn't know the word. Don't say its name. Use <b>It's the thing you use for …-ing</b>, <b>It's like …, but …</b> or <b>It's a kind of …</b>",
      "ph": "It's the thing you use for …",
      "ex": "It's the thing you use for cutting wire. It's like scissors, but stronger. It's a kind of tool that electricians carry."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Pick something in your kitchen. Describe it without saying its name.",
          "ph": "It's the thing you use for …",
          "ex": "It's the thing you use for squeezing lemons. It's like a small bowl, but it has a pointed middle."
        },
        {
          "q": "What is a feeling you know well but can't name? Start with It's when …",
          "ph": "It's when you …",
          "ex": "It's when you walk into a room and forget why you came."
        }
      ]
    }
  }
};
