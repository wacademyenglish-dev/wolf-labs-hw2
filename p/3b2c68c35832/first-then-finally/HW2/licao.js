/* FIRST, THEN, FINALLY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past simple em ordem: First / Then / Finally. A2: dicas em português só nas notas (d). Só imagens live-* (escuras). */
window.HW2 = {
  "id": "first-then-finally",
  "titulo": "First, Then, Finally",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/3b2c68c35832/first-then-finally/img/live-capa.webp",
  "alvo": "telling a story in the past, in order: First → Then / After that / Next → Finally / In the end; irregular verbs (went, threw, met, came, fell); didn't + the plain verb; after needs something after it (After that, ...)",
  "abrir": "What did you do this morning? Three things, in order.",
  "fecho": "A story = the past, in order: <b>First</b> → <b>Then / After that</b> → <b>Finally / In the end</b>. Irregular verbs have no -ed: <i>went, threw, met, came</i>. No: <b>didn't</b> + the plain verb: <i>I didn't go.</i>",
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
      "sub": "Mia asks Leo about his Sunday. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/3b2c68c35832/first-then-finally/img/live-parque.webp",
      "leg": "A park at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, tell me about your Sunday. What did you do first?"
        },
        {
          "quem": "leo",
          "t": "First, I woke up late and went to the park."
        },
        {
          "quem": "mia",
          "t": "And then?"
        },
        {
          "quem": "leo",
          "t": "Then I sat on a bench and threw a coin into the fountain."
        },
        {
          "quem": "mia",
          "t": "What did you wish for?"
        },
        {
          "quem": "leo",
          "t": "I didn't say it out loud! After that, I met an old friend. We had coffee."
        },
        {
          "quem": "mia",
          "t": "Nice. And in the end?"
        },
        {
          "quem": "leo",
          "t": "In the end, we said goodbye and I came home. Finally, I fell asleep on the sofa."
        },
        {
          "quem": "mia",
          "t": "A perfect Sunday!"
        }
      ],
      "perguntas": [
        {
          "q": "What did Leo do first?",
          "op": [
            "He went to the park",
            "He had coffee",
            "He met a friend"
          ],
          "a": 0,
          "por": "First, I woke up late and went to the park."
        },
        {
          "q": "What did Leo throw into the fountain?",
          "op": [
            "A coin",
            "A ball",
            "A key"
          ],
          "a": 0,
          "por": "I sat on a bench and threw a coin into the fountain."
        },
        {
          "q": "What happened finally?",
          "op": [
            "He fell asleep on the sofa",
            "He met an old friend",
            "He went to the park"
          ],
          "a": 0,
          "por": "Finally, I fell asleep on the sofa."
        }
      ]
    },
    "out": {
      "sub": "Three steps of a story. Hear it, then say it.",
      "frases": [
        {
          "t": "First, I went to the park.",
          "img": "https://wolf-labs.pages.dev/p/3b2c68c35832/first-then-finally/img/live-parque.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Then I threw a coin into the fountain.",
          "img": "https://wolf-labs.pages.dev/p/3b2c68c35832/first-then-finally/img/live-fonte.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "In the end, we sat on a bench.",
          "img": "https://wolf-labs.pages.dev/p/3b2c68c35832/first-then-finally/img/live-banco.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "In order, in the past. Four quick ones.",
      "regra": "<b>First</b> → <b>Then / After that</b> → <b>Finally / In the end</b> · the past · irregular: <b>went, threw, met</b> · <b>didn't</b> + plain verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "After that, she threw a coin into the fountain.",
          "aceita": [],
          "d": "Dica: <b>After that</b> + passado: <b>threw</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Yesterday I goed to the park.",
          "r": "Yesterday I went to the park.",
          "aceita": [],
          "d": "Dica: <b>go</b> é irregular: o passado é <b>went</b>, sem -ed."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I didn't went to school.",
          "r": "I didn't go to school.",
          "aceita": [],
          "d": "Dica: depois de <b>didn't</b>, o verbo fica limpo: go."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "First, I had coffee. After, I went home.",
          "r": "First, I had coffee. After that, I went home.",
          "aceita": [
            "First, I had coffee. Then I went home."
          ],
          "d": "Dica: <b>After</b> sozinho precisa de algo depois: <b>After that</b> ou <b>Then</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/3b2c68c35832/first-then-finally/img/live-moedas.webp",
      "leg": "Coins in the water",
      "pede": "Look at the picture: coins in the water. Write 2 or 3 sentences about your last Sunday, in order. Use <b>First</b>, <b>Then / After that</b> and <b>Finally</b>.",
      "ph": "First, I …",
      "ex": "First, I woke up at eight. Then I went to the park. Finally, I came home and slept."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you do this morning? Say two things, in order.",
          "ph": "First, I … Then I …",
          "ex": "First, I had breakfast. Then I took the bus to work."
        },
        {
          "q": "Tell me about one thing you didn't do yesterday.",
          "ph": "Yesterday I didn't …",
          "ex": "Yesterday I didn't cook. I ordered a pizza."
        }
      ]
    }
  }
};
