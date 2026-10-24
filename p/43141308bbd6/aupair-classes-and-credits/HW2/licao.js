/* CLASSES AND CREDITS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: catálogo e créditos: at least / up to / on + dias / how many. B1: nenhum português. Imagens live-* do curso. Preços e faculdade fictícios do curso. */
window.HW2 = {
  "id": "aupair-classes-and-credits",
  "titulo": "Classes and Credits",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/43141308bbd6/aupair-classes-and-credits/img/live-conversa.webp",
  "alvo": "reading a course catalog and enrolling: at least / up to + number · on + days · How many credits? · I'd like to enroll in ...; never in Saturdays, how much credits, minimum six credits",
  "abrir": "What would you like to study, and when could you do it?",
  "fecho": "<b>At least</b> six credits = six or more. <b>Up to</b> $500 = $500 is the top. Days take <b>on</b>: <i>on Saturdays</i>. Credits you count: <b>How many credits?</b> · <b>I'd like to enroll in</b> + course.",
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
      "sub": "Mia calls the college. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/43141308bbd6/aupair-classes-and-credits/img/live-capa.webp",
      "leg": "An empty classroom at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hello, I'd like to enroll in a course, please. I'm an au pair, so I need at least six credits."
        },
        {
          "quem": "leo",
          "t": "Of course. Our catalog has a Photography course. It has three credits, and it costs $420."
        },
        {
          "quem": "mia",
          "t": "When is it?"
        },
        {
          "quem": "leo",
          "t": "On Saturdays, from nine to twelve."
        },
        {
          "quem": "mia",
          "t": "That works for me. I have another class on Tuesday evenings, so I would have six credits."
        },
        {
          "quem": "leo",
          "t": "Perfect. What is the other course?"
        },
        {
          "quem": "mia",
          "t": "ESL Conversation. It costs $390, so together it's $810."
        },
        {
          "quem": "leo",
          "t": "Your host family pays up to $500, so you pay the rest."
        },
        {
          "quem": "mia",
          "t": "So I pay $310, right?"
        },
        {
          "quem": "leo",
          "t": "Exactly. Do you want to enroll now?"
        },
        {
          "quem": "mia",
          "t": "Yes, please. But first I'll talk to my host mom about Saturday morning."
        },
        {
          "quem": "leo",
          "t": "Good idea. Classes are part of the program, so plan the schedule together."
        }
      ],
      "perguntas": [
        {
          "q": "How many credits does Mia need?",
          "op": [
            "At least six",
            "At most three",
            "Exactly ten"
          ],
          "a": 0,
          "por": "I need at least six credits."
        },
        {
          "q": "When is the Photography course?",
          "op": [
            "On Saturdays, from nine to twelve",
            "On Tuesday evenings",
            "Every morning"
          ],
          "a": 0,
          "por": "On Saturdays, from nine to twelve."
        },
        {
          "q": "How much does Mia pay herself?",
          "op": [
            "$310",
            "$0",
            "$810"
          ],
          "a": 0,
          "por": "Your host family pays up to $500, so you pay the rest. So I pay $310."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about classes. Hear it, then say it.",
      "frases": [
        {
          "t": "I need at least six credits this year.",
          "img": "https://wolf-labs.pages.dev/p/43141308bbd6/aupair-classes-and-credits/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The family pays up to five hundred dollars.",
          "img": "https://wolf-labs.pages.dev/p/43141308bbd6/aupair-classes-and-credits/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The course is on Saturdays, from nine to twelve.",
          "img": "https://wolf-labs.pages.dev/p/43141308bbd6/aupair-classes-and-credits/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "At least, up to, how many. Four quick ones.",
      "regra": "<b>at least</b> = or more · <b>up to</b> = the top · <b>on</b> + days · <b>How many</b> credits.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I would like to enroll in a photography course.",
          "aceita": [],
          "d": "Hint: <b>enroll in</b> + the course."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The class is in Saturdays at nine.",
          "r": "The class is on Saturdays at nine.",
          "aceita": [],
          "d": "Hint: days take <b>on</b>: on Saturdays."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "How much credits do I need?",
          "r": "How many credits do I need?",
          "aceita": [],
          "d": "Hint: you can count credits, so <b>How many</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I need minimum six credits.",
          "r": "I need at least six credits.",
          "aceita": [
            "I need a minimum of six credits."
          ],
          "d": "Hint: <b>at least</b> six, or <b>a minimum of</b> six."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/43141308bbd6/aupair-classes-and-credits/img/live-conversa.webp",
      "leg": "Books on a library table",
      "pede": "Look at the picture: books on a library table. Write 2 or 3 sentences about a course you would like to take: the name, when it is, the credits or the price. Use <b>on</b>, <b>at least</b> or <b>up to</b>.",
      "ph": "I'd like to take a course in …",
      "ex": "I'd like to take a photography course. It is on Saturdays and it has three credits. It costs four hundred dollars."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "When can you study? How many hours a week?",
          "ph": "I can study on … for … hours.",
          "ex": "I can study on Tuesday and Thursday evenings, about six hours a week."
        },
        {
          "q": "What course do you want to take, and why?",
          "ph": "I want to take … because …",
          "ex": "I want to take a photography course because I love taking pictures."
        }
      ]
    }
  }
};
