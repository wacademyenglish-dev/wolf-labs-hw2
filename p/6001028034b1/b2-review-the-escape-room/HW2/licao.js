/* THE ESCAPE ROOM · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: wish / if only + had, must / might / can't have, shouldn't have. B2: nenhum português. */
window.HW2 = {
  "id": "b2-review-the-escape-room",
  "titulo": "The Escape Room",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/6001028034b1/b2-review-the-escape-room/img/live-capa.webp",
  "alvo": "I wish / if only + had + participle (regret about the past); shouldn't have + participle; speculating about the past: must have (sure), might / could have (maybe), can't have (sure it did not happen) + participle",
  "abrir": "Think of a mystery you never solved. What do you think happened?",
  "fecho": "<b>Must have</b> = sure it happened. <b>Might / could have</b> = maybe. <b>Can't have</b> = sure it did not happen. Always + the past participle: <i>He must have gone.</i> A regret: <b>I wish I had</b> + participle, <b>if only I had</b> + participle. <b>Shouldn't have</b> + participle: it was a mistake.",
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
      "sub": "Mia and Leo in an escape room. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/6001028034b1/b2-review-the-escape-room/img/live-capa.webp",
      "leg": "The captain's cabin",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at this cabin. The captain's coat is still here. He must have left in a hurry."
        },
        {
          "quem": "mia",
          "t": "Maybe. But the lantern is cold, so he can't have left last night."
        },
        {
          "quem": "leo",
          "t": "True. And there's a small boat on the beach. He might have sailed away alone."
        },
        {
          "quem": "mia",
          "t": "Or somebody could have helped him. There are two cups on the table."
        },
        {
          "quem": "leo",
          "t": "Two cups! I wish the clock worked. If only we knew the time."
        },
        {
          "quem": "mia",
          "t": "Never mind. Look, this note says: I shouldn't have hidden the key in the chest."
        },
        {
          "quem": "leo",
          "t": "Ha! He shouldn't have. Now we have to find it. I wish he had left a clearer clue."
        },
        {
          "quem": "mia",
          "t": "The chest has a four-digit lock. The old map says 1890."
        },
        {
          "quem": "leo",
          "t": "Try it. It opens! The key was in there all along."
        },
        {
          "quem": "mia",
          "t": "We have fifteen minutes left. If only I had counted the clues earlier."
        }
      ],
      "perguntas": [
        {
          "q": "Why can't the captain have left last night?",
          "op": [
            "The lantern is cold",
            "The door was open",
            "His coat was gone"
          ],
          "a": 0,
          "por": "The lantern is cold, so he can't have left last night."
        },
        {
          "q": "What does the note say?",
          "op": [
            "He shouldn't have hidden the key in the chest",
            "He should have burned the map",
            "He wished he had sailed earlier"
          ],
          "a": 0,
          "por": "I shouldn't have hidden the key in the chest."
        },
        {
          "q": "What does Leo wish about the captain?",
          "op": [
            "That he had left a clearer clue",
            "That he had stayed in the cabin",
            "That he had taken the key"
          ],
          "a": 0,
          "por": "I wish he had left a clearer clue."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the cabin. Hear it, then say it.",
      "frases": [
        {
          "t": "He must have left in a hurry, because his coat is still here.",
          "img": "https://wolf-labs.pages.dev/p/6001028034b1/b2-review-the-escape-room/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "He might have sailed away alone in the small boat.",
          "img": "https://wolf-labs.pages.dev/p/6001028034b1/b2-review-the-escape-room/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I wish I had counted the clues earlier.",
          "img": "https://wolf-labs.pages.dev/p/6001028034b1/b2-review-the-escape-room/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Must have, can't have, wish. Four quick ones.",
      "regra": "<b>must have</b> = sure · <b>might / could have</b> = maybe · <b>can't have</b> = sure it did not happen · <b>I wish I had</b> + participle · <b>shouldn't have</b> + participle.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The captain can't have left last night.",
          "aceita": [],
          "d": "Hint: sure it did not happen: <b>can't have</b> + participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I wish I would have counted the clues.",
          "r": "I wish I had counted the clues.",
          "aceita": [],
          "d": "Hint: a wish about the past needs <b>had</b> + participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He must have went to the beach.",
          "r": "He must have gone to the beach.",
          "aceita": [],
          "d": "Hint: <b>must have</b> + the past participle: <i>gone</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I shouldn't have hide the key.",
          "r": "I shouldn't have hidden the key.",
          "aceita": [
            "I should not have hidden the key."
          ],
          "d": "Hint: after <b>shouldn't have</b>, use the past participle: <i>hidden</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/6001028034b1/b2-review-the-escape-room/img/live-conversa.webp",
      "leg": "An empty boat on a dark beach",
      "pede": "Look at the picture: an empty boat on a dark beach at night. Write 2 or 3 sentences about what might have happened to its owner. Use <b>must have</b>, <b>might have</b> or <b>can't have</b>.",
      "ph": "The owner might have …",
      "ex": "The owner must have left in a hurry. He might have walked to the village. He can't have sailed away, because the boat is still here."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a time you were late. What do you wish you had done differently?",
          "ph": "I wish I had …",
          "ex": "I wish I had left home ten minutes earlier."
        },
        {
          "q": "A friend did not answer your messages all day. What might have happened?",
          "ph": "Her phone might have …",
          "ex": "Her phone might have died, or she must have been very busy."
        }
      ]
    }
  }
};
