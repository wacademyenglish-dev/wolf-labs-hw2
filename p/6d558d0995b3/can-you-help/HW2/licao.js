/* CAN YOU HELP ME? · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: can / can't de habilidade, Can you...?. A1: dicas em português só nas notas (d). Só live-abertura e live-phone; bg-board e bg-door ficam de fora (claras). */
window.HW2 = {
  "id": "can-you-help",
  "titulo": "Can You Help Me?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/6d558d0995b3/can-you-help/img/live-abertura.webp",
  "alvo": "can / can't for ability: person + can / can't + plain verb; Can you...? Yes, I can. / No, I can't.; never she cans, I can to, I no can, do you can",
  "abrir": "What can you do very well at work?",
  "fecho": "<b>Can</b> never changes: <i>she can drive</i>. The plain verb comes next: <i>can take</i>, never <i>can to take</i>. The no: <b>can't</b>. The question: <b>Can</b> you help me? Yes, I can. / No, I can't.",
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
      "sub": "Mia and Leo plan a company event. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/6d558d0995b3/can-you-help/img/live-phone.webp",
      "leg": "A phone with a message on a desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the company event is on Friday. Can you help me?"
        },
        {
          "quem": "leo",
          "t": "Yes, I can. What do you need?"
        },
        {
          "quem": "mia",
          "t": "Can you drive a van?"
        },
        {
          "quem": "leo",
          "t": "No, I can't. I can drive a car, but not a van. Diego can drive a van."
        },
        {
          "quem": "mia",
          "t": "Good. Can Ana take photos?"
        },
        {
          "quem": "leo",
          "t": "Yes, she can. She can take great photos. But she can't drive."
        },
        {
          "quem": "mia",
          "t": "And can you speak English with the clients?"
        },
        {
          "quem": "leo",
          "t": "Yes, I can. And Bruno can fix the computers."
        },
        {
          "quem": "mia",
          "t": "Perfect. Can you come at eight on Friday?"
        },
        {
          "quem": "leo",
          "t": "Sorry, I can't. I can come at nine."
        }
      ],
      "perguntas": [
        {
          "q": "Can Leo drive a van?",
          "op": [
            "No, he can't",
            "Yes, he can",
            "Only on Friday"
          ],
          "a": 0,
          "por": "No, I can't. I can drive a car, but not a van."
        },
        {
          "q": "Who can take photos?",
          "op": [
            "Ana",
            "Diego",
            "Bruno"
          ],
          "a": 0,
          "por": "Yes, she can. She can take great photos."
        },
        {
          "q": "What time can Leo come on Friday?",
          "op": [
            "At nine",
            "At eight",
            "At ten"
          ],
          "a": 0,
          "por": "Sorry, I can't. I can come at nine."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about helping a team. Hear it, then say it.",
      "frases": [
        {
          "t": "Can you send the list to my phone?",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/6d558d0995b3/can-you-help/img/live-phone.webp"
        },
        {
          "t": "We can write the names of the team on this board.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/6d558d0995b3/can-you-help/img/live-abertura.webp"
        },
        {
          "t": "Diego can drive a van, but I can't.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "can and can't at work. Four quick ones.",
      "regra": "<b>can</b> never changes · the plain verb after it · <b>can't</b> = no · <b>Can</b> you…? · never <i>cans</i>, <i>can to</i>, <i>no can</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Can you help me on Friday?",
          "aceita": [],
          "d": "Dica: pergunta com <b>Can</b> + you + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Diego cans drive the van.",
          "r": "Diego can drive the van.",
          "aceita": [],
          "d": "Dica: <b>can</b> nunca leva -s."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Ana can to take the photos.",
          "r": "Ana can take the photos.",
          "aceita": [],
          "d": "Dica: depois de <b>can</b> o verbo vem direto, sem <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I no can come at eight.",
          "r": "I can't come at eight.",
          "aceita": [
            "I cannot come at eight."
          ],
          "d": "Dica: o negativo é <b>can't</b>, não <i>no can</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/6d558d0995b3/can-you-help/img/live-phone.webp",
      "leg": "A phone with a message on a desk",
      "pede": "Look at the picture: a phone with a message on a desk. Write 2 or 3 sentences for a colleague: what you can do and what you can't. Use <b>can</b> and <b>can't</b>.",
      "ph": "I can … but I can't …",
      "ex": "I can send the list today. I can't come on Friday morning. Can you help me with the photos?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Can you drive? A car, a motorcycle, a van?",
          "ph": "Yes, I can … / No, I can't.",
          "ex": "I can drive a car, but I can't drive a van."
        },
        {
          "q": "What languages can you speak?",
          "ph": "I can speak …",
          "ex": "I can speak Portuguese and a little English."
        }
      ]
    }
  }
};
