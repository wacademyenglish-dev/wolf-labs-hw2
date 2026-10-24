/* TWENTY-SIX THOUSAND · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: wish / if only (now, then, would). B2: no Portuguese. Only live-* images (all dark). */
window.HW2 = {
  "id": "twenty-six-thousand",
  "titulo": "Twenty-Six Thousand",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/40df3c81d11c/twenty-six-thousand/img/live-ceu.webp",
  "alvo": "wish / if only: wish + past simple for now (I wish I spoke French), wish + had + past participle for before (I wish I had learned it), wish + someone else + would for a habit that annoys you; never I wish I have / I went about the past",
  "abrir": "What is one thing you wish were different right now?",
  "fecho": "A wish steps the verb back. <b>Now</b>: one step (<i>I wish I spoke French</i>). <b>Then</b>: two steps (<i>I wish I had taken the job</i>). <b>Someone else's habit</b>: <b>would</b> (<i>I wish he would turn it down</i>). Never <i>I wish I have</i>, never <i>I wish I went</i> about the past. <b>If only</b> works the same way.",
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
      "sub": "Mia and Leo talk about regrets. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/40df3c81d11c/twenty-six-thousand/img/live-ceu.webp",
      "leg": "A night sky and one tree",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you look thoughtful. What's on your mind?"
        },
        {
          "quem": "mia",
          "t": "A survey I read. Most people said their biggest regrets were things they never did."
        },
        {
          "quem": "leo",
          "t": "Like what?"
        },
        {
          "quem": "mia",
          "t": "My cousin lives in Madrid. He says he wishes he had learned Spanish before he moved."
        },
        {
          "quem": "leo",
          "t": "I know that feeling. I wish I spoke French. My new client is in Lyon, and I can't follow a single meeting."
        },
        {
          "quem": "mia",
          "t": "And your neighbor? You said the music was loud."
        },
        {
          "quem": "leo",
          "t": "Every night! I wish he would turn it down. And I wish I had said something in January."
        },
        {
          "quem": "mia",
          "t": "If only we could rewind a year."
        },
        {
          "quem": "leo",
          "t": "We can't. But I can book a French class tonight."
        },
        {
          "quem": "mia",
          "t": "Good. Then next year you won't wish you had started."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia's cousin wish?",
          "op": [
            "He had learned Spanish before moving",
            "He lived in Lyon",
            "He would move home"
          ],
          "a": 0,
          "por": "He says he wishes he had learned Spanish before he moved."
        },
        {
          "q": "Why does Leo wish he spoke French?",
          "op": [
            "He can't follow his client's meetings",
            "His neighbor speaks it",
            "He wants to move to Madrid"
          ],
          "a": 0,
          "por": "My new client is in Lyon, and I can't follow a single meeting."
        },
        {
          "q": "What does Leo wish about his neighbor?",
          "op": [
            "That he would turn the music down",
            "That he had moved away",
            "That he spoke French"
          ],
          "a": 0,
          "por": "I wish he would turn it down."
        }
      ]
    },
    "out": {
      "sub": "Three wishes. Hear it, then say it.",
      "frases": [
        {
          "t": "I wish I had learned Spanish before I moved.",
          "img": "https://wolf-labs.pages.dev/p/40df3c81d11c/twenty-six-thousand/img/live-ceu.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If only I lived closer to my family.",
          "img": "https://wolf-labs.pages.dev/p/40df3c81d11c/twenty-six-thousand/img/live-bilhetes.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I wish my neighbor would turn the music down.",
          "img": "https://wolf-labs.pages.dev/p/40df3c81d11c/twenty-six-thousand/img/live-arena.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Now, then or someone else? Four quick ones.",
      "regra": "<b>now</b>: wish + past simple · <b>then</b>: wish + <b>had</b> + past participle · <b>someone else</b>: wish + <b>would</b> · never <i>I wish I have</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I wish I had taken the job in Lisbon.",
          "aceita": [],
          "d": "Hint: a regret about the past is <b>had</b> + past participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I wish I have more free time.",
          "r": "I wish I had more free time.",
          "aceita": [],
          "d": "Hint: a wish about now steps one tense back: <b>have</b> becomes <b>had</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I wish I went to the concert last year.",
          "r": "I wish I had gone to the concert last year.",
          "aceita": [
            "I wish I had gone to the concert."
          ],
          "d": "Hint: <b>last year</b> is the past, so the wish needs <b>had gone</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I wish my neighbor will turn it down.",
          "r": "I wish my neighbor would turn it down.",
          "aceita": [
            "I wish my neighbour would turn it down."
          ],
          "d": "Hint: someone else's habit that annoys you: <b>would</b>, never <i>will</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/40df3c81d11c/twenty-six-thousand/img/live-bilhetes.webp",
      "leg": "Paper notes on a dark table",
      "pede": "Look at the picture: paper notes scattered on a dark table. Write 2 or 3 wishes of your own. Use <b>I wish + past</b>, <b>I wish + had + participle</b> or <b>I wish + someone + would</b>.",
      "ph": "I wish I …",
      "ex": "I wish I spoke better English. I wish I had started learning earlier. I wish my brother would call me more often."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you wish you had done differently last year?",
          "ph": "I wish I had …",
          "ex": "I wish I had saved more money last year."
        },
        {
          "q": "What do you wish someone in your life would change?",
          "ph": "I wish my … would …",
          "ex": "I wish my roommate would wash the dishes."
        }
      ]
    }
  }
};
