/* NOBODY MAKES HIM · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: have to / don't have to / had to / mustn't. A2: dicas em português só nas notas (d). Falas originais (personagens Mia e Leo). */
window.HW2 = {
  "id": "nobody-makes-him",
  "titulo": "Nobody Makes Him",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/d3bfe5c7e939/nobody-makes-him/img/live-campo.webp",
  "alvo": "have to / has to for what you must do; don't / doesn't have to for what is not necessary (your choice); had to for the past (must has no past); mustn't for what is forbidden; plain verb after them, never must to, haven't to, he have to",
  "abrir": "What do you have to do tomorrow?",
  "fecho": "<b>Have to / has to</b>: somebody makes you. <b>Don't have to</b>: it is your choice. <b>Had to</b>: the past. <b>Mustn't</b>: not allowed. With he, she: <b>has to</b>, <b>doesn't have to</b>. Never <i>must to</i>, never <i>musted</i>.",
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
      "sub": "Mia and Leo in a kitchen early in the morning. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/d3bfe5c7e939/nobody-makes-him/img/live-cozinha.webp",
      "leg": "A kitchen at seven in the morning",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you are in the kitchen at seven. Do you have to cook?"
        },
        {
          "quem": "leo",
          "t": "No, I don't have to. Nobody makes me. I like it."
        },
        {
          "quem": "mia",
          "t": "I have to leave at six every day. My boss starts early."
        },
        {
          "quem": "leo",
          "t": "When I was sixteen, I had to cook every night. My mother worked late."
        },
        {
          "quem": "mia",
          "t": "And now? Does she have to work late?"
        },
        {
          "quem": "leo",
          "t": "No, she doesn't have to. She works from home now."
        },
        {
          "quem": "mia",
          "t": "You mustn't be late for training, right?"
        },
        {
          "quem": "leo",
          "t": "Right. The coach says: you mustn't be late. Never."
        },
        {
          "quem": "mia",
          "t": "And you mustn't forget your boots."
        },
        {
          "quem": "leo",
          "t": "Ha! I have to go. My eggs are ready."
        }
      ],
      "perguntas": [
        {
          "q": "Does Leo have to cook?",
          "op": [
            "No, he doesn't have to. He likes it",
            "Yes, his coach makes him",
            "Yes, his mother makes him"
          ],
          "a": 0,
          "por": "No, I don't have to. Nobody makes me. I like it."
        },
        {
          "q": "What did Leo have to do at sixteen?",
          "op": [
            "Cook every night",
            "Work late",
            "Leave at six"
          ],
          "a": 0,
          "por": "When I was sixteen, I had to cook every night."
        },
        {
          "q": "What mustn't Leo do at training?",
          "op": [
            "Be late",
            "Cook eggs",
            "Work from home"
          ],
          "a": 0,
          "por": "You mustn't be late. Never."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about rules. Hear it, then say it.",
      "frases": [
        {
          "t": "I don't have to cook, but I like it.",
          "img": "https://wolf-labs.pages.dev/p/d3bfe5c7e939/nobody-makes-him/img/live-cozinha.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "At sixteen I had to wash my own clothes.",
          "img": "https://wolf-labs.pages.dev/p/d3bfe5c7e939/nobody-makes-him/img/live-vazio.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "You mustn't be late for training.",
          "img": "https://wolf-labs.pages.dev/p/d3bfe5c7e939/nobody-makes-him/img/live-campo.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "have to, don't have to, had to. Four quick ones.",
      "regra": "<b>has to</b> = somebody makes you · <b>don't have to</b> = your choice · <b>had to</b> = past · <b>mustn't</b> = not allowed.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She has to work late tomorrow.",
          "aceita": [],
          "d": "Dica: com she, <b>has to</b> + verbo limpo (work)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He have to train every day.",
          "r": "He has to train every day.",
          "aceita": [
            "He has to train every day."
          ],
          "d": "Dica: com he, <b>has to</b>: o S fica em has."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I musted clean the room at sixteen.",
          "r": "I had to clean the room at sixteen.",
          "aceita": [
            "I had to clean the room when I was sixteen."
          ],
          "d": "Dica: must não tem passado. Use <b>had to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I haven't to go to school today.",
          "r": "I don't have to go to school today.",
          "aceita": [
            "I do not have to go to school today."
          ],
          "d": "Dica: have to é verbo normal: <b>don't have to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/d3bfe5c7e939/nobody-makes-him/img/live-vazio.webp",
      "leg": "A small empty room with a mattress",
      "pede": "Look at the picture: a small empty room. Imagine you move here alone at sixteen. Write 2 or 3 sentences: what you <b>had to</b> do, and one thing you <b>didn't have to</b> do.",
      "ph": "At sixteen I had to …",
      "ex": "At sixteen I had to cook and clean the room. I didn't have to pay for the room, because my father paid."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you have to do tomorrow?",
          "ph": "Tomorrow I have to …",
          "ex": "Tomorrow I have to go to work at eight."
        },
        {
          "q": "What did you have to do when you were a teenager?",
          "ph": "When I was a teenager I had to …",
          "ex": "When I was a teenager I had to wash the dishes every night."
        }
      ]
    }
  }
};
