/* SLOWLY, CAREFULLY, BADLY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: adverbs of manner. A2: dicas em português só nas notas (d). Sem imagens (fotofobia). */
window.HW2 = {
  "id": "slowly-carefully-badly",
  "titulo": "Slowly, Carefully, Badly",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/98cc79413719/slowly-carefully-badly/img/live-capa.webp",
  "alvo": "adverbs of manner: adjective + -ly (slowly, carefully, loudly, badly); the irregular ones: well, fast, hard, late; position after the object (speaks English well); never fastly, plays good",
  "abrir": "Do you eat fast or slowly?",
  "fecho": "<b>How?</b> adjective + <b>-ly</b>: <i>slowly, carefully, loudly, badly</i>. Four are special: <b>well, fast, hard, late</b>. The adverb goes after the object: <i>She speaks English very well.</i> Never <i>fastly</i>, never <i>plays good</i>.",
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
      "sub": "Mia and Leo in a kitchen. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/98cc79413719/slowly-carefully-badly/img/live-cozinha.webp",
      "leg": "In the kitchen",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you cook so slowly! The guests are hungry."
        },
        {
          "quem": "leo",
          "t": "I'm cooking carefully. Last time I cooked fast and I burned everything."
        },
        {
          "quem": "mia",
          "t": "True. You cook well, but you work too slowly. Look, Tom works fast."
        },
        {
          "quem": "leo",
          "t": "Tom works fast, but he cuts the onions badly."
        },
        {
          "quem": "mia",
          "t": "And he talks loudly in the kitchen."
        },
        {
          "quem": "leo",
          "t": "Yes, he sings loudly too. Don't tell him!"
        },
        {
          "quem": "mia",
          "t": "I won't. Taste this. Does it taste good?"
        },
        {
          "quem": "leo",
          "t": "It tastes great. You look happy."
        },
        {
          "quem": "mia",
          "t": "I am. I worked hard today, and I finished late."
        },
        {
          "quem": "leo",
          "t": "Then sit down. I'll serve dinner quietly."
        }
      ],
      "perguntas": [
        {
          "q": "Why does Leo cook carefully?",
          "op": [
            "He burned everything when he cooked fast",
            "He is very hungry",
            "Tom told him to"
          ],
          "a": 0,
          "por": "Last time I cooked fast and I burned everything."
        },
        {
          "q": "How does Tom cut the onions?",
          "op": [
            "Badly",
            "Carefully",
            "Slowly"
          ],
          "a": 0,
          "por": "He cuts the onions badly."
        },
        {
          "q": "How did Mia work today?",
          "op": [
            "Hard, and she finished late",
            "Fast, and she finished early",
            "Slowly, and she stopped"
          ],
          "a": 0,
          "por": "I worked hard today, and I finished late."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about how people do things. Hear it, then say it.",
      "frases": [
        {
          "t": "Leo cooks slowly but carefully.", "img": "https://wolf-labs.pages.dev/p/98cc79413719/slowly-carefully-badly/img/live-cozinha.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Tom sings loudly in the kitchen.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She speaks English very well.", "img": "https://wolf-labs.pages.dev/p/98cc79413719/slowly-carefully-badly/img/live-cabine.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Adjective or adverb? Four quick ones.",
      "regra": "<b>adjective + -ly</b> = how · <b>well, fast, hard, late</b> are special · adverb after the object · never <b>fastly</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "He drives the car very carefully.",
          "aceita": [],
          "d": "Dica: <b>how?</b> adjetivo + <b>-ly</b>: <b>carefully</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: fast does not change.",
          "mostra": "She runs fastly.",
          "r": "She runs fast.",
          "aceita": [],
          "d": "Dica: <b>fast</b> não muda. 'Fastly' não existe."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the adverb of good.",
          "mostra": "He plays the guitar good.",
          "r": "He plays the guitar well.",
          "aceita": [],
          "d": "Dica: o advérbio de <b>good</b> é <b>well</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the place of the adverb.",
          "mostra": "She speaks very well English.",
          "r": "She speaks English very well.",
          "aceita": [],
          "d": "Dica: verbo + objeto + advérbio. Nada entre o verbo e o objeto."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Write 2 or 3 sentences about how you do real things: one you do <b>fast</b>, one you do <b>well</b>, one you do <b>badly</b>.",
      "ph": "I eat …",
      "ex": "I eat very fast. I sing well. I dance badly, but I enjoy it."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How do you walk, cook or drive? Say one.",
          "ph": "I walk …",
          "ex": "I walk fast, and my friends can't follow me."
        },
        {
          "q": "Who in your family works hard? How?",
          "ph": "My … works …",
          "ex": "My father works hard. He gets up very early."
        }
      ]
    }
  }
};
