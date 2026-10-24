/* I NEED MORE MONEY · LIÇÃO DE CASA 2.0 (lote 25, 23/10/2026)
   Motor: hw2.js. JSON puro depois do "=". Alvo: need + a thing (I need money, never need of) · need to + verb (I need to buy) · Do you need ...? Yes, I do. · he/she needs */
window.HW2 = {
  "id": "i-need-more-money",
  "titulo": "I Need More Money",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f9454f86bd36/i-need-more-money/img/live-capa.jpg",
  "alvo": "need + a thing (I need money, never need of) · need to + verb (I need to buy) · Do you need ...? Yes, I do. · he/she needs",
  "abrir": "What do you need this week?",
  "fecho": "<b>need</b> + a thing, no <i>of</i>. <b>need to</b> + a verb. <b>Do you need…? Yes, I do.</b> With he or she: <b>needs</b>.",
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
      "sub": "Mia and Leo talk about money and jobs. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/f9454f86bd36/i-need-more-money/img/live-capa.jpg",
      "leg": "A chef's hat in a kitchen",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I need more money this month."
        },
        {
          "quem": "mia",
          "t": "Why? What do you need to buy?"
        },
        {
          "quem": "leo",
          "t": "I need to buy new shoes. And I need a new phone."
        },
        {
          "quem": "mia",
          "t": "Do you need the phone right now?"
        },
        {
          "quem": "leo",
          "t": "No, I don't. The old one works. But the shoes are very old."
        },
        {
          "quem": "mia",
          "t": "Then you need to wait for the phone. Do you need a job?"
        },
        {
          "quem": "leo",
          "t": "I have a job, but I need an extra job on weekends."
        },
        {
          "quem": "mia",
          "t": "My cousin is a chef. He needs a helper at the restaurant!"
        },
        {
          "quem": "leo",
          "t": "Great! I need to talk to him. Does he need someone this week?"
        },
        {
          "quem": "mia",
          "t": "Yes, he does. Call him today."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo need right now?",
          "op": [
            "New shoes",
            "A new phone",
            "A car"
          ],
          "a": 0,
          "por": "I need to buy new shoes."
        },
        {
          "q": "Does Mia's cousin need a helper this week?",
          "op": [
            "Yes, he does",
            "No, he doesn't",
            "Only on Sunday"
          ],
          "a": 0,
          "por": "Does he need someone this week? Yes, he does."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the story. Hear it, then say it.",
      "frases": [
        {
          "t": "I need to buy new shoes.",
          "img": "https://wolf-labs.pages.dev/p/f9454f86bd36/i-need-more-money/img/live-capa.jpg",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Do you need the phone right now?",
          "img": "https://wolf-labs.pages.dev/p/f9454f86bd36/i-need-more-money/img/live-capa.jpg",
          "au": "audio/say2.mp3"
        },
        {
          "t": "He needs a helper at the restaurant.",
          "img": "https://wolf-labs.pages.dev/p/f9454f86bd36/i-need-more-money/img/live-capa.jpg",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Four quick ones.",
      "regra": "<b>need</b> + thing · <b>need to</b> + verb · <b>Do you need…?</b> · <b>he needs</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I need to buy new shoes this week.",
          "aceita": [],
          "d": "Dica: <b>need to</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I need of more money.",
          "r": "I need more money.",
          "aceita": [],
          "d": "Dica: em inglês não tem <b>of</b> depois de need."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I need buy a coat.",
          "r": "I need to buy a coat.",
          "aceita": [],
          "d": "Dica: antes de verbo, <b>need to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make it a question.",
          "mostra": "You need a coat?",
          "r": "Do you need a coat?",
          "aceita": [],
          "d": "Dica: pergunta começa com <b>Do</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f9454f86bd36/i-need-more-money/img/live-capa.jpg",
      "leg": "A chef's hat in a kitchen",
      "pede": "Look at the picture: a chef's hat in a kitchen. Write 2 or 3 sentences about what you need this week. Use <b>need</b> or <b>need to</b>.",
      "ph": "This week I need …",
      "ex": "This week I need to buy food. I need more time. I don't need a new phone."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you need for your job or your studies?",
          "ph": "I need …",
          "ex": "I need a computer and a lot of coffee."
        },
        {
          "q": "What do you need to buy this week?",
          "ph": "I need to buy …",
          "ex": "I need to buy bread and milk."
        }
      ]
    }
  }
};
