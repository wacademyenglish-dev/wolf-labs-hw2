/* I'D LIKE A REFUND · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present perfect com already / just / yet. B1: nenhum portugues. Imagens live-a, live-b, live-capa (escuras, combinam). */
window.HW2 = {
  "id": "id-like-a-refund",
  "titulo": "I'd Like a Refund",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2e1bfe19c245/id-like-a-refund/img/live-capa.webp",
  "alvo": "present perfect with already / just / yet: I've already tried two cables; They've just stopped working; I haven't received the e-mail yet; Have you charged them yet?; never 'I didn't receive it yet', 'I have just buy' or 'I have bought them last week'",
  "abrir": "What have you already done today, and what haven't you done yet?",
  "fecho": "<b>have / has + past participle</b> with <b>already</b> (it is done), <b>just</b> (a moment ago) and <b>yet</b> (in questions and with <i>not</i>, at the end): <i>I've already tried two cables. They've just stopped working. I haven't received the e-mail yet.</i> With a finished time like <i>last week</i>, use past simple: <i>I bought them last week.</i>",
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
      "sub": "Mia returns broken headphones at a store in Chicago. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/2e1bfe19c245/id-like-a-refund/img/live-capa.webp",
      "leg": "A Chicago street at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Good afternoon. How can I help you?"
        },
        {
          "quem": "mia",
          "t": "Hi. I'd like a refund for these headphones. They've just stopped working."
        },
        {
          "quem": "leo",
          "t": "I'm sorry about that. Have you tried a different cable yet?"
        },
        {
          "quem": "mia",
          "t": "Yes, I've already tried two cables, and I've charged them all night."
        },
        {
          "quem": "leo",
          "t": "Hmm. Have you checked the app yet?"
        },
        {
          "quem": "mia",
          "t": "I've just updated it, and nothing changed. The left side is still silent."
        },
        {
          "quem": "leo",
          "t": "And when did you buy them?"
        },
        {
          "quem": "mia",
          "t": "About four weeks ago. I've already found the receipt, and I've brought the box too."
        },
        {
          "quem": "leo",
          "t": "Perfect. Our policy is thirty days, so you're just in time. I haven't printed the form yet, one second."
        },
        {
          "quem": "mia",
          "t": "Thank you. Take your time. I haven't had lunch yet, so I'm not in a hurry."
        }
      ],
      "perguntas": [
        {
          "q": "What has happened to the headphones?",
          "op": [
            "They have just stopped working",
            "They were lost",
            "They are too big"
          ],
          "a": 0,
          "por": "They've just stopped working."
        },
        {
          "q": "Has Mia tried a different cable?",
          "op": [
            "Yes, she has already tried two",
            "No, not yet",
            "No, she can't find one"
          ],
          "a": 0,
          "por": "I've already tried two cables."
        },
        {
          "q": "Why is Mia in time for the refund?",
          "op": [
            "She is inside the thirty-day policy",
            "The store is closing",
            "She has no receipt"
          ],
          "a": 0,
          "por": "Our policy is thirty days, so you're just in time."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a return. Hear it, then say it.",
      "frases": [
        {
          "t": "The headphones have just stopped working.",
          "img": "https://wolf-labs.pages.dev/p/2e1bfe19c245/id-like-a-refund/img/live-a.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I've already brought the box and the receipt.",
          "img": "https://wolf-labs.pages.dev/p/2e1bfe19c245/id-like-a-refund/img/live-b.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Have you printed the form yet?",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "already, just and yet. Four quick ones.",
      "regra": "<b>already</b> = it is done · <b>just</b> = a moment ago · <b>yet</b> = at the end, in questions and with <i>not</i> · finished time (<i>last week</i>) = past simple.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She has already paid for the headphones.",
          "aceita": [],
          "d": "Hint: <b>already</b> goes between <b>has</b> and the verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I didn't receive the e-mail yet.",
          "r": "I haven't received the e-mail yet.",
          "aceita": [
            "I have not received the e-mail yet."
          ],
          "d": "Hint: with <b>yet</b>, use <b>haven't</b> + past participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I have just buy a new cable.",
          "r": "I have just bought a new cable.",
          "aceita": [
            "I've just bought a new cable."
          ],
          "d": "Hint: after <b>have</b>, use the past participle: <b>bought</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I have bought them last week.",
          "r": "I bought them last week.",
          "aceita": [],
          "d": "Hint: <b>last week</b> is a finished time, so past simple."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2e1bfe19c245/id-like-a-refund/img/live-a.webp",
      "leg": "Headphones on a dark counter",
      "pede": "Look at the picture: headphones on a counter. Imagine they are broken and you are at the store. Write 2 or 3 sentences about what you have already done and what you haven't done yet. Use <b>already</b>, <b>just</b> or <b>yet</b>.",
      "ph": "I've already … but I haven't … yet.",
      "ex": "I've already tried a new cable, and I've just updated the app. I haven't found the receipt yet."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What have you already done today? What haven't you done yet?",
          "ph": "I've already … I haven't … yet.",
          "ex": "I've already had breakfast and answered my messages. I haven't exercised yet."
        },
        {
          "q": "What have you just bought, and have you used it yet?",
          "ph": "I've just bought … I haven't used it yet.",
          "ex": "I've just bought a backpack, but I haven't used it yet."
        }
      ]
    }
  }
};
