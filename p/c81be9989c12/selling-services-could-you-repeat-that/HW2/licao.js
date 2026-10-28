/* SORRY, COULD YOU REPEAT THAT? · SELLING SERVICES LESSON 14 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: phone survival: Could you repeat that? / speak more slowly / spell that? / Let me check; e-mails with at, dot, underscore. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-could-you-repeat-that",
  "titulo": "Sorry, Could You Repeat That?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "phone survival: Could you repeat that? / speak more slowly / spell that? / Let me check; e-mails with at, dot, underscore",
  "abrir": "On the phone, you don’t understand the client. What do you say?",
  "fecho": "Polite and calm: <b>Sorry, could you repeat that?</b> · <b>Could you speak more slowly, please?</b> · <b>Could you spell that?</b> · @ = <b>at</b>, . = <b>dot</b>.",
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
      "sub": "A client calls Mia on a bad line. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A phone on a desk at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Hi, Mia. It’s Leo Park, from Granite Foods."
        },
        {
          "quem": "mia",
          "t": "Hi, Leo. Sorry, the line is bad. Could you repeat that?"
        },
        {
          "quem": "leo",
          "t": "Leo Park, from Granite Foods."
        },
        {
          "quem": "mia",
          "t": "Thanks. How can I help?"
        },
        {
          "quem": "leo",
          "t": "Please send me the contract. My e-mail is leo dot park at granite dot com."
        },
        {
          "quem": "mia",
          "t": "Could you speak more slowly, please?"
        },
        {
          "quem": "leo",
          "t": "Sure. Leo… dot… park… at granite… dot com."
        },
        {
          "quem": "mia",
          "t": "Let me check: P-A-R-K?"
        },
        {
          "quem": "leo",
          "t": "Yes, that’s right."
        },
        {
          "quem": "mia",
          "t": "Perfect. Thank you for your patience!"
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo need?",
          "op": [
            "The contract",
            "A meeting",
            "The proposal"
          ],
          "a": 0,
          "por": "Please send me the contract."
        },
        {
          "q": "What is Leo’s e-mail?",
          "op": [
            "leo.park@granite.com",
            "leo_park@granite.com",
            "leopark@granite.com"
          ],
          "a": 0,
          "por": "My e-mail is leo dot park at granite dot com."
        },
        {
          "q": "What does Mia say when Leo is fast?",
          "op": [
            "Could you speak more slowly, please?",
            "What?",
            "Repeat, please."
          ],
          "a": 0,
          "por": "Could you speak more slowly, please?"
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "Sorry, could you repeat that?",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Could you speak more slowly, please?",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "My e-mail is … at … dot com.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "Polite: <b>Could you repeat that / speak more slowly / spell that, please?</b> · e-mail: <b>at, dot, underscore</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Could you speak more slowly, please?",
          "aceita": [],
          "d": "Dica: pedido educado começa com <b>Could you</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Can you speak more slow?",
          "r": "Could you speak more slowly?",
          "aceita": [
            "Could you speak more slowly, please?",
            "Can you speak more slowly?"
          ],
          "d": "Dica: falar como? <b>slowly</b> (com -ly)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Repeat, please.",
          "r": "Could you repeat that, please?",
          "aceita": [
            "Sorry, could you repeat that?",
            "Could you repeat that?"
          ],
          "d": "Dica: com cliente, ordem seca soa rude: <b>Could you…?</b>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "leo arroba bluepeak point com",
          "r": "leo at bluepeak dot com",
          "aceita": [],
          "d": "Dica: @ = <b>at</b>, . = <b>dot</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A phone on a desk at night",
      "pede": "Write your phone card: two polite phrases and your work e-mail in words.",
      "ph": "Sorry, could you …? My e-mail is … at … dot com.",
      "ex": "Sorry, could you repeat that? Could you spell that, please? My e-mail is leo underscore martins at bluepeak dot com."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How do you spell your last name?",
          "ph": "It’s …: … - … - …",
          "ex": "It’s Souza: S-O-U-Z-A."
        },
        {
          "q": "What is difficult for you on the phone in English?",
          "ph": "… is difficult because …",
          "ex": "Numbers are difficult because people say them fast."
        }
      ]
    }
  }
};
