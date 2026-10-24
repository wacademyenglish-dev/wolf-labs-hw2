/* MEDIUM · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: comparatives: -er, more, than. A1: dicas em português só nas notas (d). Só live-caixas e live-quatro. */
window.HW2 = {
  "id": "medium",
  "titulo": "Medium",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/156ed6ba5443/medium/img/live-quatro.webp",
  "alvo": "comparatives: short word + -er (bigger, longer, cheaper); long word with more (more expensive, more comfortable); than to compare (never then); better for good",
  "abrir": "Are you taller than someone in your family?",
  "fecho": "Short word + <b>-er</b>: <i>bigger, longer, cheaper</i>. Long word: <b>more</b> + word: <i>more expensive</i>. Then <b>than</b>: <i>bigger than</i>. <b>Than</b> compares; <i>then</i> is about time. <i>Good</i> becomes <b>better</b>.",
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
      "sub": "Mia and Leo in a shop with four shirts. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/156ed6ba5443/medium/img/live-quatro.webp",
      "leg": "Four shirts on a table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, this shirt says medium. But it is bigger than my other medium shirt."
        },
        {
          "quem": "mia",
          "t": "Really? This one is smaller than that one."
        },
        {
          "quem": "leo",
          "t": "And the blue one is longer than the white one."
        },
        {
          "quem": "mia",
          "t": "Is it more expensive?"
        },
        {
          "quem": "leo",
          "t": "Yes, it is more expensive than the white one. It is also better."
        },
        {
          "quem": "mia",
          "t": "Better than the white one? Why?"
        },
        {
          "quem": "leo",
          "t": "It is softer, and it is more comfortable than the white one."
        },
        {
          "quem": "mia",
          "t": "Then buy the blue one."
        },
        {
          "quem": "leo",
          "t": "OK. But medium is not the same in every shop."
        },
        {
          "quem": "mia",
          "t": "No. Every shop has its own medium!"
        }
      ],
      "perguntas": [
        {
          "q": "Which shirt is longer?",
          "op": [
            "The blue shirt",
            "The white shirt",
            "The old shirt"
          ],
          "a": 0,
          "por": "And the blue one is longer than the white one."
        },
        {
          "q": "Why is the blue shirt better?",
          "op": [
            "It is softer and more comfortable",
            "It is cheaper",
            "It is smaller"
          ],
          "a": 0,
          "por": "It is softer, and it is more comfortable than the white one."
        },
        {
          "q": "Is the blue shirt cheaper than the white one?",
          "op": [
            "No, it is more expensive",
            "Yes, it is cheaper",
            "They are the same"
          ],
          "a": 0,
          "por": "Yes, it is more expensive than the white one."
        }
      ]
    },
    "out": {
      "sub": "Three comparisons. Hear it, then say it.",
      "frases": [
        {
          "t": "This shirt is bigger than that shirt.",
          "img": "https://wolf-labs.pages.dev/p/156ed6ba5443/medium/img/live-quatro.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The blue shirt is more expensive than the white one.",
          "img": "https://wolf-labs.pages.dev/p/156ed6ba5443/medium/img/live-caixas.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "My new shirt is better than my old shirt.",
          "img": "https://wolf-labs.pages.dev/p/156ed6ba5443/medium/img/live-quatro.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "-er, more and than. Four quick ones.",
      "regra": "short word + <b>-er</b> · long word: <b>more</b> + word · <b>than</b>, not <i>then</i> · good = <b>better</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The blue shirt is longer than the white shirt.",
          "aceita": [],
          "d": "Dica: palavra curta + <b>-er</b> (<i>longer</i>), depois <b>than</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The blue shirt is more long than the white shirt.",
          "r": "The blue shirt is longer than the white shirt.",
          "aceita": [],
          "d": "Dica: <i>long</i> é uma palavra curta: <b>-er</b>, sem <i>more</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "This shirt is expensiver than that shirt.",
          "r": "This shirt is more expensive than that shirt.",
          "aceita": [],
          "d": "Dica: <i>expensive</i> é uma palavra longa: <b>more expensive</b>, sem -er."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "My shirt is bigger then your shirt.",
          "r": "My shirt is bigger than your shirt.",
          "aceita": [],
          "d": "Dica: para comparar use <b>than</b>. <i>Then</i> é tempo (depois)."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/156ed6ba5443/medium/img/live-caixas.webp",
      "leg": "Boxes of clothes on a floor",
      "pede": "Look at the picture: boxes with clothes. Write 2 or 3 sentences comparing two things in your closet. Use <b>-er</b> or <b>more</b>, and <b>than</b>.",
      "ph": "My blue shirt is bigger than …",
      "ex": "My blue shirt is bigger than my white shirt. My sneakers are more comfortable than my boots."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Are you taller than someone in your family? Who?",
          "ph": "I am taller than …",
          "ex": "I am taller than my mother, but my brother is taller than me."
        },
        {
          "q": "Which is more expensive: your phone or your shoes?",
          "ph": "My … is more expensive than …",
          "ex": "My phone is more expensive than my shoes."
        }
      ]
    }
  }
};
