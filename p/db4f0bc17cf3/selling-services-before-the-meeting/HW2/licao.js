/* BEFORE THE MEETING STARTS · SELLING SERVICES LESSON 16 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: small talk before a meeting: like / love + -ing; How was your weekend? It was…; Did you…? Yes, I did / No, I didn’t. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-before-the-meeting",
  "titulo": "Before the Meeting Starts",
  "nivel": "A1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "small talk before a meeting: like / love + -ing; How was your weekend? It was…; Did you…? Yes, I did / No, I didn’t",
  "abrir": "A client arrives early for a meeting. What is your first question?",
  "fecho": "Small talk in three steps: <b>How was your weekend?</b> · <b>I love …ing</b> · <b>And you?</b> Then: “OK, shall we start?”",
  "elenco": {
    "mia": {
      "nome": "Mia",
      "voz": "en-US-AvaNeural",
      "cor": "#86c9f0"
    },
    "leo": {
      "nome": "Leo",
      "voz": "en-US-GuyNeural",
      "cor": "#7fd1b9"
    }
  },
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "Mia and a client, two minutes before a meeting. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "Two coffees on a meeting table in the morning",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Good morning, Leo! How was your weekend?"
        },
        {
          "quem": "leo",
          "t": "It was great, thanks. I went to the mountains."
        },
        {
          "quem": "mia",
          "t": "Really? Do you like hiking?"
        },
        {
          "quem": "leo",
          "t": "Yes, I love hiking. And you? Did you travel?"
        },
        {
          "quem": "mia",
          "t": "No, I didn’t. I stayed home. I love cooking on Sundays."
        },
        {
          "quem": "leo",
          "t": "Nice! What do you like cooking?"
        },
        {
          "quem": "mia",
          "t": "Pasta. My kids love it."
        },
        {
          "quem": "leo",
          "t": "Me too! I love pasta."
        },
        {
          "quem": "mia",
          "t": "OK, shall we start? Thank you for your time today."
        }
      ],
      "perguntas": [
        {
          "q": "Where did Leo go on the weekend?",
          "op": [
            "To the mountains",
            "To the beach",
            "To his office"
          ],
          "a": 0,
          "por": "I went to the mountains."
        },
        {
          "q": "Did Mia travel?",
          "op": [
            "No, she didn’t. She stayed home.",
            "Yes, she did.",
            "Yes, to the mountains."
          ],
          "a": 0,
          "por": "No, I didn’t. I stayed home."
        },
        {
          "q": "What does Mia love doing on Sundays?",
          "op": [
            "Cooking",
            "Hiking",
            "Working"
          ],
          "a": 0,
          "por": "I love cooking on Sundays."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "How was your weekend?",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I love cooking. And you?",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "OK, shall we start?",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "<b>like / love / don’t like + -ing</b> · How was…? → <b>It was</b>… · Did you…? → <b>Yes, I did / No, I didn’t</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Do you like playing tennis?",
          "aceita": [],
          "d": "Dica: depois de <b>like</b>, verbo com <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I like play soccer.",
          "r": "I like playing soccer.",
          "aceita": [
            "I like playing soccer"
          ],
          "d": "Dica: <b>like</b> + verbo com -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Was great, thanks.",
          "r": "It was great, thanks.",
          "aceita": [
            "It was great.",
            "It was great, thanks"
          ],
          "d": "Dica: em inglês a frase precisa de sujeito: <b>It</b> was."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Did you went to the beach?",
          "r": "Did you go to the beach?",
          "aceita": [],
          "d": "Dica: depois de <b>did</b>, o verbo volta para a forma simples."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A coffee cup next to a laptop before a meeting",
      "pede": "Write three small talk lines for a client meeting: a question, one thing you love doing, and “And you?”.",
      "ph": "How was your …? I love …ing. And you?",
      "ex": "Good morning! How was your weekend? I love cooking on Sundays. And you?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How was your last weekend?",
          "ph": "It was … I …",
          "ex": "It was quiet. I watched a movie with my family."
        },
        {
          "q": "What do you like doing after work?",
          "ph": "I like …ing …",
          "ex": "I like running in the park."
        }
      ]
    }
  }
};
