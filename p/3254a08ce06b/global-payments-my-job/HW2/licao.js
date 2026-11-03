/* MY JOB · GLOBAL PAYMENTS ENGLISH LESSON 1 · LIÇÃO DE CASA 2.0 (03/11/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: to be: I’m · this is · it’s + the 8 screen words. A1 com cara de A0: português só nas dicas (d). Bancos e empresas fictícios. */
window.HW2 = {
  "id": "global-payments-my-job",
  "titulo": "My Job",
  "nivel": "A1",
  "minutos": 12,
  "capa": "../img/live-capa.webp",
  "alvo": "to be: I’m · this is · it’s + the 8 screen words",
  "abrir": "A new colleague asks: “What is your job?” What do you say?",
  "fecho": "Every English sentence needs a subject: <b>I’m</b> an analyst · <b>This is</b> the queue · <b>It’s</b> a payment.",
  "elenco": {
    "ana": {
      "nome": "Ana",
      "voz": "en-US-AvaNeural",
      "cor": "#b9a6e8"
    },
    "mark": {
      "nome": "Mark",
      "voz": "en-US-AndrewNeural",
      "cor": "#86c9f0"
    }
  },
  "rate": "-15%",
  "rodadas": {
    "listen": {
      "sub": "Ana meets a new colleague on a video call. About 40 seconds.",
      "img": "../img/live-conversa.webp",
      "leg": "A video call on Monday morning",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mark",
          "t": "Hi! I’m Mark. I’m from the New York office."
        },
        {
          "quem": "ana",
          "t": "Hi, Mark! I’m Ana. I’m a payments analyst."
        },
        {
          "quem": "mark",
          "t": "Nice to meet you. Is this your system?"
        },
        {
          "quem": "ana",
          "t": "Yes. This is Exchange. It’s the payment queue."
        },
        {
          "quem": "mark",
          "t": "Is it busy today?"
        },
        {
          "quem": "ana",
          "t": "Yes, it’s very busy. One moment, please. I’m checking."
        }
      ],
      "perguntas": [
        {
          "q": "What is Ana’s job?",
          "op": [
            "A payments analyst",
            "A manager",
            "A client"
          ],
          "a": 0,
          "por": "I’m Ana. I’m a payments analyst."
        },
        {
          "q": "What is Exchange?",
          "op": [
            "The payment queue",
            "A bank",
            "The New York office"
          ],
          "a": 0,
          "por": "This is Exchange. It’s the payment queue."
        },
        {
          "q": "Is it busy today?",
          "op": [
            "Yes, it’s very busy.",
            "No, it’s quiet.",
            "It’s Friday."
          ],
          "a": 0,
          "por": "Yes, it’s very busy."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it three times.",
      "frases": [
        {
          "t": "I’m a payments analyst.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "This is the queue.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "One moment, please. I’m checking.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "Every sentence has a subject: <b>I’m</b> … · <b>This is</b> … · <b>It’s</b> … · an + vowel: <b>an</b> analyst.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "This is the Exchange system.",
          "aceita": [],
          "d": "Dica: “Este é” = This is."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Am a payments analyst.",
          "r": "I’m a payments analyst.",
          "aceita": [
            "I am a payments analyst."
          ],
          "d": "Dica: em inglês o “eu” é obrigatório: <b>I’m</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Is a payment.",
          "r": "It’s a payment.",
          "aceita": [
            "It is a payment."
          ],
          "d": "Dica: coisa também tem sujeito: <b>It’s</b> a payment."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I’m a analyst.",
          "r": "I’m an analyst.",
          "aceita": [
            "I am an analyst."
          ],
          "d": "Dica: analyst começa com vogal: <b>an</b> analyst."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "An office desk at night",
      "pede": "Write 2 or 3 sentences: your name, your job, your system.",
      "ph": "I’m … I’m a … This is …",
      "ex": "I’m Ana. I’m a payments analyst. This is my system: Exchange."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Are you at the office today?",
          "ph": "Yes, I’m at the office. / No, I’m at home.",
          "ex": "No, I’m at home today."
        },
        {
          "q": "Is your job busy?",
          "ph": "Yes, it’s busy. / No, it’s quiet.",
          "ex": "Yes, it’s very busy on Monday."
        }
      ]
    }
  }
};
