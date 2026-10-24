/* THE €6,000 FLAT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: passiva + discurso indireto (said / told / asked). B1: nenhum portugues. Imagens: live-capa e live-b (escuras). */
window.HW2 = {
  "id": "the-6000-flat",
  "titulo": "The €6,000 Flat",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/07cb522bcbe7/the-6000-flat/img/live-capa.webp",
  "alvo": "the passive to tell what happened (The ad was posted; The money was sent) and reported speech (He said the flat was free; He told me to pay; He asked me if I had the money); never was send, never said me, never he told that",
  "abrir": "Have you ever looked for a place to rent? What was the price?",
  "fecho": "<b>Passive</b> = be + past participle: <i>The ad was posted. The money was sent.</i> <b>said</b> + that: <i>He said (that) the flat was free.</i> <b>told</b> + person: <i>He told me to pay.</i> <b>asked</b> + <i>if</i>: <i>He asked me if I had the money.</i> The tense goes one step back. Never <i>said me</i>.",
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
      "sub": "Mia and Leo talk about a flat ad. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/07cb522bcbe7/the-6000-flat/img/live-b.webp",
      "leg": "A door on a wet street at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, look at this flat. The ad was posted this morning, and the rent is only six hundred euros."
        },
        {
          "quem": "leo",
          "t": "That's very cheap for Dublin. Who posted it?"
        },
        {
          "quem": "mia",
          "t": "The landlord. He said the flat was free, and he told me to send a deposit first."
        },
        {
          "quem": "leo",
          "t": "Wait. He asked you to pay before you saw the flat?"
        },
        {
          "quem": "mia",
          "t": "Yes. He said he was abroad, so he couldn't show it to me."
        },
        {
          "quem": "leo",
          "t": "That sounds like a scam. A friend of mine was asked for money the same way."
        },
        {
          "quem": "mia",
          "t": "Really? What happened?"
        },
        {
          "quem": "leo",
          "t": "The money was sent, and the flat was never shown. He told her that the keys were in the post."
        },
        {
          "quem": "mia",
          "t": "OK, I won't pay. I'll ask him if I can see the flat first."
        },
        {
          "quem": "leo",
          "t": "Good idea. And he'll probably say no."
        }
      ],
      "perguntas": [
        {
          "q": "Why is the rent surprising?",
          "op": [
            "It is very cheap for Dublin",
            "It was posted last year",
            "It includes the bills"
          ],
          "a": 0,
          "por": "That's very cheap for Dublin."
        },
        {
          "q": "What did the landlord tell Mia to do?",
          "op": [
            "Send a deposit first",
            "Visit the flat",
            "Call the police"
          ],
          "a": 0,
          "por": "He told me to send a deposit first."
        },
        {
          "q": "What happened to Leo's friend?",
          "op": [
            "The money was sent, but the flat was never shown",
            "She got the flat",
            "The keys arrived"
          ],
          "a": 0,
          "por": "The money was sent, and the flat was never shown."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about an ad. Hear it, then say it.",
      "frases": [
        {
          "t": "The ad was posted three days ago.",
          "img": "https://wolf-labs.pages.dev/p/07cb522bcbe7/the-6000-flat/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "He told me that the flat was free.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "He asked me if I had the money.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "was done, said, told, asked. Four quick ones.",
      "regra": "<b>was / were + past participle</b> · <b>said</b> + that · <b>told</b> + person · <b>asked</b> + <i>if</i> + one tense back.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The flat was advertised online last week.",
          "aceita": [],
          "d": "Hint: <b>was</b> + past participle: <i>was advertised</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The money was send last week.",
          "r": "The money was sent last week.",
          "aceita": [],
          "d": "Hint: after <b>was</b> you need the past participle: <i>sent</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "He said me that the flat was free.",
          "r": "He told me that the flat was free.",
          "aceita": [
            "He said that the flat was free.",
            "He told me the flat was free."
          ],
          "d": "Hint: <b>told me</b> or just <b>said</b>, never <i>said me</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He asked me if I have the money.",
          "r": "He asked me if I had the money.",
          "aceita": [],
          "d": "Hint: in reported speech the tense goes one step back: <i>had</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/07cb522bcbe7/the-6000-flat/img/live-capa.webp",
      "leg": "A phone with a room ad on a rainy night",
      "pede": "Look at the picture: a phone with a room ad on a rainy night. Write 2 or 3 sentences about an ad or a message. Use the passive (<b>was posted</b>, <b>was sent</b>) and <b>said</b>, <b>told</b> or <b>asked</b>.",
      "ph": "The ad was posted … He told me …",
      "ex": "The ad was posted yesterday. The owner told me to send money first. I asked him if I could see the room."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What were you asked to pay for last time? Who asked you?",
          "ph": "I was asked to pay for … by …",
          "ex": "I was asked to pay for a school trip. The teacher asked me yesterday."
        },
        {
          "q": "What did a friend tell you this week?",
          "ph": "My friend told me that …",
          "ex": "My friend told me that she was moving to a new flat."
        }
      ]
    }
  }
};
