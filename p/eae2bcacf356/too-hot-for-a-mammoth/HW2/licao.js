/* TOO HOT FOR A MAMMOTH · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: too + adjective. Falas originais, sem cena do filme. */
window.HW2 = {
  "id": "too-hot-for-a-mammoth",
  "titulo": "Too Hot for a Mammoth",
  "nivel": "A1",
  "minutos": 10,
  "alvo": "too + adjective: too hot, too big, too tired; too ... to + verb: too hot to touch; very (a lot) x too (a problem); It's hot / I'm cold, never I have cold",
  "abrir": "Is it hot or cold where you are now?",
  "fecho": "<b>too</b> + adjective = more than you want: <i>too hot</i>. <b>too … to</b> + verb: <i>too hot to touch</i>. Weather and feelings take be: <b>It's</b> hot. <b>I'm</b> cold, never <i>I have cold</i>.",
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
      "sub": "Mia and Leo look at a world of lava. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/eae2bcacf356/too-hot-for-a-mammoth/img/live-lava.webp",
      "leg": "A river of lava in a cave",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at the picture. It's a world of lava. Is it hot or cold?"
        },
        {
          "quem": "mia",
          "t": "It's very hot! The lava is too hot to touch."
        },
        {
          "quem": "leo",
          "t": "Can the big mammoth swim in it?"
        },
        {
          "quem": "mia",
          "t": "No! It's too hot to swim. He wants a lake of ice."
        },
        {
          "quem": "leo",
          "t": "And the little sloth? Can he help?"
        },
        {
          "quem": "mia",
          "t": "He is too small to help, and he is too tired to walk."
        },
        {
          "quem": "leo",
          "t": "What about the squirrel? He has an acorn."
        },
        {
          "quem": "mia",
          "t": "Yes, and he is hungry. But the acorn is too hot to eat!"
        },
        {
          "quem": "leo",
          "t": "Poor squirrel. I am hot too. Let's go to the ice."
        }
      ],
      "perguntas": [
        {
          "q": "What is too hot to touch?",
          "op": [
            "The lava",
            "The ice",
            "The lake"
          ],
          "a": 0,
          "por": "The lava is too hot to touch."
        },
        {
          "q": "Why can't the mammoth swim in the lava?",
          "op": [
            "It is too hot",
            "He is too small",
            "He is cold"
          ],
          "a": 0,
          "por": "It's too hot to swim. He wants a lake of ice."
        },
        {
          "q": "Why can't the squirrel eat the acorn?",
          "op": [
            "It is too hot to eat",
            "It is too big",
            "He is not hungry"
          ],
          "a": 0,
          "por": "The acorn is too hot to eat."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the lesson. Hear it, then say it.",
      "frases": [
        {
          "t": "The lava is too hot to touch.",
          "img": "https://wolf-labs.pages.dev/p/eae2bcacf356/too-hot-for-a-mammoth/img/live-lava.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I am too tired to walk.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It is too hot to sleep.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Too hot, too big, too tired. Four quick ones.",
      "regra": "<b>too</b> + adjective (no <i>much</i>) · <b>too … to</b> + verb · <b>It's</b> hot, <b>I'm</b> cold (never <i>I have cold</i>).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The lava is too hot to touch.",
          "aceita": [],
          "d": "Dica: <b>too</b> vem antes do adjetivo e depois vem <b>to</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I have cold today.",
          "r": "I am cold today.",
          "aceita": [
            "I'm cold today."
          ],
          "d": "Dica: em inglês você <b>é</b> frio: <b>I am cold</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "Manny is too much big.",
          "r": "Manny is too big.",
          "aceita": [],
          "d": "Dica: <b>too</b> + adjetivo, sem <b>much</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Is too hot to walk today.",
          "r": "It's too hot to walk today.",
          "aceita": [
            "It is too hot to walk today."
          ],
          "d": "Dica: o clima começa com <b>it</b>: <b>It's</b> hot."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/eae2bcacf356/too-hot-for-a-mammoth/img/live-lava.webp",
      "leg": "A world of lava",
      "pede": "Look at the picture: a world of lava. Write 2 or 3 sentences about a place that is too hot or too cold for you. Use <b>too hot</b> and <b>too … to</b>.",
      "ph": "My … is too hot. It is too hot to …",
      "ex": "My kitchen is too hot in summer. It is too hot to cook. I am too tired to wash the dishes."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is too hot or too cold for you to eat or drink?",
          "ph": "… is too hot for me.",
          "ex": "Soup is too hot for me right now."
        },
        {
          "q": "When are you too tired to do things?",
          "ph": "I am too tired to …",
          "ex": "After work, I am too tired to cook."
        }
      ]
    }
  }
};
