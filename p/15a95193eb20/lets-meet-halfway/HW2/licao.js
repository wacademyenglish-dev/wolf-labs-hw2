/* LET'S MEET HALFWAY · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: ofertas com if (If you + presente, we will / could + verbo). B1: nenhum português. */
window.HW2 = {
  "id": "lets-meet-halfway",
  "titulo": "Let's Meet Halfway",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/15a95193eb20/lets-meet-halfway/img/live-mesa-meio.webp",
  "alvo": "offers with if: If you + present simple, we will / we could + plain verb; never will after if, never could to, third person -s (if she orders)",
  "abrir": "Think of a deal you made. What did you offer to get what you wanted?",
  "fecho": "An offer has two parts: <b>If you + present</b>, <b>we will / we could + plain verb</b>: <i>If you lower the price, we will order more.</i> No <i>will</i> after <b>if</b>, no <i>to</i> after <b>could</b>. With he, she, it: <i>If she orders today, we will sign.</i>",
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
      "sub": "Mia and Leo before a price call with a supplier. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/15a95193eb20/lets-meet-halfway/img/live-mesa.webp",
      "leg": "Towels and two coffee cups on the table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, my call with Dana Reyes starts in ten minutes. She wants twelve dollars a towel, and my limit is ten."
        },
        {
          "quem": "leo",
          "t": "Don't just say no. What can you offer her?"
        },
        {
          "quem": "mia",
          "t": "If she lowers the price to ten, we will order two thousand towels."
        },
        {
          "quem": "leo",
          "t": "Good. And payment? Dana wants cash on delivery."
        },
        {
          "quem": "mia",
          "t": "If she gives us thirty days to pay, we could add a small extra order next month."
        },
        {
          "quem": "leo",
          "t": "Nice. What about delivery? She says six weeks."
        },
        {
          "quem": "mia",
          "t": "The hotel opens in four weeks. If she delivers in four weeks, we will sign today."
        },
        {
          "quem": "leo",
          "t": "And if she says that is impossible?"
        },
        {
          "quem": "mia",
          "t": "Then we could split the order. If she sends half of it first, we will still open on time."
        },
        {
          "quem": "leo",
          "t": "So you are meeting her halfway."
        },
        {
          "quem": "mia",
          "t": "Exactly. It is not a fight. It is a fair offer for both of us."
        }
      ],
      "perguntas": [
        {
          "q": "What will Mia order if Dana lowers the price to ten?",
          "op": [
            "Two thousand towels",
            "Four thousand towels",
            "Nothing at all"
          ],
          "a": 0,
          "por": "If she lowers the price to ten, we will order two thousand towels."
        },
        {
          "q": "What does Mia want about payment?",
          "op": [
            "Thirty days to pay",
            "Cash on delivery",
            "Sixty days to pay"
          ],
          "a": 0,
          "por": "If she gives us thirty days to pay, we could add a small extra order."
        },
        {
          "q": "Why does the delivery date matter?",
          "op": [
            "The hotel opens in four weeks",
            "Dana is on holiday",
            "The towels are very heavy"
          ],
          "a": 0,
          "por": "The hotel opens in four weeks."
        }
      ]
    },
    "out": {
      "sub": "Three offers for the call with Dana. Hear it, then say it.",
      "frases": [
        {
          "t": "If you lower the price, we will order two thousand towels.",
          "img": "https://wolf-labs.pages.dev/p/15a95193eb20/lets-meet-halfway/img/live-toalhas.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We could pay in thirty days if you send half first.",
          "img": "https://wolf-labs.pages.dev/p/15a95193eb20/lets-meet-halfway/img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If she delivers in four weeks, we will sign today.",
          "img": "https://wolf-labs.pages.dev/p/15a95193eb20/lets-meet-halfway/img/live-varanda.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "If + present, will / could + verb. Four quick ones.",
      "regra": "<b>If you + present</b> · <b>we will / we could + plain verb</b> · no <i>will</i> after <b>if</b> · no <i>to</i> after <b>could</b> · <b>if she orders</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If you lower the price, we will order more.",
          "aceita": [],
          "d": "Hint: <b>if</b> + present simple first, then <b>will</b> + plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If you will pay today, we will deliver.",
          "r": "If you pay today, we will deliver.",
          "aceita": [
            "If you pay today, we'll deliver."
          ],
          "d": "Hint: after <b>if</b> use the present simple, not <i>will</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We could to send half first.",
          "r": "We could send half first.",
          "aceita": [],
          "d": "Hint: after <b>could</b>, the plain verb. No <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If she order today, we will sign.",
          "r": "If she orders today, we will sign.",
          "aceita": [
            "If she orders today, we'll sign."
          ],
          "d": "Hint: with <b>she</b>, the present simple needs an <b>-s</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/15a95193eb20/lets-meet-halfway/img/live-abertura.webp",
      "leg": "An empty meeting room at dusk",
      "pede": "Look at the picture: a meeting room before a negotiation. Write 2 or 3 offers you could make in a real deal. Use <b>If you …, we will / we could …</b>.",
      "ph": "If you …, we will …",
      "ex": "If you give us a discount, we will order more. If you deliver early, we could pay faster."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What can you offer a seller to get a better price?",
          "ph": "If you …, I will …",
          "ex": "If you give me a discount, I will pay in cash."
        },
        {
          "q": "What could you offer your boss to get a day off?",
          "ph": "If you …, I could …",
          "ex": "If you let me leave early on Friday, I could work on Saturday."
        }
      ]
    }
  }
};
