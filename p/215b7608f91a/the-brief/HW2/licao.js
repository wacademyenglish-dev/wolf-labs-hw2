/* THE BRIEF · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=".
   Alvo: questions with do / does / did: question word + do/does/did . A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-brief",
  "titulo": "The Brief",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/215b7608f91a/the-brief/img/live-caixa.webp",
  "alvo": "questions with do / does / did: question word + do/does/did + subject + plain verb (Where do you work? When did you start? Does Paula decide?); with is / are / was no do (Is he here?)",
  "abrir": "What do you ask a person you meet for the first time?",
  "fecho": "A question needs a helper. <b>Do / does / did</b> goes first, then the subject, then the plain verb: <i>Where <b>do</b> you work? When <b>did</b> you start? <b>Does</b> Paula decide?</i> With <b>is / are / was</b> there is no helper: <i>Is he here? Where is the office?</i>",
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
      "sub": "Mia and Leo before a client meeting. A new scene, about 50 seconds.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, a new client arrives at ten. I have one empty page and no questions."
        },
        {
          "quem": "leo",
          "t": "Start with three. Where do you work? When did you start? Who decides?"
        },
        {
          "quem": "mia",
          "t": "Does Paula decide, or does her boss decide?"
        },
        {
          "quem": "leo",
          "t": "Good question. Ask it that way. Then ask: How much do you want to spend?"
        },
        {
          "quem": "mia",
          "t": "And the deadline?"
        },
        {
          "quem": "leo",
          "t": "Ask: When do you need it? And: Did you send the old design?"
        },
        {
          "quem": "mia",
          "t": "Is the client friendly?"
        },
        {
          "quem": "leo",
          "t": "Yes, he is. Notice: with is, there is no do. Is he friendly? Where is he now?"
        },
        {
          "quem": "mia",
          "t": "I see. Is he here already?"
        },
        {
          "quem": "leo",
          "t": "Not yet. But your page is ready. Three questions, three answers."
        }
      ],
      "perguntas": [
        {
          "q": "How many questions does Leo say to start with?",
          "op": [
            "Three",
            "One",
            "Five"
          ],
          "a": 0,
          "por": "Start with three."
        },
        {
          "q": "Which question is for the deadline?",
          "op": [
            "When do you need it?",
            "Where do you work?",
            "Who decides?"
          ],
          "a": 0,
          "por": "Ask: When do you need it?"
        },
        {
          "q": "Which question has no do?",
          "op": [
            "Is he here already?",
            "Does Paula decide?",
            "Did you send the old design?"
          ],
          "a": 0,
          "por": "With is, there is no do: Is he here already?"
        }
      ],
      "img": "https://wolf-labs.pages.dev/p/215b7608f91a/the-brief/img/live-caixa.webp",
      "leg": "A cold box and a label printer"
    },
    "out": {
      "sub": "Three questions for the client. Hear it, then say it.",
      "frases": [
        {
          "t": "Where do you sell your products?",
          "img": "https://wolf-labs.pages.dev/p/215b7608f91a/the-brief/img/live-caixa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "When did the project start?",
          "img": "https://wolf-labs.pages.dev/p/215b7608f91a/the-brief/img/live-caixa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Does Paula decide the budget?",
          "img": "https://wolf-labs.pages.dev/p/215b7608f91a/the-brief/img/live-caixa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Helper, subject, plain verb. Four quick ones.",
      "regra": "<b>Where / When / What</b> + <b>do / does / did</b> + subject + plain verb · <b>does</b> and <b>did</b> take the plain verb · with <b>is / was</b>, no helper.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "When did you send the old design?",
          "aceita": [],
          "d": "Dica: palavra de pergunta, depois <b>did</b>, depois o sujeito e o verbo limpo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Where you work?",
          "r": "Where do you work?",
          "aceita": [],
          "d": "Dica: falta o auxiliar: <b>Where do you</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "Does Paula decides the budget?",
          "r": "Does Paula decide the budget?",
          "aceita": [],
          "d": "Dica: depois de <b>does</b>, o verbo fica limpo, sem <b>-s</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "Did you sent the design?",
          "r": "Did you send the design?",
          "aceita": [],
          "d": "Dica: depois de <b>did</b>, o verbo fica limpo: <b>send</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Look at the picture: a cold box and a label printer. Write 2 or 3 questions you want to ask a new client. Use <b>Where do</b>, <b>When did</b>, <b>Does</b> or <b>Is</b>.",
      "ph": "Where do you …?",
      "ex": "Where do you sell your food? When did you start the company? Does your boss decide the price?",
      "img": "https://wolf-labs.pages.dev/p/215b7608f91a/the-brief/img/live-caixa.webp",
      "leg": "A cold box and a label printer"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "You meet a new colleague. What do you ask about the job?",
          "ph": "Where do you …?",
          "ex": "Where do you work? When did you start?"
        },
        {
          "q": "Ask me one question about my job. Start with Do, Does or Did.",
          "ph": "Do you …?",
          "ex": "Do you like your job?"
        }
      ]
    }
  }
};
