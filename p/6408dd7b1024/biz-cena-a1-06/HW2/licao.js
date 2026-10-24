/* THIS IS MICHAEL SCOTT · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: work phone calls. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "biz-cena-a1-06",
  "titulo": "This Is Michael Scott",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/6408dd7b1024/biz-cena-a1-06/img/live-capa.webp",
  "alvo": "work phone calls: This is + name + company, Can I speak to ...?, I'm calling about ..., Can I take a message?, Sorry, can you say that again?",
  "abrir": "What do you say when you answer the phone at work?",
  "fecho": "On the phone: <b>This is</b> + your name, not <i>I am</i>. Ask: <b>Can I speak to Ms. Lee, please?</b> Say why: <b>I'm calling about</b> the order. Offer: <b>Can I take a message?</b> Don't understand? <b>Sorry, can you say that again?</b>",
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
      "sub": "Leo calls Mia at the office. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/6408dd7b1024/biz-cena-a1-06/img/live-capa.webp",
      "leg": "The phone on the desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Good morning, Northwind and Company. This is Mia."
        },
        {
          "quem": "leo",
          "t": "Hello, Mia. This is Leo from Bluebay Hotels. Can I speak to Ms. Lee, please?"
        },
        {
          "quem": "mia",
          "t": "I'm sorry, Leo. Ms. Lee is in a meeting. Can I take a message?"
        },
        {
          "quem": "leo",
          "t": "Yes, please. I'm calling about the order of paper."
        },
        {
          "quem": "mia",
          "t": "The order of paper. Okay."
        },
        {
          "quem": "leo",
          "t": "Can she call me back? My number is five five five, zero one eight three."
        },
        {
          "quem": "mia",
          "t": "Sorry, can you say that again, please?"
        },
        {
          "quem": "leo",
          "t": "Five five five, zero one eight three."
        },
        {
          "quem": "mia",
          "t": "Got it. I'll give her the message. Thank you for calling. Goodbye!"
        },
        {
          "quem": "leo",
          "t": "Thank you, Mia. Goodbye!"
        }
      ],
      "perguntas": [
        {
          "q": "Why can't Leo speak to Ms. Lee?",
          "op": [
            "She is in a meeting",
            "She is at lunch",
            "She is on holiday"
          ],
          "a": 0,
          "por": "Ms. Lee is in a meeting."
        },
        {
          "q": "What is Leo calling about?",
          "op": [
            "The order of paper",
            "A new job",
            "A hotel room"
          ],
          "a": 0,
          "por": "I'm calling about the order of paper."
        },
        {
          "q": "What does Mia ask Leo to do?",
          "op": [
            "Say the number again",
            "Spell his name",
            "Call tomorrow"
          ],
          "a": 0,
          "por": "Sorry, can you say that again, please?"
        }
      ]
    },
    "out": {
      "sub": "Three phone sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "Hello, this is Leo from Bluebay Hotels.",
          "img": "https://wolf-labs.pages.dev/p/6408dd7b1024/biz-cena-a1-06/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Can I speak to Ms. Lee, please?",
          "img": "https://wolf-labs.pages.dev/p/6408dd7b1024/biz-cena-a1-06/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'm calling about the order of paper.",
          "img": "https://wolf-labs.pages.dev/p/6408dd7b1024/biz-cena-a1-06/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Phone phrases. Four quick ones.",
      "regra": "<b>This is</b> + name · <b>Can I speak to ...?</b> · <b>I'm calling about</b> + the reason · <b>Can I take a message?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Can I take a message for you?",
          "aceita": [],
          "d": "Dica: oferecer ajuda ao telefone: <b>Can I take a message?</b>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Hello, I am Lucas from Northwind.",
          "r": "Hello, this is Lucas from Northwind.",
          "aceita": [],
          "d": "Dica: ao telefone, <b>this is</b> + nome, não 'I am'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I am calling for the order of paper.",
          "r": "I am calling about the order of paper.",
          "aceita": [
            "I'm calling about the order of paper."
          ],
          "d": "Dica: o assunto da ligação vem com <b>about</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "She no is here now.",
          "r": "She isn't here now.",
          "aceita": [
            "She is not here now."
          ],
          "d": "Dica: negativo com is: <b>isn't</b> ou <b>is not</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/6408dd7b1024/biz-cena-a1-06/img/live-capa.webp",
      "leg": "A phone on a dark desk",
      "pede": "Look at the picture: a phone on a desk. Write a short call. Say who you are, who you want, and why you call. Use <b>This is</b>, <b>Can I speak to</b> and <b>I'm calling about</b>.",
      "ph": "Hello, this is … from …",
      "ex": "Hello, this is Ana from Delta Foods. Can I speak to Mr. Cruz, please? I'm calling about our order."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who do you call every week? Why?",
          "ph": "I call … because …",
          "ex": "I call my sister because she lives in another city."
        },
        {
          "q": "What do you say when you answer the phone at work?",
          "ph": "Hello, this is …",
          "ex": "Hello, this is Rafa from Northwind. How can I help you?"
        }
      ]
    }
  }
};
