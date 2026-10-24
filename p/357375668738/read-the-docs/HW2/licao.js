/* READ THE DOCS · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: passiva no presente: is / are + particípio. B1: nenhum português. Imagens live-capa e live-b; live-a clara fica de fora. */
window.HW2 = {
  "id": "read-the-docs",
  "titulo": "Read the Docs",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/357375668738/read-the-docs/img/live-capa.webp",
  "alvo": "the present passive to explain how something works: is / are + past participle (The token is created and sent) · by + who, only when it matters; never is send, checks by, e-mails is, is storage",
  "abrir": "Do you read manuals or documentation? When?",
  "fecho": "<b>is / are + past participle</b> explains a process: <i>The password <b>is checked</b>. The files <b>are stored</b>.</i> One thing, <b>is</b>; many things, <b>are</b>. Add <b>by</b> + who only when it matters: <i>checked by the server</i>. Check the participle: <i>sent, made, written</i>, never <i>is send</i>.",
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
      "sub": "Mia and Leo write the page on how the login works. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/357375668738/read-the-docs/img/live-b.webp",
      "leg": "A laptop, ready to write",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, a new developer asks how the login works. Can you explain it?"
        },
        {
          "quem": "mia",
          "t": "Sure. First, the password is typed by the user, and then it is checked by the server."
        },
        {
          "quem": "leo",
          "t": "And then?"
        },
        {
          "quem": "mia",
          "t": "A token is created and sent to the app. It is stored on the phone for twenty-four hours."
        },
        {
          "quem": "leo",
          "t": "What happens after that?"
        },
        {
          "quem": "mia",
          "t": "After twenty-four hours, the token is deleted, and the user is asked to log in again."
        },
        {
          "quem": "leo",
          "t": "That's clear. Are the passwords saved?"
        },
        {
          "quem": "mia",
          "t": "No. Passwords are never saved in plain text. Only a safe copy is stored."
        },
        {
          "quem": "leo",
          "t": "Write that on the page. Short and simple, so that everyone understands."
        }
      ],
      "perguntas": [
        {
          "q": "How long is the token stored on the phone?",
          "op": [
            "For twenty-four hours",
            "For one hour",
            "For a week"
          ],
          "a": 0,
          "por": "It is stored on the phone for twenty-four hours."
        },
        {
          "q": "What is created and sent to the app?",
          "op": [
            "A token",
            "A password",
            "A new page"
          ],
          "a": 0,
          "por": "A token is created and sent to the app."
        },
        {
          "q": "What does Mia say about passwords?",
          "op": [
            "They are never saved in plain text",
            "They are saved in the app",
            "They are sent by e-mail"
          ],
          "a": 0,
          "por": "Passwords are never saved in plain text."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about how a system works. Hear it, then say it.",
      "frases": [
        {
          "t": "The password is checked by the server.",
          "img": "https://wolf-labs.pages.dev/p/357375668738/read-the-docs/img/live-b.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "A token is created and sent to the app.",
          "img": "https://wolf-labs.pages.dev/p/357375668738/read-the-docs/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The files are stored on the server.",
          "img": "https://wolf-labs.pages.dev/p/357375668738/read-the-docs/img/live-b.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "is or are, and the right participle. Four quick ones.",
      "regra": "<b>is / are</b> + past participle · one thing = <b>is</b>, many things = <b>are</b> · <b>by</b> + who (only if it matters).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The token is stored for twenty-four hours.",
          "aceita": [],
          "d": "Hint: <b>is</b> + the participle <b>stored</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The token is send to the app.",
          "r": "The token is sent to the app.",
          "aceita": [],
          "d": "Hint: the participle of <b>send</b> is <b>sent</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The password checks by the server.",
          "r": "The password is checked by the server.",
          "aceita": [],
          "d": "Hint: the password does not check: it is checked. Use <b>is</b> + participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The files is stored on the server.",
          "r": "The files are stored on the server.",
          "aceita": [],
          "d": "Hint: <b>files</b> is plural, so <b>are</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/357375668738/read-the-docs/img/live-capa.webp",
      "leg": "An open manual next to a laptop",
      "pede": "Look at the picture: an open manual next to a laptop. Explain how something works (a coffee machine, an app, a website, a bakery). Write 2 or 3 sentences with the passive: <b>is made</b>, <b>is sent</b>, <b>are checked</b>.",
      "ph": "First, the … is … Then the … is …",
      "ex": "First, the order is sent to the kitchen. Then the bread is baked and the box is closed. Finally, the order is delivered by a driver."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is checked before you leave home every day?",
          "ph": "The … is / are checked …",
          "ex": "The door is locked and the lights are turned off."
        },
        {
          "q": "How is your favorite food made?",
          "ph": "First, the … is … Then …",
          "ex": "First, the dough is made. Then it is baked in the oven for twenty minutes."
        }
      ]
    }
  }
};
