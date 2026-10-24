/* NOTHING YET · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=".
   Alvo: present perfect: have / has + past participle; already and j. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "nothing-yet",
  "titulo": "Nothing Yet",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/12303ec88e39/nothing-yet/img/live-sacos.webp",
  "alvo": "present perfect: have / has + past participle; already and just in the middle, yet at the end (questions and negatives); for + a length of time, since + a starting point",
  "abrir": "What have you already done today?",
  "fecho": "<b>have / has</b> + past participle: <i>I've sent it.</i> <b>already</b> and <b>just</b> go in the middle: <i>I've already sent it. I've just finished.</i> <b>yet</b> goes at the end, in questions and with <i>not</i>: <i>Have you called him yet? I haven't paid yet.</i> <b>for</b> + a length (<i>for two days</i>), <b>since</b> + a starting point (<i>since noon</i>).",
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
      "sub": "Mia and Leo, Friday at four. A new scene, about 50 seconds.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, it's Friday, four o'clock. Have you sent the coffee order yet?"
        },
        {
          "quem": "leo",
          "t": "Yes, I've already sent it."
        },
        {
          "quem": "mia",
          "t": "Have you called the supplier yet?"
        },
        {
          "quem": "leo",
          "t": "Not yet. I haven't called him. I've just finished the invoice."
        },
        {
          "quem": "mia",
          "t": "Have you paid the invoice?"
        },
        {
          "quem": "leo",
          "t": "No, I haven't paid it yet. The bank has been closed since three."
        },
        {
          "quem": "mia",
          "t": "So two things are done, and two are not."
        },
        {
          "quem": "leo",
          "t": "Yes. I've already sent the order, and I've just finished the invoice. I haven't called or paid yet."
        },
        {
          "quem": "mia",
          "t": "OK. Call him now. I've waited for his answer for two days."
        }
      ],
      "perguntas": [
        {
          "q": "What has Leo already sent?",
          "op": [
            "The coffee order",
            "The invoice",
            "The bank form"
          ],
          "a": 0,
          "por": "I've already sent it."
        },
        {
          "q": "What has Leo just finished?",
          "op": [
            "The invoice",
            "The call",
            "The payment"
          ],
          "a": 0,
          "por": "I've just finished the invoice."
        },
        {
          "q": "Why hasn't Leo paid the invoice yet?",
          "op": [
            "The bank has been closed since three",
            "He lost the invoice",
            "The supplier is away"
          ],
          "a": 0,
          "por": "The bank has been closed since three."
        }
      ],
      "img": "https://wolf-labs.pages.dev/p/12303ec88e39/nothing-yet/img/live-sacos.webp",
      "leg": "Coffee bags ready to ship"
    },
    "out": {
      "sub": "Three sentences about the week. Hear it, then say it.",
      "frases": [
        {
          "t": "I've already sent the order.",
          "img": "https://wolf-labs.pages.dev/p/12303ec88e39/nothing-yet/img/live-sacos.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I haven't called the supplier yet.",
          "img": "https://wolf-labs.pages.dev/p/12303ec88e39/nothing-yet/img/live-sacos.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She has worked here for two years.",
          "img": "https://wolf-labs.pages.dev/p/12303ec88e39/nothing-yet/img/live-sacos.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Already, yet, and the verb. Four quick ones.",
      "regra": "<b>have / has</b> + past participle · <b>already / just</b> in the middle · <b>yet</b> at the end · <b>I sent it yesterday</b> (a finished time) uses the past.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Have you sent the order yet?",
          "aceita": [],
          "d": "Dica: <b>yet</b> fica no fim da pergunta."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the time is finished.",
          "mostra": "I have sent it yesterday.",
          "r": "I sent it yesterday.",
          "aceita": [],
          "d": "Dica: <b>yesterday</b> é um tempo terminado: use o passado, <b>sent</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is in the wrong place.",
          "mostra": "We haven't called them already.",
          "r": "We haven't called them yet.",
          "aceita": [],
          "d": "Dica: em frase negativa, use <b>yet</b> no fim, não <b>already</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "He has wrote the report.",
          "r": "He has written the report.",
          "aceita": [],
          "d": "Dica: o particípio de <b>write</b> é <b>written</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Look at the picture: coffee bags ready to ship. Write 2 or 3 sentences about your week: what you have already done, and what you haven't done yet.",
      "ph": "I've already …",
      "ex": "I've already sent my report. I haven't called the client yet. I've just finished lunch.",
      "img": "https://wolf-labs.pages.dev/p/12303ec88e39/nothing-yet/img/live-sacos.webp",
      "leg": "Coffee bags ready to ship"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What have you already done today?",
          "ph": "I've already …",
          "ex": "I've already had coffee and answered my emails."
        },
        {
          "q": "What haven't you done yet this week?",
          "ph": "I haven't … yet.",
          "ex": "I haven't paid the internet bill yet."
        }
      ]
    }
  }
};
