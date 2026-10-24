/* THE REFERENCE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: hedging: tends to, I would say, not the most, I would rather not. B2 Business: nenhum português. */
window.HW2 = {
  "id": "the-reference",
  "titulo": "The Reference",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/12af2962657f/the-reference/img/live-telefone.webp",
  "alvo": "hedging and reading between the lines: tends to + verb, I would say, not the most + adjective, I would rather not + plain verb; polite words that soften a weakness",
  "abrir": "How do people say bad news politely where you live?",
  "fecho": "Soften the truth without lying: <b>tends to</b> + verb (<i>he tends to be late</i>), <b>I would say</b>, <b>not the most</b> + adjective (<i>not the most organized</i>), <b>I would rather not</b> + plain verb (<i>I'd rather not say</i>). Never <i>tends being</i>, never <i>rather not to say</i>, never <i>the more organized</i>.",
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
      "sub": "Mia asks Leo about a person he used to work with. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/12af2962657f/the-reference/img/live-fundo.webp",
      "leg": "A dark meeting room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you worked with Tomas for two years. Would you recommend him?"
        },
        {
          "quem": "leo",
          "t": "I would say he is very good with clients. He tends to stay calm when things go wrong."
        },
        {
          "quem": "mia",
          "t": "And with deadlines?"
        },
        {
          "quem": "leo",
          "t": "Well, he is not the most organized person I know. He tends to finish at the last minute."
        },
        {
          "quem": "mia",
          "t": "Is that a problem?"
        },
        {
          "quem": "leo",
          "t": "Not always. His reports are excellent in the end."
        },
        {
          "quem": "mia",
          "t": "What about working in a team?"
        },
        {
          "quem": "leo",
          "t": "I would rather not say too much about that. You should ask his last manager."
        },
        {
          "quem": "mia",
          "t": "So is that a no?"
        },
        {
          "quem": "leo",
          "t": "I would say it is not a yes. Read between the lines, Mia."
        },
        {
          "quem": "mia",
          "t": "I understand. Thank you for being honest."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo say about Tomas and clients?",
          "op": [
            "He stays calm with them",
            "He is rude to them",
            "He avoids them"
          ],
          "a": 0,
          "por": "He tends to stay calm when things go wrong."
        },
        {
          "q": "What is Tomas's weak point?",
          "op": [
            "Deadlines",
            "Clients",
            "Reports"
          ],
          "a": 0,
          "por": "He is not the most organized person I know. He tends to finish at the last minute."
        },
        {
          "q": "Why does Leo say he would rather not?",
          "op": [
            "He prefers not to talk about teamwork",
            "He doesn't know Tomas",
            "He is angry with Mia"
          ],
          "a": 0,
          "por": "I would rather not say too much about that."
        }
      ]
    },
    "out": {
      "sub": "Three polite sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "He tends to be late with his reports.",
          "img": "https://wolf-labs.pages.dev/p/12af2962657f/the-reference/img/live-fundo.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She is not the most patient manager.",
          "img": "https://wolf-labs.pages.dev/p/12af2962657f/the-reference/img/live-sala.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I would rather not comment on that.",
          "img": "https://wolf-labs.pages.dev/p/12af2962657f/the-reference/img/live-telefone.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Soften it, don't break it. Four quick ones.",
      "regra": "<b>tends to</b> + verb · <b>I would say</b> · <b>not the most</b> + adjective · <b>I would rather not</b> + plain verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "He is not the most organized person here.",
          "aceita": [],
          "d": "Hint: <b>not the most</b> + adjective softens a weakness."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He tends being late on Mondays.",
          "r": "He tends to be late on Mondays.",
          "aceita": [],
          "d": "Hint: <b>tends to</b> + the plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I would rather not to say.",
          "r": "I would rather not say.",
          "aceita": [
            "I'd rather not say."
          ],
          "d": "Hint: <b>would rather not</b> + the plain verb, with no <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She is not the more organized person here.",
          "r": "She is not the most organized person here.",
          "aceita": [],
          "d": "Hint: with <i>the</i> + a group of people, use <b>the most</b>, not <i>the more</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/12af2962657f/the-reference/img/live-telefone.webp",
      "leg": "A phone in a dark room",
      "pede": "Look at the picture: a phone ringing in a dark room. Someone asks you for a reference about a colleague or a classmate. Write 2 or 3 sentences, kind and true. Use <b>tends to</b>, <b>I would say</b>, <b>not the most</b> or <b>I would rather not</b>.",
      "ph": "I would say … tends to …",
      "ex": "My colleague tends to be quiet in meetings. I would say she is very reliable. She is not the most patient person, but I would rather not say more."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who would you recommend for a job? Why?",
          "ph": "I would say … tends to …",
          "ex": "I would say my cousin is reliable. He tends to arrive early."
        },
        {
          "q": "Who is not the most patient or organized person you know? Say it politely.",
          "ph": "… is not the most … person I know.",
          "ex": "My boss is not the most patient person I know, but she is fair."
        }
      ]
    }
  }
};
