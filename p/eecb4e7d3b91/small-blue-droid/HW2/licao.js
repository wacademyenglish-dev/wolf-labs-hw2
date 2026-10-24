/* THE ZEFFO VAULT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: ordem dos adjetivos. Jogo: falas originais, no mundo do cofre, sem violência. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "small-blue-droid",
  "titulo": "The Zeffo Vault",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/eecb4e7d3b91/small-blue-droid/img/live-fogueira.webp",
  "alvo": "order of adjectives before a noun: size, age, shape, color, origin, material (a big old grey stone door); no -s on adjectives, no and between them",
  "abrir": "What is the oldest thing you own?",
  "fecho": "Adjectives never take <b>-s</b> and never need <b>and</b>: <i>two big old doors</i>. The order is <b>size · age · shape · color · origin · material</b>, then the noun: <i>a big old grey stone door</i>.",
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
      "sub": "Mia and Leo in an old stone vault. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/eecb4e7d3b91/small-blue-droid/img/live-porta.webp",
      "leg": "The vault door",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I'm at the vault door. It's a big old grey stone door."
        },
        {
          "quem": "mia",
          "t": "Good. Describe the room. What do you see?"
        },
        {
          "quem": "leo",
          "t": "I see a small old blue glass cube on a table."
        },
        {
          "quem": "mia",
          "t": "Is it the key? Don't touch it yet."
        },
        {
          "quem": "leo",
          "t": "OK. There is also a tall ancient grey stone statue next to the door."
        },
        {
          "quem": "mia",
          "t": "A tall ancient grey stone statue. Got it. Anything else?"
        },
        {
          "quem": "leo",
          "t": "A big flat black metal wheel. It's very heavy."
        },
        {
          "quem": "mia",
          "t": "The door opens only for exact words. Say the cube again."
        },
        {
          "quem": "leo",
          "t": "A small old blue glass cube!"
        },
        {
          "quem": "mia",
          "t": "Perfect. The door is opening."
        }
      ],
      "perguntas": [
        {
          "q": "What is the door like?",
          "op": [
            "A big old grey stone door",
            "A small old blue glass door",
            "A big new grey metal door"
          ],
          "a": 0,
          "por": "It's a big old grey stone door."
        },
        {
          "q": "What is on the table?",
          "op": [
            "A small old blue glass cube",
            "A big old grey stone cube",
            "A small new red metal box"
          ],
          "a": 0,
          "por": "I see a small old blue glass cube on a table."
        },
        {
          "q": "Why does Leo say the cube again?",
          "op": [
            "The door opens only for exact words",
            "The cube is heavy",
            "Mia can't hear him"
          ],
          "a": 0,
          "por": "The door opens only for exact words."
        }
      ]
    },
    "out": {
      "sub": "Three things in the vault. Hear it, then say it.",
      "frases": [
        {
          "t": "It is a big old grey stone door.",
          "img": "https://wolf-labs.pages.dev/p/eecb4e7d3b91/small-blue-droid/img/live-porta.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I see a tall ancient grey stone statue.",
          "img": "https://wolf-labs.pages.dev/p/eecb4e7d3b91/small-blue-droid/img/live-estatua.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It is a small old blue glass cube.",
          "img": "https://wolf-labs.pages.dev/p/eecb4e7d3b91/small-blue-droid/img/live-cubo.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Which order? Four quick ones.",
      "regra": "<b>size · age · shape · color · origin · material</b> + noun · no <b>-s</b> on adjectives · no <b>and</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The vault has a big old round metal wheel.",
          "aceita": [],
          "d": "Dica: tamanho (big), idade (old), forma (round), material (metal)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "It is a grey old stone door.",
          "r": "It is an old grey stone door.",
          "aceita": [
            "It is an old grey stone door."
          ],
          "d": "Dica: a idade vem antes da cor: <b>old</b> antes de <b>grey</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "I see a glass blue small cube.",
          "r": "I see a small blue glass cube.",
          "aceita": [
            "I see a small blue glass cube."
          ],
          "d": "Dica: tamanho, cor, material: <b>small blue glass</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It is a big and old statue.",
          "r": "It is a big old statue.",
          "aceita": [
            "It is a big, old statue."
          ],
          "d": "Dica: nada de <b>and</b> entre adjetivos."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/eecb4e7d3b91/small-blue-droid/img/live-sala.webp",
      "leg": "Old wheels in the vault",
      "pede": "Look at the picture: old stone wheels in a dark vault. Describe one thing. Write 2 or 3 sentences with 2 or 3 adjectives in the right order.",
      "ph": "I see a big old … wheel.",
      "ex": "I see a big old round metal wheel. It is next to a tall grey stone column."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Describe your phone. Size, color, material.",
          "ph": "My phone is a small … phone.",
          "ex": "My phone is a small black plastic phone. It is three years old."
        },
        {
          "q": "What is the oldest thing you have? Who gave it to you?",
          "ph": "I have an old … My … gave it to me.",
          "ex": "I have an old silver ring. My grandmother gave it to me."
        }
      ]
    }
  }
};
