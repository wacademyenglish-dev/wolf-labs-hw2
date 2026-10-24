/* THE HELP DESK · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: revisão U3: can/could, whose, before/at, let me. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "biz-rev-a1-03",
  "titulo": "The Help Desk",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e678cfed44f5/biz-rev-a1-03/img/live-capa.webp",
  "alvo": "Unit 3 review: can / can't + plain verb, Can you ...? / Could you ..., please?, whose and 's / mine / yours, times (before five, at three), Let me ...",
  "abrir": "What can you do very well at work?",
  "fecho": "<b>Can</b> + plain verb, no <b>to</b>: <i>I can help.</i> A question starts with can: <b>Can you help me?</b> Very polite: <b>Could you ..., please?</b> Owner: <b>Ana's bag</b>, not <i>the bag of Ana</i>. A limit: <b>before five</b>. Offer: <b>Let me check.</b>",
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
      "sub": "Leo asks Mia for help. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/e678cfed44f5/biz-rev-a1-03/img/live-capa.webp",
      "leg": "The elevator, going down",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I have a problem. I can't print the report."
        },
        {
          "quem": "mia",
          "t": "Let me check. Whose printer is this?"
        },
        {
          "quem": "leo",
          "t": "It's the team's printer. I need the report before five."
        },
        {
          "quem": "mia",
          "t": "Could you wait two minutes, please?"
        },
        {
          "quem": "leo",
          "t": "Sure."
        },
        {
          "quem": "mia",
          "t": "Sorry, I can't fix it. But you can use the printer on the second floor."
        },
        {
          "quem": "leo",
          "t": "Great! Can you send the file to that printer?"
        },
        {
          "quem": "mia",
          "t": "Of course. Done. You can pick it up now."
        },
        {
          "quem": "leo",
          "t": "Thank you! Is this blue pen yours?"
        },
        {
          "quem": "mia",
          "t": "No, it isn't mine. I think it's Tom's."
        }
      ],
      "perguntas": [
        {
          "q": "What can't Leo do?",
          "op": [
            "Print the report",
            "Open his email",
            "Find his badge"
          ],
          "a": 0,
          "por": "I can't print the report."
        },
        {
          "q": "When does Leo need the report?",
          "op": [
            "Before five",
            "At three",
            "On Monday"
          ],
          "a": 0,
          "por": "I need the report before five."
        },
        {
          "q": "Where can Leo use another printer?",
          "op": [
            "On the second floor",
            "At reception",
            "In meeting room B"
          ],
          "a": 0,
          "por": "You can use the printer on the second floor."
        }
      ]
    },
    "out": {
      "sub": "Three help desk sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "I can't print the report.",
          "img": "https://wolf-labs.pages.dev/p/e678cfed44f5/biz-rev-a1-03/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Could you wait two minutes, please?",
          "img": "https://wolf-labs.pages.dev/p/e678cfed44f5/biz-rev-a1-03/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "You can use the printer on the second floor.",
          "img": "https://wolf-labs.pages.dev/p/e678cfed44f5/biz-rev-a1-03/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Can, could and whose. Four quick ones.",
      "regra": "<b>can / can't</b> + plain verb (no to) · <b>Can you ...?</b> · <b>Could you ..., please?</b> · <b>Ana's bag</b> · <b>before five</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Can you send the report before five?",
          "aceita": [],
          "d": "Dica: <b>before five</b> = o limite, até as cinco."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I can to help you.",
          "r": "I can help you.",
          "aceita": [],
          "d": "Dica: depois de <b>can</b>, o verbo fica limpo, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make it a question.",
          "mostra": "You can help me?",
          "r": "Can you help me?",
          "aceita": [],
          "d": "Dica: pergunta: <b>Can</b> vem primeiro."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "This is the bag of Ana.",
          "r": "This is Ana's bag.",
          "aceita": [
            "It is Ana's bag."
          ],
          "d": "Dica: o dono vem antes, com <b>'s</b>: Ana's bag."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e678cfed44f5/biz-rev-a1-03/img/live-conversa.webp",
      "leg": "A box at the help desk",
      "pede": "Look at the picture: a box at the help desk. A colleague needs help. Write 2 or 3 sentences: ask politely and say when you need it. Use <b>Can you ...?</b> or <b>Could you ..., please?</b>",
      "ph": "Could you help me, please? I can't …",
      "ex": "Could you help me, please? I can't find my badge. I need it before five."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What can you do very well at work?",
          "ph": "I can …",
          "ex": "I can use Excel and I can speak English."
        },
        {
          "q": "What can you ask a colleague? Use: Could you ..., please?",
          "ph": "Could you …, please?",
          "ex": "Could you open the window, please?"
        }
      ]
    }
  }
};
