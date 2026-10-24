/* THE LOCAL PAPER · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Revisão A2: mistura das unidades da aula. A2: dicas em português só nas notas (d). Sem imagens. */
window.HW2 = {
  "id": "a2-review-the-local-paper",
  "titulo": "The Local Paper",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/10012d645bc3/a2-review-the-local-paper/img/live-capa.webp",
  "alvo": "Unit 2 review, stories in the past: past simple regular and irregular (saw, called, went), did / didn't + base verb, Who called...? (subject, no did) x Who did you call? (object), first / then / after that / finally, so / because",
  "abrir": "What did you do last weekend?",
  "fecho": "Past: <b>called, saw, went</b>. Questions and no: <b>did / didn't + base verb</b> (<i>He didn't go.</i>). Subject question: <b>Who called?</b> (no did). Order: <b>First, Then, After that, Finally</b>.",
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
      "sub": "Mia is a reporter and Leo saw a story. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/10012d645bc3/a2-review-the-local-paper/img/live-capa.webp",
      "leg": "At the local paper",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you were on Main Street yesterday. What did you see?"
        },
        {
          "quem": "leo",
          "t": "I saw a dog on the bakery roof! First, it jumped out of a truck."
        },
        {
          "quem": "mia",
          "t": "Who called the firefighters?"
        },
        {
          "quem": "leo",
          "t": "The baker called them. She didn't want the dog to fall."
        },
        {
          "quem": "mia",
          "t": "And who did you call?"
        },
        {
          "quem": "leo",
          "t": "I called my brother, because he has a ladder."
        },
        {
          "quem": "mia",
          "t": "Did he come?"
        },
        {
          "quem": "leo",
          "t": "Yes, he did. Then he climbed up and took the dog down."
        },
        {
          "quem": "mia",
          "t": "Great story! What happened after that?"
        },
        {
          "quem": "leo",
          "t": "Finally, everybody clapped, and the dog ate a big piece of cake."
        }
      ],
      "perguntas": [
        {
          "q": "Why did the baker call the firefighters?",
          "op": [
            "She didn't want the dog to fall",
            "Her shop was on fire",
            "She lost her keys"
          ],
          "a": 0,
          "por": "The baker called them. She didn't want the dog to fall."
        },
        {
          "q": "Who did Leo call?",
          "op": [
            "The baker",
            "His brother",
            "The firefighters"
          ],
          "a": 1,
          "por": "I called my brother, because he has a ladder."
        },
        {
          "q": "What happened at the end?",
          "op": [
            "The ladder broke",
            "The dog ran away",
            "Everybody clapped"
          ],
          "a": 2,
          "por": "Finally, everybody clapped."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the story. Hear it, then say it.",
      "frases": [
        {
          "t": "First, the dog jumped out of a truck.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The baker called the firefighters.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Then my brother climbed up and took the dog down.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Past simple, did / didn't, connectors. Four quick ones.",
      "regra": "<b>did / didn't</b> + base verb (<i>He didn't go</i>) · <b>Who called?</b> has no did · <b>After that</b>, not <i>after</i> alone.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Who did you call after that?",
          "aceita": [],
          "d": "Dica: pergunta de objeto: <b>Who did you call</b>?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: a subject question has no did.",
          "mostra": "Who did call the firefighters?",
          "r": "Who called the firefighters?",
          "aceita": [],
          "d": "Dica: quando <b>Who</b> é o sujeito, não use <b>did</b>: <b>Who called</b>?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: after didn't, the verb is clean.",
          "mostra": "He didn't went home.",
          "r": "He didn't go home.",
          "aceita": [
            "He did not go home."
          ],
          "d": "Dica: depois de <b>didn't</b>, o verbo fica no infinitivo: <b>go</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one connector is not complete.",
          "mostra": "After, he climbed the ladder.",
          "r": "After that, he climbed the ladder.",
          "aceita": [],
          "d": "Dica: <b>After that</b>, completo, abre a frase."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Write 2 or 3 sentences about something that happened yesterday. Use <b>First</b>, <b>Then</b> and <b>Finally</b>.",
      "ph": "Yesterday I …",
      "ex": "Yesterday I went to the market. First, I bought bread. Finally, I met a friend."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you do last weekend?",
          "ph": "Last weekend I …",
          "ex": "Last weekend I went to the beach."
        },
        {
          "q": "Who did you call or text yesterday?",
          "ph": "Yesterday I called …",
          "ex": "I called my sister yesterday."
        }
      ]
    }
  }
};
