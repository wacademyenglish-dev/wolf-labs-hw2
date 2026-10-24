/* EITHER ONE WORKS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: both / either / neither. B1: nenhum português. Só imagens live-* (escuras). */
window.HW2 = {
  "id": "either-one-works",
  "titulo": "Either One Works",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/45ead3c35ec4/either-one-works/img/live-capa.webp",
  "alvo": "both (the two, yes) · either (one or the other, I don't mind) · neither (not the one, not the other) · both ... and / either ... or / neither ... nor · both / either / neither of them · only one negation; never the both, I don't like neither, neither ... or",
  "abrir": "Think of a choice where both options are good. How do you decide?",
  "fecho": "<b>Both</b> = the two, yes: <i>Both keys open the door.</i> <b>Either</b> = one or the other, I don't mind: <i>Either one works.</i> <b>Neither</b> = not the one, not the other: <i>Neither of them is heavy.</i> <b>Both … and</b>, <b>either … or</b>, <b>neither … nor</b>. One negation only: never <i>I don't like neither</i>.",
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
      "sub": "Mia has two job offers. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/45ead3c35ec4/either-one-works/img/live-janela.webp",
      "leg": "A window over the city at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you have two offers, Denver and Portland. Which one are you taking?"
        },
        {
          "quem": "mia",
          "t": "I can't decide. Both cities are beautiful, and both flats are close to a park."
        },
        {
          "quem": "leo",
          "t": "What about the salary?"
        },
        {
          "quem": "mia",
          "t": "Either one works. Both offers pay the same. And neither of them asks me to work on weekends."
        },
        {
          "quem": "leo",
          "t": "Then it's easy. Is there any difference?"
        },
        {
          "quem": "mia",
          "t": "Only one: my dog. Neither of the landlords allows pets, and I have Biscuit."
        },
        {
          "quem": "leo",
          "t": "Both landlords said no?"
        },
        {
          "quem": "mia",
          "t": "Both said no yesterday. Today the Portland owner called. He said either a cat or a small dog is fine."
        },
        {
          "quem": "leo",
          "t": "So you can take Portland. Do you want to flip a coin?"
        },
        {
          "quem": "mia",
          "t": "No need. Either way, I win."
        }
      ],
      "perguntas": [
        {
          "q": "What is the same about the two offers?",
          "op": [
            "Both offers pay the same",
            "Neither pays well",
            "Both are far away"
          ],
          "a": 0,
          "por": "Both offers pay the same."
        },
        {
          "q": "What does neither of the landlords allow at first?",
          "op": [
            "Pets",
            "Visitors",
            "Cars"
          ],
          "a": 0,
          "por": "Neither of the landlords allows pets."
        },
        {
          "q": "Why does Mia choose Portland?",
          "op": [
            "The owner said a small dog is fine",
            "Portland pays more",
            "Denver is too far"
          ],
          "a": 0,
          "por": "The Portland owner called. He said either a cat or a small dog is fine."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about two things. Hear it, then say it.",
      "frases": [
        {
          "t": "Both keys open the front door.",
          "img": "https://wolf-labs.pages.dev/p/45ead3c35ec4/either-one-works/img/live-chaves.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Neither of the boxes is heavy.",
          "img": "https://wolf-labs.pages.dev/p/45ead3c35ec4/either-one-works/img/live-caixas.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We can take either road to the city.",
          "img": "https://wolf-labs.pages.dev/p/45ead3c35ec4/either-one-works/img/live-estrada.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "both, either, neither. Four quick ones.",
      "regra": "<b>both</b> = the two · <b>either</b> = one, I don't mind · <b>neither</b> = none of the two · <b>neither … nor</b> · one negation only.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Neither of the flats allows dogs.",
          "aceita": [],
          "d": "Hint: <b>neither of</b> + the flats + a verb with -s. One negation only."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I don't like neither of the flats.",
          "r": "I like neither of the flats.",
          "aceita": [
            "I don't like either of the flats.",
            "I don't like either flat.",
            "I like neither flat."
          ],
          "d": "Hint: one negation only: <b>I like neither</b> or <b>I don't like either</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Neither the bus or the train is fast.",
          "r": "Neither the bus nor the train is fast.",
          "aceita": [],
          "d": "Hint: <b>neither … nor</b>, <b>either … or</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I like the both flats.",
          "r": "I like both flats.",
          "aceita": [
            "I like both of the flats.",
            "I like both the flats."
          ],
          "d": "Hint: <b>both</b> comes first. Never <i>the both</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/45ead3c35ec4/either-one-works/img/live-moeda.webp",
      "leg": "A phone on a dark table",
      "pede": "Look at the picture: a phone on a dark table. Write 2 or 3 sentences comparing two choices (two phones, two jobs, two cities). Use <b>both</b>, <b>either</b> or <b>neither</b>.",
      "ph": "Both … Neither of them …",
      "ex": "I have two phones. Both are old, but either one works. Neither of them has a good camera."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of two places you like. What is the same about both?",
          "ph": "Both … Neither of them …",
          "ex": "Both beaches are quiet. Neither of them is far from my house."
        },
        {
          "q": "Is there a choice in your life where either one works?",
          "ph": "Either … works …",
          "ex": "For lunch, either rice or pasta works for me."
        }
      ]
    }
  }
};
