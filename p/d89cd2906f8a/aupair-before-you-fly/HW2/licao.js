/* AU PAIR · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=". Falas originais. */
window.HW2 = {
  "id": "aupair-before-you-fly",
  "titulo": "Before You Fly",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/d89cd2906f8a/aupair-before-you-fly/img/live-capa.webp",
  "alvo": "should + plain verb for advice (what to keep with you); in the suitcase, with me, on paper; never should to, should takes, on the suitcase",
  "abrir": "What do you always carry in your bag?",
  "fecho": "<b>should</b> + plain verb for advice: <i>You should keep your passport with you.</i> Never <i>should to</i> or <i>should takes</i>. <b>In</b> the suitcase, <b>with</b> me, <b>on</b> paper.",
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
      "sub": "Mia and Leo the night before her flight. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/d89cd2906f8a/aupair-before-you-fly/img/live-conversa.webp",
      "leg": "A window at night, the airport gate",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, are you ready for tomorrow?"
        },
        {
          "quem": "mia",
          "t": "Almost. I'm packing my suitcase now."
        },
        {
          "quem": "leo",
          "t": "What do you keep in your carry-on?"
        },
        {
          "quem": "mia",
          "t": "My passport, my visa papers and the family's address on paper."
        },
        {
          "quem": "leo",
          "t": "Good. Phones can die. And the copies?"
        },
        {
          "quem": "mia",
          "t": "I put copies of my papers in the big suitcase."
        },
        {
          "quem": "leo",
          "t": "That's smart. Should you take your winter coat on the plane?"
        },
        {
          "quem": "mia",
          "t": "No. I should wear a light jacket. The coat goes in the suitcase."
        },
        {
          "quem": "leo",
          "t": "And your charger?"
        },
        {
          "quem": "mia",
          "t": "In my carry-on. I need my phone when I land."
        }
      ],
      "perguntas": [
        {
          "q": "What is in Mia's carry-on?",
          "op": [
            "Her passport, visa papers and the family's address",
            "Her winter coat",
            "Her extra shoes"
          ],
          "a": 0,
          "por": "My passport, my visa papers and the family's address on paper."
        },
        {
          "q": "Where do the copies go?",
          "op": [
            "In the big suitcase",
            "In the carry-on with the originals",
            "In the family's house"
          ],
          "a": 0,
          "por": "I put copies of my papers in the big suitcase."
        },
        {
          "q": "Why is the charger in the carry-on?",
          "op": [
            "She needs her phone when she lands",
            "It is too heavy",
            "It is a gift"
          ],
          "a": 0,
          "por": "I need my phone when I land."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for the airport. Hear it, then say it.",
      "frases": [
        {
          "t": "I should keep my passport with me.",
          "img": "https://wolf-labs.pages.dev/p/d89cd2906f8a/aupair-before-you-fly/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The copies go in the big suitcase.",
          "img": "https://wolf-labs.pages.dev/p/d89cd2906f8a/aupair-before-you-fly/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "You should write the address on paper.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "should, in and with. Four quick ones.",
      "regra": "<b>should</b> + plain verb = advice · <b>in</b> the suitcase · <b>with</b> me · never <b>should to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I should keep my passport with me.",
          "aceita": [],
          "d": "Dica: <b>should</b> + verbo limpo: keep."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "You should to carry your passport.",
          "r": "You should carry your passport.",
          "aceita": [],
          "d": "Dica: depois de <b>should</b>, o verbo vem direto, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Put the copies on the big suitcase.",
          "r": "Put the copies in the big suitcase.",
          "aceita": [],
          "d": "Dica: dentro da mala é <b>in</b>, não <b>on</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She should takes her charger.",
          "r": "She should take her charger.",
          "aceita": [],
          "d": "Dica: depois de <b>should</b>, o verbo não leva -s: take."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/d89cd2906f8a/aupair-before-you-fly/img/live-capa.webp",
      "leg": "A suitcase by the door, ready to go",
      "pede": "Look at the picture: a suitcase by the door. Write 2 or 3 sentences: two things you should keep with you, and one thing that goes in the suitcase.",
      "ph": "I should keep … with me.",
      "ex": "I should keep my passport and my charger with me. My winter coat goes in the suitcase."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What should you keep with you on a flight? Why?",
          "ph": "I should keep … because …",
          "ex": "I should keep my passport with me because I need it at the airport."
        },
        {
          "q": "A friend asks: Where do I put my copies? What do you say?",
          "ph": "You should put …",
          "ex": "You should put them in the big suitcase."
        }
      ]
    }
  }
};
