/* SEVEN THINGS THE HOUSE CAN DO · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: can / can't (ability, permission, possibility). A1: dicas em português só nas notas (d). Só imagens live-* (já escuras). */
window.HW2 = {
  "id": "seven-things",
  "titulo": "Seven Things the House Can Do",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/d3bd236dbea3/seven-things/img/live-sala.webp",
  "alvo": "can / can't: ability, permission, possibility; the same form for I, you, he, she, it (never cans); the plain verb right after can (never can to); the question Can you...? with Yes, I can. / No, I can't.; never do you can, I no can",
  "abrir": "What can you do very well?",
  "fecho": "<b>Can</b> never changes: <i>I can, she can, the house can</i>. The plain verb comes right after: <i>can lock</i>, never <i>can to lock</i>. The no: <b>can't</b>. The question: <b>Can</b> you…? Yes, I can. / No, I can't.",
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
      "sub": "Mia and Leo talk about a smart house. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/d3bd236dbea3/seven-things/img/live-sala.webp",
      "leg": "A dark living room with a line of light",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, my house is smart. It can lock the door."
        },
        {
          "quem": "mia",
          "t": "Wow! Can it turn the lights off?"
        },
        {
          "quem": "leo",
          "t": "Yes, it can. It can turn the lights off and close the blinds."
        },
        {
          "quem": "mia",
          "t": "Can it wash the dishes?"
        },
        {
          "quem": "leo",
          "t": "No, it can't. It has no hands."
        },
        {
          "quem": "mia",
          "t": "So who washes the dishes?"
        },
        {
          "quem": "leo",
          "t": "I can wash them. My sister can dry them."
        },
        {
          "quem": "mia",
          "t": "And can your mother come in when you are not at home?"
        },
        {
          "quem": "leo",
          "t": "Yes, she can. She has a key."
        }
      ],
      "perguntas": [
        {
          "q": "What can the house do?",
          "op": [
            "It can lock the door",
            "It can wash the dishes",
            "It can make coffee"
          ],
          "a": 0,
          "por": "My house is smart. It can lock the door."
        },
        {
          "q": "Can the house wash the dishes?",
          "op": [
            "No, it can't",
            "Yes, it can",
            "Only at night"
          ],
          "a": 0,
          "por": "No, it can't. It has no hands."
        },
        {
          "q": "Who can come in when Leo is not at home?",
          "op": [
            "His mother, because she has a key",
            "His sister, because she is home",
            "Nobody can come in"
          ],
          "a": 0,
          "por": "Yes, she can. She has a key."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a smart house. Hear it, then say it.",
      "frases": [
        {
          "t": "The house can turn the lights off.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/d3bd236dbea3/seven-things/img/live-sala.webp"
        },
        {
          "t": "The house can't wash the dishes.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/d3bd236dbea3/seven-things/img/live-pia.webp"
        },
        {
          "t": "My mother can come in. She has a key.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/d3bd236dbea3/seven-things/img/live-chave.webp"
        }
      ]
    },
    "focus": {
      "sub": "can and can't. Four quick ones.",
      "regra": "<b>can</b> never changes · the plain verb after it · <b>can't</b> = no · <b>Can</b> you…? · never <i>cans</i>, <i>can to</i>, <i>do you can</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Can the house lock the door?",
          "aceita": [],
          "d": "Dica: pergunta com <b>Can</b> na frente: Can + sujeito + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The house cans lock the door.",
          "r": "The house can lock the door.",
          "aceita": [],
          "d": "Dica: <b>can</b> nunca leva -s, nem com he, she, it ou the house."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I can to wash the dishes.",
          "r": "I can wash the dishes.",
          "aceita": [],
          "d": "Dica: depois de <b>can</b> o verbo vem direto, sem <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Do you can swim?",
          "r": "Can you swim?",
          "aceita": [],
          "d": "Dica: a pergunta é <b>Can you</b>…?, sem <i>do</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/d3bd236dbea3/seven-things/img/live-pia.webp",
      "leg": "Plates drying in a dark kitchen",
      "pede": "Look at the picture: plates drying in a dark kitchen. Write 2 or 3 sentences about what you can do and what you can't do in your kitchen. Use <b>can</b> or <b>can't</b>.",
      "ph": "In my kitchen I can … I can't …",
      "ex": "In my kitchen I can cook rice and wash the dishes. I can't make a cake. My mother can make a very good cake."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What can your phone do? What can't it do?",
          "ph": "My phone can … It can't …",
          "ex": "My phone can take photos. It can't make coffee."
        },
        {
          "q": "Who can come into your house without asking?",
          "ph": "… can come in.",
          "ex": "My sister can come in. She has a key."
        }
      ]
    }
  }
};
