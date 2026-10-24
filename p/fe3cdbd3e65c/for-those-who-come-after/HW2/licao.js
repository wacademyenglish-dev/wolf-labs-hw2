/* FOR THOSE WHO COME AFTER · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: will + so that (o plano e o motivo). Jogo: falas originais, nada de perda; só deixar coisas para o próximo grupo. B1: nenhum português. */
window.HW2 = {
  "id": "for-those-who-come-after",
  "titulo": "For Those Who Come After",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/fe3cdbd3e65c/for-those-who-come-after/img/live-sea.webp",
  "alvo": "will + so that: the plan (I'll light the lamp) and the reason (so that they can see the camp); so that + person + can / will + plain verb; never for they can, never will to, never nobody won't",
  "abrir": "What will you do this week so that your next week is easier?",
  "fecho": "<b>will</b> = the plan: <i>I'll light the lamp.</i> <b>so that</b> = the reason: <i>I'll light the lamp so that they can see the camp.</i> After <b>can / will</b>, the plain verb. Never <i>for they can</i> and never <i>nobody won't</i>.",
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
      "sub": "Mia and Leo prepare a camp for the next team. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/fe3cdbd3e65c/for-those-who-come-after/img/live-camp.webp",
      "leg": "A camp under a red tree",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the next team arrives tomorrow. What will we leave for them?"
        },
        {
          "quem": "mia",
          "t": "I'll leave a map on the table so that they can find the old road."
        },
        {
          "quem": "leo",
          "t": "Good. I'll light the lamp on the beach so that they can see the camp from the sea."
        },
        {
          "quem": "mia",
          "t": "And we should leave some food. I'll put bread in the box so that they won't be hungry."
        },
        {
          "quem": "leo",
          "t": "I'll write a note, too, so that they know where the fresh water is."
        },
        {
          "quem": "mia",
          "t": "What will you write?"
        },
        {
          "quem": "leo",
          "t": "Walk past the big rock, then turn left. I'll draw an arrow so that nobody gets lost."
        },
        {
          "quem": "mia",
          "t": "Perfect. I'll leave my red scarf on the path so that they can follow it."
        },
        {
          "quem": "leo",
          "t": "We'll fix the old bridge, too, so that they can cross the stream easily."
        },
        {
          "quem": "mia",
          "t": "Then let's start now, so that we finish before dark."
        }
      ],
      "perguntas": [
        {
          "q": "Why will Mia leave a map?",
          "op": [
            "So that they can find the old road",
            "So that they can sleep",
            "So that they can paint"
          ],
          "a": 0,
          "por": "I'll leave a map on the table so that they can find the old road."
        },
        {
          "q": "Why will Leo light the lamp?",
          "op": [
            "So that they can see the camp from the sea",
            "So that they can read the note",
            "So that they can cook"
          ],
          "a": 0,
          "por": "I'll light the lamp on the beach so that they can see the camp from the sea."
        },
        {
          "q": "Why will Mia put bread in the box?",
          "op": [
            "So that they won't be hungry",
            "So that they can pay",
            "So that they can sleep"
          ],
          "a": 0,
          "por": "I'll put bread in the box so that they won't be hungry."
        }
      ]
    },
    "out": {
      "sub": "Three plans for the next team. Hear it, then say it.",
      "frases": [
        {
          "t": "I'll light the lamp so that they can see the camp.",
          "img": "https://wolf-labs.pages.dev/p/fe3cdbd3e65c/for-those-who-come-after/img/live-sea.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'll write a note so that they know the way.",
          "img": "https://wolf-labs.pages.dev/p/fe3cdbd3e65c/for-those-who-come-after/img/live-letter.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We'll mark the rocks so that nobody gets lost.",
          "img": "https://wolf-labs.pages.dev/p/fe3cdbd3e65c/for-those-who-come-after/img/live-rocks.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "will + so that. Four quick ones.",
      "regra": "<b>will</b> = the plan · <b>so that</b> = the reason · can / will + plain verb · never <b>for they can</b> · never <b>nobody won't</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I will leave a map so that they can find us.",
          "aceita": [],
          "d": "Hint: the plan with <b>will</b>, then <b>so that</b> + person + <b>can</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I'll wait here for they can come.",
          "r": "I'll wait here so that they can come.",
          "aceita": [
            "I will wait here so that they can come.",
            "I'll wait here so they can come."
          ],
          "d": "Hint: the reason with a person and a verb is <b>so that</b>, never <i>for they can</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I will to leave a note for them.",
          "r": "I will leave a note for them.",
          "aceita": [],
          "d": "Hint: after <b>will</b>, the plain verb. No <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Draw arrows so that nobody won't get lost.",
          "r": "Draw arrows so that nobody will get lost.",
          "aceita": [
            "Draw arrows so that nobody gets lost.",
            "Draw arrows so nobody will get lost.",
            "Draw arrows so nobody gets lost.",
            "Draw arrows so that no one will get lost.",
            "Draw arrows so that no one gets lost."
          ],
          "d": "Hint: <b>nobody</b> is already negative. No <i>won't</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/fe3cdbd3e65c/for-those-who-come-after/img/live-camp.webp",
      "leg": "A camp with a small fire",
      "pede": "Look at the picture: a camp with a small fire. Imagine another group arrives here tomorrow. Write 2 or 3 sentences: what will you leave, and why? Use <b>will</b> and <b>so that</b>.",
      "ph": "I will leave … so that they …",
      "ex": "I will leave some wood so that they can make a fire. I will leave a note so that they know the way."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What will you do this week so that your next week is easier?",
          "ph": "I will … so that …",
          "ex": "I will cook on Sunday so that I don't have to cook every day."
        },
        {
          "q": "What will you leave for the next person at your job or school, so that their life is easier?",
          "ph": "I'll leave … so that …",
          "ex": "I'll leave a short guide and a clean desk so that the next person can start quickly."
        }
      ]
    }
  }
};
