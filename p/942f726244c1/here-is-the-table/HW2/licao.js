/* Here Is the Table · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: prepositions of place. Bíblia (WEB, conferida em ebible.org): versículos só no Listen e no Out loud, nunca no Focus, nunca marcados errados. A1/A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "here-is-the-table",
  "titulo": "Here Is the Table",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/942f726244c1/here-is-the-table/img/live-jarro.webp",
  "alvo": "prepositions of place: in / on / at / under / next to; never 'in the table', 'at the floor', 'next the door', 'under of', 'on the door' for 'at the door'",
  "abrir": "Where is your phone now?",
  "fecho": "<b>on</b> the table · <b>in</b> the room / the bag · <b>at</b> the door · <b>under</b> the table · <b>next to</b> the door. Not <i>in the table</i>, not <i>next the door</i>, not <i>under of</i>.",
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
      "sub": "Mia tells Leo about a big room in a house. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/942f726244c1/here-is-the-table/img/live-jarro.webp",
      "leg": "A jar by a door, stairs behind it",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm reading about a big room in a house."
        },
        {
          "quem": "leo",
          "t": "What is in the room?"
        },
        {
          "quem": "mia",
          "t": "There is a long table. The bread is on the table, and the jar of water is next to the door."
        },
        {
          "quem": "leo",
          "t": "Where are the people?"
        },
        {
          "quem": "mia",
          "t": "They are at the table. Jesus is in the middle, and a lamp is above him."
        },
        {
          "quem": "leo",
          "t": "And the basin?"
        },
        {
          "quem": "mia",
          "t": "The basin is on the floor, near the table. Jesus takes a towel and washes their feet."
        },
        {
          "quem": "leo",
          "t": "Why?"
        },
        {
          "quem": "mia",
          "t": "John 13:14 says: If I then, the Lord and the Teacher, have washed your feet, you also ought to wash one another’s feet."
        },
        {
          "quem": "leo",
          "t": "A good lesson. Is there a place for me at the table?"
        },
        {
          "quem": "mia",
          "t": "Yes, there is. Come in and sit next to me."
        }
      ],
      "perguntas": [
        {
          "q": "Where is the bread?",
          "op": [
            "On the table",
            "Under the table",
            "At the door"
          ],
          "a": 0,
          "por": "The bread is on the table."
        },
        {
          "q": "Where is the jar of water?",
          "op": [
            "Next to the door",
            "Under the table",
            "In the basin"
          ],
          "a": 0,
          "por": "The jar of water is next to the door."
        },
        {
          "q": "Where does Mia say Leo can sit?",
          "op": [
            "Next to her",
            "At the door",
            "Under the lamp"
          ],
          "a": 0,
          "por": "Come in and sit next to me."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the story. The second one is John 13:7, World English Bible. Hear it, then say it.",
      "frases": [
        {
          "t": "The jar is next to the door.",
          "img": "https://wolf-labs.pages.dev/p/942f726244c1/here-is-the-table/img/live-jarro.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You don’t know what I am doing now, but you will understand later.",
          "img": "https://wolf-labs.pages.dev/p/942f726244c1/here-is-the-table/img/live-jarro.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The basin is under the table.",
          "img": "https://wolf-labs.pages.dev/p/942f726244c1/here-is-the-table/img/live-jarro.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "in, on, at, under, next to. Four quick ones.",
      "regra": "<b>on</b> the table · <b>in</b> the room · <b>at</b> the door · <b>under</b> the table · <b>next to</b> the door.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The basin is under the table",
          "aceita": [],
          "d": "Dica: debaixo da mesa: <b>under</b> the table."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The jar is in the table.",
          "r": "The jar is on the table.",
          "aceita": [],
          "d": "Dica: em cima de uma mesa é <b>on</b>, nunca 'in the table'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He is waiting in the door.",
          "r": "He is waiting at the door.",
          "aceita": [],
          "d": "Dica: 'na porta' (esperando) é <b>at the door</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "The basin is next the door.",
          "r": "The basin is next to the door.",
          "aceita": [],
          "d": "Dica: o certo é <b>next to</b>, com o <b>to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/942f726244c1/here-is-the-table/img/live-jarro.webp",
      "leg": "A jar by a door, stairs behind it",
      "pede": "Look at the picture: a jar by a door, with stairs. Write 2 or 3 sentences: where are the things? Use <b>on</b>, <b>at</b>, <b>under</b> or <b>next to</b>.",
      "ph": "The jar is next to …",
      "ex": "The jar is next to the door. The stairs are on the left. There is a small window above the door."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where is your phone now? Where is your bag?",
          "ph": "My phone is on … My bag is …",
          "ex": "My phone is on the table, next to my cup. My bag is under the chair."
        },
        {
          "q": "Where do you sit at home? What is next to you?",
          "ph": "I sit on … Next to me there is …",
          "ex": "I sit on the sofa. Next to me there is a lamp and a small table."
        }
      ]
    }
  }
};
