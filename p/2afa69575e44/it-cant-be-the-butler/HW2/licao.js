/* IT CAN'T BE THE BUTLER · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: must be / might be / can't be. B1: nenhum portugues. Mistério leve (objeto sumido), sem violencia. Imagens live-* escuras. */
window.HW2 = {
  "id": "it-cant-be-the-butler",
  "titulo": "It Can't Be the Butler",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2afa69575e44/it-cant-be-the-butler/img/live-mansao.webp",
  "alvo": "deduction in the present: must be (sure it is), might / may / could be (maybe), can't be (sure it isn't); plain be after the modal, no to, no doesn't can; must be + -ing for an action now",
  "abrir": "Are you good at solving small mysteries?",
  "fecho": "<b>must be</b> = I'm sure it is. <b>might / could be</b> = maybe. <b>can't be</b> = I'm sure it isn't. After them, the plain <b>be</b>: <i>It must be her key.</i> Never <i>must to be</i>, never <i>doesn't can be</i>. An action now: <i>She must be working.</i>",
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
      "sub": "Mia and Leo play detectives in an old house. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/2afa69575e44/it-cant-be-the-butler/img/live-mansao.webp",
      "leg": "A dark window in an old house",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the Blue Star diamond is missing from Ashford House! Everybody says it was the butler."
        },
        {
          "quem": "leo",
          "t": "It can't be the butler. He was in the kitchen with the cook until midnight."
        },
        {
          "quem": "mia",
          "t": "Then who took it? It might be the gardener. There is mud near the study door."
        },
        {
          "quem": "leo",
          "t": "It could be. But the gardener is on holiday this week, so it can't be him."
        },
        {
          "quem": "mia",
          "t": "Look at this little note on the floor. It smells of roses."
        },
        {
          "quem": "leo",
          "t": "It must be Lady Rose's. She always wears that perfume."
        },
        {
          "quem": "mia",
          "t": "So it must be Lady Rose. And look, she is walking here with a small box."
        },
        {
          "quem": "leo",
          "t": "She might be bringing the diamond back. Maybe she only borrowed it for a photo."
        },
        {
          "quem": "mia",
          "t": "That must be it. Case closed!"
        }
      ],
      "perguntas": [
        {
          "q": "Why can't it be the butler?",
          "op": [
            "He was in the kitchen with the cook",
            "He was in the garden",
            "He was at the door"
          ],
          "a": 0,
          "por": "It can't be the butler. He was in the kitchen with the cook until midnight."
        },
        {
          "q": "Why can't it be the gardener?",
          "op": [
            "He is on holiday this week",
            "He has no boots",
            "He is in the study"
          ],
          "a": 0,
          "por": "The gardener is on holiday this week, so it can't be him."
        },
        {
          "q": "What might Lady Rose be doing?",
          "op": [
            "Bringing the diamond back",
            "Hiding the note",
            "Looking for the butler"
          ],
          "a": 0,
          "por": "She might be bringing the diamond back."
        }
      ]
    },
    "out": {
      "sub": "Three guesses in a mystery. Hear it, then say it.",
      "frases": [
        {
          "t": "It can't be the butler. He was in the kitchen.",
          "img": "https://wolf-labs.pages.dev/p/2afa69575e44/it-cant-be-the-butler/img/live-mansao.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It must be Lady Rose's note. It smells of roses.",
          "img": "https://wolf-labs.pages.dev/p/2afa69575e44/it-cant-be-the-butler/img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The light is on, so somebody must be home.",
          "img": "https://wolf-labs.pages.dev/p/2afa69575e44/it-cant-be-the-butler/img/live-porta.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "must be, might be or can't be? Four quick ones.",
      "regra": "<b>must be</b> = sure it is · <b>might / could be</b> = maybe · <b>can't be</b> = sure it isn't · plain <b>be</b>, no <i>to</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It must be the key to the study.",
          "aceita": [],
          "d": "Hint: <b>must be</b> = you are sure it is."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It doesn't can be the butler.",
          "r": "It can't be the butler.",
          "aceita": [
            "It cannot be the butler."
          ],
          "d": "Hint: the no of <i>can</i> is <b>can't</b>. Never <i>doesn't can</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It must to be Lady Rose.",
          "r": "It must be Lady Rose.",
          "aceita": [],
          "d": "Hint: after <b>must</b>, use the plain verb. No <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She might is at home.",
          "r": "She might be at home.",
          "aceita": [
            "She may be at home.",
            "She could be at home."
          ],
          "d": "Hint: after <b>might</b>, use the plain verb <b>be</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2afa69575e44/it-cant-be-the-butler/img/live-mesa.webp",
      "leg": "A magnifying glass, a key and a cup on a desk",
      "pede": "Look at the picture: a magnifying glass, a key and a cup on a desk. Write 2 or 3 guesses about whose they are. Use <b>must be</b>, <b>might be</b> or <b>can't be</b>.",
      "ph": "It must be … It might be …",
      "ex": "The key must be the butler's. The cup might be Lady Rose's. The magnifying glass can't be the cook's."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Your phone is not in your bag. Where is it? Guess.",
          "ph": "It must be … / It might be …",
          "ex": "It might be in the car. It can't be at work, because I used it at home."
        },
        {
          "q": "Somebody is knocking at your door. Who is it? Guess.",
          "ph": "It must be … / It can't be …",
          "ex": "It must be my neighbour. It can't be my brother, because he is at work."
        }
      ]
    }
  }
};
