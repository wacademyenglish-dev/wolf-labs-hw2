/* THE TRICKY QUESTION · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: ganhar tempo e responder perguntas difíceis (Let me think, I would start by -ing). B1: nenhum português. Curso WOLF HIRED, histórias e empresas fictícias. */
window.HW2 = {
  "id": "hired-the-tricky-question",
  "titulo": "The Tricky Question",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/10c985b7d6bc/hired-the-tricky-question/img/live-capa.webp",
  "alvo": "buying time and answering hard questions: That's a good question. Let me think about that for a second; Just to make sure I understand, ...?; I would start by + -ing; positive about the past (It wasn't the right fit, but I learned a lot); never let me to think, never start by look",
  "abrir": "What question would make your mind go blank in an interview?",
  "fecho": "Three seconds of silence feels long to you, but it looks like thinking. <b>Buy time</b>: <i>That's a good question. Let me think about that for a second.</i> <b>Check</b>: <i>Just to make sure I understand, …?</i> <b>Explain your thinking</b>: <i>I would start by looking at the data.</i> <b>Stay positive</b> about the past: <i>It wasn't the right fit, but I learned a lot.</i>",
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
      "sub": "Mia gives Leo hard questions. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/10c985b7d6bc/hired-the-tricky-question/img/live-capa.webp",
      "leg": "A chess board in the dark",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, here is a hard one. How many coffee cups are sold in this city every day?"
        },
        {
          "quem": "leo",
          "t": "Uh... I have no idea."
        },
        {
          "quem": "mia",
          "t": "Stop. Try again, and buy some time first."
        },
        {
          "quem": "leo",
          "t": "That's a good question. Let me think about that for a second."
        },
        {
          "quem": "mia",
          "t": "Better. Now explain how you would find the answer."
        },
        {
          "quem": "leo",
          "t": "I would start with the population. Then I would estimate how many people drink coffee outside home."
        },
        {
          "quem": "mia",
          "t": "Good. Next one: why did you leave your last job?"
        },
        {
          "quem": "leo",
          "t": "My boss was terrible."
        },
        {
          "quem": "mia",
          "t": "No! Stay positive about the past."
        },
        {
          "quem": "leo",
          "t": "Okay. It wasn't the right fit, but I learned a lot, and I was looking for more responsibility."
        },
        {
          "quem": "mia",
          "t": "And if you have never used their software?"
        },
        {
          "quem": "leo",
          "t": "I haven't used it yet, but I have used two similar tools, and I learn quickly."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo say to buy time?",
          "op": [
            "That's a good question. Let me think",
            "I have no idea",
            "Can you repeat that?"
          ],
          "a": 0,
          "por": "That's a good question. Let me think about that for a second."
        },
        {
          "q": "How does Leo start to estimate the coffee cups?",
          "op": [
            "With the population",
            "With the price",
            "With an online search"
          ],
          "a": 0,
          "por": "I would start with the population."
        },
        {
          "q": "What does Mia say about the old job?",
          "op": [
            "Stay positive about the past",
            "Tell the whole story",
            "Say it was terrible"
          ],
          "a": 0,
          "por": "No! Stay positive about the past."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for a hard moment. Hear it, then say it.",
      "frases": [
        {
          "t": "That's a good question. Let me think about that for a second.",
          "img": "https://wolf-labs.pages.dev/p/10c985b7d6bc/hired-the-tricky-question/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I don't know exactly, but I would start with the population.",
          "img": "https://wolf-labs.pages.dev/p/10c985b7d6bc/hired-the-tricky-question/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It wasn't the right fit, but I learned a lot.",
          "img": "https://wolf-labs.pages.dev/p/10c985b7d6bc/hired-the-tricky-question/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Buy time, then answer. Four quick ones.",
      "regra": "<b>Let me think</b> (no <i>to</i>) · <b>Just to make sure I understand, …?</b> · <b>I would start by</b> + <b>-ing</b> · positive about the past.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Just to make sure I understand, you want an estimate?",
          "aceita": [],
          "d": "Hint: this phrase checks the question before you answer."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Let me to think about that for a second.",
          "r": "Let me think about that for a second.",
          "aceita": [],
          "d": "Hint: after <b>let me</b>, the plain verb, without <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I would start by look at the data.",
          "r": "I would start by looking at the data.",
          "aceita": [
            "I'd start by looking at the data."
          ],
          "d": "Hint: after <b>by</b>, the <b>-ing</b> form: <b>looking</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It wasn't the right fit, but I learned much.",
          "r": "It wasn't the right fit, but I learned a lot.",
          "aceita": [],
          "d": "Hint: in a positive sentence, <b>a lot</b>, not <i>much</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/10c985b7d6bc/hired-the-tricky-question/img/live-conversa.webp",
      "leg": "An hourglass on a dark table",
      "pede": "Look at the picture: an hourglass. Imagine an interviewer asks a hard question and you need time. Write 2 or 3 sentences: a phrase to buy time, then how you would start.",
      "ph": "That's a good question. Let me …",
      "ex": "That's a good question. Let me think for a second. I would start by checking the numbers from last year."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What question would be hard for you in an interview?",
          "ph": "A hard question for me is …",
          "ex": "A hard question for me is: where do you see yourself in five years?"
        },
        {
          "q": "Why did you leave a job or a class? Say it in a positive way.",
          "ph": "I left because I wanted …",
          "ex": "I left that course because I wanted a more practical one."
        }
      ]
    }
  }
};
