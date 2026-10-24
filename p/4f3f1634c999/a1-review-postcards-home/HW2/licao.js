/* POSTCARDS HOME · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Unit 9: tempo, comparativo, the best, good x well. A1: dicas em português só nas notas (d). Só imagens live-* escuras. Sem doença nas frases. */
window.HW2 = {
  "id": "a1-review-postcards-home",
  "titulo": "Postcards Home",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4f3f1634c999/a1-review-postcards-home/img/live-capa.webp",
  "alvo": "Unit 9 review: the weather with It's; comparatives (bigger than, never more big); superlatives (the best); good (thing) x well (action); so = result, because = reason",
  "abrir": "What is the weather like today?",
  "fecho": "Weather: <b>It is</b> sunny, <b>It is</b> cold. Compare: <b>bigger than</b>, <b>smaller than</b>, <b>better than</b>. <b>The best</b> = number one. <b>Good</b> + thing, <b>well</b> + action: <i>I sleep well.</i> <b>So</b> = result, <b>because</b> = reason.",
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
      "sub": "Leo calls Mia from a trip. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/4f3f1634c999/a1-review-postcards-home/img/live-conversa.webp",
      "leg": "Night clouds from a plane window",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo! Where are you? What is the weather like?"
        },
        {
          "quem": "leo",
          "t": "I am in Lisbon. It is sunny and very hot."
        },
        {
          "quem": "mia",
          "t": "Is it bigger than our city?"
        },
        {
          "quem": "leo",
          "t": "No, it is smaller, but it is beautiful. The best thing is the food."
        },
        {
          "quem": "mia",
          "t": "How do you feel?"
        },
        {
          "quem": "leo",
          "t": "I feel tired, so I go to bed early. But I sleep well here."
        },
        {
          "quem": "mia",
          "t": "Is this a good trip?"
        },
        {
          "quem": "leo",
          "t": "Yes! It is better than my last trip, because the people are friendly."
        }
      ],
      "perguntas": [
        {
          "q": "What is the weather like in Lisbon?",
          "op": [
            "Sunny and hot",
            "Cold and rainy",
            "Windy and cold"
          ],
          "a": 0,
          "por": "It is sunny and very hot."
        },
        {
          "q": "What is the best thing for Leo?",
          "op": [
            "The food",
            "The beach",
            "The weather"
          ],
          "a": 0,
          "por": "The best thing is the food."
        },
        {
          "q": "Why is this trip better than the last one?",
          "op": [
            "The people are friendly",
            "The city is bigger",
            "The hotel is cheap"
          ],
          "a": 0,
          "por": "It is better than my last trip, because the people are friendly."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from a postcard. Hear it, then say it.",
      "frases": [
        {
          "t": "It is sunny and very hot today.",
          "img": "https://wolf-labs.pages.dev/p/4f3f1634c999/a1-review-postcards-home/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Lisbon is smaller than our city.",
          "img": "https://wolf-labs.pages.dev/p/4f3f1634c999/a1-review-postcards-home/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The food is the best, and I sleep well.",
          "img": "https://wolf-labs.pages.dev/p/4f3f1634c999/a1-review-postcards-home/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Weather, than, good or well. Four quick ones.",
      "regra": "<b>It is</b> sunny · <b>bigger than</b> · <b>the best</b> · <b>good</b> + thing, <b>well</b> + action.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Tokyo is bigger than Lisbon.",
          "aceita": [],
          "d": "Dica: comparativo curto: <b>bigger than</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Rio is more big than Lisbon.",
          "r": "Rio is bigger than Lisbon.",
          "aceita": [],
          "d": "Dica: palavra curta + <b>-er</b>: bigger. Nada de 'more big'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Is very hot today.",
          "r": "It is very hot today.",
          "aceita": [
            "It's very hot today."
          ],
          "d": "Dica: no tempo, comece com <b>It is</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I sleep good here.",
          "r": "I sleep well here.",
          "aceita": [],
          "d": "Dica: <b>well</b> descreve uma ação (sleep). <b>Good</b> descreve uma coisa."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4f3f1634c999/a1-review-postcards-home/img/live-capa.webp",
      "leg": "A globe and two small planes",
      "pede": "Look at the picture: a globe and two small planes. Write 2 or 3 sentences about a trip. Use <b>It is ...</b>, <b>bigger / smaller than</b>, <b>so</b> or <b>because</b>.",
      "ph": "I am in … It is …",
      "ex": "I am in Lisbon. It is sunny and hot. It is smaller than my city, but the food is the best."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is the weather like today?",
          "ph": "It is … today.",
          "ex": "It is cloudy and cold today."
        },
        {
          "q": "Which city is the best for you? Why?",
          "ph": "The best city is … because …",
          "ex": "The best city is Rio, because the beaches are beautiful."
        }
      ]
    }
  }
};
