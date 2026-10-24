/* HOLD THEIR ATTENTION · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=".
   Better Speaking (B2). Nenhum português na lição. */
window.HW2 = {
  "id": "hold-their-attention",
  "titulo": "Hold Their Attention",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/cb4e81e74b75/hold-their-attention/img/live-capa.jpg",
  "alvo": "holding attention: invite the listener (Try to imagine…, Picture this…), strengthen a point (The simple fact of the matter is this…), contrast (all / none), vary your words; imagine + noun with no 'you'; less than, never 'less of'; advice (noun) vs advise (verb)",
  "abrir": "Think of a speech or a talk that you remember. Why do you remember it?",
  "fecho": "To hold attention, <b>invite</b> the listener (<i>Try to imagine…</i>), <b>strengthen</b> the point (<i>The simple fact of the matter is this…</i>), <b>contrast</b> (<i>all / none</i>), and vary your words. Traps: <i>Imagine you a world</i> is <b>Imagine a world</b>, <i>less of</i> is <b>less than</b>, and <b>advice</b> is the noun while <b>advise</b> is the verb.",
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
      "sub": "Mia rehearses an opening for a speech and Leo listens. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/cb4e81e74b75/hold-their-attention/img/live-capa.jpg",
      "leg": "A big hall, empty, before a speech",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I have to open a talk about water tomorrow. Listen. Water is important. Many people have no water."
        },
        {
          "quem": "leo",
          "t": "Honestly, that is flat. Invite your listener in. Try to imagine a day without water."
        },
        {
          "quem": "mia",
          "t": "Try to imagine a day without water. No coffee, no shower, no cooking."
        },
        {
          "quem": "leo",
          "t": "Better. Now a strong point. The simple fact of the matter is this."
        },
        {
          "quem": "mia",
          "t": "The simple fact of the matter is this: millions of people live on less than two dollars a day."
        },
        {
          "quem": "leo",
          "t": "Good. Add a contrast. All of us need water, but not all of us have it."
        },
        {
          "quem": "mia",
          "t": "If it works for all, it works for everybody. If it works for none, it works for nobody."
        },
        {
          "quem": "leo",
          "t": "Nice. And vary your words. Say people, then humanity, then human beings."
        },
        {
          "quem": "mia",
          "t": "Can I ask you for some advice about the end?"
        },
        {
          "quem": "leo",
          "t": "Yes. Advice is the noun. I advise you to end with a question."
        },
        {
          "quem": "mia",
          "t": "Thanks. I will end with: what will you do tomorrow?"
        }
      ],
      "perguntas": [
        {
          "q": "How does Leo say Mia should invite the listener?",
          "op": [
            "Try to imagine a day without water",
            "Water is important",
            "Sit down"
          ],
          "a": 0,
          "por": "Invite your listener in. Try to imagine a day without water."
        },
        {
          "q": "Which phrase strengthens a point?",
          "op": [
            "The simple fact of the matter is this",
            "Many people have no water",
            "Maybe it is true"
          ],
          "a": 0,
          "por": "Now a strong point. The simple fact of the matter is this."
        },
        {
          "q": "What does Leo advise for the end?",
          "op": [
            "End with a question",
            "End with a joke",
            "End with silence"
          ],
          "a": 0,
          "por": "I advise you to end with a question."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the scene. Hear it, then say it.",
      "frases": [
        {
          "t": "Try to imagine a day without water.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The simple fact of the matter is this: millions of people live on less than two dollars a day.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Can I give you some advice? I advise you to end with a question.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Invite, strengthen, contrast. Four quick ones.",
      "regra": "<b>Try to imagine</b> a noun · <b>less than</b> a number · <b>advice</b> (noun) and <b>advise</b> (verb) · <b>the simple fact of the matter is this</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Try to imagine a world without phones.",
          "aceita": [],
          "d": "Hint: <b>imagine</b> goes straight to the thing. No <i>you</i> after it."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Imagine you a world without phones.",
          "r": "Imagine a world without phones.",
          "aceita": [
            "Try to imagine a world without phones."
          ],
          "d": "Hint: take away <b>you</b>. <b>Imagine</b> + thing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Many people live with less of two dollars a day.",
          "r": "Many people live on less than two dollars a day.",
          "aceita": [
            "Many people live with less than two dollars a day."
          ],
          "d": "Hint: <b>less than</b> a number, and you <b>live on</b> money."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Can I give you some advise?",
          "r": "Can I give you some advice?",
          "aceita": [],
          "d": "Hint: the thing you give is the noun: <b>advice</b> with a <b>c</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/cb4e81e74b75/hold-their-attention/img/live-capa.jpg",
      "leg": "A big hall, empty, before a speech",
      "pede": "Look at the picture: a big empty hall before a speech. Write the opening of a talk about something that matters to you. Use <b>Try to imagine</b>, <b>The simple fact of the matter is this</b> or a contrast with <b>all / none</b>.",
      "ph": "Try to imagine …",
      "ex": "Try to imagine a city with no traffic. The simple fact of the matter is this: we spend hours in cars. If it works for all, it works for everybody."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What would you like people to imagine, in a talk about your city?",
          "ph": "Try to imagine …",
          "ex": "Try to imagine a city where everyone has a bike."
        },
        {
          "q": "What is a simple fact that matters to you?",
          "ph": "The simple fact of the matter is this: …",
          "ex": "The simple fact of the matter is this: sleep helps everyone learn."
        }
      ]
    }
  }
};
