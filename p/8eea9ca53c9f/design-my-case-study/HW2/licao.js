/* MY CASE STUDY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: contar um projeto no passado (problema, meta, resultado; I x we). B1: nenhum português. Só live-capa e live-conversa (escuras). */
window.HW2 = {
  "id": "design-my-case-study",
  "titulo": "My Case Study",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "telling a project as a story in the past: context (This project was for..., I was...) · problem · goal (Our goal was to + verb) · process (First, I... Then, we...) · result (As a result,...); I = my part, we = the team; irregular past (made, chose, grew)",
  "abrir": "Think of a project you are proud of. Who was it for?",
  "fecho": "A case study is a story in the past: <b>This project was for…</b> · <b>The problem was that…</b> · <b>Our goal was to</b> + verb · <b>First, I… Then, we…</b> · <b>As a result,…</b> Say <b>I</b> for your part and <b>we</b> for the team. Watch the irregular verbs: <i>made, chose, grew</i>.",
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
      "sub": "Mia practises a portfolio review with Leo. A new scene, about one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "The waiting room before the review",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Okay, Mia. Walk me through one project. Start with the context."
        },
        {
          "quem": "mia",
          "t": "This project was for a small cinema. I was the only designer, and I worked with two developers."
        },
        {
          "quem": "leo",
          "t": "What was the problem?"
        },
        {
          "quem": "mia",
          "t": "People left the ticket page without paying, because the seat map was hard to use on a phone."
        },
        {
          "quem": "leo",
          "t": "And your goal?"
        },
        {
          "quem": "mia",
          "t": "Our goal was to raise completed purchases by twenty percent in two months."
        },
        {
          "quem": "leo",
          "t": "How did you work?"
        },
        {
          "quem": "mia",
          "t": "First, I watched six people book a ticket. Then I tested two new seat maps, and we chose the simpler one."
        },
        {
          "quem": "leo",
          "t": "What was the result?"
        },
        {
          "quem": "mia",
          "t": "As a result, completed purchases rose by twenty-eight percent. If I did it again, I would test with older users earlier."
        },
        {
          "quem": "leo",
          "t": "Good. I heard I and we in the right places."
        }
      ],
      "perguntas": [
        {
          "q": "What was the problem in Mia's project?",
          "op": [
            "The seat map was hard to use on a phone",
            "The cinema had no website",
            "The developers left the team"
          ],
          "a": 0,
          "por": "People left the ticket page without paying, because the seat map was hard to use on a phone."
        },
        {
          "q": "What was the goal?",
          "op": [
            "To raise completed purchases by twenty percent",
            "To design a new logo",
            "To open a second cinema"
          ],
          "a": 0,
          "por": "Our goal was to raise completed purchases by twenty percent in two months."
        },
        {
          "q": "What would Mia do differently?",
          "op": [
            "Test with older users earlier",
            "Work alone again",
            "Skip the research"
          ],
          "a": 0,
          "por": "If I did it again, I would test with older users earlier."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from a case study. Hear it, then say it.",
      "frases": [
        {
          "t": "This project was for a small cinema, and I was the only designer.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "First, I watched six people book a ticket. Then, we tested two seat maps.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "As a result, completed purchases rose by twenty-eight percent.",
          "img": "../img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "The story of a project, in the past. Four quick ones.",
      "regra": "past simple · <b>Our goal was to</b> + verb · <b>First, I… Then, we…</b> · irregular verbs: <b>made, chose, grew</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "First, I interviewed eight users and tested two ideas.",
          "aceita": [],
          "d": "Hint: <b>First, I</b> + past verb, then <b>and</b> + a second past verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Last year I make a rebrand for a bakery.",
          "r": "Last year I made a rebrand for a bakery.",
          "aceita": [],
          "d": "Hint: <b>last year</b> is finished time, so use the past: <i>made</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Our goal was increase sales by 20%.",
          "r": "Our goal was to increase sales by 20%.",
          "aceita": [],
          "d": "Hint: <b>Our goal was to</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "As a result, sales growed by 25%.",
          "r": "As a result, sales grew by 25%.",
          "aceita": [],
          "d": "Hint: <b>grow</b> is irregular: grew."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-conversa.webp",
      "leg": "A waiting room before a portfolio review",
      "pede": "Look at the picture: a waiting room before a portfolio review. Write 3 sentences about one project of yours (real or invented): the problem, your goal and the result. Use the past, and <b>I</b> or <b>we</b>.",
      "ph": "The problem was that …",
      "ex": "The problem was that customers couldn't find the price list. Our goal was to make it easier to read. As a result, we got fewer questions by phone."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What was the last project you finished? Who was it for, and what was your role?",
          "ph": "This project was for … My role was …",
          "ex": "This project was for my cousin's café. My role was to design the menu."
        },
        {
          "q": "What would you do differently if you did that project again?",
          "ph": "If I did it again, I would …",
          "ex": "If I did it again, I would test the colors with real customers."
        }
      ]
    }
  }
};
