/* WHILE I AM AWAY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present simple x present continuous. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "while-i-am-away",
  "titulo": "While I Am Away",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/06bcd11974d8/while-i-am-away/img/live-cozinha.webp",
  "alvo": "present simple (every day: I feed) versus present continuous (now: I am feeding = am / is / are + -ing); he / she / it + -s",
  "abrir": "What are you doing right now?",
  "fecho": "<b>Every day</b> = one piece: <i>I feed the horses.</i> <b>Now</b> = two pieces: <i>I am feeding the horses.</i> With he, she, it, every day: add <b>-s</b>: <i>She feeds the chickens.</i>",
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
      "sub": "Mia calls Leo at the farm. A new scene, about 30 seconds.",
      "img": "https://wolf-labs.pages.dev/p/06bcd11974d8/while-i-am-away/img/live-chuva.webp",
      "leg": "The farm, in the rain",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hi Leo! What are you doing now?"
        },
        {
          "quem": "leo",
          "t": "I'm feeding the horses. It's raining, so they are eating in the stable."
        },
        {
          "quem": "mia",
          "t": "Great! What do you do every morning?"
        },
        {
          "quem": "leo",
          "t": "Every morning I clean the stable. Then I feed the chickens."
        },
        {
          "quem": "mia",
          "t": "Where is the dog?"
        },
        {
          "quem": "leo",
          "t": "The dog is sleeping in the kitchen. He sleeps there every night."
        },
        {
          "quem": "mia",
          "t": "And you? Are you tired?"
        },
        {
          "quem": "leo",
          "t": "A little. I need more hay, and I'm closing the gate now."
        }
      ],
      "perguntas": [
        {
          "q": "What is Leo doing now?",
          "op": [
            "He is feeding the horses",
            "He is cleaning the stable",
            "He is sleeping"
          ],
          "a": 0,
          "por": "I'm feeding the horses."
        },
        {
          "q": "Where does the dog sleep every night?",
          "op": [
            "In the kitchen",
            "In the stable",
            "At the gate"
          ],
          "a": 0,
          "por": "He sleeps there every night."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the farm. Hear it, then say it.",
      "frases": [
        {
          "t": "The horses are eating hay now.",
          "img": "https://wolf-labs.pages.dev/p/06bcd11974d8/while-i-am-away/img/live-cavalos.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I clean the stable every morning.",
          "img": "https://wolf-labs.pages.dev/p/06bcd11974d8/while-i-am-away/img/live-estabulo.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It is raining, so I am drinking coffee.",
          "img": "https://wolf-labs.pages.dev/p/06bcd11974d8/while-i-am-away/img/live-cozinha.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Now or every day? Four quick ones.",
      "regra": "<b>every day</b> = one piece (I feed) · <b>now</b> = two pieces (I am feeding) · he / she / it + <b>-s</b> every day.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She is feeding the chickens now.",
          "aceita": [],
          "d": "Dica: agora = <b>is</b> + verbo com <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "He feeding the horses now.",
          "r": "He is feeding the horses now.",
          "aceita": [
            "He's feeding the horses now."
          ],
          "d": "Dica: agora tem dois pedaços: <b>is</b> + <b>feeding</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I am clean the stable every day.",
          "r": "I clean the stable every day.",
          "aceita": [
            "I clean the stable every day."
          ],
          "d": "Dica: todo dia é um pedaço só, sem <b>am</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She feed the chickens every morning.",
          "r": "She feeds the chickens every morning.",
          "aceita": [
            "She feeds the chickens every morning."
          ],
          "d": "Dica: com <b>she</b>, todo dia, o verbo leva <b>-s</b>: feeds."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/06bcd11974d8/while-i-am-away/img/live-chuva.webp",
      "leg": "A farm yard in the rain",
      "pede": "Look at the picture: a farm yard in the rain. Write 2 or 3 sentences: what is happening <b>now</b>, and what you do <b>every day</b> on a farm.",
      "ph": "It is raining now. I …",
      "ex": "It is raining now, so I am in the stable. Every morning I feed the horses."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you doing right now?",
          "ph": "I am …ing.",
          "ex": "I am sitting on my bed and drinking water."
        },
        {
          "q": "What do you do every evening?",
          "ph": "Every evening I …",
          "ex": "Every evening I cook dinner and watch TV."
        }
      ]
    }
  }
};
