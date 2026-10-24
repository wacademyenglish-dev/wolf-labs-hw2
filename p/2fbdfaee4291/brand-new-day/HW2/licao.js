/* BRAND NEW DAY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: used to / present perfect (for, since, ever). Filme: falas originais, sem violência. B1: nenhum português. */
window.HW2 = {
  "id": "brand-new-day",
  "titulo": "Brand New Day",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2fbdfaee4291/brand-new-day/img/live-capa.webp",
  "alvo": "used to (a past habit or state that is over) versus the present perfect with for and since (something that started and continues); ever in questions (Have you ever been ...?); finished time (ago, last week) takes the simple past",
  "abrir": "What did you use to do that you don't do anymore?",
  "fecho": "<b>used to</b> + verb = a past habit that is over: <i>I used to live in Queens.</i> <b>Present perfect + for / since</b> = it started and it continues: <i>I've lived here for three weeks.</i> <i>Have you ever been ...?</i> asks about your life up to now. With <b>ago</b> or <b>last week</b>, use the simple past.",
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
      "sub": "Mia visits Leo in his new flat. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/2fbdfaee4291/brand-new-day/img/live-corredor.webp",
      "leg": "The hallway outside the new flat",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I haven't seen you since the summer. Is this really your new place?"
        },
        {
          "quem": "leo",
          "t": "It is. I've lived here for three weeks. I used to live in Queens, near my cousins."
        },
        {
          "quem": "mia",
          "t": "Do you miss it? You used to have a garden, didn't you?"
        },
        {
          "quem": "leo",
          "t": "I did. I used to water the plants every morning. Now I just have a window."
        },
        {
          "quem": "mia",
          "t": "Have you ever met your neighbors here?"
        },
        {
          "quem": "leo",
          "t": "Only one. She's lived across the hall since 2019, and she already knows everything about the building."
        },
        {
          "quem": "mia",
          "t": "That's useful. Have you been up on the roof yet?"
        },
        {
          "quem": "leo",
          "t": "Not yet. I've wanted to go since the first night, but I've been busy."
        },
        {
          "quem": "mia",
          "t": "Let's go now. The city looks great at night."
        }
      ],
      "perguntas": [
        {
          "q": "How long has Leo lived in the new flat?",
          "op": [
            "For three weeks",
            "Since the summer",
            "For three years"
          ],
          "a": 0,
          "por": "I've lived here for three weeks."
        },
        {
          "q": "What did Leo use to do every morning?",
          "op": [
            "Water the plants",
            "Visit his cousins",
            "Go to the roof"
          ],
          "a": 0,
          "por": "I used to water the plants every morning."
        },
        {
          "q": "Why hasn't Leo been on the roof yet?",
          "op": [
            "He has been busy",
            "His neighbor said no",
            "He doesn't like the city"
          ],
          "a": 0,
          "por": "I've wanted to go since the first night, but I've been busy."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a new start. Hear it, then say it.",
      "frases": [
        {
          "t": "I've lived in this building for three weeks.",
          "img": "https://wolf-labs.pages.dev/p/2fbdfaee4291/brand-new-day/img/live-corredor.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I used to live in Queens, near my cousins.",
          "img": "https://wolf-labs.pages.dev/p/2fbdfaee4291/brand-new-day/img/live-queens.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Have you ever been up on the roof at night?",
          "img": "https://wolf-labs.pages.dev/p/2fbdfaee4291/brand-new-day/img/live-telhado.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "used to, for, since, ago. Four quick ones.",
      "regra": "<b>used to</b> + verb = it is over · <b>have + -ed</b> + <b>for / since</b> = it continues · <b>ago</b> = simple past.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I used to live near the park.",
          "aceita": [],
          "d": "Hint: <b>used to</b> + the plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I live in this building since June.",
          "r": "I have lived in this building since June.",
          "aceita": [
            "I've lived in this building since June.",
            "I have been living in this building since June.",
            "I've been living in this building since June."
          ],
          "d": "Hint: it started in June and it continues, so the present perfect."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "She has moved here two weeks ago.",
          "r": "She moved here two weeks ago.",
          "aceita": [],
          "d": "Hint: <b>ago</b> is a finished time, so the simple past."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I use to wake up very late.",
          "r": "I used to wake up very late.",
          "aceita": [],
          "d": "Hint: the habit is in the past, so <b>used to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2fbdfaee4291/brand-new-day/img/live-telhado.webp",
      "leg": "A rooftop over the city",
      "pede": "Look at the picture: a rooftop over the city at night. Write 2 or 3 sentences about a change in your life. What did you <b>use to</b> do? What <b>have you done</b> since then, or for how long?",
      "ph": "I used to … but I have … since …",
      "ex": "I used to live with my parents, but I have lived alone since March. I have never cooked so much in my life."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you use to do as a child that you don't do now?",
          "ph": "I used to … but now I …",
          "ex": "I used to climb trees every afternoon, but now I mostly sit at a desk."
        },
        {
          "q": "What have you done for a long time? How long?",
          "ph": "I have … for / since …",
          "ex": "I have played the guitar since I was twelve."
        }
      ]
    }
  }
};
