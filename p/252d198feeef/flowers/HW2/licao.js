/* FLOWERS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: can + reflexivos (myself, himself, herself). Música: NENHUM verso; diálogo original. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "flowers",
  "titulo": "Flowers",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/252d198feeef/flowers/img/live-capa.webp",
  "alvo": "can + myself / yourself / himself / herself / ourselves / themselves: I can cook myself a big lunch (for me) x I can cook her a soup (for another person); never can to, never hisself",
  "abrir": "What can you do for yourself on a quiet day?",
  "fecho": "<b>can</b> + plain verb + <b>-self</b>: <i>I can cook myself lunch.</i> I → <b>myself</b>, you → <b>yourself</b>, he → <b>himself</b>, she → <b>herself</b>, they → <b>themselves</b>. For another person: <i>I can cook her a soup.</i>",
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
      "sub": "Mia and Leo talk about a quiet Sunday. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/252d198feeef/flowers/img/live-tv.webp",
      "leg": "A TV in a dark room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, what do you do on a quiet Sunday?"
        },
        {
          "quem": "mia",
          "t": "I stay home. I can cook myself a big lunch."
        },
        {
          "quem": "leo",
          "t": "Do you cook for your sister too?"
        },
        {
          "quem": "mia",
          "t": "Yes! I can cook her a soup, but on Sunday I cook only for me."
        },
        {
          "quem": "leo",
          "t": "I can teach myself a new song on my guitar."
        },
        {
          "quem": "mia",
          "t": "Can your brother play too?"
        },
        {
          "quem": "leo",
          "t": "Yes, he can teach himself fast. He can learn any song."
        },
        {
          "quem": "mia",
          "t": "My friends can make themselves a cake. They love sweets."
        },
        {
          "quem": "leo",
          "t": "And in the evening?"
        },
        {
          "quem": "mia",
          "t": "I can pour myself some tea and watch a movie on the sofa."
        }
      ],
      "perguntas": [
        {
          "q": "What can Mia cook herself?",
          "op": [
            "A big lunch",
            "A soup",
            "A cake"
          ],
          "a": 0,
          "por": "I can cook myself a big lunch."
        },
        {
          "q": "What can Leo teach himself?",
          "op": [
            "A new song",
            "A big lunch",
            "A soup"
          ],
          "a": 0,
          "por": "I can teach myself a new song on my guitar."
        },
        {
          "q": "Who can make themselves a cake?",
          "op": [
            "Mia's friends",
            "Leo's brother",
            "Mia's sister"
          ],
          "a": 0,
          "por": "My friends can make themselves a cake."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a quiet day. Hear it, then say it.",
      "frases": [
        {
          "t": "I can cook myself a big lunch.",
          "img": "https://wolf-labs.pages.dev/p/252d198feeef/flowers/img/live-pista.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "He can teach himself a new song.",
          "img": "https://wolf-labs.pages.dev/p/252d198feeef/flowers/img/live-trofeu.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I can pour myself some tea.",
          "img": "https://wolf-labs.pages.dev/p/252d198feeef/flowers/img/live-tv.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "can + myself, himself, herself. Four quick ones.",
      "regra": "<b>I</b> → <b>myself</b> · <b>you</b> → <b>yourself</b> · <b>he</b> → <b>himself</b> · <b>she</b> → <b>herself</b> · <b>they</b> → <b>themselves</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She can make herself a cup of tea.",
          "aceita": [],
          "d": "Dica: <b>she</b> pede <b>herself</b> no fim."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I can cook me a big lunch.",
          "r": "I can cook myself a big lunch.",
          "aceita": [],
          "d": "Dica: eu faço algo por mim: <b>myself</b>, não <i>me</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He can teach hisself English.",
          "r": "He can teach himself English.",
          "aceita": [],
          "d": "Dica: o certo é <b>himself</b>, não 'hisself'."
        },
        {
          "tipo": "escreve",
          "t": "Make it a question.",
          "mostra": "She can pour herself some tea.",
          "r": "Can she pour herself some tea?",
          "aceita": [],
          "d": "Dica: <b>Can</b> + she + verbo + herself."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/252d198feeef/flowers/img/live-tv.webp",
      "leg": "A TV in a dark room",
      "pede": "Look at the picture: a TV in a dark room. Write 2 or 3 sentences about a quiet evening for you. Use <b>can</b> + <b>myself</b>, <b>yourself</b> or <b>herself</b>.",
      "ph": "I can make myself …",
      "ex": "I can make myself a pizza. I can watch a movie. My sister can make herself a salad."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What can you do for yourself on a quiet day?",
          "ph": "I can … myself …",
          "ex": "I can cook myself a nice dinner."
        },
        {
          "q": "What can your mother, or a friend, do for herself?",
          "ph": "She can … herself …",
          "ex": "My mother can make herself a cup of tea and read a book."
        }
      ]
    }
  }
};
