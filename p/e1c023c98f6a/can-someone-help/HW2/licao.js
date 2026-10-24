/* CAN SOMEONE HELP? · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: pedir ajuda no chat do time: I'm trying to + I tried to + Can someone...? A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "can-someone-help",
  "titulo": "Can Someone Help?",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e1c023c98f6a/can-someone-help/img/live-capa.webp",
  "alvo": "asking for help in the team chat: I'm trying to + verb (the problem now), I tried to + verb (what you did), Can someone + verb...? (the request); never I'm try to, never Somebody can help me?, never It don't work",
  "abrir": "Think of one small problem you had with your computer this week.",
  "fecho": "A good message has three parts: <b>I'm trying to</b> run the tests (now) · <b>I tried to</b> restart Docker (before) · <b>Can someone</b> take a look? (the request). Never <i>I'm try to</i>, never <i>Somebody can help me?</i>, and <i>it doesn't</i> work, not <i>it don't</i>.",
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
      "sub": "Mia is stuck. Leo helps her ask in the team chat. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/e1c023c98f6a/can-someone-help/img/live-capa.webp",
      "leg": "The laptop and the team chat",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, are you free? I'm stuck. The tests don't run on my laptop."
        },
        {
          "quem": "leo",
          "t": "Did you ask in the chat?"
        },
        {
          "quem": "mia",
          "t": "Not yet. I'm trying to write the message, but it's hard."
        },
        {
          "quem": "leo",
          "t": "Start with the problem. One line. Then say what you tried."
        },
        {
          "quem": "mia",
          "t": "OK. I tried to restart Docker, and I checked the logs. Nothing changed."
        },
        {
          "quem": "leo",
          "t": "Good. That helps people. Now the request."
        },
        {
          "quem": "mia",
          "t": "Can someone take a look? And I'm free after three."
        },
        {
          "quem": "leo",
          "t": "Perfect. Post it. I think you need a new version of Node."
        },
        {
          "quem": "mia",
          "t": "Really? I have version eighteen."
        },
        {
          "quem": "leo",
          "t": "The tests need twenty. Update it, and ask again if it still fails."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia say first, in her message?",
          "op": [
            "The problem, in one line",
            "Her name and her team",
            "A thank you to everyone"
          ],
          "a": 0,
          "por": "Start with the problem. One line."
        },
        {
          "q": "What did Mia try?",
          "op": [
            "She restarted Docker and checked the logs",
            "She called the manager",
            "She bought a new laptop"
          ],
          "a": 0,
          "por": "I tried to restart Docker, and I checked the logs."
        },
        {
          "q": "What is the real problem?",
          "op": [
            "Mia has an old version of Node",
            "The chat is slow",
            "The tests are too long"
          ],
          "a": 0,
          "por": "The tests need twenty. I have version eighteen."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for the team chat. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm trying to run the tests on my laptop.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/e1c023c98f6a/can-someone-help/img/live-capa.webp"
        },
        {
          "t": "I tried to restart Docker, and I checked the logs.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/e1c023c98f6a/can-someone-help/img/live-a.webp"
        },
        {
          "t": "Can someone take a look? I'm free after three.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/e1c023c98f6a/can-someone-help/img/live-capa.webp"
        }
      ]
    },
    "focus": {
      "sub": "The problem, what you tried, the request. Four quick ones.",
      "regra": "<b>I'm trying to</b> + verb (now) · <b>I tried to</b> + verb (before) · <b>Can someone</b> + verb? · <b>it doesn't</b>, not <i>it don't</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Can someone help me with this error?",
          "aceita": [],
          "d": "Dica: pedido ao time: <b>Can someone</b> + verbo. Não é <i>Somebody can help me?</i>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm try to run the tests.",
          "r": "I'm trying to run the tests.",
          "aceita": [
            "I am trying to run the tests."
          ],
          "d": "Dica: o problema agora: <b>I'm</b> + verbo com <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: what you did before.",
          "mostra": "I tried restart the server.",
          "r": "I tried to restart the server.",
          "aceita": [],
          "d": "Dica: <b>tried to</b> + verbo. Falta o <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "It don't work on my laptop.",
          "r": "It doesn't work on my laptop.",
          "aceita": [
            "It does not work on my laptop."
          ],
          "d": "Dica: com <b>it</b>, use <b>doesn't</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e1c023c98f6a/can-someone-help/img/live-a.webp",
      "leg": "A notebook, a pen and a laptop",
      "pede": "Look at the picture: a laptop and a notebook. Write a short message to your team: the problem with <b>I'm trying to</b>, what you did with <b>I tried to</b>, and a request with <b>Can someone</b>.",
      "ph": "I'm trying to …",
      "ex": "I'm trying to open the project. I tried to restart my computer. Can someone take a look?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who do you ask when you have a problem with your computer?",
          "ph": "I ask …",
          "ex": "I ask my brother. He knows computers."
        },
        {
          "q": "What are you trying to do this week?",
          "ph": "I'm trying to …",
          "ex": "I'm trying to finish a big report for work."
        }
      ]
    }
  }
};
