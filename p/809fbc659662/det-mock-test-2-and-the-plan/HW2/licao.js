/* DUOLINGO ENGLISH TEST PREP · MOCK TEST 2 AND THE PLAN · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (kit/hw2). JSON puro depois do "=".
   Alvo: making a test-day plan: if + present, will + verb (If I feel nervous, I will ...); going to for plans; before + -ing (before starting). B1: nenhum português na lição. */
window.HW2 = {
  "id": "det-mock-test-2-and-the-plan",
  "titulo": "Mock Test 2 and the Plan",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-conversa.webp",
  "alvo": "making a test-day plan: if + present, will + verb (If I feel nervous, I will ...); going to for plans; before + -ing (before starting)",
  "abrir": "Think of something important you will do soon. What is your plan for the day before?",
  "fecho": "A plan is a list of <b>if</b> and <b>will</b>. After <b>if</b>, use the present: <i>If I feel nervous, I will take a deep breath</i>, not <i>if I will feel</i>. For a plan you have already made, use <b>going to</b>: <i>I'm going to check my ID</i>. After <b>before</b>, use <b>-ing</b>: <i>before starting</i>. And always read the official rules before you book.",
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
  "rate": "-8%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo plan the days before the real test. A new scene, about one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "The night before",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I finished Mock Test 2. I want to book the real test, but I'm nervous."
        },
        {
          "quem": "mia",
          "t": "Let's make a plan. First, the week before. What are you going to do?"
        },
        {
          "quem": "leo",
          "t": "I'm going to do one practice a day, and I will start with my weakest part."
        },
        {
          "quem": "mia",
          "t": "Good. And the day before?"
        },
        {
          "quem": "leo",
          "t": "I will check my ID, the camera, the microphone and the internet."
        },
        {
          "quem": "mia",
          "t": "Smart. And the room? If your brother is at home, you will have noise."
        },
        {
          "quem": "leo",
          "t": "Then I will tell him the time, and I will close my door."
        },
        {
          "quem": "mia",
          "t": "On the day, bring water, and put your phone in another room."
        },
        {
          "quem": "leo",
          "t": "And during the test, if I don't know a word, I will keep going."
        },
        {
          "quem": "mia",
          "t": "Yes. Use all the time, and never stop speaking early."
        },
        {
          "quem": "leo",
          "t": "Okay. Before I book, I will read the official rules on the website."
        },
        {
          "quem": "mia",
          "t": "Perfect. That's the plan."
        }
      ],
      "perguntas": [
        {
          "q": "What will Leo check the day before?",
          "op": [
            "His ID, camera, microphone and internet",
            "His phone and his water",
            "The weather"
          ],
          "a": 0,
          "por": "I will check my ID, the camera, the microphone and the internet."
        },
        {
          "q": "What will Leo do if his brother is at home?",
          "op": [
            "Tell him the time and close his door",
            "Study in the kitchen",
            "Move the test to another day"
          ],
          "a": 0,
          "por": "Then I will tell him the time, and I will close my door."
        },
        {
          "q": "What will Leo read before he books?",
          "op": [
            "The official rules on the website",
            "A story about the test",
            "Mia's notes"
          ],
          "a": 0,
          "por": "Before I book, I will read the official rules on the website."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the plan. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm going to do one practice a day.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If I don't know a word, I will keep going.",
          "img": "../img/live-foto-chuva.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Before I book, I will read the official rules.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "If, will, going to. Four quick ones.",
      "regra": "<b>If</b> + present, <b>will</b> + verb · <b>going to</b> + verb · <b>before</b> + -ing.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If I study every day, I will feel ready.",
          "aceita": [],
          "d": "Hint: after <b>if</b>, the present: <b>study</b>. Then <b>will</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: after if, use the present.",
          "mostra": "If I will feel nervous, I will drink water.",
          "r": "If I feel nervous, I will drink water.",
          "aceita": [],
          "d": "Hint: <b>if I feel</b>, not <i>if I will feel</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: after before, use -ing.",
          "mostra": "Before to start, I will check the camera.",
          "r": "Before starting, I will check the camera.",
          "aceita": [
            "Before I start, I will check the camera."
          ],
          "d": "Hint: <b>before starting</b>, or <b>before I start</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: will is followed by a short verb.",
          "mostra": "I will to book the test next week.",
          "r": "I will book the test next week.",
          "aceita": [
            "I am going to book the test next week."
          ],
          "d": "Hint: <b>will</b> + a short verb, with no <i>to</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-foto-chuva.webp",
      "leg": "The night before a big day",
      "pede": "Look at the picture: a quiet night before a big day. Write your own plan for a test, an interview or a trip. Use <b>if</b> + present, <b>will</b> and <b>going to</b>.",
      "ph": "The day before, I'm going to …",
      "ex": "The day before, I'm going to check my documents. If I feel nervous, I will take a deep breath. Before leaving, I will drink some water."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you going to do the day before something important?",
          "ph": "The day before, I'm going to …",
          "ex": "The day before, I'm going to prepare my clothes and go to bed early."
        },
        {
          "q": "If you feel nervous, what will you do?",
          "ph": "If I feel nervous, I will …",
          "ex": "If I feel nervous, I will breathe slowly and drink some water."
        }
      ]
    }
  }
};
