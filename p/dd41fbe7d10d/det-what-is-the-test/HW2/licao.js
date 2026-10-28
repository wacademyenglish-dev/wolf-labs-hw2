/* WHAT IS THE TEST? · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: talking about how the test works: present simple facts (it takes, you get), the adaptive r. B1: nenhum português. */
window.HW2 = {
  "id": "det-what-is-the-test",
  "titulo": "What Is the Test?",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "talking about how the test works: present simple facts (it takes, you get), the adaptive rule with if + present, from ... to, take a test; and the first task, real words only",
  "abrir": "Why would you take an English test? Say one reason.",
  "fecho": "<b>Take</b> a test (not <i>make</i>). <b>From</b> 10 <b>to</b> 160. <b>If you answer well</b>, the next question <b>gets</b> harder: no <i>will</i> after <i>if</i>. Real or fake? When you are not sure, leave it.",
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
      "sub": "Mia explains the test to Leo. About one minute.",
      "img": "../img/live-capa.webp",
      "leg": "A desk, a laptop and a notebook",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I'm going to take an English test next month. Do you know how it works?"
        },
        {
          "quem": "mia",
          "t": "Yes. You take it at home, on a computer, and it takes about an hour."
        },
        {
          "quem": "leo",
          "t": "Only one hour? And what about the questions?"
        },
        {
          "quem": "mia",
          "t": "The test is adaptive. If you answer well, the next question gets harder."
        },
        {
          "quem": "leo",
          "t": "So a hard question is good news?"
        },
        {
          "quem": "mia",
          "t": "Exactly. And if you make a mistake, the next one is easier."
        },
        {
          "quem": "leo",
          "t": "What about the score?"
        },
        {
          "quem": "mia",
          "t": "It goes from ten to one hundred sixty. Many universities ask for it."
        },
        {
          "quem": "leo",
          "t": "And the first task?"
        },
        {
          "quem": "mia",
          "t": "You see a list of words. You tap only the real English words. Some of them are fake on purpose."
        }
      ],
      "perguntas": [
        {
          "q": "Where does Leo take the test?",
          "op": [
            "At a university",
            "At home",
            "At a school"
          ],
          "a": 1,
          "por": "You take it at home, on a computer."
        },
        {
          "q": "What happens if you answer well?",
          "op": [
            "The next question gets harder",
            "The test ends",
            "The clock stops"
          ],
          "a": 0,
          "por": "If you answer well, the next question gets harder."
        },
        {
          "q": "What do you do in the first task?",
          "op": [
            "Write a story",
            "Tap only the real words",
            "Listen and repeat"
          ],
          "a": 1,
          "por": "You tap only the real English words."
        }
      ]
    },
    "out": {
      "sub": "Three sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm going to take the test at home next month.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The score goes from ten to one hundred sixty.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If I answer well, the next question gets harder.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "How the test works. Four quick ones.",
      "regra": "<b>take</b> a test · <b>from</b> ... <b>to</b> · <b>if</b> + present, present (no will after if) · <b>it takes</b> + time",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The next question gets harder when you answer well.",
          "aceita": [],
          "d": "Hint: <b>gets</b> + harder, then <b>when</b> + present."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I make the test at home.",
          "r": "I take the test at home.",
          "aceita": [],
          "d": "Hint: you <b>take</b> a test. <i>Make</i> does not fit."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If you will answer well, the next question is harder.",
          "r": "If you answer well, the next question is harder.",
          "aceita": [
            "If you answer well, the next question gets harder."
          ],
          "d": "Hint: after <b>if</b>, use the present. No <i>will</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: two small words are wrong.",
          "mostra": "The score goes since 10 until 160.",
          "r": "The score goes from 10 to 160.",
          "aceita": [],
          "d": "Hint: <b>from</b> ... <b>to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-capa.webp",
      "leg": "A desk, a laptop and a notebook",
      "pede": "Look at the picture: a desk with a laptop and a notebook. Write 2 or 3 sentences about how you will take the test: where, when and what you need on the desk. Use <b>I'm going to</b> and <b>it takes</b>.",
      "ph": "I'm going to take the test …",
      "ex": "I'm going to take the test at home, on Saturday morning. I need my laptop, a quiet room and a glass of water. It takes about an hour, so I'll turn off my phone."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you need the test for? When?",
          "ph": "I need the test for … in …",
          "ex": "I need the test for a master's program, and I want the score by March."
        },
        {
          "q": "What part of English is easy for you? What part is hard?",
          "ph": "For me, … is easy, but … is hard.",
          "ex": "For me, reading is easy, but speaking with a clock is hard."
        }
      ]
    }
  }
};
