/* THE RFC · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: registro formal (nominalização, It is proposed that, cleft, hedging). C1: nenhum português. */
window.HW2 = {
  "id": "the-rfc",
  "titulo": "The RFC",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4d01bb685b96/the-rfc/img/live-capa.webp",
  "alvo": "formal register in technical writing: nominalisation (we migrate -> the migration of), It is proposed that + subject + base verb, the cleft (What we propose is... / The reason we ... is that...), formal hedging (It could be argued that...)",
  "abrir": "Think of a change you would like at work. How would you put it in a formal document?",
  "fecho": "A written proposal is not a chat. <b>It is proposed that</b> + subject + base verb: <i>It is proposed that the queue be migrated.</i> The cleft: <b>What we propose is</b>… · <b>The reason we need it is that</b>… Nouns instead of verbs: <i>the migration of</i>. Hedging: <b>It could be argued that</b>…",
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
      "sub": "Mia and Leo review a draft RFC. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/4d01bb685b96/the-rfc/img/live-capa.webp",
      "leg": "A desk, a notebook, one lamp",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, can you read my RFC before it goes to review? It proposes moving our job queue to a managed service."
        },
        {
          "quem": "leo",
          "t": "Sure. The first line sounds too casual: We wanna move the queue because it keeps breaking."
        },
        {
          "quem": "mia",
          "t": "Right. What should I write instead?"
        },
        {
          "quem": "leo",
          "t": "Try this: It is proposed that the job queue be migrated to a managed service. It sounds objective."
        },
        {
          "quem": "mia",
          "t": "Good. And the motivation? We had four outages this quarter."
        },
        {
          "quem": "leo",
          "t": "Then write: The reason we propose it is that the current queue caused four outages this quarter."
        },
        {
          "quem": "mia",
          "t": "And the cost? The managed service is more expensive."
        },
        {
          "quem": "leo",
          "t": "Be honest. It could be argued that the monthly bill will rise. However, we will save a lot of maintenance time."
        },
        {
          "quem": "mia",
          "t": "I also tested a second option, a bigger server."
        },
        {
          "quem": "leo",
          "t": "Then name it. Alternatives were considered, but a bigger server would not remove the single point of failure."
        },
        {
          "quem": "mia",
          "t": "Perfect. Now it sounds like an RFC and not a chat message."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo want Mia to change in the first line?",
          "op": [
            "The tone: it sounds too casual",
            "The number of outages",
            "The name of the service"
          ],
          "a": 0,
          "por": "The first line sounds too casual."
        },
        {
          "q": "What is the reason for the proposal?",
          "op": [
            "The current queue caused four outages this quarter",
            "The managed service is cheaper",
            "The team wants a bigger server"
          ],
          "a": 0,
          "por": "The reason we propose it is that the current queue caused four outages this quarter."
        },
        {
          "q": "How should Mia write about the cost?",
          "op": [
            "Admit that the bill could rise, and balance it",
            "Leave the cost out of the RFC",
            "Say that the cost is not important"
          ],
          "a": 0,
          "por": "It could be argued that the monthly bill will rise. However, we will save a lot of maintenance time."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from a proposal. Hear it, then say it.",
      "frases": [
        {
          "t": "It is proposed that the job queue be migrated to a managed service.",
          "img": "https://wolf-labs.pages.dev/p/4d01bb685b96/the-rfc/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "What we propose is a gradual migration, starting with the e-mail queue.",
          "img": "https://wolf-labs.pages.dev/p/4d01bb685b96/the-rfc/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It could be argued that the cost will rise, but the risk will fall.",
          "img": "https://wolf-labs.pages.dev/p/4d01bb685b96/the-rfc/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Formal register. Four quick ones.",
      "regra": "<b>It is proposed that</b> + subject + base verb · <b>What we propose is</b>… · <b>the migration of</b> (noun, not verb) · <b>It could be argued that</b>…",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It could be argued that the cost will rise.",
          "aceita": [],
          "d": "Hint: <b>It could be argued that</b> + a full clause."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "It is proposed that Ana leads the migration.",
          "r": "It is proposed that Ana lead the migration.",
          "aceita": [
            "It is proposed that Ana should lead the migration."
          ],
          "d": "Hint: after <b>proposed that</b>, the base verb: <b>lead</b>, not <i>leads</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: use the noun.",
          "mostra": "The migrate of the queue is slow.",
          "r": "The migration of the queue is slow.",
          "aceita": [],
          "d": "Hint: <b>the</b> + noun + <b>of</b>: migrate becomes <b>migration</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word too many.",
          "mostra": "What we propose it is a new queue.",
          "r": "What we propose is a new queue.",
          "aceita": [],
          "d": "Hint: the cleft has no <i>it</i>: <b>What we propose is</b>…"
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4d01bb685b96/the-rfc/img/live-capa.webp",
      "leg": "A desk, a notebook, one lamp",
      "pede": "Look at the picture: a notebook and a pen under one lamp. Write two or three formal sentences about a change you propose at work, and why. Use <b>It is proposed that</b>, <b>The reason … is that</b> or <b>It could be argued that</b>.",
      "ph": "It is proposed that …",
      "ex": "It is proposed that the team review code in pairs. The reason we propose it is that reviews are slow. It could be argued that pairing costs time, but it prevents bugs."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What would you change in your team's process? Write it as a proposal.",
          "ph": "It is proposed that …",
          "ex": "It is proposed that we hold a short planning meeting every Monday."
        },
        {
          "q": "Why is that change needed? Use a cleft.",
          "ph": "The reason we need it is that …",
          "ex": "The reason we need it is that tasks are unclear on Mondays."
        }
      ]
    }
  }
};
