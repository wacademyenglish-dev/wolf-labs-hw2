/* FIRST DAY AT CAMP · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   A2: dicas em português só nas notas (d). Imagens: as escuras da própria aula (live-*). */
window.HW2 = {
  "id": "a2-review-first-day-at-camp",
  "titulo": "First Day at Camp",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/01d9608772cd/a2-review-first-day-at-camp/img/live-capa.webp",
  "alvo": "Unit 7 review, rules and advice: should / shouldn't + plain verb; have to / has to / don't have to, Do I have to ...?, had to (past of must); must / mustn't (no to, no past); never must to, never she have to",
  "abrir": "What do you have to do every morning?",
  "fecho": "Advice: <b>should / shouldn't</b>. Rule: <b>must</b>, <b>have to</b>. Not allowed: <b>mustn't</b>. Not necessary: <b>don't have to</b>. Past: <b>had to</b>. After them the plain verb, never <i>to</i>.",
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
      "sub": "Mia and Leo at a lake camp on the first night. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/01d9608772cd/a2-review-first-day-at-camp/img/live-conversa.webp",
      "leg": "The pier at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, it's my first day as a camp leader. What should I tell the kids?"
        },
        {
          "quem": "mia",
          "t": "First, the rules. They must wear a life jacket in the boat."
        },
        {
          "quem": "leo",
          "t": "And they mustn't swim at night, right?"
        },
        {
          "quem": "mia",
          "t": "Right, never at night. They don't have to wear shoes at the beach, but they have to wear a hat."
        },
        {
          "quem": "leo",
          "t": "Do I have to sleep in the big tent with them?"
        },
        {
          "quem": "mia",
          "t": "Yes, you do. But you don't have to cook. The cook does that."
        },
        {
          "quem": "leo",
          "t": "Good! Last summer I had to cook for twenty people."
        },
        {
          "quem": "mia",
          "t": "Wow! Tonight you should rest. You shouldn't stay up late."
        },
        {
          "quem": "leo",
          "t": "Why? What time do we get up?"
        },
        {
          "quem": "mia",
          "t": "At seven. Every leader has to be at the fire at seven."
        }
      ],
      "perguntas": [
        {
          "q": "What mustn't the kids do at night?",
          "op": [
            "Wear a hat",
            "Swim in the lake",
            "Sleep in a tent"
          ],
          "a": 1,
          "por": "They mustn't swim at night."
        },
        {
          "q": "What doesn't Leo have to do?",
          "op": [
            "Cook",
            "Sleep in the big tent",
            "Be at the fire at seven"
          ],
          "a": 0,
          "por": "You don't have to cook."
        },
        {
          "q": "What should Leo do tonight?",
          "op": [
            "Cook for twenty people",
            "Swim in the lake",
            "Rest and not stay up late"
          ],
          "a": 2,
          "por": "Tonight you should rest. You shouldn't stay up late."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about camp rules. Hear it, then say it.",
      "frases": [
        {
          "t": "You must wear a life jacket in the boat.",
          "img": "https://wolf-labs.pages.dev/p/01d9608772cd/a2-review-first-day-at-camp/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You mustn't swim at night.",
          "img": "https://wolf-labs.pages.dev/p/01d9608772cd/a2-review-first-day-at-camp/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Campers don't have to cook, but they have to help.",
          "img": "https://wolf-labs.pages.dev/p/01d9608772cd/a2-review-first-day-at-camp/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "should, must, have to. Four quick ones.",
      "regra": "<b>should</b> = advice · <b>must</b> / <b>have to</b> = rule · <b>mustn't</b> = not allowed · <b>don't have to</b> = not necessary · <b>had to</b> = past · plain verb after them, no <b>to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "You should call your parents tonight.",
          "aceita": [],
          "d": "Dica: <b>should</b> + o verbo limpo (call)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "You mustn't to swim at night.",
          "r": "You mustn't swim at night.",
          "aceita": [
            "You must not swim at night."
          ],
          "d": "Dica: depois de <b>mustn't</b>, o verbo fica limpo, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: he, she or it?",
          "mostra": "She have to wake up at seven.",
          "r": "She has to wake up at seven.",
          "aceita": [],
          "d": "Dica: com <b>she / he / it</b>, use <b>has to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it happened yesterday.",
          "mostra": "Yesterday I must clean the tents.",
          "r": "Yesterday I had to clean the tents.",
          "aceita": [],
          "d": "Dica: <b>must</b> não tem passado. Ontem: <b>had to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/01d9608772cd/a2-review-first-day-at-camp/img/live-conversa.webp",
      "leg": "A wooden pier by the lake at night",
      "pede": "Look at the picture: a pier by the lake at night. Write 2 or 3 sentences: one rule with <b>must</b> or <b>mustn't</b>, one thing campers <b>don't have to</b> do, and one piece of advice with <b>should</b>.",
      "ph": "At the camp, you must …",
      "ex": "At the camp, you mustn't swim at night. You don't have to wear a uniform. You should sleep well."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you have to do every morning?",
          "ph": "Every morning I have to …",
          "ex": "I have to make breakfast for my kids."
        },
        {
          "q": "Give me one piece of advice for learning English.",
          "ph": "You should …",
          "ex": "You should watch series with subtitles."
        }
      ]
    }
  }
};
