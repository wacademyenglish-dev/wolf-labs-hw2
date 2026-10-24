window.HW2_ARTIGO_CONTA = true;
/* FIRST DAY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: am/is/are + a/an + not + pergunta. A1: dicas em português só nas notas (d). a/an contam (HW2_ARTIGO_CONTA). */
window.HW2 = {
  "id": "first-day",
  "titulo": "First Day",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/3d2b1b7bbb4f/first-day/img/live-front-door.webp",
  "alvo": "am / is / are; a / an before a job (a designer, an engineer); not after the verb (I am not); questions: Are you the new designer?",
  "abrir": "What is your job?",
  "fecho": "<b>I am</b>, <b>he is</b>, <b>they are</b>. A job takes <b>a</b> or <b>an</b>: <i>I am a designer. He is an engineer.</i> <b>Not</b> goes after the verb: <i>She is not a lawyer.</i> A question: <b>Are you</b> the new designer?",
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
      "sub": "Mia and Leo in a new office, Monday, 8:55. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/3d2b1b7bbb4f/first-day/img/live-reception.webp",
      "leg": "The reception desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Good morning! Are you the new designer?"
        },
        {
          "quem": "mia",
          "t": "Yes, I am. I am Mia. Are you an engineer?"
        },
        {
          "quem": "leo",
          "t": "Yes, I am. I am Leo. Welcome to the third floor."
        },
        {
          "quem": "mia",
          "t": "Is Marina the receptionist?"
        },
        {
          "quem": "leo",
          "t": "No, she isn't. She is the office manager."
        },
        {
          "quem": "mia",
          "t": "And Rui? Is he a designer too?"
        },
        {
          "quem": "leo",
          "t": "No, he is not. He is a lawyer. Ana is an architect."
        },
        {
          "quem": "mia",
          "t": "Are they friendly?"
        },
        {
          "quem": "leo",
          "t": "Yes, they are. Everybody is friendly here."
        },
        {
          "quem": "mia",
          "t": "Good. I am a little nervous."
        }
      ],
      "perguntas": [
        {
          "q": "What is Leo's job?",
          "op": [
            "An engineer",
            "A designer",
            "A lawyer"
          ],
          "a": 0,
          "por": "I am Leo. Are you an engineer? Yes, I am."
        },
        {
          "q": "What is Marina?",
          "op": [
            "The office manager",
            "The receptionist",
            "An architect"
          ],
          "a": 0,
          "por": "No, she isn't. She is the office manager."
        },
        {
          "q": "What is Rui?",
          "op": [
            "A lawyer",
            "A designer",
            "An architect"
          ],
          "a": 0,
          "por": "No, he is not. He is a lawyer."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the lesson. Hear it, then say it.",
      "frases": [
        {
          "t": "I am a designer, and Leo is an engineer.",
          "img": "https://wolf-labs.pages.dev/p/3d2b1b7bbb4f/first-day/img/live-desk-first-day.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Marina is not the receptionist.",
          "img": "https://wolf-labs.pages.dev/p/3d2b1b7bbb4f/first-day/img/live-reception.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Are they friendly? Yes, they are.",
          "img": "https://wolf-labs.pages.dev/p/3d2b1b7bbb4f/first-day/img/live-corridor.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Am, is, are, a or an. Four quick ones.",
      "regra": "<b>I am</b> · <b>he / she is</b> · <b>you / they are</b> · a job: <b>a</b> / <b>an</b> (an engineer) · <b>not</b> after the verb · a question: <b>Are you</b>…?",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Ana is an architect and Rui is a lawyer.",
          "aceita": [],
          "d": "Dica: <b>an</b> architect (som de vogal) e <b>a</b> lawyer."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Rui is lawyer.",
          "r": "Rui is a lawyer.",
          "aceita": [],
          "d": "Dica: um emprego é uma coisa: falta o <b>a</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is out of place.",
          "mostra": "I not am the manager.",
          "r": "I am not the manager.",
          "aceita": [
            "I'm not the manager."
          ],
          "d": "Dica: <b>not</b> vai depois do verbo: am <b>not</b>."
        },
        {
          "tipo": "escreve",
          "t": "Make it a question.",
          "mostra": "You are the new designer.",
          "r": "Are you the new designer?",
          "aceita": [],
          "d": "Dica: na pergunta, <b>are</b> vai para o começo."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/3d2b1b7bbb4f/first-day/img/live-front-door.webp",
      "leg": "A front door, Monday morning",
      "pede": "Look at the picture: a front door on Monday morning. Write 2 or 3 sentences: introduce yourself and another person. Use <b>am / is / are</b> and <b>a / an</b>.",
      "ph": "I am a … My colleague is …",
      "ex": "I am a nurse. My colleague Bia is an engineer. She is very friendly."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is your job?",
          "ph": "I am a … / I am an …",
          "ex": "I am a teacher."
        },
        {
          "q": "Who is a person you work or study with? What is his or her job?",
          "ph": "He is … / She is …",
          "ex": "She is Bia. She is an engineer."
        }
      ]
    }
  }
};
