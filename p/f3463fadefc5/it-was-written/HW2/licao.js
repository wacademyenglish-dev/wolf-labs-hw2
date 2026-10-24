/* IT WAS WRITTEN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: the future in the past: was to / was supposed to / it was written. B2: nenhum português. Falas originais, sem violência. */
window.HW2 = {
  "id": "it-was-written",
  "titulo": "It Was Written",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f3463fadefc5/it-was-written/img/live-chani.webp",
  "alvo": "the future in the past: was to / was never to (destiny), was supposed to (the plan that failed), would (a promise, told later), it was written that ... (the passive)",
  "abrir": "Do you believe some things are written in advance?",
  "fecho": "<b>It was written that</b> … = it was said long before: <i>It was written that rain would come.</i> <b>Was to</b> + verb = destiny: <i>She was to cross the desert.</i> <b>Was supposed to</b> = the plan that failed. <b>Would</b> = the promise, told later: <i>He promised that he would return.</i> Never <i>it was wrote</i>, never <i>promised that he will</i>.",
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
      "sub": "Mia and Leo talk about an old story book. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/f3463fadefc5/it-was-written/img/live-chani.webp",
      "leg": "A fire in the desert, under the moon",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, listen to this. I found an old book at my aunt's house."
        },
        {
          "quem": "mia",
          "t": "What does it say?"
        },
        {
          "quem": "leo",
          "t": "It says that a girl was to cross the desert before the rain came. It was written long before she was born."
        },
        {
          "quem": "mia",
          "t": "Did she believe it?"
        },
        {
          "quem": "leo",
          "t": "At first, no. She was supposed to stay in the village and help with the harvest."
        },
        {
          "quem": "mia",
          "t": "So the plan failed."
        },
        {
          "quem": "leo",
          "t": "Yes. And the old guide promised that he would take her to the mountains."
        },
        {
          "quem": "mia",
          "t": "Did he keep his promise?"
        },
        {
          "quem": "leo",
          "t": "He did. It was written that the stars would show the way, and they did."
        },
        {
          "quem": "mia",
          "t": "I love that. Is there a happy ending?"
        },
        {
          "quem": "leo",
          "t": "She was never to see the village again, but she found a new home."
        }
      ],
      "perguntas": [
        {
          "q": "What was the girl to do?",
          "op": [
            "Cross the desert",
            "Stay in the village",
            "Help with the harvest"
          ],
          "a": 0,
          "por": "A girl was to cross the desert before the rain came."
        },
        {
          "q": "What was she supposed to do at first?",
          "op": [
            "Stay in the village and help",
            "Follow the guide",
            "Leave before the rain"
          ],
          "a": 0,
          "por": "She was supposed to stay in the village and help with the harvest."
        },
        {
          "q": "What did the guide promise?",
          "op": [
            "He would take her to the mountains",
            "He would stay in the village",
            "He would write a book"
          ],
          "a": 0,
          "por": "The old guide promised that he would take her to the mountains."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from an old story. Hear it, then say it.",
      "frases": [
        {
          "t": "It was written that the stars would show the way.",
          "img": "https://wolf-labs.pages.dev/p/f3463fadefc5/it-was-written/img/live-chani.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She was supposed to stay in the village.",
          "img": "https://wolf-labs.pages.dev/p/f3463fadefc5/it-was-written/img/live-sietch.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The guide promised that he would take her to the mountains.",
          "img": "https://wolf-labs.pages.dev/p/f3463fadefc5/it-was-written/img/live-palacio.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Written, supposed to, would. Four quick ones.",
      "regra": "<b>It was written that</b> … (never <i>wrote</i>) · <b>was to / was supposed to</b> + verb · <b>promised that … would</b> (never <i>will</i>).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It was written that the rain would come.",
          "aceita": [],
          "d": "Hint: <b>it was written that</b>, then <b>would</b> + plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It was wrote in the old book.",
          "r": "It was written in the old book.",
          "aceita": [],
          "d": "Hint: the passive needs the third form: <b>written</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He promised that he will bring water.",
          "r": "He promised that he would bring water.",
          "aceita": [
            "He promised he would bring water."
          ],
          "d": "Hint: told later, <b>will</b> steps back to <b>would</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The guide was supposed to waiting for us.",
          "r": "The guide was supposed to wait for us.",
          "aceita": [],
          "d": "Hint: <b>was supposed to</b> + plain verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f3463fadefc5/it-was-written/img/live-sietch.webp",
      "leg": "A glowing cave",
      "pede": "Look at the picture: a glowing cave. Write 2 or 3 sentences about a story, a family tradition or a plan that was told in advance. Use <b>it was written that</b>, <b>was supposed to</b> or <b>promised that … would</b>.",
      "ph": "It was said that …",
      "ex": "In my family, it was said that the oldest son would take over the shop. I was supposed to do that, but I became a teacher. My father promised that he would understand."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What were you supposed to do, but didn't?",
          "ph": "I was supposed to … but …",
          "ex": "I was supposed to study law, but I chose design."
        },
        {
          "q": "Who promised you something? What did they say?",
          "ph": "… promised that … would …",
          "ex": "My friend promised that she would visit me in July."
        }
      ]
    }
  }
};
