/* THE OLDEST TOY IN THE BOX · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: superlativos (the oldest, the funniest, the most useful, the best/worst). A2: dicas em português só nas notas (d). Original, sem falas copiadas. HW2_ARTIGO_CONTA ligado: o 'the' faz parte do alvo. */
window.HW2_ARTIGO_CONTA = true;
window.HW2 = {
  "id": "the-oldest-toy",
  "titulo": "The Oldest Toy in the Box",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/a3feeace5463/the-oldest-toy/img/live-capa.webp",
  "alvo": "superlatives: the + -est (the oldest), y becomes -iest (the funniest), the most + long adjectives (the most useful), irregular the best / the worst; in the room, on the shelf",
  "abrir": "What is the oldest thing in your bedroom?",
  "fecho": "<b>The oldest</b>: short adjective, the + -est. <b>The funniest</b>: y becomes -iest. <b>The most useful</b>: long adjective, the most. Two special ones: <b>the best</b>, <b>the worst</b>. And the place: <b>in</b> the room, <b>on</b> the shelf.",
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
      "sub": "Mia and Leo write labels for a toy shelf. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/a3feeace5463/the-oldest-toy/img/live-brecho.webp",
      "leg": "The toy shelf",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, look at this shelf. We need a label for every toy."
        },
        {
          "quem": "leo",
          "t": "Easy. The wooden horse is the oldest toy here."
        },
        {
          "quem": "mia",
          "t": "Yes. And the robot is the funniest. Its arm makes a strange noise."
        },
        {
          "quem": "leo",
          "t": "What is the most useful thing on the shelf?"
        },
        {
          "quem": "mia",
          "t": "The little fork with the soft arms. It is the most useful toy in the room."
        },
        {
          "quem": "leo",
          "t": "Really? Why?"
        },
        {
          "quem": "mia",
          "t": "It is the only one that helps at lunch. And it is the best listener."
        },
        {
          "quem": "leo",
          "t": "The space helmet is the shiniest thing in the room."
        },
        {
          "quem": "mia",
          "t": "True. But the cart with the broken wheel is the worst problem on the shelf."
        },
        {
          "quem": "leo",
          "t": "So which one is the best toy in the world?"
        },
        {
          "quem": "mia",
          "t": "The one a child hugs at night. That is the best label of all."
        }
      ],
      "perguntas": [
        {
          "q": "Which toy is the oldest?",
          "op": [
            "The wooden horse",
            "The robot",
            "The helmet"
          ],
          "a": 0,
          "por": "The wooden horse is the oldest toy here."
        },
        {
          "q": "Why is the little fork the most useful toy?",
          "op": [
            "It helps at lunch",
            "It is very shiny",
            "It is very old"
          ],
          "a": 0,
          "por": "It is the only one that helps at lunch."
        },
        {
          "q": "What is the worst problem on the shelf?",
          "op": [
            "The cart with the broken wheel",
            "The noisy robot arm",
            "The old horse"
          ],
          "a": 0,
          "por": "The cart with the broken wheel is the worst problem on the shelf."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the toys. Hear it, then say it.",
      "frases": [
        {
          "t": "The wooden horse is the oldest toy on the shelf.",
          "img": "https://wolf-labs.pages.dev/p/a3feeace5463/the-oldest-toy/img/live-brecho.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The helmet is the shiniest thing in the room.",
          "img": "https://wolf-labs.pages.dev/p/a3feeace5463/the-oldest-toy/img/live-brinquedos.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The little fork is the most useful toy in the house.",
          "img": "https://wolf-labs.pages.dev/p/a3feeace5463/the-oldest-toy/img/live-garfo.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "The oldest, the funniest, the most useful, the best. Four quick ones.",
      "regra": "<b>the</b> + short + <b>-est</b> (the oldest) · y: <b>-iest</b> (the funniest) · <b>the most</b> + long (the most useful) · <b>the best</b> / <b>the worst</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The robot is the funniest toy on the shelf.",
          "aceita": [],
          "d": "Dica: y vira <b>-iest</b>: funny, <b>the funniest</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The horse is the most old toy on the shelf.",
          "r": "The horse is the oldest toy on the shelf.",
          "aceita": [],
          "d": "Dica: adjetivo curto: <b>the</b> + <b>-est</b>. Sem <i>most</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The tablet is the expensivest thing in the room.",
          "r": "The tablet is the most expensive thing in the room.",
          "aceita": [],
          "d": "Dica: adjetivo longo: <b>the most</b> + adjetivo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "This is the goodest toy in the world.",
          "r": "This is the best toy in the world.",
          "aceita": [],
          "d": "Dica: <b>good</b> é especial: <b>the best</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/a3feeace5463/the-oldest-toy/img/live-capa.webp",
      "leg": "A child's room in the evening",
      "pede": "Look at the picture: a toy box, a tablet and an old hat in a room. Write 2 or 3 sentences about the things in the picture. Use <b>the oldest, the newest, the most useful</b> or <b>the best</b>.",
      "ph": "The oldest thing in the picture is …",
      "ex": "The oldest thing in the picture is the hat. The tablet is the newest and the most modern. The toy box is the most useful thing in the room."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is the oldest thing in your house? Why do you keep it?",
          "ph": "The oldest thing in my house is …",
          "ex": "The oldest thing in my house is my grandmother's clock. I keep it because it was hers."
        },
        {
          "q": "What is the most useful thing you have? Why?",
          "ph": "The most useful thing I have is …",
          "ex": "The most useful thing I have is my phone. I use it for everything."
        }
      ]
    }
  }
};
