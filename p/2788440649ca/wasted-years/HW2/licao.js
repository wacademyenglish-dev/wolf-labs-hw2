/* WASTED YEARS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present perfect continuous (since / for). Linha de música: NENHUM verso aqui; o listening é diálogo original. B1: nenhum português. */
window.HW2 = {
  "id": "wasted-years",
  "titulo": "Wasted Years",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2788440649ca/wasted-years/img/live-palco.webp",
  "alvo": "present perfect continuous: have / has been + -ing for something that started and continues; since + a point in time, for + a length of time; How long have you been ...?",
  "abrir": "What have you been doing today?",
  "fecho": "<b>have / has been + -ing</b> for something that started and is still going: <i>We've been driving all day.</i> <b>Since</b> + the starting point (<i>since six</i>); <b>for</b> + the length (<i>for nine hours</i>). The question: <i>How long have you been waiting?</i>",
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
      "sub": "Mia and Leo on a long drive with the crew. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/2788440649ca/wasted-years/img/live-onibus.webp",
      "leg": "A tour bus at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, how long have we been driving? I've lost track of time."
        },
        {
          "quem": "mia",
          "t": "We've been driving since six this morning. That's almost nine hours."
        },
        {
          "quem": "leo",
          "t": "Nine hours! And the crew has been sleeping in the back for most of the trip."
        },
        {
          "quem": "mia",
          "t": "Not all of them. Dan has been writing since breakfast."
        },
        {
          "quem": "leo",
          "t": "How long has he been working on that new project?"
        },
        {
          "quem": "mia",
          "t": "For about two weeks, he says. He's been talking about it since we left Lisbon."
        },
        {
          "quem": "leo",
          "t": "Honestly, I've been dreaming about a real bed for days."
        },
        {
          "quem": "mia",
          "t": "Me too. I've been calling the hotel since lunch, but nobody answers."
        },
        {
          "quem": "leo",
          "t": "Maybe they've been waiting for us all afternoon."
        },
        {
          "quem": "mia",
          "t": "Let's hope so. Hold on, my phone is ringing now."
        }
      ],
      "perguntas": [
        {
          "q": "How long have they been driving?",
          "op": [
            "Since six this morning",
            "For two weeks",
            "Since lunch"
          ],
          "a": 0,
          "por": "We've been driving since six this morning."
        },
        {
          "q": "What has Dan been doing since breakfast?",
          "op": [
            "Writing",
            "Sleeping",
            "Driving"
          ],
          "a": 0,
          "por": "Dan has been writing since breakfast."
        },
        {
          "q": "What has Mia been doing since lunch?",
          "op": [
            "Calling the hotel",
            "Looking for a bed",
            "Talking to Dan"
          ],
          "a": 0,
          "por": "I've been calling the hotel since lunch."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a long trip. Hear it, then say it.",
      "frases": [
        {
          "t": "We've been driving for nine hours without a break.",
          "img": "https://wolf-labs.pages.dev/p/2788440649ca/wasted-years/img/live-onibus.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The band has been playing in this city since Friday.",
          "img": "https://wolf-labs.pages.dev/p/2788440649ca/wasted-years/img/live-palco.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "How long have you been carrying these heavy cases?",
          "img": "https://wolf-labs.pages.dev/p/2788440649ca/wasted-years/img/live-bastidor.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "have been + -ing, for and since. Four quick ones.",
      "regra": "<b>have / has been + -ing</b> · <b>since</b> + a point (since Monday) · <b>for</b> + a length (for two weeks) · <b>How long have you been ...?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The crew has been loading the truck since noon.",
          "aceita": [],
          "d": "Hint: <b>has been</b> + verb-ing, then <b>since</b> + a point in time."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "She is living in Lisbon since March.",
          "r": "She has been living in Lisbon since March.",
          "aceita": [
            "She's been living in Lisbon since March.",
            "She has lived in Lisbon since March."
          ],
          "d": "Hint: it started in March and it is still going, so <b>has been living</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I have been studying English since three years.",
          "r": "I have been studying English for three years.",
          "aceita": [
            "I've been studying English for three years.",
            "I have studied English for three years."
          ],
          "d": "Hint: three years is a length of time, so <b>for</b>. <i>Since</i> needs a starting point."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "How long time have you been waiting here?",
          "r": "How long have you been waiting here?",
          "aceita": [
            "How long have you waited here?"
          ],
          "d": "Hint: it is <b>How long</b>, without <i>time</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2788440649ca/wasted-years/img/live-hotel.webp",
      "leg": "A hotel room after a long day",
      "pede": "Look at the picture: a hotel room after a long day on the road. Write 2 or 3 sentences: how long you have been traveling, and what you have been waiting for. Use <b>have been + -ing</b>, <b>for</b> and <b>since</b>.",
      "ph": "I've been traveling since …",
      "ex": "I've been traveling for ten days. I've been waiting for this bed since morning, because I've been driving since five."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What have you been doing today? Since when?",
          "ph": "I've been … since …",
          "ex": "I've been working on my computer since eight o'clock."
        },
        {
          "q": "How long have you been studying English?",
          "ph": "I've been studying English for / since …",
          "ex": "I've been studying English for two years."
        }
      ]
    }
  }
};
