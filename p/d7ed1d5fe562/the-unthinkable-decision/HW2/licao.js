/* THE UNTHINKABLE DECISION · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: may not be able to / far + comparativo / consequência (unless, otherwise). B2: nenhum português. Só imagens live-* (já escuras). Falas originais. */
window.HW2 = {
  "id": "the-unthinkable-decision",
  "titulo": "The Unthinkable Decision",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/d7ed1d5fe562/the-unthinkable-decision/img/live-capa.webp",
  "alvo": "may not be able to (perhaps I can't); far + comparative (far bigger, far less time); the consequence of not acting: unless + affirmative, otherwise, if we don't",
  "abrir": "What may you not be able to do this year, even if you try?",
  "fecho": "<b>may not be able to</b> + plain verb = perhaps I can't: <i>We may not be able to finish.</i> <b>far</b> + comparative = much: <i>far bigger, far slower</i>, never <i>far more bigger</i>. A consequence: <b>unless</b> + affirmative (<i>Unless we hurry...</i>) or <b>otherwise</b> (<i>Hurry, otherwise we lose time.</i>).",
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
      "sub": "Mia and Leo plan for a big storm in the control room. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/d7ed1d5fe562/the-unthinkable-decision/img/live-mapa.webp",
      "leg": "The map table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the storm map is ready. This storm is far bigger than the one last year."
        },
        {
          "quem": "mia",
          "t": "I know. We may not be able to reach every street before it hits."
        },
        {
          "quem": "leo",
          "t": "Then we have to choose. The team is far smaller than we need, and the roads are far slower in the rain."
        },
        {
          "quem": "mia",
          "t": "Right. Unless we split into two groups, we will finish far too late."
        },
        {
          "quem": "leo",
          "t": "Two groups, then. I'll take the north side."
        },
        {
          "quem": "mia",
          "t": "Good. Start with the old tower, otherwise the signal will drop for the whole district."
        },
        {
          "quem": "leo",
          "t": "And the south side?"
        },
        {
          "quem": "mia",
          "t": "I may not be able to get there before the rain. If the bridge closes, I'll call you."
        },
        {
          "quem": "leo",
          "t": "Understood. If we move now, we will still have enough time."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo say about the storm?",
          "op": [
            "It is far bigger than last year's",
            "It is the same as last year's",
            "It is far weaker than last year's"
          ],
          "a": 0,
          "por": "This storm is far bigger than the one last year."
        },
        {
          "q": "What happens unless they split into two groups?",
          "op": [
            "They will finish far too late",
            "They will finish early",
            "They will stop the storm"
          ],
          "a": 0,
          "por": "Unless we split into two groups, we will finish far too late."
        },
        {
          "q": "What does Mia say about the south side?",
          "op": [
            "She may not be able to get there before the rain",
            "She will go there first",
            "She wants Leo to stay home"
          ],
          "a": 0,
          "por": "I may not be able to get there before the rain."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a plan. Hear it, then say it.",
      "frases": [
        {
          "t": "We may not be able to cross the city before the storm.",
          "img": "https://wolf-labs.pages.dev/p/d7ed1d5fe562/the-unthinkable-decision/img/live-ceu.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "This map is far more detailed than the old one.",
          "img": "https://wolf-labs.pages.dev/p/d7ed1d5fe562/the-unthinkable-decision/img/live-mapa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Choose a plan now, otherwise we will lose the whole evening.",
          "img": "https://wolf-labs.pages.dev/p/d7ed1d5fe562/the-unthinkable-decision/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "may not be able to, far and the consequence. Four quick ones.",
      "regra": "<b>may not be able to</b> + plain verb · <b>far</b> + comparative (far faster) · <b>unless</b> + affirmative · <b>otherwise</b> + consequence.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We may not be able to finish today.",
          "aceita": [],
          "d": "Hint: <b>may not be able to</b> + plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We may not can finish before the rain.",
          "r": "We may not be able to finish before the rain.",
          "aceita": [
            "We might not be able to finish before the rain."
          ],
          "d": "Hint: after <b>may not</b>, use <b>be able to</b>, never <i>can</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "This road is far more faster than the old one.",
          "r": "This road is far faster than the old one.",
          "aceita": [
            "This road is much faster than the old one."
          ],
          "d": "Hint: <b>faster</b> is already a comparative. Never <i>more faster</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Unless you don't hurry, you will miss the bus.",
          "r": "Unless you hurry, you will miss the bus.",
          "aceita": [
            "If you don't hurry, you will miss the bus."
          ],
          "d": "Hint: <b>unless</b> already means <i>if not</i>, so the verb stays affirmative."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/d7ed1d5fe562/the-unthinkable-decision/img/live-capa.webp",
      "leg": "A dark room with a big map table",
      "pede": "Look at the picture: a dark room with a big map table. Write 2 or 3 sentences about a busy week: something you <b>may not be able to</b> do, something <b>far</b> harder or easier than before, and a consequence with <b>unless</b> or <b>otherwise</b>.",
      "ph": "This week I may not be able to … Unless …",
      "ex": "This week I may not be able to go to the gym. My schedule is far busier than last month. Unless I leave early, I will miss the train."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What may you not be able to do this month? Why?",
          "ph": "I may not be able to … because …",
          "ex": "I may not be able to travel this month, because my work is far busier."
        },
        {
          "q": "What happens if you don't plan your week? Use unless or otherwise.",
          "ph": "Unless I … / I plan, otherwise …",
          "ex": "Unless I make a list, I forget everything. I plan on Sunday, otherwise Monday is chaos."
        }
      ]
    }
  }
};
