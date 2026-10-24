/* GOLDEN · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: used to for past habits that stopped. Linha de música: NENHUM verso aqui; o listening é diálogo original. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "golden",
  "titulo": "Golden",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/fc94a4ce00ec/golden/img/live-capa.webp",
  "alvo": "used to for past habits that stopped (I used to hide) against now (now I sing); didn't use to; Did you use to ...?; not ... anymore; never use to in the present, never used to + -ing",
  "abrir": "What did you use to do when you were a kid?",
  "fecho": "<b>used to</b> + plain verb = a habit in the past, not now: <i>I used to hide.</i> No: <i>I didn't use to sing.</i> Question: <i>Did you use to dance?</i> After <b>did / didn't</b>, it is <b>use to</b>, without -d.",
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
      "sub": "Mia and Leo talk about who they used to be. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/fc94a4ce00ec/golden/img/live-neon.webp",
      "leg": "A small stage with purple lights",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you sing so well now! Did you use to sing?"
        },
        {
          "quem": "leo",
          "t": "No, I didn't use to sing. I used to hide in my room."
        },
        {
          "quem": "mia",
          "t": "Really? What did you use to do there?"
        },
        {
          "quem": "leo",
          "t": "I used to read comics and play video games. Now I sing every Friday."
        },
        {
          "quem": "mia",
          "t": "I used to be shy, too. I didn't use to talk to new people."
        },
        {
          "quem": "leo",
          "t": "And now you talk to everybody! You aren't shy anymore."
        },
        {
          "quem": "mia",
          "t": "That's true. Now I usually go on stage with my friends."
        },
        {
          "quem": "leo",
          "t": "Great. Did you use to dance?"
        },
        {
          "quem": "mia",
          "t": "No, never. Now I dance every weekend!"
        }
      ],
      "perguntas": [
        {
          "q": "Where did Leo use to hide?",
          "op": [
            "In his room",
            "On a stage",
            "At school"
          ],
          "a": 0,
          "por": "I used to hide in my room."
        },
        {
          "q": "What did Mia use to be?",
          "op": [
            "Shy",
            "Famous",
            "Loud"
          ],
          "a": 0,
          "por": "I used to be shy, too."
        },
        {
          "q": "What does Mia do every weekend now?",
          "op": [
            "She dances",
            "She reads comics",
            "She hides"
          ],
          "a": 0,
          "por": "Now I dance every weekend!"
        }
      ]
    },
    "out": {
      "sub": "Three sentences about before and now. Hear it, then say it.",
      "frases": [
        {
          "t": "I used to hide in my room, but now I sing.",
          "img": "https://wolf-labs.pages.dev/p/fc94a4ce00ec/golden/img/live-camarim.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I didn't use to talk to new people.",
          "img": "https://wolf-labs.pages.dev/p/fc94a4ce00ec/golden/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Did you use to dance when you were a kid?",
          "img": "https://wolf-labs.pages.dev/p/fc94a4ce00ec/golden/img/live-neon.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "used to or now? Four quick ones.",
      "regra": "<b>used to</b> + plain verb = before, not now · <b>didn't use to</b> · <b>Did you use to ...?</b> · <b>not ... anymore</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "He used to hide in his room.",
          "aceita": [],
          "d": "Dica: <b>used to</b> + verbo limpo (hide) = antes, não mais."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I use to be shy.",
          "r": "I used to be shy.",
          "aceita": [],
          "d": "Dica: para o passado, o certo é <b>used to</b>, com -d."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She didn't used to sing.",
          "r": "She didn't use to sing.",
          "aceita": [],
          "d": "Dica: depois de <b>didn't</b>, é <b>use to</b>, sem -d."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Did you used to dance?",
          "r": "Did you use to dance?",
          "aceita": [],
          "d": "Dica: depois de <b>Did</b>, é <b>use to</b>, sem -d."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/fc94a4ce00ec/golden/img/live-capa.webp",
      "leg": "A microphone in a spotlight",
      "pede": "Look at the picture: a microphone in a spotlight. Write 2 or 3 sentences: what did you <b>use to</b> be afraid of? What do you do <b>now</b>?",
      "ph": "I used to … but now I …",
      "ex": "I used to be shy, but now I talk to everybody. I didn't use to sing. Now I sing in the shower."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you use to do when you were a kid?",
          "ph": "I used to …",
          "ex": "I used to play soccer in the street every day."
        },
        {
          "q": "What do you do now that you didn't use to do?",
          "ph": "Now I … I didn't use to …",
          "ex": "Now I study English every night. I didn't use to study at night."
        }
      ]
    }
  }
};
