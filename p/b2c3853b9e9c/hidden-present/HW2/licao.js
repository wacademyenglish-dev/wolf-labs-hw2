/* THE HIDDEN PRESENT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: this / that / these / those. A1: dicas em português só nas notas (d). Só as imagens live-* (já escuras). */
window.HW2 = {
  "id": "hidden-present",
  "titulo": "The Hidden Present",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b2c3853b9e9c/hidden-present/img/live-presente.webp",
  "alvo": "this / that / these / those: one or more, near or far · What is this? What are those? · this / that + is, these / those + are (never 'this are', 'these is')",
  "abrir": "What is in your hand right now? And on your desk?",
  "fecho": "One and near: <b>this</b>. One and far: <b>that</b>. More and near: <b>these</b>. More and far: <b>those</b>. One takes <b>is</b> (<i>What's that?</i>), more takes <b>are</b> (<i>What are those?</i>). Never <i>this are</i>, never <i>these is</i>.",
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
      "sub": "Mia and Leo hide a present at midnight. A new scene, about 35 seconds.",
      "img": "https://wolf-labs.pages.dev/p/b2c3853b9e9c/hidden-present/img/live-quarto.webp",
      "leg": "A dark room at midnight",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, what's that in your hand?"
        },
        {
          "quem": "leo",
          "t": "This is a ribbon for Ana's present."
        },
        {
          "quem": "mia",
          "t": "And what are those on the table?"
        },
        {
          "quem": "leo",
          "t": "These are scissors and paper. Where is the box?"
        },
        {
          "quem": "mia",
          "t": "The box is on the chair. That is the box over there."
        },
        {
          "quem": "leo",
          "t": "I see it. Are those books in the box?"
        },
        {
          "quem": "mia",
          "t": "Yes, those are books. And these are socks, here in my hands."
        },
        {
          "quem": "leo",
          "t": "Socks and books! This is a good present."
        },
        {
          "quem": "mia",
          "t": "Shh. Let's go to bed."
        }
      ],
      "perguntas": [
        {
          "q": "What is on the chair?",
          "op": [
            "The box",
            "The scissors",
            "The ribbon"
          ],
          "a": 0,
          "por": "That is the box over there."
        },
        {
          "q": "What does Mia have in her hands?",
          "op": [
            "Socks",
            "Books",
            "Scissors"
          ],
          "a": 0,
          "por": "These are socks, here in my hands."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about things near and far. Hear it, then say it.",
      "frases": [
        {
          "t": "This is a cup, and that is a chair.",
          "img": "https://wolf-labs.pages.dev/p/b2c3853b9e9c/hidden-present/img/live-xicara.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "These are scissors.",
          "img": "https://wolf-labs.pages.dev/p/b2c3853b9e9c/hidden-present/img/live-tesoura.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Those are socks over there.",
          "img": "https://wolf-labs.pages.dev/p/b2c3853b9e9c/hidden-present/img/live-meias.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "this, that, these or those? Four quick ones.",
      "regra": "<b>this / that</b> + is · <b>these / those</b> + are · near: this, these · far: that, those.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Those are my books over there.",
          "aceita": [],
          "d": "Dica: longe e mais de um: <b>those</b> + <b>are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "This are my glasses.",
          "r": "These are my glasses.",
          "aceita": [],
          "d": "Dica: mais de um pede <b>these are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "What are that?",
          "r": "What is that?",
          "aceita": [
            "What's that?"
          ],
          "d": "Dica: uma coisa só pede <b>is</b>: What <b>is</b> that?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I like that shoes.",
          "r": "I like those shoes.",
          "aceita": [
            "I like these shoes."
          ],
          "d": "Dica: sapatos são mais de um: <b>those shoes</b> ou <b>these shoes</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b2c3853b9e9c/hidden-present/img/live-presente.webp",
      "leg": "A present on a shelf",
      "pede": "Look at the picture: a present on a shelf. Write 2 or 3 sentences about things near you and far from you. Use <b>this, that, these</b> or <b>those</b>.",
      "ph": "This is … That is … These are …",
      "ex": "This is my phone. That is my door. Those are my books."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is in your hand or on your desk?",
          "ph": "This is … These are …",
          "ex": "This is my phone. These are my keys."
        },
        {
          "q": "What can you see far from you?",
          "ph": "That is … Those are …",
          "ex": "That is my door. Those are my books."
        }
      ]
    }
  }
};
