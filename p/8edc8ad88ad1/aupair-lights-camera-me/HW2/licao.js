/* LIGHTS, CAMERA, ME! · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Curso Au Pair (A2+). Alvo: present perfect de experiência x past simple. A2: dicas em português só nas notas (d). Pessoa fictícia, nenhum dado real. */
window.HW2 = {
  "id": "aupair-lights-camera-me",
  "titulo": "Lights, Camera, Me!",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/8edc8ad88ad1/aupair-lights-camera-me/img/live-capa.webp",
  "alvo": "the application video: present perfect for experience (I have babysat, Have you ever ...?) versus past simple with a time (I traveled in 2023); have + participle, never have + base verb",
  "abrir": "What do you want a family to see in your video?",
  "fecho": "Life experience, no time: <b>have + participle</b> (<i>I have babysat.</i>). With a time (last year, in 2023): <b>past simple</b> (<i>I traveled in 2023.</i>). Question: <b>Have you ever ...?</b> Irregular: teach, taught.",
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
      "sub": "Mia and Leo, a short scene of about 40 seconds.",
      "leg": "",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, your application video starts in one minute. Are you ready?"
        },
        {
          "quem": "mia",
          "t": "Almost. Hi! I'm Mia, and I would like to be your au pair."
        },
        {
          "quem": "leo",
          "t": "Good start. Now say your experience. Have you ever taken care of a baby?"
        },
        {
          "quem": "mia",
          "t": "Yes, I have. I have babysat my baby cousin many times."
        },
        {
          "quem": "leo",
          "t": "When was the last time?"
        },
        {
          "quem": "mia",
          "t": "I babysat him last Saturday."
        },
        {
          "quem": "leo",
          "t": "Have you ever traveled alone?"
        },
        {
          "quem": "mia",
          "t": "Yes, I have. I traveled to Chile in 2023."
        },
        {
          "quem": "leo",
          "t": "Great. Smile, and finish with: I look forward to hearing from you."
        }
      ],
      "perguntas": [
        {
          "q": "What has Mia done many times?",
          "op": [
            "Babysat her baby cousin",
            "Traveled to Chile",
            "Taught English"
          ],
          "a": 0,
          "por": "I have babysat my baby cousin many times."
        },
        {
          "q": "When did she babysit him last?",
          "op": [
            "Last Saturday",
            "In 2023",
            "Yesterday"
          ],
          "a": 0,
          "por": "I babysat him last Saturday."
        },
        {
          "q": "Where did Mia travel alone?",
          "op": [
            "To Chile",
            "To the USA",
            "To Spain"
          ],
          "a": 0,
          "por": "I traveled to Chile in 2023."
        }
      ]
    },
    "out": {
      "sub": "Three lines for your video. Hear it, then say it.",
      "frases": [
        {
          "t": "I have babysat my cousins many times.",
          "img": "https://wolf-labs.pages.dev/p/8edc8ad88ad1/aupair-lights-camera-me/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I traveled to Chile in 2023.",
          "img": "https://wolf-labs.pages.dev/p/8edc8ad88ad1/aupair-lights-camera-me/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Have you ever worked with children?",
          "img": "https://wolf-labs.pages.dev/p/8edc8ad88ad1/aupair-lights-camera-me/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "have + participle or past simple? Four quick ones.",
      "regra": "no time: <b>have + participle</b> · with a time: <b>past simple</b> · <b>Have you ever ...?</b> · never <b>have</b> + base verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Have you ever taken care of a baby?",
          "aceita": [],
          "d": "Dica: <b>Have you ever</b> + participle: taken."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I have babysit my cousin.",
          "r": "I have babysat my cousin.",
          "aceita": [],
          "d": "Dica: depois de <b>have</b>, o participle: babysat."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I have teached English to kids.",
          "r": "I have taught English to kids.",
          "aceita": [],
          "d": "Dica: teach é irregular: <b>taught</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the time needs the past simple.",
          "mostra": "I have traveled to Chile in 2022.",
          "r": "I traveled to Chile in 2022.",
          "aceita": [
            "I went to Chile in 2022."
          ],
          "d": "Dica: com um ano (in 2022), use o <b>past simple</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Look at the picture: a phone on a tripod. Write 2 or 3 sentences for your video: one experience with <b>have + participle</b> and one moment with a time, in the past simple.",
      "ph": "I have … I … last year.",
      "ex": "I have worked with children. I babysat my neighbor's daughter last summer.",
      "img": "https://wolf-labs.pages.dev/p/8edc8ad88ad1/aupair-lights-camera-me/img/live-capa.webp",
      "leg": "A phone on a tripod, ready to record"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Have you ever taken care of a child? What did you do?",
          "ph": "Yes, I have. I …",
          "ex": "Yes, I have. I helped my cousin with homework and I played with him."
        },
        {
          "q": "Have you ever traveled alone? When?",
          "ph": "I have … / I traveled … in …",
          "ex": "No, I haven't, but I traveled with my class to the beach in 2022."
        }
      ]
    }
  }
};
