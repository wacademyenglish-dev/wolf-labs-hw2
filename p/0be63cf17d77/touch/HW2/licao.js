/* TOUCH · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: imperativos do / don't / let's. Linha de música: NENHUM verso aqui; o listening é diálogo original. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "touch",
  "titulo": "Touch",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/0be63cf17d77/touch/img/live-capa.webp",
  "alvo": "imperatives: the plain verb with no subject (Stand up); don't + plain verb for no (Don't stop); let's + plain verb to suggest together (Let's dance); never No + verb, never don't to, never You + verb for an order",
  "abrir": "What is one rule in your house?",
  "fecho": "An order is the plain verb, no <b>you</b>: <i>Stand up. Clap your hands.</i> The no is <b>don't</b> + plain verb: <i>Don't stop.</i> To suggest together: <b>let's</b> + plain verb: <i>Let's dance.</i> Never <i>No stop</i>, never <i>don't to</i>.",
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
      "sub": "Mia is a dance teacher. Leo is new. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/0be63cf17d77/touch/img/live-estudio.webp",
      "leg": "An empty dance studio",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Welcome, Leo. Stand here, in front of the mirror."
        },
        {
          "quem": "leo",
          "t": "OK. Where do I put my bag?"
        },
        {
          "quem": "mia",
          "t": "Put it near the door. Don't put it on the floor."
        },
        {
          "quem": "leo",
          "t": "Good. What now?"
        },
        {
          "quem": "mia",
          "t": "Listen to the music. Clap your hands, one, two, three."
        },
        {
          "quem": "leo",
          "t": "Like this? Oh no, I'm too slow."
        },
        {
          "quem": "mia",
          "t": "Don't stop! Don't look at your feet. Look at me."
        },
        {
          "quem": "leo",
          "t": "OK, OK. This is fun."
        },
        {
          "quem": "mia",
          "t": "Great! Now let's dance together. Turn left and smile."
        }
      ],
      "perguntas": [
        {
          "q": "Where does Mia say to put the bag?",
          "op": [
            "Near the door",
            "On the floor",
            "In front of the mirror"
          ],
          "a": 0,
          "por": "Put it near the door. Don't put it on the floor."
        },
        {
          "q": "What does Mia say about his feet?",
          "op": [
            "Don't look at them",
            "Look at them",
            "Clap them"
          ],
          "a": 0,
          "por": "Don't look at your feet."
        },
        {
          "q": "What do they do at the end?",
          "op": [
            "They dance together",
            "They stop",
            "They sit down"
          ],
          "a": 0,
          "por": "Now let's dance together."
        }
      ]
    },
    "out": {
      "sub": "Three orders in a dance class. Hear it, then say it.",
      "frases": [
        {
          "t": "Clap your hands and turn left.",
          "img": "https://wolf-labs.pages.dev/p/0be63cf17d77/touch/img/live-estudio.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Don't stop the music.",
          "img": "https://wolf-labs.pages.dev/p/0be63cf17d77/touch/img/live-palco.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Let's dance on the stage.",
          "img": "https://wolf-labs.pages.dev/p/0be63cf17d77/touch/img/live-palco.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "do, don't or let's? Four quick ones.",
      "regra": "<b>Open</b> the door · <b>Don't</b> + plain verb · <b>Let's</b> + plain verb · never <b>No</b> + verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Don't put your bag on the floor.",
          "aceita": [],
          "d": "Dica: o não da ordem é <b>don't</b> + verbo limpo (put)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "No touch the mirror.",
          "r": "Don't touch the mirror.",
          "aceita": [
            "Do not touch the mirror."
          ],
          "d": "Dica: em inglês, o não da ordem é <b>don't</b>, nunca 'no'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Don't to stop the music.",
          "r": "Don't stop the music.",
          "aceita": [
            "Do not stop the music."
          ],
          "d": "Dica: depois de <b>don't</b>, o verbo fica limpo, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make it an order.",
          "mostra": "You sit down here.",
          "r": "Sit down here.",
          "aceita": [
            "Please sit down here."
          ],
          "d": "Dica: ordem não leva <b>you</b>: só o verbo, <b>sit</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/0be63cf17d77/touch/img/live-palco.webp",
      "leg": "An empty stage with lights",
      "pede": "Look at the picture: an empty stage with lights. Write 2 or 3 orders for a dancer on this stage. Use <b>do</b>, <b>don't</b> or <b>let's</b>.",
      "ph": "Stand … Don't … Let's …",
      "ex": "Stand in the light. Don't look at the floor. Let's dance together."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is a rule in your house? Use Don't.",
          "ph": "Don't … in my house.",
          "ex": "Don't eat in the living room."
        },
        {
          "q": "Give two orders to a friend who is nervous.",
          "ph": "Don't … Let's …",
          "ex": "Don't worry. Let's take a deep breath."
        }
      ]
    }
  }
};
