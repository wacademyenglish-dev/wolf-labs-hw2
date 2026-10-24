/* PULL THE LEVER · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: have to / has to (must do); don't / doesn't have to (not nec. Falas originais, sem cena do filme. */
window.HW2 = {
  "id": "pull-the-lever",
  "titulo": "Pull the Lever",
  "nivel": "A2",
  "minutos": 10,
  "alvo": "have to / has to (must do); don't / doesn't have to (not necessary); had to (past); Does she have to ...?; never he have to, I don't must, had to went",
  "abrir": "What do you have to do every morning?",
  "fecho": "I / you / we / they <b>have to</b>, he / she <b>has to</b>. Not necessary: <b>don't / doesn't have to</b> (never <i>don't must</i>). Past: <b>had to</b> + base verb: <i>I had to go</i>. Question: <b>Does</b> she <b>have to</b> go?",
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
  "rate": "-10%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo talk about a teacher in a perfect town. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/1b3d8d88bf19/pull-the-lever/img/live-bairro.webp",
      "leg": "A perfect little town at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at the town. Who is the teacher there?"
        },
        {
          "quem": "mia",
          "t": "Chidi. He has to help Eleanor to be good."
        },
        {
          "quem": "leo",
          "t": "Does she have to go to class?"
        },
        {
          "quem": "mia",
          "t": "Yes, she does. Every day at ten, she has to be in the classroom."
        },
        {
          "quem": "leo",
          "t": "And does Chidi like his job?"
        },
        {
          "quem": "mia",
          "t": "He loves it. But he can't decide anything. Yesterday he had to choose a muffin, and it took an hour."
        },
        {
          "quem": "leo",
          "t": "An hour! He doesn't have to be so slow."
        },
        {
          "quem": "mia",
          "t": "Right. Now he has to learn to decide fast. In the test, he has to pull a lever in two seconds."
        }
      ],
      "perguntas": [
        {
          "q": "Who has to help Eleanor?",
          "op": [
            "Chidi",
            "Leo",
            "Mia"
          ],
          "a": 0,
          "por": "Chidi has to help Eleanor to be good."
        },
        {
          "q": "What did Chidi have to choose yesterday?",
          "op": [
            "A muffin",
            "A lever",
            "A class"
          ],
          "a": 0,
          "por": "Yesterday he had to choose a muffin, and it took an hour."
        },
        {
          "q": "Does Eleanor have to go to class?",
          "op": [
            "Yes, she does",
            "No, she doesn't",
            "Only on Friday"
          ],
          "a": 0,
          "por": "Yes, she does. Every day at ten, she has to be in the classroom."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the lesson. Hear it, then say it.",
      "frases": [
        {
          "t": "Chidi has to teach a class.",
          "img": "https://wolf-labs.pages.dev/p/1b3d8d88bf19/pull-the-lever/img/live-bairro.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I don't have to work on Sunday.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Yesterday, he had to choose a muffin.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Have to, has to, had to. Four quick ones.",
      "regra": "I / you / we / they <b>have to</b> · he / she <b>has to</b> · <b>don't / doesn't have to</b> · <b>had to</b> + base verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Does Eleanor have to go to class?",
          "aceita": [],
          "d": "Dica: pergunta com she: <b>Does</b> + sujeito + <b>have to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Chidi have to decide fast.",
          "r": "Chidi has to decide fast.",
          "aceita": [],
          "d": "Dica: com he / she, <b>have to</b> vira <b>has to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "You don't must pay.",
          "r": "You don't have to pay.",
          "aceita": [],
          "d": "Dica: não é preciso = <b>don't have to</b>, nunca <i>don't must</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Yesterday I had to went home.",
          "r": "Yesterday I had to go home.",
          "aceita": [],
          "d": "Dica: depois de <b>had to</b>, o verbo fica simples: <b>go</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/1b3d8d88bf19/pull-the-lever/img/live-bairro.webp",
      "leg": "A perfect little town",
      "pede": "Look at the picture: a perfect town. Write 2 or 3 sentences: one thing you <b>have to</b> do, one thing you <b>don't have to</b> do, and one thing you <b>had to</b> do yesterday.",
      "ph": "I have to … I don't have to … Yesterday I had to …",
      "ex": "I have to work at nine. I don't have to cook, because my mom does. Yesterday I had to study."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you have to do every morning?",
          "ph": "Every morning I have to …",
          "ex": "Every morning I have to take the bus."
        },
        {
          "q": "What don't you have to do on Sundays?",
          "ph": "On Sundays I don't have to …",
          "ex": "On Sundays I don't have to wake up early."
        }
      ]
    }
  }
};
