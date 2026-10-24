/* THE WEEKEND PLANNER · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   A2: dicas em português só nas notas (d). Imagens: as escuras da própria aula (live-*). */
window.HW2 = {
  "id": "a2-review-the-weekend-planner",
  "titulo": "The Weekend Planner",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/629cbf335070/a2-review-the-weekend-planner/img/live-capa.webp",
  "alvo": "Unit 9 review, if and verb + verb: first conditional (if + present, will; unless); zero conditional; want / need / decide + to, enjoy / avoid + -ing; told / asked me + to; remember / forget + to; never if it will rain, never I enjoy to cook",
  "abrir": "What do you want to do this weekend?",
  "fecho": "<b>If + present, will</b>: <i>If it rains, I'll stay.</i> Never <i>if it will rain</i>. <b>Want / need / decide + to</b>; <b>enjoy / avoid + -ing</b>. <b>She told me to call</b>. <b>Don't forget to</b> pack.",
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
      "sub": "Mia and Leo plan a weekend in the mountains. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/629cbf335070/a2-review-the-weekend-planner/img/live-conversa.webp",
      "leg": "A window with snow and candles",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, are you ready for the mountains? What do you want to do?"
        },
        {
          "quem": "leo",
          "t": "I want to climb the big hill. And I enjoy taking photos."
        },
        {
          "quem": "mia",
          "t": "Nice. But if it rains, we'll stay in the cabin."
        },
        {
          "quem": "leo",
          "t": "OK. If it rains, I'll read by the fire. I'll go outside only if it's sunny."
        },
        {
          "quem": "mia",
          "t": "Good. My sister told me to call her every night, so I need to charge my phone."
        },
        {
          "quem": "leo",
          "t": "Don't forget to pack your charger! You always forget it."
        },
        {
          "quem": "mia",
          "t": "I know. I'll put it in my bag now."
        },
        {
          "quem": "leo",
          "t": "And if you forget it, you can use mine."
        },
        {
          "quem": "mia",
          "t": "Thanks! I decided to bring chocolate for everybody."
        }
      ],
      "perguntas": [
        {
          "q": "What will Leo do if it rains?",
          "op": [
            "Climb the big hill",
            "Take photos outside",
            "Read by the fire"
          ],
          "a": 2,
          "por": "If it rains, I'll read by the fire."
        },
        {
          "q": "What did Mia's sister tell her to do?",
          "op": [
            "Call her every night",
            "Stay in the cabin",
            "Bring chocolate"
          ],
          "a": 0,
          "por": "My sister told me to call her every night."
        },
        {
          "q": "What does Mia always forget?",
          "op": [
            "Her bag",
            "Her charger",
            "Her phone"
          ],
          "a": 1,
          "por": "Don't forget to pack your charger! You always forget it."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the trip. Hear it, then say it.",
      "frases": [
        {
          "t": "If it rains, we will stay in the cabin.",
          "img": "https://wolf-labs.pages.dev/p/629cbf335070/a2-review-the-weekend-planner/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I want to climb the big hill.",
          "img": "https://wolf-labs.pages.dev/p/629cbf335070/a2-review-the-weekend-planner/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Don't forget to pack your charger.",
          "img": "https://wolf-labs.pages.dev/p/629cbf335070/a2-review-the-weekend-planner/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "if, want to, enjoy -ing, told me to. Four quick ones.",
      "regra": "<b>If + present, will</b> (never if it will) · <b>want to</b> + verb · <b>enjoy</b> + -ing · <b>told me to</b> + verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If it rains, we will stay home.",
          "aceita": [],
          "d": "Dica: <b>If</b> + presente, depois <b>will</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: no will after if.",
          "mostra": "If it will rain, we'll stay home.",
          "r": "If it rains, we'll stay home.",
          "aceita": [
            "If it rains, we will stay home."
          ],
          "d": "Dica: depois de <b>if</b>, use o presente: <b>rains</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: enjoy + what?",
          "mostra": "I enjoy to take photos.",
          "r": "I enjoy taking photos.",
          "aceita": [],
          "d": "Dica: depois de <b>enjoy</b>, o verbo leva <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "She told me call him.",
          "r": "She told me to call him.",
          "aceita": [],
          "d": "Dica: <b>told me to</b> + verbo."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/629cbf335070/a2-review-the-weekend-planner/img/live-conversa.webp",
      "leg": "A mountain window with candles",
      "pede": "Look at the picture: a cabin window with snow outside. Write 2 or 3 sentences about a trip: what you <b>want to</b> do, what you <b>will</b> do <b>if it rains</b>, and one thing <b>not to forget</b>.",
      "ph": "This weekend I want to …",
      "ex": "This weekend I want to visit the mountains. If it rains, I'll read by the fire. Don't forget to bring a jacket!"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you want to do this weekend?",
          "ph": "This weekend I want to …",
          "ex": "I want to rest and visit my friends."
        },
        {
          "q": "What will you do if it rains tomorrow?",
          "ph": "If it rains, I'll …",
          "ex": "If it rains, I'll stay home and watch a movie."
        }
      ]
    }
  }
};
