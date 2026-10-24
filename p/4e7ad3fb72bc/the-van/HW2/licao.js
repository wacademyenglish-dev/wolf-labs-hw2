/* THE VAN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: let's / let's not / shall we. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-van",
  "titulo": "The Van",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4e7ad3fb72bc/the-van/img/live-van.webp",
  "alvo": "let's + plain verb to invite (Let's start); let's not to say no together; Shall we ...? to ask; never let's to",
  "abrir": "What do you suggest doing on Saturday?",
  "fecho": "<b>Let's</b> + the plain verb: <i>Let's start.</i> No, together: <b>Let's not</b> wait. To ask: <b>Shall we</b> go? Never <i>let's to</i>.",
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
      "sub": "Mia and Leo at a van full of boxes. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/4e7ad3fb72bc/the-van/img/live-van.webp",
      "leg": "The van and the boxes",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the van is full. Let's start with the small boxes."
        },
        {
          "quem": "mia",
          "t": "Good idea. Let's put the plates in the kitchen."
        },
        {
          "quem": "leo",
          "t": "OK. Shall we take the big mattress now?"
        },
        {
          "quem": "mia",
          "t": "No, let's not. It's too heavy for two people."
        },
        {
          "quem": "leo",
          "t": "Then let's ask the neighbor. Shall we?"
        },
        {
          "quem": "mia",
          "t": "Yes, let's. He is outside."
        },
        {
          "quem": "leo",
          "t": "It's getting dark. Let's turn on the light."
        },
        {
          "quem": "mia",
          "t": "Wait. Let's not forget the plant in the van."
        },
        {
          "quem": "leo",
          "t": "Right! Let's carry it together."
        },
        {
          "quem": "mia",
          "t": "Perfect. Then let's stop and eat pizza."
        }
      ],
      "perguntas": [
        {
          "q": "What do they put in the kitchen?",
          "op": [
            "The plates",
            "The towels",
            "The books"
          ],
          "a": 0,
          "por": "Let's put the plates in the kitchen."
        },
        {
          "q": "Why don't they take the mattress?",
          "op": [
            "It's too heavy for two people",
            "It's too small",
            "It's dirty"
          ],
          "a": 0,
          "por": "It's too heavy for two people."
        },
        {
          "q": "Who do they ask for help?",
          "op": [
            "The neighbor",
            "Mia's sister",
            "Nobody"
          ],
          "a": 0,
          "por": "Then let's ask the neighbor."
        }
      ]
    },
    "out": {
      "sub": "Three sentences to a friend. Hear it, then say it.",
      "frases": [
        {
          "t": "Let's start with the small boxes.",
          "img": "https://wolf-labs.pages.dev/p/4e7ad3fb72bc/the-van/img/live-van.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Shall we take the mattress now?",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Let's not leave the plant in the van.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "let's, let's not, shall we. Four quick ones.",
      "regra": "<b>Let's</b> + plain verb · <b>Let's not</b> + plain verb · <b>Shall we</b> + plain verb? · never <b>let's to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Let's put the boxes in the hall.",
          "aceita": [],
          "d": "Dica: <b>Let's</b> + o verbo limpo (put)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Let's to open the window.",
          "r": "Let's open the window.",
          "aceita": [
            "Let us open the window."
          ],
          "d": "Dica: depois de <b>let's</b>, o verbo vem direto, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: you say no, together.",
          "mostra": "Let's don't call him now.",
          "r": "Let's not call him now.",
          "aceita": [
            "Let us not call him now."
          ],
          "d": "Dica: o não do <b>let's</b> é <b>let's not</b>, nunca 'let's don't'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make it a question.",
          "mostra": "We take a break?",
          "r": "Shall we take a break?",
          "aceita": [
            "Shall we have a break?"
          ],
          "d": "Dica: para perguntar e convidar: <b>Shall we</b> + verbo?"
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4e7ad3fb72bc/the-van/img/live-rua.webp",
      "leg": "A quiet street on a rainy evening",
      "pede": "Look at the picture: a quiet street in the rain. Write 2 or 3 sentences to a friend: one thing to do with <b>Let's</b>, one thing <b>not</b> to do, and one question with <b>Shall we</b>.",
      "ph": "Let's …",
      "ex": "Let's wait in the car. Let's not walk in the rain. Shall we buy some coffee?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "It is Saturday night. What do you suggest to your friends?",
          "ph": "Let's …",
          "ex": "Let's watch a movie at my house."
        },
        {
          "q": "A friend wants to do something you don't want to do. What do you say?",
          "ph": "No, let's not …",
          "ex": "No, let's not go out. Let's stay home."
        }
      ]
    }
  }
};
