/* DAILY STAND-UP · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: yesterday (passado) / today (I'm + -ing) / blocked by. A2: dicas em português só nas notas (d). Só imagens live-* escuras (lum < 50). */
window.HW2 = {
  "id": "daily-stand-up",
  "titulo": "Daily Stand-up",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2950deda7a7f/daily-stand-up/img/live-capa.webp",
  "alvo": "the stand-up update in three lines: yesterday + past simple (I fixed), today + present continuous (I'm working on), blockers (I'm blocked by, I need help with, didn't + plain verb)",
  "abrir": "What did you do yesterday? What are you doing today?",
  "fecho": "<b>Yesterday</b> = past: <i>I fixed the bug.</i> <b>Today</b> = <b>I'm</b> + -ing: <i>I'm working on the payment page.</i> A problem: <i>I'm blocked <b>by</b> the API. I need help <b>with</b> it.</i> With <b>didn't</b>, the verb is plain: <i>I didn't finish.</i>",
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
      "sub": "Mia and Leo at the morning stand-up. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/2950deda7a7f/daily-stand-up/img/live-capa.webp",
      "leg": "A laptop, a coffee and a clock",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, it's your turn for the stand-up. What did you do yesterday?"
        },
        {
          "quem": "mia",
          "t": "Yesterday I fixed a bug on the login page. I also had two meetings."
        },
        {
          "quem": "leo",
          "t": "Nice. What are you working on today?"
        },
        {
          "quem": "mia",
          "t": "Today I'm working on the payment page. I'm testing a new button."
        },
        {
          "quem": "leo",
          "t": "Any blockers?"
        },
        {
          "quem": "mia",
          "t": "Yes. I'm blocked by the API. It doesn't send the data. I need help with it."
        },
        {
          "quem": "leo",
          "t": "I can help you after lunch."
        },
        {
          "quem": "mia",
          "t": "Thank you! That's my update."
        }
      ],
      "perguntas": [
        {
          "q": "What did Mia fix yesterday?",
          "op": [
            "A bug on the login page",
            "The payment page",
            "The API"
          ],
          "a": 0,
          "por": "Yesterday I fixed a bug on the login page."
        },
        {
          "q": "What is Mia working on today?",
          "op": [
            "The payment page",
            "The login page",
            "A meeting"
          ],
          "a": 0,
          "por": "Today I'm working on the payment page."
        },
        {
          "q": "What is blocking Mia?",
          "op": [
            "The API",
            "The new button",
            "Her lunch"
          ],
          "a": 0,
          "por": "I'm blocked by the API."
        }
      ]
    },
    "out": {
      "sub": "Three lines for a stand-up. Hear it, then say it.",
      "frases": [
        {
          "t": "Yesterday I fixed the login bug.",
          "img": "https://wolf-labs.pages.dev/p/2950deda7a7f/daily-stand-up/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Today I'm working on the payment page.",
          "img": "https://wolf-labs.pages.dev/p/2950deda7a7f/daily-stand-up/img/live-b.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'm blocked by the API.",
          "img": "https://wolf-labs.pages.dev/p/2950deda7a7f/daily-stand-up/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Yesterday, today, blocker. Four quick ones.",
      "regra": "<b>yesterday</b> = past (fixed) · <b>today</b> = I'm + -ing · <b>blocked by</b> · <b>didn't</b> + plain verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Today I'm testing the new button.",
          "aceita": [],
          "d": "Dica: hoje = <b>I'm</b> + verbo com <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Yesterday I fix the login bug.",
          "r": "Yesterday I fixed the login bug.",
          "aceita": [],
          "d": "Dica: ontem é passado: <b>fixed</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm blocked for the API.",
          "r": "I'm blocked by the API.",
          "aceita": [],
          "d": "Dica: bloqueado por algo é <b>blocked by</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I didn't finished the test.",
          "r": "I didn't finish the test.",
          "aceita": [],
          "d": "Dica: depois de <b>didn't</b>, o verbo fica limpo: finish."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2950deda7a7f/daily-stand-up/img/live-capa.webp",
      "leg": "A laptop, a coffee and a small clock on a desk",
      "pede": "Look at the picture: a laptop, a coffee and a clock on a desk. Write your stand-up update in 3 sentences: yesterday, today and a blocker.",
      "ph": "Yesterday I … Today I'm …",
      "ex": "Yesterday I fixed a bug. Today I'm testing the new page. I'm blocked by the server."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you do yesterday at work or at school?",
          "ph": "Yesterday I …",
          "ex": "Yesterday I worked on a report and I had a meeting."
        },
        {
          "q": "What are you working on today? Do you need help with something?",
          "ph": "Today I'm … I need help with …",
          "ex": "Today I'm learning Git. I need help with my computer."
        }
      ]
    }
  }
};
