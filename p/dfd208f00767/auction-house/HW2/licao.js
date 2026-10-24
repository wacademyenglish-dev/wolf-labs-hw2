/* THE AUCTION HOUSE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: a / an / the + adjetivo. A1: dicas em português só nas notas (d). Só as imagens live-* (já escuras). Alvo de artigo/possessivo: HW2_ARTIGO_CONTA ligado. */
window.HW2_ARTIGO_CONTA = true;
window.HW2 = {
  "id": "auction-house",
  "titulo": "The Auction House",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/dfd208f00767/auction-house/img/live-leilao.webp",
  "alvo": "a / an (the SOUND after it: an old clock, a heavy box, an umbrella, a new umbrella) · the describing word in front of the thing (a small lamp, never a lamp small) · the second time, when we know which one: the",
  "abrir": "What is the oldest thing in your room?",
  "fecho": "<b>A</b> or <b>an</b> is the SOUND after it: <b>an old clock</b>, <b>a new clock</b>; <b>an umbrella</b>, <b>a new umbrella</b>. The describing word goes in front: <b>a small lamp</b>. The second time, we know which one: <b>the lamp</b>.",
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
      "sub": "Mia and Leo at an auction. A new scene, about 35 seconds.",
      "img": "https://wolf-labs.pages.dev/p/dfd208f00767/auction-house/img/live-leilao.webp",
      "leg": "The lots on the table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at lot one. It's an old clock."
        },
        {
          "quem": "mia",
          "t": "The clock is beautiful. Is it expensive?"
        },
        {
          "quem": "leo",
          "t": "Yes, it's an expensive clock. Lot two is a heavy box."
        },
        {
          "quem": "mia",
          "t": "A heavy box? What's in it?"
        },
        {
          "quem": "leo",
          "t": "I think there's an umbrella in the box. A new umbrella."
        },
        {
          "quem": "mia",
          "t": "I want the umbrella. The clock is too expensive."
        },
        {
          "quem": "leo",
          "t": "Lot three is a cheap lamp."
        },
        {
          "quem": "mia",
          "t": "A cheap lamp? Then I want the lamp, too."
        },
        {
          "quem": "leo",
          "t": "Going once, going twice... sold!"
        }
      ],
      "perguntas": [
        {
          "q": "What is lot one?",
          "op": [
            "An old clock",
            "A heavy box",
            "A cheap lamp"
          ],
          "a": 0,
          "por": "Lot one. It's an old clock."
        },
        {
          "q": "What is in the heavy box?",
          "op": [
            "A new umbrella",
            "An old clock",
            "A cheap lamp"
          ],
          "a": 0,
          "por": "There's an umbrella in the box. A new umbrella."
        }
      ]
    },
    "out": {
      "sub": "Three lots from the auction. Hear it, then say it.",
      "frases": [
        {
          "t": "Lot one is an old clock.",
          "img": "https://wolf-labs.pages.dev/p/dfd208f00767/auction-house/img/live-relogio.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "There is a heavy box on the table.",
          "img": "https://wolf-labs.pages.dev/p/dfd208f00767/auction-house/img/live-leilao.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I want the expensive watch.",
          "img": "https://wolf-labs.pages.dev/p/dfd208f00767/auction-house/img/live-duas.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "a, an or the? Four quick ones.",
      "regra": "<b>an</b> before a vowel SOUND · <b>a</b> before the rest · the describing word in front · the second time: <b>the</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "There is an old clock on the table.",
          "aceita": [],
          "d": "Dica: <b>old</b> começa com som de vogal: <b>an</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: a or an?",
          "mostra": "It is a old radio.",
          "r": "It is an old radio.",
          "aceita": [],
          "d": "Dica: <b>old</b> tem som de vogal: <b>an old</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "It is a box heavy.",
          "r": "It is a heavy box.",
          "aceita": [],
          "d": "Dica: a palavra que descreve vem antes: <b>a heavy box</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There is a lamp. A lamp is cheap.",
          "r": "There is a lamp. The lamp is cheap.",
          "aceita": [],
          "d": "Dica: segunda vez, já sabemos qual: <b>the lamp</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/dfd208f00767/auction-house/img/live-balanca.webp",
      "leg": "A scale on an old table",
      "pede": "Look at the picture: a scale on an old wooden table. Write 2 or 3 sentences: one lot with <b>a / an</b> and a describing word, then the same lot with <b>the</b>.",
      "ph": "Lot one is a / an … The … is …",
      "ex": "Lot one is an old scale. The scale is small, and it is very cheap."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is one thing on your desk? Describe it.",
          "ph": "I have a / an … The … is …",
          "ex": "I have a small lamp. The lamp is old."
        },
        {
          "q": "What is the oldest thing in your room?",
          "ph": "It's an old … The … is …",
          "ex": "It's an old guitar. The guitar is heavy."
        }
      ]
    }
  }
};
