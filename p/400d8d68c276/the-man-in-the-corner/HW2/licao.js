window.HW2_ARTIGO_CONTA = true;
/* THE MAN IN THE CORNER · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: whose + pronomes possessivos. Jogo: falas originais. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-man-in-the-corner",
  "titulo": "The Man in the Corner",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/400d8d68c276/the-man-in-the-corner/img/live-bar.webp",
  "alvo": "whose? and possessive pronouns on their own: mine, yours, his, hers, ours, theirs (It's hers. They're theirs.) and the owner with 's (It's Jake's.); never mines, your's, It's her, Who is this hat?",
  "abrir": "Whose phone is the oldest in your family?",
  "fecho": "<b>Whose</b> asks for the owner: <i>Whose scarf is this?</i> Answer with <b>mine, yours, his, hers, ours, theirs</b>: <i>It's hers.</i> Never <i>mines</i>, never <i>your's</i>. Or the owner with <b>'s</b>: <i>It's Jake's.</i> Not <i>Who is this hat?</i>",
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
      "sub": "Mia and Leo in a quiet bar after a busy night. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/400d8d68c276/the-man-in-the-corner/img/live-bar.webp",
      "leg": "The bar, late at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, six things are left on the table. Whose scarf is this?"
        },
        {
          "quem": "leo",
          "t": "It's Nina's. She has a red scarf. It's hers."
        },
        {
          "quem": "mia",
          "t": "And this helmet? Is it yours?"
        },
        {
          "quem": "leo",
          "t": "No, it's not mine. I came by bus. It's Jake's, I think."
        },
        {
          "quem": "mia",
          "t": "Yes, it's his. His bike is in the alley. And these two gloves?"
        },
        {
          "quem": "leo",
          "t": "They're Sam and Tom's. They're theirs."
        },
        {
          "quem": "mia",
          "t": "OK. And this key? Is it ours?"
        },
        {
          "quem": "leo",
          "t": "Yes, it's ours. It's for the back door."
        }
      ],
      "perguntas": [
        {
          "q": "Whose scarf is it?",
          "op": [
            "It's Nina's",
            "It's Jake's",
            "It's Leo's"
          ],
          "a": 0,
          "por": "It's Nina's. She has a red scarf. It's hers."
        },
        {
          "q": "Why isn't the helmet Leo's?",
          "op": [
            "He came by bus",
            "He lost it",
            "It is too big"
          ],
          "a": 0,
          "por": "No, it's not mine. I came by bus."
        },
        {
          "q": "What is ours?",
          "op": [
            "The key for the back door",
            "The gloves",
            "The scarf"
          ],
          "a": 0,
          "por": "Yes, it's ours. It's for the back door."
        }
      ]
    },
    "out": {
      "sub": "Lost and found. Hear it, then say it.",
      "frases": [
        {
          "t": "Whose scarf is this?",
          "img": "https://wolf-labs.pages.dev/p/400d8d68c276/the-man-in-the-corner/img/live-bar.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It's not mine. It's his.",
          "img": "https://wolf-labs.pages.dev/p/400d8d68c276/the-man-in-the-corner/img/live-moto.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The gloves are theirs, but the key is ours.",
          "img": "https://wolf-labs.pages.dev/p/400d8d68c276/the-man-in-the-corner/img/live-bar.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "mine, yours, his, hers or theirs? Four quick ones.",
      "regra": "<b>Whose ...?</b> · <b>mine · yours · his · hers · ours · theirs</b> (no <b>-s</b> on mine, no apostrophe in yours) · owner + <b>'s</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The helmet is his and the scarf is hers.",
          "aceita": [],
          "d": "Dica: <b>his</b> = dele, <b>hers</b> = dela."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "This bag is mines.",
          "r": "This bag is mine.",
          "aceita": [],
          "d": "Dica: <b>mine</b> não ganha -s."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the question correct.",
          "mostra": "Who is this hat?",
          "r": "Whose hat is this?",
          "aceita": [
            "Whose is this hat?"
          ],
          "d": "Dica: para perguntar o dono, use <b>Whose</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The red scarf is her.",
          "r": "The red scarf is hers.",
          "aceita": [],
          "d": "Dica: sozinho, sem coisa depois, é <b>hers</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/400d8d68c276/the-man-in-the-corner/img/live-moto.webp",
      "leg": "A motorbike in a wet alley",
      "pede": "Look at the picture: a motorbike in a wet alley. Write 2 or 3 sentences: whose bike is it? Use <b>Whose</b>, <b>his / hers / theirs</b> or a name with <b>'s</b>.",
      "ph": "Whose bike is this? It's …",
      "ex": "Whose bike is this? It's Jake's. It's not mine, it's his."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is yours? Name two things in your room.",
          "ph": "The … is mine.",
          "ex": "The blue bag is mine. The old guitar is mine."
        },
        {
          "q": "Whose car or bike is in front of your house?",
          "ph": "It's …",
          "ex": "It's my neighbor's. It's not ours."
        }
      ]
    }
  }
};
