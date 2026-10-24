/* I HAD IT TAKEN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: causative have / get + participle. B2: nenhum portugues. Jogo: falas originais, sem varinhas, sem violencia. So imagens live-* escuras (<50). */
window.HW2 = {
  "id": "i-had-it-taken",
  "titulo": "I Had It Taken",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/5f888a9ff183/i-had-it-taken/img/live-robes.webp",
  "alvo": "causative: have / get + thing + participle (I had my robes made); have someone + plain verb (I had the librarian find it); get someone + to + verb (I got her to find it); never I made / repaired it myself when someone else did it",
  "abrir": "What is something you never do yourself?",
  "fecho": "Someone else did it for you? <b>Have / get + thing + participle</b>: <i>I had my robes made. I got my letter sent.</i> With the person: <b>have someone + plain verb</b> (<i>I had the librarian find it</i>), <b>get someone + to + verb</b> (<i>I got her to find it</i>). Not <i>I made my robes</i>, if a tailor made them.",
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
      "sub": "Mia and Leo in the village below the castle. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/5f888a9ff183/i-had-it-taken/img/live-village.webp",
      "leg": "The village at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, new robes? They look great. Did you make them yourself?"
        },
        {
          "quem": "leo",
          "t": "No, I can't sew. I had them made in the village. The tailor finished them in two days."
        },
        {
          "quem": "mia",
          "t": "And your trunk? It is very heavy."
        },
        {
          "quem": "leo",
          "t": "I had it carried to the tower. I paid a boy one silver coin."
        },
        {
          "quem": "mia",
          "t": "What about the old book from the library? Did you copy it by hand?"
        },
        {
          "quem": "leo",
          "t": "No. I got the librarian to copy it. I had the pages bound, too."
        },
        {
          "quem": "mia",
          "t": "Pages bound? Can I have mine bound the same way?"
        },
        {
          "quem": "leo",
          "t": "Of course. Get the librarian to do it. She charges two coins."
        },
        {
          "quem": "mia",
          "t": "And your family? Do they know you arrived?"
        },
        {
          "quem": "leo",
          "t": "I had a letter sent by owl this morning."
        },
        {
          "quem": "mia",
          "t": "You really have everything done for you!"
        },
        {
          "quem": "leo",
          "t": "Not everything. I am learning to carry my own trunk."
        }
      ],
      "perguntas": [
        {
          "q": "Why didn't Leo make the robes himself?",
          "op": [
            "He can't sew, so he had them made",
            "He lost the cloth",
            "He prefers old robes"
          ],
          "a": 0,
          "por": "No, I can't sew. I had them made in the village."
        },
        {
          "q": "How did the trunk get to the tower?",
          "op": [
            "Leo had a boy carry it",
            "Leo carried it himself",
            "The owl took it"
          ],
          "a": 0,
          "por": "I had it carried to the tower. I paid a boy one silver coin."
        },
        {
          "q": "What did Leo have sent by owl?",
          "op": [
            "A letter to his family",
            "His trunk",
            "His old book"
          ],
          "a": 0,
          "por": "I had a letter sent by owl this morning."
        }
      ]
    },
    "out": {
      "sub": "Three things done by someone else. Hear it, then say it.",
      "frases": [
        {
          "t": "I had my robes made in the village.",
          "img": "https://wolf-labs.pages.dev/p/5f888a9ff183/i-had-it-taken/img/live-robes.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She got her letter sent by owl.",
          "img": "https://wolf-labs.pages.dev/p/5f888a9ff183/i-had-it-taken/img/live-owl.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We had the old book copied at the library.",
          "img": "https://wolf-labs.pages.dev/p/5f888a9ff183/i-had-it-taken/img/live-library.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Have it done. Four quick ones.",
      "regra": "<b>have / get</b> + thing + participle · <b>have someone</b> + plain verb · <b>get someone to</b> + verb · someone else did the work.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She had her robes made in the village.",
          "aceita": [],
          "d": "Hint: <b>had</b> + thing + <b>made</b>: a tailor did it."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: a tailor did the work, not you.",
          "mostra": "I mended my robes at the shop.",
          "r": "I had my robes mended at the shop.",
          "aceita": [
            "I got my robes mended at the shop."
          ],
          "d": "Hint: someone else did it, so <b>had / got</b> + thing + participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I had my letter send by owl.",
          "r": "I had my letter sent by owl.",
          "aceita": [
            "I got my letter sent by owl."
          ],
          "d": "Hint: after the thing, use the third form: <i>sent</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I had the librarian to find the book.",
          "r": "I had the librarian find the book.",
          "aceita": [
            "I got the librarian to find the book."
          ],
          "d": "Hint: <b>have someone</b> + plain verb, no <i>to</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/5f888a9ff183/i-had-it-taken/img/live-library.webp",
      "leg": "A quiet library with a map on the table",
      "pede": "Look at the picture: a quiet library with a map on a table. Write 2 or 3 sentences about things you had done by someone else (a haircut, a repair, a delivery). Use <b>have / get + thing + participle</b>.",
      "ph": "I had my … repaired.",
      "ex": "I had my phone repaired last week. I got my hair cut on Saturday. I had my keys copied at the shop."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you have done last month? A repair, a haircut, a delivery?",
          "ph": "Last month I had my … done.",
          "ex": "Last month I had my bike repaired."
        },
        {
          "q": "What do you want to have done this year?",
          "ph": "This year I want to get my … done.",
          "ex": "This year I want to have my kitchen painted."
        }
      ]
    }
  }
};
