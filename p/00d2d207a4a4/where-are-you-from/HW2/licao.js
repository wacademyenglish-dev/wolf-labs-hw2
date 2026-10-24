/* WHERE ARE YOU FROM? · LIÇÃO DE CASA 2.0 (lote 25, 23/10/2026)
   Motor: hw2.js. JSON puro depois do "=". Alvo: wh-questions: Where / What / Who / When + do or does + person + plain verb (Where do you live? Where does she work?); with be, no do (Where are you from?); never Where you live, never From where are you */
window.HW2 = {
  "id": "where-are-you-from",
  "titulo": "Where Are You From?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/00d2d207a4a4/where-are-you-from/img/estudio.webp",
  "alvo": "wh-questions: Where / What / Who / When + do or does + person + plain verb (Where do you live? Where does she work?); with be, no do (Where are you from?); never Where you live, never From where are you",
  "abrir": "Where is your family from?",
  "fecho": "Question word first: <b>Where do you live?</b> With <b>be</b>, no do: <b>Where are you from?</b> With he or she: <b>does</b> + the plain verb.",
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
      "sub": "Mia is a street reporter. She talks to Leo. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/00d2d207a4a4/where-are-you-from/img/estudio.webp",
      "leg": "An empty studio with two stools",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hi! I'm a reporter. Where are you from?"
        },
        {
          "quem": "leo",
          "t": "I'm from Australia, from a city called Perth."
        },
        {
          "quem": "mia",
          "t": "Nice! Where do you live now?"
        },
        {
          "quem": "leo",
          "t": "I live in London. I work in a coffee shop."
        },
        {
          "quem": "mia",
          "t": "What do you do in the coffee shop?"
        },
        {
          "quem": "leo",
          "t": "I make coffee for people. My friend Tom works with me."
        },
        {
          "quem": "mia",
          "t": "When does the shop open?"
        },
        {
          "quem": "leo",
          "t": "It opens at seven in the morning."
        },
        {
          "quem": "mia",
          "t": "Last question. Who do you call every Sunday?"
        },
        {
          "quem": "leo",
          "t": "I call my sister. She lives in Perth."
        },
        {
          "quem": "mia",
          "t": "Thank you! Have a great day."
        }
      ],
      "perguntas": [
        {
          "q": "Where is Leo from?",
          "op": [
            "Australia",
            "London",
            "Brazil"
          ],
          "a": 0,
          "por": "I'm from Australia, from a city called Perth."
        },
        {
          "q": "When does the shop open?",
          "op": [
            "At seven in the morning",
            "At noon",
            "At night"
          ],
          "a": 0,
          "por": "It opens at seven in the morning."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the story. Hear it, then say it.",
      "frases": [
        {
          "t": "Where does your sister live?",
          "img": "https://wolf-labs.pages.dev/p/00d2d207a4a4/where-are-you-from/img/rua.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "What do you do in the shop?",
          "img": "https://wolf-labs.pages.dev/p/00d2d207a4a4/where-are-you-from/img/estudio.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Who do you call on Sunday?",
          "img": "https://wolf-labs.pages.dev/p/00d2d207a4a4/where-are-you-from/img/rua.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Four quick ones.",
      "regra": "<b>Where do you live?</b> · <b>Where does she work?</b> · <b>Where are you from?</b> (no do with be).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Where does your friend live?",
          "aceita": [],
          "d": "Dica: <b>does</b> + pessoa + verbo sem -s."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the question is not complete.",
          "mostra": "Where you live?",
          "r": "Where do you live?",
          "aceita": [],
          "d": "Dica: verbo de ação pede <b>do</b>: Where <b>do</b> you live?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Where does she lives?",
          "r": "Where does she live?",
          "aceita": [],
          "d": "Dica: depois de <b>does</b>, o verbo fica simples: sem -s."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "From where are you?",
          "r": "Where are you from?",
          "aceita": [],
          "d": "Dica: a palavra de pergunta vem primeiro; <b>from</b> vai no fim."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/00d2d207a4a4/where-are-you-from/img/rua.webp",
      "leg": "A quiet street at night",
      "pede": "Look at the picture: a quiet street at night. Write 2 or 3 questions you want to ask a person you meet. Use <b>Where</b>, <b>What</b>, <b>Who</b> or <b>When</b>.",
      "ph": "Where do you …?",
      "ex": "Where do you live? What do you do? Where are you from?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where are you from? Where do you live now?",
          "ph": "I'm from … I live in …",
          "ex": "I'm from a small town. I live in a big city now."
        },
        {
          "q": "What question do you ask a new person first?",
          "ph": "I ask: …",
          "ex": "I ask: What's your name? Where are you from?"
        }
      ]
    }
  }
};
