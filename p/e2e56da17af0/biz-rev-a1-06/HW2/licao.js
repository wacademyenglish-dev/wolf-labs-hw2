/* TAKE A MESSAGE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: review da unidade 6: telefone, e-mail, presente contínuo. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "biz-rev-a1-06",
  "titulo": "Take a Message",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e2e56da17af0/biz-rev-a1-06/img/live-capa.webp",
  "alvo": "review of unit 6: phone phrases (This is ... from ..., Can I speak to ...?, I'm calling about ..., Can I take a message?, Sorry, can you say that again?), the short email (I'm writing to ask about ...) and the present continuous (We're waiting for ...)",
  "abrir": "How do you answer the phone in English?",
  "fecho": "On the phone: <b>This is</b> Ana from Northwind. Ask: <b>Can I speak to</b> Ms. Lee, please? Say why: <b>I'm calling about</b> the order. Not clear? <b>Sorry, can you say that again?</b> In an email: <b>I'm writing to ask about</b> ... Right now: <b>is / are</b> + verb-ing: <i>She is calling. We are waiting.</i>",
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
      "sub": "Mia and Leo at the switchboard. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/e2e56da17af0/biz-rev-a1-06/img/live-capa.webp",
      "leg": "The switchboard phone",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I am back. Any messages for me?"
        },
        {
          "quem": "leo",
          "t": "Yes, one. Rita Gomez from Blue Sky Travel called. She is calling about the flight on Friday."
        },
        {
          "quem": "mia",
          "t": "Did you take her number?"
        },
        {
          "quem": "leo",
          "t": "Yes. Her number is five five five, zero one two nine. She is waiting for your call."
        },
        {
          "quem": "mia",
          "t": "Thanks. Now I am writing an email to the supplier. I am writing to ask about the paper order."
        },
        {
          "quem": "leo",
          "t": "Sorry, can you say that again?"
        },
        {
          "quem": "mia",
          "t": "I am writing to ask about the paper order. We are waiting for twenty boxes."
        },
        {
          "quem": "leo",
          "t": "OK. Good luck with the email!"
        }
      ],
      "perguntas": [
        {
          "q": "Who called Mia?",
          "op": [
            "Rita Gomez from Blue Sky Travel",
            "Sara Kim from the supplier",
            "Mr. Park from the hotel"
          ],
          "a": 0,
          "por": "Rita Gomez from Blue Sky Travel called."
        },
        {
          "q": "What is Rita calling about?",
          "op": [
            "The flight on Friday",
            "The paper order",
            "The hotel booking"
          ],
          "a": 0,
          "por": "She is calling about the flight on Friday."
        },
        {
          "q": "What is Mia writing now?",
          "op": [
            "An email to the supplier",
            "A message for Rita",
            "A report for the boss"
          ],
          "a": 0,
          "por": "Now I am writing an email to the supplier."
        }
      ]
    },
    "out": {
      "sub": "Three phone sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "Hello, this is Leo from Northwind.",
          "img": "https://wolf-labs.pages.dev/p/e2e56da17af0/biz-rev-a1-06/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Can I speak to Ms. Lee, please?",
          "img": "https://wolf-labs.pages.dev/p/e2e56da17af0/biz-rev-a1-06/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'm calling about the paper order.",
          "img": "https://wolf-labs.pages.dev/p/e2e56da17af0/biz-rev-a1-06/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Phone phrases, email, now. Four quick ones.",
      "regra": "<b>This is</b> ... · <b>Can I speak to</b> ...? · <b>I'm calling about</b> ... · <b>is / are</b> + verb-ing for right now.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Can I take a message, please?",
          "aceita": [],
          "d": "Dica: para oferecer ajuda ao telefone: <b>Can I take</b> a message?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the phone phrase is wrong.",
          "mostra": "Hello, I am Lucas from Northwind.",
          "r": "Hello, this is Lucas from Northwind.",
          "aceita": [],
          "d": "Dica: ao telefone a gente se apresenta com <b>this is</b>, não com I am."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I want speak to Ms. Lee.",
          "r": "I want to speak to Ms. Lee.",
          "aceita": [
            "I want to speak with Ms. Lee.",
            "I would like to speak to Ms. Lee.",
            "I'd like to speak to Ms. Lee."
          ],
          "d": "Dica: depois de want, o verbo pede <b>to</b>: want to speak."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "She calling about the booking.",
          "r": "She is calling about the booking.",
          "aceita": [
            "She's calling about the booking."
          ],
          "d": "Dica: agora tem dois pedaços: <b>is</b> + calling."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e2e56da17af0/biz-rev-a1-06/img/live-conversa.webp",
      "leg": "A laptop in a dark office",
      "pede": "Look at the picture: a laptop in a dark office. Write 2 or 3 sentences of a short email to a supplier: why you are writing, and what you are waiting for.",
      "ph": "Dear Ms. Kim, I'm writing to ask about …",
      "ex": "Dear Ms. Kim, I'm writing to ask about our paper order. We're waiting for twenty boxes. Could you call me, please?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How do you answer the phone in English? Say it.",
          "ph": "Hello, this is …",
          "ex": "Hello, this is Ana. Can I help you?"
        },
        {
          "q": "What are you waiting for this week?",
          "ph": "I'm waiting for …",
          "ex": "I'm waiting for an email from my boss."
        }
      ]
    }
  }
};
