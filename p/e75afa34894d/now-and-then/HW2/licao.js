/* NOW AND THEN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past perfect. Linha de música: NENHUM verso aqui; o listening é diálogo original. Cena neutra (regra 9: nada de morte, luto, doença). B1: nenhum português. Cena: a banda gravando no estúdio. */
window.HW2 = {
  "id": "now-and-then",
  "titulo": "Now and Then",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e75afa34894d/now-and-then/img/live-capa.webp",
  "alvo": "past perfect: had + third form for the earlier of two past actions; by the time, already, before, never ... before; the later action stays in the past simple; never had went / had see, never the past simple where the earlier action needs had",
  "abrir": "Have you ever arrived late and missed the best part?",
  "fecho": "Two actions in the past: the earlier one gets <b>had</b> + third form. <i>By the time I arrived, they had already recorded the drums.</i> The later one stays in the past simple. Watch the third form: <i>had gone, had seen</i>, never <i>had went</i>.",
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
      "sub": "Leo arrives late to his band's recording session. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/e75afa34894d/now-and-then/img/live-estudio.webp",
      "leg": "The recording studio",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Sorry I'm late, Mia! Did I miss anything?"
        },
        {
          "quem": "mia",
          "t": "A lot. By the time you arrived, we had already recorded the drums."
        },
        {
          "quem": "leo",
          "t": "Already? I thought the session started at ten."
        },
        {
          "quem": "mia",
          "t": "It did, but Sam had set up the microphones before nine, so we started early."
        },
        {
          "quem": "leo",
          "t": "And the bass? Had Lucy finished her part?"
        },
        {
          "quem": "mia",
          "t": "Yes. She had practised it all week, so she did it in one take."
        },
        {
          "quem": "leo",
          "t": "Wow. I had never seen a real studio before today. It's huge."
        },
        {
          "quem": "mia",
          "t": "Don't worry. Sam had already tuned your guitar before you came in."
        },
        {
          "quem": "leo",
          "t": "That's kind of him. So I just play my part?"
        },
        {
          "quem": "mia",
          "t": "Exactly. Then the song is ready, and we can all have lunch."
        }
      ],
      "perguntas": [
        {
          "q": "What had the band already recorded when Leo arrived?",
          "op": [
            "The drums",
            "The guitar",
            "The voice"
          ],
          "a": 0,
          "por": "By the time you arrived, we had already recorded the drums."
        },
        {
          "q": "Why did Lucy do her part in one take?",
          "op": [
            "She had practised it all week",
            "The part was very short",
            "Sam played it for her"
          ],
          "a": 0,
          "por": "She had practised it all week, so she did it in one take."
        },
        {
          "q": "What had Sam done before Leo came in?",
          "op": [
            "He had tuned Leo's guitar",
            "He had gone home",
            "He had ordered lunch"
          ],
          "a": 0,
          "por": "Sam had already tuned your guitar before you came in."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the studio. Hear it, then say it.",
      "frases": [
        {
          "t": "By the time I arrived, they had already recorded the drums.",
          "img": "https://wolf-labs.pages.dev/p/e75afa34894d/now-and-then/img/live-estudio.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She had practised her part all week, so she did it in one take.",
          "img": "https://wolf-labs.pages.dev/p/e75afa34894d/now-and-then/img/live-rolo.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I had never seen a real studio before that day.",
          "img": "https://wolf-labs.pages.dev/p/e75afa34894d/now-and-then/img/live-fitas.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "had + third form. Four quick ones.",
      "regra": "<b>had</b> + third form = the earlier past · <b>by the time</b>, <b>already</b>, <b>before</b>, <b>never … before</b> · the later action stays in the past simple.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "When we got to the cinema, the movie had already started.",
          "aceita": [],
          "d": "Hint: first the movie started (<b>had started</b>), then we arrived (<i>got</i>)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She had already went home when I called.",
          "r": "She had already gone home when I called.",
          "aceita": [],
          "d": "Hint: <b>had</b> + third form: <i>gone</i>, not <i>went</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I had never see the sea before that trip.",
          "r": "I had never seen the sea before that trip.",
          "aceita": [],
          "d": "Hint: <b>had</b> + third form: <i>seen</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "When I arrived, the show already started.",
          "r": "When I arrived, the show had already started.",
          "aceita": [],
          "d": "Hint: the show started first, so use <b>had</b> + <i>started</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e75afa34894d/now-and-then/img/live-estudio.webp",
      "leg": "A small studio with warm lights",
      "pede": "Look at the picture: a small studio with warm lights. Imagine you arrived late to a party or a show. Write 2 or 3 sentences: what <b>had</b> already <b>happened</b> by the time you arrived?",
      "ph": "By the time I arrived, …",
      "ex": "By the time I arrived at the party, my friends had already eaten the pizza. The band had started, and the cake was gone."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a time you arrived late. What had already happened?",
          "ph": "When I arrived, … had already …",
          "ex": "When I arrived at the airport, my plane had already left, so I took the next one."
        },
        {
          "q": "What had you never done before this year?",
          "ph": "I had never … before",
          "ex": "I had never cooked for ten people before this year."
        }
      ]
    }
  }
};
