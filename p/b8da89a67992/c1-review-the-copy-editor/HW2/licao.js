/* C1 REVIEW · THE COPY EDITOR · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=".
   Alvo: precise wording: adverb + adjective, collocations, verb + noun, idioms. C1: nenhum português. */
window.HW2 = {
  "id": "c1-review-the-copy-editor",
  "titulo": "The Copy Editor",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b8da89a67992/c1-review-the-copy-editor/img/live-capa.webp",
  "alvo": "review of precise wording: adverb + adjective (eerily quiet, painfully slow), collocations (heavy rain, strong coffee), formal verb + noun (raise a concern, draw a conclusion, make a complaint, carry out a review), idioms (move the needle, off the beaten track), cutting vague talk (and stuff, kind of)",
  "abrir": "Which word do you use too often when you write?",
  "fecho": "Precision is choosing the word that fits. <b>Adverb + adjective</b>: <i>eerily quiet</i>, <i>painfully slow</i>. <b>Collocations</b>: <i>heavy rain</i>, <i>strong coffee</i>, never <i>strong rain</i>. <b>Verb + noun</b>: <i>draw a conclusion</i>, <i>make a complaint</i>, <i>raise a concern</i>, <i>carry out a review</i>. <b>Idioms</b>: <i>move the needle</i>, <i>off the beaten track</i>. And cut <i>and stuff</i> from anything you print.",
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
  "rate": "-10%",
  "rodadas": {
    "listen": {
      "sub": "Mia is the editor of a magazine and Leo is a writer. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/b8da89a67992/c1-review-the-copy-editor/img/live-conversa.webp",
      "leg": "The editorial office at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I read your piece about the mountain village. It's lovely, but some words are too weak."
        },
        {
          "quem": "leo",
          "t": "Which ones? I wrote: the village was very quiet."
        },
        {
          "quem": "mia",
          "t": "Try eerily quiet. And you wrote strong rain. In English it's heavy rain."
        },
        {
          "quem": "leo",
          "t": "Heavy rain. Of course. What about this: we saw old houses and stuff?"
        },
        {
          "quem": "mia",
          "t": "Cut and stuff. Be specific. Name the houses, or the street."
        },
        {
          "quem": "leo",
          "t": "Fine. In the last paragraph I wrote: the town did a review and took conclusions."
        },
        {
          "quem": "mia",
          "t": "Say the council carried out a review and drew a conclusion."
        },
        {
          "quem": "leo",
          "t": "That sounds much better. Can I keep the idiom about a road off the beaten track?"
        },
        {
          "quem": "mia",
          "t": "Yes, it works. And I'd like one more: the new bus line could really move the needle."
        },
        {
          "quem": "leo",
          "t": "I'll fix it tonight. Is Friday still the deadline?"
        },
        {
          "quem": "mia",
          "t": "Friday. I'm deeply grateful, Leo. Highly recommended for the cover."
        }
      ],
      "perguntas": [
        {
          "q": "How should Leo change very quiet?",
          "op": [
            "Eerily quiet",
            "Strongly quiet",
            "Quiet very"
          ],
          "a": 0,
          "por": "Try eerily quiet."
        },
        {
          "q": "What is the right collocation for rain?",
          "op": [
            "Heavy rain",
            "Strong rain",
            "Big rain"
          ],
          "a": 0,
          "por": "In English it's heavy rain."
        },
        {
          "q": "What should Leo do with and stuff?",
          "op": [
            "Cut it and be specific",
            "Keep it",
            "Move it to the end"
          ],
          "a": 0,
          "por": "Cut and stuff. Be specific."
        }
      ]
    },
    "out": {
      "sub": "Three precise sentences from the edit. Hear it, then say it.",
      "frases": [
        {
          "t": "The village was eerily quiet after the festival.",
          "img": "https://wolf-labs.pages.dev/p/b8da89a67992/c1-review-the-copy-editor/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Heavy rain fell on the narrow streets all night.",
          "img": "https://wolf-labs.pages.dev/p/b8da89a67992/c1-review-the-copy-editor/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The new bus line could really move the needle.",
          "img": "https://wolf-labs.pages.dev/p/b8da89a67992/c1-review-the-copy-editor/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Right word, right partner. Four quick ones.",
      "regra": "<b>eerily quiet</b> · <b>heavy rain</b> · <b>draw a conclusion</b> · <b>make a complaint</b> · <b>carry out a review</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The village was eerily quiet in winter.",
          "aceita": [],
          "d": "Hint: adverb + adjective, then the place and the time."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It was a strong rain all night.",
          "r": "It was heavy rain all night.",
          "aceita": [],
          "d": "Hint: rain is <b>heavy</b>, not <i>strong</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "The team made a conclusion from the data.",
          "r": "The team drew a conclusion from the data.",
          "aceita": [
            "The team reached a conclusion from the data.",
            "The team came to a conclusion from the data."
          ],
          "d": "Hint: you <b>draw</b> a conclusion."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "He did a complaint about the noise.",
          "r": "He made a complaint about the noise.",
          "aceita": [
            "He lodged a complaint about the noise."
          ],
          "d": "Hint: you <b>make</b> a complaint."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b8da89a67992/c1-review-the-copy-editor/img/live-conversa.webp",
      "leg": "The editorial office at night",
      "pede": "Look at the picture: an empty editorial office at night, with green lamps on the desks. Write 2 or 3 precise sentences about a place you know. Use word pairs like <b>eerily quiet</b>, <b>heavy rain</b> or <b>draw a conclusion</b>.",
      "ph": "My street is … at night.",
      "ex": "My street is eerily quiet at night. After heavy rain, the air feels fresh. I drew the conclusion that I love living here."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Describe a place you know with one precise adverb and adjective.",
          "ph": "The … is … at …",
          "ex": "The office is eerily quiet on Sunday evenings."
        },
        {
          "q": "What conclusion did you draw from something this week?",
          "ph": "I drew the conclusion that …",
          "ex": "I drew the conclusion that I need more sleep."
        }
      ]
    }
  }
};
