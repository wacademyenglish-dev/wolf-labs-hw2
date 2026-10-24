/* IN ABOUT TEN MINUTES · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: at / on / in for time. Falas originais, sem cena do filme. */
window.HW2 = {
  "id": "in-about-ten-minutes",
  "titulo": "In About Ten Minutes",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/8c485e438547/in-about-ten-minutes/img/live-relogio.webp",
  "alvo": "at / on / in for time: at + clock time and at night; on + day and date; in + month, year, morning / afternoon and in ten minutes (from now); never in Friday, on March, after ten minutes",
  "abrir": "What time do you usually have lunch?",
  "fecho": "<b>at</b> five · at night. <b>on</b> Friday · on March 5th. <b>in</b> March · in 2026 · in the morning. From now: <b>in ten minutes</b> (not <i>after</i>).",
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
  "rate": "-10%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo look at a clock in an office. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/8c485e438547/in-about-ten-minutes/img/live-relogio.webp",
      "leg": "An office clock, almost five",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, what time is it in the picture?"
        },
        {
          "quem": "mia",
          "t": "It's two in the afternoon, on Friday. The boss is asleep."
        },
        {
          "quem": "leo",
          "t": "When does the office close?"
        },
        {
          "quem": "mia",
          "t": "At five. So everybody wants to go home early."
        },
        {
          "quem": "leo",
          "t": "What's the plan?"
        },
        {
          "quem": "mia",
          "t": "They change the clock. In ten minutes, the boss will wake up, and the clock will say five."
        },
        {
          "quem": "leo",
          "t": "Will he believe it?"
        },
        {
          "quem": "mia",
          "t": "Yes. He will go home, and the team will leave early."
        },
        {
          "quem": "leo",
          "t": "And on Monday?"
        },
        {
          "quem": "mia",
          "t": "On Monday, at nine in the morning, he will ask a lot of questions."
        }
      ],
      "perguntas": [
        {
          "q": "When does the office close?",
          "op": [
            "At five",
            "On five",
            "In five"
          ],
          "a": 0,
          "por": "The office closes at five."
        },
        {
          "q": "What day is it?",
          "op": [
            "Friday",
            "Monday",
            "Sunday"
          ],
          "a": 0,
          "por": "It's Friday afternoon."
        },
        {
          "q": "When will the boss wake up?",
          "op": [
            "In ten minutes",
            "After ten",
            "On ten minutes"
          ],
          "a": 0,
          "por": "In ten minutes, the boss will wake up."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the lesson. Hear it, then say it.",
      "frases": [
        {
          "t": "The office closes at five on Friday.",
          "img": "https://wolf-labs.pages.dev/p/8c485e438547/in-about-ten-minutes/img/live-relogio.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The boss will wake up in ten minutes.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I wake up at seven in the morning.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "At, on or in? Four quick ones.",
      "regra": "<b>at</b> five · <b>on</b> Friday · <b>in</b> March / in the morning · <b>in</b> ten minutes (from now).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The meeting is at three on Tuesday.",
          "aceita": [],
          "d": "Dica: hora = <b>at</b>, dia da semana = <b>on</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The party is in Saturday.",
          "r": "The party is on Saturday.",
          "aceita": [],
          "d": "Dica: dia da semana usa <b>on</b>: on Saturday."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "My birthday is on March.",
          "r": "My birthday is in March.",
          "aceita": [],
          "d": "Dica: mês usa <b>in</b>: in March."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I will call you after ten minutes.",
          "r": "I will call you in ten minutes.",
          "aceita": [
            "I'll call you in ten minutes."
          ],
          "d": "Dica: daqui a dez minutos = <b>in</b> ten minutes."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/8c485e438547/in-about-ten-minutes/img/live-relogio.webp",
      "leg": "A clock on the wall",
      "pede": "Look at the picture: a clock. Write 2 or 3 sentences about your week. Use <b>at</b> + a time, <b>on</b> + a day and <b>in</b> + a part of the day.",
      "ph": "I wake up at … On … I … In the evening, …",
      "ex": "I wake up at seven. I play soccer on Saturday. In the evening, I rest."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What time do you usually have lunch?",
          "ph": "I usually have lunch at …",
          "ex": "I usually have lunch at noon."
        },
        {
          "q": "What will you do in an hour?",
          "ph": "In an hour, I will …",
          "ex": "In an hour, I will start dinner."
        }
      ]
    }
  }
};
