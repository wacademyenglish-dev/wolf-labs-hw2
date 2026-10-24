/* NINETY-NINE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: quantificadores: all / almost all / most / some / any / none / every. Bíblia (WEB, ao pé da letra, conferido em ebible.org/eng-web e engwebu): Lucas 15:5 (Out loud), 15:6 (Listen e Você). Nenhum versículo no Focus nem marcado como errado; nada da Bíblia vira falsa opção. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "ninety-nine",
  "titulo": "Ninety-Nine",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/87f78dd1eb92/ninety-nine/img/live-pasto.webp",
  "alvo": "quantifiers: all / almost all / most / some / any / a few / every / each / none; How many + plural? (never How much sheep); every + singular verb (every sheep has); some in positive, any in negative and questions",
  "abrir": "How many people are at home with you now?",
  "fecho": "<b>How many</b> + things you count: <i>How many sheep?</i> <b>All</b>, <b>almost all</b>, <b>most</b>, <b>some</b>, <b>a few</b>, <b>none</b>. <b>Every</b> + one thing: <i>Every sheep has a name.</i> <b>Some</b> in a positive sentence, <b>any</b> after not and in questions: <i>There aren't any sheep here.</i>",
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
      "sub": "Mia tells Leo the story of the lost sheep. She quotes Luke 15:6. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/87f78dd1eb92/ninety-nine/img/live-pasto.webp",
      "leg": "Sheep on a hill at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, what is the story today?"
        },
        {
          "quem": "mia",
          "t": "A shepherd has one hundred sheep. At night, he counts them."
        },
        {
          "quem": "leo",
          "t": "How many are there?"
        },
        {
          "quem": "mia",
          "t": "Ninety-nine. Almost all of the sheep are in the fold, but one is not there."
        },
        {
          "quem": "leo",
          "t": "Are there any sheep on the hill?"
        },
        {
          "quem": "mia",
          "t": "None. Every sheep has a place in the fold, but one place is empty. So the shepherd goes out to find the one."
        },
        {
          "quem": "leo",
          "t": "Does he find it?"
        },
        {
          "quem": "mia",
          "t": "Yes. He carries it home, and he calls his friends and neighbors."
        },
        {
          "quem": "leo",
          "t": "What does he say?"
        },
        {
          "quem": "mia",
          "t": "He says, “Rejoice with me, for I have found my sheep which was lost!”"
        },
        {
          "quem": "leo",
          "t": "I like this story. Most people love it, I think."
        },
        {
          "quem": "mia",
          "t": "Me too. Some stories are old, but this one is always fresh."
        }
      ],
      "perguntas": [
        {
          "q": "How many sheep are in the fold?",
          "op": [
            "Ninety-nine",
            "One hundred",
            "One"
          ],
          "a": 0,
          "por": "Ninety-nine. Almost all of the sheep are in the fold."
        },
        {
          "q": "Are there any sheep on the hill?",
          "op": [
            "No, none",
            "Yes, a few",
            "Yes, all of them"
          ],
          "a": 0,
          "por": "None."
        },
        {
          "q": "Who does the shepherd call?",
          "op": [
            "His friends and neighbors",
            "Only his dog",
            "Nobody"
          ],
          "a": 0,
          "por": "He calls his friends and neighbors."
        }
      ]
    },
    "out": {
      "sub": "Three sentences. The third is from the Bible: Luke 15:5 (World English Bible). Hear it, then say it.",
      "frases": [
        {
          "t": "Almost all the sheep are in the fold.",
          "img": "https://wolf-labs.pages.dev/p/87f78dd1eb92/ninety-nine/img/live-pasto.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Every sheep has a place for the night.",
          "img": "https://wolf-labs.pages.dev/p/87f78dd1eb92/ninety-nine/img/live-porteira.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "When he has found it, he carries it on his shoulders, rejoicing.",
          "img": "https://wolf-labs.pages.dev/p/87f78dd1eb92/ninety-nine/img/live-pasto.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "How many? All, most, some, any, none. Four quick ones.",
      "regra": "<b>How many</b> + plural · <b>almost all</b> · <b>every</b> + one (has) · <b>some</b> (yes) / <b>any</b> (not, ?) · <b>none</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Almost all the sheep are in the fold.",
          "aceita": [],
          "d": "Dica: <b>almost all</b>: nunca 'almost the sheep'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "How much sheep are in the fold?",
          "r": "How many sheep are in the fold?",
          "aceita": [],
          "d": "Dica: sheep se conta, então <b>How many</b>, não 'How much'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Every sheep have a name.",
          "r": "Every sheep has a name.",
          "aceita": [],
          "d": "Dica: <b>every</b> + uma só coisa: o verbo leva -s (has)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There aren't some sheep on the hill.",
          "r": "There aren't any sheep on the hill.",
          "aceita": [],
          "d": "Dica: depois de not, usamos <b>any</b>, nunca 'some'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/87f78dd1eb92/ninety-nine/img/live-vila.webp",
      "leg": "A village on a hill at night",
      "pede": "Look at the picture: a village on a hill at night. Write 2 or 3 sentences about it. Use <b>almost all</b>, <b>most</b>, <b>some</b>, <b>any</b> or <b>none</b>.",
      "ph": "Almost all the houses … Some houses …",
      "ex": "Almost all the houses are dark. Some houses have a light. There aren't any people in the street."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "In Luke 15:6 the shepherd says to his friends, “Rejoice with me, for I have found my sheep which was lost!” Who do you call when you have good news? How many people do you tell?",
          "ph": "I call … I tell …",
          "ex": "I call my mother first. I tell three or four people."
        },
        {
          "q": "How many people are in your family? Are all of them at home now?",
          "ph": "There are … people in my family. Almost all of us …",
          "ex": "There are five people in my family. Almost all of us are at home, but my brother is at work."
        }
      ]
    }
  }
};
