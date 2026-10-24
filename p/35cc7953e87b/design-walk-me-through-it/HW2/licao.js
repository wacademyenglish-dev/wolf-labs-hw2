/* WALK ME THROUGH IT · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: decisao + motivo (because / so that / to). Curso de Design (B1+): nenhum português. */
window.HW2 = {
  "id": "walk-me-through-it",
  "titulo": "Walk Me Through It",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/35cc7953e87b/design-walk-me-through-it/img/live-capa.webp",
  "alvo": "presenting a design decision with its reason: goal + decision + because / so that / to + verb; Our goal was to ...; As a result ...; answering an opinion with Yes, ... Can you help me understand ...?",
  "abrir": "When did you last explain a choice you made? Who was listening?",
  "fecho": "A design decision always comes with a reason: <i>We moved the button <b>so that</b> people can reach it. We chose green <b>because</b> it feels calm. We made the logo smaller <b>to</b> save space.</i> Start with the goal (<b>Our goal was to ...</b>), end with the result (<b>As a result, ...</b>). When someone says <i>I don't like it</i>: <b>Yes, ... Can you help me understand ...?</b>",
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
      "sub": "Mia presents a new screen to her manager. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/35cc7953e87b/design-walk-me-through-it/img/live-capa.webp",
      "leg": "The review room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Thanks for coming, Leo. Let me walk you through the new order screen for the Crumb bakery app."
        },
        {
          "quem": "leo",
          "t": "Go ahead. What was the goal?"
        },
        {
          "quem": "mia",
          "t": "Our goal was to make ordering faster. In the old version, people needed seven taps."
        },
        {
          "quem": "leo",
          "t": "Seven? That is a lot. What did you change first?"
        },
        {
          "quem": "mia",
          "t": "We moved the Order button to the bottom, so that people can reach it with one thumb."
        },
        {
          "quem": "leo",
          "t": "Hmm. I don't like the button there."
        },
        {
          "quem": "mia",
          "t": "Yes, I see. Can you help me understand what doesn't work for the user?"
        },
        {
          "quem": "leo",
          "t": "Honestly, I just like it at the top."
        },
        {
          "quem": "mia",
          "t": "That's fair. We chose the bottom because our test showed that most people hold the phone with one hand."
        },
        {
          "quem": "leo",
          "t": "Okay, that is a real reason. And the green?"
        },
        {
          "quem": "mia",
          "t": "We used a soft green to show that a cake is available. As a result, ordering now takes three taps."
        },
        {
          "quem": "leo",
          "t": "Three taps. Please send me the test notes."
        }
      ],
      "perguntas": [
        {
          "q": "What was the goal of the new screen?",
          "op": [
            "To make ordering faster",
            "To sell more cakes",
            "To change the logo"
          ],
          "a": 0,
          "por": "Our goal was to make ordering faster."
        },
        {
          "q": "Why did Mia put the button at the bottom?",
          "op": [
            "Most people hold the phone with one hand",
            "The top of the screen was full",
            "Leo asked for it"
          ],
          "a": 0,
          "por": "We chose the bottom because our test showed that most people hold the phone with one hand."
        },
        {
          "q": "What was the result?",
          "op": [
            "Ordering now takes three taps",
            "Ordering now takes seven taps",
            "Nobody used the new screen"
          ],
          "a": 0,
          "por": "As a result, ordering now takes three taps."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from a design review. Hear it, then say it.",
      "frases": [
        {
          "t": "Let me walk you through the new order screen.",
          "img": "https://wolf-labs.pages.dev/p/35cc7953e87b/design-walk-me-through-it/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We moved the button so that people can reach it.",
          "img": "https://wolf-labs.pages.dev/p/35cc7953e87b/design-walk-me-through-it/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "As a result, ordering now takes three taps.",
          "img": "https://wolf-labs.pages.dev/p/35cc7953e87b/design-walk-me-through-it/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Decision and reason. Four quick ones.",
      "regra": "<b>so that</b> + a full clause · <b>because</b> + a full clause (never <i>because to</i>) · <b>to</b> + verb · <b>Our goal was to ...</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We moved the button so that people can tap it.",
          "aceita": [],
          "d": "Hint: <b>so that</b> + a full clause: people can tap it."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We made the logo smaller for save space.",
          "r": "We made the logo smaller to save space.",
          "aceita": [],
          "d": "Hint: a purpose with a verb is <b>to</b> + verb, not <i>for</i> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We chose green because to look calm.",
          "r": "We chose green because it looks calm.",
          "aceita": [
            "We chose green because it feels calm.",
            "We chose green to look calm."
          ],
          "d": "Hint: after <b>because</b> you need a full clause, with a subject and a verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Our goal was make booking faster.",
          "r": "Our goal was to make booking faster.",
          "aceita": [],
          "d": "Hint: <b>Our goal was to</b> + verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/35cc7953e87b/design-walk-me-through-it/img/live-capa.webp",
      "leg": "An empty stage, one red light",
      "pede": "Look at the picture: an empty stage with one red light. Imagine you present a design of yours. Write 2 or 3 sentences: one decision and its reason. Use <b>because</b>, <b>so that</b> or <b>to</b>.",
      "ph": "We chose … because …",
      "ex": "We chose a dark blue for the logo because it feels stable. We made the text bigger so that older users can read it."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of something you designed or arranged: a poster, a room, a slide. What did you change, and why?",
          "ph": "I moved … so that …",
          "ex": "I moved my desk next to the window so that I get more light."
        },
        {
          "q": "Someone says: I don't like it. What do you answer?",
          "ph": "Yes, … Can you help me understand …?",
          "ex": "Yes, I see. Can you help me understand what doesn't work for you?"
        }
      ]
    }
  }
};
