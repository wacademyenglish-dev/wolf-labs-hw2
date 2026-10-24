/* C1 REVIEW · THE DETECTIVE AGENCY · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=".
   Alvo: modals with nuance: needn't have, bound to, will have, mustn't vs needn't. C1: nenhum português. */
window.HW2 = {
  "id": "c1-review-the-detective-agency",
  "titulo": "The Detective Agency",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/461dd6d0ce2a/c1-review-the-detective-agency/img/live-capa.webp",
  "alvo": "review of modals with nuance: needn't have + past participle, needn't vs mustn't vs don't have to, softened requests (Could we possibly...? Would you be willing to...?), bound to / due to, will / would for typical behaviour, will have + past participle for deduction (That'll be...); no to after needn't or a modal, due to + verb",
  "abrir": "Have you ever solved a small mystery at home? What was it?",
  "fecho": "Modals add nuance. <b>Deduction</b>: <i>That'll be the client.</i> <i>Someone will have had a key.</i> <b>Certainty and schedule</b>: <i>bound to</i>, <i>due to arrive</i>. <b>Softened request</b>: <i>Could we possibly…? Would you be willing to…?</i> <b>Unnecessary</b>: <i>I needn't have brought an umbrella.</i> <b>Not necessary</b> is <b>needn't</b>; <b>not allowed</b> is <b>mustn't</b>. No <i>to</i> after <i>needn't</i>.",
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
  "rate": "-10%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo run a small detective agency. A light case, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/461dd6d0ce2a/c1-review-the-detective-agency/img/live-capa.webp",
      "leg": "The detective's desk, a hat and a lamp",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the rain is heavy and somebody is at the door. That'll be our new client."
        },
        {
          "quem": "mia",
          "t": "Yes, he said he'd come at ten. His silver watch has gone."
        },
        {
          "quem": "leo",
          "t": "Could we possibly start with the last time he saw it?"
        },
        {
          "quem": "mia",
          "t": "Of course. He says he locked the drawer, so someone will have had a spare key."
        },
        {
          "quem": "leo",
          "t": "The cleaner would always arrive early. She's bound to have a key."
        },
        {
          "quem": "mia",
          "t": "Maybe. Her train was due to arrive at nine, so she could have been there."
        },
        {
          "quem": "leo",
          "t": "I needn't have brought my umbrella. The rain has stopped."
        },
        {
          "quem": "mia",
          "t": "And you mustn't touch the drawer. But you needn't write everything down."
        },
        {
          "quem": "leo",
          "t": "Understood. Would you be willing to ask the cleaner a few questions?"
        },
        {
          "quem": "mia",
          "t": "Gladly. Let's go."
        }
      ],
      "perguntas": [
        {
          "q": "What has gone missing?",
          "op": [
            "A silver watch",
            "A pearl necklace",
            "A bicycle"
          ],
          "a": 0,
          "por": "His silver watch has gone."
        },
        {
          "q": "Who is bound to have a spare key, according to Leo?",
          "op": [
            "The cleaner",
            "The client",
            "The neighbour"
          ],
          "a": 0,
          "por": "She's bound to have a key."
        },
        {
          "q": "What mustn't Leo do?",
          "op": [
            "Touch the drawer",
            "Write notes",
            "Bring an umbrella"
          ],
          "a": 0,
          "por": "You mustn't touch the drawer."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the case. Hear it, then say it.",
      "frases": [
        {
          "t": "That'll be the client at the door.",
          "img": "https://wolf-labs.pages.dev/p/461dd6d0ce2a/c1-review-the-detective-agency/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The cleaner is bound to have a spare key.",
          "img": "https://wolf-labs.pages.dev/p/461dd6d0ce2a/c1-review-the-detective-agency/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I needn't have brought my umbrella.",
          "img": "https://wolf-labs.pages.dev/p/461dd6d0ce2a/c1-review-the-detective-agency/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Needn't, due to and mustn't. Four quick ones.",
      "regra": "<b>needn't have</b> + past participle · <b>needn't</b> + plain verb, no <i>to</i> · <b>due to</b> + verb · <b>mustn't</b> = forbidden, <b>needn't</b> = not necessary.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I needn't have brought my umbrella.",
          "aceita": [],
          "d": "Hint: <b>needn't have</b> + past participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "You needn't to take your shoes off.",
          "r": "You needn't take your shoes off.",
          "aceita": [
            "You don't have to take your shoes off."
          ],
          "d": "Hint: after <b>needn't</b> the verb is plain: no <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "The train was due arrive late.",
          "r": "The train was due to arrive late.",
          "aceita": [],
          "d": "Hint: <b>due to</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it is not necessary, not forbidden.",
          "mostra": "You mustn't pay now. It is optional.",
          "r": "You needn't pay now.",
          "aceita": [
            "You don't have to pay now.",
            "You do not have to pay now."
          ],
          "d": "Hint: <b>mustn't</b> means forbidden. For not necessary use <b>needn't</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/461dd6d0ce2a/c1-review-the-detective-agency/img/live-conversa.webp",
      "leg": "Rain and warm lights in the dark",
      "pede": "Look at the picture: rain and warm lights in the dark. Write 2 or 3 sentences about a small mystery in your life. Use <b>bound to</b>, <b>will have</b> or <b>needn't have</b>.",
      "ph": "My keys have gone. They will have …",
      "ex": "My keys have gone. They will have fallen behind the sofa. I needn't have searched the whole flat. My brother is bound to know."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Your phone rings late at night. Who will that be?",
          "ph": "That'll be …",
          "ex": "That'll be my sister. She always calls late."
        },
        {
          "q": "What did you do that turned out to be unnecessary? Use needn't have.",
          "ph": "I needn't have …",
          "ex": "I needn't have left so early. The bus was late."
        }
      ]
    }
  }
};
