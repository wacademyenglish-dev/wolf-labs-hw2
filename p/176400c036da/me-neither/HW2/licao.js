/* ME NEITHER · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: agreeing. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "me-neither",
  "titulo": "Me Neither",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/176400c036da/me-neither/img/live-cozinha.webp",
  "alvo": "agreeing: a yes echoes with too / So do I / Me too; a no echoes with either / Neither do I / Me neither; the little verb comes from the first sentence (so am I, neither can I, so did I); disagreeing short: I do / I don't; never I don't ... too, never Me too for a no",
  "abrir": "Your friend says: I love pizza. Do you agree?",
  "fecho": "A yes: <b>too</b> · <b>So do I</b> · <b>Me too</b>. A no: <b>either</b> · <b>Neither do I</b> · <b>Me neither</b>. The little verb comes from the first sentence: <i>I can't swim. Neither can I.</i>",
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
  "rate": "-14%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo look at a flat. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/176400c036da/me-neither/img/live-flat1.webp",
      "leg": "A door with warm light",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "I love the kitchen in this flat."
        },
        {
          "quem": "leo",
          "t": "So do I. And I like the big window."
        },
        {
          "quem": "mia",
          "t": "Me too. But I don't like the stairs."
        },
        {
          "quem": "leo",
          "t": "Neither do I. I can't carry boxes up there."
        },
        {
          "quem": "mia",
          "t": "I can't either. Do you have a car?"
        },
        {
          "quem": "leo",
          "t": "No, I don't. Do you?"
        },
        {
          "quem": "mia",
          "t": "I do. I have a small car."
        },
        {
          "quem": "leo",
          "t": "Good. I'm not ready to decide."
        },
        {
          "quem": "mia",
          "t": "Me neither. Let's come back tomorrow."
        }
      ],
      "perguntas": [
        {
          "q": "What do they both like?",
          "op": [
            "The kitchen",
            "The stairs",
            "The street"
          ],
          "a": 0,
          "por": "I love the kitchen. So do I."
        },
        {
          "q": "Who has a car?",
          "op": [
            "Mia",
            "Leo",
            "Both of them"
          ],
          "a": 0,
          "por": "No, I don't. Do you? I do. I have a small car."
        },
        {
          "q": "Why do they come back tomorrow?",
          "op": [
            "They are not ready to decide",
            "The flat is closed",
            "It is raining"
          ],
          "a": 0,
          "por": "I'm not ready to decide. Me neither."
        }
      ]
    },
    "out": {
      "sub": "Three short talks. Hear it, then say it.",
      "frases": [
        {
          "t": "I love the big window. So do I.",
          "img": "https://wolf-labs.pages.dev/p/176400c036da/me-neither/img/live-flat2.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I don't like the stairs. Neither do I.",
          "img": "https://wolf-labs.pages.dev/p/176400c036da/me-neither/img/live-flat1.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I can't decide. Me neither.",
          "img": "https://wolf-labs.pages.dev/p/176400c036da/me-neither/img/live-cozinha.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Too, either, so or neither? Four quick ones.",
      "regra": "A yes: <b>So do I</b> · <b>Me too</b>. A no: <b>Neither do I</b> · <b>Me neither</b> · <b>either</b> · never <b>I don't ... too</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I don't have a car either.",
          "aceita": [],
          "d": "Dica: frase com NÃO termina com <b>either</b>, nunca 'too'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: a no needs neither.",
          "mostra": "I don't like noise. Me too.",
          "r": "I don't like noise. Me neither.",
          "aceita": [
            "I don't like noise. Neither do I."
          ],
          "d": "Dica: ela disse NÃO, então o eco é <b>Me neither</b> ou <b>Neither do I</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: a yes needs so.",
          "mostra": "I'm tired. Neither am I.",
          "r": "I'm tired. So am I.",
          "aceita": [],
          "d": "Dica: ela disse SIM e usou <b>am</b>: <b>so am I</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: use her little verb.",
          "mostra": "I can't swim. Neither do I.",
          "r": "I can't swim. Neither can I.",
          "aceita": [],
          "d": "Dica: ela usou <b>can't</b>: <b>neither can I</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/176400c036da/me-neither/img/live-flat2.webp",
      "leg": "A bright empty room at night",
      "pede": "Look at the picture: an empty room. Write a short talk with a friend, 2 or 3 lines. Your friend says something, you agree with <b>So do I</b> or <b>Neither do I</b>.",
      "ph": "I love … So do I.",
      "ex": "I love pizza. So do I. I don't like the cold. Neither do I."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Your friend says: I don't like waking up early. You agree. What do you say?",
          "ph": "Neither …",
          "ex": "Neither do I. I hate it."
        },
        {
          "q": "Your friend says: I love pizza. You love it too. What do you say?",
          "ph": "So …",
          "ex": "So do I. I love it with cheese."
        }
      ]
    }
  }
};
