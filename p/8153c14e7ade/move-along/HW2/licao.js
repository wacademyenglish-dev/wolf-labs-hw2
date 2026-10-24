/* MOVE ALONG · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: zero conditional (If / When + presente). Linha de música: NENHUM verso aqui; o listening é diálogo original. Cena neutra (regra 9: nada de morte, luto, doença). B1: nenhum português. Cena: a banda viajando de trem. */
window.HW2 = {
  "id": "move-along",
  "titulo": "Move Along",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/8153c14e7ade/move-along/img/live-capa.webp",
  "alvo": "zero conditional for rules that are always true: If / When + present, present (When the train is late, I read); no will after if; -s with he / she / it; short contrast with the first conditional for one future moment",
  "abrir": "What helps you on a bad day?",
  "fecho": "Zero conditional = a rule that is always true: <b>If / When</b> + present, present. <i>When the train is late, I read.</i> No <b>will</b> after <b>if</b>, and keep the <b>-s</b> with he / she / it. For one future moment, use the first conditional: <i>If it arrives at seven, we'll be on time.</i>",
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
      "sub": "Mia and Leo's band waits for a train on a small tour. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/8153c14e7ade/move-along/img/live-capa.webp",
      "leg": "The station at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the train is late again. What do you do when a train is late?"
        },
        {
          "quem": "leo",
          "t": "When a train is late, I read or I play cards. If I get angry, nothing changes."
        },
        {
          "quem": "mia",
          "t": "True. And when it rains before a show, the drums get wet."
        },
        {
          "quem": "leo",
          "t": "That's why we have the blue bags. If you put the drums in the blue bags, they stay dry."
        },
        {
          "quem": "mia",
          "t": "Good rule. What happens if the singer loses her voice?"
        },
        {
          "quem": "leo",
          "t": "If she loses her voice, she drinks hot tea with honey, and we play the slow songs."
        },
        {
          "quem": "mia",
          "t": "And when I make a mistake on stage?"
        },
        {
          "quem": "leo",
          "t": "When you make a mistake, you smile and keep playing. People usually don't notice."
        },
        {
          "quem": "mia",
          "t": "Okay. And tonight? If the train arrives at seven, will we be on time?"
        },
        {
          "quem": "leo",
          "t": "Yes. If it arrives at seven, we'll be at the club by eight."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo do when a train is late?",
          "op": [
            "He reads or plays cards",
            "He calls the club",
            "He takes a taxi"
          ],
          "a": 0,
          "por": "When a train is late, I read or I play cards."
        },
        {
          "q": "Why does the band have blue bags?",
          "op": [
            "To keep the drums dry",
            "To carry food",
            "To sell T-shirts"
          ],
          "a": 0,
          "por": "If you put the drums in the blue bags, they stay dry."
        },
        {
          "q": "What does Leo say about mistakes on stage?",
          "op": [
            "Smile and keep playing",
            "Stop the song",
            "Say sorry to the people"
          ],
          "a": 0,
          "por": "When you make a mistake, you smile and keep playing."
        }
      ]
    },
    "out": {
      "sub": "Three rules for the road. Hear it, then say it.",
      "frases": [
        {
          "t": "When the train is late, we play cards at the station.",
          "img": "https://wolf-labs.pages.dev/p/8153c14e7ade/move-along/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If it rains, the drums go in the blue bags.",
          "img": "https://wolf-labs.pages.dev/p/8153c14e7ade/move-along/img/live-ponto.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If you pack the night before, you never forget anything.",
          "img": "https://wolf-labs.pages.dev/p/8153c14e7ade/move-along/img/live-mochila.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "If and when, always true. Four quick ones.",
      "regra": "<b>If / When</b> + present, present: always true · no <b>will</b> after <b>if</b> · <b>-s</b> with he / she / it.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "When I feel nervous, I take a long walk.",
          "aceita": [],
          "d": "Hint: <b>When</b> + present, then a comma and the present again."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If you will heat ice, it melts.",
          "r": "If you heat ice, it melts.",
          "aceita": [
            "When you heat ice, it melts."
          ],
          "d": "Hint: after <b>if</b>, use the present, never <i>will</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "When she is tired, she drink coffee.",
          "r": "When she is tired, she drinks coffee.",
          "aceita": [],
          "d": "Hint: <b>she</b> needs the <b>-s</b>: <i>drinks</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "When I missed the bus, I walk to work.",
          "r": "When I miss the bus, I walk to work.",
          "aceita": [
            "If I miss the bus, I walk to work."
          ],
          "d": "Hint: a rule that is always true uses the present in both parts: <i>miss … walk</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/8153c14e7ade/move-along/img/live-ponto.webp",
      "leg": "An orange umbrella on a bench in the rain",
      "pede": "Look at the picture: an orange umbrella on a bench in the rain. Write 2 or 3 rules for a bad day. Use <b>If</b> or <b>When</b> + present, and the present again.",
      "ph": "When it rains, I …",
      "ex": "When it rains, I listen to music at home. If I feel tired, I go to bed early. If I talk to a friend, I feel better."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you do when you have a bad day?",
          "ph": "When I have a bad day, I …",
          "ex": "When I have a bad day, I cook something nice and call a friend."
        },
        {
          "q": "What happens if you don't sleep well?",
          "ph": "If I don't sleep well, I …",
          "ex": "If I don't sleep well, I drink too much coffee and I get nervous."
        }
      ]
    }
  }
};
