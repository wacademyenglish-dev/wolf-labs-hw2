/* No Room · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: there is / there are. Bíblia (WEB, conferida em ebible.org): versículos só no Listen e no Out loud, nunca no Focus, nunca marcados errados. A1/A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "no-room",
  "titulo": "No Room",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ca54db2bc312/no-room/img/live-estabulo.webp",
  "alvo": "there is / there are for a place (There is a lamp. There are two beds.), there isn't / there aren't any, Is there ...?; never 'have' for a place, never 'there is' + many things",
  "abrir": "What is there in your street?",
  "fecho": "<b>There is</b> + one thing: <i>There is a lamp.</i> <b>There are</b> + many: <i>There are two beds.</i> No: <i>There isn't a bed. There aren't any rooms.</i> A question: <i>Is there a room?</i> For a place, not <i>have</i>.",
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
      "sub": "Mia tells Leo about a night in Bethlehem. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/ca54db2bc312/no-room/img/live-estabulo.webp",
      "leg": "A small stable, a warm lamp",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm reading about a night in Bethlehem."
        },
        {
          "quem": "leo",
          "t": "Is there a hotel?"
        },
        {
          "quem": "mia",
          "t": "No. There is a small inn, but it is full. There are no rooms."
        },
        {
          "quem": "leo",
          "t": "Oh no. Where do they sleep?"
        },
        {
          "quem": "mia",
          "t": "There is a stable near the inn. There are some animals, and there is hay."
        },
        {
          "quem": "leo",
          "t": "A stable? What does the story say?"
        },
        {
          "quem": "mia",
          "t": "Luke 2:7 says: She gave birth to her firstborn son. She wrapped him in bands of cloth and laid him in a feeding trough, because there was no room for them in the inn."
        },
        {
          "quem": "leo",
          "t": "That is a hard night. But there is a safe place."
        },
        {
          "quem": "mia",
          "t": "Yes. And outside, there are shepherds in the field."
        },
        {
          "quem": "leo",
          "t": "I like this story. Can we read it together?"
        }
      ],
      "perguntas": [
        {
          "q": "Is there a room in the inn?",
          "op": [
            "No, there isn't",
            "Yes, there is",
            "Yes, there are"
          ],
          "a": 0,
          "por": "There is a small inn, but it is full. There are no rooms."
        },
        {
          "q": "What is near the inn?",
          "op": [
            "A stable",
            "A big hotel",
            "A school"
          ],
          "a": 0,
          "por": "There is a stable near the inn."
        },
        {
          "q": "Who is in the field?",
          "op": [
            "Shepherds",
            "Soldiers",
            "Nobody"
          ],
          "a": 0,
          "por": "Outside, there are shepherds in the field."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the story. The second one is Luke 2:14, World English Bible. Hear it, then say it.",
      "frases": [
        {
          "t": "There is a lamp in the small stable.",
          "img": "https://wolf-labs.pages.dev/p/ca54db2bc312/no-room/img/live-estabulo.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Glory to God in the highest, on earth peace, good will toward men.",
          "img": "https://wolf-labs.pages.dev/p/ca54db2bc312/no-room/img/live-campo.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Is there a room? No, there isn't.",
          "img": "https://wolf-labs.pages.dev/p/ca54db2bc312/no-room/img/live-rua.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "there is or there are? Four quick ones.",
      "regra": "<b>There is</b> + one · <b>There are</b> + many · <b>There isn't / aren't any</b> · <b>Is there ...?</b> · for a place, not <i>have</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "There are two beds in the room",
          "aceita": [],
          "d": "Dica: duas camas: <b>there are</b> + plural."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Have a big table in the house.",
          "r": "There is a big table in the house.",
          "aceita": [],
          "d": "Dica: para um lugar, o inglês usa <b>there is</b>, nunca 'have'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There is three lamps in the street.",
          "r": "There are three lamps in the street.",
          "aceita": [],
          "d": "Dica: três lâmpadas (plural): <b>there are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "There isn't rooms in the inn.",
          "r": "There aren't any rooms in the inn.",
          "aceita": [
            "There are no rooms in the inn."
          ],
          "d": "Dica: plural no negativo: <b>there aren't any</b> + plural."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/ca54db2bc312/no-room/img/live-estabulo.webp",
      "leg": "A small stable, a warm lamp",
      "pede": "Look at the picture: a small stable at night. Write 2 or 3 sentences: what is there in the stable? Use <b>there is</b> and <b>there are</b>.",
      "ph": "In the stable there is … and there are …",
      "ex": "In the stable there is a lamp and a wooden box. There are some bags and there is hay. There isn't a bed."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is there in your room? Use there is and there are.",
          "ph": "In my room there is … and there are …",
          "ex": "In my room there is a bed and a desk. There are two windows."
        },
        {
          "q": "Is there a nice place near your home? What is there?",
          "ph": "Yes, there is … / No, there isn't …",
          "ex": "Yes, there is a small park near my home. There are trees and there is a coffee shop."
        }
      ]
    }
  }
};
