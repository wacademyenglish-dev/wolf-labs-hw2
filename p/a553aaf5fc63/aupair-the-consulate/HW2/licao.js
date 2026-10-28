/* THE CONSULATE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: short true answers, will + verbo limpo, I am 22, passado simples. A2 (curso A2+): dicas em português só nas notas (d). Entrevista no consulado sem dados reais. Só imagens live-* escuras (a capa, 53, ficou de fora). */
window.HW2 = {
  "id": "aupair-the-consulate",
  "titulo": "The Consulate",
  "nivel": "A2",
  "minutos": 10,
  "capa": "../img/live-conversa.webp",
  "alvo": "short, true answers for the visa interview: I am going as an au pair; I will + plain verb (I will live, I will take care); Yes, I have / No, I haven't; I am 22 (never I have 22 years)",
  "abrir": "Imagine the officer says good morning. What do you say?",
  "fecho": "<b>Short and true.</b> <i>I am going as an au pair.</i> After <b>will</b>, the plain verb: <i>I will live with a family.</i> Age: <i>I am 22</i>, never <i>I have 22 years</i>. If your real plan is different, talk to your agency first.",
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
      "sub": "Mia practices the interview with Leo. A new scene, about 45 seconds.",
      "img": "../img/live-conversa.webp",
      "leg": "A waiting room at sunset",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, let's practice your interview. I am the officer. Ready?"
        },
        {
          "quem": "mia",
          "t": "Ready. I am a little nervous."
        },
        {
          "quem": "leo",
          "t": "That is normal. Good morning. Why are you going to the United States?"
        },
        {
          "quem": "mia",
          "t": "Good morning. I am going as an au pair, on the J-1 program."
        },
        {
          "quem": "leo",
          "t": "Good. Short and true. Where will you live?"
        },
        {
          "quem": "mia",
          "t": "I will live with a family in Illinois. I will take care of two children."
        },
        {
          "quem": "leo",
          "t": "Do you have your documents?"
        },
        {
          "quem": "mia",
          "t": "Yes. Here are my passport and my papers from the agency."
        },
        {
          "quem": "leo",
          "t": "Have you ever traveled outside Brazil?"
        },
        {
          "quem": "mia",
          "t": "No, I haven't. This is my first trip, and I am very excited."
        },
        {
          "quem": "leo",
          "t": "Perfect. No long speech. Just calm, true answers."
        }
      ],
      "perguntas": [
        {
          "q": "Why is Mia going to the United States?",
          "op": [
            "She is going as an au pair",
            "She is going on vacation",
            "She is going to study law"
          ],
          "a": 0,
          "por": "I am going as an au pair, on the J-1 program."
        },
        {
          "q": "Where will Mia live?",
          "op": [
            "With a family in Illinois",
            "In a hotel",
            "With Leo"
          ],
          "a": 0,
          "por": "I will live with a family in Illinois."
        },
        {
          "q": "Has Mia traveled outside Brazil?",
          "op": [
            "No, this is her first trip",
            "Yes, many times",
            "Yes, to Argentina"
          ],
          "a": 0,
          "por": "No, I haven't. This is my first trip."
        }
      ]
    },
    "out": {
      "sub": "Three true answers for the officer. Hear it, then say it.",
      "frases": [
        {
          "t": "I am going to the United States as an au pair.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I will live with a host family in Illinois.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Here are my passport and my documents.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Short answers, true answers. Four quick ones.",
      "regra": "<b>will</b> + plain verb · <b>I am 22</b> (not I have) · <b>Yes, I have</b> / <b>No, I haven't</b> · past time = past verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I will live with a family in Illinois.",
          "aceita": [],
          "d": "Dica: <b>will</b> + verbo limpo (live)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I will to take care of two children.",
          "r": "I will take care of two children.",
          "aceita": [
            "I'll take care of two children."
          ],
          "d": "Dica: depois de <b>will</b>, o verbo fica limpo, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I have twenty-two years old.",
          "r": "I am twenty-two years old.",
          "aceita": [
            "I am twenty-two."
          ],
          "d": "Dica: idade em inglês é com <b>am</b>, não com <b>have</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Yes, I travel to Argentina in 2022.",
          "r": "Yes, I traveled to Argentina in 2022.",
          "aceita": [
            "Yes, I went to Argentina in 2022."
          ],
          "d": "Dica: 2022 já passou, então o verbo vai para o passado: <b>traveled</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-conversa.webp",
      "leg": "An empty waiting room",
      "pede": "Look at the picture: a waiting room before the interview. Write 2 or 3 true sentences you would tell the officer: where you are going and who you will live with. Use <b>I am going</b> and <b>I will</b>.",
      "ph": "I am going to the United States as …",
      "ex": "I am going to the United States as an au pair. I will live with a family and take care of two children. I will take classes too."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Why are you going to the United States? Answer in one short sentence.",
          "ph": "I am going as …",
          "ex": "I am going as an au pair to learn English and live with a family."
        },
        {
          "q": "What will you do there? Say two things.",
          "ph": "I will … and I will …",
          "ex": "I will take care of two children and I will take English classes."
        }
      ]
    }
  }
};
