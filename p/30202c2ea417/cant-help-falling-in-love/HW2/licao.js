/* CAN'T HELP FALLING IN LOVE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: verbo + -ing (can't help, can't stand, feel like). B1: nenhum português. Linha de música: NENHUM verso aqui. Só live-* (escuras). */
window.HW2 = {
  "id": "cant-help-falling-in-love",
  "titulo": "Can't Help Falling in Love",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/30202c2ea417/cant-help-falling-in-love/img/live-capa.webp",
  "alvo": "verb + -ing after can't help, can't stand, can't stop, feel like, don't mind, can't imagine, couldn't stop; never can't help to / can't help fall, never feel like to, never can't stands",
  "abrir": "What is something you can't help doing?",
  "fecho": "After these, the <b>-ing</b>: <i>I can't help smiling. I can't stop thinking about it. I can't stand waiting. Do you feel like going out? I don't mind waiting. I can't imagine living without music.</i> Never <i>can't help to smile</i>, never <i>feel like to go</i>. <b>Can't</b> never takes an <b>-s</b>.",
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
      "sub": "Mia and Leo at a diner with an old jukebox. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/30202c2ea417/cant-help-falling-in-love/img/live-ponte.webp",
      "leg": "A bridge at night, full of lights",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, why are you smiling at the menu?"
        },
        {
          "quem": "mia",
          "t": "I can't help smiling. They have chocolate cake today. I can't stop thinking about it."
        },
        {
          "quem": "leo",
          "t": "Haha. I can't stand waiting in lines, though. Look at this one."
        },
        {
          "quem": "mia",
          "t": "I don't mind waiting for cake."
        },
        {
          "quem": "leo",
          "t": "What do you feel like doing after lunch? I feel like walking by the river."
        },
        {
          "quem": "mia",
          "t": "Good idea. I feel like listening to some old songs, too."
        },
        {
          "quem": "leo",
          "t": "I couldn't stop humming a song all morning. I can't imagine going a day without music."
        },
        {
          "quem": "mia",
          "t": "Me neither. Let's pick one on the jukebox."
        }
      ],
      "perguntas": [
        {
          "q": "Why can't Mia stop smiling?",
          "op": [
            "She can't stop thinking about the cake",
            "She can't stand the line",
            "She is walking by the river"
          ],
          "a": 0,
          "por": "I can't stop thinking about it."
        },
        {
          "q": "What can't Leo stand?",
          "op": [
            "Waiting in lines",
            "Eating cake",
            "Old songs"
          ],
          "a": 0,
          "por": "I can't stand waiting in lines, though."
        },
        {
          "q": "What does Leo feel like doing after lunch?",
          "op": [
            "Walking by the river",
            "Waiting in line",
            "Humming a song"
          ],
          "a": 0,
          "por": "I feel like walking by the river."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with -ing. Hear it, then say it.",
      "frases": [
        {
          "t": "I can't help smiling when I hear this song.",
          "img": "https://wolf-labs.pages.dev/p/30202c2ea417/cant-help-falling-in-love/img/live-disco.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I can't stand waiting in long lines.",
          "img": "https://wolf-labs.pages.dev/p/30202c2ea417/cant-help-falling-in-love/img/live-ceu.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Do you feel like walking by the river tonight?",
          "img": "https://wolf-labs.pages.dev/p/30202c2ea417/cant-help-falling-in-love/img/live-rio.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "-ing after can't help and friends. Four quick ones.",
      "regra": "<b>can't help</b> · <b>can't stop</b> · <b>can't stand</b> · <b>feel like</b> · <b>don't mind</b> + <b>-ing</b> · never <i>to</i> or the plain verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I can't stop thinking about this song.",
          "aceita": [],
          "d": "Hint: <b>can't stop</b> + verb with <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He can't help to laugh at jokes.",
          "r": "He can't help laughing at jokes.",
          "aceita": [
            "He can't help but laugh at jokes."
          ],
          "d": "Hint: after <i>can't help</i>, use the -ing form."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Do you feel like to go out tonight?",
          "r": "Do you feel like going out tonight?",
          "aceita": [],
          "d": "Hint: after <i>feel like</i>, use -ing. Never <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I can't stand wait in long lines.",
          "r": "I can't stand waiting in long lines.",
          "aceita": [
            "I can't stand to wait in long lines."
          ],
          "d": "Hint: after <i>can't stand</i>, use -ing."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/30202c2ea417/cant-help-falling-in-love/img/live-tupelo.webp",
      "leg": "A small house and a guitar at night",
      "pede": "Look at the picture: a small house at night, with a guitar by the door. Write 2 or 3 sentences about things you can't help doing, or can't stand. Use <b>can't help</b>, <b>can't stop</b> or <b>can't stand</b> + -ing.",
      "ph": "I can't help … I can't stand …",
      "ex": "I can't help singing in the shower. I can't stop checking my phone. I can't stand waiting for the bus."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What can't you stop doing when you hear your favorite song?",
          "ph": "I can't stop … when I hear it.",
          "ex": "I can't stop dancing when I hear my favorite song, even at work."
        },
        {
          "q": "What do you feel like doing this weekend?",
          "ph": "I feel like …",
          "ex": "I feel like staying home, cooking a big lunch and watching a movie."
        }
      ]
    }
  }
};
