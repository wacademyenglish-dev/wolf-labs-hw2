/* THE THIRD VERSION · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: futuro no passado: would, was going to, was supposed to, was about to. B2 Business: nenhum português. */
window.HW2 = {
  "id": "the-third-version",
  "titulo": "The Third Version",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/261b0feac281/the-third-version/img/live-recado.webp",
  "alvo": "future in the past: said + would (the promise, told later), was going to (the plan), was supposed to (the arrangement), was about to (one second away); the verb after them is the plain verb, and the promise steps back (will -> would)",
  "abrir": "What did you plan to do this week that didn't happen?",
  "fecho": "Four ways to talk about a promise that wasn't kept: <b>said he would</b> + verb (the promise, told later), <b>was going to</b> + verb (the plan), <b>was supposed to</b> + verb (the arrangement), <b>was about to</b> + verb (one second away). The promise steps back: <i>will → would</i>. Never <i>was suppose to</i>.",
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
      "sub": "Mia and Leo and a late contract. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/261b0feac281/the-third-version/img/live-bg-office.webp",
      "leg": "An open office after hours",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the client called again. She says nobody sent the contract."
        },
        {
          "quem": "leo",
          "t": "Ravi said he would send it on Monday. And Elena said she would check it first."
        },
        {
          "quem": "mia",
          "t": "So who was supposed to send it?"
        },
        {
          "quem": "leo",
          "t": "Ravi. He was going to send it after the meeting, but the meeting ran long."
        },
        {
          "quem": "mia",
          "t": "Did he at least try on Tuesday?"
        },
        {
          "quem": "leo",
          "t": "He was about to click send when the network went down in the building."
        },
        {
          "quem": "mia",
          "t": "So that is why it is late."
        },
        {
          "quem": "leo",
          "t": "Yes. And I was supposed to call the client yesterday. I was going to, but I forgot."
        },
        {
          "quem": "mia",
          "t": "So the third version is: everybody had a reason."
        },
        {
          "quem": "leo",
          "t": "Maybe. But the client wants the contract, not the reasons. I will send it myself now."
        },
        {
          "quem": "mia",
          "t": "Good. I told her we would send it by five."
        }
      ],
      "perguntas": [
        {
          "q": "Who was supposed to send the contract?",
          "op": [
            "Ravi",
            "Elena",
            "Mia"
          ],
          "a": 0,
          "por": "So who was supposed to send it? Ravi."
        },
        {
          "q": "Why didn't Ravi send it on Tuesday?",
          "op": [
            "The network went down just before he clicked",
            "He forgot the client",
            "He was on holiday"
          ],
          "a": 0,
          "por": "He was about to click send when the network went down."
        },
        {
          "q": "What did Mia tell the client?",
          "op": [
            "They would send it by five",
            "They had already sent it",
            "They were canceling the order"
          ],
          "a": 0,
          "por": "I told her we would send it by five."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about promises and plans. Hear it, then say it.",
      "frases": [
        {
          "t": "Ravi said he would send the contract on Monday.",
          "img": "https://wolf-labs.pages.dev/p/261b0feac281/the-third-version/img/live-bg-office.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I was going to call her, but I forgot.",
          "img": "https://wolf-labs.pages.dev/p/261b0feac281/the-third-version/img/live-recado.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "He was about to sign when she called.",
          "img": "https://wolf-labs.pages.dev/p/261b0feac281/the-third-version/img/live-escritorio.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Would, going to, supposed to, about to. Four quick ones.",
      "regra": "<b>said he would</b> · <b>was going to</b> · <b>was supposed to</b> · <b>was about to</b> + the plain verb · the promise steps back: <i>will → would</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We were about to leave when it rained.",
          "aceita": [],
          "d": "Hint: <b>were about to</b> + the plain verb: one second away."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Ravi said he will send it on Monday.",
          "r": "Ravi said he would send it on Monday.",
          "aceita": [],
          "d": "Hint: the promise is told later, so <b>will</b> steps back to <b>would</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I was suppose to call the client.",
          "r": "I was supposed to call the client.",
          "aceita": [],
          "d": "Hint: <b>was supposed to</b>: the arrangement. Don't forget the <i>-d</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "She was going call you later.",
          "r": "She was going to call you later.",
          "aceita": [],
          "d": "Hint: <b>was going to</b> + the plain verb: the plan."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/261b0feac281/the-third-version/img/live-recado.webp",
      "leg": "A phone with a message light",
      "pede": "Look at the picture: a phone with a message light on. Write 2 or 3 sentences about a plan or a promise that did not happen at work or in class. Use <b>was going to</b>, <b>was supposed to</b>, <b>was about to</b> or <b>said … would</b>.",
      "ph": "I was supposed to … but …",
      "ex": "I was supposed to send a report on Friday. I was going to do it after lunch, but a client called. My manager said she would wait until Monday."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What were you supposed to do this week, and didn't?",
          "ph": "I was supposed to … but …",
          "ex": "I was supposed to call my bank, but I forgot."
        },
        {
          "q": "Who said they would do something for you? Did they do it?",
          "ph": "… said he would … and …",
          "ex": "My neighbor said he would fix the gate, and he did it on Sunday."
        }
      ]
    }
  }
};
