/* THIRTY-THREE POINT NINE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present perfect continuous (since / for). B1: nenhum português. */
window.HW2 = {
  "id": "thirty-three-point-nine",
  "titulo": "Thirty-Three Point Nine",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b62284f62f61/thirty-three-point-nine/img/live-caixa.webp",
  "alvo": "present perfect continuous: have / has been + -ing for something that started and continues; since + a point in time, for + a piece of time; How long have you been ...?",
  "abrir": "What have you been putting off lately?",
  "fecho": "<b>have / has been + -ing</b> for something that started and is still going: <i>I've been waiting for an hour.</i> <b>Since</b> + the starting point (<i>since March</i>); <b>for</b> + the length (<i>for seven months</i>). The question: <i>How long have you been living here?</i>",
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
      "sub": "Mia and Leo at the office. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/b62284f62f61/thirty-three-point-nine/img/live-envelope.webp",
      "leg": "The unopened letter",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, that envelope has been on your desk for ages. Haven't you opened it yet?"
        },
        {
          "quem": "leo",
          "t": "Not yet. It has been sitting there since March."
        },
        {
          "quem": "mia",
          "t": "Since March? That's seven months! How long have you been avoiding it, really?"
        },
        {
          "quem": "leo",
          "t": "Honestly, I've been avoiding it since the day it arrived. I think it's a bill."
        },
        {
          "quem": "mia",
          "t": "And you've been feeling bad about it all this time, haven't you?"
        },
        {
          "quem": "leo",
          "t": "Yes. I've been thinking about it every night, and I've been sleeping badly."
        },
        {
          "quem": "mia",
          "t": "Why don't you decide when and where? Tomorrow, nine o'clock, at the kitchen table."
        },
        {
          "quem": "leo",
          "t": "Has that really been working for you?"
        },
        {
          "quem": "mia",
          "t": "It has. I've been using that trick since January, and my desk is finally clean."
        },
        {
          "quem": "leo",
          "t": "OK. Tomorrow, nine o'clock. Will you call me?"
        }
      ],
      "perguntas": [
        {
          "q": "How long has the envelope been on Leo's desk?",
          "op": [
            "Since March",
            "For a week",
            "Since yesterday"
          ],
          "a": 0,
          "por": "It has been sitting there since March."
        },
        {
          "q": "Why has Leo been sleeping badly?",
          "op": [
            "He has been thinking about the envelope every night",
            "He has been working late",
            "He has been reading a bill"
          ],
          "a": 0,
          "por": "I've been thinking about it every night, and I've been sleeping badly."
        },
        {
          "q": "What has Mia been using since January?",
          "op": [
            "A plan with a time and a place",
            "A new desk",
            "A phone alarm"
          ],
          "a": 0,
          "por": "I've been using that trick since January."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about time and waiting. Hear it, then say it.",
      "frases": [
        {
          "t": "I've been working at this desk since nine o'clock.",
          "img": "https://wolf-labs.pages.dev/p/b62284f62f61/thirty-three-point-nine/img/live-mesa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The coat has been hanging by the door for three weeks.",
          "img": "https://wolf-labs.pages.dev/p/b62284f62f61/thirty-three-point-nine/img/live-casaco.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "How long have you been keeping this box in the hallway?",
          "img": "https://wolf-labs.pages.dev/p/b62284f62f61/thirty-three-point-nine/img/live-caixa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "have been + -ing, for and since. Four quick ones.",
      "regra": "<b>have / has been + -ing</b> · <b>since</b> + a point (since Monday) · <b>for</b> + a piece of time (for two weeks) · <b>How long have you been ...?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She has been learning Spanish for three months.",
          "aceita": [],
          "d": "Hint: <b>has been</b> + verb-ing, then <b>for</b> + a piece of time."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I'm waiting for you since two o'clock.",
          "r": "I've been waiting for you since two o'clock.",
          "aceita": [
            "I have been waiting for you since two o'clock."
          ],
          "d": "Hint: it started at two and it is still going, so <b>have been waiting</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He has been working here since five years.",
          "r": "He has been working here for five years.",
          "aceita": [
            "He's been working here for five years."
          ],
          "d": "Hint: five years is a piece of time, so <b>for</b>. <i>Since</i> needs a starting point."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the question correct.",
          "mostra": "How long are you living in this city?",
          "r": "How long have you been living in this city?",
          "aceita": [
            "How long have you lived in this city?"
          ],
          "d": "Hint: <b>How long have you been</b> + verb-ing."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b62284f62f61/thirty-three-point-nine/img/live-poeira.webp",
      "leg": "A closed laptop, covered in dust",
      "pede": "Look at the picture: a closed laptop covered in dust. Write 2 or 3 sentences: how long it has been closed, and what you have been putting off. Use <b>have been + -ing</b>, <b>for</b> and <b>since</b>.",
      "ph": "The laptop has been closed since …",
      "ex": "The laptop has been closed for two months. I've been putting off my project since March, because I've been feeling tired."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What have you been putting off? How long?",
          "ph": "I've been putting off … for / since …",
          "ex": "I've been putting off a phone call to my landlord for two weeks."
        },
        {
          "q": "What have you been doing a lot lately? Since when?",
          "ph": "I've been … a lot since …",
          "ex": "I've been walking a lot since I changed jobs in June."
        }
      ]
    }
  }
};
