/* NEITHER YES NOR NO · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=".
   Alvo: passiva sem agente + neither… nor / either… or / not only… but also. C1: nenhum português. Imagens live-* (lum 5 e 45). */
window.HW2 = {
  "id": "neither-yes-nor-no",
  "titulo": "Neither Yes nor No",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c1a137c2e213/neither-yes-nor-no/img/live-capa.webp",
  "alvo": "polite distance: the agentless passive (was moved, has been decided, have been passed on) and neither … nor / either … or / not only … but also; distance that protects people versus distance that hides (Mistakes were made)",
  "abrir": "Think of a complaint you made or received. Was a person named, or only the problem?",
  "fecho": "Distance can protect people or hide them. <b>Was moved</b>, <b>it has been decided</b>, <b>have been passed on</b>: the agent disappears, so the restaurant keeps the responsibility. <b>Neither … nor</b> rejects both elegantly (<i>neither the error nor the wait is acceptable</i>). But a real apology needs a person: <i>I apologize</i>, not <i>mistakes were made</i>.",
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
      "sub": "Mia and Leo draft a public reply to a one-star review. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/c1a137c2e213/neither-yes-nor-no/img/live-conversa.webp",
      "leg": "The restaurant kitchen after service",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the one-star review about the birthday dinner is public now. My reply has to go out before lunch."
        },
        {
          "quem": "leo",
          "t": "Start with the facts, and don't name the host. In public, the restaurant takes the responsibility."
        },
        {
          "quem": "mia",
          "t": "So: the booking was moved to the late list by a system error, and it was not noticed until the guest arrived."
        },
        {
          "quem": "leo",
          "t": "Good. Add that neither the error nor the wait is acceptable. That rejects both without blaming anybody."
        },
        {
          "quem": "mia",
          "t": "And it has been decided that every booking will be confirmed by phone from now on."
        },
        {
          "quem": "leo",
          "t": "Fine for a policy. But for the apology, don't write mistakes were made. It sounds like hiding."
        },
        {
          "quem": "mia",
          "t": "You're right. There I'll use a person: I apologize, and I take responsibility."
        },
        {
          "quem": "leo",
          "t": "Exactly. Then offer something. Not only a free dessert, but also a table of her choice, either for lunch or for dinner."
        },
        {
          "quem": "mia",
          "t": "Done. Her comments have been passed on to the whole team, too. Sending it now."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo advise about the host?",
          "op": [
            "Don't name the host: the restaurant takes the responsibility",
            "Name the host and apologize for him",
            "Blame the system"
          ],
          "a": 0,
          "por": "Don't name the host. In public, the restaurant takes the responsibility."
        },
        {
          "q": "Why shouldn't the apology say mistakes were made?",
          "op": [
            "It sounds like hiding",
            "It is too long",
            "It is too polite"
          ],
          "a": 0,
          "por": "Don't write mistakes were made. It sounds like hiding."
        },
        {
          "q": "Which sentence rejects both the error and the wait?",
          "op": [
            "Neither the error nor the wait is acceptable",
            "Either the error or the wait is acceptable",
            "Not only the error but also the wait"
          ],
          "a": 0,
          "por": "Neither the error nor the wait is acceptable."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the reply. Hear it, then say it.",
      "frases": [
        {
          "t": "Your booking was moved to the late list by a system error.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/c1a137c2e213/neither-yes-nor-no/img/live-capa.webp"
        },
        {
          "t": "Neither the error nor the wait is acceptable.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/c1a137c2e213/neither-yes-nor-no/img/live-conversa.webp"
        },
        {
          "t": "It has been decided that every booking will be confirmed by phone.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/c1a137c2e213/neither-yes-nor-no/img/live-capa.webp"
        }
      ]
    },
    "focus": {
      "sub": "Nor, been, or. Four quick ones.",
      "regra": "<b>neither … nor</b> · <b>either … or</b> · passive = <b>been</b> + third form · <b>not only … but also</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Not only the hosts but also the kitchen will receive training.",
          "aceita": [],
          "d": "Hint: <b>not only</b> … <b>but also</b>, and the verb agrees with the nearest noun."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Neither the error or the wait is acceptable.",
          "r": "Neither the error nor the wait is acceptable.",
          "aceita": [],
          "d": "Hint: <b>neither</b> always pairs with <b>nor</b>, never <i>or</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Your comments have passed on to the whole team.",
          "r": "Your comments have been passed on to the whole team.",
          "aceita": [
            "Your comments have been passed on to the team."
          ],
          "d": "Hint: the passive needs <b>been</b>: <i>have been passed on</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "You are welcome either for lunch and for dinner.",
          "r": "You are welcome either for lunch or for dinner.",
          "aceita": [],
          "d": "Hint: <b>either</b> pairs with <b>or</b>, never <i>and</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c1a137c2e213/neither-yes-nor-no/img/live-conversa.webp",
      "leg": "A restaurant kitchen after service",
      "pede": "Look at the picture: a kitchen after service. Write 2 or 3 sentences you could use in a public reply to a complaint. Use the passive without naming a person, or <b>neither … nor</b>.",
      "ph": "Your order was … Neither the … nor the …",
      "ex": "Your order was not passed to the kitchen. Neither the food nor the service was good enough. I apologize."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a complaint you made or received. Was a person named, or only the problem?",
          "ph": "The problem was … It was not …",
          "ex": "The package was delayed, and it was not explained to me. Nobody was named."
        },
        {
          "q": "When is it better to say I made a mistake instead of Mistakes were made?",
          "ph": "It is better to say … when …",
          "ex": "It is better when a person was hurt. I made a mistake sounds honest."
        }
      ]
    }
  }
};
