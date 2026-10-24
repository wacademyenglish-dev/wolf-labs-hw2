/* THE CROSSROADS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js. JSON puro depois do "=". Alvo: zero, first, second and third conditional, unless. B1: nenhum português. */
window.HW2 = {
  "id": "the-crossroads",
  "titulo": "The Crossroads",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/96d057db8563/b1-review-the-crossroads/img/live-capa.webp",
  "alvo": "Unit 5 review: zero conditional (when / if + present); first conditional (if + present, will; unless); second conditional (if I were you, I would); third conditional (if I had known, I would have)",
  "abrir": "What big decision are you thinking about?",
  "fecho": "<b>When / if + present, present</b> = always true. <b>If + present, will</b> = real possibility; <b>unless</b> = if not. <b>If + past, would</b> = imaginary now: <i>If I were you, I'd go.</i> <b>If + had + participle, would have</b> = imaginary past.",
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
      "sub": "Mia has a big decision to make. Leo gives his advice. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/96d057db8563/b1-review-the-crossroads/img/live-capa.webp",
      "leg": "A lonely tree by a dark road",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I have a big decision. A company in Canada offered me a job."
        },
        {
          "quem": "leo",
          "t": "That's great! What will happen if you say yes?"
        },
        {
          "quem": "mia",
          "t": "If I go, I'll earn more money, but I'll be far from my friends."
        },
        {
          "quem": "leo",
          "t": "So, will you go?"
        },
        {
          "quem": "mia",
          "t": "I'll go, unless my family needs me here. That's my rule."
        },
        {
          "quem": "leo",
          "t": "If I were you, I'd say yes. When you live abroad, you learn a lot."
        },
        {
          "quem": "mia",
          "t": "If I had learned French, I would have chosen Montreal."
        },
        {
          "quem": "leo",
          "t": "And if you could take your friends with you, what would you do?"
        },
        {
          "quem": "mia",
          "t": "I would take them all! Then I wouldn't have any problem."
        },
        {
          "quem": "leo",
          "t": "Then ask the company. If you don't ask, you'll never know."
        }
      ],
      "perguntas": [
        {
          "q": "What will happen if Mia goes to Canada?",
          "op": [
            "She will earn more money",
            "She will lose her job",
            "She will learn French at once"
          ],
          "a": 0,
          "por": "If I go, I'll earn more money, but I'll be far from my friends."
        },
        {
          "q": "When will Mia stay?",
          "op": [
            "Unless her family needs her",
            "If it rains",
            "When she learns French"
          ],
          "a": 0,
          "por": "I'll go, unless my family needs me here."
        },
        {
          "q": "What would Leo do in her place?",
          "op": [
            "He would say yes",
            "He would stay at home",
            "He would ask his boss"
          ],
          "a": 0,
          "por": "If I were you, I'd say yes."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with if and unless. Hear it, then say it.",
      "frases": [
        {
          "t": "When water reaches one hundred degrees, it boils.",
          "img": "https://wolf-labs.pages.dev/p/96d057db8563/b1-review-the-crossroads/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I won't go unless you come with me.",
          "img": "https://wolf-labs.pages.dev/p/96d057db8563/b1-review-the-crossroads/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If I had known, I would have called you.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "if, unless, would, would have. Four quick ones.",
      "regra": "<b>if + present, will</b> · <b>unless</b> = if not · <b>if + past, would</b> · <b>if + had + participle, would have</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If I were you, I would take the job.",
          "aceita": [],
          "d": "Hint: advice, imaginary: <b>if I were you</b>, <b>I would</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If it will rain, I'll stay home.",
          "r": "If it rains, I'll stay home.",
          "aceita": [],
          "d": "Hint: after <b>if</b> we use the present, not <i>will</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I will go, unless it doesn't rain.",
          "r": "I will go, unless it rains.",
          "aceita": [],
          "d": "Hint: <b>unless</b> already means <i>if not</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If I would have known, I would have called.",
          "r": "If I had known, I would have called.",
          "aceita": [],
          "d": "Hint: the <b>if</b> part takes <b>had</b> + participle."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/96d057db8563/b1-review-the-crossroads/img/live-capa.webp",
      "leg": "A lonely tree by a dark road",
      "pede": "Look at the picture: a lonely tree by a dark road. Write 2 or 3 sentences about a big decision: what will happen if you say yes, and what you would do if you could do anything. Use <b>if</b>, <b>unless</b> and <b>would</b>.",
      "ph": "If I say yes, I'll …",
      "ex": "If I say yes, I'll earn more money. I'll go, unless it is too expensive. If I could do anything, I would travel around the world."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What will you do this weekend if the weather is good?",
          "ph": "If the weather is good, I'll …",
          "ex": "If the weather is good, I'll go to the beach with my friends."
        },
        {
          "q": "If you could change one thing in your life, what would it be?",
          "ph": "If I could, I would …",
          "ex": "If I could, I would live by the sea."
        }
      ]
    }
  }
};
