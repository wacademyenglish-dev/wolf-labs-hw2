/* THERE IS A DOOR · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: there is / are + lugar. Jogo WOLFSTATION: falas originais, sem violência. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "there-is-a-door",
  "titulo": "There Is a Door",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/93e7e6242d25/there-is-a-door/img/live-noite.webp",
  "alvo": "there is / there are + place: next to, between ... and ..., in front of, behind, under, above, on; never have a door, never in front the",
  "abrir": "What is next to your bed?",
  "fecho": "<b>There is</b> one thing, <b>there are</b> two or more, then <b>where</b>: <i>There is a door between two windows. There is a torch above the door.</i> Say <b>in front of</b>, never <i>in front the</i>.",
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
      "sub": "Mia and Leo build a small house, block by block. A new scene, about 35 seconds.",
      "img": "https://wolf-labs.pages.dev/p/93e7e6242d25/there-is-a-door/img/live-vila.webp",
      "leg": "A small village at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, let's build a house here."
        },
        {
          "quem": "leo",
          "t": "OK. There is a door in the front. Where is the bed?"
        },
        {
          "quem": "mia",
          "t": "There is a bed next to the window."
        },
        {
          "quem": "leo",
          "t": "Good. There is a door between two windows."
        },
        {
          "quem": "mia",
          "t": "Is there a lamp above the door?"
        },
        {
          "quem": "leo",
          "t": "Yes, there is. There is a torch above the door."
        },
        {
          "quem": "mia",
          "t": "What is behind the house?"
        },
        {
          "quem": "leo",
          "t": "There is a small tree behind the house, and there are flowers in front of it."
        },
        {
          "quem": "mia",
          "t": "Perfect. There is a table under the window."
        },
        {
          "quem": "leo",
          "t": "And there is a chair next to the table."
        }
      ],
      "perguntas": [
        {
          "q": "Where is the bed?",
          "op": [
            "Next to the window",
            "Under the table",
            "Behind the house"
          ],
          "a": 0,
          "por": "There is a bed next to the window."
        },
        {
          "q": "Where is the torch?",
          "op": [
            "Above the door",
            "Under the window",
            "Next to the bed"
          ],
          "a": 0,
          "por": "There is a torch above the door."
        },
        {
          "q": "What is behind the house?",
          "op": [
            "A small tree",
            "A table",
            "A chair"
          ],
          "a": 0,
          "por": "There is a small tree behind the house."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the house. Hear it, then say it.",
      "frases": [
        {
          "t": "There is a door between two windows.",
          "img": "https://wolf-labs.pages.dev/p/93e7e6242d25/there-is-a-door/img/live-casa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "There is a torch above the door.",
          "img": "https://wolf-labs.pages.dev/p/93e7e6242d25/there-is-a-door/img/live-noite.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "There are flowers in front of the house.",
          "img": "https://wolf-labs.pages.dev/p/93e7e6242d25/there-is-a-door/img/live-vila.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Where is it? Four quick ones.",
      "regra": "<b>there is / there are</b> + place: <b>next to · between ... and ... · in front of · behind · under · above · on</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "There is a bed next to the window.",
          "aceita": [],
          "d": "Dica: <b>next to</b> = ao lado de."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Have a door in the house.",
          "r": "There is a door in the house.",
          "aceita": [],
          "d": "Dica: 'tem' é <b>there is</b>, nunca have."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There is two beds in the room.",
          "r": "There are two beds in the room.",
          "aceita": [],
          "d": "Dica: dois é plural: <b>there are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "There is a tree in front the house.",
          "r": "There is a tree in front of the house.",
          "aceita": [],
          "d": "Dica: o certo é <b>in front of</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/93e7e6242d25/there-is-a-door/img/live-casa.webp",
      "leg": "A wooden room at night",
      "pede": "Look at the picture: a wooden room at night. Write 2 or 3 sentences about where things are. Use <b>there is / there are</b> and <b>next to, between, under, above</b> or <b>on</b>.",
      "ph": "There is a bed next to …",
      "ex": "There is a bed next to the window. There are two windows. There is a lamp on the table."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is in front of your house?",
          "ph": "In front of my house there is …",
          "ex": "In front of my house there is a small tree."
        },
        {
          "q": "What is next to your bed?",
          "ph": "Next to my bed there is …",
          "ex": "There is a table next to my bed. There are two books on it."
        }
      ]
    }
  }
};
