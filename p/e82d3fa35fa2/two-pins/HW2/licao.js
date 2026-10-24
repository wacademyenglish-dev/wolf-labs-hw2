/* TWO PINS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: I'm from / I live in / I was born in. A1: dicas em português só nas notas (d). Só as imagens live-* (já escuras). */
window.HW2 = {
  "id": "two-pins",
  "titulo": "Two Pins",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e82d3fa35fa2/two-pins/img/live-cortica.webp",
  "alvo": "I'm from (the old city) · I live in (the city now) · I was born in · a house / an apartment · with my family / on my own · Where are you from? Where do you live?",
  "abrir": "Where are you from? And where do you live now?",
  "fecho": "<b>I'm from</b> = the old city. <b>I live in</b> = the city now (never <i>live from</i>). <b>I was born in</b> = the first pin. At home: <b>in a house</b> or <b>in an apartment</b>, <b>with my family</b> or <b>on my own</b>.",
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
      "sub": "Mia and Leo talk about home. A new scene, about 35 seconds.",
      "img": "https://wolf-labs.pages.dev/p/e82d3fa35fa2/two-pins/img/live-cidade-nova.webp",
      "leg": "A big city at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, where are you from?"
        },
        {
          "quem": "leo",
          "t": "I'm from Boston. But I live in Chicago now."
        },
        {
          "quem": "mia",
          "t": "Do you live in a house?"
        },
        {
          "quem": "leo",
          "t": "No, I live in an apartment, with my roommate."
        },
        {
          "quem": "mia",
          "t": "I'm from Seattle, and I live in Denver."
        },
        {
          "quem": "leo",
          "t": "Do you live with your family?"
        },
        {
          "quem": "mia",
          "t": "No, I live on my own. My family lives in Seattle."
        },
        {
          "quem": "leo",
          "t": "Where were you born?"
        },
        {
          "quem": "mia",
          "t": "I was born in Portland, but I'm from Seattle."
        },
        {
          "quem": "leo",
          "t": "Two cities, two pins!"
        }
      ],
      "perguntas": [
        {
          "q": "Where does Leo live now?",
          "op": [
            "In Chicago",
            "In Boston",
            "In Denver"
          ],
          "a": 0,
          "por": "I live in Chicago now."
        },
        {
          "q": "Who does Mia live with?",
          "op": [
            "Nobody: she lives on her own",
            "With her family",
            "With a roommate"
          ],
          "a": 0,
          "por": "No, I live on my own."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about your two pins. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm from Boston, and I live in Chicago.",
          "img": "https://wolf-labs.pages.dev/p/e82d3fa35fa2/two-pins/img/live-cidade-velha.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I live in an apartment with my roommate.",
          "img": "https://wolf-labs.pages.dev/p/e82d3fa35fa2/two-pins/img/live-cidade-nova.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I was born in Portland.",
          "img": "https://wolf-labs.pages.dev/p/e82d3fa35fa2/two-pins/img/live-cortica.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "from, in or born? Four quick ones.",
      "regra": "<b>I'm from</b> = old city · <b>I live in</b> = city now · <b>I was born in</b> · <b>Where do you live?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I live in an apartment with my roommate.",
          "aceita": [],
          "d": "Dica: <b>live in</b> + a casa, depois <b>with</b> + a pessoa."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I live from Chicago.",
          "r": "I live in Chicago.",
          "aceita": [],
          "d": "Dica: <b>live</b> sempre com <b>in</b>. <b>From</b> é para a cidade de origem."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I born in Portland.",
          "r": "I was born in Portland.",
          "aceita": [],
          "d": "Dica: nascer é passado: <b>I was born</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Where you live now?",
          "r": "Where do you live now?",
          "aceita": [],
          "d": "Dica: pergunta pede <b>do</b>: Where <b>do</b> you live?"
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e82d3fa35fa2/two-pins/img/live-cortica.webp",
      "leg": "Two pins and a string",
      "pede": "Look at the picture: two pins and a string. Write 2 or 3 sentences: where you are from and where you live now. Use <b>I'm from</b> and <b>I live in</b>.",
      "ph": "I'm from … and I live in …",
      "ex": "I'm from Recife, and I live in São Paulo. I live in an apartment with my family."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where were you born? Where are you from?",
          "ph": "I was born in … I'm from …",
          "ex": "I was born in Lyon, but I'm from Marseille."
        },
        {
          "q": "Where do you live now? Who do you live with?",
          "ph": "I live in … with … / on my own.",
          "ex": "I live in Madrid, in a small apartment. I live with my brother."
        }
      ]
    }
  }
};
