/* TELL ME ABOUT A TIME · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: STAR com narrative tenses (was -ing, had + 3a forma, past simple). B1: nenhum português. Curso WOLF HIRED, histórias e empresas fictícias. */
window.HW2 = {
  "id": "hired-tell-me-about-a-time",
  "titulo": "Tell Me About a Time",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/5300871e540e/hired-tell-me-about-a-time/img/live-capa.webp",
  "alvo": "telling a work story in STAR order (situation, task, action, result) with narrative tenses: past continuous for the background (I was working), past perfect for what happened before (we had sent), past simple for your actions; never I was work, never had send, never have created in a finished story",
  "abrir": "Think of a day at work or school when something went wrong. What was it?",
  "fecho": "A story has four steps: <b>situation</b>, <b>task</b>, <b>action</b>, <b>result</b>. <b>Was + -ing</b> for the background (<i>I was working</i>). <b>Had + third form</b> for what happened before (<i>we had sent the wrong order</i>). <b>Past simple</b> for what YOU did (<i>I called, I found</i>). End with the result: <i>As a result, …</i>",
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
      "sub": "Mia tells Leo a work story. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/5300871e540e/hired-tell-me-about-a-time/img/live-capa.webp",
      "leg": "A notebook and a coffee, end of the day",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, tell me about a time when you solved a problem quickly."
        },
        {
          "quem": "mia",
          "t": "Last year, I was working as a team leader in an online shop. One Monday, a customer wrote that we had sent the wrong jackets to her whole store."
        },
        {
          "quem": "leo",
          "t": "That sounds difficult. What did you have to do?"
        },
        {
          "quem": "mia",
          "t": "I had to fix it before Friday, because she was opening her store on Saturday."
        },
        {
          "quem": "leo",
          "t": "And what did you do?"
        },
        {
          "quem": "mia",
          "t": "First, I apologized. Then I called the warehouse, found the right jackets, and asked my manager to approve express delivery."
        },
        {
          "quem": "leo",
          "t": "What was the result?"
        },
        {
          "quem": "mia",
          "t": "The jackets arrived on Thursday. She stayed with us, and we created a checking list for every order."
        },
        {
          "quem": "leo",
          "t": "Good story. One tip: say I, not we, for your actions."
        },
        {
          "quem": "mia",
          "t": "Right. I called, I found, I asked. And the result at the end."
        }
      ],
      "perguntas": [
        {
          "q": "What had the shop done wrong?",
          "op": [
            "It had sent the wrong jackets",
            "It had lost her order",
            "It had sent the jackets late"
          ],
          "a": 0,
          "por": "A customer wrote that we had sent the wrong jackets."
        },
        {
          "q": "Why did Mia have to fix it before Friday?",
          "op": [
            "The customer was opening her store on Saturday",
            "Her manager was leaving",
            "The warehouse was closing"
          ],
          "a": 0,
          "por": "I had to fix it before Friday, because she was opening her store on Saturday."
        },
        {
          "q": "What is Leo's tip?",
          "op": [
            "Say I, not we, for your actions",
            "Tell a shorter story",
            "Skip the result"
          ],
          "a": 0,
          "por": "One tip: say I, not we, for your actions."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the story. Hear it, then say it.",
      "frases": [
        {
          "t": "Last year, I was working as a team leader.",
          "img": "https://wolf-labs.pages.dev/p/5300871e540e/hired-tell-me-about-a-time/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We had sent the wrong jackets to her store.",
          "img": "https://wolf-labs.pages.dev/p/5300871e540e/hired-tell-me-about-a-time/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "As a result, she stayed with us.",
          "img": "https://wolf-labs.pages.dev/p/5300871e540e/hired-tell-me-about-a-time/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Background, before, action. Four quick ones.",
      "regra": "<b>was + -ing</b> = the background · <b>had + third form</b> = before · <b>past simple</b> = what you did · <b>As a result</b> = the end.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I was working as a team leader in an online shop.",
          "aceita": [],
          "d": "Hint: the background of the story: <b>was working</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We had send the wrong order.",
          "r": "We had sent the wrong order.",
          "aceita": [],
          "d": "Hint: <b>had</b> + the third form: <b>sent</b>, not <i>send</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I had to solved the problem before Friday.",
          "r": "I had to solve the problem before Friday.",
          "aceita": [],
          "d": "Hint: after <b>had to</b>, the plain verb: <b>solve</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the story is finished. One part is wrong.",
          "mostra": "As a result, we have created a new checklist.",
          "r": "As a result, we created a new checklist.",
          "aceita": [],
          "d": "Hint: a finished story uses the past simple: <b>created</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/5300871e540e/hired-tell-me-about-a-time/img/live-capa.webp",
      "leg": "A notebook and a coffee on a dark desk",
      "pede": "Look at the picture: a notebook and a coffee, the end of a hard day. Write 2 or 3 sentences about a real problem at work or school: the situation, what you did, the result.",
      "ph": "Last year, I was … One day, …",
      "ex": "Last year, I was working in a small shop. One day, the card machine stopped working, so I wrote the prices by hand. As a result, we sold everything."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Tell me about a time you helped someone.",
          "ph": "Last year, I helped … I …",
          "ex": "Last year, I helped a colleague with her first report. I explained every step."
        },
        {
          "q": "What was a difficult day for you? What did you have to do?",
          "ph": "One day, … I had to …",
          "ex": "One day, my bus broke down, so I had to walk to work."
        }
      ]
    }
  }
};
