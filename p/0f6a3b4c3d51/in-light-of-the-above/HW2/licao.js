/* IN LIGHT OF THE ABOVE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: conectores formais do relatório. C1: nenhum português. */
window.HW2 = {
  "id": "in-light-of-the-above",
  "titulo": "In Light of the Above",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/0f6a3b4c3d51/in-light-of-the-above/img/live-esteira.webp",
  "alvo": "formal report connectors: in light of + noun (or the fact that + sentence), notwithstanding + noun (before or after it, no 'of'), insofar as + sentence (limits a claim), a plan whereby + sentence, ; hence + noun / . Hence, + sentence; never at the light of, notwithstanding of, in the measure that, hence why",
  "abrir": "Think of a decision you had to defend. What was your strongest reason?",
  "fecho": "A report is an argument, and each connector is a kind of step. <b>In light of</b> + noun = the evidence. <b>Notwithstanding</b> + noun = despite it, before or after the noun, never <i>notwithstanding of</i>. <b>Insofar as</b> + sentence = a limit. <b>A plan whereby</b> + sentence = the method. <b>; hence</b> + noun, or <b>. Hence,</b> + sentence = the result, never <i>hence why</i>.",
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
      "sub": "Mia and Leo check a report before the board. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/0f6a3b4c3d51/in-light-of-the-above/img/live-sala.webp",
      "leg": "The sorting hall",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, my draft for the board goes out at three. Can you check the logic?"
        },
        {
          "quem": "leo",
          "t": "Sure. First line: in light of the trial results, you recommend a second phase. Good."
        },
        {
          "quem": "mia",
          "t": "The trial ran six weeks. In light of the fact that errors fell by a third, I think it is fair."
        },
        {
          "quem": "leo",
          "t": "It is. Now the delay. The late start notwithstanding, the team finished on time. Say that."
        },
        {
          "quem": "mia",
          "t": "Yes. And I want to call the trial a success."
        },
        {
          "quem": "leo",
          "t": "Careful. It is a success insofar as it cuts errors. We have no cost data yet."
        },
        {
          "quem": "mia",
          "t": "Right. And the board asked about the method for the new sites."
        },
        {
          "quem": "leo",
          "t": "Write a plan whereby each site earns the next stage after a review."
        },
        {
          "quem": "mia",
          "t": "Good. Then the end: the savings cover the cost in three years. Hence, we recommend phase two."
        },
        {
          "quem": "leo",
          "t": "Hence, with a comma, and a new sentence. Perfect. Send it."
        }
      ],
      "perguntas": [
        {
          "q": "Why does Leo warn Mia about the word success?",
          "op": [
            "It is true in one way, and the costs are unknown",
            "The trial failed",
            "The board dislikes the word"
          ],
          "a": 0,
          "por": "It is a success insofar as it cuts errors. We have no cost data yet."
        },
        {
          "q": "What does the plan for the new sites say?",
          "op": [
            "Each site earns the next stage after a review",
            "All sites open at once",
            "The board chooses every site"
          ],
          "a": 0,
          "por": "A plan whereby each site earns the next stage after a review."
        },
        {
          "q": "How does Mia end the report?",
          "op": [
            "With the savings, then a recommendation",
            "With an apology",
            "With a question to the board"
          ],
          "a": 0,
          "por": "The savings cover the cost in three years. Hence, we recommend phase two."
        }
      ]
    },
    "out": {
      "sub": "Three lines from the report. Hear it, then say it.",
      "frases": [
        {
          "t": "In light of the trial results, we recommend a second phase.",
          "img": "https://wolf-labs.pages.dev/p/0f6a3b4c3d51/in-light-of-the-above/img/live-esteira.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The late start notwithstanding, the team finished on time.",
          "img": "https://wolf-labs.pages.dev/p/0f6a3b4c3d51/in-light-of-the-above/img/live-sala.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It is a success insofar as it cuts errors.",
          "img": "https://wolf-labs.pages.dev/p/0f6a3b4c3d51/in-light-of-the-above/img/live-mesa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Four connectors, four traps. Four quick ones.",
      "regra": "<b>in light of</b> + noun · <b>notwithstanding</b> + noun (no <i>of</i>) · <b>insofar as</b> + sentence · <b>whereby</b> + sentence · <b>; hence</b> / <b>. Hence,</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The delay notwithstanding, the team finished on time.",
          "aceita": [],
          "d": "Hint: <b>notwithstanding</b> can follow the noun. No <i>of</i> after it."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one connector is wrong.",
          "mostra": "At the light of the results, we continue.",
          "r": "In light of the results, we continue.",
          "aceita": [
            "In the light of the results, we continue."
          ],
          "d": "Hint: the fixed block is <b>in light of</b>, never <i>at the light of</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: use the right connector.",
          "mostra": "It helps in the measure that it is cheap.",
          "r": "It helps insofar as it is cheap.",
          "aceita": [],
          "d": "Hint: a limit on a claim is <b>insofar as</b> + sentence."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is too many.",
          "mostra": "Costs rose; hence why we stopped.",
          "r": "Costs rose; hence we stopped.",
          "aceita": [
            "Costs rose; hence, we stopped.",
            "Costs rose. Hence, we stopped."
          ],
          "d": "Hint: <b>hence</b> already means <i>so</i>. Never <i>hence why</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/0f6a3b4c3d51/in-light-of-the-above/img/live-pasta.webp",
      "leg": "A report draft, tabs and a pen",
      "pede": "Look at the picture: a report draft with tabs. Write 2 or 3 sentences recommending a real decision from your work or life. Use <b>in light of, notwithstanding, insofar as, whereby</b> or <b>hence</b>.",
      "ph": "In light of …, I recommend …",
      "ex": "In light of the price, I recommend a used car. The age notwithstanding, it is reliable. It is a good deal insofar as it is safe."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What decision did you explain to someone this year? What was your evidence?",
          "ph": "In light of …, I decided …",
          "ex": "In light of the rent, I decided to share a flat."
        },
        {
          "q": "What did you do in spite of a big problem?",
          "ph": "Notwithstanding …, I …",
          "ex": "Notwithstanding the rain, I finished the race."
        }
      ]
    }
  }
};
