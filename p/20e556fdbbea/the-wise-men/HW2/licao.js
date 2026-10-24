/* THE WISE MEN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: perguntas no passado com did; Who sujeito x objeto. Bíblia (WEB, ao pé da letra, conferido em ebible.org/eng-web e engwebu): Mateus 2:2 (Out loud), 2:10 (Listen), 2:12 (Você). Nenhum versículo no Focus nem marcado como errado; nada da Bíblia vira falsa opção. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-wise-men",
  "titulo": "The Wise Men",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/20e556fdbbea/the-wise-men/img/live-estrela.webp",
  "alvo": "past questions: Where / What / Why / How did + subject + plain verb (Where did they go?); subject questions with no did (Who saw the star? What happened?) versus object questions (Who did Herod call?); never did + past (did they went), never no did (Where they went?)",
  "abrir": "Think of a long trip. Where did you go?",
  "fecho": "<b>Where / What / Why did</b> + subject + the plain verb: <i>Where did they go?</i> The past is in <b>did</b>, so the verb stays plain. <b>Who</b> is the doer: no <i>did</i>: <i>Who saw the star?</i> <b>Who</b> is the other one: <i>Who did Herod call?</i>",
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
      "sub": "Mia tells Leo the story of the wise men. She quotes Matthew 2:10. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/20e556fdbbea/the-wise-men/img/live-caravana.webp",
      "leg": "A road under one star",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, what are you reading?"
        },
        {
          "quem": "mia",
          "t": "A story about wise men. They saw a new star in the east, so they traveled to Jerusalem."
        },
        {
          "quem": "leo",
          "t": "What did they ask in Jerusalem?"
        },
        {
          "quem": "mia",
          "t": "They asked where the new king was. King Herod heard it, and he was troubled."
        },
        {
          "quem": "leo",
          "t": "Who called the wise men in secret?"
        },
        {
          "quem": "mia",
          "t": "Herod did. He wanted to know when the star appeared. Then he sent them to Bethlehem."
        },
        {
          "quem": "leo",
          "t": "What happened when they saw the star again?"
        },
        {
          "quem": "mia",
          "t": "The Bible says, “When they saw the star, they rejoiced with exceedingly great joy.”"
        },
        {
          "quem": "leo",
          "t": "Where did the star stop?"
        },
        {
          "quem": "mia",
          "t": "It stopped over the house where the child was. The wise men gave him gold, frankincense and myrrh."
        },
        {
          "quem": "leo",
          "t": "Why did they go home another way?"
        },
        {
          "quem": "mia",
          "t": "They had a warning in a dream."
        }
      ],
      "perguntas": [
        {
          "q": "Who called the wise men in secret?",
          "op": [
            "King Herod",
            "The star",
            "Mia"
          ],
          "a": 0,
          "por": "Herod did. He wanted to know when the star appeared."
        },
        {
          "q": "Where did the star stop?",
          "op": [
            "Over the house where the child was",
            "In Jerusalem",
            "On the road"
          ],
          "a": 0,
          "por": "It stopped over the house where the child was."
        },
        {
          "q": "Why did they go home another way?",
          "op": [
            "They had a warning in a dream",
            "They lost the road",
            "They were hungry"
          ],
          "a": 0,
          "por": "They had a warning in a dream."
        }
      ]
    },
    "out": {
      "sub": "Three sentences. The third is from the Bible: Matthew 2:2 (World English Bible). Hear it, then say it.",
      "frases": [
        {
          "t": "Who saw the star in the east?",
          "img": "https://wolf-labs.pages.dev/p/20e556fdbbea/the-wise-men/img/live-estrela.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Where did Herod send the wise men?",
          "img": "https://wolf-labs.pages.dev/p/20e556fdbbea/the-wise-men/img/live-caravana.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Where is he who is born King of the Jews?",
          "img": "https://wolf-labs.pages.dev/p/20e556fdbbea/the-wise-men/img/live-casa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Questions in the past. Four quick ones.",
      "regra": "<b>Where / What / Why did</b> + subject + plain verb · <b>Who saw</b>? (the doer, no did) · <b>Who did</b> Herod <b>call</b>? · never <i>did + past</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Why did Herod call the wise men",
          "aceita": [],
          "d": "Dica: pergunta no passado: <b>Why did</b> + sujeito + verbo limpo (call)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Where they went after Jerusalem?",
          "r": "Where did they go after Jerusalem?",
          "aceita": [],
          "d": "Dica: a pergunta pede <b>did</b>, e o verbo fica limpo: go, não went."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "What did Herod asked the wise men?",
          "r": "What did Herod ask the wise men?",
          "aceita": [],
          "d": "Dica: com <b>did</b>, o verbo fica limpo: ask, não asked."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Who did see the star?",
          "r": "Who saw the star?",
          "aceita": [],
          "d": "Dica: <b>Who</b> é quem faz: sem <b>did</b>. A frase já é a pergunta."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/20e556fdbbea/the-wise-men/img/live-presentes.webp",
      "leg": "Gifts on a red cloth, a candle",
      "pede": "Look at the picture: gifts on a red cloth and a candle. Write 2 or 3 questions about the wise men. Use <b>Where did …?</b>, <b>What did …?</b>, <b>Why did …?</b> or <b>Who …?</b>",
      "ph": "What did the wise men …? Where did they …?",
      "ex": "What did the wise men give the child? Where did they find him? Who saw the star?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Matthew 2:12 says, “Being warned in a dream not to return to Herod, they went back to their own country another way.” Think of a trip you made. Did you go back the same way? Why or why not?",
          "ph": "I went back … because …",
          "ex": "Yes, I did. I went back the same way because it was the fastest road."
        },
        {
          "q": "Where did you go on your last trip? What did you take with you?",
          "ph": "I went to … I took …",
          "ex": "I went to my grandmother's house. I took a cake."
        }
      ]
    }
  }
};
