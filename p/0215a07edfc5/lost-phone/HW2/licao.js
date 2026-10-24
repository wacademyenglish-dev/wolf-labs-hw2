/* THE LOST PHONE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: like / love / hate + -ing, it / them. A1: dicas em português só nas notas (d). Imagens live-* (claras, o motor escurece). */
window.HW2 = {
  "id": "lost-phone",
  "titulo": "The Lost Phone",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/0215a07edfc5/lost-phone/img/live-bandeja.webp",
  "alvo": "like / love / hate + verb-ing; short answers with it / them (Yes, I like it; Yes, I like them); doesn't like + verb-ing",
  "abrir": "What do you like doing on your phone?",
  "fecho": "<b>like, love, hate</b> + verb + <b>-ing</b>: <i>I like cooking. She loves dancing.</i> The short answer needs the end: <i>Yes, I like it. Yes, I like them.</i> No: <b>doesn't like</b> + -ing: <i>She doesn't like running.</i>",
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
      "sub": "Mia and Leo find a phone on the bus. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/0215a07edfc5/lost-phone/img/live-bandeja.webp",
      "leg": "A phone on a grey tray",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, look! There is a phone on the bus seat."
        },
        {
          "quem": "leo",
          "t": "Is there a name on it?"
        },
        {
          "quem": "mia",
          "t": "No. But there are many photos of dogs."
        },
        {
          "quem": "leo",
          "t": "So she likes dogs. Does she like cooking?"
        },
        {
          "quem": "mia",
          "t": "Yes, she loves cooking. There is a recipe app."
        },
        {
          "quem": "leo",
          "t": "Does she like running?"
        },
        {
          "quem": "mia",
          "t": "No, she doesn't like running. There is no sports app."
        },
        {
          "quem": "leo",
          "t": "And music? Does she like it?"
        },
        {
          "quem": "mia",
          "t": "Yes, she likes it. She has a lot of songs."
        },
        {
          "quem": "leo",
          "t": "Do you like her phone games?"
        },
        {
          "quem": "mia",
          "t": "No, I don't like them. I hate playing games on a phone."
        }
      ],
      "perguntas": [
        {
          "q": "What are the photos of?",
          "op": [
            "Dogs",
            "Cats",
            "Food"
          ],
          "a": 0,
          "por": "There are many photos of dogs."
        },
        {
          "q": "What does the owner love?",
          "op": [
            "Cooking",
            "Running",
            "Swimming"
          ],
          "a": 0,
          "por": "Yes, she loves cooking."
        },
        {
          "q": "Does Mia like the phone games?",
          "op": [
            "No, she doesn't like them",
            "Yes, she loves them",
            "Yes, she likes them"
          ],
          "a": 0,
          "por": "No, I don't like them. I hate playing games on a phone."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about likes. Hear it, then say it.",
      "frases": [
        {
          "t": "I like listening to music on the bus.",
          "img": "https://wolf-labs.pages.dev/p/0215a07edfc5/lost-phone/img/live-bandeja.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She loves walking with her dogs.",
          "img": "https://wolf-labs.pages.dev/p/0215a07edfc5/lost-phone/img/live-coleiras.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I don't like waiting for the bus.",
          "img": "https://wolf-labs.pages.dev/p/0215a07edfc5/lost-phone/img/live-balcao.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "like + -ing, it and them. Four quick ones.",
      "regra": "<b>like / love / hate</b> + verb<b>-ing</b> · <b>Yes, I like it / them</b> · <b>doesn't like</b> + -ing.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Do you like swimming in the sea?",
          "aceita": [],
          "d": "Dica: <b>like</b> + verbo com -ing (<i>swimming</i>)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I like watch videos.",
          "r": "I like watching videos.",
          "aceita": [],
          "d": "Dica: depois de <b>like</b>, o verbo leva -ing: <i>watching</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Do you like the photos? Yes, I like.",
          "r": "Do you like the photos? Yes, I like them.",
          "aceita": [],
          "d": "Dica: a resposta curta precisa do fim: <b>them</b> (fotos) ou <b>it</b> (uma coisa)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She doesn't likes cooking.",
          "r": "She doesn't like cooking.",
          "aceita": [],
          "d": "Dica: depois de <b>doesn't</b>, o verbo fica limpo: <i>like</i>, sem -s."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/0215a07edfc5/lost-phone/img/live-bandeja.webp",
      "leg": "A phone on a grey tray",
      "pede": "Look at the picture: a phone on a tray. Write 2 or 3 sentences about its owner. What does she like? What does she hate? Use <b>like / love / hate</b> + -ing.",
      "ph": "She likes … She loves …",
      "ex": "She likes cooking. She loves walking with her dogs. She doesn't like waiting for the bus."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you like doing on your phone?",
          "ph": "I like … on my phone.",
          "ex": "I like listening to music on my phone."
        },
        {
          "q": "What do you hate doing on Monday morning?",
          "ph": "I hate …",
          "ex": "I hate waking up early."
        }
      ]
    }
  }
};
