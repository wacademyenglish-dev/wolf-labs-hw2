/* EVERY MORNING · GLOBAL PAYMENTS ENGLISH LESSON 6 · LIÇÃO DE CASA 2.0 (03/11/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present simple for the routine: I check · we release · I don’t. A1 com cara de A0: português só nas dicas (d). Bancos e empresas fictícios. */
window.HW2 = {
  "id": "global-payments-every-morning",
  "titulo": "Every Morning",
  "nivel": "A1",
  "minutos": 12,
  "capa": "../img/live-capa.webp",
  "alvo": "present simple for the routine: I check · we release · I don’t",
  "abrir": "A new colleague asks: “What do you do every morning?” What do you say first?",
  "fecho": "Routine = present simple: <b>I check</b>, <b>we release</b>, <b>I don’t</b> work on Saturday. Order: <b>first</b>, <b>then</b>, <b>after that</b>.",
  "elenco": {
    "mark": {
      "nome": "Mark",
      "voz": "en-US-AndrewNeural",
      "cor": "#86c9f0"
    },
    "ana": {
      "nome": "Ana",
      "voz": "en-US-AvaNeural",
      "cor": "#b9a6e8"
    }
  },
  "rate": "-15%",
  "rodadas": {
    "listen": {
      "sub": "Mark asks about Ana’s morning. About 30 seconds.",
      "img": "../img/live-conversa.webp",
      "leg": "A desk at dawn with coffee",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mark",
          "t": "What do you do every morning, Ana?"
        },
        {
          "quem": "ana",
          "t": "I start at eight. First I check the queue."
        },
        {
          "quem": "mark",
          "t": "And then?"
        },
        {
          "quem": "ana",
          "t": "Then I open the messages. After that I settle the approved payments."
        },
        {
          "quem": "mark",
          "t": "Do you work on Saturday?"
        },
        {
          "quem": "ana",
          "t": "No, I don’t. I work Monday to Friday."
        }
      ],
      "perguntas": [
        {
          "q": "What time does Ana start?",
          "op": [
            "At eight",
            "At nine",
            "At seven"
          ],
          "a": 0,
          "por": "I start at eight."
        },
        {
          "q": "What does she do first?",
          "op": [
            "She checks the queue.",
            "She opens the messages.",
            "She settles payments."
          ],
          "a": 0,
          "por": "First I check the queue."
        },
        {
          "q": "Does she work on Saturday?",
          "op": [
            "No, she doesn’t.",
            "Yes, she does.",
            "Only in the morning."
          ],
          "a": 0,
          "por": "No, I don’t. I work Monday to Friday."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it three times.",
      "frases": [
        {
          "t": "I check the queue every morning.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "First I open Exchange. Then I settle the payments.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I don’t work on Saturday.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "Routine: <b>I check</b> (no am) · order: <b>first, then, after that</b> · negative: <b>I don’t</b> + verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I check the queue every morning.",
          "aceita": [],
          "d": "Dica: I + check + the queue + every morning."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I am check the queue.",
          "r": "I check the queue.",
          "aceita": [],
          "d": "Dica: na rotina não tem <b>am</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I no work on Saturday.",
          "r": "I don’t work on Saturday.",
          "aceita": [
            "I do not work on Saturday."
          ],
          "d": "Dica: negativo = <b>I don’t</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Everyday I check the messages.",
          "r": "Every day I check the messages.",
          "aceita": [
            "I check the messages every day."
          ],
          "d": "Dica: “todo dia” = <b>every day</b>, separado."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A desk at dawn with coffee",
      "pede": "Write your morning routine in 3 sentences: first, then, after that.",
      "ph": "First I … Then I … After that I …",
      "ex": "First I check the queue. Then I open the messages. After that I settle the approved payments."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What time do you start work?",
          "ph": "I start at …",
          "ex": "I start at eight thirty."
        },
        {
          "q": "What do you do after lunch?",
          "ph": "After lunch I …",
          "ex": "After lunch I check the payments on hold."
        }
      ]
    }
  }
};
