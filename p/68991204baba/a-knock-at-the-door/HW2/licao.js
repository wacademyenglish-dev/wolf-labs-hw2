/* A KNOCK AT THE DOOR · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: a / an / the / no article. A2: dicas em inglês simples. */
window.HW2_ARTIGO_CONTA = true;
window.HW2 = {
  "id": "a-knock-at-the-door",
  "titulo": "A Knock at the Door",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/68991204baba/a-knock-at-the-door/img/live-capa.webp",
  "alvo": "a / an for something new, the when we know which one (a box ... the box), no article for things in general (I love music), a / an with jobs (a musician)",
  "abrir": "What is in your bag right now?",
  "fecho": "<b>A / an</b> the first time: <i>a box</i>. <b>The</b> when we know which one: <i>the box</i>, <i>the door of my flat</i>. No article for things in general: <i>I love music</i>. <b>A / an</b> with jobs: <i>I'm a musician</i>.",
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
      "sub": "Mia and Leo in the hallway. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/68991204baba/a-knock-at-the-door/img/live-capa.webp",
      "leg": "A box at the door",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, there was a knock at the door last night. I opened the door, but nobody was there."
        },
        {
          "quem": "mia",
          "t": "Was there anything on the floor?"
        },
        {
          "quem": "leo",
          "t": "Yes. There was a box. In the box there was an old key and a note."
        },
        {
          "quem": "mia",
          "t": "What did the note say?"
        },
        {
          "quem": "leo",
          "t": "It said: the key is for the roof."
        },
        {
          "quem": "mia",
          "t": "The roof? Who is your neighbor?"
        },
        {
          "quem": "leo",
          "t": "She is a musician. I love music, but I'm not a musician."
        },
        {
          "quem": "mia",
          "t": "Maybe the box is for her, not for you!"
        },
        {
          "quem": "leo",
          "t": "Maybe. I'll take the box to her tomorrow."
        }
      ],
      "perguntas": [
        {
          "q": "What was in the box?",
          "op": [
            "An old key and a note",
            "A phone and a cake",
            "A book and a lamp"
          ],
          "a": 0,
          "por": "In the box there was an old key and a note."
        },
        {
          "q": "What is the key for?",
          "op": [
            "The roof",
            "The front door",
            "The kitchen"
          ],
          "a": 0,
          "por": "The key is for the roof."
        },
        {
          "q": "Who is a musician?",
          "op": [
            "Leo's neighbor",
            "Leo",
            "Mia"
          ],
          "a": 0,
          "por": "She is a musician."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the box. Hear it, then say it.",
      "frases": [
        {
          "t": "There was a knock at the door.",
          "img": "https://wolf-labs.pages.dev/p/68991204baba/a-knock-at-the-door/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "In the box there was an old key and a note.",
          "img": "https://wolf-labs.pages.dev/p/68991204baba/a-knock-at-the-door/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "My neighbor is a musician, and the key is for the roof.",
          "img": "https://wolf-labs.pages.dev/p/68991204baba/a-knock-at-the-door/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "a, an or the? Four quick ones.",
      "regra": "<b>a / an</b> = new · <b>the</b> = we know which one · <b>a / an</b> with jobs · <b>an</b> before a vowel sound.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "There was a box on the floor.",
          "aceita": [],
          "d": "Hint: the first time we hear about it: <b>a</b> box."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "In box there was a key.",
          "r": "In the box there was a key.",
          "aceita": [],
          "d": "Hint: we know which box: <b>the</b> box."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "She is musician.",
          "r": "She is a musician.",
          "aceita": [
            "She's a musician."
          ],
          "d": "Hint: a job needs <b>a / an</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It was a old key.",
          "r": "It was an old key.",
          "aceita": [],
          "d": "Hint: <b>old</b> starts with a vowel sound: <b>an</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/68991204baba/a-knock-at-the-door/img/live-conversa.webp",
      "leg": "A brass door knocker in the dark",
      "pede": "Look at the picture: a door knocker in the dark. Write 2 or 3 sentences about a knock at the door. Use <b>a / an</b> for new things and <b>the</b> for things we know.",
      "ph": "Last night there was a …",
      "ex": "Last night there was a box at my door. In the box there was a key. The key was old."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is in your bag right now?",
          "ph": "In my bag there is a …",
          "ex": "In my bag there is a book and a bottle of water."
        },
        {
          "q": "What is your job? Use a or an.",
          "ph": "I am a …",
          "ex": "I am an engineer."
        }
      ]
    }
  }
};
