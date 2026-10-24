/* THE BEST GAME I'VE EVER PLAYED · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: superlativo + I've ever. B1: nenhum português. Noite de prêmios; falas originais, sem violência. Só live-* escuras. */
window.HW2 = {
  "id": "the-best-game-ive-ever-played",
  "titulo": "The Best Game I've Ever Played",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/3ca79c5e0d1e/the-best-game-ive-ever-played/img/live-trophy.webp",
  "alvo": "superlative + present perfect with ever: the + -est / the most + adjective + noun + I've ever + third form (the funniest game I've ever played); never the better, the most hard, I've already played after a superlative",
  "abrir": "What is the best game, film or series you've ever seen?",
  "fecho": "<b>The + -est</b> or <b>the most</b> + adjective, then <b>I've ever</b> + third form: <i>the funniest game I've ever played</i>. Short words take <b>-est</b> (<i>hardest, biggest</i>); long words take <b>the most</b> (<i>the most beautiful</i>). Never <i>the better</i>, never <i>the most hard</i>, and use <b>ever</b>, not <i>already</i>.",
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
      "sub": "Mia and Leo before an awards night. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/3ca79c5e0d1e/the-best-game-ive-ever-played/img/live-crowd.webp",
      "leg": "A dark hall full of people waiting",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the awards start in ten minutes. Which game will win Best World?"
        },
        {
          "quem": "mia",
          "t": "The one with the floating islands. It's the most beautiful world I've ever seen."
        },
        {
          "quem": "leo",
          "t": "I agree. But for me, the best story I've ever played is the one about the little robot."
        },
        {
          "quem": "mia",
          "t": "The robot game? That's the funniest game I've ever played, too!"
        },
        {
          "quem": "leo",
          "t": "And what's the hardest level you've ever finished?"
        },
        {
          "quem": "mia",
          "t": "The ice tower. It took me three weeks. It's the hardest thing I've ever done in a game."
        },
        {
          "quem": "leo",
          "t": "Three weeks! I've never played a harder level."
        },
        {
          "quem": "mia",
          "t": "Look, they're opening the envelope!"
        },
        {
          "quem": "leo",
          "t": "And the winner is... the floating islands! You were right."
        }
      ],
      "perguntas": [
        {
          "q": "Which world is the most beautiful Mia has ever seen?",
          "op": [
            "The one with floating islands",
            "The ice tower",
            "The robot's house"
          ],
          "a": 0,
          "por": "It's the most beautiful world I've ever seen."
        },
        {
          "q": "What is the best story Leo has ever played?",
          "op": [
            "The game about the little robot",
            "The game with the ice tower",
            "The game with the islands"
          ],
          "a": 0,
          "por": "The best story I've ever played is the one about the little robot."
        },
        {
          "q": "How long did the ice tower take Mia?",
          "op": [
            "Three weeks",
            "Three days",
            "One hour"
          ],
          "a": 0,
          "por": "It took me three weeks."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the best of the best. Hear it, then say it.",
      "frases": [
        {
          "t": "It's the most beautiful world I've ever seen.",
          "img": "https://wolf-labs.pages.dev/p/3ca79c5e0d1e/the-best-game-ive-ever-played/img/live-screens.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "This is the best story I've ever played.",
          "img": "https://wolf-labs.pages.dev/p/3ca79c5e0d1e/the-best-game-ive-ever-played/img/live-jury.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It's the biggest crowd I've ever seen.",
          "img": "https://wolf-labs.pages.dev/p/3ca79c5e0d1e/the-best-game-ive-ever-played/img/live-crowd.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "The most ... I've ever. Four quick ones.",
      "regra": "<b>the -est</b> / <b>the most</b> + adjective + noun + <b>I've ever</b> + third form · never <i>the better</i>, <i>the most hard</i> · <b>ever</b>, not <i>already</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "That is the funniest game I have ever played.",
          "aceita": [],
          "d": "Hint: <b>the funniest</b> + noun, then <b>I have ever</b> + third form."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It is the most hard level I have ever played.",
          "r": "It is the hardest level I have ever played.",
          "aceita": [
            "It's the hardest level I've ever played."
          ],
          "d": "Hint: <b>hard</b> is a short word: <b>the hardest</b>, not <i>the most hard</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "This is the better game I have ever played.",
          "r": "This is the best game I have ever played.",
          "aceita": [
            "This is the best game I've ever played."
          ],
          "d": "Hint: the top of the list is <b>the best</b>. <i>Better</i> compares two things."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It is the best story I have already heard.",
          "r": "It is the best story I have ever heard.",
          "aceita": [
            "It's the best story I've ever heard."
          ],
          "d": "Hint: after a superlative, use <b>ever</b>, not <i>already</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/3ca79c5e0d1e/the-best-game-ive-ever-played/img/live-trophy.webp",
      "leg": "A golden trophy on a stage",
      "pede": "Look at the picture: a golden trophy on a stage. Write 2 or 3 sentences about the best things you have ever done, seen or played. Use <b>the + -est / the most</b> and <b>I've ever</b>.",
      "ph": "It is the best … I've ever …",
      "ex": "It is the best film I've ever seen. It's the funniest series I've ever watched. Her voice is the most beautiful I've ever heard."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is the best game, film or series you've ever seen? Why?",
          "ph": "It's the best … I've ever …",
          "ex": "It's the best series I've ever watched, because the story is very funny."
        },
        {
          "q": "What is the hardest thing you've ever done?",
          "ph": "The hardest thing I've ever done is …",
          "ex": "The hardest thing I've ever done is moving to a new city."
        }
      ]
    }
  }
};
