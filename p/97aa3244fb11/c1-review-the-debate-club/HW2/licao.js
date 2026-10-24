/* THE DEBATE CLUB · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=".
   Alvo: arguing and persuading: In short / The bottom line is, Grant. C1: nenhum português. */
window.HW2 = {
  "id": "c1-review-the-debate-club",
  "titulo": "The Debate Club",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/97aa3244fb11/c1-review-the-debate-club/img/live-capa.webp",
  "alvo": "arguing and persuading: In short / The bottom line is, Granted ..., be that as it may, On the contrary vs On the other hand, What if ...? + past, Assuming / Given that / Providing + present, What I liked was ..., It might be worth ...",
  "abrir": "What is an opinion you defend even when people disagree?",
  "fecho": "Open with the point: <b>In short</b>, <b>the bottom line is</b> … Concede, then turn: <b>Granted</b>, … <b>Be that as it may</b>, … <b>On the contrary</b> = no, the opposite. <b>On the other hand</b> = another side. Persuade: <b>What if everyone worked less?</b> (past, not <i>would</i>). Conditions: <b>Assuming</b>, <b>given that</b>, <b>providing</b> + present.",
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
      "sub": "Mia and Leo prepare for a debate. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/97aa3244fb11/c1-review-the-debate-club/img/live-capa.webp",
      "leg": "An empty debating hall",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, our motion tomorrow is a four-day work week. Help me open."
        },
        {
          "quem": "leo",
          "t": "Start with the bottom line. In short, a shorter week makes people more productive."
        },
        {
          "quem": "mia",
          "t": "The other team will say people will feel lonely at home."
        },
        {
          "quem": "leo",
          "t": "Concede first. Granted, some people miss the office. Be that as it may, rested workers make fewer mistakes."
        },
        {
          "quem": "mia",
          "t": "They will also say a short week is lazy."
        },
        {
          "quem": "leo",
          "t": "On the contrary, people work harder on four days. On the other hand, the schedule has to be planned well."
        },
        {
          "quem": "mia",
          "t": "How do I persuade the judges?"
        },
        {
          "quem": "leo",
          "t": "Ask them: What if every Friday belonged to your family? Then add a condition. Assuming the pilot works, we can extend it, providing nobody loses pay."
        },
        {
          "quem": "mia",
          "t": "And feedback afterwards?"
        },
        {
          "quem": "leo",
          "t": "Keep it kind. What I liked was your example. It might be worth adding some data."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo want Mia to give first?",
          "op": [
            "The bottom line",
            "A joke",
            "The data"
          ],
          "a": 0,
          "por": "Start with the bottom line."
        },
        {
          "q": "How should Mia answer the claim that a short week is lazy?",
          "op": [
            "With On the contrary, to deny it",
            "With Granted, to agree",
            "With What if, to ask"
          ],
          "a": 0,
          "por": "On the contrary, people work harder on four days."
        },
        {
          "q": "What condition does Leo give for extending the pilot?",
          "op": [
            "Nobody loses pay",
            "Everybody works Fridays",
            "The judges agree"
          ],
          "a": 0,
          "por": "We can extend it, providing nobody loses pay."
        }
      ]
    },
    "out": {
      "sub": "Three lines for the final. Hear it, then say it.",
      "frases": [
        {
          "t": "In short, a shorter week makes people more productive.",
          "img": "https://wolf-labs.pages.dev/p/97aa3244fb11/c1-review-the-debate-club/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Granted, it is hard at first. Be that as it may, rested workers make fewer mistakes.",
          "img": "https://wolf-labs.pages.dev/p/97aa3244fb11/c1-review-the-debate-club/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "What if every Friday belonged to your family?",
          "img": "https://wolf-labs.pages.dev/p/97aa3244fb11/c1-review-the-debate-club/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Concede, contrast, persuade. Four quick ones.",
      "regra": "<b>Granted … be that as it may</b> · <b>On the contrary</b> / <b>On the other hand</b> · <b>What if</b> + past · <b>providing</b> + present.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Assuming the pilot works we can extend it.",
          "aceita": [],
          "d": "Hint: <b>Assuming</b> + present tense, then the result."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "In the other hand, it can feel lonely.",
          "r": "On the other hand, it can feel lonely.",
          "aceita": [],
          "d": "Hint: the fixed phrase is <b>on the other hand</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the verb form.",
          "mostra": "What if everyone would work fewer days?",
          "r": "What if everyone worked fewer days?",
          "aceita": [],
          "d": "Hint: <b>What if</b> takes the past, not <i>would</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the verb form.",
          "mostra": "We can start, providing nobody will lose pay.",
          "r": "We can start, providing nobody loses pay.",
          "aceita": [
            "We can start providing nobody loses pay."
          ],
          "d": "Hint: after <b>providing</b>, use the present."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/97aa3244fb11/c1-review-the-debate-club/img/live-capa.webp",
      "leg": "An empty debating hall",
      "pede": "Look at the picture: a debating hall. Write 2 or 3 sentences for or against school uniforms. Use <b>Granted</b>, <b>Be that as it may</b> or <b>What if</b>.",
      "ph": "Granted, …",
      "ex": "Granted, uniforms save time in the morning. Be that as it may, students should choose what they wear. What if school allowed one free day a week?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How would you persuade a friend to learn a language? Use What if.",
          "ph": "What if you …?",
          "ex": "What if you could understand your favorite songs?"
        },
        {
          "q": "Give feedback on this class: one thing you liked, one suggestion.",
          "ph": "What I liked was …",
          "ex": "What I liked was the speaking. It might be worth adding more videos."
        }
      ]
    }
  }
};
