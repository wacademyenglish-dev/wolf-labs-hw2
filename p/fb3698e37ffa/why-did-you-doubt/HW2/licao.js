/* WHY DID YOU DOUBT? · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: terceira condicional e condicional mista. Versículos (WEB, ao pé da letra): Matthew 14:30 (Listen), Matthew 14:32 (Out loud), Matthew 14:29 (Você). Nada da Bíblia é marcado como errado. B2: nenhum português. */
window.HW2 = {
  "id": "why-did-you-doubt",
  "titulo": "Why Did You Doubt?",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/fb3698e37ffa/why-did-you-doubt/img/live-barco.webp",
  "alvo": "third conditional (If he had looked, he would have sunk; past participle, never would in the if-clause) and mixed conditional (If he hadn't stepped out, he wouldn't be here now); never If he wouldn't have, would have sank, If he didn't look ... wouldn't have",
  "abrir": "What would your life be like now if you had chosen a different path?",
  "fecho": "<b>Third:</b> <i>If + had + past participle, would have + past participle.</i> <i>If he hadn't looked at the wind, he wouldn't have been afraid.</i> Never <i>would</i> in the <i>if</i> part. <b>Mixed:</b> past cause, now result: <i>If I hadn't moved, I wouldn't be here now.</i>",
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
      "sub": "Mia and Leo wait by a stormy lake. She reads Matthew 14:30. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/fb3698e37ffa/why-did-you-doubt/img/live-calma.webp",
      "leg": "A lake under a dark sky",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the wind is strong today. We shouldn't take the boat out."
        },
        {
          "quem": "mia",
          "t": "You're right. If we had left an hour ago, we would have had calm water."
        },
        {
          "quem": "leo",
          "t": "If you hadn't stopped for coffee, we would be on the lake now."
        },
        {
          "quem": "mia",
          "t": "Ha! If I hadn't stopped, you would be complaining about being hungry."
        },
        {
          "quem": "leo",
          "t": "True. What are you reading?"
        },
        {
          "quem": "mia",
          "t": "A story about Peter on the water. Listen to Matthew chapter fourteen, verse thirty."
        },
        {
          "quem": "mia",
          "t": "But when he saw that the wind was strong, he was afraid, and beginning to sink, he cried out, saying, “Lord, save me!”"
        },
        {
          "quem": "leo",
          "t": "Poor Peter. If he hadn't looked at the wind, he wouldn't have been afraid."
        },
        {
          "quem": "mia",
          "t": "Maybe. But if he hadn't stepped out of the boat, he wouldn't have walked on the water at all."
        },
        {
          "quem": "leo",
          "t": "That's a good point. If he had stayed inside, he would never have known what it feels like to walk on water."
        },
        {
          "quem": "mia",
          "t": "Exactly. Sometimes the scary step is the one that changes everything."
        }
      ],
      "perguntas": [
        {
          "q": "Why aren't Mia and Leo on the lake?",
          "op": [
            "The wind is too strong",
            "Their boat is broken",
            "It is too late"
          ],
          "a": 0,
          "por": "The wind is strong today. We shouldn't take the boat out."
        },
        {
          "q": "What does Mia say about Peter and the boat?",
          "op": [
            "If he hadn't stepped out, he wouldn't have walked on the water",
            "If he had stayed, he would have sunk",
            "If he hadn't stepped out, he would have been home"
          ],
          "a": 0,
          "por": "If he hadn't stepped out of the boat, he wouldn't have walked on the water at all."
        },
        {
          "q": "What does Leo say would have happened if Peter had stayed inside?",
          "op": [
            "He would never have known what it feels like to walk on water",
            "He would have rowed home early",
            "He would have missed the storm"
          ],
          "a": 0,
          "por": "If he had stayed inside, he would never have known what it feels like to walk on water."
        }
      ]
    },
    "out": {
      "sub": "Three sentences. The third is from the Bible: Matthew 14:32 (World English Bible). Hear it, then say it.",
      "frases": [
        {
          "t": "If he hadn't looked at the wind, he wouldn't have been afraid.",
          "img": "https://wolf-labs.pages.dev/p/fb3698e37ffa/why-did-you-doubt/img/live-barco.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If we had left earlier, we would have missed the storm.",
          "img": "https://wolf-labs.pages.dev/p/fb3698e37ffa/why-did-you-doubt/img/live-calma.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "When they got up into the boat, the wind ceased.",
          "img": "https://wolf-labs.pages.dev/p/fb3698e37ffa/why-did-you-doubt/img/live-capa2.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Third and mixed conditionals. Four quick ones.",
      "regra": "<b>If + had + participle, would have + participle</b> · never <i>would</i> in the <i>if</i> part · mixed: past cause, <b>would + verb</b> for now.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If he hadn't looked, he wouldn't have sunk.",
          "aceita": [],
          "d": "Hint: <b>hadn't</b> + participle in the <i>if</i> part, <b>wouldn't have</b> + participle in the result."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If I would have known, I would have helped.",
          "r": "If I had known, I would have helped.",
          "aceita": [],
          "d": "Hint: no <b>would</b> in the <i>if</i> part. Use <b>had</b> + participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She would have sank without the rope.",
          "r": "She would have sunk without the rope.",
          "aceita": [],
          "d": "Hint: <b>sink – sank – sunk</b>. After <b>have</b>, use the participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If you left earlier, you wouldn't have missed the bus.",
          "r": "If you had left earlier, you wouldn't have missed the bus.",
          "aceita": [
            "If you'd left earlier, you wouldn't have missed the bus."
          ],
          "d": "Hint: it is about the past, so the <i>if</i> part needs <b>had</b> + participle."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/fb3698e37ffa/why-did-you-doubt/img/live-barco.webp",
      "leg": "A small boat with a lantern on a dark lake",
      "pede": "Look at the picture: a small boat with a lantern on a dark lake. Write 2 or 3 sentences about a risk you took (or did not take). What would have happened if you hadn't? Use <b>if … had …, … would have …</b>.",
      "ph": "If I hadn't …, I would have …",
      "ex": "If I hadn't changed jobs last year, I would have stayed in the same place. I wouldn't have met my friends here."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Matthew 14:29 says, “Peter stepped down from the boat and walked on the waters to come to Jesus.” What was one step you took that changed your life? What would have happened if you hadn't taken it?",
          "ph": "If I hadn't …, I would have …",
          "ex": "If I hadn't moved to a new city, I wouldn't have found my job. I would have stayed with my old routine."
        },
        {
          "q": "What is something you are glad you did? What would your life be like now if you hadn't done it?",
          "ph": "If I hadn't …, I wouldn't …",
          "ex": "If I hadn't started English classes, I wouldn't feel so confident now."
        }
      ]
    }
  }
};
