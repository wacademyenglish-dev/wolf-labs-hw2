/* AND YOU? · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: And you? / eco (Do you? Are you?). A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "and-you",
  "titulo": "And You?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/9b95ace5cc68/and-you/img/live-pingpong.webp",
  "alvo": "sending the question back: And you? / What about you?; the echo that copies the verb (I live near here. Do you? / I'm a designer. Are you?)",
  "abrir": "Where are you from? And you?",
  "fecho": "Answer, then send the ball back: <b>And you?</b> or <b>What about you?</b> The echo copies the verb: <i>I like tea. Do you?</i> <i>I'm tired. Are you?</i> <i>I've got two cats. Have you?</i>",
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
      "sub": "Mia and Leo at a bus stop. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/9b95ace5cc68/and-you/img/live-fila.webp",
      "leg": "A bus stop on a rainy evening",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Hi! Are you waiting for the bus too?"
        },
        {
          "quem": "mia",
          "t": "Yes, I am. Are you?"
        },
        {
          "quem": "leo",
          "t": "Yes. I live near here. Do you?"
        },
        {
          "quem": "mia",
          "t": "No, I live in the city center. I'm from Recife. And you?"
        },
        {
          "quem": "leo",
          "t": "I'm from Sydney. What do you do?"
        },
        {
          "quem": "mia",
          "t": "I'm a designer. What about you?"
        },
        {
          "quem": "leo",
          "t": "I'm a cook. I work at night."
        },
        {
          "quem": "mia",
          "t": "Do you like it?"
        },
        {
          "quem": "leo",
          "t": "Yes, I do! Do you like your job?"
        },
        {
          "quem": "mia",
          "t": "Yes, I do. Oh, look, here is the bus!"
        }
      ],
      "perguntas": [
        {
          "q": "Where does Mia live?",
          "op": [
            "In the city center",
            "Near the bus stop",
            "In Sydney"
          ],
          "a": 0,
          "por": "No, I live in the city center."
        },
        {
          "q": "What does Leo do?",
          "op": [
            "He is a cook",
            "He is a designer",
            "He is a driver"
          ],
          "a": 0,
          "por": "I'm a cook. I work at night."
        },
        {
          "q": "Where is Mia from?",
          "op": [
            "Recife",
            "Sydney",
            "Lima"
          ],
          "a": 0,
          "por": "I'm from Recife. And you?"
        }
      ]
    },
    "out": {
      "sub": "Three answers that send the ball back. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm from Recife. And you?",
          "img": "https://wolf-labs.pages.dev/p/9b95ace5cc68/and-you/img/live-fila.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I work at night. Do you?",
          "img": "https://wolf-labs.pages.dev/p/9b95ace5cc68/and-you/img/live-fria.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'm a designer. What about you?",
          "img": "https://wolf-labs.pages.dev/p/9b95ace5cc68/and-you/img/live-pingpong.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Send the ball back. Four quick ones.",
      "regra": "<b>And you?</b> / <b>What about you?</b> · the echo: <b>Do you?</b> · <b>Are you?</b> · <b>Have you?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I live near here, and you?",
          "aceita": [],
          "d": "Dica: responda e mande a bola de volta com <b>and you?</b>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I like pizza. Like you?",
          "r": "I like pizza. Do you?",
          "aceita": [
            "I like pizza. And you?",
            "I like pizza. What about you?"
          ],
          "d": "Dica: o eco usa <b>Do</b> + you, não o verbo solto."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm a teacher. Do you?",
          "r": "I'm a teacher. Are you?",
          "aceita": [
            "I'm a teacher. And you?",
            "I'm a teacher. What about you?"
          ],
          "d": "Dica: <b>I'm</b> volta como <b>Are you?</b>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I'm from Lima. And?",
          "r": "I'm from Lima. And you?",
          "aceita": [
            "I'm from Lima. What about you?"
          ],
          "d": "Dica: falta a palavra <b>you</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/9b95ace5cc68/and-you/img/live-pingpong.webp",
      "leg": "A ping-pong table, two rackets and a ball",
      "pede": "Look at the picture: a ping-pong table. Write a small talk with a stranger, 2 or 3 lines. Answer, then send the ball back with <b>And you?</b>, <b>Do you?</b> or <b>Are you?</b>",
      "ph": "I'm from … And you?",
      "ex": "I'm from Curitiba. And you? I like coffee. Do you?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where are you from? Answer and send the ball back.",
          "ph": "I'm from … And you?",
          "ex": "I'm from Salvador. And you?"
        },
        {
          "q": "Do you like coffee? Answer, then ask back.",
          "ph": "Yes, I do. Do you?",
          "ex": "Yes, I do. I drink it every morning. Do you?"
        }
      ]
    }
  }
};
