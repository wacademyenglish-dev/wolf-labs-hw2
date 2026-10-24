/* NOT WITH YOUR HANDS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: causativos: have/get + coisa + particípio, have + pessoa + verbo, get + pessoa + to. B2 Business: nenhum português. */
window.HW2 = {
  "id": "not-with-your-hands",
  "titulo": "Not With Your Hands",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/3e7c95a0b182/not-with-your-hands/img/live-luvas.webp",
  "alvo": "causatives: have + thing + third form (have the printer fixed), have + person + plain verb (have Ana send it), get + person + to + verb (get the lawyer to check it); the same form without a cause is bad luck (had my phone stolen)",
  "abrir": "What is one thing you never do with your own hands?",
  "fecho": "Someone else does it: <b>have + thing + third form</b> (<i>have the printer fixed</i>), <b>have + person + plain verb</b> (<i>have Ana send it</i>), <b>get + person + to + verb</b> (<i>get the lawyer to check it</i>). The order is the meaning: <i>I had my hair cut</i> is not <i>I cut my hair</i>. Never <i>have Ana to send</i>.",
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
      "sub": "Mia and Leo, on a manager's first week. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/3e7c95a0b182/not-with-your-hands/img/live-bg-desk-exec.webp",
      "leg": "A manager's desk at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, it's my first week as a manager. The printer is broken, the projector won't turn on, and the client wants new slides by noon."
        },
        {
          "quem": "mia",
          "t": "Don't do it all yourself. You can have the printer fixed by the IT team."
        },
        {
          "quem": "leo",
          "t": "I already called them. They said somebody would come at two."
        },
        {
          "quem": "mia",
          "t": "Good. And the slides? Get Nina to redo them. She is fast."
        },
        {
          "quem": "leo",
          "t": "Do you think she will say yes?"
        },
        {
          "quem": "mia",
          "t": "Just ask. Get her to start now, and have the final version checked by the lawyer."
        },
        {
          "quem": "leo",
          "t": "Checked by the lawyer? That usually takes days."
        },
        {
          "quem": "mia",
          "t": "Not if you have Omar call the office today. He knows her well."
        },
        {
          "quem": "leo",
          "t": "All right. And for the client lunch, I will have the caterer bring sandwiches to the meeting room."
        },
        {
          "quem": "mia",
          "t": "Perfect. But there is one thing you can't hand to somebody else: the call to the client."
        },
        {
          "quem": "leo",
          "t": "You are right. I will make that call myself."
        }
      ],
      "perguntas": [
        {
          "q": "How does Mia suggest fixing the printer?",
          "op": [
            "Have the IT team fix it",
            "Fix it yourself",
            "Buy a new one"
          ],
          "a": 0,
          "por": "You can have the printer fixed by the IT team."
        },
        {
          "q": "Who should redo the slides?",
          "op": [
            "Nina",
            "Omar",
            "The caterer"
          ],
          "a": 0,
          "por": "Get Nina to redo them."
        },
        {
          "q": "What must Leo do himself?",
          "op": [
            "Call the client",
            "Order the lunch",
            "Check the slides"
          ],
          "a": 0,
          "por": "There is one thing you can't hand to somebody else: the call to the client."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about having things done. Hear it, then say it.",
      "frases": [
        {
          "t": "I will have the printer fixed before lunch.",
          "img": "https://wolf-labs.pages.dev/p/3e7c95a0b182/not-with-your-hands/img/live-bg-desk-exec.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Mia got the lawyer to check the contract.",
          "img": "https://wolf-labs.pages.dev/p/3e7c95a0b182/not-with-your-hands/img/live-bg-meeting-exec.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We had the room cleaned before the meeting.",
          "img": "https://wolf-labs.pages.dev/p/3e7c95a0b182/not-with-your-hands/img/live-bg-corner-office.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Have it done, have someone do it, get someone to do it. Four quick ones.",
      "regra": "<b>have</b> + thing + third form · <b>have</b> + person + plain verb · <b>get</b> + person + <b>to</b> + verb · never <i>have Ana to send</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I will have the printer fixed by Friday.",
          "aceita": [],
          "d": "Hint: <b>have</b> + the thing + the third form: <b>fixed</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I cut my hair at the salon.",
          "r": "I had my hair cut at the salon.",
          "aceita": [
            "I got my hair cut at the salon."
          ],
          "d": "Hint: somebody else cut it, so <b>had my hair cut</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I will have Ana to send the file.",
          "r": "I will have Ana send the file.",
          "aceita": [
            "I'll have Ana send the file."
          ],
          "d": "Hint: <b>have</b> + person + the plain verb, with no <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We had the contract sign by the lawyer.",
          "r": "We had the contract signed by the lawyer.",
          "aceita": [],
          "d": "Hint: the thing is signed by somebody, so use the third form: <b>signed</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/3e7c95a0b182/not-with-your-hands/img/live-luvas.webp",
      "leg": "Gloves on a dark desk",
      "pede": "Look at the picture: gloves on a dark desk, hands off. Write 2 or 3 sentences about things you have done by other people. Use <b>have</b> or <b>get</b>.",
      "ph": "I had my … done. I will get … to …",
      "ex": "I had my car washed on Saturday. I got my brother to help me move. I will have the report checked by my boss."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you have done for you last month? A repair, a haircut, a delivery?",
          "ph": "I had my … repaired last month.",
          "ex": "I had my phone screen repaired last month."
        },
        {
          "q": "What do you never hand to someone else at work or at home? Why?",
          "ph": "I never have … done. I …",
          "ex": "I never have my emails written by someone else. I write them myself."
        }
      ]
    }
  }
};
