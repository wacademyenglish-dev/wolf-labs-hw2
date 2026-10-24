/* HE DENIED EVERYTHING · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: reporting verbs (deny, admit, promise, refuse, accuse of, apologize for). B2: nenhum português. Confusão leve de escritório, sem crime. */
window.HW2 = {
  "id": "he-denied-everything",
  "titulo": "He Denied Everything",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/70b552343ffa/he-denied-everything/img/live-podio.webp",
  "alvo": "reporting verbs and the pattern after each: deny / admit + -ing; promise / refuse + to + verb; accuse someone of + -ing; apologize for + -ing",
  "abrir": "When did someone last promise you something, at work or at school?",
  "fecho": "<b>Deny / admit</b> + -ing: <i>He denied taking it.</i> <b>Promise / refuse</b> + to: <i>She promised to bring it back.</i> <b>Accuse someone of</b> + -ing: <i>They accused him of hiding it.</i> <b>Apologize for</b> + -ing: <i>He apologized for being late.</i> Never <i>denied to take</i>, never <i>promised bringing</i>.",
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
      "sub": "Mia and Leo talk about a small office mix-up. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/70b552343ffa/he-denied-everything/img/live-podio.webp",
      "leg": "Microphones at a staff meeting",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, what was all that noise in the office this morning?"
        },
        {
          "quem": "leo",
          "t": "Somebody took the big stapler, and the team had a short meeting about it."
        },
        {
          "quem": "mia",
          "t": "A meeting about a stapler? Who took it?"
        },
        {
          "quem": "leo",
          "t": "Bruno denied taking it. He said he only uses the small one."
        },
        {
          "quem": "mia",
          "t": "Did anyone accuse him of lying?"
        },
        {
          "quem": "leo",
          "t": "Carla accused him of hiding it, but she apologized for saying that, because the stapler was on her own desk."
        },
        {
          "quem": "mia",
          "t": "Oh no. She forgot that she had borrowed it!"
        },
        {
          "quem": "leo",
          "t": "Exactly. She admitted forgetting it, and she promised to bring it back."
        },
        {
          "quem": "mia",
          "t": "And Bruno?"
        },
        {
          "quem": "leo",
          "t": "He refused to laugh at first. Then he blamed Carla for the noise, and everyone laughed."
        }
      ],
      "perguntas": [
        {
          "q": "Where was the stapler?",
          "op": [
            "On Carla's own desk",
            "In Bruno's bag",
            "In the meeting room"
          ],
          "a": 0,
          "por": "The stapler was on her own desk."
        },
        {
          "q": "What did Carla apologize for?",
          "op": [
            "Saying that Bruno hid it",
            "Taking Bruno's stapler",
            "Being late"
          ],
          "a": 0,
          "por": "She apologized for saying that."
        },
        {
          "q": "What did Carla promise to do?",
          "op": [
            "Bring the stapler back",
            "Buy a new stapler",
            "Tell the boss"
          ],
          "a": 0,
          "por": "She promised to bring it back."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a small mix-up. Hear it, then say it.",
      "frases": [
        {
          "t": "Bruno denied taking the stapler.",
          "img": "https://wolf-labs.pages.dev/p/70b552343ffa/he-denied-everything/img/live-podio.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Carla apologized for saying that.",
          "img": "https://wolf-labs.pages.dev/p/70b552343ffa/he-denied-everything/img/live-arquivo.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She promised to bring it back.",
          "img": "https://wolf-labs.pages.dev/p/70b552343ffa/he-denied-everything/img/live-torre.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Which verb, and what comes after it? Four quick ones.",
      "regra": "<b>denied / admitted</b> + -ing · <b>promised / refused</b> + to + verb · <b>accused him of</b> + -ing · <b>apologized for</b> + -ing.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "They accused him of hiding the stapler.",
          "aceita": [],
          "d": "Hint: <b>accused him of</b> + -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He denied to take the stapler.",
          "r": "He denied taking the stapler.",
          "aceita": [
            "He denied having taken the stapler."
          ],
          "d": "Hint: <b>deny</b> is followed by -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She promised bringing it back.",
          "r": "She promised to bring it back.",
          "aceita": [],
          "d": "Hint: <b>promise</b> is followed by <b>to</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "She apologized to be late.",
          "r": "She apologized for being late.",
          "aceita": [
            "She apologised for being late."
          ],
          "d": "Hint: <b>apologize for</b> + -ing."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/70b552343ffa/he-denied-everything/img/live-arquivo.webp",
      "leg": "Papers on a dark desk",
      "pede": "Look at the picture: papers on a desk. Write 2 or 3 sentences about something small that went missing or went wrong at home, work or class. Report what people said. Use <b>denied, admitted, promised, refused, apologized for</b> or <b>accused … of</b>.",
      "ph": "My brother denied …",
      "ex": "My brother denied using my charger, but later he admitted taking it. He apologized for not asking and promised to buy me a new one."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Has someone promised you something recently? Did they do it?",
          "ph": "… promised to …",
          "ex": "My friend promised to lend me a book, but he forgot to bring it."
        },
        {
          "q": "When did you last apologize? What for?",
          "ph": "I apologized for …",
          "ex": "I apologized for forgetting my sister's birthday."
        }
      ]
    }
  }
};
