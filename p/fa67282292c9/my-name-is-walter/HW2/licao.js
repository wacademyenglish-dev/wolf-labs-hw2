/* MY NAME IS WALTER · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: question words (what, where, how old, who). A1: dicas em português só nas notas (d). Só cena de professor/família/cozinha. */
window.HW2 = {
  "id": "my-name-is-walter",
  "titulo": "My Name Is Walter",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/fa67282292c9/my-name-is-walter/img/live-cena3-cozinha.webp",
  "alvo": "question words with be and do: What is your name? Where do you live? How old are you? Who is in your family?; never Where you live?, How many years do you have?",
  "abrir": "Who is in your family?",
  "fecho": "<b>What / Where / Who / How old</b> + the little verb first: <i>What is your name? How old are you?</i> Other verbs need <b>do / does</b>: <i>Where do you live? Where does he live?</i> Age is <b>be</b>: never <i>How many years do you have?</i>",
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
      "sub": "Mia and Leo see a teacher in a kitchen. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/fa67282292c9/my-name-is-walter/img/live-cena3-cozinha.webp",
      "leg": "A birthday cake in a kitchen",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, who is that man in the kitchen?"
        },
        {
          "quem": "mia",
          "t": "That's Mr. Walter. He is a chemistry teacher."
        },
        {
          "quem": "leo",
          "t": "How old is he?"
        },
        {
          "quem": "mia",
          "t": "He is fifty. Today is his birthday."
        },
        {
          "quem": "leo",
          "t": "Where does he live?"
        },
        {
          "quem": "mia",
          "t": "He lives in a small house with his family."
        },
        {
          "quem": "leo",
          "t": "Who is in his family?"
        },
        {
          "quem": "mia",
          "t": "His wife and his son. They are in the kitchen too."
        },
        {
          "quem": "leo",
          "t": "What does he do on weekends?"
        },
        {
          "quem": "mia",
          "t": "He cooks breakfast for the family. Today he is making a cake."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mr. Walter do?",
          "op": [
            "He is a chemistry teacher",
            "He is a cook",
            "He is a doctor"
          ],
          "a": 0,
          "por": "He is a chemistry teacher."
        },
        {
          "q": "How old is he?",
          "op": [
            "Fifty",
            "Forty",
            "Sixty"
          ],
          "a": 0,
          "por": "He is fifty."
        },
        {
          "q": "What does he cook on weekends?",
          "op": [
            "Breakfast",
            "Dinner",
            "Pizza"
          ],
          "a": 0,
          "por": "He cooks breakfast for the family."
        }
      ]
    },
    "out": {
      "sub": "Three questions for a new friend. Hear it, then say it.",
      "frases": [
        {
          "t": "What is your name?",
          "img": "https://wolf-labs.pages.dev/p/fa67282292c9/my-name-is-walter/img/live-cena3-cozinha.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Where do you live?",
          "img": "https://wolf-labs.pages.dev/p/fa67282292c9/my-name-is-walter/img/live-mapa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "How old is your brother?",
          "img": "https://wolf-labs.pages.dev/p/fa67282292c9/my-name-is-walter/img/live-cena3-cozinha.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "What, where, how old. Four quick ones.",
      "regra": "<b>What is</b> your name? · <b>How old are</b> you? · <b>Where do</b> you live? · <b>Where does</b> he live?",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Where does your teacher live?",
          "aceita": [],
          "d": "Dica: <b>does</b> vem antes de your teacher, e o verbo fica limpo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Where you live?",
          "r": "Where do you live?",
          "aceita": [],
          "d": "Dica: com <b>live</b>, a pergunta precisa de <b>do</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "How many years do you have?",
          "r": "How old are you?",
          "aceita": [],
          "d": "Dica: idade é <b>be</b>: How old <b>are</b> you?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "What your name is?",
          "r": "What is your name?",
          "aceita": [],
          "d": "Dica: o <b>is</b> vem antes de your name."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/fa67282292c9/my-name-is-walter/img/live-cena3-cozinha.webp",
      "leg": "A birthday cake in a kitchen",
      "pede": "Look at the picture: a birthday cake in a kitchen. Write 2 or 3 questions for a new friend. Use <b>What</b>, <b>Where</b>, <b>Who</b> or <b>How old</b>.",
      "ph": "What … ? Where … ?",
      "ex": "What is your name? Where do you live? How old is your sister?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who is in your family?",
          "ph": "In my family: …",
          "ex": "My mother, my father and my sister are in my family."
        },
        {
          "q": "Where do you live? What do you do?",
          "ph": "I live in … I work …",
          "ex": "I live in São Paulo. I work in a school."
        }
      ]
    }
  }
};
