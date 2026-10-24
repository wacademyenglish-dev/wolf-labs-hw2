/* I CAN'T DO IT YET · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: can / can't + yet. A1: dicas em português só nas notas (d). Só live-* escuras. */
window.HW2 = {
  "id": "i-cant-do-it-yet",
  "titulo": "I Can't Do It Yet",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e2ed9c942eee/i-cant-do-it-yet/img/live-vila.webp",
  "alvo": "can / can't for ability + yet (I can't swim yet); the question Can you ...? Yes, I can / No, I can't; plain verb after can, no -s, no to, no don't can, no Do you can",
  "abrir": "What can you do very well?",
  "fecho": "After <b>can</b>, the plain verb: <i>He can run.</i> No: <b>can't</b>: <i>I can't swim yet.</i> <b>Yet</b> = not now, but later. Question: <b>Can</b> comes first: <i>Can you cook?</i> Never <i>can to</i>, <i>don't can</i>, <i>Do you can</i>.",
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
      "sub": "Mia and Leo talk about a boy at ninja school. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/e2ed9c942eee/i-cant-do-it-yet/img/live-academia.webp",
      "leg": "A classroom at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at this ninja school. Can the boy do the trick?"
        },
        {
          "quem": "mia",
          "t": "No, he can't do it yet. It is very hard."
        },
        {
          "quem": "leo",
          "t": "Can he run fast?"
        },
        {
          "quem": "mia",
          "t": "Yes, he can. He can run and jump very well. But he can't swim yet."
        },
        {
          "quem": "leo",
          "t": "Can you swim?"
        },
        {
          "quem": "mia",
          "t": "Yes, I can. But I can't cook yet. I burn the rice every time."
        },
        {
          "quem": "leo",
          "t": "Can you cook?"
        },
        {
          "quem": "mia",
          "t": "Not yet. Can you cook?"
        },
        {
          "quem": "leo",
          "t": "Yes, I can. I can cook rice and beans. I can't make cake yet."
        },
        {
          "quem": "mia",
          "t": "Then you can teach me. Deal!"
        }
      ],
      "perguntas": [
        {
          "q": "Can the boy do the trick?",
          "op": [
            "No, not yet",
            "Yes, he can",
            "Yes, he can swim"
          ],
          "a": 0,
          "por": "No, he can't do it yet."
        },
        {
          "q": "What can the boy do very well?",
          "op": [
            "Run and jump",
            "Swim",
            "Cook"
          ],
          "a": 0,
          "por": "He can run and jump very well."
        },
        {
          "q": "What can't Leo make yet?",
          "op": [
            "A cake",
            "Rice",
            "Beans"
          ],
          "a": 0,
          "por": "I can't make cake yet."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about can and yet. Hear it, then say it.",
      "frases": [
        {
          "t": "He can't do it yet.",
          "img": "https://wolf-labs.pages.dev/p/e2ed9c942eee/i-cant-do-it-yet/img/live-academia.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Can you run fast?",
          "img": "https://wolf-labs.pages.dev/p/e2ed9c942eee/i-cant-do-it-yet/img/live-vila.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I can cook, but I can't make cake yet.",
          "img": "https://wolf-labs.pages.dev/p/e2ed9c942eee/i-cant-do-it-yet/img/live-mapa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "can, can't, yet. Four quick ones.",
      "regra": "<b>can</b> + plain verb · <b>can't</b> = no · <b>yet</b> = not now · <b>Can you ...?</b> · no <b>to</b>, no <b>don't can</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "He can run and jump very well.",
          "aceita": [],
          "d": "Dica: depois de <b>can</b>, o verbo fica limpo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He can to swim.",
          "r": "He can swim.",
          "aceita": [],
          "d": "Dica: depois de <b>can</b>, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I don't can swim yet.",
          "r": "I can't swim yet.",
          "aceita": [
            "I cannot swim yet.",
            "I can not swim yet."
          ],
          "d": "Dica: o não de can é <b>can't</b>, nunca 'don't can'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Do you can cook?",
          "r": "Can you cook?",
          "aceita": [],
          "d": "Dica: a pergunta começa com <b>Can</b>, sem <b>Do</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e2ed9c942eee/i-cant-do-it-yet/img/live-academia.webp",
      "leg": "A classroom at night",
      "pede": "Look at the picture: a classroom at night. Write 2 or 3 sentences: what you <b>can</b> do, and what you <b>can't</b> do <b>yet</b>.",
      "ph": "I can … but I can't … yet.",
      "ex": "I can cook rice and beans. I can't swim yet, but I want to learn."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What can you do very well?",
          "ph": "I can …",
          "ex": "I can sing and I can draw very well."
        },
        {
          "q": "What can't you do yet? Can you learn it this year?",
          "ph": "I can't … yet.",
          "ex": "I can't drive yet. I can learn it this year."
        }
      ]
    }
  }
};
