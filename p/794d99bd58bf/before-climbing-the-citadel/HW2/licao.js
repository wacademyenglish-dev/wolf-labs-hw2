/* BEFORE CLIMBING THE CITADEL · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: preposição + verbo-ing. B1: nenhum português. Caminhada na colina; falas originais, sem violência. Só live-* escuras. */
window.HW2 = {
  "id": "before-climbing-the-citadel",
  "titulo": "Before Climbing the Citadel",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/794d99bd58bf/before-climbing-the-citadel/img/live-citadel.webp",
  "alvo": "preposition + verb-ing: before climbing, after resting, by taking, without bringing, instead of crossing; tired of / afraid of / good at + -ing; look forward to + -ing, thanks for + -ing; never before to climb, without say, look forward to see",
  "abrir": "What do you do before you leave home in the morning?",
  "fecho": "After a preposition, the verb takes <b>-ing</b>: <i>before climbing, after resting, by taking, without bringing, instead of crossing</i>. The same for <b>tired of, afraid of, good at</b> and <b>thanks for</b>. And <b>look forward to</b> is a preposition too: <i>I look forward to seeing it</i>. Never <i>before to climb</i>, never <i>without say</i>.",
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
      "sub": "Mia and Leo plan a long walk up a hill. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/794d99bd58bf/before-climbing-the-citadel/img/live-mapa.webp",
      "leg": "A mountain map by lamplight",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, before climbing the hill, we need a plan."
        },
        {
          "quem": "mia",
          "t": "Right. Let's check the map first. Instead of taking the long road, I want to try the old path."
        },
        {
          "quem": "leo",
          "t": "By walking through the tunnel, we save an hour."
        },
        {
          "quem": "mia",
          "t": "But not without bringing a lamp. The tunnel is very dark."
        },
        {
          "quem": "leo",
          "t": "Good point. And I'm tired of carrying this heavy bag."
        },
        {
          "quem": "mia",
          "t": "Then leave it at the bench. After resting there, we go up to the bell."
        },
        {
          "quem": "leo",
          "t": "I'm looking forward to seeing the view from the top."
        },
        {
          "quem": "mia",
          "t": "Me too. I'm good at climbing, but I'm bad at waking up early."
        },
        {
          "quem": "leo",
          "t": "Don't worry. I'll wake you up. Thanks for coming with me, Mia."
        }
      ],
      "perguntas": [
        {
          "q": "How can they save an hour?",
          "op": [
            "By walking through the tunnel",
            "By taking the long road",
            "By leaving the map"
          ],
          "a": 0,
          "por": "By walking through the tunnel, we save an hour."
        },
        {
          "q": "What must they bring to the tunnel?",
          "op": [
            "A lamp",
            "A bell",
            "Some food"
          ],
          "a": 0,
          "por": "But not without bringing a lamp."
        },
        {
          "q": "What is Leo looking forward to?",
          "op": [
            "Seeing the view from the top",
            "Resting at the bench",
            "Leaving the bag"
          ],
          "a": 0,
          "por": "I'm looking forward to seeing the view from the top."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a long walk. Hear it, then say it.",
      "frases": [
        {
          "t": "Before climbing the hill, we check the map.",
          "img": "https://wolf-labs.pages.dev/p/794d99bd58bf/before-climbing-the-citadel/img/live-citadel.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We saved an hour by taking the old tunnel.",
          "img": "https://wolf-labs.pages.dev/p/794d99bd58bf/before-climbing-the-citadel/img/live-tunnel.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'm looking forward to seeing the bell at the top.",
          "img": "https://wolf-labs.pages.dev/p/794d99bd58bf/before-climbing-the-citadel/img/live-bell.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "After a preposition: -ing. Four quick ones.",
      "regra": "<b>before / after / by / without / instead of</b> + verb-ing · <b>tired of, good at, thanks for</b> + -ing · <b>look forward to</b> + -ing.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She is tired of carrying this heavy bag.",
          "aceita": [],
          "d": "Hint: <b>tired of</b> + verb-ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Before to climb, we check the map.",
          "r": "Before climbing, we check the map.",
          "aceita": [
            "Before we climb, we check the map."
          ],
          "d": "Hint: after <b>before</b>, use verb-ing, not <i>to</i> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He left the room without say goodbye.",
          "r": "He left the room without saying goodbye.",
          "aceita": [],
          "d": "Hint: after <b>without</b>, use verb-ing: <b>saying</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I look forward to see the view.",
          "r": "I look forward to seeing the view.",
          "aceita": [
            "I am looking forward to seeing the view."
          ],
          "d": "Hint: here <b>to</b> is a preposition, so the verb takes -ing: <b>seeing</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/794d99bd58bf/before-climbing-the-citadel/img/live-bench.webp",
      "leg": "A bench and a lamp in a quiet cave",
      "pede": "Look at the picture: a bench and a lamp in a quiet cave. Write 2 or 3 sentences about a hard day or a long walk. Use <b>before</b>, <b>after</b>, <b>by</b> or <b>without</b> + verb-ing.",
      "ph": "Before …ing, I …",
      "ex": "Before leaving home, I check my bag. I saved money by walking to work. I finished without asking for help."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you do before leaving home in the morning?",
          "ph": "Before leaving home, I …",
          "ex": "Before leaving home, I drink a coffee and check my bag."
        },
        {
          "q": "What are you good at, and what are you looking forward to?",
          "ph": "I'm good at … I'm looking forward to …",
          "ex": "I'm good at cooking. I'm looking forward to seeing my family at the weekend."
        }
      ]
    }
  }
};
