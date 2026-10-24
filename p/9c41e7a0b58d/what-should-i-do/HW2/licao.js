/* WHAT SHOULD I DO? · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: should / shouldn't + plain verb for advice: What should I do? Should I ...? You should .... A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "what-should-i-do",
  "titulo": "What Should I Do?",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/9c41e7a0b58d/what-should-i-do/img/live-mesa.webp",
  "alvo": "should / shouldn't + plain verb for advice: What should I do? Should I ...? You should ...; no to, no -s, no do after should",
  "abrir": "What is one small problem you have this week?",
  "fecho": "Advice: <b>should</b> + plain verb, never changes: <i>You should call her. She should call her. You shouldn't go alone.</i> No <i>to</i>, no <i>-s</i>, no <i>don't</i>.",
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
      "sub": "Mia asks Leo for advice. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/9c41e7a0b58d/what-should-i-do/img/live-mesa.webp",
      "leg": "A quiet desk at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "You look tired, Mia. What's wrong?"
        },
        {
          "quem": "mia",
          "t": "I can't sleep. I check my phone until two in the morning. What should I do?"
        },
        {
          "quem": "leo",
          "t": "You should put your phone in the kitchen. And you shouldn't drink coffee after lunch."
        },
        {
          "quem": "mia",
          "t": "Good idea. Should I go to bed earlier, too?"
        },
        {
          "quem": "leo",
          "t": "Yes, you should. Try ten o'clock."
        },
        {
          "quem": "mia",
          "t": "Ten? That's early. What should I do for two hours?"
        },
        {
          "quem": "leo",
          "t": "You should read a book. It's a little boring, but it works."
        },
        {
          "quem": "mia",
          "t": "Okay. I should try it tonight."
        },
        {
          "quem": "leo",
          "t": "And you should call me tomorrow. I want to know how it goes."
        },
        {
          "quem": "mia",
          "t": "I will. Thanks, Leo!"
        }
      ],
      "perguntas": [
        {
          "q": "Where should Mia put her phone?",
          "op": [
            "In the kitchen",
            "Next to her bed",
            "In her bag"
          ],
          "a": 0,
          "por": "You should put your phone in the kitchen."
        },
        {
          "q": "What shouldn't Mia drink after lunch?",
          "op": [
            "Water",
            "Coffee",
            "Tea"
          ],
          "a": 1,
          "por": "You shouldn't drink coffee after lunch."
        },
        {
          "q": "What should Mia do before she sleeps?",
          "op": [
            "Read a book",
            "Watch a movie",
            "Call a friend"
          ],
          "a": 0,
          "por": "You should read a book."
        }
      ]
    },
    "out": {
      "sub": "Three pieces of advice. Hear it, then say it.",
      "frases": [
        {
          "t": "You should put your phone away at ten.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/9c41e7a0b58d/what-should-i-do/img/live-estudio.webp"
        },
        {
          "t": "You shouldn't drink coffee after lunch.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/9c41e7a0b58d/what-should-i-do/img/live-cartas.webp"
        },
        {
          "t": "What should I say to my boss?",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/9c41e7a0b58d/what-should-i-do/img/live-mesa.webp"
        }
      ]
    },
    "focus": {
      "sub": "Advice or mistake? Four quick ones.",
      "regra": "<b>should</b> + plain verb · <b>shouldn't</b> = should not · never <b>to</b>, <b>-s</b> or <b>don't</b> · question: <b>What should I do?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Should I call him tonight?",
          "aceita": [],
          "d": "Dica: pergunta de conselho: <b>Should I</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: no to after should.",
          "mostra": "You should to go to bed early.",
          "r": "You should go to bed early.",
          "aceita": [
            "You should go to bed earlier."
          ],
          "d": "Dica: depois de <b>should</b> o verbo vem direto, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the negative of should.",
          "mostra": "They don't should go alone.",
          "r": "They shouldn't go alone.",
          "aceita": [
            "They should not go alone."
          ],
          "d": "Dica: o negativo é <b>shouldn't</b>, nunca <b>don't should</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the question is in the wrong order.",
          "mostra": "What I should do?",
          "r": "What should I do?",
          "aceita": [],
          "d": "Dica: <b>should</b> pula para a frente: <b>What should I</b> do?"
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/9c41e7a0b58d/what-should-i-do/img/live-cartas.webp",
      "leg": "Letters to the radio show",
      "pede": "Look at the picture: letters to a radio show. A listener says: <i>I'm always late for work.</i> Write 2 or 3 sentences of advice: one with <b>should</b> and one with <b>shouldn't</b>.",
      "ph": "You should …",
      "ex": "You should wake up at six. You shouldn't use your phone in bed."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is one small problem you have this week? Ask for advice: What should I ...?",
          "ph": "My problem is … What should I …?",
          "ex": "I can't sleep before midnight. What should I do?"
        },
        {
          "q": "Your friend is very tired. What should he do? What shouldn't he do?",
          "ph": "He should …",
          "ex": "He should go to bed early. He shouldn't drink coffee at night."
        }
      ]
    }
  }
};
