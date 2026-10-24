/* Room 214 · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: there is / there are. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "room-214",
  "titulo": "Room 214",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2346fdbabac6/room-214/img/live-capa.webp",
  "alvo": "There is / There are, Is there ...? Are there ...?, Yes, there is. / No, there isn't.; never 'Have a pool?', 'There is two beds', 'Is there towels?'",
  "abrir": "What is there in your bedroom?",
  "fecho": "<b>There is</b> + one thing · <b>There are</b> + two or more · <b>Is there ...?</b> <b>Are there ...?</b> · <i>Yes, there is. No, there isn't.</i> For \"tem?\", not <i>Have</i>.",
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
      "sub": "Mia tells Leo about her hotel in London. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/2346fdbabac6/room-214/img/live-a.webp",
      "leg": "A small hotel room at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm in London. My room is number two-one-four, on the second floor."
        },
        {
          "quem": "leo",
          "t": "Is there a lift?"
        },
        {
          "quem": "mia",
          "t": "Yes, there is. But there is no wifi in the room."
        },
        {
          "quem": "leo",
          "t": "No wifi? Are there towels?"
        },
        {
          "quem": "mia",
          "t": "Yes, there are two towels. And there is a small window."
        },
        {
          "quem": "leo",
          "t": "Is there breakfast?"
        },
        {
          "quem": "mia",
          "t": "Yes, there is. Breakfast is from seven to ten."
        },
        {
          "quem": "leo",
          "t": "Is there a bar?"
        },
        {
          "quem": "mia",
          "t": "No, there isn't. But there is a nice café next to the hotel."
        }
      ],
      "perguntas": [
        {
          "q": "What floor is room 214?",
          "op": [
            "The second floor",
            "The first floor",
            "The tenth floor"
          ],
          "a": 0,
          "por": "My room is number two-one-four, on the second floor."
        },
        {
          "q": "Is there wifi in the room?",
          "op": [
            "No, there isn't",
            "Yes, there is",
            "Yes, there are"
          ],
          "a": 0,
          "por": "There is no wifi in the room."
        },
        {
          "q": "How many towels are there?",
          "op": [
            "Two",
            "Three",
            "One"
          ],
          "a": 0,
          "por": "Yes, there are two towels."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the hotel. Hear it, then say it.",
      "frases": [
        {
          "t": "There is a small window in the room.",
          "img": "https://wolf-labs.pages.dev/p/2346fdbabac6/room-214/img/live-a.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "There is a cup and a kettle on the table.",
          "img": "https://wolf-labs.pages.dev/p/2346fdbabac6/room-214/img/live-b.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "There is a bell and a key on the desk.",
          "img": "https://wolf-labs.pages.dev/p/2346fdbabac6/room-214/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "There is or there are? Four quick ones.",
      "regra": "<b>There is</b> + one · <b>There are</b> + many · <b>Is there ...?</b> / <b>Are there ...?</b> · for \"tem?\", not <i>Have</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "There are two towels in the bathroom",
          "aceita": [],
          "d": "Dica: duas toalhas (plural): <b>there are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: ask the question right.",
          "mostra": "Have wifi in the room?",
          "r": "Is there wifi in the room?",
          "aceita": [
            "Is there any wifi in the room?"
          ],
          "d": "Dica: \"tem?\" em inglês é <b>Is there ...?</b>, nunca 'Have'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There is two beds in the room.",
          "r": "There are two beds in the room.",
          "aceita": [],
          "d": "Dica: duas camas (plural): <b>there are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Is there towels in the room?",
          "r": "Are there towels in the room?",
          "aceita": [
            "Are there any towels in the room?"
          ],
          "d": "Dica: toalhas é plural: <b>Are there</b> ...?"
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2346fdbabac6/room-214/img/live-a.webp",
      "leg": "A small hotel room at night",
      "pede": "Look at the picture: a small hotel room at night. Write 2 or 3 sentences: what is there in the room? Use <b>there is</b> and <b>there are</b>.",
      "ph": "In the room there is …",
      "ex": "In the room there is a bed and a small window. There is a lamp. There are two pillows."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is there in your bedroom? Use there is and there are.",
          "ph": "In my bedroom there is … and there are …",
          "ex": "In my bedroom there is a bed and a desk. There are two windows."
        },
        {
          "q": "Is there a good restaurant near your home? What is there to eat?",
          "ph": "Yes, there is … / No, there isn't …",
          "ex": "Yes, there is a small restaurant near my home. There are good pizzas and there is cold juice."
        }
      ]
    }
  }
};
