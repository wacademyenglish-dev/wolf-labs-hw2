/* THE GREAT DEBATE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: marcadores de argumento (Granted / Admittedly / Be that as it may / Even so / That being said). C1: nenhum português. Imagens live-a, live-b e live-capa (escuras). */
window.HW2 = {
  "id": "the-great-debate",
  "titulo": "The Great Debate",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4044032001cc/the-great-debate/img/live-a.webp",
  "alvo": "argument markers: Granted, ... · Admittedly, ... · Be that as it may, ... · Nevertheless, ... · Even so, ... · That being said, ...; never 'Be that as it may be', 'Nevertheless of the cost', 'Admittedly that it is', 'Even so that'",
  "abrir": "Do you prefer to build your own tools or to buy them? Why?",
  "fecho": "A strong argument admits a point first, then turns: <b>Granted,</b> / <b>Admittedly,</b> + the other side, then <b>Even so,</b> / <b>Nevertheless,</b> / <b>That being said,</b> + your side. <b>Be that as it may,</b> is fixed. <b>Nevertheless</b> starts a clause; with a noun, use <b>despite</b>.",
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
      "sub": "Mia and Leo prepare a build-or-buy debate. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/4044032001cc/the-great-debate/img/live-a.webp",
      "leg": "A balance with two empty plates",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you are arguing for buying the login system on Friday. Lena wants to build it."
        },
        {
          "quem": "leo",
          "t": "Yes. Admittedly, building gives us full control."
        },
        {
          "quem": "mia",
          "t": "Good concession. Now turn it: granted, we would own every line. Even so, we would also own every bug."
        },
        {
          "quem": "leo",
          "t": "Even so, we would also own every bug. I like that. And security?"
        },
        {
          "quem": "mia",
          "t": "Lena will say that a vendor can be hacked. Be that as it may, our team has never run a login system at scale."
        },
        {
          "quem": "leo",
          "t": "Be that as it may, we have never run one at scale. Nevertheless, the vendor has been doing it for ten years."
        },
        {
          "quem": "mia",
          "t": "Careful: nevertheless starts a clause. Don't write 'Nevertheless of the cost'. With a noun, use despite."
        },
        {
          "quem": "leo",
          "t": "Understood. Despite the cost, buying is faster. And her best point, the data risk?"
        },
        {
          "quem": "mia",
          "t": "Don't ignore it. That being said, we can limit what data the vendor sees."
        },
        {
          "quem": "leo",
          "t": "That being said, we can send them only encrypted tokens. Good."
        },
        {
          "quem": "mia",
          "t": "Now you sound like you are listening, not just winning."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia want Leo to do with Lena's argument?",
          "op": [
            "Admit her point first, then turn it",
            "Ignore it completely",
            "Repeat it word for word"
          ],
          "a": 0,
          "por": "Good concession. Now turn it."
        },
        {
          "q": "Why does Mia correct 'Nevertheless of the cost'?",
          "op": [
            "Nevertheless starts a clause; with a noun you use despite",
            "Nevertheless is too informal for a debate",
            "The word cost is not allowed in an argument"
          ],
          "a": 0,
          "por": "Careful: nevertheless starts a clause."
        },
        {
          "q": "How can Leo answer the data risk?",
          "op": [
            "By limiting what data the vendor sees",
            "By saying there is no risk at all",
            "By changing the subject"
          ],
          "a": 0,
          "por": "That being said, we can limit what data the vendor sees."
        }
      ]
    },
    "out": {
      "sub": "Three ways to argue well. Hear it, then say it.",
      "frases": [
        {
          "t": "Granted, we would own every line of code. Even so, we would own every bug.",
          "img": "https://wolf-labs.pages.dev/p/4044032001cc/the-great-debate/img/live-a.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Be that as it may, we have never run a login system at scale.",
          "img": "https://wolf-labs.pages.dev/p/4044032001cc/the-great-debate/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "That being said, we can limit the data that the vendor sees.",
          "img": "https://wolf-labs.pages.dev/p/4044032001cc/the-great-debate/img/live-b.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Concede, then win. Four quick ones.",
      "regra": "<b>Granted, ...</b> · <b>Admittedly, ...</b> · <b>Be that as it may, ...</b> · <b>Even so, ...</b> · <b>That being said, ...</b> · <b>despite</b> + noun.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Be that as it may, we have never run it at scale.",
          "aceita": [],
          "d": "Hint: <b>Be that as it may</b> is a fixed phrase. Then a comma and your point."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "Be that as it may be, buying is faster.",
          "r": "Be that as it may, buying is faster.",
          "aceita": [],
          "d": "Hint: the fixed phrase is <b>Be that as it may</b>, with no <i>be</i> at the end."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: two words are wrong.",
          "mostra": "Nevertheless of the cost, buying is faster.",
          "r": "Despite the cost, buying is faster.",
          "aceita": [
            "In spite of the cost, buying is faster."
          ],
          "d": "Hint: with a noun (<i>the cost</i>), use <b>despite</b> or <b>in spite of</b>. <i>Nevertheless</i> needs a full clause."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "Admittedly that it is slow, but it is safer.",
          "r": "Admittedly, it is slow, but it is safer.",
          "aceita": [],
          "d": "Hint: <b>Admittedly,</b> is followed directly by the sentence, with no <i>that</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4044032001cc/the-great-debate/img/live-b.webp",
      "leg": "Two sides of a chessboard, ready to begin",
      "pede": "Look at the picture: two sides of a chessboard, ready to begin. Write 2 or 3 sentences on a technical choice (build or buy, one tool or another). Concede one point, then make yours. Use <b>Granted, …</b>, <b>Admittedly, …</b>, <b>Even so, …</b> or <b>That being said, …</b>.",
      "ph": "Granted, … Even so, …",
      "ex": "Granted, the old tool is familiar. Even so, the new one saves us two hours a day. That being said, we should test it first."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a topic you disagree about with a colleague. Concede one point, then make yours.",
          "ph": "Granted, … Even so, …",
          "ex": "Granted, meetings help us align. Even so, most of ours could be a short message."
        },
        {
          "q": "Someone says: 'Spaces are better than tabs.' Argue the other side politely.",
          "ph": "Admittedly, … Be that as it may, …",
          "ex": "Admittedly, spaces look the same everywhere. Be that as it may, tabs let each person choose their own width."
        }
      ]
    }
  }
};
