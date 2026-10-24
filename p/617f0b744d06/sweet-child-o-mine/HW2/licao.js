/* SWEET CHILD O’ MINE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: sense verbs + adjective / like / as if, remind of. Linha de música: NENHUM verso aqui; o listening é diálogo original, cena neutra. B2: nenhum português. Só imagens live-* escuras (lum < 50); sem cenas de perda (regra 9). */
window.HW2 = {
  "id": "sweet-child-o-mine",
  "titulo": "Sweet Child O’ Mine",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/617f0b744d06/sweet-child-o-mine/img/live-lavanda.webp",
  "alvo": "sense verbs: look / sound / smell / taste / feel + adjective (never an adverb: tastes good, not tastes well); + like + noun (smells like lavender); + as if + sentence; remind + person + of (never remember me of)",
  "abrir": "What smell reminds you of a holiday?",
  "fecho": "Sense verbs take an adjective: <b>tastes good</b>, <b>feels soft</b> (never <i>tastes well</i>). With a noun, add <b>like</b>: <i>smells like lavender</i>. With a full sentence, <b>as if</b>: <i>it feels as if it were new</i>. A memory: <b>remind</b> + person + <b>of</b>: <i>it reminds me of the beach</i> (never <i>remembers me</i>).",
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
      "sub": "Mia is back from a trip to the coast with presents for Leo. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/617f0b744d06/sweet-child-o-mine/img/live-lavanda.webp",
      "leg": "Lavender from a farm near the beach",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, welcome back! You look relaxed. How was the coast?"
        },
        {
          "quem": "mia",
          "t": "Lovely. I brought you some things from the little market there. Smell this."
        },
        {
          "quem": "leo",
          "t": "Mmm, it smells like lavender. Oh, it is lavender!"
        },
        {
          "quem": "mia",
          "t": "It's from a farm near the beach. And taste these coffee beans. They roast them there."
        },
        {
          "quem": "leo",
          "t": "They taste a bit sweet, like chocolate."
        },
        {
          "quem": "mia",
          "t": "And this scarf. Feel it."
        },
        {
          "quem": "leo",
          "t": "It feels so soft, as if it were made of clouds."
        },
        {
          "quem": "mia",
          "t": "The woman at the market knitted it herself. Now listen to this shell."
        },
        {
          "quem": "leo",
          "t": "It sounds like the sea. It reminds me of my summer holidays as a kid."
        },
        {
          "quem": "mia",
          "t": "That's why I bought it. It looks as if it came from a postcard."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo say about the coffee beans?",
          "op": [
            "They taste sweet, like chocolate",
            "They smell like lavender",
            "They taste bitter"
          ],
          "a": 0,
          "por": "They taste a bit sweet, like chocolate."
        },
        {
          "q": "How does the scarf feel?",
          "op": [
            "Soft, as if it were made of clouds",
            "Rough and heavy",
            "Cold and wet"
          ],
          "a": 0,
          "por": "It feels so soft, as if it were made of clouds."
        },
        {
          "q": "What does the shell remind Leo of?",
          "op": [
            "His summer holidays as a kid",
            "His first job",
            "A trip to the mountains"
          ],
          "a": 0,
          "por": "It reminds me of my summer holidays as a kid."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about presents from the coast. Hear it, then say it.",
      "frases": [
        {
          "t": "This lavender smells like a summer afternoon.",
          "img": "https://wolf-labs.pages.dev/p/617f0b744d06/sweet-child-o-mine/img/live-lavanda.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The coffee tastes a little sweet, like chocolate.",
          "img": "https://wolf-labs.pages.dev/p/617f0b744d06/sweet-child-o-mine/img/live-cafe.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "This shell reminds me of the beach where I learned to swim.",
          "img": "https://wolf-labs.pages.dev/p/617f0b744d06/sweet-child-o-mine/img/live-concha.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Looks, smells, feels. Four quick ones.",
      "regra": "sense verb + <b>adjective</b> · + <b>like</b> + noun · + <b>as if</b> + sentence · <b>remind</b> + person + <b>of</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "This shell reminds me of my first holiday.",
          "aceita": [],
          "d": "Hint: <b>remind</b> + person + <b>of</b> + the memory."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "This cake tastes very well.",
          "r": "This cake tastes very good.",
          "aceita": [
            "This cake tastes really good."
          ],
          "d": "Hint: sense verbs take an adjective: <b>good</b>, not <i>well</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "This soap smells lavender.",
          "r": "This soap smells like lavender.",
          "aceita": [],
          "d": "Hint: before a noun, add <b>like</b>: <i>smells like lavender</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "This song remembers me of summer.",
          "r": "This song reminds me of summer.",
          "aceita": [],
          "d": "Hint: something <b>reminds</b> you of a memory. You <i>remember</i> it yourself."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/617f0b744d06/sweet-child-o-mine/img/live-cachecol.webp",
      "leg": "A soft scarf on a wooden table",
      "pede": "Look at the picture: a soft scarf on a wooden table. Describe one object you love. How does it look, feel or smell? What does it remind you of? Use <b>looks / feels / smells</b> + adjective, <b>like</b> + noun or <b>reminds me of</b>.",
      "ph": "My … feels … It smells like … It reminds me of …",
      "ex": "My old jacket feels soft and warm, like a blanket. It smells like the wood of my wardrobe. It reminds me of my first trip abroad."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Which smell or sound makes you feel at home? What does it remind you of?",
          "ph": "… smells like … It reminds me of …",
          "ex": "Fresh bread smells like Sunday morning to me. It reminds me of breakfast with my family."
        },
        {
          "q": "Describe your favourite place to relax. How does it look and sound?",
          "ph": "It looks … It sounds like …",
          "ex": "My balcony looks small, but it feels calm. In the evening it sounds like a quiet village."
        }
      ]
    }
  }
};
