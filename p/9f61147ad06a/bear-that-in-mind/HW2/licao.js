/* BEAR THAT IN MIND · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: formal verb + noun partners. C1: nenhum português. Só imagens live-* (escuras). */
window.HW2 = {
  "id": "bear-that-in-mind",
  "titulo": "Bear That in Mind",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/9f61147ad06a/bear-that-in-mind/img/live-capa.webp",
  "alvo": "formal verb + noun partners: bear in mind, take into account / consideration, raise a concern, address an issue, draw a conclusion, reach an agreement, meet a deadline, pose a risk, carry out a review, make a recommendation",
  "abrir": "Think of the last big meeting you attended. What was left unresolved?",
  "fecho": "The right verb for the right noun: <b>raise</b> a concern, <b>address</b> an issue, <b>draw</b> a conclusion, <b>reach</b> an agreement, <b>meet</b> a deadline, <b>pose</b> a risk, <b>carry out</b> a review, <b>make</b> a recommendation. And <b>take into account</b>, never <i>take in consideration</i>.",
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
      "sub": "Mia and Leo the night before a review. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/9f61147ad06a/bear-that-in-mind/img/live-capa.webp",
      "leg": "A desk, a notebook and a pen",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, before tomorrow's review, there's something you should bear in mind. The board won't be in a patient mood."
        },
        {
          "quem": "leo",
          "t": "I know. They've already raised a few concerns about the budget, and we still haven't addressed them."
        },
        {
          "quem": "mia",
          "t": "Exactly. We carried out a full review last month, but nobody drew any real conclusions."
        },
        {
          "quem": "leo",
          "t": "Fair point. And the launch? Are we going to meet the deadline?"
        },
        {
          "quem": "mia",
          "t": "Honestly, the delay in Asia poses a real risk. If we don't take it into account now, we'll regret it."
        },
        {
          "quem": "leo",
          "t": "So what do we tell them?"
        },
        {
          "quem": "mia",
          "t": "That we'd like to reach an agreement on a new date, and that I'll make a recommendation by the end of the day."
        },
        {
          "quem": "leo",
          "t": "A recommendation? Isn't that a bit much?"
        },
        {
          "quem": "mia",
          "t": "Not at all. If we leave it vague, they'll make the decision for us."
        },
        {
          "quem": "leo",
          "t": "Fair enough. Let's put it in writing, and keep it short."
        }
      ],
      "perguntas": [
        {
          "q": "Why is Mia worried about the review?",
          "op": [
            "Concerns were raised and never addressed",
            "The board has cancelled the meeting",
            "The launch has already happened"
          ],
          "a": 0,
          "por": "They've already raised a few concerns about the budget, and we still haven't addressed them."
        },
        {
          "q": "What poses a real risk to the launch?",
          "op": [
            "The delay in Asia",
            "The new budget",
            "The board's mood"
          ],
          "a": 0,
          "por": "The delay in Asia poses a real risk."
        },
        {
          "q": "Why does Mia want to make a recommendation?",
          "op": [
            "Otherwise the board will decide for them",
            "Leo asked her to",
            "The deadline has passed"
          ],
          "a": 0,
          "por": "If we leave it vague, they'll make the decision for us."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for a serious meeting. Hear it, then say it.",
      "frases": [
        {
          "t": "We need to take the new budget into account before we draw any conclusions.",
          "img": "https://wolf-labs.pages.dev/p/9f61147ad06a/bear-that-in-mind/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Several people raised concerns, but none of them has been addressed yet.",
          "img": "https://wolf-labs.pages.dev/p/9f61147ad06a/bear-that-in-mind/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If we can't meet the deadline, I'll make a recommendation to the board.",
          "img": "https://wolf-labs.pages.dev/p/9f61147ad06a/bear-that-in-mind/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Formal verb and noun partners. Four quick ones.",
      "regra": "<b>raise</b> a concern · <b>draw</b> a conclusion · <b>meet</b> a deadline · <b>reach</b> an agreement · <b>carry out</b> a review · <b>take into account</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We carried out a full review of the project last month.",
          "aceita": [],
          "d": "Hint: the verb that goes with <b>review</b> in a formal report."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Please take in consideration the new budget.",
          "r": "Please take into consideration the new budget.",
          "aceita": [
            "Please take into account the new budget."
          ],
          "d": "Hint: the preposition is not the one you would translate. <b>Take into</b> consideration."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We didn't reach the deadline, so we asked for more time.",
          "r": "We didn't meet the deadline, so we asked for more time.",
          "aceita": [],
          "d": "Hint: you <b>reach</b> an agreement, but you <b>meet</b> a deadline."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Nobody took any conclusions from the review.",
          "r": "Nobody drew any conclusions from the review.",
          "aceita": [],
          "d": "Hint: you <b>draw</b> a conclusion."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/9f61147ad06a/bear-that-in-mind/img/live-capa.webp",
      "leg": "A desk, a notebook and a pen",
      "pede": "Look at the picture: a desk before an important meeting. Write 2 or 3 sentences about a project or a meeting you know. Use two of these: <b>bear in mind</b>, <b>raise a concern</b>, <b>meet a deadline</b>, <b>draw a conclusion</b>, <b>reach an agreement</b>.",
      "ph": "Before the meeting, we need to bear in mind that …",
      "ex": "Before the meeting, we need to bear in mind that the budget has changed. Several people raised concerns, and I doubt we will reach an agreement before the deadline."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What should a new colleague bear in mind about your workplace or your studies?",
          "ph": "A new colleague should bear in mind that …",
          "ex": "A new colleague should bear in mind that deadlines here are taken very seriously."
        },
        {
          "q": "Describe an agreement you reached, or a deadline you couldn't meet, recently.",
          "ph": "We reached an agreement on … / I couldn't meet …",
          "ex": "We finally reached an agreement on the schedule, but I couldn't meet the deadline for my report."
        }
      ]
    }
  }
};
