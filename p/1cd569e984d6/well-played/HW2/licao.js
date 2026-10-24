/* WELL PLAYED · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: advérbios de modo. Jogo: falas originais, sem jogador real. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "well-played",
  "titulo": "Well Played",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/1cd569e984d6/well-played/img/live-keyart.webp",
  "alvo": "adverbs of manner: HOW someone does it (passes well, runs fast, works hard, plays carefully, runs slowly) versus the adjective for the person (a good player, a fast runner); well, never good, after the verb; fast and hard stay the same; hardly = almost not",
  "abrir": "How do you usually do your work: quickly or slowly?",
  "fecho": "<b>How</b> someone does it: <i>She passes well. He runs slowly. They work hard.</i> The person: <i>a good player</i>. After a verb: <b>well</b>, never <i>good</i>. <b>Fast</b> and <b>hard</b> stay the same: <i>runs fast</i>, never <i>fastly</i>. <b>Hardly</b> = almost not.",
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
      "sub": "Mia and Leo in the press room, watching a replay. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/1cd569e984d6/well-played/img/live-sala.webp",
      "leg": "The press room screens",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at the replay. Number seven passes very well."
        },
        {
          "quem": "mia",
          "t": "Yes, and she runs fast. But she shoots badly today."
        },
        {
          "quem": "leo",
          "t": "True. She shoots badly, but she tries hard."
        },
        {
          "quem": "mia",
          "t": "Number four is different. He plays carefully, and he never loses the ball."
        },
        {
          "quem": "leo",
          "t": "He runs slowly, though."
        },
        {
          "quem": "mia",
          "t": "Slowly, yes. But he passes well, and he talks loudly to his team."
        },
        {
          "quem": "leo",
          "t": "A good captain. Is number nine a good player too?"
        },
        {
          "quem": "mia",
          "t": "Number nine is fast, but he hardly passes. He hardly ever looks up."
        },
        {
          "quem": "leo",
          "t": "Then he should pass more. Let's say that on the show."
        }
      ],
      "perguntas": [
        {
          "q": "How does number seven shoot today?",
          "op": [
            "Badly",
            "Very well",
            "Carefully"
          ],
          "a": 0,
          "por": "She shoots badly, but she tries hard."
        },
        {
          "q": "What does number four do?",
          "op": [
            "He plays carefully",
            "He runs fast",
            "He shoots badly"
          ],
          "a": 0,
          "por": "He plays carefully, and he never loses the ball."
        },
        {
          "q": "Who hardly passes?",
          "op": [
            "Number nine",
            "Number four",
            "Number seven"
          ],
          "a": 0,
          "por": "Number nine is fast, but he hardly passes."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for the show. Hear it, then say it.",
      "frases": [
        {
          "t": "Number seven passes very well.",
          "img": "https://wolf-labs.pages.dev/p/1cd569e984d6/well-played/img/live-sala.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "He runs slowly, but he plays carefully.",
          "img": "https://wolf-labs.pages.dev/p/1cd569e984d6/well-played/img/live-bola.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The team works hard and plays well.",
          "img": "https://wolf-labs.pages.dev/p/1cd569e984d6/well-played/img/live-mapa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "well, fast, hard or good? Four quick ones.",
      "regra": "<b>well</b> after a verb (never <i>good</i>) · <b>fast</b> and <b>hard</b> do not change · <b>a good player</b> describes the person.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She passes the ball very well.",
          "aceita": [],
          "d": "Dica: <b>passes</b> + a bola + <b>very well</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He plays good.",
          "r": "He plays well.",
          "aceita": [],
          "d": "Dica: depois do verbo, o jeito de fazer é <b>well</b>, não <i>good</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She runs fastly.",
          "r": "She runs fast.",
          "aceita": [],
          "d": "Dica: <b>fast</b> não ganha -ly: runs fast."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He works hardly every day.",
          "r": "He works hard every day.",
          "aceita": [],
          "d": "Dica: <b>hardly</b> = quase não. Trabalhar muito = <b>hard</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/1cd569e984d6/well-played/img/live-bola.webp",
      "leg": "A ball on the wet grass at night",
      "pede": "Look at the picture: a ball on the grass at night. Write 2 or 3 sentences about a player you know: how does he or she play? Use <b>well</b>, <b>fast</b>, <b>hard</b> or <b>carefully</b>.",
      "ph": "My friend plays …",
      "ex": "My friend plays well, but he runs slowly. He tries hard every Sunday."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How do you speak English: well, slowly, loudly?",
          "ph": "I speak English …",
          "ex": "I speak English slowly, but I try hard."
        },
        {
          "q": "What do you do well?",
          "ph": "I … well.",
          "ex": "I cook well and I sing loudly in the shower."
        }
      ]
    }
  }
};
