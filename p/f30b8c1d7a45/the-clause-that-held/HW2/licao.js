/* THE CLAUSE THAT HELD · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: frase clivada (It was ... that / What we did was / What I want is for ... to / All we wanted was). C1: nenhum português. Imagens live-tesoura e live-bg-* (escuras). */
window.HW2 = {
  "id": "the-clause-that-held",
  "titulo": "The Clause That Held",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f30b8c1d7a45/the-clause-that-held/img/live-tesoura.webp",
  "alvo": "cleft sentences in negotiation: It was the date THAT killed the deal · What we needed was ... · What we did was + bare verb · What I want is FOR + person + TO · The reason was THAT (never because) · All we wanted was (never all what) · It was not the price that ...; never 'What I want is that you sign', never 'What we did was we called'",
  "abrir": "Think of a negotiation or argument that nearly fell apart. What did it come down to?",
  "fecho": "A cleft puts half the sentence in the light and hands over the other half as settled. <b>It was the date that</b> … · <b>What we needed was</b> … · <b>What we did was call</b> (a bare verb, no second subject) · <b>What I want is for you to</b> … · <b>The reason was that</b> … (never <i>because</i>) · <b>All we wanted was</b> … (never <i>all what</i>) · <b>It was not the price that</b> stopped us.",
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
      "sub": "Mia and Leo debrief after a long contract negotiation. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/f30b8c1d7a45/the-clause-that-held/img/live-bg-meeting-exec.webp",
      "leg": "The meeting room, after the negotiation",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the board wants to know how clause seven survived. Start with the real problem."
        },
        {
          "quem": "leo",
          "t": "It was the delivery date that nearly killed the deal. Three versions died over it."
        },
        {
          "quem": "mia",
          "t": "And what did your team need?"
        },
        {
          "quem": "leo",
          "t": "What we needed was a date we could hold. Version one only said a reasonable period."
        },
        {
          "quem": "mia",
          "t": "What did you do when they said ninety days?"
        },
        {
          "quem": "leo",
          "t": "What we did was call them back the same afternoon."
        },
        {
          "quem": "mia",
          "t": "Was it the price that stopped you?"
        },
        {
          "quem": "leo",
          "t": "No. It was not the price that stopped us. All we wanted was a number."
        },
        {
          "quem": "mia",
          "t": "And what do you want from them now?"
        },
        {
          "quem": "leo",
          "t": "What I want is for the date to hold. The reason I pushed so hard was that we had no stock to spare."
        },
        {
          "quem": "mia",
          "t": "Good. I'll write it up exactly like that."
        }
      ],
      "perguntas": [
        {
          "q": "What nearly killed the deal?",
          "op": [
            "The delivery date",
            "The price",
            "The warranty"
          ],
          "a": 0,
          "por": "It was the delivery date that nearly killed the deal."
        },
        {
          "q": "What did the team do when the supplier said ninety days?",
          "op": [
            "They called back the same afternoon",
            "They accepted the offer",
            "They wrote a new contract"
          ],
          "a": 0,
          "por": "What we did was call them back the same afternoon."
        },
        {
          "q": "What does Leo say was NOT the problem?",
          "op": [
            "The price",
            "The date",
            "The stock"
          ],
          "a": 0,
          "por": "It was not the price that stopped us."
        }
      ]
    },
    "out": {
      "sub": "Three clefts for the board. Hear it, then say it.",
      "frases": [
        {
          "t": "It was the delivery date that nearly killed the deal.",
          "img": "https://wolf-labs.pages.dev/p/f30b8c1d7a45/the-clause-that-held/img/live-bg-corner-office.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "What we did was call them back the same afternoon.",
          "img": "https://wolf-labs.pages.dev/p/f30b8c1d7a45/the-clause-that-held/img/live-bg-window-exec.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "What I want is for the date to hold.",
          "img": "https://wolf-labs.pages.dev/p/f30b8c1d7a45/the-clause-that-held/img/live-bg-meeting-exec.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Cut the sentence in two. Four quick ones.",
      "regra": "<b>It was X that</b> · <b>What we did was</b> + bare verb · <b>What I want is for you to</b> · <b>The reason was that</b> · <b>All we wanted was</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What we did was call them back the same day.",
          "aceita": [],
          "d": "Hint: after <b>What we did was</b> comes a bare verb: <b>call</b>, with no second subject."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "What I want is that you sign it.",
          "r": "What I want is for you to sign it.",
          "aceita": [
            "I want you to sign it."
          ],
          "d": "Hint: someone else acts, so <b>for</b> + person + <b>to</b>, never <i>is that you</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is too many.",
          "mostra": "All what we wanted was a number.",
          "r": "All we wanted was a number.",
          "aceita": [],
          "d": "Hint: <b>all</b> needs no <i>what</i>: <b>all we wanted</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The reason was because the date was missing.",
          "r": "The reason was that the date was missing.",
          "aceita": [
            "The reason was that the date was missing."
          ],
          "d": "Hint: <b>the reason</b> already gives the cause, so use <b>that</b>, not <i>because</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f30b8c1d7a45/the-clause-that-held/img/live-bg-desk-exec.webp",
      "leg": "A desk at night: lamp, phone, screen",
      "pede": "Look at the picture: a desk at night with a lamp, a phone and a screen. Write 2 or 3 sentences about a negotiation or argument you remember. Use <b>It was … that</b>, <b>What I needed was</b>, <b>The reason was that</b> or <b>All I wanted was</b>.",
      "ph": "It was … that …",
      "ex": "It was the start date that nearly killed the plan. What I needed was a clear answer. The reason I stayed was that the team was great."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What nearly stopped your last big plan? What was the real problem?",
          "ph": "It was … that …",
          "ex": "It was the budget that nearly stopped our trip."
        },
        {
          "q": "What is one thing you want from someone this week?",
          "ph": "What I want is for … to …",
          "ex": "What I want is for my manager to answer my email."
        }
      ]
    }
  }
};
