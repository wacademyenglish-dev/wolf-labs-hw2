/* THE LIZARD AND THE NEEDLE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: make / let / help / stop + person. B1: nenhum português. */
window.HW2 = {
  "id": "the-lizard-and-the-needle",
  "titulo": "The Lizard and the Needle",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4d647d69c7f5/the-lizard-and-the-needle/img/live-lagarto.webp",
  "alvo": "make / let + person + verb (no to) · help + person + (to) verb · stop + person + from + -ing; never makes me to feel, stops me to eat, helps me eating",
  "abrir": "What helps you relax after a long day?",
  "fecho": "<b>Make / let</b> + person + verb, no <i>to</i>: <i>The sun makes it sleepy. My guide lets me take photos.</i> <b>Help</b> + person + (to) verb: <i>The rock helps it stay warm.</i> <b>Stop</b> + person + <b>from</b> + -ing: <i>The shade stops it from getting too hot.</i>",
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
      "sub": "Mia and Leo on a desert trip. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/4d647d69c7f5/the-lizard-and-the-needle/img/live-deserto.webp",
      "leg": "A dry desert road",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at that lizard on the rock. It doesn't move at all."
        },
        {
          "quem": "mia",
          "t": "The sun makes it sleepy. It lets the heat warm its body."
        },
        {
          "quem": "leo",
          "t": "And the rock? Does it help the lizard stay warm?"
        },
        {
          "quem": "mia",
          "t": "Yes. The rock helps it stay warm, and the shade stops it from getting too hot."
        },
        {
          "quem": "leo",
          "t": "Our guide let me take a photo, but she wouldn't let me touch it."
        },
        {
          "quem": "mia",
          "t": "Good. A loud noise makes it run away, and we don't want that."
        },
        {
          "quem": "leo",
          "t": "So what stops you from getting too close?"
        },
        {
          "quem": "mia",
          "t": "The guide's rule. And honestly, the heat. It makes me want to sit down and drink water."
        }
      ],
      "perguntas": [
        {
          "q": "What does the sun make the lizard?",
          "op": [
            "Sleepy",
            "Hungry",
            "Angry"
          ],
          "a": 0,
          "por": "The sun makes it sleepy."
        },
        {
          "q": "What stops the lizard from getting too hot?",
          "op": [
            "The shade",
            "The wind",
            "The water"
          ],
          "a": 0,
          "por": "The shade stops it from getting too hot."
        },
        {
          "q": "What did the guide let Leo do?",
          "op": [
            "Take a photo",
            "Touch the lizard",
            "Feed the lizard"
          ],
          "a": 0,
          "por": "Our guide let me take a photo."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the desert. Hear it, then say it.",
      "frases": [
        {
          "t": "The sun makes the lizard sleepy.",
          "img": "https://wolf-labs.pages.dev/p/4d647d69c7f5/the-lizard-and-the-needle/img/live-lagarto.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The shade stops it from getting too hot.",
          "img": "https://wolf-labs.pages.dev/p/4d647d69c7f5/the-lizard-and-the-needle/img/live-deserto.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The light helps me see in the dark kitchen.",
          "img": "https://wolf-labs.pages.dev/p/4d647d69c7f5/the-lizard-and-the-needle/img/live-cozinha.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "make, let, help or stop? Four quick ones.",
      "regra": "<b>make / let</b> + person + verb · <b>help</b> + person + (to) verb · <b>stop</b> + person + <b>from</b> + -ing.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "My guide lets me take photos.",
          "aceita": [],
          "d": "Hint: <b>let</b> + person + the plain verb. No <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The heat makes me to feel sleepy.",
          "r": "The heat makes me feel sleepy.",
          "aceita": [],
          "d": "Hint: <b>make</b> + person + verb, with no <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the verb form is wrong.",
          "mostra": "The shade stops me from get too hot.",
          "r": "The shade stops me from getting too hot.",
          "aceita": [],
          "d": "Hint: after <b>from</b>, the verb takes <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the verb form is wrong.",
          "mostra": "My friend helps me studying.",
          "r": "My friend helps me study.",
          "aceita": [
            "My friend helps me to study."
          ],
          "d": "Hint: <b>help</b> + person + (to) verb, not <b>-ing</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4d647d69c7f5/the-lizard-and-the-needle/img/live-lagarto.webp",
      "leg": "A lizard resting on a warm rock",
      "pede": "Look at the picture: a lizard resting on a warm rock. Write 2 or 3 sentences about the lizard and the desert. Use <b>make</b>, <b>let</b>, <b>help</b> or <b>stop</b>.",
      "ph": "The sun makes the lizard …",
      "ex": "The sun makes the lizard sleepy. The rock helps it stay warm, and the shade stops it from getting too hot."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What makes you feel relaxed after a long day?",
          "ph": "… makes me feel …",
          "ex": "A hot shower makes me feel relaxed."
        },
        {
          "q": "What stops you from going to bed early?",
          "ph": "… stops me from …",
          "ex": "My phone stops me from going to bed early."
        }
      ]
    }
  }
};
