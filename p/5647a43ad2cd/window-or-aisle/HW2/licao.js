/* WINDOW OR AISLE? · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: possessivos + Whose + 's. HW2_ARTIGO_CONTA ligado (regra 2). A1: dicas em português só nas notas (d). */
window.HW2_ARTIGO_CONTA = true;
window.HW2 = {
  "id": "window-or-aisle",
  "titulo": "Window or Aisle?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/5647a43ad2cd/window-or-aisle/img/live-a.webp",
  "alvo": "my, your, his, her, our, their + Whose ...? + name's: whose passport is this? It's her passport. It's my sister's bag.",
  "abrir": "Window or aisle? Why?",
  "fecho": "<b>my · your · his · her · our · their</b> go before the thing: <i>It's her passport.</i> <b>Whose</b> asks the owner: <i>Whose bag is this?</i> A name takes <b>'s</b>: <i>It's Ana's bag.</i> Never <i>Who is this passport?</i>",
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
      "sub": "Mia and Leo at the check-in desk in Toronto. About 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/5647a43ad2cd/window-or-aisle/img/live-b.webp",
      "leg": "A bag at the airport",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, is this your bag or my bag?"
        },
        {
          "quem": "mia",
          "t": "It's my bag. Your bag is the blue one."
        },
        {
          "quem": "leo",
          "t": "Right. Look, there's a passport on the floor. Whose is it?"
        },
        {
          "quem": "mia",
          "t": "It's her passport. That woman in the red coat dropped it."
        },
        {
          "quem": "leo",
          "t": "Excuse me! This is your passport."
        },
        {
          "quem": "mia",
          "t": "Now it's our turn. Window or aisle, Leo?"
        },
        {
          "quem": "leo",
          "t": "Window, please. It's my favorite seat."
        },
        {
          "quem": "mia",
          "t": "Good. I take the aisle. Our gate is nineteen."
        },
        {
          "quem": "leo",
          "t": "Is my bag too heavy?"
        },
        {
          "quem": "mia",
          "t": "Yes! Your bag is twenty-six kilos. The limit is twenty-three."
        }
      ],
      "perguntas": [
        {
          "q": "Whose passport is on the floor?",
          "op": [
            "The woman's",
            "Leo's",
            "Mia's"
          ],
          "a": 0,
          "por": "It's her passport. That woman in the red coat dropped it."
        },
        {
          "q": "Which seat does Leo want?",
          "op": [
            "Window",
            "Aisle",
            "Middle"
          ],
          "a": 0,
          "por": "Window, please. It's my favorite seat."
        },
        {
          "q": "What is the problem with Leo's bag?",
          "op": [
            "It is too heavy",
            "It is too small",
            "It is blue"
          ],
          "a": 0,
          "por": "Your bag is twenty-six kilos. The limit is twenty-three."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the airport. Hear it, then say it.",
      "frases": [
        {
          "t": "Whose bag is this? It's her bag.",
          "img": "https://wolf-labs.pages.dev/p/5647a43ad2cd/window-or-aisle/img/live-b.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Our gate is nineteen. Boarding is at eleven twenty.",
          "img": "https://wolf-labs.pages.dev/p/5647a43ad2cd/window-or-aisle/img/live-a.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Is this your passport? No, it's his passport.",
          "img": "https://wolf-labs.pages.dev/p/5647a43ad2cd/window-or-aisle/img/live-b.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "My, your, her, his, whose. Four quick ones.",
      "regra": "<b>my · your · his · her · our · their</b> + the thing · <b>Whose</b> = who owns it · name + <b>'s</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Is this her bag or his bag?",
          "aceita": [],
          "d": "Dica: <b>her</b> = dela, <b>his</b> = dele."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Is this you bag?",
          "r": "Is this your bag?",
          "aceita": [],
          "d": "Dica: antes da coisa, use <b>your</b>, não <b>you</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: ask who owns it.",
          "mostra": "Who is this passport?",
          "r": "Whose passport is this?",
          "aceita": [
            "Whose is this passport?"
          ],
          "d": "Dica: dono = <b>Whose</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: say the owner.",
          "mostra": "This is the bag of my sister.",
          "r": "This is my sister's bag.",
          "aceita": [
            "This bag is my sister's.",
            "This is her bag."
          ],
          "d": "Dica: o dono vem antes, com <b>'s</b>: <b>my sister's bag</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/5647a43ad2cd/window-or-aisle/img/live-b.webp",
      "leg": "A bag at the airport",
      "pede": "Look at the picture: a bag at the airport. Write 2 or 3 sentences: whose bag it is, your seat, your gate.",
      "ph": "This is my … My seat is …",
      "ex": "This is my bag. My seat is by the window. Our gate is nineteen."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Window or aisle? Why?",
          "ph": "I like … because …",
          "ex": "I like the window because I like to see the clouds."
        },
        {
          "q": "What is in your bag today? Say two things.",
          "ph": "My … and my … are in my bag.",
          "ex": "My phone and my keys are in my bag."
        }
      ]
    }
  }
};
