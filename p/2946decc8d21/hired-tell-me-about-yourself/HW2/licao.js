/* TELL ME ABOUT YOURSELF · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: pitch de 60 s: present simple, past simple, present perfect, proud of + -ing. B1+ (tratado como B1): nenhum português. Candidata fictícia. */
window.HW2 = {
  "id": "hired-tell-me-about-yourself",
  "titulo": "Tell Me About Yourself",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2946decc8d21/hired-tell-me-about-yourself/img/live-capa.webp",
  "alvo": "the 60-second pitch: present simple (who I am) · past simple (where I started) · present perfect with since / for (experience) · I'm proud of + -ing; never I work here since, experience in lead, proud of cut",
  "abrir": "If a stranger at a job interview says \"Tell me about yourself\", what do you say first?",
  "fecho": "Start with your <b>profession</b>, not your age: <i>I'm a ..., and I've worked in ... for four years.</i> Past simple for the start: <i>I started at...</i>. Present perfect for experience: <b>since</b> + a point, <b>for</b> + a length. <b>Proud of</b> + -ing.",
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
      "sub": "A mock interview. Leo asks, Mia answers. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/2946decc8d21/hired-tell-me-about-yourself/img/live-capa.webp",
      "leg": "An interview room at sunset",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Thanks for coming in. Let's start easy: tell me about yourself."
        },
        {
          "quem": "mia",
          "t": "Sure. I'm a project coordinator, and I've worked in event companies for five years."
        },
        {
          "quem": "leo",
          "t": "Where did you start?"
        },
        {
          "quem": "mia",
          "t": "I began as an assistant at a small agency, where I organized three events a month."
        },
        {
          "quem": "leo",
          "t": "And what have you done since then?"
        },
        {
          "quem": "mia",
          "t": "Since 2022, I've managed a team of four. I'm proudest of cutting our costs by twenty percent."
        },
        {
          "quem": "leo",
          "t": "That's impressive. Why this job?"
        },
        {
          "quem": "mia",
          "t": "I understand you're looking for someone who can organize big conferences. That's exactly what I enjoy doing."
        },
        {
          "quem": "leo",
          "t": "Thank you. That was clear, and short."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia do?",
          "op": [
            "She is a project coordinator",
            "She is an assistant",
            "She is a teacher"
          ],
          "a": 0,
          "por": "I'm a project coordinator, and I've worked in event companies for five years."
        },
        {
          "q": "What is Mia proudest of?",
          "op": [
            "Cutting costs by twenty percent",
            "Starting a small agency",
            "Organizing three events a month"
          ],
          "a": 0,
          "por": "I'm proudest of cutting our costs by twenty percent."
        },
        {
          "q": "What does Mia understand the company wants?",
          "op": [
            "Someone who can organize big conferences",
            "Someone who speaks three languages",
            "Someone who starts tomorrow"
          ],
          "a": 0,
          "por": "I understand you're looking for someone who can organize big conferences."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for your pitch. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm a project coordinator with five years of experience.",
          "img": "https://wolf-labs.pages.dev/p/2946decc8d21/hired-tell-me-about-yourself/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I began as an assistant, where I organized three events a month.",
          "img": "https://wolf-labs.pages.dev/p/2946decc8d21/hired-tell-me-about-yourself/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Since 2022, I've managed a team of four.",
          "img": "https://wolf-labs.pages.dev/p/2946decc8d21/hired-tell-me-about-yourself/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your pitch in the right tense. Four quick ones.",
      "regra": "<b>I'm a ...</b> (who I am) · <b>I started ...</b> (past) · <b>I've worked ... since / for</b> (experience) · <b>proud of</b> + -ing.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I started my career at a small agency.",
          "aceita": [],
          "d": "Hint: past simple for where you started."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I work in sales since 2022.",
          "r": "I have worked in sales since 2022.",
          "aceita": [
            "I've worked in sales since 2022.",
            "I have been working in sales since 2022.",
            "I've been working in sales since 2022."
          ],
          "d": "Hint: it started in 2022 and continues, so present perfect: <b>have worked</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I have experience in lead teams.",
          "r": "I have experience in leading teams.",
          "aceita": [
            "I have experience leading teams."
          ],
          "d": "Hint: after <b>in</b> use -ing: <i>leading</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm most proud of cut our costs.",
          "r": "I'm most proud of cutting our costs.",
          "aceita": [
            "I'm most proud of having cut our costs."
          ],
          "d": "Hint: after <b>proud of</b> use -ing."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2946decc8d21/hired-tell-me-about-yourself/img/live-conversa.webp",
      "leg": "Two cups of coffee before the interview",
      "pede": "Look at the picture: two cups of coffee before an interview. Write 2 or 3 sentences of your own pitch: who you are, one thing you have done, and why this job. No address or phone number.",
      "ph": "I'm a … and I've … for …",
      "ex": "I'm a student, and I've studied marketing for two years. I started a small page for a local shop, where I posted twice a week. I'm looking for a junior marketing job."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How long have you been studying or working in your area?",
          "ph": "I've … for …",
          "ex": "I've worked in sales for three years."
        },
        {
          "q": "What is one thing you are proud of, at work or at school?",
          "ph": "I'm proud of …",
          "ex": "I'm proud of finishing my course while working full time."
        }
      ]
    }
  }
};
