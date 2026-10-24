/* WE WOULD ALWAYS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: would for a repeated past action (set the period first. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "we-would-always",
  "titulo": "We Would Always",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c413ed83a266/we-would-always/img/live-casa.webp",
  "alvo": "would for a repeated past action (set the period first: When I was ten, we would ...); used to for a state (we used to have a dog); past simple for one time (That summer we went to the sea); never would for a state, never would to",
  "abrir": "What did you do on holidays when you were a child?",
  "fecho": "A habit in a period: <b>would</b> (<i>Every summer we would swim.</i>). A state: <b>used to</b> (<i>We used to have a dog.</i>). Once: past simple (<i>That summer we went to the sea.</i>).",
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
      "sub": "Mia and Leo talk about childhood summers. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/c413ed83a266/we-would-always/img/live-lago.webp",
      "leg": "A wooden pier at dusk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, what did you do in the summers when you were a kid?"
        },
        {
          "quem": "mia",
          "t": "When I was ten, we would go to my grandmother's house by the lake every July."
        },
        {
          "quem": "leo",
          "t": "What would you do there?"
        },
        {
          "quem": "mia",
          "t": "We would swim before breakfast, and we would play cards after dinner."
        },
        {
          "quem": "leo",
          "t": "Was the house big?"
        },
        {
          "quem": "mia",
          "t": "No, it used to be small, but it had a big yard. We used to have a dog called Max."
        },
        {
          "quem": "leo",
          "t": "Nice! Did you go every year?"
        },
        {
          "quem": "mia",
          "t": "Every year, until one summer. That summer, we went to the sea instead."
        },
        {
          "quem": "leo",
          "t": "Did you like it?"
        },
        {
          "quem": "mia",
          "t": "Yes! We made new friends. But we still talk about the lake."
        }
      ],
      "perguntas": [
        {
          "q": "What would Mia do before breakfast?",
          "op": [
            "She would swim",
            "She would play cards",
            "She would feed the dog"
          ],
          "a": 0,
          "por": "We would swim before breakfast."
        },
        {
          "q": "What did the house used to be like?",
          "op": [
            "It used to be small",
            "It used to be big",
            "It used to be new"
          ],
          "a": 0,
          "por": "It used to be small, but it had a big yard."
        },
        {
          "q": "What happened only one summer?",
          "op": [
            "They went to the sea",
            "They stayed home",
            "They got a new dog"
          ],
          "a": 0,
          "por": "That summer, we went to the sea instead."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the past. Hear it, then say it.",
      "frases": [
        {
          "t": "When I was ten, we would swim every morning.",
          "img": "https://wolf-labs.pages.dev/p/c413ed83a266/we-would-always/img/live-lago.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We used to have a small house near the water.",
          "img": "https://wolf-labs.pages.dev/p/c413ed83a266/we-would-always/img/live-casa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "That summer, we went to the sea.",
          "img": "https://wolf-labs.pages.dev/p/c413ed83a266/we-would-always/img/live-estrada.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Habit, state or one time? Four quick ones.",
      "regra": "<b>would</b> = a habit in a period · <b>used to</b> = a state · <b>past simple</b> = one time · never <b>would to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Every summer we would visit my aunt.",
          "aceita": [],
          "d": "Dica: período + <b>would</b> + verbo para um hábito do passado."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: would can't describe a state.",
          "mostra": "We would have a dog called Max.",
          "r": "We used to have a dog called Max.",
          "aceita": [
            "We used to have a dog named Max."
          ],
          "d": "Dica: <b>have</b> é estado; estado pede <b>used to</b>, não would."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it happened only once.",
          "mostra": "That summer we would go to the sea.",
          "r": "That summer we went to the sea.",
          "aceita": [],
          "d": "Dica: aconteceu uma vez só: passado simples, não would."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We would to swim every morning.",
          "r": "We would swim every morning.",
          "aceita": [],
          "d": "Dica: depois de <b>would</b>, o verbo vem direto, sem <b>to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c413ed83a266/we-would-always/img/live-casa.webp",
      "leg": "A little house by the water",
      "pede": "Look at the picture: a little house by the water. Write 2 or 3 sentences about a holiday when you were a child. Use <b>would</b> for a habit and <b>used to</b> for a state.",
      "ph": "When I was eight, we would …",
      "ex": "When I was eight, we would go to the beach every July. We used to stay in a small house. One year, we went to the mountains."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you do every summer when you were a child?",
          "ph": "When I was …, we would …",
          "ex": "When I was ten, we would play outside until dark."
        },
        {
          "q": "What was your childhood home like?",
          "ph": "It used to be …",
          "ex": "It used to be small, with a big tree in front."
        }
      ]
    }
  }
};
