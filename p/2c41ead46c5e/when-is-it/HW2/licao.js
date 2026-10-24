/* WHEN IS IT? · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: at/on/in para tempo. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "when-is-it",
  "titulo": "When Is It?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2c41ead46c5e/when-is-it/img/live-abertura.webp",
  "alvo": "at / on / in for time: AT the clock (at 3 PM, at noon), ON the day (on Monday, on Friday morning), IN the month, year, part of the day (in March, in the morning)",
  "abrir": "What do you do on Monday morning?",
  "fecho": "Three small words for time: <b>at</b> the clock (<i>at 3 PM</i>), <b>on</b> the day (<i>on Monday</i>), <b>in</b> the month or the morning (<i>in March, in the morning</i>).",
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
      "sub": "Mia and Leo plan the week at the office. A new scene, about 30 seconds.",
      "img": "https://wolf-labs.pages.dev/p/2c41ead46c5e/when-is-it/img/live-bg-board.webp",
      "leg": "Monday, the board",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the client meeting is on Monday at 3 PM."
        },
        {
          "quem": "leo",
          "t": "OK. And the report? When is it due?"
        },
        {
          "quem": "mia",
          "t": "The report is due on Thursday at 5 PM."
        },
        {
          "quem": "leo",
          "t": "What about the delivery?"
        },
        {
          "quem": "mia",
          "t": "It arrives on Friday morning, at nine."
        },
        {
          "quem": "leo",
          "t": "And the audit? Is it this week?"
        },
        {
          "quem": "mia",
          "t": "No, the audit is in March."
        },
        {
          "quem": "leo",
          "t": "Good. Our trip to London is in June."
        },
        {
          "quem": "mia",
          "t": "Great. Let's have a team lunch on Wednesday at noon."
        },
        {
          "quem": "leo",
          "t": "Perfect. I write it on the board."
        }
      ],
      "perguntas": [
        {
          "q": "When is the client meeting?",
          "op": [
            "On Monday at 3 PM",
            "On Thursday at 5 PM",
            "In March"
          ],
          "a": 0,
          "por": "The client meeting is on Monday at 3 PM."
        },
        {
          "q": "When does the delivery arrive?",
          "op": [
            "On Friday morning",
            "In June",
            "On Thursday"
          ],
          "a": 0,
          "por": "It arrives on Friday morning, at nine."
        },
        {
          "q": "When is the audit?",
          "op": [
            "In March",
            "On Monday",
            "At noon"
          ],
          "a": 0,
          "por": "No, the audit is in March."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the office. Hear it, then say it.",
      "frases": [
        {
          "t": "The meeting is on Monday at three.",
          "img": "https://wolf-labs.pages.dev/p/2c41ead46c5e/when-is-it/img/live-bg-board.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The audit is in March, and the trip is in June.",
          "img": "https://wolf-labs.pages.dev/p/2c41ead46c5e/when-is-it/img/live-abertura.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Lunch is on Wednesday at noon.",
          "img": "https://wolf-labs.pages.dev/p/2c41ead46c5e/when-is-it/img/live-bg-board.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "At, on or in? Four quick ones.",
      "regra": "<b>at</b> the clock · <b>on</b> the day · <b>in</b> the month, the year, the morning.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The report is due on Thursday at five.",
          "aceita": [],
          "d": "Dica: <b>on</b> + o dia, <b>at</b> + a hora."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one small word is wrong.",
          "mostra": "The meeting is in Monday.",
          "r": "The meeting is on Monday.",
          "aceita": [
            "The meeting is on Monday"
          ],
          "d": "Dica: dia da semana = <b>on</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one small word is wrong.",
          "mostra": "The delivery is on 9 AM.",
          "r": "The delivery is at 9 AM.",
          "aceita": [
            "The delivery is at nine.",
            "The delivery is at 9.",
            "The delivery is at nine AM."
          ],
          "d": "Dica: hora do relógio = <b>at</b>."
        },
        {
          "tipo": "escreve",
          "t": "Write it with the right small word.",
          "mostra": "the audit · March",
          "r": "The audit is in March.",
          "aceita": [
            "The audit is in March"
          ],
          "d": "Dica: mês = <b>in</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2c41ead46c5e/when-is-it/img/live-bg-board.webp",
      "leg": "The board for the week",
      "pede": "Look at the picture: an office board for the week. Write 2 or 3 sentences about your own week. Use <b>at, on</b> or <b>in</b>.",
      "ph": "On Monday I …",
      "ex": "On Monday I have a class at 7 PM. I work in the morning. My birthday is in July."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "When is your birthday?",
          "ph": "My birthday is in … / on …",
          "ex": "My birthday is in July, on July 14th."
        },
        {
          "q": "What time do you start work or school?",
          "ph": "I start at …",
          "ex": "I start at eight in the morning."
        }
      ]
    }
  }
};
