/* WRITING SAMPLE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: registro formal em texto de tres partes. B1: nenhum portugues. So imagens live-* (escuras). */
window.HW2 = {
  "id": "det-writing-sample",
  "titulo": "Writing Sample",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/122cfaee20e2/det-writing-sample/img/live-conversa.webp",
  "alvo": "formal register for a three-part text (goal, plan, last sentence): no gonna / u / stuff; going to; do a degree (not make); In addition to that; want to + verb",
  "abrir": "What is one goal you have for the next five years?",
  "fecho": "Write like a future student: <b>going to</b> (not <i>gonna</i>), <b>you</b> (not <i>u</i>), a precise word (not <i>stuff</i>). Three parts: <b>goal + reason</b> -> <b>plan</b> (<i>In addition to that, ...</i>) -> <b>last sentence</b>. <b>Do</b> a master's degree, never <i>make</i>. <b>I want to study</b>, never <i>I want study</i>.",
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
      "sub": "Mia reads Leo's draft. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/122cfaee20e2/det-writing-sample/img/live-conversa.webp",
      "leg": "A quiet classroom at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, can you read my writing sample? It is for a university."
        },
        {
          "quem": "mia",
          "t": "Sure. The first line says: I'm gonna finish my degree in five years. Leo, this is spoken English."
        },
        {
          "quem": "leo",
          "t": "Oh. So what should I write?"
        },
        {
          "quem": "mia",
          "t": "In writing, use going to. I am going to finish my degree in five years."
        },
        {
          "quem": "leo",
          "t": "OK. And here, I wrote that the course is super cool."
        },
        {
          "quem": "mia",
          "t": "That says nothing. Give a real reason. For example, the course is very practical."
        },
        {
          "quem": "leo",
          "t": "Good point. What about the plan? I want to do a lot of stuff."
        },
        {
          "quem": "mia",
          "t": "Too vague. Name two steps, like taking a statistics course and working as an intern."
        },
        {
          "quem": "leo",
          "t": "And the end?"
        },
        {
          "quem": "mia",
          "t": "End with a strong sentence. For these reasons, this program is my first choice."
        },
        {
          "quem": "leo",
          "t": "Thanks. I will rewrite it tonight, and I will check every sentence."
        }
      ],
      "perguntas": [
        {
          "q": "What is wrong with gonna in the writing sample?",
          "op": [
            "It is spoken English",
            "It is too formal",
            "It is a wrong verb"
          ],
          "a": 0,
          "por": "This is spoken English."
        },
        {
          "q": "Why is super cool not a good reason?",
          "op": [
            "It says nothing specific",
            "It is too long",
            "It is too formal"
          ],
          "a": 0,
          "por": "That says nothing. Give a real reason."
        },
        {
          "q": "How does Mia say the text should end?",
          "op": [
            "With a strong sentence",
            "With a question",
            "With a joke"
          ],
          "a": 0,
          "por": "End with a strong sentence."
        }
      ]
    },
    "out": {
      "sub": "Three formal sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "In the next five years, I am going to finish my degree in design.",
          "img": "https://wolf-labs.pages.dev/p/122cfaee20e2/det-writing-sample/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "To achieve this goal, I plan to save money and study every morning.",
          "img": "https://wolf-labs.pages.dev/p/122cfaee20e2/det-writing-sample/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "That is why I hope to join this program next year.",
          "img": "https://wolf-labs.pages.dev/p/122cfaee20e2/det-writing-sample/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Formal and clear. Four quick ones.",
      "regra": "<b>going to</b> · <b>do</b> a degree · <b>In addition to that</b> · <b>want to</b> + verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "In addition, I plan to work as an intern.",
          "aceita": [],
          "d": "Hint: <b>In addition,</b> adds a second step of your plan."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I am going to make a master's degree.",
          "r": "I am going to do a master's degree.",
          "aceita": [
            "I am going to get a master's degree.",
            "I am going to earn a master's degree.",
            "I'm going to do a master's degree."
          ],
          "d": "Hint: you <b>do</b> or <b>get</b> a degree. You don't <i>make</i> one."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "In addition of that, I want to travel.",
          "r": "In addition to that, I want to travel.",
          "aceita": [
            "In addition to that I want to travel."
          ],
          "d": "Hint: the fixed phrase is <b>in addition to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I want study abroad.",
          "r": "I want to study abroad.",
          "aceita": [],
          "d": "Hint: <b>want</b> needs <b>to</b> before the next verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/122cfaee20e2/det-writing-sample/img/live-capa.webp",
      "leg": "A sealed envelope on a dark desk",
      "pede": "Look at the picture: a sealed envelope. Write 3 formal sentences about a goal for the next five years: the <b>goal</b>, one <b>step</b>, and a <b>last sentence</b>. No gonna, no u.",
      "ph": "In the next five years, I am going to ...",
      "ex": "In the next five years, I am going to become a teacher trainer. To achieve this, I plan to take a teaching course. For these reasons, I hope to join this program."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is your main goal for the next five years? Say why.",
          "ph": "I am going to ... because ...",
          "ex": "I am going to open a small bakery, because I love baking and I want my own business."
        },
        {
          "q": "What are two steps you will take to achieve it?",
          "ph": "First, I will ... In addition, ...",
          "ex": "First, I will take a business course. In addition, I will work in a bakery for a year."
        }
      ]
    }
  }
};
