/* TOO BIG, NOT FAST ENOUGH · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: too / enough. Jogo: falas originais, carroca no mercado, sem violencia. A2: dicas em portugues so nas notas (d). */
window.HW2 = {
  "id": "too-big-not-fast-enough",
  "titulo": "Too Big, Not Fast Enough",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/bf1af4113303/too-big-not-fast-enough/img/live-wagon.webp",
  "alvo": "too and enough: too + adjective (too big); adjective + enough (wide enough); enough + noun (enough time); too / enough + to + verb; never too much big, enough wide, enough of time",
  "abrir": "What is too expensive for you?",
  "fecho": "<b>too</b> + adjective = more than you need: <i>too big, too heavy to push</i>. Adjective + <b>enough</b> = as much as you need: <i>wide enough</i>. <b>Enough</b> + noun: <i>enough time</i>. Never <i>too much big</i> or <i>enough wide</i>.",
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
      "sub": "Mia and Leo take a wagon to the market. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/bf1af4113303/too-big-not-fast-enough/img/live-wagon.webp",
      "leg": "A wagon full of boxes",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at the wagon. It's too big for this gate."
        },
        {
          "quem": "mia",
          "t": "Is the gate wide enough?"
        },
        {
          "quem": "leo",
          "t": "No, it isn't wide enough. And the wagon is too heavy to push."
        },
        {
          "quem": "mia",
          "t": "We don't have enough people. There are only two of us."
        },
        {
          "quem": "leo",
          "t": "And the horses aren't fast enough for the hill."
        },
        {
          "quem": "mia",
          "t": "It's too late to go back. The market closes at six."
        },
        {
          "quem": "leo",
          "t": "Let's take off two boxes. Then there is enough space."
        },
        {
          "quem": "mia",
          "t": "Good idea. Now it's small enough to pass."
        },
        {
          "quem": "leo",
          "t": "We have enough time, too. It's only four o'clock."
        },
        {
          "quem": "mia",
          "t": "Great. Let's go."
        }
      ],
      "perguntas": [
        {
          "q": "Why can't the wagon pass the gate?",
          "op": [
            "It is too big",
            "It is too old",
            "It is too fast"
          ],
          "a": 0,
          "por": "It's too big for this gate."
        },
        {
          "q": "What don't Mia and Leo have enough of?",
          "op": [
            "People",
            "Boxes",
            "Horses"
          ],
          "a": 0,
          "por": "We don't have enough people."
        },
        {
          "q": "What do they do to fix the problem?",
          "op": [
            "They take off two boxes",
            "They buy a new gate",
            "They wait until night"
          ],
          "a": 0,
          "por": "Let's take off two boxes."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the wagon. Hear it, then say it.",
      "frases": [
        {
          "t": "The wagon is too heavy to push.",
          "img": "https://wolf-labs.pages.dev/p/bf1af4113303/too-big-not-fast-enough/img/live-wagon.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The road is not wide enough for two wagons.",
          "img": "https://wolf-labs.pages.dev/p/bf1af4113303/too-big-not-fast-enough/img/live-yard.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We have enough time before the market closes.",
          "img": "https://wolf-labs.pages.dev/p/bf1af4113303/too-big-not-fast-enough/img/live-wall.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "too or enough? Four quick ones.",
      "regra": "<b>too</b> + adjective · adjective + <b>enough</b> · <b>enough</b> + noun · <b>to</b> + verb · never <i>too much big</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We don't have enough people for this hill.",
          "aceita": [],
          "d": "Dica: <b>enough</b> vem antes do substantivo: <b>enough people</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: enough goes after the adjective.",
          "mostra": "The road is enough wide for the wagon.",
          "r": "The road is wide enough for the wagon.",
          "aceita": [],
          "d": "Dica: <b>enough</b> vem depois do adjetivo: <b>wide enough</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "This box is too much heavy.",
          "r": "This box is too heavy.",
          "aceita": [],
          "d": "Dica: <b>too</b> + adjetivo, sem <i>much</i>: <b>too heavy</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The bag is too heavy for carry.",
          "r": "The bag is too heavy to carry.",
          "aceita": [],
          "d": "Dica: depois do adjetivo, <b>to</b> + verbo: <b>too heavy to carry</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/bf1af4113303/too-big-not-fast-enough/img/live-wagon.webp",
      "leg": "A wagon full of boxes",
      "pede": "Look at the picture: a wagon full of boxes. Write 2 or 3 sentences: what is <b>too</b> big or heavy, and what is not <b>enough</b>? Use <b>too</b> and <b>enough</b>.",
      "ph": "The wagon is too …",
      "ex": "The wagon is too heavy for two horses. The road isn't wide enough, and we don't have enough time."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is too expensive for you?",
          "ph": "… is too expensive for me.",
          "ex": "A new car is too expensive for me."
        },
        {
          "q": "Do you have enough time in your day? Why or why not?",
          "ph": "I have / don't have enough time because …",
          "ex": "No, I don't have enough time because I work a lot."
        }
      ]
    }
  }
};
