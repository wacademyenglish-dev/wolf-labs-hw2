/* THE SUPPLY ROOM · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: there is / there are, some / any. A1: dicas em português só nas notas (d). Só imagens live-* (já escuras); bg-door e box ficam de fora (claras). */
window.HW2 = {
  "id": "the-supply-room",
  "titulo": "The Supply Room",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/716ccd2d774f/the-supply-room/img/live-abertura.webp",
  "alvo": "there is (one thing) / there are (many things); some in the affirmative, any in the negative and in questions; Is there...? Are there any...? with Yes, there is. / No, there aren't.; never have two boxes in the room, there is three chairs, there aren't some, are there any toner",
  "abrir": "What is there on your desk right now?",
  "fecho": "<b>There is</b> + one thing. <b>There are</b> + many things. Yes: <b>some</b> (<i>there are some boxes</i>). No and questions: <b>any</b> (<i>there aren't any chairs</i> · <i>Are there any cables?</i>).",
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
      "sub": "Mia and Leo prepare a desk for a new colleague. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/716ccd2d774f/the-supply-room/img/live-abertura.webp",
      "leg": "A supply room with boxes on shelves",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, someone starts on Monday. Is there a desk for him?"
        },
        {
          "quem": "leo",
          "t": "Yes, there is. But it's empty. There is only a socket."
        },
        {
          "quem": "mia",
          "t": "Are there any chairs in the supply room?"
        },
        {
          "quem": "leo",
          "t": "Let me check. There are some boxes on the shelves."
        },
        {
          "quem": "leo",
          "t": "Is there any paper? Yes, there is. There is a whole pack."
        },
        {
          "quem": "mia",
          "t": "And monitors? Are there any monitors?"
        },
        {
          "quem": "leo",
          "t": "No, there aren't. There aren't any monitors this week."
        },
        {
          "quem": "mia",
          "t": "OK. Is there a keyboard?"
        },
        {
          "quem": "leo",
          "t": "Yes, there is one. And there are three cables."
        },
        {
          "quem": "mia",
          "t": "Good. Send the order before five."
        }
      ],
      "perguntas": [
        {
          "q": "What is there on the empty desk?",
          "op": [
            "Only a socket",
            "A monitor and a chair",
            "Three cables"
          ],
          "a": 0,
          "por": "There is only a socket."
        },
        {
          "q": "Are there any monitors this week?",
          "op": [
            "No, there aren't",
            "Yes, there are",
            "Yes, there is one"
          ],
          "a": 0,
          "por": "No, there aren't. There aren't any monitors this week."
        },
        {
          "q": "How many cables are there?",
          "op": [
            "Three",
            "One",
            "None"
          ],
          "a": 0,
          "por": "There are three cables."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a supply room. Hear it, then say it.",
      "frases": [
        {
          "t": "There are some boxes on the shelves.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/716ccd2d774f/the-supply-room/img/live-abertura.webp"
        },
        {
          "t": "There is one small box on the shelf.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/716ccd2d774f/the-supply-room/img/live-bg-shelf.webp"
        },
        {
          "t": "Are there any chairs in the room?",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "There is, there are, some, any. Four quick ones.",
      "regra": "<b>there is</b> + one · <b>there are</b> + many · <b>some</b> = yes · <b>any</b> = no and questions · never <i>have</i> for this.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Are there any chairs in the supply room?",
          "aceita": [],
          "d": "Dica: pergunta com <b>Are there</b> + any + coisas no plural."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There is three boxes on the shelf.",
          "r": "There are three boxes on the shelf.",
          "aceita": [],
          "d": "Dica: três coisas pedem <b>there are</b>, não <i>there is</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There aren't some monitors.",
          "r": "There aren't any monitors.",
          "aceita": [
            "There are no monitors."
          ],
          "d": "Dica: no negativo usamos <b>any</b>, não <i>some</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Have two chairs in the room.",
          "r": "There are two chairs in the room.",
          "aceita": [],
          "d": "Dica: para dizer que algo existe, use <b>there is / there are</b>, não <i>have</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/716ccd2d774f/the-supply-room/img/live-abertura.webp",
      "leg": "A supply room with boxes on shelves",
      "pede": "Look at the picture: a supply room with boxes on shelves. Write 2 or 3 sentences about a room you know: what there is and what there isn't. Use <b>there is</b>, <b>there are some</b> or <b>there isn't any</b>.",
      "ph": "In my room there is a … There aren't any …",
      "ex": "In my kitchen there is a fridge. There are some plates. There isn't any milk."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Is there any food in your fridge right now? What is there?",
          "ph": "There is some … There isn't any …",
          "ex": "There is some cheese, but there isn't any milk."
        },
        {
          "q": "Are there any chairs in your room? How many?",
          "ph": "There are … chairs.",
          "ex": "There are two chairs and one small table."
        }
      ]
    }
  }
};
