/* OUT OF OFFICE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present continuous para o combinado + I'll para a oferta. A2: dicas em português só nas notas (d). Só live-* escuras. */
window.HW2 = {
  "id": "out-of-office",
  "titulo": "Out of Office",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/beb581e388ea/out-of-office/img/live-saida.webp",
  "alvo": "present continuous for an arrangement with a date (I'm flying to Lima on the 22nd, she's coming back on January 5) and I'll for an offer or a decision right now (Don't worry, I'll send it today; I'll get it); never I travel on the 22nd, never Omar flying, never I send it, never in the 22nd",
  "abrir": "What are you doing at the end of this year?",
  "fecho": "<b>Arranged before</b> = <b>be + -ing</b> + a date: <i>I'm flying to Lima on the 22nd.</i> <b>Decided right now</b> = <b>I'll</b> + plain verb: <i>I'll send it today.</i> Never <i>Omar flying</i> (be is missing) and never <i>in the 22nd</i> (on).",
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
      "sub": "Mia and Leo on the last day before the holidays. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/beb581e388ea/out-of-office/img/live-mesa.webp",
      "leg": "A mug and a gift by a snowy window",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, it is December 18, and everybody is leaving the office today."
        },
        {
          "quem": "leo",
          "t": "I know. Where are you going?"
        },
        {
          "quem": "mia",
          "t": "I'm flying to Lima on the 22nd."
        },
        {
          "quem": "leo",
          "t": "Nice! When are you coming back?"
        },
        {
          "quem": "mia",
          "t": "I'm coming back on January 5. Oh no, I forgot to send the files to the client."
        },
        {
          "quem": "leo",
          "t": "Don't worry. I'll send them today."
        },
        {
          "quem": "mia",
          "t": "Thank you! And the phone is ringing in the other room."
        },
        {
          "quem": "leo",
          "t": "I'll get it! Grace is traveling too, right?"
        },
        {
          "quem": "mia",
          "t": "Yes, she's flying to Atlanta on the 23rd."
        },
        {
          "quem": "leo",
          "t": "And I'm staying in town. I'm working on the 28th, so I'll answer the client's emails."
        }
      ],
      "perguntas": [
        {
          "q": "When is Mia flying to Lima?",
          "op": [
            "On the 22nd",
            "On January 5",
            "On the 28th"
          ],
          "a": 0,
          "por": "I'm flying to Lima on the 22nd."
        },
        {
          "q": "What will Leo do with the files?",
          "op": [
            "He will send them today",
            "He will call Grace",
            "He will forget them"
          ],
          "a": 0,
          "por": "Don't worry. I'll send them today."
        },
        {
          "q": "What is Leo doing on the 28th?",
          "op": [
            "He is working",
            "He is flying to Atlanta",
            "He is visiting Lima"
          ],
          "a": 0,
          "por": "I'm working on the 28th."
        }
      ]
    },
    "out": {
      "sub": "Three sentences before the holidays. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm flying to Lima on the 22nd.",
          "img": "https://wolf-labs.pages.dev/p/beb581e388ea/out-of-office/img/live-mala.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She's coming back on January 5.",
          "img": "https://wolf-labs.pages.dev/p/beb581e388ea/out-of-office/img/live-saida.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Don't worry, I'll send it today.",
          "img": "https://wolf-labs.pages.dev/p/beb581e388ea/out-of-office/img/live-mesa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Plan or offer? Four quick ones.",
      "regra": "<b>be + -ing</b> + a date = a plan · <b>I'll</b> + plain verb = an offer · <b>on</b> the 22nd.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She is flying to Atlanta on the 23rd.",
          "aceita": [],
          "d": "Dica: plano marcado: <b>is flying</b> + <b>on</b> + a data."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Omar flying to Lima on Friday.",
          "r": "Omar is flying to Lima on Friday.",
          "aceita": [
            "Omar's flying to Lima on Friday."
          ],
          "d": "Dica: falta o <b>is</b>: be + verbo com -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Don't worry, I send it today.",
          "r": "Don't worry, I'll send it today.",
          "aceita": [
            "Don't worry, I will send it today."
          ],
          "d": "Dica: oferta na hora: <b>I'll</b> + verbo limpo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She is coming back in the 22nd.",
          "r": "She is coming back on the 22nd.",
          "aceita": [
            "She's coming back on the 22nd."
          ],
          "d": "Dica: com dia do mês, use <b>on</b>, nunca 'in the 22nd'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/beb581e388ea/out-of-office/img/live-mala.webp",
      "leg": "A suitcase by the door",
      "pede": "Look at the picture: a suitcase and a scarf by the door. Write 2 or 3 sentences: where you are going, when you are coming back, and one thing you <b>will</b> do before you leave.",
      "ph": "I'm … on … I'll …",
      "ex": "I'm visiting my parents on the 20th. I'm coming back on January 3. Before I leave, I'll send the report."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you doing next weekend?",
          "ph": "I'm … on …",
          "ex": "I'm visiting my aunt on Saturday."
        },
        {
          "q": "A friend says: \"I have no time to buy bread.\" What do you say?",
          "ph": "Don't worry. I'll …",
          "ex": "Don't worry. I'll buy it for you."
        }
      ]
    }
  }
};
