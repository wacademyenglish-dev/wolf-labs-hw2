/* GATE 14 · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: perguntas e respostas curtas no aeroporto. A1: português só nas dicas (d). Cenário: controle de passaporte em Dublin. */
window.HW2 = {
  "id": "gate-14",
  "titulo": "Gate 14",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/23bcd22af360/gate-14/img/live-capa.webp",
  "alvo": "airport questions and short answers: Where are you from? / I'm from Brazil · Why are you here? / I'm here to study, on holiday · How long? / Two weeks · Do you have a return ticket? Never: I have 25 years, Where you are from, I'm here for study, luggages.",
  "abrir": "Where do you want to travel?",
  "fecho": "<b>Where are you from?</b> <i>I'm from Brazil.</i> <b>I'm here on holiday / to study.</b> <b>I'm here for two weeks.</b> Age: <i>I am 25</i> (not <i>I have 25 years</i>). <i>Luggage</i> has no -s.",
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
      "sub": "Mia arrives in Dublin. Leo is the officer. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/23bcd22af360/gate-14/img/live-capa.webp",
      "leg": "An airport sign",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Good morning. Passport, please."
        },
        {
          "quem": "mia",
          "t": "Here you are."
        },
        {
          "quem": "leo",
          "t": "Where are you from?"
        },
        {
          "quem": "mia",
          "t": "I'm from Brazil."
        },
        {
          "quem": "leo",
          "t": "Why are you here?"
        },
        {
          "quem": "mia",
          "t": "I'm here on holiday."
        },
        {
          "quem": "leo",
          "t": "How long are you here for?"
        },
        {
          "quem": "mia",
          "t": "Two weeks."
        },
        {
          "quem": "leo",
          "t": "Where is your hotel?"
        },
        {
          "quem": "mia",
          "t": "In the city. Here is the name."
        },
        {
          "quem": "leo",
          "t": "Do you have a return ticket?"
        },
        {
          "quem": "mia",
          "t": "Yes, I do."
        },
        {
          "quem": "leo",
          "t": "Thank you. Welcome to Ireland."
        }
      ],
      "perguntas": [
        {
          "q": "Where is Mia from?",
          "op": [
            "Brazil",
            "Spain",
            "Ireland"
          ],
          "a": 0,
          "por": "I'm from Brazil."
        },
        {
          "q": "How long is Mia in Ireland?",
          "op": [
            "Two weeks",
            "Two days",
            "Two months"
          ],
          "a": 0,
          "por": "Two weeks."
        },
        {
          "q": "Why is Mia in Ireland?",
          "op": [
            "On holiday",
            "For work",
            "To study"
          ],
          "a": 0,
          "por": "I'm here on holiday."
        }
      ]
    },
    "out": {
      "sub": "Three sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm from Brazil.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'm here for two weeks.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I have a return ticket.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Airport questions. Four quick ones.",
      "regra": "<b>Where are you from?</b> · <b>I am 25</b> · <b>I'm here to study</b> · <b>I'm here for two weeks</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I am here for two weeks.",
          "aceita": [],
          "d": "Dica: <b>I am here for</b> + um período de tempo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the question correct.",
          "mostra": "Where you are from?",
          "r": "Where are you from?",
          "aceita": [],
          "d": "Dica: na pergunta, <b>are</b> vem antes de <b>you</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: say your age right.",
          "mostra": "I have 25 years.",
          "r": "I am 25 years old.",
          "aceita": [
            "I'm 25 years old.",
            "I am 25.",
            "I'm 25."
          ],
          "d": "Dica: em inglês a idade usa <b>be</b> (I am), não <b>have</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm here for study.",
          "r": "I'm here to study.",
          "aceita": [
            "I am here to study."
          ],
          "d": "Dica: para dizer o motivo, use <b>to</b> + verbo: <b>to study</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "You are at passport control. Write 2 or 3 short sentences for the officer: where you are from, why you are here, how long.",
      "ph": "I'm from … I'm here …",
      "ex": "I'm from Brazil. I'm here on holiday. I'm here for two weeks."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where are you from?",
          "ph": "I'm from …",
          "ex": "I'm from Brazil, from São Paulo."
        },
        {
          "q": "Where do you want to travel? Why?",
          "ph": "I want to go to … to …",
          "ex": "I want to go to Ireland to study English."
        }
      ]
    }
  }
};
