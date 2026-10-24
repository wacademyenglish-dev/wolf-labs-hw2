/* THE NOUN DOES THE WORK · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: make / do / take / have + noun. B2: nenhum portugues. Imagens live-* (gavetas, mesa, pia). */
window.HW2 = {
  "id": "the-noun-does-the-work",
  "titulo": "The Noun Does the Work",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b72bffdcdda4/the-noun-does-the-work/img/live-gavetas.webp",
  "alvo": "make / do / take / have + noun: the noun picks the verb (make a mistake, a decision, a call; do the dishes, a favor, the shopping; take a photo, a break, notes; have a good time, lunch, a meeting)",
  "abrir": "Think of yesterday. What did you do, and what did you make?",
  "fecho": "The noun picks the verb. <b>make</b> = you produce it: <i>a mistake, a decision, a call, dinner</i>. <b>do</b> = a task: <i>the dishes, a favor, the shopping, homework</i>. <b>take</b>: <i>a photo, a break, notes, a risk</i>. <b>have</b>: <i>lunch, a meeting, a good time</i>. Never <i>do a mistake</i>, <i>make a favor</i>, <i>make a photo</i>.",
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
      "sub": "Mia and Leo at the end of a long day. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/b72bffdcdda4/the-noun-does-the-work/img/live-mesa.webp",
      "leg": "A desk at the end of the day",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you look tired. Did you have a long day?"
        },
        {
          "quem": "leo",
          "t": "Very. I had a meeting at eight, and then I made three calls before lunch."
        },
        {
          "quem": "mia",
          "t": "Did you take a break at all?"
        },
        {
          "quem": "leo",
          "t": "Only ten minutes. I took a quick look at the budget, and I made a mistake in the totals."
        },
        {
          "quem": "mia",
          "t": "That happens. I did the shopping on my way here, and I made dinner for six."
        },
        {
          "quem": "leo",
          "t": "Six? Did you do all of it alone?"
        },
        {
          "quem": "mia",
          "t": "No. Rita did the dishes, and Paulo took a few photos. We had a really good time."
        },
        {
          "quem": "leo",
          "t": "I need a day like that. Tomorrow I have to make a big decision about the new office."
        },
        {
          "quem": "mia",
          "t": "Then do yourself a favor and have a proper lunch first."
        },
        {
          "quem": "leo",
          "t": "Good idea. I'll take a walk and make a plan."
        }
      ],
      "perguntas": [
        {
          "q": "What mistake did Leo make?",
          "op": [
            "A mistake in the totals",
            "A mistake in the shopping",
            "A mistake in the dinner"
          ],
          "a": 0,
          "por": "I took a quick look at the budget, and I made a mistake in the totals."
        },
        {
          "q": "Who did the dishes?",
          "op": [
            "Rita",
            "Paulo",
            "Mia"
          ],
          "a": 0,
          "por": "Rita did the dishes, and Paulo took a few photos."
        },
        {
          "q": "What does Mia tell Leo to do before the decision?",
          "op": [
            "Have a proper lunch",
            "Make another call",
            "Take photos of the budget"
          ],
          "a": 0,
          "por": "Do yourself a favor and have a proper lunch first."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a busy day. Hear it, then say it.",
      "frases": [
        {
          "t": "I made a mistake in the report, so I took another look.",
          "img": "https://wolf-labs.pages.dev/p/b72bffdcdda4/the-noun-does-the-work/img/live-mesa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We did the shopping, and then we had lunch together.",
          "img": "https://wolf-labs.pages.dev/p/b72bffdcdda4/the-noun-does-the-work/img/live-pia.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Can you do me a favor and take a photo of this table?",
          "img": "https://wolf-labs.pages.dev/p/b72bffdcdda4/the-noun-does-the-work/img/live-gavetas.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "make, do, take, have. Four quick ones.",
      "regra": "<b>make</b> a mistake / a decision · <b>do</b> the dishes / a favor · <b>take</b> a photo / a break · <b>have</b> a good time / lunch.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Rita did the dishes and Paulo took a few photos.",
          "aceita": [],
          "d": "Hint: <b>do</b> the dishes, <b>take</b> photos. The noun picks the verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "I did a mistake in the last report.",
          "r": "I made a mistake in the last report.",
          "aceita": [],
          "d": "Hint: a mistake is something you produce, so <b>make</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "Can you make me a favor?",
          "r": "Can you do me a favor?",
          "aceita": [
            "Could you do me a favor?"
          ],
          "d": "Hint: a favor is a task for someone, so <b>do</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "We made a great time at the lake.",
          "r": "We had a great time at the lake.",
          "aceita": [
            "We had a good time at the lake."
          ],
          "d": "Hint: a good time is something you experience, so <b>have</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b72bffdcdda4/the-noun-does-the-work/img/live-mesa.webp",
      "leg": "A desk: a closed laptop, a notebook, a cup of coffee",
      "pede": "Look at the picture: a desk with a laptop, a notebook and a cup of coffee. Write 2 or 3 sentences about your last working day or study day. Use <b>make, do, take</b> or <b>have</b> with the right noun.",
      "ph": "Yesterday I made …",
      "ex": "Yesterday I had a meeting and made two calls. I took notes, did some homework and had lunch with a friend."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you make or do for somebody this week?",
          "ph": "This week I made … / I did …",
          "ex": "This week I made dinner for my parents and did a favor for a neighbor."
        },
        {
          "q": "When did you last have a really good time? What did you do?",
          "ph": "I had a good time when …",
          "ex": "I had a good time last Saturday. We took a long walk and had lunch by the river."
        }
      ]
    }
  }
};
