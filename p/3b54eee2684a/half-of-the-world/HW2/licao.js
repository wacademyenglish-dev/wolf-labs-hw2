/* HALF OF THE WORLD · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: all of / most of / half of / some of / none of. B1: nenhum português. Só live-capa (escura). */
window.HW2 = {
  "id": "half-of-the-world",
  "titulo": "Half of the World",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/3b54eee2684a/half-of-the-world/img/live-capa.jpg",
  "alvo": "quantifiers: all of / most of / half of / some of / none of + the, my, them; most + noun without of (most people); never the most of, never nobody of",
  "abrir": "How many of your friends speak English?",
  "fecho": "From all to none: <b>All of</b> my friends · <b>Most of</b> them · <b>Half of</b> the world · <b>Some of</b> us · <b>None of</b> my family. With a noun alone, no <i>of</i>: <b>Most people</b>. With a person word, <i>them</i>: <i>Most of them</i>. Never <i>the most of</i>, never <i>nobody of</i>.",
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
      "sub": "Mia and Leo talk about a class survey. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/3b54eee2684a/half-of-the-world/img/live-capa.jpg",
      "leg": "A big round hall with a globe in the middle",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, how did your survey go? Did your classmates answer it?"
        },
        {
          "quem": "mia",
          "t": "Most of them did. I asked how many of them use their phone at night."
        },
        {
          "quem": "leo",
          "t": "And what did they say?"
        },
        {
          "quem": "mia",
          "t": "All of them said yes. Even the teacher!"
        },
        {
          "quem": "leo",
          "t": "Really? What do they do with it?"
        },
        {
          "quem": "mia",
          "t": "Half of them check it before bed, and some of them check it at three in the morning."
        },
        {
          "quem": "leo",
          "t": "Three in the morning? None of my friends do that."
        },
        {
          "quem": "mia",
          "t": "None of them? I don't believe you. Most people do it, I think."
        },
        {
          "quem": "leo",
          "t": "Maybe some of them do. But half of my friends leave the phone in the kitchen at night."
        },
        {
          "quem": "mia",
          "t": "That's smart. Maybe I'll copy them."
        }
      ],
      "perguntas": [
        {
          "q": "How many of Mia's classmates use their phone at night?",
          "op": [
            "All of them",
            "None of them",
            "Half of them"
          ],
          "a": 0,
          "por": "All of them said yes. Even the teacher!"
        },
        {
          "q": "What do some of the classmates do at three in the morning?",
          "op": [
            "They check their phones",
            "They call the teacher",
            "They do the survey"
          ],
          "a": 0,
          "por": "Some of them check it at three in the morning."
        },
        {
          "q": "Where do half of Leo's friends leave the phone at night?",
          "op": [
            "In the kitchen",
            "In the bedroom",
            "In the bag"
          ],
          "a": 0,
          "por": "Half of my friends leave the phone in the kitchen at night."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about how many. Hear it, then say it.",
      "frases": [
        {
          "t": "All of my classmates answered the survey.",
          "img": "https://wolf-labs.pages.dev/p/3b54eee2684a/half-of-the-world/img/live-capa.jpg",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Half of the people in my office drink coffee.",
          "img": "https://wolf-labs.pages.dev/p/3b54eee2684a/half-of-the-world/img/live-capa.jpg",
          "au": "audio/say2.mp3"
        },
        {
          "t": "None of my friends live downtown, but most of them live close.",
          "img": "https://wolf-labs.pages.dev/p/3b54eee2684a/half-of-the-world/img/live-capa.jpg",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "all, most, half, some, none. Four quick ones.",
      "regra": "<b>all of</b> · <b>most of</b> · <b>half of</b> · <b>some of</b> · <b>none of</b> + them / my friends · <b>most</b> + noun, no of.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Most of my friends speak English.",
          "aceita": [],
          "d": "Hint: <b>most of</b> + my friends, then the verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Nobody of my friends came to the party.",
          "r": "None of my friends came to the party.",
          "aceita": [],
          "d": "Hint: no one from a group is <b>none of</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The most of people in my city like football.",
          "r": "Most people in my city like football.",
          "aceita": [],
          "d": "Hint: with a noun alone, say <b>most people</b>, with no <i>the</i> and no <i>of</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Most of they live near here.",
          "r": "Most of them live near here.",
          "aceita": [],
          "d": "Hint: after <b>of</b>, use <b>them</b>, not <i>they</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/3b54eee2684a/half-of-the-world/img/live-capa.jpg",
      "leg": "A big round hall with a globe in the middle",
      "pede": "Look at the picture: a huge round hall with a globe in the middle, ready for a speech. Write 2 or 3 sentences about the people around you: family, friends or work. Use <b>all of</b>, <b>most of</b>, <b>half of</b>, <b>some of</b> or <b>none of</b>.",
      "ph": "Most of my friends … None of …",
      "ex": "Most of my friends live in my city. Half of my family speaks English. None of my colleagues drinks tea."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How many of your friends speak English? And your family?",
          "ph": "Some of my friends … None of …",
          "ex": "Some of my friends speak English, but none of my family does."
        },
        {
          "q": "Think about the people at your work or school. What do most of them do at lunch?",
          "ph": "Most of them … Half of them …",
          "ex": "Most of them eat at their desks, and half of them drink coffee after lunch."
        }
      ]
    }
  }
};
