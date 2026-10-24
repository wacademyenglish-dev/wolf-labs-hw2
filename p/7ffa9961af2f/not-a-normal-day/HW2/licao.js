/* NOT A NORMAL DAY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   A2: dicas em português só nas notas (d). Imagens: as escuras da própria aula (live-*). */
window.HW2 = {
  "id": "not-a-normal-day",
  "titulo": "Not a Normal Day",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/7ffa9961af2f/not-a-normal-day/img/live-capa.webp",
  "alvo": "present simple for habits (usually, every evening, never) x present continuous for now (right now, tonight); state verbs never take -ing (I know, not I'm knowing); never I'm usually cooking",
  "abrir": "What do you usually do in the evening?",
  "fecho": "A habit: <b>present simple</b> (<i>I usually cook.</i>). Right now: <b>am / is / are + -ing</b> (<i>I'm eating bread.</i>). State verbs (know, like, want) never take <b>-ing</b>: <i>I know</i>, not <i>I'm knowing</i>.",
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
      "sub": "Mia and Leo text during a power cut. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/7ffa9961af2f/not-a-normal-day/img/live-conversa.webp",
      "leg": "Two candles and a card game",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the power is out in my building. What are you doing right now?"
        },
        {
          "quem": "mia",
          "t": "I'm sitting in the dark with a candle. I usually watch a series at this time."
        },
        {
          "quem": "leo",
          "t": "I usually cook dinner at seven, but tonight I'm eating bread and cheese."
        },
        {
          "quem": "mia",
          "t": "Are the kids with you?"
        },
        {
          "quem": "leo",
          "t": "Yes. They usually play video games, but right now they're playing cards."
        },
        {
          "quem": "mia",
          "t": "That's nice! Do you know when the power comes back?"
        },
        {
          "quem": "leo",
          "t": "No, I don't know. The manager never answers his phone after six."
        },
        {
          "quem": "mia",
          "t": "Then enjoy the candles. It's a great evening!"
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia usually do at this time?",
          "op": [
            "Cook dinner",
            "Watch a series",
            "Play cards"
          ],
          "a": 1,
          "por": "I usually watch a series at this time."
        },
        {
          "q": "What are the kids doing right now?",
          "op": [
            "Playing video games",
            "Eating bread",
            "Playing cards"
          ],
          "a": 2,
          "por": "Right now they're playing cards."
        },
        {
          "q": "Why doesn't Leo know when the power comes back?",
          "op": [
            "The manager never answers after six",
            "His phone is broken",
            "The kids are asleep"
          ],
          "a": 0,
          "por": "The manager never answers his phone after six."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a habit and the now. Hear it, then say it.",
      "frases": [
        {
          "t": "I usually watch a series every evening.",
          "img": "https://wolf-labs.pages.dev/p/7ffa9961af2f/not-a-normal-day/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Right now I'm sitting in the dark.",
          "img": "https://wolf-labs.pages.dev/p/7ffa9961af2f/not-a-normal-day/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Tonight the kids are playing cards.",
          "img": "https://wolf-labs.pages.dev/p/7ffa9961af2f/not-a-normal-day/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Habit or right now? Four quick ones.",
      "regra": "<b>Habit</b> (usually, every day) = present simple · <b>Now</b> (right now, tonight) = <b>am / is / are + -ing</b> · know, like, want: no <b>-ing</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What are you doing right now?",
          "aceita": [],
          "d": "Dica: <b>What are you doing</b> + <b>right now</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: a habit is not -ing.",
          "mostra": "I'm usually cooking dinner at seven.",
          "r": "I usually cook dinner at seven.",
          "aceita": [],
          "d": "Dica: <b>usually</b> = hábito: presente simples, sem -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it is tonight only.",
          "mostra": "Tonight we use the stairs.",
          "r": "Tonight we're using the stairs.",
          "aceita": [
            "Tonight we are using the stairs."
          ],
          "d": "Dica: <b>tonight</b> = agora: <b>we're using</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: know has no -ing.",
          "mostra": "I'm knowing the manager.",
          "r": "I know the manager.",
          "aceita": [],
          "d": "Dica: <b>know</b> é verbo de estado: nunca leva -ing."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/7ffa9961af2f/not-a-normal-day/img/live-conversa.webp",
      "leg": "Two candles and a card game on a table",
      "pede": "Look at the picture: two candles and a card game on a table. Write 2 or 3 sentences: one thing you <b>usually</b> do in the evening, and what you <b>are doing</b> tonight.",
      "ph": "I usually … but tonight I'm …",
      "ex": "I usually watch TV in the evening. But tonight I'm reading a book by candlelight."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you usually do in the evening?",
          "ph": "I usually …",
          "ex": "I usually cook and watch a series."
        },
        {
          "q": "What are you doing right now, besides this class?",
          "ph": "Right now I'm …",
          "ex": "I'm drinking coffee and sitting on my sofa."
        }
      ]
    }
  }
};
