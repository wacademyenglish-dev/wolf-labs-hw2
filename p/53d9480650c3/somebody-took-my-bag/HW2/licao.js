/* SOMEBODY TOOK MY BAG · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: some- / any- / no- + body / thing / where. A2: dicas em português só nas notas (d). Só imagens live-* (escuras). */
window.HW2 = {
  "id": "somebody-took-my-bag",
  "titulo": "Somebody Took My Bag",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/53d9480650c3/somebody-took-my-bag/img/live-capa.webp",
  "alvo": "some- / any- / no- + -body / -thing / -where: some- in a positive sentence, any- in a question or with not, no- already says no (one negative only: never isn't nothing, nobody didn't); everybody, somebody, nobody take a singular verb",
  "abrir": "Do you like big parties or small ones?",
  "fecho": "<b>some-</b> = positive (<i>somebody took it</i>). <b>any-</b> = question or <b>not</b> (<i>Is there anything? There isn't anything.</i>). <b>no-</b> is already negative: <i>Nobody saw it.</i> One no only! <b>Everybody / nobody</b> + singular verb: <i>Everybody is ready.</i>",
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
      "sub": "Mia lost her bag at a party. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/53d9480650c3/somebody-took-my-bag/img/live-corredor.webp",
      "leg": "A purple hallway",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, somebody took my bag! My keys are inside."
        },
        {
          "quem": "leo",
          "t": "Calm down. Did anybody see it?"
        },
        {
          "quem": "mia",
          "t": "Nobody saw it. Everybody was wearing a costume."
        },
        {
          "quem": "leo",
          "t": "Is it anywhere in the living room?"
        },
        {
          "quem": "mia",
          "t": "I looked. There isn't anything on the sofa."
        },
        {
          "quem": "leo",
          "t": "Let's ask the guests. Does anybody know something?"
        },
        {
          "quem": "mia",
          "t": "Everybody says the same thing. Nobody took it."
        },
        {
          "quem": "leo",
          "t": "Wait! Look at the candy pot. Something is inside it."
        },
        {
          "quem": "mia",
          "t": "My bag! I put it there when I gave out the candy. Nobody took it!"
        }
      ],
      "perguntas": [
        {
          "q": "What is inside Mia's bag?",
          "op": [
            "Her keys",
            "Her phone",
            "Her costume"
          ],
          "a": 0,
          "por": "My keys are inside."
        },
        {
          "q": "Did anybody see the bag?",
          "op": [
            "Nobody saw it",
            "Everybody saw it",
            "Leo saw it"
          ],
          "a": 0,
          "por": "Nobody saw it."
        },
        {
          "q": "Where is the bag?",
          "op": [
            "In the candy pot",
            "On the sofa",
            "In the hallway"
          ],
          "a": 0,
          "por": "Look at the candy pot. Something is inside it."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the party. Hear it, then say it.",
      "frases": [
        {
          "t": "Somebody took my bag.",
          "img": "https://wolf-labs.pages.dev/p/53d9480650c3/somebody-took-my-bag/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "There isn't anything in the hall.",
          "img": "https://wolf-labs.pages.dev/p/53d9480650c3/somebody-took-my-bag/img/live-corredor.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Nobody saw it because everybody wore a costume.",
          "img": "https://wolf-labs.pages.dev/p/53d9480650c3/somebody-took-my-bag/img/live-fantasias.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "some-, any- or no-? Four quick ones.",
      "regra": "<b>some-</b> = positive · <b>any-</b> = question or <b>not</b> · <b>no-</b> = already negative (one only) · <b>everybody / nobody</b> + singular verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Is there anybody in the kitchen?",
          "aceita": [],
          "d": "Dica: pergunta: <b>anybody</b>, não 'somebody'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There isn't nothing in the bag.",
          "r": "There isn't anything in the bag.",
          "aceita": [
            "There is nothing in the bag."
          ],
          "d": "Dica: <b>isn't</b> já é negativo: use <b>anything</b>. Uma negativa só."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Nobody didn't see my bag.",
          "r": "Nobody saw my bag.",
          "aceita": [],
          "d": "Dica: <b>nobody</b> já é negativo: sem <b>didn't</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Everybody are ready.",
          "r": "Everybody is ready.",
          "aceita": [
            "Everybody's ready."
          ],
          "d": "Dica: <b>everybody</b> leva verbo no singular: <b>is</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/53d9480650c3/somebody-took-my-bag/img/live-festa.webp",
      "leg": "A party table with candy",
      "pede": "Look at the picture: a party table with candy and pumpkins. Write 2 or 3 sentences about it. Use <b>somebody</b>, <b>anything</b>, <b>nobody</b>, <b>nothing</b> or <b>everybody</b>.",
      "ph": "Everybody is …",
      "ex": "Everybody is eating the candy. Nobody is sitting down. There isn't anything cold to drink."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Do you go anywhere on weekends? Where?",
          "ph": "On weekends I go …",
          "ex": "I don't go anywhere. I stay at home."
        },
        {
          "q": "Did you lose something one day? What was it?",
          "ph": "I lost …",
          "ex": "I lost my keys once. Nobody found them."
        }
      ]
    }
  }
};
