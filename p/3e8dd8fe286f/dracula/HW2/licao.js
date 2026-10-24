/* DRACULA · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present perfect continuous (for / since). B1: nenhum português. Linha de música: NENHUM verso aqui. Clima de festa à fantasia, sem sangue. Só live-* (escuras). */
window.HW2 = {
  "id": "dracula",
  "titulo": "Dracula",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/3e8dd8fe286f/dracula/img/live-capa.webp",
  "alvo": "present perfect continuous: have / has been + -ing for something that started before and still goes on; for + a piece of time, since + a starting point; How long have you been ...?",
  "abrir": "What have you been doing since you woke up today?",
  "fecho": "<b>have / has been + -ing</b>: it started before and it is still going. <i>I've been waiting for two hours.</i> <b>For</b> + a piece of time, <b>since</b> + the starting point: <i>since nine o'clock</i>. The question: <b>How long have you been</b> + -ing? Never <i>I'm waiting since</i>, never <i>How long you have been</i>.",
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
      "sub": "Mia and Leo get a costume party ready. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/3e8dd8fe286f/dracula/img/live-castelo.webp",
      "leg": "A castle on a party night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you look tired. How long have you been decorating the hall?"
        },
        {
          "quem": "mia",
          "t": "I've been working here since nine o'clock. I've been hanging paper bats all morning."
        },
        {
          "quem": "leo",
          "t": "Wow. And how long have you been waiting for the others?"
        },
        {
          "quem": "mia",
          "t": "For two hours. Ravi and Sam have been choosing their costumes, so they are late."
        },
        {
          "quem": "leo",
          "t": "I've been looking for my cape since last night. I can't find it anywhere."
        },
        {
          "quem": "mia",
          "t": "Have you been looking in the wardrobe?"
        },
        {
          "quem": "leo",
          "t": "Yes, I've been searching there for an hour."
        },
        {
          "quem": "mia",
          "t": "Wait. I've been sitting on something soft. Oh no, it's your cape!"
        },
        {
          "quem": "leo",
          "t": "Mia! How long have you been sitting on it?"
        },
        {
          "quem": "mia",
          "t": "Only since lunch. Sorry!"
        }
      ],
      "perguntas": [
        {
          "q": "How long has Mia been working in the hall?",
          "op": [
            "Since nine o'clock",
            "For ten minutes",
            "Since last night"
          ],
          "a": 0,
          "por": "I've been working here since nine o'clock."
        },
        {
          "q": "Why are Ravi and Sam late?",
          "op": [
            "They have been choosing their costumes",
            "They have been decorating",
            "They have been cooking"
          ],
          "a": 0,
          "por": "Ravi and Sam have been choosing their costumes, so they are late."
        },
        {
          "q": "Where was Leo's cape?",
          "op": [
            "Under Mia",
            "In the wardrobe",
            "In the kitchen"
          ],
          "a": 0,
          "por": "I've been sitting on something soft. Oh no, it's your cape!"
        }
      ]
    },
    "out": {
      "sub": "Three sentences about time. Hear it, then say it.",
      "frases": [
        {
          "t": "I've been decorating this hall since nine o'clock.",
          "img": "https://wolf-labs.pages.dev/p/3e8dd8fe286f/dracula/img/live-velas.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "How long have you been looking for your cape?",
          "img": "https://wolf-labs.pages.dev/p/3e8dd8fe286f/dracula/img/live-espelho.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "They have been choosing costumes for two hours.",
          "img": "https://wolf-labs.pages.dev/p/3e8dd8fe286f/dracula/img/live-ampulheta.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "have been + -ing, for and since. Four quick ones.",
      "regra": "<b>have / has been + -ing</b> · <b>for</b> + a piece of time · <b>since</b> + a starting point · <b>How long have you been ...?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "They have been planning the party since Monday.",
          "aceita": [],
          "d": "Hint: <b>have been</b> + verb-ing, then <b>since</b> + a starting point."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I am waiting since eight o'clock.",
          "r": "I have been waiting since eight o'clock.",
          "aceita": [
            "I've been waiting since eight o'clock."
          ],
          "d": "Hint: it started at eight and it is still going, so <b>have been waiting</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She has been cooking since two hours.",
          "r": "She has been cooking for two hours.",
          "aceita": [
            "She's been cooking for two hours."
          ],
          "d": "Hint: two hours is a piece of time, so <b>for</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the question correct.",
          "mostra": "How long you have been working here?",
          "r": "How long have you been working here?",
          "aceita": [],
          "d": "Hint: in a question, <b>have</b> comes before <b>you</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/3e8dd8fe286f/dracula/img/live-ampulheta.webp",
      "leg": "An hourglass next to a candle",
      "pede": "Look at the picture: an hourglass next to a candle. Write 2 or 3 sentences about something you have been doing for a long time, or lately. Use <b>have been + -ing</b>, <b>for</b> and <b>since</b>.",
      "ph": "I've been … for / since …",
      "ex": "I've been learning English for two years. I've been studying every night since January. My brother has been helping me."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What have you been doing today? Since when?",
          "ph": "I've been … since …",
          "ex": "I've been working at my computer since eight o'clock this morning."
        },
        {
          "q": "How long have you been learning English?",
          "ph": "I've been learning English for / since …",
          "ex": "I've been learning English for three years, and I've been practicing every day."
        }
      ]
    }
  }
};
