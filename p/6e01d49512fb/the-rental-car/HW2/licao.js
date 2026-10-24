/* THE RENTAL CAR · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: have to / don't have to / must / mustn't. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-rental-car",
  "titulo": "The Rental Car",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/6e01d49512fb/the-rental-car/img/live-capa.webp",
  "alvo": "obligation and no obligation: have to / has to (a rule you must follow), don't have to (not necessary), must + verb, mustn't (forbidden); never 'must to', 'don't must', 'he have to'",
  "abrir": "What do you have to do before you drive a car?",
  "fecho": "<b>have to</b> = a rule (<i>You have to drive on the left.</i>) · <b>don't have to</b> = not necessary (<i>You don't have to pay now.</i>) · <b>mustn't</b> = forbidden (<i>You mustn't use your phone.</i>). He <b>has to</b>. Never <i>must to</i>.",
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
      "sub": "Mia at the car rental desk, Leo works there. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/6e01d49512fb/the-rental-car/img/live-capa.webp",
      "leg": "A long road at dusk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Good morning. Do you have a reservation?"
        },
        {
          "quem": "mia",
          "t": "Yes. I booked a small car for three days."
        },
        {
          "quem": "leo",
          "t": "Great. You have to show your licence and a credit card."
        },
        {
          "quem": "mia",
          "t": "Here they are. Do I have to pay now?"
        },
        {
          "quem": "leo",
          "t": "No, you don't have to pay now. You pay when you return the car."
        },
        {
          "quem": "mia",
          "t": "OK. Is there anything I must know about driving here?"
        },
        {
          "quem": "leo",
          "t": "Yes. In New Zealand you have to drive on the left. And you mustn't use your phone."
        },
        {
          "quem": "mia",
          "t": "Left, left. I'll remember. Do I have to fill the tank?"
        },
        {
          "quem": "leo",
          "t": "Yes, you have to return it full. Have a safe trip."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia have to show?",
          "op": [
            "Her licence and a credit card",
            "Her passport and a ticket",
            "Her hotel booking"
          ],
          "a": 0,
          "por": "You have to show your licence and a credit card."
        },
        {
          "q": "When does Mia pay?",
          "op": [
            "When she returns the car",
            "Now, at the desk",
            "Tomorrow morning"
          ],
          "a": 0,
          "por": "You don't have to pay now. You pay when you return the car."
        },
        {
          "q": "What mustn't Mia do?",
          "op": [
            "Use her phone",
            "Drive on the left",
            "Return the car"
          ],
          "a": 0,
          "por": "You mustn't use your phone."
        }
      ]
    },
    "out": {
      "sub": "Three rules from the desk. Hear it, then say it.",
      "frases": [
        {
          "t": "You have to drive on the left.",
          "img": "https://wolf-labs.pages.dev/p/6e01d49512fb/the-rental-car/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You don't have to pay now.",
          "img": "https://wolf-labs.pages.dev/p/6e01d49512fb/the-rental-car/img/live-b.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "You mustn't use your phone.",
          "img": "https://wolf-labs.pages.dev/p/6e01d49512fb/the-rental-car/img/live-b.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Have to, don't have to or mustn't? Four quick ones.",
      "regra": "<b>have to</b> = a rule · <b>don't have to</b> = not necessary · <b>mustn't</b> = forbidden · <b>he has to</b> · never <b>must to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "You have to return the car with a full tank.",
          "aceita": [],
          "d": "Dica: regra = <b>have to</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: no to after must.",
          "mostra": "I must to show my licence.",
          "r": "I must show my licence.",
          "aceita": [
            "I have to show my licence.",
            "I must show my license.",
            "I have to show my license."
          ],
          "d": "Dica: depois de <b>must</b>, o verbo vem direto, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it is not necessary.",
          "mostra": "You don't must pay now.",
          "r": "You don't have to pay now.",
          "aceita": [
            "You do not have to pay now."
          ],
          "d": "Dica: 'não precisa' é <b>don't have to</b>; <b>must</b> não usa <b>don't</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He have to drive on the left.",
          "r": "He has to drive on the left.",
          "aceita": [],
          "d": "Dica: com <b>he / she</b>, o certo é <b>has to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/6e01d49512fb/the-rental-car/img/live-b.webp",
      "leg": "The road through the mountains",
      "pede": "Look at the picture: a road trip. Write 2 or 3 sentences of rules for a friend: one thing he <b>has to</b> do and one thing he <b>mustn't</b> do.",
      "ph": "You have to …",
      "ex": "You have to drive on the left. You mustn't use your phone, and you don't have to pay now."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you have to do before a long trip?",
          "ph": "I have to …",
          "ex": "I have to pack my bag and check my passport."
        },
        {
          "q": "What is one thing you mustn't do when you drive?",
          "ph": "I mustn't …",
          "ex": "I mustn't use my phone."
        }
      ]
    }
  }
};
