/* A SMALL BLACK COAT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: size + color + thing, I want a .... A1: dicas em português só nas notas (d). Imagens live-* sem gente. */
window.HW2 = {
  "id": "a-small-black-coat",
  "titulo": "A Small Black Coat",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/27e900a7a390/a-small-black-coat/img/live-vitrine.webp",
  "alvo": "size + color + thing in this order (a small black coat); I want a ...; adjectives never take -s (two black coats)",
  "abrir": "What do you wear when it is very cold?",
  "fecho": "<b>I want a</b> + <b>size</b> + <b>color</b> + <b>thing</b>: <i>I want a small black coat.</i> Never <i>a black small coat</i>. Adjectives never take <b>-s</b>: <i>two black coats</i>.",
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
      "sub": "Mia and Leo in a coat shop. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/27e900a7a390/a-small-black-coat/img/live-arara.webp",
      "leg": "Coats on a rack",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, it is very cold. I want a coat."
        },
        {
          "quem": "mia",
          "t": "OK. What size?"
        },
        {
          "quem": "leo",
          "t": "Small. I want a small black coat."
        },
        {
          "quem": "mia",
          "t": "Look. Here is a large black coat."
        },
        {
          "quem": "leo",
          "t": "No, I want a small coat. Small, not large."
        },
        {
          "quem": "mia",
          "t": "And this one? It is a small red coat."
        },
        {
          "quem": "leo",
          "t": "Red? No, thank you. I want a black one."
        },
        {
          "quem": "mia",
          "t": "Here! A small black coat. How much is it?"
        },
        {
          "quem": "leo",
          "t": "It is sixty pounds."
        },
        {
          "quem": "mia",
          "t": "That is cheap. Take it!"
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo want?",
          "op": [
            "A small black coat",
            "A large black coat",
            "A small red coat"
          ],
          "a": 0,
          "por": "Small. I want a small black coat."
        },
        {
          "q": "Why not the red coat?",
          "op": [
            "He wants a black one",
            "It is too expensive",
            "It is large"
          ],
          "a": 0,
          "por": "Red? No, thank you. I want a black one."
        },
        {
          "q": "How much is the coat?",
          "op": [
            "Sixty pounds",
            "Sixteen pounds",
            "Six pounds"
          ],
          "a": 0,
          "por": "It is sixty pounds."
        }
      ]
    },
    "out": {
      "sub": "Three things to wear. Hear it, then say it.",
      "frases": [
        {
          "t": "I want a small black coat.",
          "img": "https://wolf-labs.pages.dev/p/27e900a7a390/a-small-black-coat/img/live-vitrine.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I want a large red hat.",
          "img": "https://wolf-labs.pages.dev/p/27e900a7a390/a-small-black-coat/img/live-arara.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I want a medium blue sweater.",
          "img": "https://wolf-labs.pages.dev/p/27e900a7a390/a-small-black-coat/img/live-etiqueta.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Size, color, thing. Four quick ones.",
      "regra": "<b>size</b> + <b>color</b> + <b>thing</b> · <b>a small black coat</b> · adjectives never take <b>-s</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I want a large green coat.",
          "aceita": [],
          "d": "Dica: primeiro o tamanho (<b>large</b>), depois a cor (<b>green</b>), depois a coisa (<b>coat</b>)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "I want a black small coat.",
          "r": "I want a small black coat.",
          "aceita": [],
          "d": "Dica: o tamanho vem antes da cor: <b>small black</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "She has a red big bag.",
          "r": "She has a big red bag.",
          "aceita": [],
          "d": "Dica: tamanho, cor, coisa: <b>big red bag</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I want two small blacks coats.",
          "r": "I want two small black coats.",
          "aceita": [],
          "d": "Dica: a cor não leva -s. Só o nome fica no plural: <i>coats</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/27e900a7a390/a-small-black-coat/img/live-rua.webp",
      "leg": "A cold wet street",
      "pede": "Look at the picture: a cold street in London. Write 2 or 3 sentences about clothes you want. Use size + color + thing: <b>I want a small black coat</b>.",
      "ph": "I want a … ",
      "ex": "I want a small black coat. I want a big blue scarf. I want two white shirts."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What color is your shirt right now? Say it with the thing.",
          "ph": "I have a … shirt.",
          "ex": "I have a big blue shirt."
        },
        {
          "q": "What do you wear when it is very cold?",
          "ph": "I wear a … ",
          "ex": "I wear a long black coat and a red hat."
        }
      ]
    }
  }
};
