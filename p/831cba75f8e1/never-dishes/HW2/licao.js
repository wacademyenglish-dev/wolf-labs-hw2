/* YOU NEVER DO THE DISHES · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: advérbios de frequência (always ... never) e a posição. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "never-dishes",
  "titulo": "You Never Do the Dishes",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/831cba75f8e1/never-dishes/img/live-cozinha.webp",
  "alvo": "adverbs of frequency: always, usually, often, sometimes, rarely, never; before a normal verb (she always makes), after am / is / are (he is never late); never and rarely are already negative",
  "abrir": "How often do you cook at home?",
  "fecho": "Count first: seven days = <b>always</b>, zero = <b>never</b>, and in the middle <b>usually, often, sometimes, rarely</b>. Before a normal verb: <i>she always makes</i>. After am, is, are: <i>he is never late</i>. <b>Never</b> is already negative: <i>I never eat meat</i>.",
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
      "sub": "Mia and Leo talk about chores at home. A new scene, about 35 seconds.",
      "img": "https://wolf-labs.pages.dev/p/831cba75f8e1/never-dishes/img/live-mesa.webp",
      "leg": "A table with two cups",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, who makes dinner in your house?"
        },
        {
          "quem": "mia",
          "t": "I usually make dinner. My brother often helps."
        },
        {
          "quem": "leo",
          "t": "Does he wash the dishes?"
        },
        {
          "quem": "mia",
          "t": "No, he never washes them. But he always takes the trash out."
        },
        {
          "quem": "leo",
          "t": "Is your kitchen clean?"
        },
        {
          "quem": "mia",
          "t": "It is usually clean in the morning, but it is never clean at night."
        },
        {
          "quem": "leo",
          "t": "Do you eat out?"
        },
        {
          "quem": "mia",
          "t": "Rarely. I sometimes buy pizza on Friday."
        },
        {
          "quem": "leo",
          "t": "Me too! I am always hungry on Friday."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia's brother never do?",
          "op": [
            "Wash the dishes",
            "Take the trash out",
            "Make dinner"
          ],
          "a": 0,
          "por": "He never washes them."
        },
        {
          "q": "What does he always do?",
          "op": [
            "Takes the trash out",
            "Makes dinner",
            "Buys pizza"
          ],
          "a": 0,
          "por": "He always takes the trash out."
        },
        {
          "q": "When does Mia sometimes buy pizza?",
          "op": [
            "On Friday",
            "On Monday",
            "Every day"
          ],
          "a": 0,
          "por": "I sometimes buy pizza on Friday."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about home. Hear it, then say it.",
      "frases": [
        {
          "t": "I usually eat lunch at home.",
          "img": "https://wolf-labs.pages.dev/p/831cba75f8e1/never-dishes/img/live-mesa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She never takes the trash out.",
          "img": "https://wolf-labs.pages.dev/p/831cba75f8e1/never-dishes/img/live-cozinha.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "He is often late on Monday.",
          "img": "https://wolf-labs.pages.dev/p/831cba75f8e1/never-dishes/img/live-corredor.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Where does the word go? Four quick ones.",
      "regra": "<b>always, usually, often, sometimes, rarely, never</b> · before a normal verb · after <b>am / is / are</b> · <b>never</b> is already negative.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She always makes coffee in the morning.",
          "aceita": [],
          "d": "Dica: <b>always</b> fica antes do verbo comum: <b>always makes</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word is in the wrong place.",
          "mostra": "He washes never the dishes.",
          "r": "He never washes the dishes.",
          "aceita": [],
          "d": "Dica: <b>never</b> fica antes do verbo: <b>never washes</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word is in the wrong place.",
          "mostra": "She always is tired on Friday.",
          "r": "She is always tired on Friday.",
          "aceita": [],
          "d": "Dica: com <b>is / am / are</b>, a palavra vem depois: <b>is always</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I don't never eat meat.",
          "r": "I never eat meat.",
          "aceita": [
            "I don't ever eat meat."
          ],
          "d": "Dica: <b>never</b> já é negativo. Não precisa de <b>don't</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/831cba75f8e1/never-dishes/img/live-cozinha.webp",
      "leg": "A kitchen with dishes in the sink",
      "pede": "Look at the picture: a kitchen with dishes in the sink. Write 2 or 3 sentences about your week at home. Use <b>always</b>, <b>usually</b>, <b>often</b>, <b>sometimes</b>, <b>rarely</b> or <b>never</b>.",
      "ph": "I usually …",
      "ex": "I always drink coffee in the morning. I usually wash the dishes at night. My brother never takes the trash out."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How often do you cook? Do you do the dishes?",
          "ph": "I usually …",
          "ex": "I cook three days a week. I sometimes do the dishes."
        },
        {
          "q": "What do you never do on Sunday?",
          "ph": "I never …",
          "ex": "I never work on Sunday."
        }
      ]
    }
  }
};
