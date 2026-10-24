/* CHOPE! · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: can / could / may nos pedidos educados. A2: dicas em portugues so nas notas (d). Sem imagem (as da aula sao claras). */
window.HW2 = {
  "id": "chope",
  "titulo": "Chope!",
  "nivel": "A2",
  "minutos": 10,
  "capa": "",
  "alvo": "polite requests with can / could / may + plain verb (Can I sit here? Could you pass the sauce? May I ask?) and the answers (Sure. Sorry, it's taken); never Can I to, never Is free this seat",
  "abrir": "What do you say when you want to sit at a full table?",
  "fecho": "<b>Can I</b> / <b>May I</b> + verb: <i>Can I sit here?</i> <b>Could you</b> + verb: <i>Could you pass the sauce, please?</i> Answers: <b>Sure</b>, go ahead. · <b>Sorry</b>, it's taken. No <i>to</i> after can, could, may.",
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
      "sub": "Mia and Leo in a busy food court. A new scene, about 45 seconds.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Excuse me, is this seat free?"
        },
        {
          "quem": "leo",
          "t": "Sorry, it's taken. There is a packet of tissues on the table."
        },
        {
          "quem": "mia",
          "t": "Tissues? What do they mean?"
        },
        {
          "quem": "leo",
          "t": "In Singapore, we call it chope. Someone is buying food now."
        },
        {
          "quem": "mia",
          "t": "I see! Can I sit at that table, please?"
        },
        {
          "quem": "leo",
          "t": "Sure, go ahead. That one is free."
        },
        {
          "quem": "mia",
          "t": "Thank you. Could you tell me where the chicken rice is?"
        },
        {
          "quem": "leo",
          "t": "Of course. It's at stall twelve, next to the drinks."
        },
        {
          "quem": "mia",
          "t": "May I ask one more thing? Can I pay by card?"
        },
        {
          "quem": "leo",
          "t": "Sorry, no. Cash only here."
        }
      ],
      "perguntas": [
        {
          "q": "Why is the first seat taken?",
          "op": [
            "There are tissues on the table",
            "The table is dirty",
            "It is for the cook"
          ],
          "a": 0,
          "por": "There is a packet of tissues on the table."
        },
        {
          "q": "Where is the chicken rice?",
          "op": [
            "At stall twelve",
            "Next to the door",
            "At the free table"
          ],
          "a": 0,
          "por": "It's at stall twelve, next to the drinks."
        },
        {
          "q": "How can Mia pay?",
          "op": [
            "With cash",
            "With a card",
            "She can't pay"
          ],
          "a": 0,
          "por": "Cash only here."
        }
      ]
    },
    "out": {
      "sub": "Three polite sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "Excuse me, can I sit here?",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Could you pass the sauce, please?",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Sorry, it's taken. That table is free.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Can I? Could you? Four quick ones.",
      "regra": "<b>Can I / May I</b> + verb · <b>Could you</b> + verb · <b>Sure</b> / <b>Sorry, it's taken</b> · no <i>to</i> after can, could, may.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Could you help me with the menu?",
          "aceita": [],
          "d": "Dica: pedido educado: <b>Could you</b> + verbo limpo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: no to after can.",
          "mostra": "Can I to sit here?",
          "r": "Can I sit here?",
          "aceita": [
            "May I sit here?"
          ],
          "d": "Dica: depois de <b>can</b>, o verbo vem direto, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the question order is wrong.",
          "mostra": "Is free this seat?",
          "r": "Is this seat free?",
          "aceita": [],
          "d": "Dica: a ordem é <b>Is</b> + this seat + free."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it is a request.",
          "mostra": "You can give me a fork?",
          "r": "Can you give me a fork?",
          "aceita": [
            "Could you give me a fork?"
          ],
          "d": "Dica: para pedir, a pergunta começa com <b>Can you</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "You are at a busy food court. Write 2 or 3 polite sentences: ask for a seat, ask for help, and answer with <b>Sure</b> or <b>Sorry</b>. Use <b>Can I</b>, <b>Could you</b> or <b>May I</b>.",
      "ph": "Excuse me, can I …?",
      "ex": "Excuse me, can I sit here? Could you pass the napkins, please? Sure, go ahead."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "The food court is full. One seat is free, but there is a bag on it. What do you say?",
          "ph": "Excuse me, is this seat …?",
          "ex": "Excuse me, is this seat free? Can I sit here, please?"
        },
        {
          "q": "You don't understand the menu. Ask a person next to you for help.",
          "ph": "Excuse me, could you …?",
          "ex": "Excuse me, could you help me with the menu, please?"
        }
      ]
    }
  }
};
