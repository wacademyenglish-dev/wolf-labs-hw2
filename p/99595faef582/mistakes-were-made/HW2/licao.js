/* MISTAKES WERE MADE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: linguagem de crise (ativa, sorry real, apologize to, commit to -ing). C1: nenhum português. */
window.HW2 = {
  "id": "mistakes-were-made",
  "titulo": "Mistakes Were Made",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/99595faef582/mistakes-were-made/img/live-podio.webp",
  "alvo": "the language of a crisis statement: say who did it in the active (We released...), the passive only for the impact and the fix (orders were cancelled, accounts have been restored), a real sorry (We are sorry, we apologize to...), commit to + -ing, hedge only what is unknown (no evidence that); never Mistakes were made, apologize our customers, no evidences",
  "abrir": "Think of an apology you got that did not feel like one. What was missing?",
  "fecho": "<b>Mistakes were made</b> hides the person: put <b>we</b> in the sentence. The passive is right only for the impact and the fix: <i>orders were cancelled</i>, <i>accounts have been restored</i>. A real sorry: <b>We are sorry. We apologize to</b> every customer. A promise with a date: <b>commit to + -ing</b>. Hedge only what you do not know: <i>we have no <b>evidence</b> that</i>, never <i>evidences</i>.",
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
      "sub": "Mia and Leo write a press statement. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/99595faef582/mistakes-were-made/img/live-microfones.webp",
      "leg": "The press room, before noon",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, our ticket site crashed for four hours, and the statement goes out at noon."
        },
        {
          "quem": "leo",
          "t": "Read me the first line."
        },
        {
          "quem": "mia",
          "t": "Mistakes were made during the sale."
        },
        {
          "quem": "leo",
          "t": "No. Nobody is in that sentence. Say who did it: We launched the sale before the final test."
        },
        {
          "quem": "mia",
          "t": "Okay. And the impact? Sixty thousand orders were cancelled by mistake."
        },
        {
          "quem": "leo",
          "t": "That one can stay passive. The orders are the news. Now the apology."
        },
        {
          "quem": "mia",
          "t": "We regret any inconvenience."
        },
        {
          "quem": "leo",
          "t": "That is not a real sorry. Write: We are sorry, and we apologize to every customer."
        },
        {
          "quem": "mia",
          "t": "And the money? We commit to refunding every fee by Friday."
        },
        {
          "quem": "leo",
          "t": "Good, with a date. For the cause, write: At this stage, we have no evidence that any card data was lost."
        },
        {
          "quem": "mia",
          "t": "Perfect. Now it sounds like people wrote it."
        }
      ],
      "perguntas": [
        {
          "q": "Why does Leo reject Mistakes were made?",
          "op": [
            "Nobody is named as the one who did it",
            "It is too long",
            "It has no date"
          ],
          "a": 0,
          "por": "Nobody is in that sentence. Say who did it."
        },
        {
          "q": "Which sentence can stay in the passive?",
          "op": [
            "Sixty thousand orders were cancelled by mistake",
            "Mistakes were made during the sale",
            "We regret any inconvenience"
          ],
          "a": 0,
          "por": "That one can stay passive. The orders are the news."
        },
        {
          "q": "What does the company promise for Friday?",
          "op": [
            "To refund every fee",
            "To close the site",
            "To name the engineer"
          ],
          "a": 0,
          "por": "We commit to refunding every fee by Friday."
        }
      ]
    },
    "out": {
      "sub": "Three lines from the statement. Hear it, then say it.",
      "frases": [
        {
          "t": "We launched the sale before the final test.",
          "img": "https://wolf-labs.pages.dev/p/99595faef582/mistakes-were-made/img/live-podio.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We are sorry, and we apologize to every customer.",
          "img": "https://wolf-labs.pages.dev/p/99595faef582/mistakes-were-made/img/live-microfones.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "At this stage, we have no evidence that any data was lost.",
          "img": "https://wolf-labs.pages.dev/p/99595faef582/mistakes-were-made/img/live-sala.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Who did it, to whom, how many. Four quick ones.",
      "regra": "say <b>we</b> (not <i>mistakes were made</i>) · <b>apologize to</b> · <b>commit to</b> + -ing · <b>no evidence</b> (never <i>evidences</i>)",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We commit to refunding every fee by Friday.",
          "aceita": [],
          "d": "Hint: <b>commit to</b> + a verb with -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "We apologize our customers.",
          "r": "We apologize to our customers.",
          "aceita": [],
          "d": "Hint: you apologize <b>to</b> a person, and for the problem."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: say who did it. Use we.",
          "mostra": "Mistakes were made.",
          "r": "We made mistakes.",
          "aceita": [
            "We made a mistake.",
            "I made a mistake.",
            "I made mistakes."
          ],
          "d": "Hint: put the person in the sentence, in the active."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We have no evidences that data was lost.",
          "r": "We have no evidence that data was lost.",
          "aceita": [],
          "d": "Hint: <b>evidence</b> has no plural."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/99595faef582/mistakes-were-made/img/live-podio.webp",
      "leg": "An empty podium, one light",
      "pede": "Look at the picture: an empty podium under one light. Write 2 or 3 sentences of an apology for a real mistake of yours. Say who did it, say sorry, and give a date.",
      "ph": "We are sorry. We …",
      "ex": "I sent the wrong file to a client, and I am sorry. I apologize to the whole team. By Friday, I will send the right file."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Tell me about a mistake you made. Say I, not mistakes were made.",
          "ph": "I made a mistake: I …",
          "ex": "I made a mistake: I forgot an important call."
        },
        {
          "q": "What did you promise to do, and by when?",
          "ph": "By …, I will …",
          "ex": "By Monday, I will send the final report."
        }
      ]
    }
  }
};
