/* WHY WE ARE HERE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: perguntas indiretas: Do you know / I wonder. B1: nenhum português. Só live-* escuras. Falas originais. */
window.HW2 = {
  "id": "why-we-are-here",
  "titulo": "Why We Are Here",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e8470f1282ab/why-we-are-here/img/live-capa.webp",
  "alvo": "indirect questions: Do you know / Can you tell me / I wonder / I don't know + question word + statement order (where the elevator is, why they closed it); if / whether for yes-no; no do / does / did",
  "abrir": "What is something you always wonder about?",
  "fecho": "<b>Do you know / Can you tell me / I wonder + question word + normal order</b>: <i>Do you know where the elevator is?</i> No <i>do / does / did</i> inside: <i>I wonder why they closed it.</i> Yes-no: <b>if / whether</b>: <i>I wonder if the door is open.</i>",
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
      "sub": "Mia and Leo go down a long staircase. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/e8470f1282ab/why-we-are-here/img/live-capa.webp",
      "leg": "A spiral stairway going down",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, we are on the twelfth floor. Do you know how many steps there are?"
        },
        {
          "quem": "mia",
          "t": "I don't know. Can you tell me where the elevator is?"
        },
        {
          "quem": "leo",
          "t": "I wonder why there is no elevator. Maybe it is broken."
        },
        {
          "quem": "mia",
          "t": "Let's ask someone. I wonder if the mechanic is still downstairs."
        },
        {
          "quem": "leo",
          "t": "Good idea. Do you know what time the lamps go off?"
        },
        {
          "quem": "mia",
          "t": "I'm not sure. I'll ask him when he comes up."
        },
        {
          "quem": "leo",
          "t": "Can you tell me whether the door at the bottom is open?"
        },
        {
          "quem": "mia",
          "t": "I don't know. We'll find out when we get there."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia wonder about the mechanic?",
          "op": [
            "If he is still downstairs",
            "Why he has a lamp",
            "Where he lives"
          ],
          "a": 0,
          "por": "I wonder if the mechanic is still downstairs."
        },
        {
          "q": "What does Leo wonder?",
          "op": [
            "Why there is no elevator",
            "How many lamps there are",
            "What time it is"
          ],
          "a": 0,
          "por": "I wonder why there is no elevator."
        },
        {
          "q": "What does Leo want to know about the door?",
          "op": [
            "Whether it is open",
            "Where it is",
            "Who made it"
          ],
          "a": 0,
          "por": "Can you tell me whether the door at the bottom is open?"
        }
      ]
    },
    "out": {
      "sub": "Three polite questions. Hear it, then say it.",
      "frases": [
        {
          "t": "Do you know how many steps there are?",
          "img": "https://wolf-labs.pages.dev/p/e8470f1282ab/why-we-are-here/img/live-escadaria.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I wonder why there is no elevator.",
          "img": "https://wolf-labs.pages.dev/p/e8470f1282ab/why-we-are-here/img/live-oficina.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Can you tell me where the elevator is?",
          "img": "https://wolf-labs.pages.dev/p/e8470f1282ab/why-we-are-here/img/live-reliquia.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Polite questions. Four quick ones.",
      "regra": "<b>Do you know / Can you tell me / I wonder</b> + question word + <b>normal order</b> · no do / does / did · <b>if / whether</b> for yes-no.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Do you know where the stairs are",
          "aceita": [],
          "d": "Hint: after <b>Do you know</b>, use normal order: <i>where the stairs are</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Do you know where is the elevator?",
          "r": "Do you know where the elevator is?",
          "aceita": [],
          "d": "Hint: the verb <b>is</b> goes at the end, after the subject."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I wonder why did they close the door.",
          "r": "I wonder why they closed the door.",
          "aceita": [],
          "d": "Hint: no <i>did</i> in an indirect question. The verb takes the tense."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I wonder is the door open.",
          "r": "I wonder if the door is open.",
          "aceita": [
            "I wonder whether the door is open."
          ],
          "d": "Hint: for yes-no, add <b>if</b> or <b>whether</b>, then normal order."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e8470f1282ab/why-we-are-here/img/live-tela.webp",
      "leg": "A big screen in a dark room",
      "pede": "Look at the picture: a big screen in a dark room. Write 2 or 3 sentences or polite questions about it. Use <b>Do you know …</b>, <b>Can you tell me …</b> or <b>I wonder …</b>",
      "ph": "Do you know why …",
      "ex": "Do you know why the screen is so big? I wonder what the picture shows. Can you tell me where the door is?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you wonder about your city or your neighbors?",
          "ph": "I wonder why / if …",
          "ex": "I wonder why the bus is always late."
        },
        {
          "q": "You are lost. Ask a stranger for help. Be polite.",
          "ph": "Excuse me, can you tell me …",
          "ex": "Excuse me, can you tell me where the station is?"
        }
      ]
    }
  }
};
