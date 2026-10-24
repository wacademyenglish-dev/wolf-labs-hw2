/* DEAD MEMORIES · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: mixed conditionals. Linha de música: NENHUM verso aqui; o listening é diálogo original, cena neutra. B2: nenhum português. Só imagens live-* escuras (lum < 50); sem cenas de perda (regra 9). */
window.HW2 = {
  "id": "dead-memories",
  "titulo": "Dead Memories",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/44225914bbcd/dead-memories/img/live-estrada.webp",
  "alvo": "mixed conditionals: past root, present result (If I had + participle, I would + verb now); present root, past result (If I were ..., I would have + participle); no would in the if part; would + plain verb or would have + participle, never would + past",
  "abrir": "What small choice in your past changed your life today?",
  "fecho": "A past root, a branch today: <b>If I had</b> + participle, <b>I would</b> + verb <i>now</i>: <i>If I hadn't missed that train, I wouldn't live in Lisbon.</i> The other way round, who you are today changed the past: <b>If I were</b> …, <b>I would have</b> + participle: <i>If I weren't so shy, I would have sung.</i> No <i>would</i> in the <b>if</b> part.",
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
      "sub": "Mia and Leo talk about the choices that brought them here. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/44225914bbcd/dead-memories/img/live-palco.webp",
      "leg": "Stage lights before a concert",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, how did you end up playing in a band? You studied accounting."
        },
        {
          "quem": "leo",
          "t": "Funny story. If my cousin hadn't left his old guitar at my place, I wouldn't play today."
        },
        {
          "quem": "mia",
          "t": "So you taught yourself?"
        },
        {
          "quem": "leo",
          "t": "Yes. And if I hadn't practised every night that summer, I wouldn't be in the band now."
        },
        {
          "quem": "mia",
          "t": "I have a story like that. If I hadn't missed my train to Porto, I wouldn't live in Lisbon."
        },
        {
          "quem": "leo",
          "t": "Really? What happened?"
        },
        {
          "quem": "mia",
          "t": "I stayed one more day, went to a job interview by chance, and got the job."
        },
        {
          "quem": "leo",
          "t": "Amazing. Do you ever think about the other road?"
        },
        {
          "quem": "mia",
          "t": "Sometimes. If I were a braver person, I would have said no and gone travelling."
        },
        {
          "quem": "leo",
          "t": "And if I weren't so shy, I would have sung at our first concert, not just played."
        }
      ],
      "perguntas": [
        {
          "q": "Why does Leo play the guitar today?",
          "op": [
            "His cousin left an old guitar at his place",
            "He studied music",
            "His band needed a player"
          ],
          "a": 0,
          "por": "If my cousin hadn't left his old guitar at my place, I wouldn't play today."
        },
        {
          "q": "Why does Mia live in Lisbon?",
          "op": [
            "She missed her train to Porto",
            "She was born there",
            "Her company moved there"
          ],
          "a": 0,
          "por": "If I hadn't missed my train to Porto, I wouldn't live in Lisbon."
        },
        {
          "q": "What would Leo have done if he weren't shy?",
          "op": [
            "Sung at the first concert",
            "Played the drums",
            "Left the band"
          ],
          "a": 0,
          "por": "If I weren't so shy, I would have sung at our first concert."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about choices and today. Hear it, then say it.",
      "frases": [
        {
          "t": "If I hadn't missed that train, I wouldn't live here now.",
          "img": "https://wolf-labs.pages.dev/p/44225914bbcd/dead-memories/img/live-estrada.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If my cousin hadn't left his guitar, I wouldn't play today.",
          "img": "https://wolf-labs.pages.dev/p/44225914bbcd/dead-memories/img/live-palco.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If I weren't so shy, I would have sung at the concert.",
          "img": "https://wolf-labs.pages.dev/p/44225914bbcd/dead-memories/img/live-casa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Past root, present branch. Four quick ones.",
      "regra": "<b>If I had</b> + participle, <b>I would</b> + verb now · <b>If I were</b> …, <b>I would have</b> + participle · no <b>would</b> in the <b>if</b> part.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If I had learned Spanish, I would live abroad now.",
          "aceita": [],
          "d": "Hint: the past root (<b>had learned</b>), then the branch today (<b>would live</b>)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If I would have left earlier, I'd be there now.",
          "r": "If I had left earlier, I would be there now.",
          "aceita": [
            "If I'd left earlier, I'd be there now."
          ],
          "d": "Hint: no <b>would</b> in the <b>if</b> part: <i>If I had left</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If I didn't miss that bus, I'd be home now.",
          "r": "If I hadn't missed that bus, I would be home now.",
          "aceita": [
            "If I hadn't missed that bus, I'd be home now."
          ],
          "d": "Hint: the root is in the past, so <b>had</b> + participle: <i>hadn't missed</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If he weren't shy, he would sang yesterday.",
          "r": "If he weren't shy, he would have sung yesterday.",
          "aceita": [],
          "d": "Hint: a past result needs <b>would have</b> + participle: <i>would have sung</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/44225914bbcd/dead-memories/img/live-estrada.webp",
      "leg": "A road through a quiet forest",
      "pede": "Look at the picture: a road through a quiet forest. Think of one choice in your past that shaped your life today. Write 2 or 3 sentences. Use <b>If I had …, I would … now</b> or <b>If I were …, I would have …</b>.",
      "ph": "If I hadn't …, I wouldn't … now.",
      "ex": "If I hadn't taken that English course, I wouldn't have this job now. If I were more patient, I would have finished my first book."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a lucky accident in your life. What would be different now if it hadn't happened?",
          "ph": "If I hadn't …, I wouldn't … now.",
          "ex": "If I hadn't gone to that party, I wouldn't know my best friend now."
        },
        {
          "q": "Think of something about your personality. What would you have done differently because of it?",
          "ph": "If I were more …, I would have …",
          "ex": "If I were more organised, I would have finished my course last year."
        }
      ]
    }
  }
};
