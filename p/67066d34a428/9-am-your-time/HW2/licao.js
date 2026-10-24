/* 9 A.M. YOUR TIME · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: marcar reunião em outro fuso: at / on / in com tempo + Does ... work for you? / What time is it there? A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "9-am-your-time",
  "titulo": "9 a.m. Your Time",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/67066d34a428/9-am-your-time/img/live-capa.webp",
  "alvo": "booking a meeting across time zones: at + clock time, on + day or date, in + part of the day or month; polite questions: Does Tuesday work for you? What time is it there?; never in Monday, never at the morning, never Is good for you Tuesday?",
  "abrir": "Do you know someone who lives in another country? What time is it there now?",
  "fecho": "<b>At</b> the clock (<i>at nine</i>), <b>on</b> days and dates (<i>on Tuesday</i>), <b>in</b> the morning, month or year (<i>in the morning</i>), but <b>at</b> night. To ask: <b>Does Tuesday work for you?</b> Never <i>Is good for you Tuesday?</i>",
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
      "sub": "Mia is in Brazil. Leo is in Sydney. They need a time. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/67066d34a428/9-am-your-time/img/live-capa.webp",
      "leg": "Three clocks, three cities",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hi Leo! It's nine in the morning here. What time is it there?"
        },
        {
          "quem": "leo",
          "t": "It's eleven at night. I'm almost asleep!"
        },
        {
          "quem": "mia",
          "t": "Sorry! We need one hour for the new design. Does Tuesday work for you?"
        },
        {
          "quem": "leo",
          "t": "Tuesday is fine. But I work better in the morning."
        },
        {
          "quem": "mia",
          "t": "OK. How about Tuesday at seven in the evening, my time?"
        },
        {
          "quem": "leo",
          "t": "Seven in the evening for you is nine in the morning for me, on Wednesday."
        },
        {
          "quem": "mia",
          "t": "Right, Wednesday for you. Does that work?"
        },
        {
          "quem": "leo",
          "t": "Yes, perfect. I'll send the invite."
        },
        {
          "quem": "mia",
          "t": "Great. See you on Tuesday. Or Wednesday!"
        }
      ],
      "perguntas": [
        {
          "q": "What time is it in Sydney in the first lines?",
          "op": [
            "Eleven at night",
            "Nine in the morning",
            "Seven in the evening"
          ],
          "a": 0,
          "por": "It's eleven at night. I'm almost asleep!"
        },
        {
          "q": "When does Leo work better?",
          "op": [
            "In the morning",
            "At night",
            "On the weekend"
          ],
          "a": 0,
          "por": "I work better in the morning."
        },
        {
          "q": "The meeting is Tuesday evening for Mia. What day is it for Leo?",
          "op": [
            "Wednesday",
            "Tuesday",
            "Monday"
          ],
          "a": 0,
          "por": "Seven in the evening for you is nine in the morning for me, on Wednesday."
        }
      ]
    },
    "out": {
      "sub": "Three sentences to book a meeting. Hear it, then say it.",
      "frases": [
        {
          "t": "What time is it there?",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/67066d34a428/9-am-your-time/img/live-capa.webp"
        },
        {
          "t": "Does Tuesday at seven work for you?",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/67066d34a428/9-am-your-time/img/live-b.webp"
        },
        {
          "t": "I work better in the morning.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/67066d34a428/9-am-your-time/img/live-capa.webp"
        }
      ]
    },
    "focus": {
      "sub": "At, on, in. Four quick ones.",
      "regra": "<b>at</b> + clock · <b>on</b> + day · <b>in</b> + the morning · <b>Does</b> Tuesday <b>work</b> for you?",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Does Tuesday work for you?",
          "aceita": [],
          "d": "Dica: pergunta educada: <b>Does</b> + dia + <b>work for you</b>?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Let's meet in Monday.",
          "r": "Let's meet on Monday.",
          "aceita": [
            "Let us meet on Monday."
          ],
          "d": "Dica: dias da semana usam <b>on</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I work better at the morning.",
          "r": "I work better in the morning.",
          "aceita": [],
          "d": "Dica: de manhã = <b>in the morning</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the question is wrong.",
          "mostra": "Is good for you Tuesday?",
          "r": "Does Tuesday work for you?",
          "aceita": [
            "Does Tuesday work for you"
          ],
          "d": "Dica: use <b>Does</b> + dia + <b>work for you</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/67066d34a428/9-am-your-time/img/live-capa.webp",
      "leg": "Three clocks on a dark wall",
      "pede": "Look at the picture: three clocks, three cities. Write 2 or 3 sentences to invite a colleague in another country: the day with <b>on</b>, the time with <b>at</b> or <b>in</b>, and <b>Does … work for you?</b>",
      "ph": "Hi! Does …",
      "ex": "Hi Ruby! Does Tuesday at seven in the evening work for you? That's Wednesday morning for you."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What time do you wake up on Sundays?",
          "ph": "On Sundays I wake up at …",
          "ex": "On Sundays I wake up at nine."
        },
        {
          "q": "What day and time is good for a call with you?",
          "ph": "On … in the …",
          "ex": "On Thursday, in the afternoon."
        }
      ]
    }
  }
};
