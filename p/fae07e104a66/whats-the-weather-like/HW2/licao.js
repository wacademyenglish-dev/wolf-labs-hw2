/* WHAT'S THE WEATHER LIKE? · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: It's + tempo; in winter / in July. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "whats-the-weather-like",
  "titulo": "What's the Weather Like?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/fae07e104a66/whats-the-weather-like/img/live-capa.webp",
  "alvo": "weather with It's: It's sunny / cloudy / windy / hot / cold, It's raining / snowing, in winter / in July, What's the weather like?; never Is raining, never makes cold",
  "abrir": "What's the weather like where you are today?",
  "fecho": "The weather starts with <b>It's</b>: <i>It's sunny. It's cold.</i> Right now: <b>It's raining. It's snowing.</b> When: <b>in winter, in July</b>. The question: <b>What's the weather like?</b>",
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
      "sub": "Mia and Leo talk on the phone from two cities. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/fae07e104a66/whats-the-weather-like/img/live-estudio.webp",
      "leg": "A weather studio at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hi Leo! What's the weather like in Sydney?"
        },
        {
          "quem": "leo",
          "t": "It's sunny and hot. It's thirty degrees."
        },
        {
          "quem": "mia",
          "t": "Wow! It's cold here. It's snowing in Toronto."
        },
        {
          "quem": "leo",
          "t": "Is it windy?"
        },
        {
          "quem": "mia",
          "t": "No, it isn't. But it's very cold."
        },
        {
          "quem": "leo",
          "t": "What's the weather like in July there?"
        },
        {
          "quem": "mia",
          "t": "In July it's warm and sunny. I love summer."
        },
        {
          "quem": "leo",
          "t": "In Sydney, July is winter. It's cool and cloudy."
        },
        {
          "quem": "mia",
          "t": "Same planet, different weather!"
        }
      ],
      "perguntas": [
        {
          "q": "What's the weather like in Sydney?",
          "op": [
            "Sunny and hot",
            "Cold and snowy",
            "Rainy and windy"
          ],
          "a": 0,
          "por": "It's sunny and hot. It's thirty degrees."
        },
        {
          "q": "What's the weather like in Toronto in July?",
          "op": [
            "Warm and sunny",
            "Snowy",
            "Cool and cloudy"
          ],
          "a": 0,
          "por": "In July it's warm and sunny."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the weather. Hear it, then say it.",
      "frases": [
        {
          "t": "It's raining in the park.",
          "img": "https://wolf-labs.pages.dev/p/fae07e104a66/whats-the-weather-like/img/live-chuva.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It's snowing, and it's very cold.",
          "img": "https://wolf-labs.pages.dev/p/fae07e104a66/whats-the-weather-like/img/live-neve.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "In July it's warm and sunny.",
          "img": "https://wolf-labs.pages.dev/p/fae07e104a66/whats-the-weather-like/img/live-estudio.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "It's ...? Four quick ones.",
      "regra": "<b>It's</b> + weather · <b>It's raining / snowing</b> · <b>in winter, in July</b> · <b>What's the weather like?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What's the weather like today?",
          "aceita": [],
          "d": "Dica: <b>What's the weather like</b> + onde ou quando."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Is raining today.",
          "r": "It's raining today.",
          "aceita": [
            "It is raining today."
          ],
          "d": "Dica: o tempo começa com <b>It's</b>. Sem 'it', a frase fica sem sujeito."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It's sun today.",
          "r": "It's sunny today.",
          "aceita": [],
          "d": "Dica: depois de <b>It's</b>, a palavra com -y: sun vira <b>sunny</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It's hot on January.",
          "r": "It's hot in January.",
          "aceita": [],
          "d": "Dica: meses e estações: <b>in</b> January, <b>in</b> winter."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/fae07e104a66/whats-the-weather-like/img/live-neve.webp",
      "leg": "A snowy park at night",
      "pede": "Look at the picture: a snowy park at night. Write 2 or 3 sentences about the weather there. Use <b>It's ...</b> and one more word like <b>cold</b> or <b>snowing</b>.",
      "ph": "It's snowing and it's …",
      "ex": "It's snowing. It's very cold, and it's dark. In winter it's cold here too."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What's the weather like today where you are?",
          "ph": "It's …",
          "ex": "It's sunny and hot today."
        },
        {
          "q": "What's your favorite season? What's the weather like then?",
          "ph": "My favorite season is … It's …",
          "ex": "My favorite season is fall. It's cool and cloudy."
        }
      ]
    }
  }
};
