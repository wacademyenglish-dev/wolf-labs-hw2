/* LEAVE THE ROOM · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: second conditional. B1: nenhum português. */
window.HW2 = {
  "id": "leave-the-room",
  "titulo": "Leave the Room",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f1bc572670ec/leave-the-room/img/live-porta.webp",
  "alvo": "second conditional: if + past simple, would + base verb (If I had time, I would travel); were for everyone; could / might instead of would; never would in the if half, never would have",
  "abrir": "If you could leave work right now, where would you go?",
  "fecho": "<b>If</b> + past simple, <b>would</b> + base verb: <i>If I had more time, I would learn the guitar.</i> The past form is not about the past: it marks an imagined situation. <b>Would</b> never goes in the <i>if</i> half. <i>If I were you</i> works for every person.",
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
      "sub": "Mia and Leo imagine another life. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/f1bc572670ec/leave-the-room/img/live-cozinha.webp",
      "leg": "A kitchen at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you look tired. What would you do if you could leave work early?"
        },
        {
          "quem": "leo",
          "t": "If I could leave early, I would go to the beach."
        },
        {
          "quem": "mia",
          "t": "Really? If I had a free afternoon, I would sleep."
        },
        {
          "quem": "leo",
          "t": "If I were you, I would sleep too. What would you do if you won a lot of money?"
        },
        {
          "quem": "mia",
          "t": "If I won a lot of money, I would buy a small house near the sea."
        },
        {
          "quem": "leo",
          "t": "Would you quit your job?"
        },
        {
          "quem": "mia",
          "t": "I might. If I quit, I could study music."
        },
        {
          "quem": "leo",
          "t": "I wouldn't quit. If I didn't work, I would be bored."
        },
        {
          "quem": "mia",
          "t": "You would be bored? If I were you, I would try it for a month."
        },
        {
          "quem": "leo",
          "t": "Ha! Maybe I would."
        }
      ],
      "perguntas": [
        {
          "q": "Where would Leo go if he left work early?",
          "op": [
            "To the beach",
            "To the office",
            "To a museum"
          ],
          "a": 0,
          "por": "If I could leave early, I would go to the beach."
        },
        {
          "q": "What would Mia buy if she won a lot of money?",
          "op": [
            "A small house near the sea",
            "A new car",
            "A big boat"
          ],
          "a": 0,
          "por": "I would buy a small house near the sea."
        },
        {
          "q": "Why wouldn't Leo quit his job?",
          "op": [
            "He would be bored",
            "He would be rich",
            "He would be late"
          ],
          "a": 0,
          "por": "If I didn't work, I would be bored."
        }
      ]
    },
    "out": {
      "sub": "Three imaginary situations. Hear it, then say it.",
      "frases": [
        {
          "t": "If I could leave now, I would go home.",
          "img": "https://wolf-labs.pages.dev/p/f1bc572670ec/leave-the-room/img/live-porta.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If she were here, she would make some coffee.",
          "img": "https://wolf-labs.pages.dev/p/f1bc572670ec/leave-the-room/img/live-cozinha.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I wouldn't say that if I were you.",
          "img": "https://wolf-labs.pages.dev/p/f1bc572670ec/leave-the-room/img/live-amanhecer.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "If + past, would + verb. Four quick ones.",
      "regra": "<b>If</b> + past simple, <b>would</b> + base verb · <b>were</b> for everyone · no <b>would</b> in the <i>if</i> half.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If I had more time, I would learn the guitar.",
          "aceita": [],
          "d": "Hint: <b>If</b> + past simple (<i>had</i>), then <b>would</b> + base verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If I would have more time, I would travel.",
          "r": "If I had more time, I would travel.",
          "aceita": [],
          "d": "Hint: <b>would</b> never goes in the <i>if</i> half. Use the past: <i>had</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She would help us if she can.",
          "r": "She would help us if she could.",
          "aceita": [],
          "d": "Hint: the <i>if</i> half needs the past form: <b>could</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "If I were you, I would to call him.",
          "r": "If I were you, I would call him.",
          "aceita": [],
          "d": "Hint: after <b>would</b>, the plain verb. No <i>to</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f1bc572670ec/leave-the-room/img/live-porta.webp",
      "leg": "An open door with warm light",
      "pede": "Look at the picture: a door open to warm light. Imagine you could walk through it into another life. Write 2 or 3 sentences with <b>If</b> + past simple and <b>would</b>.",
      "ph": "If I could walk through that door, I would …",
      "ex": "If I could walk through that door, I would be on a beach. If I lived there, I would swim every morning. I wouldn't check my phone."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What would you do if you had a free week?",
          "ph": "If I had a free week, I would …",
          "ex": "If I had a free week, I would visit my cousins in the south."
        },
        {
          "q": "If you could live anywhere, where would you live? Why?",
          "ph": "If I could live anywhere, I would …",
          "ex": "If I could live anywhere, I would choose a small town by the sea, because it would be quiet."
        }
      ]
    }
  }
};
