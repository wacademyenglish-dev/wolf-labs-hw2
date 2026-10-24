/* A GADGET THAT TALKS BACK · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: ordem dos adjetivos e that / which. B1: nenhum português. */
window.HW2 = {
  "id": "a-gadget-that-talks-back",
  "titulo": "A Gadget That Talks Back",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/14df4b920fa5/a-gadget-that-talks-back/img/live-parley.webp",
  "alvo": "describing products: adjective order before the noun (opinion, size, shape, colour, material); that = which one, no commas, no extra pronoun (the mug that I bought); which = extra information between commas, never that",
  "abrir": "What is the last gadget you bought? Why did you choose it?",
  "fecho": "Adjectives go before the noun in this order: <b>opinion · size · shape · colour · material</b>: <i>a lovely small round grey ceramic mug</i>. <b>That</b> tells us which one, with no commas and no extra pronoun: <i>the mug that I bought</i>. <b>, which …,</b> adds extra information between commas: <i>Kiln, which costs fifty dollars, is great.</i>",
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
      "sub": "Mia and Leo at a booth in a tech fair. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/14df4b920fa5/a-gadget-that-talks-back/img/live-balcao.webp",
      "leg": "A small speaker and a thin lamp",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, Marisol from the big stores is at our booth in five minutes. Describe the Parley for me."
        },
        {
          "quem": "leo",
          "t": "It is a small round white speaker that answers your questions."
        },
        {
          "quem": "mia",
          "t": "Small, round, white. Good order. And the Emberly?"
        },
        {
          "quem": "leo",
          "t": "Emberly, which costs eighty-nine dollars, is a thin wooden lamp that wakes you with light."
        },
        {
          "quem": "mia",
          "t": "Why do you use which with commas?"
        },
        {
          "quem": "leo",
          "t": "The commas show extra information. The price is extra. That tells us which one, without commas."
        },
        {
          "quem": "mia",
          "t": "Like the mug that never breaks?"
        },
        {
          "quem": "leo",
          "t": "Careful. Don't promise that. Say the mug that keeps coffee hot for six hours."
        },
        {
          "quem": "mia",
          "t": "Better. That is a real test result."
        },
        {
          "quem": "leo",
          "t": "And start with an opinion: a lovely small grey ceramic mug."
        },
        {
          "quem": "mia",
          "t": "Opinion, size, colour, material. I've got it."
        }
      ],
      "perguntas": [
        {
          "q": "How does Leo describe the Parley?",
          "op": [
            "A small round white speaker",
            "A white small round speaker",
            "A round white small speaker"
          ],
          "a": 0,
          "por": "It is a small round white speaker that answers your questions."
        },
        {
          "q": "Why are there commas around which costs eighty-nine dollars?",
          "op": [
            "The price is extra information",
            "It tells us which lamp",
            "It is a question"
          ],
          "a": 0,
          "por": "The commas show extra information."
        },
        {
          "q": "What should Leo say about the mug?",
          "op": [
            "It keeps coffee hot for six hours",
            "It never breaks",
            "It is the cheapest in the world"
          ],
          "a": 0,
          "por": "Say the mug that keeps coffee hot for six hours."
        }
      ]
    },
    "out": {
      "sub": "Three lines for a buyer. Hear it, then say it.",
      "frases": [
        {
          "t": "It is a small round white speaker that answers your questions.",
          "img": "https://wolf-labs.pages.dev/p/14df4b920fa5/a-gadget-that-talks-back/img/live-parley.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Emberly, which costs eighty-nine dollars, is a thin wooden lamp.",
          "img": "https://wolf-labs.pages.dev/p/14df4b920fa5/a-gadget-that-talks-back/img/live-balcao.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "This is the mug that keeps coffee hot for six hours.",
          "img": "https://wolf-labs.pages.dev/p/14df4b920fa5/a-gadget-that-talks-back/img/live-pedestais.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Order, that, which. Four quick ones.",
      "regra": "<b>opinion · size · shape · colour · material</b> + noun · <b>that</b> = which one, no commas · <b>, which …,</b> = extra information.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It is a lovely small grey ceramic mug.",
          "aceita": [],
          "d": "Hint: opinion, size, colour, material, then the noun."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "It is a round small white speaker.",
          "r": "It is a small round white speaker.",
          "aceita": [],
          "d": "Hint: size comes before shape: <b>small round</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "The mug that I bought it is very good.",
          "r": "The mug that I bought is very good.",
          "aceita": [
            "The mug I bought is very good."
          ],
          "d": "Hint: <b>that</b> already stands for the mug. Do not add <i>it</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Kiln, that costs fifty dollars, is great.",
          "r": "Kiln, which costs fifty dollars, is great.",
          "aceita": [],
          "d": "Hint: extra information between commas needs <b>which</b>, never <i>that</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/14df4b920fa5/a-gadget-that-talks-back/img/live-balcao.webp",
      "leg": "A speaker and a lamp on a blue table",
      "pede": "Look at the picture: a small speaker and a thin lamp. Describe a gadget you own in one sentence with two or three adjectives. Then add a sentence with <b>that</b> or <b>which</b>.",
      "ph": "I have a … It is the … that …",
      "ex": "I have a big old brown leather bag. It is the bag that my father gave me."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Describe your favourite bag, shirt or phone.",
          "ph": "My … is a … ",
          "ex": "My bag is a big black leather bag."
        },
        {
          "q": "What thing do you use every day? Say what it does.",
          "ph": "It is the … that …",
          "ex": "It is the phone that I use for work."
        }
      ]
    }
  }
};
