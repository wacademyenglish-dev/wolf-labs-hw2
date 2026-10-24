/* LET ME WALK YOU THROUGH IT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: sinalização de apresentação (signposts). B2 Business: nenhum português. */
window.HW2 = {
  "id": "let-me-walk-you-through-it",
  "titulo": "Let Me Walk You Through It",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/931efad3e121/let-me-walk-you-through-it/img/live-abertura.webp",
  "alvo": "signposting in a presentation: Today I'd like to talk to you about, I've divided my talk into, Let's start with, Let me give you an example, What this means is, Moving on to, As I mentioned earlier, On the other hand, To sum up, Are there any questions?",
  "abrir": "When do you speak in front of people, and how do you start?",
  "fecho": "Tell the audience where you are: <b>Today I'd like to talk to you about</b> … · <b>I've divided my talk into</b> … · <b>Let's start with</b> … · <b>Let me give you an example</b> · <b>What this means is</b> … · <b>Moving on to</b> … · <b>On the other hand</b> · <b>To sum up</b> · <b>Are there any questions?</b> Never <i>in the other hand</i>, never <i>any doubts</i>, never <i>speak you about</i>.",
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
      "sub": "Leo rehearses a talk with Mia. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/931efad3e121/let-me-walk-you-through-it/img/live-sala.webp",
      "leg": "A boardroom at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, can I practice my talk with you? It is for the board on Friday."
        },
        {
          "quem": "mia",
          "t": "Of course. Start whenever you are ready."
        },
        {
          "quem": "leo",
          "t": "Today I would like to talk to you about our new office hours. I have divided my talk into three parts."
        },
        {
          "quem": "mia",
          "t": "Good opening. Keep going."
        },
        {
          "quem": "leo",
          "t": "Let's start with the schedule. What this means is that everyone finishes at four on Fridays."
        },
        {
          "quem": "mia",
          "t": "Nice. Can you give me an example?"
        },
        {
          "quem": "leo",
          "t": "Let me give you an example: the sales team can still answer calls from home."
        },
        {
          "quem": "mia",
          "t": "Good. Now move on."
        },
        {
          "quem": "leo",
          "t": "Moving on to the budget. As I mentioned earlier, the cost is small. On the other hand, the savings are big."
        },
        {
          "quem": "mia",
          "t": "Now close it."
        },
        {
          "quem": "leo",
          "t": "To sum up, shorter Fridays help everyone. That brings me to the end of my talk. Are there any questions?"
        },
        {
          "quem": "mia",
          "t": "I have none. Great job, Leo."
        }
      ],
      "perguntas": [
        {
          "q": "How many parts does Leo's talk have?",
          "op": [
            "Three",
            "Two",
            "Five"
          ],
          "a": 0,
          "por": "I have divided my talk into three parts."
        },
        {
          "q": "Which phrase does Leo use to start the example?",
          "op": [
            "Let me give you an example",
            "To sum up",
            "Moving on to"
          ],
          "a": 0,
          "por": "Let me give you an example: the sales team can still answer calls from home."
        },
        {
          "q": "How does Leo close the talk?",
          "op": [
            "He sums up and asks for questions",
            "He tells a joke",
            "He leaves the room"
          ],
          "a": 0,
          "por": "To sum up, shorter Fridays help everyone. Are there any questions?"
        }
      ]
    },
    "out": {
      "sub": "Three signposts. Hear it, then say it.",
      "frases": [
        {
          "t": "Today I would like to talk to you about the budget.",
          "img": "https://wolf-labs.pages.dev/p/931efad3e121/let-me-walk-you-through-it/img/live-abertura.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Let me give you an example.",
          "img": "https://wolf-labs.pages.dev/p/931efad3e121/let-me-walk-you-through-it/img/live-palco.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "To sum up, the plan saves time.",
          "img": "https://wolf-labs.pages.dev/p/931efad3e121/let-me-walk-you-through-it/img/live-fichas.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Open it, move on, close it. Four quick ones.",
      "regra": "<b>Today I'd like to talk to you about</b> · <b>Moving on to</b> · <b>On the other hand</b> · <b>To sum up</b> · <b>Are there any questions?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Moving on to the second part of the talk.",
          "aceita": [],
          "d": "Hint: <b>Moving on to</b> + the next part."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "In the other hand, it costs less.",
          "r": "On the other hand, it costs less.",
          "aceita": [],
          "d": "Hint: the signpost is <b>On the other hand</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I will speak you about the budget.",
          "r": "I will talk to you about the budget.",
          "aceita": [
            "I will speak to you about the budget."
          ],
          "d": "Hint: <b>talk to</b> someone <b>about</b> something. No direct object after <i>speak</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Are there any doubts?",
          "r": "Are there any questions?",
          "aceita": [],
          "d": "Hint: at the end of a talk, ask for <b>questions</b>, not <i>doubts</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/931efad3e121/let-me-walk-you-through-it/img/live-sala.webp",
      "leg": "A boardroom at night",
      "pede": "Look at the picture: a boardroom, ready for a talk. Write the opening of a short talk: what it is about, how many parts it has, and how you move on. Use <b>Today I'd like to talk to you about</b>, <b>I've divided my talk into</b>, <b>Let's start with</b> or <b>Moving on to</b>.",
      "ph": "Today I'd like to talk to you about …",
      "ex": "Today I would like to talk to you about our new schedule. I have divided my talk into two parts. Let's start with the costs. Moving on to the benefits."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "When did you last speak in front of a group? How did you start?",
          "ph": "I started with …",
          "ex": "I presented a project at work. I started with a short story."
        },
        {
          "q": "What topic could you talk about for three minutes? Open your talk.",
          "ph": "Today I'd like to talk to you about …",
          "ex": "Today I would like to talk to you about how to save money."
        }
      ]
    }
  }
};
