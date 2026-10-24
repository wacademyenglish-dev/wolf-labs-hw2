/* OTHER MOMMY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present simple he/she. A1: dicas em português só nas notas (d). Terror sem susto, falas originais. */
window.HW2 = {
  "id": "other-mommy",
  "titulo": "Other Mommy",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ebc8594e04c4/other-mommy/img/live-capa.webp",
  "alvo": "present simple with he / she: she wears, she has, she doesn't sing, Does she smile? (-s, has, doesn't + verb, Does + verb without -s)",
  "abrir": "What does your mother wear at home?",
  "fecho": "<b>She wears</b>: he / she takes an -s. <b>She has</b>: have becomes has. <b>She doesn't sing</b>: doesn't + the verb, no -s. A question: <b>Does she smile?</b> Yes, she does.",
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
      "sub": "Mia and Leo look at two mothers in a picture. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/ebc8594e04c4/other-mommy/img/live-cozinha.webp",
      "leg": "A kitchen at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at the two mothers in the picture. What does the first one wear?"
        },
        {
          "quem": "mia",
          "t": "Mommy wears a blue sweater and glasses."
        },
        {
          "quem": "leo",
          "t": "And Other Mommy?"
        },
        {
          "quem": "mia",
          "t": "She wears a yellow dress. She doesn't wear glasses."
        },
        {
          "quem": "leo",
          "t": "Does she have long hair?"
        },
        {
          "quem": "mia",
          "t": "Yes, she does. Mommy has short hair, but Other Mommy has long hair."
        },
        {
          "quem": "leo",
          "t": "Does Mommy sing at night?"
        },
        {
          "quem": "mia",
          "t": "Yes, she sings a quiet song. Other Mommy doesn't sing. She just smiles."
        },
        {
          "quem": "leo",
          "t": "Does she look happy?"
        },
        {
          "quem": "mia",
          "t": "She smiles a lot, but Bela doesn't like it."
        }
      ],
      "perguntas": [
        {
          "q": "What does Other Mommy wear?",
          "op": [
            "A yellow dress",
            "A blue sweater",
            "Glasses"
          ],
          "a": 0,
          "por": "She wears a yellow dress."
        },
        {
          "q": "Who has short hair?",
          "op": [
            "Mommy",
            "Other Mommy",
            "Bela"
          ],
          "a": 0,
          "por": "Mommy has short hair, but Other Mommy has long hair."
        },
        {
          "q": "Does Other Mommy sing at night?",
          "op": [
            "No, she doesn't",
            "Yes, she does",
            "Yes, she sings a quiet song"
          ],
          "a": 0,
          "por": "Other Mommy doesn't sing. She just smiles."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the lesson. Hear it, then say it.",
      "frases": [
        {
          "t": "Mommy wears glasses and a blue sweater.",
          "img": "https://wolf-labs.pages.dev/p/ebc8594e04c4/other-mommy/img/live-cama.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Other Mommy has long hair.",
          "img": "https://wolf-labs.pages.dev/p/ebc8594e04c4/other-mommy/img/live-armario.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She doesn't sing at night.",
          "img": "https://wolf-labs.pages.dev/p/ebc8594e04c4/other-mommy/img/live-chapeu.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "She wears, she has, she doesn't. Four quick ones.",
      "regra": "he / she + <b>-s</b>: wears · <b>has</b> · <b>doesn't</b> + verb (no -s) · <b>Does she</b> smile?",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Other Mommy wears a yellow dress.",
          "aceita": [],
          "d": "Dica: <b>she</b> pede um <b>-s</b> no verbo: wears."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Other Mommy have long hair.",
          "r": "Other Mommy has long hair.",
          "aceita": [],
          "d": "Dica: com she, <b>have</b> vira <b>has</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She don't sing at night.",
          "r": "She doesn't sing at night.",
          "aceita": [
            "She does not sing at night."
          ],
          "d": "Dica: com she, use <b>doesn't</b>."
        },
        {
          "tipo": "escreve",
          "t": "Make it a question.",
          "mostra": "She smiles a lot.",
          "r": "Does she smile a lot?",
          "aceita": [],
          "d": "Dica: <b>Does</b> + she + verbo sem -s: smile, não <i>smiles</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/ebc8594e04c4/other-mommy/img/live-cozinha.webp",
      "leg": "A kitchen, late",
      "pede": "Look at the picture: a kitchen at night. Write 2 or 3 sentences about a woman you know. Use <b>she wears, she has</b> and <b>she doesn't</b>.",
      "ph": "My mother wears … She has … She doesn't …",
      "ex": "My mother wears a red apron in the kitchen. She has short hair. She doesn't sing, but she hums."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What does your mother, or a woman you know, wear at home?",
          "ph": "She wears … She has …",
          "ex": "My mother wears old jeans and a big sweater. She has a blue apron."
        },
        {
          "q": "What does she do every day? What doesn't she do?",
          "ph": "She … She doesn't …",
          "ex": "She cooks every day. She doesn't watch TV."
        }
      ]
    }
  }
};
