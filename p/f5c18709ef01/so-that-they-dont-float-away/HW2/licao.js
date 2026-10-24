/* SO THAT THEY DON'T FLOAT AWAY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: propósito: to / so that / so as not to. B1: nenhum português. Só imagens live-* (escuras). */
window.HW2 = {
  "id": "so-that-they-dont-float-away",
  "titulo": "So That They Don't Float Away",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f5c18709ef01/so-that-they-dont-float-away/img/live-capa.webp",
  "alvo": "purpose: to / in order to (same person) · so that + subject + can / will / won't (past: could / would / wouldn't) · negative: so as not to / in order not to · never for + verb (for keep), never to don't",
  "abrir": "Why do you do the little things you do every day? Give me a reason.",
  "fecho": "<b>To / in order to</b> + plain verb: <i>I use straps to keep things still.</i> <b>So that</b> + a new person: <i>so that they don't float away</i> (past: <i>so that it wouldn't float away</i>). Negative: <b>so as not to</b> / <b>in order not to</b>. Never <i>for keep</i>, never <i>to don't</i>.",
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
      "sub": "Leo asks Mia questions on a space station. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/f5c18709ef01/so-that-they-dont-float-away/img/live-cozinha.webp",
      "leg": "A dim galley with a cup and a round window",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the students want to know: why do you tie everything to the wall?"
        },
        {
          "quem": "mia",
          "t": "We tie things down so that they don't float away. Everything floats up here."
        },
        {
          "quem": "leo",
          "t": "And why do you sleep in a bag on the wall?"
        },
        {
          "quem": "mia",
          "t": "We sleep in a bag so that we don't float around the cabin and hit something."
        },
        {
          "quem": "leo",
          "t": "How do you drink?"
        },
        {
          "quem": "mia",
          "t": "I close the lid so that the drink won't float out. And I use a straw to take small sips."
        },
        {
          "quem": "leo",
          "t": "Do you exercise?"
        },
        {
          "quem": "mia",
          "t": "Two hours a day, in order to keep our bones strong. And we move slowly so as not to hit the walls."
        },
        {
          "quem": "leo",
          "t": "What about the tools?"
        },
        {
          "quem": "mia",
          "t": "Yesterday I held a tool tightly so that it wouldn't float away. It was close!"
        },
        {
          "quem": "leo",
          "t": "That's a great answer for the students. Thank you!"
        }
      ],
      "perguntas": [
        {
          "q": "Why does the crew tie things to the wall?",
          "op": [
            "So that they don't float away",
            "To save space",
            "To make the room bigger"
          ],
          "a": 0,
          "por": "We tie things down so that they don't float away."
        },
        {
          "q": "Why does Mia exercise two hours a day?",
          "op": [
            "To keep her bones strong",
            "To feel hungry",
            "To win a prize"
          ],
          "a": 0,
          "por": "Two hours a day, in order to keep our bones strong."
        },
        {
          "q": "Why did Mia hold the tool tightly yesterday?",
          "op": [
            "So that it wouldn't float away",
            "So that she could sleep",
            "To make a call"
          ],
          "a": 0,
          "por": "I held a tool tightly so that it wouldn't float away."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about reasons. Hear it, then say it.",
      "frases": [
        {
          "t": "We tie everything down so that nothing floats away.",
          "img": "https://wolf-labs.pages.dev/p/f5c18709ef01/so-that-they-dont-float-away/img/live-cozinha.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She exercises two hours a day in order to stay strong.",
          "img": "https://wolf-labs.pages.dev/p/f5c18709ef01/so-that-they-dont-float-away/img/live-treino.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "He moves slowly so as not to hit the wall.",
          "img": "https://wolf-labs.pages.dev/p/f5c18709ef01/so-that-they-dont-float-away/img/live-modulo.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "to, so that, so as not to. Four quick ones.",
      "regra": "<b>to / in order to</b> + plain verb · <b>so that</b> + subject + can / will / won't · <b>so as not to</b> · never <b>for</b> + verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We close the lid so that the drink won't float.",
          "aceita": [],
          "d": "Hint: <b>so that</b> + a new subject + <b>won't</b> + plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We use straps for keep things still.",
          "r": "We use straps to keep things still.",
          "aceita": [
            "We use straps in order to keep things still."
          ],
          "d": "Hint: purpose is <b>to</b> + plain verb. Never <i>for</i> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "He moved slowly to don't hit the wall.",
          "r": "He moved slowly so as not to hit the wall.",
          "aceita": [
            "He moved slowly in order not to hit the wall."
          ],
          "d": "Hint: the negative is <b>so as not to</b> or <b>in order not to</b>. Never <i>to don't</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Yesterday I held it so that it can't float away.",
          "r": "Yesterday I held it so that it wouldn't float away.",
          "aceita": [
            "Yesterday I held it so that it couldn't float away."
          ],
          "d": "Hint: in a story in the past, use <b>wouldn't</b> or <b>couldn't</b>, not <i>can't</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f5c18709ef01/so-that-they-dont-float-away/img/live-cupula.webp",
      "leg": "A round window with the Earth's edge",
      "pede": "Look at the picture: a round window in space, with the edge of the Earth. Write 2 or 3 sentences about things you do for a reason. Use <b>to</b>, <b>so that</b> or <b>so as not to</b>.",
      "ph": "I … so that …",
      "ex": "I set an alarm so that I don't miss the bus. I write a list to remember things. I close the door slowly so as not to wake my family."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Why do you set an alarm, or write a list? Give a reason.",
          "ph": "I … so that / to …",
          "ex": "I write a list so that I don't forget things."
        },
        {
          "q": "What do you do to stay healthy or focused?",
          "ph": "I … in order to …",
          "ex": "I walk every day in order to stay healthy."
        }
      ]
    }
  }
};
