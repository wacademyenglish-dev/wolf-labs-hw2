/* THE BRAIN LAB · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: grau do comparativo: much / a lot / far, a bit / slightly, not nearly as … as. B1: nenhum português. */
window.HW2 = {
  "id": "the-brain-lab",
  "titulo": "The Brain Lab",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/be9832fa941d/the-brain-lab/img/live-capa.webp",
  "alvo": "degree before a comparative: much / a lot / far + comparative (big difference), a bit / slightly + comparative (small difference), not nearly as ... as; never 'very faster' or 'more easier'",
  "abrir": "Is English harder or easier than your first language for you?",
  "fecho": "A big difference: <b>much / a lot / far</b> + comparative (<i>far slower</i>). A small one: <b>a bit / slightly</b> + comparative (<i>slightly faster</i>). Not the same at all: <b>not nearly as … as</b>. <b>Very</b> goes with <i>fast</i>, never with <i>faster</i>, and never <i>more easier</i>.",
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
      "sub": "Mia and Leo in a language lab. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/be9832fa941d/the-brain-lab/img/live-lab.webp",
      "leg": "The lab, before the test",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, welcome to the lab. Today you do the color test twice."
        },
        {
          "quem": "leo",
          "t": "In Portuguese first? I think I'm much faster in Portuguese."
        },
        {
          "quem": "mia",
          "t": "We will see. Round one, in Portuguese: eighteen seconds. Round two, in English: thirty-six."
        },
        {
          "quem": "leo",
          "t": "Thirty-six? English was much slower!"
        },
        {
          "quem": "mia",
          "t": "Yes, a lot slower. But look at your mistakes: two in Portuguese, three in English."
        },
        {
          "quem": "leo",
          "t": "So English was only slightly worse for accuracy."
        },
        {
          "quem": "mia",
          "t": "Exactly. Now the switching test. You change language on every card."
        },
        {
          "quem": "leo",
          "t": "This is far more difficult. My English is not nearly as fast as my Portuguese."
        },
        {
          "quem": "mia",
          "t": "Don't worry. Your brain works a bit harder today, and tomorrow it will be easier."
        },
        {
          "quem": "leo",
          "t": "Easier? I am not so sure!"
        }
      ],
      "perguntas": [
        {
          "q": "How much slower was Leo in English?",
          "op": [
            "Much slower: twice the time",
            "A bit slower",
            "Not slower"
          ],
          "a": 0,
          "por": "Thirty-six? English was much slower!"
        },
        {
          "q": "What was the difference in mistakes?",
          "op": [
            "Only one more mistake",
            "Ten more mistakes",
            "No mistakes"
          ],
          "a": 0,
          "por": "But look at your mistakes: two in Portuguese, three in English."
        },
        {
          "q": "How does Leo feel about the switching test?",
          "op": [
            "It is far more difficult",
            "It is slightly easier",
            "It is not difficult"
          ],
          "a": 0,
          "por": "This is far more difficult."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the lab. Hear it, then say it.",
      "frases": [
        {
          "t": "English was much slower than Portuguese.",
          "img": "https://wolf-labs.pages.dev/p/be9832fa941d/the-brain-lab/img/live-lab.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The switching test is far more difficult.",
          "img": "https://wolf-labs.pages.dev/p/be9832fa941d/the-brain-lab/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "My English isn't nearly as fast as my Portuguese.",
          "img": "https://wolf-labs.pages.dev/p/be9832fa941d/the-brain-lab/img/live-lab.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "How big is the difference? Four quick ones.",
      "regra": "<b>much / a lot / far</b> + comparative = big · <b>a bit / slightly</b> + comparative = small · <b>not nearly as … as</b> · never <i>very faster</i>, never <i>more easier</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Leo was much slower than Mia.",
          "aceita": [],
          "d": "Hint: <b>much</b> + comparative, then <b>than</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She is very faster than me.",
          "r": "She is much faster than me.",
          "aceita": [
            "She is a lot faster than me.",
            "She is far faster than me."
          ],
          "d": "Hint: <b>very</b> goes with <i>fast</i>, not with <i>faster</i>. Use much, a lot or far."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The test is more easier today.",
          "r": "The test is easier today.",
          "aceita": [
            "The test is much easier today.",
            "The test is a lot easier today.",
            "The test is far easier today.",
            "The test is slightly easier today.",
            "The test is a bit easier today."
          ],
          "d": "Hint: easy + er = <b>easier</b>. Never <i>more easier</i>."
        },
        {
          "tipo": "escreve",
          "t": "Write a small difference.",
          "mostra": "Ana: 20 seconds. Leo: 21 seconds. (slower)",
          "r": "Leo was slightly slower than Ana.",
          "aceita": [
            "Leo was a bit slower than Ana.",
            "Leo was slightly slower.",
            "Leo was a bit slower.",
            "Ana was slightly faster than Leo.",
            "Ana was a bit faster than Leo."
          ],
          "d": "Hint: one second out of twenty is small: <b>slightly / a bit</b> + slower."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/be9832fa941d/the-brain-lab/img/live-lab.webp",
      "leg": "A lab with a brain on the screen",
      "pede": "Look at the picture: a lab with a brain on a screen. Compare two things in your life (two languages, two jobs, two cities). Use <b>much / a lot / far</b>, <b>a bit / slightly</b> or <b>not nearly as … as</b>.",
      "ph": "Reading English is a lot easier than …",
      "ex": "Reading English is a lot easier than speaking it. My city is slightly bigger than my sister's city. My Spanish is not nearly as good as my English."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Is English harder or easier than your first language for you? How much?",
          "ph": "English is … harder / easier for me.",
          "ex": "English is a bit harder for me, but listening is far easier than speaking."
        },
        {
          "q": "Compare two people in your family. How big is the difference?",
          "ph": "My … is much … than my …",
          "ex": "My brother is much taller than me, but I am slightly faster than him."
        }
      ]
    }
  }
};
