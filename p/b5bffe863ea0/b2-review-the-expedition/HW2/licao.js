/* THE EXPEDITION · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: review U1: had done / had been doing / used to x get used to / will have done / by x until / was going to. B2: nenhum português. Imagens live-capa e live-conversa (escuras). */
window.HW2 = {
  "id": "b2-review-the-expedition",
  "titulo": "The Expedition",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b5bffe863ea0/b2-review-the-expedition/img/live-capa.webp",
  "alvo": "Unit 1 review: past perfect simple and continuous (nobody had used it; I had been repairing), used to x be / get used to + -ing, future perfect and future continuous (by next June I will have finished), by x until, was going to",
  "abrir": "What had changed the last time you came back from a trip?",
  "fecho": "<b>had done</b> = the earlier past: <i>nobody had used the cabin</i>. <b>had been doing</b> = the activity before that moment. <b>be / get used to + -ing</b>: <i>I'm used to sleeping late</i>. <b>will have done</b> = finished before a future point; <b>will be doing</b> = in progress then. <b>By</b> = deadline; <b>until</b> = all the time up to. <b>was going to</b> = the plan that changed.",
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
      "sub": "Mia and Leo after four months at a mountain station. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/b5bffe863ea0/b2-review-the-expedition/img/live-conversa.webp",
      "leg": "A cabin at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo! You're back. How was the mountain station?"
        },
        {
          "quem": "leo",
          "t": "Amazing, but strange. When we arrived, nobody had used the cabin for years, and the stove had rusted."
        },
        {
          "quem": "mia",
          "t": "How did you cope?"
        },
        {
          "quem": "leo",
          "t": "At first I couldn't get used to the silence. Now I'm used to waking up at five, and I'm still getting used to the traffic here."
        },
        {
          "quem": "mia",
          "t": "What were you doing when the helicopter finally came?"
        },
        {
          "quem": "leo",
          "t": "I had been repairing the roof for six hours. I was going to take a shower first, but the pilot was in a hurry."
        },
        {
          "quem": "mia",
          "t": "Typical. And what are your plans?"
        },
        {
          "quem": "leo",
          "t": "By next June I will have finished my report, and this time next year I will be working in an office downtown."
        },
        {
          "quem": "mia",
          "t": "And until then, you're staying with me, right?"
        },
        {
          "quem": "leo",
          "t": "Until Friday. I have to move out by Saturday, I'm afraid."
        }
      ],
      "perguntas": [
        {
          "q": "What was the cabin like when they arrived?",
          "op": [
            "Nobody had used it for years",
            "Someone had just cleaned it",
            "It was full of people"
          ],
          "a": 0,
          "por": "Nobody had used the cabin for years, and the stove had rusted."
        },
        {
          "q": "What had Leo been doing for six hours when the helicopter came?",
          "op": [
            "Repairing the roof",
            "Writing his report",
            "Waiting for the pilot"
          ],
          "a": 0,
          "por": "I had been repairing the roof for six hours."
        },
        {
          "q": "What will Leo have done by next June?",
          "op": [
            "Finished his report",
            "Moved to the mountains",
            "Repaired the stove"
          ],
          "a": 0,
          "por": "By next June I will have finished my report."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from Unit 1. Hear it, then say it.",
      "frases": [
        {
          "t": "When we arrived, nobody had used the cabin for years.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I had been repairing the roof for six hours when the helicopter came.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "By next June I will have finished my report.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Layers of time. Four quick ones.",
      "regra": "<b>had done</b> · <b>had been doing</b> · <b>be used to + -ing</b> · <b>will have done</b> · <b>by</b> = deadline, <b>until</b> = up to · <b>was going to</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I had been waiting for an hour when she called.",
          "aceita": [],
          "d": "Hint: <b>had been</b> + verb-ing for the activity before the moment."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm used to sleep on the floor now.",
          "r": "I'm used to sleeping on the floor now.",
          "aceita": [
            "I am used to sleeping on the floor now."
          ],
          "d": "Hint: after <b>be used to</b>, use verb-ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I have to finish the report until Friday.",
          "r": "I have to finish the report by Friday.",
          "aceita": [],
          "d": "Hint: a deadline needs <b>by</b>. <i>Until</i> is for something that continues."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "When we arrived, nobody has lived there for years.",
          "r": "When we arrived, nobody had lived there for years.",
          "aceita": [],
          "d": "Hint: the earlier past needs <b>had</b> + participle."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b5bffe863ea0/b2-review-the-expedition/img/live-capa.webp",
      "leg": "A lantern, a map and a notebook on a desk",
      "pede": "Look at the picture: a lantern, a map and a notebook on a dark desk at a remote station. Write 2 or 3 sentences about the expedition: what had changed when the team arrived, what they were going to do, and what they will have done by next year.",
      "ph": "When the team arrived, ...",
      "ex": "When the team arrived, nobody had used the station for years. They were going to stay three months, but they stayed six. By next year they will have written a long report."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Tell me about something you had to get used to. Are you used to it now?",
          "ph": "I had to get used to ... Now I'm used to ...",
          "ex": "I had to get used to waking up early. Now I'm used to it, but I'm still getting used to the cold."
        },
        {
          "q": "What will you have done by this time next year?",
          "ph": "By this time next year I will have ...",
          "ex": "By this time next year I will have finished my course and saved some money."
        }
      ]
    }
  }
};
