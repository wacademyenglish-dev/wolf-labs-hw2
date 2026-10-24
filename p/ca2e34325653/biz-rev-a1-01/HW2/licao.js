/* WHO'S WHO? · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: revisão U1: I'm, he/she is/has, be x have, questions with be. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "biz-rev-a1-01",
  "titulo": "Who's Who?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ca2e34325653/biz-rev-a1-01/img/live-capa.webp",
  "alvo": "Unit 1 review: I'm + name + job, he / she + is / has, be (age) x have (things), possessives (her manager), questions with be (Are you new? Where are you from?)",
  "abrir": "What's your job, and where are you from?",
  "fecho": "<b>Age</b> uses be: <i>I'm 30</i>, not <i>I have 30</i>. With he / she: <b>is</b> and <b>has</b>: <i>She has a badge.</i> A question with be starts with the verb: <b>Are you new?</b> <b>Her</b> manager = the manager of a woman.",
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
      "sub": "Mia and Leo meet a new colleague. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/ca2e34325653/biz-rev-a1-01/img/live-conversa.webp",
      "leg": "The break room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, we have a new colleague today. Her name is Priya."
        },
        {
          "quem": "leo",
          "t": "Is she from Brazil?"
        },
        {
          "quem": "mia",
          "t": "No, she isn't. She's from India. She's an engineer in IT."
        },
        {
          "quem": "leo",
          "t": "Nice! How old is she?"
        },
        {
          "quem": "mia",
          "t": "She's twenty-eight. She has a small desk near the window."
        },
        {
          "quem": "leo",
          "t": "Does she have a badge?"
        },
        {
          "quem": "mia",
          "t": "Yes, she has a blue badge. Her manager is Mr. Okafor."
        },
        {
          "quem": "leo",
          "t": "Great. Let's say hello."
        },
        {
          "quem": "mia",
          "t": "Hi, Priya! I'm Mia. This is Leo."
        },
        {
          "quem": "leo",
          "t": "Hello, Priya! Are you ready for your first day?"
        }
      ],
      "perguntas": [
        {
          "q": "Where is Priya from?",
          "op": [
            "India",
            "Brazil",
            "Germany"
          ],
          "a": 0,
          "por": "She's from India."
        },
        {
          "q": "What is her job?",
          "op": [
            "She is an engineer",
            "She is a manager",
            "She is an accountant"
          ],
          "a": 0,
          "por": "She's an engineer in IT."
        },
        {
          "q": "What does Priya have?",
          "op": [
            "A small desk near the window",
            "A big office",
            "Two screens"
          ],
          "a": 0,
          "por": "She has a small desk near the window."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a new colleague. Hear it, then say it.",
      "frases": [
        {
          "t": "Priya is an engineer in IT.",
          "img": "https://wolf-labs.pages.dev/p/ca2e34325653/biz-rev-a1-01/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She has a blue badge.",
          "img": "https://wolf-labs.pages.dev/p/ca2e34325653/biz-rev-a1-01/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Are you ready for your first day?",
          "img": "https://wolf-labs.pages.dev/p/ca2e34325653/biz-rev-a1-01/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Be, have and questions. Four quick ones.",
      "regra": "<b>I'm</b> + age · <b>he / she</b> + <b>is / has</b> · questions with be: the verb comes <b>first</b> (Are you new?).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Her manager is in the IT team.",
          "aceita": [],
          "d": "Dica: <b>her</b> = dela (a gerente é de uma mulher)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I have 30 years.",
          "r": "I am 30 years old.",
          "aceita": [
            "I'm 30 years old.",
            "I am thirty years old.",
            "I'm thirty years old.",
            "I am 30."
          ],
          "d": "Dica: idade é com <b>be</b>: I am 30 years old."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She have a blue badge.",
          "r": "She has a blue badge.",
          "aceita": [],
          "d": "Dica: com she, o verbo have vira <b>has</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make it a question.",
          "mostra": "You are new here?",
          "r": "Are you new here?",
          "aceita": [
            "Are you new?"
          ],
          "d": "Dica: pergunta com be: o verbo vem primeiro, <b>Are you</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/ca2e34325653/biz-rev-a1-01/img/live-capa.webp",
      "leg": "A badge on the desk",
      "pede": "Look at the picture: a badge on a desk. Write your badge: name, job, team. Add where you are from and one good word about you.",
      "ph": "Hi, team! I'm …",
      "ex": "Hi, team! I'm Rafa. I'm a designer, and I'm in Marketing. I'm from Recife. I'm friendly."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What's your job? Where do you work?",
          "ph": "I'm … I work in …",
          "ex": "I'm a teacher. I work in a school in Recife."
        },
        {
          "q": "Who is your manager? Is he or she nice?",
          "ph": "My manager is … He / She is …",
          "ex": "My manager is Ms. Silva. She is very nice."
        }
      ]
    }
  }
};
