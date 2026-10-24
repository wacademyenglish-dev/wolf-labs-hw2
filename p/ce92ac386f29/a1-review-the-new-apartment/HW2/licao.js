/* A1 REVIEW: THE NEW APARTMENT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Unidade 4 (there is/are, some/any, next to). A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "a1-review-the-new-apartment",
  "titulo": "A1 Review: The New Apartment",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ce92ac386f29/a1-review-the-new-apartment/img/live-capa.webp",
  "alvo": "Unit 4 review: there is / there are and Is there...?; some / any; next to, in front of, between; at / in / on; how many / how much",
  "abrir": "What is there on your desk right now?",
  "fecho": "<b>There is</b> + one thing, <b>there are</b> + many: <i>There are two chairs.</i> <b>Any</b> in no and questions: <i>There isn't any milk.</i> Places: <b>next to · in front of · between</b>.",
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
      "sub": "Mia and Leo visit a flat for rent. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/ce92ac386f29/a1-review-the-new-apartment/img/live-conversa.webp",
      "leg": "A balcony at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, look at this apartment. It's on the second floor."
        },
        {
          "quem": "leo",
          "t": "Nice! Is there a kitchen?"
        },
        {
          "quem": "mia",
          "t": "Yes, there is. It's small, but there is a window."
        },
        {
          "quem": "leo",
          "t": "How many bedrooms are there?"
        },
        {
          "quem": "mia",
          "t": "There are two. And there is a big sofa in the living room."
        },
        {
          "quem": "leo",
          "t": "Is there any furniture in the bedrooms?"
        },
        {
          "quem": "mia",
          "t": "No, there isn't any. But there is a balcony. It's next to the living room."
        },
        {
          "quem": "leo",
          "t": "Great! And what is in front of the building?"
        },
        {
          "quem": "mia",
          "t": "There is a park. There are some trees and a small café."
        }
      ],
      "perguntas": [
        {
          "q": "Where is the apartment?",
          "op": [
            "On the second floor",
            "On the first floor",
            "At the park"
          ],
          "a": 0,
          "por": "It's on the second floor."
        },
        {
          "q": "How many bedrooms are there?",
          "op": [
            "Two",
            "One",
            "Three"
          ],
          "a": 0,
          "por": "There are two."
        },
        {
          "q": "What is in front of the building?",
          "op": [
            "A park",
            "A bank",
            "A school"
          ],
          "a": 0,
          "por": "There is a park."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the flat. Hear it, then say it.",
      "frases": [
        {
          "t": "There is a big sofa in the living room.",
          "img": "https://wolf-labs.pages.dev/p/ce92ac386f29/a1-review-the-new-apartment/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The balcony is next to the living room.",
          "img": "https://wolf-labs.pages.dev/p/ce92ac386f29/a1-review-the-new-apartment/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "There are some chairs on the balcony.",
          "img": "https://wolf-labs.pages.dev/p/ce92ac386f29/a1-review-the-new-apartment/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "there is, any, next to. Four quick ones.",
      "regra": "<b>there is / there are</b> · <b>any</b> in no-sentences · <b>next to, between, in front of</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "There are two chairs on the balcony.",
          "aceita": [],
          "d": "Dica: duas coisas = <b>there are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Have a park in front of my house.",
          "r": "There is a park in front of my house.",
          "aceita": [],
          "d": "Dica: para dizer que existe: <b>there is</b>, nunca 'have'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There isn't some milk in the fridge.",
          "r": "There isn't any milk in the fridge.",
          "aceita": [],
          "d": "Dica: frase negativa pede <b>any</b>, não 'some'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The cup is next of the lamp.",
          "r": "The cup is next to the lamp.",
          "aceita": [],
          "d": "Dica: é <b>next to</b>, nunca 'next of'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/ce92ac386f29/a1-review-the-new-apartment/img/live-conversa.webp",
      "leg": "A balcony with a table and chairs",
      "pede": "Look at the picture: a balcony at night. Write 2 or 3 sentences about it. Use <b>there is / there are</b> and <b>next to / in front of / between</b>.",
      "ph": "There is a table on the balcony. …",
      "ex": "There is a small table on the balcony. There are two chairs next to it. In front of the balcony there is a park."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is there on your desk right now?",
          "ph": "There is a … and there are some …",
          "ex": "There is a laptop, and there are some papers."
        },
        {
          "q": "How many rooms are there in your house?",
          "ph": "There are … rooms.",
          "ex": "There are five rooms, and there is one bathroom."
        }
      ]
    }
  }
};
