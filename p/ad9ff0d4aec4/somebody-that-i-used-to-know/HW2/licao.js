/* SOMEBODY THAT I USED TO KNOW · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: discurso indireto (said / told / asked). B1: nenhum português. Linha de música: NENHUM verso aqui. Só live-* (escuras). */
window.HW2 = {
  "id": "somebody-that-i-used-to-know",
  "titulo": "Somebody That I Used to Know",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ad9ff0d4aec4/somebody-that-i-used-to-know/img/live-telefone.webp",
  "alvo": "reported speech: said (that) / told + person / asked if / asked where; the tense goes one step back (is -> was, can -> could, will -> would); indirect question without inversion; told me to / told me not to; never said me, never told that",
  "abrir": "Who did you talk to this week? What did they say?",
  "fecho": "<b>He said (that) he was tired.</b> <b>She told me (that) …</b> The tense goes one step back: <i>am → was, can → could, will → would</i>. A question: <b>asked if</b> / <b>asked where I was</b>, with no inversion. An order: <b>told me to call</b> / <b>told me not to forget</b>. Never <i>said me</i>, never <i>told that</i>, never <i>told me don't</i>.",
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
      "sub": "Mia tells Leo about a phone call from an old friend. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/ad9ff0d4aec4/somebody-that-i-used-to-know/img/live-capa.webp",
      "leg": "An old radio and a lamp",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, who was on the phone? You look surprised."
        },
        {
          "quem": "mia",
          "t": "It was Bruno, an old friend from school. He said he was living in Lisbon now."
        },
        {
          "quem": "leo",
          "t": "Lisbon! What else did he say?"
        },
        {
          "quem": "mia",
          "t": "He said that he missed our class. And he asked if I still had the old photos."
        },
        {
          "quem": "leo",
          "t": "Do you?"
        },
        {
          "quem": "mia",
          "t": "Yes, so I told him I could send them tonight. He asked where I was living now."
        },
        {
          "quem": "leo",
          "t": "And what did you say?"
        },
        {
          "quem": "mia",
          "t": "I told him I was living near the park. Then he told me to call him on Sunday."
        },
        {
          "quem": "leo",
          "t": "That's great. Did he tell you to bring anything?"
        },
        {
          "quem": "mia",
          "t": "No, but he said he wouldn't be free on Saturday."
        }
      ],
      "perguntas": [
        {
          "q": "Where did Bruno say he was living?",
          "op": [
            "In Lisbon",
            "Near the park",
            "In Mia's school"
          ],
          "a": 0,
          "por": "He said he was living in Lisbon now."
        },
        {
          "q": "What did Bruno ask Mia?",
          "op": [
            "If she still had the old photos",
            "If she was free on Saturday",
            "If she was living in Lisbon"
          ],
          "a": 0,
          "por": "He asked if I still had the old photos."
        },
        {
          "q": "What did Bruno tell Mia to do?",
          "op": [
            "Call him on Sunday",
            "Send a letter",
            "Visit him in Lisbon"
          ],
          "a": 0,
          "por": "He told me to call him on Sunday."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about what people said. Hear it, then say it.",
      "frases": [
        {
          "t": "She said that she was tired.",
          "img": "https://wolf-labs.pages.dev/p/ad9ff0d4aec4/somebody-that-i-used-to-know/img/live-telefone.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "He asked me where I was living.",
          "img": "https://wolf-labs.pages.dev/p/ad9ff0d4aec4/somebody-that-i-used-to-know/img/live-celeiro.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "My friend told me to call him on Sunday.",
          "img": "https://wolf-labs.pages.dev/p/ad9ff0d4aec4/somebody-that-i-used-to-know/img/live-discos.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "said, told, asked. Four quick ones.",
      "regra": "<b>said (that)</b> · <b>told me (that)</b> · <b>asked if / where</b> · <b>told me to</b> / <b>not to</b> · the tense goes one step back.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "He told me to call him tomorrow.",
          "aceita": [],
          "d": "Hint: <b>told me to</b> + plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She said me that she was tired.",
          "r": "She told me that she was tired.",
          "aceita": [
            "She said that she was tired.",
            "She told me she was tired."
          ],
          "d": "Hint: <i>told me</i>, or just <i>said</i>. Never <i>said me</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "He asked where was I working.",
          "r": "He asked where I was working.",
          "aceita": [],
          "d": "Hint: in reported questions, no inversion: <i>where I was</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "She told me don't be late.",
          "r": "She told me not to be late.",
          "aceita": [],
          "d": "Hint: for a negative order, <b>told me not to</b> + plain verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/ad9ff0d4aec4/somebody-that-i-used-to-know/img/live-telefone.webp",
      "leg": "A phone on a table, in the dark",
      "pede": "Look at the picture: a phone on a table in the dark. Write 2 or 3 sentences telling what someone said to you this week. Use <b>said (that)</b>, <b>told me</b> or <b>asked if</b>.",
      "ph": "My friend told me that …",
      "ex": "My friend told me that she was moving to another city. She asked if I could help her. She said she would call me on Sunday."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did a friend tell you this week?",
          "ph": "My friend told me that …",
          "ex": "My friend told me that he was starting a new job on Monday."
        },
        {
          "q": "What did somebody ask you today?",
          "ph": "Somebody asked me if / where …",
          "ex": "My boss asked me if I could finish the report before lunch."
        }
      ]
    }
  }
};
