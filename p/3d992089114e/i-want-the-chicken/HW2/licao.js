/* I WANT THE CHICKEN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: polite requests: I'd like, Could I have, Can you bring. A1: dicas em português só nas notas (d). conta clara ficou de fora. */
window.HW2 = {
  "id": "i-want-the-chicken",
  "titulo": "I Want the Chicken",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/3d992089114e/i-want-the-chicken/img/live-frango.webp",
  "alvo": "polite requests: I'd like ...; Could I have ...?; Can you bring ...?; please; I want is correct but sounds rude; no to or have after the helper",
  "abrir": "What do you order in a restaurant? Say it politely.",
  "fecho": "<b>I want the chicken</b> is correct but rude. Softer: <b>I'd like the chicken, please.</b> <b>Could I have</b> the menu? <b>Can you bring</b> some water? After <i>could I</i> and <i>can you</i>, the plain verb: never <i>to</i>.",
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
      "sub": "Mia orders dinner and Leo is the waiter. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/3d992089114e/i-want-the-chicken/img/live-mesa.webp",
      "leg": "A table for two",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Good evening. Are you ready to order?"
        },
        {
          "quem": "mia",
          "t": "Yes. I'd like the chicken, please."
        },
        {
          "quem": "leo",
          "t": "Of course. And to drink?"
        },
        {
          "quem": "mia",
          "t": "Could I have a glass of water, please?"
        },
        {
          "quem": "leo",
          "t": "Sure. Anything else?"
        },
        {
          "quem": "mia",
          "t": "Yes. Can you bring some bread, please?"
        },
        {
          "quem": "leo",
          "t": "Of course. And for your friend?"
        },
        {
          "quem": "mia",
          "t": "He'll have the fish. He'd like a small salad too."
        },
        {
          "quem": "leo",
          "t": "One chicken, one fish and one salad. Thank you."
        },
        {
          "quem": "mia",
          "t": "Thank you very much."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia order?",
          "op": [
            "The chicken",
            "The fish",
            "The soup"
          ],
          "a": 0,
          "por": "Yes. I'd like the chicken, please."
        },
        {
          "q": "What does she ask for to drink?",
          "op": [
            "A glass of water",
            "A cup of tea",
            "Some juice"
          ],
          "a": 0,
          "por": "Could I have a glass of water, please?"
        },
        {
          "q": "What does she ask the waiter to bring?",
          "op": [
            "Some bread",
            "Some salad",
            "The menu"
          ],
          "a": 0,
          "por": "Can you bring some bread, please?"
        }
      ]
    },
    "out": {
      "sub": "Three polite requests. Hear it, then say it.",
      "frases": [
        {
          "t": "I'd like the chicken, please.",
          "img": "https://wolf-labs.pages.dev/p/3d992089114e/i-want-the-chicken/img/live-frango.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Could I have a glass of water, please?",
          "img": "https://wolf-labs.pages.dev/p/3d992089114e/i-want-the-chicken/img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Can you bring some bread, please?",
          "img": "https://wolf-labs.pages.dev/p/3d992089114e/i-want-the-chicken/img/live-mesa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Make it polite. Four quick ones.",
      "regra": "<b>I'd like ...</b> · <b>Could I have ...?</b> · <b>Can you bring ...?</b> · <b>please</b> · the plain verb, no <b>to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Could I have the menu, please?",
          "aceita": [],
          "d": "Dica: <b>Could I have</b> + a coisa + <b>please</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make it polite.",
          "mostra": "I want the chicken.",
          "r": "I'd like the chicken, please.",
          "aceita": [
            "I would like the chicken, please.",
            "I'll have the chicken, please.",
            "Could I have the chicken, please?"
          ],
          "d": "Dica: 'I want' é correto, mas soa duro. Use <b>I'd like</b> e <b>please</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Can you to bring some water?",
          "r": "Can you bring some water?",
          "aceita": [
            "Can you bring some water, please?",
            "Can you bring me some water?"
          ],
          "d": "Dica: depois de <b>can you</b>, o verbo fica limpo: sem <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'd like have a coffee, please.",
          "r": "I'd like a coffee, please.",
          "aceita": [
            "I would like a coffee, please."
          ],
          "d": "Dica: depois de <b>I'd like</b> vem a coisa (<i>a coffee</i>), sem <i>have</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/3d992089114e/i-want-the-chicken/img/live-mesa.webp",
      "leg": "A table for two with a candle",
      "pede": "Look at the picture: a restaurant table. Write 2 or 3 polite sentences to order food or drink. Use <b>I'd like</b>, <b>Could I have</b> or <b>Can you bring</b>.",
      "ph": "I'd like … Could I have … ?",
      "ex": "I'd like the soup, please. Could I have a glass of water? Can you bring some bread, please?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you order in a restaurant? Say it politely.",
          "ph": "I'd like … , please.",
          "ex": "I'd like the chicken and a salad, please."
        },
        {
          "q": "Ask a friend to help you. Use Can you ... ?",
          "ph": "Can you … ?",
          "ex": "Can you open the window, please?"
        }
      ]
    }
  }
};
