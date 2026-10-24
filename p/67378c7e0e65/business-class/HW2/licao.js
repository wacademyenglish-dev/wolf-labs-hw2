/* BUSINESS CLASS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: question tags. B2: nenhum português. Imagens live-* (todas escuras). */
window.HW2 = {
  "id": "business-class",
  "titulo": "Business Class",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/67378c7e0e65/business-class/img/live-capa.webp",
  "alvo": "question tags to start and confirm a conversation: same auxiliary and subject, opposite polarity (You're from Lagos, aren't you? It was great, wasn't it?) · no auxiliary: do / does / did (You work in fintech, don't you? We met in Lisbon, didn't we?) · negative sentence, positive tag (You haven't been here, have you?); never isn't it for everything, never the same polarity twice",
  "abrir": "What do you say to start a conversation with a stranger?",
  "fecho": "<b>Positive sentence, negative tag</b>: <i>You're from Lagos, aren't you? It was great, wasn't it?</i> <b>Negative sentence, positive tag</b>: <i>You haven't been here before, have you?</i> No auxiliary? Use <b>do / does / did</b>: <i>You work in fintech, don't you? We met in Lisbon, didn't we?</i> The tag repeats the subject: <i>you, it, we</i>.",
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
      "sub": "Mia and Leo meet at a fintech conference in Singapore. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/67378c7e0e65/business-class/img/live-a.webp",
      "leg": "A badge holder and a glass of water",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you're here for the fintech conference, aren't you?"
        },
        {
          "quem": "mia",
          "t": "Yes, I am. And you work for a bank, don't you?"
        },
        {
          "quem": "leo",
          "t": "I do. We met last year in Lisbon, didn't we?"
        },
        {
          "quem": "mia",
          "t": "I think so! You were at the panel on open banking."
        },
        {
          "quem": "leo",
          "t": "That's right. The keynote this morning was great, wasn't it?"
        },
        {
          "quem": "mia",
          "t": "It was. The CEO talked a lot about payments. You haven't been to Singapore before, have you?"
        },
        {
          "quem": "leo",
          "t": "No, never. It's my first time."
        },
        {
          "quem": "mia",
          "t": "You'll come to the networking drinks tonight, won't you?"
        },
        {
          "quem": "leo",
          "t": "Of course. I want three real contacts, not thirty business cards."
        },
        {
          "quem": "mia",
          "t": "Same here. I'll follow up with you tomorrow."
        }
      ],
      "perguntas": [
        {
          "q": "Where did Mia and Leo meet last year?",
          "op": [
            "In Lisbon",
            "In Lagos",
            "In Singapore"
          ],
          "a": 0,
          "por": "We met last year in Lisbon, didn't we?"
        },
        {
          "q": "What was great this morning?",
          "op": [
            "The keynote",
            "The coffee",
            "The panel"
          ],
          "a": 0,
          "por": "The keynote this morning was great, wasn't it?"
        },
        {
          "q": "Has Leo been to Singapore before?",
          "op": [
            "No, it's his first time",
            "Yes, twice",
            "Yes, last year"
          ],
          "a": 0,
          "por": "No, never. It's my first time."
        }
      ]
    },
    "out": {
      "sub": "Three question tags for a conference. Hear it, then say it.",
      "frases": [
        {
          "t": "You're from Lagos, aren't you?",
          "img": "https://wolf-labs.pages.dev/p/67378c7e0e65/business-class/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You work in fintech, don't you?",
          "img": "https://wolf-labs.pages.dev/p/67378c7e0e65/business-class/img/live-a.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The keynote was great, wasn't it?",
          "img": "https://wolf-labs.pages.dev/p/67378c7e0e65/business-class/img/live-b.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Which tag? Four quick ones.",
      "regra": "positive sentence → negative tag · negative sentence → positive tag · no auxiliary? <b>do / does / did</b> · the tag repeats the subject.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We met in Lisbon, didn't we?",
          "aceita": [],
          "d": "Hint: no auxiliary in <i>met</i>, so the tag uses <b>did</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the tag is wrong.",
          "mostra": "You're from Lagos, isn't it?",
          "r": "You're from Lagos, aren't you?",
          "aceita": [],
          "d": "Hint: the tag repeats the subject: <b>you</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the tag is wrong.",
          "mostra": "You work in fintech, aren't you?",
          "r": "You work in fintech, don't you?",
          "aceita": [
            "You work in fintech, do not you?"
          ],
          "d": "Hint: <i>work</i> has no auxiliary, so use <b>do</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the tag is wrong.",
          "mostra": "It was a great talk, didn't it?",
          "r": "It was a great talk, wasn't it?",
          "aceita": [
            "It was a great talk, was not it?"
          ],
          "d": "Hint: <i>was</i> is the auxiliary, so the tag uses <b>was</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/67378c7e0e65/business-class/img/live-a.webp",
      "leg": "A badge holder and a glass of water",
      "pede": "Look at the picture: a badge holder and a glass of water on a conference table. Write 2 or 3 sentences or questions to start a conversation with a new contact. Use question tags.",
      "ph": "You're here for …, aren't you?",
      "ex": "You're here for the keynote, aren't you? You work in fintech, don't you? The coffee was great, wasn't it?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "You are at a conference and you meet someone new. Write one question with a tag.",
          "ph": "You … , don't you?",
          "ex": "You came by train, didn't you?"
        },
        {
          "q": "What do you think you know about your teacher? Check it with a tag.",
          "ph": "You … , don't you?",
          "ex": "You like coffee, don't you?"
        }
      ]
    }
  }
};
