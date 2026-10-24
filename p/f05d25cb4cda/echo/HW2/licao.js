/* THE NORTH GATE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: perguntas com BE e respostas curtas. Jogo: falas originais, sem violência e sem doença. A1: dicas em português só nas notas (d). Cena: o guarda do portão norte. */
window.HW2 = {
  "id": "echo",
  "titulo": "The North Gate",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f05d25cb4cda/echo/img/live-gate.webp",
  "alvo": "questions with BE: the verb jumps to the front (Are you tired? Is this your bag? Where are you from?) and short answers (Yes, I am. No, she isn't.); errors: Where you are from?, Is you...?, Your name is on the list?",
  "abrir": "Where are you from?",
  "fecho": "In a question, <b>BE</b> jumps to the front: <i>You are from Brazil.</i> → <i>Are you from Brazil?</i> With a question word: <i>Where are you from?</i> Short answers: <i>Yes, I am. No, she isn't.</i>",
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
  "rate": "-18%",
  "rodadas": {
    "listen": {
      "sub": "Mia is the guard at the north gate. Leo arrives. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/f05d25cb4cda/echo/img/live-gate.webp",
      "leg": "The north gate at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hello. Stop at the gate, please. What is your name?"
        },
        {
          "quem": "leo",
          "t": "My name is Leo."
        },
        {
          "quem": "mia",
          "t": "Where are you from, Leo?"
        },
        {
          "quem": "leo",
          "t": "I'm from a small town by the river."
        },
        {
          "quem": "mia",
          "t": "Are you alone?"
        },
        {
          "quem": "leo",
          "t": "No, I'm not. My sister is with me. She is in the truck."
        },
        {
          "quem": "mia",
          "t": "Is she tired?"
        },
        {
          "quem": "leo",
          "t": "Yes, she is. We are tired and hungry."
        },
        {
          "quem": "mia",
          "t": "Is this your backpack?"
        },
        {
          "quem": "leo",
          "t": "Yes, it is. There is a radio and some food in it."
        },
        {
          "quem": "mia",
          "t": "Okay. The gate is open. Welcome to the village!"
        }
      ],
      "perguntas": [
        {
          "q": "Where is Leo from?",
          "op": [
            "From a small town by the river",
            "From a big city",
            "From the village"
          ],
          "a": 0,
          "por": "I'm from a small town by the river."
        },
        {
          "q": "Is Leo alone?",
          "op": [
            "No, his sister is with him",
            "Yes, he is",
            "No, his dog is with him"
          ],
          "a": 0,
          "por": "No, I'm not. My sister is with me."
        },
        {
          "q": "What is in the backpack?",
          "op": [
            "A radio and some food",
            "A map and a phone",
            "Some books"
          ],
          "a": 0,
          "por": "There is a radio and some food in it."
        }
      ]
    },
    "out": {
      "sub": "Three questions at the gate. Hear it, then say it.",
      "frases": [
        {
          "t": "Where are you from?",
          "img": "https://wolf-labs.pages.dev/p/f05d25cb4cda/echo/img/live-gate.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Is this your backpack? Yes, it is.",
          "img": "https://wolf-labs.pages.dev/p/f05d25cb4cda/echo/img/live-backpack.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Are you hungry? No, I'm not.",
          "img": "https://wolf-labs.pages.dev/p/f05d25cb4cda/echo/img/live-booth.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "BE goes first. Four quick ones.",
      "regra": "In a question, <b>BE</b> goes first: <i>Are you tired?</i> · <i>Where are you from?</i> · short answer: <i>Yes, I am. No, she isn't.</i>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Where is your sister now?",
          "aceita": [],
          "d": "Dica: na pergunta, o <b>is</b> vem antes de <i>your sister</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the question correct.",
          "mostra": "Where you are from?",
          "r": "Where are you from?",
          "aceita": [],
          "d": "Dica: em inglês, o <b>are</b> pula para antes do <i>you</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Is you hungry?",
          "r": "Are you hungry?",
          "aceita": [],
          "d": "Dica: com <b>you</b>, o verbo é <b>are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the question correct.",
          "mostra": "Your name is on the list?",
          "r": "Is your name on the list?",
          "aceita": [],
          "d": "Dica: não basta subir a voz no fim: o <b>is</b> vai para a frente."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f05d25cb4cda/echo/img/live-booth.webp",
      "leg": "The guard's window at the gate",
      "pede": "Look at the picture: the guard's window at the north gate. A new person arrives. Write 3 questions with <b>BE</b> for this person.",
      "ph": "What is your name? Are you …?",
      "ex": "What is your name? Where are you from? Are you alone?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where are you from? Is it a big city or a small town?",
          "ph": "I'm from … It is a …",
          "ex": "I'm from Campinas. It is a big city."
        },
        {
          "q": "Are you tired today? Are you happy?",
          "ph": "Yes, I am. / No, I'm not.",
          "ex": "Yes, I am. I am tired, but I am happy."
        }
      ]
    }
  }
};
