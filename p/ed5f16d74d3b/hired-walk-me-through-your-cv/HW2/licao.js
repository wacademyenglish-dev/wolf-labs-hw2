/* WALK ME THROUGH YOUR CV · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past simple x present perfect (carreira). B1: nenhum português. Curso WOLF HIRED, histórias e empresas fictícias. */
window.HW2 = {
  "id": "hired-walk-me-through-your-cv",
  "titulo": "Walk Me Through Your CV",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ed5f16d74d3b/hired-walk-me-through-your-cv/img/live-capa.webp",
  "alvo": "telling your career: past simple for finished jobs (I worked there in 2019, I left two years ago, I was promoted), present perfect + since / for for the current job (I have worked here since 2022); never I work here since, never I have worked there in 2019, never since two years",
  "abrir": "Say your career in one breath: where do you work, and since when?",
  "fecho": "<b>Finished</b> job: past simple (<i>I worked there for two years; I left in 2022</i>). <b>Still true</b>: <b>have + worked</b> with <b>since</b> or <b>for</b> (<i>I have worked here since 2022</i>). <b>Ago</b> goes with the past simple (<i>two years ago</i>); <b>since</b> needs a starting point. Someone promoted you: <i>I was promoted</i>. About 90 seconds, then a clear next step.",
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
      "sub": "Mia and Leo before her interview. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/ed5f16d74d3b/hired-walk-me-through-your-cv/img/live-conversa.webp",
      "leg": "The corridor before the interview",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Okay, Mia, a mock interview. Walk me through your CV."
        },
        {
          "quem": "mia",
          "t": "Sure. I'm a marketing assistant with five years of experience. I have worked at Brightway Media since 2022."
        },
        {
          "quem": "leo",
          "t": "And before that?"
        },
        {
          "quem": "mia",
          "t": "Before that, I worked at a small agency for two years. I left in 2022."
        },
        {
          "quem": "leo",
          "t": "What was your best result at the agency?"
        },
        {
          "quem": "mia",
          "t": "I was promoted after one year, because I raised our online sales by twenty percent."
        },
        {
          "quem": "leo",
          "t": "Why did you leave?"
        },
        {
          "quem": "mia",
          "t": "I was looking for a bigger team. At Brightway, I have led three campaigns since January."
        },
        {
          "quem": "leo",
          "t": "Good, but it is too long. They want ninety seconds."
        },
        {
          "quem": "mia",
          "t": "You are right. Finished jobs in the past simple, my current job with have, and a short ending."
        },
        {
          "quem": "leo",
          "t": "Exactly. And why this job now?"
        },
        {
          "quem": "mia",
          "t": "Because this role is the right next step for me."
        }
      ],
      "perguntas": [
        {
          "q": "Where has Mia worked since 2022?",
          "op": [
            "At Brightway Media",
            "At a small agency",
            "At a bank"
          ],
          "a": 0,
          "por": "I have worked at Brightway Media since 2022."
        },
        {
          "q": "Why was Mia promoted at the agency?",
          "op": [
            "She raised online sales by twenty percent",
            "She worked there for two years",
            "She led three campaigns"
          ],
          "a": 0,
          "por": "I was promoted after one year, because I raised our online sales by twenty percent."
        },
        {
          "q": "What does Leo say about her answer?",
          "op": [
            "It is too long",
            "It is too short",
            "It has no numbers"
          ],
          "a": 0,
          "por": "Good, but it is too long. They want ninety seconds."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from a CV answer. Hear it, then say it.",
      "frases": [
        {
          "t": "I have worked at Brightway Media since 2022.",
          "img": "https://wolf-labs.pages.dev/p/ed5f16d74d3b/hired-walk-me-through-your-cv/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Before that, I worked at a small agency for two years.",
          "img": "https://wolf-labs.pages.dev/p/ed5f16d74d3b/hired-walk-me-through-your-cv/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I was promoted after one year because I raised our sales.",
          "img": "https://wolf-labs.pages.dev/p/ed5f16d74d3b/hired-walk-me-through-your-cv/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Finished or still true? Four quick ones.",
      "regra": "<b>Finished</b> = past simple (I worked, I left, <b>two years ago</b>) · <b>Still true</b> = <b>have worked</b> + <b>since</b> / <b>for</b> · <b>since</b> needs a starting point.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I have worked at this company since March.",
          "aceita": [],
          "d": "Hint: it is still true, so <b>have worked</b> + <b>since</b> + a starting point."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I work here since 2022.",
          "r": "I have worked here since 2022.",
          "aceita": [
            "I have been working here since 2022."
          ],
          "d": "Hint: it started in 2022 and it continues, so <b>have worked</b>, not <i>work</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the job is finished. One part is wrong.",
          "mostra": "I have worked at a bank in 2019.",
          "r": "I worked at a bank in 2019.",
          "aceita": [],
          "d": "Hint: <b>in 2019</b> is a finished time, so the past simple: <b>worked</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I joined the company since two years.",
          "r": "I joined the company two years ago.",
          "aceita": [
            "Two years ago I joined the company."
          ],
          "d": "Hint: <b>two years ago</b> with the past simple. <b>Since</b> needs a starting point."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/ed5f16d74d3b/hired-walk-me-through-your-cv/img/live-capa.webp",
      "leg": "A CV on the desk, a lamp, a pen",
      "pede": "Look at the picture: a CV on a desk. Tell your career in 2 or 3 sentences: your current job or study with <b>since</b> or <b>for</b>, and one finished job with the past simple.",
      "ph": "I have worked as … since …",
      "ex": "I have worked at a small shop since 2023. Before that, I studied design for three years."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is your current job or study? Since when?",
          "ph": "I have … since …",
          "ex": "I have worked as a cashier since 2023."
        },
        {
          "q": "What was your first job? How long ago did you start it?",
          "ph": "My first job was … I started it … ago.",
          "ex": "My first job was in a bakery. I started it six years ago."
        }
      ]
    }
  }
};
