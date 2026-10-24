/* THE BUTTON · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Which phone do you use? / it doesn't / I fixed it / screenshot. A2: dicas em português só nas notas (d). Só imagens live-* escuras (lum < 50). */
window.HW2 = {
  "id": "the-button",
  "titulo": "The Button",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f8f4866a0ea6/the-button/img/live-b.webp",
  "alvo": "understanding a client's problem and explaining the fix: Which phone do you use? What happens when you tap it?; It doesn't work (never it don't); past simple for the fix (I fixed it, never I fix it yesterday); screenshot, not print",
  "abrir": "Which app or website doesn't work well for you?",
  "fecho": "<b>Ask</b> with <b>do you</b>: <i>Which phone do you use? What happens when you tap it?</i> <b>It</b> + <b>doesn't</b>: <i>It doesn't work.</i> <b>The fix</b> is past: <i>There was a problem. I fixed it.</i> A picture of the screen is a <b>screenshot</b>, not a <i>print</i>.",
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
      "sub": "Mia and Leo talk about a broken button. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/f8f4866a0ea6/the-button/img/live-b.webp",
      "leg": "A keyboard in blue light",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the order button doesn't work on my phone."
        },
        {
          "quem": "mia",
          "t": "Sorry about that. Which phone do you use?"
        },
        {
          "quem": "leo",
          "t": "I use an iPhone."
        },
        {
          "quem": "mia",
          "t": "OK. What happens when you tap the button?"
        },
        {
          "quem": "leo",
          "t": "Nothing happens. It doesn't move."
        },
        {
          "quem": "mia",
          "t": "Can you send a screenshot?"
        },
        {
          "quem": "leo",
          "t": "Sure. Here it is."
        },
        {
          "quem": "mia",
          "t": "I see the problem. An advert covers the button on small screens."
        },
        {
          "quem": "mia",
          "t": "Wait a few minutes. ... OK, I fixed it. Please open the page again."
        },
        {
          "quem": "leo",
          "t": "It works! Thank you so much!"
        }
      ],
      "perguntas": [
        {
          "q": "Which phone does Leo use?",
          "op": [
            "An iPhone",
            "A tablet",
            "An old laptop"
          ],
          "a": 0,
          "por": "I use an iPhone."
        },
        {
          "q": "What happens when Leo taps the button?",
          "op": [
            "Nothing",
            "The page closes",
            "The phone rings"
          ],
          "a": 0,
          "por": "Nothing happens. It doesn't move."
        },
        {
          "q": "What was the problem?",
          "op": [
            "An advert covered the button",
            "The phone was old",
            "There was no internet"
          ],
          "a": 0,
          "por": "An advert covers the button on small screens."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a bug. Hear it, then say it.",
      "frases": [
        {
          "t": "Which phone do you use?",
          "img": "https://wolf-labs.pages.dev/p/f8f4866a0ea6/the-button/img/live-b.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It doesn't work on my phone.",
          "img": "https://wolf-labs.pages.dev/p/f8f4866a0ea6/the-button/img/live-b.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I fixed it this morning.",
          "img": "https://wolf-labs.pages.dev/p/f8f4866a0ea6/the-button/img/live-b.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Which phone? It doesn't? I fixed it. Four quick ones.",
      "regra": "<b>Which / What</b> + <b>do you</b> · it <b>doesn't</b> · past: <b>fixed</b> · <b>screenshot</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What happens when you tap the button?",
          "aceita": [],
          "d": "Dica: pergunta: <b>what happens</b> + when you + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It don't work on my phone.",
          "r": "It doesn't work on my phone.",
          "aceita": [
            "It does not work on my phone."
          ],
          "d": "Dica: com <b>it</b>, o certo é <b>doesn't</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I fix it yesterday.",
          "r": "I fixed it yesterday.",
          "aceita": [],
          "d": "Dica: ontem é passado: <b>fixed</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Can you send a print?",
          "r": "Can you send a screenshot?",
          "aceita": [],
          "d": "Dica: 'print' é imprimir no papel. A imagem da tela é <b>screenshot</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f8f4866a0ea6/the-button/img/live-b.webp",
      "leg": "A keyboard in blue light",
      "pede": "Look at the picture: a keyboard in blue light. Imagine a client says: the button doesn't work. Write 2 or 3 sentences: ask a question and say what you fixed.",
      "ph": "Which phone do you use? I fixed …",
      "ex": "Which phone do you use? What happens when you tap the button? I fixed the problem yesterday."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Which apps or websites do you use every day? Is there one that doesn't work well?",
          "ph": "I use … It doesn't work …",
          "ex": "I use a bank app every day. It doesn't work well at night."
        },
        {
          "q": "Tell me about a problem you fixed. What was it?",
          "ph": "Last week I fixed … It was …",
          "ex": "Last week I fixed my Wi-Fi. It was a small problem."
        }
      ]
    }
  }
};
