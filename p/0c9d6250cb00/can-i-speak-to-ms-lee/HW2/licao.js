/* CAN I SPEAK TO MS LEE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=".
   Alvo: frases de telefone no escritório (Lee & Park Design). A1: português só nas dicas (d). Imagens live-* escuras. */
window.HW2 = {
  "id": "can-i-speak-to-ms-lee",
  "titulo": "Can I Speak to Ms Lee",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/0c9d6250cb00/can-i-speak-to-ms-lee/img/live-lobby.webp",
  "alvo": "phone phrases at work: This is … (not I am) · Can I speak to …? · Who's calling, please? · Can you hold? · She's in a meeting · Can I take a message? · I'll call back / I'll tell her",
  "abrir": "Do you make phone calls at work? Who do you call?",
  "fecho": "On the phone: <b>This is</b> Tom, <b>Who's calling</b>, please? <b>I'll</b> call back. Never <i>I am Tom</i>, never <i>Who are you</i>.",
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
      "sub": "Mia is the receptionist at Lee & Park Design. Leo calls. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/0c9d6250cb00/can-i-speak-to-ms-lee/img/live-escritorio.webp",
      "leg": "A quiet office in the evening",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Lee and Park Design. Good morning."
        },
        {
          "quem": "leo",
          "t": "Good morning. Can I speak to Ms. Lee, please?"
        },
        {
          "quem": "mia",
          "t": "Who's calling, please?"
        },
        {
          "quem": "leo",
          "t": "This is Tom Reed, from Sun Print."
        },
        {
          "quem": "mia",
          "t": "Can you hold, please?"
        },
        {
          "quem": "leo",
          "t": "Yes, of course."
        },
        {
          "quem": "mia",
          "t": "I'm sorry, Mr. Reed. Ms. Lee is in a meeting. Can I take a message?"
        },
        {
          "quem": "leo",
          "t": "Yes, please. My number is five five five, oh one four eight."
        },
        {
          "quem": "mia",
          "t": "Five five five, oh one four eight. OK. I'll tell her."
        },
        {
          "quem": "leo",
          "t": "Thank you. Goodbye."
        },
        {
          "quem": "mia",
          "t": "Goodbye, Mr. Reed."
        }
      ],
      "perguntas": [
        {
          "q": "Who does Tom want to speak to?",
          "op": [
            "Ms. Lee",
            "Ms. Park",
            "Mia"
          ],
          "a": 0,
          "por": "Can I speak to Ms. Lee, please?"
        },
        {
          "q": "Where is Ms. Lee?",
          "op": [
            "In a meeting",
            "At lunch",
            "At home"
          ],
          "a": 0,
          "por": "Ms. Lee is in a meeting."
        },
        {
          "q": "What will Mia do?",
          "op": [
            "Tell Ms. Lee",
            "Call Tom now",
            "Send an email"
          ],
          "a": 0,
          "por": "OK. I'll tell her."
        }
      ]
    },
    "out": {
      "sub": "Three phone sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "This is Tom Reed from Sun Print.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/0c9d6250cb00/can-i-speak-to-ms-lee/img/live-lobby.webp"
        },
        {
          "t": "Can I speak to Ms. Lee, please?",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/0c9d6250cb00/can-i-speak-to-ms-lee/img/live-escritorio.webp"
        },
        {
          "t": "I'll call back later.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/0c9d6250cb00/can-i-speak-to-ms-lee/img/live-cafe.webp"
        }
      ]
    },
    "focus": {
      "sub": "This is, Who's calling, I'll. Four quick ones.",
      "regra": "<b>This is</b> + name · <b>Who's calling</b>, please? · <b>I'll</b> + verb · <b>She's in a meeting</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Can I speak to Sara, please?",
          "aceita": [],
          "d": "Dica: <b>Can I speak to</b> + a pessoa + please."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Hello, I am Tom.",
          "r": "Hello, this is Tom.",
          "aceita": [
            "Hello, this is Tom"
          ],
          "d": "Dica: no telefone, use <b>this is</b> + nome. Nunca 'I am'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Who are you, please?",
          "r": "Who's calling, please?",
          "aceita": [
            "Who is calling, please?"
          ],
          "d": "Dica: 'Who are you?' soa rude. Pergunte <b>Who's calling</b>?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "OK, I call back later.",
          "r": "OK, I'll call back later.",
          "aceita": [
            "OK, I will call back later."
          ],
          "d": "Dica: decisão agora: <b>I'll</b> + verbo."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/0c9d6250cb00/can-i-speak-to-ms-lee/img/live-escritorio.webp",
      "leg": "A quiet office in the evening",
      "pede": "Look at the picture: an office. Write 2 or 3 sentences for a phone call: you call a company and ask for a person. Use <b>This is</b> and <b>Can I speak to</b>.",
      "ph": "Hello, this is … Can I speak to …?",
      "ex": "Hello, this is Ana. Can I speak to Mr. Park, please? OK, I'll call back later."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Do you make phone calls at work or school? Who do you call?",
          "ph": "I call …",
          "ex": "Yes, I call clients every day."
        },
        {
          "q": "Is English on the phone easy or difficult for you?",
          "ph": "It's … because …",
          "ex": "It's difficult, because I can't see the person."
        }
      ]
    }
  }
};
