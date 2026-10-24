/* The Net · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: will. Bíblia (WEB, conferida em ebible.org): versículos só no Listen e no Out loud, nunca no Focus, nunca marcados errados. A1/A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-net",
  "titulo": "The Net",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/29e0d6d267c3/the-net/img/live-barcos.webp",
  "alvo": "will for decisions, promises and the future (I will help you), will not / won't, Will you ...? with a short answer; plain verb after will, no to, no -s, no don't will",
  "abrir": "What will you do tomorrow morning?",
  "fecho": "<b>will</b> + plain verb: <i>I will help you.</i> No: <i>I will not (won't) go.</i> A question starts with <b>will</b>: <i>Will you come? Yes, I will.</i> No <i>to</i>, no <i>-s</i>, no <i>don't will</i>.",
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
      "sub": "Mia tells Leo about a fisherman. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/29e0d6d267c3/the-net/img/live-barcos.webp",
      "leg": "Two boats on the shore at dawn",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm reading about Simon. He is a fisherman."
        },
        {
          "quem": "leo",
          "t": "Is it a good story?"
        },
        {
          "quem": "mia",
          "t": "Yes. Simon works all night, but he has no fish. Then a teacher says, try the water again."
        },
        {
          "quem": "leo",
          "t": "Will Simon try again?"
        },
        {
          "quem": "mia",
          "t": "Yes, he will. Listen. In Luke 5:5, Simon says: Master, we worked all night and caught nothing; but at your word I will let down the net."
        },
        {
          "quem": "leo",
          "t": "I like that. He is tired, but he will try again."
        },
        {
          "quem": "mia",
          "t": "And then the net is very full. His friends will come and help him."
        },
        {
          "quem": "leo",
          "t": "Wow. I will read it tonight. Will you read it with me?"
        },
        {
          "quem": "mia",
          "t": "Yes, I will."
        }
      ],
      "perguntas": [
        {
          "q": "What will Simon do?",
          "op": [
            "He will let down the net",
            "He will go home",
            "He will sleep"
          ],
          "a": 0,
          "por": "At your word I will let down the net."
        },
        {
          "q": "Who will help Simon?",
          "op": [
            "His friends",
            "His brother Leo",
            "Nobody"
          ],
          "a": 0,
          "por": "His friends will come and help him."
        },
        {
          "q": "When will Leo read the story?",
          "op": [
            "Tonight",
            "Tomorrow morning",
            "Next year"
          ],
          "a": 0,
          "por": "I will read it tonight."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the story. The second one is Luke 5:10, World English Bible. Hear it, then say it.",
      "frases": [
        {
          "t": "I will help you with the net.",
          "img": "https://wolf-labs.pages.dev/p/29e0d6d267c3/the-net/img/live-barcos.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Don’t be afraid. From now on you will be catching people alive.",
          "img": "https://wolf-labs.pages.dev/p/29e0d6d267c3/the-net/img/live-barcos.webp",
          "au": "audio/say2.mp3",
          "ref": "Luke 5:10"
        },
        {
          "t": "Will you come with me? Yes, I will.",
          "img": "https://wolf-labs.pages.dev/p/29e0d6d267c3/the-net/img/live-barcos.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "will or won't? Four quick ones.",
      "regra": "<b>will</b> + plain verb · <b>won't</b> = no · <b>Will you ...?</b> = question · no <i>to</i>, no <i>-s</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I will help you with the boat",
          "aceita": [],
          "d": "Dica: <b>will</b> + verbo limpo: help."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I will to go with you.",
          "r": "I will go with you.",
          "aceita": [],
          "d": "Dica: depois de <b>will</b>, o verbo fica limpo, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the question correct.",
          "mostra": "Do you will help me tomorrow?",
          "r": "Will you help me tomorrow?",
          "aceita": [],
          "d": "Dica: a pergunta com <b>will</b> começa com <b>will</b>, sem <b>do</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We don't will wait here.",
          "r": "We won't wait here.",
          "aceita": [
            "We will not wait here."
          ],
          "d": "Dica: o não é <b>won't</b> (will not), nunca 'don't will'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/29e0d6d267c3/the-net/img/live-barcos.webp",
      "leg": "Two boats on the shore at dawn",
      "pede": "Look at the picture: two small boats by the water at dawn. Write 2 or 3 sentences: what will you do there tomorrow? Use <b>will</b> and <b>won't</b>.",
      "ph": "Tomorrow I will … but I won't …",
      "ex": "Tomorrow I will sit by the water and read a book. I will bring some tea. I won't use my phone."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What will you do this weekend?",
          "ph": "This weekend I will …",
          "ex": "This weekend I will visit my mother and cook lunch."
        },
        {
          "q": "What will you do for a friend this week?",
          "ph": "I will … for my friend",
          "ex": "I will help my friend with her homework. I will call her on Friday."
        }
      ]
    }
  }
};
