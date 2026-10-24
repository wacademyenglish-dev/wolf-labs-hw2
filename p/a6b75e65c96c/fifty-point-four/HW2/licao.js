/* FIFTY POINT FOUR · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present perfect x past simple. B1: nenhum português. */
window.HW2 = {
  "id": "fifty-point-four",
  "titulo": "Fifty Point Four",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/a6b75e65c96c/fifty-point-four/img/live-feed.webp",
  "alvo": "present perfect (no finished time: Have you ever deleted an app?) versus past simple (the time is said: I deleted it last year); never I have seen it yesterday, When have you started, Have you ever went",
  "abrir": "Have you ever deleted an app from your phone? When did you do it?",
  "fecho": "<b>Have you ever ...?</b> asks about life, no finished time: the present perfect. When the time is said (<i>yesterday, last year, in 2019</i>), use the <b>past simple</b>: <i>I deleted it last year.</i> Never <i>I have seen it yesterday</i>. Never <i>When have you started?</i>: it is <b>When did you start?</b>",
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
      "sub": "Mia and Leo talk about their phones. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/a6b75e65c96c/fifty-point-four/img/live-espera.webp",
      "leg": "A waiting room, quiet and blue",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, have you ever deleted an app from your phone?"
        },
        {
          "quem": "leo",
          "t": "Yes, I have. I deleted a game last year."
        },
        {
          "quem": "mia",
          "t": "Why did you delete it?"
        },
        {
          "quem": "leo",
          "t": "I played it for hours every night."
        },
        {
          "quem": "mia",
          "t": "Have you ever deleted a social app?"
        },
        {
          "quem": "leo",
          "t": "Not for long. I've tried twice, but I installed it again the next day."
        },
        {
          "quem": "mia",
          "t": "When did you try the last time?"
        },
        {
          "quem": "leo",
          "t": "Last month. I deleted it on Monday, and I installed it on Tuesday."
        },
        {
          "quem": "mia",
          "t": "Have you noticed something strange about your feed?"
        },
        {
          "quem": "leo",
          "t": "I've seen a lot of posts today, and they all agree with me. Interesting."
        },
        {
          "quem": "mia",
          "t": "That's the point. Have you ever looked for a different opinion?"
        },
        {
          "quem": "leo",
          "t": "No, never. I think I should."
        }
      ],
      "perguntas": [
        {
          "q": "When did Leo delete the game?",
          "op": [
            "Last year",
            "Last month",
            "Yesterday"
          ],
          "a": 0,
          "por": "I deleted a game last year."
        },
        {
          "q": "How long did Leo keep the social app deleted?",
          "op": [
            "One day",
            "One year",
            "One month"
          ],
          "a": 0,
          "por": "I deleted it on Monday, and I installed it on Tuesday."
        },
        {
          "q": "What is strange about Leo's feed today?",
          "op": [
            "All the posts agree with him",
            "There are no posts",
            "It shows old games"
          ],
          "a": 0,
          "por": "They all agree with me."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about your phone. Hear it, then say it.",
      "frases": [
        {
          "t": "Have you ever deleted an app from your phone?",
          "img": "https://wolf-labs.pages.dev/p/a6b75e65c96c/fifty-point-four/img/live-feed.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I deleted a game last year.",
          "img": "https://wolf-labs.pages.dev/p/a6b75e65c96c/fifty-point-four/img/live-espera.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I've seen a lot of posts today.",
          "img": "https://wolf-labs.pages.dev/p/a6b75e65c96c/fifty-point-four/img/live-tela.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Life or finished time? Four quick ones.",
      "regra": "<b>Have you ever ...?</b> = present perfect · a finished time (<i>last year</i>) = <b>past simple</b> · <b>When did you ...?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Have you ever deleted an app from your phone?",
          "aceita": [],
          "d": "Hint: <b>Have you ever</b> + third form (deleted)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I have seen that film yesterday.",
          "r": "I saw that film yesterday.",
          "aceita": [
            "I watched that film yesterday."
          ],
          "d": "Hint: <i>yesterday</i> is a finished time, so use the past simple."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the question correct.",
          "mostra": "When have you started this job?",
          "r": "When did you start this job?",
          "aceita": [],
          "d": "Hint: with <b>when</b>, use <b>did</b> + the plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Have you ever went to London?",
          "r": "Have you ever gone to London?",
          "aceita": [
            "Have you ever been to London?"
          ],
          "d": "Hint: after <b>have</b>, use the third form: gone (or been)."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/a6b75e65c96c/fifty-point-four/img/live-feed.webp",
      "leg": "A phone glowing in the dark",
      "pede": "Look at the picture: a phone glowing in the dark. Write 2 or 3 sentences about your phone. Use <b>have / haven't</b> for your life and the <b>past simple</b> with a time.",
      "ph": "I have never … but I deleted … last …",
      "ex": "I have never deleted my music app. I deleted a game last year. I haven't opened it since."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Have you ever deleted an app? When did you do it?",
          "ph": "I have deleted … I did it …",
          "ex": "I have deleted a few apps. I deleted a game last summer."
        },
        {
          "q": "What have you seen on your phone today? When did you see it?",
          "ph": "I've seen … I saw it …",
          "ex": "I've seen a funny video today. I saw it at lunch."
        }
      ]
    }
  }
};
