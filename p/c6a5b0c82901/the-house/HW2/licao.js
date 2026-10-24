window.HW2_ARTIGO_CONTA = true;
/* THE HOUSE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: there is / there are / his / her / their. A1: dicas em português só nas notas (d). Filme: falas originais, sem cena pesada. Alvo inclui possessivos: HW2_ARTIGO_CONTA. */
window.HW2 = {
  "id": "the-house",
  "titulo": "The House",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c6a5b0c82901/the-house/img/live-capa.webp",
  "alvo": "there is / there are, Is there ...?, there isn't / aren't, and his / her / their: there is + one, there are + two or more, never have for there is, never the bed of him",
  "abrir": "What is there in your house? Say three things.",
  "fecho": "<b>There is</b> + one thing: <i>There is a dog.</i> <b>There are</b> + two or more: <i>There are two trees.</i> A question: <b>Is there</b> a light? No: <b>there isn't</b>. Whose? <b>his</b> (a man) · <b>her</b> (a woman) · <b>their</b> (many).",
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
      "sub": "Mia and Leo look at a picture of a stone house. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/c6a5b0c82901/the-house/img/live-capa.webp",
      "leg": "A stone house at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at the picture. Is there a light in the house?"
        },
        {
          "quem": "mia",
          "t": "Yes, there is. There is a small light by the door."
        },
        {
          "quem": "leo",
          "t": "Are there trees?"
        },
        {
          "quem": "mia",
          "t": "Yes, there are two big trees. And there is an old dog on the step."
        },
        {
          "quem": "leo",
          "t": "Is it his dog or her dog?"
        },
        {
          "quem": "mia",
          "t": "It is her dog. The woman of the house loves it."
        },
        {
          "quem": "leo",
          "t": "Is there a man in the house?"
        },
        {
          "quem": "mia",
          "t": "No, there isn't. But there is a bed. It is his bed. He is away."
        },
        {
          "quem": "leo",
          "t": "And are there children?"
        },
        {
          "quem": "mia",
          "t": "Yes, there are two. These are their books, on the table."
        }
      ],
      "perguntas": [
        {
          "q": "What is there by the door?",
          "op": [
            "A small light",
            "A big dog",
            "Two trees"
          ],
          "a": 0,
          "por": "There is a small light by the door."
        },
        {
          "q": "Whose dog is it?",
          "op": [
            "Her dog",
            "His dog",
            "Their dog"
          ],
          "a": 0,
          "por": "It is her dog."
        },
        {
          "q": "Is there a man in the house?",
          "op": [
            "No, there isn't",
            "Yes, there is",
            "Yes, there are two"
          ],
          "a": 0,
          "por": "No, there isn't. But there is a bed."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the house. Hear it, then say it.",
      "frases": [
        {
          "t": "There is a small light by the door.",
          "img": "https://wolf-labs.pages.dev/p/c6a5b0c82901/the-house/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "There is an old dog on the step.",
          "img": "https://wolf-labs.pages.dev/p/c6a5b0c82901/the-house/img/live-cena3-cao.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It is her loom, and it is his bed.",
          "img": "https://wolf-labs.pages.dev/p/c6a5b0c82901/the-house/img/live-cena4-tear.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "There is, there are, his, her. Four quick ones.",
      "regra": "<b>there is</b> + one · <b>there are</b> + two or more · <b>his</b> (a man) · <b>her</b> (a woman) · <b>their</b> (many)",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "There are two big trees by the house.",
          "aceita": [],
          "d": "Dica: duas árvores = <b>there are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Have a light in the house.",
          "r": "There is a light in the house.",
          "aceita": [
            "There's a light in the house."
          ],
          "d": "Dica: para dizer que algo existe, use <b>there is</b>, não <i>have</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There is two dogs in the yard.",
          "r": "There are two dogs in the yard.",
          "aceita": [],
          "d": "Dica: dois ou mais = <b>there are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: say it the English way.",
          "mostra": "It is the bed of him.",
          "r": "It is his bed.",
          "aceita": [],
          "d": "Dica: de um homem = <b>his</b>: his bed, nunca <i>the bed of him</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c6a5b0c82901/the-house/img/live-cena5-janela.webp",
      "leg": "A room with a window to the sea",
      "pede": "Look at the picture: a room with a window to the sea at night. Write 2 or 3 sentences: what is there in the room? Use <b>there is</b>, <b>there are</b> or <b>there isn't</b>.",
      "ph": "There is … There isn't …",
      "ex": "There is a big window in the room. There is a quiet sea outside. There isn't a light."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is there in your bedroom? Say three things.",
          "ph": "There is … There are …",
          "ex": "There is a bed and a small desk. There are two windows."
        },
        {
          "q": "Your family: one thing of your mother, one of your father.",
          "ph": "Her … is … His … is …",
          "ex": "Her phone is new. His car is old."
        }
      ]
    }
  }
};
