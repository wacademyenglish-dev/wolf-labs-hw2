/* MY FIRST WEEK · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: primeira noite: Could I have / looking forward to + -ing / not used to + -ing. B1: nenhum português. Imagens live-* do curso. */
window.HW2 = {
  "id": "aupair-my-first-week",
  "titulo": "My First Week",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/53e4e41515fd/aupair-my-first-week/img/live-conversa.webp",
  "alvo": "arrival day talk: How was your flight? (past simple) · Could I have ...? · I'm looking forward to + -ing · I'm not used to + -ing · arrived in; never looking forward to meet, used to eat, arrived to",
  "abrir": "What do you want to ask on your first night in a new house?",
  "fecho": "<b>Could I have</b> + noun: a polite request. <b>I'm looking forward to</b> + -ing: <i>meeting the kids</i>. <b>I'm not used to</b> + -ing: <i>eating early</i>. <b>Arrived in</b> a city. Never <i>looking forward to meet</i>.",
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
      "sub": "Mia arrives at her host family's house. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/53e4e41515fd/aupair-my-first-week/img/live-conversa.webp",
      "leg": "A welcome room: flowers on the bed",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Welcome! Come in. How was your flight?"
        },
        {
          "quem": "mia",
          "t": "Thank you! It was long, but I arrived safely. I'm looking forward to meeting the kids."
        },
        {
          "quem": "leo",
          "t": "They're asleep now, but you'll meet them in the morning. This is your room."
        },
        {
          "quem": "mia",
          "t": "It's lovely, thank you. Could I have the wifi password? I'd like to tell my family I arrived."
        },
        {
          "quem": "leo",
          "t": "Of course. It's on the fridge. And one thing: we have dinner at six."
        },
        {
          "quem": "mia",
          "t": "Six is early for me. I'm not used to eating that early, but I'll get used to it."
        },
        {
          "quem": "leo",
          "t": "Tomorrow my wife will show you the kids' routine. Is there anything you need to know?"
        },
        {
          "quem": "mia",
          "t": "Yes. Could we write my schedule down? I need to know my hours and my days off."
        },
        {
          "quem": "leo",
          "t": "Good idea. We'll do it tomorrow at breakfast."
        },
        {
          "quem": "mia",
          "t": "Perfect. Goodnight!"
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia ask for in her room?",
          "op": [
            "The wifi password",
            "A towel",
            "Dinner"
          ],
          "a": 0,
          "por": "Could I have the wifi password?"
        },
        {
          "q": "Why does Mia say six is early?",
          "op": [
            "She is not used to eating dinner that early",
            "She is not hungry",
            "She has a class"
          ],
          "a": 0,
          "por": "I'm not used to eating that early, but I'll get used to it."
        },
        {
          "q": "What will they do tomorrow at breakfast?",
          "op": [
            "Write her schedule down",
            "Meet the neighbors",
            "Visit the school"
          ],
          "a": 0,
          "por": "Could we write my schedule down? Good idea. We'll do it tomorrow at breakfast."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for your first night. Hear it, then say it.",
      "frases": [
        {
          "t": "Thank you! I'm looking forward to meeting the kids.",
          "img": "https://wolf-labs.pages.dev/p/53e4e41515fd/aupair-my-first-week/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Could I have the wifi password, please?",
          "img": "https://wolf-labs.pages.dev/p/53e4e41515fd/aupair-my-first-week/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'm not used to eating dinner so early.",
          "img": "https://wolf-labs.pages.dev/p/53e4e41515fd/aupair-my-first-week/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Polite and clear. Four quick ones.",
      "regra": "<b>Could I have</b> + noun · <b>looking forward to</b> + -ing · <b>not used to</b> + -ing · <b>arrived in</b> + city.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Could I have the wifi password, please?",
          "aceita": [],
          "d": "Hint: <b>Could I have</b> + what you need."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm looking forward to meet the kids.",
          "r": "I'm looking forward to meeting the kids.",
          "aceita": [],
          "d": "Hint: after <b>looking forward to</b> use -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I arrived to Chicago on Friday.",
          "r": "I arrived in Chicago on Friday.",
          "aceita": [],
          "d": "Hint: you arrive <b>in</b> a city."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm not used to eat dinner so early.",
          "r": "I'm not used to eating dinner so early.",
          "aceita": [],
          "d": "Hint: <b>used to</b> here is followed by -ing."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/53e4e41515fd/aupair-my-first-week/img/live-conversa.webp",
      "leg": "A front door with a warm lamp",
      "pede": "Look at the picture: a front door with a warm lamp. Write 2 or 3 sentences to your host family on your first night: thank them, ask for something, say one thing you are looking forward to.",
      "ph": "Thank you for … Could I have …?",
      "ex": "Thank you for the lovely room. Could I have a towel, please? I'm looking forward to meeting the kids tomorrow."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is the first thing you want to ask your host family?",
          "ph": "Could I …?",
          "ex": "Could I see my schedule? I want to know my days off."
        },
        {
          "q": "What are you looking forward to in a new place?",
          "ph": "I'm looking forward to …",
          "ex": "I'm looking forward to meeting new people and trying new food."
        }
      ]
    }
  }
};
