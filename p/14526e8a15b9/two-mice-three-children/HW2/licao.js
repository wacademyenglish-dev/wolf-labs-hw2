/* TWO MICE, THREE CHILDREN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: plurals: mice, children, people, fish, sheep. A1: dicas em português só nas notas (d). Só imagens live-* (já escuras). */
window.HW2 = {
  "id": "two-mice-three-children",
  "titulo": "Two Mice, Three Children",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/14526e8a15b9/two-mice-three-children/img/live-capa.webp",
  "alvo": "plurals: + s / + es (cats, boxes), y to ies (baby, babies), words that change (mouse-mice, child-children, person-people, goose-geese), words that do not change (fish, sheep); never childrens, peoples, mouses, sheeps",
  "abrir": "How many people live in your house?",
  "fecho": "<b>+ s</b>: cat → cats. <b>y → ies</b>: baby → babies. <b>New word</b>: mouse → <b>mice</b>, child → <b>children</b>, person → <b>people</b>, goose → <b>geese</b>. <b>No change</b>: fish, sheep. Never <i>childrens</i>, never <i>peoples</i>.",
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
      "sub": "Mia and Leo count animals in a meadow. A new scene, about 35 seconds.",
      "img": "https://wolf-labs.pages.dev/p/14526e8a15b9/two-mice-three-children/img/live-ovelhas.webp",
      "leg": "Sheep in a field at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look in the box. How many mice are there?"
        },
        {
          "quem": "mia",
          "t": "There are three mice. One mouse is big, and two mice are small."
        },
        {
          "quem": "leo",
          "t": "And in the nest? I see babies."
        },
        {
          "quem": "mia",
          "t": "Three babies! They are very small."
        },
        {
          "quem": "leo",
          "t": "Look at the field. How many sheep do you see?"
        },
        {
          "quem": "mia",
          "t": "Five sheep. And on the road I see six geese."
        },
        {
          "quem": "leo",
          "t": "Are there children near the geese?"
        },
        {
          "quem": "mia",
          "t": "Yes, two children and one person."
        },
        {
          "quem": "leo",
          "t": "Good. Now we have a long list!"
        }
      ],
      "perguntas": [
        {
          "q": "How many mice are in the box?",
          "op": [
            "Three",
            "Two",
            "Five"
          ],
          "a": 0,
          "por": "There are three mice."
        },
        {
          "q": "How many sheep are in the field?",
          "op": [
            "Five",
            "Six",
            "Three"
          ],
          "a": 0,
          "por": "Five sheep."
        },
        {
          "q": "Who is near the geese?",
          "op": [
            "Two children and one person",
            "Three babies",
            "Five sheep"
          ],
          "a": 0,
          "por": "Yes, two children and one person."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with plurals. Hear it, then say it.",
      "frases": [
        {
          "t": "There are three mice in the nest.",
          "img": "https://wolf-labs.pages.dev/p/14526e8a15b9/two-mice-three-children/img/live-ninho.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I see five sheep in the field.",
          "img": "https://wolf-labs.pages.dev/p/14526e8a15b9/two-mice-three-children/img/live-ovelhas.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Six geese are on the road.",
          "img": "https://wolf-labs.pages.dev/p/14526e8a15b9/two-mice-three-children/img/live-gansos.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "One or many? Four quick ones.",
      "regra": "mouse → <b>mice</b> · child → <b>children</b> · person → <b>people</b> · fish, sheep: <b>no change</b> · never + s on these.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "There are two children in the garden.",
          "aceita": [],
          "d": "Dica: <b>children</b> já é plural. Sem -s."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I have two childrens.",
          "r": "I have two children.",
          "aceita": [
            "I have two children"
          ],
          "d": "Dica: <b>child → children</b>. Não precisa de -s."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Five peoples live here.",
          "r": "Five people live here.",
          "aceita": [
            "Five people live here"
          ],
          "d": "Dica: <b>people</b> já é plural. Sem -s."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I see three mouses.",
          "r": "I see three mice.",
          "aceita": [
            "I see three mice"
          ],
          "d": "Dica: <b>mouse → mice</b>. Palavra nova."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/14526e8a15b9/two-mice-three-children/img/live-ninho.webp",
      "leg": "Three small mice in a nest",
      "pede": "Look at the picture: three small mice in a nest. Write 2 or 3 sentences about your home in numbers. How many people? How many children or pets? Use <b>people</b>, <b>children</b>, <b>mice</b> or <b>fish</b>.",
      "ph": "Three people live in my house …",
      "ex": "Four people live in my house. I have two children. We have one dog and two fish."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How many people live in your house?",
          "ph": "… people live in my house.",
          "ex": "Four people live in my house."
        },
        {
          "q": "Do you have a pet? How many?",
          "ph": "I have … / No pets.",
          "ex": "Yes, I have two fish."
        }
      ]
    }
  }
};
