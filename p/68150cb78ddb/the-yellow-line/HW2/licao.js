/* THE YELLOW LINE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=".
   Alvo: obligation and choice at work: must / have to = it is requir. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-yellow-line",
  "titulo": "The Yellow Line",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/68150cb78ddb/the-yellow-line/img/live-capacete.webp",
  "alvo": "obligation and choice at work: must / have to = it is required; mustn't = it is forbidden; don't have to = it is your choice; should = good advice; always the plain verb after them",
  "abrir": "What is one rule at your work or school?",
  "fecho": "<b>must / have to</b> = required · <b>mustn't</b> = forbidden · <b>don't have to</b> = your choice · <b>should</b> = good advice. <i>You mustn't park here</i> sends you away. <i>You don't have to park here</i> says: there is another place, if you want. After all of them, the plain verb, never <i>to</i>: <i>You mustn't run.</i>",
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
  "rate": "-14%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo on her first day at the warehouse. A new scene, about 50 seconds.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, it's my first day. What are the rules?"
        },
        {
          "quem": "leo",
          "t": "Easy. You must wear the yellow helmet. It's a safety rule."
        },
        {
          "quem": "mia",
          "t": "And the yellow line on the floor?"
        },
        {
          "quem": "leo",
          "t": "You mustn't walk past it when the forklift is moving. It's forbidden."
        },
        {
          "quem": "mia",
          "t": "Do I have to wear gloves?"
        },
        {
          "quem": "leo",
          "t": "No, you don't have to. It's your choice. But you should wear them for the boxes."
        },
        {
          "quem": "mia",
          "t": "Can I park my bike next to the door?"
        },
        {
          "quem": "leo",
          "t": "You mustn't park there. Use the bike rack. But you don't have to pay. Parking is free."
        },
        {
          "quem": "mia",
          "t": "Got it. Mustn't means no. Don't have to means it's my choice."
        },
        {
          "quem": "leo",
          "t": "Exactly. Welcome to the team."
        }
      ],
      "perguntas": [
        {
          "q": "What must Mia wear?",
          "op": [
            "The yellow helmet",
            "Gloves",
            "A coat"
          ],
          "a": 0,
          "por": "You must wear the yellow helmet."
        },
        {
          "q": "Does Mia have to wear gloves?",
          "op": [
            "No, it is her choice",
            "Yes, always",
            "Only on Friday"
          ],
          "a": 0,
          "por": "No, you don't have to. It's your choice."
        },
        {
          "q": "What mustn't Mia do when the forklift is moving?",
          "op": [
            "Walk past the yellow line",
            "Wear a helmet",
            "Use the bike rack"
          ],
          "a": 0,
          "por": "You mustn't walk past it when the forklift is moving."
        }
      ],
      "img": "https://wolf-labs.pages.dev/p/68150cb78ddb/the-yellow-line/img/live-capacete.webp",
      "leg": "A helmet on the yellow line"
    },
    "out": {
      "sub": "Three rules from the warehouse. Hear it, then say it.",
      "frases": [
        {
          "t": "You must wear the yellow helmet.",
          "img": "https://wolf-labs.pages.dev/p/68150cb78ddb/the-yellow-line/img/live-capacete.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You mustn't walk past the line.",
          "img": "https://wolf-labs.pages.dev/p/68150cb78ddb/the-yellow-line/img/live-capacete.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "You don't have to wear gloves.",
          "img": "https://wolf-labs.pages.dev/p/68150cb78ddb/the-yellow-line/img/live-capacete.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Forbidden or your choice? Four quick ones.",
      "regra": "<b>mustn't</b> = forbidden · <b>don't / doesn't have to</b> = your choice · <b>must / have to</b> = required · plain verb after them, never <b>to</b> after <b>must</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "You don't have to pay for parking.",
          "aceita": [],
          "d": "Dica: <b>don't have to</b> = não é obrigatório, a escolha é sua."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "You mustn't to run in the warehouse.",
          "r": "You mustn't run in the warehouse.",
          "aceita": [],
          "d": "Dica: depois de <b>mustn't</b>, o verbo vem direto, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "He don't have to wear a tie.",
          "r": "He doesn't have to wear a tie.",
          "aceita": [
            "He does not have to wear a tie."
          ],
          "d": "Dica: com <b>he</b>, use <b>doesn't have to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the meaning is wrong.",
          "mostra": "Parking is free. You mustn't pay.",
          "r": "You don't have to pay.",
          "aceita": [
            "You do not have to pay."
          ],
          "d": "Dica: é grátis, então não precisa pagar: <b>don't have to</b>. <b>Mustn't</b> proíbe."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Look at the picture: a helmet on the yellow line. Write 2 or 3 rules for your work or school. Use <b>must</b>, <b>mustn't</b> or <b>don't have to</b>.",
      "ph": "You must …",
      "ex": "You must arrive on time. You mustn't use your phone in class. You don't have to wear a uniform.",
      "img": "https://wolf-labs.pages.dev/p/68150cb78ddb/the-yellow-line/img/live-capacete.webp",
      "leg": "A helmet on the yellow line"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What mustn't you do at work or at school?",
          "ph": "You mustn't …",
          "ex": "You mustn't use your phone in a meeting."
        },
        {
          "q": "What don't you have to do on Sunday?",
          "ph": "I don't have to …",
          "ex": "I don't have to wake up early."
        }
      ]
    }
  }
};
