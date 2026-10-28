/* AU PAIR · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=". Falas originais. */
window.HW2 = {
  "id": "aupair-the-family-call",
  "titulo": "The Family Call",
  "nivel": "A2",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "questions with do / does, How old are, will before the subject: What do the kids like? What does she like? How old is Emma? When will I start?; never What the kids like, How many years has, do she, When I will",
  "abrir": "What would you ask a new family?",
  "fecho": "<b>What do</b> the kids like? <b>What does</b> she like? <b>How old</b> are they? <b>When will I</b> start? In a question, <b>do / does / will</b> come before the subject.",
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
      "sub": "Mia and Leo, ten minutes before the video call. A new scene, about 45 seconds.",
      "img": "../img/live-conversa.webp",
      "leg": "A porch light at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the family call is in ten minutes. Do you have your questions?"
        },
        {
          "quem": "mia",
          "t": "Yes. First, how old are the kids?"
        },
        {
          "quem": "leo",
          "t": "Good. What else?"
        },
        {
          "quem": "mia",
          "t": "What do the kids like to do after school?"
        },
        {
          "quem": "leo",
          "t": "That's a great question. What about the schedule?"
        },
        {
          "quem": "mia",
          "t": "What does a typical day look like? And how many hours will I work?"
        },
        {
          "quem": "leo",
          "t": "Perfect. Don't forget to smile."
        },
        {
          "quem": "mia",
          "t": "I'm a little nervous."
        },
        {
          "quem": "leo",
          "t": "That's normal. They want to know you, too."
        },
        {
          "quem": "mia",
          "t": "OK. When will I start? I will ask that at the end."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia ask about the kids first?",
          "op": [
            "How old they are",
            "What they eat",
            "What school they like"
          ],
          "a": 0,
          "por": "First, how old are the kids?"
        },
        {
          "q": "What does Mia ask about the schedule?",
          "op": [
            "What a typical day looks like",
            "Where the kids sleep",
            "How much the car costs"
          ],
          "a": 0,
          "por": "What does a typical day look like?"
        },
        {
          "q": "What does Leo tell her to do?",
          "op": [
            "Smile",
            "Speak very fast",
            "Turn off the camera"
          ],
          "a": 0,
          "por": "Don't forget to smile."
        }
      ]
    },
    "out": {
      "sub": "Three questions for the family. Hear it, then say it.",
      "frases": [
        {
          "t": "How old are the kids?",
          "img": "../img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "What do the kids like to do after school?",
          "img": "../img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "How many hours will I work per week?",
          "img": "../img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Make the question. Four quick ones.",
      "regra": "<b>do / does</b> + subject + verb · <b>How old</b> + be · <b>will</b> comes before the subject: <b>When will I start?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What does a typical day look like?",
          "aceita": [],
          "d": "Dica: <b>What does</b> + sujeito + verbo limpo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: ask about age.",
          "mostra": "How many years has Emma?",
          "r": "How old is Emma?",
          "aceita": [],
          "d": "Dica: para idade, em inglês: <b>How old</b> + is / are."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "What do she like to eat?",
          "r": "What does she like to eat?",
          "aceita": [],
          "d": "Dica: com she, he, it: <b>does</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "When I will start?",
          "r": "When will I start?",
          "aceita": [],
          "d": "Dica: em pergunta, <b>will</b> vem antes do sujeito."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-capa.webp",
      "leg": "A laptop, ready for the video call",
      "pede": "Look at the picture: a laptop, ready for the video call. Write 3 questions you will ask the family. Use <b>What do…</b>, <b>How old…</b> or <b>How many hours will I…</b>",
      "ph": "How old …?",
      "ex": "How old are the children? What do they like to do? How many hours will I work per week?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is the first question you will ask the family? Why?",
          "ph": "I will ask …",
          "ex": "I will ask how old the kids are, because I want to plan activities."
        },
        {
          "q": "The host mom asks: How are you feeling? What do you say?",
          "ph": "I'm …",
          "ex": "I'm excited and a little nervous."
        }
      ]
    }
  }
};
