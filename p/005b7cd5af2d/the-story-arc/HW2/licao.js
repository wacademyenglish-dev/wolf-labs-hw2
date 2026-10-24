/* THE STORY ARC · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: story signposts and narrative tenses. C1: zero portugues. */
window.HW2 = {
  "id": "the-story-arc",
  "titulo": "The Story Arc",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/005b7cd5af2d/the-story-arc/img/live-conversa.webp",
  "alvo": "the story inside a talk: It all started when ..., At first, ..., Things got worse when ..., That's when ..., It turned out that ..., Fast forward to ..., Looking back, ..., The lesson I learned was ...; narrative tenses (past simple, past continuous, past perfect); in the end, not at the end",
  "abrir": "What story do you always tell at parties? How does it begin?",
  "fecho": "A story has signposts: <b>It all started when … · At first, … · Things got worse when … · That's when … · It turned out that … · Fast forward to … · Looking back, …</b> Keep the past in the past, with <b>had</b> for what came earlier. <b>In the end</b> = finally; never <i>it turned out what</i>.",
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
  "rate": "-8%",
  "rodadas": {
    "listen": {
      "sub": "Mia coaches Leo on the story for his talk. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/005b7cd5af2d/the-story-arc/img/live-conversa.webp",
      "leg": "A campfire at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, tell me the story you want to use in your talk."
        },
        {
          "quem": "leo",
          "t": "It all started when I bought a second-hand food truck for almost no money."
        },
        {
          "quem": "mia",
          "t": "Good signpost. Then what?"
        },
        {
          "quem": "leo",
          "t": "At first, it was exciting. Then things got worse when the engine broke down on the first day, and I had been living on instant noodles for a month."
        },
        {
          "quem": "mia",
          "t": "And what was the turning point?"
        },
        {
          "quem": "leo",
          "t": "That's when a stranger stopped, looked at the engine, and fixed it in ten minutes. It turned out that he was a retired mechanic."
        },
        {
          "quem": "mia",
          "t": "A lovely twist. Where does the story end?"
        },
        {
          "quem": "leo",
          "t": "Fast forward to today: he works with me three days a week, and we have a queue every lunchtime."
        },
        {
          "quem": "mia",
          "t": "And the message?"
        },
        {
          "quem": "leo",
          "t": "Looking back, the lesson I learned was to ask for help sooner."
        },
        {
          "quem": "mia",
          "t": "That's your talk. Tell it exactly like that."
        }
      ],
      "perguntas": [
        {
          "q": "What went wrong on the first day?",
          "op": [
            "The engine broke down",
            "The food ran out",
            "The truck was stolen"
          ],
          "a": 0,
          "por": "The engine broke down on the first day."
        },
        {
          "q": "What does it turned out that he was a retired mechanic reveal?",
          "op": [
            "A surprising fact discovered later",
            "A plan Leo made earlier",
            "A rule of public speaking"
          ],
          "a": 0,
          "por": "It turned out that he was a retired mechanic."
        },
        {
          "q": "What is the lesson Leo learned?",
          "op": [
            "To ask for help sooner",
            "To avoid second-hand trucks",
            "To work alone"
          ],
          "a": 0,
          "por": "Looking back, the lesson I learned was to ask for help sooner."
        }
      ]
    },
    "out": {
      "sub": "Three signposts of a story. Hear it, then say it.",
      "frases": [
        {
          "t": "It all started when I bought a second-hand truck for almost nothing.",
          "img": "https://wolf-labs.pages.dev/p/005b7cd5af2d/the-story-arc/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Things got worse when the engine broke down on the very first day.",
          "img": "https://wolf-labs.pages.dev/p/005b7cd5af2d/the-story-arc/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Looking back, the lesson I learned was to ask for help sooner.",
          "img": "https://wolf-labs.pages.dev/p/005b7cd5af2d/the-story-arc/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Tell it in the right tense. Four quick ones.",
      "regra": "<b>It turned out that</b> · <b>In the end</b> (finally) · <b>had</b> + past participle for what came before · past tense for the whole story.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It turned out that he was a mechanic.",
          "aceita": [],
          "d": "Hint: <b>it turned out that</b> + a new fact, discovered later."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It turned out what he was famous.",
          "r": "It turned out that he was famous.",
          "aceita": [],
          "d": "Hint: the connector is <b>that</b>, never <i>what</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "At the end, we survived.",
          "r": "In the end, we survived.",
          "aceita": [
            "Eventually, we survived."
          ],
          "d": "Hint: <b>in the end</b> = finally, the result of everything that happened."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is missing.",
          "mostra": "When I arrived, the shop already closed.",
          "r": "When I arrived, the shop had already closed.",
          "aceita": [
            "When I arrived the shop had already closed."
          ],
          "d": "Hint: it closed before I arrived, so use <b>had</b> + past participle."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/005b7cd5af2d/the-story-arc/img/live-conversa.webp",
      "leg": "A campfire in the dark",
      "pede": "Look at the picture: a campfire at night, the oldest place for stories. Write 2 or 3 sentences of a story from your life, using signposts such as <b>It all started when …</b>, <b>That's when …</b> or <b>It turned out that …</b>.",
      "ph": "It all started when …",
      "ex": "It all started when I missed the last bus in a new city. That's when a stranger offered me a lift, and it turned out that she was my future neighbour. Looking back, I'm glad I asked."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is a story from your life that you always tell? How does it begin?",
          "ph": "It all started when …",
          "ex": "It all started when I got on the wrong train and ended up in another city. At first, I panicked."
        },
        {
          "q": "Looking back, what is a lesson you learned the hard way?",
          "ph": "Looking back, the lesson I learned was …",
          "ex": "Looking back, the lesson I learned was to start earlier and ask for feedback."
        }
      ]
    }
  }
};
