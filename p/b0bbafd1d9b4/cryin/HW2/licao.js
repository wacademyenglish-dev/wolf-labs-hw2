/* CRYIN' · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: too and enough. Linha de música: NENHUM verso aqui; o listening é diálogo original. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "cryin",
  "titulo": "Cryin'",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b0bbafd1d9b4/cryin/img/live-clube.webp",
  "alvo": "too and enough: too + adjective (too cold), adjective + enough (warm enough), enough + noun (enough time), too ... to and ... enough to; never enough before the adjective, never too much + adjective",
  "abrir": "What is too loud in your street?",
  "fecho": "<b>too</b> + adjective = more than you want: <i>too cold.</i> Adjective + <b>enough</b> = as much as you need: <i>warm enough.</i> <b>Enough</b> before a noun: <i>enough time.</i> Then <b>to</b> + verb: <i>too tired to run, strong enough to carry it.</i> Never <i>enough hot</i>, never <i>too much cold</i>.",
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
      "sub": "Mia and Leo in a small music club. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/b0bbafd1d9b4/cryin/img/live-clube.webp",
      "leg": "A small club with amps and lights",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, why are you sitting here? The club is empty."
        },
        {
          "quem": "leo",
          "t": "I'm too tired to practice. And my hands are too cold."
        },
        {
          "quem": "mia",
          "t": "It's not too cold. The room is warm enough."
        },
        {
          "quem": "leo",
          "t": "Maybe. But this guitar is too old. It isn't loud enough."
        },
        {
          "quem": "mia",
          "t": "Then use my amp. It's big enough, and the sound is great."
        },
        {
          "quem": "leo",
          "t": "OK. But I don't have enough time. The club closes at ten."
        },
        {
          "quem": "mia",
          "t": "You have enough time! It's only eight. And you're strong enough to play for two hours."
        },
        {
          "quem": "leo",
          "t": "You're right. I'm too lazy sometimes. Let's start."
        }
      ],
      "perguntas": [
        {
          "q": "Why is Leo not practicing?",
          "op": [
            "He is too tired",
            "He is too happy",
            "He is too busy"
          ],
          "a": 0,
          "por": "I'm too tired to practice."
        },
        {
          "q": "What isn't loud enough?",
          "op": [
            "Leo's guitar",
            "Mia's amp",
            "The club"
          ],
          "a": 0,
          "por": "This guitar is too old. It isn't loud enough."
        },
        {
          "q": "What time does the club close?",
          "op": [
            "At ten",
            "At eight",
            "At two"
          ],
          "a": 0,
          "por": "The club closes at ten."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with too and enough. Hear it, then say it.",
      "frases": [
        {
          "t": "The club is big enough for the whole band.",
          "img": "https://wolf-labs.pages.dev/p/b0bbafd1d9b4/cryin/img/live-clube.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The river is too wide to cross.",
          "img": "https://wolf-labs.pages.dev/p/b0bbafd1d9b4/cryin/img/live-rio.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I don't have enough time to practice today.",
          "img": "https://wolf-labs.pages.dev/p/b0bbafd1d9b4/cryin/img/live-clube.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "too or enough? Four quick ones.",
      "regra": "<b>too</b> + adjective · adjective + <b>enough</b> · <b>enough</b> + noun · <b>too tired to</b> + verb · never <i>enough hot</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The guitar is not loud enough for the club.",
          "aceita": [],
          "d": "Dica: adjetivo + <b>enough</b>: loud enough."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The coffee is enough hot.",
          "r": "The coffee is hot enough.",
          "aceita": [],
          "d": "Dica: <b>enough</b> vem depois do adjetivo: <b>hot enough</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It is too much cold today.",
          "r": "It is too cold today.",
          "aceita": [],
          "d": "Dica: antes de adjetivo, só <b>too</b>, nunca 'too much'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She is too tired for walk.",
          "r": "She is too tired to walk.",
          "aceita": [],
          "d": "Dica: depois de <b>too tired</b>, use <b>to</b> + verbo, não 'for walk'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b0bbafd1d9b4/cryin/img/live-rio.webp",
      "leg": "A river between dark banks",
      "pede": "Look at the picture: a river at dusk between dark banks. Write 2 or 3 sentences about a place. Is it big enough? Is it too noisy, too dark, too far? Use <b>too</b> and <b>enough</b>.",
      "ph": "This place is too … but it is … enough.",
      "ex": "This river is too wide to cross. The water is too dark to see the bottom. It is quiet enough to sleep here."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Is your home big enough for you? What is too small?",
          "ph": "My home is … enough. … is too small.",
          "ex": "My flat is big enough for me. The kitchen is too small."
        },
        {
          "q": "What is too expensive for you now? What do you have enough of?",
          "ph": "… is too expensive. I have enough …",
          "ex": "A new car is too expensive for me. I have enough books."
        }
      ]
    }
  }
};
