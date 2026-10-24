/* WHAT WAS AGREED · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: discurso indireto no trabalho (verbo de relato + tempo que recua). B2: nenhum português na lição. */
window.HW2 = {
  "id": "what-was-agreed",
  "titulo": "What Was Agreed",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/d2895520d875/what-was-agreed/img/live-xicaras.webp",
  "alvo": "reported speech at work: choose the reporting verb (insisted, admitted, implied, denied, asked whether, told + person, didn't object) and step the tense back (has missed -> had missed, will -> would, can -> could); a reported question keeps normal order",
  "abrir": "Think of the last meeting you were in. What was really decided?",
  "fecho": "What leaves the room is a report, and the reporter chooses the verb: <b>insisted, admitted, implied, denied, asked whether, told us</b>. <b>Didn't object</b> is not <b>agreed</b>. Reported later, the tense steps back: <i>has missed → had missed</i>, <i>will → would</i>, <i>can → could</i>. <b>Tell</b> someone, <b>say</b> something. A reported question keeps normal order: <i>asked whether March could work</i>.",
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
      "sub": "Mia and Leo after a meeting. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/d2895520d875/what-was-agreed/img/live-mesa.webp",
      "leg": "The meeting room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I missed the meeting, and my summary goes to Priya in ten minutes. What happened?"
        },
        {
          "quem": "leo",
          "t": "Short version: Daniel admitted that the delay had been his call. And Sara insisted that the supplier had missed two deadlines."
        },
        {
          "quem": "mia",
          "t": "Did anyone agree to the new date?"
        },
        {
          "quem": "leo",
          "t": "Nobody agreed. Lucas didn't object, but he didn't say yes. He asked whether March could work, and then everyone went quiet."
        },
        {
          "quem": "mia",
          "t": "So I can't write that it was agreed."
        },
        {
          "quem": "leo",
          "t": "No. Write that Lucas didn't object. Sara told us that the board had already seen the numbers, too."
        },
        {
          "quem": "mia",
          "t": "Did Lucas say the last launch went badly?"
        },
        {
          "quem": "leo",
          "t": "He implied it. He said we all remembered the last launch."
        },
        {
          "quem": "mia",
          "t": "And the budget? Did Daniel deny the cut?"
        },
        {
          "quem": "leo",
          "t": "Yes. He denied that the team would cut the budget."
        },
        {
          "quem": "mia",
          "t": "Perfect. Insisted, admitted, implied, denied. Now I can write it fairly."
        }
      ],
      "perguntas": [
        {
          "q": "What did Daniel admit?",
          "op": [
            "The delay had been his call",
            "The budget would be cut",
            "The supplier had missed deadlines"
          ],
          "a": 0,
          "por": "Daniel admitted that the delay had been his call."
        },
        {
          "q": "What does Leo say about the new date?",
          "op": [
            "Lucas didn't object, but nobody agreed",
            "Everybody agreed to March",
            "Sara denied it"
          ],
          "a": 0,
          "por": "Nobody agreed. Lucas didn't object, but he didn't say yes."
        },
        {
          "q": "How did Lucas show that the last launch went badly?",
          "op": [
            "He implied it",
            "He denied it",
            "He asked about it"
          ],
          "a": 0,
          "por": "He implied it. He said we all remembered the last launch."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the call. Hear it, then say it.",
      "frases": [
        {
          "t": "Daniel admitted that the delay had been his call.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/d2895520d875/what-was-agreed/img/live-xicaras.webp"
        },
        {
          "t": "Sara told us that the board had already seen the numbers.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/d2895520d875/what-was-agreed/img/live-mesa.webp"
        },
        {
          "t": "He asked whether March could work, and then everyone went quiet.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/d2895520d875/what-was-agreed/img/live-xicaras.webp"
        }
      ]
    },
    "focus": {
      "sub": "Verb, tense, order. Four quick ones.",
      "regra": "Pick the verb that fits (<b>insisted, admitted, implied, denied, told</b>) · the tense steps back: <b>had</b> + third form, <b>would</b>, <b>could</b> · <b>asked whether</b> + normal order.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Sara insisted that the supplier had missed two deadlines.",
          "aceita": [],
          "d": "Hint: the tense steps back: <b>has missed</b> becomes <b>had missed</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "Sara said us that the board had seen the numbers.",
          "r": "Sara told us that the board had seen the numbers.",
          "aceita": [
            "Sara told us the board had seen the numbers."
          ],
          "d": "Hint: with a person after the verb (<b>us</b>), use <b>told</b>, not <i>said</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: a reported question keeps normal order.",
          "mostra": "Lucas asked could we hold the launch.",
          "r": "Lucas asked whether we could hold the launch.",
          "aceita": [
            "Lucas asked if we could hold the launch."
          ],
          "d": "Hint: no question order in a report: <b>whether we could</b>, not <i>could we</i>."
        },
        {
          "tipo": "escreve",
          "t": "Report it later. Step the tense back.",
          "mostra": "Daniel: \"I will not cut the budget.\" (denied)",
          "r": "Daniel denied that he would cut the budget.",
          "aceita": [
            "Daniel denied he would cut the budget.",
            "Daniel denied that he was going to cut the budget."
          ],
          "d": "Hint: <b>denied that</b>, and <b>will</b> becomes <b>would</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/d2895520d875/what-was-agreed/img/live-mesa.webp",
      "leg": "The meeting room, after the meeting",
      "pede": "Look at the picture: a meeting room after the meeting. Report what happened in a real meeting or class of yours. Use <b>insisted, admitted, implied, denied, asked whether</b> or <b>told</b>.",
      "ph": "My boss told us that …",
      "ex": "My manager told us that the budget had been approved. A colleague admitted that he had missed the deadline. Another one asked whether we could start later."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who admitted a mistake to you recently? What did they say?",
          "ph": "… admitted that …",
          "ex": "My brother admitted that he had broken my headphones."
        },
        {
          "q": "What did your boss or a teacher tell you this week?",
          "ph": "… told me that …",
          "ex": "My teacher told me that the next test would be on Friday."
        }
      ]
    }
  }
};
