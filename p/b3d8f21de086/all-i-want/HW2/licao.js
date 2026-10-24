/* ALL I WANT · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: want / need / don't care about. Linha de música: NENHUM verso aqui; o listening é diálogo original. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "all-i-want",
  "titulo": "All I Want",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b3d8f21de086/all-i-want/img/live-capa.webp",
  "alvo": "want / need / don't care about: I want + noun; I need + noun; I don't care about + noun; want + to + verb; want + person + to + verb (I want you to come); he / she doesn't want; never want that you, never care without about",
  "abrir": "What do you want for Christmas?",
  "fecho": "<b>want</b> = I would like it · <b>need</b> = I must have it · <b>don't care about</b> = it is not important: <i>I want a bike. I need a lamp. I don't care about snow.</i> <b>want to</b> + verb: <i>I want to stay.</i> <b>want you to</b> + verb: <i>I want you to come.</i> Never <i>want that you</i>.",
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
      "sub": "Mia and Leo make their short Christmas lists. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/b3d8f21de086/all-i-want/img/live-presentes.webp",
      "leg": "Gifts on a dark table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I'm writing my Christmas list. It is very short this year."
        },
        {
          "quem": "mia",
          "t": "Short? What do you want?"
        },
        {
          "quem": "leo",
          "t": "I want warm socks and a good book. I don't want many things."
        },
        {
          "quem": "mia",
          "t": "Do you need a new phone?"
        },
        {
          "quem": "leo",
          "t": "No, I don't need a new phone. Mine is fine."
        },
        {
          "quem": "mia",
          "t": "I want a bike, but I don't need one. I need a new lamp for my room."
        },
        {
          "quem": "leo",
          "t": "And what do you want from me?"
        },
        {
          "quem": "mia",
          "t": "I want you to cook dinner on Christmas Eve."
        },
        {
          "quem": "leo",
          "t": "OK! Then I want you to bring dessert. Big gifts are not important to me."
        },
        {
          "quem": "mia",
          "t": "Me neither. I don't care about gifts. I want to eat and laugh with you."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo want?",
          "op": [
            "Warm socks and a good book",
            "A new phone",
            "A big gift"
          ],
          "a": 0,
          "por": "I want warm socks and a good book."
        },
        {
          "q": "What does Mia need?",
          "op": [
            "A new lamp for her room",
            "A new bike",
            "A new phone"
          ],
          "a": 0,
          "por": "I need a new lamp for my room."
        },
        {
          "q": "What does Mia want Leo to do?",
          "op": [
            "Cook dinner on Christmas Eve",
            "Bring a bike",
            "Buy a lamp"
          ],
          "a": 0,
          "por": "I want you to cook dinner on Christmas Eve."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about wishes. Hear it, then say it.",
      "frases": [
        {
          "t": "I want a small gift, but I don't need a big one.",
          "img": "https://wolf-labs.pages.dev/p/b3d8f21de086/all-i-want/img/live-presentes.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I want you to come to dinner on Saturday.",
          "img": "https://wolf-labs.pages.dev/p/b3d8f21de086/all-i-want/img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I don't care about rain. I want to stay home.",
          "img": "https://wolf-labs.pages.dev/p/b3d8f21de086/all-i-want/img/live-rua.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "want, need or don't care about? Four quick ones.",
      "regra": "<b>want</b> + noun · <b>need</b> + noun · <b>don't care about</b> + noun · <b>want to</b> + verb · <b>want you to</b> + verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I want to stay home on Christmas Eve.",
          "aceita": [],
          "d": "Dica: <b>want to</b> + verbo limpo (stay)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I want that you come to my party.",
          "r": "I want you to come to my party.",
          "aceita": [],
          "d": "Dica: o 'quero que você venha' em inglês é <b>want you to come</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She don't want a big gift.",
          "r": "She doesn't want a big gift.",
          "aceita": [
            "She does not want a big gift."
          ],
          "d": "Dica: com <b>she</b>, o não é <b>doesn't</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I don't care money.",
          "r": "I don't care about money.",
          "aceita": [
            "I do not care about money."
          ],
          "d": "Dica: o certo é <b>care about</b>: não esqueça o <b>about</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b3d8f21de086/all-i-want/img/live-capa.webp",
      "leg": "An empty gift box",
      "pede": "Look at the picture: an empty gift box on a dark floor. Write 2 or 3 sentences: what do you <b>want</b>? What do you <b>need</b>? What don't you <b>care about</b>?",
      "ph": "I want … I care about …",
      "ex": "I want a quiet Christmas. I don't need many gifts. I don't care about money."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you want for your next birthday? What do you need?",
          "ph": "I want … I need …",
          "ex": "I want new headphones. I need a new bag."
        },
        {
          "q": "What do you want your best friend to do this weekend?",
          "ph": "I want my friend to …",
          "ex": "I want my best friend to come to my house."
        }
      ]
    }
  }
};
