/* MIND MATTERS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: dedução com must be / might be / can't be. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "mind-matters",
  "titulo": "Mind Matters",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/739fb77408a7/mind-matters/img/live-janela.webp",
  "alvo": "deduction with must be / might be / can't be (how sure you are: 100%, 50%, 0%); never must not be for impossible; no to after them",
  "abrir": "Your friend is late and doesn't answer the phone. What might be the reason?",
  "fecho": "You are not saying what is true: you are saying how sure you are. <b>must be</b> = 100% sure. <b>might be</b> = maybe, 50%. <b>can't be</b> = impossible, 0%. Never <i>must not be</i> for impossible, and no <i>to</i>: <i>She must be tired.</i>",
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
      "sub": "Mia and Leo find two bags at the station. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/739fb77408a7/mind-matters/img/live-bolsa2.webp",
      "leg": "A bag left at the station",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, somebody left this bag at the station. Who does it belong to?"
        },
        {
          "quem": "leo",
          "t": "Let's look. There is a baby toy and a small pacifier inside."
        },
        {
          "quem": "mia",
          "t": "Then the owner must be a parent. A baby must be with her."
        },
        {
          "quem": "leo",
          "t": "There are crackers too. They might be for the baby, or for her."
        },
        {
          "quem": "mia",
          "t": "Maybe. And look at the keys. They are for a car. She might have a car."
        },
        {
          "quem": "leo",
          "t": "Now this other bag. It is a briefcase, with glasses and papers."
        },
        {
          "quem": "mia",
          "t": "The owner must be an office worker. Or a teacher."
        },
        {
          "quem": "leo",
          "t": "It can't be a child's bag. Children don't carry a briefcase."
        },
        {
          "quem": "mia",
          "t": "True. And there is a thermos. It might be coffee."
        },
        {
          "quem": "leo",
          "t": "It can't be hot. The bag has been here since the morning."
        },
        {
          "quem": "mia",
          "t": "You are right. Let's call both owners."
        }
      ],
      "perguntas": [
        {
          "q": "Who must the owner of the first bag be?",
          "op": [
            "A parent",
            "A student",
            "A teacher"
          ],
          "a": 0,
          "por": "The owner must be a parent."
        },
        {
          "q": "Why can't the coffee be hot?",
          "op": [
            "The bag has been there since the morning",
            "The thermos is empty",
            "It is a summer day"
          ],
          "a": 0,
          "por": "It can't be hot. The bag has been here since the morning."
        },
        {
          "q": "What might the owner of the first bag have?",
          "op": [
            "A car",
            "A dog",
            "A boat"
          ],
          "a": 0,
          "por": "They are for a car. She might have a car."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the bags. Hear it, then say it.",
      "frases": [
        {
          "t": "The owner of this bag must be a parent.",
          "img": "https://wolf-labs.pages.dev/p/739fb77408a7/mind-matters/img/live-bolsa2.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "That briefcase might belong to a teacher.",
          "img": "https://wolf-labs.pages.dev/p/739fb77408a7/mind-matters/img/live-bolsa3.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The coffee can't be hot after eight hours.",
          "img": "https://wolf-labs.pages.dev/p/739fb77408a7/mind-matters/img/live-bolsa3.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Must be, might be, can't be. Four quick ones.",
      "regra": "<b>must be</b> = 100% · <b>might be</b> = 50% · <b>can't be</b> = 0% · no <i>to</i> · never <i>must not be</i> for impossible.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "That must be her phone.",
          "aceita": [],
          "d": "Dica: <b>must be</b> = tenho certeza (100%)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The owner mights be a teacher.",
          "r": "The owner might be a teacher.",
          "aceita": [],
          "d": "Dica: <b>might</b> nunca muda: sem -s. Talvez = <b>might be</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it is impossible.",
          "mostra": "It must not be his bag. His bag is blue.",
          "r": "It can't be his bag.",
          "aceita": [
            "It cannot be his bag.",
            "It can't be his bag. His bag is blue."
          ],
          "d": "Dica: impossível = <b>can't be</b>, não <i>must not be</i>."
        },
        {
          "tipo": "escreve",
          "t": "Say it with a guess you are sure about.",
          "mostra": "Proof: a baby bottle and a toy car in the bag. (must be)",
          "r": "The owner must be a parent.",
          "aceita": [
            "She must be a parent.",
            "He must be a parent.",
            "It must be a parent's bag."
          ],
          "d": "Dica: prova forte = <b>must be</b> + a pessoa."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/739fb77408a7/mind-matters/img/live-janela.webp",
      "leg": "A lit window in a dark street",
      "pede": "Look at the picture: a window with a warm light, in a dark street. Write 2 or 3 sentences: who lives there, and what are they doing? Use <b>must be, might be</b> and <b>can't be</b>.",
      "ph": "The person must be …",
      "ex": "The person must be at home. They might be reading a book. It can't be a child, because it is very late."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Your neighbor's light is on at 3 AM. What might be happening?",
          "ph": "He might be …",
          "ex": "He might be a nurse. He might be working at night."
        },
        {
          "q": "Your friend is smiling all day. What must be true?",
          "ph": "She must be …",
          "ex": "She must be very happy. She must have good news."
        }
      ]
    }
  }
};
