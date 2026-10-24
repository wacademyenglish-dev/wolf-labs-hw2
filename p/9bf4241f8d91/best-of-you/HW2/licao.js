/* BEST OF YOU · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: so / such ... that. Linha de música: NENHUM verso aqui; cena de treino na academia, sem briga. B1: nenhum português. */
window.HW2 = {
  "id": "best-of-you",
  "titulo": "Best of You",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/9bf4241f8d91/best-of-you/img/live-amanhecer.webp",
  "alvo": "so / such ... that: so + adjective / adverb, so much / so many + noun, such (a) + adjective + noun, then that + result; never such tired, so a good, so much friends",
  "abrir": "What was so good last week that you remember it?",
  "fecho": "<b>so + adjective</b>: <i>so tired that</i>. <b>so much / so many + noun</b>: <i>so many people that</i>. <b>such (a) + adjective + noun</b>: <i>such a long day that</i>. Then <b>that</b> + the result. Never <i>such tired</i>, never <i>so a good</i>.",
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
      "sub": "Mia, the coach, talks to Leo after a hard training day. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/9bf4241f8d91/best-of-you/img/live-amanhecer.webp",
      "leg": "An empty gym at dawn",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you look so tired today."
        },
        {
          "quem": "leo",
          "t": "I am. The training was so hard that I couldn't lift my arms."
        },
        {
          "quem": "mia",
          "t": "It was such a long session! Three hours without a break."
        },
        {
          "quem": "leo",
          "t": "And there were so many people that I waited twenty minutes for a machine."
        },
        {
          "quem": "mia",
          "t": "Then you had so little time that you ran only five kilometers."
        },
        {
          "quem": "leo",
          "t": "Yes, but I ran so fast that the coach clapped."
        },
        {
          "quem": "mia",
          "t": "That's great. You have such a big race on Sunday that you must rest."
        },
        {
          "quem": "leo",
          "t": "I know. I'm so sleepy that I could sleep for ten hours."
        },
        {
          "quem": "mia",
          "t": "Then go home. Tomorrow will be such an easy day that you will feel new."
        },
        {
          "quem": "leo",
          "t": "Thanks, coach. See you on Sunday."
        }
      ],
      "perguntas": [
        {
          "q": "Why couldn't Leo lift his arms?",
          "op": [
            "The training was so hard",
            "He was so sleepy",
            "He had so little time"
          ],
          "a": 0,
          "por": "The training was so hard that I couldn't lift my arms."
        },
        {
          "q": "Why did Leo wait twenty minutes?",
          "op": [
            "There were so many people",
            "The session was so long",
            "He was so slow"
          ],
          "a": 0,
          "por": "There were so many people that I waited twenty minutes for a machine."
        },
        {
          "q": "Why must Leo rest?",
          "op": [
            "He has such a big race on Sunday",
            "He ran so fast",
            "The coach is so tired"
          ],
          "a": 0,
          "por": "You have such a big race on Sunday that you must rest."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about training. Hear it, then say it.",
      "frases": [
        {
          "t": "The gym was so quiet that I heard my steps.",
          "img": "https://wolf-labs.pages.dev/p/9bf4241f8d91/best-of-you/img/live-amanhecer.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The arena was so big that I felt very small.",
          "img": "https://wolf-labs.pages.dev/p/9bf4241f8d91/best-of-you/img/live-chuva.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "These gloves are so old that they are falling apart.",
          "img": "https://wolf-labs.pages.dev/p/9bf4241f8d91/best-of-you/img/live-luvas.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "so or such? Four quick ones.",
      "regra": "<b>so</b> + adjective · <b>so much / many</b> + noun · <b>such (a)</b> + adjective + noun · then <b>that</b> + result.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It was such a hot day that we stayed home.",
          "aceita": [],
          "d": "Hint: <b>such a</b> + adjective + noun, then <b>that</b> + the result."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It was so a good movie that I watched it twice.",
          "r": "It was such a good movie that I watched it twice.",
          "aceita": [
            "It was such a good film that I watched it twice."
          ],
          "d": "Hint: with <i>a</i> + noun, use <b>such a</b>, not <i>so a</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She has so much friends that she is never alone.",
          "r": "She has so many friends that she is never alone.",
          "aceita": [
            "She has so many friends that she's never alone."
          ],
          "d": "Hint: <i>friends</i> can be counted, so <b>so many</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The food was such good that we ate everything.",
          "r": "The food was so good that we ate everything.",
          "aceita": [
            "The food was so good that we ate it all."
          ],
          "d": "Hint: with only an adjective, use <b>so</b>, not <i>such</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/9bf4241f8d91/best-of-you/img/live-amanhecer.webp",
      "leg": "An empty gym at dawn",
      "pede": "Look at the picture: an empty gym at dawn. Write 2 or 3 sentences about a hard training day. Use <b>so ... that</b> or <b>such ... that</b>.",
      "ph": "The training was so … that …",
      "ex": "The gym was so empty that I heard my steps. It was such a long run that my legs hurt. I was so proud that I smiled."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Tell me about a day that was so good or so bad that you remember it.",
          "ph": "It was such a … day that …",
          "ex": "Last Sunday was such a nice day that we stayed at the park until night."
        },
        {
          "q": "What is so important to you that you never miss it?",
          "ph": "… is so important to me that …",
          "ex": "My English class is so important to me that I never miss it."
        }
      ]
    }
  }
};
