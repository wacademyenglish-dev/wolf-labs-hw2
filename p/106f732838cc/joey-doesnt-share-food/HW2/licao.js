/* JOEY DOESN'T SHARE FOOD · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: conselho com should / shouldn't + verbo simples; Should I / we ...? A2: dicas em português só nas notas (d). Falas originais. */
window.HW2 = {
  "id": "joey-doesnt-share-food",
  "titulo": "Joey Doesn’t Share Food",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/106f732838cc/joey-doesnt-share-food/img/live-capa.webp",
  "alvo": "advice with should / shouldn't + the base verb (no to, no -s, no past); questions: Should I ...? Should we ...?",
  "abrir": "What do you share with your friends? What don't you share?",
  "fecho": "<b>Should</b> = a good idea. <b>Shouldn't</b> = a bad idea. After it, the plain verb: <i>He should share.</i> No <i>to</i>, no <i>-s</i>. Questions start with <b>Should</b>: <i>Should I call her? Should we wait?</i>",
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
      "sub": "Mia and Leo at a coffee table. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/106f732838cc/joey-doesnt-share-food/img/live-mesa.webp",
      "leg": "Two coffees, fries and cheesecake",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at this table. Two coffees, a plate of fries and a cheesecake."
        },
        {
          "quem": "mia",
          "t": "In the show, the fries are Joey's. Joey doesn't share his food."
        },
        {
          "quem": "leo",
          "t": "So what should his friends do?"
        },
        {
          "quem": "mia",
          "t": "They shouldn't touch his fries. That is a bad idea."
        },
        {
          "quem": "leo",
          "t": "And what should Joey do?"
        },
        {
          "quem": "mia",
          "t": "He should share. Just two or three fries. It is not a big problem."
        },
        {
          "quem": "leo",
          "t": "Should I order my own fries?"
        },
        {
          "quem": "mia",
          "t": "Yes, you should. And you shouldn't eat my cheesecake."
        },
        {
          "quem": "leo",
          "t": "Why not?"
        },
        {
          "quem": "mia",
          "t": "Because it is mine!"
        },
        {
          "quem": "leo",
          "t": "OK, OK. And my coffee? What should I do?"
        },
        {
          "quem": "mia",
          "t": "You should drink it before it gets cold."
        }
      ],
      "perguntas": [
        {
          "q": "What shouldn't Joey's friends do?",
          "op": [
            "Touch his fries",
            "Order a coffee",
            "Call him"
          ],
          "a": 0,
          "por": "They shouldn't touch his fries."
        },
        {
          "q": "What should Joey do?",
          "op": [
            "Share two or three fries",
            "Eat the cheesecake",
            "Go home"
          ],
          "a": 0,
          "por": "He should share. Just two or three fries."
        },
        {
          "q": "What shouldn't Leo eat?",
          "op": [
            "Mia's cheesecake",
            "His own fries",
            "Mia's fries"
          ],
          "a": 0,
          "por": "You shouldn't eat my cheesecake."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about dinner with friends. Hear it, then say it.",
      "frases": [
        {
          "t": "Joey should share his fries with his friends.",
          "img": "https://wolf-labs.pages.dev/p/106f732838cc/joey-doesnt-share-food/img/live-mesa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Monica shouldn't worry about the turkey tonight.",
          "img": "https://wolf-labs.pages.dev/p/106f732838cc/joey-doesnt-share-food/img/live-cozinha.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Should we wait for Rachel?",
          "img": "https://wolf-labs.pages.dev/p/106f732838cc/joey-doesnt-share-food/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Should, shouldn't and Should I? Four quick ones.",
      "regra": "<b>should</b> = good idea · <b>shouldn't</b> = bad idea · + the plain verb · <b>Should</b> I ...? <b>Should</b> we ...?",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "You should call your friends tonight.",
          "aceita": [],
          "d": "Dica: <b>should</b> + verbo simples: call."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Monica should relaxes before dinner.",
          "r": "Monica should relax before dinner.",
          "aceita": [],
          "d": "Dica: depois de <b>should</b>, o verbo fica simples: <b>relax</b>, sem -s."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make it a bad idea.",
          "mostra": "You don't should touch his fries.",
          "r": "You shouldn't touch his fries.",
          "aceita": [
            "You should not touch his fries."
          ],
          "d": "Dica: o negativo é <b>shouldn't</b>, sem <i>don't</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make it a question.",
          "mostra": "We should wait for Rachel?",
          "r": "Should we wait for Rachel?",
          "aceita": [],
          "d": "Dica: a pergunta começa com <b>Should</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/106f732838cc/joey-doesnt-share-food/img/live-cozinha.webp",
      "leg": "A kitchen, dinner almost ready",
      "pede": "Look at the picture: a turkey and a dessert on the kitchen counter. Give 2 or 3 pieces of advice to the cook. Use <b>should</b> or <b>shouldn't</b>.",
      "ph": "You should …",
      "ex": "You should cut the turkey now. You shouldn't leave it on the counter for hours. Should I bring the dessert to the table?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "A friend is sad. What should you do?",
          "ph": "I should …",
          "ex": "I should call him and listen. I shouldn't give too much advice."
        },
        {
          "q": "What shouldn't people do at a dinner with friends?",
          "ph": "People shouldn't …",
          "ex": "People shouldn't use their phones at the table."
        }
      ]
    }
  }
};
