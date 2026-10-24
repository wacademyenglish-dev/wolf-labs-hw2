/* WALK · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: going to for plans. Linha de música: NENHUM verso aqui; o listening é diálogo original. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "walk",
  "titulo": "Walk",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c4721e3ccbaa/walk/img/live-capa.webp",
  "alvo": "going to for plans: I'm going to walk · the negative (I'm not going to ...) · the question (Are you going to ...? What are you going to do?); be before going, plain verb after to, never going to + -ing",
  "abrir": "What are you going to do tomorrow?",
  "fecho": "<b>be</b> + <b>going to</b> + plain verb: <i>I'm going to walk.</i> No: <i>I'm not going to give up.</i> Question: <i>Are you going to come?</i> Never: <i>I going to</i>, never <i>going to walking</i>.",
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
      "sub": "Mia and Leo talk about a new plan. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/c4721e3ccbaa/walk/img/live-capa.webp",
      "leg": "A quiet road at dawn",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I have a new plan. I'm going to walk to work every day."
        },
        {
          "quem": "mia",
          "t": "Really? Are you going to walk in the rain, too?"
        },
        {
          "quem": "leo",
          "t": "No, I'm not going to walk in the rain. I'm going to take the bus."
        },
        {
          "quem": "mia",
          "t": "What time are you going to leave?"
        },
        {
          "quem": "leo",
          "t": "I'm going to leave at six. The road is quiet then."
        },
        {
          "quem": "mia",
          "t": "Is your brother going to walk with you?"
        },
        {
          "quem": "leo",
          "t": "No, he isn't going to come. He is going to sleep late."
        },
        {
          "quem": "mia",
          "t": "Then I'm going to walk with you on Saturday."
        },
        {
          "quem": "leo",
          "t": "Great! We're going to have breakfast after the walk."
        }
      ],
      "perguntas": [
        {
          "q": "What is Leo going to do every day?",
          "op": [
            "Walk to work",
            "Take the bus",
            "Drive a car"
          ],
          "a": 0,
          "por": "I'm going to walk to work every day."
        },
        {
          "q": "What is Leo going to do in the rain?",
          "op": [
            "Take the bus",
            "Walk",
            "Stay home"
          ],
          "a": 0,
          "por": "I'm not going to walk in the rain. I'm going to take the bus."
        },
        {
          "q": "Who is going to walk with Leo on Saturday?",
          "op": [
            "Mia",
            "His brother",
            "Nobody"
          ],
          "a": 0,
          "por": "I'm going to walk with you on Saturday."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about plans. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm going to walk to work tomorrow.",
          "img": "https://wolf-labs.pages.dev/p/c4721e3ccbaa/walk/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Are you going to walk with me on Saturday?",
          "img": "https://wolf-labs.pages.dev/p/c4721e3ccbaa/walk/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "My brother isn't going to come, so we are going to start early.",
          "img": "https://wolf-labs.pages.dev/p/c4721e3ccbaa/walk/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Is it a plan? Four quick ones.",
      "regra": "<b>be</b> + <b>going to</b> + plain verb · no: <b>not going to</b> · question: <b>Are you going to ...?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We are going to have breakfast after the walk.",
          "aceita": [],
          "d": "Dica: <b>are going to</b> + verbo limpo (have)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "We going to have breakfast.",
          "r": "We are going to have breakfast.",
          "aceita": [
            "We're going to have breakfast."
          ],
          "d": "Dica: falta o <b>be</b> antes de <b>going to</b>: we are."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She is going to leaving at six.",
          "r": "She is going to leave at six.",
          "aceita": [
            "She's going to leave at six."
          ],
          "d": "Dica: depois de <b>going to</b>, o verbo fica limpo, sem -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "He doesn't going to come.",
          "r": "He isn't going to come.",
          "aceita": [
            "He is not going to come."
          ],
          "d": "Dica: a negativa usa o <b>be</b>: isn't going to."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c4721e3ccbaa/walk/img/live-capa.webp",
      "leg": "A quiet road and a pair of boots",
      "pede": "Look at the picture: a quiet road and a pair of boots. Write 2 or 3 sentences about a new plan for next week. What <b>are you going to</b> do? What <b>aren't you going to</b> do?",
      "ph": "Next week I'm going to … I'm not going to …",
      "ex": "Next week I'm going to walk to work. I'm not going to eat fast food. I'm going to sleep early."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you going to do tomorrow?",
          "ph": "Tomorrow I'm going to …",
          "ex": "Tomorrow I'm going to study English and then I'm going to cook dinner."
        },
        {
          "q": "Are you going to travel this year? Where?",
          "ph": "Yes, I'm going to … / No, I'm not going to …",
          "ex": "Yes, I'm going to travel to Bahia. I'm going to stay at a small hotel."
        }
      ]
    }
  }
};
