/* I JUST HAD TO DO IT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: had to / didn't have to / Did you have to. B1: nenhum português. Só live-capa (escura). */
window.HW2 = {
  "id": "i-just-had-to-do-it",
  "titulo": "I Just Had to Do It",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/acdf9fa25dbd/i-just-had-to-do-it/img/live-capa.jpg",
  "alvo": "had to / didn't have to (obligation in the past); Did you have to ...? with the plain verb; never musted, never had that, never You had to ...? as a question",
  "abrir": "What did you have to do yesterday?",
  "fecho": "<b>had to</b> + plain verb = it was necessary: <i>I had to carry every box.</i> <b>didn't have to</b> = it wasn't necessary: <i>We didn't have to pay.</i> The question: <b>Did you have to</b> work? Must has no past: never <i>I musted study</i>.",
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
      "sub": "Mia and Leo talk about moving house. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/acdf9fa25dbd/i-just-had-to-do-it/img/live-capa.jpg",
      "leg": "A record player under the northern lights",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you look tired. Was the move hard?"
        },
        {
          "quem": "mia",
          "t": "Very. I had to carry every box up four floors, because the lift was broken."
        },
        {
          "quem": "leo",
          "t": "Did you have to do it alone?"
        },
        {
          "quem": "mia",
          "t": "No, my brother helped me. And I didn't have to pay for the van, luckily. He borrowed one from his boss."
        },
        {
          "quem": "leo",
          "t": "Did you have to sign a lot of papers for the new flat?"
        },
        {
          "quem": "mia",
          "t": "So many! I had to show my contract, my bank card and two letters from work."
        },
        {
          "quem": "leo",
          "t": "That's a lot. When I moved, I had to wait a whole week for my keys."
        },
        {
          "quem": "mia",
          "t": "A week? Did you have to sleep at a friend's house?"
        },
        {
          "quem": "leo",
          "t": "Yes, but I didn't have to pay him anything. I just had to cook dinner every night."
        },
        {
          "quem": "mia",
          "t": "That sounds fair! Tomorrow I have to build the bed, but at least I didn't have to do it today."
        }
      ],
      "perguntas": [
        {
          "q": "Why did Mia have to carry the boxes up the stairs?",
          "op": [
            "The lift was broken",
            "She wanted exercise",
            "Her brother was late"
          ],
          "a": 0,
          "por": "I had to carry every box up four floors, because the lift was broken."
        },
        {
          "q": "What didn't Mia have to pay for?",
          "op": [
            "The van",
            "The papers",
            "The keys"
          ],
          "a": 0,
          "por": "I didn't have to pay for the van, luckily."
        },
        {
          "q": "What did Leo have to do for his friend?",
          "op": [
            "Cook dinner every night",
            "Pay for the room",
            "Wait outside"
          ],
          "a": 0,
          "por": "I just had to cook dinner every night."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about things you had to do. Hear it, then say it.",
      "frases": [
        {
          "t": "We had to wait for an hour, but we didn't have to pay.",
          "img": "https://wolf-labs.pages.dev/p/acdf9fa25dbd/i-just-had-to-do-it/img/live-capa.jpg",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Did you have to work on Saturday?",
          "img": "https://wolf-labs.pages.dev/p/acdf9fa25dbd/i-just-had-to-do-it/img/live-capa.jpg",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I didn't have to cook, but I had to wash the dishes.",
          "img": "https://wolf-labs.pages.dev/p/acdf9fa25dbd/i-just-had-to-do-it/img/live-capa.jpg",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "had to, didn't have to, Did you have to? Four quick ones.",
      "regra": "<b>had to</b> + plain verb · <b>didn't have to</b> · <b>Did you have to</b> + plain verb? · never <i>musted</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Did you have to wear a uniform at school?",
          "aceita": [],
          "d": "Hint: the question starts with <b>Did</b>, and <b>have to</b> stays plain."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I musted wake up early yesterday.",
          "r": "I had to wake up early yesterday.",
          "aceita": [],
          "d": "Hint: must has no past. Use <b>had to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make it a real question.",
          "mostra": "You had to work last Saturday?",
          "r": "Did you have to work last Saturday?",
          "aceita": [],
          "d": "Hint: the question needs <b>Did</b> + <b>have to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We didn't had to pay for the ticket.",
          "r": "We didn't have to pay for the ticket.",
          "aceita": [],
          "d": "Hint: after <b>didn't</b>, the verb stays plain: <b>have to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/acdf9fa25dbd/i-just-had-to-do-it/img/live-capa.jpg",
      "leg": "A record player under the northern lights",
      "pede": "Look at the picture: a record player under the northern lights, far from everything. Write 2 or 3 sentences about something you had to do last month, and something you didn't have to do. Use <b>had to</b> and <b>didn't have to</b>.",
      "ph": "Last month I had to … but I didn't have to …",
      "ex": "Last month I had to finish a big project at work. I didn't have to go to the office, because I worked from home."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you have to do at your first job, or at school?",
          "ph": "I had to … I didn't have to …",
          "ex": "At school we had to wear a uniform, but we didn't have to wear a tie."
        },
        {
          "q": "Did you have to do anything difficult last week? What?",
          "ph": "Last week I had to …",
          "ex": "Last week I had to speak English on a call, and I was very nervous."
        }
      ]
    }
  }
};
