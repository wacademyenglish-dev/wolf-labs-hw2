/* LOSE YOURSELF · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: have to / must / mustn't / don't have to / had to. B1: nenhum português. Linha de música: NENHUM verso aqui; sem palavrão e sem violência. Só live-* (escuras). */
window.HW2 = {
  "id": "lose-yourself",
  "titulo": "Lose Yourself",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/07fff272f70a/lose-yourself/img/live-capa.webp",
  "alvo": "obligation and necessity: have to / has to, must, mustn't (forbidden) versus don't have to (not necessary), had to (past), have got to, Do I have to...?; never must to, never must in the past, never don't have to for forbidden",
  "abrir": "What do you have to do before an important day?",
  "fecho": "<b>have to / must</b> = it is necessary. <b>mustn't</b> = forbidden. <b>don't have to</b> = not necessary, you can choose. Past: <b>had to</b> (never <i>musted</i>). <b>Have got to</b> = have to, informal. A question: <b>Do I have to …?</b> Never <i>must to</i>.",
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
      "sub": "Mia and Leo the day before an audition. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/07fff272f70a/lose-yourself/img/live-corredor.webp",
      "leg": "A backstage hallway",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, are you ready for tomorrow? You have an audition at ten."
        },
        {
          "quem": "mia",
          "t": "Almost. I have to arrive early, and I must bring my ID."
        },
        {
          "quem": "leo",
          "t": "Do you have to bring your own music?"
        },
        {
          "quem": "mia",
          "t": "No, I don't have to. They have a speaker. But I mustn't be late. They don't let anyone in after ten."
        },
        {
          "quem": "leo",
          "t": "Last year I had to wait two hours outside. It was boring."
        },
        {
          "quem": "mia",
          "t": "Poor you! I've got to practice tonight. I have to learn the last part."
        },
        {
          "quem": "leo",
          "t": "You don't have to be perfect. You just have to enjoy it."
        },
        {
          "quem": "mia",
          "t": "True. And I mustn't forget to breathe!"
        },
        {
          "quem": "leo",
          "t": "Exactly. Do you have to wear a costume?"
        },
        {
          "quem": "mia",
          "t": "No, I don't have to, but I've got to find my shoes."
        }
      ],
      "perguntas": [
        {
          "q": "What must Mia bring?",
          "op": [
            "Her ID",
            "Her own speaker",
            "A costume"
          ],
          "a": 0,
          "por": "I have to arrive early, and I must bring my ID."
        },
        {
          "q": "Why mustn't Mia be late?",
          "op": [
            "They don't let anyone in after ten",
            "The speaker is broken",
            "Leo is waiting outside"
          ],
          "a": 0,
          "por": "I mustn't be late. They don't let anyone in after ten."
        },
        {
          "q": "What did Leo have to do last year?",
          "op": [
            "Wait two hours outside",
            "Bring his own music",
            "Wear a costume"
          ],
          "a": 0,
          "por": "Last year I had to wait two hours outside."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about rules. Hear it, then say it.",
      "frases": [
        {
          "t": "You mustn't be late for the audition.",
          "img": "https://wolf-labs.pages.dev/p/07fff272f70a/lose-yourself/img/live-corredor.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You don't have to be perfect.",
          "img": "https://wolf-labs.pages.dev/p/07fff272f70a/lose-yourself/img/live-palco.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Last year I had to wait for two hours.",
          "img": "https://wolf-labs.pages.dev/p/07fff272f70a/lose-yourself/img/live-espelho.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "have to, mustn't or don't have to? Four quick ones.",
      "regra": "<b>have to / must</b> = necessary · <b>mustn't</b> = forbidden · <b>don't have to</b> = not necessary · past: <b>had to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I have to practice every night.",
          "aceita": [],
          "d": "Hint: <b>have to</b> + plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I must to arrive early tomorrow.",
          "r": "I must arrive early tomorrow.",
          "aceita": [
            "I have to arrive early tomorrow."
          ],
          "d": "Hint: after <i>must</i>, the plain verb. Never <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: being late is forbidden.",
          "mostra": "You don't have to be late.",
          "r": "You mustn't be late.",
          "aceita": [
            "You must not be late."
          ],
          "d": "Hint: forbidden is <b>mustn't</b>. <i>Don't have to</i> means it is not necessary."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it happened yesterday.",
          "mostra": "Yesterday I must wait for an hour.",
          "r": "Yesterday I had to wait for an hour.",
          "aceita": [],
          "d": "Hint: for the past, <b>had to</b>. Never <i>must</i> in the past."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/07fff272f70a/lose-yourself/img/live-caderno.webp",
      "leg": "A notebook and a pencil",
      "pede": "Look at the picture: a notebook and a pencil. Write 2 or 3 sentences about what you <b>have to</b> do before an important day, and what you <b>mustn't</b> forget. Use <b>have to</b>, <b>must</b> or <b>mustn't</b>.",
      "ph": "Before an important day I have to … I mustn't …",
      "ex": "Before an important day I have to sleep early. I must check my bag twice. I mustn't forget my documents."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you have to do tomorrow? What don't you have to do?",
          "ph": "Tomorrow I have to … I don't have to …",
          "ex": "Tomorrow I have to work until six. I don't have to wake up early."
        },
        {
          "q": "What mustn't you forget before an important day?",
          "ph": "I mustn't forget …",
          "ex": "I mustn't forget my phone charger or my keys."
        }
      ]
    }
  }
};
