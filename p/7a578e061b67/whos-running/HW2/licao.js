/* WHO'S RUNNING? · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present continuous: am / is / are + -ing. A1: dicas em português só nas notas (d). Só live-capa e live-prox (já escuras). */
window.HW2 = {
  "id": "whos-running",
  "titulo": "Who's Running?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/7a578e061b67/whos-running/img/live-capa.jpg",
  "alvo": "present continuous: am / is / are + verb-ing for what is happening right now; never she walking (no be), never I'm run (no -ing), never they is running",
  "abrir": "What are you doing right now?",
  "fecho": "<b>Right now</b> = <b>am / is / are</b> + verb-ing: <i>I'm running. She's cycling. They're waiting.</i> Two pieces, always: the <b>be</b> and the <b>-ing</b>.",
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
      "sub": "Mia calls Leo in the morning. A new scene, about 35 seconds.",
      "img": "https://wolf-labs.pages.dev/p/7a578e061b67/whos-running/img/live-capa.jpg",
      "leg": "A castle on a hill",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, where are you? We are waiting for you."
        },
        {
          "quem": "leo",
          "t": "I'm running to the bus! It's late today."
        },
        {
          "quem": "mia",
          "t": "You're running now? I'm laughing!"
        },
        {
          "quem": "leo",
          "t": "Yes, I am. And my sister is cycling next to me. She is not running."
        },
        {
          "quem": "mia",
          "t": "Smart sister! Are other people running too?"
        },
        {
          "quem": "leo",
          "t": "Yes. Two boys are running. They are very fast."
        },
        {
          "quem": "mia",
          "t": "I'm looking out of the window. I see you!"
        },
        {
          "quem": "leo",
          "t": "I'm waving! The bus is stopping. I'm so happy!"
        }
      ],
      "perguntas": [
        {
          "q": "What is Leo doing?",
          "op": [
            "He is running to the bus",
            "He is cycling",
            "He is laughing"
          ],
          "a": 0,
          "por": "I'm running to the bus!"
        },
        {
          "q": "What is Leo's sister doing?",
          "op": [
            "She is cycling",
            "She is running",
            "She is waiting"
          ],
          "a": 0,
          "por": "My sister is cycling next to me."
        },
        {
          "q": "What is the bus doing at the end?",
          "op": [
            "It is stopping",
            "It is leaving",
            "It is running"
          ],
          "a": 0,
          "por": "The bus is stopping."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about right now. Hear it, then say it.",
      "frases": [
        {
          "t": "I am running to the bus.",
          "img": "https://wolf-labs.pages.dev/p/7a578e061b67/whos-running/img/live-capa.jpg",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She is cycling next to me.",
          "img": "https://wolf-labs.pages.dev/p/7a578e061b67/whos-running/img/live-capa.jpg",
          "au": "audio/say2.mp3"
        },
        {
          "t": "They are watching the fireworks.",
          "img": "https://wolf-labs.pages.dev/p/7a578e061b67/whos-running/img/live-prox.jpg",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "am, is or are + -ing. Four quick ones.",
      "regra": "<b>I am</b> + -ing · <b>he / she is</b> + -ing · <b>they are</b> + -ing · two pieces: be + -ing.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "My sister is cycling to the castle.",
          "aceita": [],
          "d": "Dica: <b>is</b> + verbo com <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "She walking to the shop.",
          "r": "She is walking to the shop.",
          "aceita": [
            "She's walking to the shop."
          ],
          "d": "Dica: agora tem dois pedaços: <b>is</b> + <b>walking</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm run to the bus.",
          "r": "I'm running to the bus.",
          "aceita": [
            "I am running to the bus."
          ],
          "d": "Dica: depois de <b>I'm</b>, o verbo leva <b>-ing</b>: running."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "They is running now.",
          "r": "They are running now.",
          "aceita": [
            "They're running now."
          ],
          "d": "Dica: com <b>they</b>, use <b>are</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/7a578e061b67/whos-running/img/live-prox.jpg",
      "leg": "Fireworks over a castle",
      "pede": "Look at the picture: fireworks over a castle. Write 2 or 3 sentences about what people are doing now. Use <b>I am</b>, <b>he is</b> or <b>they are</b> + -ing.",
      "ph": "People are watching …",
      "ex": "People are watching the fireworks. A girl is taking photos. I am sitting on the hill."
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
          "q": "What is your family doing now?",
          "ph": "My mother is …ing.",
          "ex": "My mother is cooking. My brother is sleeping."
        }
      ]
    }
  }
};
