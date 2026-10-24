/* THE HOTEL INSPECTOR · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js. JSON puro depois do "=". Alvo: too much / many, enough, few / little, both / neither, -ed / -ing. B1: nenhum português. */
window.HW2 = {
  "id": "the-hotel-inspector",
  "titulo": "The Hotel Inspector",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4c1c29a0dc0e/b1-review-the-hotel-inspector/img/live-capa.webp",
  "alvo": "Unit 4 review: too much / too many / not enough; a few x few, a little x little; both / either / neither; -ed x -ing adjectives; strong adjectives (absolutely exhausted)",
  "abrir": "Think of a place you stayed in. What was too much?",
  "fecho": "<b>too much</b> + uncountable, <b>too many</b> + countable, <b>enough</b> after an adjective. <b>a few / a little</b> = some. <b>Both / either / neither</b> for two things. <b>-ed</b> = how I feel (<i>bored</i>), <b>-ing</b> = what causes it (<i>boring</i>).",
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
      "sub": "Mia tells Leo, the hotel inspector, about her stay at the Hotel Marlow. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/4c1c29a0dc0e/b1-review-the-hotel-inspector/img/live-conversa.webp",
      "leg": "A hotel lobby at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, how was your stay at the Hotel Marlow?"
        },
        {
          "quem": "mia",
          "t": "The room was absolutely tiny, but clean. And there was too much noise from the street."
        },
        {
          "quem": "leo",
          "t": "Was there enough hot water?"
        },
        {
          "quem": "mia",
          "t": "Only a little hot water, and there weren't enough pillows."
        },
        {
          "quem": "leo",
          "t": "What about the two restaurants? Did you like both of them?"
        },
        {
          "quem": "mia",
          "t": "Neither of them, really. Both were too expensive, and there were too many people."
        },
        {
          "quem": "leo",
          "t": "Oh no. How did you feel at the end?"
        },
        {
          "quem": "mia",
          "t": "I was exhausted. The Wi-Fi was terrible, and I was really annoyed."
        },
        {
          "quem": "leo",
          "t": "Thank you, Mia. I'm giving the hotel two stars."
        },
        {
          "quem": "mia",
          "t": "Fair. But the lobby is beautiful!"
        }
      ],
      "perguntas": [
        {
          "q": "What was wrong with Mia's room?",
          "op": [
            "Too much noise from the street",
            "Too many stairs",
            "Not enough light"
          ],
          "a": 0,
          "por": "There was too much noise from the street."
        },
        {
          "q": "What did Mia say about the two restaurants?",
          "op": [
            "She liked neither of them",
            "She liked both of them",
            "She liked only one"
          ],
          "a": 0,
          "por": "Neither of them, really. Both were too expensive."
        },
        {
          "q": "How did Mia feel at the end?",
          "op": [
            "Exhausted and annoyed",
            "Relaxed and happy",
            "Bored and sleepy"
          ],
          "a": 0,
          "por": "I was exhausted, and I was really annoyed."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a stay. Hear it, then say it.",
      "frases": [
        {
          "t": "There were too many people and not enough chairs.",
          "img": "https://wolf-labs.pages.dev/p/4c1c29a0dc0e/b1-review-the-hotel-inspector/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I only have a little time, but a few good ideas.",
          "img": "https://wolf-labs.pages.dev/p/4c1c29a0dc0e/b1-review-the-hotel-inspector/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The movie was boring, so I felt really bored.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "too much / many, enough, a little, -ed / -ing. Four quick ones.",
      "regra": "<b>too much</b> + uncountable · <b>too many</b> + countable · <b>not enough</b> · <b>a few / a little</b> · <b>-ed</b> (feeling) × <b>-ing</b> (cause)",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "There was not enough milk for everyone.",
          "aceita": [],
          "d": "Hint: <b>not enough</b> + noun."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There were too much people in the lobby.",
          "r": "There were too many people in the lobby.",
          "aceita": [],
          "d": "Hint: <i>people</i> is countable, so <b>too many</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I was very boring at the party, so I went home.",
          "r": "I was very bored at the party, so I went home.",
          "aceita": [],
          "d": "Hint: how I feel = <b>-ed</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I have only a few water in my bottle.",
          "r": "I have only a little water in my bottle.",
          "aceita": [],
          "d": "Hint: <i>water</i> is uncountable, so <b>a little</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4c1c29a0dc0e/b1-review-the-hotel-inspector/img/live-conversa.webp",
      "leg": "A hotel lobby at night",
      "pede": "Look at the picture: a hotel lobby at night. Write 2 or 3 sentences about a hotel or a place you stayed in: what was too much, what was not enough, and how you felt. Use <b>too much / too many</b>, <b>not enough</b> and <b>-ed / -ing</b>.",
      "ph": "The room was … but there was too …",
      "ex": "The room was absolutely beautiful, but there were too many mosquitoes. There was not enough hot water. I felt exhausted, but I was never bored."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a place you visited. What was too much? What was not enough?",
          "ph": "There was too … and not enough …",
          "ex": "There was too much traffic and not enough shade."
        },
        {
          "q": "How do you feel at the end of a long week? Use an -ed word and an -ing word.",
          "ph": "I feel … because the week is …",
          "ex": "I feel exhausted because my week is always tiring, but I'm never bored."
        }
      ]
    }
  }
};
