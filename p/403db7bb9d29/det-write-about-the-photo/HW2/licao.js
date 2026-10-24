/* WRITE ABOUT THE PHOTO · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: frase rica sobre uma foto: there is/are, which, with, where. B1: nenhum portugues. So imagens live-* (escuras; oficina e parque ficam de fora). */
window.HW2 = {
  "id": "det-write-about-the-photo",
  "titulo": "Write About the Photo",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/403db7bb9d29/det-write-about-the-photo/img/live-conversa.webp",
  "alvo": "one rich sentence about a photo: place + details + adjectives + with / which / where; there is / there are; very + adjective",
  "abrir": "What can you see around you right now?",
  "fecho": "A rich sentence = <b>place + details + adjectives + with / which / where</b>: <i>There is a small tent by a calm lake, with a fire next to it.</i> <b>There is</b> + one thing, <b>there are</b> + two or more. Never <i>In this photo have</i>, never <i>a fire what is burning</i>.",
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
      "sub": "Leo describes a photo to Mia. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/403db7bb9d29/det-write-about-the-photo/img/live-conversa.webp",
      "leg": "An empty gallery with warm lights",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you have one minute to write about this photo. What do you see?"
        },
        {
          "quem": "leo",
          "t": "A street. There is a bakery."
        },
        {
          "quem": "mia",
          "t": "Too flat. Add a place, some adjectives and a with, which or where."
        },
        {
          "quem": "leo",
          "t": "OK. This is a quiet street in the early morning, where a small bakery is already open."
        },
        {
          "quem": "mia",
          "t": "Better. What else is in the photo?"
        },
        {
          "quem": "leo",
          "t": "There are two wooden crates by the door, with fresh bread inside."
        },
        {
          "quem": "mia",
          "t": "Nice. Is there anything in the sky?"
        },
        {
          "quem": "leo",
          "t": "Yes, there is a pale moon, which makes the street look very calm."
        },
        {
          "quem": "mia",
          "t": "That's two rich sentences with no mistakes. That is exactly the goal."
        }
      ],
      "perguntas": [
        {
          "q": "What was wrong with Leo's first sentence?",
          "op": [
            "It was too flat",
            "It had a grammar mistake",
            "It was about the wrong photo"
          ],
          "a": 0,
          "por": "Too flat. Add a place, some adjectives and a with, which or where."
        },
        {
          "q": "What is by the bakery door?",
          "op": [
            "Two wooden crates with fresh bread",
            "A bicycle",
            "A small table"
          ],
          "a": 0,
          "por": "There are two wooden crates by the door, with fresh bread inside."
        },
        {
          "q": "What makes the street look calm?",
          "op": [
            "A pale moon in the sky",
            "A busy market",
            "A loud bell"
          ],
          "a": 0,
          "por": "There is a pale moon, which makes the street look very calm."
        }
      ]
    },
    "out": {
      "sub": "Three rich sentences about a picture. Hear it, then say it.",
      "frases": [
        {
          "t": "There is a white card on a dark desk, with a warm lamp above it.",
          "img": "https://wolf-labs.pages.dev/p/403db7bb9d29/det-write-about-the-photo/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "This is an empty gallery, where warm lights shine on the walls.",
          "img": "https://wolf-labs.pages.dev/p/403db7bb9d29/det-write-about-the-photo/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "There are four small pictures on the wall, which makes the room look very quiet.",
          "img": "https://wolf-labs.pages.dev/p/403db7bb9d29/det-write-about-the-photo/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "there is / there are, which / what, very. Four quick ones.",
      "regra": "<b>there is</b> + one · <b>there are</b> + two or more · <b>which</b> for things · <b>very</b> + adjective.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "There is a small tent beside a calm lake.",
          "aceita": [],
          "d": "Hint: <b>There is</b> + a + adjective + noun + place."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "In this photo have a small tent.",
          "r": "In this photo there is a small tent.",
          "aceita": [
            "In this photo, there is a small tent."
          ],
          "d": "Hint: to say something exists, use <b>there is</b>, not <i>have</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There is two cups on the table.",
          "r": "There are two cups on the table.",
          "aceita": [],
          "d": "Hint: two cups is plural, so <b>there are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I see a fire what is burning.",
          "r": "I see a fire which is burning.",
          "aceita": [
            "I see a fire that is burning."
          ],
          "d": "Hint: for things, use <b>which</b> or <b>that</b>. Never <i>what</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/403db7bb9d29/det-write-about-the-photo/img/live-foto-acampamento.webp",
      "leg": "A tent by a lake at dusk",
      "pede": "Look at the picture. Write 2 sentences about it in one minute. Use two adjectives and <b>with</b>, <b>which</b> or <b>where</b>.",
      "ph": "There is a ... tent by a ... lake, with ...",
      "ex": "There is a small tent beside a dark lake, with a fire next to it. The sky is very quiet, which makes the scene look peaceful."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Describe the place where you are now. Use two adjectives and one with, which or where.",
          "ph": "I'm in a ... room with ...",
          "ex": "I'm in a small bedroom with a big window, where I can see the street."
        },
        {
          "q": "Think of a photo on your phone that you like. What does it show?",
          "ph": "It shows a ... place, which ...",
          "ex": "It shows a quiet beach at sunset, which is my favorite place."
        }
      ]
    }
  }
};
