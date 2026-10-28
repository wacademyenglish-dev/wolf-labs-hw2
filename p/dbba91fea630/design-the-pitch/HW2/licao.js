/* THE PITCH · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: decisões com motivo: because / so that / to + verbo. B1: nenhum português. Só live-capa (escura). */
window.HW2 = {
  "id": "design-the-pitch",
  "titulo": "The Pitch",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "pitching a project from brief to delivery: past simple story · decisions with reasons (because + clause, so that + clause, to + verb; never because of + clause, never for + verb) · polite reply to an opinion (I'm glad you brought that up; My only concern was...) · I agree, never I am agree",
  "abrir": "Think of a project you did. What was the client like?",
  "fecho": "A pitch is a story with reasons. <b>Because</b> + a clause: <i>We chose yellow because it feels friendly.</i> <b>So that</b> + a clause: <i>…so that the room feels brighter.</i> <b>To</b> + verb: <i>We moved the desk to use the daylight.</i> Answer an opinion politely: <b>I'm glad you brought that up.</b> Say <i>I agree</i>, never <i>I am agree</i>.",
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
      "sub": "Mia pitches a project to a client, played by Leo. A new scene, about one minute.",
      "img": "../img/live-capa.webp",
      "leg": "The big meeting",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Thanks for having me. I'd like to show you a project I'm proud of: a reading corner for a small bookshop."
        },
        {
          "quem": "leo",
          "t": "Great. What was the problem?"
        },
        {
          "quem": "mia",
          "t": "The corner was dark, and customers never sat there."
        },
        {
          "quem": "leo",
          "t": "What did you decide?"
        },
        {
          "quem": "mia",
          "t": "We painted the walls warm white so that the corner feels brighter, and we moved the armchairs next to the window to use the daylight."
        },
        {
          "quem": "leo",
          "t": "Hmm, I'm not sure about the yellow armchairs, to be honest."
        },
        {
          "quem": "mia",
          "t": "I'm glad you brought that up. We chose yellow because it makes the corner feel friendly. My only concern was the dark floor, so we added a rug."
        },
        {
          "quem": "leo",
          "t": "Did the owner ask for changes?"
        },
        {
          "quem": "mia",
          "t": "Yes, one round of revisions. I delivered the final plan two days early."
        },
        {
          "quem": "leo",
          "t": "And the result?"
        },
        {
          "quem": "mia",
          "t": "Customers now stay about twenty minutes longer, and the owner started a weekly reading group."
        }
      ],
      "perguntas": [
        {
          "q": "What was the problem in the bookshop?",
          "op": [
            "The corner was dark and nobody sat there",
            "The shelves were too low",
            "The shop had no customers"
          ],
          "a": 0,
          "por": "The corner was dark, and customers never sat there."
        },
        {
          "q": "Why did Mia choose yellow armchairs?",
          "op": [
            "Because it makes the corner feel friendly",
            "Because they were cheap",
            "Because the owner asked for them"
          ],
          "a": 0,
          "por": "We chose yellow because it makes the corner feel friendly."
        },
        {
          "q": "What changed for the shop?",
          "op": [
            "Customers stay longer, and there is a reading group",
            "The shop moved",
            "The owner closed the corner"
          ],
          "a": 0,
          "por": "Customers now stay about twenty minutes longer, and the owner started a weekly reading group."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from a pitch. Hear it, then say it.",
      "frases": [
        {
          "t": "I'd like to show you a project I'm really proud of.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We moved the armchairs next to the window to use the daylight.",
          "img": "../img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We chose yellow because it makes the corner feel friendly.",
          "img": "../img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Decisions with reasons. Four quick ones.",
      "regra": "<b>because</b> + clause · <b>so that</b> + clause · <b>to</b> + verb · <i>because of</i> needs a noun · <b>I agree</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We painted the walls white so that the room feels brighter.",
          "aceita": [],
          "d": "Hint: <b>so that</b> + a clause with its own subject and verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We moved the desk for use the daylight.",
          "r": "We moved the desk to use the daylight.",
          "aceita": [],
          "d": "Hint: to give a purpose, use <b>to</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We chose this color because of it feels calm.",
          "r": "We chose this color because it feels calm.",
          "aceita": [],
          "d": "Hint: <b>because</b> goes before a clause; <i>because of</i> goes before a noun."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I am agree with your point.",
          "r": "I agree with your point.",
          "aceita": [],
          "d": "Hint: <b>agree</b> is a verb, so no <i>am</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-capa.webp",
      "leg": "A stool under a spotlight",
      "pede": "Look at the picture: a single stool under a light, like a stage. Imagine you are pitching a project. Write 3 sentences: one decision, the reason (<b>because</b>, <b>so that</b> or <b>to</b>), and the result.",
      "ph": "We chose … because …",
      "ex": "We chose a round table so that everyone can see each other. We moved the shelves to use the wall space. As a result, the room feels bigger."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a project you did. What was one decision you made, and why?",
          "ph": "We chose … because …",
          "ex": "I chose big letters on the poster because people read it from far away."
        },
        {
          "q": "A client says: \"I'm not sure about this color.\" What do you answer?",
          "ph": "I'm glad you brought that up. …",
          "ex": "I'm glad you brought that up. We chose it because it matches the logo."
        }
      ]
    }
  }
};
