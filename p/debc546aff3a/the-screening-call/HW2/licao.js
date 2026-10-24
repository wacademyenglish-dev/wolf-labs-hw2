/* THE SCREENING CALL · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: apresentar-se (I work as, I'm 28, I have ... years of experience, can). A2: dicas em português só nas notas (d). Só imagens live-* escuras (lum < 50). */
window.HW2 = {
  "id": "the-screening-call",
  "titulo": "The Screening Call",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/debc546aff3a/the-screening-call/img/live-capa.webp",
  "alvo": "talking about yourself in a first interview: I work as + job, I'm 28 (age, never I have 28 years), I have three years of experience, can + plain verb (never can to)",
  "abrir": "Imagine a job interview in English. What is the first question?",
  "fecho": "<b>Who you are</b>: <i>I work as a developer. I live in Recife.</i> <b>Age</b>: <i>I'm 28</i>, never <i>I have 28 years</i>. <b>Experience</b>: <i>I have three years of experience.</i> <b>Can</b> + plain verb: <i>I can start in May</i>, never <i>can to</i>.",
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
      "sub": "Mia and Leo before a job call. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/debc546aff3a/the-screening-call/img/live-capa.webp",
      "leg": "A laptop ready for a video call",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, your screening call is at ten. Are you ready?"
        },
        {
          "quem": "mia",
          "t": "A little nervous. The recruiter is Olek. He works at Packhouse."
        },
        {
          "quem": "leo",
          "t": "Easy. He will say: tell me about yourself. What do you say?"
        },
        {
          "quem": "mia",
          "t": "I'm a frontend developer. I'm 28 and I live in Recife."
        },
        {
          "quem": "leo",
          "t": "Good. And your experience?"
        },
        {
          "quem": "mia",
          "t": "I have three years of experience. I use React every day."
        },
        {
          "quem": "leo",
          "t": "He will ask about the time zone. Can you work in his time zone?"
        },
        {
          "quem": "mia",
          "t": "Yes, I can. I can start work at seven in the morning."
        },
        {
          "quem": "leo",
          "t": "And when can you start the new job?"
        },
        {
          "quem": "mia",
          "t": "I can start in two weeks."
        },
        {
          "quem": "leo",
          "t": "Perfect. Short answers. And smile!"
        }
      ],
      "perguntas": [
        {
          "q": "How old is Mia?",
          "op": [
            "She is 28",
            "She is 25",
            "She is 30"
          ],
          "a": 0,
          "por": "I'm 28 and I live in Recife."
        },
        {
          "q": "How much experience does Mia have?",
          "op": [
            "Three years",
            "Three months",
            "Ten years"
          ],
          "a": 0,
          "por": "I have three years of experience."
        },
        {
          "q": "When can Mia start the new job?",
          "op": [
            "In two weeks",
            "Tomorrow",
            "In two months"
          ],
          "a": 0,
          "por": "I can start in two weeks."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for a job call. Hear it, then say it.",
      "frases": [
        {
          "t": "I work as a frontend developer in Recife.",
          "img": "https://wolf-labs.pages.dev/p/debc546aff3a/the-screening-call/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I have three years of experience with React.",
          "img": "https://wolf-labs.pages.dev/p/debc546aff3a/the-screening-call/img/live-b.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I can start in two weeks.",
          "img": "https://wolf-labs.pages.dev/p/debc546aff3a/the-screening-call/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "I work as, I'm 28, I have experience, I can. Four quick ones.",
      "regra": "<b>I work as</b> a job · age: <b>I'm</b> 28 · <b>I have</b> three years <b>of experience</b> · <b>can</b> + plain verb, no <b>to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I have two years of experience with Python.",
          "aceita": [],
          "d": "Dica: <b>I have</b> + tempo + <b>of experience</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I have 28 years old.",
          "r": "I'm 28 years old.",
          "aceita": [
            "I am 28 years old.",
            "I'm 28.",
            "I am 28."
          ],
          "d": "Dica: idade é <b>I'm</b> + número, nunca 'I have'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I can to speak English.",
          "r": "I can speak English.",
          "aceita": [],
          "d": "Dica: depois de <b>can</b>, o verbo fica limpo, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make it correct.",
          "mostra": "I work with Java since three years.",
          "r": "I have three years of experience with Java.",
          "aceita": [
            "I have worked with Java for three years.",
            "I've worked with Java for three years.",
            "I have three years of experience in Java."
          ],
          "d": "Dica: no A2, o jeito fácil é <b>I have</b> + tempo + <b>of experience</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/debc546aff3a/the-screening-call/img/live-b.webp",
      "leg": "A ring light and a plant on a dark desk",
      "pede": "Look at the picture: a desk with a ring light for a video call. Write 2 or 3 sentences to introduce yourself. Use <b>I work as</b>, <b>I have … years of experience</b> and <b>I can</b>.",
      "ph": "Hi! I work as a …",
      "ex": "Hi! I work as a backend developer in Curitiba. I have two years of experience with Python. I can start in one month."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What technologies do you use every day?",
          "ph": "I use … every day.",
          "ex": "I use JavaScript and Git every day."
        },
        {
          "q": "Can you work in a different time zone? When can you start a new job?",
          "ph": "Yes, I can. I can start …",
          "ex": "Yes, I can. I can start in two weeks."
        }
      ]
    }
  }
};
