/* THE CAPTAIN'S LOG · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: futuro: going to / will / will be + -ing. B1: nenhum português. Jogo: falas originais, sem violência. Só imagens live-* (lum < 50). */
window.HW2 = {
  "id": "the-captains-log",
  "titulo": "The Captain's Log",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/acc30291a465/the-captains-log/img/live-cockpit.webp",
  "alvo": "the future in three forms: going to (the plan) · will (decided now, a promise, a guess) · will be + -ing (in progress at a future moment); never will to, never going to without am / is / are",
  "abrir": "What are you going to do tomorrow, and what will you be doing at nine?",
  "fecho": "<b>going to</b> = the plan you already have. <b>will</b> = decided now, a promise, a guess: <i>I'll carry it. I think it will rain.</i> <b>will be + -ing</b> = in progress at a moment in the future: <i>At nine I'll be repairing the radio.</i> Never <i>will to</i>.",
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
      "sub": "Mia and Leo on the ship the night before landing. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/acc30291a465/the-captains-log/img/live-station.webp",
      "leg": "A corridor on the station",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I'm recording the captain's log. What's the plan for tomorrow?"
        },
        {
          "quem": "mia",
          "t": "We're going to land on the grey moon at six. I've already checked the fuel."
        },
        {
          "quem": "leo",
          "t": "Good. And the cargo? It looks heavy."
        },
        {
          "quem": "mia",
          "t": "Don't worry, I'll carry it. I'll ask the robot to help me."
        },
        {
          "quem": "leo",
          "t": "Thanks. I think the dust storm will pass before noon."
        },
        {
          "quem": "mia",
          "t": "Great. At nine tomorrow I'll be repairing the radio, so call me after lunch."
        },
        {
          "quem": "leo",
          "t": "OK. At that time I'll be scanning the cave for crystals."
        },
        {
          "quem": "mia",
          "t": "Then we'll meet at one. Oh, I forgot the map! I'll go and get it now."
        },
        {
          "quem": "leo",
          "t": "Thank you. Tonight I'm going to write everything in the log."
        }
      ],
      "perguntas": [
        {
          "q": "What are they going to do at six?",
          "op": [
            "Land on the grey moon",
            "Repair the radio",
            "Scan the cave"
          ],
          "a": 0,
          "por": "We're going to land on the grey moon at six."
        },
        {
          "q": "What will Mia be doing at nine tomorrow?",
          "op": [
            "Repairing the radio",
            "Scanning the cave",
            "Writing the log"
          ],
          "a": 0,
          "por": "At nine tomorrow I'll be repairing the radio."
        },
        {
          "q": "Why does Mia say \"I'll go and get it\"?",
          "op": [
            "She just remembered she forgot the map",
            "She has had this plan for weeks",
            "The robot asked her to"
          ],
          "a": 0,
          "por": "Oh, I forgot the map! I'll go and get it now."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about tomorrow. Hear it, then say it.",
      "frases": [
        {
          "t": "We're going to land on the moon at six.",
          "img": "https://wolf-labs.pages.dev/p/acc30291a465/the-captains-log/img/live-planet.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I think the dust storm will pass before noon.",
          "img": "https://wolf-labs.pages.dev/p/acc30291a465/the-captains-log/img/live-cockpit.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "At nine tomorrow I'll be repairing the radio.",
          "img": "https://wolf-labs.pages.dev/p/acc30291a465/the-captains-log/img/live-station.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Going to, will or will be + -ing? Four quick ones.",
      "regra": "<b>going to</b> = plan · <b>will</b> = decided now, a promise, a guess · <b>will be + -ing</b> = in progress later · never <i>will to</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "At noon we will be flying over the mountains.",
          "aceita": [],
          "d": "Hint: <b>will be</b> + verb-ing: it will be in progress at noon."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I will to call you tomorrow.",
          "r": "I will call you tomorrow.",
          "aceita": [],
          "d": "Hint: after <b>will</b>, the plain verb. No <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "We going to land on the moon at six.",
          "r": "We are going to land on the moon at six.",
          "aceita": [],
          "d": "Hint: <b>going to</b> needs <b>am / is / are</b> before it."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "At nine I will be repair the radio.",
          "r": "At nine I will be repairing the radio.",
          "aceita": [],
          "d": "Hint: <b>will be</b> + verb-ing, for something in progress."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/acc30291a465/the-captains-log/img/live-stars.webp",
      "leg": "A window on the stars",
      "pede": "Look at the picture: a window on the stars. Write 2 or 3 sentences about tomorrow. Use <b>going to</b> for a plan, <b>will</b> for a guess or a promise, and <b>will be + -ing</b> for what you will be doing at a certain time.",
      "ph": "Tomorrow I'm going to … At nine I'll be …",
      "ex": "Tomorrow I'm going to visit my cousin. At nine I'll be working, so call me after lunch. I think it will rain."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you going to do this weekend?",
          "ph": "This weekend I'm going to …",
          "ex": "This weekend I'm going to visit my parents and cook for them."
        },
        {
          "q": "What will you be doing at this time tomorrow?",
          "ph": "At this time tomorrow I'll be …",
          "ex": "At this time tomorrow I'll be sitting at my desk and answering emails."
        }
      ]
    }
  }
};
