/* I'M AFRAID WE CAN'T · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: pedidos educados e o não gentil (would you mind -ing, could you possibly, I'm afraid). B1: nenhum português. */
window.HW2 = {
  "id": "im-afraid-we-cant",
  "titulo": "I'm Afraid We Can't",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e70d47c1d520/im-afraid-we-cant/img/live-headset.webp",
  "alvo": "polite requests and a kind no: Would you mind + -ing, Could you possibly + plain verb, I'm afraid + clause (no of, no to); the no sandwich: thanks, I'm afraid, the reason, an offer",
  "abrir": "Think of a time someone said no to you in a kind way. What did they say?",
  "fecho": "A kind no has layers: <b>thanks</b>, <b>I'm afraid</b> + the answer, <b>the reason</b>, <b>an offer</b>. <i>Thank you for calling. I'm afraid we can't deliver tonight, because our trucks stop at six. We could come tomorrow morning.</i> Polite requests: <b>Would you mind + -ing?</b> · <b>Could you possibly + plain verb?</b>",
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
      "sub": "Mia and Leo on the night shift of a customer line. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/e70d47c1d520/im-afraid-we-cant/img/live-sala.webp",
      "leg": "The night shift at the call center",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, Mr Kovac wants a new fridge tonight. I can't promise that. How do I say no?"
        },
        {
          "quem": "leo",
          "t": "Start with thanks. Thank you for calling, Mr Kovac. Then: I'm afraid we can't deliver tonight."
        },
        {
          "quem": "mia",
          "t": "And then the reason?"
        },
        {
          "quem": "leo",
          "t": "Yes. Our trucks stop at six. After that, add an offer: but we could deliver tomorrow morning."
        },
        {
          "quem": "mia",
          "t": "That sounds kind. What about when I need something from him?"
        },
        {
          "quem": "leo",
          "t": "Ask politely. Would you mind waiting a moment? Or: Could you possibly send me a photo of the damage?"
        },
        {
          "quem": "mia",
          "t": "And if he answers yes to would you mind?"
        },
        {
          "quem": "leo",
          "t": "Careful. If he says no, not at all, he agrees. If he says yes, it bothers him."
        },
        {
          "quem": "mia",
          "t": "I see. Thanks, I'm afraid, the reason, an offer."
        },
        {
          "quem": "leo",
          "t": "That's it. And never a dry no. A dry no burns the whole sandwich."
        }
      ],
      "perguntas": [
        {
          "q": "Why can't the company deliver tonight?",
          "op": [
            "The trucks stop at six",
            "The fridge is broken",
            "Mr Kovac is not at home"
          ],
          "a": 0,
          "por": "Our trucks stop at six."
        },
        {
          "q": "What does Leo suggest after the reason?",
          "op": [
            "An offer for tomorrow morning",
            "A very long apology",
            "A short, dry no"
          ],
          "a": 0,
          "por": "But we could deliver tomorrow morning."
        },
        {
          "q": "Someone answers no, not at all to Would you mind waiting? What do they mean?",
          "op": [
            "It is fine, they will wait",
            "It bothers them",
            "They are leaving"
          ],
          "a": 0,
          "por": "If he says no, not at all, he agrees."
        }
      ]
    },
    "out": {
      "sub": "Three kind lines for a customer. Hear it, then say it.",
      "frases": [
        {
          "t": "Thank you for calling. I'm afraid we can't deliver tonight.",
          "img": "https://wolf-labs.pages.dev/p/e70d47c1d520/im-afraid-we-cant/img/live-fones.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Would you mind waiting a moment?",
          "img": "https://wolf-labs.pages.dev/p/e70d47c1d520/im-afraid-we-cant/img/live-headset.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Could you possibly send me a photo of the damage?",
          "img": "https://wolf-labs.pages.dev/p/e70d47c1d520/im-afraid-we-cant/img/live-janela.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Polite requests and a kind no. Four quick ones.",
      "regra": "<b>Would you mind + -ing?</b> · <b>Could you possibly + plain verb?</b> · <b>I'm afraid + we can't</b> · thanks, reason, offer.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I am afraid we cannot deliver it tonight.",
          "aceita": [],
          "d": "Hint: <b>I am afraid</b> goes straight into the sentence, then the answer."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Would you mind to wait a moment?",
          "r": "Would you mind waiting a moment?",
          "aceita": [],
          "d": "Hint: after <b>would you mind</b> the verb takes <b>-ing</b>, not <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Could you possibly to send me a photo?",
          "r": "Could you possibly send me a photo?",
          "aceita": [],
          "d": "Hint: after <b>could you possibly</b> use the plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm afraid of we can't deliver tonight.",
          "r": "I'm afraid we can't deliver tonight.",
          "aceita": [
            "I am afraid we cannot deliver tonight."
          ],
          "d": "Hint: <b>I'm afraid</b> goes straight into the sentence. No <i>of</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e70d47c1d520/im-afraid-we-cant/img/live-abertura.webp",
      "leg": "A quiet office at night, a cup on the desk",
      "pede": "Look at the picture: a quiet office at night. Write a kind no to a real request. Use <b>thanks</b>, <b>I'm afraid</b>, <b>a reason</b> and <b>an offer</b>.",
      "ph": "Thank you for asking. I'm afraid …",
      "ex": "Thank you for asking. I'm afraid I can't work on Saturday because I have a family lunch. I could help on Sunday."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you often have to say no to?",
          "ph": "I'm afraid I can't …",
          "ex": "I'm afraid I can't lend money to friends."
        },
        {
          "q": "What do you politely ask people to do at work or at home?",
          "ph": "Would you mind …?",
          "ex": "Would you mind closing the window, please?"
        }
      ]
    }
  }
};
