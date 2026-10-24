/* EIGHT-ISH · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: about / around / -ish / more or less. B1: nenhum português. Só live-capa (escura). */
window.HW2 = {
  "id": "eight-ish",
  "titulo": "Eight-ish",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/75ac0f2305c5/eight-ish/img/live-capa.jpg",
  "alvo": "approximate numbers and times: about / around + number, number + -ish, more or less at the end; never more or less of, never around of, never she has thirty years",
  "abrir": "What time do you usually have dinner, more or less?",
  "fecho": "When you aren't sure: <b>about</b> or <b>around</b> + number (<i>about twenty minutes</i>), number + <b>-ish</b> (<i>eight-ish</i>), <b>more or less</b> at the end. Never <i>more or less of</i>, never <i>around of</i>. An age uses be: <i>She is about thirty.</i>",
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
      "sub": "Mia and Leo plan a dinner party. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/75ac0f2305c5/eight-ish/img/live-capa.jpg",
      "leg": "A red sofa, an accordion and a stack of records",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, what time is dinner on Saturday?"
        },
        {
          "quem": "mia",
          "t": "Eight-ish. Maybe a little later."
        },
        {
          "quem": "leo",
          "t": "How long does it take to get to your place?"
        },
        {
          "quem": "mia",
          "t": "About twenty minutes by bus, more or less."
        },
        {
          "quem": "leo",
          "t": "And how many people are coming?"
        },
        {
          "quem": "mia",
          "t": "Around ten, I think. Some friends said maybe."
        },
        {
          "quem": "leo",
          "t": "Ten-ish? Then how much food do we need?"
        },
        {
          "quem": "mia",
          "t": "A big pizza costs around thirty reais, and we need about four."
        },
        {
          "quem": "leo",
          "t": "So that's about a hundred and twenty reais, more or less."
        },
        {
          "quem": "mia",
          "t": "Right. We'll split it."
        },
        {
          "quem": "leo",
          "t": "Deal. Come early, six-ish, and help me cook."
        }
      ],
      "perguntas": [
        {
          "q": "What time is dinner?",
          "op": [
            "Eight-ish",
            "Exactly at six",
            "Around noon"
          ],
          "a": 0,
          "por": "Eight-ish. Maybe a little later."
        },
        {
          "q": "How long does the trip take?",
          "op": [
            "About twenty minutes",
            "About two hours",
            "Exactly one hour"
          ],
          "a": 0,
          "por": "About twenty minutes by bus, more or less."
        },
        {
          "q": "How much will the pizzas cost?",
          "op": [
            "Around one hundred and twenty reais",
            "Around thirty reais",
            "Around twelve reais"
          ],
          "a": 0,
          "por": "That's about a hundred and twenty reais, more or less."
        }
      ]
    },
    "out": {
      "sub": "Three sentences when you aren't sure. Hear it, then say it.",
      "frases": [
        {
          "t": "Let's meet at seven-ish.",
          "img": "https://wolf-labs.pages.dev/p/75ac0f2305c5/eight-ish/img/live-capa.jpg",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It takes about twenty minutes, more or less.",
          "img": "https://wolf-labs.pages.dev/p/75ac0f2305c5/eight-ish/img/live-capa.jpg",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She is around thirty years old.",
          "img": "https://wolf-labs.pages.dev/p/75ac0f2305c5/eight-ish/img/live-capa.jpg",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "about, around, -ish, more or less. Four quick ones.",
      "regra": "<b>about / around</b> + number · number + <b>-ish</b> · <b>more or less</b> at the end · no <i>of</i> · age: <b>is</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It takes about twenty minutes by bus.",
          "aceita": [],
          "d": "Hint: <b>about</b> + number, with no <i>of</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It takes more or less of twenty minutes.",
          "r": "It takes about twenty minutes.",
          "aceita": [
            "It takes more or less twenty minutes.",
            "It takes twenty minutes, more or less."
          ],
          "d": "Hint: no <i>of</i>. Say <b>about twenty minutes</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Let's meet in the eight-ish.",
          "r": "Let's meet at eight-ish.",
          "aceita": [],
          "d": "Hint: a time takes <b>at</b>: <b>at eight-ish</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "She has around thirty years.",
          "r": "She is around thirty years old.",
          "aceita": [
            "She is about thirty years old.",
            "She is around thirty.",
            "She is about thirty."
          ],
          "d": "Hint: an age uses <b>is</b>, not <i>has</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/75ac0f2305c5/eight-ish/img/live-capa.jpg",
      "leg": "A red sofa, an accordion and a stack of records",
      "pede": "Look at the picture: a red sofa, an accordion and a stack of old records. Write 2 or 3 sentences about your week with numbers that are not exact. Use <b>about</b>, <b>around</b>, <b>-ish</b> or <b>more or less</b>.",
      "ph": "I wake up at about … I work around … hours a day …",
      "ex": "I wake up at about seven. I work around eight hours a day, more or less. I go to bed at eleven-ish."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What time do you wake up and go to bed, more or less?",
          "ph": "I wake up at … -ish …",
          "ex": "I wake up at seven-ish and I go to bed around eleven."
        },
        {
          "q": "How long does it take to get from your home to your work or school?",
          "ph": "It takes about …",
          "ex": "It takes about forty minutes by bus, more or less."
        }
      ]
    }
  }
};
