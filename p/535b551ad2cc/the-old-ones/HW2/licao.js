/* THE OLD ONES · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past simple x present perfect. Jogo: falas originais, só explorar. B1: nenhum português. */
window.HW2 = {
  "id": "the-old-ones",
  "titulo": "The Old Ones",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/535b551ad2cc/the-old-ones/img/live-dam.webp",
  "alvo": "past simple (a finished time: a thousand years ago, yesterday, in 2019, when I was a child) x present perfect (the result now, or experience with no finished time: has grown, have never seen, ever, yet, since); never have + yesterday, never when have you, never have ever went",
  "abrir": "Have you ever visited a very old place?",
  "fecho": "<b>Past simple</b> = a finished time: <i>People built it a thousand years ago.</i> <b>Present perfect</b> = the result now, no finished time: <i>Trees have grown around it. I have never seen it.</i> With <i>yesterday, ago, in 2019, when</i>: past simple.",
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
      "sub": "Mia and Leo explore old ruins in a green valley. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/535b551ad2cc/the-old-ones/img/live-ruin.webp",
      "leg": "An old tower covered in trees",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at this old tower. Trees have grown all around it."
        },
        {
          "quem": "mia",
          "t": "It's amazing. People built it a thousand years ago."
        },
        {
          "quem": "leo",
          "t": "And now nature has taken it back. Have you ever seen a place like this?"
        },
        {
          "quem": "mia",
          "t": "No, never. But I found a small door in the hill yesterday."
        },
        {
          "quem": "leo",
          "t": "A door? Have you opened it yet?"
        },
        {
          "quem": "mia",
          "t": "Not yet. I found it late, so I went back to camp."
        },
        {
          "quem": "leo",
          "t": "Let's open it now. Wow, a bunker! Someone has left a blue device on the shelf."
        },
        {
          "quem": "mia",
          "t": "Is it a Focus? Old stories say a girl found one when she was a child."
        },
        {
          "quem": "leo",
          "t": "It still works! Look, it has shown us a map of the valley."
        },
        {
          "quem": "mia",
          "t": "There's a dam on the map. I have never been there. Let's go tomorrow."
        }
      ],
      "perguntas": [
        {
          "q": "When did people build the tower?",
          "op": [
            "A thousand years ago",
            "Yesterday",
            "Last year"
          ],
          "a": 0,
          "por": "People built it a thousand years ago."
        },
        {
          "q": "What did Mia find yesterday?",
          "op": [
            "A small door in the hill",
            "A blue device",
            "A map of the valley"
          ],
          "a": 0,
          "por": "I found a small door in the hill yesterday."
        },
        {
          "q": "What has the device shown them?",
          "op": [
            "A map of the valley",
            "A new door",
            "An old tower"
          ],
          "a": 0,
          "por": "It has shown us a map of the valley."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the old world. Hear it, then say it.",
      "frases": [
        {
          "t": "People built this tower a thousand years ago.",
          "img": "https://wolf-labs.pages.dev/p/535b551ad2cc/the-old-ones/img/live-ruin.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Nature has taken the old dam back.",
          "img": "https://wolf-labs.pages.dev/p/535b551ad2cc/the-old-ones/img/live-dam.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I have never seen a door like this one.",
          "img": "https://wolf-labs.pages.dev/p/535b551ad2cc/the-old-ones/img/live-bunker.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Past simple or present perfect? Four quick ones.",
      "regra": "<b>past simple</b> = a finished time (yesterday, ago, in 2019) · <b>present perfect</b> = the result now, or ever / never / yet · never <b>have</b> + yesterday · <b>When did you …?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We found the old door yesterday.",
          "aceita": [],
          "d": "Hint: <b>yesterday</b> is a finished time: past simple."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I have visited the dam last year.",
          "r": "I visited the dam last year.",
          "aceita": [],
          "d": "Hint: <b>last year</b> is a finished time: past simple, not present perfect."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Have you ever went to the dam?",
          "r": "Have you ever been to the dam?",
          "aceita": [
            "Have you ever gone to the dam?"
          ],
          "d": "Hint: after <b>have</b>, the participle: <i>been, gone</i>, not <i>went</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "When have you found the door?",
          "r": "When did you find the door?",
          "aceita": [],
          "d": "Hint: <b>When</b> asks for a finished time: <b>did</b> + the plain verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/535b551ad2cc/the-old-ones/img/live-stadium.webp",
      "leg": "An old stadium full of trees",
      "pede": "Look at the picture: an old stadium full of trees. Write 2 or 3 sentences: what happened here long ago, and what has changed? Use the <b>past simple</b> and the <b>present perfect</b>.",
      "ph": "Long ago people … Now trees have …",
      "ex": "People played here a long time ago. Now trees have grown on the seats, and nobody has played here for years."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Have you ever visited a very old place? When did you go?",
          "ph": "I have visited … I went there in …",
          "ex": "I have visited an old church in Ouro Preto. I went there in 2019."
        },
        {
          "q": "What has changed in your city since you were a child?",
          "ph": "My city has … When I was a child, …",
          "ex": "My city has built a new subway line. When I was a child, we only had buses."
        }
      ]
    }
  }
};
