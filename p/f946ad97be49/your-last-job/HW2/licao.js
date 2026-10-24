/* YOUR LAST JOB · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: passado simples x present perfect (acabou x continua). A2: dicas em português só nas notas (d). Só live-* escuras. */
window.HW2 = {
  "id": "your-last-job",
  "titulo": "Your Last Job",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f946ad97be49/your-last-job/img/live-potes.webp",
  "alvo": "past simple for a job that is finished (I worked at Bookland from 2017 to 2021) and present perfect for a story that is still going (I have worked here since 2021, so far, never); for / since; never I work here for five years, never have worked + in 2019",
  "abrir": "Think of your first job. Is it finished, or is it still going?",
  "fecho": "<b>Finished</b> = the past: <i>I worked at Bookland from 2017 to 2021.</i> <b>Still going</b> = <b>have + third form</b>: <i>I have worked here since 2021.</i> <b>Since</b> + the start, <b>for</b> + the length. A finished time (<i>in 2019</i>) never goes with <i>have worked</i>.",
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
      "sub": "Mia and Leo before a job interview. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/f946ad97be49/your-last-job/img/live-escritorio.webp",
      "leg": "An office over the harbor",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, your interview is tomorrow. Tell me about your last job."
        },
        {
          "quem": "mia",
          "t": "I worked at Bookland from 2017 to 2021. I sold books and I trained two new people."
        },
        {
          "quem": "leo",
          "t": "Is that job finished?"
        },
        {
          "quem": "mia",
          "t": "Yes, it is. Now I work at Harbor Logistics. I have worked there since 2021."
        },
        {
          "quem": "leo",
          "t": "And what have you done there?"
        },
        {
          "quem": "mia",
          "t": "I have managed a small team for two years. I have never missed a deadline."
        },
        {
          "quem": "leo",
          "t": "Have you ever managed a budget?"
        },
        {
          "quem": "mia",
          "t": "No, I haven't. But I have helped my boss with one. Last year I made a report for her."
        },
        {
          "quem": "leo",
          "t": "Good answer. Say it slowly tomorrow."
        },
        {
          "quem": "mia",
          "t": "Thanks, Leo. I have never had an interview in English before."
        }
      ],
      "perguntas": [
        {
          "q": "How long did Mia work at Bookland?",
          "op": [
            "From 2017 to 2021",
            "Since 2021",
            "For two months"
          ],
          "a": 0,
          "por": "I worked at Bookland from 2017 to 2021."
        },
        {
          "q": "Which job is still going?",
          "op": [
            "Harbor Logistics",
            "Bookland",
            "None of them"
          ],
          "a": 0,
          "por": "Now I work at Harbor Logistics. I have worked there since 2021."
        },
        {
          "q": "Has Mia ever managed a budget?",
          "op": [
            "No, but she helped her boss with one",
            "Yes, for two years",
            "Yes, at Bookland"
          ],
          "a": 0,
          "por": "No, I haven't. But I have helped my boss with one."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for an interview. Hear it, then say it.",
      "frases": [
        {
          "t": "I worked at Bookland from 2017 to 2021.",
          "img": "https://wolf-labs.pages.dev/p/f946ad97be49/your-last-job/img/live-escritorio.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I have worked at Harbor Logistics since 2021.",
          "img": "https://wolf-labs.pages.dev/p/f946ad97be49/your-last-job/img/live-reuniao.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I have never managed a budget, but I want to.",
          "img": "https://wolf-labs.pages.dev/p/f946ad97be49/your-last-job/img/live-potes.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Finished or still going? Four quick ones.",
      "regra": "<b>finished</b> = past (<i>worked</i>) · <b>still going</b> = <b>have worked</b> · <b>since</b> + start · <b>for</b> + length.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I have worked here for five years.",
          "aceita": [],
          "d": "Dica: ainda continua, então <b>have worked</b> + <b>for</b> + o tempo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I work here for five years.",
          "r": "I have worked here for five years.",
          "aceita": [
            "I've worked here for five years."
          ],
          "d": "Dica: começou e continua: use <b>have worked</b>, não o presente simples."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I have worked at Bookland in 2019.",
          "r": "I worked at Bookland in 2019.",
          "aceita": [],
          "d": "Dica: <b>in 2019</b> é um tempo que acabou: passado simples, <b>worked</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I worked here since 2021.",
          "r": "I have worked here since 2021.",
          "aceita": [
            "I've worked here since 2021."
          ],
          "d": "Dica: <b>since</b> pede <b>have worked</b>, porque ainda continua."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f946ad97be49/your-last-job/img/live-potes.webp",
      "leg": "Glass jars on a dark shelf",
      "pede": "Look at the picture: glass jars on a shelf, one for each part of a story. Write 2 or 3 sentences about your jobs or studies: one thing that is <b>finished</b> and one that is <b>still going</b>.",
      "ph": "I worked at … from … to …",
      "ex": "I worked at a shop from 2018 to 2020. Now I work at an office. I have worked there since 2021."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What was your first job? When was it?",
          "ph": "My first job was … in …",
          "ex": "My first job was in a pizza place in 2015."
        },
        {
          "q": "What have you done in your work or studies so far?",
          "ph": "I have … so far.",
          "ex": "I have learned a lot of English so far."
        }
      ]
    }
  }
};
