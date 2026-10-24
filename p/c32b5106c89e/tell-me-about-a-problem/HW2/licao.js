/* TELL ME ABOUT A PROBLEM · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: contar problema em ordem (STAR), passado simples ativo, at the end of. B1: nenhum português na lição. Só imagens live-* escuras (lum < 50). */
window.HW2 = {
  "id": "tell-me-about-a-problem",
  "titulo": "Tell Me About a Problem",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c32b5106c89e/tell-me-about-a-problem/img/live-capa.webp",
  "alvo": "telling a work story in order with STAR (situation, task, action, result): first, then, after that, in the end; past simple (I solved, we fixed); never I was solved the problem, never In the end of the project (at the end of), never We have finished it last week",
  "abrir": "Think of a problem you solved. How did it start?",
  "fecho": "<b>STAR</b>: Situation, Task, Action, Result. <b>Order</b> the action: <i>First, I read the logs. Then I found the bug. After that, I fixed it. In the end, the app worked.</i> Past simple, active: <i>I solved the problem</i>, never <i>I was solved</i>. <b>At the end of</b> the project, <b>in the end</b> = finally. A finished time (<i>last week</i>) = past simple, not <i>have finished</i>.",
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
      "sub": "Mia practices for an interview with Leo. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/c32b5106c89e/tell-me-about-a-problem/img/live-a.webp",
      "leg": "A microphone on a dark desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I have an interview with Marta tomorrow. She'll ask: tell me about a problem at work."
        },
        {
          "quem": "leo",
          "t": "Use STAR. First, the situation. What happened?"
        },
        {
          "quem": "mia",
          "t": "Last year, our app crashed every Monday morning. Customers couldn't pay."
        },
        {
          "quem": "leo",
          "t": "Good. Now the task. What was your job?"
        },
        {
          "quem": "mia",
          "t": "My task was to find the cause and fix it before the end of the month."
        },
        {
          "quem": "leo",
          "t": "Now the action. What did you do, step by step?"
        },
        {
          "quem": "mia",
          "t": "First, I read the logs. Then I found a slow query. After that, I added an index to the database and tested it."
        },
        {
          "quem": "leo",
          "t": "And the result? Use a number."
        },
        {
          "quem": "mia",
          "t": "In the end, the app stopped crashing, and payments were thirty percent faster."
        },
        {
          "quem": "leo",
          "t": "Great. One more question: what would you do differently?"
        },
        {
          "quem": "mia",
          "t": "I would add an alert, so we'd know about the problem sooner."
        }
      ],
      "perguntas": [
        {
          "q": "What was the problem in Mia's story?",
          "op": [
            "The app crashed every Monday",
            "The database was deleted",
            "The customers left"
          ],
          "a": 0,
          "por": "Our app crashed every Monday morning."
        },
        {
          "q": "What was the cause of the problem?",
          "op": [
            "A slow query",
            "A broken button",
            "A missing password"
          ],
          "a": 0,
          "por": "Then I found a slow query."
        },
        {
          "q": "What would Mia do differently?",
          "op": [
            "Add an alert",
            "Read the logs again",
            "Change the team"
          ],
          "a": 0,
          "por": "I would add an alert."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for a story. Hear it, then say it.",
      "frases": [
        {
          "t": "First, I read the logs. Then I found a slow query.",
          "img": "https://wolf-labs.pages.dev/p/c32b5106c89e/tell-me-about-a-problem/img/live-a.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "After that, I added an index to the database.",
          "img": "https://wolf-labs.pages.dev/p/c32b5106c89e/tell-me-about-a-problem/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "In the end, the app stopped crashing.",
          "img": "https://wolf-labs.pages.dev/p/c32b5106c89e/tell-me-about-a-problem/img/live-a.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "In the end, at the end of, I solved, last week. Four quick ones.",
      "regra": "<b>First, then, after that, in the end</b> · <b>I solved</b> (not <i>I was solved</i>) · <b>at the end of</b> + thing · finished time = past simple.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "In the end, we fixed the problem in two days.",
          "aceita": [],
          "d": "Hint: <b>in the end</b> + the result."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "In the end of the project, we fixed it.",
          "r": "At the end of the project, we fixed it.",
          "aceita": [],
          "d": "Hint: with <b>of</b>, use <b>at the end of</b> + thing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I was solved the problem.",
          "r": "I solved the problem.",
          "aceita": [],
          "d": "Hint: you did the action, so use the active past: <b>solved</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We have finished it last week.",
          "r": "We finished it last week.",
          "aceita": [],
          "d": "Hint: <b>last week</b> is finished time, so use the past simple."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c32b5106c89e/tell-me-about-a-problem/img/live-capa.webp",
      "leg": "An empty room with a lamp, ready for an interview",
      "pede": "Look at the picture: a dark room ready for an interview. Write a short story about a problem, in 3 sentences. Use <b>first</b>, <b>then</b> or <b>after that</b>, and <b>in the end</b>.",
      "ph": "First, I …",
      "ex": "First, I found the bug in the login page. Then I wrote a test and fixed it. In the end, the page worked again."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Tell me about a time you had a problem at work or in class. What was it?",
          "ph": "Once, I had a problem with …",
          "ex": "Once, I had a problem with a deadline. My project was late."
        },
        {
          "q": "What did you do, and what happened in the end?",
          "ph": "First, I … In the end, …",
          "ex": "First, I asked a teammate for help. In the end, I finished on time."
        }
      ]
    }
  }
};
