/* LITTLE DID THEY KNOW · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: inversion after negative expressions of manner and rule. C1: nenhum português. Só imagens live-* (escuras). */
window.HW2 = {
  "id": "little-did-they-know",
  "titulo": "Little Did They Know",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/840e198b7f21/little-did-they-know/img/live-capa.webp",
  "alvo": "inversion after negative expressions of manner and rule: Little did they know ...; Never before had I seen ...; At no time did ...; Under no circumstances should you ...; On no account must ...; In no way is ...",
  "abrir": "What is the strictest rule you have ever had to follow?",
  "fecho": "Two moods, one structure. In a story: <b>Little did they know ...</b>, <b>Never before had I seen ...</b>. In a strict rule: <b>Under no circumstances should you ...</b>, <b>On no account must ...</b>, <b>At no time did ...</b>. The auxiliary comes before the subject: never <i>Little they knew</i>.",
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
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo at a lighthouse museum. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/840e198b7f21/little-did-they-know/img/live-conversa.webp",
      "leg": "A lamp, a book and a round window onto the sea",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, read that sign by the door. Under no circumstances should visitors climb past the third landing."
        },
        {
          "quem": "leo",
          "t": "Understood. On no account am I going to argue with a sign that firm."
        },
        {
          "quem": "mia",
          "t": "Now listen to the audio guide. Little did the keeper know that the storm would last three days."
        },
        {
          "quem": "leo",
          "t": "Classic. Never before had the lamp burned for so long, apparently."
        },
        {
          "quem": "mia",
          "t": "Hold on, it says that at no time did the light go out."
        },
        {
          "quem": "leo",
          "t": "Impressive. Though little did he know his supplies were running low."
        },
        {
          "quem": "mia",
          "t": "Honestly, you could sell this story as a thriller."
        },
        {
          "quem": "leo",
          "t": "In no way am I writing a thriller. I'm only here for the tea shop."
        },
        {
          "quem": "mia",
          "t": "Typical. Come on, the tour is starting."
        },
        {
          "quem": "leo",
          "t": "Lead the way, but not past the third landing."
        }
      ],
      "perguntas": [
        {
          "q": "What are visitors forbidden to do?",
          "op": [
            "Climb past the third landing",
            "Use the tea shop",
            "Take the audio guide"
          ],
          "a": 0,
          "por": "Under no circumstances should visitors climb past the third landing."
        },
        {
          "q": "What was remarkable about the lamp?",
          "op": [
            "It never went out",
            "It was very small",
            "It broke in the storm"
          ],
          "a": 0,
          "por": "At no time did the light go out."
        },
        {
          "q": "Why is Leo really at the museum?",
          "op": [
            "For the tea shop",
            "To write a thriller",
            "To meet the keeper"
          ],
          "a": 0,
          "por": "I'm only here for the tea shop."
        }
      ]
    },
    "out": {
      "sub": "Three sentences, one story and two strict rules. Hear it, then say it.",
      "frases": [
        {
          "t": "Little did the crew know that the weather was about to change.",
          "img": "https://wolf-labs.pages.dev/p/840e198b7f21/little-did-they-know/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Under no circumstances should the lamp room be left unlocked.",
          "img": "https://wolf-labs.pages.dev/p/840e198b7f21/little-did-they-know/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "At no time did the keeper leave his post during the storm.",
          "img": "https://wolf-labs.pages.dev/p/840e198b7f21/little-did-they-know/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Little did, under no circumstances, never before. Four quick ones.",
      "regra": "<b>Little did they know ...</b> · <b>Never before had I seen ...</b> · <b>Under no circumstances should you ...</b> · <b>At no time did ...</b> · auxiliary before the subject",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "On no account must the door be left open.",
          "aceita": [],
          "d": "Hint: <b>On no account</b> + <b>must</b> + subject."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "Little they knew about the storm.",
          "r": "Little did they know about the storm.",
          "aceita": [],
          "d": "Hint: you need <b>did</b> before the subject, then the base verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "Under no circumstances you should open it.",
          "r": "Under no circumstances should you open it.",
          "aceita": [],
          "d": "Hint: <b>should</b> comes before <b>you</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "Never before I had seen such waves.",
          "r": "Never before had I seen such waves.",
          "aceita": [],
          "d": "Hint: with <b>never before</b>, <b>had</b> goes first."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/840e198b7f21/little-did-they-know/img/live-capa.webp",
      "leg": "A small boat with a light on a dark sea",
      "pede": "Look at the picture: a small boat with a light on a dark sea. Write 2 or 3 sentences: one story sentence with <b>Little did ...</b> or <b>Never before had ...</b>, and one strict rule with <b>Under no circumstances</b>, <b>On no account</b> or <b>At no time</b>.",
      "ph": "Little did the crew know that …",
      "ex": "Little did the crew know that a calm night was ahead. Under no circumstances should anyone leave the deck, and never before had the sea looked so still."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is one rule at your workplace or home that nobody may break?",
          "ph": "Under no circumstances should … / On no account must …",
          "ex": "Under no circumstances should anyone touch my desk at the office."
        },
        {
          "q": "Tell me about something you did not expect at the time.",
          "ph": "Little did I know that …",
          "ex": "Little did I know that the quiet new colleague would become my best friend."
        }
      ]
    }
  }
};
