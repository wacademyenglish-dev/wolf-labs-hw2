/* TONE IT DOWN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: understatement, euphemism, irony. C1: zero portugues. */
window.HW2 = {
  "id": "tone-it-down",
  "titulo": "Tone It Down",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/70fc32b78a32/tone-it-down/img/live-conversa.webp",
  "alvo": "understatement, euphemism and irony: not exactly cheap / luxurious, a bit of a problem, could be better, not bad at all, I'm not sure that's wise, let go; Oh, brilliant / Oh, great with a flat tone = the opposite",
  "abrir": "When did you describe something bad in a very polite way?",
  "fecho": "Polite does not mean weak. <b>Not exactly cheap</b> = expensive. <b>A bit of a problem</b> = a serious one. <b>Not bad at all</b> = good. <b>Oh, brilliant</b> in a flat voice = I am annoyed. The grammar stays exact: <i>a bit of a problem</i>, <i>could be better</i>, <i>I'm not sure</i>.",
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
      "sub": "Leo tells Mia about a disappointing hotel. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/70fc32b78a32/tone-it-down/img/live-conversa.webp",
      "leg": "Two cups by a rainy window",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, we stayed at that new hotel by the harbour. It was, let's say, not exactly luxurious."
        },
        {
          "quem": "mia",
          "t": "Not exactly luxurious? That sounds like a polite way of saying it was awful."
        },
        {
          "quem": "leo",
          "t": "Well, the room was a bit on the small side, and the lift was out of order for two days."
        },
        {
          "quem": "mia",
          "t": "Two days? And what did the manager say?"
        },
        {
          "quem": "leo",
          "t": "He said we were experiencing a small technical hiccup. I said, oh, brilliant."
        },
        {
          "quem": "mia",
          "t": "I hope you didn't say it with a smile."
        },
        {
          "quem": "leo",
          "t": "With the flattest voice I could manage. He understood perfectly."
        },
        {
          "quem": "mia",
          "t": "So did the breakfast redeem it?"
        },
        {
          "quem": "leo",
          "t": "The coffee was not bad at all, actually. But the prices were not exactly cheap: nine pounds for a croissant."
        },
        {
          "quem": "mia",
          "t": "Ouch. Would you stay there again?"
        },
        {
          "quem": "leo",
          "t": "I'm not sure that would be wise."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo really mean by not exactly luxurious?",
          "op": [
            "The hotel was poor",
            "The hotel was quite luxurious",
            "The hotel was cheap"
          ],
          "a": 0,
          "por": "That sounds like a polite way of saying it was awful."
        },
        {
          "q": "Why does Leo say oh, brilliant to the manager?",
          "op": [
            "He is being ironic: he is annoyed",
            "He is genuinely pleased",
            "He wants to thank the manager"
          ],
          "a": 0,
          "por": "With the flattest voice I could manage. He understood perfectly."
        },
        {
          "q": "What does Leo think of the coffee?",
          "op": [
            "It was good",
            "It was weak",
            "It was too expensive"
          ],
          "a": 0,
          "por": "The coffee was not bad at all, actually."
        }
      ]
    },
    "out": {
      "sub": "Three polite ways to say something bad. Hear it, then say it.",
      "frases": [
        {
          "t": "The service was not exactly what we had hoped for.",
          "img": "https://wolf-labs.pages.dev/p/70fc32b78a32/tone-it-down/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It is a bit of a stretch to call that a five-star hotel.",
          "img": "https://wolf-labs.pages.dev/p/70fc32b78a32/tone-it-down/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'm not sure that would be the wisest decision.",
          "img": "https://wolf-labs.pages.dev/p/70fc32b78a32/tone-it-down/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Soft words, exact grammar. Four quick ones.",
      "regra": "<b>not exactly + adjective</b> · <b>a bit of a + noun</b> · <b>could be better</b> (never more better) · <b>I'm not sure</b> (never I don't sure).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The food was not exactly memorable.",
          "aceita": [],
          "d": "Hint: <b>not exactly</b> goes before the adjective and softens it."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: two words are missing.",
          "mostra": "We have a bit problem with the schedule.",
          "r": "We have a bit of a problem with the schedule.",
          "aceita": [],
          "d": "Hint: the phrase is <b>a bit of a</b> + noun."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The service could be more better.",
          "r": "The service could be better.",
          "aceita": [
            "The service could be much better.",
            "The service could be a lot better."
          ],
          "d": "Hint: <b>better</b> is already comparative: no <b>more</b> in front."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I don't sure that's a good idea.",
          "r": "I'm not sure that's a good idea.",
          "aceita": [
            "I am not sure that is a good idea."
          ],
          "d": "Hint: <b>sure</b> is an adjective, so it needs <b>be</b>: <b>I'm not sure</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/70fc32b78a32/tone-it-down/img/live-conversa.webp",
      "leg": "Two cups by a rainy window",
      "pede": "Look at the picture: two cups by a window on a rainy night. Write 2 or 3 sentences: describe a disappointing place (a hotel, a restaurant, a shop) in a very polite, understated way. Use <b>not exactly</b>, <b>a bit of a</b> or <b>could be better</b>.",
      "ph": "The place was not exactly …",
      "ex": "The cafe was not exactly quiet, and the coffee could have been better. The waiter was a bit slow, but the cake was not bad at all."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of your last disappointing meal or trip. How would you describe it politely?",
          "ph": "It was not exactly …",
          "ex": "It was not exactly a relaxing trip. The hotel could have been cleaner, and the weather was a bit of a problem."
        },
        {
          "q": "When is irony useful? Tell me about a time you said one thing and meant the opposite.",
          "ph": "I once said, oh great, when …",
          "ex": "I once said oh great when my train was cancelled, in a very flat voice, and my friend laughed."
        }
      ]
    }
  }
};
