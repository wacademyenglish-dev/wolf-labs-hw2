/* HAVE YOU EVER? · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present perfect for experience: Have you ever + participle? Yes, I have / No, I haven't. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "have-you-ever",
  "titulo": "Have You Ever?",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/fc64d7004aeb/have-you-ever/img/live-passaporte.webp",
  "alvo": "present perfect for experience: Have you ever + participle? Yes, I have / No, I haven't; I have never + participle; the detail (when, where) goes to the simple past",
  "abrir": "Where has your life taken you?",
  "fecho": "Your whole life, no date: <b>Have you ever + participle</b> (<i>Have you ever been to Japan?</i>). A date or detail goes to the past: <i>I went in 2018.</i> <b>Never</b> goes between <i>have</i> and the participle.",
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
      "sub": "Mia and Leo look at a passport. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/fc64d7004aeb/have-you-ever/img/live-passaporte.webp",
      "leg": "A passport, a key and a lamp",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, is this your passport? So many stamps!"
        },
        {
          "quem": "mia",
          "t": "Yes! I love to travel."
        },
        {
          "quem": "leo",
          "t": "Have you ever been to Japan?"
        },
        {
          "quem": "mia",
          "t": "Yes, I have. I went there in 2018, in the spring."
        },
        {
          "quem": "leo",
          "t": "Wow. Have you ever seen snow?"
        },
        {
          "quem": "mia",
          "t": "No, I haven't. I've never seen snow. I'd love to."
        },
        {
          "quem": "leo",
          "t": "I've seen it twice. I saw it in Canada last winter."
        },
        {
          "quem": "mia",
          "t": "Lucky! Have you ever lost your passport?"
        },
        {
          "quem": "leo",
          "t": "Yes, once. I lost it at an airport, but a man found it."
        },
        {
          "quem": "mia",
          "t": "That's a great story!"
        }
      ],
      "perguntas": [
        {
          "q": "When did Mia go to Japan?",
          "op": [
            "In 2018",
            "Last winter",
            "Last year"
          ],
          "a": 0,
          "por": "I went there in 2018, in the spring."
        },
        {
          "q": "Has Mia ever seen snow?",
          "op": [
            "No, never",
            "Yes, once",
            "Yes, twice"
          ],
          "a": 0,
          "por": "No, I haven't. I've never seen snow."
        },
        {
          "q": "Where did Leo see snow?",
          "op": [
            "In Canada",
            "In Japan",
            "At an airport"
          ],
          "a": 0,
          "por": "I saw it in Canada last winter."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about experiences. Hear it, then say it.",
      "frases": [
        {
          "t": "Have you ever eaten sushi?",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/fc64d7004aeb/have-you-ever/img/live-mapa.webp"
        },
        {
          "t": "I have never seen snow.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/fc64d7004aeb/have-you-ever/img/live-janela.webp"
        },
        {
          "t": "I went to Japan in 2018.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/fc64d7004aeb/have-you-ever/img/live-casa.webp"
        }
      ]
    },
    "focus": {
      "sub": "Experience or detail? Four quick ones.",
      "regra": "<b>Have you ever + participle?</b> · <b>I have never + participle</b> · a date or detail goes to the past: <b>I went in 2018</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Have you ever lost your passport?",
          "aceita": [],
          "d": "Dica: <b>Have you ever</b> + particípio (<b>lost</b>)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the participle of eat.",
          "mostra": "Have you ever eated sushi?",
          "r": "Have you ever eaten sushi?",
          "aceita": [],
          "d": "Dica: <b>eat, ate, eaten</b>. Depois de <b>have</b>: o terceiro."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: a date goes to the past.",
          "mostra": "I have gone to Japan in 2018.",
          "r": "I went to Japan in 2018.",
          "aceita": [],
          "d": "Dica: com data (<b>in 2018</b>) o verbo vai para o passado: <b>went</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: when asks for a date.",
          "mostra": "When have you gone there?",
          "r": "When did you go there?",
          "aceita": [],
          "d": "Dica: <b>When</b> pede uma data: passado com <b>did</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/fc64d7004aeb/have-you-ever/img/live-mapa.webp",
      "leg": "A globe and a compass",
      "pede": "Look at the picture: a globe. Write 2 or 3 sentences: one thing you <b>have done</b>, one thing you <b>have never done</b>, and one detail in the <b>past</b>.",
      "ph": "I have …",
      "ex": "I have been to the beach many times. I have never seen snow. I went to Rio in 2019."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Have you ever lived in another city? Where? When?",
          "ph": "Yes, I have. I lived in …",
          "ex": "Yes, I have. I lived in Recife in 2015."
        },
        {
          "q": "What is one thing you have never done, but you want to do?",
          "ph": "I have never …",
          "ex": "I have never flown in a helicopter, but I want to."
        }
      ]
    }
  }
};
