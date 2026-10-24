/* TOO SHORT TO SEE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: too / enough / comparativos. Bíblia (WEB, ao pé da letra, conferido em ebible.org/eng-web e engwebu): Lucas 19:2 (Você), 19:3 (Listen), 19:6 (Out loud). Nenhum versículo no Focus nem marcado como errado; nada da Bíblia vira falsa opção. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "too-short-to-see",
  "titulo": "Too Short to See",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4946559346e0/too-short-to-see/img/live-sicomoro.webp",
  "alvo": "too + adjective (+ to + verb): too short to see; adjective + enough (+ to): tall enough to reach; comparatives: taller than, more money than, better than; never very short for see, enough tall, more tall, taller that",
  "abrir": "What is too high for you to reach?",
  "fecho": "<b>Too</b> + adjective + <b>to</b> + verb: <i>too short to see</i>. Adjective + <b>enough</b>: <i>tall enough to reach</i>, never <i>enough tall</i>. Comparing: <i>taller than</i>, <i>better than</i>, <i>more money than</i>. Never <i>more tall</i>, never <i>taller that</i>.",
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
      "sub": "Mia tells Leo about Zacchaeus. She quotes Luke 19:3. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/4946559346e0/too-short-to-see/img/live-sicomoro.webp",
      "leg": "A big tree by a quiet street",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, who is the man in your story?"
        },
        {
          "quem": "mia",
          "t": "His name is Zacchaeus. He lives in Jericho, and he is rich. Luke 19:3 says, “He was trying to see who Jesus was, and couldn’t because of the crowd, because he was short.”"
        },
        {
          "quem": "leo",
          "t": "So he was too short?"
        },
        {
          "quem": "mia",
          "t": "Yes. He was too short to see over the crowd, and the crowd was too big to go through."
        },
        {
          "quem": "leo",
          "t": "What did he do?"
        },
        {
          "quem": "mia",
          "t": "He ran ahead and climbed a sycamore tree. Now he was taller than all the people."
        },
        {
          "quem": "leo",
          "t": "Was the tree high enough?"
        },
        {
          "quem": "mia",
          "t": "Yes! It was high enough to see the road. He had more money than most people, but this was better than money."
        },
        {
          "quem": "leo",
          "t": "Why was it better?"
        },
        {
          "quem": "mia",
          "t": "Because Jesus stopped under the tree and looked up. He called him by his name."
        }
      ],
      "perguntas": [
        {
          "q": "Why couldn't Zacchaeus see Jesus?",
          "op": [
            "He was too short to see over the crowd",
            "He was too tired",
            "He was too far from the road"
          ],
          "a": 0,
          "por": "He was too short to see over the crowd."
        },
        {
          "q": "Where did Zacchaeus climb?",
          "op": [
            "A sycamore tree",
            "A house",
            "A wall"
          ],
          "a": 0,
          "por": "He ran ahead and climbed a sycamore tree."
        },
        {
          "q": "Was the tree high enough?",
          "op": [
            "Yes, it was high enough to see the road",
            "No, it was too low",
            "No, it was too small"
          ],
          "a": 0,
          "por": "It was high enough to see the road."
        }
      ]
    },
    "out": {
      "sub": "Three sentences. The third is from the Bible: Luke 19:6 (World English Bible). Hear it, then say it.",
      "frases": [
        {
          "t": "Zacchaeus was too short to see Jesus.",
          "img": "https://wolf-labs.pages.dev/p/4946559346e0/too-short-to-see/img/live-sicomoro.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "He had more money than the people in the street.",
          "img": "https://wolf-labs.pages.dev/p/4946559346e0/too-short-to-see/img/live-moedas.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "He hurried, came down, and received him joyfully.",
          "img": "https://wolf-labs.pages.dev/p/4946559346e0/too-short-to-see/img/live-casa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Too, enough or a comparison? Four quick ones.",
      "regra": "<b>too</b> + adjective + <b>to</b> + verb · adjective + <b>enough</b> · <b>taller than</b> · <b>more … than</b> · never <i>more tall</i>, never <i>enough tall</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The tree was high enough to see the road.",
          "aceita": [],
          "d": "Dica: adjetivo + <b>enough</b>: <b>high enough</b>, nunca 'enough high'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "He was very short for see the crowd.",
          "r": "He was too short to see the crowd.",
          "aceita": [],
          "d": "Dica: o certo é <b>too short to</b> + verbo limpo, nunca 'very short for see'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The tree was enough tall to climb.",
          "r": "The tree was tall enough to climb.",
          "aceita": [],
          "d": "Dica: o <b>enough</b> vem depois do adjetivo: tall enough."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The tree is more tall than the house.",
          "r": "The tree is taller than the house.",
          "aceita": [],
          "d": "Dica: adjetivo curto fica com -er: <b>taller</b>, nunca 'more tall'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4946559346e0/too-short-to-see/img/live-moedas.webp",
      "leg": "Coins and a small lamp on a table",
      "pede": "Look at the picture: coins and a small lamp on a table. Write 2 or 3 sentences about it. Use <b>too</b>, <b>enough</b> or a comparison (<b>more … than</b>, <b>bigger than</b>).",
      "ph": "There are too many … There is enough …",
      "ex": "There are more coins than plates. There is enough money to buy bread. The lamp is too small to light the room."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Luke 19:2 says, “There was a man named Zacchaeus. He was a chief tax collector, and he was rich.” Think of a time you were too short, too small or too young to do something. What happened?",
          "ph": "I was too … to …",
          "ex": "I was too short to reach the top shelf, so I used a chair."
        },
        {
          "q": "What is too expensive for you right now? What is cheap enough?",
          "ph": "… is too expensive. … is cheap enough.",
          "ex": "A new car is too expensive for me. A small phone is cheap enough."
        }
      ]
    }
  }
};
