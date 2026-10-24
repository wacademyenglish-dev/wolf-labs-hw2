/* THIS TIME NEXT YEAR · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: future continuous (will be + -ing). B1: nenhum português. Só live-* escuras (live-janela, clara, fica de fora). */
window.HW2 = {
  "id": "this-time-next-year",
  "titulo": "This Time Next Year",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ed2f6b2a0f48/this-time-next-year/img/live-capa.webp",
  "alvo": "future continuous: will be + -ing for something in progress at a moment in the future · won't be + -ing · Will you be using ...? (the polite question) · state verbs (know, have, be) stay simple · age with BE; never will working, will be work, in this time next year",
  "abrir": "What will you be doing this time next year?",
  "fecho": "<b>will be + -ing</b> = in progress at a future moment: <i>This time next year, I'll be living in Spain.</i> <b>Won't be + -ing</b>: <i>I won't be driving.</i> Polite question: <i>Will you be using the room?</i> State verbs stay simple: <i>I'll know</i>, not <i>I'll be knowing</i>. Never <i>in this time next year</i>.",
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
      "sub": "Mia and Leo talk about next year. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/ed2f6b2a0f48/this-time-next-year/img/live-cidade.webp",
      "leg": "A road leading to a neon city",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, what will you be doing this time next year?"
        },
        {
          "quem": "mia",
          "t": "Good question. I hope I'll be working in a new office. I'll be living in a bigger city."
        },
        {
          "quem": "leo",
          "t": "Nice. Will you be using your old laptop?"
        },
        {
          "quem": "mia",
          "t": "No, I won't. I'll be using a new one. And what about you?"
        },
        {
          "quem": "leo",
          "t": "At eight o'clock next Monday morning, I'll be sitting on a train. I won't be driving anymore."
        },
        {
          "quem": "mia",
          "t": "So you won't be sitting in traffic. That's lucky!"
        },
        {
          "quem": "leo",
          "t": "Right. I'll be reading a book instead. Will you be having lunch with me on Friday?"
        },
        {
          "quem": "mia",
          "t": "Yes, I will. I'll be waiting for you at noon."
        },
        {
          "quem": "leo",
          "t": "Great. In ten years, I'll be forty. Imagine that."
        },
        {
          "quem": "mia",
          "t": "And we'll still be talking about next year."
        }
      ],
      "perguntas": [
        {
          "q": "What will Mia be doing this time next year?",
          "op": [
            "Working in a new office",
            "Using her old laptop",
            "Sitting on a train"
          ],
          "a": 0,
          "por": "I hope I'll be working in a new office."
        },
        {
          "q": "What will Leo be doing next Monday at eight?",
          "op": [
            "Sitting on a train",
            "Driving to work",
            "Having lunch"
          ],
          "a": 0,
          "por": "At eight o'clock next Monday morning, I'll be sitting on a train."
        },
        {
          "q": "What will Mia be doing on Friday at noon?",
          "op": [
            "Waiting for Leo",
            "Working late",
            "Reading a book"
          ],
          "a": 0,
          "por": "I'll be waiting for you at noon."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the future. Hear it, then say it.",
      "frases": [
        {
          "t": "This time next year, I'll be living in a new city.",
          "img": "https://wolf-labs.pages.dev/p/ed2f6b2a0f48/this-time-next-year/img/live-cidade.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "At nine tomorrow, she'll be sitting in a meeting.",
          "img": "https://wolf-labs.pages.dev/p/ed2f6b2a0f48/this-time-next-year/img/live-sala.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Next summer, we'll be travelling around the world.",
          "img": "https://wolf-labs.pages.dev/p/ed2f6b2a0f48/this-time-next-year/img/live-orbita.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "will be + -ing. Four quick ones.",
      "regra": "<b>will be</b> + -ing · <b>won't be</b> + -ing · <b>this time next year</b> · state verbs stay simple (<b>know</b>).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "At nine tomorrow I will be driving to work.",
          "aceita": [],
          "d": "Hint: <b>will be</b> + a verb with -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I will working at nine tomorrow.",
          "r": "I will be working at nine tomorrow.",
          "aceita": [
            "I'll be working at nine tomorrow."
          ],
          "d": "Hint: <b>will be</b> + -ing. It needs BE."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "In this time next year, I'll be living here.",
          "r": "This time next year, I'll be living here.",
          "aceita": [
            "This time next year I will be living here."
          ],
          "d": "Hint: the phrase is <b>this time next year</b>, with no IN."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I will be knowing the answer tomorrow.",
          "r": "I will know the answer tomorrow.",
          "aceita": [
            "I'll know the answer tomorrow."
          ],
          "d": "Hint: <b>know</b> is a state verb. It does not take -ing."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/ed2f6b2a0f48/this-time-next-year/img/live-orbita.webp",
      "leg": "A small planet far away in the dark",
      "pede": "Look at the picture: a small planet far away in the dark. Write 2 or 3 sentences about your life this time next year. Use <b>will be + -ing</b> or <b>won't be + -ing</b>.",
      "ph": "This time next year, I'll be …",
      "ex": "This time next year, I'll be living in a new flat. I'll be working in the city. I won't be taking the bus anymore."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What will you be doing this time tomorrow?",
          "ph": "This time tomorrow, I'll be …",
          "ex": "This time tomorrow, I'll be eating lunch with my family."
        },
        {
          "q": "Where do you think you'll be living in five years? What will you be doing there?",
          "ph": "In five years, I'll be …",
          "ex": "In five years, I'll be living near the sea, and I'll be working from home."
        }
      ]
    }
  }
};
