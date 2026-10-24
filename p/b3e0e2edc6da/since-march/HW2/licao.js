/* SINCE MARCH · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present perfect com for / since. A2: dicas em português só nas notas (d). Só live-* (já escuras); hospital fora de propósito. */
window.HW2 = {
  "id": "since-march",
  "titulo": "Since March",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b3e0e2edc6da/since-march/img/live-porta.webp",
  "alvo": "present perfect with for / since: have / has + past participle for something that started in the past and is still true; since + a point (March, 2020, Monday), for + a length (two months, six years); a finished date (in March) takes the simple past; never I live here since March, since three years, I know him since",
  "abrir": "How long have you lived where you live now?",
  "fecho": "<b>have / has + past participle</b>: it started before and it is still true. <b>Since</b> + a point: <i>since March</i>. <b>For</b> + a length: <i>for two months</i>. A finished date (<i>in March</i>) takes the past: <i>He left in March.</i> Never <i>I live here since March</i>.",
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
      "sub": "Mia and Leo talk about a quiet neighbor. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/b3e0e2edc6da/since-march/img/live-porta.webp",
      "leg": "A door in a dark hallway with mail on the floor",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, how long have you lived in this building?"
        },
        {
          "quem": "mia",
          "t": "I have lived here for six years. And you?"
        },
        {
          "quem": "leo",
          "t": "I have lived here since 2020."
        },
        {
          "quem": "mia",
          "t": "Do you know the man in apartment 4B?"
        },
        {
          "quem": "leo",
          "t": "Not well. He has been quiet since March. Nobody has seen him for three months."
        },
        {
          "quem": "mia",
          "t": "That's strange. There is a bag of mail at his door. It has been there for two weeks."
        },
        {
          "quem": "leo",
          "t": "And his rent has been late since May, I think."
        },
        {
          "quem": "mia",
          "t": "The landlady has had a key to his apartment since 2020."
        },
        {
          "quem": "leo",
          "t": "Let's call her. I have known her for years."
        }
      ],
      "perguntas": [
        {
          "q": "How long has Mia lived in the building?",
          "op": [
            "For six years",
            "Since 2020",
            "Since March"
          ],
          "a": 0,
          "por": "I have lived here for six years."
        },
        {
          "q": "Who has been quiet since March?",
          "op": [
            "The man in 4B",
            "Leo",
            "The landlady"
          ],
          "a": 0,
          "por": "He has been quiet since March."
        },
        {
          "q": "How long has the mail been at his door?",
          "op": [
            "For two weeks",
            "Since 2020",
            "For six years"
          ],
          "a": 0,
          "por": "It has been there for two weeks."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with for and since. Hear it, then say it.",
      "frases": [
        {
          "t": "The milk has been in the fridge for three weeks.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/b3e0e2edc6da/since-march/img/live-geladeira.webp"
        },
        {
          "t": "The mail has been at the door since Monday.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/b3e0e2edc6da/since-march/img/live-porta.webp"
        },
        {
          "t": "The blanket has been on the sofa since March.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/b3e0e2edc6da/since-march/img/live-sala.webp"
        }
      ]
    },
    "focus": {
      "sub": "have / has, since and for. Four quick ones.",
      "regra": "<b>have / has</b> + past participle · <b>since</b> + a point · <b>for</b> + a length · never <i>I live here since</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I have lived here since March.",
          "aceita": [],
          "d": "Dica: começou no passado e continua: <b>have lived</b> + since + um ponto no tempo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I live here since 2020.",
          "r": "I have lived here since 2020.",
          "aceita": [],
          "d": "Dica: começou antes e continua verdade: <b>have lived</b>, não 'live'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He has been here since three years.",
          "r": "He has been here for three years.",
          "aceita": [],
          "d": "Dica: três anos é um tamanho de tempo: <b>for</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She have worked there for ten years.",
          "r": "She has worked there for ten years.",
          "aceita": [],
          "d": "Dica: he, she, it usa <b>has</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b3e0e2edc6da/since-march/img/live-sala.webp",
      "leg": "A living room with a sofa and a blanket",
      "pede": "Look at the picture: a living room with a sofa and a blanket. Write 2 or 3 sentences about how long things have been in your home or in your life. Use <b>have / has</b> with <b>since</b> or <b>for</b>.",
      "ph": "I have lived in … for …",
      "ex": "I have lived in this flat for five years. My sofa has been here since 2022. I have known my neighbor for two years."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How long have you lived where you live now?",
          "ph": "I have lived … for … / since …",
          "ex": "I have lived here for twelve years."
        },
        {
          "q": "How long have you studied English?",
          "ph": "I have studied English …",
          "ex": "I have studied English for three years."
        }
      ]
    }
  }
};
