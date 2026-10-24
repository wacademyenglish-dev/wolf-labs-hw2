/* BURNT TOAST · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: passado simples (-ed e irregulares) + First/Then/Finally. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "burnt-toast",
  "titulo": "Burnt Toast",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ee2f96dad720/burnt-toast/img/hw-capa.webp",
  "alvo": "past simple: regular -ed (opened, watched, called), irregular (went, saw, made, ate); First, Then, Finally",
  "abrir": "What did you do last night?",
  "fecho": "Regular verbs take <b>-ed</b>: <i>watched, opened, called</i>. Some verbs change: <i>go → went, see → saw, make → made, eat → ate</i>. Put the story in order with <b>First, Then, Finally</b>.",
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
      "sub": "Mia and Leo in the hall after the alarm. A new scene, about 30 seconds.",
      "img": "https://wolf-labs.pages.dev/p/ee2f96dad720/burnt-toast/img/live-predio.webp",
      "leg": "The building, 11:40 PM",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the alarm woke me up last night at 11:40."
        },
        {
          "quem": "mia",
          "t": "Me too! First, I opened my door."
        },
        {
          "quem": "leo",
          "t": "I watched TV, and then I heard the alarm. I went outside."
        },
        {
          "quem": "mia",
          "t": "Then I saw smoke from apartment 2."
        },
        {
          "quem": "leo",
          "t": "Apartment 2? That is Ms. Reed."
        },
        {
          "quem": "mia",
          "t": "Yes. She made toast, and then she forgot it."
        },
        {
          "quem": "leo",
          "t": "Oh no! And then?"
        },
        {
          "quem": "mia",
          "t": "She opened the window and called the building."
        },
        {
          "quem": "leo",
          "t": "And the toast?"
        },
        {
          "quem": "mia",
          "t": "It burned. Finally, she ate cereal for dinner."
        }
      ],
      "perguntas": [
        {
          "q": "What did Leo do before the alarm?",
          "op": [
            "He watched TV",
            "He called the manager",
            "He ate cereal"
          ],
          "a": 0,
          "por": "I watched TV, and then I heard the alarm."
        },
        {
          "q": "Where did the smoke come from?",
          "op": [
            "Apartment 2",
            "Leo's door",
            "The street"
          ],
          "a": 0,
          "por": "Then I saw smoke from apartment 2."
        },
        {
          "q": "What did Ms. Reed eat at the end?",
          "op": [
            "Cereal",
            "Toast",
            "Pasta"
          ],
          "a": 0,
          "por": "Finally, she ate cereal for dinner."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the story. Hear it, then say it.",
      "frases": [
        {
          "t": "First, I opened my door, and then I went outside.",
          "img": "https://wolf-labs.pages.dev/p/ee2f96dad720/burnt-toast/img/alarme.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She made toast, but she forgot it.",
          "img": "https://wolf-labs.pages.dev/p/ee2f96dad720/burnt-toast/img/live-predio.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Finally, she called the building and ate cereal.",
          "img": "https://wolf-labs.pages.dev/p/ee2f96dad720/burnt-toast/img/live-predio.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Past tense and order words. Four quick ones.",
      "regra": "<b>-ed</b> for regular verbs · <b>went, saw, made, ate</b> change · <b>First, Then, Finally</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "First I watched TV and then I went to bed.",
          "aceita": [],
          "d": "Dica: <b>first</b> + a primeira ação, <b>then</b> + a segunda."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: past tense.",
          "mostra": "Yesterday I go to the gym.",
          "r": "Yesterday I went to the gym.",
          "aceita": [],
          "d": "Dica: go é irregular: <b>went</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: past tense.",
          "mostra": "She watch TV last night.",
          "r": "She watched TV last night.",
          "aceita": [],
          "d": "Dica: verbo regular no passado: <b>-ed</b> (watched)."
        },
        {
          "tipo": "escreve",
          "t": "Join them with First and Then.",
          "mostra": "I cooked dinner. I called my mother.",
          "r": "First I cooked dinner, then I called my mother.",
          "aceita": [
            "First, I cooked dinner. Then I called my mother.",
            "First I cooked dinner and then I called my mother.",
            "First, I cooked dinner, and then I called my mother.",
            "First I cooked dinner. Then I called my mother."
          ],
          "d": "Dica: <b>First</b> + a primeira ação, <b>then</b> + a segunda."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/ee2f96dad720/burnt-toast/img/live-predio.webp",
      "leg": "The building after the alarm",
      "pede": "Look at the picture: the building after the alarm. Write 2 or 3 sentences about your night last night. Use <b>First, Then</b> or <b>Finally</b>.",
      "ph": "First, I …",
      "ex": "First, I cooked rice. Then I watched a series. Finally, I went to bed."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you do last night? Say it in order.",
          "ph": "First, I … Then I …",
          "ex": "First, I called my mother. Then I watched a movie."
        },
        {
          "q": "What did you eat yesterday?",
          "ph": "I ate … I made …",
          "ex": "I ate rice and beans for lunch. I made a sandwich for dinner."
        }
      ]
    }
  }
};
