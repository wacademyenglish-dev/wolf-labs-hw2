/* NEITHER HERE NOR THERE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: opinions with nuance. C1: zero portugues. */
window.HW2 = {
  "id": "neither-here-nor-there",
  "titulo": "Neither Here Nor There",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/43522857a15a/neither-here-nor-there/img/live-conversa.webp",
  "alvo": "opinions with nuance: I'm all for it, I'm in two minds about, I have mixed feelings, I'm sitting on the fence, it's not my cup of tea, I couldn't care less, it's neither here nor there, if you ask me, the way I see it, for what it's worth, to be fair",
  "abrir": "What is a topic you have a very clear opinion about? And one you do not?",
  "fecho": "An opinion has a temperature. <b>I'm all for it</b> · <b>I'm in two minds about it</b> · <b>I couldn't care less</b> (zero interest) · <b>It's neither here nor there</b> (irrelevant). Introduce it: <b>If you ask me · The way I see it · For what it's worth · To be fair</b>. Never <i>I'm agree</i>, never <i>in two minds of</i>.",
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
      "sub": "Mia and Leo talk about a new rule at a restaurant. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/43522857a15a/neither-here-nor-there/img/live-conversa.webp",
      "leg": "A glass and a candle on a dark table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the restaurant downstairs just banned phones at the table. What do you make of it?"
        },
        {
          "quem": "mia",
          "t": "Honestly, I'm in two minds. If you ask me, it's a nice idea, but nobody likes being told what to do."
        },
        {
          "quem": "leo",
          "t": "I'm all for it. The way I see it, a meal is for conversation."
        },
        {
          "quem": "mia",
          "t": "To be fair, some people need their phones for work."
        },
        {
          "quem": "leo",
          "t": "That's neither here nor there. They can step outside."
        },
        {
          "quem": "mia",
          "t": "Fair point. My brother couldn't care less, though. He eats with one hand and scrolls with the other."
        },
        {
          "quem": "leo",
          "t": "Typical. Does that mean he disagrees?"
        },
        {
          "quem": "mia",
          "t": "No. It means he has no opinion at all. For what it's worth, I think I'd try it for a week."
        },
        {
          "quem": "leo",
          "t": "So you're not sitting on the fence anymore?"
        },
        {
          "quem": "mia",
          "t": "I'm still on the fence. But I'll leave my phone at home, just to see."
        }
      ],
      "perguntas": [
        {
          "q": "What is Mia's opinion at the start?",
          "op": [
            "She is undecided",
            "She is completely against it",
            "She is completely for it"
          ],
          "a": 0,
          "por": "Honestly, I'm in two minds."
        },
        {
          "q": "What does neither here nor there mean in Leo's reply?",
          "op": [
            "The phone argument is not relevant",
            "Phones are not allowed anywhere",
            "The restaurant is far from here"
          ],
          "a": 0,
          "por": "That's neither here nor there. They can step outside."
        },
        {
          "q": "What does Mia say about her brother?",
          "op": [
            "He has no opinion about it at all",
            "He strongly disagrees",
            "He loves the idea"
          ],
          "a": 0,
          "por": "It means he has no opinion at all."
        }
      ]
    },
    "out": {
      "sub": "Three opinions with different temperatures. Hear it, then say it.",
      "frases": [
        {
          "t": "If you ask me, a meal is for conversation, not for scrolling.",
          "img": "https://wolf-labs.pages.dev/p/43522857a15a/neither-here-nor-there/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'm in two minds about it, but I'm leaning towards yes.",
          "img": "https://wolf-labs.pages.dev/p/43522857a15a/neither-here-nor-there/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "To be fair, the price is neither here nor there.",
          "img": "https://wolf-labs.pages.dev/p/43522857a15a/neither-here-nor-there/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Opinions with nuance. Four quick ones.",
      "regra": "<b>in two minds about</b> · <b>I couldn't care less</b> (never I don't care less) · <b>The way I see it</b> · <b>I agree</b> (no am).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I'm in two minds about the new rule.",
          "aceita": [],
          "d": "Hint: <b>in two minds</b> is followed by <b>about</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm in two minds of moving abroad.",
          "r": "I'm in two minds about moving abroad.",
          "aceita": [],
          "d": "Hint: the preposition is <b>about</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I don't care less about football.",
          "r": "I couldn't care less about football.",
          "aceita": [
            "I could not care less about football."
          ],
          "d": "Hint: <b>I couldn't care less</b> = my interest is already zero."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "As I see, we should wait.",
          "r": "The way I see it, we should wait.",
          "aceita": [
            "As I see it, we should wait."
          ],
          "d": "Hint: the English phrase needs <b>it</b>: <b>the way I see it</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/43522857a15a/neither-here-nor-there/img/live-conversa.webp",
      "leg": "A glass and a candle on a table",
      "pede": "Look at the picture: a glass and a candle on an empty table. Write 2 or 3 sentences: give your opinion on a topic (working from home, school uniforms, a four-day week) with a nuanced phrase. Use <b>I'm all for it</b>, <b>I'm in two minds</b> or <b>it's not my cup of tea</b>.",
      "ph": "I'm all for … The way I see it, …",
      "ex": "I'm all for working from home. The way I see it, people are more productive in comfortable surroundings. To be fair, I do miss my colleagues."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Is there something everyone loves that is simply not your cup of tea?",
          "ph": "… is not my cup of tea.",
          "ex": "Reality shows are not my cup of tea. To be fair, I can see why people enjoy them."
        },
        {
          "q": "What is a topic you are sitting on the fence about right now?",
          "ph": "I'm in two minds about …",
          "ex": "I'm in two minds about moving to a bigger city. The pay is better, but I would miss my family."
        }
      ]
    }
  }
};
