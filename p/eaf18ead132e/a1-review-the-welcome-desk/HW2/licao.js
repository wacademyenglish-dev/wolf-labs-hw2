/* A1 REVIEW: THE WELCOME DESK · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: revisão da unidade 1 (be, from / live in, a / an, his / her). A1: dicas em português só nas notas (d). HW2_ARTIGO_CONTA ligado: a / an e his / her contam. Só live-* (já escuras). */
window.HW2_ARTIGO_CONTA = true;
window.HW2 = {
  "id": "a1-review-the-welcome-desk",
  "titulo": "A1 Review: The Welcome Desk",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/eaf18ead132e/a1-review-the-welcome-desk/img/live-capa.webp",
  "alvo": "review of unit 1: my name is / spelling, I'm from / I live in, I'm 34 (age with be), he / she is + a / an + job, his / her, And you?",
  "abrir": "Where are you from? And where do you live?",
  "fecho": "Unit 1 in five lines: <b>My name is</b> … · <b>I'm from</b> … · <b>I live in</b> … · <b>I'm 34</b> (age is <b>be</b>) · <b>She is a nurse</b> (<b>a / an</b> for a job). <b>His</b> = a man, <b>her</b> = a woman. Give the turn back: <b>And you?</b>",
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
      "sub": "Tom arrives at the hotel desk. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/eaf18ead132e/a1-review-the-welcome-desk/img/live-capa.webp",
      "leg": "The hotel desk at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Good evening! What's your name?"
        },
        {
          "quem": "leo",
          "t": "Hello. My name is Tom Baker."
        },
        {
          "quem": "mia",
          "t": "How do you spell it?"
        },
        {
          "quem": "leo",
          "t": "T-O-M. B-A-K-E-R."
        },
        {
          "quem": "mia",
          "t": "Where are you from, Mr Baker?"
        },
        {
          "quem": "leo",
          "t": "I'm from Canada. I live in Toronto. And you?"
        },
        {
          "quem": "mia",
          "t": "I'm from Brazil, but I live here. How old are you?"
        },
        {
          "quem": "leo",
          "t": "I'm 34. I'm a teacher. My wife is a nurse. Her name is Yuki."
        },
        {
          "quem": "mia",
          "t": "Welcome! Your room is number twelve."
        }
      ],
      "perguntas": [
        {
          "q": "Where is Tom from?",
          "op": [
            "Canada",
            "Brazil",
            "Japan"
          ],
          "a": 0,
          "por": "I'm from Canada."
        },
        {
          "q": "How old is Tom?",
          "op": [
            "He is 34",
            "He is 43",
            "He is 24"
          ],
          "a": 0,
          "por": "I'm 34."
        },
        {
          "q": "What is Tom's wife's job?",
          "op": [
            "She is a nurse",
            "She is a teacher",
            "She is a cook"
          ],
          "a": 0,
          "por": "My wife is a nurse. Her name is Yuki."
        }
      ]
    },
    "out": {
      "sub": "Three lines for the welcome desk. Hear it, then say it.",
      "frases": [
        {
          "t": "My name is Tom. I'm 34.",
          "img": "https://wolf-labs.pages.dev/p/eaf18ead132e/a1-review-the-welcome-desk/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She is a nurse. Her name is Yuki.",
          "img": "https://wolf-labs.pages.dev/p/eaf18ead132e/a1-review-the-welcome-desk/img/live-chave.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'm from Canada. And you?",
          "img": "https://wolf-labs.pages.dev/p/eaf18ead132e/a1-review-the-welcome-desk/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Unit 1 in four quick ones.",
      "regra": "<b>I'm 34</b> (age = be) · <b>She is a nurse</b> (a / an) · <b>His</b> = a man, <b>her</b> = a woman · <b>I'm from</b> … · <b>I live in</b> …",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "He is an engineer from Egypt.",
          "aceita": [],
          "d": "Dica: <b>an</b> antes de vogal: an engineer."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I have 34 years.",
          "r": "I am 34.",
          "aceita": [
            "I'm 34.",
            "I am 34 years old.",
            "I'm 34 years old."
          ],
          "d": "Dica: idade é com <b>be</b>: <b>I'm 34</b>. Nunca 'I have 34'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "She is nurse.",
          "r": "She is a nurse.",
          "aceita": [
            "She's a nurse."
          ],
          "d": "Dica: profissão leva <b>a / an</b>: <b>a nurse</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "My sister is Ana. His name is Ana.",
          "r": "My sister is Ana. Her name is Ana.",
          "aceita": [
            "My sister is Ana. Her name is Ana"
          ],
          "d": "Dica: mulher = <b>her</b>. Homem = <b>his</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/eaf18ead132e/a1-review-the-welcome-desk/img/live-capa.webp",
      "leg": "A hotel desk at night",
      "pede": "Look at the picture: a hotel desk at night. You are the guest. Write 3 or 4 short lines: name, from, live in, age, job. Then one line about a friend.",
      "ph": "My name is … I'm from …",
      "ex": "My name is Ana. I'm from Brazil. I live in Recife. I'm 30. I'm a designer. My friend is Lia. She is from Chile."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where are you from? Where do you live?",
          "ph": "I'm from … I live in …",
          "ex": "I'm from Brazil. I live in Recife."
        },
        {
          "q": "Who is your best friend? What is his or her job?",
          "ph": "My best friend is … He / She is a …",
          "ex": "My best friend is Rafa. He is a cook."
        }
      ]
    }
  }
};
