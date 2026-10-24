/* IT'S MADE HERE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: passiva no presente simples. A2: dicas em português só nas notas (d). Só live-* escuras. */
window.HW2 = {
  "id": "its-made-here",
  "titulo": "It's Made Here",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/6768694a5510/its-made-here/img/live-tenis.webp",
  "alvo": "the passive in the present simple: is / are + third form (is made, are packed, is shipped); by + who, when it matters; the question (Where are they made?); aren't made; never The leather cut here, never Every pair are checked, never Where they are made",
  "abrir": "Look at your shoes. Where are they made?",
  "fecho": "<b>is / are + third form</b>: <i>The leather is cut. The soles are made from old tires.</i> <b>By</b> + who, only when it matters: <i>checked by Ruth</i>. The question: <b>Where are they made?</b> One pair <b>is</b> checked; two pairs <b>are</b> checked.",
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
      "sub": "Mia visits a sneaker factory with Leo. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/6768694a5510/its-made-here/img/live-abertura.webp",
      "leg": "A sneaker factory line",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, thanks for the tour. How are the sneakers made?"
        },
        {
          "quem": "leo",
          "t": "First, the leather is cut by machine. Then the pieces are sewn by hand."
        },
        {
          "quem": "mia",
          "t": "By hand? Is everything made by hand?"
        },
        {
          "quem": "leo",
          "t": "No. The soles are made by machine. They are made from old tires."
        },
        {
          "quem": "mia",
          "t": "Interesting! And then?"
        },
        {
          "quem": "leo",
          "t": "The laces are added, and every pair is checked by Ruth."
        },
        {
          "quem": "mia",
          "t": "Where are they sold?"
        },
        {
          "quem": "leo",
          "t": "They are sold in forty stores. They aren't sold online."
        },
        {
          "quem": "mia",
          "t": "Are they packed here too?"
        },
        {
          "quem": "leo",
          "t": "Yes, they are packed in boxes here, and then they are shipped on Fridays."
        }
      ],
      "perguntas": [
        {
          "q": "How are the pieces joined?",
          "op": [
            "They are sewn by hand",
            "They are glued by machine",
            "They are cut by Ruth"
          ],
          "a": 0,
          "por": "Then the pieces are sewn by hand."
        },
        {
          "q": "What are the soles made from?",
          "op": [
            "Old tires",
            "Leather",
            "Plastic bottles"
          ],
          "a": 0,
          "por": "They are made from old tires."
        },
        {
          "q": "When are the sneakers shipped?",
          "op": [
            "On Fridays",
            "Every day",
            "On Mondays"
          ],
          "a": 0,
          "por": "They are shipped on Fridays."
        }
      ]
    },
    "out": {
      "sub": "Three steps in the factory. Hear it, then say it.",
      "frases": [
        {
          "t": "The leather is cut by machine.",
          "img": "https://wolf-labs.pages.dev/p/6768694a5510/its-made-here/img/live-couro.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The pieces are sewn by hand.",
          "img": "https://wolf-labs.pages.dev/p/6768694a5510/its-made-here/img/live-costura.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The soles are made from old tires.",
          "img": "https://wolf-labs.pages.dev/p/6768694a5510/its-made-here/img/live-solas.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "is or are + third form. Four quick ones.",
      "regra": "<b>is / are + third form</b> · one thing = <b>is</b>, two things = <b>are</b> · question: <b>Where are they made?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The sneakers are packed in boxes here.",
          "aceita": [],
          "d": "Dica: coisas (plural): <b>are</b> + particípio (packed)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "The leather cut here.",
          "r": "The leather is cut here.",
          "aceita": [],
          "d": "Dica: falta o <b>is</b>: is + particípio (cut)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Every pair are checked by Ruth.",
          "r": "Every pair is checked by Ruth.",
          "aceita": [],
          "d": "Dica: <b>every pair</b> é singular: <b>is</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "Where they are made?",
          "r": "Where are they made?",
          "aceita": [],
          "d": "Dica: na pergunta, <b>are</b> vem antes de <b>they</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/6768694a5510/its-made-here/img/live-solas.webp",
      "leg": "Rubber soles in a long row",
      "pede": "Look at the picture: rubber soles in a long row. Write 2 or 3 sentences about how something is made in your city or country: bread, shoes, coffee. Use <b>is</b> or <b>are</b> + the third form.",
      "ph": "First, the … is …",
      "ex": "First, the dough is mixed. Then it is baked. The bread is sold in the morning."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where are your shoes made?",
          "ph": "My shoes are made in …",
          "ex": "My shoes are made in Brazil."
        },
        {
          "q": "What is made in your city or your country?",
          "ph": "… is made in …",
          "ex": "Coffee is grown here, and it is sold all over the world."
        }
      ]
    }
  }
};
