/* INTERACTIVE SPEAKING · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: answer + detalhe + exemplo; casar o tempo verbal da pergunta. B1: nenhum portugues. So imagens live-* (escuras). */
window.HW2 = {
  "id": "det-interactive-speaking",
  "titulo": "Interactive Speaking",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-conversa.webp",
  "alvo": "answer + one detail + one example, matching the tense of the question: Do you ...? -> I usually; Have you ever ...? -> present perfect; If you had ...? -> I would",
  "abrir": "What do you usually do after work or class?",
  "fecho": "<b>Answer first</b>, then <b>one detail</b>, then <b>one example</b>. Match the question: <i>Have you ever...?</i> -> <i>Yes, I have been...</i>; <i>If you had...?</i> -> <i>I would...</i>. Never <i>I have went</i>, never <i>I am agree</i>.",
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
      "sub": "Mia helps Leo practice for a speaking test. A new scene, about one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "Two microphones on a round table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I have a speaking practice tomorrow. Can you ask me some questions?"
        },
        {
          "quem": "mia",
          "t": "Sure. Question one: what do you usually do after work?"
        },
        {
          "quem": "leo",
          "t": "The gym."
        },
        {
          "quem": "mia",
          "t": "That's only two words. Add one detail and one example."
        },
        {
          "quem": "leo",
          "t": "OK. I usually go to the gym near my house. For example, yesterday I ran for forty minutes."
        },
        {
          "quem": "mia",
          "t": "Much better. Next one: have you ever lived in another city?"
        },
        {
          "quem": "leo",
          "t": "Yes, I have. I've lived in Perth for two years, and I loved the beaches."
        },
        {
          "quem": "mia",
          "t": "Good, you matched the tense. Last one: if you had a free month, what would you do?"
        },
        {
          "quem": "leo",
          "t": "I will travel to Japan."
        },
        {
          "quem": "mia",
          "t": "Careful. The question says had, so you need would."
        },
        {
          "quem": "leo",
          "t": "Right. I would travel to Japan, and I would visit my cousin in Osaka."
        },
        {
          "quem": "mia",
          "t": "Perfect. That was thirty-five seconds, and you sounded confident."
        }
      ],
      "perguntas": [
        {
          "q": "What was the problem with Leo's first answer?",
          "op": [
            "It was too short",
            "It was too long",
            "It was in the wrong tense"
          ],
          "a": 0,
          "por": "That's only two words. Add one detail and one example."
        },
        {
          "q": "What did Leo say about Perth?",
          "op": [
            "He lived there for two years",
            "He is going to move there",
            "He never visited it"
          ],
          "a": 0,
          "por": "I've lived in Perth for two years, and I loved the beaches."
        },
        {
          "q": "Why did Mia stop Leo at the last question?",
          "op": [
            "He used will, but the question needed would",
            "He spoke too slowly",
            "He forgot the example"
          ],
          "a": 0,
          "por": "The question says had, so you need would."
        }
      ]
    },
    "out": {
      "sub": "Three planned answers. Hear it, then say it.",
      "frases": [
        {
          "t": "I usually go to the park near my house, and I take my dog.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Yes, my routine has changed, because I've started working from home.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If I had a free day, I would go to the beach with my friends.",
          "img": "../img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Match the tense of the question. Four quick ones.",
      "regra": "<b>Do you...?</b> -> I usually... · <b>Have you ever...?</b> -> I have been... · <b>If you had...?</b> -> I would... · <i>I agree</i>, never <i>I am agree</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Yes, I have lived here for six years.",
          "aceita": [],
          "d": "Hint: <b>Have you...?</b> asks for <b>I have</b> + the past participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Yes, I have went to Chile twice.",
          "r": "Yes, I have been to Chile twice.",
          "aceita": [
            "Yes, I've been to Chile twice."
          ],
          "d": "Hint: for the experience, use <b>have been</b>, not <i>have went</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If I had more time, I will learn guitar.",
          "r": "If I had more time, I would learn guitar.",
          "aceita": [],
          "d": "Hint: the question says <b>had</b>, so the answer needs <b>would</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I am agree with this idea.",
          "r": "I agree with this idea.",
          "aceita": [
            "I agree with that idea."
          ],
          "d": "Hint: <b>agree</b> is a verb. No <i>am</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-conversa.webp",
      "leg": "Two microphones on a round table",
      "pede": "Look at the picture: two microphones on a table. Imagine this question: <i>What do you usually do on weekends?</i> Write a short answer: <b>answer + one detail + one example</b>.",
      "ph": "On weekends I usually ...",
      "ex": "On weekends I usually visit my parents. They live near me, so we have lunch together. For example, last Sunday we made pasta."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Has your week been busy? Answer, add a detail, add an example.",
          "ph": "Yes, it has. I've ... For example, ...",
          "ex": "Yes, it has. I've had three meetings and a trip. For example, on Tuesday I worked until nine."
        },
        {
          "q": "If you had a free day tomorrow, what would you do?",
          "ph": "I would ... because ...",
          "ex": "I would sleep late and then cook lunch for my family, because I rarely have time."
        }
      ]
    }
  }
};
