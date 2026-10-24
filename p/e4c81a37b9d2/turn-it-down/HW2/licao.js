/* TURN IT DOWN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: phrasal verbs e o lugar do objeto. B1: nenhum português. Só live-postit. */
window.HW2 = {
  "id": "turn-it-down",
  "titulo": "Turn It Down",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e4c81a37b9d2/turn-it-down/img/live-postit.webp",
  "alvo": "phrasal verbs and the object: separable (turn down, put off, call off, fill in): a pronoun goes in the middle (turn it down); inseparable (look into, get back to): the pronoun goes after (look into it); never turn down it, look it into",
  "abrir": "What did you put off this month?",
  "fecho": "<b>Separable</b>: turn down, put off, call off, fill in. A pronoun goes in the middle: <i>turn it down, fill them in</i>. <b>Inseparable</b>: look into, get back to. The pronoun waits at the end: <i>look into it, get back to him</i>. Never <i>turn down it</i>, never <i>look it into</i>.",
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
      "sub": "Mia and Leo clear a busy desk. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/e4c81a37b9d2/turn-it-down/img/live-postit.webp",
      "leg": "A yellow sticky note on a desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, Tom wants an answer today. Should I accept his offer?"
        },
        {
          "quem": "leo",
          "t": "No. Turn it down."
        },
        {
          "quem": "mia",
          "t": "And the meeting with Ms. Lima? It's too early."
        },
        {
          "quem": "leo",
          "t": "Put it off until Monday."
        },
        {
          "quem": "mia",
          "t": "Marta wants to call off the client party."
        },
        {
          "quem": "leo",
          "t": "Then call it off. And the slow website?"
        },
        {
          "quem": "mia",
          "t": "I'll look into it this afternoon."
        },
        {
          "quem": "leo",
          "t": "Good. What about this form?"
        },
        {
          "quem": "mia",
          "t": "I need to fill it in before four."
        },
        {
          "quem": "leo",
          "t": "Then tell Tom: I'll get back to you next week."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo say about Tom's offer?",
          "op": [
            "Turn it down",
            "Put it off",
            "Fill it in"
          ],
          "a": 0,
          "por": "No. Turn it down."
        },
        {
          "q": "When will the meeting be?",
          "op": [
            "On Monday",
            "Today",
            "Next year"
          ],
          "a": 0,
          "por": "Put it off until Monday."
        },
        {
          "q": "What will Mia look into?",
          "op": [
            "The slow website",
            "Tom's offer",
            "The party"
          ],
          "a": 0,
          "por": "I'll look into it this afternoon."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from a busy desk. Hear it, then say it.",
      "frases": [
        {
          "t": "I turned it down yesterday.",
          "img": "https://wolf-labs.pages.dev/p/e4c81a37b9d2/turn-it-down/img/live-postit.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Marta called the party off.",
          "img": "https://wolf-labs.pages.dev/p/e4c81a37b9d2/turn-it-down/img/live-postit.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'll look into it this afternoon.",
          "img": "https://wolf-labs.pages.dev/p/e4c81a37b9d2/turn-it-down/img/live-postit.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Where does the little word go? Four quick ones.",
      "regra": "<b>turn / put / call / fill</b>: <b>it</b> goes in the middle · <b>look into</b>, <b>get back to</b>: <b>it</b> goes after · never <i>turn down it</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I'll get back to you next week.",
          "aceita": [],
          "d": "Hint: <b>get back to</b> + you: the pronoun goes at the end."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the pronoun is in the wrong place.",
          "mostra": "I turned down it yesterday.",
          "r": "I turned it down yesterday.",
          "aceita": [],
          "d": "Hint: <b>turn down</b> opens: <b>turned it down</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the pronoun is in the wrong place.",
          "mostra": "I will look it into today.",
          "r": "I will look into it today.",
          "aceita": [],
          "d": "Hint: <b>look into</b> never opens: <b>look into it</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the pronoun is in the wrong place.",
          "mostra": "Please fill in them today.",
          "r": "Please fill them in today.",
          "aceita": [],
          "d": "Hint: <b>fill in</b> opens: <b>fill them in</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e4c81a37b9d2/turn-it-down/img/live-postit.webp",
      "leg": "A yellow sticky note on a desk",
      "pede": "Look at the picture: a sticky note on a desk. Write 2 or 3 sentences about your week. Use <b>turn down</b>, <b>put off</b>, <b>look into</b> or <b>fill in</b>, with <b>it</b> or <b>them</b>.",
      "ph": "I turned it down …",
      "ex": "I turned the offer down. I put the meeting off until Monday, and I'll look into the problem tomorrow."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you put off this month? Until when?",
          "ph": "I put it off until …",
          "ex": "I put off the dentist until December."
        },
        {
          "q": "Is there a problem you need to look into?",
          "ph": "I need to look into it …",
          "ex": "I need to look into my slow internet."
        }
      ]
    }
  }
};
