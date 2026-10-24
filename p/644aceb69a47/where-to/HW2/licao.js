/* WHERE TO? · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: horas (It's / at) e duração (How long?). A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "where-to",
  "titulo": "Where To?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/644aceb69a47/where-to/img/live-a.webp",
  "alvo": "The time and the trip: It's seven thirty. I leave at seven thirty. It's ten minutes. How long is it? How much is it? Can you take me to ..., please?",
  "abrir": "What time do you leave home in the morning?",
  "fecho": "<b>It's</b> + the time: <i>It's seven thirty.</i> <b>At</b> + the time: <i>I leave at seven thirty.</i> How long? <i>It's ten minutes.</i> Never <i>How much time is it?</i>",
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
      "sub": "Mia and Leo in a taxi in Los Angeles. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/644aceb69a47/where-to/img/live-b.webp",
      "leg": "A taxi stop at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, our plane is at nine fifteen. What time is it now?"
        },
        {
          "quem": "mia",
          "t": "It's seven thirty. We have time."
        },
        {
          "quem": "leo",
          "t": "Excuse me, can you take us to the airport, please?"
        },
        {
          "quem": "mia",
          "t": "How long is it, Leo? Ask the driver."
        },
        {
          "quem": "leo",
          "t": "He says it's twenty minutes."
        },
        {
          "quem": "mia",
          "t": "Good. And how much is it?"
        },
        {
          "quem": "leo",
          "t": "About thirty-eight dollars."
        },
        {
          "quem": "mia",
          "t": "OK. But look at the road. So many cars!"
        },
        {
          "quem": "leo",
          "t": "The driver says it's forty-five minutes now."
        },
        {
          "quem": "mia",
          "t": "We leave at seven thirty, so we arrive at eight fifteen. We're OK!"
        }
      ],
      "perguntas": [
        {
          "q": "What time is the plane?",
          "op": [
            "At nine fifteen",
            "At seven thirty",
            "At eight fifteen"
          ],
          "a": 0,
          "por": "Our plane is at nine fifteen."
        },
        {
          "q": "How long is the taxi now?",
          "op": [
            "Forty-five minutes",
            "Twenty minutes",
            "Ten minutes"
          ],
          "a": 0,
          "por": "It's forty-five minutes now."
        },
        {
          "q": "How much is the taxi?",
          "op": [
            "About thirty-eight dollars",
            "About twenty dollars",
            "About forty-five dollars"
          ],
          "a": 0,
          "por": "About thirty-eight dollars."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the taxi. Hear it, then say it.",
      "frases": [
        {
          "t": "It's seven thirty. I leave at eight.",
          "img": "https://wolf-labs.pages.dev/p/644aceb69a47/where-to/img/live-b.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Can you take me to the airport, please?",
          "img": "https://wolf-labs.pages.dev/p/644aceb69a47/where-to/img/live-b.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "How long does it take? It's ten minutes.",
          "img": "https://wolf-labs.pages.dev/p/644aceb69a47/where-to/img/live-a.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "The time and the trip. Four quick ones.",
      "regra": "<b>It's</b> + the time · <b>at</b> + the time · <b>How long</b> = the minutes · <b>How much</b> = the price.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Can you take me to the hotel, please?",
          "aceita": [],
          "d": "Dica: <b>Can you take me to</b> + o lugar + <b>please</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: say the time.",
          "mostra": "It's 7:30 hours.",
          "r": "It's seven thirty.",
          "aceita": [
            "It is seven thirty.",
            "It's 7:30.",
            "It is 7:30."
          ],
          "d": "Dica: sem <b>hours</b>: <b>It's seven thirty.</b>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I leave home in seven thirty.",
          "r": "I leave home at seven thirty.",
          "aceita": [
            "I leave home at 7:30."
          ],
          "d": "Dica: hora marcada pede <b>at</b>, não <b>in</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: how long?",
          "mostra": "How much time is it to the airport?",
          "r": "How long is it to the airport?",
          "aceita": [
            "How long does it take to the airport?",
            "How long does it take?"
          ],
          "d": "Dica: duração = <b>How long</b>. <b>How much</b> é para preço."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/644aceb69a47/where-to/img/live-b.webp",
      "leg": "A taxi stop at night",
      "pede": "Look at the picture. Write 2 or 3 sentences: where you go, at what time, and how long it is.",
      "ph": "I go to … at …",
      "ex": "I go to the airport at seven thirty. It's twenty minutes. The taxi is thirty dollars."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What time do you leave home in the morning?",
          "ph": "I leave home at …",
          "ex": "I leave home at seven thirty."
        },
        {
          "q": "How long is it from your home to work or school?",
          "ph": "It's … minutes.",
          "ex": "It's twenty minutes by bus."
        }
      ]
    }
  }
};
