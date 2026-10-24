/* THE DEBATE NIGHT · LIÇÃO DE CASA 2.0 (23/10/2026) · revisão B1. Motor: hw2.js. JSON puro depois do "=". B1: nenhum português. */
window.HW2 = {
  "id": "b1-final-the-debate-night",
  "titulo": "The Debate Night",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c639252515f1/b1-final-the-debate-night/img/live-capa.webp",
  "alvo": "Unit 10 review: purpose (to, in order to, so that); cause and result (because of, leads to); contrast (however, despite, even though); the emphatic do (I do mean it); explaining a word you don't know",
  "abrir": "Do you prefer to debate or to listen?",
  "fecho": "<b>to / in order to / so that</b> = purpose · <b>because of + noun</b> · <b>leads to</b> = result · <b>however, despite + noun, even though + clause</b> = contrast · <b>I do mean it</b> = emphasis.",
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
      "sub": "Mia and Leo before a debate at the town theater. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/c639252515f1/b1-final-the-debate-night/img/live-capa.webp",
      "leg": "Two podiums on a stage",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, are you ready? Tonight's topic is a four-day work week."
        },
        {
          "quem": "leo",
          "t": "I think so. I wrote notes so that I won't forget anything."
        },
        {
          "quem": "mia",
          "t": "Good idea. Which side are you on?"
        },
        {
          "quem": "leo",
          "t": "Mine is for. People would be happier because of the extra day. Too much work leads to stress."
        },
        {
          "quem": "mia",
          "t": "However, some companies can't close for a day. What will you say?"
        },
        {
          "quem": "leo",
          "t": "Even though it's hard, they can take turns."
        },
        {
          "quem": "mia",
          "t": "Nice. Despite the rain, the theater is full tonight."
        },
        {
          "quem": "leo",
          "t": "I'm a little nervous, honestly."
        },
        {
          "quem": "mia",
          "t": "Don't be. You're going on stage to share your idea, not to win."
        },
        {
          "quem": "leo",
          "t": "You're right. I do want to do my best!"
        }
      ],
      "perguntas": [
        {
          "q": "Why did Leo write notes?",
          "op": [
            "So that he won't forget anything",
            "To read them to Mia",
            "Because he lost his phone"
          ],
          "a": 0,
          "por": "I wrote notes so that I won't forget anything."
        },
        {
          "q": "What does too much work lead to?",
          "op": [
            "Stress",
            "A longer week",
            "More rain"
          ],
          "a": 0,
          "por": "Too much work leads to stress."
        },
        {
          "q": "Why is Leo going on stage, says Mia?",
          "op": [
            "To share his idea",
            "To win a prize",
            "To meet a friend"
          ],
          "a": 0,
          "por": "You're going on stage to share your idea, not to win."
        }
      ]
    },
    "out": {
      "sub": "Three sentences to connect ideas. Hear it, then say it.",
      "frases": [
        {
          "t": "Despite the rain, the theater is full tonight.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She saved money in order to travel to Japan.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Even though he was tired, he finished the race.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Despite, to, because of. Four quick ones.",
      "regra": "<b>despite + noun</b> · <b>to / in order to + verb</b> = purpose · <b>because of + noun</b> · <b>even though + clause</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Despite the rain, we went to the beach.",
          "aceita": [],
          "d": "Hint: <b>despite</b> + noun, then the contrast."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Despite of the rain, we went out.",
          "r": "Despite the rain, we went out.",
          "aceita": [
            "In spite of the rain, we went out."
          ],
          "d": "Hint: <b>despite</b> never takes <i>of</i>. (<i>In spite of</i> does.)"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "He called me for to say sorry.",
          "r": "He called me to say sorry.",
          "aceita": [
            "He called me in order to say sorry."
          ],
          "d": "Hint: purpose = <b>to</b> + verb, or <b>in order to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Because the traffic, I was late.",
          "r": "Because of the traffic, I was late.",
          "aceita": [],
          "d": "Hint: <b>because of</b> + noun. <b>Because</b> needs a clause."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c639252515f1/b1-final-the-debate-night/img/live-capa.webp",
      "leg": "Two podiums on a dark stage",
      "pede": "Look at the picture: two podiums on a stage. Choose a topic (phones at school, a four-day week, or working from home) and write 2 or 3 sentences with your opinion. Use <b>because of</b>, <b>however</b> or <b>even though</b>.",
      "ph": "I believe … because of …",
      "ex": "I believe we should work four days a week because of stress. However, some jobs are different. Even though it's hard, they can take turns."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Why do people work? Give two reasons with to, in order to or so that.",
          "ph": "People work to … / so that …",
          "ex": "People work to pay the bills, and so that their kids can study."
        },
        {
          "q": "Something good that happened despite a problem?",
          "ph": "Despite …, I …",
          "ex": "Despite the traffic, I arrived on time."
        }
      ]
    }
  }
};
