/* WASH YOUR HANDS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: ordens e regras do escritório: verbo, please, don't, let's, be. A1: dicas em português só nas notas (d). Filme/série: diálogo original, nada do clipe. */
window.HW2 = {
  "id": "wash-your-hands",
  "titulo": "Wash Your Hands",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/30d45b182aef/wash-your-hands/img/live-capa.webp",
  "alvo": "orders and rules in the office: verb first (Close the door), Please + verb, Don't + verb, Let's + verb, Be quiet / Don't be late",
  "abrir": "What signs do you see at work or at school?",
  "fecho": "A rule starts with the <b>verb</b>: <i>Close the door.</i> Add <b>please</b> to be polite: <i>Please wash your hands.</i> For no, use <b>don't</b>: <i>Don't touch it.</i> For you and me, use <b>let's</b>: <i>Let's have a meeting.</i> With adjectives, add <b>be</b>: <i>Be quiet. Don't be late.</i>",
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
      "sub": "Mia and Leo in a small office. A new scene, about 30 seconds.",
      "img": "https://wolf-labs.pages.dev/p/30d45b182aef/wash-your-hands/img/live-escritorio.webp",
      "leg": "The office, at the end of the day",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at the sign on the sink."
        },
        {
          "quem": "mia",
          "t": "Please wash your hands. That is a good rule."
        },
        {
          "quem": "leo",
          "t": "And the sign on the door says: Close the door. Don't leave it open."
        },
        {
          "quem": "mia",
          "t": "OK. Leo, be quiet, please. The boss is on the phone."
        },
        {
          "quem": "leo",
          "t": "Sorry! Let's go to the kitchen. Let's make some tea."
        },
        {
          "quem": "mia",
          "t": "Good idea. Don't forget the cups."
        },
        {
          "quem": "leo",
          "t": "Wait, someone is at the door. Come in!"
        },
        {
          "quem": "mia",
          "t": "Hello, Ana. Sit down, please. Don't be nervous."
        },
        {
          "quem": "leo",
          "t": "Let's have a short meeting at ten."
        },
        {
          "quem": "mia",
          "t": "Great. And don't be late!"
        }
      ],
      "perguntas": [
        {
          "q": "What does the sign on the sink say?",
          "op": [
            "Wash your hands",
            "Don't touch",
            "Be quiet"
          ],
          "a": 0,
          "por": "Please wash your hands. That is a good rule."
        },
        {
          "q": "Why does Mia say be quiet?",
          "op": [
            "The boss is on the phone",
            "Ana is late",
            "Leo is tired"
          ],
          "a": 0,
          "por": "Leo, be quiet, please. The boss is on the phone."
        },
        {
          "q": "What time is the meeting?",
          "op": [
            "At ten",
            "At nine",
            "At two"
          ],
          "a": 0,
          "por": "Let's have a short meeting at ten."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the office. Hear it, then say it.",
      "frases": [
        {
          "t": "Please close the door. Don't leave it open.",
          "img": "https://wolf-labs.pages.dev/p/30d45b182aef/wash-your-hands/img/live-escritorio.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Be quiet, please. The boss is on the phone.",
          "img": "https://wolf-labs.pages.dev/p/30d45b182aef/wash-your-hands/img/live-impressora.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Let's make tea. Don't forget the cups.",
          "img": "https://wolf-labs.pages.dev/p/30d45b182aef/wash-your-hands/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Orders, please, don't and let's. Four quick ones.",
      "regra": "<b>Close</b> the door (verb first) · <b>Please</b> + verb · <b>Don't</b> + verb · <b>Let's</b> + verb · <b>Be</b> quiet / Don't <b>be</b> late.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Please close the door and be quiet.",
          "aceita": [],
          "d": "Dica: <b>please</b> + verbo. A ordem começa pelo verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make it an order.",
          "mostra": "You close the door.",
          "r": "Close the door.",
          "aceita": [
            "Close the door!",
            "Please close the door.",
            "Please close the door!"
          ],
          "d": "Dica: a ordem começa com o verbo. Sem <b>you</b>."
        },
        {
          "tipo": "escreve",
          "t": "Say NO.",
          "mostra": "Touch the machine!",
          "r": "Don't touch the machine!",
          "aceita": [
            "Do not touch the machine!",
            "Don't touch the machine.",
            "Do not touch the machine."
          ],
          "d": "Dica: <b>don't</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Don't late!",
          "r": "Don't be late!",
          "aceita": [
            "Do not be late!",
            "Don't be late."
          ],
          "d": "Dica: late não é verbo: <b>don't be</b> late."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/30d45b182aef/wash-your-hands/img/live-impressora.webp",
      "leg": "The office printer",
      "pede": "Look at the picture: a printer in an office. Write 3 signs for the office wall. Use <b>Please, Don't</b> or <b>Let's</b>.",
      "ph": "Please …",
      "ex": "Please close the door. Don't be late. Let's keep the office clean."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is one rule in your home? Say it as an order.",
          "ph": "Don't … ! Please …",
          "ex": "Don't wear shoes in the house. Please wash your hands."
        },
        {
          "q": "Invite a friend to do something after class. Use Let's.",
          "ph": "Let's … Don't …",
          "ex": "Let's have coffee after class. Don't be late!"
        }
      ]
    }
  }
};
