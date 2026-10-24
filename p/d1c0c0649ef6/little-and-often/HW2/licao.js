/* LITTLE AND OFTEN · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=".
   Better Speaking (B2). Nenhum português na lição. */
window.HW2 = {
  "id": "little-and-often",
  "titulo": "Little and Often",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/d1c0c0649ef6/little-and-often/img/live-capa.jpg",
  "alvo": "stress that changes the meaning (a BIG black cat / a big BLACK cat) and talking around a word you don't know; little and often beats a lot, once; relative clauses and comparatives to describe a missing word (a thing that you use to…, like a chair but bigger)",
  "abrir": "How often do you practice English? Is it a little, or a lot, once?",
  "fecho": "Practice <b>little and often</b>: ten minutes every day beats three hours once a month. When a word does not come, do not stop: explain around it. <i>It is a thing that you use to cut paper. It is like a chair, but bigger.</i> And the word with the most stress carries your meaning: <i>a big BLACK cat</i> is not <i>a BIG black cat</i>.",
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
      "sub": "Mia and Leo plan a practice routine. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/d1c0c0649ef6/little-and-often/img/live-capa.jpg",
      "leg": "A desk at night, ready for tomorrow's practice",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I study for three hours every Sunday, and then nothing all week. Is that bad?"
        },
        {
          "quem": "leo",
          "t": "It works, but little and often works better. Ten minutes every day beats three hours once."
        },
        {
          "quem": "mia",
          "t": "Ten minutes? That feels too small."
        },
        {
          "quem": "leo",
          "t": "It is small, and that is the point. You will really do it. You can listen on the bus, or repeat five sentences after dinner."
        },
        {
          "quem": "mia",
          "t": "What do I do when I forget a word in the middle of a talk?"
        },
        {
          "quem": "leo",
          "t": "Do not stop. Talk around the word. Say, it is a thing that you use to cut paper. They will say scissors for you."
        },
        {
          "quem": "mia",
          "t": "That is clever. Also, my friend says I sound flat when I speak."
        },
        {
          "quem": "leo",
          "t": "Then play with stress. If you say, I have got a big black cat, and you push the word black, the color is the news."
        },
        {
          "quem": "mia",
          "t": "So the stressed word is the one that matters."
        },
        {
          "quem": "leo",
          "t": "Exactly. Start tonight. Ten minutes, and write it on the calendar."
        },
        {
          "quem": "mia",
          "t": "Okay. Calendar, headphones, notebook. Done."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo recommend?",
          "op": [
            "Ten minutes every day",
            "Three hours on Sunday",
            "One long test a year"
          ],
          "a": 0,
          "por": "Little and often works better. Ten minutes every day beats three hours once."
        },
        {
          "q": "What should Mia do when she forgets a word?",
          "op": [
            "Talk around the word",
            "Stop and wait",
            "Change the subject"
          ],
          "a": 0,
          "por": "Do not stop. Talk around the word."
        },
        {
          "q": "Which word carries the meaning in a sentence?",
          "op": [
            "The one with the most stress",
            "The first word",
            "The longest word"
          ],
          "a": 0,
          "por": "So the stressed word is the one that matters."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the scene. Hear it, then say it.",
      "frases": [
        {
          "t": "Ten minutes every day beats three hours once a month.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I forgot the word, so I said, it is a thing that you use to cut paper.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I said a big black cat, not a big white one.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Little and often, and talking around a word. Four quick ones.",
      "regra": "Practice <b>little and often</b> · explain around a missing word with <b>a thing that…</b> · compare with <b>-er</b>: <i>like a chair, but bigger</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Little and often works better than a lot once.",
          "aceita": [],
          "d": "Hint: the title phrase: <b>little and often</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I don't know the word, so I stop.",
          "r": "I don't know the word, so I explain it.",
          "aceita": [
            "I don't know the word, so I describe it.",
            "I don't know the word, so I talk around it."
          ],
          "d": "Hint: do not stop. <b>Explain</b> or <b>describe</b> the word."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It's a thing who you use to cut paper.",
          "r": "It's a thing that you use to cut paper.",
          "aceita": [
            "It's a thing which you use to cut paper."
          ],
          "d": "Hint: for a thing, use <b>that</b> or <b>which</b>, not <i>who</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It's like a chair, but more big.",
          "r": "It's like a chair, but bigger.",
          "aceita": [],
          "d": "Hint: short adjectives take <b>-er</b>: <b>bigger</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/d1c0c0649ef6/little-and-often/img/live-capa.jpg",
      "leg": "A desk at night, ready for tomorrow's practice",
      "pede": "Look at the picture: a desk at night, with a notebook, headphones and a calendar. Write your own little-and-often plan: what you will do, and when. Use <b>a little every day</b> or <b>little and often</b>.",
      "ph": "Every day I will …",
      "ex": "Every day I will listen to ten minutes of English on the bus. Little and often works better for me. On Sundays I will write five new sentences."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What can you do for ten minutes every day to improve your English?",
          "ph": "Every day I can …",
          "ex": "Every day I can listen to a short podcast on my way to work."
        },
        {
          "q": "Think of an object. Explain it without saying its name.",
          "ph": "It's a thing that …",
          "ex": "It's a thing that you use to dry your hair."
        }
      ]
    }
  }
};
