/* FLIGHT DELAYED · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: will for decisions now + Could you / Can I have. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "flight-delayed",
  "titulo": "Flight Delayed",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/8065d3ecedb0/flight-delayed/img/live-a.webp",
  "alvo": "will for a decision made now (I'll take the next flight, I'll call my sister) + polite requests at the counter: Could you put me on ...? Can I have ...?; never 'I take', 'I go to call', 'I will to', 'Will you to'",
  "abrir": "What do you do when you wait a long time at an airport?",
  "fecho": "A decision made <b>right now</b>: <b>I'll</b> + verb (<i>OK, I'll take the next flight. I'll call my sister.</i>). Never <i>I take</i>, <i>I go to call</i> or <i>I will to wait</i>. Ask politely: <b>Could you</b> / <b>Can I have</b>.",
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
      "sub": "Mia at the airline counter, Leo is the agent. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/8065d3ecedb0/flight-delayed/img/live-a.webp",
      "leg": "A coffee, while you wait",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Good evening. How can I help you?"
        },
        {
          "quem": "mia",
          "t": "My flight is delayed. Could you put me on the next one?"
        },
        {
          "quem": "leo",
          "t": "The next flight is full, but I can put you on standby."
        },
        {
          "quem": "mia",
          "t": "OK, I'll take standby. Is there a flight tomorrow morning?"
        },
        {
          "quem": "leo",
          "t": "Yes, at seven. Will you stay in Chicago tonight?"
        },
        {
          "quem": "mia",
          "t": "I think so. I'll take the morning flight."
        },
        {
          "quem": "leo",
          "t": "Good. I'll give you a hotel voucher."
        },
        {
          "quem": "mia",
          "t": "Thanks! I'll call my sister. She's picking me up."
        },
        {
          "quem": "leo",
          "t": "Here is your new ticket. Have a good night."
        }
      ],
      "perguntas": [
        {
          "q": "Why can't Mia take the next flight?",
          "op": [
            "It is full",
            "It is too early",
            "It is cancelled"
          ],
          "a": 0,
          "por": "The next flight is full."
        },
        {
          "q": "What will Leo give Mia?",
          "op": [
            "A hotel voucher",
            "A coffee",
            "A new suitcase"
          ],
          "a": 0,
          "por": "I'll give you a hotel voucher."
        },
        {
          "q": "What will Mia do about her sister?",
          "op": [
            "She'll call her",
            "She'll ask her to wait",
            "She'll send a letter"
          ],
          "a": 0,
          "por": "I'll call my sister."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the counter. Hear it, then say it.",
      "frases": [
        {
          "t": "The flight is delayed. I'll get a coffee.",
          "img": "https://wolf-labs.pages.dev/p/8065d3ecedb0/flight-delayed/img/live-a.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "OK, I'll take the morning flight.",
          "img": "https://wolf-labs.pages.dev/p/8065d3ecedb0/flight-delayed/img/live-a.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Could you give me a hotel voucher?",
          "img": "https://wolf-labs.pages.dev/p/8065d3ecedb0/flight-delayed/img/live-a.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "I'll or not? Four quick ones.",
      "regra": "<b>I'll</b> + verb = a decision now · <b>Could you</b> + verb · never <b>will to</b>, never <b>I go to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I will wait here until the gate opens.",
          "aceita": [],
          "d": "Dica: decisão na hora: <b>I will</b> + verbo direto."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: a decision right now.",
          "mostra": "OK, I take the next flight.",
          "r": "OK, I'll take the next flight.",
          "aceita": [
            "OK, I will take the next flight."
          ],
          "d": "Dica: decidiu agora = <b>I'll</b> + verbo, não o presente simples."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: no to after will.",
          "mostra": "I will to wait here.",
          "r": "I'll wait here.",
          "aceita": [
            "I will wait here."
          ],
          "d": "Dica: depois de <b>will</b>, o verbo vem direto, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I go to call my wife now.",
          "r": "I'll call my wife now.",
          "aceita": [
            "I will call my wife now."
          ],
          "d": "Dica: 'eu vou ligar' na hora é <b>I'll call</b>, não 'I go to call'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/8065d3ecedb0/flight-delayed/img/live-a.webp",
      "leg": "A coffee on a long night",
      "pede": "Look at the picture. Your flight is delayed and you are waiting. Write 2 or 3 sentences: what you'll do now (<b>I'll</b> …) and one polite request with <b>Could you</b>.",
      "ph": "I'll …",
      "ex": "I'll wait here and drink my coffee. I'll call my sister. Could you put me on the morning flight?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Your flight is cancelled. What will you do first?",
          "ph": "First I'll …",
          "ex": "First I'll go to the help desk."
        },
        {
          "q": "You are at the counter. What do you ask the agent?",
          "ph": "Could you …?",
          "ex": "Could you put me on the next flight?"
        }
      ]
    }
  }
};
