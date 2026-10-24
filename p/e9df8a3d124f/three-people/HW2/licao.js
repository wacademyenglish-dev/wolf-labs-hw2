/* THREE PEOPLE, FIVE DAYS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: I'm + age, tens x teens, days, prices. A1: dicas em português só nas notas (d). Imagens live-* escuras. */
window.HW2 = {
  "id": "three-people",
  "titulo": "Three People, Five Days",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e9df8a3d124f/three-people/img/live-mesa.jpg",
  "alvo": "I'm + name / age; the tens versus the teens (thirteen x thirty, fourteen x forty); the days in order; prices (How much is it? It's forty pounds.)",
  "abrir": "How old are you? What is your favorite day?",
  "fecho": "<b>I'm</b> + age: <i>I'm thirty.</i> Never <i>I have thirty</i>. <b>-teen</b> = 13 to 19 (thirTEEN); <b>-ty</b> = tens (THIRty). A price: <i>It's forty pounds.</i> Days in order: Monday, Tuesday, Wednesday, Thursday, Friday.",
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
      "sub": "Mia and Leo at a station. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/e9df8a3d124f/three-people/img/live-rochester.webp",
      "leg": "A quiet station at dusk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hi! I'm Mia. I'm twenty-three. How old are you?"
        },
        {
          "quem": "leo",
          "t": "I'm thirty. My sister is thirteen."
        },
        {
          "quem": "mia",
          "t": "Thirteen or thirty?"
        },
        {
          "quem": "leo",
          "t": "Thirteen! One, three. She is at school."
        },
        {
          "quem": "mia",
          "t": "OK. How much is the train to Edinburgh?"
        },
        {
          "quem": "leo",
          "t": "It's forty pounds on Friday."
        },
        {
          "quem": "mia",
          "t": "Forty? Not fourteen?"
        },
        {
          "quem": "leo",
          "t": "No, forty. On Saturday it's fifty pounds."
        },
        {
          "quem": "mia",
          "t": "Friday, then. After Thursday, it's Friday. Good!"
        }
      ],
      "perguntas": [
        {
          "q": "How old is Leo's sister?",
          "op": [
            "Thirteen",
            "Thirty",
            "Twenty-three"
          ],
          "a": 0,
          "por": "My sister is thirteen."
        },
        {
          "q": "How much is the train on Friday?",
          "op": [
            "Forty pounds",
            "Fourteen pounds",
            "Fifty pounds"
          ],
          "a": 0,
          "por": "It's forty pounds on Friday."
        },
        {
          "q": "Which day does Mia choose?",
          "op": [
            "Friday",
            "Saturday",
            "Thursday"
          ],
          "a": 0,
          "por": "Friday, then."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with numbers and days. Hear it, then say it.",
      "frases": [
        {
          "t": "Hi, I'm Leo. I'm thirty.",
          "img": "https://wolf-labs.pages.dev/p/e9df8a3d124f/three-people/img/live-mesa.jpg",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The train is forty pounds on Friday.",
          "img": "https://wolf-labs.pages.dev/p/e9df8a3d124f/three-people/img/live-rochester.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "My sister is thirteen, not thirty.",
          "img": "https://wolf-labs.pages.dev/p/e9df8a3d124f/three-people/img/live-mesa.jpg",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Numbers, days and prices. Four quick ones.",
      "regra": "<b>I'm</b> + age · <b>-teen</b> (13) x <b>-ty</b> (30) · <b>It's forty pounds</b> · the days in order.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It's forty pounds on Friday.",
          "aceita": [],
          "d": "Dica: o preço vem depois de <b>It's</b>, e o dia vem no fim."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I have thirty.",
          "r": "I'm thirty.",
          "aceita": [
            "I am thirty."
          ],
          "d": "Dica: a idade usa <b>I'm</b>, nunca <i>I have</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It's fifty pound.",
          "r": "It's fifty pounds.",
          "aceita": [],
          "d": "Dica: mais de um = <b>pounds</b>, com -s."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "After Wednesday comes Friday.",
          "r": "After Wednesday comes Thursday.",
          "aceita": [],
          "d": "Dica: a ordem é Wednesday, <b>Thursday</b>, Friday."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e9df8a3d124f/three-people/img/live-mesa.jpg",
      "leg": "Phones, a map and some money on a dark table",
      "pede": "Look at the picture: phones, a map and money on a table. Write 2 or 3 sentences: your name, your age, and one thing with its price. Use <b>I'm</b> and <b>It's ... pounds</b>.",
      "ph": "I'm … I'm … It's … pounds.",
      "ex": "I'm Ana. I'm thirty-two. My phone is two hundred pounds."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What's your name? How old are you?",
          "ph": "I'm … I'm …",
          "ex": "I'm Carlos. I'm forty-one."
        },
        {
          "q": "What day is your English class? How much is your phone?",
          "ph": "It's on … It's … pounds.",
          "ex": "It's on Thursday. My phone is two hundred pounds."
        }
      ]
    }
  }
};
