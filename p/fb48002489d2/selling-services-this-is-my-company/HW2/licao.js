/* THIS IS MY COMPANY · SELLING SERVICES LESSON 1 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: be: is / isn’t / are / aren’t / I’m not; never “it don’t is”. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-this-is-my-company",
  "titulo": "This Is My Company",
  "nivel": "A1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "be: is / isn’t / are / aren’t / I’m not; never “it don’t is”",
  "abrir": "A stranger on LinkedIn asks: “What is your company?” What do you say?",
  "fecho": "With <b>be</b> the negative is <b>not</b>: <i>it isn’t, they aren’t, I’m not</i>. Never “don’t is”.",
  "elenco": {
    "mia": {
      "nome": "Mia",
      "voz": "en-US-AvaNeural",
      "cor": "#86c9f0"
    },
    "leo": {
      "nome": "Leo",
      "voz": "en-US-GuyNeural",
      "cor": "#7fd1b9"
    }
  },
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "Two people meet at a business event. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "Coffee at a business event",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Hi! Are you from Bluepeak?"
        },
        {
          "quem": "mia",
          "t": "Yes, I am. I’m Mia, an account executive."
        },
        {
          "quem": "leo",
          "t": "Nice to meet you. I’m Leo. I’m a finance manager at Atlas Motors."
        },
        {
          "quem": "mia",
          "t": "Nice to meet you, Leo. Is Atlas a big company?"
        },
        {
          "quem": "leo",
          "t": "Yes, it is. But our finance team isn’t big. It’s eight people."
        },
        {
          "quem": "mia",
          "t": "Is payroll a problem?"
        },
        {
          "quem": "leo",
          "t": "Yes. It isn’t fast, and the reports aren’t ready on time."
        },
        {
          "quem": "mia",
          "t": "I understand. Here’s my card."
        },
        {
          "quem": "leo",
          "t": "Thanks. I’m not the decision maker, but my director is interested."
        }
      ],
      "perguntas": [
        {
          "q": "What is Mia’s job?",
          "op": [
            "An account executive",
            "A finance manager",
            "A director"
          ],
          "a": 0,
          "por": "I’m Mia, an account executive."
        },
        {
          "q": "Is the finance team at Atlas big?",
          "op": [
            "No, it isn’t. It’s eight people.",
            "Yes, it is.",
            "There isn’t a team."
          ],
          "a": 0,
          "por": "Our finance team isn’t big. It’s eight people."
        },
        {
          "q": "Is Leo the decision maker?",
          "op": [
            "No, he isn’t. His director is.",
            "Yes, he is.",
            "No, Mia is."
          ],
          "a": 0,
          "por": "I’m not the decision maker, but my director is interested."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "My company isn’t a software company.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The reports aren’t ready on time.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "There are two thousand employees.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "<b>be</b> (am, is, are) → <b>not</b>: <i>it isn’t · they aren’t · I’m not</i>. Never “don’t is”.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The report isn’t ready.",
          "aceita": [],
          "d": "Dica: “is not” = isn’t."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It don’t is expensive.",
          "r": "It isn’t expensive.",
          "aceita": [
            "It is not expensive.",
            "It’s not expensive."
          ],
          "d": "Dica: com <b>is</b> não existe “don’t”: <i>isn’t</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "He don’t is the manager.",
          "r": "He isn’t the manager.",
          "aceita": [
            "He is not the manager.",
            "He’s not the manager."
          ],
          "d": "Dica: he is → he <b>isn’t</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Our clients don’t are small.",
          "r": "Our clients aren’t small.",
          "aceita": [
            "Our clients are not small."
          ],
          "d": "Dica: they are → they <b>aren’t</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A laptop on a desk at night",
      "pede": "Write 2 or 3 sentences about you and your company: who you are, what your company is, and what it isn’t.",
      "ph": "I’m … We’re a … We aren’t …",
      "ex": "I’m an account executive. We’re a BPO company. We aren’t a software company."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Is your company big or small?",
          "ph": "It’s … It isn’t …",
          "ex": "It’s a big company. It isn’t small!"
        },
        {
          "q": "Are your clients in Brazil?",
          "ph": "Yes, they are. / No, they aren’t.",
          "ex": "Yes, they are. They’re in São Paulo and Curitiba."
        }
      ]
    }
  }
};
