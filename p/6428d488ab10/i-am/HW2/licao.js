/* I Am · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: verb to be. Bíblia (WEB, conferida em ebible.org): versículos só no Listen e no Out loud, nunca no Focus, nunca marcados errados. A1/A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "i-am",
  "titulo": "I Am",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/6428d488ab10/i-am/img/live-mesa.webp",
  "alvo": "verb to be: I am / you are / he, she is; short answers (Is he a teacher? Yes, he is.); age with am (I am twenty years old), never 'I have twenty years', 'he are', 'yes, she does'",
  "abrir": "Who are you? Say three things about you.",
  "fecho": "<b>I am</b> · <b>you are</b> · <b>he / she is</b>: <i>I am Ana. You are my friend. She is a teacher.</i> Age: <i>I am twenty years old</i> (not <i>I have</i>). A short answer: <i>Is he a teacher? Yes, he is.</i>",
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
      "sub": "Mia tells Leo about the book of John. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/6428d488ab10/i-am/img/live-mesa.webp",
      "leg": "Bread and a lamp on a wooden table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm reading the book of John. Jesus says, I am, again and again."
        },
        {
          "quem": "leo",
          "t": "I am what?"
        },
        {
          "quem": "mia",
          "t": "I am the bread. I am the light. I am the shepherd. Look at John 14:6."
        },
        {
          "quem": "leo",
          "t": "What does it say?"
        },
        {
          "quem": "mia",
          "t": "Jesus says: I am the way, the truth, and the life. No one comes to the Father, except through me."
        },
        {
          "quem": "leo",
          "t": "Who is he talking to?"
        },
        {
          "quem": "mia",
          "t": "His friends. They are at a table with him."
        },
        {
          "quem": "leo",
          "t": "So he is a teacher?"
        },
        {
          "quem": "mia",
          "t": "Yes, he is. And you are a good listener, Leo."
        },
        {
          "quem": "leo",
          "t": "Thank you. I am happy to listen."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia read?",
          "op": [
            "The book of John",
            "A school book",
            "A menu"
          ],
          "a": 0,
          "por": "I'm reading the book of John."
        },
        {
          "q": "Who is Jesus talking to in John 14:6?",
          "op": [
            "His friends",
            "His brother",
            "Nobody"
          ],
          "a": 0,
          "por": "His friends. They are at a table with him."
        },
        {
          "q": "Is Leo a good listener?",
          "op": [
            "Yes, he is",
            "No, he isn't",
            "Yes, he does"
          ],
          "a": 0,
          "por": "You are a good listener, Leo."
        }
      ]
    },
    "out": {
      "sub": "Three sentences. The second one is John 10:11, World English Bible. Hear it, then say it.",
      "frases": [
        {
          "t": "I am at the table. You are next to me.",
          "img": "https://wolf-labs.pages.dev/p/6428d488ab10/i-am/img/live-mesa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I am the good shepherd. The good shepherd lays down his life for the sheep.",
          "img": "https://wolf-labs.pages.dev/p/6428d488ab10/i-am/img/live-ceia.webp",
          "au": "audio/say2.mp3",
          "ref": "John 10:11"
        },
        {
          "t": "Is he a teacher? Yes, he is.",
          "img": "https://wolf-labs.pages.dev/p/6428d488ab10/i-am/img/live-caminho.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "am, is or are? Four quick ones.",
      "regra": "<b>I am</b> · <b>you are</b> · <b>he / she is</b> · <b>Is he ...? Yes, he is.</b> · age: <b>I am</b> twenty, not <i>I have</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Is she your friend from work",
          "aceita": [],
          "d": "Dica: pergunta com o verbo <b>to be</b>: <b>is</b> vem primeiro."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I have twenty years.",
          "r": "I am twenty years old.",
          "aceita": [
            "I am 20 years old."
          ],
          "d": "Dica: idade em inglês é com <b>am</b>, nunca 'I have'. E termina com <b>years old</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He are my brother.",
          "r": "He is my brother.",
          "aceita": [],
          "d": "Dica: com <b>he</b> / <b>she</b>, o verbo é <b>is</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the short answer is wrong.",
          "mostra": "Yes, she does.",
          "r": "Yes, she is.",
          "aceita": [
            "Yes she is."
          ],
          "d": "Dica: a pergunta é com <b>is</b>, então a resposta curta é <b>Yes, she is</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/6428d488ab10/i-am/img/live-mesa.webp",
      "leg": "Bread and a lamp on a wooden table",
      "pede": "Look at the picture: bread and a lamp on a table. Write 2 or 3 sentences about it and about you. Use <b>am</b>, <b>is</b> and <b>are</b>.",
      "ph": "The bread is … I am …",
      "ex": "The bread is on the table. The lamp is small. I am hungry and I am happy."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who are you? Say your name, your age and one thing about you.",
          "ph": "I am … I am … years old. I am …",
          "ex": "I am Ana. I am thirty years old. I am a nurse."
        },
        {
          "q": "Who is a person you love? Say who he or she is.",
          "ph": "… is my … He / She is …",
          "ex": "My sister is my best friend. She is funny and she is kind."
        }
      ]
    }
  }
};
