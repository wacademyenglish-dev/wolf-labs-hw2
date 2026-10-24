/* THIS TIME TOMORROW · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: future continuous: will be + -ing. Filme: falas originais, no mundo da aula, sem violência. B1: nenhum português. */
window.HW2 = {
  "id": "this-time-tomorrow",
  "titulo": "This Time Tomorrow",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/282a216bacba/this-time-tomorrow/img/live-capa.webp",
  "alvo": "future continuous: will be + -ing for something in progress at a moment in the future (this time tomorrow, at nine); won't be + -ing; the polite question Will you be -ing?; state verbs stay simple (will know, never will be knowing); never will + -ing without be",
  "abrir": "What will you be doing this time tomorrow?",
  "fecho": "<b>will be + -ing</b> = something in progress at a future moment: <i>This time tomorrow, I will be sitting on a train.</i> Negative: <b>won't be + -ing</b>. A polite question: <b>Will you be using the car?</b> Never <i>will sitting</i>, never <i>will be sit</i>. Verbs like <i>know</i> stay simple: <i>will know</i>.",
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
      "sub": "Mia and Leo talk about the big message. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/282a216bacba/this-time-tomorrow/img/live-capa.webp",
      "leg": "A road at night under a big moon",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the big message goes out tomorrow at nine. What will you be doing then?"
        },
        {
          "quem": "mia",
          "t": "This time tomorrow, I will be sitting on a train. I won't be at home."
        },
        {
          "quem": "leo",
          "t": "Will you be watching the news on your phone?"
        },
        {
          "quem": "mia",
          "t": "Of course. And my cousin will be having lunch in London, so she will be watching it on a big screen."
        },
        {
          "quem": "leo",
          "t": "And in Tokyo? What will people be doing?"
        },
        {
          "quem": "mia",
          "t": "They will be sleeping. It will be the middle of the night there."
        },
        {
          "quem": "leo",
          "t": "So some people won't be watching at all."
        },
        {
          "quem": "mia",
          "t": "Right. But everybody will know the truth by the morning."
        }
      ],
      "perguntas": [
        {
          "q": "Where will Mia be this time tomorrow?",
          "op": [
            "On a train",
            "At home",
            "In Tokyo"
          ],
          "a": 0,
          "por": "This time tomorrow, I will be sitting on a train."
        },
        {
          "q": "What will Mia's cousin be doing in London?",
          "op": [
            "Having lunch",
            "Sleeping",
            "Sitting on a train"
          ],
          "a": 0,
          "por": "My cousin will be having lunch in London."
        },
        {
          "q": "Why won't people in Tokyo be watching?",
          "op": [
            "They will be sleeping",
            "They won't have phones",
            "They will be at work"
          ],
          "a": 0,
          "por": "They will be sleeping. It will be the middle of the night there."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about tomorrow. Hear it, then say it.",
      "frases": [
        {
          "t": "This time tomorrow, I will be sitting on a train.",
          "img": "https://wolf-labs.pages.dev/p/282a216bacba/this-time-tomorrow/img/live-trem.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "At midnight, we will be riding bikes under the moon.",
          "img": "https://wolf-labs.pages.dev/p/282a216bacba/this-time-tomorrow/img/live-bicicleta.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "On Friday night, I will be driving on a quiet road.",
          "img": "https://wolf-labs.pages.dev/p/282a216bacba/this-time-tomorrow/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Will be + -ing. Four quick ones.",
      "regra": "<b>will be + -ing</b> · <b>won't be + -ing</b> · <b>Will you be</b> + -ing? · <i>know</i> stays simple: <b>will know</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "They will be watching the news at nine.",
          "aceita": [],
          "d": "Hint: <b>will be</b> + a verb with -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I will reading at nine.",
          "r": "I will be reading at nine.",
          "aceita": [],
          "d": "Hint: you need <b>be</b> between will and -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Everybody will be knowing the truth.",
          "r": "Everybody will know the truth.",
          "aceita": [],
          "d": "Hint: <i>know</i> is a state verb, so it stays simple: <b>will know</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Will you be use the car tomorrow?",
          "r": "Will you be using the car tomorrow?",
          "aceita": [],
          "d": "Hint: after <b>will be</b>, use the -ing form."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/282a216bacba/this-time-tomorrow/img/live-capa.webp",
      "leg": "A road at night",
      "pede": "Look at the picture: a road at night. Write 2 or 3 sentences about this time tomorrow. Use <b>will be + -ing</b> and <b>won't be + -ing</b>.",
      "ph": "This time tomorrow, I will be …",
      "ex": "This time tomorrow, I will be working at my desk. I won't be sleeping. My friends will be having lunch."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What will you be doing this time tomorrow?",
          "ph": "This time tomorrow, I will be …",
          "ex": "This time tomorrow, I will be studying at my desk."
        },
        {
          "q": "What will your family be doing at nine tomorrow night?",
          "ph": "My mother will be … My father will be …",
          "ex": "My mother will be watching a series, and my father will be sleeping."
        }
      ]
    }
  }
};
