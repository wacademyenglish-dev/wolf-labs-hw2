/* HAVING MISSED THE TRAIN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: participle clauses. B2: no Portuguese. Only live-* images (all dark). */
window.HW2 = {
  "id": "having-missed-the-train",
  "titulo": "Having Missed the Train",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/a807be5239d4/having-missed-the-train/img/live-capa.webp",
  "alvo": "participle clauses: Having + past participle (first this, then that), -ing (at the same time, or the reason), Not + -ing (negative), past participle alone (done to it); the subject right after the comma is the one who does the first part; never Having miss, Don't knowing, a dangling subject",
  "abrir": "What is the last thing you missed, and what did you do instead?",
  "fecho": "<b>Having + participle</b> = first this, then that: <i>Having missed the bus, she took a taxi.</i> <b>-ing</b> = same time or reason: <i>Walking home, I got wet.</i> <b>Not + -ing</b>: <i>Not knowing the way, he asked.</i> <b>Participle alone</b> = done to it: <i>Left alone, the bag looked odd.</i> The subject after the comma is the one who does the first part.",
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
      "sub": "Mia tells Leo about a night train. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/a807be5239d4/having-missed-the-train/img/live-plataforma.webp",
      "leg": "An empty platform at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you won't believe my trip home. Having missed the last bus, I took the night train."
        },
        {
          "quem": "leo",
          "t": "The night train? On your own?"
        },
        {
          "quem": "mia",
          "t": "On my own. Walking into my compartment, I found a brown bag on the seat. Nobody was there."
        },
        {
          "quem": "leo",
          "t": "Did you touch it?"
        },
        {
          "quem": "mia",
          "t": "No. Not knowing whose it was, I went to find the conductor."
        },
        {
          "quem": "leo",
          "t": "Smart. What did she say?"
        },
        {
          "quem": "mia",
          "t": "She said that, left alone, a bag always looks strange. She took it away and checked it."
        },
        {
          "quem": "leo",
          "t": "And?"
        },
        {
          "quem": "mia",
          "t": "It belonged to a sleeping student in the next compartment. Feeling silly, I went back and tried to sleep."
        },
        {
          "quem": "leo",
          "t": "Sitting here with my coffee, I think you should write a thriller."
        }
      ],
      "perguntas": [
        {
          "q": "Why did Mia take the night train?",
          "op": [
            "She had missed the last bus",
            "She wanted a quiet trip",
            "Her car broke down"
          ],
          "a": 0,
          "por": "Having missed the last bus, I took the night train."
        },
        {
          "q": "What did Mia find in her compartment?",
          "op": [
            "A brown bag on the seat",
            "A sleeping student",
            "A conductor"
          ],
          "a": 0,
          "por": "I found a brown bag on the seat."
        },
        {
          "q": "Why did Mia look for the conductor?",
          "op": [
            "She didn't know whose bag it was",
            "She had lost her ticket",
            "She wanted a coffee"
          ],
          "a": 0,
          "por": "Not knowing whose it was, I went to find the conductor."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the night. Hear it, then say it.",
      "frases": [
        {
          "t": "Having missed the last bus, I took the night train.",
          "img": "https://wolf-labs.pages.dev/p/a807be5239d4/having-missed-the-train/img/live-plataforma.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Walking into the compartment, I saw a brown bag.",
          "img": "https://wolf-labs.pages.dev/p/a807be5239d4/having-missed-the-train/img/live-cabine.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Not knowing whose it was, I called the conductor.",
          "img": "https://wolf-labs.pages.dev/p/a807be5239d4/having-missed-the-train/img/live-maleta.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Having, -ing, Not -ing, or done to it? Four quick ones.",
      "regra": "<b>Having</b> + participle · <b>-ing</b> · <b>Not</b> + -ing · participle alone · the subject after the comma does the first part.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Having finished the report, he went home.",
          "aceita": [],
          "d": "Hint: <b>Having</b> + past participle: first this, then that."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Having lose his keys, he waited outside.",
          "r": "Having lost his keys, he waited outside.",
          "aceita": [],
          "d": "Hint: after <b>having</b>, use the past participle: <b>lost</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Don't knowing the way, he asked twice.",
          "r": "Not knowing the way, he asked twice.",
          "aceita": [],
          "d": "Hint: the negative of this structure is <b>Not + -ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Leaving alone, the bag looked odd.",
          "r": "Left alone, the bag looked odd.",
          "aceita": [],
          "d": "Hint: something was done to the bag, so use the participle: <b>left</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/a807be5239d4/having-missed-the-train/img/live-maleta.webp",
      "leg": "A brown bag on a train seat",
      "pede": "Look at the picture: a brown bag on a train seat. Write 2 or 3 sentences about a trip or a day when something went wrong. Use <b>Having + participle</b>, <b>-ing</b> or <b>Not + -ing</b>.",
      "ph": "Having missed …, I …",
      "ex": "Having missed my bus, I walked home. Walking in the rain, I felt tired. Not knowing the way, I asked a stranger."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you once miss that turned out to be lucky?",
          "ph": "Having missed …, I …",
          "ex": "Having missed my flight, I met an old friend at the airport."
        },
        {
          "q": "What do you usually do while you travel? Start with an -ing word.",
          "ph": "Sitting …, I usually …",
          "ex": "Waiting at the station, I usually read the news."
        }
      ]
    }
  }
};
