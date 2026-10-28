/* IS TUESDAY AT 10 GOOD FOR YOU? · SELLING SERVICES LESSON 9 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: on + day/date, at + time, in + the morning/month; 1–12 + a.m. / p.m.; never “in Monday”, “at the morning”, “15h”. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-is-tuesday-good",
  "titulo": "Is Tuesday at 10 Good for You?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "on + day/date, at + time, in + the morning/month; 1–12 + a.m. / p.m.; never “in Monday”, “at the morning”, “15h”",
  "abrir": "A client can’t come on Thursday. What do you write?",
  "fecho": "<b>on</b> + day / date · <b>at</b> + time · <b>in</b> + the morning / March. The clock: 1 to 12 + <b>a.m. / p.m.</b>",
  "elenco": {
    "mia": {
      "nome": "Mia",
      "voz": "en-US-AvaNeural",
      "cor": "#86c9f0"
    },
    "leo": {
      "nome": "Leo",
      "voz": "en-US-GuyNeural",
      "cor": "#7fd1b9"
    }
  },
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "A client calls Mia to move a meeting. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A calendar on a laptop screen at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Hi, Mia. Sorry, I can’t meet on Thursday."
        },
        {
          "quem": "mia",
          "t": "No problem. Is Friday good for you?"
        },
        {
          "quem": "leo",
          "t": "On Friday I’m busy in the morning."
        },
        {
          "quem": "mia",
          "t": "What about Friday at 3 p.m.?"
        },
        {
          "quem": "leo",
          "t": "Hmm, 3 p.m. is difficult. Can we do Monday?"
        },
        {
          "quem": "mia",
          "t": "Sure. Monday at 10 a.m.?"
        },
        {
          "quem": "leo",
          "t": "Yes. Monday at 10 is perfect."
        },
        {
          "quem": "mia",
          "t": "A video call, or at your office?"
        },
        {
          "quem": "leo",
          "t": "A video call, please."
        },
        {
          "quem": "mia",
          "t": "Great. I can send the invite today."
        }
      ],
      "perguntas": [
        {
          "q": "Why can’t they meet on Friday morning?",
          "op": [
            "Leo is busy.",
            "Mia is busy.",
            "It’s a holiday."
          ],
          "a": 0,
          "por": "On Friday I’m busy in the morning."
        },
        {
          "q": "What is the new day and time?",
          "op": [
            "Monday at 10 a.m.",
            "Friday at 3 p.m.",
            "Thursday at 10 a.m."
          ],
          "a": 0,
          "por": "Monday at 10 is perfect."
        },
        {
          "q": "Is it a video call?",
          "op": [
            "Yes, it is.",
            "No, it’s at the office.",
            "No, it’s a phone call."
          ],
          "a": 0,
          "por": "A video call, please."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "Is Tuesday at 10 a.m. good for you?",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I’m busy in the morning.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Can we meet on Monday at 3 p.m.?",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "<b>on</b> + day / date · <b>at</b> + time · <b>in</b> the morning / in March · 1–12 + <b>a.m. / p.m.</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Can we meet on Monday morning?",
          "aceita": [],
          "d": "Dica: dia → <b>on</b> Monday; parte do dia junto do dia: Monday morning."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Can we meet in Monday?",
          "r": "Can we meet on Monday?",
          "aceita": [],
          "d": "Dica: dia da semana → <b>on</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I’m free at the morning.",
          "r": "I’m free in the morning.",
          "aceita": [
            "I am free in the morning."
          ],
          "d": "Dica: the morning → <b>in</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The call is on 15h.",
          "r": "The call is at 3 p.m.",
          "aceita": [
            "The call is at 3 pm.",
            "The call is at 3 PM.",
            "The call is at 3:00 p.m."
          ],
          "d": "Dica: hora → <b>at</b>; 15h = 3 p.m."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A calendar on a laptop screen at night",
      "pede": "Write a short message to move a meeting: say sorry and give two new options.",
      "ph": "Sorry, I can’t … on … Is … at … good for you? Or …?",
      "ex": "Sorry, I can’t meet on Thursday. Is Friday at 10 a.m. good for you? Or Monday at 3 p.m.?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What time do you start work?",
          "ph": "I start at … a.m.",
          "ex": "I start at 8 a.m."
        },
        {
          "q": "Do you prefer calls in the morning or in the afternoon?",
          "ph": "In the … because …",
          "ex": "In the morning, because I have energy!"
        }
      ]
    }
  }
};
