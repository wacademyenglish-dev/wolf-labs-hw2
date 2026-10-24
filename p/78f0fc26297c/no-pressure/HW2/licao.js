/* NO PRESSURE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: want / expect / ask / tell + pessoa + to. B1: nenhum português. Só live-* escuras. Falas originais. */
window.HW2 = {
  "id": "no-pressure",
  "titulo": "No Pressure",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/78f0fc26297c/no-pressure/img/live-capa.webp",
  "alvo": "want / expect / ask / tell + person + to + verb (She wants me to go); the negative: doesn't want me to go, told me not to go; object pronouns (him, her, them); never want that I go, never I want he to",
  "abrir": "Who expects a lot from you?",
  "fecho": "<b>want / expect / ask / tell + person + to + verb</b>: <i>She wants me to come.</i> Use the object: <i>me, him, her, us, them</i>. The negative: <i>He doesn't want me to go. She told me not to be late.</i> Never <i>wants that I go</i>.",
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
      "sub": "Mia gets a letter from a school. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/78f0fc26297c/no-pressure/img/live-corujas.webp",
      "leg": "A tower full of owls",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you got a letter by owl! Who wrote to you?"
        },
        {
          "quem": "mia",
          "t": "The headmaster. He wants me to come to the school on Monday."
        },
        {
          "quem": "leo",
          "t": "What does he expect you to bring?"
        },
        {
          "quem": "mia",
          "t": "He expects me to bring a book and a warm coat. He told me not to bring my phone."
        },
        {
          "quem": "leo",
          "t": "And your parents? Do they want you to go?"
        },
        {
          "quem": "mia",
          "t": "My mother wants me to stay, but my father wants me to try."
        },
        {
          "quem": "leo",
          "t": "What do you want to do?"
        },
        {
          "quem": "mia",
          "t": "I want them to be proud of me. They asked me to write every week."
        },
        {
          "quem": "leo",
          "t": "That's easy. I'd like you to send me an owl, too."
        },
        {
          "quem": "mia",
          "t": "I will. Don't worry."
        }
      ],
      "perguntas": [
        {
          "q": "What does the headmaster want Mia to do?",
          "op": [
            "Come to the school on Monday",
            "Stay at home",
            "Write a book"
          ],
          "a": 0,
          "por": "He wants me to come to the school on Monday."
        },
        {
          "q": "What did he tell Mia not to bring?",
          "op": [
            "Her phone",
            "A warm coat",
            "A book"
          ],
          "a": 0,
          "por": "He told me not to bring my phone."
        },
        {
          "q": "What did her parents ask her to do?",
          "op": [
            "Write every week",
            "Call every day",
            "Send a photo"
          ],
          "a": 0,
          "por": "They asked me to write every week."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about what people want. Hear it, then say it.",
      "frases": [
        {
          "t": "He wants me to come on Monday.",
          "img": "https://wolf-labs.pages.dev/p/78f0fc26297c/no-pressure/img/live-chapeu.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "They expect us to bring a warm coat.",
          "img": "https://wolf-labs.pages.dev/p/78f0fc26297c/no-pressure/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She told him not to bring his phone.",
          "img": "https://wolf-labs.pages.dev/p/78f0fc26297c/no-pressure/img/live-mapa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "want, expect, ask and tell. Four quick ones.",
      "regra": "<b>want / expect / ask / tell</b> + person + <b>to</b> + verb · <b>doesn't want me to</b> · <b>told me not to</b> · him, her, them.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She wants me to come on Monday.",
          "aceita": [],
          "d": "Hint: <b>wants</b> + me + <b>to</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "She wants that I go to school.",
          "r": "She wants me to go to school.",
          "aceita": [],
          "d": "Hint: no <i>that</i>. Use person + <b>to</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I want he to stay home.",
          "r": "I want him to stay home.",
          "aceita": [],
          "d": "Hint: after <b>want</b>, use the object pronoun: <i>him</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "He told me to don't be late.",
          "r": "He told me not to be late.",
          "aceita": [
            "He told me to not be late."
          ],
          "d": "Hint: the negative goes before <b>to</b>: <i>not to be</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/78f0fc26297c/no-pressure/img/live-lareira.webp",
      "leg": "Letters flying out of a fireplace",
      "pede": "Look at the picture: letters flying out of a fireplace. Write 2 or 3 sentences about people who want you to do something. Use <b>want, expect, ask</b> or <b>tell</b> + person + <b>to</b>.",
      "ph": "My … wants me to …",
      "ex": "My boss wants me to finish early. My mother expects me to call her every day. She told me not to forget my keys."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who expects a lot from you? What do they expect you to do?",
          "ph": "My … expects me to …",
          "ex": "My father expects me to study hard."
        },
        {
          "q": "What did someone ask you to do this week?",
          "ph": "… asked me to …",
          "ex": "My neighbor asked me to water her plants."
        }
      ]
    }
  }
};
