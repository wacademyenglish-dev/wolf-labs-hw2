/* ENGLISH FOR DESIGNERS · TELL ME ABOUT YOUR BRAND · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (kit/hw2). JSON puro depois do "=".
   Alvo: open questions for a client brief: Can you tell me about ...? What are you hoping to ...? Who is it for? (preposition at the end); question order (What do you want ...?); indirect question order (Can you tell me what your deadline is?). B1: nenhum português na lição. */
window.HW2 = {
  "id": "design-tell-me-about-your-brand",
  "titulo": "Tell Me About Your Brand",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/0c05aefd2c12/design-tell-me-about-your-brand/img/live-capa.webp",
  "alvo": "open questions for a client brief: Can you tell me about ...? What are you hoping to ...? Who is it for? (preposition at the end); question order (What do you want ...?); indirect question order (Can you tell me what your deadline is?)",
  "abrir": "What is the first thing you ask a new client? What do you need to know?",
  "fecho": "Open questions make the client talk: <b>Can you tell me about…?</b> <b>What are you hoping to achieve?</b> <b>Who is it for?</b> The preposition goes at the end. A normal question needs <b>do</b>: <i>What do you want to change?</i> Inside <b>Can you tell me…</b>, the order is normal: <i>what your deadline is</i>, not <i>what is your deadline</i>.",
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
  "rate": "-8%",
  "rodadas": {
    "listen": {
      "sub": "Mia, a designer, and Leo, a shop owner, on a first call. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/0c05aefd2c12/design-tell-me-about-your-brand/img/live-capa.webp",
      "leg": "The designer's desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hi Leo, thanks for your time. Can you tell me about your shop?"
        },
        {
          "quem": "leo",
          "t": "Sure. Spoke and Co is a small bike shop with a repair workshop. We have been open for six years."
        },
        {
          "quem": "mia",
          "t": "Great. What are you hoping to achieve with the new brand?"
        },
        {
          "quem": "leo",
          "t": "We want to look friendlier, and we want more young customers."
        },
        {
          "quem": "mia",
          "t": "Who is it for? Who are your customers now?"
        },
        {
          "quem": "leo",
          "t": "Mostly people who ride to work, from twenty-five to forty-five."
        },
        {
          "quem": "mia",
          "t": "Do you have a logo or any colors already?"
        },
        {
          "quem": "leo",
          "t": "Only an old logo. It's black and red. Honestly, I don't like it."
        },
        {
          "quem": "mia",
          "t": "What don't you like about it?"
        },
        {
          "quem": "leo",
          "t": "It looks too serious, like a warning sign. And the text is hard to read on the shop sign."
        },
        {
          "quem": "mia",
          "t": "That helps a lot. Last question: when do you need it, and who will approve the design?"
        },
        {
          "quem": "leo",
          "t": "In two months, for our anniversary. I decide, with my sister."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo want from the new brand?",
          "op": [
            "A friendlier look and more young customers",
            "A cheaper shop",
            "A bigger workshop"
          ],
          "a": 0,
          "por": "We want to look friendlier, and we want more young customers."
        },
        {
          "q": "What does Leo not like about the old logo?",
          "op": [
            "It looks too serious and the text is hard to read",
            "It has too many colors",
            "It is too small"
          ],
          "a": 0,
          "por": "It looks too serious... the text is hard to read."
        },
        {
          "q": "Who approves the design?",
          "op": [
            "Leo and his sister",
            "Only Mia",
            "The customers"
          ],
          "a": 0,
          "por": "I decide, with my sister."
        }
      ]
    },
    "out": {
      "sub": "Three questions for a first call. Hear it, then say it.",
      "frases": [
        {
          "t": "Can you tell me about your shop?",
          "img": "https://wolf-labs.pages.dev/p/0c05aefd2c12/design-tell-me-about-your-brand/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "What are you hoping to achieve with the new brand?",
          "img": "https://wolf-labs.pages.dev/p/0c05aefd2c12/design-tell-me-about-your-brand/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Who are your customers, and who is it for?",
          "img": "https://wolf-labs.pages.dev/p/0c05aefd2c12/design-tell-me-about-your-brand/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Open questions, in the right order. Four quick ones.",
      "regra": "<b>What are you hoping to</b> + verb · <b>What do you</b> want? · <b>Who is it for?</b> · <b>Can you tell me what your deadline is?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What are you hoping to achieve with the new logo?",
          "aceita": [],
          "d": "Hint: <b>hoping to</b> + verb: <b>hoping to achieve</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: a question needs do.",
          "mostra": "What you want to change in the packaging?",
          "r": "What do you want to change in the packaging?",
          "aceita": [],
          "d": "Hint: question order: <b>What do you want</b>, not <i>what you want</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the preposition goes at the end.",
          "mostra": "For who is the poster?",
          "r": "Who is the poster for?",
          "aceita": [
            "Who's the poster for?"
          ],
          "d": "Hint: <b>Who</b> first, and <b>for</b> at the end."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: normal order after tell me.",
          "mostra": "Can you tell me what is your deadline?",
          "r": "Can you tell me what your deadline is?",
          "aceita": [],
          "d": "Hint: inside <b>Can you tell me…</b>, the order is normal: <b>your deadline is</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/0c05aefd2c12/design-tell-me-about-your-brand/img/live-capa.webp",
      "leg": "A designer's desk, before the first call",
      "pede": "Look at the picture: a desk before a client call. You are the designer. Write three questions for the first call: one about the business, one about the goal, one about the audience.",
      "ph": "Can you tell me about …?",
      "ex": "Can you tell me about your business? What are you hoping to achieve with the new website? Who is it for?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a project you have, or want to start. What are you hoping to achieve with it?",
          "ph": "I'm hoping to …",
          "ex": "I'm hoping to finish my portfolio by June."
        },
        {
          "q": "Think of something you make or do: a project, a cake, a playlist. Who is it for?",
          "ph": "It's for …",
          "ex": "It's for my sister. She loves warm colors."
        }
      ]
    }
  }
};
