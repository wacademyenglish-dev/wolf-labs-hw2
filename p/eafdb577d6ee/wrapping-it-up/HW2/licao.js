/* WRAPPING IT UP · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: ellipsis and substitution: so / not after think, hope, suppose, be afraid. B2: nenhum português. */
window.HW2 = {
  "id": "wrapping-it-up",
  "titulo": "Wrapping It Up",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/eafdb577d6ee/wrapping-it-up/img/live-capa.webp",
  "alvo": "ellipsis and substitution: so / not after think, hope, suppose, be afraid; So do I / Neither can I / Nor have I with the helper of their sentence; the verb drops after to (I'd love to); one / ones",
  "abrir": "What is a big night like at your family table?",
  "fecho": "After <b>think, hope, suppose, be afraid</b>: <b>so</b> or <b>not</b> (<i>I think so. I hope not.</i>). Agree with <b>So do I</b> / <b>Neither can I</b>: the helper comes from their sentence. After <b>to</b> the verb drops: <i>I'd love to.</i> <b>One / ones</b> replace a noun: <i>the green one</i>.",
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
      "sub": "Mia and Leo on Christmas Eve. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/eafdb577d6ee/wrapping-it-up/img/live-capa.webp",
      "leg": "A long table set for Christmas Eve",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, will it snow tonight?"
        },
        {
          "quem": "leo",
          "t": "I think so. The sky looks heavy."
        },
        {
          "quem": "mia",
          "t": "I hope so! I love snow at Christmas."
        },
        {
          "quem": "leo",
          "t": "So do I. Will Aunt Ruth come, do you think?"
        },
        {
          "quem": "mia",
          "t": "I'm afraid not. She called, and the roads are closed."
        },
        {
          "quem": "leo",
          "t": "Oh no. I can't believe it."
        },
        {
          "quem": "mia",
          "t": "Neither can I. She always brings the best dessert."
        },
        {
          "quem": "leo",
          "t": "Will you take the gold plate or the green one?"
        },
        {
          "quem": "mia",
          "t": "The green one, please. And can you help me with the gifts tonight?"
        },
        {
          "quem": "leo",
          "t": "I'd love to!"
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo think about the snow?",
          "op": [
            "He thinks it will snow",
            "He hopes it will not snow",
            "He is sure it will not snow"
          ],
          "a": 0,
          "por": "I think so. The sky looks heavy."
        },
        {
          "q": "Why will Aunt Ruth not come?",
          "op": [
            "The roads are closed",
            "She is busy",
            "She is angry"
          ],
          "a": 0,
          "por": "She called, and the roads are closed."
        },
        {
          "q": "Which plate does Mia choose?",
          "op": [
            "The green one",
            "The gold one",
            "The small one"
          ],
          "a": 0,
          "por": "The green one, please."
        }
      ]
    },
    "out": {
      "sub": "Three short answers. Hear it, then say it.",
      "frases": [
        {
          "t": "Is it cold outside? I'm afraid so.",
          "img": "https://wolf-labs.pages.dev/p/eafdb577d6ee/wrapping-it-up/img/live-lareira.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Will you open a cracker with me? I'd love to.",
          "img": "https://wolf-labs.pages.dev/p/eafdb577d6ee/wrapping-it-up/img/live-crackers.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I can't see the road. Neither can I.",
          "img": "https://wolf-labs.pages.dev/p/eafdb577d6ee/wrapping-it-up/img/live-janela.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "so, not, So do I, Neither can I, one. Four quick ones.",
      "regra": "<b>I think so · I hope not</b> · <b>So do I · Neither can I</b> · <b>I'd love to</b> · <b>the green one</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The gold one is mine, and the small ones are yours.",
          "aceita": [],
          "d": "Hint: <b>one</b> for a single thing, <b>ones</b> for many."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: agree with “I love this song.”",
          "mostra": "So I do.",
          "r": "So do I.",
          "aceita": [],
          "d": "Hint: <b>So</b> + the helper of their sentence + <b>I</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: you do NOT want it to rain.",
          "mostra": "I hope no.",
          "r": "I hope not.",
          "aceita": [],
          "d": "Hint: after <b>hope</b> use <b>so</b> or <b>not</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: agree with “I can't eat another bite.”",
          "mostra": "Neither can't I.",
          "r": "Neither can I.",
          "aceita": [],
          "d": "Hint: <b>Neither</b> already says no. The helper stays positive."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/eafdb577d6ee/wrapping-it-up/img/live-guirlanda.webp",
      "leg": "A wreath with red berries and small lights on a dark door",
      "pede": "Look at the picture: a wreath on a door. Write 2 or 3 short exchanges from a family table: what someone says, and your short answer. Use <b>so / not</b>, <b>So do I / Neither can I</b>, <b>to</b> or <b>one / ones</b>.",
      "ph": "Will it snow tomorrow? I hope …",
      "ex": "Will it snow tomorrow? I hope not. / I love this song. So do I. / Which plate do you want? The blue one."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Will your family be together this year? Answer short, then add one detail.",
          "ph": "I hope so. …",
          "ex": "I hope so. My brother is flying in on Friday."
        },
        {
          "q": "Name one thing you can't do well. Your teacher will agree with you.",
          "ph": "I can't …",
          "ex": "I can't cook rice. (Teacher: Neither can I!)"
        }
      ]
    }
  }
};
