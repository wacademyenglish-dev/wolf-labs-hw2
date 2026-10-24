/* NOT YET · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: going to (am/is/are + going to). A1: dicas em português só nas notas (d). Só imagem escura da própria aula (live-sala). */
window.HW2 = {
  "id": "not-yet",
  "titulo": "Not Yet",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4e547f0bd9c1/not-yet/img/live-sala.webp",
  "alvo": "going to for plans and for things you can see coming: am / is / are + going to + plain verb; isn't / aren't / I'm not going to; Are you going to ...? Is she going to ...?",
  "abrir": "What are you going to do this weekend?",
  "fecho": "<b>I'm</b> going to · <b>she's</b> going to · <b>they're</b> going to + the plain verb. Never drop <b>am / is / are</b>. No: <b>isn't going to</b>. Question: <b>Are</b> you going to ...?",
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
      "sub": "Mia and Leo in a quiet room at night. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/4e547f0bd9c1/not-yet/img/live-sala.webp",
      "leg": "A quiet room at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, it's late. Are you going to sleep?"
        },
        {
          "quem": "leo",
          "t": "No, I'm not. I'm going to read a book."
        },
        {
          "quem": "mia",
          "t": "Look at the sky. It's going to rain tomorrow."
        },
        {
          "quem": "leo",
          "t": "Yes. Dark clouds. We aren't going to go to the park."
        },
        {
          "quem": "mia",
          "t": "What are you going to do on Saturday?"
        },
        {
          "quem": "leo",
          "t": "I'm going to clean my room. And my sister is going to cook."
        },
        {
          "quem": "mia",
          "t": "Is she going to cook for us?"
        },
        {
          "quem": "leo",
          "t": "Yes, she is. Are you going to come?"
        },
        {
          "quem": "mia",
          "t": "Yes, I am. I'm going to bring a cake."
        },
        {
          "quem": "leo",
          "t": "Great. It's going to be a good day."
        }
      ],
      "perguntas": [
        {
          "q": "What is Leo going to do tonight?",
          "op": [
            "Read a book",
            "Go to sleep",
            "Clean his room"
          ],
          "a": 0,
          "por": "I'm going to read a book."
        },
        {
          "q": "What is going to happen tomorrow?",
          "op": [
            "It's going to rain",
            "It's going to be hot",
            "It's going to snow"
          ],
          "a": 0,
          "por": "It's going to rain tomorrow."
        },
        {
          "q": "What is Mia going to bring on Saturday?",
          "op": [
            "A cake",
            "A book",
            "An umbrella"
          ],
          "a": 0,
          "por": "I'm going to bring a cake."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about plans. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm going to clean my room on Saturday.",
          "img": "https://wolf-labs.pages.dev/p/4e547f0bd9c1/not-yet/img/live-sala.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It's going to rain tomorrow.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "My sister is going to cook for us.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "am, is, are + going to. Four quick ones.",
      "regra": "<b>I'm / she's / they're</b> + <b>going to</b> + plain verb · <b>isn't / aren't / I'm not</b> going to · <b>Are</b> you going to ...?",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Are you going to sleep tonight?",
          "aceita": [],
          "d": "Dica: pergunta: <b>Are you</b> + going to + o verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "She going to call me.",
          "r": "She is going to call me.",
          "aceita": [
            "She's going to call me."
          ],
          "d": "Dica: going to precisa de <b>is</b> (ou 's): she <b>is</b> going to."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it is a plan, not a habit.",
          "mostra": "Tomorrow I travel to Recife.",
          "r": "Tomorrow I'm going to travel to Recife.",
          "aceita": [
            "Tomorrow I am going to travel to Recife."
          ],
          "d": "Dica: é um plano para amanhã: <b>I'm going to</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It isn't going to rains tomorrow.",
          "r": "It isn't going to rain tomorrow.",
          "aceita": [
            "It is not going to rain tomorrow."
          ],
          "d": "Dica: depois de <b>going to</b>, o verbo fica limpo: <b>rain</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4e547f0bd9c1/not-yet/img/live-sala.webp",
      "leg": "A quiet room at night",
      "pede": "Look at the picture: a quiet room at night. Write 2 or 3 sentences about your weekend: two things you <b>are going to</b> do and one thing you <b>aren't going to</b> do.",
      "ph": "This weekend I'm going to …",
      "ex": "This weekend I'm going to visit my parents. I'm going to sleep a lot. I'm not going to work."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you going to do tonight?",
          "ph": "Tonight I'm going to …",
          "ex": "Tonight I'm going to watch a movie."
        },
        {
          "q": "What is one thing you are going to do this year?",
          "ph": "This year I'm going to …",
          "ex": "This year I'm going to learn to drive."
        }
      ]
    }
  }
};
