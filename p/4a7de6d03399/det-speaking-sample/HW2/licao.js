/* SPEAKING SAMPLE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: historia em cinco passos com passado e conectivos. B1: nenhum portugues. So imagens live-* (escuras). */
window.HW2 = {
  "id": "det-speaking-sample",
  "titulo": "Speaking Sample",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4a7de6d03399/det-speaking-sample/img/live-conversa.webp",
  "alvo": "telling a story in five steps (situation, challenge, action, result, lesson) with past tenses and linkers: Two years ago, The challenge was, So I decided to, As a result, What I learned is that",
  "abrir": "What is one thing you did last year that you are proud of?",
  "fecho": "Five steps, five short lines: <b>Two years ago, I...</b> (situation) · <b>The challenge was...</b> · <b>So I decided to + verb</b> · <b>As a result, ...</b> · <b>What I learned is that...</b>. Finished time = past simple: <i>Two years ago I moved</i>, never <i>I have moved</i>.",
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
      "sub": "Mia coaches Leo for a long answer. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/4a7de6d03399/det-speaking-sample/img/live-conversa.webp",
      "leg": "Bright bulbs around a dark mirror",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you have thirty seconds to prepare. Tell me about a challenge you faced."
        },
        {
          "quem": "leo",
          "t": "Two years ago, I started a night course in design."
        },
        {
          "quem": "mia",
          "t": "Good start. That's your situation. Now the challenge."
        },
        {
          "quem": "leo",
          "t": "The challenge was time. I worked all day, and I was always tired in class."
        },
        {
          "quem": "mia",
          "t": "And what did you do about it?"
        },
        {
          "quem": "leo",
          "t": "So I decided to study for twenty minutes every morning, before work."
        },
        {
          "quem": "mia",
          "t": "Nice. Now the result."
        },
        {
          "quem": "leo",
          "t": "As a result, I finished the course with good grades."
        },
        {
          "quem": "mia",
          "t": "And the last step is the lesson."
        },
        {
          "quem": "leo",
          "t": "What I learned is that small habits beat big plans."
        },
        {
          "quem": "mia",
          "t": "That's five steps. Now say it again, and look at the camera this time."
        }
      ],
      "perguntas": [
        {
          "q": "What was Leo's challenge?",
          "op": [
            "He had little time and was tired",
            "He didn't like design",
            "He lost his notebook"
          ],
          "a": 0,
          "por": "The challenge was time. I worked all day, and I was always tired in class."
        },
        {
          "q": "What did Leo decide to do?",
          "op": [
            "Study for twenty minutes every morning",
            "Quit the course",
            "Study only on weekends"
          ],
          "a": 0,
          "por": "So I decided to study for twenty minutes every morning, before work."
        },
        {
          "q": "What is the last step of the story?",
          "op": [
            "What you learned",
            "What you will buy",
            "Who your teacher is"
          ],
          "a": 0,
          "por": "And the last step is the lesson."
        }
      ]
    },
    "out": {
      "sub": "Three steps of a story. Hear it, then say it.",
      "frases": [
        {
          "t": "Two years ago, I started a night course while I was working full time.",
          "img": "https://wolf-labs.pages.dev/p/4a7de6d03399/det-speaking-sample/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The challenge was time, so I decided to plan my week every Sunday.",
          "img": "https://wolf-labs.pages.dev/p/4a7de6d03399/det-speaking-sample/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "As a result, I passed the exam, and what I learned is that small habits work.",
          "img": "https://wolf-labs.pages.dev/p/4a7de6d03399/det-speaking-sample/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Past tenses and linkers. Four quick ones.",
      "regra": "<b>Two years ago</b> + past simple · <b>didn't</b> + plain verb · <b>decided to</b> + plain verb · <b>As a result,</b> ...",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "As a result, I made four new friends.",
          "aceita": [],
          "d": "Hint: <b>As a result</b> opens the result step."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Two years ago I have moved to Recife.",
          "r": "Two years ago I moved to Recife.",
          "aceita": [
            "Two years ago, I moved to Recife."
          ],
          "d": "Hint: <b>two years ago</b> is finished time, so past simple."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The challenge was that I didn't knew anybody.",
          "r": "The challenge was that I didn't know anybody.",
          "aceita": [],
          "d": "Hint: after <b>didn't</b>, the plain verb: <i>know</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "So I decided to joining a running group.",
          "r": "So I decided to join a running group.",
          "aceita": [],
          "d": "Hint: <b>decided to</b> + plain verb. No -ing."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4a7de6d03399/det-speaking-sample/img/live-conversa.webp",
      "leg": "Bright bulbs around a dark mirror",
      "pede": "Look at the picture: bright bulbs around a mirror, backstage. Plan your story about a challenge you faced. Write <b>five short lines</b>, one for each step.",
      "ph": "Situation: ... Challenge: ... Action: ...",
      "ex": "Last year, I started a night course. The challenge was time. So I decided to plan my week. As a result, I passed. What I learned is that planning helps."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Tell me about a challenge you faced. Give the situation and the challenge.",
          "ph": "Last year, I ... The challenge was ...",
          "ex": "Last year, I started a new job in a big office. The challenge was that I was very shy in meetings."
        },
        {
          "q": "What did you do about it, and what did you learn?",
          "ph": "So I decided to ... What I learned is that ...",
          "ex": "So I decided to prepare one question for every meeting. What I learned is that practice beats fear."
        }
      ]
    }
  }
};
