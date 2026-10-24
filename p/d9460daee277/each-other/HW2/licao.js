/* EACH OTHER · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: myself x each other / by myself x alone. A2: dicas em portugues so nas notas (d). So imagens live-* escuras */
window.HW2 = {
  "id": "each-other",
  "titulo": "Each Other",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/d9460daee277/each-other/img/live-padaria.webp",
  "alvo": "myself / themselves (the action comes back) x each other (the action crosses); verbs with no -self (feel, get up, relax, remember); by myself x alone",
  "abrir": "What did you teach yourself to do?",
  "fecho": "<b>myself / themselves</b>: the action comes back to the same person. <b>each other</b>: it goes across between two people. <b>feel, get up, relax</b> take no -self: <i>I feel tired.</i> <b>by myself</b> = nobody helped · <b>alone</b> = nobody there.",
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
      "sub": "Mia talks to Leo about his two brothers and their bakery. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/d9460daee277/each-other/img/live-padaria.webp",
      "leg": "A quiet bakery after closing",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, your brothers opened the bakery together. Who taught them to bake?"
        },
        {
          "quem": "leo",
          "t": "Nobody. They taught themselves, with videos."
        },
        {
          "quem": "mia",
          "t": "Really? I thought they helped each other."
        },
        {
          "quem": "leo",
          "t": "Both are true. Tomas showed Rafa the oven, and Rafa showed Tomas the books. They taught each other."
        },
        {
          "quem": "mia",
          "t": "That's nice. Do they get up early?"
        },
        {
          "quem": "leo",
          "t": "Very early. Tomas gets up at four. He doesn't feel tired, he says."
        },
        {
          "quem": "mia",
          "t": "And the first year? Was he alone?"
        },
        {
          "quem": "leo",
          "t": "No, I helped on Sundays. But during the week he worked by himself."
        },
        {
          "quem": "mia",
          "t": "Does he ever hurt himself?"
        },
        {
          "quem": "leo",
          "t": "Yes! Last month he cut himself with a knife. Now he is careful."
        }
      ],
      "perguntas": [
        {
          "q": "How did the brothers learn to bake?",
          "op": [
            "They taught each other and themselves",
            "A school taught them",
            "A friend taught them"
          ],
          "a": 0,
          "por": "They taught themselves... They taught each other."
        },
        {
          "q": "Who showed Rafa the oven?",
          "op": [
            "Tomas",
            "Leo",
            "Mia"
          ],
          "a": 0,
          "por": "Tomas showed Rafa the oven."
        },
        {
          "q": "What happened last month?",
          "op": [
            "Tomas cut himself",
            "Rafa got up late",
            "The bakery closed"
          ],
          "a": 0,
          "por": "He cut himself with a knife."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about two brothers. Hear it, then say it.",
      "frases": [
        {
          "t": "They taught themselves to bake.",
          "img": "https://wolf-labs.pages.dev/p/d9460daee277/each-other/img/live-padaria.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "They helped each other every day.",
          "img": "https://wolf-labs.pages.dev/p/d9460daee277/each-other/img/live-ilha.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "He got up at four. He didn't feel tired.",
          "img": "https://wolf-labs.pages.dev/p/d9460daee277/each-other/img/live-padaria.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "-self or each other? Four quick ones.",
      "regra": "<b>myself / themselves</b> = the action comes back · <b>each other</b> = it crosses · <b>feel, get up, relax</b> take no -self.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The two brothers helped each other every day.",
          "aceita": [],
          "d": "Dica: dois irmãos, a ação vai de um para o outro: <b>each other</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I feel myself very tired today.",
          "r": "I feel very tired today.",
          "aceita": [],
          "d": "Dica: <b>feel</b> não leva <b>-self</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: Tomas wrote to Rafa, Rafa wrote to Tomas.",
          "mostra": "They wrote to themselves.",
          "r": "They wrote to each other.",
          "aceita": [],
          "d": "Dica: a ação cruza entre os dois: <b>each other</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She got herself up at six.",
          "r": "She got up at six.",
          "aceita": [],
          "d": "Dica: <b>get up</b> não leva <b>-self</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/d9460daee277/each-other/img/live-padaria.webp",
      "leg": "An empty bakery with two chairs",
      "pede": "Look at the picture: an empty bakery with two chairs. Write 2 or 3 sentences: something you taught yourself, and something you and another person did for each other.",
      "ph": "I taught myself …",
      "ex": "I taught myself to cook with videos. My sister and I help each other with homework. I made the bread by myself."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you learn by yourself?",
          "ph": "I taught myself …",
          "ex": "I taught myself to play the guitar."
        },
        {
          "q": "Who do you help, and who helps you? Use each other.",
          "ph": "My friend and I help each other …",
          "ex": "My brother and I help each other with money."
        }
      ]
    }
  }
};
