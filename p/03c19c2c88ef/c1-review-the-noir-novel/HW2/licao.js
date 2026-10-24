/* THE NOIR NOVEL · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=".
   Alvo: inversion after negative and limiting adverbs: No sooner had. C1: nenhum português. */
window.HW2 = {
  "id": "c1-review-the-noir-novel",
  "titulo": "The Noir Novel",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/03c19c2c88ef/c1-review-the-noir-novel/img/live-capa.webp",
  "alvo": "inversion after negative and limiting adverbs: No sooner had ... than ..., Hardly had ... when ..., Not only did ..., Little did ... know, Not until ... did ..., Only then did ..., So ... was ... that ..., Had I known, ...",
  "abrir": "Think of a story you love. What is the moment everything changes?",
  "fecho": "Drama starts with a negative: the helper comes before the subject. <b>No sooner had</b> she arrived <b>than</b> it rained. <b>Little did</b> she know. <b>Not until</b> midnight <b>did</b> she see it. <b>Only then did</b> she understand. <b>Never have I</b> felt so alone. <b>Had I known</b>, I would have called.",
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
      "sub": "Mia and Leo talk about his mystery novel. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/03c19c2c88ef/c1-review-the-noir-novel/img/live-conversa.webp",
      "leg": "A foggy harbour",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, how is your noir novel? Chapter twelve, right?"
        },
        {
          "quem": "leo",
          "t": "Almost done. No sooner had Detective Vale reached the harbour than the fog came down."
        },
        {
          "quem": "mia",
          "t": "Does she find the ship?"
        },
        {
          "quem": "leo",
          "t": "Not at all. Little did she know that the ship had already left."
        },
        {
          "quem": "mia",
          "t": "When does she find out?"
        },
        {
          "quem": "leo",
          "t": "Not until midnight did she find the captain's note. Only then did she understand the plan."
        },
        {
          "quem": "mia",
          "t": "Hmm. Had I been Vale, I would have waited for sunrise."
        },
        {
          "quem": "leo",
          "t": "Had you waited, you would have lost the trail. Hardly had she turned the page when the lamp went out."
        },
        {
          "quem": "mia",
          "t": "Ooh. And the ending?"
        },
        {
          "quem": "leo",
          "t": "So thick was the fog that nobody saw the boat leave. That is my last line."
        }
      ],
      "perguntas": [
        {
          "q": "What came down when Vale reached the harbour?",
          "op": [
            "The fog",
            "The rain",
            "The night"
          ],
          "a": 0,
          "por": "No sooner had Detective Vale reached the harbour than the fog came down."
        },
        {
          "q": "When did Vale find the captain's note?",
          "op": [
            "At midnight",
            "At sunrise",
            "Before the fog"
          ],
          "a": 0,
          "por": "Not until midnight did she find the captain's note."
        },
        {
          "q": "Why did nobody see the boat leave?",
          "op": [
            "The fog was so thick",
            "The harbour was empty",
            "The lamp was on"
          ],
          "a": 0,
          "por": "So thick was the fog that nobody saw the boat leave."
        }
      ]
    },
    "out": {
      "sub": "Three lines from chapter twelve. Hear it, then say it.",
      "frases": [
        {
          "t": "No sooner had she arrived than the fog came down.",
          "img": "https://wolf-labs.pages.dev/p/03c19c2c88ef/c1-review-the-noir-novel/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Little did she know that the ship had gone.",
          "img": "https://wolf-labs.pages.dev/p/03c19c2c88ef/c1-review-the-noir-novel/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Not until midnight did she find the note.",
          "img": "https://wolf-labs.pages.dev/p/03c19c2c88ef/c1-review-the-noir-novel/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Negative first, helper before the subject. Four quick ones.",
      "regra": "<b>No sooner had … than</b> · <b>Hardly had … when</b> · <b>Never have I</b> · <b>Had I known</b> · <b>Only then did</b> + plain verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Only then did she understand the plan.",
          "aceita": [],
          "d": "Hint: <b>Only then</b> + <b>did</b> + subject + plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "Never I have felt so alone.",
          "r": "Never have I felt so alone.",
          "aceita": [],
          "d": "Hint: after <b>Never</b>, the helper comes first: <b>have I</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "No sooner had he left when the rain began.",
          "r": "No sooner had he left than the rain began.",
          "aceita": [],
          "d": "Hint: <b>No sooner</b> pairs with <b>than</b>. <b>Hardly</b> pairs with <i>when</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If had I known, I would have called.",
          "r": "Had I known, I would have called.",
          "aceita": [],
          "d": "Hint: the inversion replaces <b>if</b>: <b>Had I known</b>, never <i>If had I</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/03c19c2c88ef/c1-review-the-noir-novel/img/live-capa.webp",
      "leg": "A typewriter by a rainy window",
      "pede": "Look at the picture: a typewriter by a rainy window. Write 2 or 3 sentences for a mystery story. Use <b>No sooner had</b>, <b>Little did</b> or <b>Never have</b>.",
      "ph": "No sooner had I … than …",
      "ex": "No sooner had I opened the door than the phone rang. Little did I know it was good news. Never have I felt so curious."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Tell me about a time you arrived somewhere and everything changed.",
          "ph": "No sooner had I … than …",
          "ex": "No sooner had I arrived than it started to rain."
        },
        {
          "q": "What is something you have never done before, but want to?",
          "ph": "Never have I …",
          "ex": "Never have I traveled alone, but I want to."
        }
      ]
    }
  }
};
