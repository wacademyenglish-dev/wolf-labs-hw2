/* PLAN B · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: first conditional (if + presente, will + verbo). A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "plan-b",
  "titulo": "Plan B",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4e91b7a2c6d3/plan-b/img/live-caixa.webp",
  "alvo": "first conditional: if + present, will + plain verb (if it rains, we will have lunch inside); the plan can go first without a comma; he / she / it takes -s in the if half; negative with doesn't / don't; never if it will rain",
  "abrir": "What will you do if you are late tomorrow?",
  "fecho": "Two halves. The <b>if half</b> stays in the present (if it <b>rains</b>, if he <b>arrives</b>, if she <b>doesn’t come</b>). The <b>plan half</b> takes <b>will + the base verb</b> (we <b>will have</b>, Leo <b>will bring</b>, we <b>won’t sign</b>). The plan can go first, with no comma.",
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
      "sub": "Mia and Leo plan a client lunch. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/4e91b7a2c6d3/plan-b/img/bg-meeting-night.jpg",
      "leg": "A meeting room at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, tomorrow is the client lunch. What is our plan?"
        },
        {
          "quem": "leo",
          "t": "If it rains, we will have lunch inside."
        },
        {
          "quem": "mia",
          "t": "Good. And if the client arrives early?"
        },
        {
          "quem": "leo",
          "t": "If he arrives early, I will meet him at the door."
        },
        {
          "quem": "mia",
          "t": "What if the projector doesn't work?"
        },
        {
          "quem": "leo",
          "t": "If it doesn't work, we will use my laptop."
        },
        {
          "quem": "mia",
          "t": "And if the chef doesn't come?"
        },
        {
          "quem": "leo",
          "t": "We will order sandwiches if that happens."
        },
        {
          "quem": "mia",
          "t": "Great. If everything goes well, we will celebrate."
        },
        {
          "quem": "leo",
          "t": "And if something goes wrong, I'll call you."
        }
      ],
      "perguntas": [
        {
          "q": "What will they do if it rains?",
          "op": [
            "Have lunch inside",
            "Cancel the lunch",
            "Eat in the car"
          ],
          "a": 0,
          "por": "If it rains, we will have lunch inside."
        },
        {
          "q": "What will Leo do if the client arrives early?",
          "op": [
            "Meet him at the door",
            "Order sandwiches",
            "Call Mia"
          ],
          "a": 0,
          "por": "If he arrives early, I will meet him at the door."
        },
        {
          "q": "What will they do if the chef doesn't come?",
          "op": [
            "Order sandwiches",
            "Use the laptop",
            "Go home"
          ],
          "a": 0,
          "por": "We will order sandwiches if that happens."
        }
      ]
    },
    "out": {
      "sub": "Three plans for tomorrow. Hear it, then say it.",
      "frases": [
        {
          "t": "If the printer breaks, we will use the other one.",
          "img": "https://wolf-labs.pages.dev/p/4e91b7a2c6d3/plan-b/img/live-caixa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If he doesn't come, we will start without him.",
          "img": "https://wolf-labs.pages.dev/p/4e91b7a2c6d3/plan-b/img/bg-corridor-night.jpg",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I will call the office if the train is late.",
          "img": "https://wolf-labs.pages.dev/p/4e91b7a2c6d3/plan-b/img/bg-window-night.jpg",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "If + present, will + verb. Four quick ones.",
      "regra": "<b>If</b> + present, <b>will</b> + plain verb · he / she / it + <b>-s</b> · <b>doesn’t come</b> · never <i>if it will rain</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If the printer breaks, I will call the office.",
          "aceita": [],
          "d": "Dica: <b>if</b> + presente, depois <b>will</b> + verbo limpo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If it will rain, we will stay inside.",
          "r": "If it rains, we will stay inside.",
          "aceita": [
            "If it rains, we'll stay inside."
          ],
          "d": "Dica: depois de <b>if</b>, o presente. Sem <b>will</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If he arrive early, I will meet him.",
          "r": "If he arrives early, I will meet him.",
          "aceita": [],
          "d": "Dica: he / she / it leva -s: <b>arrives</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If the chef not comes, we will order sandwiches.",
          "r": "If the chef doesn't come, we will order sandwiches.",
          "aceita": [],
          "d": "Dica: o não do presente é <b>doesn't</b> + verbo limpo: <b>doesn't come</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4e91b7a2c6d3/plan-b/img/live-caixa.webp",
      "leg": "A red emergency box",
      "pede": "Look at the picture: a red emergency box. Write 2 or 3 sentences about a plan for a work day. Use <b>If + present, will + verb</b>.",
      "ph": "If it rains, I will …",
      "ex": "If it rains, I will take a taxi. If my laptop breaks, I will use my phone. I won't panic if the meeting is late."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What will you do if you are late for work?",
          "ph": "If I am late, I will …",
          "ex": "If I am late, I will call my boss."
        },
        {
          "q": "What will you do if your phone dies today?",
          "ph": "If my phone dies, I will …",
          "ex": "If my phone dies, I will ask for a charger."
        }
      ]
    }
  }
};
