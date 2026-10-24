window.HW2_ARTIGO_CONTA = true; /* aula de such a / such an: a / an contam */
/* SUCH A SMALL ROOM · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: so / such a / such an / such + plural-uncountable / that. B1: nenhum português. Só imagens live-* escuras. */
window.HW2 = {
  "id": "such-a-small-room",
  "titulo": "Such a Small Room",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e313853f369a/such-a-small-room/img/live-quarto.webp",
  "alvo": "so + adjective (nothing after it) versus such a / such an + adjective + noun; such without a before plurals and uncountables (such loud music, such noisy people); so / such ... that + the result",
  "abrir": "Think of a place you stayed in. Was it amazing, or terrible?",
  "fecho": "<b>So</b> + adjective, with no noun after it: <i>so small</i>. <b>Such a / such an</b> + adjective + noun: <i>such a small room</i>, <i>such an awful night</i>. Plural or uncountable: <b>such</b>, no <i>a</i>: <i>such loud music</i>. <b>That</b> opens the result.",
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
      "sub": "Mia and Leo talk about a bad hotel. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/e313853f369a/such-a-small-room/img/live-corredor.webp",
      "leg": "A hotel corridor at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, how was the hotel? You said it was cheap."
        },
        {
          "quem": "mia",
          "t": "It was so cheap that I should have guessed. The room was so small that I couldn't open my suitcase."
        },
        {
          "quem": "leo",
          "t": "Such a small room? How small?"
        },
        {
          "quem": "mia",
          "t": "It was such a small room that the door touched the bed."
        },
        {
          "quem": "leo",
          "t": "Was it quiet at night?"
        },
        {
          "quem": "mia",
          "t": "No! There was such loud music next door that the walls shook. And there were such noisy people in the corridor!"
        },
        {
          "quem": "leo",
          "t": "Such loud music and such noisy people. That's a terrible night."
        },
        {
          "quem": "mia",
          "t": "At two, I called the front desk. The man was so tired that he fell asleep on the phone."
        },
        {
          "quem": "leo",
          "t": "Ha! Such a long night. Would you stay there again?"
        },
        {
          "quem": "mia",
          "t": "Never. It was such an awful place that I left at six."
        }
      ],
      "perguntas": [
        {
          "q": "Why couldn't Mia open her suitcase?",
          "op": [
            "The room was so small",
            "The bed was so hard",
            "The corridor was so noisy"
          ],
          "a": 0,
          "por": "The room was so small that I couldn't open my suitcase."
        },
        {
          "q": "What was next door?",
          "op": [
            "Very loud music",
            "A quiet library",
            "An empty room"
          ],
          "a": 0,
          "por": "There was such loud music next door that the walls shook."
        },
        {
          "q": "Why did Mia leave at six?",
          "op": [
            "It was such an awful place",
            "It was such a cheap price",
            "She had such a long flight"
          ],
          "a": 0,
          "por": "It was such an awful place that I left at six."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a terrible night. Hear it, then say it.",
      "frases": [
        {
          "t": "It was such a small room that the door touched the bed.",
          "img": "https://wolf-labs.pages.dev/p/e313853f369a/such-a-small-room/img/live-quarto.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The music was so loud that nobody could sleep.",
          "img": "https://wolf-labs.pages.dev/p/e313853f369a/such-a-small-room/img/live-festa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We had such an awful night that we left at six.",
          "img": "https://wolf-labs.pages.dev/p/e313853f369a/such-a-small-room/img/live-corredor.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "So or such? Four quick ones.",
      "regra": "<b>so</b> + adjective · <b>such a / such an</b> + adjective + noun · <b>such</b> + plural or uncountable · <b>that</b> + result.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It was such an awful night that nobody slept.",
          "aceita": [],
          "d": "Hint: <b>such an</b> + adjective + noun, then <b>that</b> + the result."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The room was such small that we left.",
          "r": "The room was so small that we left.",
          "aceita": [],
          "d": "Hint: there is no noun after <i>small</i>, so use <b>so</b>, not <i>such</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There was such a loud music next door.",
          "r": "There was such loud music next door.",
          "aceita": [],
          "d": "Hint: music is uncountable, so <b>such</b> with no <i>a</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It was such a ugly hotel.",
          "r": "It was such an ugly hotel.",
          "aceita": [],
          "d": "Hint: <i>ugly</i> starts with a vowel sound, so <b>such an</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e313853f369a/such-a-small-room/img/live-janela.webp",
      "leg": "A small room with a green window",
      "pede": "Look at the picture: a small room at night. Write 2 or 3 sentences about a place you stayed in. Use <b>so</b>, <b>such a / such an</b> or <b>such</b> + plural, and <b>that</b> for the result.",
      "ph": "It was such a … that …",
      "ex": "It was such a tiny room that I couldn't open my bag. The street was so noisy that I couldn't sleep. There were such friendly people at the desk."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a place you stayed in. What was it like? Say why.",
          "ph": "It was such a … that …",
          "ex": "It was such a nice hotel that I didn't want to leave."
        },
        {
          "q": "Think of a night you remember. What was it like?",
          "ph": "The night was so … that …",
          "ex": "The music was so loud that I couldn't hear my friend."
        }
      ]
    }
  }
};
