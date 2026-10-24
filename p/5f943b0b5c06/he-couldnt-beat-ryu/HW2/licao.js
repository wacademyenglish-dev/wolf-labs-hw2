/* HE COULDN'T BEAT RYU · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: could / couldn't / was able to. A2: dicas em português só nas notas (d). Falas originais, sem cena do filme. Só imagens live-* escuras. */
window.HW2 = {
  "id": "he-couldnt-beat-ryu",
  "titulo": "He Couldn't Beat Ryu",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/5f943b0b5c06/he-couldnt-beat-ryu/img/live-capa.webp",
  "alvo": "could / couldn't + plain verb for ability in the past; was able to for one single time; Could you ...?; never could to, didn't could, could + -ed",
  "abrir": "What game could you play for hours as a child?",
  "fecho": "<b>could / couldn't</b> + plain verb = ability in the past: <i>I could run fast. I couldn't win.</i> One single time: <b>was able to</b>: <i>I was able to win that day.</i> Question: <b>Could you</b> play? Never <i>could to, didn't could</i>.",
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
      "sub": "Mia and Leo remember the arcade near their old school. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/5f943b0b5c06/he-couldnt-beat-ryu/img/live-fliperama.webp",
      "leg": "An arcade at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, do you remember the arcade near our school?"
        },
        {
          "quem": "mia",
          "t": "Of course! I could play for hours there."
        },
        {
          "quem": "leo",
          "t": "I couldn't. I had only one coin."
        },
        {
          "quem": "mia",
          "t": "But your friend Davi was very good. He could beat everybody."
        },
        {
          "quem": "leo",
          "t": "Not me. I couldn't beat him, not even once."
        },
        {
          "quem": "mia",
          "t": "Really? I was able to beat him one time, in the last round."
        },
        {
          "quem": "leo",
          "t": "How? You couldn't play well at the beginning."
        },
        {
          "quem": "mia",
          "t": "True. But that day I was able to stay calm, and I won."
        },
        {
          "quem": "leo",
          "t": "Could you do it again?"
        },
        {
          "quem": "mia",
          "t": "No, I couldn't. He was too fast the next day."
        }
      ],
      "perguntas": [
        {
          "q": "Why couldn't Leo play for hours?",
          "op": [
            "He had only one coin",
            "He had no time",
            "The arcade closed early"
          ],
          "a": 0,
          "por": "I couldn't. I had only one coin."
        },
        {
          "q": "Who could beat everybody?",
          "op": [
            "Davi",
            "Mia",
            "Leo"
          ],
          "a": 0,
          "por": "He could beat everybody."
        },
        {
          "q": "When was Mia able to beat Davi?",
          "op": [
            "One time, in the last round",
            "Every day",
            "Never"
          ],
          "a": 0,
          "por": "I was able to beat him one time, in the last round."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about old games. Hear it, then say it.",
      "frases": [
        {
          "t": "I could play for hours at the arcade.",
          "img": "https://wolf-labs.pages.dev/p/5f943b0b5c06/he-couldnt-beat-ryu/img/live-fliperama.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I couldn't beat him, not even once.",
          "img": "https://wolf-labs.pages.dev/p/5f943b0b5c06/he-couldnt-beat-ryu/img/live-dojo.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She was able to win in the last round.",
          "img": "https://wolf-labs.pages.dev/p/5f943b0b5c06/he-couldnt-beat-ryu/img/live-rua.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "could, couldn't, was able to. Four quick ones.",
      "regra": "<b>could / couldn't</b> + plain verb · <b>Could you ...?</b> · one single time: <b>was able to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "He could beat everybody at the arcade.",
          "aceita": [],
          "d": "Dica: <b>could</b> + verbo no básico: <i>beat</i>, sem -s e sem to."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I could to run fast as a child.",
          "r": "I could run fast as a child.",
          "aceita": [],
          "d": "Dica: depois de <b>could</b>, o verbo vem sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I didn't could win the game.",
          "r": "I couldn't win the game.",
          "aceita": [
            "I could not win the game."
          ],
          "d": "Dica: <b>could</b> já tem o negativo: <b>couldn't</b>, nunca 'didn't could'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Yesterday I could win the game.",
          "r": "Yesterday I was able to win the game.",
          "aceita": [],
          "d": "Dica: uma vez só, num dia específico: <b>was able to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/5f943b0b5c06/he-couldnt-beat-ryu/img/live-rua.webp",
      "leg": "A city rooftop at night",
      "pede": "Look at the picture: a city at night. Write 2 or 3 sentences about a game or sport from your childhood. Use <b>could</b>, <b>couldn't</b> or <b>was able to</b>.",
      "ph": "As a child, I could … I couldn't …",
      "ex": "When I was ten, I could play football all day. I couldn't beat my cousin at chess. One day I was able to win, and I was very happy."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What could you do well as a child?",
          "ph": "As a child, I could …",
          "ex": "As a child, I could draw very well, and I could run fast."
        },
        {
          "q": "What couldn't you do then, but you can do now?",
          "ph": "I couldn't … but now I can …",
          "ex": "I couldn't swim as a child, but now I can."
        }
      ]
    }
  }
};
