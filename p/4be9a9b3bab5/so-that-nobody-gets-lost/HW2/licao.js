/* SO THAT NOBODY GETS LOST · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=".
   Alvo: finalidade x causa. B2: nenhum português na lição. */
window.HW2 = {
  "id": "so-that-nobody-gets-lost",
  "titulo": "So That Nobody Gets Lost",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4be9a9b3bab5/so-that-nobody-gets-lost/img/live-capa.webp",
  "alvo": "purpose vs reason: so that + subject + can / will / won't; in order to / so as to + verb; in order not to; because + clause; because of / due to + noun",
  "abrir": "Think of a rule in your town. What is it for?",
  "fecho": "<b>Purpose</b> answers <i>what for?</i>: <b>so that</b> + subject + verb, <b>in order to / so as to</b> + verb, <b>in order not to</b>. <b>Reason</b> answers <i>why?</i>: <b>because</b> + a clause, <b>because of / due to</b> + a noun. <i>We closed the path because of the rain, so that nobody slips.</i>",
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
  "rate": "-10%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo plan a lantern walk for their village. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/4be9a9b3bab5/so-that-nobody-gets-lost/img/live-conversa.webp",
      "leg": "Planning the lantern walk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the lantern walk is on Saturday. Why did the council move the start to seven?"
        },
        {
          "quem": "leo",
          "t": "Because of the early sunset. They want everyone to finish before it gets really dark."
        },
        {
          "quem": "mia",
          "t": "Makes sense. And why are we giving out red lanterns?"
        },
        {
          "quem": "leo",
          "t": "So that the children are easy to spot. The adults get white ones, in order to look different."
        },
        {
          "quem": "mia",
          "t": "I see. Why did they close the lake path?"
        },
        {
          "quem": "leo",
          "t": "Due to the mud. It rained all week, and the ground is unsafe."
        },
        {
          "quem": "mia",
          "t": "Then we should put a sign there so that nobody tries to walk through."
        },
        {
          "quem": "leo",
          "t": "Good idea. And I'll bring a flask of tea, so as to keep the volunteers warm."
        },
        {
          "quem": "mia",
          "t": "Perfect. Let's meet early, in order not to be late for the briefing."
        }
      ],
      "perguntas": [
        {
          "q": "Why does the walk start at seven?",
          "op": [
            "Because of the early sunset",
            "So that children can sleep",
            "Due to the mud"
          ],
          "a": 0,
          "por": "Because of the early sunset. They want everyone to finish before it gets really dark."
        },
        {
          "q": "What are the red lanterns for?",
          "op": [
            "So that the children are easy to spot",
            "To warm the volunteers",
            "To close the lake path"
          ],
          "a": 0,
          "por": "So that the children are easy to spot."
        },
        {
          "q": "Why will Leo bring tea?",
          "op": [
            "So as to keep the volunteers warm",
            "Because of the mud",
            "In order not to be late"
          ],
          "a": 0,
          "por": "I'll bring a flask of tea, so as to keep the volunteers warm."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a night walk. Hear it, then say it.",
      "frases": [
        {
          "t": "We handed out lanterns so that nobody would get lost.",
          "img": "https://wolf-labs.pages.dev/p/4be9a9b3bab5/so-that-nobody-gets-lost/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The lake path is closed because of the mud.",
          "img": "https://wolf-labs.pages.dev/p/4be9a9b3bab5/so-that-nobody-gets-lost/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Let's meet early in order not to miss the start.",
          "img": "https://wolf-labs.pages.dev/p/4be9a9b3bab5/so-that-nobody-gets-lost/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Purpose or reason? Four quick ones.",
      "regra": "<b>so that</b> + subject + verb · <b>in order to / so as to / in order not to</b> + verb · <b>because</b> + clause · <b>because of / due to</b> + noun.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We put a sign there so that nobody gets lost.",
          "aceita": [],
          "d": "Hint: <b>so that</b> + subject + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The road is closed because the snow.",
          "r": "The road is closed because of the snow.",
          "aceita": [
            "The road is closed due to the snow."
          ],
          "d": "Hint: a noun after it (<b>the snow</b>) needs <b>because of</b> or <b>due to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We painted the signs orange for be visible.",
          "r": "We painted the signs orange in order to be visible.",
          "aceita": [
            "We painted the signs orange so as to be visible.",
            "We painted the signs orange to be visible."
          ],
          "d": "Hint: purpose with a verb: <b>in order to</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make it one sentence.",
          "mostra": "Leave early. Don't miss the last bus. (in order not to)",
          "r": "Leave early in order not to miss the last bus.",
          "aceita": [
            "Leave early so as not to miss the last bus.",
            "Leave early so that you won't miss the last bus."
          ],
          "d": "Hint: <b>in order not to</b> + verb, for a negative purpose."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4be9a9b3bab5/so-that-nobody-gets-lost/img/live-capa.webp",
      "leg": "A lantern and a marker on a dark trail",
      "pede": "Look at the picture: a lantern and a marker on a dark trail. Design a short walk in a place you know. Say what you put there and what for. Use <b>so that</b>, <b>in order to</b> or <b>because of</b>.",
      "ph": "We'll put a lantern at the start so that …",
      "ex": "We'll put a lantern at the start so that nobody gets lost. The path closes at six because of the tide. We'll bring water in order to keep people safe."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Which rule in your city exists so that people stay safe?",
          "ph": "The rule exists so that …",
          "ex": "The speed limit near schools exists so that children can cross safely."
        },
        {
          "q": "What did you close, cancel or change recently? Why?",
          "ph": "I … because of …",
          "ex": "I canceled my trip because of the weather forecast."
        }
      ]
    }
  }
};
