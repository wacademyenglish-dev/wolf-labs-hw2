/* YES, I DO · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: like / don't like, Do you like...?, Yes I do / No I don't. A1: dicas em português só nas notas (d). Só live-*. */
window.HW2 = {
  "id": "yes-i-do",
  "titulo": "Yes, I Do",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2fdf22e037f9/yes-i-do/img/live-capa.jpg",
  "alvo": "I like / I don't like · Do you like ...? · short answers: Yes, I do. / No, I don't. (not Yes, I like; not I no like; after do: like, no -s)",
  "abrir": "What food do you like? What food don't you like?",
  "fecho": "<b>I like</b> soup. <b>I don't like</b> onions. A question starts with <b>Do</b>: <i>Do you like tea?</i> The short answer sends <b>do</b> back: <i>Yes, I do. / No, I don't.</i> Never <i>Yes, I like</i>.",
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
      "sub": "Mia and Leo in a café. A new scene, about 30 seconds.",
      "img": "https://wolf-labs.pages.dev/p/2fdf22e037f9/yes-i-do/img/live-balcao.webp",
      "leg": "A café counter",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at the menu. Do you like soup?"
        },
        {
          "quem": "mia",
          "t": "Yes, I do. I like soup a lot."
        },
        {
          "quem": "leo",
          "t": "Do you like onions?"
        },
        {
          "quem": "mia",
          "t": "No, I don't. I don't like onions."
        },
        {
          "quem": "leo",
          "t": "Then no onion soup for you. What about tea?"
        },
        {
          "quem": "mia",
          "t": "Yes, I do. Tea, please. Do you like tea?"
        },
        {
          "quem": "leo",
          "t": "No, I don't. I like coffee."
        },
        {
          "quem": "mia",
          "t": "And cake? Do you like chocolate cake?"
        },
        {
          "quem": "leo",
          "t": "Yes, I do! One chocolate cake, please."
        }
      ],
      "perguntas": [
        {
          "q": "Does Mia like onions?",
          "op": [
            "No, she doesn't",
            "Yes, she does",
            "She likes them a lot"
          ],
          "a": 0,
          "por": "No, I don't. I don't like onions."
        },
        {
          "q": "What does Leo like to drink?",
          "op": [
            "Coffee",
            "Tea",
            "Water"
          ],
          "a": 0,
          "por": "No, I don't. I like coffee."
        },
        {
          "q": "What does Leo want with his coffee?",
          "op": [
            "Chocolate cake",
            "Onion soup",
            "Tea"
          ],
          "a": 0,
          "por": "Yes, I do! One chocolate cake, please."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about food. Hear it, then say it.",
      "frases": [
        {
          "t": "Do you like soup? Yes, I do.",
          "img": "https://wolf-labs.pages.dev/p/2fdf22e037f9/yes-i-do/img/live-balcao.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I don't like onions in my soup.",
          "img": "https://wolf-labs.pages.dev/p/2fdf22e037f9/yes-i-do/img/live-capa.jpg",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Do you like tea? No, I don't.",
          "img": "https://wolf-labs.pages.dev/p/2fdf22e037f9/yes-i-do/img/live-mesa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "like, don't like, Yes, I do. Four quick ones.",
      "regra": "<b>I like</b> · <b>I don't like</b> · <b>Do you like ...?</b> · <b>Yes, I do.</b> / <b>No, I don't.</b> · after <b>do</b>: like, no -s.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I don't like onions in my soup.",
          "aceita": [],
          "d": "Dica: <b>I don't like</b> + a comida."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the short answer is wrong.",
          "mostra": "Do you like tea? Yes, I like.",
          "r": "Do you like tea? Yes, I do.",
          "aceita": [],
          "d": "Dica: a resposta curta devolve o <b>do</b>: <b>Yes, I do.</b>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I no like coffee.",
          "r": "I don't like coffee.",
          "aceita": [
            "I do not like coffee."
          ],
          "d": "Dica: o não é <b>don't</b>: I don't like."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Do you likes cake?",
          "r": "Do you like cake?",
          "aceita": [],
          "d": "Dica: depois de <b>do</b>, o verbo fica limpo: like, sem -s."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2fdf22e037f9/yes-i-do/img/live-mesa.webp",
      "leg": "Soup, tea, cake and coffee on a table",
      "pede": "Look at the picture: food on a wooden table. Write 2 or 3 sentences: what you like and what you don't like. Use <b>I like</b> and <b>I don't like</b>.",
      "ph": "I like … but I don't like …",
      "ex": "I like soup and cake. I don't like cold tea. I like coffee in the morning."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Do you like coffee? Do you like tea?",
          "ph": "Yes, I do. / No, I don't. I like …",
          "ex": "Yes, I do. I like coffee. No, I don't like tea."
        },
        {
          "q": "What food do you like a lot? What food don't you like?",
          "ph": "I like … I don't like …",
          "ex": "I like pizza a lot. I don't like fish."
        }
      ]
    }
  }
};
