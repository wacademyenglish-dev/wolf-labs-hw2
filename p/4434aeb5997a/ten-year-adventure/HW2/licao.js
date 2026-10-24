/* AFTER THE JOURNEY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: tempo antes do substantivo (a ten-year journey). B1: nenhum português. Filme: sem falas do trailer; diálogo original. */
window.HW2 = {
  "id": "ten-year-adventure",
  "titulo": "After the Journey",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4434aeb5997a/ten-year-adventure/img/live-diario.webp",
  "alvo": "time before a noun is singular with a hyphen: a ten-year journey, an eight-hour sleep, a thousand-year-old elf; vs. it lasted ten years",
  "abrir": "Is ten years a long time for you?",
  "fecho": "On its own, time keeps its S: <i>It lasted ten years.</i> Before a noun it becomes one unit, singular, with a hyphen: <i>a ten-<b>year</b> journey, an eight-<b>hour</b> sleep, a thousand-<b>year</b>-old elf.</i>",
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
      "sub": "Mia and Leo talk about an elf anime. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/4434aeb5997a/ten-year-adventure/img/live-mapa.webp",
      "leg": "The map of the journey",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I finished that elf anime last night. It's about a ten-year journey."
        },
        {
          "quem": "leo",
          "t": "The one with Frieren? I heard it's slow."
        },
        {
          "quem": "mia",
          "t": "It's calm. The hero's party travels for ten years, and then the real story starts after the trip."
        },
        {
          "quem": "leo",
          "t": "After the trip? That's unusual."
        },
        {
          "quem": "mia",
          "t": "Yes! Frieren is a thousand-year-old elf, so for her ten years is a short time."
        },
        {
          "quem": "leo",
          "t": "So a ten-year trip is like a two-day weekend for her."
        },
        {
          "quem": "mia",
          "t": "Exactly. Fifty years later, they meet again to watch the meteors."
        },
        {
          "quem": "leo",
          "t": "Is that a long wait for a human?"
        },
        {
          "quem": "mia",
          "t": "Very long. A fifty-year wait is most of a life."
        },
        {
          "quem": "leo",
          "t": "You convinced me. I'm starting tonight, with a ten-minute break for dinner."
        }
      ],
      "perguntas": [
        {
          "q": "How long was the hero's journey?",
          "op": [
            "Ten years",
            "Fifty years",
            "A thousand years"
          ],
          "a": 0,
          "por": "The hero's party travels for ten years."
        },
        {
          "q": "Why is ten years short for Frieren?",
          "op": [
            "She is a thousand-year-old elf",
            "She travels very fast",
            "She forgot the trip"
          ],
          "a": 0,
          "por": "Frieren is a thousand-year-old elf, so for her ten years is a short time."
        },
        {
          "q": "What will Leo do tonight?",
          "op": [
            "Start the anime",
            "Meet Frieren",
            "Wait fifty years"
          ],
          "a": 0,
          "por": "I'm starting tonight, with a ten-minute break for dinner."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the story. Hear it, then say it.",
      "frases": [
        {
          "t": "It was a ten-year journey, but for her it felt short.",
          "img": "https://wolf-labs.pages.dev/p/4434aeb5997a/ten-year-adventure/img/live-mapa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She is a thousand-year-old elf with a very long memory.",
          "img": "https://wolf-labs.pages.dev/p/4434aeb5997a/ten-year-adventure/img/live-flores.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "They met again to keep a fifty-year-old promise.",
          "img": "https://wolf-labs.pages.dev/p/4434aeb5997a/ten-year-adventure/img/live-chuva.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Time before a noun. Four quick ones.",
      "regra": "<b>ten years</b> (on its own) → <b>a ten-year</b> journey (before a noun: singular + hyphen) · an eight-<b>hour</b> sleep · a three-<b>day</b> walk.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She took a three-day walk to the village.",
          "aceita": [],
          "d": "Hint: three-<b>day</b>, singular, before the noun <i>walk</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It was a ten-years journey.",
          "r": "It was a ten-year journey.",
          "aceita": [],
          "d": "Hint: before a noun, the time word stays singular: <b>ten-year</b>."
        },
        {
          "tipo": "escreve",
          "t": "Say it with the time in front of the noun.",
          "mostra": "The trip lasted two months.",
          "r": "It was a two-month trip.",
          "aceita": [
            "The trip was a two-month trip.",
            "She took a two-month trip.",
            "He took a two-month trip.",
            "It was a two-month journey."
          ],
          "d": "Hint: <b>two-month</b> + trip: no S, one hyphen."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She is a thousand-years-old elf.",
          "r": "She is a thousand-year-old elf.",
          "aceita": [],
          "d": "Hint: <b>a thousand-year-old</b> elf: year, not years."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4434aeb5997a/ten-year-adventure/img/live-grimorio.webp",
      "leg": "An old journal from the road",
      "pede": "Look at the picture: an old journal from the road. Write 2 or 3 sentences about a trip or a long wait in your life. Put the time before a noun: <b>a two-day trip, a ten-year wait</b>.",
      "ph": "I took a … trip.",
      "ex": "Last year I took a three-day trip to the coast. It was a ten-hour drive, but it was worth it."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is the longest trip you have ever taken? Name it with the time in front.",
          "ph": "My longest trip was a …-hour / …-day …",
          "ex": "My longest trip was a twelve-hour bus ride to the coast."
        },
        {
          "q": "What do you do every day that takes about ten minutes?",
          "ph": "I have a …-minute … every day.",
          "ex": "I have a ten-minute walk every morning. It clears my head."
        }
      ]
    }
  }
};
